#!/usr/bin/env python3
import re
import json

# Image-based questions from RTF (only these 15)
image_questions = {
    ('g1', 'C'): "Use each of the words to form the four kinds of sentences. Follow the example.",
    ('g2', 'A'): "Match the columns to complete the sentences.",
    ('g2', 'B'): "Read each group of words and identify whether it is the subject or the predicate. Then, supply the missing part. Follow the example.",
    ('g3', 'B'): "Colour the boxes containing nouns as per the key.",
    ('g3', 'C'): "Identify whether these are common nouns or abstract nouns. Then, use each to make sentences.",
    ('g3', 'E'): "With the help of the clues, complete the crossword with suitable collective nouns.",
    ('g5', 'A'): "Match the columns.",
    ('g7', 'B'): "In each of the sentences, the definite article has been omitted. Write the words between which the article has to be inserted in the correct columns. In case there is no word before the article, insert an em dash. Follow the example.",
    ('g8', 'H'): "In each set, choose the correct sentence.",
    ('g11', 'B'): "Complete the table.",
    ('g11', 'C'): "Choose five words from the above exercise and use them to make sentences.",
    ('g18', 'A'): "In each set, tick the sentence that has been joined correctly using coordinating conjunctions.",
    ('v4', 'A'): "Match the synonyms and antonyms.",
    ('comp8', 'A'): "Write picture composition for the following.",
    ('comp8', 'B'): "Write picture composition for the following.",
}

def parse_txt_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    chapters = {}
    current_chapter = None
    current_exercise = None
    current_questions = []
    lines = content.split('\n')
    
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        
        # Match chapter header
        chapter_match = re.match(r'^Grammar – Chapter (\d+): (.+)$', line)
        if chapter_match:
            # Save previous exercise
            if current_chapter and current_exercise:
                if current_chapter not in chapters:
                    chapters[current_chapter] = {}
                chapters[current_chapter][current_exercise] = current_questions
            
            ch_num = int(chapter_match.group(1))
            ch_name = chapter_match.group(2)
            current_chapter = f"g{ch_num}"
            current_exercise = None
            current_questions = []
            i += 1
            continue
        
        # Match exercise header (e.g., "A – Fill in the blanks...")
        exercise_match = re.match(r'^([A-Z]) – (.+)$', line)
        if exercise_match and current_chapter:
            # Save previous exercise
            if current_exercise:
                if current_chapter not in chapters:
                    chapters[current_chapter] = {}
                chapters[current_chapter][current_exercise] = current_questions
            
            current_exercise = exercise_match.group(1)
            instruction = exercise_match.group(2)
            current_questions = []
            
            # Check if this is an image-based question
            key = (current_chapter, current_exercise)
            if key in image_questions:
                # Image-based worksheet
                img_path = f"../../../assets/images/test-generator/class-6/Grammar - Chapter {current_chapter[1:]} {current_exercise}.png"
                current_questions.append({
                    'instruction': image_questions[key],
                    'image': img_path,
                    'questions': [{'text': '[Image Exercise]', 'answer': 'vary'}]
                })
            else:
                # Start collecting text questions
                current_questions.append({
                    'instruction': f"{current_exercise} – {instruction}",
                    'questions': []
                })
            
            i += 1
            continue
        
        # Collect questions (numbered lines)
        if current_chapter and current_exercise and line:
            # Check if it's a numbered question
            q_match = re.match(r'^(\d+)\.\s*(.+)$', line)
            if q_match:
                question_text = q_match.group(2)
                # For now, set answer as "vary"
                if current_questions and 'questions' in current_questions[-1]:
                    current_questions[-1]['questions'].append({
                        'text': question_text,
                        'answer': 'vary'
                    })
        
        i += 1
    
    # Save last exercise
    if current_chapter and current_exercise:
        if current_chapter not in chapters:
            chapters[current_chapter] = {}
        chapters[current_chapter][current_exercise] = current_questions
    
    return chapters

# Parse the file
chapters = parse_txt_file('/Users/prabishdangi/Desktop/Personal/SilverStone Captial/offline-flipbook/class6-question-bank.txt')

# Generate JavaScript structure
print("const questionBank = {")
for ch_id in sorted(chapters.keys(), key=lambda x: int(x[1:])):
    ch_num = ch_id[1:]
    print(f"  {ch_id}: {{")
    print(f"    name: \"Ch {ch_num}: Grammar Chapter {ch_num}\",")
    print(f"    worksheets: [")
    
    for ex_id in sorted(chapters[ch_id].keys()):
        for worksheet in chapters[ch_id][ex_id]:
            instruction = worksheet['instruction'].replace('"', '\\"')
            print(f"      {{")
            print(f"        instruction: \"{instruction}\",")
            
            if 'image' in worksheet:
                print(f"        image: \"{worksheet['image']}\",")
            
            print(f"        questions: [")
            for q in worksheet['questions']:
                text = q['text'].replace('"', '\\"')
                answer = q['answer'].replace('"', '\\"') if isinstance(q['answer'], str) else q['answer']
                print(f"          {{ text: \"{text}\", answer: \"{answer}\" }},")
            print(f"        ],")
            print(f"      }},")
    
    print(f"    ],")
    print(f"  }},")
print("};")

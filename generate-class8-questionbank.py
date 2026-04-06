#!/usr/bin/env python3
import re

# No image-based exercises for Class 8 based on the txt file structure
IMAGE_EXERCISES = {}

def parse_question_bank(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Dictionary to hold all grammar chapters
    grammar_chapters = {}
    
    # Split content into lines
    lines = content.split('\n')
    
    current_chapter_num = None
    current_chapter_name = None
    current_exercise = None
    current_instruction = None
    current_questions = []
    
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        
        # Check for chapter header
        chapter_match = re.match(r'^Grammar – Chapter (\d+):\s*(.+)$', line)
        if chapter_match:
            # Save previous exercise if exists
            if current_chapter_num and current_exercise:
                save_exercise(grammar_chapters, current_chapter_num, current_exercise, 
                             current_instruction, current_questions, current_chapter_name)
            
            current_chapter_num = chapter_match.group(1)
            current_chapter_name = chapter_match.group(2)
            current_exercise = None
            current_instruction = None
            current_questions = []
            i += 1
            continue
        
        # Check for exercise header (A – instruction or A - instruction)
        # Handle both en-dash (–) and hyphen (-)
        exercise_match = re.match(r'^([A-Z])\s*[–-]\s*(.+)$', line)
        if exercise_match and current_chapter_num:
            # Save previous exercise if exists
            if current_exercise:
                save_exercise(grammar_chapters, current_chapter_num, current_exercise, 
                             current_instruction, current_questions, current_chapter_name)
            
            current_exercise = exercise_match.group(1)
            current_instruction = exercise_match.group(2)
            current_questions = []
            i += 1
            continue
        
        # Check for numbered questions
        if current_chapter_num and current_exercise and line:
            question_match = re.match(r'^(\d+)\.\s*(.+)$', line)
            if question_match:
                question_text = question_match.group(2)
                
                # Check if there are multiple lines for the question
                # Collect continuation lines (lines that don't start with number)
                full_question = question_text
                i += 1
                while i < len(lines):
                    next_line = lines[i].strip()
                    # Stop if we hit another numbered question, exercise, or chapter
                    if (re.match(r'^\d+\.', next_line) or 
                        re.match(r'^[A-Z]\s*[–-]', next_line) or
                        re.match(r'^Grammar – Chapter', next_line) or
                        not next_line):
                        break
                    full_question += ' ' + next_line
                    i += 1
                
                current_questions.append({
                    'text': full_question,
                    'answer': 'vary'
                })
                continue
        
        i += 1
    
    # Save last exercise
    if current_chapter_num and current_exercise:
        save_exercise(grammar_chapters, current_chapter_num, current_exercise, 
                     current_instruction, current_questions, current_chapter_name)
    
    return grammar_chapters

def save_exercise(chapters, chapter_num, exercise, instruction, questions, chapter_name):
    """Save an exercise to the chapters dictionary"""
    chapter_id = f'g{chapter_num}'
    
    if chapter_id not in chapters:
        chapters[chapter_id] = {
            'name': f'Ch {chapter_num}: {chapter_name}',
            'worksheets': [],
            'exercises_found': set()
        }
    
    # Track which exercises we've found
    chapters[chapter_id]['exercises_found'].add(exercise)
    
    # Check if this is an image-based exercise
    if (chapter_id, exercise) in IMAGE_EXERCISES:
        # Image-based worksheet
        img_path = f'../../../assets/images/test-generator/class-8/Grammar - Chapter {chapter_num} {exercise}.png'
        chapters[chapter_id]['worksheets'].append({
            'instruction': IMAGE_EXERCISES[(chapter_id, exercise)],
            'image': img_path,
            'questions': [{'text': '[Image Exercise]', 'answer': 'vary'}]
        })
    else:
        # Text-based worksheet
        # If there are questions, add them; otherwise, add a placeholder for exercises without numbered questions
        if questions:
            chapters[chapter_id]['worksheets'].append({
                'instruction': f'{exercise} – {instruction}',
                'questions': questions.copy()
            })
        else:
            # Exercise exists but has no numbered questions (e.g., fill-in paragraph)
            # Add a single question as placeholder
            chapters[chapter_id]['worksheets'].append({
                'instruction': f'{exercise} – {instruction}',
                'questions': [{'text': '[Complete the exercise as instructed]', 'answer': 'vary'}]
            })

def add_missing_image_exercises(chapters):
    """Add image-based exercises that weren't found in the txt file"""
    for (chapter_id, exercise), instruction in IMAGE_EXERCISES.items():
        if chapter_id in chapters:
            if exercise not in chapters[chapter_id]['exercises_found']:
                # This image exercise is missing, add it
                chapter_num = chapter_id[1:]
                img_path = f'../../../assets/images/test-generator/class-8/Grammar - Chapter {chapter_num} {exercise}.png'
                chapters[chapter_id]['worksheets'].append({
                    'instruction': instruction,
                    'image': img_path,
                    'questions': [{'text': '[Image Exercise]', 'answer': 'vary'}]
                })
    
    # Sort worksheets by exercise letter (A, B, C, etc.)
    for chapter_id in chapters:
        # Extract exercise letter from instruction or image path
        def get_exercise_letter(ws):
            if 'image' in ws:
                # Extract from image path: "Grammar - Chapter X Y.png" -> Y
                match = re.search(r'Chapter \d+ ([A-Z])\.png', ws['image'])
                return match.group(1) if match else 'Z'
            else:
                # Extract from instruction: "A – ..." or "A - ..." -> A
                match = re.match(r'^([A-Z])\s*[–-]', ws['instruction'])
                return match.group(1) if match else 'Z'
        
        chapters[chapter_id]['worksheets'].sort(key=get_exercise_letter)
    
    # Clean up the exercises_found tracking
    for chapter_id in chapters:
        if 'exercises_found' in chapters[chapter_id]:
            del chapters[chapter_id]['exercises_found']

def escape_js_string(s):
    """Escape string for JavaScript"""
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

def generate_javascript(chapters):
    """Generate JavaScript questionBank code"""
    js_lines = ['      const questionBank = {']
    
    # Sort chapters by number
    sorted_chapters = sorted(chapters.items(), key=lambda x: int(x[0][1:]))
    
    for chapter_id, chapter_data in sorted_chapters:
        js_lines.append(f'        {chapter_id}: {{')
        js_lines.append(f'          name: "{escape_js_string(chapter_data["name"])}",')
        js_lines.append(f'          worksheets: [')
        
        for worksheet in chapter_data['worksheets']:
            js_lines.append('            {')
            js_lines.append(f'              instruction: "{escape_js_string(worksheet["instruction"])}",')
            
            # Add image if present
            if 'image' in worksheet:
                js_lines.append(f'              image: "{worksheet["image"]}",')
            
            # Add questions
            js_lines.append('              questions: [')
            for question in worksheet['questions']:
                text = escape_js_string(question['text'])
                answer = escape_js_string(question['answer'])
                js_lines.append(f'                {{ text: "{text}", answer: "{answer}" }},')
            js_lines.append('              ],')
            
            js_lines.append('            },')
        
        js_lines.append('          ],')
        js_lines.append('        },')
    
    js_lines.append('      };')
    
    return '\n'.join(js_lines)

# Main execution
if __name__ == '__main__':
    txt_file = '/Users/prabishdangi/Desktop/Personal/SilverStone Captial/offline-flipbook/CLASS8 question bank.txt'
    
    print("Parsing Class 8 question bank...")
    chapters = parse_question_bank(txt_file)
    
    print("Adding missing image-based exercises...")
    add_missing_image_exercises(chapters)
    
    print(f"\nFound {len(chapters)} chapters")
    for ch_id, ch_data in sorted(chapters.items(), key=lambda x: int(x[0][1:])):
        print(f"  {ch_id}: {ch_data['name']} - {len(ch_data['worksheets'])} worksheets")
    
    print("\nGenerating JavaScript code...")
    js_code = generate_javascript(chapters)
    
    # Save to file
    output_file = '/Users/prabishdangi/Desktop/Personal/SilverStone Captial/offline-flipbook/class8-questionbank-generated.js'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_code)
    
    print(f"\nGenerated code saved to: {output_file}")
    print("\nFirst few lines of generated code:")
    print('\n'.join(js_code.split('\n')[:50]))

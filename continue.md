Now I have all the class-7 questions from the .txt file (read via system reminder). I have all 22 chapters completely. Let me now create the class-7.html test generator file.

Let me review all chapters and their questions:

Ch 1: Kinds of Sentences
W1 (Section A - 6 questions: Yes/No or Wh-Question identification, Section B - 7 questions: fill blanks to complete interrogative sentences)
W2 (10 questions: identify sentence kind)

Ch 2: Subject and Predicate
W1 (10 questions: complete with compound subjects - open-ended, lines: 2)

W2 (10 questions: complete with compound predicates - open-ended, lines: 2)

Ch 3: Subject-Verb Agreement
W1 (10 questions: choose correct verb form - options in brackets like (is/are))
W2 (5 questions: rewrite correctly - lines: 2)

Ch 4: Nouns
W1 (10 questions: underline nouns)
W2 (Section A: 4 questions - change noun form, Section B: 5 questions - fill masculine/feminine)

Ch 5: Pronouns
W1 (10 questions: underline pronouns)
W2 (5 questions: rewrite with correct pronouns - lines: 2)

Ch 6: Articles
W1 (11 questions: fill blanks with a, an, or the)
W2 (5 questions: rewrite omitting articles - lines: 2)

Ch 7: Adjectives
W1 (10 questions: underline adjectives and identify their type - inline blank)
W2 (10 questions: select the correct degree of adjective)

Ch 8: Non-Finite Verbs
W1 (10 questions: identify whether infinitive, participle, or gerund - inline blank)
W2 (1 passage question: complete with appropriate non-finite verbs - lines: 4)

Ch 9: Auxiliary Verbs
W1 (continuing through remaining chapters with similar worksheet structures)

Ch 10: The Present Tense
W1 (10 questions: fill in correct present tense forms)
W2 (5 multiple choice questions)

Ch 11: The Past Tense
W1 (8 questions: fill in verb forms)
W2 (5 multiple choice questions)

Ch 12: The Future Tense
W1 (10 questions: fill in future tense forms)
W2 (5 multiple choice questions)

Ch 13: Adverbs
W1 (10 questions: identify adverb types - inline blank)
W2 (Section A: 5 questions on adverb degrees, Section B: 4 questions on adverb placement)

Ch 14: (continuing with similar pattern)
W1 (11 questions: fill in prepositions)
W2 (10 questions: identify preposition types - inline blank)

Ch 15: Conjunctions
W1 (10 questions: fill in conjunctions)
W2 (5 multiple choice on correlative conjunctions)

Ch 16: Phrases and Clauses
W1 (10 questions: mark as clause or phrase - inline blank)
W2 (11 open-ended questions: fill with appropriate phrase or clause)

Ch 17: Synthesis of Sentences
W1 (5 questions: join sentences with specific directions)
W2 (5 questions: combine into simple sentences)

Ch 18: Transformation of Sentences
W1 (5 questions: interchange sentence types)
W2 (5 questions: transform as directed)

Ch 19: Conditional Sentences
W1 (10 questions: identify conditional type - inline blank)
W2 (10 questions: complete conditional sentences)

Ch 20: Active and Passive Voice
W1 (4 multiple choice on passive voice)
W2 (5 questions: fill in passive forms)

Ch 21: Direct and Indirect Speech
W1 (5 multiple choice on indirect speech)
W2 (5 questions: convert to indirect speech)

Ch 22: Punctuation and Capital Letters
W1 (5 questions: rewrite with proper capitalization)
W2 (5 questions: rewrite with correct punctuation)

Now I'm noting some special formatting considerations - Ch 3 W1 has bracketed options like "(is / are)" that function as multiple choice, Ch 9 only has one worksheet, and Ch 20 presents active sentences with three passive voice options to choose from. For the class-7 file, I'm starting with Ch 1 which splits into two parts: identifying question types with inline blanks, and filling in interrogative sentence blanks.

Moving through the chapters, I'm tracking how blanks appear - some are embedded in the text itself (lines: 0) while others need space below for answers. Ch 2's compound subject/predicate exercises have blanks within the sentences, Ch 4 has sections for noun form changes and gender agreement, and Ch 8 features a passage with multiple integrated blanks. Ch 9 stands alone with just five questions.

For Ch 20, I'm encountering a different challenge - the MCQ format here presents full passive voice sentences as options rather than single words, which breaks the standard two-column grid layout. I need to restructure this with a single-column list display to accommodate the longer option text, formatting each option as a complete sentence choice.

For Ch 21, there's a similar MCQ pattern but with just two indirect speech options to handle. Now I'm moving forward with building the class-7.html file using the same structure as class-8, while keeping track of some formatting quirks like blanks at the start of sentences and multi-line fill-in-the-blank questions.

I'm also noting several other question types that need careful handling: passages with non-finite verb blanks, questions with multiple blanks requiring different verb forms, adverb placement rewrites, two-part blanks in single questions, open-ended phrase/clause fills, and half-sentence completions with varying line allocations.

For Ch 20 W2, I'm setting up active-to-passive conversions where the active sentence is shown first, then students fill in the passive form. For Ch 21 W1, I'm using a multiple-choice format with lettered options.

Looking at Ch 3 W1, the instruction asks students to choose the correct verb form from brackets embedded in the text itself—like "Riya and her cousins ****\_\_**** going to the fair. (is / are)"—so I'll keep the options inline without a separate options array.

For Ch 15 W2 on correlative conjunctions, I'm working through the multiple-choice structure... For Ch 16 W2, the blanks are actually embedded in the text itself, so students write directly over them—lines: 0 is the right choice. Same logic applies to Ch 19 W2 where completion sentences have blanks built in. Now I'm ready to generate the file with all 22 chapters and their worksheets.

Building the HTML structure... I'm settling on the question formats now—for questions with options embedded in brackets like the verb forms, I'll keep them as simple fill-in-the-blank without a separate options array, while questions with labeled options (a, b, c) will get the full options array. Now I'm ready to structure the file, starting with Chapter 1 where I'll split the first worksheet into two sections to organize the different question types. I'm finishing up the worksheet structure for Chapter 20 and 21, then I need to generate the HTML code. I notice Chapter 16 Worksheet 2 actually has 11 questions, and Chapter 8 Worksheet 2 is a passage with multiple blanks that I'll count as a single question. Now I'm ready to write out the HTML, but first I should verify the class-7-menu structure to make sure I'm building the card correctly.

Actually, I'll create the class-7.html file first since that's the main task, then update the menu navigation afterward. I know the pattern from updating class-8: I need to create the test generator file, enable the card in the menu, and add the navigation script. Let me start writing the HTML file now—this will be substantial, but I have all the content ready.

Writing the HTML structure... I'm working through the formatting for Chapter 20's passive voice questions—these have three full-sentence options that I'll display as a simple list rather than a grid layout. I also need to add a CSS class to handle the styling properly. I'll use a simple approach: add an optionsList: true flag to questions with longer options, and style them as a single-column list instead of a grid.

Now I'm ready to write out the full file with the correct structure. I need to verify the question counts for each chapter—Ch 1 has 23 total, Ch 2 has 20, Ch 3 has 15, and I'm working through the rest to make sure everything adds up correctly. Now I'm looking at the file path for the class-7 menu and deciding to write the class-7.html file first with all the question data I've compiled, then I'll update the corresponding menu files afterward.

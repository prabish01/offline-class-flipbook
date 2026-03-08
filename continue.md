Test Generator — How It Works

1. Setup (on page load)
   Sets today's date in the date field automatically.
   The question bank (questionBank) is a JS object with keys ch1–ch22, covering all 22 chapters of Grammar Frolics-7.
2. Chapter Selection
   22 chapter cards with checkboxes are shown in a grid.
   When the user checks/unchecks a chapter, updateAvailableCount() fires and shows the total number of available questions from selected chapters in real time.
3. Test Configuration
   The user fills in:

Test Name (default: "Grammar Frolics-7 Test")
Date (auto-filled with today)
Duration (mins)
Total Marks — controls how many questions are picked 4. Preview Generation (previewTest())
Reads user inputs.
Builds a pool — flattens all questions from all selected chapters' worksheets into a single array.
Shuffles the pool randomly (shuffleArray()).
Slices the shuffled pool to min(totalMarks, available) questions. If fewer are available than requested, an alert warns the user.
Re-groups selected questions back by chapter (preserving chapter order) and by worksheet within each chapter.
Renders the grouped questions into the preview div, with:
Chapter heading
Worksheet instruction text
Numbered questions (with optional MCQ options in a grid/list, and answer lines)
Scrolls the preview into view. 5. Print (printTest())
Calls previewTest() first, then triggers window.print() after 600ms. The @media print CSS hides UI chrome and formats it cleanly for paper.
In short: Select chapters → set marks → click Preview → get a randomly shuffled, marks-limited test grouped neatly by chapter, ready to print.

i have uploaded questions for class 1 as well ..

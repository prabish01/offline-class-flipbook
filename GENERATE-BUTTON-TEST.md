# Class 8 Generate Button - Testing Instructions

## What to Test

The "Generate Test" button (below the Student/Teacher preview panels) should:
1. Generate a randomized test from selected chapters
2. Display the test in both Student and Teacher preview panels
3. Scroll to show the previews
4. Enable the Download Word buttons

## Testing Steps

### Test 1: Basic Generation (Auto Mode)
1. Open `src/class-tests/test-generator/class-8.html` in browser
2. Ensure "Auto" mode is selected (should be default)
3. Select 2-3 chapters (e.g., Ch 1: Nouns, Ch 2: Articles, Ch 3: Pronouns)
4. Verify "Available questions" count updates (should show a number like "50 questions available")
5. Click the **"👁️ Generate Test"** button (below the Word preview panels)
6. **Expected Result:**
   - Student preview panel shows test with questions
   - Teacher preview panel shows test with "ANSWER KEY - TEACHER USE ONLY" header
   - Page scrolls down to show the previews
   - Questions are numbered sequentially (1, 2, 3, etc.)
   - Teacher version shows "Answers may vary" for each question

### Test 2: Different Total Marks
1. Change "Total Marks" to 10
2. Click "Generate Test" again
3. **Expected Result:**
   - Test should have ~10 questions
   - Different random selection than before

### Test 3: Custom Mode
1. Click "✏️ Custom" button
2. Custom panel should appear with all chapters and worksheets
3. Check specific questions you want (e.g., select 5 questions from Chapter 1)
4. Click "Generate Test"
5. **Expected Result:**
   - Only the questions you selected appear in previews
   - Questions maintain their chapter order

### Test 4: Download Word
1. After generating a test, click "📄 Download Word (Student)"
2. **Expected Result:**
   - Word document downloads
   - Contains the student version of the test
3. Click "📄 Download Word (Teacher)"
4. **Expected Result:**
   - Word document downloads
   - Contains answers section

## What Was Fixed

**Problem:** The generate button wasn't working because the `answer` field was missing when creating the question pool.

**Fix Applied:** Added `answer: q.answer || null` to line 3336 in the `previewTest()` function.

## If It Still Doesn't Work

Check browser console (F12) for JavaScript errors and report the error message.


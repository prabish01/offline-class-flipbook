# Class 8 Image-Based Questions - User Guide

## Overview

Class 8 Test Generator now supports image-based questions, just like Class 1! This feature allows teachers to create tests with visual exercises such as proverb matching, homographs, and picture composition.

## Available Image-Based Questions

### 📖 Vocabulary - Chapter 5: Proverbs

- **Type**: Matching Exercise
- **Task**: Match each proverb with its meaning
- **Content**: 10 common proverbs and their meanings
- **Examples**:
  - "A watched pot never boils" → Worrying makes things feel slower
  - "Fortune favours the brave" → Opportunities come to risk-takers
  - "You reap what you sow" → Face consequences of your actions

### 📖 Vocabulary - Chapter 6: Homographs

- **Type**: Vocabulary Exercise
- **Task**: Read meanings and guess the homograph
- **Content**: 20 word meanings (10 homograph pairs)
- **Examples**:
  - "to guide" / "a heavy grey metal" = lead
  - "a gift" / "to show something" = present
  - "moving air" / "to twist" = wind

### 🎨 Composition - Chapter 9: Picture Composition

- **Type**: Creative Writing
- **Two images available**:
  - **Image A**: Children playing outdoors (basketball, park scene)
  - **Image B**: Polluted river with garbage (environmental theme)
- **Task**: Write descriptive compositions about the scenes

## How to Generate Tests with Images

### Step 1: Open Test Generator

Navigate to: `/src/class-tests/test-generator/class-8.html`

### Step 2: Select Chapters

Check the boxes for chapters you want to include. For image questions, select:

- ☑️ Voc Ch 5: Proverbs
- ☑️ Voc Ch 6: Homographs
- ☑️ Comp Ch 9: Picture Composition

### Step 3: Click "Preview Test"

A dialog will appear showing:

- **Picture questions available**: X (based on selected chapters)
- **Text questions available**: Y (based on selected chapters)

### Step 4: Customize Test

- **Picture questions**: Specify how many image-based questions to include
- **Marks per picture question**: Set point value (e.g., 5 marks)
- **Text questions**: Specify how many text-based questions
- **Marks per text question**: Set point value (e.g., 2 marks)

### Step 5: Review Previews

- **Student Preview**: Shows images with instructions, no answers
- **Teacher Preview**: Shows images with answer keys

### Step 6: Download

Choose download option:

- **📄 Download Student Version**: Test without answers
- **📝 Download Teacher Version**: Test with answer key

## Preview Examples

### Student View

```
Q1) Match each proverb with its meaning.

[IMAGE: Proverbs table with two columns - Proverb and Meaning]

___________________________________
___________________________________
```

### Teacher View

```
Q1) Match each proverb with its meaning.

[IMAGE: Proverbs table with two columns]

Answers:
The grass is always greener on the other side  →  People often think others have it better
The squeaky wheel gets the grease  →  The person who complains most gets attention
...
```

## Answer Key Formats

### Matching Questions

Answers display in an easy-to-read table:
| Proverb | → | Meaning |
|---------|---|---------|
| A watched pot never boils | → | Worrying makes things feel slower |

### Descriptive Questions

Full text answers or guidance:

```
Write a composition describing children playing in a park.
Include details about games, setting, and atmosphere.
```

## Tips for Best Results

### ✅ DO:

- Mix picture and text questions for variety
- Use picture questions for visual learning concepts
- Adjust marks based on question complexity
- Preview before downloading

### ❌ DON'T:

- Exceed available picture question count
- Forget to fill in test name and date
- Skip the preview step
- Mix answer keys with student versions

## Technical Details

### Image Specifications

- **Format**: PNG
- **Location**: `/assets/images/test-generator/class-8/`
- **Size**: Optimized for printing and screen display
- **Resolution**: High quality, printer-friendly

### Supported Browsers

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

### Export Format

- **File Type**: Microsoft Word (.doc)
- **Images**: Embedded in document
- **Page Breaks**: Avoided within questions
- **Print Ready**: Yes

## Troubleshooting

### Images not showing?

1. Check that images exist in `/assets/images/test-generator/class-8/`
2. Verify you're viewing from correct file path
3. Clear browser cache and reload

### Wrong question count?

- Ensure chapters are properly selected
- Remember: Some chapters have multiple image questions

### Export issues?

- Try different browser
- Check popup blockers
- Verify download permissions

## Adding More Image Questions

Want to add more image-based questions? Follow this structure:

```javascript
{
  name: "Chapter Name",
  worksheets: [
    {
      instruction: "A – Your instruction here",
      image: "../../../assets/images/test-generator/class-8/YourImage.png",
      questions: [
        {
          text: "[Image Exercise]",
          answer: "Answer text here"
        }
      ]
    }
  ]
}
```

### For Matching Questions:

Use format: `"Item1 → Match1 | Item2 → Match2 | Item3 → Match3"`

### For Descriptive Questions:

Use plain text with detailed guidance

## Benefits of Image-Based Questions

### For Teachers:

- ✅ Quick test generation
- ✅ Professional appearance
- ✅ Consistent formatting
- ✅ Time-saving

### For Students:

- ✅ Visual learning
- ✅ Engaging content
- ✅ Clear instructions
- ✅ Variety in assessment

## Example Test Configuration

**Sample balanced test:**

- Picture Questions: 3 (5 marks each = 15 marks)
- Text Questions: 10 (2 marks each = 20 marks)
- **Total: 35 marks**

**Sample visual-heavy test:**

- Picture Questions: 5 (10 marks each = 50 marks)
- Text Questions: 5 (2 marks each = 10 marks)
- **Total: 60 marks**

## Questions or Issues?

If you encounter any problems or have suggestions:

1. Check this guide first
2. Review the technical documentation
3. Verify image files are in correct location
4. Test in different browser

---

**Version**: 1.0  
**Last Updated**: April 2026  
**Status**: ✅ Fully Operational

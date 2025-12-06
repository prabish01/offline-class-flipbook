# Good with Grammar - Class 1

An interactive educational platform for teaching English grammar to Class 1 students (ages 6-7).

## 📁 Project Structure

```
Good-with-Grammar-Class-1/
├── src/                          # Source code
│   ├── main-menu/               # Main navigation hub
│   │   ├── index.html           # Entry point
│   │   ├── grammer.js           # Main menu logic
│   │   └── style.css            # Main menu styles
│   │
│   ├── flipbook/                # Digital textbook
│   │   ├── index.html           # Flipbook viewer
│   │   ├── book.css             # Flipbook styles
│   │   ├── pc.js                # Desktop flipbook logic
│   │   ├── jquery-3.5.1.min.js  # jQuery library
│   │   └── jquery-ui.js         # jQuery UI for interactions
│   │
│   ├── animations/              # Video lessons
│   │   └── index.html           # Animation menu
│   │
│   ├── test-generator/          # Assessment creation tool
│   │   ├── index.html           # Test generator interface
│   │   ├── content.js           # Question bank (auto mode)
│   │   ├── customcontent.js     # Question bank (custom mode)
│   │   ├── script.js            # Test generation logic
│   │   ├── label.js             # Labels and text
│   │   └── style.css            # Test generator styles
│   │
│   └── worksheets/              # Downloadable worksheets
│       └── worksheet.html       # Worksheet menu
│
├── assets/                       # Static resources
│   ├── images/                  # All images
│   │   ├── main-menu/          # Main menu icons
│   │   ├── flipbook-ui/        # Flipbook controls
│   │   ├── test-generator/     # Test UI images
│   │   ├── worksheets/         # Worksheet menu images
│   │   └── questions/          # Question images (QUS2)
│   │
│   ├── videos/                  # Educational videos (.mp4)
│   ├── pages/                   # Flipbook page images
│   └── pdfs/                    # Worksheet PDFs
│
├── docs/                         # Documentation
│   └── (this README and additional docs)
│
└── dist/                         # Production builds (optional)
```

## 📚 Curriculum Coverage

### Grammar Topics (16 Chapters + 2 Recaps)

1. **Chapter 1** - Naming Words (Nouns)
2. **Chapter 2** - Special Names (Proper Nouns)
3. **Chapter 3** - A or An (Articles)
4. **Chapter 4** - One or Many (Singular/Plural)
5. **Chapter 5** - Describing Words (Adjectives)
6. **Chapter 6** - I, She, He (Pronouns)
7. **Chapter 7** - Am, Is, Are (Present tense 'to be')
8. **Chapter 8** - Doing Words (Verbs)
9. **Chapter 9** - Has/Have
10. **Chapter 10** - What Is Happening Now (Present Continuous)
11. **Chapter 11** - What Happened Earlier (Past Tense)
12. **Chapter 12** - The Sentence
13. **Chapter 13** - Position Words (Prepositions)
14. **Chapter 14** - Joining Words (Conjunctions: and, but)
15. **Chapter 15** - This, That, These, Those
16. **Chapter 16** - Who Does It Belong To (Possessive Pronouns)

## 🚀 Features

### 1. Main Menu

- Central navigation hub with visual buttons
- Links to all learning modules
- Attractive, child-friendly interface

### 2. Digital Flipbook

- 88+ pages of interactive textbook
- Smooth page-turning animation
- Zoom functionality
- Desktop and mobile responsive
- Navigation controls (previous/next, goto page)

### 3. Animated Lessons

- 10 video lessons covering key grammar concepts
- Interactive clickable tree interface
- Topics: Nouns, Articles, Verbs, Pronouns, Tenses, etc.

### 4. Test Generator

- **Auto Mode**: Automatically generates tests from question bank
- **Custom Mode**: Select specific questions manually
- Features:
  - Chapter selection (1-16)
  - Question types: Picture-based, Objective-type
  - Set test name, duration, and total marks
  - Upload custom logo
  - Export formats: .doc and .pdf (Teacher & Student versions)
- Extensive question bank with images and answers

### 5. Worksheets

- 16 downloadable PDF worksheets (one per chapter)
- Practice exercises for each grammar topic
- Printable format for offline learning

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Libraries**: jQuery 3.5.1, jQuery UI
- **Features**:
  - Client-side document generation
  - Responsive design
  - Image-based interactive content

## 📖 Usage

### Getting Started

1. Open `src/main-menu/index.html` in a web browser
2. Navigate to desired learning module
3. Interact with content

### Test Generator

1. Enter test details (name, duration, marks)
2. Select question type (Teachers/Students)
3. Choose mode (Auto/Custom)
4. Select chapters
5. For custom mode: manually select questions
6. Download test in desired format

### Flipbook

- Click "Next"/"Previous" or use page number input
- Use zoom for better readability
- Works on desktop and mobile devices

## 🎯 Target Audience

- **Students**: Class 1 / Grade 1 (ages 6-7)
- **Teachers**: Primary school English teachers
- **Parents**: Home learning support

## 📝 File Naming Conventions

- **HTML files**: lowercase with hyphens (e.g., `main-menu.html`)
- **CSS files**: descriptive names (e.g., `book.css`, `style.css`)
- **JavaScript**: camelCase (e.g., `grammer.js`, `customcontent.js`)
- **Images**: descriptive with underscores (e.g., `b_1.png`)
- **Videos**: descriptive with spaces (e.g., `Naming Words.mp4`)

## 🔧 Path Updates Required

After restructuring, update these paths in source files:

1. **Main Menu** (`src/main-menu/index.html`):

   - Image paths: `./img/` → `../../assets/images/main-menu/`
   - Links to modules: Update relative paths

2. **Flipbook** (`src/flipbook/index.html`):

   - Page images: `./page/` → `../../assets/pages/`
   - UI images: `./img/` → `../../assets/images/flipbook-ui/`

3. **Test Generator** (`src/test-generator/index.html`):

   - Question images: `./QUS2/` → `../../assets/images/questions/`
   - UI images: `./img/` → `../../assets/images/test-generator/`

4. **Animations** (`src/animations/index.html`):

   - Videos: `./*.mp4` → `../../assets/videos/*.mp4`
   - Images: Update to `../../assets/images/`

5. **Worksheets** (`src/worksheets/worksheet.html`):
   - Background: `./img/` → `../../assets/images/worksheets/`
   - PDFs: `./*.pdf` → `../../assets/pdfs/*.pdf`

## 📊 Future Enhancements

- [ ] Add more question types (fill-in-blanks, matching)
- [ ] Implement progress tracking
- [ ] Add audio pronunciations
- [ ] Create more animated lessons
- [ ] Add gamification elements
- [ ] Multi-language support
- [ ] Parent/Teacher dashboard

## 📄 License

Educational content - Copyright © SilverStone Capital

## 🤝 Contributing

This is an educational project. For improvements or bug fixes, please maintain the child-friendly interface and pedagogical approach.

## 📞 Support

For technical support or content queries, contact the development team.

---

**Version**: 1.0  
**Last Updated**: December 2025  
**Developed for**: Class 1 English Grammar Education

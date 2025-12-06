# Project Structure Documentation

## Directory Organization

### `/src` - Source Code

Contains all application source code organized by module.

#### `/src/main-menu`

- **Purpose**: Main navigation hub/landing page
- **Key Files**:
  - `index.html` - Entry point for the application
  - `grammer.js` - Navigation logic
  - `style.css` - Main menu styling
- **Navigation**: Links to all other modules

#### `/src/flipbook`

- **Purpose**: Digital textbook viewer with page-turning functionality
- **Key Files**:
  - `index.html` - Flipbook interface
  - `book.css` - Flipbook-specific styles
  - `pc.js` - Desktop flipbook logic
  - `jquery-3.5.1.min.js` - jQuery library
  - `jquery-ui.js` - jQuery UI for interactions
- **Features**: 88+ pages, zoom, navigation controls

#### `/src/animations`

- **Purpose**: Interactive video lesson menu
- **Key Files**:
  - `index.html` - Animation selection interface
- **Content**: Links to 10 grammar video lessons

#### `/src/test-generator`

- **Purpose**: Automated test creation tool
- **Key Files**:
  - `index.html` - Main interface
  - `content.js` - Auto mode question bank
  - `customcontent.js` - Custom mode question bank
  - `script.js` - Test generation and export logic
  - `label.js` - UI labels and text
  - `style.css` - Styling
- **Features**: Chapter selection, question types, export to .doc/.pdf

#### `/src/worksheets`

- **Purpose**: Worksheet download menu
- **Key Files**:
  - `worksheet.html` - Worksheet selection interface
- **Content**: Links to 16 PDF worksheets

---

### `/assets` - Static Resources

Centralized location for all static assets.

#### `/assets/images`

All image resources organized by module:

- **main-menu/**: Navigation icons and UI elements
- **flipbook-ui/**: Control icons (zoom, nav buttons, etc.)
- **test-generator/**: Test UI images, icons
- **worksheets/**: Worksheet menu background
- **questions/**: Question images used in test generator (formerly QUS2/)

#### `/assets/videos`

Video lesson files (.mp4):

- Naming Words.mp4
- A and An.mp4
- One and Many.mp4
- Describing Words.mp4
- Am, Is and Are.mp4
- You, She, He.mp4
- Has and Have.mp4
- Doing Words.mp4
- What Is Happening Now.mp4
- What Happened Earlier.mp4

#### `/assets/pages`

Flipbook page images (88+ PNG files):

- Good with Grammar Cover_1_front.jpg
- Good with Grammar_Bk_1_2023_PRESS_11-Feb_Page_01.png through Page_88.png
- Good with Grammar Cover_1_Back.jpg

#### `/assets/pdfs`

Downloadable worksheet PDFs (16 files):

- Cl_1_Ch 1 Naming Words.pdf
- Cl_1_Ch 2 Special Names.pdf
- ... (through Chapter 16)

---

### `/docs` - Documentation

Project documentation and guides.

---

### `/dist` - Distribution (Optional)

Production-ready builds, minified files, and deployment artifacts.

---

## File Naming Conventions

### HTML Files

- Use descriptive names with hyphens for multi-word names
- Example: `index.html`, `worksheet.html`

### CSS Files

- Descriptive names indicating purpose
- Example: `style.css`, `book.css`

### JavaScript Files

- camelCase for multi-word names
- Example: `grammer.js`, `customcontent.js`

### Image Files

- Descriptive names with underscores
- Example: `b_1.png`, `star.png`

### Video Files

- Descriptive names with spaces (capitalize words)
- Example: `Naming Words.mp4`

### PDF Files

- Format: `Cl_[class]_Ch [number] [Topic].pdf`
- Example: `Cl_1_Ch 1 Naming Words.pdf`

---

## Module Dependencies

### Main Menu → All Modules

The main menu links to:

- Flipbook
- Animations
- Test Generator
- Worksheets

### Flipbook → Assets

- Pages from `/assets/pages/`
- UI images from `/assets/images/flipbook-ui/`

### Animations → Assets

- Videos from `/assets/videos/`

### Test Generator → Assets

- Question images from `/assets/images/questions/`
- UI images from `/assets/images/test-generator/`

### Worksheets → Assets

- Background images from `/assets/images/worksheets/`
- PDF files from `/assets/pdfs/`

---

## Path Resolution

### From Module to Assets

Most modules are nested 2 levels deep (`src/module-name/`), so asset paths use:

```
../../assets/[asset-type]/[file]
```

### Inter-Module Navigation

From one module to another:

```
../[target-module]/index.html
```

### From Main Menu

Main menu is at `src/main-menu/`, so paths to other modules:

```
../[module-name]/index.html
```

---

## Benefits of New Structure

1. **Separation of Concerns**: Code (src) separated from assets
2. **Scalability**: Easy to add new modules or asset types
3. **Maintainability**: Clear organization makes updates easier
4. **Asset Management**: Centralized assets prevent duplication
5. **Professional**: Follows industry-standard project structure
6. **Build-Ready**: Structure supports build tools and optimization
7. **Version Control**: Better .gitignore possibilities (e.g., ignore dist/)
8. **Collaboration**: Clear structure helps team development

---

## Migration Notes

### Old Structure → New Structure

```
Old: Good with Grammar 1/Main Book/
New: Good-with-Grammar-Class-1/src/main-menu/

Old: Good with Grammar 1/Flip Book/
New: Good-with-Grammar-Class-1/src/flipbook/

Old: Good with Grammar 1/Animation/
New: Good-with-Grammar-Class-1/src/animations/

Old: Good with Grammar 1/TEST-GENERATOR/
New: Good-with-Grammar-Class-1/src/test-generator/

Old: Good with Grammar 1/Worksheet/
New: Good-with-Grammar-Class-1/src/worksheets/
```

### Asset Consolidation

```
Old: Each module had its own /img/ folder
New: All images in /assets/images/[module-name]/

Old: Videos scattered in Animation folder
New: All videos in /assets/videos/

Old: Flipbook /page/ folder
New: /assets/pages/

Old: TEST-GENERATOR/QUS2/
New: /assets/images/questions/
```

---

## Next Steps After Restructure

1. ✅ Create new folder structure
2. ✅ Copy files to new locations
3. ⏳ Update file paths in all HTML/JS files
4. ⏳ Test all navigation links
5. ⏳ Test asset loading
6. ⏳ Create .gitignore file
7. ⏳ Archive old structure

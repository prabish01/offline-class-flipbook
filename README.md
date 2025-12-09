# 📚 Offline Flipbook - Interactive Learning Platform

This project contains interactive flipbooks for Grammar Frolics classes (Class 1-5) with a kid-friendly annotation toolbar for drawing, writing, and learning.

## 📁 Project Structure

```
offline-flipbook/
├── src/
│   ├── class-flipbooks/           # 📖 Reading interface for all classes
│   │   ├── class-1/              # Class 1 flipbook with annotation toolbar
│   │   ├── class-2/              # Class 2 flipbook with annotation toolbar
│   │   ├── class-3/              # Class 3 flipbook with annotation toolbar
│   │   └── class-4/              # Class 4 flipbook with annotation toolbar
│   │
│   ├── class-book-selections/     # 📚 Book chooser screens
│   │   ├── class-1/              # Class 1 book selection
│   │   ├── class-2/              # Class 2 book selection
│   │   ├── class-3/              # Class 3 book selection
│   │   └── class-4/              # Class 4 book selection
│   │
│   ├── class-menus/               # 🏠 Navigation menus
│   │   ├── main-menu/            # Main landing page
│   │   └── class-selection/      # Class chooser page
│   │
│   ├── class-animations/          # 🎬 Animation content
│   │   └── animation-selection/  # Animation chooser
│   │
│   ├── class-tests/               # 📝 Testing tools
│   │   ├── test-generator/       # Create custom tests
│   │   └── test-selection/       # Select existing tests
│   │
│   ├── class-worksheets/          # ✍️ Worksheet tools
│   │   ├── worksheets/           # Worksheet PDFs
│   │   └── worksheet-selection/  # Worksheet chooser
│   │
│   └── shared-resources/          # ♻️ Reusable components (DRY principle)
│       └── common-components/    
│           ├── annotation-toolbar.css   # Toolbar styling
│           ├── annotation-toolbar.js    # Drawing functionality
│           ├── annotation-toolbar.html  # Toolbar HTML template
│           └── README.md                # Component documentation
│
├── assets/                        # 🗂️ Media files
│   ├── images/                   # UI images and page scans
│   ├── audio/                    # Audio files
│   ├── videos/                   # Video content
│   └── pdfs/                     # PDF resources
│
└── docs/                          # 📄 Documentation
    ├── QUICK-REFERENCE.md        # Quick start guide
    ├── STRUCTURE.md              # Detailed structure docs
    └── TTS-FEATURE.md            # Text-to-speech feature docs
```

## 🎯 Quick Start Guide

### For Students & Teachers:

1. **Open the App**: Double-click `index.html` in the root folder
2. **Select Class**: Choose Class 1, 2, 3, or 4
3. **Choose Book**: Pick the book you want to read
4. **Read & Annotate**: Use the colorful toolbar on the right to:
   - ✏️ Draw with markers
   - 📝 Add text notes
   - 🟢 Draw shapes (circles, rectangles, arrows)
   - 🎨 Pick from 8 bright colors
   - 🗑️ Erase or clear all drawings
   - 💾 Your notes save automatically for each page!

### For Developers:

- **Flipbooks**: `src/class-flipbooks/class-{1,2,3,4}/index.html`
- **Shared Toolbar**: `src/shared-resources/common-components/` (DRY - Don't Repeat Yourself!)
- **Navigation**: `src/class-menus/` (main menu and class selection)
- **Book Selection**: `src/class-book-selections/` (book choosers)
- **Tests & Worksheets**: `src/class-tests/` and `src/class-worksheets/`

## ✨ Features

### 🎨 Kid-Friendly Annotation Toolbar

The annotation toolbar is designed specifically for children with large, colorful buttons and intuitive icons:

- **Drawing Tools**:
  - ✏️ Marker tool for freehand drawing
  - 📝 Text tool with draggable/resizable text boxes
  - 🟢 Shape tool (circles) with drag/resize
  - ⬛ Rectangle tool with drag/resize
  - ➡️ Arrow tool for pointing and annotations

- **Customization**:
  - 🎨 8 vibrant colors (red, orange, yellow, green, blue, purple, pink, brown)
  - 📏 Adjustable brush size (1-20 pixels)
  - 👆 Drag and resize text and shapes after placing them

- **Organization**:
  - 💾 Saves annotations per page automatically
  - 🧹 Eraser for removing drawings
  - 🗑️ Clear button to remove all annotations at once
  - 📄 Annotations persist across sessions (localStorage)

- **Design**:
  - 🎪 Bright gradient colors (pink, orange, yellow)
  - 🔤 Comic Sans MS font for kid-friendly feel
  - 📏 Large 65x65px buttons for easy clicking
  - 🖱️ Hover effects for visual feedback

### 🏗️ Architecture Benefits

- **Organized by Purpose**: Each folder has a clear, self-explanatory name
- **Easy to Navigate**: Both developers and non-technical users can understand the structure
- **Reusable Components**: One toolbar codebase serves all 4 classes (no duplication!)
- **Scalable**: Easy to add Class 5, 6, etc.
- **Maintainable**: Update the toolbar once, all classes benefit
- **No Build Tools**: Pure HTML/CSS/JS - works offline instantly

## 🚀 Adding a New Class

Adding Class 5 is simple:

1. **Copy Flipbook**: 
   ```bash
   cp -r src/class-flipbooks/class-1/ src/class-flipbooks/class-5/
   ```

2. **Copy Book Selection**: 
   ```bash
   cp -r src/class-book-selections/class-1/ src/class-book-selections/class-5/
   ```

3. **Update Content**: Replace page images in the new folders

4. **That's It!**: The annotation toolbar automatically works - no code changes needed!

## 🔧 Technical Details

### Shared Components System

All flipbooks use the same annotation toolbar from `shared-resources/common-components/`:

```javascript
// Each flipbook loads the shared components like this:
// 1. CSS is linked in the <head>
<link rel="stylesheet" href="../../shared-resources/common-components/annotation-toolbar.css">

// 2. Toolbar HTML is loaded dynamically via fetch()
fetch('../../shared-resources/common-components/annotation-toolbar.html')

// 3. JavaScript functionality is loaded at the end
<script src="../../shared-resources/common-components/annotation-toolbar.js"></script>
```

### Why This Structure?

**Before**: Each class had its own copy of the toolbar code (700+ lines duplicated 4 times)
- ❌ Hard to maintain (update 4 files for one change)
- ❌ Inconsistent features across classes
- ❌ Confusing folder names

**After**: One toolbar serves all classes from shared-resources
- ✅ Update once, all classes benefit
- ✅ Consistent experience across all classes
- ✅ Clear, organized folder structure
- ✅ Easy for anyone to understand

### Key Technologies

- **HTML5 Canvas API**: For drawing and marker strokes
- **SVG**: For scalable shapes (circles, rectangles, arrows)
- **Vanilla JavaScript**: No framework dependencies
- **jQuery 3.5.1 + jQuery UI**: For flipbook page turning
- **localStorage**: For saving annotations per page
- **Fetch API**: For loading shared components dynamically

### Path Structure

Flipbooks are 2 levels deep: `src/class-flipbooks/class-1/`
Shared resources are at: `src/shared-resources/common-components/`

Therefore, paths use: `../../shared-resources/common-components/`

## 📖 Additional Documentation

- **Quick Reference**: See `docs/QUICK-REFERENCE.md`
- **Detailed Structure**: See `docs/STRUCTURE.md`
- **TTS Feature**: See `docs/TTS-FEATURE.md`

## 🤝 Contributing

When making changes to the annotation toolbar, remember:
1. Edit files in `src/shared-resources/common-components/` only
2. Test changes across all 4 classes to ensure consistency
3. Keep the design kid-friendly (large buttons, bright colors)
4. Document any new features in the component README

## 📝 Notes

- Large PDF files are in `.gitignore` to avoid GitHub size limits
- The app runs completely offline - no server required
- All annotations are stored locally in the browser
- Works on desktop browsers (Chrome, Firefox, Safari, Edge)

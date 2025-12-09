# 📚 Offline Flipbook - Organized Structure

This project contains interactive flipbooks for Grammar Frolics classes with annotation tools.

## 📁 Project Structure

```
src/
├── flipbooks/              # All class flipbooks (reading interface)
│   ├── class-1/           # Class 1 flipbook
│   ├── class-2/           # Class 2 flipbook
│   ├── class-3/           # Class 3 flipbook
│   └── class-4/           # Class 4 flipbook
│
├── book-selection/         # Book selection screens
│   ├── class-1/           # Class 1 book chooser
│   ├── class-2/           # Class 2 book chooser
│   ├── class-3/           # Class 3 book chooser
│   └── class-4/           # Class 4 book chooser
│
├── menus/                  # Navigation menus
│   ├── main-menu/         # Main landing page
│   └── class-selection/   # Choose which class
│
├── common-components/      # Shared components (used by all flipbooks)
│   ├── annotation-toolbar.css   # Toolbar styling
│   ├── annotation-toolbar.js    # Drawing functionality
│   ├── annotation-toolbar.html  # Toolbar HTML template
│   └── README.md                # Component documentation
│
├── worksheets/             # Worksheet PDFs and pages
├── test-generator/         # Test generation tools
├── test-selection/         # Test selection interface
├── worksheet-selection/    # Worksheet selection interface
└── animations/             # Animation resources
```

## 🎯 Quick Navigation

### For Users:

1. **Start Here**: Open `src/menus/main-menu/index.html`
2. **Select Class**: Choose Class 1, 2, 3, or 4
3. **Choose Book**: Pick the book you want to read
4. **Read & Annotate**: Use the colorful toolbar on the right to draw and take notes!

### For Developers:

- **Flipbooks**: `src/flipbooks/class-{1,2,3,4}/index.html`
- **Shared Toolbar**: `src/common-components/` (one toolbar for all classes)
- **Navigation**: `src/menus/` (main menu and class selection)
- **Book Selection**: `src/book-selection/` (book choosers for each class)

## ✨ Features

### Kid-Friendly Annotation Toolbar

- ✏️ Drawing tools (marker, shapes, text, arrows)
- 🎨 8 vibrant colors
- 📏 Adjustable brush sizes
- 🧹 Eraser and clear functions
- 💾 Saves annotations per page
- 👆 Drag and resize text/shapes
- 🎪 Bright, colorful design

### Why This Structure?

- **Organized by Purpose**: Flipbooks, selections, and menus are separated
- **Easy to Find**: Clear folder names tell you what's inside
- **Reusable Components**: One toolbar works for all classes
- **Scalable**: Easy to add Class 5, 6, etc.

## 🚀 Adding a New Class

1. Copy `src/flipbooks/class-1/` to `src/flipbooks/class-5/`
2. Copy `src/book-selection/class-1/` to `src/book-selection/class-5/`
3. Update the page images in the new folders
4. The toolbar automatically works - no code changes needed!

## 🔧 Technical Notes

- **Shared Components**: All flipbooks use `common-components/` (no duplicate code)
- **Relative Paths**: Paths use `../../` to go up two levels from flipbooks folder
- **Dynamic Loading**: Toolbar HTML is loaded via fetch API
- **No Build Required**: Pure HTML/CSS/JS - just open and use!

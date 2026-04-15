# Annotation Toolbar - Shared Component

This directory contains the shared annotation toolbar component that can be reused across all class flipbooks.

## Files

- **annotation-toolbar.css** - All styling for the toolbar and interactive elements
- **annotation-toolbar.js** - All JavaScript functionality for drawing and interactions
- **annotation-toolbar.html** - HTML template for the toolbar markup

## How to Use in Flipbook Pages

### 1. Add CSS Link in `<head>`:
```html
<link rel="stylesheet" href="../shared/annotation-toolbar.css">
```

### 2. Add Toolbar HTML before closing `</body>`:
Include the toolbar HTML and canvas:
```html
<!-- Annotation Toolbar -->
<div id="annotationToolbar" class="annotation-toolbar">
    <!-- Copy content from annotation-toolbar.html -->
</div>

<!-- Canvas for drawing -->
<canvas id="drawingCanvas"></canvas>
```

### 3. Add JavaScript before closing `</body>`:
```html
<script src="../shared/annotation-toolbar.js"></script>
```

## Complete Integration Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Grammar Frolics - Flip Book</title>
    <link rel="stylesheet" href="book.css">
    <!-- Add shared annotation toolbar CSS -->
    <link rel="stylesheet" href="../shared/annotation-toolbar.css">
</head>
<body>
    <!-- Your flipbook content here -->
    <div id="album">
        <!-- Pages -->
    </div>
    
    <!-- Include annotation toolbar HTML here -->
    <!-- (Copy from annotation-toolbar.html) -->
    
    <!-- Add shared annotation toolbar JS -->
    <script src="../shared/annotation-toolbar.js"></script>
</body>
</html>
```

## Features

- ✏️ Drawing tools (marker, text, shapes, arrows)
- 🎨 8-color palette
- 📏 Adjustable brush size
- 🧹 Eraser and clear functions
- 📦 Per-page annotation storage
- 👆 Drag and resize text/shapes
- 🎯 Kid-friendly colorful design

## Requirements

- Element with `id="album"` must exist (the flipbook container)
- Element with `id="page-number"` for page tracking

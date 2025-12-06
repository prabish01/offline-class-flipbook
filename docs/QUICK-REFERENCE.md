# Quick Reference Guide

## 🚀 Getting Started

### For Users

1. Open `index.html` in the root folder in your web browser
2. Click "Start Learning" or wait 10 seconds for auto-redirect
3. Navigate to your desired learning module

### For Developers

1. Review the `README.md` for full documentation
2. Check `docs/STRUCTURE.md` for detailed structure info
3. Run `update-paths.sh` if you've just restructured
4. Test all modules after any changes

---

## 📂 Quick Navigation

### Main Entry Points

- **Root**: `index.html` - Welcome/splash page
- **Main Menu**: `src/main-menu/index .html` - Navigation hub

### Learning Modules

- **Flipbook**: `src/flipbook/index.html`
- **Animations**: `src/animations/index.html`
- **Test Generator**: `src/test-generator/index.html`
- **Worksheets**: `src/worksheets/worksheet.html`

---

## 🔧 Common Tasks

### Adding a New Chapter

1. Add content to flipbook pages in `assets/pages/`
2. Add questions to `src/test-generator/content.js`
3. Create worksheet PDF in `assets/pdfs/`
4. Update worksheet menu in `src/worksheets/worksheet.html`

### Adding a Video Lesson

1. Place video file in `assets/videos/`
2. Add button in `src/animations/index.html`
3. Update onclick handler with video path

### Modifying Test Questions

- **Auto Mode**: Edit `src/test-generator/content.js`
- **Custom Mode**: Edit `src/test-generator/customcontent.js`
- **Images**: Place in `assets/images/questions/`

### Changing Styles

- **Main Menu**: `src/main-menu/style.css`
- **Flipbook**: `src/flipbook/book.css`
- **Test Generator**: `src/test-generator/style.css`

---

## 📝 File Path Patterns

### From Module HTML to Assets

```html
<!-- Images -->
<img src="../../assets/images/[module-name]/image.png" />

<!-- Videos -->
<video src="../../assets/videos/video.mp4">
  <!-- Pages -->
  <div style="background: url('../../assets/pages/page.png')"></div>
</video>
```

### Inter-Module Navigation

```javascript
// From any module to main menu
location.replace("../main-menu/index .html");

// From main menu to any module
location.replace("../[module-name]/index.html");

// Between sibling modules
location.replace("../[target-module]/index.html");
```

---

## 🐛 Troubleshooting

### Images Not Loading

1. Check file path is correct (case-sensitive)
2. Verify file exists in `assets/images/`
3. Check relative path depth (`../../`)

### Videos Not Playing

1. Ensure video is in `assets/videos/`
2. Check file format (.mp4 recommended)
3. Verify path in onclick handler

### Navigation Not Working

1. Check file names match exactly (spaces, capitalization)
2. Verify relative paths
3. Check browser console for errors

### Test Generator Issues

1. Clear browser cache
2. Check question image paths in .js files
3. Verify jQuery is loading properly

---

## ✅ Pre-Deployment Checklist

- [ ] All images loading correctly
- [ ] All videos playing
- [ ] Navigation between all modules working
- [ ] Test generator creating tests successfully
- [ ] PDF downloads working
- [ ] No console errors
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] All paths using relative (not absolute) paths
- [ ] No broken links

---

## 📞 Quick Contacts

### Module Owners

- Main Menu & Navigation: [Contact]
- Flipbook: [Contact]
- Test Generator: [Contact]
- Content Creation: [Contact]

### Support

- Technical Issues: [Contact]
- Content Questions: [Contact]

---

## 🔗 Useful Links

- **Full Documentation**: `README.md`
- **Structure Details**: `docs/STRUCTURE.md`
- **Path Update Script**: `update-paths.sh`

---

## 💡 Tips & Best Practices

1. **Always test after making changes** - Open in browser and verify
2. **Use relative paths** - Never hardcode absolute paths
3. **Maintain naming conventions** - Follow existing patterns
4. **Backup before major changes** - Keep .backup files until tested
5. **Check multiple browsers** - Chrome, Firefox, Safari, Edge
6. **Optimize assets** - Compress images/videos for performance
7. **Document changes** - Update docs when adding features
8. **Version control** - Commit working states frequently

---

## 📊 Module Dependencies

```
index.html (root)
    └── Main Menu
            ├── Flipbook → assets/pages/ + assets/images/
            ├── Animations → assets/videos/
            ├── Test Generator → assets/images/questions/
            └── Worksheets → assets/pdfs/
```

---

## 🎯 Performance Optimization

### Current State

- Client-side only (no backend required)
- Large assets (videos, images, PDFs)
- jQuery dependencies

### Future Improvements

- Implement lazy loading for images
- Compress videos further
- Minify CSS/JS files
- Add service worker for offline access
- Use CDN for jQuery

---

**Last Updated**: December 2025  
**Version**: 1.0

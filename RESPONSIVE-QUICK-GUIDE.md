# Quick Responsive CSS Pattern Guide

## Common Responsive Patterns

### Font Sizes

```css
/* Extra Small */
font-size: clamp(0.75rem, 0.9vw, 0.875rem);

/* Small */
font-size: clamp(0.875rem, 1.2vw, 1.125rem);

/* Base/Medium */
font-size: clamp(1rem, 1.5vw, 1.25rem);

/* Large */
font-size: clamp(1.25rem, 2vw, 1.75rem);

/* Extra Large (Headings) */
font-size: clamp(2rem, 3.5vw, 3rem);

/* Huge (Main Titles) */
font-size: clamp(2.5rem, 5vw, 4.5rem);
```

### Spacing (Padding/Margin)

```css
/* Tiny */
padding: clamp(0.25rem, 0.5vw, 0.5rem);

/* Small */
padding: clamp(0.5rem, 1vw, 1rem);

/* Medium */
padding: clamp(1rem, 2vw, 1.5rem);

/* Large */
padding: clamp(1.5rem, 3vw, 2.5rem);

/* Extra Large */
padding: clamp(2rem, 4vw, 3.5rem);
```

### Widths/Heights

```css
/* Button/Icon Small */
width: clamp(2rem, 3vw, 3.5rem);

/* Button/Icon Medium */
width: clamp(3rem, 4vw, 4.5rem);

/* Container Small */
width: clamp(400px, 50vw, 600px);

/* Container Medium */
width: clamp(600px, 60vw, 900px);

/* Container Large */
width: clamp(800px, 70vw, 1200px);
```

### Border Radius

```css
/* Small */
border-radius: clamp(8px, 1vw, 12px);

/* Medium */
border-radius: clamp(15px, 2vw, 25px);

/* Large */
border-radius: clamp(20px, 2.5vw, 35px);

/* Pills/Rounded */
border-radius: clamp(30px, 4vw, 50px);
```

### Gaps (Grid/Flex)

```css
/* Tight */
gap: clamp(0.75rem, 1.5vw, 1.5rem);

/* Normal */
gap: clamp(1.5rem, 2.5vw, 2.5rem);

/* Spacious */
gap: clamp(2rem, 3.5vw, 3.5rem);
```

## Step-by-Step Update Process

### 1. Find and Replace Pattern

```
Find:    width: 4vw;
Replace: width: clamp(3rem, 4vw, 4.5rem);

Find:    font-size: 2vw;
Replace: font-size: clamp(1.25rem, 2vw, 1.75rem);

Find:    padding: 3vw 2vw;
Replace: padding: clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 2rem);

Find:    gap: 3vw;
Replace: gap: clamp(1.5rem, 3vw, 3rem);

Find:    border-radius: 25px;
Replace: border-radius: clamp(15px, 2vw, 25px);
```

### 2. Common VW Conversions

| Original | Responsive Replacement           |
| -------- | -------------------------------- |
| `1vw`    | `clamp(0.75rem, 1vw, 1.25rem)`   |
| `1.2vw`  | `clamp(0.95rem, 1.2vw, 1.25rem)` |
| `1.5vw`  | `clamp(1.15rem, 1.5vw, 1.65rem)` |
| `2vw`    | `clamp(1.25rem, 2vw, 1.75rem)`   |
| `3vw`    | `clamp(1.5rem, 3vw, 2.5rem)`     |
| `4vw`    | `clamp(2.5rem, 4vw, 4.5rem)`     |
| `5vw`    | `clamp(3rem, 5vw, 5rem)`         |
| `20vw`   | `clamp(18rem, 20vw, 24rem)`      |
| `60vw`   | `clamp(600px, 60vw, 900px)`      |

### 3. Common Pixel Conversions

| Original | Responsive Replacement     |
| -------- | -------------------------- |
| `10px`   | `clamp(8px, 1vw, 12px)`    |
| `15px`   | `clamp(12px, 1.5vw, 18px)` |
| `20px`   | `clamp(15px, 2vw, 25px)`   |
| `25px`   | `clamp(20px, 2.5vw, 30px)` |
| `30px`   | `clamp(25px, 3vw, 35px)`   |
| `50px`   | `clamp(40px, 5vw, 60px)`   |

## Example: Before & After

### Before (Fixed VW)

```css
.card {
  width: 60vw;
  padding: 3vw 2vw;
  border-radius: 25px;
  font-size: 2vw;
  margin-bottom: 1vw;
  gap: 3vw;
}

.icon {
  font-size: 5vw;
  width: 4vw;
}

#container {
  top: 8vw;
  left: 2vw;
}
```

### After (Responsive)

```css
.card {
  width: clamp(600px, 60vw, 900px);
  padding: clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 2rem);
  border-radius: clamp(15px, 2vw, 25px);
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  margin-bottom: clamp(0.5rem, 1vw, 1rem);
  gap: clamp(1.5rem, 3vw, 3rem);
}

.icon {
  font-size: clamp(3rem, 5vw, 5rem);
  width: clamp(3rem, 4vw, 4.5rem);
}

#container {
  top: clamp(4rem, 8vw, 8rem);
  left: clamp(1rem, 2vw, 2rem);
}
```

## Testing Checklist

After updating a CSS file:

- [ ] Check at 1024px width (small laptop)
- [ ] Check at 1366px width (common laptop)
- [ ] Check at 1920px width (large display)
- [ ] Check at 2560px width (ultra-wide)
- [ ] Verify text is readable at all sizes
- [ ] Confirm buttons/links are clickable
- [ ] Check for layout overlaps
- [ ] Test with browser zoom (80%, 100%, 125%)

## Pro Tips

1. **Start with containers**, then update their children
2. **Keep proportions** - if original was 3vw and 2vw, keep the ratio
3. **Use rem for min/max** - better for accessibility
4. **Test frequently** as you update
5. **Group similar elements** - update all buttons at once, all headings at once
6. **Consider adding media queries** for drastic changes only

## Useful VS Code Find & Replace Regex

```regex
Find: width:\s*(\d+\.?\d*)vw;
Replace: width: clamp($1rem, $1vw, $1rem);
(Then manually adjust the clamp values)
```

## Need Help?

Reference these successfully updated files:

- `src/class-menus/main-menu/style.css`
- `src/class-menus/class-1-menu/style.css`
- `src/class-menus/class-selection/style.css`
- `src/class-flipbooks/class-1/book.css`
- `src/class-animations/animation-selection/style.css`

# Class 3 Animations Organization

## Overview

The Class 3 animations are organized similar to the flipbook structure, with a tree-based navigation system that groups related educational videos by theme.

## File Structure

```
assets/videos/class-3/          # All 28 video files
src/class-animations/
  class-3-animations/
    index.html                   # Tree navigation page with 10 branches
    video-player.html           # Video player page (organized like flipbook)
```

## Branch Organization (10 Branches → 28 Videos)

### Branch 1 (a1): Nouns

1. Nouns
2. Nouns and Pronouns
3. Verbs

### Branch 2 (a2): Adjectives & Adverbs

4. Adjectives
5. Adverbs
6. Prepositions
7. Conjunctions

### Branch 3 (a3): Articles & Basic Tenses

8. A, An, The
9. Simple Present Tense
10. Simple Past Tense
11. Simple Future Tense

### Branch 4 (a4): Continuous Tenses

12. Present Continuous Tense
13. Past Continuous Tense

### Branch 5 (a5): Sentence Structure

14. The Sentence
15. Subject and Predicate
16. Subject and Object
17. Punctuation Marks and Capital Letters

### Branch 6 (a6): Advanced Nouns & Adjectives

18. Comparison of Adjectives
19. Countable and Uncountable Nouns

### Branch 7 (a7): Word Play

20. Prefixes
21. Similes
22. Sound Words

### Branch 8 (a8): Similar Words

23. Phrasal Words
24. Homophones
25. Similar Words

### Branch 9 (a9): Stories (Part 1)

26. The Thirsty Crow
27. My Pet Dog

### Branch 10 (a10): Stories (Part 2)

28. The Little Raindrops

## How It Works

1. **Navigation Flow**:

   - Class 3 Menu → Tree Page (index.html) → Video Selection → Video Player (video-player.html)

2. **Branch Interaction**:

   - Single video branches → Direct playback
   - Multiple video branches → Selection menu appears

3. **Video Player**:
   - Clean, modern interface with controls
   - Back to tree button
   - Main menu button
   - Auto-play with full controls

## Assets Location

All videos stored in: `/assets/videos/class-3/`

Videos are referenced by exact filename (e.g., "Nouns.mp4", "A, An, The.mp4")

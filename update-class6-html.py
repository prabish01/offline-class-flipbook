#!/usr/bin/env python3
import re

# Read the generated questionBank (Grammar only)
with open('/Users/prabishdangi/Desktop/Personal/SilverStone Captial/offline-flipbook/class6-questionbank-generated.js', 'r', encoding='utf-8') as f:
    generated_grammar = f.read()

# Read the existing class-6.html
with open('/Users/prabishdangi/Desktop/Personal/SilverStone Captial/offline-flipbook/src/class-tests/test-generator/class-6.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Extract the v and comp sections from the existing HTML (lines after g24 until closing brace)
# Find the line with "v2:" and everything after until the closing "      };"
lines = html_content.split('\n')

# Find where the questionBank starts and ends
qb_start_idx = None
qb_end_idx = None
v_start_idx = None

for i, line in enumerate(lines):
    if '      const questionBank = {' in line:
        qb_start_idx = i
    if '      };' in line and qb_start_idx is not None and qb_end_idx is None:
        qb_end_idx = i
    if '        v2: [' in line and qb_start_idx is not None:
        v_start_idx = i

print(f"questionBank starts at line {qb_start_idx + 1}")
print(f"questionBank ends at line {qb_end_idx + 1}")
print(f"v2 section starts at line {v_start_idx + 1}")

# Extract the v and comp sections (from v2 to just before the closing brace)
if v_start_idx and qb_end_idx:
    v_and_comp_lines = lines[v_start_idx:qb_end_idx]
    v_and_comp_section = '\n'.join(v_and_comp_lines)
    
    # Remove the generated closing brace from grammar section
    generated_grammar_without_close = generated_grammar.rsplit('\n      };', 1)[0]
    
    # Combine: generated grammar + v_and_comp + closing brace
    new_questionbank = generated_grammar_without_close + '\n' + v_and_comp_section + '\n      };'
    
    # Replace the questionBank section in HTML
    before_qb = '\n'.join(lines[:qb_start_idx])
    after_qb = '\n'.join(lines[qb_end_idx + 1:])
    
    new_html_content = before_qb + '\n' + new_questionbank + '\n' + after_qb
    
    # Write the updated file
    with open('/Users/prabishdangi/Desktop/Personal/SilverStone Captial/offline-flipbook/src/class-tests/test-generator/class-6.html', 'w', encoding='utf-8') as f:
        f.write(new_html_content)
    
    print("\n✓ Successfully updated class-6.html!")
    print(f"  - Replaced lines {qb_start_idx + 1} to {qb_end_idx + 1}")
    print(f"  - New questionBank has Grammar chapters (g1-g24) in new format")
    print(f"  - Kept existing v and comp sections")
else:
    print("ERROR: Could not find v2 section or questionBank closing brace")

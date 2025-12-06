#!/bin/bash

# Path Update Script for Good with Grammar Class 1
# This script updates all file paths after restructuring

BASE_DIR="/Users/prabishdangi/Desktop/Personal/SilverStone Captial/Good-with-Grammar-Class-1"

echo "🔧 Starting path updates..."

# Function to backup files
backup_file() {
    cp "$1" "$1.backup"
    echo "   ✓ Backed up: $1"
}

# 1. Update Main Menu (index.html)
echo ""
echo "📝 Updating Main Menu paths..."
MAIN_MENU="$BASE_DIR/src/main-menu/index .html"
if [ -f "$MAIN_MENU" ]; then
    backup_file "$MAIN_MENU"
    
    # Update image paths
    sed -i '' 's|src="./img/|src="../../assets/images/main-menu/|g' "$MAIN_MENU"
    
    # Update navigation links
    sed -i '' 's|location.replace('\''../Flip Book/index.html'\'')|location.replace('\''../flipbook/index.html'\'')|g' "$MAIN_MENU"
    sed -i '' 's|location.replace('\''../Animation/index.html'\'')|location.replace('\''../animations/index.html'\'')|g' "$MAIN_MENU"
    sed -i '' 's|location.replace('\''../TEST-GENERATOR/index.html'\'')|location.replace('\''../test-generator/index.html'\'')|g' "$MAIN_MENU"
    sed -i '' 's|location.replace('\''../Worksheet/worksheet.html'\'')|location.replace('\''../worksheets/worksheet.html'\'')|g' "$MAIN_MENU"
    
    echo "   ✓ Main menu updated"
else
    echo "   ✗ Main menu file not found"
fi

# 2. Update Flipbook
echo ""
echo "📖 Updating Flipbook paths..."
FLIPBOOK="$BASE_DIR/src/flipbook/index.html"
if [ -f "$FLIPBOOK" ]; then
    backup_file "$FLIPBOOK"
    
    # Update page image paths
    sed -i '' 's|url(\x27./page/|url(\x27../../assets/pages/|g' "$FLIPBOOK"
    
    # Update UI image paths
    sed -i '' 's|src="./img/|src="../../assets/images/flipbook-ui/|g' "$FLIPBOOK"
    
    # Update back button link
    sed -i '' "s|location.replace('../Main Book/index .html')|location.replace('../main-menu/index .html')|g" "$FLIPBOOK"
    
    echo "   ✓ Flipbook updated"
else
    echo "   ✗ Flipbook file not found"
fi

# 3. Update Animations
echo ""
echo "🎬 Updating Animations paths..."
ANIMATIONS="$BASE_DIR/src/animations/index.html"
if [ -f "$ANIMATIONS" ]; then
    backup_file "$ANIMATIONS"
    
    # Update back button
    sed -i '' "s|location.replace('../Main Book/index .html')|location.replace('../main-menu/index .html')|g" "$ANIMATIONS"
    
    # Update video paths
    sed -i '' "s|window.open('./|window.open('../../assets/videos/|g" "$ANIMATIONS"
    
    echo "   ✓ Animations updated"
else
    echo "   ✗ Animations file not found"
fi

# 4. Update Test Generator
echo ""
echo "📝 Updating Test Generator paths..."
TEST_GEN="$BASE_DIR/src/test-generator/index.html"
if [ -f "$TEST_GEN" ]; then
    backup_file "$TEST_GEN"
    
    # Update image paths
    sed -i '' 's|src="./img/|src="../../assets/images/test-generator/|g' "$TEST_GEN"
    
    # Update question image paths
    sed -i '' 's|src="./QUS2/|src="../../assets/images/questions/|g' "$TEST_GEN"
    
    # Update back button
    sed -i '' "s|window.location.replace('../Main Book/index .html')|window.location.replace('../main-menu/index .html')|g" "$TEST_GEN"
    
    echo "   ✓ Test Generator HTML updated"
else
    echo "   ✗ Test Generator file not found"
fi

# Update Test Generator JS files
for js_file in "$BASE_DIR/src/test-generator"/{content.js,customcontent.js}; do
    if [ -f "$js_file" ]; then
        backup_file "$js_file"
        sed -i '' 's|src="./QUS2/|src="../../assets/images/questions/|g' "$js_file"
        sed -i '' "s|<img src='./QUS2/|<img src='../../assets/images/questions/|g" "$js_file"
        echo "   ✓ $(basename "$js_file") updated"
    fi
done

# 5. Update Worksheets
echo ""
echo "📄 Updating Worksheets paths..."
WORKSHEET="$BASE_DIR/src/worksheets/worksheet.html"
if [ -f "$WORKSHEET" ]; then
    backup_file "$WORKSHEET"
    
    # Update image paths
    sed -i '' 's|url(./img/|url(../../assets/images/worksheets/|g' "$WORKSHEET"
    sed -i '' 's|src="./img/|src="../../assets/images/worksheets/|g' "$WORKSHEET"
    
    # Update PDF paths (if they should be moved)
    # sed -i '' "s|window.open('./|window.open('../../assets/pdfs/|g" "$WORKSHEET"
    
    # Update back button
    sed -i '' "s|location.replace('../Main Book/index .html')|location.replace('../main-menu/index .html')|g" "$WORKSHEET"
    
    echo "   ✓ Worksheets updated"
else
    echo "   ✗ Worksheets file not found"
fi

echo ""
echo "✅ Path updates completed!"
echo ""
echo "⚠️  Important: Test the application thoroughly"
echo "📌 Backup files created with .backup extension"
echo "🗑️  Remove backups after testing: find . -name '*.backup' -delete"

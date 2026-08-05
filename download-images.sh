#!/bin/bash

# Script to download images from the original R A Logistics website
# Make sure you have wget or curl installed

BASE_URL="http://ralogistics.co.in"
IMAGES_DIR="public/images"

# Create images directory if it doesn't exist
mkdir -p $IMAGES_DIR

echo "Downloading images from $BASE_URL..."
echo "Note: You may need to manually download images if this script doesn't work"
echo "due to website restrictions or image paths."

# Try to download common image paths
# You may need to inspect the website to find the actual image URLs

# Example: If images are in /images/ folder on the website
# wget -P $IMAGES_DIR "$BASE_URL/images/hero-bg.jpg" 2>/dev/null || echo "Could not download hero-bg.jpg"
# wget -P $IMAGES_DIR "$BASE_URL/images/ground-shipping.jpg" 2>/dev/null || echo "Could not download ground-shipping.jpg"

echo ""
echo "To manually download images:"
echo "1. Open http://ralogistics.co.in/ in your browser"
echo "2. Open Developer Tools (F12)"
echo "3. Go to Network tab and filter by 'Img'"
echo "4. Reload the page"
echo "5. Right-click on images and save them to $IMAGES_DIR"
echo ""
echo "Required images:"
echo "- hero-bg.jpg (hero section background)"
echo "- ground-shipping.jpg"
echo "- air-freight.jpg"
echo "- roadways.jpg"
echo "- express.jpg"
echo "- airfreight.jpg"
echo "- warehouse.jpg"


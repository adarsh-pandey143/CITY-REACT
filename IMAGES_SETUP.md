# Setting Up Images

To match the original website exactly, you need to download images from http://ralogistics.co.in/

## Quick Setup Instructions

### Method 1: Manual Download (Recommended)

1. Open http://ralogistics.co.in/ in your browser
2. Open Developer Tools (Press F12)
3. Go to the **Network** tab
4. Filter by **Img** (images)
5. Reload the page (F5)
6. You'll see all images loading. Right-click on each image and select "Save Image As..."
7. Save them to `public/images/` with these names:

   - `hero-bg.jpg` - Hero section background image
   - `ground-shipping.jpg` - Ground shipping card image
   - `air-freight.jpg` - Air freight card image  
   - `roadways.jpg` - Roadways service image
   - `express.jpg` - Express service image
   - `airfreight.jpg` - Airfreight service image
   - `warehouse.jpg` - Warehouse service image

### Method 2: Using Browser Extension

1. Install a browser extension like "Image Downloader" or "Download All Images"
2. Navigate to http://ralogistics.co.in/
3. Use the extension to download all images
4. Rename and organize them in `public/images/` folder

### Method 3: Inspect Element

1. Right-click on an image on the website
2. Select "Inspect Element"
3. Find the `src` attribute in the HTML
4. Copy the full URL
5. Open it in a new tab and save the image

## Image Requirements

- **Format**: JPG or PNG
- **Hero Background**: Recommended 1920x800px or larger
- **Service Images**: Recommended 600x400px or larger
- **Optimization**: Compress images for web to improve loading speed

## Note

If images are not available, the website will still work - images will simply not display. The `onError` handler in the code will hide broken image placeholders gracefully.


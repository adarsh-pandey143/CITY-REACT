# R A LOGISTICS - React Website

A modern, mobile-responsive React application for R A LOGISTICS, converted from the original website at http://ralogistics.co.in/

## Features

- ✅ Fully responsive design (mobile-friendly)
- ✅ All pages from original website
- ✅ React Router for navigation
- ✅ Interactive components
- ✅ Modern UI/UX design
- ✅ Tracking functionality
- ✅ Contact form

## Pages Included

- **Home** - Hero section, service cards, and company information
- **About Us** - Company information and mission
- **Networks** - Network coverage information
- **Services**:
  - Roadways (LTL/FTL services)
  - Express (Express delivery services)
  - Airfreight (Air cargo services)
  - Warehouse (Warehousing solutions)
- **Careers** - Career opportunities
- **Prohibited Goods** - List of items that cannot be shipped
- **Tracking** - Shipment tracking functionality
- **Contact Us** - Contact form and information

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- CSS3 (Responsive Design)
- JavaScript (ES6+)

## Mobile Responsive

The website is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Header.css
│   ├── Footer.js
│   └── Footer.css
├── pages/
│   ├── Home.js
│   ├── Home.css
│   ├── AboutUs.js
│   ├── Networks.js
│   ├── Careers.js
│   ├── ProhibitedGoods.js
│   ├── Tracking.js
│   ├── Tracking.css
│   ├── ContactUs.js
│   ├── ContactUs.css
│   ├── Page.css
│   └── services/
│       ├── Roadways.js
│       ├── Express.js
│       ├── Airfreight.js
│       └── Warehouse.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## Fonts

The website uses **Roboto** and **Open Sans** fonts from Google Fonts, matching the professional look of logistics websites. These are automatically loaded via Google Fonts CDN.

## Images

To match the original website exactly, you need to download images from http://ralogistics.co.in/ and place them in the `public/images/` directory. See `IMAGES_SETUP.md` for detailed instructions.

Required images:
- `hero-bg.jpg` - Hero section background
- `ground-shipping.jpg` - Ground shipping service
- `air-freight.jpg` - Air freight service
- `roadways.jpg` - Roadways service
- `express.jpg` - Express service
- `airfreight.jpg` - Airfreight service
- `warehouse.jpg` - Warehouse service

The website will work without images, but they won't display until you add them.

## Notes

- The tracking functionality is currently a demo. You'll need to integrate it with your actual tracking API.
- The contact form is a frontend implementation. You'll need to connect it to a backend service to handle form submissions.
- All styling is done with CSS for better performance and maintainability.
- Fonts are loaded from Google Fonts for consistency with modern web standards.


# Restaurant Website Deployment Guide

## Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)
- Git

## Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/njabulomlang/restaurant-website.git
cd restaurant-website
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## Building for Production

1. Create production build:
```bash
npm run build
```

2. Test production build locally:
```bash
npm run preview
```

## Deployment to GitHub Pages

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/restaurant-website/',
  // ... other config
})
```

2. Create GitHub Actions workflow:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install Dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-pages
          folder: dist
```

## Environment Variables

Create a `.env` file:
```env
VITE_API_URL=https://api.example.com
VITE_GOOGLE_MAPS_KEY=your_google_maps_key
```

## Performance Optimization

1. Image optimization:
```javascript
import { defineConfig } from 'vite'
import imagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    imagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9] },
      svgo: { plugins: [{ removeViewBox: false }] }
    })
  ]
})
```

2. Lazy loading images:
```html
<img 
  src="placeholder.jpg"
  data-src="actual-image.jpg"
  loading="lazy"
  alt="Menu item"
/>
```

## Security Considerations

1. Content Security Policy:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               img-src 'self' data: https:; 
               style-src 'self' 'unsafe-inline';">
```

2. HTTPS Redirect:
```javascript
if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
```

## Monitoring and Analytics

1. Google Analytics setup:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

2. Error tracking:
```javascript
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Error: ' + msg + '\nURL: ' + url + '\nLine: ' + lineNo);
    // Send to analytics or error tracking service
    return false;
};
```

## Backup and Recovery

1. Regular backups:
```bash
# Backup script
#!/bin/bash
DATE=$(date +%Y%m%d)
zip -r backup_$DATE.zip dist/* .env
aws s3 cp backup_$DATE.zip s3://your-bucket/backups/
```

2. Recovery procedure:
```bash
# Recovery script
#!/bin/bash
BACKUP_DATE=$1
aws s3 cp s3://your-bucket/backups/backup_$BACKUP_DATE.zip .
unzip backup_$BACKUP_DATE.zip -d recovery/
```

## Troubleshooting

Common issues and solutions:

1. Build failures:
```bash
# Clear cache and node_modules
rm -rf node_modules
rm -rf dist
npm cache clean --force
npm install
```

2. Deployment issues:
```bash
# Check GitHub Pages settings
gh repo view --web
# Navigate to Settings > Pages
```

3. Performance issues:
```bash
# Run Lighthouse audit
npm install -g lighthouse
lighthouse https://your-site.com
```

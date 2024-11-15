import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imageUrls = {
    'task-manager.jpg': 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80', // Productivity/Task Management
    'weather-analysis.jpg': 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80', // Weather dashboard and analytics
    'portfolio.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', // Portfolio/Web Development
    'library-system.jpg': 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80', // Library/Books
    'grade-calc.jpg': 'https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=800&q=80', // Calculator/Education
    'restaurant-site.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', // Restaurant
};

const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        const imagesDir = path.join(__dirname, '..', 'public', 'images');
        
        // Create images directory if it doesn't exist
        if (!fs.existsSync(imagesDir)) {
            fs.mkdirSync(imagesDir, { recursive: true });
        }

        const filepath = path.join(imagesDir, filename);
        const file = fs.createWriteStream(filepath);

        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {
                console.error(`Error downloading ${filename}:`, err.message);
                reject(err);
            });
        });
    });
};

async function downloadAllImages() {
    console.log('Starting image downloads...');
    try {
        await Promise.all(
            Object.entries(imageUrls).map(([filename, url]) => 
                downloadImage(url, filename)
            )
        );
        console.log('All images downloaded successfully!');
    } catch (error) {
        console.error('Error downloading images:', error);
    }
}

downloadAllImages();

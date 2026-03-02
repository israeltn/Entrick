const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function exportPDF() {
    console.log('Starting PDF export...');

    // Launch headless browser
    const browser = await puppeteer.launch({
        headless: "new",
        defaultViewport: {
            width: 1920,
            height: 1080
        }
    });

    const page = await browser.newPage();

    // Navigate to the pitch deck page on the local dev server
    const url = 'http://localhost:3000/pitch';
    console.log(`Navigating to ${url}...`);

    try {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
        console.log('Page loaded successfully. Preparing PDF rendering...');

        // Inject CSS to hide scrollbars and ensure the background gradients render
        await page.addStyleTag({
            content: `
            ::-webkit-scrollbar { display: none; }
            * { -ms-overflow-style: none; scrollbar-width: none; }
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          `
        });

        // Output path
        const outputPath = path.join(__dirname, '../public/Entrick_Pitch_Deck.pdf');

        // Generate PDF
        // We want to capture the whole page as a continuous document, or we can use print pages.
        // Since it's a slide deck, standard 16:9 ratio landscape standard usually works well
        await page.pdf({
            path: outputPath,
            printBackground: true,
            format: 'A4',
            landscape: true,
            margin: { top: 0, right: 0, bottom: 0, left: 0 }
        });

        console.log(`✅ PDF successfully generated at: ${outputPath}`);
    } catch (error) {
        console.error('Failed to generate PDF:', error);
    } finally {
        await browser.close();
    }
}

exportPDF();

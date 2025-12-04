const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const urls = [
  {
    url: "https://www.berec.europa.eu/en/vas-numbering-ranges-export/json?page&_format=json",
    filename: "vas-numbering-ranges.json",
  },
  {
    url: "https://www.berec.europa.eu/en/emergency-means-export/json?page&_format=json",
    filename: "emergency-means.json",
  },
  {
    url: "https://www.berec.europa.eu/en/pws-data-export/json?page&_format=json",
    filename: "pws-data.json",
  },
];

async function downloadJSON() {
  // Create data folder if it doesn't exist
  const dataDir = path.join(__dirname, "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const { url, filename } of urls) {
    try {
      console.log(`Downloading ${filename}...`);

      // Navigate to the URL
      await page.goto(url, { waitUntil: "networkidle" });

      // Get the page content
      const content = await page.content();

      // Extract JSON from the page (it might be wrapped in HTML)
      let jsonData;
      try {
        // Try to get the text content of the body
        const bodyText = await page.evaluate(() => document.body.innerText);
        jsonData = JSON.parse(bodyText);
      } catch (e) {
        // If that fails, try to parse the entire content
        const match = content.match(/<pre[^>]*>(.*?)<\/pre>/s);
        if (match) {
          jsonData = JSON.parse(match[1]);
        } else {
          throw new Error("Could not extract JSON from page");
        }
      }

      // Save to file
      const filepath = path.join(dataDir, filename);
      fs.writeFileSync(filepath, JSON.stringify(jsonData, null, 2));
      console.log(`✓ Saved ${filename}`);
    } catch (error) {
      console.error(`✗ Error downloading ${filename}:`, error.message);
    }
  }

  await browser.close();
  console.log("\nDownload complete!");
}

downloadJSON().catch(console.error);

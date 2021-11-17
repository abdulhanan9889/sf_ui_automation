const puppeteer = require('puppeteer');
import { After } from "@cucumber/cucumber";


let browser
export const loadBrowser = async () => {
  browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized'],
    defaultViewport: null,
  })
  const context = await browser.createIncognitoBrowserContext()
  const page = await context.newPage()
  return page
}

After({tags:"@authFlow or @broadcastPage or @loginFlow or @episodePage or @experiencePage or @homePage or @unAuthFlow"},async function () {
  await browser.close()
});


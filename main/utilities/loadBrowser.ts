const puppeteer = require('puppeteer');
import { After } from "@cucumber/cucumber";


let browser
export const loadBrowser = async () => {
  const browserFetcher = puppeteer.createBrowserFetcher();
  const revisionInfo = await browserFetcher.download('901912');
  browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized'],
    defaultViewport: null,
    executablePath: revisionInfo.executablePath
  })
  //const context = await browser.createIncognitoBrowserContext()
  const page = (await browser.pages())[0]
  return page
}

// After({tags:"@authFlow or @broadcastPage or @loginFlow or @episodePage or @experiencePage or @homePage or @unAuthFlow"},async function () {
//   await browser.close()
// });


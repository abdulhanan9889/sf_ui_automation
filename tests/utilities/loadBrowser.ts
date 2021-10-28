const puppeteer = require('puppeteer');

export const loadBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized'],
    defaultViewport: null,
  })
  const page = (await browser.pages())[0]
  return page
}


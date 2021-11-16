import { getLoggedOutText } from "../user_interface/logoutSelectors";
var assert = require("assert");
export async function isUserLoggedOut(page) {
    await page.waitForSelector(getLoggedOutText);
    let text = await page.$(getLoggedOutText);
    let IS_LOGGED_OUT = await text.evaluate((status) => status?.innerText);
    await assert.equal(IS_LOGGED_OUT, "Login");
  }
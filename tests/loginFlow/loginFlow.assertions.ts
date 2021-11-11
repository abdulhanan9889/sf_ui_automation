var assert = require('assert')
import { getLogedOutText } from "../broadcastPageFlow/broadcastPage.selectors"

export async function verifyUserIsLoggedIn(page) {

  await page.waitForSelector(getLogedOutText);
  let text = await page.$(getLogedOutText);
  let IS_LOGGED_IN = await text.evaluate((status) => status?.innerText);
  await assert.equal(IS_LOGGED_IN, "My Accounts");
}
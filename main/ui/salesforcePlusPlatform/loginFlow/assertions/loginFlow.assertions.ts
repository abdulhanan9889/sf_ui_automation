var assert = require('assert')
import { getLoggedOutText } from "../../broadcastPageFlow/user_interface/logoutSelectors";

export async function verifyUserIsLoggedIn(page) {

  await page.waitForSelector(getLoggedOutText);
  let text = await page.$(getLoggedOutText);
  let IS_LOGGED_IN = await text.evaluate((status) => status?.innerText);
  await assert.equal(IS_LOGGED_IN, "My Accounts");
}
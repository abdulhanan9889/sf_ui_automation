var assert = require('assert')
import { getLogedOutText } from "../selectors/broadcastPage.selectors"

export async function verifyUserIsLoggedIn(page) {

  let text = await getLogedOutText(page);
  let IS_LOGGED_IN = await text.evaluate((status) => status?.innerText);
  console.log("Text appearing is", IS_LOGGED_IN);
  await assert.equal(IS_LOGGED_IN, "My Accounts");
}
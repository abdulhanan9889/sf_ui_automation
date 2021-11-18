var assert = require('assert')
import { getUpNextTitle } from "../../episodePageFlow/user_interface/upNextSectionSelectors";
export async function checkForUpNextTitle(page) {
    await page.waitForSelector(getUpNextTitle)
    const upNextTitle = await page.$(getUpNextTitle)
    let upNextTitleText = await upNextTitle.evaluate(text => text.innerHTML)
    await assert.equal(upNextTitleText, 'Up Next')
}
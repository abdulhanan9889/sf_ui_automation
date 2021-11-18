import { getUpNextTitle } from "../../episodePageFlow/user_interface/upNextSectionSelectors";
import { getAllSponsorsButton, getSponsorsTitle } from "../user_interface/sponsorsSectionSelectors";
var assert = require('assert')

export async function checkForAllSponsorsButton(page) {
    // let allSponsorsText = await getAllSponsorsButton(page)
    // let allSponsors = await allSponsorsText.evaluate(text => text.innerHTML)
    // assert.equal(allSponsors, 'View All Sponsors')
    await page.waitForSelector(getAllSponsorsButton)
    const allSponsorsButton = await page.$(getAllSponsorsButton)
    let allSponsorsButtonText = await allSponsorsButton.evaluate(text => text.innerHTML)
    await assert.equal(allSponsorsButtonText, 'View All Sponsors')
}
export async function checkForAllSponsorsTitle(page) {
    await page.waitForSelector(getSponsorsTitle)
    const sponsorsTitle = await page.$(getUpNextTitle)
    let sponsorsTitleText = await sponsorsTitle.evaluate(text => text.innerHTML)
    await assert.equal(sponsorsTitleText, 'Sponsors')
}
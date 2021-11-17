import {getExploreSFButton } from "../user_interface/heroBannerSelectors";
var assert = require('assert')
export async function checkExploreSFisPresent(page) {
    await page.waitForSelector(getExploreSFButton)
    const exploreSFButton = await page.$(getExploreSFButton)
    let exploreSFbuttonText = await exploreSFButton.evaluate(text => text.innerHTML)
    assert.equal(exploreSFbuttonText, 'Explore Salesforce+')
    // let exploreSFButton = await getExploreSFButton(page)
    // let exploreButtonText = await exploreSFButton.evaluate(text => text.innerHTML)
    // assert.equal(exploreButtonText, 'Explore Salesforce+')
}
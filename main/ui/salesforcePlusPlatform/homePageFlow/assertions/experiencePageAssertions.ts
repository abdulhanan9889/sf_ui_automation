
import { getExploreMoreButton } from "../../experiencePageFlow/user_interface/heroBannerSelectors";
import { getWatchNowButton } from "../user_interface/heroBannerSelectors";
var assert = require('assert')

export async function checkExploreMoreIsPresent(page) {
    await page.waitForSelector(getExploreMoreButton)
    const exploreMoreButton = await page.$(getExploreMoreButton)
    let exploreMoreButtonText = await exploreMoreButton.evaluate(text => text.innerHTML)
    await assert.equal(exploreMoreButtonText, 'Explore More')
}
export async function checkWatchNowisPresent(page) {
    await page.waitForSelector(getWatchNowButton)
    const watchNowButton = await page.$(getWatchNowButton)
    let watchNowButtonText = await watchNowButton.evaluate(text => text.innerHTML)
    await assert.equal(watchNowButtonText, 'Watch Now')
}
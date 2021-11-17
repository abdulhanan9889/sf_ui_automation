import { getFeatureEpisodeButton, getFeatureEpisodeTitle } from "../user_interface/featuredEpisodeSelectors";
var assert = require('assert')
export async function checkFeaturedEpisodeTitle(page) {
    await page.waitForSelector(getFeatureEpisodeTitle)
    const featureEpisodeTitle = await page.$(getFeatureEpisodeTitle)
    let featureEpisodeTitleText = await featureEpisodeTitle.evaluate(text => text.innerHTML)
    await assert.equal(featureEpisodeTitleText, 'ORIGINAL SERIES3 + Trailer')
}
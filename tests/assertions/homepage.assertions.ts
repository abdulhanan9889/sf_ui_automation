import { getWatchNowButton } from "../selectors/common.selectors";
import { getExploreMoreButton } from "../selectors/experiencePage.selectors";
import { getExploreSFButton, getFeatureEpisodeButton, getFeatureEpisodeTitle, getTrailorTitle, getAllEpisodesTitle } from "../selectors/homePage.selectors";

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
export async function checkWatchNowisPresent(page) {
    await page.waitForSelector(getWatchNowButton)
    const watchNowButton = await page.$(getWatchNowButton)
    let watchNowButtonText = await watchNowButton.evaluate(text => text.innerHTML)
    await assert.equal(watchNowButtonText, 'Watch Now')
}
export async function checkAllEpisodesTitle(page) {
    await page.waitForSelector(getAllEpisodesTitle)
    const allEpisodesTitle = await page.$(getAllEpisodesTitle)
    let allEpisodesTitleText = await allEpisodesTitle.evaluate(text => text.innerHTML)
    await assert.equal(allEpisodesTitleText, 'All Episodes')
}
export async function checkExploreMoreIsPresent(page) {
    await page.waitForSelector(getExploreMoreButton)
    const exploreMoreButton = await page.$(getExploreMoreButton)
    let exploreMoreButtonText = await exploreMoreButton.evaluate(text => text.innerHTML)
    await assert.equal(exploreMoreButtonText, 'Explore More')
}
export async function checkTrailorTitle(page) {
    await page.waitForSelector(getTrailorTitle)
    const trailorTitle = await page.$(getTrailorTitle)
    let trailorTitleText = await trailorTitle.evaluate(text => text.innerHTML)
    await assert.equal(trailorTitleText, 'BXP_LEARN_SERIES-1 + Trailer')
}
export async function checkFeaturedEpisodeTitle(page) {
    await page.waitForSelector(getFeatureEpisodeTitle)
    const featureEpisodeTitle = await page.$(getFeatureEpisodeTitle)
    let featureEpisodeTitleText = await featureEpisodeTitle.evaluate(text => text.innerHTML)
    await assert.equal(featureEpisodeTitleText, 'ORIGINAL SERIES3 + Trailer')
}





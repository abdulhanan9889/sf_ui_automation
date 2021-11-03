import { getWatchNowButton } from "../selectors/common.selectors";
import { getExploreMoreButton } from "../selectors/experiencePage.selectors";
import { getExploreSFButton, getFeatureEpisodeButton, getFeatureEpisodeTitle, getTrailorTitle, getWatchTrailorButton } from "../selectors/homePage.selectors";

var assert = require('assert')



export async function checkExploreSFisPresent(page) {
    let exploreSFbutton = await getExploreSFButton(page)
    let exploreSFbuttonText = await exploreSFbutton.evaluate(text => text.innerHTML)
    assert.equal(exploreSFbuttonText, 'Explore Salesforce+')
}
export async function checkWatchNowisPresent(page) {
    let watchNowbutton = await getWatchNowButton(page)
    let watchNowbuttonText = await watchNowbutton.evaluate(text => text.innerHTML)
    assert.equal(watchNowbuttonText, 'Watch Now')
}
export async function checkExploreMoreIsPresent(page) {
    let exploreMoreButton = await getExploreMoreButton(page)
    let exploreMoreButtonText = await exploreMoreButton.evaluate(text => text.innerHTML)
    assert.equal(exploreMoreButtonText, 'Explore More')
}
export async function checkTrailorTitle(page) {
    await page.waitForSelector(getTrailorTitle)
    const trailorTitle = await page.$(getTrailorTitle)
    // let trailorTitle = await getTrailorTitle(page)
    let trailorTitleText = await trailorTitle.evaluate(text => text.innerHTML)
    await assert.equal(trailorTitleText, 'BXP_LEARN_SERIES-1 + Trailer')
}

export async function checkForWatchTrailorButton(page) {
    let watchTrailorButton = await getWatchTrailorButton(page)
    let watchTrailorButtonText = await watchTrailorButton.evaluate(text => text.innerHTML)
    assert.equal(watchTrailorButtonText, 'Watch Trailer')
}

export async function checkFeaturedEpisodeTitle(page) {
    let featureEpisodeTitle = await getFeatureEpisodeTitle(page)
    let featureEpisodeTitleText = await featureEpisodeTitle.evaluate(text => text.innerHTML)
    assert.equal(featureEpisodeTitleText, 'ORIGINAL SERIES3 + Trailer')
}





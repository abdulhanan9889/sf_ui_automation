import { getExploreMoreButton } from "../selectors/experiencePage.selectors";
import { getExploreSFButton, getFeatureEpisodeButton, getFeatureEpisodeTitle, getTrailorTitle, getWatchTrailorButton } from "../selectors/homePage.selectors";

var assert = require('assert')



export async function checkExploreSFisPresent(page) {
    let exploreSFbutton = await getExploreSFButton(page)
    let exploreSFbuttonText = await exploreSFbutton.evaluate(text => text.innerHTML)
    assert.equal(exploreSFbuttonText, 'Explore Salesforce+')
}
export async function checkExploreMoreIsPresent(page) {
    let exploreMoreButton = await getExploreMoreButton(page)
    let exploreMoreButtonText = await exploreMoreButton.evaluate(text => text.innerHTML)
    assert.equal(exploreMoreButtonText, 'Explore More')
}
export async function checkTrailorTitle(page) {
    let trailorTitle = await getTrailorTitle(page)
    let trailorTitleText = await trailorTitle.evaluate(text => text.innerHTML)
    assert.equal(trailorTitleText, 'INFLECTION POINT + Trailer')
}

export async function checkForWatchTrailorButton(page) {
    let watchTrailorButton = await getWatchTrailorButton(page)
    let watchTrailorButtonText = await watchTrailorButton.evaluate(text => text.innerHTML)
    assert.equal(watchTrailorButtonText, 'Watch Trailer')
}

export async function checkFeaturedEpisodeTitle(page) {
    // var episodeTitle = await page.evaluate(() => {
    //     return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
    //     ?.shadowRoot?.querySelector("div > salesforceplus-router")
    //     ?.shadowRoot?.querySelector("div > salesforceplus-view")
    //     ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
    //     ?.shadowRoot?.querySelector("div > span")?.innerHTML;

    // })
    let featureEpisodeTitle = await getFeatureEpisodeTitle(page)
    let featureEpisodeTitleText = await featureEpisodeTitle.evaluate(text => text.innerHTML)
    assert.equal(featureEpisodeTitleText, 'SIMPLY PUT + EPISODE 1')

}





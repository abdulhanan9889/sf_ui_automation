
var assert = require('assert')
import { experienceSectionTitle, experiencesSectionEvent } from "../../homePageFlow/user_interface/experienceCarouselSelectors";
import { getAllEpisodesTitle } from "../../episodePageFlow/user_interface/seriesDetailsPageSelectors";
import { getWatchNowButton, getExperiencePageTitle } from "../user_interface/heroBannerSelectors";
import { noOfEpisodes } from "../user_interface/testDataSelectors";
import { signUpToWatchButton } from "../user_interface/eventDetailsPageSelectors";
//Test Data generation Assertions
export async function checkForAllEpisodesTitle(page) {
    await page.waitForSelector(getAllEpisodesTitle)
    const allEpisodesTitle = await page.$(getAllEpisodesTitle)
    let allEpisodesTitleText = await allEpisodesTitle.evaluate(text => text.innerHTML)
    await assert.equal(allEpisodesTitleText, 'All Episodes')
}
export async function checkWatchcNowButton(page) {
    await page.waitForSelector(getWatchNowButton)
    const watchNowButton = await page.$(getWatchNowButton)
    let watchNowButtonText = await watchNowButton.evaluate(text => text.innerHTML)
    await assert.equal(watchNowButtonText, 'Watch Now')
}
export async function checkExperiencePagetitle(page) {
    await page.waitForSelector(getExperiencePageTitle)
    const experiencePageTitle = await page.$(getExperiencePageTitle)
    let experiencePageTitleText = await experiencePageTitle.evaluate(text => text.innerHTML)
    await assert.equal(experiencePageTitleText, experienceSectionTitle)
}
export async function checkForNoOfEpisodes(page) {
    await page.waitForSelector(noOfEpisodes())
    const noOfEpisodesTitle = await page.$(noOfEpisodes())
    let noOfEpisodesTitleText = await noOfEpisodesTitle.evaluate(text => text.innerHTML)
    await assert.equal(noOfEpisodesTitleText, 'All Episodes')
}
export async function checkSignUpToWatchButton(page) {
    await page.waitForSelector(signUpToWatchButton)
    const signUpToWatchButtonTitle = await page.$(signUpToWatchButton)
    let signUpToWatchButtonTitleText = await signUpToWatchButtonTitle.evaluate(text => text.innerHTML)
    await assert.equal(signUpToWatchButtonTitleText, 'Sign up to watch')
}
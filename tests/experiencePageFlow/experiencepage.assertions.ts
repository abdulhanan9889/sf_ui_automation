
import {
    experiencesSectionEvent,
    getAllSponsorsButton,
    getExperiencePageTitle,
    getSponsorsTitle,
    getUpNextTitle,
    getWatchNowButton,
    experienceSectionTitle,
    noOfEpisodes,
    signUpToWatchButton,
    speakerName
} from "./experiencePage.selectors";
import { getAllEpisodesTitle } from "../homePageFlow/homePage.selectors";
var assert = require('assert')
//Test Data generation Assertions
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
export async function checkSpeakerName(page) {
    await page.waitForSelector(speakerName)
    const speakerNameTitle = await page.$(speakerName)
    let speakerNameTitleText = await speakerNameTitle.evaluate(text => text.innerHTML)
    await assert.equal(speakerNameTitleText, 'QA Engineer, Emumba')
}
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

export async function checkForAllSponsorsButton(page) {
    // let allSponsorsText = await getAllSponsorsButton(page)
    // let allSponsors = await allSponsorsText.evaluate(text => text.innerHTML)
    // assert.equal(allSponsors, 'View All Sponsors')
    await page.waitForSelector(getAllSponsorsButton)
    const allSponsorsButton = await page.$(getAllSponsorsButton)
    let allSponsorsButtonText = await allSponsorsButton.evaluate(text => text.innerHTML)
    await assert.equal(allSponsorsButtonText, 'View All Sponsors')
}

export async function checkForUpNextTitle(page) {
    await page.waitForSelector(getUpNextTitle)
    const upNextTitle = await page.$(getUpNextTitle)
    let upNextTitleText = await upNextTitle.evaluate(text => text.innerHTML)
    await assert.equal(upNextTitleText, 'Up Next')
}

export async function checkForAllSponsorsTitle(page) {
    await page.waitForSelector(getSponsorsTitle)
    const sponsorsTitle = await page.$(getUpNextTitle)
    let sponsorsTitleText = await sponsorsTitle.evaluate(text => text.innerHTML)
    await assert.equal(sponsorsTitleText, 'Sponsors')
}
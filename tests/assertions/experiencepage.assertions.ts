
import {
    getAllSponsorsButton,
    getExperiencePageTitle,
    getSponsorsTitle,
    getUpNextTitle,
    getWatchNowButton
} from "../selectors/experiencePage.selectors";
import { getAllEpisodesTitle } from "../selectors/homePage.selectors";
var assert = require('assert')

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
    await assert.equal(experiencePageTitleText, 'Keep the magic alive, starting with the Dreamforce Main Show.')
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
import { ACCEPT_COOKIES_BUTTON } from "../../selectors/common.selectors";
import { getExploreSalesforceButton } from "../../homePageFlow/user_interface/heroBannerSelectors";
import { pauseButton, playButton } from "../../episodePageFlow/user_interface/episodePlayerSelectors";
import { episodeButton, firstEpisodeButton, nextEpisodeButton, secondEpisodeButton } from "../../originalSeries/user_interface/EpisodeSection"
import { nextAuthenticatedEpisodeButton, seriesButton } from "../user_interface/OriginalSeriesSection";

export async function acceptCookies(page) {
    if (await page.waitForSelector(ACCEPT_COOKIES_BUTTON) !== 'null') {
        await page.focus(ACCEPT_COOKIES_BUTTON);
        await page.click(ACCEPT_COOKIES_BUTTON);
    }
}

export async function clickExploreSalesforceButton(page) {
    // let EXPLORE_SALESFORCE_BUTTON = await exploreSalesforceButton(page)
    await page.waitForSelector(getExploreSalesforceButton)
    const EXPLORE_SALESFORCE_BUTTON = await page.$(getExploreSalesforceButton)
    EXPLORE_SALESFORCE_BUTTON.click()
    // await EXPLORE_SALESFORCE_BUTTON.evaluate((ele) => ele.click())
}

export async function clickSeriesButton(page) {
    await page.waitForSelector(seriesButton())
    let SERIES_BUTTON = await page.$(seriesButton())
    SERIES_BUTTON.click()
    // SERIES_BUTTON.evaluate((ele) => ele.click())
}

export async function clickEpisodeButton(page) {

    await page.waitForSelector(episodeButton())
    let EPISODE_BUTTON = await page.$(episodeButton())
    EPISODE_BUTTON.click()
    // EPISODE_BUTTON.evaluate((ele) => ele.click())
}

export async function clickPlayButton(page) {
    await page.waitForSelector(playButton)
    let PLAY_BUTTON = await page.$(playButton)
    //PLAY_BUTTON.click()
    PLAY_BUTTON.evaluate((ele) => ele.click())
}

export async function clickPauseButton(page) {
    await page.waitForSelector(pauseButton)
    let PAUSE_BUTTON = await page.$(pauseButton)
    // PAUSE_BUTTON.click()
    PAUSE_BUTTON.evaluate((ele) => ele.click())
}

export async function clickFirstEpisodeButton(page) {

    await page.waitForSelector(firstEpisodeButton())
    let FIRST_EPISODE_BUTTON = await page.$(firstEpisodeButton())
    FIRST_EPISODE_BUTTON.click()
    // FIRST_EPISODE_BUTTON.evaluate((ele) => ele.click())
}

export async function clickSecondEpisodeButton(page) {

    await page.waitForSelector(secondEpisodeButton())
    let SECOND_EPISODE_BUTTON = await page.$(secondEpisodeButton())
    SECOND_EPISODE_BUTTON.click()
    // SECOND_EPISODE_BUTTON.evaluate((ele) => ele.click())
}

export async function clickNextEpisodeButton(page, episodeNo) {
    await page.waitForSelector(nextEpisodeButton(episodeNo))
    let EPISODE_BUTTON = await page.$(nextEpisodeButton(episodeNo))
    EPISODE_BUTTON.click()
}

export async function clickNextAuthenticatedEpisodeButton(page, episodeNo) {
    await page.waitForSelector(nextAuthenticatedEpisodeButton(episodeNo))
    let EPISODE_BUTTON = await page.$(nextAuthenticatedEpisodeButton(episodeNo))
    EPISODE_BUTTON.click()
}
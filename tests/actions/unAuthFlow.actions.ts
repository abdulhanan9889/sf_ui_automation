import { ACCEPT_COOKIES_BUTTON } from "../selectors/common.selectors";
import { exploreSalesforceButton, seriesButton, episodeButton, playButton, pauseButton, firstEpisodeButton, secondEpisodeButton } from "../selectors/unAuthFlow.selectors";

export async function acceptCookies(page) {
    if (await page.waitForSelector(ACCEPT_COOKIES_BUTTON) !== 'null') {
        await page.focus(ACCEPT_COOKIES_BUTTON);
        await page.click(ACCEPT_COOKIES_BUTTON);
    }
}

export async function clickExploreSalesforceButton(page) {
    let EXPLORE_SALESFORCE_BUTTON = await exploreSalesforceButton(page)
    await EXPLORE_SALESFORCE_BUTTON.evaluate((ele) => ele.click())
}

export async function clickSeriesButton(page) {
    let SERIES_BUTTON = await seriesButton(page)
    SERIES_BUTTON.evaluate((ele) => ele.click())
}

export async function clickEpisodeButton(page) {
    let EPISODE_BUTTON = await episodeButton(page)
    EPISODE_BUTTON.evaluate((ele) => ele.click())
}

export async function clickPlayButton(page) {
    let PLAY_BUTTON = await playButton(page)
    PLAY_BUTTON.evaluate((ele) => ele.click())
}

export async function clickPauseButton(page) {
    let PAUSE_BUTTON = await pauseButton(page)
    PAUSE_BUTTON.evaluate((ele) => ele.click())
}

export async function clickFirstEpisodeButton(page) {
    let FIRST_EPISODE_BUTTON = await firstEpisodeButton(page)
    FIRST_EPISODE_BUTTON.evaluate((ele) => ele.click())
}

export async function clickSecondEpisodeButton(page) {
    let SECOND_EPISODE_BUTTON = await secondEpisodeButton(page)
    SECOND_EPISODE_BUTTON.evaluate((ele) => ele.click())
}
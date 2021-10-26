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
    if (!EXPLORE_SALESFORCE_BUTTON) {
        setTimeout(clickExploreSalesforceButton, 100)
    } else {
        await EXPLORE_SALESFORCE_BUTTON.evaluate((ele) => ele.click())
    }
}

export async function clickSeriesButton(page) {
    let SERIES_BUTTON = await seriesButton(page)
    if (!SERIES_BUTTON) {
        setTimeout(clickSeriesButton, 100)
    } else {
        SERIES_BUTTON.evaluate((ele) => ele.click())
    }
}

export async function clickEpisodeButton(page) {
    let EPISODE_BUTTON = await episodeButton(page)
    if (!EPISODE_BUTTON) {
        setTimeout(clickEpisodeButton, 100)
    } else {
        EPISODE_BUTTON.evaluate((ele) => ele.click())
    }
}

export async function clickPlayButton(page) {
    let PLAY_BUTTON = await playButton(page)
    if (!PLAY_BUTTON) {
        setTimeout(clickPlayButton, 100)
    } else {
        PLAY_BUTTON.evaluate((ele) => ele.click())
    }
}

export async function clickPauseButton(page) {
    let PAUSE_BUTTON = await pauseButton(page)
    if (!PAUSE_BUTTON) {
        setTimeout(clickPauseButton, 100)
    } else {
        PAUSE_BUTTON.evaluate((ele) => ele.click())
    }
}

export async function clickFirstEpisodeButton(page) {
    let FIRST_EPISODE_BUTTON = await firstEpisodeButton(page)
    if (!FIRST_EPISODE_BUTTON) {
        setTimeout(clickFirstEpisodeButton, 100)
    } else {
        FIRST_EPISODE_BUTTON.evaluate((ele) => ele.click())
    }
}

export async function clickSecondEpisodeButton(page) {
    let SECOND_EPISODE_BUTTON = await secondEpisodeButton(page)
    if (!SECOND_EPISODE_BUTTON) {
        setTimeout(clickSecondEpisodeButton, 100)
    } else {
        SECOND_EPISODE_BUTTON.evaluate((ele) => ele.click())
    }
}

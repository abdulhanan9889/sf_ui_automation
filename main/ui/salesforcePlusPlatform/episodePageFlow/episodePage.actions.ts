import { secondAuthorizedEpisodeButton } from "./user_interface/upNextSectionSelectors"
import { getCloseButton } from "../selectors/common.selectors"
import {authorizedEpisodeButton, authorizedSeriesButton } from "./user_interface/testDataSelectors"
export async function clickAuthorizedSeriesButton(page) {
    await page.waitForSelector(authorizedSeriesButton())
    let AUTHORIZED_SERIES_BUTTON = await page.$(authorizedSeriesButton())
    AUTHORIZED_SERIES_BUTTON.click()
}

export async function clickAuthorizedEpisodeButton(page) {
    await page.waitForSelector(authorizedEpisodeButton())
    let AUTHORIZED_EPISODE_BUTTON = await page.$(authorizedEpisodeButton())
    AUTHORIZED_EPISODE_BUTTON.click()
}

export async function clickSecondAuthorizedEpisodeButton(page) {
    await page.waitForSelector(secondAuthorizedEpisodeButton)
    let AUTHORIZED_EPISODE_BUTTON = await page.$(secondAuthorizedEpisodeButton)
    AUTHORIZED_EPISODE_BUTTON.click()
}

export async function clickCrossButton(page) {
    await page.waitForSelector(getCloseButton)
    let CLOSE_BUTTON = await page.$(getCloseButton)
    CLOSE_BUTTON.click()
}
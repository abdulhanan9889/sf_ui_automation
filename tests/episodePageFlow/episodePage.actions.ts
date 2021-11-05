import { authorizedEpisodeButton, authorizedSeriesButton, secondAuthorizedEpisodeButton } from "./episodePage.selectors"

export async function clickAuthorizedSeriesButton(page) {
    await page.waitForSelector(authorizedSeriesButton)
    let AUTHORIZED_SERIES_BUTTON = await page.$(authorizedSeriesButton)
    AUTHORIZED_SERIES_BUTTON.click()
}

export async function clickAuthorizedEpisodeButton(page) {
    await page.waitForSelector(authorizedEpisodeButton)
    let AUTHORIZED_EPISODE_BUTTON = await page.$(authorizedEpisodeButton)
    AUTHORIZED_EPISODE_BUTTON.click()
}

export async function clickSecondAuthorizedEpisodeButton(page) {
    await page.waitForSelector(secondAuthorizedEpisodeButton)
    let AUTHORIZED_EPISODE_BUTTON = await page.$(secondAuthorizedEpisodeButton)
    AUTHORIZED_EPISODE_BUTTON.click()
}
import {
    clickExploreSalesforceButton,
    clickSeriesButton,
    clickEpisodeButton,
    clickPlayButton,
    clickPauseButton,
    clickFirstEpisodeButton,
    clickSecondEpisodeButton,
    clickNextEpisodeButton
} from "../actions/unAuthFlow.actions";
import { waitTillHTMLRendered } from "../../../../utilities/waitTillHTMLRendered";

export async function openSeries(page) {
    await clickExploreSalesforceButton(page)
    await waitTillHTMLRendered(page)
    await clickSeriesButton(page)
    await waitTillHTMLRendered(page)
}

export async function openEpisode(page) {
    await clickExploreSalesforceButton(page)
    await waitTillHTMLRendered(page)
    await clickSeriesButton(page)

    await waitTillHTMLRendered(page)
    await clickEpisodeButton(page)
    await waitTillHTMLRendered(page)
}

export async function playEpisode(page) {
    await waitTillHTMLRendered(page)
    await page.waitForTimeout(10000)
    await clickPlayButton(page)
    await page.waitForTimeout(10000)
    await clickPauseButton(page)
    await page.waitForTimeout(4000)
}

export async function openFirstEpisode(page) {
    await clickExploreSalesforceButton(page)
    await waitTillHTMLRendered(page)
    await clickSeriesButton(page)
    await waitTillHTMLRendered(page)
    await clickFirstEpisodeButton(page)
    await waitTillHTMLRendered(page)
}

export async function openSecondEpisode(page) {
    await clickSecondEpisodeButton(page)
    await waitTillHTMLRendered(page)
    await page.reload()
    await waitTillHTMLRendered(page)
}

export async function openNextEpisode(page, episodeNo) {
    await clickNextEpisodeButton(page, episodeNo)
    await waitTillHTMLRendered(page)
}

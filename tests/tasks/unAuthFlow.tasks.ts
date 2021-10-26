import { clickExploreSalesforceButton, clickSeriesButton, clickEpisodeButton, clickPlayButton, clickPauseButton, clickFirstEpisodeButton, clickSecondEpisodeButton } from "../actions/unAuthFlow.actions";
import { waitTillHTMLRendered } from "../utilities/waitTillHTMLRendered";

export async function openEpisode(page){
    await clickExploreSalesforceButton(page)
    await clickSeriesButton(page)
    await waitTillHTMLRendered(page)
    await clickEpisodeButton(page)
    await waitTillHTMLRendered(page)
}

export async function playEpisode(page){
    await waitTillHTMLRendered(page)
    await page.waitForTimeout(10000)
    await clickPlayButton(page)
    await page.waitForTimeout(10000)
    await clickPauseButton(page)
}

export async function openFirstEpisode(page){
    await clickExploreSalesforceButton(page)
    await clickSeriesButton(page)
    await waitTillHTMLRendered(page)
    await clickFirstEpisodeButton(page)
    await waitTillHTMLRendered(page)
}

export async function openSecondEpisode(page){
    await clickSecondEpisodeButton(page)
    await waitTillHTMLRendered(page)
}
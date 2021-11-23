import {
    clickExploreSalesforceButton,
    clickSeriesButton,
    clickEpisodeButton,
    clickPlayButton,
    clickPauseButton,
    clickFirstEpisodeButton,
    clickSecondEpisodeButton,
    clickNextEpisodeButton,
    clickNextAuthenticatedEpisodeButton
} from "../../originalSeries/actions/unAuthFlow.actions";
import { waitTillHTMLRendered } from "../../../../utilities/waitTillHTMLRendered";


export async function openSeries(page) {
    //await clickExploreSalesforceButton(page)
    await waitTillHTMLRendered(page)
    await clickSeriesButton(page)
    await waitTillHTMLRendered(page)
}

import SFDataInsertion from "../../../../testDataGeneration/testDataLogic/SFDataInsertion";
import SFDataLogic from "../../../../testDataGeneration/testDataLogic/testDataLogic";
import SFDataDeletion from "../../../../testDataGeneration/testDataLogic/SFDataDeletion";
export var testDataSet: SFDataLogic = new SFDataLogic()



export async function openEpisode(page) {
  //  await clickExploreSalesforceButton(page)
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
    await page.waitForTimeout(2000)
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
    await waitTillHTMLRendered(page)
    await clickNextEpisodeButton(page, episodeNo)
    await waitTillHTMLRendered(page)
}

export async function openNextAuthenticatedEpisode(page, episodeNo) {
    await waitTillHTMLRendered(page)
    await clickNextAuthenticatedEpisodeButton(page, 2)
    await waitTillHTMLRendered(page)
}

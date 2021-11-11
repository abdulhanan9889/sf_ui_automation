import { clickExploreSalesforceButton, clickSeriesButton, clickEpisodeButton, clickPlayButton, clickPauseButton, clickFirstEpisodeButton, clickSecondEpisodeButton, clickNextEpisodeButton } from "../unAuthenticatedFlow/unAuthFlow.actions";
import { waitTillHTMLRendered } from "../utilities/waitTillHTMLRendered";
import SFDataInsertion from "../testDataGeneration/testDataLogic/SFDataInsertion";
import SFDataLogic from "../testDataGeneration/testDataLogic/testDataLogic";
import SFDataDeletion from "../testDataGeneration/testDataLogic/SFDataDeletion";
export var testDataSet: SFDataLogic = new SFDataLogic()

// export async function testData(numberOfEpisodesPerSeries: number,
//     seriesStartDayFromToday: number, seriesEndDayFromToday: number, numberOfSpeakers: number,
//     firstName: string, lastName: string, designation: string, company: string) {
//     await SFDataInsertion.createOriginalSeries(testDataSet, numberOfEpisodesPerSeries, numberOfSpeakers, firstName, lastName, company, designation)
//     return testDataSet
// }

export async function destroy() {
    await SFDataDeletion.DeleteOriginalSeries(testDataSet)
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

import SFDataLogic from "../../../../testDataGeneration/testDataLogic/testDataLogic";
import SFDataInsertion from "../../../../testDataGeneration/testDataLogic/SFDataInsertion"
import SFDataDeletion from "../../../../testDataGeneration/testDataLogic/SFDataDeletion"
import {
    seriesDetails,
    firstEpisode,
    nextEpisode,
} from "../user_interface/testDataSelectors";
//TestData Generation Tasks
export var testDataSet: SFDataLogic = new SFDataLogic()
export async function testData(seriesStartFromToday: number, seriesEndFromtaday: number, noOfSeries: number, noOfEpisodesPerSeries: number, noOfSpeakers: number, firstName: string, lastName: string, designation: string, company: string) {
    let event = await testDataSet.createEvent(seriesStartFromToday, 0, seriesEndFromtaday, 12)
    //@ts-ignore
    await SFDataInsertion.createSeriesWithEpisodes(testDataSet, seriesStartFromToday, seriesEndFromtaday, noOfSeries, noOfEpisodesPerSeries, noOfSpeakers, event, firstName, lastName, company, designation)
}
export async function testDataDelete() {
    await SFDataDeletion.DeleteOriginalSeries(testDataSet)
}
export async function navigateToDetailsPageOfTheEvent(page) {
    await page.waitForSelector(seriesDetails())
    let seriesDetailsButton = await page.$(seriesDetails())
    await seriesDetailsButton.click()
}
export async function navigateToFirstEpisode(page) {
    await page.waitForSelector(firstEpisode())
    let firstEpisodePlayButton = await page.$(firstEpisode())
    await firstEpisodePlayButton.click()
}
export async function clickNextEpisodeButton(page, episodeNo) {
    await page.waitForSelector(nextEpisode(episodeNo))
    let EPISODE_BUTTON = await page.$(nextEpisode(episodeNo))
    EPISODE_BUTTON.click()
    // EPISODE_BUTTON.evaluate((ele) => ele.click())
}
//TestData Generation Tasks
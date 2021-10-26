import { Given } from '@cucumber/cucumber'
import SFDataInsertion from "../testDataGeneration/testDataLogic/SFDataInsertion"


Given('user generates data for authenticated flows', async function (datatable) {
    const testDataParameters = await datatable.hashes()[0]
    await SFDataInsertion.createEventFlowHavingSeriesWithEpisodes(testDataParameters.numberOfSeries, testDataParameters.numberOfEpisodesPerSeries, testDataParameters.eventStartDayFromToday, testDataParameters.eventStartHour, testDataParameters.eventEndDayFromToday, testDataParameters.eventEndHour)
})

Given('user generates data for unauthenticated flows', async function (datatable) {
    const testDataParameters = await datatable.hashes()[0]
    await SFDataInsertion.createOriginalSeriesWithEpisodes(testDataParameters.numberOfSeries, testDataParameters.numberOfEpisodesPerSeries, testDataParameters.seriesStartDayFromToday, testDataParameters.seriesEndDayFromToday)
})
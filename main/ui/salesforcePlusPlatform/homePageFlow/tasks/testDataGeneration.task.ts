import SFDataLogic from "../../../../testDataGeneration/testDataLogic/testDataLogic";
import SFDataInsertion from "../../../../testDataGeneration/testDataLogic/SFDataInsertion"
import SFDataDeletion from "../../../../testDataGeneration/testDataLogic/SFDataDeletion"
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
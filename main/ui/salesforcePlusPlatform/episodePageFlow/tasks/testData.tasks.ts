import SFDataInsertion from '../../../../testDataGeneration/testDataLogic/SFDataInsertion'
import SFDataLogic from '../../../../testDataGeneration/testDataLogic/testDataLogic'
import SFDataDeletion from "../../../../testDataGeneration/testDataLogic/SFDataDeletion"

export var testDataSetAuth: SFDataLogic = new SFDataLogic()

let email
//unauth content
// export async function testData(numberOfEpisodesPerSeries: number,
//     seriesStartDayFromToday: number, seriesEndDayFromToday: number, numberOfSpeakers: number) {
//     await SFDataInsertion.createOriginalSeries(testDataSetAuth, numberOfEpisodesPerSeries,
//         seriesStartDayFromToday, seriesEndDayFromToday, numberOfSpeakers)
//     return testDataSetAuth
// }
export async function destroy() {
    await SFDataDeletion.DeleteOriginalSeries(testDataSetAuth)
}
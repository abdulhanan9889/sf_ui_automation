import SFDataInsertion from "../../../../testDataGeneration/testDataLogic/SFDataInsertion";
import SFDataLogic from "../../../../testDataGeneration/testDataLogic/testDataLogic";
export var testDataSet: SFDataLogic = new SFDataLogic()
import { verifySignupRecordFromDatabase } from "../assertions/userDetails.assertions";
let email;

export async function testData(seriesStartFromToday: number, seriesEndFromtaday: number, noOfSeries: number, noOfEpisodesPerSeries: number, noOfSpeakers: number, firstName: string, lastName: string, company: string, designation: string) {
    let event = await testDataSet.createEvent(seriesStartFromToday, 0, seriesEndFromtaday, 12)
    //@ts-ignore
    await SFDataInsertion.createSeriesWithEpisodes(testDataSet, seriesStartFromToday, seriesEndFromtaday, noOfSeries, noOfEpisodesPerSeries, noOfSpeakers, event, firstName, lastName, company, designation)
}

export async function verifySignupFields(page, dataTable) {
    const signupParameters = await dataTable.hashes()[0]
    let signupRecord = await SFDataLogic.queryUser(email)
    console.log(signupRecord)
    await verifySignupRecordFromDatabase(signupParameters, signupRecord)
}
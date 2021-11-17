import { waitTillHTMLRendered } from "../../../utilities/waitTillHTMLRendered";
import { clickFeaturedEpisodeCard } from "./featuredEpisodeFlow.actions";



// import SFDataInsertion from "../../../testDataGeneration/testDataLogic/SFDataInsertion";
// import SFDataLogic from "../../../testDataGeneration/testDataLogic/testDataLogic";
// import SFDataDeletion from "../../../testDataGeneration/testDataLogic/SFDataDeletion";
// export var testDataSet: SFDataLogic = new SFDataLogic()
// export var testDataSetUpcoming: SFDataLogic = new SFDataLogic()


// export async function testData(numberOfEpisodesPerSeries: number,
//     seriesStartDayFromToday: number, seriesEndDayFromToday: number, numberOfSpeakers: number,
//     firstName: string, lastName: string, designation: string, company: string) {
//     await SFDataInsertion.createOriginalSeries(testDataSet, numberOfEpisodesPerSeries, numberOfSpeakers, firstName, lastName, company, designation)
//     return testDataSet
// }

// export async function testDataUnpublished(seriesStartDayFromToday: number, seriesEndDayFromToday: number){
//     await testDataSetUpcoming.createSeries(seriesStartDayFromToday, seriesEndDayFromToday, "Coming Soon")
//  }
 
//  export async function destroy() {
//      await SFDataDeletion.DeleteOriginalSeries(testDataSet)
//      await SFDataDeletion.DeleteOriginalSeries(testDataSetUpcoming)
//  }




export async function playFeauredEpisode(page) {
    // await clickDreamForceTab(page)
    // await waitTillHTMLRendered(page)
    await clickFeaturedEpisodeCard(page);
    await waitTillHTMLRendered(page)
}
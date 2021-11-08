import SFDataLogic from "./testDataLogic";
import SFDataInsertion from "./SFDataInsertion";

export default class SFDataDeletion {

    static async DeleteOriginalSeries(testData: SFDataLogic) {
        //delete content group assignments
        for (let i = 0; i < testData.contentGroupAssignmentIDs.length; i++) {
            console.log("delete content group assignments")
            await SFDataLogic.deleteRecord("bxp_Content_Group_Assignment__c", testData.contentGroupAssignmentIDs[i])
        }
        for (let i = 0; i < testData.speakerAssignment.length; i++) {
            console.log("delete speaker assignment")
            await SFDataLogic.deleteRecord("bxp_Speaker_Assignment__c", testData.speakerAssignment[i])
        }
        //delete content assignments
        for (let i = 0; i < testData.contentAssigmentIDs.length; i++) {
            console.log("delete content assignments")
            await SFDataLogic.deleteRecord("bxp_Content_Assignment__c", testData.contentAssigmentIDs[i])
        }

        //delete episode list
        for (let i = 0; i < testData.episodeList.length; i++) {
            console.log("delete episode list")
            await SFDataLogic.deleteRecord(testData.episodeList[i].objectApi, testData.episodeList[i].objectId)

        }

        //delete series
        for (let i = 0; i < testData.seriesList.length; i++) {
            console.log("delete series")
            await SFDataLogic.deleteRecord(testData.seriesList[i].objectApi, testData.seriesList[i].objectId)
        }
        //delete Events
        for (let i = 0; i < testData.eventList.length; i++) {
            console.log("delete events")
            await SFDataLogic.deleteRecord(testData.eventList[i].objectApi, testData.eventList[i].objectId)
        }
        //delete Channels
        for (let i = 0; i < testData.channelList.length; i++) {
            console.log("delete Channels")
            await SFDataLogic.deleteRecord(testData.channelList[i].objectApi, testData.channelList[i].objectId)
        }
        //delete segments
        for (let i = 0; i < testData.segmentList.length; i++) {
            console.log("delete segments")
            await SFDataLogic.deleteRecord(testData.segmentList[i].objectApi, testData.segmentList[i].objectId)
        }
        //delete speakers
        for (let i = 0; i < testData.speakerId.length; i++) {
            console.log("delete speakers")
            await SFDataLogic.deleteRecord("bxp_speaker__c", testData.speakerId[i])
        }
    }
}
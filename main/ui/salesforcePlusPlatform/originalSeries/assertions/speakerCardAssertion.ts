import { episodeButton } from "../user_interface/EpisodeSection";
import { getEpisodeNumber } from "../../episodePageFlow/user_interface/episodeDetailsSelectors";
import { getEpisodeTitle } from "../../episodePageFlow/user_interface/episodeDetailsSelectors";
import { getSeriesTitle } from "../../episodePageFlow/user_interface/episodeDetailsSelectors";
import {episodecard} from "../user_interface/EpisodeSection"
import { testDataSet } from '../tasks/createDestroyOriginalSeries'
import getSpeakerDataFromDB from "../../../../testDataGeneration/testDataLogic/dbAssertions/dBAssertionsSpeakers";
import assert from "../../../../../node_modules/soft-assert/index"
import { speakerDetail, speakerName } from "../user_interface/SpeakerSection"
import { getSpeakerNames, getSpeakerDesignation } from "../../episodePageFlow/user_interface/speakerSectionSelectors"
'./user_interface/speakerSectionSelectors';


export default  async function verifySpeakerCardDetails(page){

    let speakerName = await page.$$eval(getSpeakerNames, vals => vals.map(val => val.innerHTML))
    let speakerDesignation = await page.$$eval(getSpeakerDesignation, vals => vals.map(val => val.innerHTML))
     let object:object


    for (let i =0; i < testDataSet.episodeList[0].speakerList.length; i++){
    
        object = await getSpeakerDataFromDB(testDataSet.speakerId[i])
      
        //@ts-ignore
        let name = object.records[0].Speaker_First_Name__c + " " + object.records[0].Speaker_Last_Name__c
        //@ts-ignore
        let speakerDesignationValue = `${object.records[0].Speaker_Job_Title__c}, ${object.records[0].Speaker_Company_Name__c}`
        await assert.softAssert(speakerName[i], name, "speaker name assertion failed", [])
        await assert.softAssert(speakerDesignation[i], speakerDesignationValue, "speaker name assertion failed", [])

    }

   
}
import getEpisodeDataFromDB from "../../../../testDataGeneration/testDataLogic/dbAssertions/dBAssertionsEpisode";
import getSpeakerDataFromDB from "../../../../testDataGeneration/testDataLogic/dbAssertions/dBAssertionsSpeakers";
import { getSpeakerDesignation, getSpeakerNames } from "../../episodePageFlow/user_interface/speakerSectionSelectors";
import { episodecard } from "../../originalSeries/user_interface/EpisodeSection";
import { testDataSet } from "../featuredEpisodeTasks/createDestroyFeaturedEpisodes";
import { featuredEpisodeDescription, featuredEpisodeGuestSpeakerNames, featuredEpisodeNumber, featuredEpisodeTitle  } from "../user_interface/featuredEpisode.selectors";
var assert = require("assert");
import assert from "../../../../../node_modules/soft-assert"





export async function verifyFeaturedEpisodeNumber(page){
//   featuredEpisodeSeriesTitle
    await page.waitForSelector(featuredEpisodeNumber,{visible:true,timeout:3000}); 
    const featuredEpisodeNumberElement= await page.$(featuredEpisodeNumber);
    // const b= featuredEpisodeNumberElement.innerHTML;
   let featuredEpisodeNumberValue = await featuredEpisodeNumberElement.evaluate(element=>element.innerHTML);
   featuredEpisodeNumberValue = featuredEpisodeNumberValue.split("• ")[1];
    await assert.equal(featuredEpisodeNumberValue,'EPISODE 2','message were not equal');
}

export async function verifyFeaturedEpisodeTitle(page){

    console.log(testDataSet)
    let obj:any

     obj = await getEpisodeDataFromDB(testDataSet.episodeIDs[0])

    await page.waitForSelector(featuredEpisodeTitle,{visible:true,timeout:3000}); 
    const featuredEpisodeTitleElement= await page.$(featuredEpisodeTitle);//episodecard()
    const featuredEpisodeDescriptionElement= await page.$(featuredEpisodeDescription);
       
    // const b= featuredEpisodeNumberElement.innerHTML;
   let featuredEpisodeTitleValue = await featuredEpisodeTitleElement.evaluate(element=>element.innerHTML);
   let featuredEpisodeDescriptionValue = await featuredEpisodeDescriptionElement.evaluate(element=>element.innerHTML);
//    featuredEpisodeSeriesTitleValue = featuredEpisodeSeriesTitle.split("• ")[1];

    console.log("selector Title selector Title selector Title selector Title selector Title selector Title selector Title")
    console.log(featuredEpisodeTitleValue);
    console.log("selector Title selector Title selector Title selector Title selector Title selector Title selector Title")
    console.log("testdata title testdata title testdata title testdata title testdata title testdata title testdata title")
    console.log(obj.records[0].Name);
    console.log("testdata title testdata title testdata title testdata title testdata title testdata title testdata title")
    console.log(featuredEpisodeDescriptionValue);



    await assert.equal(featuredEpisodeTitleValue, obj.records[0].Name,'message were not equal');
    await assert.equal(featuredEpisodeDescriptionValue, obj.records[0].Description__c, `Episode Name for episode  is not correct` ,[] )
    //assert.softContains not working
 }

export async function verifyFeaturedEpisodeGuestSpeakerNames(page){
  
    await page.waitForSelector(featuredEpisodeGuestSpeakerNames,{visible:true,timeout:3000}); 
    const featuredEpisodeGuestSpeakerNamesElement= await page.$$(featuredEpisodeGuestSpeakerNames);
    // const b= featuredEpisodeNumberElement.innerHTML;
//    let featuredEpisodeGuestSpeakerNamesValue = await featuredEpisodeGuestSpeakerNamesElement.evaluate(element=>element.innerHTML);
//    featuredEpisodeSeriesTitleValue = featuredEpisodeGuestSpeakerValue.split("• ")[1];
    const a= ['Sarah Franklin','Alex Mahon']
    await featuredEpisodeGuestSpeakerNamesElement.forEach(async (element) => {
        await assert.equal(element.innerHTML,a);
    });
    // await assert.equal(featuredEpisodeGuestSpeakerNamesValue,'Sarah Franklin');
}


export default  async function verifySpeakerCardDetails(page){

    let speakerName = await page.$$eval(getSpeakerNames, vals => vals.map(val => val.innerHTML))
    let speakerDesignation = await page.$$eval(getSpeakerDesignation, vals => vals.map(val => val.innerHTML))
     let object:object
     object = await getSpeakerDataFromDB(testDataSet.speakerId[0])
     console.log('speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker');
     console.log(object);
     console.log('speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker');

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

export async function verifyFeaturedEpisodeCardDetails(page){

    // let object:object
        // object = await getEpisodeDataFromDB(testDataSet.episodeIDs[0])
        //@ts-ignore
    //    assert.softContains(episodeNumberValue, object.records[0].Name, `Episode Name for episode ${i} is not correct` ,[] )
        //@ts-ignore
    //    assert.softContains(episodeNumberValue, object.records[0].Description__c, `Episode Name for episode ${i} is not correct` ,[] )
 
     
    
}
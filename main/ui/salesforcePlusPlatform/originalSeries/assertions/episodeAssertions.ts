import { episodeButton } from "../user_interface/EpisodeSection";
import { getEpisodeDetail, getEpisodeNumber } from "../../episodePageFlow/user_interface/episodeDetailsSelectors";
import { getEpisodeTitle } from "../../episodePageFlow/user_interface/episodeDetailsSelectors";
import { getSeriesTitle } from "../../episodePageFlow/user_interface/episodeDetailsSelectors";
import {episodecard} from "../user_interface/EpisodeSection"
import { testDataSet } from '../tasks/createDestroyOriginalSeries'
import getEpisodeDataFromDB from "../../../../testDataGeneration/testDataLogic/dbAssertions/dBAssertionsEpisode";
import assert from "soft-assert"
import { waitTillHTMLRendered } from "../../../../utilities/waitTillHTMLRendered";
import dBAssertionOriginalSeries from "../../../../testDataGeneration/testDataLogic/dbAssertions/dBAssertionsSeries"
export  async function verifyEpisodeCardDetails(page){

    console.log(testDataSet)
    let object : object


    let episodeNumberElement = await page.$(episodecard())
    let episodeNumberValue = await episodeNumberElement.evaluate(
        (ele) => ele.innerHTML
    );

    for (let i =0; i < testDataSet.episodeList.length ; i++){

        object = await getEpisodeDataFromDB(testDataSet.episodeIDs[i])
        //@ts-ignore
       assert.softContains(episodeNumberValue, object.records[0].Name, `Episode Name for episode ${i} is not correct` ,[] )
        //@ts-ignore
       assert.softContains(episodeNumberValue, object.records[0].Description__c, `Episode Name for episode ${i} is not correct` ,[] )
 
     }
  
   
}

export  async function verifyEpisodeScreenDetails(page){

    console.log(testDataSet)
    let object : object
   

    // let episodeTitleElement = await page.$(getEpisodeTitle)
    // console.log(episodeTitleElement)
    // let episodeTitleValue = await episodeTitleElement.evaluate(
    //     (ele) => ele.innerHTML
    // );
    // console.log(episodeTitleValue)

    // let episodeDetailElement = await page.$(getEpisodeDetail)
    // console.log(episodeDetailElement)
    // let episodeDetailValue = await episodeDetailElement.evaluate(
    //     (ele) => ele.innerHTML
    // );
   // console.log(episodeDetailValue)

  let obj: object
  obj = await dBAssertionOriginalSeries.getSeriesDataFromDB(testDataSet.seriesIDs[0])

   
   
    for(let i =0; i <testDataSet.episodeList.length ; i++)
    {
        let episodeNumberElement = await page.$(getEpisodeNumber)
        let episodeNumberValue = await episodeNumberElement.evaluate(
            (ele) => ele.innerHTML
        );
        episodeNumberValue = episodeNumberValue.split("• ")[1];
        let seriesTitleElement = await page.$(getSeriesTitle)
        let seriesTitleValue = await seriesTitleElement.evaluate(
            (ele) => ele.innerHTML
        );
        seriesTitleValue = seriesTitleValue.split(" •")[0];
        console.log(episodeNumberValue , seriesTitleValue)
        await assert.softAssert(episodeNumberValue, "EPISODE ${i+1}", "episode number assertion failed", [])
        //@ts-ignore
        await assert.softAssert(seriesTitleValue, obj.records[0].Name.toLowerCase, "episode number assertion failed", [])
    }
   
}


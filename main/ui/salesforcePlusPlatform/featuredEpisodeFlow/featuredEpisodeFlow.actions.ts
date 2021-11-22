import getEpisodeDataFromDB from "../../../testDataGeneration/testDataLogic/dbAssertions/dBAssertionsEpisode";
import { waitTillHTMLRendered } from "../../../utilities/waitTillHTMLRendered";
import { testDataSet } from "../featuredEpisodeFlow/featuredEpisodeTasks/createDestroyFeaturedEpisodes";
import { clickPauseButton, clickPlayButton } from "../originalSeries/actions/unAuthFlow.actions";
import { episodeButton, featuredEpisodeCard, featuredEpisodeTitles,} from "./user_interface/featuredEpisode.selectors";
import assert from "soft-assert"


export async function clickFeaturedEpisodeCard(page) {
    // await page.waitForSelector(featuredEpisodeCard(),{visible:true,timeout:10000});
    // let FEATURED_EPISODE_CARD = await page.$(featuredEpisodeCard());
    // await FEATURED_EPISODE_CARD.click();
    await page.waitForSelector(episodeButton(),{visible:true,timeout:10000});
    let FEATURED_EPISODE_CARD = await page.$(episodeButton());
    await FEATURED_EPISODE_CARD.click();

}

export async function playAndPauseFeaturedEpisode(page) {
    await page.waitFor(10000);
    await clickPlayButton(page);
    await waitTillHTMLRendered(page);
    await page.waitFor(10000);
    await clickPauseButton(page);
}

export async function getFeatureEpisodeTitles(page){
    // let i;
    const titlesElement = await page.$$(featuredEpisodeTitles);
    const titles = await page.$$eval(featuredEpisodeTitles,el=> el.map(ele=>{return ele.innerHTML;}))//map(ele=>ele.innerHTML));  el=> {return el.innerHTML}
    // let speakerDesignation = await page.$$eval(getSpeakerDesignation, vals => vals.map(val => val.innerHTML))
    // await Titles.map(elef=>console.log(elef));
    // console.log('before forEach');
    // Titles.forEach(element => {
    //     console.log(element);
    // });
    // console.log('after forEach');
    console.log(titles);
    console.log(titles.length);
    console.log('after Titles');
    // console.log('Titles Element',TitlesElement);
    console.log('/////////////////////////////////////////////////////////////');
    console.log(testDataSet)
    console.log('/////////////////////////////////////////////////////////////');
    let object : object
    console.log('5555555555555555555555555555555555555555555555555555');
    object = await getEpisodeDataFromDB(testDataSet.episodeIDs[0])
    console.log('5555555555555555555555555555555555555555555555555555');

    for (let i =0; i < testDataSet.episodeList.length ; i++){

        console.log(`inside for loop at index : ${i}`)
        console.log(titles[i]);
        console.log(`just for readability`)

        object = await getEpisodeDataFromDB(testDataSet.episodeIDs[i])
        //@ts-ignore
       assert.softContains(titles[i], object.records[0].Name, `Episode Name for episode ${i} is not correct` ,[] )
        //@ts-ignore
    //    assert.softContains(episodeNumberValue, object.records[0].Description__c, `Episode Name for episode ${i} is not correct` ,[] )
 
     }

}

// export  async function verifyEpisodeCardDetails(page){

//     console.log(testDataSet)
//     let object : object


//     let episodeNumberElement = await page.$(episodecard())
//     let episodeNumberValue = await episodeNumberElement.evaluate(
//         (ele) => ele.innerHTML
//     );

//     for (let i =0; i < testDataSet.episodeList.length ; i++){

//         object = await getEpisodeDataFromDB(testDataSet.episodeIDs[i])
//         //@ts-ignore
//        assert.softContains(episodeNumberValue, object.records[0].Name, `Episode Name for episode ${i} is not correct` ,[] )
//         //@ts-ignore
//        assert.softContains(episodeNumberValue, object.records[0].Description__c, `Episode Name for episode ${i} is not correct` ,[] )
 
//      }
  
   
// }
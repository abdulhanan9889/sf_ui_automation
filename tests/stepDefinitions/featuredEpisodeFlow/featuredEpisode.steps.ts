var { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(720000);
import { loadBrowser } from "../../../main/utilities/loadBrowser";
import { After, Before, Given, Then, When, AfterStep, AfterAll, BeforeAll } from "@cucumber/cucumber";




import { acceptCookies } from "../../../main/ui/salesforcePlusPlatform/originalSeries/actions/unAuthFlow.actions";
import { waitTillHTMLRendered } from "../../../main/utilities/waitTillHTMLRendered";
// import { playFeauredEpisode } from "../../../main/ui/salesforcePlusPlatform/featuredEpisodeFlow/featuredEpisodeTasks/featuredEpisodeFlow.tasks";
import  { verifyFeaturedEpisodeNumber, verifyFeaturedEpisodeTitle, verifyFeaturedEpisodeGuestSpeakerNames } from "../../../main/ui/salesforcePlusPlatform/featuredEpisodeFlow/assertion/featuredEpisodeFlow.assertions";
import { destroy, testData } from "../../../main/ui/salesforcePlusPlatform/featuredEpisodeFlow/featuredEpisodeTasks/createDestroyFeaturedEpisodes";
import verifySpeakerCardDetails from "../../../main/ui/salesforcePlusPlatform/featuredEpisodeFlow/assertion/speakerCardAssertion";
import { playFeauredEpisode } from "../../../main/ui/salesforcePlusPlatform/featuredEpisodeFlow/featuredEpisodeTasks/featuredEpisodeFlow.tasks";

let page;
let testdatastub;
BeforeAll(async function(){
  testdatastub = await testData(2,0,2,2, "first","last","qa","emumba");    
})

Given('user generates data for unauthenticated flows', async function(datatable) {
  // const testDataParameters = await datatable.hashes()[0]

  // await testData(testDataParameters.numberOfEpisodesPerSeries, 
  //     testDataParameters.seriesStartDayFromToday, testDataParameters.seriesEndDayFromToday , testDataParameters.numberOfSpeakers, "first","last","qa","emumba");    
})

Given('User is on the salesforce platform',async function(){
  page = await loadBrowser()
  await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
  await acceptCookies(page);
  
})

Given('user selects a featured episode to play', async function () {

    // page = await loadBrowser()
    // await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
    // await acceptCookies(page);

    
  });


  When('he clicks the featured episode', async function () {
     
    await waitTillHTMLRendered(page);
    await playFeauredEpisode(page);
    await waitTillHTMLRendered(page);
    // await verifyFeaturedEpisodeNumber(page);
    // await verifyFeaturedEpisodeTitle(page);
    // await verifyFeaturedEpisodeGuestSpeakerNames(page);
    await verifySpeakerCardDetails(page);
    await verifyFeaturedEpisodeTitle(page);
    await waitTillHTMLRendered(page);
  
});


  When('he plays the episode', async function () {
   
  });

  Then('the videio starts to play', async function () {
    
  });

  After("@featureEepisode", async function () {
    await page.close();
});

AfterAll(async function () {
 
  await destroy();
  
})
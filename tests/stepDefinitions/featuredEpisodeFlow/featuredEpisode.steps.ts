var { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(720000);
import { loadBrowser } from "../../../main/utilities/loadBrowser";
import { After, Before, Given, Then, When, AfterStep, AfterAll } from "@cucumber/cucumber";





import { waitTillHTMLRendered } from "../../../main/utilities/waitTillHTMLRendered";
import { playFeauredEpisode } from "../../../main/ui/salesforcePlusPlatform/featuredEpisodeFlow/featuredEpisodeFlow.tasks";

let page;

Given('user selects a featured episode to play', async function () {

    page = await loadBrowser()
    await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });

    
  });


  When('he clicks the featured episode', async function () {
     
    await playFeauredEpisode(page);
  
});


  When('he plays the episode', async function () {
   
  });

  Then('the videio starts to play', async function () {
    
  });

//   After("@featureEepisode", async function () {
//     await page.close();
// });

import { Given, When, After, Then, AfterAll, AfterStep,Before,setDefaultTimeout,BeforeAll } from "@cucumber/cucumber";
import { loadBrowser } from "../../../main/utilities/loadBrowser";
import { waitTillHTMLRendered } from "../../../main/utilities/waitTillHTMLRendered";
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';
setDefaultTimeout(500 * 1000);

import {
  muteVideoButton,
  unmuteVideoButton,
} from "../../../main/ui/salesforcePlusPlatform/broadcastPageFlow/broadcastPage.actions";
import {
  clickPlayButton,
  clickPauseButton,
} from "../../../main/ui/salesforcePlusPlatform/originalSeries/actions/unAuthFlow.actions";
import { openSignInForm, openVideo, authFlowTestDataSet, authFlowTestData, authFlowTestDataDelete } from "../../../main/ui/salesforcePlusPlatform/authenticatedFlow/authFlow.tasks";
import { openNextAuthenticatedEpisode, openNextEpisode, playEpisode } from "../../../main/ui/salesforcePlusPlatform/originalSeries/tasks/unAuthFlow.tasks";
import {
  fillSignInForm,
  fillInSignUpForm,
  fillInSignInForm,
} from "../../../main/ui/salesforcePlusPlatform/broadcastPageFlow/broadcastPage.tasks";
import { verifyProgressBarValues } from "../../../main/ui/salesforcePlusPlatform/originalSeries/assertions/VideoProgress";
import {
  verifySpeakerFourDetails,
  verifySpeakerFiveDetails,
  verifySpeakerSixDetails,
  verifySpeakerSevenDetails,
  verifySpeakerEightDetails,
  verifySpeakerNineDetails,
  verifySpeakerTenDetails,
  isUserLoggedOut,
} from "../../../main/ui/salesforcePlusPlatform/broadcastPageFlow/broadcastPage.assertions";

import {
  verifyEpisodeNumber,
  verifySeriesTitle,
  verifyEpisodeTitle,
  // verifySpeakerOneDetails,
  // verifySpeakerTwoDetails,
  // verifySpeakerThreeDetails,
  verifyForwardedVideo,
  verifyReversedVideo,
  verifySpeakerDetails,
} from "../../../main/ui/salesforcePlusPlatform/episodePageFlow/episodePage.assertions";

import { acceptCookies } from "../../../main/ui/salesforcePlusPlatform/originalSeries/actions/unAuthFlow.actions";

import SFDataInsertion from '../../../main/testDataGeneration/testDataLogic/SFDataInsertion'
import BaseObject from '../../../main/testDataGeneration/entities/BaseObject'
import SFDataLogic from '../../../main/testDataGeneration/testDataLogic/testDataLogic'
import { closeTbidModal, maximizeVideoPlayer, minimizeVideoPlayer } from "../../../main/ui/salesforcePlusPlatform/episodePageFlow/episodePage.tasks";
import { openLoginPage, signInOnSalesforce } from "../../../main/ui/salesforcePlusPlatform/loginFlow/loginFlow.tasks";
import { verifyUserIsLoggedIn } from "../../../main/ui/salesforcePlusPlatform/loginFlow/loginFlow.assertions";
import { destroy } from "../../../main/ui/salesforcePlusPlatform/originalSeries/tasks/createDestroyOriginalSeries";

let page;
let ss
let recorder
let noOfEpisodes
let noOfSpeakers

BeforeAll(async function(){  
  noOfEpisodes = 2
  noOfSpeakers = 2
  await authFlowTestData(0, 2, 1, 2, noOfSpeakers,"dummy", "speaker", "QA Engineer", "Emumba")
})

Before('@broadcastPage',async function(){
     page = await loadBrowser();
  // recorder = new PuppeteerScreenRecorder(page);
  // await recorder.start('tests/reports/videos/broadCastPage/playsSelectedEpisode.mp4');
  await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
  await waitTillHTMLRendered(page);
  await acceptCookies(page);
  await page.waitFor(2000);
  await openLoginPage(page);
  await signInOnSalesforce(page,this.parameters.username,this.parameters.password)
})

Given("authenticated user is logged in",async function(){
  await verifyUserIsLoggedIn(page)
})

When("guest user navigates to the broadcast page", async function () {
  await page.goto(`https://www-qa1.salesforce.com/plus/experience/${authFlowTestDataSet.eventNames[0]}/series/${authFlowTestDataSet.seriesNames[0]}/episode/episode-1`, { waitUntil: "load", timeout: 0 });
  await page.waitFor(5000)
})

Then("user plays a video", async function () {
  await playEpisode(page);
  await verifyProgressBarValues(page);
  // await recorder.stop()
});

Then("guest user verifies the episode details", async function () {
  for (var i = 0; i < noOfEpisodes; i++) {
    await verifyEpisodeNumber(page, authFlowTestDataSet.episodeOrder[i])
    await verifyEpisodeTitle(page, authFlowTestDataSet.episodeNames[i])
    for (var j = 0; j < noOfSpeakers; j++) {
      await verifySpeakerDetails(page, authFlowTestDataSet.episodeList[i].speakerList[j], noOfSpeakers)
    }
    if (i < noOfEpisodes - 1) {
      await openNextAuthenticatedEpisode(page, i)
    }
  }
  await verifySeriesTitle(page, authFlowTestDataSet.seriesNames[0])
})

When("authenticated user goes to the video",async function(){
  await openVideo(page)
})
Then("authenticated user plays the video", async function () {
  await clickPlayButton(page);
  await page.waitForTimeout(2000);
});

Then("authenticated user pause the video", async function () {
  await clickPauseButton(page);
});

Then("authenticated user click the forward video button", async function () {
  await verifyForwardedVideo(page);
});

Then("authenticated user click the reverse video button", async function () {
  await verifyReversedVideo(page);
});

Then("authenticated user decrease volume", async function () {
  await muteVideoButton(page);
  await page.waitForTimeout(2000);
});

Then("authenticated user increase volume", async function () {
  await unmuteVideoButton(page);
});

Then("authenticated user click the maximize video button", async function () {
  await maximizeVideoPlayer(page);
  await page.waitForTimeout(3000);
});

Then("authenticated user click the minimize video button", async function () {
  await minimizeVideoPlayer(page);
  // await recorder.stop()
});

AfterStep("@broadcastPage", async function () {
  await waitTillHTMLRendered(page);
  ss = await page.screenshot({ fullPage: true })
  await this.attach(ss, 'image/png')
})

After("@broadcastPage", async function () {
  await page.close()
})

AfterAll(async function () {
 
  await authFlowTestDataDelete()
  
})
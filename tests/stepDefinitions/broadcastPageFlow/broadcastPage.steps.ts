  import { Given, When, After, Then, AfterAll, AfterStep } from "@cucumber/cucumber";
import { loadBrowser } from "../../../main/utilities/loadBrowser";
import { waitTillHTMLRendered } from "../../../main/utilities/waitTillHTMLRendered";
var { setDefaultTimeout } = require("@cucumber/cucumber");
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';
setDefaultTimeout(60000);
import { muteVideoButton,
  unmuteVideoButton } from "../../../main/ui/salesforcePlusPlatform/broadcastPageFlow/actions/videoPlayer.actions";
import {
  clickPlayButton,
  clickPauseButton,
} from "../../../main/ui/salesforcePlusPlatform/originalSeries/actions/unAuthFlow.actions";
import { openSignInForm} from "../../../main/ui/salesforcePlusPlatform/authenticatedFlow/tasks/authFlow.tasks";
import { testData, testDataSet } from "../../../main/ui/salesforcePlusPlatform/authenticatedFlow/tasks/testData.tasks";
import { openNextAuthenticatedEpisode, openNextEpisode, playEpisode } from "../../../main/ui/salesforcePlusPlatform/originalSeries/tasks/unAuthFlow.tasks";
import {
  fillSignInForm,
  fillInSignUpForm,
  fillInSignInForm,
} from "../../../main/ui/salesforcePlusPlatform/broadcastPageFlow/tasks/broadcastPageSignUp.tasks";
import { verifyProgressBarValues } from "../../../main/ui/salesforcePlusPlatform/originalSeries/assertions/VideoProgress";
import {
  verifySpeakerFourDetails,
  verifySpeakerFiveDetails,
  verifySpeakerSixDetails,
  verifySpeakerSevenDetails,
  verifySpeakerEightDetails,
  verifySpeakerNineDetails,
  verifySpeakerTenDetails
} from "../../../main/ui/salesforcePlusPlatform/broadcastPageFlow/assertions/speakerDetails.assertions";
import { isUserLoggedOut } from "../../../main/ui/salesforcePlusPlatform/broadcastPageFlow/assertions/logOut.assertions";

import {
  verifyEpisodeNumber,
  verifySeriesTitle,
  verifyEpisodeTitle,
  // verifySpeakerOneDetails,
  // verifySpeakerTwoDetails,
  // verifySpeakerThreeDetails,  
  verifySpeakerDetails,
} from "../../../main/ui/salesforcePlusPlatform/episodePageFlow/assertions/episodeDetails.assertions";
import { verifyForwardedVideo,verifyReversedVideo, } from "../../../main/ui/salesforcePlusPlatform/episodePageFlow/assertions/episodePlayer.assertions";

import { acceptCookies } from "../../../main/ui/salesforcePlusPlatform/originalSeries/actions/unAuthFlow.actions";

import SFDataInsertion from '../../../main/testDataGeneration/testDataLogic/SFDataInsertion'
import BaseObject from '../../../main/testDataGeneration/entities/BaseObject'
import SFDataLogic from '../../../main/testDataGeneration/testDataLogic/testDataLogic'
import { closeTbidModal } from "../../../main/ui/salesforcePlusPlatform/episodePageFlow/tasks/episodeNavigation.tasks";
import { maximizeVideoPlayer, minimizeVideoPlayer } from "../../../main/ui/salesforcePlusPlatform/episodePageFlow/actions/episodePlayer.actions";

let page;
let ss
let recorder
let noOfEpisodes
let noOfSpeakers

Given('user generates data for broadcast page flows', async function (datatable) {
  const testDataParameters = await datatable.hashes()[0]
  noOfEpisodes = testDataParameters.numberOfEpisodesPerSeries
  noOfSpeakers = testDataParameters.numberOfSpeakers
  await testData(testDataParameters.seriesStartFromToday, testDataParameters.seriesEndDayFromToday, testDataParameters.numberOfSeries, testDataParameters.numberOfEpisodesPerSeries, testDataParameters.numberOfSpeakers,
    testDataParameters.firstName, testDataParameters.lastName, testDataParameters.designation, testDataParameters.company)
})

Given("the user is on the salesforce plus webpage", async function () {
  page = await loadBrowser();
  // recorder = new PuppeteerScreenRecorder(page);
  // await recorder.start('tests/reports/videos/broadCastPage/playsSelectedEpisode.mp4');
  await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
  await waitTillHTMLRendered(page);
  await acceptCookies(page);
  await page.waitFor(2000);
});

When("user open the sign in form", async function () {
  await openSignInForm(page);
});

When(
  "user login with the following {word}",
  { timeout: 80000 },
  async function (email) {
    await fillInSignInForm(page, email);
  }
);

Then("user plays a video", async function () {
  await playEpisode(page);
  await verifyProgressBarValues(page);
  // await recorder.stop()
});

var email;
When(
  "the user tries to login with a dummy email",
  { timeout: 80000 },
  async function () {
    await openSignInForm(page);
    await fillSignInForm(page);
  }
);

When(
  "the user click cancel and logout button after filling the following details",
  { timeout: 90000 },
  async function (dataTable) {
    await fillInSignUpForm(page, dataTable);
  }
);

Then("user is logged out", async function () {
  await isUserLoggedOut(page);
  // await recorder.stop()
});

Given(
  "guest user loads the salesforce plus platform",
  { timeout: 80000 },
  async function () {
    page = await loadBrowser();
    await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
    await waitTillHTMLRendered(page);
    await acceptCookies(page);
    await page.waitFor(2000);
  }
);

When(
  "guest user login through trailblazzer using {word}",
  { timeout: 120 * 1000 },
  async function (email) {
    await openSignInForm(page);
    await fillInSignInForm(page, email);
  }
);

When("guest user navigates to the broadcast page", async function () {
  await page.goto(`https://www-qa1.salesforce.com/plus/experience/${testDataSet.eventNames[0]}/series/${testDataSet.seriesNames[0]}/episode/episode-1`, { waitUntil: "load", timeout: 0 });
})

Then("guest user verifies the episode details", async function () {
  for (var i = 0; i < noOfEpisodes; i++) {
    await verifyEpisodeNumber(page, testDataSet.episodeOrder[i])
    await verifyEpisodeTitle(page, testDataSet.episodeNames[i])
    for (var j = 0; j < noOfSpeakers; j++) {
      await verifySpeakerDetails(page, testDataSet.episodeList[i].speakerList[j], noOfSpeakers)
    }
    if (i < noOfEpisodes - 1) {
      await openNextAuthenticatedEpisode(page, i)
    }
    if (i = 0) {
      await closeTbidModal(page)
      continue
    }
  }
  await verifySeriesTitle(page, testDataSet.seriesNames[0])
})

// Then(
//   "guest user is able to verify the episode number: {string}",
//   async function (episodeNumber) {
//     await verifyEpisodeNumber(page, episodeNumber);
//   }
// );

// Then(
//   "guest user is able to verify the series title: {string}",
//   async function (seriesTitle) {
//     await verifySeriesTitle(page, seriesTitle);
//   }
// );

// Then(
//   "guest user is able to verify the episode title: {string}",
//   async function (episodeTitle) {
//     await verifyEpisodeTitle(page, episodeTitle);
//   }
// );

// Then(
//   "guest user is able to verify the speaker one name and card title: {string}",
//   async function (speakerOneDetails) {
//     // await verifySpeakerOneDetails(page, speakerOneDetails);
//   }
// );

// Then(
//   "guest user is able to verify the speaker two name and card title: {string}",
//   async function (speakerTwoDetails) {
//     // await verifySpeakerTwoDetails(page, speakerTwoDetails);
//   }
// );

// Then(
//   "guest user is able to verify the speaker three name and card title: {string}",
//   async function (speakerThreeDetails) {
//     // await verifySpeakerThreeDetails(page, speakerThreeDetails);
//   }
// );

// Then(
//   "guest user is able to verify the speaker four name and card title: {string}",
//   async function (speakerFourDetails) {
//     await verifySpeakerFourDetails(page, speakerFourDetails);
//   }
// );

// Then(
//   "guest user is able to verify the speaker five name and card title: {string}",
//   async function (speakerFiveDetails) {
//     await verifySpeakerFiveDetails(page, speakerFiveDetails);
//   }
// );

// Then(
//   "guest user is able to verify the speaker six name and card title: {string}",
//   async function (speakerSixDetails) {
//     await verifySpeakerSixDetails(page, speakerSixDetails);
//   }
// );

// Then(
//   "guest user is able to verify the speaker seven name and card title: {string}",
//   async function (speakerSevenDetails) {
//     await verifySpeakerSevenDetails(page, speakerSevenDetails);
//   }
// );

// Then(
//   "guest user is able to verify the speaker eight name and card title: {string}",
//   async function (speakerEightDetails) {
//     await verifySpeakerEightDetails(page, speakerEightDetails);
//   }
// );

// Then(
//   "guest user is able to verify the speaker nine name and card title: {string}",
//   async function (speakerNineDetails) {
//     await verifySpeakerNineDetails(page, speakerNineDetails);
//   }
// );

// Then(
//   "guest user is able to verify the speaker ten name and card title: {string}",
//   async function (speakerTenDetails) {
//     await verifySpeakerTenDetails(page, speakerTenDetails);
//     // await recorder.stop()
//   }
// );

Given(
  "authenticated user is on salesforce plus webpage",
  { timeout: 80000 },
  async function () {
    page = await loadBrowser();
    // recorder = new PuppeteerScreenRecorder(page);
    // await recorder.start('tests/reports/videos/broadCastPage/videoPlayerControls.mp4');
    await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
    await waitTillHTMLRendered(page);
    await acceptCookies(page);
    await page.waitFor(2000);
  }
);

When(
  "authenticated user logins with {word}",
  { timeout: 100 * 1000 },
  async function (email) {
    await openSignInForm(page);
    await fillInSignInForm(page, email);
  }
);

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

// After("@broadcastPage", async function () {
//   await page.close()
// })

// AfterAll(async function () {
//   let baseobject = new BaseObject()
//   // SFDataLogic.deleteRecord(baseobject.getObjectId(), baseobject.getObjectName())
// })
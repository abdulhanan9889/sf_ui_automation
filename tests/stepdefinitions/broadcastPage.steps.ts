import { Given, When, After, Then,AfterAll } from "@cucumber/cucumber";
import { loadBrowser } from "../utilities/loadBrowser";
import { waitTillHTMLRendered } from "../utilities/waitTillHTMLRendered";
var { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60000);

import {
  muteVideoButton,
  unmuteVideoButton,
} from "../actions/broadcastPage.actions";
import {
  clickPlayButton,
  clickPauseButton,
} from "../actions/unAuthFlow.actions";
import { openSignInForm } from "../tasks/authFlow.tasks";
import { playEpisode } from "../tasks/unAuthFlow.tasks";
import {
  fillSignInForm,
  fillInSignUpForm,
  fillInSignInForm,
} from "../tasks/broadcastPage.tasks";
import { verifyProgressBarValues } from "../assertions/unAuthFlow.assertions";
import {
  verifySpeakerFourDetails,
  verifySpeakerFiveDetails,
  verifySpeakerSixDetails,
  verifySpeakerSevenDetails,
  verifySpeakerEightDetails,
  verifySpeakerNineDetails,
  verifySpeakerTenDetails,
  isUserLoggedOut,
} from "../assertions/broadcastPage.assertions";

import {
  verifyEpisodeNumber,
  verifySeriesTitle,
  verifyEpisodeTitle,
  verifySpeakerOneDetails,
  verifySpeakerTwoDetails,
  verifySpeakerThreeDetails,
  verifyForwardedVideo,
  verifyReversedVideo,
} from "../assertions/episodePage.assertions";

import { acceptCookies } from "../actions/unAuthFlow.actions";

import SFDataInsertion  from '../testDataGeneration/testDataLogic/SFDataInsertion'
import BaseObject from '../testDataGeneration/entities/BaseObject'
import SFDataLogic from '../testDataGeneration/testDataLogic/testDataLogic'
import { maximizeVideoPlayer, minimizeVideoPlayer } from "../tasks/episodePage.tasks";
let page;


Given('user generates data for broadcast page', async function (datatable) {
  const testDataParameters = await datatable.hashes()[0]
  // await SFDataInsertion.createEventFlowHavingSeriesWithEpisodes(testDataParameters.numberOfSeries, testDataParameters.numberOfEpisodesPerSeries, testDataParameters.eventStartDayFromToday, testDataParameters.eventStartHour, testDataParameters.eventEndDayFromToday, testDataParameters.eventEndHour)
})

Given("the user is on the salesforce plus webpage", async function () {
  page = await loadBrowser();
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
  "the user click cancel and logout button after filling following details",
  { timeout: 90000 },
  async function (dataTable) {
    await fillInSignUpForm(page, dataTable);
  }
);

Then("user is logged out", async function () {
  await isUserLoggedOut(page);
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

Then(
  "guest user is able to verify the episode number: {string}",
  async function (episodeNumber) {
    await verifyEpisodeNumber(page, episodeNumber);
  }
);

Then(
  "guest user is able to verify the series title: {string}",
  async function (seriesTitle) {
    await verifySeriesTitle(page, seriesTitle);
  }
);

Then(
  "guest user is able to verify the episode title: {string}",
  async function (episodeTitle) {
    await verifyEpisodeTitle(page, episodeTitle);
  }
);

Then(
  "guest user is able to verify the speaker one name and card title: {string}",
  async function (speakerOneDetails) {
    await verifySpeakerOneDetails(page, speakerOneDetails);
  }
);

Then(
  "guest user is able to verify the speaker two name and card title: {string}",
  async function (speakerTwoDetails) {
    await verifySpeakerTwoDetails(page, speakerTwoDetails);
  }
);

Then(
  "guest user is able to verify the speaker three name and card title: {string}",
  async function (speakerThreeDetails) {
    await verifySpeakerThreeDetails(page, speakerThreeDetails);
  }
);

Then(
  "guest user is able to verify the speaker four name and card title: {string}",
  async function (speakerFourDetails) {
    await verifySpeakerFourDetails(page, speakerFourDetails);
  }
);

Then(
  "guest user is able to verify the speaker five name and card title: {string}",
  async function (speakerFiveDetails) {
    await verifySpeakerFiveDetails(page, speakerFiveDetails);
  }
);

Then(
  "guest user is able to verify the speaker six name and card title: {string}",
  async function (speakerSixDetails) {
    await verifySpeakerSixDetails(page, speakerSixDetails);
  }
);

Then(
  "guest user is able to verify the speaker seven name and card title: {string}",
  async function (speakerSevenDetails) {
    await verifySpeakerSevenDetails(page, speakerSevenDetails);
  }
);

Then(
  "guest user is able to verify the speaker eight name and card title: {string}",
  async function (speakerEightDetails) {
    await verifySpeakerEightDetails(page, speakerEightDetails);
  }
);

Then(
  "guest user is able to verify the speaker nine name and card title: {string}",
  async function (speakerNineDetails) {
    await verifySpeakerNineDetails(page, speakerNineDetails);
  }
);

Then(
  "guest user is able to verify the speaker ten name and card title: {string}",
  async function (speakerTenDetails) {
    await verifySpeakerTenDetails(page, speakerTenDetails);
  }
);

Given(
  "authenticated user is on salesforce plus webpage",
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
});


After(async function () {
  await page.close()
})

AfterAll(async function () {
  let baseobject = new BaseObject()
  // SFDataLogic.deleteRecord(baseobject.getObjectId(), baseobject.getObjectName())
})
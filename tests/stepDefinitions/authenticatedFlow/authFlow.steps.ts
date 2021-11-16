import { After, Given, Then, When, AfterAll, AfterStep } from "@cucumber/cucumber";
import { loadBrowser } from "../../../main/utilities/loadBrowser";
import {
  openSignInForm,
  fillSignInForm,
  fillSignUpForm
} from "../../../main/ui/salesforcePlusPlatform/authenticatedFlow/tasks/authFlow.tasks";
import { verifySignupFields } from "../../../main/ui/salesforcePlusPlatform/authenticatedFlow/tasks/testData.tasks";
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';
import { playEpisode } from "../../../main/ui/salesforcePlusPlatform/originalSeries/tasks/unAuthFlow.tasks";
import { verifyProgressBarValues } from "../../../main/ui/salesforcePlusPlatform/originalSeries/assertions/VideoProgress";
import SFDataInsertion from '../../../main/testDataGeneration/testDataLogic/SFDataInsertion'
import BaseObject from '../../../main/testDataGeneration/entities/BaseObject'
import SFDataLogic from '../../../main/testDataGeneration/testDataLogic/testDataLogic'
import { acceptCookies } from "../../../main/ui/salesforcePlusPlatform/originalSeries/actions/unAuthFlow.actions";
import { waitTillHTMLRendered } from "../../../main/utilities/waitTillHTMLRendered";
var { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(720000);

let page;
let ss;
let recorder;


Given('user generates data for auth flow', async function (datatable) {
  const testDataParameters = await datatable.hashes()[0]
  //await SFDataInsertion.createEventFlowHavingSeriesWithEpisodes(testDataParameters.numberOfSeries, testDataParameters.numberOfEpisodesPerSeries, testDataParameters.eventStartDayFromToday, testDataParameters.eventStartHour, testDataParameters.eventEndDayFromToday, testDataParameters.eventEndHour)
});

Given('user is on salesforce plus', async function () {
  page = await loadBrowser();
  // recorder = new PuppeteerScreenRecorder(page);
  // await recorder.start('tests/reports/videos/authFlow/loginAndPlayVideo.mp4');
  await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
  await waitTillHTMLRendered(page);
  await acceptCookies(page);
  await waitTillHTMLRendered(page);
});

When('user tries to login with a dummy email', async function () {
  await openSignInForm(page);
  await fillSignInForm(page);
});

When('user signs up for the page with following details', async function (dataTable) {
  await fillSignUpForm(page, dataTable);
});

Then('user is able to play the video', async function () {
  // await playEpisode(page);
  // await verifyProgressBarValues(page)
  // await recorder.stop()
});

Then('user is able to verify sign up details', async function (dataTable) {
  await verifySignupFields(page, dataTable)
})

// AfterStep(async function () {
//   // await waitTillHTMLRendered(page);
//   // ss = await page.screenshot({ fullPage: true })
//   // await this.attach(ss, 'image/png')
// });
AfterStep("@authFlow", async function () {
  await waitTillHTMLRendered(page);
  ss = await page.screenshot({ fullPage: true })
  await this.attach(ss, 'image/png')
})

After("@authFlow", async function () {
  await page.close()
});

AfterAll(async function () {
  // let baseobject = new BaseObject()
  //SFDataLogic.deleteRecord(baseobject.getObjectId(), baseobject.getObjectName())
});
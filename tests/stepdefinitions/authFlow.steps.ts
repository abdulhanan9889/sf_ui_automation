import { After, Given, Then, When, AfterAll } from "@cucumber/cucumber";
import { loadBrowser } from "../utilities/loadBrowser";
import {
  openSignInForm,
  fillSignInForm,
  fillSignUpForm,
} from "../tasks/authFlow.tasks";
import { playEpisode } from "../tasks/unAuthFlow.tasks";
import { verifyProgressBarValues } from "../assertions/unAuthFlow.assertions";
import SFDataInsertion  from '../testDataGeneration/testDataLogic/SFDataInsertion'
import BaseObject from '../testDataGeneration/entities/BaseObject'
import SFDataLogic from '../testDataGeneration/testDataLogic/testDataLogic'
import { acceptCookies } from "../actions/unAuthFlow.actions";
import { waitTillHTMLRendered } from "../utilities/waitTillHTMLRendered";


var { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60000);

let page;
var email;

Given('user generates data for authenticated flows', async function (datatable) {
  const testDataParameters = await datatable.hashes()[0]
  // await SFDataInsertion.createEventFlowHavingSeriesWithEpisodes(testDataParameters.numberOfSeries, testDataParameters.numberOfEpisodesPerSeries, testDataParameters.eventStartDayFromToday, testDataParameters.eventStartHour, testDataParameters.eventEndDayFromToday, testDataParameters.eventEndHour)
})

Given("user is on salesforce plus", async function () {
  page = await loadBrowser();
  await page.goto(this.parameters.URL, { waitUntil: "load", timeout: 0 });
  await waitTillHTMLRendered(page);
  await acceptCookies(page);
  await waitTillHTMLRendered(page);
});

When(
  "user tries to login with a dummy email",
  { timeout: 90 * 1000 },
  async function () {
    await openSignInForm(page);
    await fillSignInForm(page);
  }
);

When(
  "user signs up for the page with following details",
  { timeout: 90 * 1000 },
  async function (dataTable) {
    await fillSignUpForm(page, dataTable);
  }
);

Then("user is able to play the video", async function () {
  await playEpisode(page);
  await verifyProgressBarValues(page)
});

After(async function () {
  await page.close()
})

AfterAll(async function () {
  let baseobject = new BaseObject()
  // SFDataLogic.deleteRecord(baseobject.getObjectId(), baseobject.getObjectName())
})
import { Given, When, Then, After, AfterAll, AfterStep } from '@cucumber/cucumber'
import { loadBrowser } from '../utilities/loadBrowser'
import { waitTillHTMLRendered } from '../utilities/waitTillHTMLRendered'
import { isUserLoggedOut } from '../broadcastPageFlow/broadcastPage.assertions'
import { fillSignUpForms, loginThroughTrailblazerId, logoutFromSFPlatform, openAuthorizedEpisode } from '../episodePageFlow/episodePage.tasks'
import { acceptCookies } from '../unAuthenticatedFlow/unAuthFlow.actions'
import { verifyUserIsLoggedIn } from './loginFlow.assertions'
import { openSignInForm, fillSignUpForm } from '../authenticatedFlow/authFlow.tasks'
import { openTheSignInForm, fillTheSignInForm, fillTheSignUpForm } from './loginFlow.tasks'
import { fillInSignUpForm, fillSignInForm } from "../broadcastPageFlow/broadcastPage.tasks"
import SFDataInsertion from '../testDataGeneration/testDataLogic/SFDataInsertion'
import BaseObject from '../testDataGeneration/entities/BaseObject'
import SFDataLogic from '../testDataGeneration/testDataLogic/testDataLogic'
var { setDefaultTimeout } = require('@cucumber/cucumber');
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';
setDefaultTimeout(60000)
let page
let ss
let recorder

Given('user generates data for authenticated login flows', async function (datatable) {
    const testDataParameters = await datatable.hashes()[0]
    // await SFDataInsertion.createEventFlowHavingSeriesWithEpisodes(testDataParameters.numberOfSeries, testDataParameters.numberOfEpisodesPerSeries, testDataParameters.eventStartDayFromToday, testDataParameters.eventStartHour, testDataParameters.eventEndDayFromToday, testDataParameters.eventEndHour)
})

Given('the user loads the salesforce plus platform', async function () {
    page = await loadBrowser()
    // recorder = new PuppeteerScreenRecorder(page);
    // await recorder.start('tests/reports/videos/broadCastPage/playsSelectedEpisode.mp4');
    await page.goto(this.parameters.URL, { waitUntil: 'load', timeout: 0 });
    await waitTillHTMLRendered(page);
    await acceptCookies(page);
    await waitTillHTMLRendered(page);
})

When('the user access authorized content and logs in through trailblazer id', { timeout: 80 * 1000 }, async function () {
    await openAuthorizedEpisode(page)
    await loginThroughTrailblazerId(page)
})

When('the user fills out the sign up forms', { timeout: 90 * 1000 }, async function (datatable) {
    const dataFields = await datatable.hashes()[0];
    await fillSignUpForms(page, dataFields)
    // await recorder.stop()
})

Then('the user is logged in', async function () {
    await verifyUserIsLoggedIn(page)
})

When(
    "the user clicks on dreamforce button and access authorized content", async function () {
        await openSignInForm(page);
        await fillSignInForm(page);
    }
);


When(
    "the user fills out the sign up forms and clicks cancel and logout button", { timeout: 90 * 1000 }, async function (dataTable) {
        await fillInSignUpForm(page, dataTable);
        // await recorder.stop()
    }
);

Then("the user is logged out from the salesforce+ platform", async function () {
    await isUserLoggedOut(page);
});

When("user tries to login with an email address", { timeout: 80 * 1000 }, async function () {
    await openTheSignInForm(page);
    await fillTheSignInForm(page);
});

Then("user signs up for the page with the following details", { timeout: 90 * 1000 }, async function (dataTable) {
    await fillTheSignUpForm(page, dataTable);
    // await recorder.stop()
});

When("user tries to login with a dummy email address", { timeout: 90 * 1000 }, async function () {
    await openSignInForm(page);
    await fillSignInForm(page);
});

When("user signs up with following details on salesforce platform", { timeout: 90 * 1000 }, async function (datatable) {
    await fillSignUpForm(page, datatable);
    //  await recorder.stop()
});
AfterStep("@loginFlow", async function () {
    await waitTillHTMLRendered(page);
    ss = await page.screenshot({ fullPage: true })
    await this.attach(ss, 'image/png')
})
After("@loginFlow", async function () {
    await page.close()
})

AfterAll(async function () {
    let baseobject = new BaseObject()
    // SFDataLogic.deleteRecord(baseobject.getObjectId(), baseobject.getObjectName())
})
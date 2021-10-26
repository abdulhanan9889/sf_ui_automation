import { Given, When, Then, After, AfterAll } from '@cucumber/cucumber'
import { loadBrowser } from '../utilities/loadBrowser'
import { waitTillHTMLRendered } from '../utilities/waitTillHTMLRendered'
import { isUserLoggedOut } from '../assertions/broadcastPage.assertions'
import { fillSignUpForms, loginThroughTrailblazerId, logoutFromSFPlatform, openAuthorizedEpisode } from '../tasks/episodePage.tasks'
import { acceptCookies } from '../actions/unAuthFlow.actions'
import { verifyUserIsLoggedIn } from '../assertions/loginFlow.assertions'
import { openSignInForm, fillSignUpForm } from '../tasks/authFlow.tasks'
import { openTheSignInForm, fillTheSignInForm, fillTheSignUpForm } from '../tasks/loginFlow.tasks'
import { fillInSignUpForm, fillSignInForm } from "../tasks/broadcastPage.tasks"
import { SFDataInsertion } from '../testDataGeneration/testDataLogic/SFDataInsertion'
import BaseObject from '../testDataGeneration/entities/BaseObject'
import SFDataLogic from '../testDataGeneration/testDataLogic/testDataLogic'
var { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60000)

let page
var email

Given('user generates data for authenticated flows', async function (datatable) {
    const testDataParameters = await datatable.hashes()[0]
    // await SFDataInsertion.createEventFlowHavingSeriesWithEpisodes(testDataParameters.numberOfSeries, testDataParameters.numberOfEpisodesPerSeries, testDataParameters.eventStartDayFromToday, testDataParameters.eventStartHour, testDataParameters.eventEndDayFromToday, testDataParameters.eventEndHour)
})

Given('the user loads salesforce plus platform', async function () {
    page = await loadBrowser()
    await page.goto(this.parameters.URL, { waitUntil: 'load', timeout: 0 });
    await waitTillHTMLRendered(page);
    await acceptCookies(page);
    await waitTillHTMLRendered(page);
})

When('user access authorized content and logs in through trailblazer id', { timeout: 80 * 1000 }, async function () {
    await openAuthorizedEpisode(page)
    await loginThroughTrailblazerId(page)
})

When('the user fills out the sign up forms', { timeout: 90 * 1000 }, async function (datatable) {
    const dataFields = await datatable.hashes()[0];
    await fillSignUpForms(page, dataFields)
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
    }
);

Then("the user is logged out from the salesforce+ platform", async function () {
    await isUserLoggedOut(page);
});

When("user tries to login with an email", { timeout: 80 * 1000 }, async function () {
    await openTheSignInForm(page);
    await fillTheSignInForm(page);
});

Then("user signs up for the page with the following details", { timeout: 90 * 1000 }, async function (dataTable) {
    await fillTheSignUpForm(page, dataTable);
});

When("user tries to login with a dummy email", { timeout: 90 * 1000 }, async function () {
    await openSignInForm(page);
    await fillSignInForm(page);
});

When("user signs up for the page with following details", { timeout: 90 * 1000 }, async function (datatable) {
    await fillSignUpForm(page, datatable);
});

After(async function () {
    await page.close()
})

AfterAll(async function () {
    let baseobject = new BaseObject()
    // SFDataLogic.deleteRecord(baseobject.getObjectId(), baseobject.getObjectName())
})
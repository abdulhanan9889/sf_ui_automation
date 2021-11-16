import { Given, When, Then, After, AfterAll, AfterStep } from '@cucumber/cucumber'
import { loadBrowser } from '../../../main/utilities/loadBrowser'
import { waitTillHTMLRendered } from '../../../main/utilities/waitTillHTMLRendered'
import { isUserLoggedOut } from '../../../main/ui/salesforcePlusPlatform/broadcastPageFlow/assertions/logOut.assertions'
import { fillSignUpForms, loginThroughTrailblazerId, logoutFromSFPlatform } from '../../../main/ui/salesforcePlusPlatform/episodePageFlow/tasks/signUp.tasks'
import { openAuthorizedEpisode } from '../../../main/ui/salesforcePlusPlatform/episodePageFlow/tasks/episodeNavigation.tasks'
import { acceptCookies } from '../../../main/ui/salesforcePlusPlatform/originalSeries/actions/unAuthFlow.actions'
import { verifyProfileSignUpFormAppeared, verifySignUpFormButton, verifyUserIsLoggedIn, verifyWrongOTPEntered } from '../../../main/ui/salesforcePlusPlatform/loginFlow/assertions/loginFlow.assertions'
import { openSignInForm, fillSignUpForm } from '../../../main/ui/salesforcePlusPlatform/authenticatedFlow/tasks/authFlow.tasks'
import { openTheSignInForm, fillTheSignInForm, fillTheSignUpForm, fillProfileSignUpForm, signInWithTrailblazzer, signInWithWrongOTP } from '../../../main/ui/salesforcePlusPlatform/loginFlow/tasks/loginFlow.tasks'
import { fillInSignInForm, fillInSignUpForm, fillSignInForm } from "../../../main/ui/salesforcePlusPlatform/broadcastPageFlow/tasks/broadcastPageSignUp.tasks"
import SFDataInsertion from '../../../main/testDataGeneration/testDataLogic/SFDataInsertion'
import BaseObject from '../../../main/testDataGeneration/entities/BaseObject'
import SFDataLogic from '../../../main/testDataGeneration/testDataLogic/testDataLogic'
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

When("user signs up with following details on salesforce platform", { timeout: 90 * 1000 }, async function (dataTable) {
    await fillSignUpForm(page, dataTable);
    //  await recorder.stop()
});

When("user signs up form the trailblazzer", { timeout: 90 * 1000 }, async function (dataTable){
    await fillTrailblazerSignUpForm(page, dataTable);
})

Then("the profile sign up form appears", async function (dataTable){
    await verifyProfileSignUpFormAppeared(page)
})

When("user tries to login with a trailblazzer signed {word}", async function(email){
   await signInWithTrailblazzer(page,email)
})
When("user signs up with the profile sign up form", { timeout: 90 * 1000 }, async function (dataTable){
    await fillProfileSignUpForm(page,dataTable)
})

Then("the user is logged in",async function(){
  await verifyUserIsLoggedIn(page)
})

When("user login with {word}",async function(email){
    await fillInSignInForm(page,email)
})

When('user tries to login with wrong otp',async function(){
    await openSignInForm(page);
    await signInWithWrongOTP(page)
})
Then('an error message is shown',async function(){
    await verifyWrongOTPEntered(page)
})

Then('sign up form appears',async function(){
    await verifySignUpFormButton(page)
})

When('user tries to login with an {word}',async function (email){
    await openTheSignInForm(page)
    await signInWithTrailblazzer(page,email)
})
Then('sign up form do not appears',async function(){
    await verifySignUpFormButton(page)
})

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

function fillTrailblazerSignUpForm(page: any, dataTable: any) {
    throw new Error('Function not implemented.')
}

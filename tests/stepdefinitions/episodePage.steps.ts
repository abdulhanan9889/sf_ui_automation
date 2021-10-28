import { Given, When, After, Then, AfterAll } from '@cucumber/cucumber'
import { loadBrowser } from '../utilities/loadBrowser'
import { fillSignUpForms, loginThroughSignedUpUser, loginThroughTrailblazerId, logoutFromSFPlatform, maximizeVideoPlayer, minimizeVideoPlayer, openAuthorizedEpisode } from '../tasks/episodePage.tasks'
import { verifyEpisodeNumber, verifySeriesTitle, verifyEpisodeTitle, verifySpeakerOneDetails, verifySpeakerTwoDetails, verifySpeakerThreeDetails, verifyForwardedVideo, verifyReversedVideo, verifyMutedVideo, verifyUnmutedVideo, verifyMaximizedPlayer, verifyMinimizedPlayer } from '../assertions/episodePage.assertions'
import { acceptCookies, clickSecondEpisodeButton } from '../actions/unAuthFlow.actions'
import { verifyProgressBarValues } from '../assertions/unAuthFlow.assertions'
import { waitTillHTMLRendered } from '../utilities/waitTillHTMLRendered'
import { isUserLoggedOut } from '../assertions/broadcastPage.assertions'
import SFDataInsertion  from '../testDataGeneration/testDataLogic/SFDataInsertion'
import BaseObject from '../testDataGeneration/entities/BaseObject'
import SFDataLogic from '../testDataGeneration/testDataLogic/testDataLogic'

import { openEpisode, playEpisode } from '../tasks/unAuthFlow.tasks'
import { muteVideoButton, unmuteVideoButton } from '../actions/broadcastPage.actions'

var { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60000)
let page

Given('user generates data for authenticated flows', async function (datatable) {
    const testDataParameters = await datatable.hashes()[0]
    // await SFDataInsertion.createOriginalSeriesWithEpisodes(testDataParameters.numberOfSeries, testDataParameters.numberOfEpisodesPerSeries, testDataParameters.seriesStartDayFromToday, testDataParameters.seriesEndDayFromToday)
})

Given('user generates data for unauthenticated flows', async function (datatable) {
    const testDataParameters = await datatable.hashes()[0]
    // await SFDataInsertion.createEventFlowHavingSeriesWithEpisodes(testDataParameters.numberOfSeries, testDataParameters.numberOfEpisodesPerSeries, testDataParameters.eventStartDayFromToday, testDataParameters.eventStartHour, testDataParameters.eventEndDayFromToday, testDataParameters.eventEndHour)
})

Given('a guest user loads salesforce plus platform', async function () {
    page = await loadBrowser()
    await page.goto(this.parameters.URL, { waitUntil: 'load', timeout: 0 })
    await waitTillHTMLRendered(page)
    await acceptCookies(page)
});

When('user navigates to episodes page and clicks on a particular episode', async function () {
    await openEpisode(page)
});

Then('user is able to verify episode number: {string}', async function (episodeNumber) {
    await verifyEpisodeNumber(page, episodeNumber)
});

Then('user is able to verify series title: {string}', async function (seriesTitle) {
    await verifySeriesTitle(page, seriesTitle)
});

Then('user is able to verify episode title: {string}', async function (episodeTitle) {
    await verifyEpisodeTitle(page, episodeTitle)
});

Then('user is able to verify speaker one name and card title: {string}', async function (speakerOneDetails) {
    await verifySpeakerOneDetails(page, speakerOneDetails)
});

Then('user is able to verify speaker two name and card title: {string}', async function (speakerTwoDetails) {
    await verifySpeakerTwoDetails(page, speakerTwoDetails)
});

Then('user is able to verify speaker three name and card title: {string}', async function (speakerThreeDetails) {
    await verifySpeakerThreeDetails(page, speakerThreeDetails)
});

Then('user can play and pause the video', async function () {
    await playEpisode(page)
    await verifyProgressBarValues(page)
});

Then('user can forward and reverse the video', async function () {
    await verifyForwardedVideo(page)
    await verifyReversedVideo(page)
})

Then('user can maximize and minimize the video player', async function () {
    await maximizeVideoPlayer(page)
    await verifyMaximizedPlayer(page)
    await page.waitForTimeout(3000)
    await minimizeVideoPlayer(page)
    await verifyMinimizedPlayer(page)
})

Then('user can mute and unmute the video', async function () {
    await muteVideoButton(page)
    await verifyMutedVideo(page)
    await page.waitForTimeout(3000)
    await unmuteVideoButton(page)
    // await verifyUnmutedVideo(page)
})

When('a guest user access authorized content and logs in through trailblazer id', async function () {
    await openAuthorizedEpisode(page)
    await loginThroughTrailblazerId(page)
})

When('a guest user fills out the sign up forms', async function (datatable) {
    const dataFields = await datatable.hashes()[0];
    await fillSignUpForms(page, dataFields)
})

Then('authenticated user can play the authorized episode', async function () {
    await playEpisode(page)
    await verifyProgressBarValues(page)
})

Then('authenticated user can play the first authorized episode', async function () {
    await playEpisode(page)
    await verifyProgressBarValues(page)
})

Then('authenticated user clicks on second episode and can play the authorized episode', async function () {
    await clickSecondEpisodeButton(page)
    await playEpisode(page)
    await verifyProgressBarValues(page)
})

When('a guest user access authorized content and logs in through trailblazer id: {word}', async function (emailId) {
    await loginThroughSignedUpUser(page, emailId)
})

When('a guest user fills out the sign up forms and clicks cancel and logout button', async function (datatable) {
    const dataFields = await datatable.hashes()[0];
    await logoutFromSFPlatform(page, dataFields)
})

Then('the user is logged out', async function () {
    await isUserLoggedOut(page);
})


After(async function () {
    await page.close()
})

AfterAll(async function () {
    let baseobject = new BaseObject()
    // SFDataLogic.deleteRecord(baseobject.getObjectId(), baseobject.getObjectName())
})

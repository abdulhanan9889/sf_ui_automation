import { Given, When, After, Then, AfterAll, AfterStep } from '@cucumber/cucumber'
import { loadBrowser } from '../utilities/loadBrowser'
import { fillSignUpForms, loginThroughSignedUpUser, loginThroughTrailblazerId, logoutFromSFPlatform, maximizeVideoPlayer, minimizeVideoPlayer, openAuthorizedEpisode } from '../episodePageFlow/episodePage.tasks'
import {
    verifyEpisodeNumber, verifySeriesTitle, verifyEpisodeTitle, verifyForwardedVideo, verifyReversedVideo,
    verifyMutedVideo, verifyUnmutedVideo, verifyMaximizedPlayer, verifyMinimizedPlayer, verifySpeakerDetails
} from '../episodePageFlow/episodePage.assertions'
import { acceptCookies, clickSecondEpisodeButton } from '../unAuthenticatedFlow/unAuthFlow.actions'
import { verifyProgressBarValues } from '../unAuthenticatedFlow/unAuthFlow.assertions'
import { waitTillHTMLRendered } from '../utilities/waitTillHTMLRendered'
import { isUserLoggedOut } from '../broadcastPageFlow/broadcastPage.assertions'
import SFDataInsertion from '../testDataGeneration/testDataLogic/SFDataInsertion'
import BaseObject from '../testDataGeneration/entities/BaseObject'
import SFDataLogic from '../testDataGeneration/testDataLogic/testDataLogic'


import { destroy, openEpisode, playEpisode, openNextEpisode } from '../unAuthenticatedFlow/unAuthFlow.tasks'
import { muteVideoButton, unmuteVideoButton } from '../broadcastPageFlow/broadcastPage.actions'
import { clickSecondAuthorizedEpisodeButton } from '../episodePageFlow/episodePage.actions'
import { testData, testDataSet } from '../authenticatedFlow/authFlow.tasks'

var { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(80000)
let page
let ss
let recorder
let noOfEpisodes
let noOfSpeakers

Given('user generates data for authenticated epsiode flows', async function (datatable) {
    const testDataParameters = await datatable.hashes()[0]
    await testData(testDataParameters.seriesStartFromToday, testDataParameters.seriesEndDayFromToday, testDataParameters.numberOfSeries, testDataParameters.numberOfEpisodesPerSeries, testDataParameters.numberOfSpeakers,
        testDataParameters.firstName, testDataParameters.lastName, testDataParameters.designation, testDataParameters.company)
})

// Given('user generates data for unauthenticated epsiode flows', async function (datatable) {

//     const testDataParameters = await datatable.hashes()[0]
//     noOfEpisodes = testDataParameters.numberOfEpisodesPerSeries
//     noOfSpeakers = testDataParameters.numberOfSpeakers
// await testData(testDataParameters.numberOfEpisodesPerSeries,
//     testDataParameters.seriesStartDayFromToday, testDataParameters.seriesEndDayFromToday, testDataParameters.numberOfSpeakers,
//     testDataParameters.firstName, testDataParameters.lastName, testDataParameters.designation, testDataParameters.company)
// })

Given('a guest user loads salesforce plus platform', async function () {
    page = await loadBrowser()
    // recorder = new PuppeteerScreenRecorder(page);
    // await recorder.start('tests/reports/videos/broadCastPage/playsSelectedEpisode.mp4');
    await page.waitForTimeout(5000)
    // await page.goto(this.parameters.URL, { waitUntil: 'load', timeout: 0 })
    await page.goto(`https://www-qa1.salesforce.com/plus/experience/${testDataSet.eventNames[0]}`, { waitUntil: 'load', timeout: 0 })
    await waitTillHTMLRendered(page)
    await acceptCookies(page)
    await waitTillHTMLRendered(page)
});

// When('user navigates to episodes page and clicks on a particular episode', async function () {
//     await openEpisode(page)
// });

Then('user is able to verify episode details', async function () {
    for (var i = 0; i < noOfEpisodes; i++) {
        await verifyEpisodeNumber(page, testDataSet.episodeOrder[i])
        await verifyEpisodeTitle(page, testDataSet.episodeNames[i])
        for (var j = 0; j < noOfSpeakers; j++) {
            await verifySpeakerDetails(page, testDataSet.episodeList[i].speakerList[j], noOfSpeakers)
        }
        if (i < noOfEpisodes - 1) {
            await openNextEpisode(page, i)
        }
    }
    await verifySeriesTitle(page, testDataSet.seriesNames[0])
});



// Then('user can play and pause the video', async function () {
//     await playEpisode(page)
//     await verifyProgressBarValues(page)
// });

// Then('user can forward and reverse the video', async function () {
//     await verifyForwardedVideo(page)
//     await verifyReversedVideo(page)
// })

// Then('user can maximize and minimize the video player', async function () {
//     await maximizeVideoPlayer(page)
//     await verifyMaximizedPlayer(page)
//     await page.waitForTimeout(3000)
//     await minimizeVideoPlayer(page)
//     await verifyMinimizedPlayer(page)
// })

// Then('user can mute and unmute the video', async function () {
//     await muteVideoButton(page)
//     await verifyMutedVideo(page)
//     await page.waitForTimeout(3000)
//     await unmuteVideoButton(page)
//     await verifyUnmutedVideo(page)
// await recorder.stop()
//})

When('a guest user access authorized content and logs in through trailblazer id', async function () {

    await openAuthorizedEpisode(page)
    // await loginThroughTrailblazerId(page)
})

// When('a guest user fills out the sign up forms', async function (datatable) {
//     const dataFields = await datatable.hashes()[0];
//     await fillSignUpForms(page, dataFields)
// })

// Then('an authenticated user can play the authorized episode', async function () {
//     await playEpisode(page)
//     await verifyProgressBarValues(page)
//     // recorder.stop()
// })

// Then('authenticated user can play the first authorized episode', async function () {
//     await playEpisode(page)
//     await verifyProgressBarValues(page)
// })

// Then('authenticated user clicks on second episode and can play the authorized episode', async function () {
//     await clickSecondAuthorizedEpisodeButton(page)
//     await playEpisode(page)
//     await verifyProgressBarValues(page)
//     // await recorder.stop()
// })

// When('a guest user access authorized content and logs in through trailblazer id: {word}', async function (emailId) {
//     await loginThroughSignedUpUser(page, emailId)
// })

// When('a guest user fills out the sign up forms and clicks cancel and logout button', async function (datatable) {
//     const dataFields = await datatable.hashes()[0];
//     await logoutFromSFPlatform(page, dataFields)
// })

// Then('the user is logged out', async function () {
//     await isUserLoggedOut(page);
// })
AfterStep("@episodePage", async function () {
    await waitTillHTMLRendered(page);
    ss = await page.screenshot({ fullPage: true })
    await this.attach(ss, 'image/png')
})

// After("@episodePage", async function () {
//     await page.close()
// })

// AfterAll(async function () {
//     await destroy()
// })
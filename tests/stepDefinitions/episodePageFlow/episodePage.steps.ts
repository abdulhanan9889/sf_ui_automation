

import { Given, When, After, Then, AfterAll, AfterStep,Before,setDefaultTimeout,BeforeAll } from '@cucumber/cucumber'
import { loadBrowser } from '../../../main/utilities/loadBrowser'
import {
    closeTbidModal,
    fillSignUpForms,
    loginThroughSignedUpUser,
    loginThroughTrailblazerId,
    logoutFromSFPlatform,
    maximizeVideoPlayer,
    minimizeVideoPlayer,
    openAuthorizedEpisode
} from '../../../main/ui/salesforcePlusPlatform/episodePageFlow/episodePage.tasks'
import {
    verifyEpisodeNumber, verifySeriesTitle, verifyEpisodeTitle, verifyForwardedVideo, verifyReversedVideo,
    verifyMutedVideo, verifyUnmutedVideo, verifyMaximizedPlayer, verifyMinimizedPlayer, verifySpeakerDetails
} from '../../../main/ui/salesforcePlusPlatform/episodePageFlow/episodePage.assertions'
import { acceptCookies, clickSecondEpisodeButton } from '../../../main/ui/salesforcePlusPlatform/originalSeries/actions/unAuthFlow.actions'
import { verifyProgressBarValues } from '../../../main/ui/salesforcePlusPlatform/originalSeries/assertions/VideoProgress'
import { waitTillHTMLRendered } from '../../../main/utilities/waitTillHTMLRendered'
import { isUserLoggedOut } from '../../../main/ui/salesforcePlusPlatform/broadcastPageFlow/broadcastPage.assertions'
import SFDataInsertion from '../../../main/testDataGeneration/testDataLogic/SFDataInsertion'
import BaseObject from '../../../main/testDataGeneration/entities/BaseObject'
import SFDataLogic from '../../../main/testDataGeneration/testDataLogic/testDataLogic'


import { openEpisode, playEpisode, openNextEpisode, openNextAuthenticatedEpisode } from '../../../main/ui/salesforcePlusPlatform/originalSeries/tasks/unAuthFlow.tasks'
import { muteVideoButton, unmuteVideoButton } from '../../../main/ui/salesforcePlusPlatform/broadcastPageFlow/broadcastPage.actions'
import { clickAuthorizedEpisodeButton, clickAuthorizedSeriesButton, clickSecondAuthorizedEpisodeButton } from '../../../main/ui/salesforcePlusPlatform/episodePageFlow/episodePage.actions'
import { openVideo, authFlowTestData, authFlowTestDataDelete,authFlowTestDataSet } from '../../../main/ui/salesforcePlusPlatform/authenticatedFlow/authFlow.tasks'
import { openLoginPage, signInOnSalesforce } from '../../../main/ui/salesforcePlusPlatform/loginFlow/loginFlow.tasks'
import { verifyUserIsLoggedIn } from '../../../main/ui/salesforcePlusPlatform/loginFlow/loginFlow.assertions'
import testData from '../../../main/testDataGeneration/testDataFiles/featureFileTestData.json'
setDefaultTimeout(500*1000)
let page
let ss
let recorder
let noOfEpisodes;
let noOfSpeakers
let noOfEvents
// BeforeAll(async function(){  
//     noOfEpisodes = 2
//     noOfSpeakers = 2
//     await authFlowTestData(0, 2, 1, 2, noOfSpeakers,"dummy", "speaker", "QA Engineer", "Emumba")
// })
BeforeAll(async function(){  
    noOfEvents = testData.length
        for (let i=0; i < noOfEvents; i++){
            noOfEpisodes=testData[i].noOfEpisodesPerSeries
            noOfSpeakers= testData[i].noOfSpeakers
            await authFlowTestData(testData[i].seriesStartFromToday,
                testData[i].seriesEndFromToday,
                testData[i].noOfSeries,
                testData[i].noOfEpisodesPerSeries,
                testData[i].noOfSpeakers,
                testData[i].firstName,
                testData[i].lastName,
                testData[i].designation,
                testData[i].company)
    }
})

Before('@episodePage',async function(){
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

Given('an authenticated is already logged in',async function(){
    await verifyUserIsLoggedIn(page)
})
When("an authenticated user goes to the series",async function(){
    await page.goto(`https://www-qa1.salesforce.com/plus/experience/${authFlowTestDataSet.eventNames[0]}`, { waitUntil: 'load', timeout: 0 })
   await  clickAuthorizedSeriesButton(page)
   
})
  
When('an authenticated user goes to the episode', async function () {
    await await clickAuthorizedEpisodeButton(page)
});


Then('user is able to verify authenticated episode details', async function () {
    // for (let i = 0; i < noOfEpisodes; i++) {
    //     await verifyEpisodeNumber(page, authFlowTestDataSet.episodeOrder[i])
    //     await verifyEpisodeTitle(page, authFlowTestDataSet.episodeNames[i])
    //     console.log("No of speakers:",noOfSpeakers)
    //     // for (let j = 0; j < noOfSpeakers; j++) {
    //     //     await verifySpeakerDetails(page, authFlowTestDataSet.episodeList[i].speakerList[j], noOfSpeakers)
            
    //     // }
    //     if (i < noOfEpisodes - 1) {
    //         await openNextAuthenticatedEpisode(page, i)
           
    //     }
    // }
    await verifySeriesTitle(page, authFlowTestDataSet.seriesNames[0])
    console.log(`seriesTitle_${0}_verified`)
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
    await verifyUnmutedVideo(page)
//await recorder.stop()
})



Then('authenticated user clicks on second episode and can play the authorized episode', async function () {
    await openNextAuthenticatedEpisode(page,2)
    await playEpisode(page)
    await verifyProgressBarValues(page)
    // await recorder.stop()
})

AfterStep("@episodePage", async function () {
    await waitTillHTMLRendered(page);
    ss = await page.screenshot({ fullPage: true })
    await this.attach(ss, 'image/png')
})

After("@episodePage", async function () {
    await page.close()
})

AfterAll(async function () {
    await authFlowTestDataDelete()
})
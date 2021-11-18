import { BeforeAll, After, Given, Then, When, AfterAll, AfterStep } from '@cucumber/cucumber'
import { loadBrowser } from '../../../main/utilities/loadBrowser'
import { acceptCookies } from '../../../main/ui/salesforcePlusPlatform/originalSeries/actions/unAuthFlow.actions'
import { verifyProgressBarValues } from '../../../main/ui/salesforcePlusPlatform/originalSeries/assertions/VideoProgress'
import { waitTillHTMLRendered } from '../../../main/utilities/waitTillHTMLRendered'
import SFDataInsertion from '../../../main/testDataGeneration/testDataLogic/SFDataInsertion'
import SFDataLogic from '../../../main/testDataGeneration/testDataLogic/testDataLogic'
import BaseObject from '../../../main/testDataGeneration/entities/BaseObject'
import SFDataDeletion from '../../../main/testDataGeneration/testDataLogic/SFDataDeletion'
import verifySpeakerCardDetails from '../../../main/ui/salesforcePlusPlatform/originalSeries/assertions/speakerCardAssertion'
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
import { muteVideoButton, unmuteVideoButton } from '../../../main/ui/salesforcePlusPlatform/broadcastPageFlow/broadcastPage.actions'
var { setDefaultTimeout } = require('@cucumber/cucumber')
setDefaultTimeout(60000)
let page
let recorder
let ss
import { testDataSet,testDataSetUpcoming,destroy,testData,testDataUnpublished } from '../../../main/ui/salesforcePlusPlatform/originalSeries/tasks/createDestroyOriginalSeries'
import { verifyOriginalSeriesCard,verifyOriginalSeriesCardUnpublished } from '../../../main/ui/salesforcePlusPlatform/originalSeries/assertions/OriginalSeriesCard'
import {
    
    openEpisode,
    openSeries,
    playEpisode,
    openFirstEpisode,
    openSecondEpisode
} from '../../../main/ui/salesforcePlusPlatform/originalSeries/tasks/unAuthFlow.tasks'
import {verifyEpisodeCardDetails, verifyEpisodeScreenDetails} from "../../../main/ui/salesforcePlusPlatform/originalSeries/assertions/episodeAssertions"
import {
        verifyEpisodeNumber, verifySeriesTitle, verifyEpisodeTitle, verifyForwardedVideo, verifyReversedVideo,
        verifyMutedVideo, verifyUnmutedVideo, verifyMaximizedPlayer, verifyMinimizedPlayer
    } from '../../../main/ui/salesforcePlusPlatform/episodePageFlow/episodePage.assertions'

BeforeAll(async function(){
    

    await testData(2,0, 3, 2, "first","last","qa","emumba")
    await testDataUnpublished(0, 2)
      

})
Given('user generates data for unauthenticated flows', async function(datatable) {
    const testDataParameters = await datatable.hashes()[0]

    await testData(testDataParameters.numberOfEpisodesPerSeries, 
        testDataParameters.seriesStartDayFromToday, testDataParameters.seriesEndDayFromToday , testDataParameters.numberOfSpeakers, "first","last","qa","emumba")
    await testDataUnpublished(testDataParameters.seriesStartDayFromToday, testDataParameters.seriesEndDayFromToday)
      
})

Given('a user is on the salesforce plus platform', async function () {
    page = await loadBrowser()
    await page.goto(this.parameters.URL, { waitUntil: 'load', timeout: 600000 })
    // await waitTillHTMLRendered(page)
    await acceptCookies(page)
});

When("user is on the original series detail page", async function(){
    await openSeries(page)
})

When('user navigates to the episodes page and clicks on a particular episode', async function () {
    console.log("this is test data", testDataSet)
    await openEpisode( page)
});

Then('User verfies the published and unpublished series card', async function(){
    await verifyOriginalSeriesCard(page )
    await verifyOriginalSeriesCardUnpublished(page)
    
})
Then('user is able to verify episode cards details', async function () {
      await verifyEpisodeCardDetails(page)
    });

Then('user is able to verify the speaker details and episode details for that episode', async function(){
   await verifySpeakerCardDetails(page)
await verifyEpisodeScreenDetails(page)
})

    
    
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
    })
Then('user is able to play the episode now', async function () {
    await playEpisode(page)
    await verifyProgressBarValues(page)
})

When('user navigates to episodes page and clicks on the first episode', async function () {
    await openFirstEpisode(page)
});

Then('user is able to play the first episode', async function () {
    await playEpisode(page)
    await verifyProgressBarValues(page)
})

When('user clicks on the second episode', async function () {
    await openSecondEpisode( page)
});

Then('user is able to play the second episode', async function () {
    await playEpisode(page)
    await verifyProgressBarValues(page)
    // await recorder.stop()
})

AfterStep("@unAuthFlow",async function () {
     await waitTillHTMLRendered(page);
    ss = await page.screenshot({ fullPage: true })
    await this.attach(ss, 'image/png')
})

After("@unAuthFlow", async function () {
    await page.close()
})

AfterAll(async function () {
 
    await destroy()
    
})


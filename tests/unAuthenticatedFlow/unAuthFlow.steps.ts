import { BeforeAll, After, Given, Then, When, AfterAll, AfterStep } from '@cucumber/cucumber'
import { loadBrowser } from '../utilities/loadBrowser'
import { acceptCookies } from './unAuthFlow.actions'
import { verifyProgressBarValues } from './unAuthFlow.assertions'
import { waitTillHTMLRendered } from '../utilities/waitTillHTMLRendered'
import SFDataInsertion from '../testDataGeneration/testDataLogic/SFDataInsertion'
import SFDataLogic from '../testDataGeneration/testDataLogic/testDataLogic'
import BaseObject from '../testDataGeneration/entities/BaseObject'
import SFDataDeletion from '../testDataGeneration/testDataLogic/SFDataDeletion'


var { setDefaultTimeout } = require('@cucumber/cucumber')
setDefaultTimeout(60000)
let page
let recorder
let ss

import { testData,testDataSet,destroy,openEpisode, playEpisode, openFirstEpisode, openSecondEpisode } from './unAuthFlow.tasks'
Given('user generates data for unauthenticated flows', async function(datatable) {
    const testDataParameters = await datatable.hashes()[0]

    await testData(testDataParameters.numberOfEpisodesPerSeries, 
        testDataParameters.seriesStartDayFromToday, testDataParameters.seriesEndDayFromToday , testDataParameters.numberOfSpeakers)
      
})

Given('a user is on the salesforce plus platform', async function () {
    page = await loadBrowser()
    // recorder = new PuppeteerScreenRecorder(page);
    // await recorder.start('tests/reports/videos/unAuthFlow/unAuthFlowVideo.mp4');
    await page.goto(this.parameters.URL, { waitUntil: 'load', timeout: 0 })
    // await waitTillHTMLRendered(page)
    await acceptCookies(page)
});

When('user navigates to the episodes page and clicks on a particular episode', async function () {
    console.log("this is test data", testDataSet)
    await openEpisode( page)
});

Then('user is able to play the episode now', async function () {
    await playEpisode(page)
    await verifyProgressBarValues(page)
    // await recorder.stop()
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
    // await waitTillHTMLRendered(page);
    ss = await page.screenshot({ fullPage: true })
    await this.attach(ss, 'image/png')
})

After("@unAuthFlow", async function () {
    await page.close()
})

AfterAll(async function () {
 
    await destroy()
    
})


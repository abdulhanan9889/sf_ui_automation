import { After, Given, Then, When, AfterAll } from '@cucumber/cucumber'
import { loadBrowser } from '../utilities/loadBrowser'
import { openEpisode, playEpisode, openFirstEpisode, openSecondEpisode } from '../tasks/unAuthFlow.tasks'
import { acceptCookies } from '../actions/unAuthFlow.actions'
import { verifyProgressBarValues } from '../assertions/unAuthFlow.assertions'
import { waitTillHTMLRendered } from '../utilities/waitTillHTMLRendered'
import SFDataInsertion from '../testDataGeneration/testDataLogic/SFDataInsertion'
import SFDataLogic from '../testDataGeneration/testDataLogic/testDataLogic'
import BaseObject from '../testDataGeneration/entities/BaseObject'

var { setDefaultTimeout } = require('@cucumber/cucumber')
setDefaultTimeout(60000)
export var cliUsername;
export var cliPassword;
export var cliLoginUrl;
export var cliInstanceUrl;
let page

Given('user generates data for unauthenticated flows', async function (datatable) {
    cliUsername= this.parameters.username
  cliPassword =this.parameters.password
  cliLoginUrl =this.parameters.loginUrl
  cliInstanceUrl = this.parameters.instanceUrl
    const testDataParameters = await datatable.hashes()[0]
    // await SFDataInsertion.createOriginalSeriesWithEpisodes(testDataParameters.numberOfSeries, testDataParameters.numberOfEpisodesPerSeries, testDataParameters.seriesStartDayFromToday, testDataParameters.seriesEndDayFromToday)
})

Given('a user is on the salesforce plus platform', async function () {
    page = await loadBrowser()
    await page.goto(this.parameters.URL, { waitUntil: 'load', timeout: 0 })
    await waitTillHTMLRendered(page)
    await acceptCookies(page)
});

When('user navigates to the episodes page and clicks on a particular episode', async function () {
    await openEpisode(page)
});

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
    await openSecondEpisode(page)
});

Then('user is able to play the second episode', async function () {
    await playEpisode(page)
    await verifyProgressBarValues(page)
})

After(async function () {
    await page.close()
})

AfterAll(async function () {
    let baseobject = new BaseObject()
    //SFDataLogic.deleteRecord(baseobject.getObjectId(), baseobject.getObjectName())
})

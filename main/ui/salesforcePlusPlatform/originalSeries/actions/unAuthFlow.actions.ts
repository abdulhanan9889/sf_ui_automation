import { ACCEPT_COOKIES_BUTTON } from "../../selectors/common.selectors";
import { getExploreSalesforceButton } from "../../homePageFlow/user_interface/heroBannerSelectors";
import { pauseButton, playButton } from "../../episodePageFlow/user_interface/episodePlayerSelectors";
import { episodeButton, firstEpisodeButton, nextEpisodeButton, secondEpisodeButton } from "../../originalSeries/user_interface/EpisodeSection"
import { nextAuthenticatedEpisodeButton, seriesButton } from "../user_interface/OriginalSeriesSection";
var assert = require('assert')
export async function acceptCookies(page) {
    try {
        await page.waitFor(2000)
        if (ACCEPT_COOKIES_BUTTON != 'null') {
            await page.focus(ACCEPT_COOKIES_BUTTON);
            await page.click(ACCEPT_COOKIES_BUTTON);
        }
    }
    catch{  
        console.log("Accept Cookies button not present")
    }
}

export async function clickExploreSalesforceButton(page) {
  try {
    await page.waitForSelector(getExploreSalesforceButton)
    const EXPLORE_SALESFORCE_BUTTON = await page.$(getExploreSalesforceButton)
    EXPLORE_SALESFORCE_BUTTON.click()}
    catch{
        assert.fail("Explore more button was not found")
    }
  
}

export async function clickSeriesButton(page) {
  try {  await page.waitForSelector(seriesButton())
    let SERIES_BUTTON = await page.$(seriesButton())
    SERIES_BUTTON.click()}
    catch{
        assert.fail("Series Button was not found")
    }
   
}

export async function clickEpisodeButton(page) {
try 
   { await page.waitForSelector(episodeButton())
    let EPISODE_BUTTON = await page.$(episodeButton())
    EPISODE_BUTTON.click()}
    catch{
        assert.fail("Episode Button was not found")
    }
}

export async function clickPlayButton(page) {
    try{
    await page.waitForSelector(playButton)
    let PLAY_BUTTON = await page.$(playButton)
    PLAY_BUTTON.evaluate((ele) => ele.click())
}
catch{
 assert.fail("Play button was not found")
}
}

export async function clickPauseButton(page) {
  try { await page.waitForSelector(pauseButton)
    let PAUSE_BUTTON = await page.$(pauseButton)
    // PAUSE_BUTTON.click()
    PAUSE_BUTTON.evaluate((ele) => ele.click())}
    catch{
        assert.fail("Pause button was not found")
    }
}

export async function clickFirstEpisodeButton(page) {
try {
    await page.waitForSelector(firstEpisodeButton())
    let FIRST_EPISODE_BUTTON = await page.$(firstEpisodeButton())
    FIRST_EPISODE_BUTTON.click()
   }
   catch{
       assert.fail("First episode Button was not found")
   }
}

export async function clickSecondEpisodeButton(page) {

    await page.waitForSelector(secondEpisodeButton())
    let SECOND_EPISODE_BUTTON = await page.$(secondEpisodeButton())
    SECOND_EPISODE_BUTTON.click()
   
}

export async function clickNextEpisodeButton(page, episodeNo) {
    await page.waitForSelector(nextEpisodeButton(episodeNo))
    let EPISODE_BUTTON = await page.$(nextEpisodeButton(episodeNo))
    EPISODE_BUTTON.click()
}

export async function clickNextAuthenticatedEpisodeButton(page, episodeNo) {
    await page.waitForSelector(await nextAuthenticatedEpisodeButton(episodeNo))
    let EPISODE_BUTTON = await page.$(await nextAuthenticatedEpisodeButton(episodeNo))
    EPISODE_BUTTON.click()
}
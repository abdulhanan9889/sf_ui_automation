var assert = require("assert");
var Assertion = require('soft-assert/lib/assertion')
import {
    getEpisodeNumber, getSeriesTitle,
    getEpisodeTitle
} from './user_interface/episodeDetailsSelectors';
import {
    getMinimizedButtonPathValue,
    getVideoProgressbar,
    getMaximizeButtonPathValue,
    getMuteButtonViewboxValue
} from './user_interface/episodePlayerSelectors';
import { forwardButton, reverseButton } from "./user_interface/episodePlayerSelectors";
import { getSpeakerNames, getSpeakerDesignation } from './user_interface/speakerSectionSelectors';

export async function verifyEpisodeNumber(page, episodeNumber) {
    await page.waitForSelector(getEpisodeNumber);
    let episodeNumberElement = await page.$(getEpisodeNumber)
    let episodeNumberValue = await episodeNumberElement.evaluate(
        (ele) => ele.innerHTML
    );
    episodeNumberValue = episodeNumberValue.split("• ")[1];
    await Assertion.softAssert(episodeNumberValue, `EPISODE ${episodeNumber}`, "episode number assertion failed", [])
}

export async function verifySeriesTitle(page, seriesTitle) {
    await page.waitForSelector(getSeriesTitle);
    let seriesTitleElement = await page.$(getSeriesTitle)
    let seriesTitleValue = await seriesTitleElement.evaluate(
        (ele) => ele.innerHTML
    );
    seriesTitleValue = seriesTitleValue.split(" •")[0];
    await Assertion.softAssert(seriesTitleValue.toLowerCase(), seriesTitle.toLowerCase(), "series title assertion failed", [])
    await Assertion.softAssertAll()
}

export async function verifyEpisodeTitle(page, episodeTitle) {
    await page.waitForSelector(getEpisodeTitle);
    let episodeTitleElement = await page.$(getEpisodeTitle)
    let episodeTitleValue = await episodeTitleElement.evaluate(
        (ele) => ele.innerHTML
    );
    await Assertion.softAssert(episodeTitleValue, episodeTitle, "episode title assertion failed", [])
}

export async function verifySpeakerDetails(page, speakerDetails, noOfSpeakers) {
    let speakerName = await page.$$eval(getSpeakerNames, vals => vals.map(val => val.innerHTML))
    let speakerDesignation = await page.$$eval(getSpeakerDesignation, vals => vals.map(val => val.innerHTML))
    let speakerDesignationValue = `${speakerDetails.get("Designation")}, ${speakerDetails.get("Company")}`
    for (var i = 0; i < noOfSpeakers; i++) {
        await Assertion.softAssert(speakerName[i], speakerDetails.get("Name"), "speaker name assertion failed", [])
        await Assertion.softAssert(speakerDesignation[i], speakerDesignationValue, "speaker designation assertion failed", [])
        await Assertion.softAssertAll()
    }
}

export async function verifyForwardedVideo(page) {
    var progressBarValueBefore = await getVideoProgressbar(page);

    await page.waitForTimeout(2000)
    let FORWARD_BUTTON = await page.$(forwardButton)
    FORWARD_BUTTON.evaluate((ele) => ele.click())

    await page.waitForTimeout(2000)
    var progressBarValueAfter = await getVideoProgressbar(page);

    progressBarValueBefore = await progressBarValueBefore.evaluate(
        (value) => value.split("/")[0]
    );
    progressBarValueAfter = await progressBarValueAfter.evaluate(
        (value) => value.split("/")[0]
    );

    await assert.notEqual(progressBarValueBefore, progressBarValueAfter)
}

export async function verifyReversedVideo(page) {
    var progressBarValueBefore = await getVideoProgressbar(page);

    await page.waitForTimeout(2000)
    let REVERSE_BUTTON = await page.$(reverseButton)
    REVERSE_BUTTON.evaluate((ele) => ele.click())
    await page.waitForTimeout(2000)

    var progressBarValueAfter = await getVideoProgressbar(page);

    progressBarValueBefore = await progressBarValueBefore.evaluate(
        (value) => value.split("/")[0]
    );
    progressBarValueAfter = await progressBarValueAfter.evaluate(
        (value) => value.split("/")[0]
    );

    await assert.notEqual(progressBarValueBefore, progressBarValueAfter)
}

export async function verifyMutedVideo(page) {
    var muteButtonViewboxValue = await getMuteButtonViewboxValue(page)
    await Assertion.softAssert(muteButtonViewboxValue, '0 0 26 26', 'mute button assertion failed', [])
}

export async function verifyUnmutedVideo(page) {
    var unmuteButtonViewboxValue = await getMuteButtonViewboxValue(page)
    await Assertion.softAssert(unmuteButtonViewboxValue, '0 0 24 25', 'mute button assertion failed', [])
}

export async function verifyMaximizedPlayer(page) {
    var maximizeButtonPathValue = await getMaximizeButtonPathValue(page)
    await Assertion.softTrue(maximizeButtonPathValue, 'maximize player assertion failed')
}

export async function verifyMinimizedPlayer(page) {
    var minimizeButtonPathValue = await getMinimizedButtonPathValue(page)
    await Assertion.softTrue(minimizeButtonPathValue, 'maximize player assertion failed')
}
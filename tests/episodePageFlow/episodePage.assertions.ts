var assert = require("assert");
var Assertion = require('soft-assert/lib/assertion')

import {
    getEpisodeNumber,
    getSeriesTitle,
    getEpisodeTitle,
    getSpeakerOneName,
    getSpeakerOneDesignation,
    getSpeakerTwoName,
    getSpeakerTwoDesignation,
    getSpeakerThreeName,
    getSpeakerThreeDesignation,
    getVideoProgressbar,
    getMuteButtonViewboxValue,
    getMaximizeButtonPathValue,
    getMinimizedButtonPathValue,
} from "../selectors/common.selectors";
import { forwardButton, reverseButton } from "./episodePage.selectors";

export async function verifyEpisodeNumber(page, episodeNumber) {
    let episodeNumberElement = await page.$(getEpisodeNumber)
    let episodeNumberValue = await episodeNumberElement.evaluate(
        (ele) => ele.innerHTML
    );
    episodeNumberValue = episodeNumberValue.split("• ")[1];
    await Assertion.softAssert(episodeNumberValue, episodeNumber, "episode number assertion failed", [])
}

export async function verifySeriesTitle(page, seriesTitle) {
    let seriesTitleElement = await page.$(getSeriesTitle)
    let seriesTitleValue = await seriesTitleElement.evaluate(
        (ele) => ele.innerHTML
    );
    seriesTitleValue = seriesTitleValue.split(" •")[0];
    await Assertion.softAssert(seriesTitleValue, seriesTitle, "series title assertion failed", [])
}

export async function verifyEpisodeTitle(page, episodeTitle) {
    let episodeTitleElement = await page.$(getEpisodeTitle)
    let episodeTitleValue = await episodeTitleElement.evaluate(
        (ele) => ele.innerHTML
    );
    await Assertion.softAssert(episodeTitleValue, episodeTitle, "episode title assertion failed", [])
}

export async function verifySpeakerOneDetails(page, speakerOneDetails) {
    let speakerNameElement = await page.$(getSpeakerOneName)
    let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
    let speakerCard = await page.$(getSpeakerOneDesignation)
    let speakerCardTitle = await speakerCard.evaluate((ele) => ele.innerHTML);
    let speakerOneDetailsValue = speakerName + " & " + speakerCardTitle;
    await Assertion.softAssert(speakerOneDetailsValue, speakerOneDetails, "speaker one assertion failed", [])
}

export async function verifySpeakerTwoDetails(page, speakerTwoDetails) {
    let speakerNameElement = await page.$(getSpeakerTwoName)
    let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
    let speakerCard = await page.$(getSpeakerTwoDesignation)
    let speakerCardTitle = await speakerCard.evaluate((ele) => ele.innerHTML);
    let speakerTwoDetailsValue = speakerName + " & " + speakerCardTitle;
    await Assertion.softAssert(speakerTwoDetailsValue, speakerTwoDetails, "speaker two assertion failed", [])
    await Assertion.softAssertAll()
}

export async function verifySpeakerThreeDetails(page, speakerThreeDetails) {
    let speakerNameElement = await page.$(getSpeakerThreeName)
    let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
    let speakerCard = await page.$(getSpeakerThreeDesignation)
    let speakerCardTitle = await speakerCard.evaluate((ele) => ele.innerHTML);
    let speakerThreeDetailsValue = speakerName + " & " + speakerCardTitle;
    await Assertion.softAssert(speakerThreeDetailsValue, speakerThreeDetails, "speaker three assertion failed", [])
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
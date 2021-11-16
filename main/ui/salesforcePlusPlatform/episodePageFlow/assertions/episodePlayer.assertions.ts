import {
    getMinimizedButtonPathValue,
    getVideoProgressbar,
    getMaximizeButtonPathValue,
    getMuteButtonViewboxValue
} from '../user_interface/episodePlayerSelectors';
import { forwardButton, reverseButton } from "../user_interface/episodePlayerSelectors";
var assert = require("assert");
var Assertion = require('soft-assert/lib/assertion')
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
var assert = require("assert");
var Assertion = require('soft-assert/lib/assertion')
import {
    getEpisodeNumber, getSeriesTitle,
    getEpisodeTitle
} from '../user_interface/episodeDetailsSelectors';
import { getSpeakerNames, getSpeakerDesignation } from '../user_interface/speakerSectionSelectors';

export async function verifyEpisodeNumber(page, episodeNumber) {
    let episodeNumberElement = await page.$(getEpisodeNumber)
    let episodeNumberValue = await episodeNumberElement.evaluate(
        (ele) => ele.innerHTML
    );
    episodeNumberValue = episodeNumberValue.split("• ")[1];
    await Assertion.softAssert(episodeNumberValue, `EPISODE ${episodeNumber}`, "episode number assertion failed", [])
}

export async function verifySeriesTitle(page, seriesTitle) {
    let seriesTitleElement = await page.$(getSeriesTitle)
    let seriesTitleValue = await seriesTitleElement.evaluate(
        (ele) => ele.innerHTML
    );
    seriesTitleValue = seriesTitleValue.split(" •")[0];
    await Assertion.softAssert(seriesTitleValue.toLowerCase(), seriesTitle.toLowerCase(), "series title assertion failed", [])
    await Assertion.softAssertAll()
}

export async function verifyEpisodeTitle(page, episodeTitle) {
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



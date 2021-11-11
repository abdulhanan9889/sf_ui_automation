var assert = require("assert");
var assertion = require("soft-assert/lib/assertion");
import {
  getLogedOutText,
  getSpeakerFourName,
  getSpeakerEightDesignation,
  getSpeakerEightName,
  getSpeakerFiveDesignation,
  getSpeakerFiveName,
  getSpeakerFourDesignation,
  getSpeakerNineDesignation,
  getSpeakerNineName,
  getSpeakerSevenDesignation,
  getSpeakerSevenName,
  getSpeakerSixDesignation,
  getSpeakerSixName,
  getSpeakerTenDesignation,
  getSpeakerTenName,
} from "./broadcastPage.selectors";

export async function verifySpeakerFourDetails(page, speakerFourDetails) {
  await page.waitForSelector(getSpeakerFourName)
  let speakerNameElement = await page.$(getSpeakerFourName);
  let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
  let speakerCardTitleElement = await page.$(getSpeakerFourDesignation);
  let speakerCardTitle = await speakerCardTitleElement.evaluate(
    (ele) => ele.innerHTML
  );
  let speakerFourDetailsValue = speakerName + " & " + speakerCardTitle;
  await assertion.softAssert(
    speakerFourDetailsValue,
    speakerFourDetails,
    "speaker four details are not same",
    []
  );
}

export async function verifySpeakerFiveDetails(page, speakerFiveDetails) {
  await page.waitForSelector(getSpeakerFiveName)
  let speakerNameElement = await page.$(getSpeakerFiveName);
  let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
  let speakerCardTitleElement = await page.$(getSpeakerFiveDesignation);
  let speakerCardTitle = await speakerCardTitleElement.evaluate(
    (ele) => ele.innerHTML
  );
  let speakerFiveDetailsValue = speakerName + " & " + speakerCardTitle;
  await assertion.softAssert(
    speakerFiveDetailsValue,
    speakerFiveDetails,
    "speaker five details are not same",
    []
  );
}

export async function verifySpeakerSixDetails(page, speakerSixDetails) {
  await page.waitForSelector(getSpeakerSixName)
  let speakerNameElement = await page.$(getSpeakerSixName);
  let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
  let speakerCardTitleElement = await page.$(getSpeakerSixDesignation);
  let speakerCardTitle = await speakerCardTitleElement.evaluate(
    (ele) => ele.innerHTML
  );
  let speakerSixDetailsValue = speakerName + " & " + speakerCardTitle;
  await assertion.softAssert(
    speakerSixDetailsValue,
    speakerSixDetails,
    "speaker six details are not same",
    []
  );
}

export async function verifySpeakerSevenDetails(page, speakerSevenDetails) {
  await page.waitForSelector(getSpeakerSevenName)
  let speakerNameElement = await page.$(getSpeakerSevenName);
  let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
  let speakerCardTitleElement = await page.$(getSpeakerSevenDesignation);
  let speakerCardTitle = await speakerCardTitleElement.evaluate(
    (ele) => ele.innerHTML
  );
  let speakerSevenDetailsValue = speakerName + " & " + speakerCardTitle;
  await assertion.softAssert(
    speakerSevenDetailsValue,
    speakerSevenDetails,
    "speaker seven details are not same",
    []
  );
}

export async function verifySpeakerEightDetails(page, speakerEightDetails) {
  await page.waitForSelector(getSpeakerEightName)
  let speakerNameElement = await page.$(getSpeakerEightName);
  let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
  let speakerCardTitleElement = await page.$(getSpeakerEightDesignation);
  let speakerCardTitle = await speakerCardTitleElement.evaluate(
    (ele) => ele.innerHTML
  );
  let speakerEightDetailsValue = speakerName + " & " + speakerCardTitle;
  await assertion.softAssert(
    speakerEightDetailsValue,
    speakerEightDetails,
    "speaker eight details are not same",
    []
  );
}

export async function verifySpeakerNineDetails(page, speakerNineDetails) {
  await page.waitForSelector(getSpeakerNineName)
  let speakerNameElement = await page.$(getSpeakerNineName);
  let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
  let speakerCardTitleElement = await page.$(getSpeakerNineDesignation);
  let speakerCardTitle = await speakerCardTitleElement.evaluate(
    (ele) => ele.innerHTML
  );
  let speakerNineDetailsValue = speakerName + " & " + speakerCardTitle;
  await assertion.softAssert(
    speakerNineDetailsValue,
    speakerNineDetails,
    "speaker nine details are not same",
    []
  );
}

export async function verifySpeakerTenDetails(page, speakerTenDetails) {
  await page.waitForSelector(getSpeakerTenName)
  let speakerNameElement = await page.$(getSpeakerTenName);
  let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
  let speakerCardTitleElement = await page.$(getSpeakerTenDesignation);
  let speakerCardTitle = await speakerCardTitleElement.evaluate(
    (ele) => ele.innerHTML
  );
  let speakerTenDetailsValue = speakerName + " & " + speakerCardTitle;
  await assertion.softAssert(
    speakerTenDetailsValue,
    speakerTenDetails,
    "speaker ten details are not same",
    []
  );
  await assertion.softAssertAll();
}

export async function isUserLoggedOut(page) {
  await page.waitForSelector(getLogedOutText);
  let text = await page.$(getLogedOutText);
  let IS_LOGGED_OUT = await text.evaluate((status) => status?.innerText);
  await assert.equal(IS_LOGGED_OUT, "Login");
}

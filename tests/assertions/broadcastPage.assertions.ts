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
} from "../selectors/broadcastPage.selectors";

export async function verifySpeakerFourDetails(page, speakerFourDetails) {
  let speakerNameElement = await getSpeakerFourName(page);
  let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
  let speakerCardTitleElement = await getSpeakerFourDesignation(page);
  let speakerCardTitle = await speakerCardTitleElement.evaluate(
    (ele) => ele.innerHTML
  );
  let speakerFourDetailsValue = speakerName + " & " + speakerCardTitle;
  //assert.equal(speakerFourDetailsValue, speakerFourDetails);
  await assertion.softAssert(
    speakerFourDetailsValue,
    speakerFourDetails,
    "speaker four details are not same",
    []
  );
}

export async function verifySpeakerFiveDetails(page, speakerFiveDetails) {
  let speakerNameElement = await getSpeakerFiveName(page);
  let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
  let speakerCardTitleElement = await getSpeakerFiveDesignation(page);
  let speakerCardTitle = await speakerCardTitleElement.evaluate(
    (ele) => ele.innerHTML
  );
  let speakerFiveDetailsValue = speakerName + " & " + speakerCardTitle;
  // assert.equal(speakerFiveDetailsValue, speakerFiveDetails);
  await assertion.softAssert(
    speakerFiveDetailsValue,
    speakerFiveDetails,
    "speaker five details are not same",
    []
  );
}

export async function verifySpeakerSixDetails(page, speakerSixDetails) {
  let speakerNameElement = await getSpeakerSixName(page);
  let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
  let speakerCardTitleElement = await getSpeakerSixDesignation(page);
  let speakerCardTitle = await speakerCardTitleElement.evaluate(
    (ele) => ele.innerHTML
  );
  let speakerSixDetailsValue = speakerName + " & " + speakerCardTitle;
  //assert.equal(speakerSixDetailsValue, speakerSixDetails);
  await assertion.softAssert(
    speakerSixDetailsValue,
    speakerSixDetails,
    "speaker six details are not same",
    []
  );
}

export async function verifySpeakerSevenDetails(page, speakerSevenDetails) {
  let speakerNameElement = await getSpeakerSevenName(page);
  let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
  let speakerCardTitleElement = await getSpeakerSevenDesignation(page);
  let speakerCardTitle = await speakerCardTitleElement.evaluate(
    (ele) => ele.innerHTML
  );
  let speakerSevenDetailsValue = speakerName + " & " + speakerCardTitle;
  //assert.equal(speakerSevenDetailsValue, speakerSevenDetails);
  await assertion.softAssert(
    speakerSevenDetailsValue,
    speakerSevenDetails,
    "speaker seven details are not same",
    []
  );
}

export async function verifySpeakerEightDetails(page, speakerEightDetails) {
  let speakerNameElement = await getSpeakerEightName(page);
  let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
  let speakerCardTitleElement = await getSpeakerEightDesignation(page);
  let speakerCardTitle = await speakerCardTitleElement.evaluate(
    (ele) => ele.innerHTML
  );
  let speakerEightDetailsValue = speakerName + " & " + speakerCardTitle;
  //assert.equal(speakerEightDetailsValue, speakerEightDetails);
  await assertion.softAssert(
    speakerEightDetailsValue,
    speakerEightDetails,
    "speaker eight details are not same",
    []
  );
}

export async function verifySpeakerNineDetails(page, speakerNineDetails) {
  let speakerNameElement = await getSpeakerNineName(page);
  let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
  let speakerCardTitleElement = await getSpeakerNineDesignation(page);
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
  let speakerNameElement = await getSpeakerTenName(page);
  let speakerName = await speakerNameElement.evaluate((ele) => ele.innerHTML);
  let speakerCardTitleElement = await getSpeakerTenDesignation(page);
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
  let text = await getLogedOutText(page);
  let IS_LOGGED_OUT = await text.evaluate((status) => status?.innerText);
  console.log("Text appearing is", IS_LOGGED_OUT);
  await assert.equal(IS_LOGGED_OUT, "Login");
}

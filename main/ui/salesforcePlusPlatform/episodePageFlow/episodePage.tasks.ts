import {
    clickDreamForceTab,
    clickLoginInWithTrailblazaerID,
    clickEmailButton,
    generateRandomEmail,
    typeEmailAddressInTrailBlazer,
    clickLoginButton,
    openSalesForceEmail,
    typeEmailTokenInTrailBlazzer,
    clickConitnueButton,
    clickOnSignUpButton,
    typeFirstName,
    typeLastName,
    generateRandomProfileUrl,
    typeProfileUrl,
    clickNextButton,
    typeCompanyName,
    typeJobTitle,
    selectRoleName,
    selectRelationshipToSalesForce,
    selectCountryName,
    selectStateName,
    checkPrivacyStatement,
    clickDoneButton,
    typeWorkEmail,
    typeWorkPhone,
    selectCompanySize,
    selectJobRole,
    selectGetRecentUpdateCheckbox,
    typeCountryCode,
    typePhoneNumber,
    selectGiveInformationForMarketingPurposeCheckbox,
    clickCompleteMyMembership
} from '../authenticatedFlow/authFlow.actions'
import { clickSkipForNowButton, clickCancelAndLogoutButton } from '../broadcastPageFlow/broadcastPage.actions'
import { clickAuthorizedEpisodeButton, clickAuthorizedSeriesButton, clickCrossButton } from './episodePage.actions'
import { acceptCookies } from '../originalSeries/actions/unAuthFlow.actions'
import { getCloseButton } from '../selectors/common.selectors'
import { maximizeVideoPlayerButton, minimizeVideoPlayerButton } from './user_interface/episodePlayerSelectors'
import { waitTillHTMLRendered } from '../../../utilities/waitTillHTMLRendered'
import SFDataInsertion from '../../../testDataGeneration/testDataLogic/SFDataInsertion'
import SFDataLogic from '../../../testDataGeneration/testDataLogic/testDataLogic'
import SFDataDeletion from "../../../testDataGeneration/testDataLogic/SFDataDeletion"

export var testDataSetAuth: SFDataLogic = new SFDataLogic()

let email
//unauth content
// export async function testData(numberOfEpisodesPerSeries: number,
//     seriesStartDayFromToday: number, seriesEndDayFromToday: number, numberOfSpeakers: number) {
//     await SFDataInsertion.createOriginalSeries(testDataSetAuth, numberOfEpisodesPerSeries,
//         seriesStartDayFromToday, seriesEndDayFromToday, numberOfSpeakers)
//     return testDataSetAuth
// }
export async function destroy() {
    await SFDataDeletion.DeleteOriginalSeries(testDataSetAuth)
}

export async function openAuthorizedEpisode(page) {
    // await clickDreamForceTab(page)
    // await waitTillHTMLRendered(page)
    await clickAuthorizedSeriesButton(page)
    await waitTillHTMLRendered(page)
    await page.waitForTimeout(10000)
    await clickAuthorizedEpisodeButton(page)
    await waitTillHTMLRendered(page)
}
export async function closeTbidModal(page) {
    await clickCrossButton(page)
    await waitTillHTMLRendered(page)
}

export async function loginThroughTrailblazerId(page) {
    await clickLoginInWithTrailblazaerID(page)
    await page.waitForNavigation({ waitUntil: 'networkidle2' })
    await waitTillHTMLRendered(page)
    await acceptCookies(page)
    await waitTillHTMLRendered(page)
    await clickEmailButton(page)
    await waitTillHTMLRendered(page)
    email = await generateRandomEmail()
    await typeEmailAddressInTrailBlazer(page, email)
    await clickLoginButton(page)
    await waitTillHTMLRendered(page)

    //user enters OTP from mailinator
    let context = await openSalesForceEmail(email);
    await page.waitForTimeout(2000)
    await typeEmailTokenInTrailBlazzer(page, context);
    await clickConitnueButton(page);
    await waitTillHTMLRendered(page)
}

export async function fillSignUpForms(page, dataFields) {
    await clickOnSignUpButton(page);
    await page.waitForNavigation({ waitUntil: "networkidle0" });
    await typeFirstName(page, dataFields.firstName);
    await typeLastName(page, dataFields.lastName);
    let profileUrl = await generateRandomProfileUrl();
    await typeProfileUrl(page, profileUrl);
    await clickNextButton(page);
    await page.waitForNavigation({ waitUntil: "networkidle2" });
    await page.waitForTimeout(5000);
    await typeCompanyName(page, dataFields.companyName);
    await typeJobTitle(page, dataFields.jobTitle);
    await selectRoleName(page, dataFields.roleName);
    await selectRelationshipToSalesForce(page, dataFields.relation);
    await selectCountryName(page, dataFields.country);
    await selectStateName(page, dataFields.country, dataFields.state);
    await checkPrivacyStatement(page);
    await clickDoneButton(page);
    await page.waitFor(28000);
    await typeWorkEmail(page, email);
    await typeWorkPhone(page, dataFields.phoneNumber);
    await selectCompanySize(page, dataFields.companySize);
    await selectJobRole(page, dataFields.jobRole);
    await selectGetRecentUpdateCheckbox(page);
    await typeCountryCode(page, dataFields.countryCode);
    await typePhoneNumber(page, dataFields.phoneNumber);
    await selectGiveInformationForMarketingPurposeCheckbox(page);
    await clickCompleteMyMembership(page);
}

export async function loginThroughSignedUpUser(page, emailId) {
    await clickLoginInWithTrailblazaerID(page)
    await page.waitForNavigation({ waitUntil: 'networkidle0' })
    await waitTillHTMLRendered(page)
    await acceptCookies(page)
    await waitTillHTMLRendered(page)
    await clickEmailButton(page)
    await waitTillHTMLRendered(page)
    await typeEmailAddressInTrailBlazer(page, emailId)
    await clickLoginButton(page)
    await waitTillHTMLRendered(page)

    //user enters OTP from mailinator
    let context = await openSalesForceEmail(emailId);
    await page.waitForTimeout(2000)
    await typeEmailTokenInTrailBlazzer(page, context);
    await clickConitnueButton(page);
    await page.waitForNavigation({ waitUntil: 'networkidle0' })
    await clickSkipForNowButton(page)
    await page.waitForTimeout(20000)
}

export async function logoutFromSFPlatform(page, dataFields) {
    await clickOnSignUpButton(page);
    await page.waitForNavigation({ waitUntil: "networkidle0" });
    await typeFirstName(page, dataFields.firstName);
    await typeLastName(page, dataFields.lastName);
    let profileUrl = await generateRandomProfileUrl();
    await typeProfileUrl(page, profileUrl);
    await clickNextButton(page);
    await page.waitForNavigation({ waitUntil: "networkidle2" });
    await page.waitForTimeout(5000);
    await typeCompanyName(page, dataFields.companyName);
    await typeJobTitle(page, dataFields.jobTitle);
    await selectRoleName(page, dataFields.roleName);
    await selectRelationshipToSalesForce(page, dataFields.relation);
    await selectCountryName(page, dataFields.country);
    await selectStateName(page, dataFields.country, dataFields.state);
    await checkPrivacyStatement(page);
    await clickDoneButton(page);
    await page.waitFor(28000);
    await typeWorkEmail(page, email);
    await typeWorkPhone(page, dataFields.phoneNumber);
    await selectCompanySize(page, dataFields.companySize);
    await selectJobRole(page, dataFields.jobRole);
    await selectGetRecentUpdateCheckbox(page);
    await typeCountryCode(page, dataFields.countryCode);
    await typePhoneNumber(page, dataFields.phoneNumber);
    await selectGiveInformationForMarketingPurposeCheckbox(page);
    await clickCancelAndLogoutButton(page);
    await page.waitForNavigation({ waitUntil: "networkidle0" });
    await waitTillHTMLRendered(page)
}

export async function maximizeVideoPlayer(page) {
    let MAXIMIZE_BUTTON = await page.$(maximizeVideoPlayerButton)
    MAXIMIZE_BUTTON.evaluate((ele) => ele.click())
}

export async function minimizeVideoPlayer(page) {
    let MINIMIZE_BUTTON = await page.$(minimizeVideoPlayerButton)
    MINIMIZE_BUTTON.evaluate((ele) => ele.click())
}
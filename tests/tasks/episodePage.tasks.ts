
import { clickDreamForceTab, clickLoginInWithTrailblazaerID, clickEmailButton, generateRandomEmail, typeEmailAddressInTrailBlazer, clickLoginButton, openSalesForceEmail, typeEmailTokenInTrailBlazzer, clickConitnueButton, clickOnSignUpButton, typeFirstName, typeLastName, generateRandomProfileUrl, typeProfileUrl, clickNextButton, typeCompanyName, typeJobTitle, selectRoleName, selectRelationshipToSalesForce, selectCountryName, selectStateName, checkPrivacyStatement, clickDoneButton, typeWorkEmail, typeWorkPhone, selectCompanySize, selectJobRole, selectGetRecentUpdateCheckbox, typeCountryCode, typePhoneNumber, selectGiveInformationForMarketingPurposeCheckbox, clickCompleteMyMembership } from '../actions/authFlow.actions'
import { clickSkipForNowButton, clickCancelAndLogoutButton } from '../actions/broadcastPage.actions'
import { clickAuthorizedSeriesButton } from '../actions/episodePage.actions'
import { acceptCookies, clickEpisodeButton } from '../actions/unAuthFlow.actions'
import { maximizeVideoPlayerButton, minimizeVideoPlayerButton } from '../selectors/episodePage.selectors'
import { waitTillHTMLRendered } from '../utilities/waitTillHTMLRendered'

let email

export async function openAuthorizedEpisode(page) {
    await clickDreamForceTab(page)
    await waitTillHTMLRendered(page)
    await clickAuthorizedSeriesButton(page)
    await waitTillHTMLRendered(page)
    await clickEpisodeButton(page)
    await waitTillHTMLRendered(page)
}

export async function loginThroughTrailblazerId(page) {
    await clickLoginInWithTrailblazaerID(page)
    await page.waitForNavigation({ waitUntil: 'networkidle2' })
    await waitTillHTMLRendered(page)
    await acceptCookies(page)
    await clickEmailButton(page)
    await waitTillHTMLRendered(page)
    email = await generateRandomEmail()
    await typeEmailAddressInTrailBlazer(page, email)
    await clickLoginButton(page)
    await waitTillHTMLRendered(page)

    //user enters OTP from mailinator
    let context = await openSalesForceEmail(email);
    await typeEmailTokenInTrailBlazzer(page, context);
    await clickConitnueButton(page);
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
    await page.waitFor(25000);
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
    await clickEmailButton(page)
    await waitTillHTMLRendered(page)
    await typeEmailAddressInTrailBlazer(page, emailId)
    await clickLoginButton(page)
    await waitTillHTMLRendered(page)

    //user enters OTP from mailinator
    let context = await openSalesForceEmail(emailId);
    await typeEmailTokenInTrailBlazzer(page, context);
    await clickConitnueButton(page);
    await page.waitForNavigation({ waitUntil: 'networkidle0' })
    await clickSkipForNowButton(page)
    await page.waitForTimeout(10000)
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
    await page.waitFor(25000);
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
    let MAXIMIZE_BUTTON = await maximizeVideoPlayerButton(page)
    MAXIMIZE_BUTTON.evaluate((ele) => ele.click())
}

export async function minimizeVideoPlayer(page) {
    let MINIMIZE_BUTTON = await minimizeVideoPlayerButton(page)
    MINIMIZE_BUTTON.evaluate((ele) => ele.click())
}



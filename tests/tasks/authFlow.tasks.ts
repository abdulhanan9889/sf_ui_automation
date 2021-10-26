import {
  clickDreamForceTab,
  clickCompleteMyMembership,
  clickLoginInWithTrailblazaerID,
  clickConitnueButton,
  clickDoneButton,
  clickEmailButton,
  clickLoginButton,
  clickNextButton,
  clickOnSignUpButton,
  clickWatchNowButton,
  typeCompanyName,
  typeCountryCode,
  typeEmailAddressInTrailBlazer,
  typeEmailTokenInTrailBlazzer,
  typeFirstName,
  typeLastName,
  typeJobTitle,
  typePhoneNumber,
  typeProfileUrl,
  typeWorkPhone,
  typeWorkEmail,
  selectCompanySize,
  selectCountryName,
  selectGetRecentUpdateCheckbox,
  selectGiveInformationForMarketingPurposeCheckbox,
  selectJobRole,
  selectRelationshipToSalesForce,
  selectRoleName,
  selectStateName,
  openSalesForceEmail,
  generateRandomEmail,
  generateRandomProfileUrl,
  checkPrivacyStatement,
} from "../actions/authFlow.actions";
import { acceptCookies } from "../actions/unAuthFlow.actions";
import { waitTillHTMLRendered } from "../utilities/waitTillHTMLRendered";

var email;
export async function openSignInForm(page) {
  await clickDreamForceTab(page);
  await waitTillHTMLRendered(page);
  await clickWatchNowButton(page);
  await waitTillHTMLRendered(page);
}

export async function fillSignInForm(page) {
  await clickLoginInWithTrailblazaerID(page);
  await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 35000 });
  await acceptCookies(page);
  await page.waitFor(3000);
  await clickEmailButton(page);
  email = await generateRandomEmail();
  await typeEmailAddressInTrailBlazer(page, email);
  await clickLoginButton(page);
  await page.waitFor(2000);
  let context = await openSalesForceEmail(email);
  await typeEmailTokenInTrailBlazzer(page, context);
  await clickConitnueButton(page);
  await waitTillHTMLRendered(page)
}

export async function fillSignUpForm(page, datatable) {
  const dataFields = await datatable.hashes()[0];
  await clickOnSignUpButton(page);
  await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 35000 });
  await typeFirstName(page, dataFields.firstName);
  await typeLastName(page, dataFields.lastName);
  let profileUrl = await generateRandomProfileUrl();
  await typeProfileUrl(page, profileUrl);
  await clickNextButton(page);
  await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 40000 });
  await typeCompanyName(page, dataFields.companyName);
  await typeJobTitle(page, dataFields.jobTitle);
  await selectRoleName(page, dataFields.roleName);
  await selectRelationshipToSalesForce(page, dataFields.relation);
  await selectCountryName(page, dataFields.country);
  await selectStateName(page, dataFields.country, dataFields.state);
  await checkPrivacyStatement(page);
  await clickDoneButton(page);
  await page.waitForTimeout(25000);
  await typeWorkEmail(page, email);
  await typeWorkPhone(page, dataFields.phoneNumber);
  await selectCompanySize(page, dataFields.companySize);
  await selectJobRole(page, dataFields.jobRole);
  await selectGetRecentUpdateCheckbox(page);
  await typeCountryCode(page, dataFields.countryCode);
  await typePhoneNumber(page, dataFields.phoneNumber);
  await selectGiveInformationForMarketingPurposeCheckbox(page);
  await clickCompleteMyMembership(page);
  await page.waitForTimeout(3000);
}
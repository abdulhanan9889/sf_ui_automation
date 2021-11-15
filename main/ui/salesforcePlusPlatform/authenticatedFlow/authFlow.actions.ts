import {
  getDreamForceTab,
  getLoginWithTrailblazzerIDButton,
  getEmailButton,
  getEmailInputField,
  getLoginButton,
  getTokenInputField,
  getContinueButton,
} from "../selectors/common.selectors";
import { getWatchNowButton } from "../experiencePageFlow/user_interface/heroBannerSelectors";
import {
  getSignUpButton,
  getFirstNameField,
  getLastNameField,
  getProfileUrlField,
  getCompanyNameField,
  getCompanySizeDropDown,
  getCompleteMyMembershipButton,
  getCountryCodeField,
  getCountryField,
  getDoneButton,
  getInformationForMarketPurposesCheckbox,
  getJobRoleDropDown,
  getJobTitleField,
  getNextButton,
  getPhoneField,
  getPrivacyCheckbox,
  getRecentUpdateCheckbox,
  getRelationshipToSalesforceField,
  getRoleNameField,
  getStateField,
  getWorkEmailField,
  getWorkPhoneField,
  getShareContactInfoCheckbox
} from "../loginFlow/user_interface/trailBlazzerModalSelectors";

export async function clickDreamForceTab(page) {
  await page.waitForSelector(getDreamForceTab)
  let dreamForce = await page.$(getDreamForceTab)
  await dreamForce.click();
}

import { Inbox } from "mailinator-inbox";

export async function clickWatchNowButton(page) {
  // await page.waitForSelector(getWatchNowButton, { visible: true })
  let watchNowButton = await page.$(getWatchNowButton)
  await watchNowButton.click();
}
export async function clickLoginInWithTrailblazaerID(page) {
  await page.waitForSelector(getLoginWithTrailblazzerIDButton)
  let loginWithTrailblazzerButton = await page.$(getLoginWithTrailblazzerIDButton)
  await loginWithTrailblazzerButton.click();
}
export async function clickEmailButton(page) {
  await page.waitForSelector(getEmailButton)
  let emailButton = await page.$(getEmailButton)
  await emailButton.click();
}

export async function typeEmailAddressInTrailBlazer(page, email) {
  await page.waitForSelector(getEmailInputField)
  let emailField = await page.$(getEmailInputField)
  await emailField.type(email);
}

export async function clickLoginButton(page) {
  await page.waitForSelector(getLoginButton)
  let loginButton = await page.$(getLoginButton)
  await loginButton.click();
}

export async function generateRandomEmail() {
  var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  var randomEmail = "";
  for (let ii = 0; ii < 10; ii++) {
    randomEmail += chars[Math.floor(Math.random() * chars.length)];
  }
  randomEmail = `login${randomEmail}2sf@mailinator.com`;
  return randomEmail;
}

export async function openSalesForceEmail(email) {
  //Access the inbox of dummyUserHere@mailinator.com
  let username = email.split("@")[0];
  const inbox = new Inbox(`${username}`);

  //Load emails
  await inbox.refresh();
  //Get the header ( from, subject, ...) of the first email
  const firstEmailHeader = inbox.emailHeaders[inbox.emailHeaders.length - 1];
  //Retrieve the whole email, including body
  let firstEmail = await inbox.getEmail(firstEmailHeader.id);
  let firstEmailContext = firstEmail.textBody;
  let mailParser = String(firstEmailContext).split(" ");
  let emailCode = mailParser[15].split("/r")[0];
  return emailCode;
}

export async function typeEmailTokenInTrailBlazzer(page, token) {
  await page.waitForSelector(getTokenInputField)
  let tokenField = await page.$(getTokenInputField)
  await tokenField.type(token);
}

export async function clickConitnueButton(page) {
  await page.waitForSelector(getContinueButton)
  let continueButton = await page.$(getContinueButton)
  await continueButton.click();
}

export async function clickOnSignUpButton(page) {
  await page.waitForSelector(getSignUpButton)
  let signUpButton = await page.$(getSignUpButton)
  await signUpButton.click();
}

export async function typeFirstName(page, fName) {
  await page.waitForSelector(getFirstNameField)
  let firstNameField = await page.$(getFirstNameField)
  await firstNameField.type(fName);
}

export async function typeLastName(page, lName) {
  await page.waitForSelector(getLastNameField)
  let lastNameField = await page.$(getLastNameField)
  await lastNameField.type(lName);
}

export async function generateRandomProfileUrl() {
  var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  var randomProfileUrl = "";
  for (let ii = 0; ii < 5; ii++) {
    randomProfileUrl += chars[Math.floor(Math.random() * chars.length)];
  }
  randomProfileUrl = `dummy${randomProfileUrl}2sfprofile`;
  return randomProfileUrl;
}

export async function typeProfileUrl(page, profileUrl) {
  await page.waitForSelector(getProfileUrlField)
  let profileUrlField = await page.$(getProfileUrlField)
  await profileUrlField.type(profileUrl);
}

export async function clickNextButton(page) {
  await page.waitForSelector(getNextButton)
  let nextButton = await page.$(getNextButton)
  await nextButton.click();
}

export async function typeCompanyName(page, name) {
  await page.waitForSelector(getCompanyNameField)
  let companyNameField = await page.$(getCompanyNameField)
  await companyNameField.type(name);
}

export async function typeJobTitle(page, name) {
  await page.waitForSelector(getJobTitleField)
  let jobTitleField = await page.$(getJobTitleField)
  await jobTitleField.type(name);
}
export async function selectRoleName(page, roleName) {
  await page.waitForSelector(getRoleNameField)
  let roleNameField = await page.$(getRoleNameField)
  await roleNameField.select(roleName);
}

export async function selectRelationshipToSalesForce(page, relation) {
  await page.waitForSelector(getRelationshipToSalesforceField)
  let relationshipField = await page.$(getRelationshipToSalesforceField)
  await relationshipField.select(relation);
}

export async function selectCountryName(page, country) {
  if (country !== "US") {
    await page.waitForSelector(getCountryField)
    let countryField = await page.$(getCountryField)
    await countryField.select(country);
  }
}

export async function selectStateName(page, country, state) {
  if (country === "US") {
    await page.waitForSelector(getStateField)
    let stateField = await page.$(getStateField)
    await stateField.select(state);
  }
}

export async function checkPrivacyStatement(page) {
  await page.waitForSelector(getPrivacyCheckbox)
  let privarcyStatement = await page.$(getPrivacyCheckbox)
  await privarcyStatement.click();
}

export async function clickDoneButton(page) {
  await page.waitForSelector(getDoneButton)
  let doneButton = await page.$(getDoneButton)
  await doneButton.click();
}

export async function typeWorkEmail(page, email) {
  await page.waitForSelector(getWorkEmailField)
  let workEmailField = await page.$(getWorkEmailField)
  await workEmailField.type(email)
}

export async function typeWorkPhone(page, phone) {
  await page.waitForSelector(getWorkPhoneField)
  let workPhoneField = await page.$(getWorkPhoneField)
  await workPhoneField.type(phone);
}

export async function selectCompanySize(page, companySize) {
  await page.waitForSelector(getCompanySizeDropDown)
  let companySizeField = await page.$(getCompanySizeDropDown)
  await companySizeField.select(companySize);
}

export async function selectJobRole(page, role) {
  await page.waitForSelector(getJobRoleDropDown)
  let jobRoleField = await page.$(getJobRoleDropDown)
  await jobRoleField.select(role);
}

export async function selectGetRecentUpdateCheckbox(page) {
  await page.waitForSelector(getRecentUpdateCheckbox)
  let recentUpdateCheckbox = await page.$(getRecentUpdateCheckbox)
  await recentUpdateCheckbox.click();
}
export async function typeCountryCode(page, countryCode) {
  await page.waitForSelector(getCountryCodeField)
  let countryCodeField = await page.$(getCountryCodeField)
  await countryCodeField.type(countryCode);
}
export async function typePhoneNumber(page, phoneNum) {
  await page.waitForSelector(getPhoneField)
  let phoneField = await page.$(getPhoneField)
  await phoneField.type(phoneNum);
}

export async function clickShareContactInformationCheckbox(page) {
  await page.waitForSelector(getShareContactInfoCheckbox)
  let checkbox = await page.$(getShareContactInfoCheckbox)
  await checkbox.click();
}

export async function selectGiveInformationForMarketingPurposeCheckbox(page) {
  await page.waitForSelector(getInformationForMarketPurposesCheckbox)
  let informationCheckbox = await page.$(getInformationForMarketPurposesCheckbox)
  await informationCheckbox.click();
}

export async function clickCompleteMyMembership(page) {
  await page.waitForSelector(getCompleteMyMembershipButton)
  let membershipButton = await page.$(getCompleteMyMembershipButton)
  await membershipButton.click();
}

import {
    getDreamForceTab,
    getWatchNowButton,
    getLoginWithTrailblazzerIDButton,
    getEmailButton,
    getEmailInputField,
    getLoginButton,
    getTokenInputField,
    getContinueButton,
  } from "../selectors/common.selectors";
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
  } from "../selectors/authFlow.selectors";
  
  export async function clickDreamForceTab(page) {
    let dreamForce = await getDreamForceTab(page);
    await dreamForce.asElement().click();
  }
  
  import { Inbox } from "mailinator-inbox";
  
  export async function clickWatchNowButton(page) {
    let watchNowButton = await getWatchNowButton(page);
    await watchNowButton.asElement().click();
  }
  export async function clickLoginInWithTrailblazaerID(page) {
    let loginWithTrailblazzerButton = await getLoginWithTrailblazzerIDButton(
      page
    );
    await loginWithTrailblazzerButton.asElement().click();
  }
  export async function clickEmailButton(page) {
    let emailButton = await getEmailButton(page);
    await emailButton.asElement().click();
  }
  
  export async function typeEmailAddressInTrailBlazer(page, email) {
    await page.waitFor(1000);
    let emailField = await getEmailInputField(page);
    await emailField.asElement().type(email);
  }
  
  export async function clickLoginButton(page) {
    let loginButton = await getLoginButton(page);
    await loginButton.asElement().click();
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
    await page.waitFor(1000);
    let tokenField = await getTokenInputField(page);
    await tokenField.asElement().type(token);
  }
  
  export async function clickConitnueButton(page) {
    let continueButton = await getContinueButton(page);
    await continueButton.asElement().click();
  }
  
  export async function clickOnSignUpButton(page) {
    let signUpButton = await getSignUpButton(page);
    await signUpButton.asElement().click();
  }
  
  export async function typeFirstName(page, fName) {
    let firstNameField = await getFirstNameField(page);
    await firstNameField.asElement().type(fName);
  }
  
  export async function typeLastName(page, lName) {
    let lastNameField = await getLastNameField(page);
    await lastNameField.asElement().type(lName);
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
    let profileUrlField = await getProfileUrlField(page);
    await profileUrlField.asElement().type(profileUrl);
  }
  
  export async function clickNextButton(page) {
    let nextButton = await getNextButton(page);
    await nextButton.asElement().click();
  }
  
  export async function typeCompanyName(page, name) {
    let companyNameField = await getCompanyNameField(page);
    await companyNameField.asElement().type(name);
  }
  
  export async function typeJobTitle(page, name) {
    let jobTitleField = await getJobTitleField(page);
    await jobTitleField.asElement().type(name);
  }
  export async function selectRoleName(page, roleName) {
    let roleNameField = await getRoleNameField(page);
    await roleNameField.asElement().select(roleName);
  }
  
  export async function selectRelationshipToSalesForce(page, relation) {
    let relationshipField = await getRelationshipToSalesforceField(page);
    await relationshipField.asElement().select(relation);
  }
  
  export async function selectCountryName(page, country) {
    if (country !== "US") {
      let countryField = await getCountryField(page);
      await countryField.asElement().select(country);
    }
  }
  
  export async function selectStateName(page, country, state) {
    if (country === "US") {
      let stateField = await getStateField(page);
      await stateField.asElement().select(state);
    }
  }
  
  export async function checkPrivacyStatement(page) {
    let privarcyStatement = await getPrivacyCheckbox(page);
    await privarcyStatement.asElement().click();
  }
  
  export async function clickDoneButton(page) {
    let doneButton = await getDoneButton(page);
    await doneButton.asElement().click();
  }
  
  export async function typeWorkEmail(page, email) {
    await page.waitFor(2000);
    let workEmailField = await getWorkEmailField(page);
    await workEmailField.asElement().type(email);
  }
  
  export async function typeWorkPhone(page, phone) {
    let workPhoneField = await getWorkPhoneField(page);
    await workPhoneField.asElement().type(phone);
  }
  
  export async function selectCompanySize(page, companySize) {
    let companySizeField = await getCompanySizeDropDown(page);
    await companySizeField.asElement().select(companySize);
  }
  export async function selectJobRole(page, role) {
    let jobRoleField = await getJobRoleDropDown(page);
    await jobRoleField.asElement().select(role);
  }
  export async function selectGetRecentUpdateCheckbox(page) {
    let recentUpdateCheckbox = await getRecentUpdateCheckbox(page);
    await recentUpdateCheckbox.asElement().click();
  }
  export async function typeCountryCode(page, countryCode) {
    let countryCodeField = await getCountryCodeField(page);
    await countryCodeField.asElement().type(countryCode);
  }
  export async function typePhoneNumber(page, phoneNum) {
    let phoneField = await getPhoneField(page);
    await phoneField.asElement().type(phoneNum);
  }
  
  export async function selectGiveInformationForMarketingPurposeCheckbox(page) {
    let informationCheckbox = await getInformationForMarketPurposesCheckbox(page);
    await informationCheckbox.asElement().click();
  }
  
  export async function clickCompleteMyMembership(page) {
    let membershipButton = await getCompleteMyMembershipButton(page);
    await membershipButton.asElement().click();
  }
  
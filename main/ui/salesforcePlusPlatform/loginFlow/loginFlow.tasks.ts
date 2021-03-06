import { clickSFLoginButton, clickTrailblazzerButton, hoverLoginButton, randomOTPGenerator, typePassword, typeUserName,clickSalesforceOptionButton } from "./loginFlow.actions";
import {
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
  generateRandomProfileUrl,
  clickCompleteMyMembership,
  clickLoginInWithTrailblazaerID,
  selectCompanySize,
  selectGetRecentUpdateCheckbox,
  selectGiveInformationForMarketingPurposeCheckbox,
  selectJobRole,
  typeCountryCode,
  typePhoneNumber,
  typeWorkEmail,
  typeWorkPhone,
} from "../authenticatedFlow/authFlow.actions";
import { acceptCookies } from "../originalSeries/actions/unAuthFlow.actions";
import { waitTillHTMLRendered } from "../../../utilities/waitTillHTMLRendered";
import { clickSkipForNowButton } from "../broadcastPageFlow/broadcastPage.actions";
import { bypassSecurity } from "../broadcastPageFlow/broadcastPage.tasks";
export async function openTheSignInForm(page) {
  await clickTrailblazzerButton(page);
  await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 37000 });
  await acceptCookies(page);
  await page.waitForTimeout(2000);
  await clickEmailButton(page);
}
var email;
export async function fillTheSignInForm(page) {
  email = await generateRandomEmail();
  console.log(" My email is", email);
  await typeEmailAddressInTrailBlazer(page, email);
  await clickLoginButton(page);
  await page.waitForTimeout(1500);
  let context = await openSalesForceEmail(email);
  await typeEmailTokenInTrailBlazzer(page, context);
  await clickConitnueButton(page);
  await page.waitForTimeout(2000);
}

export async function fillTheSignUpForm(page, dataTable) {
  const dataFields = await dataTable.hashes()[0];
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
  await page.waitFor(20000);
}
export async function profileComplete(page){
 // await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 40000 });
  try{
    await page.waitFor(5000)
    if(typeCompanyName != null){
  await typeCompanyName(page, "eMumba");
  await typeJobTitle(page, "QA Engineer");
  await selectRoleName(page, "Marketer");
  await selectRelationshipToSalesForce(page, "customer");
  await selectCountryName(page, "US");
  await selectStateName(page, "US", "CA");
  await checkPrivacyStatement(page);
  await clickDoneButton(page);
  await page.waitFor(20000);}
  }
  catch{
    console.log("Profile is already completed for this user")
  }
}
export async function signInWithTrailblazzer(page,email){
  await typeEmailAddressInTrailBlazer(page, email);
  await clickLoginButton(page);
  await page.waitForTimeout(1500);
  let context = await openSalesForceEmail(email);
  await typeEmailTokenInTrailBlazzer(page, context);
  await clickConitnueButton(page);
  await page.waitForTimeout(20000);
}
export async function fillTrailblazerSignUpForm(page,dataTable){
  const dataFields = await dataTable.hashes()[0];
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
  await page.waitFor(20000);
  await waitTillHTMLRendered(page);
}
export async function fillProfileSignUpForm(page, dataTable) {
  await page.waitFor(15000);
  await waitTillHTMLRendered(page)
  const dataFields = await dataTable.hashes()[0];
  await typeWorkEmail(page, dataFields.workEmail);
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

export async function signInWithWrongOTP(page){
  await clickLoginInWithTrailblazaerID(page);
  await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 37000 });
  await acceptCookies(page);
  await page.waitForTimeout(2000);
  await clickEmailButton(page);
  email = await generateRandomEmail();
  await typeEmailAddressInTrailBlazer(page, email);
  await clickLoginButton(page);
  await page.waitForTimeout(1000);
  let otp = await randomOTPGenerator();
  await typeEmailTokenInTrailBlazzer(page, otp);
  await clickConitnueButton(page);
  await page.waitForTimeout(2000);
}

export async function openLoginPage(page){
  //await hoverLoginButton(page);
  await clickTrailblazzerButton(page);
  await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 37000 });
  await acceptCookies(page);
  await page.waitFor(2000);
  await clickSalesforceOptionButton(page);
  await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 37000 });
   await bypassSecurity(page)
}

export async function signInOnSalesforce(page,username, password){
  await typeUserName(page,username)
  await typePassword(page,password);
  await clickSFLoginButton(page);
  await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 60000 });
  await clickSkipForNowButton(page);
  await page.waitFor(10000)
  //await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 60000 });
  await waitTillHTMLRendered(page)
}

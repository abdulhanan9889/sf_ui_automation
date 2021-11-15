import { clickTrailblazzerButton } from "./loginFlow.actions";
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
} from "../authenticatedFlow/authFlow.actions";
import { acceptCookies } from "../originalSeries/actions/unAuthFlow.actions";
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

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
} from "./authFlow.actions";
import { acceptCookies } from "../originalSeries/actions/unAuthFlow.actions";
import { verifySignupRecordFromDatabase } from "./authFlow.assertions";
import SFDataLogic from "../../../testDataGeneration/testDataLogic/testDataLogic";
import { waitTillHTMLRendered } from "../../../utilities/waitTillHTMLRendered";
import SFDataInsertion from "../../../testDataGeneration/testDataLogic/SFDataInsertion";

export var testDataSet: SFDataLogic = new SFDataLogic()
var email;

export async function testData(seriesStartFromToday: number, seriesEndFromtaday: number, noOfSeries: number, noOfEpisodesPerSeries: number, noOfSpeakers: number, firstName: string, lastName: string, company: string, designation: string) {

  let event = await testDataSet.createEvent(seriesStartFromToday, 0, seriesEndFromtaday, 12)
  //@ts-ignore
  await SFDataInsertion.createSeriesWithEpisodes(testDataSet, seriesStartFromToday, seriesEndFromtaday, noOfSeries, noOfEpisodesPerSeries, noOfSpeakers, event, firstName, lastName, company, designation)
}

export async function openSignInForm(page) {
  await clickDreamForceTab(page);
  await waitTillHTMLRendered(page);
  await page.waitForTimeout(1500)
  await clickWatchNowButton(page);
  await waitTillHTMLRendered(page);
}

export async function openVideo(page) {
  await clickDreamForceTab(page);
  await waitTillHTMLRendered(page);
  await page.waitForTimeout(1500)
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
  await page.waitFor(25000);
  await waitTillHTMLRendered(page)
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

export async function verifySignupFields(page, dataTable) {
  const signupParameters = await dataTable.hashes()[0]
  let signupRecord = await SFDataLogic.queryUser(email)
  console.log(signupRecord)
  await verifySignupRecordFromDatabase(signupParameters, signupRecord)
}
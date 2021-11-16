var assert = require('assert')
import { getLoggedOutText } from "../../broadcastPageFlow/user_interface/logoutSelectors";

export async function verifyUserIsLoggedIn(page) {

  await page.waitForSelector(getLoggedOutText);
  let text = await page.$(getLoggedOutText);
  let IS_LOGGED_IN = await text.evaluate((status) => status?.innerText);
  await assert.equal(IS_LOGGED_IN, "My Accounts");
}

///////////////////////////////////////////////////////////

var assert = require('assert')
import { getSignUpButton } from "../user_interface/trailBlazzerModalSelectors";
import { getWorkEmailLabel, getSignUpErrorMessage, getWrongOTPErrorMessage } from "../user_interface/trailBlazzerModalSelectors";
var assertion = require("soft-assert/lib/assertion");

export async function verifyProfileSignUpFormAppeared(page){
  await page.waitForSelector(getWorkEmailLabel);
  let fieldLabel = await page.$(getWorkEmailLabel);
  let fieldLabelText = await fieldLabel.evaluate((status) => status.innerText);
  console.log("Here 3:",fieldLabelText)
  await assert.equal(fieldLabelText, 'Work email*');
}

// export async function verifyTheSignUpError(page){
//   await page.waitForSelector(getSignUpErrorMessage);
//   let text = await page.$(getSignUpErrorMessage);
//   let getSignUpErrorMessageText = await text.evaluate((status) => status?.innerText);
//   await assertion.softAssert(
//     getSignUpErrorMessageText,
//     "Having Trouble?",
//     []
//   );
//   await assertion.softAssertAll();
// }

export async function verifyWrongOTPEntered(page){
  await page.waitForSelector(getWrongOTPErrorMessage);
  let fieldLabel = await page.$(getWrongOTPErrorMessage);
  let fieldLabelText = await fieldLabel.evaluate((status) => status.innerHTML);
  await assert.equal(fieldLabelText, 'Check your single-use code and try again.');
}

export async function verifySignUpFormButton(page){
  await page.waitFor(1500)
  let fieldLabelText;
  try{
    let fieldLabel = await page.$(getSignUpButton);
    fieldLabelText = await fieldLabel.evaluate((status) => status.value);
  }catch{
    fieldLabelText = ' '
  }
  await assertion.softAssert(fieldLabelText,"Sign Up",'Sign up form did not appear',[]);
  await assertion.softAssertAll();
}
import {getSFButton, getTrailblazzerMeButton,getSFpasswordField,getSFUserNameField, getLoginButton,getSFLoginButton} from "./user_interface/trailBlazzerModalSelectors"

export async function hoverLoginButton(page){
  await page.waitForSelector(getLoginButton);
   const loginButton = await page.$(getLoginButton);
   await loginButton.hover();
}

export async function clickTrailblazzerButton(page) {
    await page.waitForSelector(getTrailblazzerMeButton)
    let trailblazzerMeButton = await page.$(getTrailblazzerMeButton);
    await trailblazzerMeButton.evaluate(button=>button.click());
    //await trailblazzerMeButton.click()
}

export async function randomOTPGenerator() {
    var chars = "1234567890";
    var randomProfileUrl = "";
    for (let ii = 0; ii < 6; ii++) {
      randomProfileUrl += chars[Math.floor(Math.random() * chars.length)];
    }
    return randomProfileUrl;
}

export async function clickSalesforceOptionButton(page){
    
  await page.waitForSelector(getSFButton);
  console.log("Here 5")
  const salesforceButton = await page.$(getSFButton);
  console.log("Here 6")
  await salesforceButton.click()
  console.log("Here 7")
}

export async function typeUserName(page,userName) {

  await page.waitForSelector(getSFUserNameField);

  const userNameField= await page.$(getSFUserNameField);

  await userNameField.type(userName);   
}

export async function typePassword(page,password) {

  await page.waitForSelector(getSFpasswordField);

  const passwordField= await page.$(getSFpasswordField);

  await passwordField.type(password);
}


export async function clickSFLoginButton(page)
{
    const loginButton = await page.$(getSFLoginButton);
    await loginButton.click();
}
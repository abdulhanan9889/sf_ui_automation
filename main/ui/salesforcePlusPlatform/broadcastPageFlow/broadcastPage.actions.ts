import { getMuteOrUnmuteButton } from "../episodePageFlow/user_interface/episodePlayerSelectors";
import { skipForNowButton,advancedButton,loginLink } from "../loginFlow/user_interface/trailBlazzerModalSelectors";
import { getCancelAndLogoutButton } from "./user_interface/logoutSelectors";

export async function clickCancelAndLogoutButton(page) {
  await page.waitForSelector(getCancelAndLogoutButton)
  let cancelAndLogoutButton = await page.$(getCancelAndLogoutButton);
  await cancelAndLogoutButton.click();
}
export async function clickAdvancedSecurityButton(page){
  try{ 
    await page.waitFor(2000)
    if( advancedButton != null){
        await page.focus(advancedButton);
        await page.click(advancedButton);
    }
  }catch{
      console.log("Advanced Button is not found")
  }
}

export async function proceedToLogin(page){
  try{ 
    await page.waitFor(2000)
    if( loginLink != null){
        await page.focus(loginLink);
        await page.click(loginLink);
        await page.waitForNavigation({waitUntil:"networkidle0",timeout:50000});
    }
  }catch{
      console.log("Login Link is not found")
  }
  
}
export async function clickSkipForNowButton(page) {

    if(await page.waitForSelector(skipForNowButton) != "null"){
        await page.focus(skipForNowButton);
        await page.click(skipForNowButton);
    }
 
}
export async function muteVideoButton(page) {
  let muteButton = await page.$(getMuteOrUnmuteButton)
  await muteButton.evaluate((ele) => ele.click())
}

export async function unmuteVideoButton(page) {
  let unmuteButton = await page.$(getMuteOrUnmuteButton)
  await unmuteButton.evaluate((ele) => ele.click())
}

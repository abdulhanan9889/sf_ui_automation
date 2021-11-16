import { getTrailblazzerMeButton } from "../user_interface/trailBlazzerModalSelectors";

export async function clickTrailblazzerButton(page) {
    await page.waitForSelector(getTrailblazzerMeButton)
    let trailblazzerMeButton = await page.$(getTrailblazzerMeButton);
    await trailblazzerMeButton.click();
}

export async function randomOTPGenerator() {
    var chars = "1234567890";
    var randomProfileUrl = "";
    for (let ii = 0; ii < 6; ii++) {
      randomProfileUrl += chars[Math.floor(Math.random() * chars.length)];
    }
    return randomProfileUrl;
  }

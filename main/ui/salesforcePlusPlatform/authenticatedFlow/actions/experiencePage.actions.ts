import { getWatchNowButton } from "../../experiencePageFlow/user_interface/heroBannerSelectors";
export async function clickWatchNowButton(page) {
    // await page.waitForSelector(getWatchNowButton, { visible: true })
    let watchNowButton = await page.$(getWatchNowButton)
    await watchNowButton.click();
  }
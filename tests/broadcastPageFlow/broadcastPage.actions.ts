import {
  skipForNowButton,
  getCancelAndLogoutButton,
  getMuteOrUnmuteButton,
} from "./broadcastPage.selectors";

export async function clickCancelAndLogoutButton(page) {
  await page.waitForSelector(getCancelAndLogoutButton)
  let cancelAndLogoutButton = await page.$(getCancelAndLogoutButton);
  await cancelAndLogoutButton.click();
}
export async function clickSkipForNowButton(page) {
  if ((await page.waitForSelector(skipForNowButton)) != null) {
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

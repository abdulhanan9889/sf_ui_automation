import {
  skipForNowButton,
  getCancelAndLogoutButton,
  getMuteOrUnmuteButton,
} from "../selectors/broadcastPage.selectors";

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
  await page.waitForSelector(getMuteOrUnmuteButton)
  let muteButton = await page.$(getMuteOrUnmuteButton);
  await muteButton.click()
}

export async function unmuteVideoButton(page) {
  await page.waitForSelector(getMuteOrUnmuteButton)
  let unmuteButton = await page.$(getMuteOrUnmuteButton);
  await unmuteButton.click()
}

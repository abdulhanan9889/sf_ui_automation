import {
  skipForNowButton,
  getCancelAndLogoutButton,
  getMuteOrUnmuteButton,
} from "../selectors/broadcastPage.selectors";

export async function clickCancelAndLogoutButton(page) {
  let cancelAndLogoutButton = await getCancelAndLogoutButton(page);
  await cancelAndLogoutButton.asElement().click();
}
export async function clickSkipForNowButton(page) {
  if ((await page.waitForSelector(skipForNowButton)) != null) {
    await page.focus(skipForNowButton);
    await page.click(skipForNowButton);
  }
}
export async function muteVideoButton(page) {
  let muteButton = await getMuteOrUnmuteButton(page);
  await muteButton.evaluate((ele) => ele.click())
}

export async function unmuteVideoButton(page) {
  let unmuteButton = await getMuteOrUnmuteButton(page);
  await unmuteButton.evaluate((ele) => ele.click())
}


import { skipForNowButton } from "../../loginFlow/user_interface/trailBlazzerModalSelectors";
import { getCancelAndLogoutButton } from "../user_interface/logoutSelectors";

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


import { ACCEPT_COOKIES_BUTTON, getCloseButtonLoginModal, getDreamForceTab } from "../selectors/common.selectors";

export async function acceptCookies(page) {
    if ((await page.waitForSelector(ACCEPT_COOKIES_BUTTON)) !== "null") {
        await page.focus(ACCEPT_COOKIES_BUTTON);
        await page.click(ACCEPT_COOKIES_BUTTON);
    }
}

export async function closeLoginModal(page) {
    await page.waitForSelector(getCloseButtonLoginModal)
    let closeButton = await page.$(getCloseButtonLoginModal)
    await closeButton.click()
}
export async function clickOnDreamForce(page) {
    await page.waitForSelector(getDreamForceTab)
    let dreamForceTab = await page.$(getDreamForceTab);
    await dreamForceTab.click()
}
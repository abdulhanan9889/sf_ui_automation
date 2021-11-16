import { getCloseButton } from "../../selectors/common.selectors"
export async function clickCrossButton(page) {
    await page.waitForSelector(getCloseButton)
    let CLOSE_BUTTON = await page.$(getCloseButton)
    CLOSE_BUTTON.click()
}
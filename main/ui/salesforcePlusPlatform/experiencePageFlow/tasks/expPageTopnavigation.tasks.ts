import { experiencePage } from "../../homePageFlow/user_interface/topNavigationSelectors";
import { getDreamForceTab } from "../../selectors/common.selectors";
export async function navigateToDreamForcePage(page) {
    await page.waitForSelector(experiencePage)
    let experiencePageTab = await page.$(experiencePage)
    await experiencePageTab.click()
}

export async function clickOnDreamForce(page) {
    await page.waitForSelector(getDreamForceTab)
    let dreamForceTab = await page.$(getDreamForceTab);
    await dreamForceTab.click()
}
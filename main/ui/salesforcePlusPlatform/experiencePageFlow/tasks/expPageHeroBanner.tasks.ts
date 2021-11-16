import { getExploreMoreButton } from "../user_interface/heroBannerSelectors";
export async function clickOnExploreMore(page) {
    // let exploreMoreButton = await getExploreMoreButton
    // exploreMoreButton.evaluate(button => button.click())
    await page.waitForSelector(getExploreMoreButton)
    let exploreMoreButton = await page.$(getExploreMoreButton);
    await exploreMoreButton.click()
}

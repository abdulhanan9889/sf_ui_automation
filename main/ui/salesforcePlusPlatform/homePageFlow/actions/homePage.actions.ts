import { getArrowIcon, getPlayIcon } from "../user_interface/originalSeriesCarousel";
export async function clickOnPlayIcon(page) {
    await page.waitForSelector(getPlayIcon)
    let playIcon = await page.$(getPlayIcon);
    await playIcon.click()
}

export async function clickOnArrowIcon(page) {
    await page.waitForSelector(getArrowIcon)
    let arrowIcon = await page.$(getArrowIcon);
    await arrowIcon.click()
    // if (!arrowIcon) { setTimeout(clickOnArrowIcon, 100) }
    // else {
    //     await arrowIcon.asElement().click();
    // }

}



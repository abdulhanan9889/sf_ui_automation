import { getPlayForSeriesInRoleButton, getArrowSeriesInRole, } from "../user_interface/roleCarouselSelectors";
export async function clickOnPlayForSeriesInRoles(page) {
    await page.waitForSelector(getPlayForSeriesInRoleButton)
    let playButton = await page.$(getPlayForSeriesInRoleButton);
    await playButton.click();
}

export async function clickOnArrowForSeriesInRoles(page) {
    // let arrowButton = await getArrowSeriesInRole(page);
    // await arrowButton.asElement().click();
    await page.waitForSelector(getArrowSeriesInRole)
    let arrowSeriesInRole = await page.$(getArrowSeriesInRole)
    await arrowSeriesInRole.click()
}
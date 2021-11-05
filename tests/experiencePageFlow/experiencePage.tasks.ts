import { Browser } from "puppeteer";
import {
    getExploreMoreButton,
    getPlayForSeriesInRoleButton,
    getArrowSeriesInRole,
    getPlayForSeriesInTopicButton,
    getAllSponsorsButton,
    getCloseButtonLoginModal,
    getArrowForSeriesInTopicButton,
} from "./experiencePage.selectors";

export async function clickOnExploreMore(page) {
    // let exploreMoreButton = await getExploreMoreButton
    // exploreMoreButton.evaluate(button => button.click())
    await page.waitForSelector(getExploreMoreButton)
    let exploreMoreButton = await page.$(getExploreMoreButton);
    await exploreMoreButton.click()
}
export async function closeLoginModal(page) {
    await page.waitForSelector(getCloseButtonLoginModal)
    let closeButton = await page.$(getCloseButtonLoginModal)
    await closeButton.click()
}
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

export async function clickOnPlayForSeriesInTopics(page) {
    // let playButton = await getPlayForSeriesInTopicButton(page);
    // await playButton.asElement().click();
    await page.waitForSelector(getPlayForSeriesInTopicButton)
    let playForSeriesInTopicButton = await page.$(getPlayForSeriesInTopicButton)
    await playForSeriesInTopicButton.click()
}

export async function clickOnArrowForSeriesInTopic(page) {
    // let arrowButton = await getArrowForSeriesInTopic(page);
    // await arrowButton.asElement().click();
    await page.waitForSelector(getArrowForSeriesInTopicButton)
    let arrowForSeriesInTopicButton = await page.$(getArrowForSeriesInTopicButton)
    await arrowForSeriesInTopicButton.click()
}

export async function clickOnAllSponsors(page) {
    // let allSponsorsButton = await getAllSponsorsButton(page);
    // await allSponsorsButton.asElement().click();
    await page.waitForSelector(getAllSponsorsButton)
    let allSponsorsButton = await page.$(getAllSponsorsButton)
    await allSponsorsButton.click()
}

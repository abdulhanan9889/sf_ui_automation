import { Browser } from "puppeteer";
import {
    getExploreMoreButton,
    getPlayForSeriesInRoleButton,
    getArrowSeriesInRole,
    getPlayForSeriesInTopicButton,
    getArrowForSeriesInTopic,
    getAllSponsorsButton,
} from "../selectors/experiencePage.selectors";

export async function clickOnExploreMore(page) {
    let exploreMoreButton = await getExploreMoreButton(page);
    exploreMoreButton.evaluate(button => button.click())
}

export async function clickOnPlayForSeriesInRoles(page) {
    let playButton = await getPlayForSeriesInRoleButton(page);
    await playButton.asElement().click();
}

export async function clickOnArrowForSeriesInRoles(page) {
    let arrowButton = await getArrowSeriesInRole(page);
    await arrowButton.asElement().click();
}

export async function clickOnPlayForSeriesInTopics(page) {
    let playButton = await getPlayForSeriesInTopicButton(page);
    await playButton.asElement().click();
}

export async function clickOnArrowForSeriesInTopic(page) {
    let arrowButton = await getArrowForSeriesInTopic(page);
    await arrowButton.asElement().click();
}

export async function clickOnAllSponsors(page) {
    let allSponsorsButton = await getAllSponsorsButton(page);
    await allSponsorsButton.asElement().click();
}

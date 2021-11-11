
import { getDreamForceTab } from "../selectors/common.selectors";
import {
    getExploreMoreButton,
    getPlayForSeriesInRoleButton,
    getArrowSeriesInRole,
    getPlayForSeriesInTopicButton,
    getAllSponsorsButton,
    getCloseButtonLoginModal,
    getArrowForSeriesInTopicButton,
    getExperienceSectionButton,
    ACCEPT_COOKIES_BUTTON,
    seriesDetails,
    firstEpisode,
    secondEpisode,
    experiencePage
} from "./experiencePage.selectors";
import SFDataLogic from "../testDataGeneration/testDataLogic/testDataLogic"
import SFDataInsertion from "../testDataGeneration/testDataLogic/SFDataInsertion"
import SFDataDeletion from "../testDataGeneration/testDataLogic/SFDataDeletion"
//TestData Generation Tasks
export var testDataSet: SFDataLogic = new SFDataLogic()
export async function testData(seriesStartFromToday: number,seriesEndFromtaday : number, noOfSeries : number, noOfEpisodesPerSeries : number,noOfSpeakers: number) {
    let event = await testDataSet.createEvent(seriesStartFromToday, 0 , seriesEndFromtaday , 12)
    //@ts-ignore
    await SFDataInsertion.createSeriesWithEpisodes(testDataSet, seriesStartFromToday ,seriesEndFromtaday, noOfSeries,noOfEpisodesPerSeries, noOfSpeakers, event)
}
export async function testDataDelete(){
    await SFDataDeletion.DeleteOriginalSeries(testDataSet)
}
export async function navigateToDetailsPageOfTheEvent(page) {
    await page.waitForSelector(seriesDetails())
    let seriesDetailsButton = await page.$(seriesDetails())
    await seriesDetailsButton.click()
}
export async function navigateToFirstEpisode(page){
    await page.waitForSelector(firstEpisode())
    let firstEpisodePlayButton = await page.$(firstEpisode())
    await firstEpisodePlayButton.click()
}
export async function navigateToSecondEpisode(page){
    await page.waitForSelector(secondEpisode())
    let secondEpisodePlayButton = await page.$(secondEpisode())
    await secondEpisodePlayButton.click()
}
//TestData Generation Tasks


export async function acceptCookies(page) {
    if ((await page.waitForSelector(ACCEPT_COOKIES_BUTTON)) !== "null") {
        await page.focus(ACCEPT_COOKIES_BUTTON);
        await page.click(ACCEPT_COOKIES_BUTTON);
    }
}

export async function navigateToDreamForcePage(page){
    await page.waitForSelector(experiencePage)
    let experiencePageTab = await page.$(experiencePage)
    await experiencePageTab.click()
    }

export async function clickOnDreamForce(page) {
    await page.waitForSelector(getDreamForceTab)
    let dreamForceTab = await page.$(getDreamForceTab);
    await dreamForceTab.click()
}
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

export async function clickOnExperienceSectionButton(page) {
    await page.waitForSelector(getExperienceSectionButton)
    let experienceSectionButton = await page.$(getExperienceSectionButton);
    await experienceSectionButton.click()

}
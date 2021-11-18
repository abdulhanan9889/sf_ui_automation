import { getPlayForSeriesInTopicButton, getArrowForSeriesInTopicButton } from "../user_interface/topicCarouselSelectors";
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
import { isAssertionExpression } from "typescript";
var assert = require("assert");
import { getPlayForSeriesInTopicButton, getArrowForSeriesInTopicButton } from "../user_interface/topicCarouselSelectors";
export async function clickOnPlayForSeriesInTopics(page) {
 
 try{
    await page.waitFor(2000)
    await page.waitForSelector(getPlayForSeriesInTopicButton)
    await page.waitFor(1000)
    let playForSeriesInTopicButton = await page.$(getPlayForSeriesInTopicButton)
    await page.waitFor(1000)
    await playForSeriesInTopicButton.click()
    await page.waitFor(5000)
 }
 catch{
     assert.fail("Series in topics play button was not found")
 }
   
}

export async function clickOnArrowForSeriesInTopic(page) {
    try
   { await page.waitFor(1000)
       await page.waitForSelector(getArrowForSeriesInTopicButton)
       await page.waitFor(1000)
    let arrowForSeriesInTopicButton = await page.$(getArrowForSeriesInTopicButton)
    await page.waitFor(1000)
    await arrowForSeriesInTopicButton.click()
    await page.waitFor(5000)

}

    catch{
        assert.fail("Series in topics arrow button was not found")
    }
}
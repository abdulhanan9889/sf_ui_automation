var assert = require('assert')
import { speakerName } from "../../episodePageFlow/user_interface/speakerSectionSelectors";
export async function checkSpeakerName(page) {
    await page.waitForSelector(speakerName)
    const speakerNameTitle = await page.$(speakerName)
    let speakerNameTitleText = await speakerNameTitle.evaluate(text => text.innerHTML)
    await assert.equal(speakerNameTitleText, 'QA Engineer, Emumba')
}
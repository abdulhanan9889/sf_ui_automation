var assert = require('assert')
import { getTrailorTitle } from "../../episodePageFlow/user_interface/trailorPageSelectors";
import { getAllEpisodesTitle } from "../../episodePageFlow/user_interface/seriesDetailsPageSelectors";
export async function checkAllEpisodesTitle(page) {
    await page.waitForSelector(getAllEpisodesTitle,{timeout:70000})
    const allEpisodesTitle = await page.$(getAllEpisodesTitle)
    let allEpisodesTitleText = await allEpisodesTitle.evaluate(text => text.innerHTML)
    await assert.equal(allEpisodesTitleText, 'All Episodes')
}

export async function checkTrailorTitle(page) {
    await page.waitForSelector(getTrailorTitle)
    const trailorTitle = await page.$(getTrailorTitle)
    let trailorTitleText = await trailorTitle.evaluate(text => text.innerHTML)
    await assert.equal(trailorTitleText, 'BXP_LEARN_SERIES-1 + Trailer')
}
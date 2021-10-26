import {
    getAllEpisodesTitle,
    getAllSponsorsButton,
    getSponsorsTitle,
    getTrailorTitleForSeriesInRoles,
    getTrailorTitleForSeriesInTopic,
    getUpNextTitle
} from "../selectors/experiencePage.selectors";

var assert = require('assert')


export async function checkTrailorTitleForSeriesInRoles(page) {
    let trailorTitle = await getTrailorTitleForSeriesInRoles(page)
    let trailorTitleText = await trailorTitle.evaluate(text => text.innerHTML)
    assert.equal(trailorTitleText, '19 Episode Series')
}

export async function checkTrailorTitleForSeriesInTopic(page) {
    let trailorTitle = await getTrailorTitleForSeriesInTopic(page);
    let trailorTitleText = await trailorTitle.evaluate(text => text.innerHTML)
    assert.equal(trailorTitleText, 'BEST OF DF + EPISODE 1')
}

export async function checkForAllEpisodesTitle(page) {
    let allEpisodesTitle = await getAllEpisodesTitle(page);
    let allEpisodes = await allEpisodesTitle.evaluate(text => text.innerHTML)
    assert.equal(allEpisodes, 'All Episodes')
}

export async function checkForAllSponsorsButton(page) {
    let allSponsorsText = await getAllSponsorsButton(page)
    let allSponsors = await allSponsorsText.evaluate(text => text.innerHTML)
    assert.equal(allSponsors, 'View All Sponsors')
}

export async function checkForUpNextTitle(page) {
    let UpNextText = await getUpNextTitle(page)
    let upNext = await UpNextText.evaluate(text => text.innerHTML)
    assert.equal(upNext, 'Up Next')
}

export async function checkForAllSponsorsTitle(page) {
    let sponsorsTitleText = await getSponsorsTitle(page)
    let sponsorsTitle = await sponsorsTitleText.evaluate(text => text.innerHTML)
    assert.equal(sponsorsTitle, 'SponsorsTest')
    await page.close();
}
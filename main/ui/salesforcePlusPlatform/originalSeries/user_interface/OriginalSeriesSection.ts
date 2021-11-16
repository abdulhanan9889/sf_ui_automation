import { testDataSet, testDataSetUpcoming } from '../tasks/createDestroyOriginalSeries'

// import { testDataSet } from "../../authenticatedFlow/authFlow.tasks"
//import testDataSet from "../stepdefinitions/unAuthFlow.steps";
//console.log("test data set in selectors",testDataSet)
export function seriesButton() {
    return `shadow/[aria-label="Go to series - ${testDataSet.seriesNames[0]}"]`
   //return `shadow/[aria-label="Go to series - BxP_Learn_Series-1"]`
}

export function seriesPlayButton() {

    return `shadow/[aria-label="Play series - ${testDataSet.seriesNames[0]}"]`


}
export function seriesCard() {

    return `shadow/[aria-label="Series Card for ${testDataSet.seriesNames[0]}"]`


}

export function seriesCardComingSoon() {

    return `shadow/[aria-label="Series Card for ${testDataSetUpcoming.seriesNames[0]}"]`


}


export function episodeButton() { return `shadow/[href="/plus/series/${testDataSet.seriesNames[0]}/episode/episode-1"]` }
export function nextEpisodeButton(episodeNo) { return `shadow/[href="/plus/series/${testDataSet.seriesNames[0]}/episode/episode-${episodeNo + 2}"]` }
export function firstEpisodeButton() { return `shadow/[href="/plus/series/${testDataSet.seriesNames[0]}/episode/episode-1"]` }
export function secondEpisodeButton() { return `shadow/[href="/plus/series/${testDataSet.seriesNames[0]}/episode/episode-2"]` }

export function nextAuthenticatedEpisodeButton(episodeNo) { return `shadow/[href="/plus/experience/${testDataSet.eventNames[0]}/series/${testDataSet.seriesNames[0]}/episode/episode-${episodeNo + 2}"]` }
// export async function firstEpisodeButton(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div.episodes-container > div.grid > div > div > div > div:nth-child(2) > bxp-episode-card")
//             ?.shadowRoot?.querySelector("div > div.play-icon > bxp-icon-button")
//             ?.shadowRoot?.querySelector("a")
//     })
// }


// export async function secondEpisodeButton(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div.carousel-container > bxp-carousel")
//             ?.shadowRoot?.querySelector("div > ul > li:nth-child(3) > div > bxp-episode-card")
//             ?.shadowRoot?.querySelector("div.episode-card.bxp-global-card-shadow > div.play-icon > bxp-icon-button")
//             ?.shadowRoot?.querySelector("a")
//     })
// }
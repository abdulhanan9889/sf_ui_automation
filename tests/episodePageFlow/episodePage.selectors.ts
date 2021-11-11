import { testDataSet } from "../authenticatedFlow/authFlow.tasks"


export const forwardButton = `shadow/div[class="seek-container"]>button`
// export async function forwardButton(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div.player-container > div > bxp-vidyard-player")
//             ?.shadowRoot?.querySelector("div > div > div > div.seek-container > button")
//     })
// }

export const reverseButton = `shadow/div[class="rewind-container"]>button`
// export async function reverseButton(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div.player-container > div > bxp-vidyard-player")
//             ?.shadowRoot?.querySelector("div > div > div > div.rewind-container > button")
//     })
// }

export const maximizeVideoPlayerButton = `shadow/[aria-label="fullscreen toggle button"]`
// export async function maximizeVideoPlayerButton(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div.player-container > div > bxp-vidyard-player")
//             ?.shadowRoot?.querySelector("div > div > div > div.right-side-controls > button.player-button.fullscreen-button.fullscreen-expand-icon")
//     })
// }

export const minimizeVideoPlayerButton = `shadow/[aria-label="fullscreen toggle button"]`
// export async function minimizeVideoPlayerButton(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div.player-container > div > bxp-vidyard-player")
//             ?.shadowRoot?.querySelector("div > div > div > div.right-side-controls > button.player-button.fullscreen-button.fullscreen-expand-icon")
//     })
// }

export function authorizedSeriesButton() {
    return `shadow/[href="/plus/experience/${testDataSet.eventNames[0]}/series/${testDataSet.seriesNames[0]}"]`
}
// export async function authorizedSeriesButton(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main >salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > salesforceplus-page-experience-series-panel")
//             ?.shadowRoot?.querySelector("div > bxp-carousel")
//             ?.shadowRoot?.querySelector("div > ul > li:nth-child(1) > div > bxp-series-card")
//             ?.shadowRoot?.querySelector("div > div > div.card-buttons.--bottom > bxp-icon-button.right-arrow-button")
//             ?.shadowRoot?.querySelector("a")
//     })
// }


export function authorizedEpisodeButton() {
    return `shadow/[href="/plus/experience/${testDataSet.eventNames[0]}/series/${testDataSet.seriesNames[0]}/episode/episode-1"]`
}
export const getCloseButton = `shadow/span[aria-label="Close"]`

export const secondAuthorizedEpisodeButton = `shadow/[href="/plus/experience/Sup_E2E0712_CG_Event1/series/Sup_E2E0712_CG_Series2/episode/episode-2"]`
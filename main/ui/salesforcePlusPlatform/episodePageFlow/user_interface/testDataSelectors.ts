import { testDataSet } from "../../authenticatedFlow/tasks/authFlow.tasks"

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
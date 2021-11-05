const seriesInRoles = 'Sup_E2E0712_CG_Series2'
const seriesInTopics = 'Sup_E2E0712_CG_Series3'
export const getWatchNowButton = `shadow/.text-button.bxp-global-cta.--primary [class="button-text"]`
export const getExperiencePageTitle = `shadow/[class="hero--title bxp-global-headline-three"]`
export const getExploreMoreButton = `shadow/.text-button.bxp-global-cta.--tertiary [class="button-text"]`
export const getPlayForSeriesInRoleButton = `shadow/[aria-label="Play series - ${seriesInRoles}"]`
export const getSeriesTitleInRoles = `shadow/div > h3`
export const getCloseButtonLoginModal = `shadow/[aria-label="Close"]`
export const getUpNextTitle = `shadow/[class="carousel-title bxp-global-headline-four"]`
export const getArrowSeriesInRole = `shadow/[aria-label="Go to series - ${seriesInRoles}"]`
export const getPlayForSeriesInTopicButton = `shadow/[aria-label="Play series - ${seriesInTopics}"]`
export const getArrowForSeriesInTopicButton = `shadow/[aria-label="Go to series - ${seriesInTopics}"]`
export const getAllSponsorsButton = `shadow/[class="button-text bxp-global-cta"]`
export const getSponsorsTitle = `#sponsors > span`

// export async function getSponsorsTitle(page) {
//     return await page.evaluate(() => {
//         return document?.querySelector("#sponsors > span")
//     })
// }
// export async function getPlayForSeriesInRoleButton(page) {
//     return await page.evaluateHandle(() => {
//         return document
//             ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector(
//                 "div > salesforceplus-page-experience-series-panel"
//             )
//             ?.shadowRoot?.querySelector("div > bxp-carousel")
//             ?.shadowRoot?.querySelector(
//                 "div > ul > li:nth-child(2) > div > bxp-series-card"
//             )
//             ?.shadowRoot?.querySelector(
//                 "div > div > div.card-buttons.--bottom > bxp-icon-button.play-button"
//             )
//             ?.shadowRoot?.querySelector("a");
//     });
// }
// export async function getArrowSeriesInRole(page) {
//     return await page.evaluateHandle(() => {
//         return document
//             ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector(
//                 "div > salesforceplus-page-experience-series-panel"
//             )
//             ?.shadowRoot?.querySelector("div > bxp-carousel")
//             ?.shadowRoot?.querySelector(
//                 "div > ul > li:nth-child(2) > div > bxp-series-card"
//             )
//             ?.shadowRoot?.querySelector(
//                 "div > div > div.card-buttons.--bottom > bxp-icon-button.right-arrow-button"
//             )
//             ?.shadowRoot?.querySelector("a");
//     });
// }
// export async function getPlayForSeriesInTopicButton(page) {
//     return await page.evaluateHandle(() => {
//         return document
//             ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector(
//                 "div > salesforceplus-page-experience-series-panel"
//             )
//             ?.shadowRoot?.querySelector("div > div > bxp-carousel")
//             ?.shadowRoot?.querySelector(
//                 "div > ul > li:nth-child(2) > div > bxp-series-card"
//             )
//             ?.shadowRoot?.querySelector(
//                 "div > div > div.card-buttons.--bottom > bxp-icon-button.play-button"
//             )
//             ?.shadowRoot?.querySelector("a");
//     });
// }
// export async function getArrowForSeriesInTopic(page) {
//     return await page.evaluateHandle(() => {
//         return document
//             ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector(
//                 "div > salesforceplus-page-experience-series-panel"
//             )
//             ?.shadowRoot?.querySelector("div > div > bxp-carousel")
//             ?.shadowRoot?.querySelector(
//                 "div > ul > li:nth-child(2) > div > bxp-series-card"
//             )
//             ?.shadowRoot?.querySelector(
//                 "div > div > div.card-buttons.--bottom > bxp-icon-button.right-arrow-button"
//             )
//             ?.shadowRoot?.querySelector("a");
//     });
// }
// export async function getTrailorTitleForSeriesInTopic(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
//             ?.shadowRoot?.querySelector("div > span");
//     })
// }

// export async function getTrailorTitleForSeriesInRoles(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div.hero-container > bxp-hero")
//             ?.shadowRoot?.querySelector("div > div.grid > div > div > div > div.hero--caption.bxp-global-caption");
//     })
// }
// export async function getUpNextTitle(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div.carousel-container > bxp-carousel")
//             ?.shadowRoot?.querySelector("div > span");
//     })
// }
// export async function getAllSponsorsButton(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > salesforceplus-html-test")
//             ?.shadowRoot?.querySelector("div > div > div.view-all-sponsors-button > a > span");
//     });
// }




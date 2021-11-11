export let ACCEPT_COOKIES_BUTTON = "button#onetrust-accept-btn-handler";
const originalSeries = "BxP_Learn_Series-1"
const featuredEpisodeSeries = "Original_Series3"
const featuredEpisodeNumber = "episode-0"
const experiencesSectionEvent = "Slack_Frontiers_2021"
export const getPlayIcon = `shadow/[aria-label="Play series - ${originalSeries}"]`
export let getArrowIcon = `shadow/[aria-label="Go to series - BxP_Learn_Series-1"]`
export const getTrailorTitle = `shadow/span.bxp-global-eyebrow`
export const getFeatureEpisodeTitle = `shadow/span.bxp-global-eyebrow`
export const getFeatureEpisodeButton = `shadow/[href="/plus/series/${featuredEpisodeSeries}/episode/${featuredEpisodeNumber}"]`
export const getAllEpisodesTitle = `shadow/div.bxp-global-headline-four.episodes-headline > b`
export let getExploreSFButton = `shadow/[class="text-button bxp-global-cta --tertiary"] [class="button-text"]`
export const getWatchNowButton = `shadow/[class="text-button bxp-global-cta --link --primary"] [class="button-text"]`
export let getExperienceSectionButton = `shadow/[href="/plus/experience/${experiencesSectionEvent}"]`

// export async function getExploreSFButton(page) {
//     return await page.evaluateHandle(() => {
//         return document
//             ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector(
//                 "div > div.home-page--hero-wrapper > bxp-homepage-hero"
//             )
//             ?.shadowRoot?.querySelector("div > bxp-hero")
//             ?.shadowRoot?.querySelector(
//                 "div > div.grid > div > div > div > div.hero--ctas > div:nth-child(2) > bxp-text-button"
//             )
//             ?.shadowRoot?.querySelector("button > span.button-text");
//     });
// }
// export async function getFeatureEpisodeButton(page) {
//     return await page.evaluateHandle(() => {
//         return document
//             ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div:nth-child(3) > bxp-carousel")
//             ?.shadowRoot?.querySelector(
//                 "div > ul > li:nth-child(2) > div > bxp-episode-card"
//             )
//             ?.shadowRoot?.querySelector(
//                 "div.episode-card.bxp-global-card-shadow > div.play-icon > bxp-icon-button"
//             )
//             ?.shadowRoot?.querySelector("a");
//     });
// }
// export async function getTrailorTitle(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//         ?.shadowRoot?.querySelector("div > salesforceplus-router")
//         ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//         ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
//         ?.shadowRoot?.querySelector("div > span");
//     });
// }
// export async function getWatchTrailorButton(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div.hero-container > bxp-hero")
//             ?.shadowRoot?.querySelector("div > div.grid > div > div > div > div.hero--ctas > div > bxp-text-button")
//             ?.shadowRoot?.querySelector("a > div > span.button-text");
//     });
// }
// export async function getFeatureEpisodeTitle(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
//             ?.shadowRoot?.querySelector("div > span");
//     });
// }
// export async function getExperienceSectionButton(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div:nth-child(4) > bxp-carousel")
//             ?.shadowRoot?.querySelector("div > ul > li:nth-child(1) > div > bxp-event-card")
//             ?.shadowRoot?.querySelector("div > div > div.card-buttons.--bottom--right > bxp-icon-button")
//             ?.shadowRoot?.querySelector("a");
//     });
// }
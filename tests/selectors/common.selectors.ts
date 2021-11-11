const puppeteer = require("puppeteer");
const { QueryHandler } = require("query-selector-shadow-dom/plugins/puppeteer");
puppeteer.registerCustomQueryHandler("shadow", QueryHandler);
export let ACCEPT_COOKIES_BUTTON = "button#onetrust-accept-btn-handler";
export let getDreamForceTab = `shadow/[href="/plus/experience/Sup_E2E0712_CG_Event1"]`
export let getWatchNowButton = `shadow/[class="text-button bxp-global-cta --link --primary"] [class="button-text"]`
export let getLoginWithTrailblazzerIDButton = `shadow/[href="/a/auth"] .link-content`
export let getEmailButton = `[id="loginPage:j_id61"] [aria-label="Email"]`
export let getEmailInputField = `input[id="loginPage:email-card-form:emailTextInput"]`
export let getLoginButton = `[id="submit-email"]`
export let getTokenInputField = `[id="loginPage:email-card-form:challengeTextInput"]`
export let getContinueButton = `[id="verify-challenge-button"]`
// export const getVideoProgressbar = `shadow/div > h5`
export async function getVideoProgressbar(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.player-container > div > bxp-vidyard-player")
            ?.shadowRoot?.querySelector("div > div > div > bxp-vidyard-play-duration")
            ?.shadowRoot?.querySelector("div > h5")?.innerHTML
    });
}

export const getEpisodeNumber = `shadow/div.episode-details .bxp-global-eyebrow`
export const getSeriesTitle = `shadow/div.episode-details .bxp-global-eyebrow`
export const getEpisodeTitle = `shadow/div.episode-details .episode-details--title bxp-global-headline-three`
export const getSpeakerOneName = `shadow/ul.speakers-container li:nth-child(1) .speaker-name`
export const getSpeakerOneDesignation = `shadow/ul.speakers-container li:nth-child(1) .speaker-card-title`
export const getSpeakerTwoName = `shadow/ul.speakers-container li:nth-child(2) .speaker-name`
export const getSpeakerTwoDesignation = `shadow/ul.speakers-container li:nth-child(2) .speaker-card-title`
export const getSpeakerThreeName = `shadow/ul.speakers-container li:nth-child(3) .speaker-name`
export const getSpeakerThreeDesignation = `shadow/ul.speakers-container li:nth-child(3) .speaker-card-title`
export const getSpeakerNames = `shadow/.speakers-container>li>div>span[class="speaker-name"]`
export const getSpeakerDesignation = `shadow/.speakers-container>li>div>span[class="speaker-card-title"]`


export async function getMuteButtonViewboxValue(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.player-container > div > bxp-vidyard-player")
            ?.shadowRoot?.querySelector("div > div > div > div.volume-container > button > bxp-global-icon")
            ?.shadowRoot?.querySelector("svg")?.getAttribute("viewBox")
    });
}

export async function getMaximizeButtonPathValue(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.player-container > div > bxp-vidyard-player")
            ?.shadowRoot?.querySelector("div > div > div > div.right-side-controls > button.player-button.fullscreen-button.fullscreen-expand-icon > bxp-global-icon")
            ?.shadowRoot?.querySelector("svg > path")?.getAttribute("d")?.includes("M23")
    });
}

export async function getMinimizedButtonPathValue(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.player-container > div > bxp-vidyard-player")
            ?.shadowRoot?.querySelector("div > div > div > div.right-side-controls > button.player-button.fullscreen-button.fullscreen-expand-icon > bxp-global-icon")
            ?.shadowRoot?.querySelector("svg > path")?.getAttribute("d")?.includes("M13")
    });
}






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










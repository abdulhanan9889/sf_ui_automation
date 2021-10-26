export let ACCEPT_COOKIES_BUTTON = "button#onetrust-accept-btn-handler";

export async function getDreamForceTab(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > salesforceplus-menu")
            ?.shadowRoot?.querySelector("div > nav > salesforceplus-link:nth-child(3)")
            ?.shadowRoot?.querySelector("a");
    });
}

export async function getWatchNowButton(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div > bxp-hero")
            ?.shadowRoot?.querySelector("div > div.grid > div > div > div > div.hero--ctas > div:nth-child(1) > bxp-text-button")
            ?.shadowRoot?.querySelector("a");
    });
}

export async function getLoginWithTrailblazzerIDButton(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > salesforceplus-view")
            ?.shadowRoot?.querySelector("bxp-login-modal")
            ?.shadowRoot?.querySelector("div > div > div > div.login--prompt > div > div > a");
    });
}

export async function getEmailButton(page) {
    return await page.$(`[id="loginPage:j_id61"] [aria-label="Email"]`);
}

export async function getEmailInputField(page) {
    return await page.$(`input[id="loginPage:email-card-form:emailTextInput"]`);
}

export async function getLoginButton(page) {
    return await page.$(`[id="submit-email"]`);
}

export async function getTokenInputField(page) {
    return await page.$(`[id="loginPage:email-card-form:challengeTextInput"]`);
}

export async function getContinueButton(page) {
    return await page.$(`[id="verify-challenge-button"]`);
}

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

export async function getEpisodeNumber(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
            ?.shadowRoot?.querySelector("div > span");
    });
}

export async function getSeriesTitle(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
            ?.shadowRoot?.querySelector("div > span");
    });
}

export async function getEpisodeTitle(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
            ?.shadowRoot?.querySelector("div > h3");
    });
}

export async function getSpeakerOneName(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
            ?.shadowRoot?.querySelector("div > div > ul > li:nth-child(1) > div > span.speaker-name");
    });
}

export async function getSpeakerOneDesignation(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
            ?.shadowRoot?.querySelector("div > div > ul > li:nth-child(1) > div > span.speaker-card-title");
    });
}

export async function getSpeakerTwoName(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
            ?.shadowRoot?.querySelector("div > div > ul > li:nth-child(2) > div > span.speaker-name");
    });
}

export async function getSpeakerTwoDesignation(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
            ?.shadowRoot?.querySelector("div > div > ul > li:nth-child(2) > div > span.speaker-card-title");
    });
}

export async function getSpeakerThreeName(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
            ?.shadowRoot?.querySelector("div > div > ul > li:nth-child(3) > div > span.speaker-name");
    });
}

export async function getSpeakerThreeDesignation(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
            ?.shadowRoot?.querySelector("div > div > ul > li:nth-child(3) > div > span.speaker-card-title");
    });
}

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

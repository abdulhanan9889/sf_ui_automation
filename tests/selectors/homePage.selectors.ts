// static readonly URL = 'https://www-uat1.salesforce.com/plus';
export let ACCEPT_COOKIES_BUTTON = "button#onetrust-accept-btn-handler";

export async function getExploreSFButton(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector(
                "div > div.home-page--hero-wrapper > bxp-homepage-hero"
            )
            ?.shadowRoot?.querySelector("div > bxp-hero")
            ?.shadowRoot?.querySelector(
                "div > div.grid > div > div > div > div.hero--ctas > div:nth-child(2) > bxp-text-button"
            )
            ?.shadowRoot?.querySelector("button > span.button-text");
    });
}

export async function getPlayIcon(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div:nth-child(2) > bxp-carousel")
            ?.shadowRoot?.querySelector(
                "div > ul > li:nth-child(2) > div > bxp-series-card"
            )
            ?.shadowRoot?.querySelector(
                "div > div > div.card-buttons.--bottom > bxp-icon-button.play-button"
            )
            ?.shadowRoot?.querySelector("a");
    });
}

export async function getArrowIcon(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main >salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div:nth-child(2) > bxp-carousel")
            ?.shadowRoot?.querySelector("div > ul > li:nth-child(2) > div > bxp-series-card")
            ?.shadowRoot?.querySelector("div > div > div.card-buttons.--bottom > bxp-icon-button.right-arrow-button")
            ?.shadowRoot?.querySelector("a");
    });
}

export async function getFeatureEpisodeButton(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div:nth-child(3) > bxp-carousel")
            ?.shadowRoot?.querySelector(
                "div > ul > li:nth-child(2) > div > bxp-episode-card"
            )
            ?.shadowRoot?.querySelector(
                "div.episode-card.bxp-global-card-shadow > div.play-icon > bxp-icon-button"
            )
            ?.shadowRoot?.querySelector("a");
    });
}

export async function getTrailorTitle(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
            ?.shadowRoot?.querySelector("div > span");
    });
}

export async function getWatchTrailorButton(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.hero-container > bxp-hero")
            ?.shadowRoot?.querySelector("div > div.grid > div > div > div > div.hero--ctas > div > bxp-text-button")
            ?.shadowRoot?.querySelector("a > div > span.button-text");
    });
}

export async function getFeatureEpisodeTitle(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
            ?.shadowRoot?.querySelector("div > span");
    });
}

export async function getExperienceSectionButton(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div:nth-child(4) > bxp-carousel")
            ?.shadowRoot?.querySelector("div > ul > li:nth-child(1) > div > bxp-event-card")
            ?.shadowRoot?.querySelector("div > div > div.card-buttons.--bottom--right > bxp-icon-button")
            ?.shadowRoot?.querySelector("a");
    });
}
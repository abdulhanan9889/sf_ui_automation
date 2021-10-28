// export class ExperiencePage{
//     static readonly URL = 'https://www-uat1.salesforce.com/plus/experience/Dreamforce_2021';
//     // static readonly URL = 'https://www-qa1.salesforce.com/plus/experience/Sup_E2E0712_CG_Event1';
//     static readonly sponsorsURL ='https://www.salesforce.com/dreamforce/sponsors/';

// }

export async function getExploreMoreButton(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div > bxp-hero")
            ?.shadowRoot?.querySelector(
                "div > div.grid > div > div > div > div.hero--ctas > div:nth-child(2) > bxp-text-button"
            )
            ?.shadowRoot?.querySelector("a > div > span.button-text");
    });
}

export async function getWatchNowButton(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
        ?.shadowRoot?.querySelector("div > salesforceplus-router")
        ?.shadowRoot?.querySelector("div > salesforceplus-view")
        ?.shadowRoot?.querySelector("div > div > bxp-hero")
        ?.shadowRoot?.querySelector("div > div.grid > div > div > div > div.hero--ctas > div > bxp-text-button")
        ?.shadowRoot?.querySelector("a > div > span.button-text")
    });
}

export async function getPlayForSeriesInRoleButton(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > salesforceplus-view")
            ?.shadowRoot?.querySelector(
                "div > salesforceplus-page-experience-series-panel"
            )
            ?.shadowRoot?.querySelector("div > bxp-carousel")
            ?.shadowRoot?.querySelector(
                "div > ul > li:nth-child(2) > div > bxp-series-card"
            )
            ?.shadowRoot?.querySelector(
                "div > div > div.card-buttons.--bottom > bxp-icon-button.play-button"
            )
            ?.shadowRoot?.querySelector("a");
    });
}
export async function getArrowSeriesInRole(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > salesforceplus-view")
            ?.shadowRoot?.querySelector(
                "div > salesforceplus-page-experience-series-panel"
            )
            ?.shadowRoot?.querySelector("div > bxp-carousel")
            ?.shadowRoot?.querySelector(
                "div > ul > li:nth-child(2) > div > bxp-series-card"
            )
            ?.shadowRoot?.querySelector(
                "div > div > div.card-buttons.--bottom > bxp-icon-button.right-arrow-button"
            )
            ?.shadowRoot?.querySelector("a");
    });
}

export async function getPlayForSeriesInTopicButton(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > salesforceplus-view")
            ?.shadowRoot?.querySelector(
                "div > salesforceplus-page-experience-series-panel"
            )
            ?.shadowRoot?.querySelector("div > div > bxp-carousel")
            ?.shadowRoot?.querySelector(
                "div > ul > li:nth-child(2) > div > bxp-series-card"
            )
            ?.shadowRoot?.querySelector(
                "div > div > div.card-buttons.--bottom > bxp-icon-button.play-button"
            )
            ?.shadowRoot?.querySelector("a");
    });
}

export async function getArrowForSeriesInTopic(page) {
    return await page.evaluateHandle(() => {
        return document
            ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > salesforceplus-view")
            ?.shadowRoot?.querySelector(
                "div > salesforceplus-page-experience-series-panel"
            )
            ?.shadowRoot?.querySelector("div > div > bxp-carousel")
            ?.shadowRoot?.querySelector(
                "div > ul > li:nth-child(2) > div > bxp-series-card"
            )
            ?.shadowRoot?.querySelector(
                "div > div > div.card-buttons.--bottom > bxp-icon-button.right-arrow-button"
            )
            ?.shadowRoot?.querySelector("a");
    });
}

export async function getAllSponsorsButton(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > salesforceplus-html-test")
            ?.shadowRoot?.querySelector("div > div > div.view-all-sponsors-button > a > span");
    });
}

export async function getAllEpisodesTitle(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > salesforceplus-view")
            ?.shadowRoot?.querySelector(
                "div > div.episodes-container > div.bxp-global-headline-four.episodes-headline > b");

    });

}

export async function getTrailorTitleForSeriesInTopic(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.episode-info > div.details-container > bxp-episode-details")
            ?.shadowRoot?.querySelector("div > span");
    })
}

export async function getTrailorTitleForSeriesInRoles(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.hero-container > bxp-hero")
            ?.shadowRoot?.querySelector("div > div.grid > div > div > div > div.hero--caption.bxp-global-caption");
    })
}

export async function getUpNextTitle(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.carousel-container > bxp-carousel")
            ?.shadowRoot?.querySelector("div > span");
    })
}

export async function getSponsorsTitle(page) {
    return await page.evaluate(() => {
        return document?.querySelector("#sponsors > span")
    })
}
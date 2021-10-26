
export async function exploreSalesforceButton(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.home-page--hero-wrapper > bxp-homepage-hero")
            ?.shadowRoot?.querySelector("div > bxp-hero")
            ?.shadowRoot?.querySelector("div > div.grid > div > div > div > div.hero--ctas > div:nth-child(2) > bxp-text-button")
            ?.shadowRoot?.querySelector("button")
    })
}

export async function seriesButton(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div:nth-child(2) > bxp-carousel")
            ?.shadowRoot?.querySelector("div > ul > li:nth-child(55) > div > bxp-series-card")
            ?.shadowRoot?.querySelector("div > div > div.card-buttons.--bottom > bxp-icon-button.right-arrow-button")
            ?.shadowRoot?.querySelector("a")
    })
}

export async function episodeButton(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.episodes-container > div.grid > div > div > div > div:nth-child(1) > bxp-episode-card")
            ?.shadowRoot?.querySelector("div > div.play-icon > bxp-icon-button")
            ?.shadowRoot?.querySelector("a")
    })
}

export async function playButton(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.player-container > div > bxp-vidyard-player")
            ?.shadowRoot?.querySelector("div > div > div > div.player-button.play-pause-container > button")
    })
}

export async function pauseButton(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.player-container > div > bxp-vidyard-player")
            ?.shadowRoot?.querySelector("div > div > div > div.player-button.play-pause-container > button")
    })
}

export async function firstEpisodeButton(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.episodes-container > div.grid > div > div > div > div:nth-child(2) > bxp-episode-card")
            ?.shadowRoot?.querySelector("div > div.play-icon > bxp-icon-button")
            ?.shadowRoot?.querySelector("a")
    })
}

export async function secondEpisodeButton(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.carousel-container > bxp-carousel")
            ?.shadowRoot?.querySelector("div > ul > li:nth-child(3) > div > bxp-episode-card")
            ?.shadowRoot?.querySelector("div.episode-card.bxp-global-card-shadow > div.play-icon > bxp-icon-button")
            ?.shadowRoot?.querySelector("a")
    })
}

export async function progressBar(page) {
    return await page.evaluateHandle(() => {
        return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
            ?.shadowRoot?.querySelector("div > salesforceplus-router")
            ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
            ?.shadowRoot?.querySelector("div > div.player-container > div > bxp-vidyard-player")
            ?.shadowRoot?.querySelector("div > div > div > bxp-vidyard-play-duration")
            ?.shadowRoot?.querySelector("div > h5")?.innerHTML
    })
}
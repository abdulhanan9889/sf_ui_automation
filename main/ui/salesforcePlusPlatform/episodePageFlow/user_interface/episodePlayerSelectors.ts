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

// unAuthFlow selectors
export const playButton = `shadow/[class="play-pause-button play-icon"]`
// export async function playButton(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div.player-container > div > bxp-vidyard-player")
//             ?.shadowRoot?.querySelector("div > div > div > div.player-button.play-pause-container > button")
//     })
// }
export const pauseButton = `shadow/[class="play-pause-button play-icon pause-icon"]`
// export async function pauseButton(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div.player-container > div > bxp-vidyard-player")
//             ?.shadowRoot?.querySelector("div > div > div > div.player-button.play-pause-container > button")
//     })
// }
export const progressBar = `.duration`
// export async function progressBar(page) {
//     return await page.evaluateHandle(() => {
//         return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > main > salesforceplus-view")
//             ?.shadowRoot?.querySelector("div > div.player-container > div > bxp-vidyard-player")
//             ?.shadowRoot?.querySelector("div > div > div > bxp-vidyard-play-duration")
//             ?.shadowRoot?.querySelector("div > h5")?.innerHTML
//     })
// }


// broadCastPageSelectors
export const getMuteOrUnmuteButton = 'shadow/[aria-label="volume toggle button"]'
// export async function getMuteOrUnmuteButton(page) {
//     return await page.evaluateHandle(() => {
//         return document
//             ?.querySelector("body > div.section.target.parbase > salesforceplus-app")
//             ?.shadowRoot?.querySelector("div > salesforceplus-router")
//             ?.shadowRoot?.querySelector("div > salesforceplus-view")
//             ?.shadowRoot?.querySelector(
//                 "div > div.player-container > div > bxp-vidyard-player"
//             )
//             ?.shadowRoot?.querySelector(
//                 "div > div > div > div.volume-container > button"
//             );
//     });
// }
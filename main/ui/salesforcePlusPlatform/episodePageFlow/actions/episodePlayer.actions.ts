import { maximizeVideoPlayerButton, minimizeVideoPlayerButton } from "../user_interface/episodePlayerSelectors"
export async function maximizeVideoPlayer(page) {
    let MAXIMIZE_BUTTON = await page.$(maximizeVideoPlayerButton)
    MAXIMIZE_BUTTON.evaluate((ele) => ele.click())
}

export async function minimizeVideoPlayer(page) {
    let MINIMIZE_BUTTON = await page.$(minimizeVideoPlayerButton)
    MINIMIZE_BUTTON.evaluate((ele) => ele.click())
}
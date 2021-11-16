import { getMuteOrUnmuteButton } from "../../episodePageFlow/user_interface/episodePlayerSelectors";
export async function muteVideoButton(page) {
    let muteButton = await page.$(getMuteOrUnmuteButton)
    await muteButton.evaluate((ele) => ele.click())
  }
  
  export async function unmuteVideoButton(page) {
    let unmuteButton = await page.$(getMuteOrUnmuteButton)
    await unmuteButton.evaluate((ele) => ele.click())
  }
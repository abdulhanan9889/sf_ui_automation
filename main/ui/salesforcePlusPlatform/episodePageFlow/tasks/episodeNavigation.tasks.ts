import { clickAuthorizedSeriesButton, clickAuthorizedEpisodeButton } from "../actions/episodesButton.actions"
import { clickCrossButton } from "../actions/crossModal.actions"
import { waitTillHTMLRendered } from "../../../../utilities/waitTillHTMLRendered"
export async function openAuthorizedEpisode(page) {
    // await clickDreamForceTab(page)
    // await waitTillHTMLRendered(page)
    await clickAuthorizedSeriesButton(page)
    await waitTillHTMLRendered(page)
    await page.waitForTimeout(10000)
    await clickAuthorizedEpisodeButton(page)
    await waitTillHTMLRendered(page)
}
export async function closeTbidModal(page) {
    await clickCrossButton(page)
    await waitTillHTMLRendered(page)
}

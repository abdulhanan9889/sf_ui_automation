import { authorizedSeriesButton } from "../selectors/episodePage.selectors"

export async function clickAuthorizedSeriesButton(page) {
    let AUTHORIZED_SERIES_BUTTON = await authorizedSeriesButton(page)
    if (!AUTHORIZED_SERIES_BUTTON) {
        setTimeout(authorizedSeriesButton, 100)
    } else {
        AUTHORIZED_SERIES_BUTTON.evaluate((ele) => ele.click())
    }
}
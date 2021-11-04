import {
    getTrailblazzerMeButton,
} from "../selectors/loginFlow.selectors";

export async function clickTrailblazzerButton(page) {
    await page.waitForSelector(getTrailblazzerMeButton)
    let trailblazzerMeButton = await page.$(getTrailblazzerMeButton);
    await trailblazzerMeButton.click();
}

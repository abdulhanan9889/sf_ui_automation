import { getTrailblazzerMeButton } from "./user_interface/trailBlazzerModalSelectors";

export async function clickTrailblazzerButton(page) {
    await page.waitForSelector(getTrailblazzerMeButton)
    let trailblazzerMeButton = await page.$(getTrailblazzerMeButton);
    await trailblazzerMeButton.click();
}

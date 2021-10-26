import {
    getTrailblazzerMeButton,
    getLoginDropDown,
} from "../selectors/loginFlow.selectors";
export async function clickLoginDropDown(page) {
    let loginDropDown = await getLoginDropDown(page);
    await loginDropDown.click();
}

export async function clickTrailblazzerButton(page) {
    let trailblazzerMeButton = await getTrailblazzerMeButton(page);
    await trailblazzerMeButton.evaluate((button) => button.click());
}

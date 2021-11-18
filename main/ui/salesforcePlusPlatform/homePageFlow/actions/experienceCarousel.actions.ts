import { getExperienceSectionButton } from "../user_interface/experienceCarouselSelectors";
export async function clickOnExperienceSectionButton(page) {
    await page.waitForSelector(getExperienceSectionButton)
    let experienceSectionButton = await page.$(getExperienceSectionButton);
    await experienceSectionButton.click()

}



import { getAllSponsorsButton } from "../user_interface/sponsorsSectionSelectors";

export async function clickOnAllSponsors(page) {
    // let allSponsorsButton = await getAllSponsorsButton(page);
    // await allSponsorsButton.asElement().click();
    await page.waitForSelector(getAllSponsorsButton)
    let allSponsorsButton = await page.$(getAllSponsorsButton)
    await allSponsorsButton.click()
}


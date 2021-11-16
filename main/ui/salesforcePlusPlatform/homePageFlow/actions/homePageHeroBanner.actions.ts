import { getExploreSFButton } from "../user_interface/heroBannerSelectors";
export async function clickOnExploreSF(page) {
    // let exploreSFButton = await getExploreSFButton(page);
    // if (!exploreSFButton) { setTimeout(clickOnExploreSF, 100) }
    // else {
    //     await exploreSFButton.asElement().click();
    // }
    await page.waitForSelector(getExploreSFButton)
    let exploreSFButton = await page.$(getExploreSFButton);
    await exploreSFButton.click()
}
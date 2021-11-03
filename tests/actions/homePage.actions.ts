import {
    ACCEPT_COOKIES_BUTTON,
    getExploreSFButton,
    getPlayIcon,
    getFeatureEpisodeButton,
    getArrowIcon,
    getExperienceSectionButton,
} from "../selectors/homePage.selectors";

import { getDreamForceTab } from "../selectors/common.selectors";

export async function acceptCookies(page) {
    if ((await page.waitForSelector(ACCEPT_COOKIES_BUTTON)) !== "null") {
        await page.focus(ACCEPT_COOKIES_BUTTON);
        await page.click(ACCEPT_COOKIES_BUTTON);
    }
}

export async function clickOnExploreSF(page) {
    let exploreSFButton = await getExploreSFButton(page);
    if (!exploreSFButton) { setTimeout(clickOnExploreSF, 100) }
    else {
        await exploreSFButton.asElement().click();
    }

}

export async function clickOnDreamForce(page) {
    let dreamForceTab = await getDreamForceTab(page);
    if (!dreamForceTab) { setTimeout(clickOnDreamForce, 100) }
    else {
        await dreamForceTab.asElement().click();
    }

}

export async function clickOnPlayIcon(page) {
    await page.waitForSelector(getPlayIcon)
    let playIcon = await page.$(getPlayIcon);
    await playIcon.click()
}

export async function clickOnArrowIcon(page) {
    await page.waitForSelector(getArrowIcon)
    let arrowIcon = await page.$(getArrowIcon);
    await arrowIcon.click()
    // if (!arrowIcon) { setTimeout(clickOnArrowIcon, 100) }
    // else {
    //     await arrowIcon.asElement().click();
    // }

}

export async function clickOnFeaturedEpisode(page) {
    await page.waitForSelector(getFeatureEpisodeButton)
    let featureEpisodeButton = await page.$(getFeatureEpisodeButton);
    await featureEpisodeButton.click()
   // let featureEpisodeButton = await getFeatureEpisodeButton;
    // if (!featureEpisodeButton) { setTimeout(clickOnFeaturedEpisode, 100) }
    // else {
    //     await featureEpisodeButton.asElement().click();
    // }

}

export async function clickOnExperienceSectionButton(page) {
    let experienceSectionButton = await getExperienceSectionButton(page)
    if (!experienceSectionButton) { setTimeout(clickOnExperienceSectionButton, 100) }
    else {
        await experienceSectionButton.asElement().click();
    }

}

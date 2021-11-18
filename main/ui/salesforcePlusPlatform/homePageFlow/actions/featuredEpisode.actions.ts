import { getFeatureEpisodeButton } from "../user_interface/featuredEpisodeSelectors";
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
import { featuredEpisodeCard } from "./user_interface/featuredEpisode.selectors";

export async function clickFeaturedEpisodeCard(page) {
    await page.waitForSelector(featuredEpisodeCard)
    let FEATURED_EPISODE_CARD = await page.$(featuredEpisodeCard)
    await FEATURED_EPISODE_CARD.click()
}

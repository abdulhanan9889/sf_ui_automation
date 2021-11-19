import { waitTillHTMLRendered } from "../../../utilities/waitTillHTMLRendered";
import { clickPauseButton, clickPlayButton } from "../originalSeries/actions/unAuthFlow.actions";
import { featuredEpisodeCard} from "./user_interface/featuredEpisode.selectors";

export async function clickFeaturedEpisodeCard(page) {
    await page.waitForSelector(featuredEpisodeCard,{visible:true,timeout:10000});
    let FEATURED_EPISODE_CARD = await page.$(featuredEpisodeCard)
    await FEATURED_EPISODE_CARD.click();

}

export async function playAndPauseFeaturedEpisode(page) {
    await page.waitFor(10000);
    await clickPlayButton(page);
    await waitTillHTMLRendered(page);
    await page.waitFor(10000);
    await clickPauseButton(page);
}

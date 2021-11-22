// import { waitTillHTMLRendered } from "../../../../utilities/waitTillHTMLRendered";
//    import { waitTillHTMLRendered } from "../../../../utilities/waitTillHTMLRendered";
// import { clickFeaturedEpisodeCard } from "../featuredEpisodeFlow.actions";
// import { clickFeaturedEpisodeCard, playAndPauseFeaturedEpisode } from "../featuredEpisodeFlow.actions";

import { waitTillHTMLRendered } from "../../../../utilities/waitTillHTMLRendered";
import { clickFeaturedEpisodeCard, getFeatureEpisodeTitles } from "../featuredEpisodeFlow.actions";


export async function playFeauredEpisode(page) {
    // await clickDreamForceTab(page)
    await waitTillHTMLRendered(page);
    await clickFeaturedEpisodeCard(page);
    // await waitTillHTMLRendered(page);
    await waitTillHTMLRendered(page);
    
    await getFeatureEpisodeTitles(page);

    // await playAndPauseFeaturedEpisode(page);

}
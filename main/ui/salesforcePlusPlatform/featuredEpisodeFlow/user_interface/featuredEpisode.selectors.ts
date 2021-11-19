//href="/plus/series/SeriesAutomation-emumba11Mo1323/episode/episode-2" for button
//"vidyard-iframe-kYdybdPFUnaJEKvdUZQCro"    
//href="/plus/series/Connections/episode/episode-13"                           for iframe
import { testDataSet } from "../featuredEpisodeTasks/createDestroyFeaturedEpisodes";
// export const featuredEpisodeCard = `shadow/a[href="/plus/series/${testDataSet.seriesNames[0]}/episode/episode-2"]`;
// export const featuredEpisodeCard = `shadow/a[href="/plus/series/Leading_Through_Change/episode/episode-0"]`;
export const featuredEpisodeNumber=`shadow/span[class="bxp-global-eyebrow"]`;
export const featuredEpisodeTitle=`shadow/h3[class="episode-details--title bxp-global-headline-three"]`;
export const featuredEpisodeGuestSpeakerNames=`shadow/span[class="speaker-name"]`
export const featuredEpisodeTitles=`shadow/ul.carousel-items div.details-container > div[class="bxp-global-headline-five episode-title"] > b`;

export async function featuredEpisodeCard(testdatastubSeriesrNames){
    return `shadow/a[href="/plus/series/${testdatastubSeriesrNames}/episode/episode-2"]`;
}
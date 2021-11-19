import { waitTillHTMLRendered } from "../../../utilities/waitTillHTMLRendered";
import { testDataSet } from "../featuredEpisodeFlow/featuredEpisodeTasks/createDestroyFeaturedEpisodes";
import { clickPauseButton, clickPlayButton } from "../originalSeries/actions/unAuthFlow.actions";
import { featuredEpisodeCard, featuredEpisodeTitles} from "./user_interface/featuredEpisode.selectors";


export async function clickFeaturedEpisodeCard(page) {
    const a= featuredEpisodeCard(testDataSet.seriesNames[0]);
    await page.waitForSelector(a,{visible:true,timeout:10000});
    let FEATURED_EPISODE_CARD = await page.$(a);
    await FEATURED_EPISODE_CARD.click();

}

export async function playAndPauseFeaturedEpisode(page) {
    await page.waitFor(10000);
    await clickPlayButton(page);
    await waitTillHTMLRendered(page);
    await page.waitFor(10000);
    await clickPauseButton(page);
}

export async function getFeatureEpisodeTitles(page){
    // let i;
    const titlesElement = await page.$$(featuredEpisodeTitles);
    const titles = await page.$$eval(featuredEpisodeTitles,el=> el.map(ele=>{return ele.innerHTML;}))//map(ele=>ele.innerHTML));  el=> {return el.innerHTML}
    // let speakerDesignation = await page.$$eval(getSpeakerDesignation, vals => vals.map(val => val.innerHTML))
    // await Titles.map(elef=>console.log(elef));
    // console.log('before forEach');
    // Titles.forEach(element => {
    //     console.log(element);
    // });
    // console.log('after forEach');
    console.log(titles);
    console.log(titles.length);
    console.log('after Titles');
    // console.log('Titles Element',TitlesElement);

}

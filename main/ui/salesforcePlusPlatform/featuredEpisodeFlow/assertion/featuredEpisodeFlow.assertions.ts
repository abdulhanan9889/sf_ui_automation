import { featuredEpisodeGuestSpeakerNames, featuredEpisodeNumber, featuredEpisodeTitle  } from "../user_interface/featuredEpisode.selectors";
var assert = require("assert");

export async function verifyFeaturedEpisodeNumber(page){
//   featuredEpisodeSeriesTitle
    await page.waitForSelector(featuredEpisodeNumber,{visible:true,timeout:3000}); 
    const featuredEpisodeNumberElement= await page.$(featuredEpisodeNumber);
    // const b= featuredEpisodeNumberElement.innerHTML;
   let featuredEpisodeNumberValue = await featuredEpisodeNumberElement.evaluate(element=>element.innerHTML);
   featuredEpisodeNumberValue = featuredEpisodeNumberValue.split("• ")[1];
    await assert.equal(featuredEpisodeNumberValue,'EPISODE 2','message were not equal');
}

export async function verifyFeaturedEpisodeTitle(page){
  
    await page.waitForSelector(featuredEpisodeTitle,{visible:true,timeout:3000}); 
    const featuredEpisodeTitleElement= await page.$(featuredEpisodeTitle);
    // const b= featuredEpisodeNumberElement.innerHTML;
   let featuredEpisodeTitleValue = await featuredEpisodeTitleElement.evaluate(element=>element.innerHTML);
//    featuredEpisodeSeriesTitleValue = featuredEpisodeSeriesTitle.split("• ")[1];
    await assert.equal(featuredEpisodeTitleValue,'Episode_Automation-eMumba-11Mo002347','message were not equal');
}

export async function verifyFeaturedEpisodeGuestSpeakerNames(page){
  
    await page.waitForSelector(featuredEpisodeGuestSpeakerNames,{visible:true,timeout:3000}); 
    const featuredEpisodeGuestSpeakerNamesElement= await page.$$(featuredEpisodeGuestSpeakerNames);
    // const b= featuredEpisodeNumberElement.innerHTML;
//    let featuredEpisodeGuestSpeakerNamesValue = await featuredEpisodeGuestSpeakerNamesElement.evaluate(element=>element.innerHTML);
//    featuredEpisodeSeriesTitleValue = featuredEpisodeGuestSpeakerValue.split("• ")[1];
    const a= ['Sarah Franklin','Alex Mahon']
    await featuredEpisodeGuestSpeakerNamesElement.forEach(async (element) => {
        await assert.equal(element.innerHTML,a);
    });
    // await assert.equal(featuredEpisodeGuestSpeakerNamesValue,'Sarah Franklin');
}
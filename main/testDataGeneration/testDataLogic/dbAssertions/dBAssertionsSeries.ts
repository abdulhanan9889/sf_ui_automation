import SFDataLogic from "../testDataLogic";


export default class dBAssertionOriginalSeries extends SFDataLogic
{

static async getSeriesDataFromDB(seriesId: string){
    console.log("Here is the series ID", seriesId)
    let obj : object = {}
    let conn = SFDataLogic.setUpConnection();
    let q = conn.query(`SELECT Id,Name,Publish_Status__c,Description__c,Series_Role__c,
    Series_Topics__c,Card_Image_Url__c FROM bxp_Content_Group__c WHERE Id = '${seriesId}'`)
    //@ts-ignore
    await q.run(function (err, result) {
      if (err) { console.log(err) 
     obj= err}
      else
        console.log(result)
       obj = result
    })
    return obj

}

}
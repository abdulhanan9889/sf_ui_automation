  


import SFDataLogic from "../testDataLogic";

export default  async function getEpisodeDataFromDB(episodeId: string){
    console.log("Here is the series ID", episodeId)
    let obj : object = {}
    let conn = SFDataLogic.setUpConnection();
    let q = conn.query(`SELECT Id,Name,Description__c,Content_URL__c,Type__c FROM bxp_Content__c WHERE Id = '${episodeId}'`)
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

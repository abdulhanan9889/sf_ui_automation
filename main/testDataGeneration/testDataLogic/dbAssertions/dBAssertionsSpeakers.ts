


import SFDataLogic from "../testDataLogic";

export default  async function getSpeakerDataFromDB(speakerId: string){
    console.log("Here is the series ID", speakerId)
    let obj : object = {}
    let conn = SFDataLogic.setUpConnection();
    let q = conn.query(`SELECT Id,Speaker_Last_Name__c,Speaker_First_Name__c,Speaker_Job_Title__c,Speaker_Company_Name__c FROM bxp_Speaker__c WHERE Id = '${speakerId}'`)
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

import jsforce, { SoapApi } from "jsforce"
import TestDataTemplate from "../entities/TestDataTemplate"
import Series from "../entities/Series"
import moment from "moment-timezone"
import seriesData from "../testDataFiles/series_data.json"
import episodeData from "../testDataFiles/episode_data.json"
import eventData from "../testDataFiles/event_data.json"
import channelData from "../testDataFiles/channel_data.json"
import segmentData from "../testDataFiles/segment_data.json"
import { add, setHours, setMinutes } from "date-fns"
import Episode from "../entities/Episodes"
import Events from "../entities/Events"
import Channel from "../entities/Channel"
import Segment from "../entities/Segment"
import { Map_Object } from "../entities/types"
import { SObject } from "jsforce"

import connectionSetupClass from "./connection";
const connectionSetup = new connectionSetupClass();
var userName = connectionSetup.username;
var password = connectionSetup.password;
var loginURL = connectionSetup.loginUrl;
var instanceURL = connectionSetup.instanceUrl;
export default class SFDataLogic {

  // let dateFormat = 'MM/DD/YYYY HH:mm:ss'
  static getStringDateTime(dateFormat: string) {
    var date = new Date()
    var currentDate = moment(date).format(dateFormat)
    return currentDate
  }

  static getCalendarTimeInstance(hour: number, minute: number) {
    moment.tz.setDefault("America/Los_Angeles")
    var date = new Date()
    var setDateHours = setHours(date, hour)
    var setDateMinutes = setMinutes(setDateHours, minute)
    var currentDate = setDateMinutes
    return currentDate
  }

  static readTestData(jsonFile: object) {
    let str: string = JSON.stringify(jsonFile)
    let td = new TestDataTemplate()
    try {
      td = JSON.parse(str)
      return (td)
    }
    catch (e) {
      console.log(e)
    }
  }
  static getFieldValuesInObject(fieldNames: Array<string>,
    fieldValues: Array<object>
  ): Map<string, object> {
    var map = new Map();
    for (let i = 0; i < fieldNames.length; i++) {
      map.set(fieldNames[i], fieldValues[i])
    }
    return map;
  }

  static getGraphFieldMap(graphQlFields: Array<string>): Map<string, object> {
    let mapOfFieldNameValue: Map<string, object> = new Map()

    for (let i = 0; i < graphQlFields.length; i++) {
      //@ts-ignore
      mapOfFieldNameValue.set(graphQlFields[i].toString().split(":")[0], graphQlFields[i].toString().split(":")[1]);
    }
    return mapOfFieldNameValue;
  }

  static async createEvent(eventStartDayFromToday: number, eventStartHour: number, eventEndDayFromToday: number, eventEndHour: number) {
    let tde = SFDataLogic.readTestData(eventData);
    let oEvent = new Events()
    if (tde) {
      let insertFieldNameValue: Map<string, Object> = SFDataLogic.getFieldValuesInObject(tde.fieldName, tde.fieldValue);
      let updateFieldNameValue: Map<string, Object> = SFDataLogic.getFieldValuesInObject(tde.updateFieldName, tde.updateFieldValue);
      let graphQlAttributes: Map<string, object> = SFDataLogic.getGraphFieldMap(tde.graphQLAttribute);

      insertFieldNameValue.set("Name", ["Emumba_Event_Automation-" + SFDataLogic.getStringDateTime("MMddHHmm")]);
      let clEventStartTime = SFDataLogic.getCalendarTimeInstance(eventStartHour, 0);
      clEventStartTime = add(clEventStartTime, { days: eventStartDayFromToday });
      insertFieldNameValue.set("Start_Date_Time__c", clEventStartTime);
      let clEventEndTime = SFDataLogic.getCalendarTimeInstance(eventEndHour, 0);
      clEventEndTime = add(clEventEndTime, { days: eventEndDayFromToday });
      insertFieldNameValue.set("End_Date_Time__c", clEventEndTime);
      insertFieldNameValue.set("Publish_Date__c", SFDataLogic.getCalendarTimeInstance(8, 0));

      oEvent.setObjectApi(tde.apiName);
      //@ts-ignore
      oEvent.setObjectName(Object.fromEntries(insertFieldNameValue).Name)
      try {
        //@ts-ignore
        let eventID = await SFDataLogic.insertRecord(Object.fromEntries(insertFieldNameValue), tde.apiName);
        oEvent.objectId = eventID
        console.log("Event ID=", oEvent.objectId)
      } catch (e) {
        console.log("Error occured while creating Event", e);
      }
      insertFieldNameValue.set("Start_Date_Time[__c", [clEventStartTime.getTime()]);
      oEvent.setFieldsDetails(insertFieldNameValue);
      oEvent.setFieldsDetailsToBeUpdated(updateFieldNameValue);
      // @ts-ignore
      oEvent.setGraphQlAttributeMapping(graphQlAttributes);
      // @ts-ignore
      oEvent.setCalendar(clEventStartTime); console.log("Check Event Calendar=", clEventStartTime)
      return oEvent;
    }
  }


  static async createSegment(cl: Date, segmentStartHour: number, segmentStartMinute: number, durationInMinute: number, ch: Channel) {
    let tde = SFDataLogic.readTestData(segmentData);
    let oSegment = new Segment();
    if (tde) {
      let insertFieldNameValue: Map<string, Object> = SFDataLogic.getFieldValuesInObject(tde.fieldName, tde.fieldValue);
      let updateFieldNameValue: Map<string, Object> = SFDataLogic.getFieldValuesInObject(tde.updateFieldName, tde.updateFieldValue);

      insertFieldNameValue.set("Content__c", ch.getObjectId());
      insertFieldNameValue.set("Name", "Emumba_Segment_Automation-" + SFDataLogic.getStringDateTime("MMddHHmmss"));
      let clStartTime: Date = cl
      console.log("c1InitialTime=", clStartTime)
      clStartTime = setHours(clStartTime, segmentStartHour);
      clStartTime = setMinutes(clStartTime, segmentStartMinute);
      insertFieldNameValue.set("Start_Time__c", clStartTime);
      console.log("c1StartTime=", clStartTime)
      let clEndTime: Date = clStartTime
      clEndTime = setHours(clEndTime, segmentStartHour);
      clEndTime = setMinutes(clEndTime, segmentStartMinute);
      clEndTime = add(clEndTime, { minutes: durationInMinute });
      insertFieldNameValue.set("End_Time__c", clEndTime);
      console.log("c1EndTime=", clEndTime)
      // ((Calendar) insertFieldNameValue.get("Start_Time__c")).getTime();
      // ((Calendar) insertFieldNameValue.get("End_Time__c")).getTime();
      oSegment.setObjectApi(tde.apiName);
      //@ts-ignore
      oSegment.setObjectName(Object.fromEntries(insertFieldNameValue).Name);


      try {
        // @ts-ignore
        oSegment.objectId = await SFDataLogic.insertRecord(Object.fromEntries(insertFieldNameValue), oSegment.objectName);
        console.log("Segment ID", oSegment.objectId)
      } catch (e) {
        console.log("Error occured while creating Segment -" + oSegment.getObjectName());
      }
      oSegment.setFieldsDetails(insertFieldNameValue);
      oSegment.setFieldsDetailsToBeUpdated(updateFieldNameValue);
      // @ts-ignore
      oSegment.setCalendar(clEndTime);
      return oSegment;
    }
  }
  static async createChannel(cl: Date, channelStartHour: number, channelDurationInHour: number, dayOfChannel: string) {
    let tde = SFDataLogic.readTestData(channelData);
    let oChannel = new Channel();
    if (tde) {
      let insertFieldNameValue: Map<string, Object> = SFDataLogic.getFieldValuesInObject(tde.fieldName, tde.fieldValue);
      let updateFieldNameValue: Map<string, Object> = SFDataLogic.getFieldValuesInObject(tde.updateFieldName, tde.updateFieldValue);

      insertFieldNameValue.set("Name", "Emumba_Channel_Automation-" + SFDataLogic.getStringDateTime("MMddHHmmss"));
      insertFieldNameValue.set("Day__c", dayOfChannel);
      console.log("c1 Time=", cl)
      let clJoinTime: Date = cl
      console.log("initial time=", clJoinTime)
      clJoinTime = setHours(clJoinTime, channelStartHour);
      clJoinTime = add(clJoinTime, { days: parseInt(dayOfChannel) - 1 });
      insertFieldNameValue.set("Join_Time__c", clJoinTime);
      console.log("c1JoinTime=", clJoinTime)
      let clEndTime: Date = clJoinTime
      console.log("initial end Time=", clEndTime)
      clEndTime = add(clEndTime, { days: parseInt(dayOfChannel) - 1 });
      clEndTime = add(clEndTime, { hours: channelDurationInHour });

      insertFieldNameValue.set("End_Time__c", clEndTime);
      console.log("c1EndTime=", clEndTime)
      // let clJoinTime = SFDataLogic.getCalendarTimeInstance(channelStartHour, 0);
      // clJoinTime = add(clJoinTime, { days: 3 });
      // insertFieldNameValue.set("Join_Time__c", clJoinTime);
      // let clEventEndTime = SFDataLogic.getCalendarTimeInstance(channelDurationInHour, 0);
      // clEventEndTime = add(clEventEndTime, { days: 5 });
      // insertFieldNameValue.set("End_Time__c", clEventEndTime);
      //insertFieldNameValue.set("Publish_Date__c", SFDataLogic.getCalendarTimeInstance(8, 0));

      // ((Calendar) insertFieldNameValue.get("Join_Time__c")).getTime();
      // ((Calendar) insertFieldNameValue.get("End_Time__c")).getTime();

      oChannel.setObjectApi(tde.apiName);
      //@ts-ignore
      oChannel.setObjectName(Object.fromEntries(insertFieldNameValue).Name)


      try {
        //@ts-ignore
        oChannel.objectId = await SFDataLogic.insertRecord(Object.fromEntries(insertFieldNameValue), oChannel.objectName);
        console.log("Channel Id=", oChannel.objectId)
      } catch (e) {
        console.log("Error occured while creating Channel", e);
      }
      oChannel.setFieldsDetails(insertFieldNameValue);
      oChannel.setFieldsDetailsToBeUpdated(updateFieldNameValue);
      //@ts-ignore
      oChannel.setCalendar(clJoinTime);
      return oChannel;
    }
  }

  static async assignChannelToEvent(ch: Channel, ev: Events, featuredEvent: boolean, order: number, status: string) {

    let insertFieldNameValue: Map<string, object> = new Map();
    insertFieldNameValue.set("type", ["bxp_Content_Assignment__c"])
    insertFieldNameValue.set("Content__c", [ch.objectId]);
    insertFieldNameValue.set("Content_Group__c", [ev.objectId]);
    insertFieldNameValue.set("Featured_Content__c", [featuredEvent]);
    insertFieldNameValue.set("Order__c", [order]);
    insertFieldNameValue.set("Status__c", [status]);
    insertFieldNameValue.set("Publish_Date__c", SFDataLogic.getCalendarTimeInstance(8, 0));

    ch.getFieldsDetails().set("Featured_Content__c", featuredEvent);
    ch.getFieldsDetails().set("Order__c", order);
    ch.getFieldsDetails().set("Status__c", status);
    ch.getFieldsDetails().set("Publish_Date__c", SFDataLogic.getCalendarTimeInstance(8, 0));

    try {
      //@ts-ignore
      await SFDataLogic.insertRecord(Object.fromEntries(insertFieldNameValue), ch.objectName);
    } catch (e) {
      console.log("Error occured while assigning Channel to Event", e);
    }
    ev.getChannelList().push(ch);
  }

  static async createSeries(seriesStartDayFromToday: number, seriesEndDayFromToday: number, publish_status: string) {
    let tde = SFDataLogic.readTestData(seriesData);

    let oSeries = new Series();
    if (tde) {
      let insertFieldNameValue: Map<string, object> = SFDataLogic.getFieldValuesInObject(tde.fieldName,
        tde.fieldValue);
      let updateFieldNameValue: Map<string, object> = SFDataLogic
        .getFieldValuesInObject(tde.updateFieldName, tde.updateFieldValue);
      //
      insertFieldNameValue.set("Name", ["Series_Automation-emumba" + SFDataLogic.getStringDateTime("MMddHHmm")]);

      let clSeriesStartTime = SFDataLogic.getCalendarTimeInstance(8, 0);
      clSeriesStartTime = add(clSeriesStartTime, { days: seriesStartDayFromToday });
      insertFieldNameValue.set("Start_Date_Time__c", clSeriesStartTime);

      let clSeriesEndTime = SFDataLogic.getCalendarTimeInstance(22, 0);
      clSeriesEndTime = add(clSeriesEndTime, { days: seriesEndDayFromToday });
      insertFieldNameValue.set("End_Date_Time__c", clSeriesEndTime);

      insertFieldNameValue.set("Publish_Date__c", SFDataLogic.getCalendarTimeInstance(8, 0));

      oSeries.setObjectApi(tde.apiName);
      //@ts-ignore
      oSeries.setObjectName(Object.fromEntries(insertFieldNameValue).Name)
      oSeries.setFieldsDetails(insertFieldNameValue);
      oSeries.setFieldsDetailsToBeUpdated(updateFieldNameValue);
      //@ts-ignore
      insertFieldNameValue.set("Publish_Status__c", publish_status)

      try {
        //@ts-ignore
        oSeries.objectId = await SFDataLogic.insertRecord(Object.fromEntries(insertFieldNameValue), oSeries.objectName);
        console.log("Series ID:", oSeries.objectId)
      }
      catch (e) {
        console.log(e)
      }
      return oSeries;
    }
  }



  static async createEpisode() {

    let tde = SFDataLogic.readTestData(episodeData);
    let oEpisode = new Episode()

    if (tde) {

      let insertFieldNameValue: Map<string, object> = SFDataLogic.getFieldValuesInObject(tde.fieldName,
        tde.fieldValue);
      let updateFieldNameValue: Map<string, object> = SFDataLogic.getFieldValuesInObject(tde.updateFieldName, tde.updateFieldValue);

      insertFieldNameValue.set("Name", ["Episode_Automation-eMumba-" + SFDataLogic.getStringDateTime("MMddHHmmss")]);

      oEpisode.setObjectApi(tde.apiName);
      //@ts-ignore
      oEpisode.setObjectName(Object.fromEntries(insertFieldNameValue).Name)
      oEpisode.setFieldsDetails(insertFieldNameValue);
      oEpisode.setFieldsDetailsToBeUpdated(updateFieldNameValue);
      try {
        // @ts-ignore
        oEpisode.objectId = await SFDataLogic.insertRecord(Object.fromEntries(insertFieldNameValue), oEpisode.objectName);
        console.log("Episode ID", oEpisode.objectId)
      } catch (e) {
        console.log("Error occured while creating Episode", e);
      }
      return oEpisode;
    }
  }


  static async assignEpisodeToSeries(ep: Episode, sr: Series, featuredEvent: boolean, order: number, status: string) {
    let insertFieldNameValue: Map<string, object> = new Map()
    insertFieldNameValue.set("type", ["bxp_Content_Assignment__c"]);
    insertFieldNameValue.set("Content__c", [ep.objectId]);
    insertFieldNameValue.set("Content_Group__c", [sr.objectId]);
    insertFieldNameValue.set("Featured_Content__c", [featuredEvent]);
    insertFieldNameValue.set("Order__c", [order]);
    insertFieldNameValue.set("Status__c", [status]);
    insertFieldNameValue.set("Publish_Date__c", SFDataLogic.getCalendarTimeInstance(8, 0));

    ep.getFieldsDetails().set("Featured_Content__c", featuredEvent);
    ep.getFieldsDetails().set("Order__c", order);
    ep.getFieldsDetails().set("Status__c", status);
    console.log("epi details", ep.getFieldsDetails());
    ep.getFieldsDetails().set("Publish_Date__c", SFDataLogic.getCalendarTimeInstance(8, 0));

    try {
      await SFDataLogic.insertRecord(Object.fromEntries(insertFieldNameValue), "series");
    } catch (e) {
      console.log("Error occured while assigning Episode to Series", e);
    }
    sr.getEpisodeList().push(ep);
  }

  static async assignSeriesToEvent(ev: Events, sr: Series) {

    let insertFieldNameValue: Map<string, object> = new Map()
    insertFieldNameValue.set("type", ["bxp_Content_Group_Assignment__c"]);
    insertFieldNameValue.set("Parent_Content_Group__c", [ev.objectId]);
    insertFieldNameValue.set("Child_Content_Group__c", [sr.objectId]);

    try {
      await SFDataLogic.insertRecord(Object.fromEntries(insertFieldNameValue), "series");
    } catch (e) {
      console.log("Error occured while assigning Series to Episode", e);
    }
    ev.getSeriesList().push(sr);
  }
  static async insertRecord(dataMap: Map_Object, type: string) {
    let conn = SFDataLogic.setUpConnection();
    //console.log(dataMap);
    let id: string = ""

    let str: string = JSON.stringify(dataMap)
    let obj: Object[] = JSON.parse(str)
    let result: Object[]
    console.log(dataMap)

    await conn.soap.create(obj, function (err, result) {
      if (err) {
        console.log(err)
        return "Error Occured"
      } else {
        console.log(result);
        id = result.id

      }

    })
    return id

  }
  static async updateRecord(type: string, id: string, attribute: object) {
    let conn = SFDataLogic.setUpConnection();
   
    await conn.sobject(type).record(id).update({ Publish_Status__c: "Publish" }, function (err:any, result:any) {
      if (err) {
        console.log(err)
      }
      else {
        console.log(result)
      }
    })
  }
  static async retrieveRecord(type: string, id: string) {
    let conn = SFDataLogic.setUpConnection();

    
    await conn.sobject(type).record(id).retrieve(function (err:any, result:any) {
      if (err) {
        console.log(err)
      }
      else {
        console.log(result)
      }
    })
  }
  static async deleteRecord(type:string,id:string) {
    let conn = SFDataLogic.setUpConnection();

await conn.sobject(type).delete(id, function(err:any,result:any)
{
  if(err){console.log(err)}
  else(console.log(result))
})
  }


  static setUpConnection() {

    console.log("Username:",userName)
    console.log("Password:",password)
    console.log("Login Url:",loginURL)
    console.log("Instance Url:",instanceURL)
    let connection = new jsforce.Connection({

      loginUrl: loginURL,
      instanceUrl: instanceURL

    });

    connection.login(userName, password, function (err: any, loginResult) {
      if (err) { console.log(err) }
      else {

      }
    })


    return connection;
  }

}

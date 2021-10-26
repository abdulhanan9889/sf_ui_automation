import jsforce from "jsforce"
import TestDataTemplate from "../entities/TestDataTemplate"
import Series from "../entities/Series"
import { utcToZonedTime } from 'date-fns-tz'
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
import moment from 'moment'



export default class SFDataLogic {


  // let dateFormat = 'MM/DD/YYYY HH:mm:ss'
  static getStringDateTime(dateFormat: string) {
    var date = new Date()
    var currentDate = moment(date).format(dateFormat)
    return currentDate
  }

  static getCalendarTimeInstance(hour: number, minute: number) {
    // moment.tz.setDefault("America/Los_Angeles")
    var date = new Date()
    var updatedDate = utcToZonedTime(date, "America/Los_Angeles")
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

  static createEvent(eventStartDayFromToday: number, eventStartHour: number, eventEndDayFromToday: number, eventEndHour: number) {
    try {
      let tde = SFDataLogic.readTestData(eventData);
      let oEvent = new Events()
      if (tde) {
        let insertFieldNameValue: Map<string, Object> = SFDataLogic.getFieldValuesInObject(tde.fieldName, tde.fieldValue);
        let updateFieldNameValue: Map<string, Object> = SFDataLogic.getFieldValuesInObject(tde.updateFieldName, tde.updateFieldValue);
        let graphQlAttributes: Map<string, object> = SFDataLogic.getGraphFieldMap(tde.graphQLAttribute);
  
        insertFieldNameValue.set("Name", ["Event_Automation-" + SFDataLogic.getStringDateTime("MMddHHmm")]);
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
       
          //@ts-ignore
          oEvent.setObjectId(SFDataLogic.insertUpdateDataIntoSFPlateform(insertFieldNameValue), oEvent.objectName);
          insertFieldNameValue.set("Start_Date_Time[__c", [clEventStartTime.getTime()]);
          oEvent.setFieldsDetails(insertFieldNameValue);
          oEvent.setFieldsDetailsToBeUpdated(updateFieldNameValue);
          // @ts-ignore
          oEvent.setGraphQlAttributeMapping(graphQlAttributes);
          oEvent.setCalendar(clEventStartTime);
          return oEvent;
        }} catch (e) {
          console.log("Error occured while creating Event", e);
        }
       
     
  }


  static createSegment(cl: Date, segmentStartHour: number, segmentStartMinute: number, durationInMinute: number, ch: Channel) {
    try {
      let tde = SFDataLogic.readTestData(segmentData);
      let oSegment = new Segment();
      if (tde) {
        let insertFieldNameValue: Map<string, Object> = SFDataLogic.getFieldValuesInObject(tde.fieldName, tde.fieldValue);
        let updateFieldNameValue: Map<string, Object> = SFDataLogic.getFieldValuesInObject(tde.updateFieldName, tde.updateFieldValue);
  
        insertFieldNameValue.set("Content__c", ch.getObjectId());
        insertFieldNameValue.set("Name", "Segment_Automation-" + SFDataLogic.getStringDateTime("MMddHHmmss"));
        let clStartTime: Date = cl
        clStartTime = setHours(clStartTime, segmentStartHour);
        clStartTime = setMinutes(clStartTime, segmentStartMinute);
        insertFieldNameValue.set("Start_Time__c", clStartTime);
        let clEndTime: Date = cl
        clEndTime = setHours(clEndTime, segmentStartHour);
        clEndTime = setMinutes(clEndTime, segmentStartMinute);
        clEndTime = add(clEndTime, { minutes: durationInMinute });
        insertFieldNameValue.set("End_Time__c", clEndTime);
        // ((Calendar) insertFieldNameValue.get("Start_Time__c")).getTime();
        // ((Calendar) insertFieldNameValue.get("End_Time__c")).getTime();
        oSegment.setObjectApi(tde.apiName);
        //@ts-ignore
        oSegment.setObjectName(Object.fromEntries(insertFieldNameValue).Name);
        oSegment.setFieldsDetails(insertFieldNameValue);
        oSegment.setFieldsDetailsToBeUpdated(updateFieldNameValue);
        oSegment.setCalendar(clEndTime);
         // @ts-ignore
        oSegment.setObjectId(SFDataLogic.insertUpdateDataIntoSFPlateform(Object.fromEntries(insertFieldNameValue), oSegment.objectName));
        return oSegment;
         
        } }catch (e) {
          console.log("Error occured while creating Segment ");
        }
  
    }
  
  static createChannel(cl: Date, channelStartHour: number, channelDurationInHour: number, dayOfChannel: string) {
    try {
      let tde = SFDataLogic.readTestData(channelData);
      let oChannel = new Channel();
      if (tde) {
        let insertFieldNameValue: Map<string, Object> = SFDataLogic.getFieldValuesInObject(tde.fieldName, tde.fieldValue);
        let updateFieldNameValue: Map<string, Object> = SFDataLogic.getFieldValuesInObject(tde.updateFieldName, tde.updateFieldValue);
  
        insertFieldNameValue.set("Name", "Channel_Automation-" + SFDataLogic.getStringDateTime("MMddHHmmss"));
        insertFieldNameValue.set("Day__c", dayOfChannel);
  
        let clJoinTime: Date = cl
        clJoinTime = setHours(clJoinTime, channelStartHour);
        clJoinTime = add(clJoinTime, { days: (parseInt(dayOfChannel) - 1) });
  
        insertFieldNameValue.set("Join_Time__c", clJoinTime);
  
        let clEndTime: Date = cl
        clEndTime = add(clEndTime, { days: (parseInt(dayOfChannel) - 1) });
        clEndTime = add(clEndTime, { hours: channelDurationInHour });
  
        insertFieldNameValue.set("End_Time__c", clEndTime);
  
        // ((Calendar) insertFieldNameValue.get("Join_Time__c")).getTime();
        // ((Calendar) insertFieldNameValue.get("End_Time__c")).getTime();
  
        oChannel.setObjectApi(tde.apiName);
        //@ts-ignore
        oChannel.setObjectName(Object.fromEntries(insertFieldNameValue).Name)
  
          //@ts-ignore
          oChannel.setObjectId(SFDataLogic.insertUpdateDataIntoSFPlateform(Object.fromEntries(insertFieldNameValue), oChannel.objectName));
          oChannel.setFieldsDetails(insertFieldNameValue);
          oChannel.setFieldsDetailsToBeUpdated(updateFieldNameValue);
          oChannel.setCalendar(clJoinTime);
          return oChannel;
        } }
        catch (e) {
          console.log("Error occured while creating Channel", e);
        }
       
  }

  static assignChannelToEvent(ch: Channel, ev: Events, featuredEvent: boolean, order: number, status: string) {
    try {
    let insertFieldNameValue: Map<string, object> = new Map();
    insertFieldNameValue.set("Content__c", [ch.getObjectId().toString()]);
    insertFieldNameValue.set("Content_Group__c", [ev.getObjectId().toString()]);
    insertFieldNameValue.set("Featured_Content__c", [featuredEvent]);
    insertFieldNameValue.set("Order__c", [order]);
    insertFieldNameValue.set("Status__c", [status]);
    insertFieldNameValue.set("Publish_Date__c", SFDataLogic.getCalendarTimeInstance(8, 0));

    ch.getFieldsDetails().set("Featured_Content__c", featuredEvent);
    ch.getFieldsDetails().set("Order__c", order);
    ch.getFieldsDetails().set("Status__c", status);
    ch.getFieldsDetails().set("Publish_Date__c", SFDataLogic.getCalendarTimeInstance(8, 0));

    
      //@ts-ignore
      SFDataLogic.insertUpdateDataIntoSFPlateform(insertFieldNameValue, ch.objectName);
    } catch (e) {
      console.log("Error occured while assigning Channel to Event", e);
    }
    ev.getChannelList().push(ch);
  }

  static createSeries(seriesStartDayFromToday: number, seriesEndDayFromToday: number) {
    try {
      let tde = SFDataLogic.readTestData(seriesData);
  
      let oSeries : Series = new Series();
      if (tde) {
        let insertFieldNameValue: Map<string, object> = SFDataLogic.getFieldValuesInObject(tde.fieldName,
          tde.fieldValue);
        let updateFieldNameValue: Map<string, object> = SFDataLogic
          .getFieldValuesInObject(tde.updateFieldName, tde.updateFieldValue);
        //
        insertFieldNameValue.set("Name", ["Series_Automation-" + SFDataLogic.getStringDateTime("MMddHHmm")]);
  
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
          SFDataLogic.insertUpdateDataIntoSFPlateform(Object.fromEntries(insertFieldNameValue),oSeries.objectName);
          return oSeries;
        }}
        catch (e) {
          console.log(e)
        }
  }



  static createEpisode() {
    try {
      let tde = SFDataLogic.readTestData(episodeData);
      let oEpisode : Episode = new Episode()
  
      if (tde) {
  
        let insertFieldNameValue: Map<string, object> = SFDataLogic.getFieldValuesInObject(tde.fieldName,
          tde.fieldValue);
        let updateFieldNameValue: Map<string, object> = SFDataLogic.getFieldValuesInObject(tde.updateFieldName, tde.updateFieldValue);
  
        insertFieldNameValue.set("Name", ["Episode_Automation-" + SFDataLogic.getStringDateTime("MMddHHmmss")]);
  
        oEpisode.setObjectApi(tde.apiName);
        //@ts-ignore
        oEpisode.setObjectName(Object.fromEntries(insertFieldNameValue).Name)
        oEpisode.setFieldsDetails(insertFieldNameValue);
        oEpisode.setFieldsDetailsToBeUpdated(updateFieldNameValue);
        
          // @ts-ignore
          oEpisode.setObjectId(SFDataLogic.insertUpdateDataIntoSFPlateform(Object.fromEntries(insertFieldNameValue), oEpisode.objectName));
          return oEpisode
        }}  
        catch (e) {
          console.log("Error occured while creating Episode", e);
        }
       
  }


  static assignEpisodeToSeries(ep: Episode, sr: Series, featuredEvent: boolean, order: number, status: string) {
    try {
    let insertFieldNameValue: Map<string, object> = new Map()
    insertFieldNameValue.set("Content__c", [ep.objectId]);
    insertFieldNameValue.set("Content_Group__c", [sr.objectId]);
    insertFieldNameValue.set("Featured_Content__c", [featuredEvent]);
    insertFieldNameValue.set("Order__c", [order]);
    insertFieldNameValue.set("Status__c", [status]);
    insertFieldNameValue.set("Publish_Date__c", SFDataLogic.getCalendarTimeInstance(8, 0));

    ep.getFieldsDetails().set("Featured_Content__c", featuredEvent);
    ep.getFieldsDetails().set("Order__c", order);
    ep.getFieldsDetails().set("Status__c", status);
    ep.getFieldsDetails().set("Publish_Date__c", SFDataLogic.getCalendarTimeInstance(8, 0));

   
      SFDataLogic.insertUpdateDataIntoSFPlateform(Object.fromEntries(insertFieldNameValue), "series");
    } catch (e) {
      console.log("Error occured while assigning Episode to Series", e);
    }
    sr.getEpisodeList().push(ep);
  }

  static assignSeriesToEvent(ev: Events, sr: Series) {
    try {
    let insertFieldNameValue: Map<string, object> = new Map()
    insertFieldNameValue.set("Parent_Content_Group__c", [ev.objectId]);
    insertFieldNameValue.set("Child_Content_Group__c", [sr.objectId]);

    
      SFDataLogic.insertUpdateDataIntoSFPlateform(Object.fromEntries(insertFieldNameValue), "series");
    } catch (e) {
      console.log("Error occured while assigning Series to Episode", e);
    }
    ev.getSeriesList().push(sr);
  }

  static insertUpdateDataIntoSFPlateform(dataMap: Map_Object, name: string) {

    let conn = SFDataLogic.setUpConnection('username', 'password');

    // @ts-ignore

    conn.sobject(name).create((dataMap), function (err, ret) {
      if (err || !ret.success) { return console.error(err, ret); }
      console.log("Created record id : " + ret.id);
      // ...
    });
  }

  static deleteRecord(id: string, name: string) {

    let conn = SFDataLogic.setUpConnection('username', 'password');
    conn.sobject(name).destroy(id, function (err, ret) {
      if (err || !ret.success) { return console.error(err, ret); }
      console.log('Deleted Successfully : ' + ret.id);
    });
  }

  static setUpConnection(userName: string, password: string) {
    let endpoint: string = "https://test.salesforce.com/services/Soap/u/28.0";
    let connection = new jsforce.Connection({
      instanceUrl: "https://test.salesforce.com/services/Soap/u/28.0"
    });
    connection.login(userName, password)
    return connection;
  }
}
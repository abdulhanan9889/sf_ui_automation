import Episode from "../entities/Episodes";
import Series from "../entities/Series";
import Channel from "../entities/Channel";
import { Map_Object } from "../entities/types";
import SFDataLogic from "./testDataLogic"
import Events from "../entities/Events"

import Segment from "../entities/Segment";
import { getHours, getMinutes } from "date-fns";


export default class SFDataInsertion {
	// WORK IN PROGRESS
	static createEventFlow(testData: SFDataLogic, eventStartDayFromToday: number, eventstarthour: number, eventEndDayFromToday: number, eventEndHour: number,
		numberOfChannels: number, channelDays: number, numberofSegments: number, timeOfSegmentsInMinutes: number, numberOfSeries: number, numberOfEpiPerSeries: number
		, channelStartHour: number, channelDurationInHours: number, dayOfChannel: number, segmentStartHour: number, segmentStartMin: number,
		seriesStartFromToday: number, seriesEndFromTaday: number) {
		console.log("Create an Event with a channel for 3days having 7 segments and 2 series with 5 episodes");
		// create Event
		// @ts-ignore
		let oEvent: Events = testData.createEvent(eventStartDayFromToday, eventstarthour, eventEndDayFromToday, eventEndHour);

		SFDataInsertion.createChannelWithSegments(testData, segmentStartHour, segmentStartMin, channelStartHour, channelDurationInHours,
			dayOfChannel, oEvent, numberOfChannels, channelDays, numberofSegments, timeOfSegmentsInMinutes);
		// @ts-ignore
		SFDataInsertion.createSeriesWithEpisodes(testData, seriesStartFromToday, seriesEndFromTaday, numberOfSeries, numberOfEpiPerSeries, oEvent);

		// update the Event status to publish
		SFDataInsertion.updateEventStatus(oEvent, "Publish");

		// print the details
		console.log("Event is created, objectId is - " + oEvent.getObjectId() + ",and Name is -" + oEvent.getObjectName());

		return oEvent;
	}

	static async createChannelWithSegments(testData: SFDataLogic, segmentStartHour: number, segmentStartMin: number, channelStartHour: number
		, channelDurationInHours: number, dayOfChannel: number, oEvent: Events,
		noOfChannels: number, noOfDays: number, noOfSegments: number,
		timeDurationOfSegmentsInMinute: number) {
		for (let ch = 1; ch <= noOfChannels; ch++) {
			for (let i = 1; i <= noOfDays; i++) {
				// @ts-ignore
				let oChannel: Channel = await testData.createChannel(oEvent.calendar, channelStartHour, channelDurationInHours, dayOfChannel);
				let cal = oChannel.calendar;

				for (let j = 1; j <= noOfSegments; j++) {
					let oSegment = new Segment();
					if (j == 1)
						//@ts-ignore
						oSegment = await testData.createSegment(cal, segmentStartHour, segmentStartMin, timeDurationOfSegmentsInMinute, oChannel);
					else
						//@ts-ignore
						oSegment = await testData.createSegment(cal, getHours(cal),
							//@ts-ignore
							getMinutes(cal), timeDurationOfSegmentsInMinute, oChannel);
					cal = oSegment.calendar;
					//@ts-ignore
					cal.getTime();
					oChannel.getSegmentList().push(oSegment);
				}
				console.log("hererererer)")
				console.log(oChannel)
				await testData.assignChannelToEvent(oChannel, oEvent, false, i, "Publish");
			}
		}
	}


	static async createSeriesWithEpisodes(testData: SFDataLogic, seriesStartFromToday: number, seriesEndFromTaday: number, noOfSeries: number,
		noOfEpisodesPerSeries: number, noOfSpeakers: number, oEvent: Events, firstname: string, lastname: string, company: string, des: string) {
		{
			console.log("Create an Event with a channel for 3days having 7 segments and 2 series with 5 episodes");
			// @ts-ignore
			for (let i = 1; i <= noOfSeries; i++) {
				// @ts-ignore
				let oSeries: Series = await testData.createSeries(seriesStartFromToday, seriesEndFromTaday, "Coming Soon");
				for (let j = 1; j <= noOfEpisodesPerSeries; j++) {
					let oEpisode = await testData.createEpisode();

					for (let k = 1; k <= noOfSpeakers; k++) {
						await testData.createSpeaker(firstname, lastname, company, des)
						// @ts-ignore
						await testData.assignSpeakerToEpisode(oEpisode, testData.speakerId[k - 1])
					}
					// @ts-ignore
					await testData.assignEpisodeToSeries(oEpisode, oSeries, false, j, "Publish");

					//@ts-ignore

				}

				await SFDataInsertion.updateSeriesStatus(oSeries, "Publish");
				console.log(oEvent.objectId)
				await testData.assignSeriesToEvent(oEvent, oSeries);

			}
			await SFDataInsertion.updateEventStatus(oEvent, "Publish")

		}

	}

	public static async updateEventStatus(e: Events, Status: string) {
		let status: Object = { Publish_Status_c: Status }
		let type: string = e.objectApi
		let id: string = e.objectId
		await SFDataLogic.retrieveRecord(type, id)
		await SFDataLogic.updateRecord(type, id, status)
		await SFDataLogic.retrieveRecord(type, id)
		e.getFieldsDetails().set("Publish_Status__c", [Status])

	}

	public static async updateSeriesStatus(s: Series, Status: string) {
		let status: Object = { Publish_Status_c: Status }
		let type: string = s.objectApi
		let id: string = s.objectId
		await SFDataLogic.retrieveRecord(type, id)
		await SFDataLogic.updateRecord(type, id, status)
		await SFDataLogic.retrieveRecord(type, id)
		s.getFieldsDetails().set("Publish_Status__c", [Status])
	}

	static async createOriginalSeries(testData: SFDataLogic, numberOfEpisodes: number, numberOfSpeakers: number,
		firstname: string, lastname: string, company: string, des: string) {

		// @ts-ignore
		let oSeries: Series = await testData.createSeries(0, 3, "Coming Soon");
		console.log("Series is", oSeries)
		for (let j = 1; j <= numberOfEpisodes; j++) {
			// @ts-ignore
			let oEpisode: Episode = await testData.createEpisode();
			for (let i = 1; i <= numberOfSpeakers; i++) {
				await testData.createSpeaker(firstname, lastname, company, des)
				await testData.assignSpeakerToEpisode(oEpisode, testData.speakerId[i - 1], i - 1)
			}
			testData.assignEpisodeToSeries(oEpisode, oSeries, true, j, "Publish");
		}
		await SFDataInsertion.updateSeriesStatus(oSeries, "Publish");
		console.log(testData)
		return oSeries;
	}
	// static createEventFlowHavingSeriesWithEpisodes(noOfSeries: number, noOfEpisodesPerSeries: number, eventStartDayFromToday: number, eventStartHour: number, eventEndDayFromToday: number, eventEndHour: number) {
	// 	console.log("Create an Event with a channel for 3days having 7 segments and 2 series with 5 episodes");
	// 	// create Event
	// 	// @ts-ignore


	// 	// @ts-ignore
	// 	SFDataInsertion.createSeriesWithEpisodes(oEvent, noOfSeries, noOfEpisodesPerSeries);

	// 	// update the Event status to publish
	// 	SFDataInsertion.updateEventStatus(oEvent, "Publish");

	// 	// print the details
	// 	console.log("Event is created, objectId is - " + oEvent.getObjectId() + ",and Name is -" + oEvent.getObjectName());

	// 	return oEvent;
	// }
}

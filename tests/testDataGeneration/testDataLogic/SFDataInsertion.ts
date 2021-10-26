import Episode from "../entities/Episodes";
import Series from "../entities/Series";
import Channel from "../entities/Channel";
import { Map_Object } from "../entities/types";
import SFDataLogic from "./testDataLogic"
import Events from "../entities/Events"
import Segment from "../entities/Segment";
import { getHours, getMinutes } from "date-fns";

export class SFDataInsertion {

	static createEventFlow() {
		console.log("Create an Event with a channel for 3days having 7 segments and 2 series with 5 episodes");
		// create Event
		// @ts-ignore
		let oEvent: Events = SFDataLogic.createEvent(0, 7, 3, 22);

		SFDataInsertion.createChannelWithSegments(oEvent, 1, 3, 7, 30);
		// @ts-ignore
		SFDataInsertion.createSeriesWithEpisodes(oEvent, 2, 5);

		// update the Event status to publish
		SFDataInsertion.updateEventStatus(oEvent, "Publish");

		// print the details
		console.log("Event is created, objectId is - " + oEvent.getObjectId() + ",and Name is -" + oEvent.getObjectName());

		return oEvent;
	}

	static createChannelWithSegments(oEvent: Events, noOfChannels: number, noOfDays: number, noOfSegments: number,
		timeDurationOfSegmentsInMinute: number) {
		for (let ch = 1; ch <= noOfChannels; ch++) {
			for (let i = 1; i <= noOfDays; i++) {
				// @ts-ignore
				let oChannel: Channel = SFDataLogic.createChannel(oEvent.getCalendar(), 8, 14, i, "");
				let cal = oChannel.getCalendar();

				for (let j = 1; j <= noOfSegments; j++) {
					let oSegment = new Segment();
					if (j == 1)
						//@ts-ignore
						oSegment = SFDataLogic.createSegment(cal, 9, 0, timeDurationOfSegmentsInMinute, oChannel);
					else
						//@ts-ignore
						oSegment = SFDataLogic.createSegment(cal, getHours(cal),
							//@ts-ignore
							getMinutes(cal), timeDurationOfSegmentsInMinute, oChannel);
					cal = oSegment.getCalendar();
					//@ts-ignore
					cal.getTime();
					oChannel.getSegmentList().push(oSegment);
				}
				SFDataLogic.assignChannelToEvent(oChannel, oEvent, false, i, "Publish");
			}
		}
	}


	static createSeriesWithEpisodes(oEvent: Events, noOfSeries: number, noOfEpisodesPerSeries: number) {
		for (let i = 1; i <= noOfSeries; i++) {
			// @ts-ignore
			let oSeries: Series = SFDataLogic.createSeries(1, 4);

			for (let j = 0; j <= noOfEpisodesPerSeries; j++) {
				let oEpisode = SFDataLogic.createEpisode();
				// @ts-ignore
				SFDataLogic.assignEpisodeToSeries(oEpisode, oSeries, false, j, "Publish");
			}

			SFDataInsertion.updateSeriesStatus(oSeries, "Publish");
			SFDataLogic.assignSeriesToEvent(oEvent, oSeries);
		}
	}


	public static updateEventStatus(e: Episode, Status: string) {

		let dataMap: Map_Object = {}
		dataMap["Publish_Status__c"] = Status;

		try {
			SFDataLogic.insertUpdateDataIntoSFPlateform(dataMap, e.objectName);
			e.getFieldsDetails().set("Publish_Status__c", [Status])
		} catch (err) {
			console.log(err)
		}
		if (e) {
			;
		}
	}

	public static updateSeriesStatus(s: Series, Status: string) {

		let dataMap: Map_Object = {};

		dataMap["Publish_Status__c"] = Status;

		try {
			SFDataLogic.insertUpdateDataIntoSFPlateform(dataMap, s.objectName);
		} catch (e) {
			console.log(e)
		}

		s.getFieldsDetails().set("Publish_Status__c", [Status]);
	}

	static createOriginalSeries() {
		// Create a Series with 5 Episodes
		// @ts-ignore
		let oSeries: Series = SFDataLogic.createSeries(1, 4);

		for (let j = 0; j < 5; j++) {
			//@ts-ignore
			let oEpisode: Episode = SFDataLogic.createEpisode(username, password);
			SFDataLogic.assignEpisodeToSeries(oEpisode, oSeries, false, j, "Publish");
		}
		SFDataInsertion.updateSeriesStatus(oSeries, "Publish");
		return oSeries;
	}

	static createOriginalSeriesWithEpisodes(noOfSeries: number, noOfEpisodesPerSeries: number, seriesStartDayFromToday: number, seriesEndDayFromToday: number) {
		for (let i = 1; i <= noOfSeries; i++) {
			// @ts-ignore
			let oSeries: Series = SFDataLogic.createSeries(seriesStartDayFromToday, seriesEndDayFromToday);

			for (let j = 0; j <= noOfEpisodesPerSeries; j++) {
				// @ts-ignore
				let oEpisode: Episode = SFDataLogic.createEpisode();
				// @ts-ignore
				SFDataLogic.assignEpisodeToSeries(oEpisode, oSeries, false, j, "Publish");
			}
			SFDataInsertion.updateSeriesStatus(oSeries, "Publish");
			return oSeries;
		}
	}

	static createEventFlowHavingSeriesWithEpisodes(noOfSeries: number, noOfEpisodesPerSeries: number, eventStartDayFromToday: number, eventStartHour: number, eventEndDayFromToday: number, eventEndHour: number) {
		console.log("Create an Event with a channel for 3days having 7 segments and 2 series with 5 episodes");
		// create Event
		// @ts-ignore
		let oEvent: Events = SFDataLogic.createEvent(eventStartDayFromToday, eventStartHour, eventEndDayFromToday, eventEndHour);

		// @ts-ignore
		SFDataInsertion.createSeriesWithEpisodes(oEvent, noOfSeries, noOfEpisodesPerSeries);

		// update the Event status to publish
		SFDataInsertion.updateEventStatus(oEvent, "Publish");

		// print the details
		console.log("Event is created, objectId is - " + oEvent.getObjectId() + ",and Name is -" + oEvent.getObjectName());

		return oEvent;
	}
}

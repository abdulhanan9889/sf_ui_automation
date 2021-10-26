import Episode from "../entities/Episodes";
import Series from "../entities/Series";
import Channel from "../entities/Channel";
import { Map_Object } from "../entities/types";
import SFDataLogic from "../testDataLogic/testDataLogic"
import Events from "../entities/Events"
import Segment from "../entities/Segment";
import { getHours, getMinutes } from "date-fns";

export default class SFDataInsertion {

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

	static async createChannelWithSegments(oEvent: Events, noOfChannels: number, noOfDays: number, noOfSegments: number,
		timeDurationOfSegmentsInMinute: number) {
		for (let ch = 1; ch <= noOfChannels; ch++) {
			for (let i = 1; i <= noOfDays; i++) {
				// @ts-ignore
				let oChannel: Channel = await SFDataLogic.createChannel(oEvent.calendar, 8, 14, i, "");
				let cal = oChannel.calendar;

				for (let j = 1; j <= noOfSegments; j++) {
					let oSegment = new Segment();
					if (j == 1)
						//@ts-ignore
						oSegment = await SFDataLogic.createSegment(cal, 9, 0, timeDurationOfSegmentsInMinute, oChannel);
					else
						//@ts-ignore
						oSegment = await SFDataLogic.createSegment(cal, getHours(cal),
							//@ts-ignore
							getMinutes(cal), timeDurationOfSegmentsInMinute, oChannel);
					cal = oSegment.calendar;
					//@ts-ignore
					cal.getTime();
					oChannel.getSegmentList().push(oSegment);
				}
				console.log("hererererer)")
				console.log(oChannel)
				await SFDataLogic.assignChannelToEvent(oChannel, oEvent, false, i, "Publish");
			}
		}
	}


	static async createSeriesWithEpisodes(oEvent: Events, noOfSeries: number, noOfEpisodesPerSeries: number) {
		for (let i = 1; i <= noOfSeries; i++) {
			// @ts-ignore
			let oSeries: Series = await SFDataLogic.createSeries(1, 4,"Coming Soon");

			for (let j = 1; j <= noOfEpisodesPerSeries; j++) {
				let oEpisode = await SFDataLogic.createEpisode();
				// @ts-ignore
				await SFDataLogic.assignEpisodeToSeries(oEpisode, oSeries, false, j, "Publish");
				console.log("success")
			}

			await SFDataInsertion.updateSeriesStatus(oSeries, "Publish");
			await SFDataLogic.assignSeriesToEvent(oEvent, oSeries);
		}
	}


	public static async updateEventStatus(e: Events, Status: string) {
		let	status : Object= {Publish_Status_c : Status}
		let type:string = e.objectApi
		let id :string = e.objectId
		await SFDataLogic.retrieveRecord(type,id)
		await SFDataLogic.updateRecord(type,id,status)
		await SFDataLogic.retrieveRecord(type,id)
		e.getFieldsDetails().set("Publish_Status__c", [Status])
	
	}

	public static async updateSeriesStatus(s: Series, Status: string) {
		let	status : Object= {Publish_Status_c : Status}
		let type:string =s.objectApi
		let id :string = s.objectId
		await SFDataLogic.retrieveRecord(type,id)
		await SFDataLogic.updateRecord(type,id,status)
		await SFDataLogic.retrieveRecord(type,id)
		s.getFieldsDetails().set("Publish_Status__c", [Status])
	}

	static async createOriginalSeries() {
		// Create a Series with 5 Episodes
		// @ts-ignore
		let oSeries: Series = await SFDataLogic.createSeries(1, 4,"Coming Soon");
		console.log("Series is", oSeries)
		for (let j = 0; j < 1; j++) {
			//@ts-ignore
			let oEpisode: Episode = await SFDataLogic.createEpisode();
			SFDataLogic.assignEpisodeToSeries(oEpisode, oSeries, true, j, "Publish");
		}
		await SFDataInsertion.updateSeriesStatus(oSeries, "Publish");
		return oSeries;
	}
}

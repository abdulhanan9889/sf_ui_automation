import Series from "./Series";
import Episodes from "./Episodes"
import Segment from "./Segment";
import Channel from "./Channel";
import Events from "./Events";

export default class SFObjectSet {

	speakerId: Array<string>
	speakerName: Array<string>
	seriesNames: Array<string>
	episodeNames: Array<string>
	eventNames: Array<string>
	eventList: Array<Events>
	seriesList: Array<Series>
	episodeIDs: Array<string>
	seriesIDs: Array<string>
	episodeList: Array<Episodes>
	contentAssigmentIDs: Array<string>
	contentGroupAssignmentIDs: Array<string>
	eventIDs: Array<string>
	channelIDs: Array<string>
	channelNames: Array<string>
	segmentNames: Array<string>
	segmentIDs: Array<string>
	channelList: Array<Channel>
	segmentList: Array<Segment>
	speakerAssignment: Array<string>
	episodeOrder: Array<number>
	speakerList: Array<Map<string, string>>



	constructor() {
		this.speakerAssignment = []
		this.speakerId = []
		this.speakerName = []
		this.channelList = []
		this.segmentList = []
		this.seriesNames = []
		this.episodeNames = []
		this.eventList = []
		this.seriesList = []
		this.channelIDs = []
		this.channelNames = []
		this.segmentIDs = []
		this.contentGroupAssignmentIDs = []
		this.eventIDs = []
		this.segmentNames = []
		this.eventNames = []
		this.episodeIDs = []
		this.seriesIDs = []
		this.episodeList = []
		this.contentAssigmentIDs = []
		this.episodeOrder = []
		this.speakerList = []
	}
	setContentAssignmentIDs(id: string) {
		this.contentAssigmentIDs.push(id)
	}

	getEventList(): Array<Events> {
		return this.eventList;
	}

	getSeriesList(): Array<Series> {
		return this.seriesList;
	}
	setSpeakerName(name: string) {
		this.speakerName.push(name)
	}
	setSpeakerID(id: string) {
		this.speakerId.push(id)
	}
	setSpeakerAssignment(id: string) {
		this.speakerAssignment.push(id)
	}
	setSegmentList(seg: Segment) {
		this.segmentList.push(seg)
	}
	setChannelList(ch: Channel) {
		this.channelList.push(ch)
	}
	setEventList(ev: Events) {
		this.eventList.push(ev)
	}
	setChannelID(id: string) {
		this.channelIDs.push(id)

	}
	setEventID(id: string) {
		this.eventIDs.push(id)
	}
	setSegmentID(id: string) {
		this.segmentIDs.push(id)
	}
	setEventName(name: string) {
		this.eventNames.push(name)
	}
	setChannelName(name: string) {
		this.channelNames.push(name)
	}
	setSegmentName(name: string) {
		this.segmentNames.push(name)
	}
	setContentGroupAssignmentID(id: string) {
		this.contentGroupAssignmentIDs.push(id)
	}
	setEpisodeList(episode: Episodes) {
		this.episodeList.push(episode)
	}

	setSeriesList(series: Series) {
		this.seriesList.push(series)
	}
	setEpisodeNames(name: string) {
		this.episodeNames.push(name)
	}
	setSeriesNames(name: string) {
		this.seriesNames.push(name)
	}
	setEpisodeIDs(ID: string) {
		this.episodeIDs.push(ID)

	}
	setSeriesIDs(ID: string) {
		this.seriesIDs.push(ID)
	}

	setEpisodeOrder(order: number) {
		this.episodeOrder.push(order)
	}

	setSpeakerList(name: string, designation: string, company: string) {
		let m: Map<string, string> = new Map()
		m.set("Name", name)
		m.set("Designation", designation)
		m.set("Company", company)
		this.speakerList.push(m)
	}


}

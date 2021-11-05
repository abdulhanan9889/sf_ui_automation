import Series from "./Series";
import Episodes from "./Episodes"
import Segment from "./Segment";
import Channel from "./Channel";
import Events from "./Events";

export default class SFObjectSet {

     seriesNames : Array<string>
	 episodeNames : Array<string>
	 eventNames : Array<string>
	 eventList : Array<Events>
	 seriesList :Array<Series>
	 episodeIDs : Array <string>
	 seriesIDs : Array<string>
	 episodeList : Array<Episodes>
	 contentAssigmentIDs : Array<string>
	 contentGroupAssignmentIDs : Array<string>
	 eventIDs : Array <string>
	 channelIDs : Array<string>
	 channelNames: Array<string>
	 segmentNames : Array<string>
	 segmentIDs : Array<string>
	 channelList : Array<Channel>
	 segmentList : Array <Segment>
	
	 

	 constructor(){
		 this.channelList =[]
		 this.segmentList = []
		 this.seriesNames = ["abc"]
		 this.episodeNames = []
		 this.eventList = []
		 this.seriesList = []
		 this.channelIDs =[]
		 this.channelNames = []
		 this.segmentIDs =[]
		 this.contentGroupAssignmentIDs = []
		 this.eventIDs = []
		 this.segmentNames = []
		 this.eventNames = []
		 this.episodeIDs = []
		 this.seriesIDs = []
		 this.episodeList = []
		 this.contentAssigmentIDs = []
	 }
	 setContentAssignmentIDs(id:string){
		 this.contentAssigmentIDs.push(id)
	 }
	
	getEventList() : Array<Events>{
		return this.eventList;
	}

	getSeriesList() : Array<Series> {
		return this.seriesList;
	}
	setSegmentList(seg : Segment){
		this.segmentList.push(seg)
	}
	setChannelList(ch:Channel){
		this.channelList.push(ch)
	}
	setEventList(ev:Events)
	{
		this.eventList.push(ev)
	}
	setChannelID(id:string){
		this.channelIDs.push(id)

	}
	setEventID(id:string){
		this.eventIDs.push(id)
	}
	setSegmentID(id:string){
		this.segmentIDs.push(id)
	}
    setEventName(name:string){
		this.eventNames.push(name)
	}
	setChannelName(name:string){
		this.channelNames.push(name)
	}
	setSegmentName(name:string){
		this.segmentNames.push(name)
	}
	setContentGroupAssignmentID(id:string){
		this.contentGroupAssignmentIDs.push(id)
	}
	setEpisodeList(episode: Episodes) {
      this.episodeList.push(episode)
	}

	setSeriesList(series: Series)
	{
		this.seriesList.push(series)
	}
	setEpisodeNames(name: string)
	{
this.episodeNames.push(name)
	}
	setSeriesNames(name: string)
	{
      this.seriesNames.push(name)
	}
	setEpisodeIDs(ID:string)
	{
		this.episodeIDs.push(ID)

	}
	setSeriesIDs(ID:string)
	{
		this.seriesIDs.push(ID)
	}
	
	
	
}
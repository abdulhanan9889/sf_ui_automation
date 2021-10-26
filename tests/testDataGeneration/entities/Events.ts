import BaseObject from "./BaseObject"
import Channel from "./Channel";
import Series from "./Series";
import Speaker from "./Speaker";

export default class Events extends BaseObject {
	seriesList: Array<Series>
	channelList: Array<Channel>
	speakerList: Array<Speaker>
	constructor(){
        super()
        this.seriesList = []
		this.channelList = []
		this.speakerList = []
    }

	getSeriesList(): Array<Series> {
		return this.seriesList;
	}

	getChannelList(): Array<Channel> {
		return this.channelList;
	}

	getSpeakerList(): Array<Speaker> {
		return this.speakerList;
	}


	toString() {
		return "Event [seriesList=" + this.seriesList + ", channelList=" + this.channelList + ", speakerList=" + this.speakerList
			+ ", getSeriesList()=" + this.getSeriesList() + ", getChannelList()=" + this.getChannelList()
			+ ", getSpeakerList()=" + this.getSpeakerList() + ", getObjectName()=" + this.getObjectName() + ", getObjectId()="
			+ this.getObjectId() + ", getObjectApi()=" + this.getObjectApi() + ", getFieldsDetails()=" + this.getFieldsDetails()
			+ ", getFieldsDetailsToBeUpdated()=" + this.getFieldsDetailsToBeUpdated() + ", toString()="
			+ super.toString() + ", getClass()=" + Events + "]";
	}
}
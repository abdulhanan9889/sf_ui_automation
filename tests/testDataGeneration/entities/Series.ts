import Speaker from "./Speaker"
import Episode from "./Episodes"
import BaseObject from "./BaseObject"

export default class Series extends BaseObject {
	episodeList: Array<Episode>;
	speakerList: Array<Speaker>;

	constructor()
	{
		super()
		this.episodeList = []
		this.speakerList =[]
	}
	getEpisodeList(): Array<Episode> {
		return this.episodeList;
	}

	getSpeakerList(): Array<Speaker> {
		return this.speakerList;
	}

	toString() {
		return "Series [episodeList=" + this.episodeList + ", speakerList=" + this.speakerList + ", getEpisodeList()="
			+ this.getEpisodeList() + ", getSpeakerList()=" + this.getSpeakerList() + ", getObjectName()=" + this.getObjectName()
			+ ", getObjectId()=" + this.getObjectId() + ", getObjectApi()=" + this.getObjectApi() + ", getFieldsDetails()="
			+ this.getFieldsDetails() + ", getFieldsDetailsToBeUpdated()=" + this.getFieldsDetailsToBeUpdated()
			+ ", toString()=" + super.toString() + ", getClass()=" + Series.name +
			+ "]";
	}
}

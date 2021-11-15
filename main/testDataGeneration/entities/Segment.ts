import BaseObject from "./BaseObject"
import Speaker from "./Speaker";

export default class Segment extends BaseObject {

	speakerList: Array<Speaker>
	constructor(){
        super()
        this.speakerList = []
    }

	getSpeakerList(): Array<Speaker> {
		return this.speakerList;
	}

	toString() {
		return "Segment [speakerList=" + this.speakerList + ", getSpeakerList()=" + this.getSpeakerList() + ", getObjectName()="
			+ this.getObjectName() + ", getObjectId()=" + this.getObjectId() + ", getObjectApi()=" + this.getObjectApi()
			+ ", getFieldsDetails()=" + this.getFieldsDetails() + ", getFieldsDetailsToBeUpdated()="
			+ this.getFieldsDetailsToBeUpdated() + ", toString()=" + super.toString() + ", getClass()=" + Segment
			+ "]";
	}
}
import BaseObject from "./BaseObject"
import Speaker from "./Speaker"

export default class Episode extends BaseObject {

	speakerList: Array<Map<string, string>>;

	constructor() {
		super()
		this.speakerList = []
	}
	// getSpeakerList(): Array<Speaker> {
	// 	return this.speakerList;
	// }
	setSpeakerList(m: Map<string, string>) {
		this.speakerList.push(m)
	}

}
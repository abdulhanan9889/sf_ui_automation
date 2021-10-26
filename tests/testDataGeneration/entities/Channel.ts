import BaseObject from "./BaseObject";
import Segment from "./Segment"

export default class Channel extends BaseObject {
    segmentList: Array<Segment>
    constructor(){
        super()
        this.segmentList = []
    }

    getSegmentList(): Array<Segment> {
        return this.segmentList;
    }

    toString() {
        return `Channel [segmentList="${this.segmentList}", getSegmentList()="${this.getSegmentList()}", getObjectName()="${this.getObjectName()}", getObjectId()="${this.getObjectId()}", getObjectApi()="${this.getObjectApi()}", getFieldsDetails()="${this.getFieldsDetails()}", getFieldsDetailsToBeUpdated()="${this.getFieldsDetailsToBeUpdated()}", toString="${super.toString()}", getClass="${Channel}""]`
    }
}

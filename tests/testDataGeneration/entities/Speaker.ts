import BaseObject from "./BaseObject"

export default class Speaker extends BaseObject {
    toString() {
        return `Speaker [getObjectName()="${ this.getObjectName() }+ ", getObjectId()="${this.getObjectId() }", getObjectApi()="
         ${this.getObjectApi()  }", getFieldsDetails()="${this.getFieldsDetails() }", getFieldsDetailsToBeUpdated()="
            ${this.getFieldsDetailsToBeUpdated()} "]`;
    }
}
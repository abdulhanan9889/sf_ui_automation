import Calendar from "typescript-calendar-date"
import { Map_Object } from "./types";

export default class BaseObject {
	objectName: string;
	objectId: string;
	objectApi: string;
	calendar?: Date;
	fieldsDetails : Map_Object; //1-1 mapping of field values and field names
	#fieldsDetailsToBeUpdated?: Map_Object; 

	#graphQlAttributeMapping?:Map_Object;

	constructor(){
		this.objectName = ""
		this.objectApi = ""
		this.objectId =""
		this.fieldsDetails = {};
		this.#fieldsDetailsToBeUpdated = {}
		this.#graphQlAttributeMapping ={}
	}

	getObjectName(): string {
		return this.objectName;
	}

	setObjectName(objectName: string) {
		this.objectName = objectName;
	}

	getObjectId(): string {
		return this.objectId;
	}

	setObjectId(objectId: string) {
		this.objectId = objectId;
	}

	public getObjectApi(): string {
		return this.objectApi;
	}

	setObjectApi(objectApi: string) {
		this.objectApi = objectApi;
	}

	public getFieldsDetails() {
		return this.fieldsDetails;
	}

	public getCalendar(){
		return this.calendar;
	}

	setCalendar(calendar: Date) {
		this.calendar = calendar;
	}

	setFieldsDetails(fieldsDetails: Map<string, Object>) {
		this.fieldsDetails = fieldsDetails;
	}

	public getFieldsDetailsToBeUpdated() {
		return this.#fieldsDetailsToBeUpdated;
	}

	setFieldsDetailsToBeUpdated(fieldsDetailsToBeUpdated: Map<string, Object>) {
		this.#fieldsDetailsToBeUpdated = fieldsDetailsToBeUpdated;
	}

	public getGraphQlAttributeMapping() {
		return this.#graphQlAttributeMapping;
	}

	setGraphQlAttributeMapping(graphQlAttributeMapping: Map<string, string>) {
		this.#graphQlAttributeMapping = graphQlAttributeMapping;
	}

	toString() {
		return `BaseObject [objectName="${this.objectName}", objectId="${this.objectId}", objectApi="${this.objectApi}", fieldsDetails="${this.fieldsDetails}", fieldDetailsToBeUpdated="${this.#fieldsDetailsToBeUpdated}", graphQlAttributeMapping="${this.#graphQlAttributeMapping}"]`;
	}
}

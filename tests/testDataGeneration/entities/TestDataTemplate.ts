


export default class TestDataTemplate {

	apiName: string;

	objectType: string;

	objectId: string;

	fieldValue: Array<object>

	fieldName: Array<string>;

	updateFieldValue: Array<object>;

	updateFieldName: Array<string>;

	graphQLAttribute: Array<string>;

	constructor() {
		this.apiName = "";
		this.objectType = "";
		this.objectId = "";
		this.fieldName = [];
		this.fieldValue = [];
		this.updateFieldName = [];
		this.updateFieldValue = [];
		this.graphQLAttribute = []
	}

	getApiName(): string {
		return this.apiName;
	}

	setApiName(this: any, apiName: string) {
		this.apiName = apiName;
	}

	getObjectType(): string {
		return this.objectType;
	}

	setObjectType(objectType: string) {
		this.objectType = objectType;
	}

	getObjectId(): string {
		return this.objectId;
	}

	setObjectId(objectId: string) {
		this.objectId = objectId;
	}

	getFieldValue(): Array<object> {
		return this.fieldValue;
	}

	setFieldValue(fieldValue: Array<object>) {
		this.fieldValue = fieldValue;
	}

	getFieldName() {
		return this.fieldName;
	}

	setFieldName(this: any, fieldName: Array<string>) {
		this.fieldName = fieldName;
	}

	getUpdateFieldValue(): Array<object> {
		return this.updateFieldValue;
	}

	setUpdateFieldValue(updateFieldValue: Array<object>) {
		this.updateFieldValue = updateFieldValue;
	}

	getUpdateFieldName(): Array<string> {
		return this.updateFieldName;
	}

	setUpdateFieldName(updateFieldName: Array<string>) {
		this.updateFieldName = updateFieldName;
	}

	getGraphQLAttribute() {
		return this.graphQLAttribute;
	}

	setGraphQLAttribute(graphQLMapping: Array<string>) {
		this.graphQLAttribute = graphQLMapping;
	}

	toString() {
		return `TestDataTemplate [apiName="${ this.apiName} ", objectType="${this.objectType} ", objectId=" +${this.objectId}
			 ", fieldValue=" ${this.fieldValue }", fieldName=" ${this.fieldName} ", updateFieldValue=" ${this.updateFieldValue}
			 ", updateFieldName=" ${this.updateFieldName}", graphQLAttribute="${this.graphQLAttribute} ", getApiName()="
			 ${this.getApiName()}", getObjectType()="${this.getObjectType()  }", getObjectId()="${this.getObjectId()}
			 ", getFieldValue()="${this.getFieldValue() }", getFieldName()="${this.getFieldName()}
			 ", getUpdateFieldValue()="${this.getUpdateFieldValue() } ", getUpdateFieldName()="${this.getUpdateFieldName()}
			 ", getGraphQLAttribute()=" +${this.getGraphQLAttribute()}   "]`;
	}



}
import Series from "./Series";

export default class SalesForceObjectSet {

	 eventList : Array<Event>
	 seriesList :Array<Series>

	 constructor(){
		 this.eventList = []
		 this.seriesList = []
	 }
	
	getEventList() : Array<Event>{
		return this.eventList;
	}

	getSeriesList() : Array<Series> {
		return this.seriesList;
	}
	
	
	
	
}
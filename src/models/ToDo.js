export default class ToDo {
	constructor(title, description, date, stage) {
		this.title = title
		this.description = description
		this.date = date
		this.stage = stage
	}

	save = () => {
		// Save to LocalStorage
	}
}

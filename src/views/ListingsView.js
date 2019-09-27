import React, { Component } from 'react'
import { Typography, Box, Grid } from '@material-ui/core'
import SideBar from '../components/nav/sidebar/SideBar'
import ToDoDisplayView from './ToDoDisplayView'
import ToDo from '../models/ToDo'

export default class LisitingsView extends Component {
	constructor() {
		super()
		this.state = {
			allToDos: [
				new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
				new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
				new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
				new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
				new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
				new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
				new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo')
			],
			todos: [
				new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
				new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
				new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
				new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
				new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
				new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
				new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo')
			]
		}
	}
	render() {
		return (
			<React.Fragment>
				<Box m={5}>
					<Grid container spacing={5}>
						<Grid item xs={2}>
							<SideBar />
						</Grid>
						<Grid item xs={10}>
							<Typography paragraph color='textPrimary'>
								<ToDoDisplayView todos={this.state.todos} />
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</React.Fragment>
		)
	}
}

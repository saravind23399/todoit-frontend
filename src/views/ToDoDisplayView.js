import React, { Component } from 'react'
import { Typography, Box, Divider } from '@material-ui/core'
import ToDoDisplayGrid from '../components/ToDo/ToDoDisplayGrid'

class ToDoDisplayView extends Component {
	render() {
		return (
			<React.Fragment>
				<Box m={2}>
					<Typography variant='h2' componennt='h2' align='right'>
						Your Great Day is here !
					</Typography>
					<Box mt={2}>
						<Divider />
					</Box>
				</Box>
				<Box m={5}>
					<ToDoDisplayGrid todos={this.props.todos} />
				</Box>
			</React.Fragment>
		)
	}
}
export default ToDoDisplayView

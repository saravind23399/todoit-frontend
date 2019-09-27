import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import ToDoCard from './ToDoCard'

export default function ToDoDisplayGrid({ todos }) {
	if (todos.length === 0) {
		return (
			<React.Fragment>
				<Typography
					component='h5'
					variant='h5'
					color='error'
					align='center'>
					<span role='img' aria-label='SadEmoji'>
						😟
					</span>
					Uh Oh! No To-Dos yet.
				</Typography>
			</React.Fragment>
		)
	} else {
		return (
			<React.Fragment>
				<Grid container spacing={2} direction='column'>
					{todos.map((todo, idx) => (
						<Grid item>
							<ToDoCard
								title={todo.title}
								description={todo.description}
							/>
						</Grid>
					))}
				</Grid>
			</React.Fragment>
		)
	}
}

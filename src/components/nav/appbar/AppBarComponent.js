import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default function AppBarComponent() {
	return (
		<AppBar className='app-bar' position='static'>
			<Toolbar>
				<Typography variant='h6'>To-Do It</Typography>
			</Toolbar>
		</AppBar>
	)
}

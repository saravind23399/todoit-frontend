import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Hidden } from '@material-ui/core'

export default function SideBarItem({ IconComponent, primaryText }) {
	return (
		<ListItem button>
			<ListItemIcon>
				<IconComponent />
			</ListItemIcon>
			<Hidden mdDown>
				<ListItemText primary={primaryText} />
			</Hidden>
		</ListItem>
	)
}

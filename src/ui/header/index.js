import React from 'react'
import useStyles from './style';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header(){

	const classes = useStyles();

	return (
		<div className={classes.root} >
			 <AppBar position="fixed"  className={classes.appbar}>
				<Toolbar  className={classes.toolbar} >
					<MenuIcon   />
					<GitHubIcon  className={classes.githubAvatar} />
					<NotificationsNoneIcon className={classes.notificationIcon} />  
				</Toolbar>
			 </AppBar>
		</div>
	)
	
}
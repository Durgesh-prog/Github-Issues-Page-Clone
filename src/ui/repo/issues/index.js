import React,{useEffect} from 'react';
import useStyles from './style'
import {Input,Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import importer from '@utils/importer';
import FilterContainer from '@ui/repo/filter';

const LabelSvg = importer('../about/assets/tag.svg');
const MilestoneSvg = importer('../about/assets/milestone.svg');

import {useDispatch,useSelector} from 'react-redux'
import {getIssuesAction} from './actions'

export default function IssueContainer(){
	
	const classes = useStyles();
	const dispatch = useDispatch();
	const  allIssues = useSelector((state) => state.issueState);

	useEffect(() => {
		if(!allIssues.isLoading && allIssues.issues.length == 0){
			dispatch(getIssuesAction({page:allIssues.page,limit:5}))
		}
	},[])
	 
	
	
	return(
		<div className={classes.root} >
			<div className={classes.filterHeader} >
				<div className={classes.filterDiv} >
					<span className={classes.filterLabel} >Filters</span>
					 <div className={classes.search}>
						<div className={classes.searchIcon}>
							  <SearchIcon />
						</div>
						<InputBase
							  placeholder="Search…"
							  classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							  }}
							  inputProps={{ 'aria-label': 'search' }}
							/>
					  </div>
					  <div className={classes.filterTabs} >
						<span><img className={classes.repoIcon} src={LabelSvg} /></span>
						<span className={classes.author} >Label </span>
						<span><img className={classes.repoIcon} src={MilestoneSvg} /></span>
						<span className={classes.name} >Milestone</span>
					  </div>
					  <Button  className={classes.newissue} >New issue</Button>
				</div>
			</div>
			<FilterContainer />
		</div>
	)
}

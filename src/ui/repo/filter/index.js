import React,{useRef,useCallback} from 'react'
import useStyles from './style' 
import importer from '@utils/importer';
import {Grid,Paper} from '@material-ui/core';

const IssueOpenSvg = importer('../about/assets/issue-opened.svg');
const CheckSvg = importer('../about/assets/check.svg');

import {useDispatch,useSelector} from 'react-redux'

export default function FilterContainer(){
	
	const classes = useStyles();

	const dispatch = useDispatch();
	const allIssues = useSelector((state) => state.issueState)
	
		
	//For Infite Scrolling
	const observer = useRef();
	const lastIssueElementRef = useCallback(node => {
		if(allIssues.isLoading) return
		if(allIssues.failedCount > 3) return;
		if(observer.current) observer.current.disconnect()
		observer.current =  new IntersectionObserver(entries => {
			if(entries[0].isIntersecting){
				//update page Number
				dispatch({type:'GET_ISSUES',payload:{page:allIssues.page+1}})		
						
			}
		})
		if(node) observer.current.observe(node)
		console.log(node)
	},[allIssues.isLoading])
	


    // To change the loading icon behavior
	const loadingTextCSS = { display:allIssues?.isLoading ? "block" : "none" };
	
	
	return (
		<div className={classes.root} >
			<div className={classes.header} >
				<div className={classes.headerRight} >
					<span><img className={classes.Icon} src={IssueOpenSvg} /></span>
					<span className={classes.openIssue} >623 Open</span>
					<span><img className={classes.Icon} src={CheckSvg} /></span>
					<span className={classes.closedIssue} >10,143 Closed</span>
				</div>
				<div className={classes.headerLeft} >
					<Grid container  className={classes.tabs} spacing={3}>
						  <Grid item   >
							<Paper className={classes.paper} >							
								<span>Author</span>
							</Paper>
						  </Grid>
						   <Grid item   >
							<Paper className={classes.paper} >							
								<span>Label</span>
							</Paper>
						  </Grid>
						   <Grid item   >
							<Paper className={classes.paper} >							
								<span>Projects</span>
							</Paper>
						  </Grid>
						   <Grid item   >
							<Paper className={classes.paper} >							
								<span>Milestones</span>
							</Paper>
						  </Grid>
						   <Grid item   >
							<Paper className={classes.paper} >							
								<span>Assignee</span>
							</Paper>
						  </Grid>
						   <Grid item   >
							<Paper className={classes.paper} >							
								<span>Sort</span>
							</Paper>
						  </Grid>
					</Grid>
				</div>
			</div>
			<div>
				{allIssues?.issues?.map((user,index) => {
					if(index == allIssues.issues.length - 1){
						return (
							<div  ref={lastIssueElementRef} className={classes.cardBox} >
								<div  >
									<span  ><img className={classes.Icon} src={IssueOpenSvg} /></span>
								</div>
								<div className={classes.cardInfo} >
									<p>{user.title}</p>
									<small>#{user.number} {user.state != 'all'?user.state+'ed':null} by {user.user.login}</small>
								</div>
							</div>
						)
					}else{
						return (<div  className={classes.cardBox} >
								<div>
									<span><img className={classes.Icon} src={IssueOpenSvg} /></span>
								</div>
								<div className={classes.cardInfo} >
									<p>{user.title}</p>
									<small>#{user.number} {user.state != 'all'?user.state+'ed':null} by {user.user.login}</small>
								</div>
						</div>)
					}
					
				})}
			</div>
			{
				
				allIssues.isLoading?(
						<div className={classes.loadingCSS}	>
							<span style={loadingTextCSS}>Loading...</span>
						</div>
				):null
			}
			{
				(allIssues.error && allIssues.failedCount > 0)?(
					<p className={classes.error} >{allIssues.errorMsg}</p>
				):null
			}
			
		</div>
		
	)
}



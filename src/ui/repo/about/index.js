import React,{useState} from 'react';
import useStyles from './style'
import importer from '@utils/importer';
import {Hidden,Grid,Button,Box,MenuItem,Dialog,List,ListItem} from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import clsx from 'clsx';
import IssueContainer from '../issues';
//Redux
import {useDispatch, useSelector} from 'react-redux';
import { 
		toggleWatchAction,
		toggleStarAction,
		toggleForkAction
	}  from './actions'

//Importing SVG
const Octicon = importer('./assets/octicon.svg');
const Eye = importer('./assets/eye.svg');
const Star = importer('./assets/star.svg');
const FillStar = importer('./assets/star-fill.svg');
const Fork = importer('./assets/repo-forked.svg');

const CodeSvg = importer('./assets/code.svg');
const IssueOpenedSvg = importer('./assets/issue-opened.svg');
const PullRequestSvg = importer('./assets/git-pull-request.svg');
const PlaySvg = importer('./assets/play.svg');
const ProjectSvg = importer('./assets/project.svg');
const ShieldSvg = importer('./assets/shield.svg');
const GraphSvg = importer('./assets/graph.svg');
const DiscussionSvg = importer('./assets/comment-discussion.svg');

function AboutRepo(props) {

  const [showHiddenTabs,setHiddenTabs] = useState(false); 
  const [selctedTab,setTab] = useState('issues')
  const repoStats = useSelector((state) => state.repoStats);
  const dispatch = useDispatch();
  const classes = useStyles();	
  const { width } = props;
	
  return (
     <>
		<div className={classes.root} >
			<div className={classes.header} >
				<div>
					<h1 className={classes.outerContainer} >
						<span><img className={classes.repoIcon} src={Octicon} /></span>
						<span className={classes.author} >facebook </span>
						 <span  className={classes.slash} >/</span>
						<span className={classes.name} >react</span>
					</h1>
				</div>
				<ul className={classes.ul} >
					<li  >
						<span  onClick={() => dispatch(toggleWatchAction())}  className={classes.actionsTitle} >
							<img className={classes.repoIcon} src={Eye} /> 
							<span>Watch</span>
						</span>
						<span className={classes.actionsCount} >{repoStats.watchCount}</span>
					</li>
					<li>
						<span  onClick={() => dispatch(toggleStarAction())}  className={classes.actionsTitle} >
							<img className={classes.repoIcon} src={repoStats.isStarred?FillStar:Star} />
							<span>Star</span>
						</span>
						<span className={classes.actionsCount} >{repoStats.starCount}</span>
					</li>
					<li>
						<span  onClick={() => dispatch(toggleForkAction())}  className={classes.actionsTitle} >
							<img className={classes.repoIcon} src={Fork} />
							<span>Fork</span>
						</span>
						<span className={classes.actionsCount} >{repoStats.forkCount}</span>
					</li>
				</ul>
			</div>
			<Box className={classes.tabsContainer} >
				<Grid container  className={classes.tabs} spacing={3}>
					  <Grid item className={classes.code}   >
						<Paper className={clsx(classes.paper,selctedTab == 'code'?classes.selctedTab:null)} >							
							<span><img className={classes.tabIcon} src={CodeSvg} /> Code</span>
						</Paper>
					  </Grid>
					   <Grid item className={clsx(classes.issues,selctedTab == 'issues'?classes.selctedTab:null)}  >
						<Paper className={classes.paper}>
						     <span><img className={classes.tabIcon} src={IssueOpenedSvg} /> Issues</span>
						</Paper>
					  </Grid>
					   <Grid item className={clsx(classes.pullRe,selctedTab == 'pullrequest'?classes.selctedTab:null)} >
						<Paper className={classes.paper}>
						   <span><img className={classes.tabIcon} src={PullRequestSvg} /> Pull Requests</span>
						</Paper>
					  </Grid>
					   <Grid item className={clsx(classes.discuss,selctedTab == 'discussion'?classes.selctedTab:null)} >
						<Paper className={classes.paper}>
							<span><img className={classes.tabIcon} src={DiscussionSvg} /> Discussions</span>
						</Paper>
					  </Grid>
					   <Grid item className={clsx(classes.actions,selctedTab == 'actions'?classes.selctedTab:null)}>
						<Paper className={classes.paper}>
							<span><img className={classes.tabIcon} src={PlaySvg} /> Actions </span>
						</Paper>
					  </Grid>
					   <Grid item className={clsx(classes.projects,selctedTab == 'projects'?classes.selctedTab:null)} >
						<Paper className={classes.paper}>
							<span><img className={classes.tabIcon} src={ProjectSvg} /> Projects </span>
						</Paper>
					  </Grid>
					   <Grid item className={clsx(classes.security,selctedTab == 'security'?classes.selctedTab:null)} >
						<Paper className={classes.paper}>
							<span><img className={classes.tabIcon} src={ShieldSvg} /> Security </span>
						</Paper>
					  </Grid>
					   <Grid item className={clsx(classes.insights,selctedTab == 'insights'?classes.selctedTab:null)} >
						<Paper className={classes.paper}>
							<span><img className={classes.tabIcon} src={GraphSvg} /> Insights </span> 
						</Paper>
					  </Grid>
					  <Button  onClick={() => setHiddenTabs(!showHiddenTabs)} className={classes.hiddenTabs} >...</Button>
				</Grid>
				
			</Box>
			{showHiddenTabs?HiddenTabs(classes):null}
		</div>
		<Box>
			{selctedTab == 'issues'?<IssueContainer />:<p>Not Implemented</p>}
		</Box>
	 </>
  );
}

function HiddenTabs(classes){

	
	return (
		<Paper className={classes.dropDown} >
			<MenuItem  className={classes.mbCode} >Code</MenuItem>
			<MenuItem className={classes.mbIssue} >Issues</MenuItem>
			<MenuItem className={classes.mbPull} >Pull Requests</MenuItem>
			<MenuItem className={classes.mbDisc} >Discussions</MenuItem>
			<MenuItem className={classes.mbAction} >Actions</MenuItem>
			<MenuItem className={classes.mbProj} >Projects</MenuItem>
			<MenuItem className={classes.mbSec} >Security</MenuItem>
			<MenuItem className={classes.mbIns} >Insights</MenuItem>
		</Paper>
	)
}

export default withWidth()(AboutRepo);

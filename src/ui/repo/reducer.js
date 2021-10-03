import {TOGGLE_WATCH,TOGGLE_STAR,TOGGLE_FORK} from './about/actions';
import {GET_ISSUES,SET_ISSUES,ISSUES_FETCH_FAILED,ISSUES_FETCH_SUCCEEDED,ISSUES_FETCH_REQUEST,UPDATE_PAGE_NUMBER} from './issues/actions';

export const repoDefaultStats = {
	watchCount:0,
	isWatched:false,
	starCount:1,
	isStarred:false,
	forkCount:2,
	isForked:false
};

export const repoStatsReducer = (state = repoDefaultStats,{type,payload}) => {
	switch(type){
		//Toggle Stats
		case TOGGLE_WATCH:
			 let {watchCount} = state;
			 if(state.isWatched){
				 return {...state,watchCount:watchCount-1,isWatched:!state.isWatched}
			 }else{
				 return {...state,watchCount:watchCount+1,isWatched:!state.isWatched}
			 }
		case TOGGLE_STAR:
			 let {starCount} = state;
			 if(state.isStarred){
				 return {...state,starCount:starCount-1,isStarred:!state.isStarred}
			 }else{
				 return {...state,starCount:starCount+1,isStarred:!state.isStarred}
			 }
		case TOGGLE_FORK:
			 let {forkCount} = state;
			 if(state.isForked){
				 return {...state,forkCount:forkCount-1,isForked:!state.isForked}
			 }else{
				 return {...state,forkCount:forkCount+1,isForked:!state.isForked}
			 }
		
		default:
			return state;
	}
}


export const issuesState = {
	issues:[],
	isLoading:false,
	page:1,
	error:false,
	errorMsg:'',
	failedCount:0,
};

export const issuesReducer = (state = issuesState,{type,payload}) => {
	switch(type){
		case ISSUES_FETCH_REQUEST:
			return {...state,isLoading:true,error:false,errorMsg:'',page:payload.page,prevY:payload.prevY}
		case ISSUES_FETCH_SUCCEEDED:
			return  {...state,isLoading:false,issues:[...payload.issues]}
		case ISSUES_FETCH_FAILED:
			return  {...state,isLoading:false,error:true,errorMsg:payload.message,failedCount:state.failedCount?state.failedCount+1:1}

		default:
			return state
	}
}

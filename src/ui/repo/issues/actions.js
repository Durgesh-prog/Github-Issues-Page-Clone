//Action Types
export const GET_ISSUES = 'GET_ISSUES';
export const SET_ISSUES = 'SET_ISSUES';
export const UPDATE_PAGE_NUMBER = 'UPDATE_PAGE_NUMBER';
export const ISSUES_FETCH_SUCCEEDED = 'ISSUES_FETCH_SUCCEEDED';
export const ISSUES_FETCH_FAILED = 'ISSUES_FETCH_FAILED';
export const ISSUES_FETCH_REQUEST = 'ISSUES_FETCH_REQUEST';

//Action Creators
export const getIssuesAction = (data) => { 
		
		const {page,limit} = data;
		
		return {
			type:GET_ISSUES,
			payload:{page,limit}
	}
}

export const setIssuesAction = (data) => { 
		return {
			type:SET_ISSUES,
			payload:{}
	}
}


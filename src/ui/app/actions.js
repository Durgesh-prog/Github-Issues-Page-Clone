//Action Types
export const CLEAR_PAGE_TITLE = 'CLEAR_PAGE_TITLE';
export const SET_PAGE_TITLE = 'SET_PAGE_TITLE';

//Action Creators
export const clearPageTitle = (data) => { 
		return {
			type:CLEAR_PAGE_TITLE,
			payload:{}
	}
}

export const setPageTitle = (data) => { 
		return {
			type:SET_PAGE_TITLE,
			payload:data
	}
}
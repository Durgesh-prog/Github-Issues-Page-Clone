//Action Types
export const TOGGLE_WATCH = 'TOGGLE_WATCH';
export const TOGGLE_STAR = 'TOGGLE_STAR';
export const TOGGLE_FORK = "TOGGLE_FORK"
	
//Action Creators
export const toggleWatchAction = (data) => { 
		return {
			type:TOGGLE_WATCH,
			payload:{}
	}
}

export const toggleStarAction = (data) => { 
		return {
			type:TOGGLE_STAR,
			payload:{}
	}
}

export const toggleForkAction = (data) => { 
		return {
			type:TOGGLE_FORK,
			payload:{}
	}
}

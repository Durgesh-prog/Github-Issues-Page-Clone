import  axios from 'axios';

export default function getIssues({page,limit=5}){
	console.log('p',page,limit)
	return axios({
		method:'get',
		url:' https://api.github.com/repos/facebook/react/issues',
		params:{'page':1,'per_page':limit*page}
	})
}
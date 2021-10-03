import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import getIssues from '@api/Issues'

// worker Saga: will be fired on ISSUE_FETCH_REQUESTED actions
function* fetchIssues(action) {
   try {
	  yield put({type: "ISSUES_FETCH_REQUEST",payload:action.payload});
      const response = yield call(getIssues, action.payload);
	  console.log(response);
	  const {data} = response;
      yield put({type: "ISSUES_FETCH_SUCCEEDED",payload:{ issues: data}});
   } catch (e) {
	  console.log(e);
      yield put({type: "ISSUES_FETCH_FAILED", payload:{message: e.message}});
   }
}

function* mySaga() {
  console.log('Saga Called')
  yield takeLatest('GET_ISSUES', fetchIssues);
 
}

export default mySaga;
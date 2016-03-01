import {List, Map, fromJS} from 'immutable';
import uuid from 'node-uuid'

const initial_state = fromJS({ suites: [] });

export default function reducer(state = initial_state, action) {

  let obj = state.toJS();

  switch (action.type) {
  case 'SET_STATE':
  case 'NEW_SUITE':
    let newSuite = { id: uuid.v4() };
	obj.suites.push(newSuite);
    break;
  case 'LOAD_SUITE':
    let suiteIndex;
    obj.suites.forEach(function(s,i) {
	  if(s.id === action.id) suiteIndex = i
    });
	obj.suiteIndex = suiteIndex;
    break;
  case 'UPDATE_SUITE_NAME':
    obj.suites[obj.suiteIndex].name = action.name;
    break;

  //case 'DELETE_SUITE':
  //case 'LOAD_CONTAINER':
  //case 'UPDATE_CONTAINER_NAME':
  //case 'DELETE_CONTAINER':
  //case 'NEW_LINK':
  //case 'UPDATE_LINK_SOURCE':
  //case 'UPDATE_LINK_ALIAS':
  //case 'DELETE_LINK':
  }
console.log('BAS:' );
console.log( obj );

  return fromJS(obj);
}


import {List, Map, fromJS} from 'immutable';
import uuid from 'node-uuid'

const initial_state = fromJS({ suites: [] });

export default function reducer(state = initial_state, action) {

  let obj = state.toJS();

  let newContainer = { id: uuid.v4(), name: '--', links: [] };
  let newSuite = { id: uuid.v4(), containers: [newContainer] };

  switch (action.type) {
  case 'SET_STATE':
  case 'NEW_SUITE':
	obj.suites.push(newSuite);
    break;
  case 'LOAD_SUITE':
    let suiteIndex;
    obj.suites.forEach(function(s,i) {
	  if(s.id === action.id) suiteIndex = i
    });
	obj.containerIndex = 0;
	obj.suiteIndex = suiteIndex;
    break;
  case 'UPDATE_SUITE_NAME':
    obj.suites[obj.suiteIndex].name = action.name;
    break;
  //case 'DELETE_SUITE':
  case 'LOAD_CONTAINER':
    let containerIndex;
    obj.suites[obj.suiteIndex].containers.forEach(function(c,i) {
	  if(c.id === action.id) containerIndex = i
    });
	obj.containerIndex = containerIndex;
    break;
  case 'UPDATE_CONTAINER_NAME':
    obj.suites[obj.suiteIndex].containers[obj.containerIndex].name = action.name;
    break;
  //case 'DELETE_CONTAINER':
  case 'NEW_LINK':
    obj.suites[obj.suiteIndex].containers.push(newContainer);
    obj.suites[obj.suiteIndex].containers[obj.containerIndex].links.push({id: newContainer.id});
    break;
  //case 'UPDATE_LINK_SOURCE':
  //case 'UPDATE_LINK_ALIAS':
  //case 'DELETE_LINK':
  }

console.log('REDUCER RETURNS:' );
console.log( obj );

  return fromJS(obj);
}


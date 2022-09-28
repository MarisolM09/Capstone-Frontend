import { combineReducers } from 'redux';

const user = (state = null) => state


const hikes = (state = [], action) => {
    switch (action.type) {
      case "ADD_HIKE":
        return [...state, action.value];
      case "REMOVE_HIKE":
        let newState = [...state];
        newState.splice(action.value, 1);
        return newState;
      default:
        return state;
    }
  };

export default combineReducers({ user, hikes })
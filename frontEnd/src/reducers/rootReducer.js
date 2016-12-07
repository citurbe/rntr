import { combineReducers } from 'redux'

function user(state={}, action) {
  switch(action.type) {
    case 'LOG_IN':
      return {userID: action.payload.user_id, userEmail: action.payload.user_email, destination: action.payload.destination, commute: action.payload.commute, schools: action.payload.schools, safety: action.payload.safety, amenities: action.payload.amenities, category_1: action.payload.category_1, category_2: action.payload.category_2, category_3: action.payload.category_3}
    case 'UPDATE_PREFERENCES':
    console.log(action.payload)
      return Object.assign({}, state,{userID: action.payload.user_id, destination: action.payload.destination, commute: action.payload.commute, schools: action.payload.schools, safety: action.payload.safety, amenities: action.payload.amenities})
    case 'LOG_OUT':
      return {};
    default:
      return state;
  }
}

function apartment(state={}, action) {
  switch(action.type) {
    case 'SHOW_APT':
      return action.payload
    case 'LOG_OUT':
      return {};
    default:
      return state;
  }
}
<<<<<<< HEAD

function savedSearches(state=[], action) {
  switch(action.type) {
    default:
      return state;
  }
}
const rootReducer = combineReducers({user, apartment, savedSearches})
=======
const rootReducer = combineReducers({user, apartment})
>>>>>>> master
export default rootReducer

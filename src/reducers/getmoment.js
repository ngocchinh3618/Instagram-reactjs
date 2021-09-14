import * as actionTypes from "../store/actiontypes";
import DataMoment from "../data/card-moment.json"

const initialState = {
  data: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETMOMENT:
      state = {... state, data: DataMoment}
      console.log("hihi", state);
      return state
    
    default:
      return state
  }
}

export default reducer;
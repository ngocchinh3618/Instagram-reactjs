import * as actionTypes from "../store/actiontypes";
import dataSuggestions from "../data/card-suggestions.json"

const initialState = {
  data: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETDATASUGGESTIONS:
      state = {... state, data: dataSuggestions}
      console.log("GETDATASUGGESTIONS", state);
      return state
    
    default:
      return state
  }
}

export default reducer;
import * as actionTypes from "../store/actiontypes";
import DataCardMain from "../data/card-main.json"

const initialState = {
  data:[]
}
const reducer = (state = initialState, action) =>{
  switch (action.type) {
    case actionTypes.GETDATA:
      state = {...state,data:DataCardMain}
      return state
    default:
      return state
  }
}
export default reducer;
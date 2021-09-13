import * as actionTypes from "../store/actiontypes";
import DataCardMain from "../data/card-main.json";

const initialState = {
  data: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETDATA:
      state = { ...state, data: DataCardMain };
      return state;
    case actionTypes.LIKECHANGE:
      console.log(action);
      console.log(DataCardMain);
      const afterLike = state.data.map((item) =>
        item.id == action.id ? { ...item, liked: !item.liked } : item
      );
      console.log("object", afterLike);
      return { ...state, data: afterLike };
    default:
      return state;
  }
};
export default reducer;

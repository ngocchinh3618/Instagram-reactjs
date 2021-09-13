import * as actionTypes from "../store/actiontypes";
import DataUser from "../data/users.json";

const initialState = localStorage.getItem("user") != null ? {username: localStorage.getItem("user")} : {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      const newUser = DataUser.filter(
        (item) => item.username === action.username
      );
      if (newUser.length > 0) {
        if ((newUser[0].password = action.password)) {
          localStorage.setItem("user", newUser[0].username);
          window.location.reload();
          return {
            ...state,
            username: newUser[0].username
          }
        } else {
          alert("sai password");
        }
      } else {
        alert("Failed");
      }
      console.log(action.username, action.password);
      return state;
    case actionTypes.LOGOUT:
      console.log(action.username);
      if (localStorage.getItem("user") != null) {
        localStorage.removeItem("user", action.username);
        window.location.assign("http://localhost:3000/");
      } else {
        return;
      }
  }
  return state;
};

export default reducer;

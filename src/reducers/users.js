import * as actionTypes from  "../store/actiontypes" ;
import DataUser from "../data/users.json";
const initialState = {
  users:{
    username:"",
    password:""
  }

};
const reducer = (state = initialState, action) =>{
  // switch(action.type) {
  //   case  actionTypes.INCREMENT :
  //     const newState = hihihiObject.assign({}, state);
  //     newState.counter = state.counter + 1;
  //     return newState;
    
  //   case actionTypes.DECREMENT:
  //     return {
  //       ...state,
  //       counter: state.counter - 1
  //     }
    
  //   case  actionTypes.ADD :
  //     return {
  //       ...state,
  //       counter: state.counter + action.value
  //     }
  //   case  actionTypes.SUBTRACT :
  //     return {
  //       ...state,
  //       counter: state.counter - action.value
  //     }
  // }
  // return state;

  switch (action.type) {
    case actionTypes.LOGIN:
      const newUser = DataUser.filter(item => item.username === action.username);
      if(newUser.length>0){
        
        if(newUser[0].password = action.password){
          alert("success")
        }
        else{
          alert("sai password")
        }

      }
      else{
        alert("Failed")
      }
    console.log(action.username, action.password);
    return state;

  
    
  }
  return state;
}

export default reducer;



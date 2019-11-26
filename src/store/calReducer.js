import { CAL_RESULT, EXPRESSION, CLEAR_ALL, BACKSPACE } from "./resultType";

const intialState = {
  result: 0,
  expres: "Display"
};

const calReducer = (state = intialState, action) => {
  switch (action.type) {
    case CAL_RESULT:
        let ans;
        try {
            ans = eval(state.expres) 
        } catch (error) {
            ans = "Check Your Expression!"
        }
        
      return {
        ...state,
        result: ans,
        express: ""
      };
    case EXPRESSION:
        let currDispaly = state.expres;
        if(currDispaly === 'Display') currDispaly = action.payload;
        else currDispaly+=action.payload;
      return {
        ...state,
        expres: currDispaly,
        result: NaN
      };
    case CLEAR_ALL:
      return {
        ...state,
        result: 0,
        expres: "Display"
      };
    case BACKSPACE:
      return {
        ...state,
        expres: state.expres.slice(0, -1)
      };
    default:
      return state;
  }
};

export default calReducer;

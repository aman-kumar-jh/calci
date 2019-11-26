import { CAL_RESULT, EXPRESSION, CLEAR_ALL, BACKSPACE } from "./resultType.js";

export const result = () => {
  return {
    type: CAL_RESULT
  };
};

export const expression = num => {
  return {
    type: EXPRESSION,
    payload: num
  };
};

export const clearAll = num => {
  return {
    type: CLEAR_ALL,
    payload: num
  };
};

export const backspace = () => {
  return {
    type: BACKSPACE
  };
};

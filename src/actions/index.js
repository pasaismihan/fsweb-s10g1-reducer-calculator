export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_SAVE = "MEMORY_SAVE";
export const MEMORY_TOTAL = "MEMORY_TOTAL";

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};
export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};
export const memorySave = () => {
  return { type: MEMORY_SAVE };
};
export const memoryTotal = () => {
  return { type: MEMORY_TOTAL };
};

export const createAction = (actionName, callback) => {
  const actionCreator = (data) => ({
    type: actionName,
    payload: callback ? callback(data) : data,
  });

  actionCreator.toString = () => actionName.toString();
  return actionCreator;
};

export const createReducer =
  (mapOfHandlers, initialState) =>
  (state = initialState, action) => {
    const handler = mapOfHandlers[action.type];
    return handler ? handler(state, action) : state;
  };

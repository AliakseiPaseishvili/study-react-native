import { createReducer } from "../../service/reduxService";
import { saveScreenName } from "./StatusBar.actions";
import { MENU } from "../../config/navigation.constants";

const initialState = {
  screenName: MENU,
};

export default createReducer(
  {
    [saveScreenName]: (state, { payload }) => ({
      ...state,
      screenName: payload,
    }),
  },
  initialState
);

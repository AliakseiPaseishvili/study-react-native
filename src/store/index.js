import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import statusBar from "../components/StatusBar/StatusBar.reducer";

const reducers = combineReducers({ statusBar });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default configureStore = () => {
  return createStore(reducers, composeEnhancers(applyMiddleware()));
};

import { createStore } from "redux";
// import logger from "redux-logger";
// applyMiddleware(logger)
import rootReducer from "./root-reducer";

const store = createStore(rootReducer);

export default store
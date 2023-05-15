import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"; //redux
import { combineReducers, createStore } from "redux"; //deprecated warning because wants us to use redux toolkit

import { heroPosX, heroPosY } from "./redux/heroPosition";
import { staticRectangles } from "./redux/staticRectangles";
import { landed } from "./redux/landed";
//combines reducers, to enable use of multiple reducers
const rootReducer = combineReducers({
  heroPosX,
  heroPosY,
  staticRectangles,
  landed,
});

//redux boilerplate
const store = createStore(
  rootReducer,
  window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__()
);
//redux devtools extension adds redux devtoools to the browser
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //<Provider> </Provider> is part of redux
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import {createeStore, applyMidlleware } from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'
import thunk from 'redux-thunk'




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

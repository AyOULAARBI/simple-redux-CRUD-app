import { configureStore } from "@reduxjs/toolkit";
import stgReducer from './reducer'


const store = configureStore({reducer:stgReducer})

export default store;
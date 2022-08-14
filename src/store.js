import { configureStore } from "@reduxjs/toolkit";
import patientReducer from './slices/patients';

const reducer = {
    patients: patientReducer
};

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;
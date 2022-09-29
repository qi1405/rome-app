import { configureStore } from "@reduxjs/toolkit";
import patientReducer from './slices/patients';
import studyReducer from './slices/studies';

const reducer = {
    patients: patientReducer,
    studies: studyReducer,
};

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;
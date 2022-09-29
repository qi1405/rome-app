import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import StudyDataService from '../services/PatientService';

const initialState = [];

export const createStudy = createAsyncThunk(
    "studies/create",
    async ({ PatientID, StudyDate, StudyDescription, StudyTime }) => {
        const res = await StudyDataService.createStudy ({ PatientID, StudyDate, StudyDescription, StudyTime });
        return res.data;
    }
);

export const retrieveStudies = createAsyncThunk(
    "studies/retrieve",
    async () => {
        const res = await StudyDataService.getAllStudies();
        return res.data;
    }
);

// export const updatePatient = createAsyncThunk(
//     "patients/update",
//     async ({ patientsName, patientsSex, patientID, patientsBirthDate, ethnicGroup }) => {
//         const res = await StudyDataService.updatePatient(patientsName, ethnicGroup, patientsSex, patientID, patientsBirthDate);
//         return res.data;
//     }
// );

// export const deletePatient = createAsyncThunk(
//     "patients/delete",
//     async ({ patientID }) => {
//         await StudyDataService.deletePatient(patientID);
//         return { patientID };
//     }
// );

export const getStudyByPatientId = createAsyncThunk(
    "patients/getStudyByPatientId",
    async ({ patientsID }) => {
        const res = await StudyDataService.getStudyByPatientId(patientsID);
        return res.data
    }
);

const studySlice = createSlice({
    name: "study",
    initialState,
    extraReducers: {
        [createStudy.fulfilled]: (state, action) => {
            state.push(action.payload);
        },
        [retrieveStudies.fulfilled]: (state, action) => {
            return [...action.payload];
        },
        // [updatePatient.fulfilled]: (state, action) => {
        //     const index = state.findIndex(patient => patient.patientID === action.payload.patientID);
        //     state[index] = {
        //         ...state[index],
        //         ...action.payload,
        //     };
        // },
        // [deletePatient.fulfilled]: (state, action) => {
        //     let index = state.findIndex(({ patientID }) => patientID === action.payload.patientID);
        //     state.splice(index, 1);
        // },
        [getStudyByPatientId.fulfilled]: (state, action) => {
            return [...action.payload];
        },
    },
});

const { reducer } = studySlice;
export default reducer;
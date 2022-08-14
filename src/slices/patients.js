import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import PatientDataService from '../services/PatientService';

const initialState = [];

export const createPatient = createAsyncThunk(
    "patients/create",
    async ({ patientsName, patientsSex, ethnicGroup }) => {
        const res = await PatientDataService.createPatient ({ patientsName, patientsSex, ethnicGroup });
        return res.data;
    }
);

export const retrievePatients = createAsyncThunk(
    "patients/retrieve",
    async () => {
        const res = await PatientDataService.getAllPatients();
        return res.data;
    }
);

export const updatePatient = createAsyncThunk(
    "patients/update",
    async ({ patientsName, patientsSex, id }) => {
        const res = await PatientDataService.updatePatient(patientsName, patientsSex, id);
        return res.data;
    }
);

export const deletePatient = createAsyncThunk(
    "patients/delete",
    async ({ id }) => {
        await PatientDataService.deletePatient(id);
        return { id };
    }
);

export const findPatientByName = createAsyncThunk(
    "patients/findByName",
    async ({ patientsName }) => {
        const res = await PatientDataService.findByName(patientsName);
        return res.data
    }
);

const patientSlice = createSlice({
    name: "patient",
    initialState,
    extraReducers: {
        [createPatient.fulfilled]: (state, action) => {
            state.push(action.payload);
        },
        [retrievePatients.fulfilled]: (state, action) => {
            return [...action.payload];
        },
        [updatePatient.fulfilled]: (state, action) => {
            const index = state.findIndex(patient => patient.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload,
            };
        },
        [deletePatient.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            state.splice(index, 1);
        },
        [findPatientByName.fulfilled]: (state, action) => {
            return [...action.payload];
        },
    },
});

const { reducer } = patientSlice;
export default reducer;
import http from "../http-common";
const getAllPatients = () => {
  return http.get("/patients");
};
const getPatientById = patientID => {
  return http.get(`/patients/${patientID}`);
};
const createPatient = data => {
  return http.post("/patients", data);
};
const updatePatient = (patientID, data) => {
  return http.put(`/patients/${patientID}`, data);
};
const removePatient = patientID => {
  return http.delete(`/patients/${patientID}`);
};
const findByName = patientsName => {
  return http.get(`/patients?patientsName=${patientsName}`);
};
const PatientDataService = {
    getAllPatients,
    getPatientById,
    createPatient,
    updatePatient,
    removePatient,
    findByName
};
export default PatientDataService;
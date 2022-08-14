import http from "../http-common";
const getAllPatients = () => {
  return http.get("/patients");
};
const getPatientById = id => {
  return http.get(`/patients/${id}`);
};
const createPatient = data => {
  return http.post("/patients", data);
};
const updatePatient = (id, data) => {
  return http.put(`/patients/${id}`, data);
};
const removePatient = id => {
  return http.delete(`/patients/${id}`);
};
const findByName = patientsName => {
  return http.get(`/patients?patientsName=${patientsName}`);
};
const PatientService = {
    getAllPatients,
    getPatientById,
    createPatient,
    updatePatient,
    removePatient,
    findByName
};
export default PatientService;
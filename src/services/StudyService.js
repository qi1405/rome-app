import http from "../http-common";
const createStudy = () => {
  return http.post("/studies");
};
const getStudyByPatientId = patientID => {
  return http.get(`/studies/${patientID}`);
};
const getAllStudies = () => {
  return http.get("/studies");
};
// const updatePatient = (patientID, data) => {
//   return http.put(`/patients/${patientID}`, data);
// };
// const removePatient = patientID => {
//   return http.delete(`/patients/${patientID}`);
// };
// const findByName = patientsName => {
//   return http.get(`/patients?patientsName=${patientsName}`);
// };
const StudyDataService = {
    createStudy,
    getStudyByPatientId,
    getAllStudies,
    // updatePatient,
    // removePatient,
    // findByName
};
export default StudyDataService;
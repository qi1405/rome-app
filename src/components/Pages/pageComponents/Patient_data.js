// import React, { useState, useEffect } from "react";
// import { PatientHeadRow } from "./Patient_list";
// import PatientService from "../../../services/PatientService";

// const PatientData = (props) => {
//   const initialPatientState = {
//     id: null,
//     patientsName: "",
//     patientsBirthDate: "",
//     ethnicGroup: "",
//     patientsSex: ""
//   };

//   const [currentPatient, setCurrentPatient] = useState(initialPatientState);

//   const getPatient = id => {
//     PatientService.getPatientById(id)
//       .then(response => {
//         setCurrentPatient(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   useEffect(() => {
//     getPatient(props.id);
//   }, [props.id]);


//   return (
//     <>
//       <PatientHeadRow />
//       {/* {patientsList} */}
//     </>
//   );
// };

// export default PatientData;

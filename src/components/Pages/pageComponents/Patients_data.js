import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrievePatients, findPatientByName } from "../../../slices/patients";
import PatientsList, { PatientsHeadRow } from "./Patients_list";

const PatientsData = () => {
  const [searchName, setSearchName] = useState("");
  const patients = useSelector(state => state.patients);
  const dispatch = useDispatch();

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const initFetch = useCallback(() => {
    dispatch(retrievePatients());
  }, [dispatch]);

  useEffect(() => {
    initFetch()
  }, [initFetch]);
  
  const findByName = () => {
    dispatch(findPatientByName({ patientsName: searchName}));
  };

  const patientsList = patients.map((patient) => (
    <PatientsList
    key={patient.patientID}
    patientID={patient.patientID}
    patientsName={patient.patientsName}
    patientsBirthDate={patient.patientsBirthDate}
    ethnicGroup={patient.ethnicGroup}
    patientsSex={patient.patientsSex}
    />
  ));

  console.log(patients)

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={onChangeSearchName}
        />
        <button onClick={findByName}>Search</button>
      </div>
      <PatientsHeadRow />
      {patientsList}
    </>
  );
};

export default PatientsData;

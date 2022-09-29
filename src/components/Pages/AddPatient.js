import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPatient } from "../../slices/patients";
import Card from "../../UI/Card";
import loading from "../../UI/loading.svg";
// import { getCurrentDate } from "./pageComponents/CurrentDate";

const AddPatient = () => {
  const initialPatientState = {
    patientsID: null,
    patientsName: "",
    patientsSex: "",
    ethnicGroup: "",
    patientsBirthDate: "",
  };

  const [patient, setPatient] = useState(initialPatientState);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };
  const savePatient = () => {
    const { patientsName, patientsSex, ethnicGroup, patientsBirthDate } =
      patient;
    dispatch(
      createPatient({
        patientsName,
        patientsSex,
        ethnicGroup,
        patientsBirthDate,
      })
    )
      .unwrap()
      .then((data) => {
        console.log(data);
        setPatient({
          patientsID: data.patientsID,
          patientsName: data.patientsName,
          patientsSex: data.patientsSex,
          ethnicGroup: data.ethnicGroup,
          patientsBirthDate: data.patientsBirthDate
        });
        setSubmitted(true);
        console.log(patient);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const newPatient = () => {
    setPatient(initialPatientState);
    setSubmitted(false);
  };
  return (
    <div className="App">
      <header className="header">
        <p>Add a patient manually!</p>
      </header>
      <div className="container">
        <Card>
          <div>
            <div>
              <img src={loading} className="loading" alt="logo" />
            </div>
            {submitted ? (
              <div>
                <h4>You added a patient successfully!</h4>
                <button
                  onClick={newPatient}
                  className="button"
                  style={{ fontSize: "1rem", marginBottom: "0.4rem" }}
                >
                  Add a new patient
                </button>
              </div>
            ) : (
              <div>
                <div className="">
                  <label htmlFor="patientsName">Full Name</label>
                  <input
                    type="text"
                    className=""
                    id="patientsName"
                    required
                    value={patient.patientsName || ""}
                    onChange={handleInputChange}
                    name="patientsName"
                  />
                </div>
                <div className="">
                  <label htmlFor="patientsSex">Male</label>
                  <input
                    type="radio"
                    className=""
                    id="patientsSex"
                    required
                    value={patient.patientsSex || "M"}
                    onChange={handleInputChange}
                    name="patientsSex"
                  />
                  <label htmlFor="patientsSex">Female</label>
                  <input
                    type="radio"
                    className=""
                    id="patientsSex"
                    required
                    value={patient.patientsSex || "F"}
                    onChange={handleInputChange}
                    name="patientsSex"
                  />
                </div>
                <div className="">
                  <label htmlFor="ethnicGroup">Ethnicity</label>
                  <input
                    type="text"
                    className=""
                    id="ethnicGroup"
                    required
                    value={patient.ethnicGroup || ""}
                    onChange={handleInputChange}
                    name="ethnicGroup"
                    style={{ marginBottom: "0.6rem" }}
                  />
                </div>
                <div className="">
                  <label>Date</label>
                  <input
                    type="date"
                    // min="2014-01-01"
                    // max="2032-12-31"
                    id="patientsBirthDate"
                    value={patient.patientsBirthDate || ""}
                    onChange={handleInputChange}
                    name="patientsBirthDate"
                  />
                </div>
                <button
                  onClick={savePatient}
                  className="button"
                  style={{ marginBottom: "0.6rem" }}
                >
                  Add
                </button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddPatient;

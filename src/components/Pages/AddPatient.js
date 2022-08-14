import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPatient } from "../../slices/patients";
import Card from "../../UI/Card";
import loading from "../../UI/loading.svg";
import { Link } from "react-router-dom";

const AddPatient = () => {
  const initialPatientState = {
    id: null,
    patientsName: "",
    patientsSex: "",
    ethnicGroup: "",
  };

  const [patient, setPatient] = useState(initialPatientState);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };
  const savePatient = () => {
    const { patientsName, patientsSex, ethnicGroup } = patient;
    dispatch(createPatient({ patientsName, patientsSex, ethnicGroup }))
      .unwrap()
      .then((data) => {
        console.log(data);
        setPatient({
          id: data.id,
          patientsName: data.patientsName,
          patientsSex: data.patientsSex,
          ethnicGroup: data.ethnicGroup,
        });
        setSubmitted(true);
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
                <button onClick={newPatient} className="button">Add a new patient</button>
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
                    value={patient.title || ""}
                    onChange={handleInputChange}
                    name="patientsName"
                  />
                </div>
                <div className="">
                  <label htmlFor="patientsSex">Gender</label>
                  <input
                    type="text"
                    className=""
                    id="patientsSex"
                    required
                    value={patient.description || ""}
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
                    value={patient.description || ""}
                    onChange={handleInputChange}
                    name="ethnicGroup"
                  />
                </div>
                <button onClick={savePatient} className="button" style={{ marginBottom: "0.6rem" }}>
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

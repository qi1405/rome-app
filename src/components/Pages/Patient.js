import { useParams } from "react-router-dom";
import Card from "../../UI/Card";
import React, { useState, useEffect, useCallback } from "react";
import { PatientHeadRow } from "./pageComponents/Patient_list";
import PatientService from "../../services/PatientService";
import { useDispatch, useSelector } from "react-redux";
import { createStudy, getStudyByPatientId, retrieveStudies } from "../../slices/studies";
import StudyReports from "./pageComponents/StudyReports";

function Patient() {
  const { patientID } = useParams();
  const studies = useSelector(state => state.studies);
  const dispatch = useDispatch();
  const initialPatientState = {
    patientID: null,
    patientsName: "",
    patientsBirthDate: new Date(),
    ethnicGroup: "",
    patientsSex: "",
  };

  const [currentPatient, setCurrentPatient] = useState(initialPatientState);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentStudies, setCurrentStudies] = useState([]);

  const getPatient = (patientID) => {
    PatientService.getPatientById(patientID)
      .then((response) => {
        setCurrentPatient(response.data);
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(e.message);
      });
  };

  const getStudies = () => {
    dispatch(getStudyByPatientId({patientID: patientID}));
  }

  const initFetch = useCallback(() => {
    dispatch(retrieveStudies());
  }, [dispatch]);

  useEffect(() => {
    getPatient(patientID);
    initFetch();
  }, [patientID, initFetch]);

  const studyList = studies.map((study) => {
    <StudyReports
    key={study.studyID}
    studyID={study.studyID}
    studyDescription={study.studyDescription}
    studyDate={study.studyDate}
    />
  });

  console.log(studies)

  const PatientList = () => {
    if (currentPatient.patientID !== null) {
      return (
        <section className="headrow">
          <div className="item">{currentPatient.patientID}</div>
          <div className="item">{currentPatient.patientsName}</div>
          <div className="item">{currentPatient.patientsBirthDate}</div>
          <div className="item">{currentPatient.ethnicGroup}</div>
          <div className="item">{currentPatient.patientsSex}</div>
        </section>
      );
    } else {
      return (
        <section className="headrow">
          <div className="item">{errorMessage}</div>
        </section>
      );
    }
  };

  return (
    <div className="App">
      <header className="header">
        <p>This is the page for patient with id: {patientID}!</p>
      </header>
      <div className="container">
        <Card>
          <PatientHeadRow />
          <PatientList />
          <p style={{ borderBottom: "2px solid #005555" }}>STUDY REPORTS</p>
          <StudyReports />
        </Card>
      </div>
    </div>
  );
}

export default Patient;

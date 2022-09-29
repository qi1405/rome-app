import Card from "../../UI/Card";
import loading from "../../UI/loading.svg";
import { Link } from "react-router-dom";
import PatientsData from "./pageComponents/Patients_data";
import React from "react";


function Patients() {
  return (
    <div className="App">
      <header className="header">
        <p>This is the patients' page!</p>
      </header>
      <div className="container">
        <Card>
          <PatientsData />
          <div>
            <div>
              <img src={loading} className="loading" alt="logo" />
            </div>
            <p>Below you can check the form for adding a patient manually.</p>
            <p>Also, you can check a specific patient by using params.</p>
            <Link to="/patients/add">Add a patient manually</Link>
            <div>
              <Link to="/patients/12">Visit patient with ID 12</Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Patients;

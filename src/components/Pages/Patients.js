import Card from "../../UI/Card";
import loading from "../../UI/loading.svg";
import { Link } from "react-router-dom";
import PatientsHeadRow from "./pageComponents/Patients_headRow";

function Patients() {
  return (
    <div className="App">
      <header className="header">
        <p>This is the patients' page!</p>
      </header>
      <div className="container">
        <Card>
          <PatientsHeadRow />
          <div>
          <div>
            <img src={loading} className="loading" alt="logo" />
          </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/patients/12">Go to patient with id 12</Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Patients;

import { useParams } from "react-router-dom";
import Card from "../../UI/Card";
import loading from "../../UI/loading.svg";
import PatientsHeadRow from "./pageComponents/Patients_headRow";
import TextBox from "./pageComponents/TextBox";

function Patient() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="App">
      <header className="header">
        <p>This is the page for patient with id: {id}!</p>
      </header>
      <div className="container">
        <Card>
          <PatientsHeadRow />
          <div>
            <div>
              <img src={loading} className="loading" alt="logo" />
            </div>
            <TextBox />
          </div>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignContent: "center",
              justifyContent: "center",
              marginBottom: "0.6rem"
            }}
          >
            <div>
              <button className="button">Edit</button>
            </div>
            <div>
              <button className="button">Save</button>
            </div>
          </div>
          <div>
            <button className="button" style={{width: "9rem", height: "4rem", marginBottom: "0.6rem"}}>Generate report</button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Patient;

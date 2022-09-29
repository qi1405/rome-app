import { useNavigate } from "react-router-dom";

export const PatientsHeadRow = () => {
  return (
    <section className="headrow">
      <div
        style={{ fontWeight: "bold", color: "#005555" }}
        className="item"
      >
        ID
      </div>
      <div
        style={{ fontWeight: "bold", color: "#005555" }}
        className="item"
      >
        Full Name
      </div>
      <div
        style={{ fontWeight: "bold", color: "#005555" }}
        className="item"
      >
        Birth Date
      </div>
      <div
        style={{ fontWeight: "bold", color: "#005555" }}
        className="item"
      >
        Ethnic Group
      </div>
      <div
        style={{ fontWeight: "bold", color: "#005555" }}
        className="item"
      >
        Gender
      </div>
    </section>
  );
};

const PatientsList = (props) => {
  const navigate = useNavigate();

  const viewClientClicked = () => {
    navigate(`/patients/${props.patientID}`);
  };

  return (
    <section className="headrow" onClick={() => viewClientClicked()}>
      <div className="item">{props.patientID}</div>
      <div className="item">{props.patientsName}</div>
      <div className="item">{props.patientsBirthDate}</div>
      <div className="item">{props.ethnicGroup}</div>
      <div className="item">{props.patientsSex}</div>
    </section>
  );
};

export default PatientsList;

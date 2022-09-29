import { PinDropSharp } from "@material-ui/icons";
import TextBox from "./TextBox";
// import loading from "../../../UI/loading.svg";

const StudyReports = (props) => {
    return (
        <div>
            <div className="block">
              <div className="left">
                <p className="title">Studies</p>
                <div className="item">
                  <div className="left-column">{props.studyID}</div>
                  <div className="right-column">data</div>
                </div>
              </div>
              <div className="center">
                {/* <img src={loading} className="loading" alt="logo" /> */}
              </div>
              <div className="right">
                <p className="title">Description</p>
                <div className="item">
                  <div className="column">1</div>
                </div>
              </div>
            </div>
            <TextBox />
          </div>
    )
}

export default StudyReports;
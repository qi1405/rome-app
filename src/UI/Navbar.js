import "./Navbar.css";
import loading from "./loading.svg";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Reorder } from "@material-ui/icons";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="leftSide">
      <Link to="/"><img src={loading} className="loading-nav" alt="logo" /></Link>
        <div className="links">
          <Link to="/">RoMedical</Link>
        </div>
      </div>
      <div className="rightSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <NavLink
            to="/patients"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#61DAFB",
                  }
                : { color: "" }
            }
          >
            Patients
          </NavLink>
          <NavLink
            to="/add"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#61DAFB",
                  }
                : { color: "" }
            }
          >
            Add
          </NavLink>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>
          {" "}
          <Reorder />{" "}
        </button>
      </div>
    </div>
  );
}

export default Navbar;

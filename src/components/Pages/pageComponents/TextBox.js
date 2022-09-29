import { TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function TextBox() {
  const [study, setStudy] = useState("");

  const studyChangeHandler = event => {
    setStudy(event.target.value)
  }
  return (
    <section>
      <div><h1>REPORT</h1></div>
      <div>
        <form noValidate autoComplete="off" style={{ margin: "1rem" }}>
          <div>
          <TextField
            label="Write the report here"
            variant="outlined"
            fullWidth
            required
            multiline
            minRows={6}
            onChange={studyChangeHandler}
          />
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
        </form>
      </div>
    </section>
  );
}

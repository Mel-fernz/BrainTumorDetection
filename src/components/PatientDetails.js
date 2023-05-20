import React from "react";
import "./PatientDetails.css";
// import Button from "@mui/material/Button";

function PatientDetails() {
  return (
    <div className="details">
      <form className="form">
        {/* <div className="form-wrapper"> */}
        <div className="name1">
          <label className="label1"> FirstName: </label>
          <input type="text" name="label1"></input>
        </div>
        <div className="last">
          <label className="label2"> LastName: </label>
          <input type="text" name="label2"></input>
        </div>

        <div className="gen">
          <label className="gender"> Gender: </label>
          <select name="dropdown" id="dropdown">
            <option value="male"> Male </option>
            <option value="female"> Female </option>
            <option value="others">Others </option>
          </select>
        </div>
        <div className="age">
          <label className="label4"> Age: </label>
          <input type="text" name="label4"></input>
        </div>

        <div className="file">
          <label>
            Your image file:
            <input
              type="file"
              name="myImage"
              accept="image/png, image/jpeg, image/jpg"
            />
          </label>
        </div>
        <div className="report">
          {/* <Button variant="contained" size="small">
        {" "}
        Generate Report
      </Button> */}
          <button className="button1" type="button">
            Generate Report
          </button>
        </div>
        {/* </div> */}
      </form>
    </div>
  );
}

export default PatientDetails;

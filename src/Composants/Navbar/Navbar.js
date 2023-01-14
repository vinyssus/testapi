import React from "react";
import "./Navbar.css";
import DeleteButton from "../Button/DeleteButon/DeleteButton.js";
import AddEmployeeButton from "../Button/AddEmployeeButton/AddEmployeeButton.js";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="para1">
          <h2>Manager Employee</h2>
        </div>
        <div className="button">
          <div className="button1">
            <DeleteButton />
          </div>
          <div className="button2">
            <AddEmployeeButton />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

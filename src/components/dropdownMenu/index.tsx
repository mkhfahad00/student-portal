import React from "react";
import "components/dropdownMenu/styles.css";
type SingleRecordProps = {
  handleEdit: Function;
  handleDelete: Function;
};

const DropdownMenu = ({ handleEdit, handleDelete }: SingleRecordProps) => {
  return (
    <div id="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="dots">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <ul>
            <li onClick={() => handleEdit()}>
              <p className="link">Edit</p>
            </li>
            <li onClick={() => handleDelete()}>
              <p className="link">Delete</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;

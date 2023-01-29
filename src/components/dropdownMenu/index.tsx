import React from "react";
import "components/dropdownMenu/styles.css";
type SingleRecordProps = {
  handleEdit: () => void;
  handleDelete: () => void;
};

const DropdownMenu = ({ handleEdit, handleDelete }: SingleRecordProps) => {
  return (
    <div className="dropdown dropdown ms-5">
      <button
        className="rounded-circle btn btn-light "
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </button>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <div>
          <div className="dropdown-item" onClick={() => handleEdit()}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
              alt="Edit Student"
              className="img-icon"
            />
            Edit
          </div>
          <div className="dropdown-item" onClick={() => handleDelete()}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              className="img-icon"
              alt="Delete Student"
            />
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;

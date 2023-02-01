import React from "react";
import "components/dropdownMenu/styles.css";
import { ActionType } from "typesafe-actions";
import { deleteStudent } from "state/ducks/students/actions";
import { Button, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type SingleRecordProps = {
  handleEdit: () => void;
  handleDelete: () => ActionType<typeof deleteStudent>;
};

const DropdownMenu = ({ handleEdit, handleDelete }: SingleRecordProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls="ellipsis-dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon color="primary" />
      </Button>
      <Menu
        id="ellipsis-dropdown-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            handleEdit();
          }}
        >
          <EditIcon sx={{ paddingRight: "5px" }} />
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleDelete();
          }}
        >
          <DeleteIcon sx={{ paddingRight: "5px" }} />
          Delete
        </MenuItem>
      </Menu>
    </div>
    // <div className="dropdown dropdown ms-5">
    //   <button
    //     className="rounded-circle btn btn-light "
    //     id="dropdownMenuLink"
    //     data-toggle="dropdown"
    //     aria-haspopup="true"
    //     aria-expanded="false"
    //   >
    //     <i className="fa-solid fa-ellipsis-vertical"></i>
    //   </button>

    //   <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    //     <div>
    //       <div className="dropdown-item" onClick={() => handleEdit()}>
    //         <img src={EDIT_ICON} alt="Edit Student" className="img-icon" />
    //         Edit
    //       </div>
    //       <div className="dropdown-item" onClick={() => handleDelete()}>
    //         <img src={DELETE_ICON} className="img-icon" alt="Delete Student" />
    //         Delete
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DropdownMenu;

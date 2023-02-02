import React from "react";
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
  );
};

export default DropdownMenu;

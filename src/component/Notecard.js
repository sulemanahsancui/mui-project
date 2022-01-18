import { Card, CardHeader, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

const Notecard = ({ notes, deletehandle }) => {
  return (
    <div>
      <Card>
        <CardHeader
          title={notes.title}
          subheader={notes.details}
          action={
            <IconButton onClick={() => deletehandle(notes.id)}>
              <DeleteIcon color="primary" />
            </IconButton>
          }
        />
      </Card>
    </div>
  );
};

export default Notecard;

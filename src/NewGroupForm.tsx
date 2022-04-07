import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import makeStyles from "@mui/styles/makeStyles";
import React, { useState } from "react";
import NewWordForm from "./NewWordForm";

interface Props {}

function NewGroupForm(props: Props) {
  const [newGroupName, setNewGroupName] = useState<string>();

  const {} = props;

  const classes = useStyles();

  return (
    <div>
      <Button
        variant="text"
        onClick={() => {
          const form = document.getElementById(newGroupName + "form")!;
          console.log({ newGroupName });

          if (form.className != classes.view) {
            form.className = classes.view;
          } else {
            form.className = classes.toggle;
          }
        }}
      >
        Add Group
      </Button>
      <TextField
        placeholder="New Group"
        variant="standard"
        onChange={(e) => {
          setNewGroupName(e.target.value);
        }}
      />

      <NewWordForm group={newGroupName as string} />
    </div>
  );
}

const useStyles = makeStyles(() => ({
  toggle: {
    display: "none",
  },
  view: {
    display: "block",
  },
}));

export default React.memo(NewGroupForm);

import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import makeStyles from "@mui/styles/makeStyles";
import React, { useState } from "react";

interface Props {}

function NewGroupForm(props: Props) {
  const [newGroupName, setNewGroupName] = useState<string>();
  const [addingNewGroup, setAddingNewGroup] = useState(false);

  const {} = props;

  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Button
        variant="text"
        onClick={() => {
          setAddingNewGroup(true);
        }}
      >
        <AddIcon /> Add Group
      </Button>

      {addingNewGroup ? (
        <TextField
          placeholder="New Group"
          variant="standard"
          onChange={(e) => {
            setNewGroupName(e.target.value);
          }}
        />
      ) : null}

      {/* <NewWordForm group={newGroupName as string} /> */}
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

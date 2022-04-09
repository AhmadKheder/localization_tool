import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import makeStyles from "@mui/styles/makeStyles";
import React, { useState } from "react";
import { insertNewWord } from "../types/functions";
import { LANGUAGES } from "./Accrodion";
// import { writeUserData } from "../types/functions";

interface Props {}

function NewGroupForm(props: Props) {
  const [newGroupName, setNewGroupName] = useState<string>();
  const [addingNewGroup, setAddingNewGroup] = useState(false);

  const {} = props;

  const classes = useStyles();
  const addNewGroup = (groupName: string) => {
    const element = document.getElementById(
      "addNewGroup01"
    ) as HTMLInputElement;
    const initialValues = ["hello world", "Selam Dünya", "مرحبا بالعالم"];
    LANGUAGES.map((langaya, idx) => {
      insertNewWord(
        element.value as string,
        langaya,
        initialValues[idx],
        groupName
      );
    });
  };
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
        <div>
          <TextField
            placeholder="New Group"
            variant="standard"
            id="addNewGroup01"
            onChange={(e) => {
              setNewGroupName(e.target.value);
            }}
          />
          <Button onClick={() => addNewGroup(newGroupName as string)}>
            Save
          </Button>
          <Button>Cancel</Button>
        </div>
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

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import makeStyles from "@mui/styles/makeStyles";
import { ref, set } from "firebase/database";
import React, { useState } from "react";
import { LANGUAGES } from "./Accrodion";
import { db } from "./Components/firebaseConfig";

interface Props {
  group: string;
  auto?: string;
  // defaultInsertedValue?: { ar: string; en: string; tr: string };
}

function NewWordForm(props: Props) {
  const [word, setWord] = useState<string>("WHAT!");
  const [en, setEn] = useState<string>("WTF");
  const [ar, setAr] = useState<string>("ما هذا بحق الجحيم!");
  const [tr, setTr] = useState<string>("ىتريسadzxwqchsinىيشهتdsadخهتsin");
  const classes = useStyles();
  const { group, auto } = props;
  const insertNewWord = (
    word: string,
    language: string,
    translation: string
  ) => {
    set(ref(db, language + "/" + group + "/" + word), translation)
      .then(() => {
        console.log(`success, value: ${word}: ${translation}`);
      })
      .catch((error) => {
        console.error(`fail, value: ${word}`);
      });
  };

  function writeUserData() {
    alert("writeUserData");
    LANGUAGES.map((langaya) => {
      switch (langaya) {
        case "en":
          insertNewWord(word as string, langaya, en as string);
          break;
        case "tr":
          insertNewWord(word as string, langaya, tr as string);
          break;
        case "ar":
          insertNewWord(word as string, langaya, ar as string);
          break;

        default:
          break;
      }
    });
  }

  return (
    <div id={group + "form"} className={classes.toggle}>
      <div>
        <TextField
          placeholder="New Word"
          variant="standard"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <TextField
          placeholder="EN "
          variant="standard"
          onChange={(e) => {
            setEn(e.target.value);
          }}
        />
        <TextField
          placeholder="AR "
          variant="standard"
          onChange={(e) => {
            setAr(e.target.value);
          }}
        />
        <TextField
          placeholder="TR "
          variant="standard"
          onChange={(e) => {
            setTr(e.target.value);
          }}
        />
        <Button variant="text" onClick={() => writeUserData()}>
          Save
        </Button>
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  toggle: {
    display: "none",
  },
}));

export default React.memo(NewWordForm);

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import makeStyles from "@mui/styles/makeStyles";
import { ref, set } from "firebase/database";
import React from "react";
import { LANGUAGES } from "./Accrodion";
import { db } from "./Components/firebaseConfig";
import { LanguagesKeys } from "./types/common";

interface Props {
  group: string;
  word: string;
  value: Record<LanguagesKeys, string>;
}

export default function LocalizationItem(props: Props) {
  const { word, group } = props;
  const [value, setValue] = React.useState(props.value);
  console.log(" TYPEOF props.value", typeof props.value);
  console.log("LL", { ...props });
  console.log("props.valueprops.value", props.value);
  const classes = useStyles();

  const handleSave = (passedLang: LanguagesKeys) => {
    set(ref(db, passedLang + "/" + group + "/" + word), value[passedLang])
      .then(() => {
        alert(`success, value: ${value}`);
      })
      .catch((error) => {
        alert(`fail, value: ${value}`);
      });
  };

  const onValueChange = (newValue: string, language: LanguagesKeys) => {
    setValue({ ...value, [language]: newValue });
  };

  console.log("====>", value);

  return (
    <div className={classes.keyValue}>
      <div className={classes.wordForm}>
        <label htmlFor="">{word}</label>
        <ListItem className={classes.translationsContainer}>
          {LANGUAGES.map((langVal) => {
            return (
              <div className={classes.fieldbtn}>
                <TextField
                  value={value[langVal]}
                  variant="standard"
                  onChange={(e) => {
                    onValueChange(e.target.value, langVal);
                  }}
                  className={classes.textInput}
                />
                <div className={classes.btnsContainer}>
                  <Button variant="text">
                    <CloseIcon onClick={(e) => setValue(props.value)} />
                  </Button>
                  {/* <span>|</span> */}
                  <Button variant="text">
                    <CheckIcon
                      onClick={() => {
                        handleSave(langVal);
                      }}
                    />
                  </Button>
                </div>
              </div>
            );
          })}
        </ListItem>
        <Checkbox color="primary" />
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  translationsContainer: {
    border: "4px dashed blue",
    alignItems: "space-evenly",
    justifyContent: "space-around",
  },
  wordForm: {
    display: "flex",
    alignItems: "center",

    width: "100%",
    height: "100px",

    border: "1px solid red",
  },
  keyValue: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  btnsContainer: {
    display: "flex",
    // alignItems: "flex-end",
  },
  fieldbtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-around ",
  },

  textInput: {
    width: 200,
  },
}));

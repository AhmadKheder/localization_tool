import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
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
        <div className={classes.translationsContainer}>
          {LANGUAGES.map((langVal) => {
            return (
              <div className={classes.fieldbtn}>
                <div className={classes.textInput}>
                  <TextField
                    value={value[langVal]}
                    variant="standard"
                    onChange={(e) => {
                      onValueChange(e.target.value, langVal);
                    }}
                    // className={classes.textInput}
                    onDoubleClick={() => {
                      const translastionDiv = document.getElementById(
                        value[langVal] + "0"
                      )!;
                      console.log("translastionDiv.id+++", translastionDiv.id);
                      if (translastionDiv.className != classes.btnsContainer) {
                        translastionDiv.className = classes.btnsContainer;
                      } else {
                        translastionDiv.className = classes.btnsContainerNone;
                      }
                    }}
                  />
                </div>
                <div
                  className={classes.btnsContainerNone}
                  id={value[langVal] + "0"}
                >
                  <Button className={classes.btn}>
                    <CloseIcon
                      onClick={(e) => setValue(props.value)}
                      className={classes.icon}
                    />
                  </Button>
                  <span>|</span>
                  <Button className={classes.btn}>
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
        </div>
        <Checkbox color="primary" />
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  icon: {
    width: "100%",
    height: "100%",
  },
  btn: {
    margin: 0,
    width: "24px",
    height: "24px",
    // border: "1px solid red",
  },
  translationsContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",

    // border: "4px dashed blue",
  },
  wordForm: {
    display: "flex",
    alignItems: "center",
    width: "84%",
    marginLeft: "90px",
    // border: "1px solid red",
  },
  keyValue: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  btnsContainerNone: {
    display: "none",
    justifyContent: "flex-end",
  },
  btnsContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  fieldbtn: {
    display: "flex",
    flexDirection: "column",
  },

  textInput: {
    // padding: " 0 80px",
  },
}));

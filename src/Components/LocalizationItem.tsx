import Checkbox from "@mui/material/Checkbox";
import makeStyles from "@mui/styles/makeStyles";
import { ref, set } from "firebase/database";
import React, { useCallback } from "react";
import { db } from "../config/firebase";
import { LanguagesKeys } from "../types/common";
import { LANGUAGES } from "./Accrodion";
import LoclizationItemFields from "./LoclizationItemFields";

interface Props {
  group: string;
  word: string;
  value: Record<LanguagesKeys, string>;
}

export default function LocalizationItem(props: Props) {
  const { word, group } = props;
  const [value, setValue] = React.useState(props.value);
  /*  console.log(" TYPEOF props.value", typeof props.value);
  console.log("LL", { ...props });
  console.log("props.valueprops.value", props.value); */
  const classes = useStyles();

  const handleSave = useCallback(
    (passedLang: LanguagesKeys) => {
      set(ref(db, passedLang + "/" + group + "/" + word), value[passedLang])
        .then(() => {
          alert(`success, value: ${value}`);
        })
        .catch((error) => {
          alert(`fail, value: ${value}`);
        });
    },
    [db, group, word, value]
  );

  console.log("====>", value);

  return (
    <div className={classes.keyValue}>
      <div className={classes.wordForm}>
        <label htmlFor="">{word}</label>
        <div className={classes.translationsContainer}>
          {LANGUAGES.map((langVal) => {
            return (
              <LoclizationItemFields
                language={langVal}
                onSvaeRequest={handleSave}
                setValue={setValue}
                value={value}
                key={langVal}
              />
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
    justifyContent: "space-evenly",
    width: "100%",

    // border: "4px dashed blue",
  },
  wordForm: {
    display: "flex",
    alignItems: "center",
    width: "84%",
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
    textAlign: "justify",
  },

  textInput: {
    // padding: " 0 80px",
  },
}));

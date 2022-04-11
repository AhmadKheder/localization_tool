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
        <Checkbox
          color="primary"
          // sx={{
          //   display: "grid",
          //   gridTemplateColumns: "1fr ",
          // }}
        />
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
    display: "grid",
    // gridTemplateColumns: "20% 20% 20% ",
    gridColumnGap: "10px",
    gridAutoRows: "minmax(100px,auto)",
    // gridAutoRows: "repeat(3,minmax(100px,auto))",
    gridTemplateColumns: " 2fr 2fr 2fr ",
    justifyContent: "space-evenly",
    width: "100%",
    // border: "2px dashed blue",
  },
  wordForm: {
    display: "grid",
    // gridAutoRows: "minmax(100px,auto)",
    gridTemplateColumns: "30% 60% 10%",
    // border: "1px dashed red",
    // gridTemplateColumns: "30%  6fr 1fr ",
  },
  keyValue: {
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

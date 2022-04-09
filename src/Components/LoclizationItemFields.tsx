import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Button, TextField, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React, { SetStateAction, useCallback, useState } from "react";
import { LanguagesKeys } from "../types/common";

interface Props {
  value: any;
  language: LanguagesKeys;
  onSvaeRequest: (lang: LanguagesKeys) => void;
  setValue: React.Dispatch<SetStateAction<Record<LanguagesKeys, string>>>;
}

function LoclizationItemFields(props: Props) {
  const { language, value, onSvaeRequest, setValue } = props;
  const [copy, _] = useState(value[language]);

  const classes = useStyles();

  const onTextChange = useCallback(
    (e) => {
      setValue({ ...value, [language]: e.target.value });
    },
    [language, value]
  );

  const onEditRequest = useCallback(() => {
    const translastionDiv = document.getElementById(
      value[language] + "btnsDiv"
    )!;
    const inputTextField = document.getElementById(
      value[language] + "InputTextFieldDiv"
    )!;
    const labelTypography = document.getElementById(
      value[language] + "LabelTypography"
    )!;

    labelTypography.className = classes.displayNone;
    inputTextField.className = classes.displayBlock;
    console.log("translastionDiv.id+++", translastionDiv.id);
    if (translastionDiv.className != classes.btnsContainer) {
      translastionDiv.className = classes.btnsContainer;
    } else {
      translastionDiv.className = classes.btnsContainerNone;
    }
  }, [value, language]);
  const fieldsValidations = () => {
    const inputField4validationUse = document.getElementById(
      value[language] + "InputTextField"
    ) as HTMLInputElement;
    alert(`OK: ${inputField4validationUse.value}`);

    if (
      inputField4validationUse.value.length <= 0 ||
      inputField4validationUse.value == null
    ) {
      inputField4validationUse.className = classes.texfieldError;
    }
  };
  const onSave = useCallback(() => {
    onSvaeRequest(language);
  }, [language, onSvaeRequest]);

  const resetOldValue = useCallback(() => {
    setValue({ ...value, [language]: copy });
  }, [value, copy, setValue]);

  return (
    <div className={classes.fieldbtn}>
      <div className={classes.textInput}>
        <Typography
          onDoubleClick={onEditRequest}
          id={value[language] + "LabelTypography"}
          className={classes.label}
        >
          {value[language]}
        </Typography>
        <div
          className={classes.displayNone}
          id={value[language] + "InputTextFieldDiv"}
        >
          <TextField
            value={value[language]}
            variant="outlined"
            onChange={onTextChange}
            onDoubleClick={onEditRequest}
            id={value[language] + "InputTextField"}
          />
        </div>
      </div>
      <div
        className={classes.btnsContainerNone}
        id={value[language] + "btnsDiv"}
      >
        <Button className={classes.btn}>
          <CloseIcon onClick={resetOldValue} className={classes.icon} />
        </Button>
        <span>|</span>
        <Button className={classes.btn}>
          <CheckIcon onClick={onSave} />
        </Button>
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  label: {
    dir: "ltr",
  },
  testIT: {
    color: "blue",
    // width: "50px",
  },
  texfieldError: {
    color: "red",
    width: "50px",
  },
  displayBlock: {
    display: "block",
  },
  displayNone: {
    display: "none",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  btn: {
    margin: 0,
    width: "24px",
    height: "24px",
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

export default React.memo(LoclizationItemFields);

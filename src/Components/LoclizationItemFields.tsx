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
  const inputProps = {
    step: 300,
  };
  const classes = useStyles();

  const onTextChange = useCallback(
    (e) => {
      fieldsValidations();
      setValue({ ...value, [language]: e.target.value });
    },
    [language, value]
  );
  const handleBlur = useCallback(() => {
    const translastionDiv = document.getElementById(
      value[language] + "btnsDiv"
    )!;
    const inputTextField = document.getElementById(
      value[language] + "InputTextFieldDiv"
    )!;
    const labelTypography = document.getElementById(
      value[language] + "LabelTypography"
    )!;

    labelTypography.className = classes.displayBlock;
    inputTextField.className = classes.displayNone;
    if (translastionDiv.className != classes.btnsContainer) {
      translastionDiv.className = classes.btnsContainer;
    } else {
      translastionDiv.className = classes.displayNone;
    }
  }, [value, language]);

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
    if (translastionDiv.className != classes.btnsContainer) {
      translastionDiv.className = classes.btnsContainer;
    } else {
      translastionDiv.className = classes.displayNone;
    }
  }, [value, language]);

  const fieldsValidations = useCallback(() => {
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
  }, []);
  const onSave = useCallback(() => {
    onSvaeRequest(language);
  }, [language, onSvaeRequest]);

  const resetOldValue = useCallback(() => {
    setValue({ ...value, [language]: copy });
  }, [value, copy, setValue]);

  return (
    <div
      style={
        {
          // width: "320px",
          // border: "1px solid lightblue",
        }
      }
    >
      <div>
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
            sx={{
              maxWidth: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
            onBlur={handleBlur}
            //  onKeyDown
            value={value[language]}
            variant="outlined"
            onChange={onTextChange}
            onDoubleClick={onEditRequest}
            id={value[language] + "InputTextField"}
          />
        </div>
      </div>
      <div className={classes.displayNone} id={value[language] + "btnsDiv"}>
        <div className={classes.btnContainer}>
          <Button className={classes.btn}>
            <CloseIcon onClick={resetOldValue} className={classes.icon} />
          </Button>
          {/* <span>|</span> */}
          <Button className={classes.btn}>
            <CheckIcon onClick={onSave} className={classes.icon} />
          </Button>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  btnContainer: {
    display: "flex",
    // width: "100px",
    justifyContent: "space-between",
    // alignSelf: "flex-end",
  },
  label: {
    dir: "ltr",
    maxWidth: "264px",
    // border: "1px solid black",
  },
  testIT: {
    color: "blue",
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
    // border: "1px solid black",
    fontSize: "16px",
  },
  btn: {
    margin: 0,
    Width: "24px  !important",
    height: "  24px",
    border: "1px solid gray",
    backgroundColor: "white",

    cursor: "pointer",
    borderRadius: "2px",
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
    border: "1px solid red",
  },
}));

export default React.memo(LoclizationItemFields);

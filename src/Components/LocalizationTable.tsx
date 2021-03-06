import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import makeStyles from "@mui/styles/makeStyles";
import { zipObject } from "lodash";
import React, { useCallback } from "react";
import { Localizations } from "./Accrodion";
import LocalizationItem from "./LocalizationItem";
import NewWordForm from "./NewWordForm";

interface Props {
  localizations: Localizations;
  group: string;
}

const LANGUAGES = ["en", "tr", "ar"] as const;
export default function InteractiveList(props: Props) {
  const { localizations, group } = props;

  // console.log("localizations.en[group]", localizations.en[group]);
  const classes = useStyles();
  const handleFormToggle = useCallback(() => {
    const form = document.getElementById(group + "form")!;
    if (form.className != classes.view) {
      form.className = classes.view;
    } else {
      form.className = classes.toggle;
    }
  }, []);
  return (
    <Box sx={{}}>
      <Button
        variant="text"
        sx={{ color: "#2BBF93" }}
        onClick={handleFormToggle}
        className={classes.addBtn}
      >
        <AddIcon className={classes.addBtnIconB} />{" "}
        <Typography className={classes.addBtnTxt}>Add Word</Typography>
      </Button>
      <div id={group + "form"} className={classes.toggle}>
        <NewWordForm group={group} />
      </div>
      {Object.keys(localizations.en[group]).map((word) => {
        const value = zipObject(
          LANGUAGES,
          LANGUAGES.map((lang) => localizations[lang][group][word])
        ) as Record<typeof LANGUAGES[number], string>;
   

        console.log("Value type is ===> ", value);

        return (
          <LocalizationItem
            key={word}
            word={word}
            group={group}
            value={value}
          />
        );
      })}
    </Box>
  );
}
const useStyles = makeStyles(() => ({
  toggle: {
    display: "none",
  },
  view: {
    display: "block",
  },
  addBtn: {
    display: "flex",
    alignItems: "center",
    height: "40px",
    top: "0px",
  },
  addBtnIconB: {
    right: "20.83%",
    bottom: "20.83%",
    height: "14px",
    width: "14px",
    bordeRradius: "0px",
  },
  addBtnTxt: {
    width: "96px",
    height: "20px",
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#2BBF93",
  },
}));

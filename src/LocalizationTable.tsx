import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { zipObject } from "lodash";
import * as React from "react";
import { Localizations } from "./Accrodion";
import LocalizationItem from "./LocalizationItem";
import NewWordForm from "./NewWordForm";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

interface Props {
  localizations: Localizations;
  group: string;
}

const LANGUAGES = ["en", "tr", "ar"] as const;
export default function InteractiveList(props: Props) {
  const { localizations, group } = props;

  console.log("localizations.en[group]", localizations.en[group]);
  const classes = useStyles();

  return (
    <Box sx={{ border: "2px dashed blue" }}>
      <Button
        variant="text"
        sx={{ color: "#2BBF93" }}
        onClick={() => {
          const form = document.getElementById(group + "form")!;
          if (form.className != classes.view) {
            form.className = classes.view;
          } else {
            form.className = classes.toggle;
          }
        }}
        className={classes.addBtn}
      >
        <AddIcon className={classes.addBtnIconB} />{" "}
        <Typography className={classes.addBtnTxt}>Add Word</Typography>
      </Button>
      <NewWordForm group={group} />
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
    // padding: "0px 8px",

    // width: "1688px",
    height: "40px",
    // left: "0px",
    top: "0px",
  },
  addBtnIconB: {
    // left: "20.83%",
    right: "20.83%",
    // top: "20.83%",
    bottom: "20.83%",
    height: "14px",
    width: "14px",
    bordeRradius: "0px",
  },
  addBtnTxt: {
    width: "96px",
    height: "20px",
    // left: "0px",
    // top: "10px",
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#2BBF93",
  },
}));

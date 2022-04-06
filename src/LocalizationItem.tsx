import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import makeStyles from "@mui/styles/makeStyles";
import { ref, set } from "firebase/database";
import React from "react";
import { LANGUAGES } from "./Accrodion";
import { db } from "./Components/firebaseConfig";

interface Props {
  group: string;
  word: string;
  value: Record<typeof LANGUAGES[number], string>;
}
// const xx : Record<typeof LANGUAGES[number], string> = {}
// console.log(Record<typeof LANGUAGES[number], string>)

export default function LocalizationItem(props: Props) {
  const { word, group } = props;
  const [value, setValue] = React.useState(props.value);
  console.log(" TYPEOF props.value", typeof props.value);
  console.log("LL", { ...props });
  console.log("props.valueprops.value", props.value);
  const classes = useStyles();

  const handleSave = (passedLang: any) => {
    set(ref(db, passedLang + "/" + group + "/" + word), value)
      .then(() => {
        alert(`success, value: ${value}`);
      })
      .catch((error) => {
        alert(`fail, value: ${value}`);
      });
  };

  return (
    <div className={classes.keyValue}>
      <label htmlFor="">{word}</label>
      <ListItem>
        {Object.keys(value).map((langVal) => {
          return (
            <div className={classes.fieldbtn}>
              {" "}
              <TextField
                value={value}
                variant="standard"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              <div className={classes.btnsContainer}>
                <Button variant="text">
                  <CloseIcon
                    onClick={(e) => setValue(props.value)}
                    className={classes.btn}
                  />
                </Button>
                {/* <span>|</span> */}
                <Button variant="text">
                  <CheckIcon
                    onClick={() => {
                      handleSave("en");
                    }}
                    className={classes.btn}
                  />
                </Button>
              </div>
            </div>
          );
        })}
      </ListItem>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  keyValue: {
    display: "flex",
    alignItems: "center",
  },
  btnsContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "50px",
  },
  fieldbtn: {
    display: "flex",
    justifyContent: "space-between",
  },
  btn: {
    // margin: "25px",
  },
}));

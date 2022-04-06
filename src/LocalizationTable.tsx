import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import { ref, set } from "firebase/database";
import * as React from "react";
import { db } from "./Components/firebaseConfig";

// import {db} from './Components/firebaseConfig/index'
function generate(element: React.ReactElement) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList(props: any) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [fields, setFields] = React.useState<string[] | undefined>();
  const classes = useStyles();

  const { data, group, lang } = props;
  // console.log("PROPS: ", data);

  const handleSave = (word: string) => {
    set(ref(db, lang + "/" + group + "/" + word), {
      fields,
    })
      .then(() => {
        alert(`success, fields: ${fields}`);
      })
      .catch((error) => {
        alert(`fail, fields: ${fields}`);
      });
  };
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Text only
          </Typography>
          <Demo>
            <List dense={dense}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                {Object.keys(data).map((word, index) => {
                  // console.log("word", word);
                  const keyWord = word;
                  const translations = data[word];
                  // console.log("translations", translations);

                  return generate(
                    <div className={classes.keyValue}>
                      <label htmlFor="">{keyWord}</label>
                      <ListItem>
                        <TextField
                          defaultValue={translations}
                          id={word}
                          label=""
                          variant="standard"
                          onChange={(e) => {
                            setFields(e.target.value as any);
                          }}
                        />
                        <Button variant="text">
                          <div className={classes.btnsContainer}>
                            <CloseIcon
                              onClick={(e) => alert("cancle")}
                              className={classes.btn}
                            />
                            <span>|</span>
                            <CheckIcon
                              onClick={() => handleSave(word)}
                              className={classes.btn}
                            />
                          </div>
                        </Button>
                      </ListItem>
                    </div>
                  );
                })}
              </Box>
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
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
  },
  btn: {
    margin: "5px",
    // border: "1px solid d",
  },
}));

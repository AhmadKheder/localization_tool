import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import * as React from "react";

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
  const classes = useStyles();

  const { data } = props;
  console.log("PROPS: ", data);

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
                  console.log("word", word);
                  const keyWord = word;
                  const translations = data[word];
                  console.log("translations", translations);

                  return generate(
                    <div className={classes.keyValue}>
                      <label htmlFor="">{keyWord}</label>
                      <ListItem>
                        <TextField
                          value={translations}
                          id="standard-basic"
                          label=""
                          variant="standard"
                        />
                      </ListItem>
                    </div>
                  );
                })}
                {/* data = common: {save: 'حفظ', submit: 'إرسال'}
                         students: {title: 'الطلاب'} */}
                {/* {Object.keys(data).map((key) => {
                  const group = data[key]; //{save: 'حفظ', submit: 'إرسال'} {title: 'الطلاب'}
                  console.log("group: ", group);
                  return Object.keys(group).map((word, index) => {
                    console.log("word", word);
                    const keyWord = word;
                    const translations = group[word];
                    return generate(
                      <div className={classes.keyValue}>
                        <label htmlFor="">{keyWord}</label>
                        <ListItem>
                          <TextField
                            value={translations}
                            id="standard-basic"
                            label=""
                            variant="standard"
                          />
                        </ListItem>
                      </div>
                    );
                  });
                })} */}
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
}));

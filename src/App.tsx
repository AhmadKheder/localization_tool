import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import CustomizedAccordions from "./Accrodion";

function App() {
  const classes = useStyles();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2BBF93",
      },
    },
    shape: {
      borderRadius: 10,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.App}>
        <Typography variant="h4" component="h2" className={classes.title}>
          Localization
        </Typography>
        <div className={classes.tableContainer}>
          <div className={classes.localizationBar}>
            {["Key", "English", "Turkish", "Arabic", "Reviewed By Ali"].map(
              (title) => {
                return (
                  <div className={classes.barTyposContainer}>
                    <Typography className={classes.barText}>{title}</Typography>
                  </div>
                );
              }
            )}
          </div>
          <CustomizedAccordions />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
const useStyles = makeStyles(() => ({
  App: {
    margin: 0,
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "32px",
    lineHeight: "48px",
    width: "100%",
    height: "48px",
  },
  tableContainer: {
    border: "1px dashed red",
  },
  localizationBar: {
    display: "flex",
    height: "48px",
    backgroundColor: "#F6F6F8",

    borderRadius: "8px",
  },
  barTyposContainer: {
    width: "100%",
    height: "48px",

    borderRadius: "8px",
  },
  barText: {
    height: "24px",
  },
}));

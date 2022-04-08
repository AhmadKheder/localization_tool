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
    margi: 0,
    boxSizing: "border-box",
    height: "100%",
    fontFamily: "Segoe UI",

    letterSpacing: "0px",
    textAlign: "left",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "32px",
    lineHeight: "48px",
    height: "48px",
  },
  tableContainer: {
    // border: "2px dashed purple",
  },
  localizationBar: {
    display: "flex",
    height: "48px",
    backgroundColor: "#F6F6F8",
    borderRadius: "8px",
  },
  barTyposContainer: {
    display: "flex",
    justifyContent: "center",

    width: "100%",
    height: "48px",
    borderRadius: "8px",
  },
  barText: {
    display: "flex",
    alignItems: "center",
  },
}));

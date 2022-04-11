import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import CustomizedAccordions from "./Components/Accrodion";
// import CustomizedAccordions from "./Accrodion";

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
        <div className={classes.tableContainer}>
          <Typography variant="h4" component="h2" className={classes.title}>
            Localization
          </Typography>
          <div className={classes.localizationBar}>
            {["Key", "English", "Turkish", "Arabic", "Reviewed"].map(
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
    display: "flex",
    flexDirection: "column",
    margi: 0,
    boxSizing: "border-box",
    height: "100%",
    fontFamily: "Segoe UI",
    letterSpacing: "0px",
    textAlign: "left",
    backgroundColor: "#FFFFFF",
  },
  title: {
    display: "flex",
    width: "80%",
    fontFamily: "Segoe UI",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "32px",
    lineHeight: "48px",
    height: "48px",
  },
  tableContainer: {
    marginTop: 80,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    width: "80%",
  },
  localizationBar: {
    display: "flex",
    height: "48px",
    backgroundColor: "#F6F6F8",
    borderRadius: "8px",
  },
  barTyposContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "20px",
    width: "84%",
    height: "48px",
    borderRadius: "8px",
  },
  barText: {
    display: "flex",
    alignItems: "center",
  },
}));

import makeStyles from "@mui/styles/makeStyles";
import { ref } from "firebase/database";
import React from "react";
import { useList } from "react-firebase-hooks/database";
import CustomizedAccordions from "../../Accrodion";
import { db } from "../firebaseConfig";

interface Props {}

function ReadData(props: Props) {
  const {} = props;
  const [snapshots, loading, error] = useList(ref(db));

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Read Data</h1>
      <CustomizedAccordions />
      {snapshots?.map((obj) => {
        const language = obj.key;
        const languageValues = obj.val();
        const languageSubkeys = obj.child("common").val();
        <CustomizedAccordions data={{ language }} />;

        console.log("obj.key:  ", language);
        console.log(" obj.val():  ", languageValues);
        console.log(" typeof obj.val():  ", typeof languageValues);
        console.log(
          " Object.keys(languageValues):  ",
          Object.keys(languageValues)
        );
        Object.keys(languageValues).map(function (key, index) {
          console.log("languageValues[key]>>", languageValues[key]);
          Object.keys(languageValues[key]).map((pair) => {
            console.log("pair//:", pair);
            console.log(
              "languageValues[key][pair]://",
              languageValues[key][pair]
            );
          });
        });

        console.log('obj.child("common").val():  ', languageSubkeys);
      })}
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default React.memo(ReadData);

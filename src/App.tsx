import React from "react";
import CustomizedAccordions from "./Accrodion";
// import { withNamespaces } from 'react-i18next';

function App(t?: any) {
  // const classes = useStyles();

  // const [snapshots, loading, error] = useList(ref(db));
  // const [lan, setLan] = useState("lanlguage");
  /* const layout = () => {
    snapshots?.map((obj) => {
      const language = obj.key;
      const languageValues = obj.val();
      const languageSubkeys = obj.child("common").val();

      console.log("obj.key:  ", language);
      console.log(" obj.val():  ", languageValues);
      console.log(" typeof obj.val():  ", typeof languageValues);
      console.log(
        "Object.keys(languageValues):  ",
        Object.keys(languageValues)
      );
      Object.keys(languageValues).map(function (key, index) {
        console.log("languageValues[key]>>", languageValues[key]);
        Object.keys(languageValues[key]).map((pair: string) => {
          console.log("pair:??", pair);
          console.log(
            "languageValues[key][pair]:??",
            languageValues[key][pair]
          );
        });
      });

      // console.log('obj.child("common").val():  ', languageSubkeys);
    });
    return (
      <div className="MainKey">
        <div className={classes.subKey}>
          <input
            className={classes.input}
            type="text"
            name="subKeyLable"
            id=""
            defaultValue={lan}
          />
          <input
            className={classes.input}
            type="text"
            name="subKeyEnDisc"
            id=""
          />
          <input
            className={classes.input}
            type="text"
            name="subKeyTrDisc"
            id=""
            defaultValue={"subKeyTrDisc"}
          />
          <input
            className={classes.input}
            type="text"
            name="subKeyArDisc"
            id=""
            defaultValue={"subKeyArDisc"}
          />
        </div>
      </div>
    );
  }; */

  return (
    <div className="App">
      <h1>Localization</h1>
      <CustomizedAccordions />
      {/*  {!loading && snapshots && (
        <div className="MainKey">
          <h4>ok</h4>
         
          <div className={classes.subKey}>
            <input
              className={classes.input}
              type="text"
              name="subKeyLable"
              id=""
              defaultValue={lan}
            />
            <input
              className={classes.input}
              type="text"
              name="subKeyEnDisc"
              id=""
            />
            <input
              className={classes.input}
              type="text"
              name="subKeyTrDisc"
              id=""
              defaultValue={"subKeyTrDisc"}
            />
            <input
              className={classes.input}
              type="text"
              name="subKeyArDisc"
              id=""
              defaultValue={"subKeyArDisc"}
            />
          </div> 
        </div>
      )} */}
    </div>
  );
}

export default App;

// const useStyles = makeStyles({
//   subKey: {
//     display: "flex",
//     width: "400px",
//   },
//   input: {
//     margin: "10px",
//   },
// });

// function useStyles() {
//   throw new Error("Function not implemented.");
// }

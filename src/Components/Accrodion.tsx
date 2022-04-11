import makeStyles from "@mui/styles/makeStyles";
import { ref } from "firebase/database";
import React from "react";
import { useObjectVal } from "react-firebase-hooks/database";
import { db } from "../config/firebase";
import NewGroupForm from "./NewGroupForm";
import Tuple from "./Tuple";
interface Props {}

export type LocalizationLanguageObj = Record<string, Record<string, string>>;

export const LANGUAGES = ["en", "tr", "ar"] as const;

export interface Localizations {
  en: LocalizationLanguageObj;
  ar: LocalizationLanguageObj;
  tr: LocalizationLanguageObj;
}

export default function CustomizedAccordions(Props: any) {
  const [localizations, loading, error] = useObjectVal<Localizations>(ref(db));
  const classes = useStyles();
  console.log({ localizations });
  if (!localizations) {
    return <span>loading...</span>;
  }

  return (
    <div>
      {error && <strong>Error: {error}</strong>}
      {loading && <span>List: Loading...</span>}

      {Object.keys(localizations.en).map((group) => {
        return <Tuple group={group} localizations={localizations} />;
      })}
      <NewGroupForm />
    </div>
  );
}

const useStyles = makeStyles(() => ({
  toggle: {
    display: "none",
  },
  view: {
    display: "block",
  },
  accordion: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    height: "40px",
  },
}));

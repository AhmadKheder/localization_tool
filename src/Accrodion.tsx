import { ref } from "firebase/database";
import React from "react";
import { useObjectVal } from "react-firebase-hooks/database";
import { db } from "./Components/firebaseConfig";
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

  if (!localizations) {
    return <span>loading...</span>;
  }

  return (
    <div>
      <h1>Accordion</h1>
      {error && <strong>Error: {error}</strong>}
      {loading && <span>List: Loading...</span>}

      {Object.keys(localizations.en).map((group) => {
        console.log("1-GROUP? ", group);
        console.log("1-LOCALIZATIONS? ", localizations);
        return <Tuple group={group} localizations={localizations} />;
      })}
    </div>
  );
}

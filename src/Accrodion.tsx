import { ref } from "firebase/database";
import React from "react";
import { useObjectVal } from "react-firebase-hooks/database";
import { db } from "./Components/firebaseConfig";
import Tuple from "./Tuple";
interface Props {}

interface Localization {
  en: Record<string, Record<string, string>>;
  ar: Record<string, Record<string, string>>;
  tr: Record<string, Record<string, string>>;
}

export default function CustomizedAccordions(Props: any) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [localizations, loading, error] = useObjectVal<Localization>(ref(db));

  console.log("{ localizations }:");
  console.log({ localizations });

  if (!localizations) {
    return <span>loading...</span>;
  }
  return (
    <div>
      <h1>Accordion</h1>
      {error && <strong>Error: {error}</strong>}
      {loading && <span>List: Loading...</span>}

      {Object.keys(localizations.en).map((group) => {
        return (
          <Tuple data={localizations.en[group]} lang={"en"} group={group} />
        );
      })}
    </div>
  );
}

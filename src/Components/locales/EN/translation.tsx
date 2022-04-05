import { ref } from "firebase/database";
import { useState } from "react";
import { useList } from "react-firebase-hooks/database";
import { db } from "../../firebaseConfig";
export function TRANSLATIONS_EN() {
  const [snapshots, loading, error] = useList(ref(db));
  const [English, setEnglish] = useState("");
  console.log("English", English);
  {
    async () => {
      await snapshots?.map((obj) => {
        const language = obj.key;
        const languageValues = obj.val();
        setEnglish(obj.val());
      });
    };
  }
  return <>{English}</>;
}

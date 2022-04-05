import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ref } from "firebase/database";
import * as React from "react";
import { useList } from "react-firebase-hooks/database";
import { db } from "./Components/firebaseConfig";
import InteractiveList from "./LocalizationTable";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
////////////////
interface Props {}

export default function CustomizedAccordions(Props: any) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [snapshots, loading, error] = useList(ref(db));
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  // React.useEffect(() => {}, snapshots);

  return (
    <div>
      <h1>Accordion</h1>
      {error && <strong>Error: {error}</strong>}
      {loading && <span>List: Loading...</span>}

      {snapshots?.map((obj, index) => {
        const languageValues = obj.val();
        // console.log("obj.key", Object.keys(obj.key));
        console.log("snapshots[obj.key]: ", obj);

        console.log("languageValues: ", languageValues);
        // console.log("obj : ", obj.val());
        if (obj.key == "en") {
          return Object.keys(languageValues).map((key, idx) => {
            console.log("key: ", key);
            // Object.keys(key).map()
            return (
              <Accordion
                expanded={expanded === idx.toString()}
                onChange={handleChange(idx.toString())}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id={idx.toString()}
                >
                  <Typography>{key.toString()}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* {Object.keys(languageValues[key]).map((subkey, index) => {
                    console.log("subkey", subkey);
                    return <InteractiveList data={subkey} />;

                    // Object.keys(subkey).map((subkeyData, idx) => {});
                  })} */}
                  <InteractiveList data={obj.val()} />
                </AccordionDetails>
              </Accordion>
            );
          });
        }
      })}
    </div>
  );
}

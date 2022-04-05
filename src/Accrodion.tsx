import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ref } from "firebase/database";
import React from "react";
import { useObjectVal } from "react-firebase-hooks/database";
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

interface Props {}

interface Localization {
  en: Record<string, Record<string, string>>;
  ar: Record<string, Record<string, string>>;
  tr: Record<string, Record<string, string>>;
}

export default function CustomizedAccordions(Props: any) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [localizations, loading, error] = useObjectVal<Localization>(ref(db));
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

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
        console.log("key: ", group);
        return (
          <Accordion
            expanded={expanded === group}
            onChange={handleChange(group)}
          >
            <AccordionSummary aria-controls="panel1d-content" id={group}>
              <Typography>{group}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <InteractiveList data={localizations.en[group]} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

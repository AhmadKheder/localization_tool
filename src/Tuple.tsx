import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import InteractiveList from "./LocalizationTable";

interface Props {}

function Tuple(props: any) {
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const { group, data, lang } = props;
//   console.log("group+>", group);
//   console.log("lang+>", lang);
//   console.log("data+>", data);
  const classes = useStyles();

  return (
    <Accordion expanded={expanded === group} onChange={handleChange(group)}>
      <AccordionSummary aria-controls="panel1d-content" id={group}>
        <Typography>{group}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <InteractiveList data={data} group={group} lang={lang} />
      </AccordionDetails>{" "}
    </Accordion>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
  },
}));

export default React.memo(Tuple);

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

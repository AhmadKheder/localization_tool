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
import { Localizations } from "./Accrodion";
import InteractiveList from "./LocalizationTable";

interface Props {
  group: string;
  localizations: Localizations;
}

function Tuple(props: Props) {
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const { group, localizations } = props;

  const classes = useStyles();

  return (
    <Accordion
      expanded={expanded === group}
      onChange={handleChange(group)}
      sx={{ borderStyle: "none" }}
    >
      <AccordionSummary
        aria-controls="panel1d-content"
        id={group}
        sx={{ backgroundColor: "#FFFFFF", borderStyle: "none" }}
      >
        <Typography>{group}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <InteractiveList group={group} localizations={localizations} />
      </AccordionDetails>
    </Accordion>
  );
}

const useStyles = makeStyles(() => ({
  accordion: {
    backgroundColor: "#FFFFFF",
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

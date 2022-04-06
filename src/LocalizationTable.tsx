import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { zipObject } from "lodash";
import * as React from "react";
import { Localizations } from "./Accrodion";
import LocalizationItem from "./LocalizationItem";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

interface Props {
  localizations: Localizations;
  group: string;
}

const LANGUAGES = ["en", "tr", "ar"] as const;
export default function InteractiveList(props: Props) {
  const { localizations, group } = props;

  console.log("localizations.en[group]", localizations.en[group]);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Demo>
            <List>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                {Object.keys(localizations.en[group]).map((word) => {

                  const value = zipObject(
                    LANGUAGES,
                    LANGUAGES.map((lang) => localizations[lang][group][word])
                  ) as Record<typeof LANGUAGES[number], string>;




                  console.log("Value type is ===> ", value);


                  return (
                    <LocalizationItem
                      key={word}
                      word={word}
                      group={group}
                      value={value}
                      
                    />
                  );
                })}
              </Box>
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
const useStyles = makeStyles(() => ({
  keyValue: {
    display: "flex",
    alignItems: "center",
  },
  btnsContainer: {
    display: "flex",
    alignItems: "center",
  },
  btn: {
    margin: "5px",
  },
}));

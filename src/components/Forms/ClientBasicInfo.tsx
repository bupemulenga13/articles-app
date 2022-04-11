import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  Divider,
  CardContent,
  Box,
  TextField,
  Container,
  MenuItem,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { languages, sexes } from "../../utils/options";

export default function ClientBasicInfo() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Basic Information" />
            <Divider />
            <CardContent>
              <Box
                component="form"
                sx={{ flexGrow: 1 }}
                noValidate
                autoComplete="off"
              >
                <Grid container spacing={2} columns={16}>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      required
                      id="first_name"
                      label="First Name"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      required
                      id="last_name"
                      label="Last Name"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="middle_name"
                      label="Middle Name"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="nick_name"
                      label="Nick Name"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      id="sex"
                      select
                      label="Sex"
                      style={{ width: "90%" }}
                    >
                      {sexes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={8}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Date of Bith"
                        value={value}
                        minDate={new Date("2017-01-01")}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField style={{ width: "90%" }} {...params} />
                        )}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="age"
                      label="Age"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="outlined-search"
                      label="Client Photo"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      id="language"
                      select
                      label="Language"
                      style={{ width: "90%" }}
                    >
                      {languages.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="notes"
                      multiline
                      label="Additional Notes"
                      type="text"
                    />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

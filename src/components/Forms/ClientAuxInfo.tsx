import {
  Grid,
  Card,
  CardHeader,
  Divider,
  CardContent,
  Box,
  TextField,
  Container,
} from "@mui/material";

export default function ClientAuxiliaryInfo() {
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
            <CardHeader title="Auxiliary Information" />
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
                      id="nupin"
                      label="NUPN"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      required
                      id="nrc"
                      label="NRC"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      id="passport"
                      select
                      label="Passport No."
                      style={{ width: "90%" }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      id="drivers_license"
                      select
                      label="Drivers Licence No."
                      style={{ width: "90%" }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="art_number"
                      label="ART No."
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="nhima_number"
                      label="NHIMA No."
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="safe_motherhood_number"
                      label="Safe Motherhood No."
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

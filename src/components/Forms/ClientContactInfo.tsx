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

export default function ClientContactInfo() {
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
            <CardHeader title="Contact Information" />
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
                      id="primary_phone"
                      type="text"
                      label="Primary Phone"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="secondary_phone"
                      type="text"
                      label="Secondary Phone"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      id="passport"
                      type="email"
                      label="Email"
                      style={{ width: "90%" }}
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

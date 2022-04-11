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

export default function ClientRelationshipInfo() {
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
            <CardHeader title="Client Relationship" />
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
                      id="full_name"
                      label="Full Name"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="primary_phone"
                      type="text"
                      label="Primary Phone No."
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      id="secondary_phone"
                      type="text"
                      label="Secondary Phone No."
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

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
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function ClientBirthInfo() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Birth Information" />
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
                      id="place_of_birth"
                      label="Place of Birth"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="district_of_birth"
                      label="District of Birth"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="province_of_birth"
                      label="Province of Birth"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="country_of_origin"
                      label="Country of Origin"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Born in Zambia"
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

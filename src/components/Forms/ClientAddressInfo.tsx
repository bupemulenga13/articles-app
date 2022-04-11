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
import { districts, provinces } from "../../utils/options";

export default function ClientAddressInfo() {
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
            <CardHeader title="Address Information" />
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
                      id="house_number"
                      label="House Name"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="street_name"
                      label="Street Name"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      id="district_of_birth"
                      select
                      label="District of Birth"
                      style={{ width: "90%" }}
                    >
                      {districts.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      id="province_of_birth"
                      select
                      label="Province of Birth"
                      style={{ width: "90%" }}
                    >
                      {provinces.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="post_code"
                      label="Postal Code"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="landmarks"
                      label="Landmarks"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      style={{ width: "90%" }}
                      id="address_type"
                      label="Address Type"
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

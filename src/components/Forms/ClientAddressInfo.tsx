import React from 'react';
import {
  Grid,
  Card,
  CardHeader,
  Divider,
  CardContent,
  Box,
  TextField,
  Container,
  MenuItem
} from "@mui/material";

  
export default function ClientAddress() {
  return (
    <Container>
      <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
                <CardHeader title="Address Information" />
                <Divider />
                    
                <CardContent>
                    <Box component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off">

                      <div>
                          <TextField
                          required
                          id="place_of_birth"
                          label = "Place of Birth"                        
                          />
                          <TextField
                          required
                          id="district_of_birth"
                          label="District of Birth"
                          />
                          <TextField
                          required
                          id="province_of_birth"
                          label="Province of Birth"
                          />
                          <TextField
                          id="country_of_origin"
                          label="Country of Origin"
                          />
                          <TextField
                          id="born_in_zambia"
                          label="Born in Zambia"
                          />
                      </div>

                    </Box>
                </CardContent>
                </Card>
          </Grid>
      </Grid>
    </Container>
  );
}

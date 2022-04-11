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

const sexes = [
    {
      value: 1,
      label: 'Female',
    },
    {
      value: 2,
      label: 'Male',
    },
    {
      value: 3,
      label: 'Transgender',
    },
    {
      value: 4,
      label: 'Other',
    },
  ];

  const languages = [
    {
        value: 1,
        label: 'Bemba',
      },
      {
        value: 2,
        label: 'English',
      },
      {
        value: 3,
        label: 'French',
      },
      {
        value: 4,
        label: 'Spanish',
      },
  ]
  
export default function RequiredInfo() {
  const [sex, setSex] = React.useState('Unknown');
  const [language, setLanguage] = React.useState('Unknown');

    // const [dateValue, setDateValue] = React.useState<Date | null>(null);

    const handleSexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSex(event.target.value);      };

      const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLanguage(event.target.value);      };
  return (
    <Container>
      <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
                <CardHeader title="Required Info" />
                <Divider />
                    
                <CardContent>
                    <Box component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off">

                      <div>
                          {/* Client UUID */}
                          <TextField
                          required
                          id="client_uuid"
                          label = "Client UUID"                        
                          />
                          {/* First Name */}
                          <TextField
                          required
                          id="first_name"
                          label="First Name"
                          />
                          {/* Last Name */}
                          <TextField
                          required
                          id="last_name"
                          label="Last Name"
                          />
                          {/* Middle Name */}
                          <TextField
                          id="middle_name"
                          label="Middle Name"
                          />
                          {/* Nick Name */}
                          <TextField
                          id="nick_name"
                          label="Nick Name"
                          />
                          {/* Date of Birth */}
                          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <DatePicker
                              label="Date of Birth"
                              value={dateValue}
                              onChange={
                                  (newDateValue) => {
                                      setDateValue(newDateValue);                                  }
                              }
                              renderInput={(params) => <TextField {...params}/>}
                             
                              />
                          </LocalizationProvider> */}
                          {/* Sex */}
                          <TextField
                          id="sex"
                          select
                          label="Sex"
                          value={sex}
                          onChange={handleSexChange}
                          >
                              {sexes.map((option) => (
                                  <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                  </MenuItem>
                              ))}
                          </TextField>
                          {/* Age */}
                          <TextField
                          id="age"
                          label="Age"
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          />
                          {/* Estimate Age */}
                          <TextField
                          id="estimated_age"
                          label="Estimated Age"
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}/>
                          {/* Language */}
                          <TextField
                          id="language"
                          select
                          label="Language"
                          value={language}
                          onChange={handleLanguageChange}
                          >
                              {languages.map((option) => (
                                  <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                  </MenuItem>
                              ))}
                          </TextField>
                          {/* Notes */}
                          <TextField
                          id="notes"
                          multiline
                          label="Client Notes"
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

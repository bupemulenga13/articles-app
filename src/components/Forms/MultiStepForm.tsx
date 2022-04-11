import * as React from "react";
import ClientBasicInfo from "./ClientBasicInfo";
import ClientBirthInfo from "./ClientBirthInfo";
import ClientAddressInfo from "./ClientAddressInfo";
import ClientContactInfo from "./ClientContactInfo";
import ClientAuxiliaryInfo from "./ClientAuxInfo";
import ClientRelationshipInfo from "./ClientRelationshipInfo";
import {
  Step,
  Box,
  Stepper,
  Button,
  StepLabel,
  Typography,
  Grid,
} from "@mui/material";

import { useForm, FormProvider } from "react-hook-form";

import { IRegistration } from "../../store/interfaces/registration.interface";

function getSteps() {
  return [
    "Personal details",
    "Birth details",
    "Client Address",
    "Client Contact",
    "Auxiliary Details",
    "Client Relationships",
  ];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <ClientBasicInfo />;
    case 1:
      return <ClientBirthInfo />;
    case 2:
      return <ClientAddressInfo />;
    case 3:
      return <ClientContactInfo />;
    case 4:
      return <ClientAuxiliaryInfo />;
    case 5:
      return <ClientRelationshipInfo />;
    default:
      return "Unknown step";
  }
}

export default function HorizontalLinearStepper() {
  const stateData = useForm<IRegistration>({
    defaultValues: {
      client_uuid: "",
      first_name: "",
      last_name: "",
      middle_name: "",
      nick_name: "",
      date_of_birth: new Date(),
      sex: "",
      age: 0,
      estimated_age: 0,
      language: "",
      notes: "",
    },
  });

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = getSteps();

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Thank you - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <FormProvider {...stateData}>
            <form onSubmit={stateData.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}
              <Grid>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ mt: "2em" }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mx: "1em" }}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>

                  <Button variant="contained" color="warning">
                    Quick Register
                  </Button>

                  {isStepOptional(activeStep) && (
                    <Button
                      variant="contained"
                      color="info"
                      sx={{ mx: "1em" }}
                      onClick={handleSkip}
                    >
                      Skip
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mx: "1em" }}
                    type="submit"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </Grid>
            </form>
          </FormProvider>
        )}
      </Box>
    </>
  );
}

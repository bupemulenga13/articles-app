import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RequiredInfo from './RequiredInfo';
import ClientBirthInfo from './ClientBirthInfo';
import ClientAddress from './ClientAddressInfo';
import ClientContact from './ClientContactInfo';
import ClientAux from './ClientAuxInfo';
import ClientRelationship from './ClientRelationshipInfo';
import {
  useForm,
  FormProvider,
} from "react-hook-form";

import { IRegistration } from '../../store/interfaces/registration.interface'

function getSteps() {
  return [
    'Personal details',
    'Birth details',
    'Client Address',
    'Client Contact',
    'Auxiliary Details',
    'Client Relationships'
  ]
}

function getStepContent(step: number){
   switch (step
    ) {
    case 0:
      return <RequiredInfo/>
    case 1:
      return <ClientBirthInfo/>
    case 2:
      return <ClientAddress/>      
    case 3:
      return <ClientContact/>      
    case 4:
      return <ClientAux/>      
    case 5:
      return <ClientRelationship/>        
    default:
      return "Unknown step"
  }
}

export default function HorizontalLinearStepper() {
  const stateData = useForm<IRegistration>({
    defaultValues:{
      client_uuid: '',
      first_name: '',
      last_name: '',
      middle_name:'',
      nick_name:'',
      date_of_birth: new Date(),
      sex:'',
      age:0,
      estimated_age: 0,
      language:'',
      notes:''
    }
  })
  
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
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
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
    <Box sx={{ width: '100%' }}>
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
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <FormProvider {...stateData}>
          <form onSubmit={stateData.handleSubmit(handleNext)}>
            {getStepContent(activeStep)}
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
          </form>
        </FormProvider>
      )}
    </Box>
  );
}

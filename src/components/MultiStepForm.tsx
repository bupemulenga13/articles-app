import { useState } from "react";
import { Box, Stepper, Step, StepLabel, Button, Typography } from "@mui/material";

const steps = ['Personal Information', 'Contact Information', 'Additional Information']

export default function MultiStpeFomr(){
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>())

}
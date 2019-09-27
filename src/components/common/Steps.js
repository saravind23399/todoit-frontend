import React from 'react';
import { Stepper, StepLabel, Step } from '@material-ui/core';

export default function Steps({ activeStep, steps }) {
  return (
    <Stepper activeStep={activeStep}>
      {steps.map((step, idx) => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

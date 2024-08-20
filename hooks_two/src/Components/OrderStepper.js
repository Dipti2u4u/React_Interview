// src/OrderStepper.js
import React from 'react';
import { Stepper, Step, StepLabel, Box } from '@mui/material';

const steps = ['Order Placed', 'Order Accepted', 'Preparing', 'Ready for Pickup'];

const OrderStepper = ({ currentStep }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={currentStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default OrderStepper;

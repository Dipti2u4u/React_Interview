// import React, { useState, useEffect } from "react";
// import OrderStepper from "./Components/OrderStepper";
// import { Box } from "@mui/material";

// function App() {
//   const [currentStep, setCurrentStep] = useState(0);

//   useEffect(() => {
//     const stepDurations = [2000, 4000, 6000, 8000];

//     if (currentStep < stepDurations.length) {
//       const timer = setTimeout(() => {
//         setCurrentStep(currentStep + 1);
//       }, stepDurations[currentStep]);

//       return () => clearTimeout(timer);
//     }
//   }, [currentStep]);

//   return (
//     <Box sx={{ p: 2 }}>
//       <OrderStepper currentStep={currentStep} />
//     </Box>
//   );
// }

// export default App;





import React from 'react'
import ToggleButton from './Components/ToggleButton'

const App = () => {
  return (
    <>
    <ToggleButton label="Notifications" />
    <ToggleButton label="Subscribe" />
    </>
  )
}

export default App
/* factorial of a number without usememo hook */

// import React, { useState } from "react";

// const Memohook = () => {
//   const [number, setNumber] = useState();
//   const factorial = (num) => {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//       fact = fact * i;
//     }
//     return fact;
//   };

//   return (
//     <>
//       <h2>Factorial</h2>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//       />
//       <p>Factorial of a {number} is {factorial(number)}</p>
//     </>
//   );
// };

// export default Memohook;

/* factorial of a number with usememo hook */

// import React, { useState, useMemo } from "react";

// const Memohook = () => {
//   const [number, setNumber] = useState();

//   const factorial = (num) => {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//       fact = fact * i;
//     }
//     return fact;
//   };

//   const memoizeFactorial = useMemo(() => factorial(number), [number]);

//   return (
//     <>
//       <h2>Factorial using useMemo hook</h2>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//       />
//       <p>
//         Factorila of {number} is {memoizeFactorial}
//       </p>
//     </>
//   );
// };

// export default Memohook;



/*-----------Best Example with useMemo hook---------- */


// import React, { useState, useMemo } from 'react';

// const SquareCalculator = () => {
//   const [number, setNumber] = useState(0);
//   const [count, setCount] = useState(0);

//   const calculateSquare = (num) => {
//     console.log('Calculating square...');
//     return num * num;
//   };

//   const squaredNumber = useMemo(() => calculateSquare(number), [number]);

//   return (
//     <div>
//       <h1>Square Calculator</h1>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(Number(e.target.value))}
//       />
//       <p>Square of {number} is: {squaredNumber}</p>
//       <button onClick={() => setCount(count + 1)}>Re-render</button>
//       <p>Render count: {count}</p>
//     </div>
//   );
// };

// export default SquareCalculator;


/*-----------Best Example without useMemo hook---------- */

import React, { useState } from 'react';

const SquareCalculator = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const calculateSquare = (num) => {
    console.log('Calculating square...');
    return num * num;
  };

  const squaredNumber = calculateSquare(number);

  return (
    <div>
      <h1>Square Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Square of {number} is: {squaredNumber}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <p>Render count: {count}</p>
    </div>
  );
};

export default SquareCalculator;

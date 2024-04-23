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

import React, { useState, useMemo } from "react";

const Memohook = () => {
  const [number, setNumber] = useState();

  const factorial = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }
    return fact;
  };

  const memoizeFactorial = useMemo(() => factorial(number), [number]);

  return (
    <>
      <h2>Factorial using useMemo hook</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>
        Factorila of {number} is {memoizeFactorial}
      </p>
    </>
  );
};

export default Memohook;

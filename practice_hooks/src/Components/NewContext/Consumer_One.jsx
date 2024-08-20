// import React, { useContext } from "react";
// import { MessageContext } from "./Context";

// const Consumer_One = () => {
//   const { message, count, handleIncrease, handleDecrese, handleReset } =
//     useContext(MessageContext);

//   return (
//     <>
//       <p>{message}</p>
//       <h3>Count : {count}</h3>
//       <button onClick={handleIncrease}>Increment</button>
//       <button onClick={handleDecrese}>Decrement</button>
//       <button onClick={handleReset}>Reset</button>
//     </>
//   );
// };

// export default Consumer_One;



/*--------------------using reducer------------------*/

import React, { useContext } from "react";
import { MessageContext } from "./Context";

const Consumer_One = () => {
  const { count,dispatch } =
    useContext(MessageContext);

    const handleIncrease = ()=>{
      dispatch({type:'increment'})
    }
    const handleDecrease = ()=>{
      dispatch({type:'decrement'})
    }
    const handleReset = ()=>{
      dispatch({type:'reset'})
    }

  return (
    <>
      <h3>Count : {count}</h3>
      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrease}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Consumer_One;

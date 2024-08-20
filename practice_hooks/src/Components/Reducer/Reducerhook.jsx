// import React, { useReducer } from "react";

// const Reducerhook = () => {
//   const counterReducer = (state, action) => {
//     switch (action.type) {
//       case "increment":
//         return { count: state.count + 1 };
//       case "decrement":
//         return { count: state.count - 1 };
//       case 'reset':
//         return {count: 0}
//       default:
//         return state;
//     }
//   };
//   const [state, dispatch] = useReducer(counterReducer, { count: 0 });
//   return (
//     <>
//       <h2>value:{state.count} </h2>
//       <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
//       <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
//       <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
//     </>
//   );
// };

// export default Reducerhook;


import React, { useReducer } from 'react'

const Reducerhook = () => {

  const counterReducer = (state,action)=>{
      switch(action.type){
        case "increment":
          return {count:state.count + 1}
        case 'decrement':
          return {count:state.count - 1}
        case "reset":
          return {count:0}
        default:
          return state
      }
  }
  const [state,dispatch] = useReducer(counterReducer,{count:0})

  return (
    <>
    <h2>Value:{state.count}</h2>
    <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
    <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
    <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </>
  )
}

export default Reducerhook
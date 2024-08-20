/* useRef can also be used to store mutable values that persist across renders without causing re-renders. This is because changing the current property of a ref doesn't trigger a re-render. It's often used to keep track of values that need to persist between renders but don't need to trigger a re-render when they change, such as previous state values or flags. */

// import React, { useRef, useEffect } from 'react';

// function UseRefhook() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//     /*When the component mounts, the input field will automatically receive focus, allowing the user to start typing without having to click on it. */
//   }, []);

//   return (
//     <div>
//       <input ref={inputRef} placeholder="Type here" />
//     </div>
//   );
// }

// export default UseRefhook;

/*--------------- Accessing DOM Elements Imperatively---------------- */

// import React, { useRef } from 'react';

// function MyComponent() {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }

// export default MyComponent;

/* ----------Preserving Mutable Values Without Causing Re-renders:------ */

// import React, { useRef } from "react";

// const UseRefhook = () => {

//   const counterRef = useRef(0)

//   const handleClick = () => {
//     counterRef.current = counterRef +1 
//     // counterRef.current += 1;
//     // console.log(counterRef.current)
//   };

//   return (
//     <>
//     <p>{counterRef.current}</p>
//       <button onClick={handleClick}>Increment</button>
//     </>
//   );
// };

// export default UseRefhook;

// import React, { useRef, useEffect } from "react";

// const TimerExample = () => {
//   const intervalRef = useRef(null);
//   const secondsRef = useRef(0);

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       secondsRef.current += 1;
//       console.log("Elapsed time:", secondsRef.current, "seconds");
//     }, 1000);

//     return () => clearInterval(intervalRef.current);
//   }, []);

//   return (
//     <div>
//       <h2>Timer (useRef)</h2>
//       <p>Elapsed time: {secondsRef.current} seconds</p>
//       <button onClick={() => clearInterval(intervalRef.current)}>
//         Stop Timer
//       </button>
//     </div>
//   );
// };

// export default TimerExample;



// import React, { useRef, useState } from 'react';

// function ClickCounter() {
//   const countRef = useRef(0);
//   const [renderCount, setRenderCount] = useState(0);

//   console.log('component is rendering')

//   const handleClick = () => {
//     countRef.current += 1; // This does not cause a re-render
//     console.log('countRef.current:', countRef.current);
//     setRenderCount(renderCount + 1); // This triggers a re-render
//   };

//   return (
//     <div>
//       <p>Button clicked: {countRef.current} times</p>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default ClickCounter;





/* -------------Uncontrolled component -------------------*/
// import React,{useRef} from 'react'

// const UseRefhook = () => {
//     const inputRef = useRef(null)
//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         alert(`input value is ${inputRef.current.value}`)
//     }
//   return (
//     <>
//         <form onSubmit={handleSubmit}>
//             <label>Uncontrolled Component</label><br />
//             <input 
//             type = 'text' 
//             placeholder='enter text'
//             ref = {inputRef}
//             />
//             <button>Submit</button>
//         </form>
//     </>
//   )
// }

// export default UseRefhook



/*----------------Controlled Component ----------------*/
import React, { useState } from 'react'

const UseRefhook = () => {
    const [inputValue,setInputvalue] = useState('')

    const handleChange = (e)=>{
        setInputvalue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(`input value is ${inputValue}`)
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            value={inputValue} 
            onChange={handleChange}
            />
            <button>Submit</button>
        </form>
        <p>Entered value is : {inputValue}</p>
    </>
  )
}

export default UseRefhook
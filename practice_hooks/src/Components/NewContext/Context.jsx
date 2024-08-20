// import React, { createContext, useState } from "react";

// export const MessageContext = createContext()

// export const MessageProvider = ({children})=>{
//     const message = "hello context"
//     const [count,setCount] = useState(0)
//     const handleIncrease = ()=>{
//         setCount(count + 1)
//     }
//     const handleDecrese = ()=>{
//         setCount(count - 1)
//     }
//     const handleReset = ()=>{
//         setCount(0)
//     }
//     return (
//         <MessageContext.Provider value = {{message,count,handleDecrese,handleIncrease,handleReset}}>
//             {children}
//         </MessageContext.Provider>
//     )
// }



// using reducer

import React, { createContext, useReducer } from "react";

export const MessageContext = createContext()

export const MessageProvider = ({children})=>{
    const messageReducer = (state,action)=>{
        switch(action.type){
            case 'increment':
                return ({count:state.count + 1})
            case 'decrement':
                return ({count:state.count - 1})
            case 'reset':
                return ({count:0})
            default:
                throw new Error('unknown action type')
        }
    }
    const [state,dispatch] = useReducer(messageReducer,{count:0})
    return(
        <MessageContext.Provider value = {{count:state.count,dispatch}}>
            {children}
        </MessageContext.Provider>
    )
}
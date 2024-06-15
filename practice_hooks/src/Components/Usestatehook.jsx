/* using class component */

/*import React, { Component } from "react";

class Usestatehook extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
    }
    Increment = () => {
        this.setState({count : this.state.count + 1})
    };
  render() {
    return (
        <>
        <p>Count : {this.state.count}</p>
        <button onClick={this.Increment}>Increment</button>
        </>
    )
  }
}
export default Usestatehook;*/

/* Same code using Functional Component */

/*import React from 'react'
import { useState } from 'react'
const Usestatehook = () => {

    const [count, setcount] = useState(0)

    const Increment = () => {
        setcount(count + 1);
    }

  return (
    <div>
        <p>Count is : {count} </p>
        <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default Usestatehook*/

/* Updating the state based on previous state value using useState hook */

/*import React, { useState } from "react";

const Usestatehook = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const reset = () => {
    setCount(prevCount => 0);
  };

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Usestatehook;*/

/* Managing complex state using useState hook */

// import React, { useState } from "react";

// const Usestatehook = () => {
//   const [user, setUser] = useState({ username: "", email: "", age: '' });

//   const handleUserNameChange = (event) => {
//     setUser({ ...user, username: event.target.value });
//   };

//   const handleEmailChange = (event) => {
//     setUser({ ...user, email: event.target.value });
//   };

//   const handleAgeChange = (event) => {
//     setUser({ ...user, age: parseInt(event.target.value) });
//   };

//   return (
//     <div>
//       <h2>Complex State Management</h2>
//       <form>
//         <label>UserName : </label>
//         <input
//           type="text"
//           value={user.username}
//           onChange={handleUserNameChange}
//         />
//         <br />
//         <label>Email : </label>
//         <input type="text" value={user.email} onChange={handleEmailChange} />
//         <br />
//         <label>Age : </label>
//         <input type="text" value={user.age} onChange={handleAgeChange} />
//         <br />
//       </form>
//       <div>
//         <h3>UerInformatio</h3>
//         <p>UserName : {user.username}</p>
//         <p>Email : {user.email}</p>
//         <p>Age : {user.age}</p>
//       </div>
//     </div>
//   );
// };

// export default Usestatehook;

/* Map functionality in react */

/*import React from 'react'

const Usestatehook = () => {
  const Names = ["Jamu","Chintu","Pintu","Santu"]

  const Name_Items = Names.map((name,index)=>(
    <li key = {index}>{name}</li>
  ))

  return (
    <div>
      <ul>{Name_Items}</ul>
    </div>
  )
}

export default Usestatehook*/

/* Array of Objects representing a list of Tasks */

// import React, { useState } from "react";

// const Usestatehook = () => {
//   const [tasks, setTask] = useState([
//     { id: 1, title: "Reading Books", completed: false },
//     { id: 2, title: "Doing Exercise", completed: false },
//     { id: 3, title: "Go to Office", completed: false },
//   ]);

//   const addTask = () => {
//     const newTask = {
//       id: tasks.length + 1,
//       title: "Having Fun",
//       completed: false,
//     };
//     setTask([...tasks, newTask]);
//   };

//   const toggleTaskCompletion = (taskId) => {
//     const updateTask = tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     );
//     setTask(updateTask);
//   };

//   const deleteTask = (taskId) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTask(updatedTasks);
//   };

//   return (
//     <>
//       <h2>My Daily Task Lists</h2>
//       <button onClick={addTask}>Add Task</button>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>{task.title}</li>
//         ))}
//       </ul>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => toggleTaskCompletion(task.id)}
//             />
//             <span
//               style={{
//                 textDecoration: task.completed ? "line-through" : "none",
//               }}
//             >
//               {task.title}
//             </span>
//             <button onClick={() => deleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Usestatehook;




// import React, { useState } from "react";

// const Usestatehook = () => {

//   const [backgroundColor,setBackgroundColor] = useState('red')
//   const changeBackgroung = ()=>{
//     setBackgroundColor('green')
//   }

//   return (
//     <>
//       <div
//         className="main"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "50vh",
//           flexDirection:'column'
//         }}
//       >
//         <div
//           className="sub"
//           style={{
//             backgroundColor: backgroundColor,
//             height: "100px",
//             width: "100px",
//           }}
//         ></div>
//         <button onClick={changeBackgroung}>click</button>
//       </div>
      
//     </>
//   );
// };

// export default Usestatehook;

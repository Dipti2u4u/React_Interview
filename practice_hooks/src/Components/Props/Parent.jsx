/* Simple props */

// import React from "react";
// import Child from "./Child";

// const Parent = () => {
//   return (
//     <>
//       <Child name="Dipti" age={30} />
//     </>
//   );
// };

// export default Parent;

/* -------------------- Dynamic Props ----------------------------------*/

//Props can be dynamic, meaning they can be variables or values that change over time. This allows you to create reusable components that can adapt to different data.

// import React from "react";
// import Child from "./Child";

// const Parent = () => {
//   const user = { name: "Dipti Prasad", age: 25 };
//   return (
//     <div>
//       <Child name={user.name} age={user.age} />
//     </div>
//   );
// };

// export default Parent;

/*-----------------Rendering a List of user using props------------------- */
// import React from "react";
// import Child from "./Child";

// const Parent = () => {
//   const users = [
//     { id: 1, name: "Dipti prasad", age: 27 },
//     { id: 2, name: "Chatu prasad", age: 29 },
//     { id: 3, name: "jamu prasad", age: 21 },
//   ];
//   return (
//     <>
//       {users.map((user) => (
//         <Child key={user.id} name={user.name} age={user.age}/>
//       ))}
//     </>
//   );
// };

// export default Parent;

/*--------------------Using Props in event handler ---------------------------*/
// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   const handleClick = ()=>{
//     alert('button is clicked')
//   }
//   return (
//     <div>
//       <Child onClick={handleClick}/>
//     </div>
//   )
// }

// export default Parent

/* -----------------------passing staudent array usimg props --------------------*/

// import React from "react";
// import Child from "./Child";

// const Parent = () => {
//   const students = [
//     { id: 1, name: "John", age: 20 },
//     { id: 2, name: "Alice", age: 22 },
//     { id: 3, name: "Bob", age: 21 },
//   ];

//   return (
//     <div>
//       {/* <Child {...{ students }} /> */}
//       <Child data={students} />
//     </div>
//   );
// };

// export default Parent;





/*-------------------------- Props with useState Hook------------------------- */
import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [students,setStudents] = useState([
    {id:1,name:'Chintu',Age:5},
    {id:2,name:'Pintu',Age:6},
    {id:3,name:'Santu',Age:2}
  ])

  const addStudent = () => {
    const newStudent = {id:students.length + 1,name:'jamu',Age:8}
    setStudents([...students,newStudent])
  }

  const removeStudent = (id)=>{
      setStudents(students.filter((student)=>student.id !== id))
  }

  return (
    <>
      <button onClick={addStudent}>Add</button>
      <Child data={students} removeStudent={removeStudent}/>
    </>
  )
}

export default Parent

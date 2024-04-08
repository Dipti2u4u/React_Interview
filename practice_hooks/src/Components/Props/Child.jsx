// import React from "react";

// const Child = (props) => {
//   // props.name = "Jane";

//   // Here if we try to change the props value within the component , then it will show error as PROPS ARE IMMUTABLE

//   return (
//     <div>
//       <p>Name : {props.name}</p>
//       <p>Age : {props.age}</p>
//     </div>
//   );
// };

// export default Child;

/*--------------------------Rending user collection through props ---------------------------*/

// import React from "react";

// const Child = (props) => {
//   return (
//     <div>
//       <ul>
//         <li>name:{props.name}</li>
//         <li>age:{props.age}</li>
//       </ul>
//     </div>
//   );
// };

// export default Child;

/* --------------------Using Props in event handler --------------------------- */
// import React from "react";

// const Child = (props) => {
//   return (
//     <div>
//       <button onClick={props.onClick}>Click me</button>
//     </div>
//   );
// };

// export default Child;

/* -----------------------passing staudent array usimg props --------------------*/

// import React from "react";

// const Child = ({ data }) => {
//   return (
//     <div>
//       <h2>Students:</h2>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>
//             {item.name} - Age: {item.age}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Child;

/*-------------------------- Props with useState Hook------------------------- */
import React from "react";

const Child = ({ data,removeStudent }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            Name : {item.name} - Age:{item.Age}
            <button onClick={()=>removeStudent(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Child;

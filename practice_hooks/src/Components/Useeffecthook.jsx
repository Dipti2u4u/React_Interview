/*import React, { useState, useEffect } from "react";

const Useeffecthook = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  },[count]);

  const InCount = () => {
    setcount(count + 1);
  };

  return (
    <>
      <p>count : {count}</p>
      <button onClick={InCount}>Increment</button>
    </>
  );
};

export default Useeffecthook;*/

/* -------------------------------first example------------------------------------ */

/* Dealing with api using useEffect hook */

/*import React, { useEffect, useState } from "react";

const Useeffecthook = () => {
  const [posts, setPosts] = useState([]);

  //Now we will use an api to get the data , inside the useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json(); //here the this method also returns a promise that is the reason why we use await keyword here
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Basic useEffect hook</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Useeffecthook;*/

/* ------------------------------Second Example ----------------------------------- */

/*import React, { useEffect, useState } from 'react'

const Useeffecthook = () => {
  
  const [text,setText] = useState('')

  //we will use an api which ontains text data
  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch('https://www.randomtext.me/api/lorem')//This api is not working
      const data = await response.text()
      setText(data)
    };
    fetchData()
  },[])

  return (
    <>
      <h2>Fetching the Text data from the URL</h2>
      <p>{text}</p>
    </>
  )
}

export default Useeffecthook*/

/* ------------------------------- Third example------------------------ */

/*import React, { useEffect, useState } from 'react';

const Useeffecthook = () => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cataas.com/cat');
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Blob data</h1>
      <img src={imageSrc} alt="cat" />
    </>
  );
};

export default Useeffecthook;*/

/*------------------------------Example Four ------------------------ */

/*import React, { useEffect, useState } from "react";
import axios from "axios";

const Useeffecthook = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);

      } catch (error) {
        console.error("error fetching the data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>loading data ....</p>
      )}
    </>
  );
};

export default Useeffecthook;*/

// import React, { useEffect, useState } from "react";
// // import axios from "axios";

// const Useeffecthook = () => {
//   const [data, setData] = useState([]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       setData(response.data);
//     } catch (err) {
//       console.log("Erros is", err);
//     }
//   };
//   fetchData();
// }, []);

//   useEffect(()=>{
//     const fetchData = async () => {
//       try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const getData = await response.json();
//         setData(getData)
//       }catch(error){
//         console.log("Error is ",error)
//       }
//     }
//     fetchData();
//   },[])

//   return (
//     <>
//       <h2>Data from the url</h2>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Useeffecthook;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Useeffecthook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.publicapis.org/entries");
        setData(response.data.entries);
      } catch (error) {
        console.log("Error is ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h2>Dtat fetching from the url</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.API}</li>
        ))}
      </ul>
    </>
  );
};

export default Useeffecthook;

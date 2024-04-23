import React, { useState, useCallback } from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <h2>Count in Parent: {count}</h2>
      <ChildComp onClick={handleClick} />
    </>
  );
};

export default ParentComp;

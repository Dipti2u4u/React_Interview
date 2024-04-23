import React from "react";

const ChildComponent = ({ user, updateUser }) => {
  const changeUserAge = () => {
    user.age += 1; // Directly modify the object's age property
    updateUser(user); // This is not necessary for the modification to be reflected but useful for triggering re-renders
  };

  return (
    <div>
      <button onClick={changeUserAge}>Make {user.name} Older</button>
    </div>
  );
};

export default ChildComponent;

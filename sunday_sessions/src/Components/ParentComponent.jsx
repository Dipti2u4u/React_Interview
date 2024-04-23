import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [user, setUser] = useState({ name: 'Alice', age: 25 });

  // Function to force update to re-render the component for demonstration
  const forceUpdate = () => setUser({ ...user });

  return (
    <div>
      <h1>Parent: {user.name} is {user.age} years old.</h1>
      <ChildComponent user={user} updateUser={setUser} />
      <button onClick={forceUpdate}>Refresh Parent View</button>
    </div>
  );
};

export default ParentComponent;
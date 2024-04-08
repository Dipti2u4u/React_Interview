let users = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" },
  ];
  
  // Adding a new property based on existing ones
  users.forEach(user => {
    user.isActive = user.age > 27; // Line's effect is used two lines below
  });
  
  // Mutating the email based on isActive property
  users.forEach(user => {
    if (user.isActive) {
      user.email = "active_" + user.email; // Depends on the mutation done previously
    }
  });
  
  // Logging user data with conditional messages based on isActive
  users.forEach(user => {
    if (user.isActive) {
      console.log(`${user.name} is active. Contact: ${user.email}`); // Output depends on previous mutations
    } else {
      console.log(`${user.name} is not active.`);
    }
  });

  
  
  
  
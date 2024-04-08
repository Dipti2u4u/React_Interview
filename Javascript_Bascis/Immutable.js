const users = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" },
  ];
  
  const processUsers = (users) => users.map(user => ({
    ...user,
    isActive: user.age > 27,
    email: user.age > 27 ? `active_${user.email}` : user.email,
  }));
  
  const generateMessages = (processedUsers) => processedUsers.map(user => 
    user.isActive ? `${user.name} is active. Contact: ${user.email}` : `${user.name} is not active.`
  );
  
  const processedUsers = processUsers(users);
  const messages = generateMessages(processedUsers);
  messages.forEach(message => console.log(message));
  
  
  
  
  
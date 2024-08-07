import React, { useEffect, useState } from 'react';

const UserData = () =>{
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize Telegram Web App
    const tg = window.Telegram.WebApp;

    // Check if Telegram Web App is available
    if (tg.initDataUnsafe) {
      const user = tg.initDataUnsafe.user;
      setUser(user);
    }

    // Expand Web App to full height
    tg.expand();
  }, []);

  return (
    <div className="App">
      <h1>Telegram Mini App</h1>
      {user ? (
        <div>
          <p>User ID: {user.id}</p>
          <p>First Name: {user.first_name}</p>
          <p>Last Name: {user.last_name}</p>
          <p>Username: {user.username}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default UserData;

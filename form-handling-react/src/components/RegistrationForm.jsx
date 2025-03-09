import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username} // Bind state to the input field
          onChange={(e) => setUsername(e.target.value)} // Update state on change
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email} // Bind state to the input field
          onChange={(e) => setEmail(e.target.value)} // Update state on change
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password} // Bind state to the input field
          onChange={(e) => setPassword(e.target.value)} // Update state on change
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;

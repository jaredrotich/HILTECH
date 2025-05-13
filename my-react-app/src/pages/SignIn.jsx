import React from 'react';

const SignIn = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Sign In</h2>
      <form>
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;

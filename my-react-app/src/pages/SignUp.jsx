import React from 'react';

const SignUp = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Name" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

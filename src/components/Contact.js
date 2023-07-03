import React, { useState } from 'react';

function Contact() {
  const password = 'garfield123';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

  let title = authorized? "Contact": "Enter the password";
  
  const login = (
    <form action="#" onSubmit={handleSubmit}>
        <input type="password" placeholder="Password" />
        <input type="submit" value="submit" />
    </form>
    );

    const contactInfo = (
        <ul>
          <li>
            luisgustavosilvabrasil@gmail.com
          </li>
          <li>
            (48)99902-8881
          </li>
        </ul>
    )


  return (
      <div id="authorization">
        <p>try this password: garfield123</p>
        <h1>{title}</h1>
        {authorized?contactInfo:login}
      </div>
  );
}

export default Contact;
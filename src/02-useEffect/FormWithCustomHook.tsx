import { ChangeEvent, useEffect, useState } from 'react';
import { Message } from '../02-useEffect/Message';

interface User {
  username: string;
  email: string;
  password: string;
}

export const FormWithCustomHook = () => {
  const [formState, setFormState] = useState<User>({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formState;

  function onInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  return (
    <>
      <h1>Formulario con custom hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      {username === 'guillermovalverde' && <Message />}
    </>
  );
};

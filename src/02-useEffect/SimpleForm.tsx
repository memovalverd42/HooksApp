import { ChangeEvent, useEffect, useState, useSyncExternalStore } from 'react';
import { Message } from '../02-useEffect/Message';

interface User {
  username: string;
  email: string;
}

export const SimpleForm = () => {
  const [formState, setFormState] = useState<User>({
    username: 'guillermovalverde',
    email: 'guillermovalverde42@gmail.com',
  });

  const { username, email } = formState;

  //function onInputChange<T extends HTMLElement>(event: ChangeEvent<T>) {
  //console.log(event.target.value);
  //}

  function onInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  useEffect(() => {
    //console.log('useEffect called');
  }, []);

  useEffect(() => {
    //console.log('formState changed');
  }, [formState]);

  useEffect(() => {
    //console.log('email changed');
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
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
        placeholder="guillermovalverde42@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === 'guillermovalverde' && <Message />}
    </>
  );
};

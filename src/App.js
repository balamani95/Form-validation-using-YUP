import React from 'react';
import './style.css';
import { userValidation } from './validation';

export default function App() {
  const createUser = async (event) => {
    event.preventDefault()
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    }
    console.log(formData)

    const isValid = await userValidation.isValid(formData)

    console.log(isValid)
  }

  return (
    <div className="container">
      <form className="form" onSubmit={createUser}>
        <b>
          <p style={{ color: 'blue' }}> Welcome to login platform </p>
        </b>
        <input type="text" placeholder="enter your fulll name" />
        <input type="text" placeholder="enter email @.com" />
        <input type="text" placeholder="enter pass" />
        <input className="submit" type="submit" />
      </form>
    </div>
  )
}

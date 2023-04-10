/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useState } from 'react';
import axios from 'axios';

const page = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    await axios.post('http://localhost:3000/api/cards');
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>Nazwa</label>
        <input type='text' onChange={handleChange} value={data.name} />
        <label>Email</label>
        <input type='email' />
        <button type='submit'>sub</button>
      </form>
    </main>
  );
};

export default page;
function e() {
  throw new Error('Function not implemented.');
}

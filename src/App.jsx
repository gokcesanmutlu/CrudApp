import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

const App = () => {
  const [users, setUsers] = useState([{
    name: "Gokce",
    email: "gokcesanmutlu@gmail.com",
    age: 28,
  }, {
    name: "Ahmet",
    email: "ahmetmutlu@gmail.com",
    age: 32,
  },])

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className='container my-5'>
      <h2 className='text-center my-5'>User's Panel</h2>
      <Form addUser={addUser} />
      <List users={users} />
    </div>
  )
}

export default App
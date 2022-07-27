import './App.css';
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, doc, documentId, getDocs, addDoc, updateDoc } from 'firebase/firestore';

function App() {
  const [newName,setNewName] = useState('');
  const [newAge,setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db,'users');
  
  const createUser = async () => {
    await addDoc(usersCollectionRef,{ name:newName,age:newAge })
  }

  const updateUser = async (id,age) => {
    const userDoc = doc(db,'users',id)
    const newFields = {age: age+1}
    await updateDoc(userDoc, newFields);
  }
  
  useEffect(()=>{
    const getUsers = async ()=>{
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    };

    getUsers();
  },[]);

  return (
    <div className="App">
      <input placeholder='name...' onChange={(event)=>{setNewName(event.target.value)}} />
      <input type="number" placeholder='age...'onChange={(event)=>{setNewAge(Number(event.target.value))}}/>
        <button onClick={createUser}>Create User</button>
      {users.map((user)=>{
        return (
        <div>
          <h1>name:{user.name}</h1>
          <h1>age:{user.age}</h1>
          <button onClick={updateUser(user.id,user.age)}>Increase Age</button>
        </div>
        );
      })}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db, logout } from './firebaseConfig';
import { query, collection, getDocs, where } from 'firebase/firestore';
import ButtonAppBar from './ButtonAppBar';
import MuscleGroup from './MuscleGroup';
import CreateMuscle from './CreateMuscle';
import Stack from '@mui/material/Stack';


function Home() {

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [muscleGroup, setMuscleGroup] = useState([]);
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  function addMuscleGroup(inputText) {
    setMuscleGroup(prevMuscleGroup => {
      return [...prevMuscleGroup, inputText];
    });
  }

  function deleteMuscleGroup(id) {
    setMuscleGroup(prevMuscleGroup => {
      return prevMuscleGroup.filter((muscle, index) => {
        return index !== id;
      });
    });
  }



  return (

    <div className='homepage'>
      <div className='homepage_container'>
        <ButtonAppBar />
        <p>Logged in as</p> 
        <div>{name}</div>
        <div>{user?.email}</div>
        <h1>Pick your muscle group</h1>
        <CreateMuscle onAdd={addMuscleGroup} />
        <Stack spacing={2} direction="column">
          {muscleGroup.map((muscleItem, index) => {
          return (
            <MuscleGroup
              key={index}
              id={index}
              muscle={muscleItem}
              onDelete={deleteMuscleGroup}
            />
          );
        })}
        </Stack>
      </div>
    </div>

  )
}

export default Home
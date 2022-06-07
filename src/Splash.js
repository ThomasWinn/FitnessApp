import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import './Splash.css';

function Splash() {

  let navigate = useNavigate();

  // const [status] = useState({
  //   signup: 0,
  //   signin: 1
  // });

  function handleClick(event) {
    // const { name, value } = event.target;
    const name = event.target.name;
    if (name === "signup") {
      // console.log(value);
      // console.log("sign up");
      let path1 = '/signup';
      navigate(path1);
    }
    else if (name === "signin"){
      // console.log(value);
      console.log("sign in");
      let path2 = '/signin';
      navigate(path2);
    }
  
  }

  return (
    <div className='spash'>
        <img className='fitness_icon' src='https://i.pinimg.com/736x/99/ec/1b/99ec1bc01c1c759a9af0f35ed8477531.jpg' alt='' />

        <h1 className='app_name'>FitTrack</h1>
        <p className='motivation_intro'>Are You Ready to Get Shredded?</p>
      <button
        name='signup'
        onClick={handleClick}
        // value={status.signup}
      >
        Sign Up Now
      </button> 
        <h5 className='to_signin'>Already have an account?</h5>
      <button
        name='signin'
        onClick={handleClick}
        // value={status.signin}
      >
        Click Here
      </button>
    </div>
  )
}

export default Splash;
import React from 'react'
import { Link} from "react-router-dom";

function About() {
  return (
    <>
      <main>
        <h2>ABOUTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </>
  )
}

export default About
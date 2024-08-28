import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  let navigate = useNavigate()
  return (
    <div>
      <h1>This is Home Page</h1>
      <button onClick={() => {
    navigate("/dashboard");
}}>Navigate</button>

    </div>
  )
}

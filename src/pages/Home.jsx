import React from 'react'
import SignUpForm from '../Components/SignUpForm'


function Home() {
  return (
    <div style={{
        display:"flex",
    }}>
        <div style={{
            backgroundColor: "cyan",
            width:"50vw",
            height:"100vh",
        }}></div>
        <div style={{
            backgroundColor: "black",
            width:"50vw",
            height:"100vh",
            
        }}>
            <SignUpForm></SignUpForm>
        </div>
    </div>
  )
}

export default Home
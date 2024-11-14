import React from 'react'
import Container from './components/container'
import { FaXTwitter } from "react-icons/fa6";
import myImage from './assets/image.jpg';

export default function App() {
  return (
    <div className=' bg-[#121212] min-h-[100vh] w-full text-[#F1F1F1] inter pt-16 pb-16'>
      <Container>
        <div className='p-0 w-fit mx-auto  custom-border rounded-full'>
          <img className=' rounded-full h-[250px] w-[250px] object-cover mx-auto' src={myImage}></img>
        </div>
        <p className='custom-name text-center text-2xl tracking-tight font-light poppins mt-3 '>Goodnews Adewole</p>
        <p className='poppins text-center font-semibold text-lg mt-3'>Frontend Developer</p>
      </Container>
    <hr className='border-0 border-t-[4px] rounded-full w-[30%] m-6 mx-auto border-[#ffff]'></hr>
      <Container>
        <p className='text-center font-light line px-5'>Hello. I am Goodnews. I am undergoing a 100-day challenge to self-learn backend development. I am trying to reach a goal of 500 followers on X at the end of the challenge. 
        </p>
        <a href='https://x.com/GoodnewsAdewole'><button className=' bg-[#121212] up-down flex items-center border-2 border-white p-3 rounded-3xl mx-auto mt-10'><FaXTwitter className='mr-5'></FaXTwitter>Follow Me on X</button></a>
      </Container> 
    </div>
  )
}

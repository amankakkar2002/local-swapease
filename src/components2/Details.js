import React,{useEffect} from 'react'
import Navbar2 from './Navbar2'
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const callDetails = async () => {
    try {
      const res = await fetch("/details", {
        method: "GET",
        headers: {
          Accept:"application/json",
          "Content-Type": "application/json",
        },
        credentials:"include"
      });
      const data=await res.json();

      console.log(data);
      if(!res.status===200)
      {
        const error=new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  }
  useEffect(() => {
    callDetails();
  });
  return (
      <>
      <Navbar2 />
      <div className="wrapper5">
          <h3>Details !!</h3>
          <div className='p1'>

          </div>
      </div>
      </>
  )
}

export default Details

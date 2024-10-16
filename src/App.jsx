import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect } from "react";

export default function App(){
  const navigate= useNavigate();

  useEffect(()=>{
    navigate("/home")
  },[])
  return(
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer></footer>
    </>
  )
}
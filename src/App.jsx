import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

export default function App(){
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
import { NavLink } from "react-router-dom";

export default function Navbar(){
  return (
    <div>
      <NavLink exact to="/"> Home </NavLink>
      <NavLink to="/search"> Search </NavLink>
    </div>
  )
}
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div id="header-nav">
      <NavLink className="nav-link title-link" to="/">Music Theoreticals</NavLink>
    </div>
  )
}

export default HeaderNav
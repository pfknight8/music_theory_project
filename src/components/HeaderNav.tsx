import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <header className="App-header">
      <NavLink className="nav-link title-link" to="/">Music Theoreticals</NavLink>
      <div id="header-nav">
        <NavLink className="nav-link component-link" to="/interactives">Interactives</NavLink>
        <NavLink className="nav-link component-link" to="/documents">Documents</NavLink>
      </div>
    </header>
  )
}

export default HeaderNav
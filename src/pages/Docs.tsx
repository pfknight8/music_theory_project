// This page will hold informational docs, such as the about page, and music theory explanations. Make sure to have a good format scheme for docs to fit into nicely.
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "../styles/Documents.css"

const Docs = () => {
  return (
    <>
      <section id="docs-page">
        <p>This page will handle the rendering of reference materials.</p>
        <NavLink to="/documents/about">About This Website</NavLink>
        <div id="docs-navigation">
          <h3>Contents</h3>
          <ol type="I">
            <li>
              <NavLink to="/documents/about">Intervals</NavLink>
            </li>
            <li>
              <NavLink to="/documents/about">Harmonic Progression</NavLink>
            </li>
            <li>
              <NavLink to="/documents/voicing">Voicing</NavLink>
            </li>
          </ol>
        </div>
      </section>
      <Outlet />
    </>
  )
}

export default Docs
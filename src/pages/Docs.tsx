// This page will hold informational docs, such as the about page, and music theory explanations. Make sure to have a good format scheme for docs to fit into nicely.
import { Outlet } from "react-router-dom"

const Docs = () => {
  return (
    <div id="docs-page">
      <p>This page will handle the rendering of reference materials.</p>
      <Outlet />
    </div>
  )
}

export default Docs
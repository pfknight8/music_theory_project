// import { useState } from "react"
// import ChordCreator from "../components/chordcreater"
import '../styles/circleTest.css';

const Home = () => {
  // const [showChordComp, toggleChordComp] = useState(false)

  return (
    <div id="Home-div">
      <p>Home page rendered. This will ultimately be a landing page, other pages will be constructed to hold the different types of components.</p>
      <div className="circle"></div>
      <div className="stage"><figure className="ball"><span className="shadow"></span></figure></div>
      <div className="stage"><figure className="poolball"><span className="poolshadow"></span><span className="number-circle"></span></figure></div>
      <div className="logocontainer">
        <div className="colorsbox red"></div>
        <div className="colorsbox yellow"></div>
        <div className="colorsbox green"></div>
        <div className="colorsbox blue"></div>
      </div>
    </div>
  )
}

export default Home
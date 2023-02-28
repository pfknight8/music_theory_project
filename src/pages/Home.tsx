import { useState } from "react"
import ChordCreator from "../components/chordcreater"

const Home = () => {
  const [showChordComp, toggleChordComp] = useState(false)

  return (
    <div id="Home-div">
      <p>Home page rendered. This will ultimately be a landing page, other pages will be constructed to hold the different types of components.</p>
      <section>
        <h2>Title</h2>
        <button className="component-btn" onClick={() => toggleChordComp(!showChordComp)}>{showChordComp ? "Arrivederci!" : "Chords"}</button>
        <div className="component-holder">
          {showChordComp ? <ChordCreator /> : (<p>Nothing to show here.</p>) }
        </div>
      </section>
    </div>
  )
}

export default Home
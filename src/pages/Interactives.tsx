// This page will be the holder for our interactive programs.
import { useState } from "react"
import ChordCreator from "../components/chordcreater"

const Interactives = () => {
  const [showChordComp, toggleChordComp] = useState(false)

  return (
    <div id="docs-page">
      <h1>Rendering of interactive materials</h1>
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

export default Interactives
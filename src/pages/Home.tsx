import { useState } from "react"
import ChordCreator from "../components/chordcreater"

const Home = () => {
  const [showChordComp, toggleChordComp] = useState(false)

  return (
    <div id="Home-div">
      <p>Home page rendered.</p>
      <section>
        <h2>Title 1</h2>
        <button className="component-btn" onClick={() => toggleChordComp(!showChordComp)}>Chords</button>
        <div className="component-holder">
          {showChordComp ? <ChordCreator /> : (<p>Nothing to show here.</p>) }
        </div>
      </section>
    </div>
  )
}

export default Home
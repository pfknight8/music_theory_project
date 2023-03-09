// This page will be the holder for our interactive programs.
import { useState } from "react"
import ChordCreator from "../components/chordcreater"
import ScaleCreator from "../components/scaleCreator"

const Interactives = () => {
  interface Feature {
    [key: string]: boolean
  };
  const initialFeatures: Feature = {"placeholder": true, "chords": false, "scales": false}

  const [showFeatureSet, toggleFeatureSet] = useState(initialFeatures)

  const handleFeatures = (feature: string) => {
    let updateFeature = {[feature]: !showFeatureSet[feature], placeholder: false}
    if (!updateFeature[feature]){updateFeature.placeholder = true}
    let newState: Feature = {...initialFeatures, ...updateFeature}
    toggleFeatureSet(newState)
  }

  return (
    <div id="docs-page">
      <h1>Rendering of interactive materials</h1>
      <section>
        <h2>Button Holder</h2>
        <button className="component-btn" onClick={() => handleFeatures("chords")}>{showFeatureSet.chords ? "Arrivederci!" : "Chords"}</button>
        <button className="component-btn" onClick={() => handleFeatures("scales")}>{showFeatureSet.scales ? "Adios!" : "Scales"}</button>
      </section>
      <section>
        <h2>Render Here</h2>
        <div className="component-holder">
          {showFeatureSet.placeholder ? <p>Default Info Graphic</p> : null}
          {showFeatureSet.chords ? <ChordCreator /> : null }
          {showFeatureSet.scales ? <ScaleCreator /> : null }
        </div>
      </section>
    </div>
  )
}

export default Interactives
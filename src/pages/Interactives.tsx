// This page will be the holder for our interactive programs.

// import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import ChordCreator from "../components/chordcreater"
// import ScaleCreator from "../components/scaleCreator"
import { Outlet } from "react-router-dom"

const Interactives = () => {
  const navigate = useNavigate()

  // interface Feature {
  //   [key: string]: boolean
  // };
  // const initialFeatures: Feature = {"placeholder": true, "chords": false, "scales": false}

  // const [showFeatureSet, toggleFeatureSet] = useState(initialFeatures)

  const handleFeatures = (feature: string) => {
    // let updateFeature = {[feature]: !showFeatureSet[feature], placeholder: false}
    // if (!updateFeature[feature]){updateFeature.placeholder = true}
    // let newState: Feature = {...initialFeatures, ...updateFeature}
    // toggleFeatureSet(newState)
    navigate(`/interactives/${feature}`)
  }

  return (
    <div id="-page">
      <h1>Rendering of interactive materials</h1>
      <section>
        <h2>Button Holder</h2>
        <button className="component-btn" onClick={() => handleFeatures("chordCreator")}>Chords</button>
          {/* {showFeatureSet.chords ? "Arrivederci!" : "Chords"}</button> */}
        <button className="component-btn" onClick={() => handleFeatures("scaleCreator")}>Scales</button>
          {/* {showFeatureSet.scales ? "Adios!" : "Scales"}</button> */}
      </section>
      <section>
        <h2>Render Here</h2>
        <Outlet />
        {/* <div className="component-holder">
          {showFeatureSet.placeholder ? <p>Default Info Graphic</p> : null}
          {showFeatureSet.chords ? <ChordCreator /> : null }
          {showFeatureSet.scales ? <ScaleCreator /> : null }
        </div> */}
      </section>
    </div>
  )
}

export default Interactives
import { useState } from "react";
import NoteSelector from "./noteSelector";

const ScaleCreator = () => {
  const [noteSelect, setNoteSelect] = useState("C")
  const [noteQual, setNoteQual] = useState("natural")
  // const [scaleSelect, setScaleSelect] = useState(null)

  const MakeScales = (indexOfNote: number) => {
    //this will involve selecting a scale (or set of scales), looking up the steps of said scale(s), and using the noteSelect index as the root note from which to create the scales.
  }

  const handleConfirm = () => {
    // This function abstracts out the button click
    MakeScales(1)
  }

  return (
    <div id="scale-creator">
      <NoteSelector setNoteSelect={setNoteSelect} setNoteQual={setNoteQual}/>
      <p>This is the note: {noteSelect} {noteQual}</p>
      <button onClick={() => handleConfirm}>Confirm Selection</button>
    </div>
  )
}
export default ScaleCreator;
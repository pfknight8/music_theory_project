import { useState } from "react";
import NoteSelector from "./noteSelector";

const ScaleCreator = () => {
  const [noteSelect, setNoteSelect] = useState("C")
  const [noteQual, setNoteQual] = useState("natural")

  return (
    <div id="scale-creator">
      <NoteSelector setNoteSelect={setNoteSelect} setNoteQual={setNoteQual}/>
      <p>This is the note: {noteSelect} {noteQual}</p>
    </div>
  )
}
export default ScaleCreator;
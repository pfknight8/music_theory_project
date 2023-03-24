import { useState } from "react";
import Notes from "../data/Notes.json";

const NoteSelector = ({createFunction}:any) => {
  const [noteSelect, setNoteSelect] = useState("C")
  const [noteQual, setNoteQual] = useState("natural")
  
  // This function is what fires when the 'create chords/scale/etc' button is clicked. Currently, the functions here use the letter of the note, so some conversion of the notes to proper sharp/natural/flat status needs to be done in order to feed the proper index into the MakeChords function.
  const handleConfirm = () => {
    let noteSearch: string = ""
    let indexOfNote: number = 0
    if (noteQual === "sharp"){
      noteSearch = `${noteSelect}\u266f`
      if (noteSearch === "B\u266f"){
        noteSearch = "C"
      } else if (noteSearch === "E\u266f"){
        noteSearch = "F"
      }
      indexOfNote = Notes.chromatic_sharp.indexOf(noteSearch)
    } else if (noteQual === "flat"){
      noteSearch = `${noteSelect}\u266d`
      if (noteSearch === "C\u266d"){
        noteSearch = "B"
      } else if (noteSearch === "F\u266d"){
        noteSearch = "E"
      }
      indexOfNote = Notes.chromatic_flat.indexOf(noteSearch)
    } else {
      noteSearch = noteSelect
      indexOfNote = Notes.chromatic_sharp.indexOf(noteSearch)
    }
    createFunction(indexOfNote)
  }

  return (
    <div>
      <div className="radio-holder">
        <div id='note-choices'>
          <input
            name="note-select"
            type="radio"
            id="C"
            value="C"
            defaultChecked
            onChange={() => setNoteSelect("C")}
            />
          <label htmlFor="C">C</label>
          <input
            name="note-select"
            type="radio"
            id="D"
            value="D"
            onChange={() => setNoteSelect("D")}
            />
          <label htmlFor="D">D</label>
          <input
            name="note-select"
            type="radio"
            id="E"
            value="E"
            onChange={() => setNoteSelect("E")}
            />
          <label htmlFor="E">E</label>
          <input
            name="note-select"
            type="radio"
            id="F"
            value="F"
            onChange={() => setNoteSelect("F")}
            />
          <label htmlFor="F">F</label>
          <input
            name="note-select"
            type="radio"
            id="G"
            value="G"
            onChange={() => setNoteSelect("G")}
            />
          <label htmlFor="G">G</label>
          <input
            name="note-select"
            type="radio"
            id="A"
            value="A"
            onChange={() => setNoteSelect("A")}
            />
          <label htmlFor="A">A</label>
          <input
            name="note-select"
            type="radio"
            id="B"
            value="B"
            onChange={() => setNoteSelect("B")}
            />
          <label htmlFor="B">B</label>
        </div>
        <div id='accidentals'>
          <input
            name="shap-flat-select"
            type="radio"
            id="natural-opt"
            value="natural"
            defaultChecked
            onChange={() => setNoteQual("natural")}
            />
          <label htmlFor="natural-opt">Natural (&#x266E;)</label>
          <input
            name="shap-flat-select"
            type="radio"
            id="sharp-opt"
            value="sharp"
            onChange={() => setNoteQual("sharp")}
            />
          <label htmlFor="sharp-opt">Sharp (&#x266f;)</label>
          <input
            name="shap-flat-select"
            type="radio"
            id="flat-opt"
            value="flat"
            onChange={() => setNoteQual("flat")}
            />
          <label htmlFor="flat-opt">Flat (&#x266D;)</label>
        </div>
      </div>
      <button onClick={handleConfirm}>Confirm Selection</button>
    </div>
  )
}

export default NoteSelector
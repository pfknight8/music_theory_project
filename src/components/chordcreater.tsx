// Write the code that implements our chord creater here.
import { useState } from "react"
import Notes from "../data/Notes.json"
import NoteSelector from "./noteSelector"

const ChordCreator = () => {
  interface ChordSet {
    name: string,
    steps: Array<number>
  }
  const [noteSelect, setNoteSelect] = useState("C")
  const [chordList, setChordList] = useState<Array<ChordSet>>([])
  const [noteQual, setNoteQual] = useState("natural")

  const MakeTriads = (indexOfNote: any) => {
    let chordArr: any[] = [];
    Notes.chord_semitones.forEach(element => {
      let noteArr: any[] = [];
      for (let i=0; i<element.steps.length; i++){
        let pushVal = element.steps[i]+indexOfNote;
        noteArr.push(pushVal);
      };
      let noteArrLtr: any[] = [];
      for (let k=0; k<noteArr.length; k++) {
        let noteIndex = noteArr[k]%12
        noteArrLtr.push(Notes.chromatic[noteIndex])
      }
      chordArr.push({"name": element.name, "steps": noteArrLtr.splice(0)})
      noteArr = []
    });
    setChordList(chordArr)
  }

  const handleSubmitChords = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // CharCodeAt(0), 65-90 for A to G.
    if (noteSelect.charCodeAt(0) < 65 || noteSelect.charCodeAt(0) > 71){
      alert('Not a valid note!')
    }
    let noteSearch = ""
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
    MakeTriads(indexOfNote)
  }

  // const handleNoteSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // e.preventDefault()
  //   let noteEntered = e.target.value.toUpperCase()
  //   setNoteSelect(noteEntered)
  // }

  return (
    <div className="chord-creator">
      <p>Chord component rendered.</p>
      <p>{Notes.chromatic_flat}</p>
      <form onSubmit={handleSubmitChords}>
        {/* <label htmlFor="note">Enter a Note:</label>
        <input type="text" id="note" name="note" onChange={handleNoteSelect}/> */}
        <NoteSelector setNoteSelect={setNoteSelect} setNoteQual={setNoteQual}/>
        <button id="note-select" type="submit">Create Chords</button>
      </form>
      <section id="triad-list">
        <h3>Triad Chords</h3>
        <div>{chordList?.map((item, index) => (
          <div key={index}>
            {item.name} = {item.steps.join('-')}
          </div>
        ))}</div>
        <p>A note on Inversions (link to page) and voicing (link to page).</p>
      </section>
    </div>
  )
}

// Ideas:
// - have toggle to display written on treble or bass cless (maybe tenor cleff as well?)
// - have the user select a note, rather than type it in. Will help prevent breaking, and be more user friendly I think.
// - the user can work in either sharps or flats
// - the program will display all main chords based on the selected note being the root
// - include note about inversions

export default ChordCreator
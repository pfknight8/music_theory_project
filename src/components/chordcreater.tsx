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

  // This function is used to make the chords based on the selected note and the json files provided.
  const MakeChords = (indexOfNote: number) => {
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

  // This function is what fires when the 'create chords' button is clicked. Currently, the functions here use the letter of the note, so some conversion of the notes to proper sharp/natural/flat status needs to be done in order to feed the proper index into the MakeChords function.
  const handleSubmitChords = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
    MakeChords(indexOfNote)
  }

  return (
    <div className="chord-creator">
      <p>Chord component rendered.</p>
      <form onSubmit={handleSubmitChords}>
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
        <h3>Seventh Chords</h3>
        <p>This will be replaced; will need to refactor this section to display better, but for now have it set up in a crude way just to make sure that the basic functionality works.</p>
        <p>See pages on Inversions (link to page) and voicing (link to page).</p>
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
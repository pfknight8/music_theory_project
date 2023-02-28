// Write the code that implements our chord creater here.
import { useState } from "react"
import Notes from "../data/Notes.json"

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
        if (noteQual === "natural" || noteQual === "flat"){
          noteArrLtr.push(Notes.chromatic_flat[noteIndex])
        } else {
          noteArrLtr.push(Notes.chromatic_sharp[noteIndex])
        }
      }
      chordArr.push({"name": element.name, "steps": noteArrLtr.splice(0)})
      noteArr = []
    });
    setChordList(chordArr)
  }

  const handleSubmitChords = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // CharCodeAt(0), 65-90
    if (noteSelect.length>1 || (noteSelect.charCodeAt(0) < 65 || noteSelect.charCodeAt(0) > 71)) {
      alert('Not a valid note!')
    }
    let noteSearch = ""
    let indexOfNote: number = 0
    if (noteQual === "sharp"){
      noteSearch = `${noteSelect}`+`\u266f`
      indexOfNote = Notes.chromatic_sharp.indexOf(noteSearch)
    } else if (noteQual === "flat"){
      noteSearch = `${noteSelect}`+`\u266d`
      indexOfNote = Notes.chromatic_flat.indexOf(noteSearch)
    } else {
      noteSearch = noteSelect
      indexOfNote = Notes.chromatic_flat.indexOf(noteSearch)
    }
    MakeTriads(indexOfNote)
  }

  const handleNoteSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault()
    let noteEntered = e.target.value.toUpperCase()
    setNoteSelect(noteEntered)
  }

  return (
    <div className="chord-creator">
      <p>Chord component rendered.</p>
      <p>{Notes.chromatic_flat}</p>
      <form onSubmit={handleSubmitChords}>
        <label htmlFor="note">Enter a Note:</label>
        <input type="text" id="note" name="note" onChange={handleNoteSelect}/>
        <div className="radio-holder">
          <input
            name="shap-flat-select"
            type="radio"
            className="natural-opt"
            value="natural"
            defaultChecked
            onChange={() => setNoteQual("natural")}
          />
          <label htmlFor="natural-opt">Natural (&#x266E;)</label>
          <input
            name="shap-flat-select"
            type="radio"
            className="sharp-opt"
            value="sharp"
            onChange={() => setNoteQual("sharp")}
          />
          <label htmlFor="sharp-opt">Sharp (&#x266f;)</label>
          <input
            name="shap-flat-select"
            type="radio"
            className="flat-opt"
            value="flat"
            onChange={() => setNoteQual("flat")}
          />
          <label htmlFor="flat-opt">Flat (&#x266D;)</label>
        </div>
        <button id="note-select" type="submit">Create Chords</button>
      </form>
      <section id="triad-list">
        <h3>Triad Chords</h3>
        <div>{chordList?.map((item, index) => (
          <div key={index}>
            {item.name} = {item.steps}
          </div>
        ))}</div>
        <p>A note on Inversions (link to page) Any chord can be inverted. This should also include (or lead to) discussing voicing, where notes above the root are moved into higher octaves, or multiplied. There are mumbo-jumbo ways to describe inversions, but to me the simplest is to say that you bring the notes up in a stack; for example in triads, the first inversion brings the root up to the higest note, the second will bring the root and third up (so fifth is lowest). Inversions can be combined with voicing, so even if the root and fifth are both brought up (leaving the third as the lowest note), this would still be a first inversion, with the 5th being voiced. Thus, it may be better defined by which note is being left as the lowest position.</p>
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
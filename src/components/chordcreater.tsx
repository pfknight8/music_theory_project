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

  const MakeTriads = (note: any) => {
    let indexOfNote = Notes.chromatic_flat.indexOf(note);
    // let chordObj = {};
    let chordArr: any[] = [];
    Notes.chord_semitones.forEach(element => {
      let noteArr: any[] = [];
      for (let i=0; i<element.steps.length; i++){
        let pushVal = element.steps[i]+indexOfNote;
        noteArr.push(pushVal);
      };
      chordArr.push({"name": element.name, "steps": noteArr.splice(0)})
      // chordObj = {...chordObj, [`${element.name}`]: noteArr.splice(0)};
    });
    setChordList(chordArr)
  }

  const handleSubmitChords = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    MakeTriads(noteSelect)
  }

  const handleNoteSelect = () => {
    setNoteSelect("C")
  }

  return (
    <div className="chord-creator">
      <p>Chord component rendered.</p>
      <p>{Notes.chromatic_flat}</p>
      <form onSubmit={handleSubmitChords}>
        <label htmlFor="note">Enter a Note:</label>
        <input type="text" id="note" onChange={handleNoteSelect}></input>
        <button id="note-select" type="submit">Create Chords</button>
      </form>
      <section id="triad-list">
        <h3>Triad Chords</h3>
        <div>{chordList?.map((item, index) => (
          <div>
            {item.name}
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
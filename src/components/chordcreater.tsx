import { useState } from "react";
import Notes from "../data/Notes.json";
import NoteSelector from "./noteSelector";

const ChordCreator = () => {
  interface ChordSet {
    name: string,
    steps: Array<number>
  }
  const [chordList, setChordList] = useState<Array<ChordSet>>([])

  // This function is used to make the chords based on the selected note and the json files provided.
  const makeChords = (indexOfNote: number) => {
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

  return (
    <div className="chord-creator">
      <NoteSelector createFunction={makeChords}/>
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

export default ChordCreator

// Ideas:
// - have toggle to display written on treble or bass cless (maybe tenor cleff as well?)
// - have the user select a note, rather than type it in. Will help prevent breaking, and be more user friendly I think.
// - the user can work in either sharps or flats
// - the program will display all main chords based on the selected note being the root
// - include note about inversions
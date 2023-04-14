import { useState } from "react";
import { Link } from "react-router-dom";
import Notes from "../data/Notes.json";
import NoteSelector from "./noteSelector";

const ChordCreator = () => {
  interface ChordSet {
    set: string,
    name: string,
    steps: Array<number>
  }
  const [chordList, setChordList] = useState<Array<ChordSet>>([]);

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
        let noteIndex = noteArr[k]%12;
        noteArrLtr.push(Notes.chromatic[noteIndex]);
      }
      chordArr.push({"set": element.set, "name": element.name, "steps": noteArrLtr.splice(0)});
      noteArr = [];
    });
    setChordList(chordArr);
  }

  return (
    <div className="chord-creator">
      <NoteSelector createFunction={makeChords}/>
      <section id="chord-listing">
        <h3>Triad Chords</h3>
        <div id="triad-list">
          {chordList?.map((item, index) => { return (item?.set === "triad" ?
            <div key={index}>
              {item.name} = {item.steps.join(' - ')}
            </div> : null)
          })}
        </div>
        <h3>Seventh Chords</h3>
        <div id="seventh-list">
          {chordList?.map((item, index) => { return (item?.set === "seventh" ?
            <div key={index}>
              {item.name} = {item.steps.join(' - ')}
            </div> : null)
          })}
        </div>
        <h3>Other Chords</h3>
        <div id="other-list">
          {chordList?.map((item, index) => { return (item?.set === "other" ?
            <div key={index}>
              {item.name} = {item.steps.join(' - ')}
            </div> : null)
          })}
        </div>
        <p>This will be replaced; will need to refactor this section to display better, but for now have it set up in a crude way just to make sure that the basic functionality works.</p>
        <p>See pages on Inversions and <Link to="/documents/voicing">Voicing</Link>.</p>
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
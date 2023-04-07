import { useState } from "react";
import Notes from "../data/Notes.json";
import NoteSelector from "./noteSelector";

const ScaleCreator = () => {
  // const [noteSelect, setNoteSelect] = useState("C")
  // const [noteQual, setNoteQual] = useState("natural")
  const [scaleChoice, setScaleChoice] = useState<Array<String>>([])
  const [scaleSelect, setScaleSelect] = useState("Dorian")

  const makeScales = (indexOfNote: number) => {
    //this will involve selecting a scale (or set of scales), looking up the steps of said scale(s), and using the noteSelect index as the root note from which to create the scales.
    let scaleArr: any[] = [];
    let chosenScale = Notes.scales.find((scale: { name: string; }) => scale.name === scaleSelect);
    console.log(chosenScale?.steps);
    let noteIndex: number = indexOfNote;
    chosenScale?.steps.forEach(element => {
      noteIndex = (noteIndex + element)%12;
      scaleArr.push(Notes.chromatic[noteIndex]);
    });
    console.log(scaleArr);
    setScaleChoice(scaleArr)
  }

  return (
    <div id="scale-creator">
      <NoteSelector createFunction={makeScales}/>
      
      <section id="scale-display">
        <p>The scale displays here:</p>
        <div>{scaleChoice.join(' - ')}</div>
      </section>
    </div>
  )
}
export default ScaleCreator;

// Need to build the <select><option></option></select> field to populate the scale choice
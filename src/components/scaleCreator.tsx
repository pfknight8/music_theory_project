import { useState } from "react";
import Notes from "../data/Notes.json";
import NoteSelector from "./noteSelector";

const ScaleCreator = () => {
  const [scaleChoice, setScaleChoice] = useState<Array<String>>([])
  const [scaleSelect, setScaleSelect] = useState("Ionian (Major)")

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
    setScaleChoice(scaleArr)
  }

  const handleSelect = (e: any) => {
    setScaleSelect(e.target.value)
  }

  return (
    <div id="scale-creator">
      <NoteSelector createFunction={makeScales}/>
      <section id="scale-select-holder">
        <select id="scale-selector" onChange={handleSelect}>
          {Notes.scales.map((element, index) => (
            <option key={index} value={element.name}>{element.name}</option>
          ))}
        </select>
      </section>
      <section id="scale-display">
        <p>The scale displays here:</p>
        <div>{scaleChoice.join(' - ')}</div>
      </section>
    </div>
  )
}
export default ScaleCreator;
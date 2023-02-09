// Write the code that implements our chord creater here.
import Notes from "../data/Notes.json"

const ChordCreator = () => {
  return (
    <div className="chord-creator">
      <p>Chord component rendered.</p>
      <p>{Notes.chromatic_flat}</p>
    </div>
  )
}

export default ChordCreator
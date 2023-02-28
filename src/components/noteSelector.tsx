const NoteSelector = ({setNoteSelect, setNoteQual}:any) => {
  
  return (
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
  )
}

export default NoteSelector
import '../styles/circleTest.css';

export const CSSTester = () => {
  return (
    <>
      <div className="circle"></div>
      <div className="stage"><figure className="ball"><span className="shadow"></span></figure></div>
      <div className="stage"><figure className="poolball"><span className="poolshadow"></span><span className="number-circle"></span></figure></div>
      <div className="logocontainer">
        <div className="colorsbox red"></div>
        <div className="colorsbox yellow"></div>
        <div className="colorsbox green"></div>
        <div className="colorsbox blue"></div>
      </div>
    </>
  )
}

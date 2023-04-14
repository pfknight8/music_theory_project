import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import HeaderNav from './components/HeaderNav';
import Home from './pages/Home';
import Docs from './pages/Docs';
import About from './documents/About';
import Interactives from './pages/Interactives';
import { Voicing } from './documents/VoicingInversions';
import ChordCreator from './components/chordcreater';
import ScaleCreator from './components/scaleCreator';

function App() {
  return (
    <div id="App">
      <HeaderNav />
      <main id="App-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="documents" element={<Docs />} >
            <Route index element={<div className="stage"><figure className="poolball"><span className="poolshadow"></span><span className="number-circle"></span></figure></div>} />
            <Route path="about" element={<About />} />
            <Route path="voicing" element={<Voicing />} />
          </Route>
          <Route path="interactives" element={<Interactives />} >
            <Route index element={<p>Default Info Graphic</p>} />
            <Route path="chordCreator" element={<ChordCreator />} />
            <Route path="scaleCreator" element={<ScaleCreator />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

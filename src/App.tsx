import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import HeaderNav from './components/HeaderNav';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Interactives from './pages/Interactives';

function App() {
  return (
    <div id="App">
      <HeaderNav />
      <main id="App-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documents" element={<Docs />} />
          <Route path="/interactive" element={<Interactives />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

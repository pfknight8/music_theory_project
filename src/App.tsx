import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import HeaderNav from './components/HeaderNav';
import Home from './pages/Home';
import Docs from './pages/Docs';

function App() {
  return (
    <div id="App">
      <header className="App-header">
        <HeaderNav />
      </header>
      <main id="App-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documents" element={<Docs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

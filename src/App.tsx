import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';

function App() {
  return (
    <div id="App">
      <header className="App-header">
        <p>nothing to see here.</p>
      </header>
      <main id="App-body">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

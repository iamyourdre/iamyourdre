import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dev from './pages/dev/Dev';
import Dzgn from './pages/dzgn/Dzgn';
import Main from './layout/Main';

function App() {
  return (
    <Router>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dev" element={<Dev />} />
          <Route path="/dzgn" element={<Dzgn />} />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
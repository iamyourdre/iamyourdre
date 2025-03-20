import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Index from './pages/Index';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Tweetify from './pages/portfolio/Tweetify';
import SRJK from './pages/portfolio/SRJK';
import PTBA from './pages/portfolio/PTBA';
import Crowdfunding from './pages/portfolio/Crowdfunding';
import OneCloud from './pages/portfolio/OneCloud';
import Presale from './pages/portfolio/Presale';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <Main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio/tweetify" element={<Tweetify />} />
          <Route path="/portfolio/srjk" element={<SRJK />} />
          <Route path="/portfolio/ptba" element={<PTBA />} />
          <Route path="/portfolio/crowdfunding" element={<Crowdfunding />} />
          <Route path="/portfolio/onecloud" element={<OneCloud />} />
          <Route path="/portfolio/presale" element={<Presale />} />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
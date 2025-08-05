import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Tweetify from './pages/portfolio/Tweetify';
import SRJK from './pages/portfolio/SRJK';
import PTBA from './pages/portfolio/PTBA';
import Crowdfunding from './pages/portfolio/Crowdfunding';
import OneCloud from './pages/portfolio/OneCloud';
import Presale from './pages/portfolio/Presale';
import ChatApp from './pages/portfolio/ChatApp';
import Liqee from './pages/portfolio/Liqee';
import Blockpilot from './pages/portfolio/Blockpilot';
import ExpenseTracker from './pages/portfolio/ExpenseTracker';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portfolio/tweetify" element={<Tweetify />} />
        <Route path="/portfolio/srjk" element={<SRJK />} />
        <Route path="/portfolio/ptba" element={<PTBA />} />
        <Route path="/portfolio/crowdfunding" element={<Crowdfunding />} />
        <Route path="/portfolio/onecloud" element={<OneCloud />} />
        <Route path="/portfolio/presale" element={<Presale />} />
        <Route path="/portfolio/chatapp" element={<ChatApp />} />
        <Route path="/portfolio/liqee" element={<Liqee />} />
        <Route path="/portfolio/blockpilot" element={<Blockpilot />} />
        <Route path="/portfolio/expensetracker" element={<ExpenseTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
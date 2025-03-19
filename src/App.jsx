import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Index from './pages/Index';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Tweetify from './pages/portfolio/Tweetify';

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
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
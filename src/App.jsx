import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage1 from './components/page/LandingPage1';
import HeroPage from './components/page/HeroPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage1 />} />
        <Route path="/heropage" element={<HeroPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

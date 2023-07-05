import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage1 from './page/LandingPage1';
import HeroPage from './page/HeroPage';
import FavPage from './page/FavPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage1 />} />
        <Route path="/hero" element={<HeroPage />}>
          <Route path="fav" element={<FavPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

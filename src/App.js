import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page/LandingPage';
import PlayListPage from './pages/playlist/PlayListPage';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route exact path='/' element={<LandingPage />}/>
            <Route exact path='/playlist' element={<PlayListPage />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

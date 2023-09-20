import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QRScreen from './components/QRScreen';
import DataCaptureScreen from './components/DataCaptureScreen';
import VideoBenefitsScreen from './components/VideoBenefitsScreen';
import './App.css';

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<QRScreen />} />
        <Route path="/qr" element={<QRScreen />} />
        <Route path="/data-capture" element={<DataCaptureScreen />} />
        <Route path="/video-benefits" element={<VideoBenefitsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;

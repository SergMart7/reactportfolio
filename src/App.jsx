import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/aboutPage';
import ProjectPage from './pages/projectPage';
import ContactPage from './pages/contactPage';
import ResumePage from './pages/resumePage';
import ErrorPage from './pages/errorPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/portfolio" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

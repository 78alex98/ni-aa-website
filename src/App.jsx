import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App

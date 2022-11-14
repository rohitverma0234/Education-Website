import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Courses from './Components/Courses/Courses';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    <Footer/>

    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import Home from './components/pages/home/Home';
import Company from './components/pages/company/Company';
import Contact from './components/pages/contact/Contact';
import NewProject from './components/pages/newProject/NewProject';
import Projects from './components/pages/projects/Projects'
import Project from './components/pages/project/Project'

import Container from './components/layout/container/Container';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';

import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />        
        </Routes>
      </Container>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

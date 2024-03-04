import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import NewProject from './components/pages/NewProject';

import Container from './components/layouts/Container';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} > </Route>
          <Route path="/company" element={<Company />} > </Route>
          <Route path="/contact" element={<Contact />} > </Route>
          <Route path="/projects" element={<Projects />} > </Route>
          <Route path="/newproject" element={<NewProject />} > </Route>
          <Route path="/projects/:id" element={<Project />} > </Route>
        </Routes>
      </Container>
      <Footer></Footer>
    </Router >
  );
}

export default App;
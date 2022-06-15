
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HireMe from './components/Hire Me/HireMe';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Skill from './components/Skills/Skill';
import { FaArrowCircleUp } from "react-icons/fa"

function App() {
  return (
    <div className="App" id='home'>
      <Header />
      <About description="Hi I am  Oluwaseyi, Adesunloro Olatunde, I'm a Freelance
      Full Stack and Android Developer Based in Nigeria, and I'm very passionate and dedicated to my 
      work. With 3 years experience as a professional Full Stack Developer. I have acquire the skills necessary 
      to build great and premium websites.
      "/>
      <Skill />
      <Services />
      <Projects />
      <HireMe />
      <Footer />
      <a href='#home'>
      <FaArrowCircleUp className='arrowUp'/>
      </a>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HireMe from './components/Hire Me/HireMe';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Skill from './components/Skills/Skill';
import { FaArrowCircleUp } from "react-icons/fa"
import Reviews from './components/Reviews/Reviews';


function App() {

  //   const [name, setName] = useState([])

  //   useEffect(() => {
  //     fetch("/api").then(
  //       response=>response.json()
  //     ).then(
  //       data=>  setName(data)
  //     )
  //   console.log(name)
  // },[])

  return (
    <div className="App" id='home'>
<div className="mainBody">
      <Header />
      <About description="Hi I am  Oluwaseyi, Adesunloro Olatunde, I'm a Freelance
      Web and Android Developer Based in Nigeria, and I'm very passionate and dedicated to my 
      work. With 2 years experience as a professional Full Stack Developer. I have acquired the skills necessary 
      to build great and premium websites.
      "/>
      <Skill />
      <Services />
      <Projects />
      <Reviews />
      <HireMe />
      <Footer />
      <a href='#home'>
        <FaArrowCircleUp className='arrowUp' />
      </a>
</div>
    </div>
  );
}

export default App;

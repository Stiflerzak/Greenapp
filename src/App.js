import { Fragment } from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from "./components/Footer";
import About from "./components/About";


function App() {
  return <Fragment>
  <Navbar/>
  <Hero/>
  <About/>
  <Services/>
  <Tours/>
  <Footer/>

  </Fragment>;
}

export default App;

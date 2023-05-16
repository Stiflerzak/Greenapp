import { Fragment } from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Tours from './components/Services';
import Footer from "./components/Footer";


function App() {
  return <Fragment>
  <Navbar/>
  <Hero/>
  <Services/>
  <Tours/>
  <Footer/>

  </Fragment>;
}

export default App;

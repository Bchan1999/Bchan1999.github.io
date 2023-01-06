import Header from './Components/Header.js'
import Title from './Components/Title.js'
import About from './Components/About';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Shop from './Components/Shop'
import Footer from './Components/Footer.js';
import './Style/App.css';

function App() {

  const item = [{
      title : "Cute Frankenstein, Cross Stitch, Embroidery and Planner Accessory, Magnetic Needle-minder, Needle Minder, Needle Nanny",
      imgSrc : "https://i.etsystatic.com/31084219/c/1630/1630/0/0/il/cae2a3/4103292009/il_340x270.4103292009_qknd.jpg"

  }]

  const reviews = [{}]

  return (
    <div id='app'>
      <Header/>
      <Title/>
      <About item={item}/>
      <Reviews/>
      <Shop/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

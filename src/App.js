import logo from './logo.svg';
import './Style/App.css';
import Header from './Components/Header.js'
import Title from './Components/Title.js'

function App() {

  const item = [{
      title : "Cute Frankenstein, Cross Stitch, Embroidery and Planner Accessory, Magnetic Needle-minder, Needle Minder, Needle Nanny",
      imgSrc : "https://i.etsystatic.com/31084219/c/1630/1630/0/0/il/cae2a3/4103292009/il_340x270.4103292009_qknd.jpg"

  }]

  const reviews = [{}]

  return (
    <div >
      <Header/>
      
      <Title item={item}/>
    </div>
  );
}

export default App;

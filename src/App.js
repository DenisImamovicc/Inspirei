import './App.css';
import {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import background from "./images/bg-desktop.jpg";
// import BgImgages from "./bgapicall.json"

function App() {
const [qoute, setqoute] = useState("")
const [currentqoute, setcurrentqoute] = useState("")
const [count, setcount] = useState(0)

   const FetchQoutes = async () =>{
     const Qoute=await fetch('https://zenquotes.io/api/quotes/')
     .then(response => response.json())
     .then(data => data);
    
     //console.log(Qoute)
     return setqoute(Qoute)
   }

   const DisplayQoutes = () => {
     return setcurrentqoute(()=>qoute[count-2]) + setcount(currcount=>currcount+1)
   }

   const ManageQoutes = () =>{
     if(count===50||count===0){
      FetchQoutes()
      setcount(()=>0)
      console.log("reseted count")
      return DisplayQoutes()
     }else{
       console.log("Should not do this")
       return DisplayQoutes()
      }     
   }



  useEffect(() => {
    ManageQoutes()
  },[qoute])
  

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <h1 id='main-title'>Random Quote Generator</h1>
      <div id="quote-box">
        <Card className="Card"> 
          <Card.Body>
            <Card.Title id='text' className='text-white fade-in'>{currentqoute &&currentqoute.q}</Card.Title>
            <Card.Subtitle className="mb-2 text-white fade-in" id='author'>- {currentqoute &&currentqoute.a}</Card.Subtitle>
            <div className='button-group'>
            <Button variant="outline-dark" id="new-quote" className='mb-2 text-white' onClick={ManageQoutes}>Gimme another qoute</Button>
            <Button variant="outline-dark" href={`https://twitter.com/intent/tweet?text=${currentqoute &&currentqoute.q}By ${currentqoute &&currentqoute.a}`} id="tweet-quote" className='mb-2 text-white'  target='blank'>Imma tweet it!</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;

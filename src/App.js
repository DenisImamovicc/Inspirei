import './App.css';
import {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import background from "./images/bg-desktop.jpg";
// import BgImgages from "./bgapicall.json"

function App() { 
  const [qoute, setqoute] = useState([{}])
  const [Currqoute, setCurrqoute] = useState([{}])
  const [count, setcount] = useState(0)
  const API_ROUTE = `https://random-qoute-generator-api.herokuapp.com/Qoutes`
  
  const FetchQoutes = async () =>{
    await fetch(API_ROUTE)
    .then(response => response.json())
    .then((data) => {
       setqoute(data)
       DisplayQoutes(data)
    }).catch((error)=>{
      console.error(error);
      DisplayQoutes([{q:"Server is down,but you do not have to be",a:"Denis Imamovic"}])
    });
    //console.log(Qoute)
  }

const DisplayQoutes = (inputData) => setCurrqoute(inputData[count])
    
   const ManageQoutes = () =>{
     if(count===qoute.length-1||count===0){
      setcount(0)
      FetchQoutes()  
      setcount((count)=>count+1) 
    }else{
       console.log("Should not do this")
       DisplayQoutes(qoute)
       setcount((count)=>count+1) 
      }     
   }
   
   useEffect(() => {
    FetchQoutes()
    //eslint-disable-next-line react-hooks/exhaustive-deps
   },[])
   
   useEffect(() => {
    console.log("reseted count",count)
   },[count])
   
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <h1 id='main-title'>Random Quote Generator</h1>
      <div id="quote-box">
        <Card className="Card"> 
          <Card.Body>
            <Card.Title id='text' className='text-white fade-in'>{Currqoute && Currqoute.q}</Card.Title>
            <Card.Subtitle className="mb-2 text-white fade-in" id='author'>- {Currqoute && Currqoute.a}</Card.Subtitle>
            <div className='button-group'>
            <Button variant="outline-dark" id="new-quote" className='mb-2 text-white' onClick={ManageQoutes}>Gimme another qoute</Button>
            <Button variant="outline-dark" href={`https://twitter.com/intent/tweet?text=${Currqoute && Currqoute.q} By ${Currqoute && Currqoute.a}`} id="tweet-quote" className='mb-2 text-white'  target='blank'>Imma tweet it!</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;

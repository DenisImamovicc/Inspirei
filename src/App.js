import './App.css';
import {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import background from "./images/bg-desktop.jpg";
import Fade from 'react-bootstrap/Fade';
// import BgImgages from "./bgapicall.json"

function App() { 
  const [qoute, setqoute] = useState([{}])
  const [Currqoute, setCurrqoute] = useState([{}])
  const [count, setcount] = useState(0)
  const [open, setOpen] = useState(false);
  const API_ROUTE = `https://random-qoute-generator-api.herokuapp.com/Qoutes`
  
  const ManageFade = ()=>{
    setOpen((open)=>!open)
  }


  const FetchQoutes = async () =>{
    await fetch(API_ROUTE)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
       setqoute(data)
       DisplayQoutes(data)

    }).catch((error)=>{
      console.error(error);
      DisplayQoutes([{q:"Server is down,but you do not have to be",a:"Denis Imamovic"}])
    });
    //console.log(data)
  }

const DisplayQoutes = (inputData) => {
  if(Currqoute===undefined){
    console.log("its undefined");
    setCurrqoute(inputData[0])
    ManageFade()
  }
  setcount((count)=>count+1) 
  setCurrqoute(inputData[count])
  ManageFade()
  console.log(Currqoute,count);
}
    
   const ManageQoutes = () =>{
     if(count===qoute.length-1||count===0){
      console.log("if passed")
      FetchQoutes()
      setcount(0)
    }else{
       console.log("else passed")
       DisplayQoutes(qoute)
      }     
   }
   
   useEffect(() => {
     ManageQoutes()
    //eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

   
   
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <h1 id='main-title'>Inspirei</h1>
      <div id="quote-box">
        <Card className="Card"> 
          <Card.Body>
          <Fade in={open} timeout={700}><Card.Title id='text' className='text-white'>{Currqoute && Currqoute.q}</Card.Title></Fade>
          <Fade in={open} timeout={700}><Card.Subtitle className="mb-2 text-white" id='author'>- {Currqoute && Currqoute.a}</Card.Subtitle></Fade>
            <div className='button-group'>
            <Button variant="btn btn-primary" id="new-quote" className='mb-2 text-white' onClick={()=>{setTimeout(ManageQoutes, 700);ManageFade()}} aria-controls="text author" aria-expanded={open}>Gimme another qoute</Button>
            <Button variant="btn btn-secondary" href={`https://twitter.com/intent/tweet?text=${Currqoute && Currqoute.q} By ${Currqoute && Currqoute.a}`} id="tweet-quote" className='mb-2 text-white'  target='blank'>Tweet current qoute!</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}




export default App;

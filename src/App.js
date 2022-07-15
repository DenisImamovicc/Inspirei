import './App.css';
import {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function App() {
  const [qoute, setqoute] = useState("")
  const [author, setauthor] = useState("")
  
  const FetchQoutes = async() =>{
    const Qoute=await fetch('https://zenquotes.io/api/random')
    .then(response => response.json())
    .then(data => data);

    return setqoute(Qoute[0].q) + setauthor(Qoute[0].a)
  }

  useEffect(() => {
    FetchQoutes()
  }, [])
  

  return (
    <div className="App">
      <h1 id='main-title'>Random Quote Generator</h1>
      <div id="quote-box">
        <Card className="Card"> 
          <Card.Body>
            <Card.Title id='text' className='text-white fade-in'>{qoute}</Card.Title>
            <Card.Subtitle className="mb-2 text-white fade-in" id='author'>- {author}</Card.Subtitle>
            <div className='button-group'>
            <Button variant="outline-dark" id="new-quote" className='mb-2 text-white' onClick={FetchQoutes}>Gimme another qoute</Button>
            <Button variant="outline-dark" href={`https://twitter.com/intent/tweet?text=${qoute}By ${author}`} id="tweet-quote" className='mb-2 text-white'  target='blank'>Imma tweet it!</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;

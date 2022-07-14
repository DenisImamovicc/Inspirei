import './App.css';
import {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function App() {

  const FetchQoutes = async() =>{
    const Qoute=await fetch('https://zenquotes.io/api/random')
    .then(response => response.json())
    .then(data => data);

    return setqoute(Qoute[0].q) + setauthor(Qoute[0].a)
  }
  const [qoute, setqoute] = useState("")
  const [author, setauthor] = useState("")
  
  // const DisplayAnotherQuote = () =>{
  //   const RNG=Math.floor(Math.random()*quotes.length)
  //   return setqoute(quotes[RNG].text) 
  //       +  setauthor(quotes[RNG].author)
  // }


  useEffect(() => {
    FetchQoutes()
  }, [])
  

  return (
    <div className="App">
      <h1 id='main-title'>Random Quote Generator</h1>
      <div id="quote-box">
        <Card className="Card"> 
          <Card.Body>
            <Card.Title id='text' className='text-white'>{qoute}</Card.Title>
            <Card.Subtitle className="mb-2 text-white" id='author'>- {author}</Card.Subtitle>
            <div className='button-group'>
            <Button id="new-quote" className='mb-2' onClick={FetchQoutes}>Gimme another qoute</Button>
            <Button href="twitter.com/intent/tweet" id="tweet-quote" target='blank'>Imma tweet it!</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;

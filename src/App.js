import './App.css';
import {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function App() {
  const quotes= [
    {
      "text": "Do not look behind you!",
      "author": ":)"
    },
    {
      "text": "If you always say no,you will never say yes",
      "author": "Ryan"
    },
    {
      "text": "Coming from the north?",
      "author": "Ncr sergerant"
    }
  ]
  const RNG=Math.floor(Math.random()*quotes.length)
  const [qoute, setqoute] = useState(quotes[RNG].text)
  const [author, setauthor] = useState(quotes[RNG].author)
  
  const DisplayAnotherQuote = () =>{
    const RNG=Math.floor(Math.random()*quotes.length)
    return setqoute(quotes[RNG].text) 
        +  setauthor(quotes[RNG].author)
  }

  return (
    <div className="App">
      <h1 id='main-title'>Random Quote Generator</h1>
      <div id="quote-box">
        <Card className="Card"> 
          <Card.Body>
            <Card.Title id='text' className='text-white'>{qoute}</Card.Title>
            <Card.Subtitle className="mb-2 text-white" id='author'>- {author}</Card.Subtitle>
            <div className='button-group'>
            <Button id="new-quote" className='mb-2' onClick={DisplayAnotherQuote}>Gimme another qoute</Button>
            <Button href="twitter.com/intent/tweet" id="tweet-quote" target='blank'>Imma tweet it!</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
function App() {
  const quotes= [
    {
      "text": "hi",
      "author": "bye"
    },
    {
      "text": "i",
      "author": "am"
    },
    {
      "text": "not",
      "author": "ok"
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
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title id='text'>{qoute}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" id='author'>From:{author}</Card.Subtitle>
            <Button id="new-quote" onClick={DisplayAnotherQuote}>Gimme another qoute</Button>
            <Button href="twitter.com/intent/tweet" id="tweet-quote" target='blank'>Imma tweet it!</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;

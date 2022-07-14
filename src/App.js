import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
function App() {
  return (
    <div className="App">
      <h1 id='main-title'>Random Quoute Generator</h1>
      <div id="quote-box">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title id='text' >If you always say no,you will never say yes.</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" id='author'>From:Fuckboi denis</Card.Subtitle>
            <Button href="#">Gimme another qoute</Button>
            <Button href="#">Imma tweet it!</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;

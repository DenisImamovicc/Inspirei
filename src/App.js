import './App.css';
import { useState, useEffect } from 'react';
import background from "./images/bg-desktop.jpg";
import QouteBox from './components/QouteBox';
import FetchQoutes from './components/FetchQoutes';

function App() {

  const [qoute, setqoute] = useState([{}])
  const [Currqoute, setCurrqoute] = useState([{}])
  const [count, setcount] = useState(0)
  const [open, setOpen] = useState(false);

  const ManageFade = () => setOpen((open) => !open)
  const SetQoute = (data) => setqoute(data)

  const DisplayQoutes = (inputData) => {
    if (Currqoute === undefined) {
      console.log("its undefined");
      setCurrqoute(inputData[0])
      ManageFade()
    }
    setcount((count) => count + 1)
    setCurrqoute(inputData[count])
    ManageFade()
    console.log(Currqoute, count);
  }

  const ManageQoutes = () => {
    if (count === qoute.length - 1 || count === 0) {
      console.log("if passed")
      FetchQoutes({ SetQoute, DisplayQoutes })
      setcount(0)
    } else {
      console.log("else passed")
      DisplayQoutes(qoute)
    }
  }

  useEffect(() => {
    ManageQoutes()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <h1 id='main-title'>Inspirei</h1>
      <QouteBox Currqoute={Currqoute} open={open} ManageQoutes={ManageQoutes} ManageFade={ManageFade} />
    </div>
  );
}
export default App;
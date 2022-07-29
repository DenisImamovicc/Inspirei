import './App.css';
import { useState, useEffect } from 'react';
import background from "./images/bg-desktop.jpg";
import QouteBox from './components/QouteBox';
import FetchQoutes from './components/FetchQoutes';

function App() {

  const [qoute, setqoute] = useState([{}])
  const [Currqoute, setCurrqoute] = useState([{ q: "With great patience come great qoutes", a: "Insperei", error: true }])
  const [count, setcount] = useState(0)
  const [open, setOpen] = useState(true);

  const ManageFade = () => setOpen((open) => !open)
  const SetQoute = (data) => setqoute(data)

  const DisplayQoutes = (inputData) => {
    if (inputData.length === 1) {
      setCurrqoute(inputData[0])
    } else if (count === 0) {
      setcount((count) => count + 1)
      setCurrqoute(inputData[count])
    } else {
      setcount((count) => count + 1)
      setCurrqoute(inputData[count])
      ManageFade()
    }
  }

  const ManageQoutes = () => {
    if (count === qoute.length - 1 || count === 0) {
      DisplayQoutes(Currqoute)
      FetchQoutes({ SetQoute, DisplayQoutes })
      //setTimeout(() => { FetchQoutes({ SetQoute, DisplayQoutes }) }, 3000)
      setcount(0)
    } else {
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
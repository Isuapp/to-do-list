import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Form from './components/form/Form';
import Header from './components/header/Header';
import ToDoes from './components/toDoes/toDoes';

function App() {

  const [toDoes, setToDoes] = useState([])
  

  // Remember the handle submit on the form component.
  const add = (inputValue) =>{

    // We create the new to-do
    const newToDo = {
      id:nanoid(),
      name:inputValue,
      complete:false,
    }

    // We upodate the list of to-does
    setToDoes([...toDoes, newToDo])
  }

  return (
    <div>
        <Header />
        <Form add={add}/>
        <ToDoes toDoes={toDoes}/>
    </div>
  );
}

export default App;

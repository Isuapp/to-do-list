import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Form from './components/form/Form';
import Header from './components/header/Header';
import ToDoes from './components/toDoes/toDoes';
import ToDoesInProgress from './components/toDoesInProgress/ToDoesInProgress';

function App() {

  const [toDoes, setToDoes] = useState([]);

  const [toDoesInProgress, setToDoesInProgress] = useState([])
  

  // Remember the handle submit on the form component.
  const add = (inputValue) =>{

    // We create the new to-do
    const newToDo = {
      id:nanoid(),
      name:inputValue,
      toDo:true,
      InProgress:false,
      complete:false,
    }

    // We upodate the list of to-does
    setToDoes([...toDoes, newToDo])
  }
  const start = (id) =>{
   
      // Identify the toDo with the same id as the target
      const [newInProgress] = toDoes.filter(toDo=>toDo.id===id);

      //Identificamos todos los toDoes con id difente
      const filteredToDoes = toDoes.filter(toDo=>toDo.id!==id);
      

      // Update the progress column with the new to-do
      setToDoesInProgress([...toDoesInProgress, newInProgress]);

      // We update the to-do column after the update of progress column
      setToDoes(filteredToDoes)
  }


  return (
    <div>
        <Header />
        <Form add={add}/>
        <div className='board'>
          <ToDoes 
            toDoes={toDoes} 
            start={start}
          />
          <ToDoesInProgress toDoesInProgress={toDoesInProgress}/>
        </div>
    </div>
  );
}

export default App;

import './App.css';
import Form from './components/form/Form';
import Header from './components/header/Header';
import ToDo from './components/toDo/ToDo';
import ToDos from './components/toDos/toDos';

function App() {
  return (
    <div>
        <Header />
        <Form/>
        <ToDos>
          <ToDo />
          <ToDo />
        </ToDos>
    </div>
  );
}

export default App;

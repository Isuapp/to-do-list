import './todo.css';


// The toDo is the task it self on the toDos variable called 
// on app.js
const ToDo = ({toDo, start})=>{

    const startTask = (e)=>{
        e.preventDefault();
        start(toDo.id);
    }
    return(
        <div className='todo' >
            <p>{toDo.name}</p>
            <div>
                <button onClick={startTask}>start</button>
                <button>modify</button>
            </div>
        </div>
    )
}

export default ToDo;
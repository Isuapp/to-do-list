import './todo.css';


// The toDo is the task it self on the toDos variable called 
// on app.js
const ToDo = ({toDo})=>{

    return(
        <div className='todo' >
            <p>{toDo.name}</p>
            <div>
                <button>delete</button>
                <button>modify</button>
            </div>
        </div>
    )
}

export default ToDo;
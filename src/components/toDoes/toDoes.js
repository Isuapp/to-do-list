import ToDo from '../toDo/ToDo';
import './toDoes.css';

// the {toDoes} is the variable called in app.js will recieve the 
// list of to-does. We pass as paramater to use it in app.js
const ToDoes = ({toDoes})=>{

    return(
        <div className='toDoes'>
            {toDoes.map((toDo)=>{
                return( 
                    <ToDo toDo={toDo} key={toDo.id}/>
                )
            })}
        </div>
    )
}

export default ToDoes;
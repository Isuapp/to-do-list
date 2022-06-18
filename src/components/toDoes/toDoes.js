import ToDo from '../toDo/ToDo';
import './toDoes.css';

// the {toDoes} is the variable called in app.js will recieve the 
// list of to-does. We pass as paramater to use it in app.js
const ToDoes = ({toDoes, start})=>{

    return(
        <div className='toDoes'>
            <div>
                <h2>to-does</h2>
            </div>
            {toDoes.map((toDo)=>{
                return( 
                    <ToDo toDo={toDo} key={toDo.id} start={start}/>
                )
            })}
        </div>
    )
}

export default ToDoes;
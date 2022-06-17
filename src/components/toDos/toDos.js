
import './toDos.css';


const ToDos = ({children})=>{

    return(
        <div className='todos'>
            {children}
        </div>
    )
}

export default ToDos;
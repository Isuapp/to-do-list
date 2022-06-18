import InProgress from '../inProgress/InProgress';
import './toDoesInProgress.css';

const ToDoesInProgress = ({toDoesInProgress})=>{

    return(
        <div className='todoesinprogress'>
            <div>
                <h2>in progress</h2>
            </div>
        {toDoesInProgress.map((inProgress)=>{
            return( 
                <InProgress inProgress={inProgress} key={inProgress.id}/>
            )
        })}
    </div>
    )
}

export default ToDoesInProgress;

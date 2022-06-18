import './inProgress.css';

const InProgress = ({inProgress})=>{

    return(
        <div className='inprogress'>
            <p>{inProgress.name}</p>
            <div>
                <button>delete</button>
                <button>modify</button>
            </div>
        </div>
    )
}

export default InProgress;
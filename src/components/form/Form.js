import './form.css';

const Form = ()=>{

    return(
        <form>
            <input type='text' name='task' id='task' required/>
            <button>add task</button>
        </form>
    )
}

export default Form;
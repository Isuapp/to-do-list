import { useRef } from 'react';
import './form.css';

const Form = ({add})=>{

    // Through useRef we collect the input
    const input = useRef()

   
    const handleSubmit = (e)=>{
        e.preventDefault()
        // add is the function that will send the to-do to our list
        // with the paramater wich is the value of the input
        add(input.current.value);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type='text' name='task' id='task' ref={input} required/>
            <button>add task</button>
        </form>
    )
}

export default Form;
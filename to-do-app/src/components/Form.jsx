import React, {useState, useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext'

const Form = () => {
    const {addTask, clearAll} = useContext(TaskListContext)
    const [input, setInput] = useState('')

    const changeTask = (e) => {
        setInput(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        addTask(input);
    }

    return (
        <form className='form' onSubmit={submit}>
            <input 
                onChange={changeTask}
                className='task-input'
                type='text'
                placeholder='Add task...'
                required
                value={input}
            />
            <div className="buttons">
                <button type='submit' className='btn add-task-btn'>Add task</button>
                <button onClick={() => clearAll()} className='btn clear-btn'>CLear</button>
            </div>
        </form>
    )
}

export default Form;

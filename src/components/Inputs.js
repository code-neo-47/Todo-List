import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';
import './Inputs.css';

function Inputs() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodo = (e) => {
        e.preventDefault();

        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }));
    };
    return (
        <form className="input">
            <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
            <button disabled={!input} onClick={addTodo}>Add</button>
        </form>
    )
}

export default Inputs;

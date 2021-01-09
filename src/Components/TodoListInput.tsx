import React, {useState} from 'react'
import {v4} from 'uuid'
import { Action } from '../App';

interface IInputFunction {
    dispatch: React.Dispatch<Action>
}

const TodoListInput: React.FC<IInputFunction> = ({dispatch}) => {
    const [inputValue, setInputValue] = useState<string>("");
    const addItem = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(inputValue) {
            dispatch({type: "add", payload: { title: inputValue, id: v4() }});
            setInputValue("");
        }
    }
    return(
        <>
            <form className="" onSubmit={e => addItem(e)}>
                <input autoFocus type="text" placeholder="type something" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            </form>
        </>
    )
}
export default TodoListInput
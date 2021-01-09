import React, { useReducer } from 'react'
import './App.css';
import ListItem from './Components/ListItem'
import TodoListInput from './Components/TodoListInput'

export interface Data  {
  title: string;
  id: string;
}
export type Action = 
  | {type: "add", payload: { title: string, id: string }}
  | {type: "remove", payload: { title: string, id: string }}

const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
  EDIT: "edit"
}
const UpdateList = (state: Data[], action: Action): Data[] => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, {title: action.payload.title, id: action.payload.id}]
    case ACTIONS.REMOVE:
      return state.filter((item) => action.payload.id !== item.id);
    case ACTIONS.EDIT:
      return state
    default:
      return state
  }
}
const App = () => {
  const [list, dispatch] = useReducer(UpdateList, [])
  return(
    <>
      <TodoListInput dispatch={dispatch}/>
      {Object.keys(list).length ? <ListItem list={list} dispatch={dispatch} /> : <h1>There's no tasks</h1>}
    </>
  )
}

export default App
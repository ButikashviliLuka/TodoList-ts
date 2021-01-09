import React from 'react'
import {Action, Data} from '../App'

interface InputType  {
    list:  Data[]
    dispatch: React.Dispatch<Action>
}

const ListItem: React.FC<InputType> = ({list, dispatch}) => {
    return(
        <div className="list-container">
            {list.map((item) => {
                return(
                    <div key={item.id} className="list-item-main-div">
                        <div>
                            <h1>{item.title}</h1>
                            <h3 onClick={() => dispatch({type: "remove", payload: { title: item.title, id: item.id }})}>Remove</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ListItem
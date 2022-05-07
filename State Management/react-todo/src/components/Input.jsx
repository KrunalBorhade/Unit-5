import {useState} from "react"
import {AddItem}from "./AddItem"

export const Input = ({getTodo}) =>{
    const [text,setText] = useState("")

    return(
        <div className="inputTodo">
            <input onChange={(e) =>(
                setText(e.target.value)
            )} type="text" placeholder="Add a ToDo" />
            <button onClick={(e) =>{
                getTodo(text)}}>Add</button>
                <AddItem />
        </div>
    )
}
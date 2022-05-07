import {useState} from "react"
import {nanoid} from "nanoid"
import {Input} from "./Input"
import {AddItem} from "./AddItem"
import {Completed} from "./Completed"

export const Todo = () => {
    const [todo,setTodo] = useState([])

    const getTodo =(text)=>{
        const payload={
            text:text,
            status:false,
            id:nanoid()
        }
        setTodo([...todo,payload])
    }

    const [complete, setComplete] = useState([])
    const getComplete =(item) =>{
        setComplete([...complete,item])
    }

    const data = (item) =>{
        todo.map((e,i)=>{
            if(e.id===item.id) {
                getComplete(item)
                todo.splice(i,1)
            }
        })
        setTodo([...todo])
    }

    return (
        <div className="TodoMain">
            <Input getTodo={getTodo} />
            {
            todo.map((e)=>(
            <AddItem todoitem={e.status===false?e:null} data={data} />
            ))
            }
            <h3>{todo.length !==0? "COMPLETED TODOS":null}</h3>
            {
            complete.map((e)=>(
                // console.log(e.status)
               <Completed todocomp={e.status===true? e:null}/>
            ))
        }
        </div>
    )

}
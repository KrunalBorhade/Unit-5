export const AddItem = ({todoitem, data}) =>{

    function completedTodo(item){
        if(item.status===true){
            data(item)
        }
    }

    const filter = (event,todoItem) =>{
        if(event.target.checked){
            todoItem.status=true
            completedTodo(todoItem)
        }
        else{
            todoItem.status = false
        }
    }

    return(
        <div>
            <p>{todoitem.text}</p>
            <input type="checkbox" onChange={event =>filter(event, todoitem)}/>
        </div>
    )


}
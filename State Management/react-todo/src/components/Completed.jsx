export const Completed = ({todo})=>{
    return(
        <div>
            <p>{todo.text}</p>
            <input type="checkbox" checked/> 
        </div>
    )
}
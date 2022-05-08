import {store} from "./store"
// const state = store.getState();

const getTodo = () => {
    e.preventDefault();
    const todo = document.getElementById("todo").value;
    const action = {
        type:"ADD-TODO",
        payload:todo
    };
    store.dispatch(action)
}

document.getElementById('submit').addEventListener('click', getTodo);
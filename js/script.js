import { API } from "./data.js"
import { list } from "./list.js"
import { add } from "./add.js"

document.addEventListener('DOMContentLoaded', () =>{
    fetch(API)
    .then((response) => response.json())
    .then((data) => list(data));
    const addNew = document.querySelector('#add-new');
    addNew.addEventListener('click', add)
})


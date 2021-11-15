import { render } from "./data.js"

const list = (data) => {
    const contents = data
        .map(item => `<div class="row"><input type="checkbox" name="${item.id}" id="${item.id}"><label for="${item.id}">${item.title}</label></div>` )
        .join('');
    const container = document.querySelector('#container');
    render(container, `<form>${contents}</form>`)
}

export {list}


// {
//     if (item.completed) {
//         `<label for="${item.id}"></label>${item.title}<input type="checkbox" name="${item.id}" id="${item.id}" checked>` 
//     } else {
//         `<label for="${item.id}"></label>${item.title}<input type="checkbox" name="${item.id}" id="${item.id}">`
//     }}
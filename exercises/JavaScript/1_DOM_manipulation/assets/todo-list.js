const main = document.querySelector('main');
const list = document.createElement('ul');
const addForm = document.createElement('form');
const input = document.createElement('input');
const button = document.createElement('button');

input.type = "text";
input.placeholder = "new item";
input.ariaLabel = "new item";

button.type = "submit";
button.textContent = "add";

addForm.append(input, button);

main.append(addForm, list);

addForm.addEventListener('submit', ev => {
    ev.preventDefault();
    if(!input.value) return;
    const li = document.createElement('li');
    li.textContent = input.value;
    input.value = "";
    list.append(li);
});

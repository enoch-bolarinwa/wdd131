const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');
const li = document.createElememnt('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textcontent = 'x';
li.append(deleteButton);
list.append(li);
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');
const li = document.createElememnt('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textcontent = 'x';
li.append(deleteButton);
list.append(li);
button.addEventListener('click', function() {
    // Code to execute when the button is clicked
  });
  if (input.value.trim() !== ''){button.addEventListener('click', function())}
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
      });
      input.value = '';
      input.focus();
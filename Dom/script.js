const textarea = document.querySelector('textarea');

console.log(textarea.maxLength);

const remainingCharacters = textarea.maxLength - textarea.value.length;
console.log(remainingCharacters);

const limitDisplay = document.querySelector('#character-limit-info');
limitDisplay.innerText = 'You have loaded the page.';
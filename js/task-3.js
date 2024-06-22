const inputUserName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

inputUserName.addEventListener('input', handlerInput);


function handlerInput(event) {
    console.log(event.currentTarget.value)
    const trimmedValue = event.currentTarget.value.trim();
    nameOutput.textContent = trimmedValue || 'Anonymous';
}

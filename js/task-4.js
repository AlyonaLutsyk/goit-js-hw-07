const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();


    const formElements = evt.currentTarget.elements;
    const email = formElements.email.value.trim();
    const password = formElements.password.value.trim();

    if (email.length === 0 || password.length === 0) {
        alert('All form fields must be filled in');
        return;
    }
    const data = {
        email: email,
        password: password
    };

    console.log(data);
    loginForm.reset();
}

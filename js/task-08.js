const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    console.dir(formElements);

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password,
    };

    console.log(formData); 

    if (mail === "" || password === "") {
        alert("Всі поля повинні бути заповнені");
    }

    event.currentTarget.reset();
}

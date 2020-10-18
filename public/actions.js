function scrollToSignUpForm() {
    const signUpForm = document.getElementById("main-registration-form");
    signUpForm.scrollIntoView({block: "center"});
}

function signUpSubmit(event) {
    let isSuccessValidation = true;

    const parentForm = document.getElementById("main-registration-form");
    const inputWrappers = parentForm.getElementsByClassName("handle-message-input-wrapper");

    Array.from(inputWrappers).forEach((wrapper) => {
        const inputElement = wrapper.getElementsByClassName("registration-form__input")[0];

        inputElement.classList.add("registration-form__input_invalid-pseudo");
        inputElement.addEventListener('input', (event) => handleVisibilityErrorMessage(event.target), false);

        if (inputElement.validity.patternMismatch || inputElement.validity.valueMissing) {
            handleVisibilityErrorMessage(inputElement);
            isSuccessValidation = false;
        }
    });

    if (isSuccessValidation) {
        const email = document.getElementById("form-input-email");
        const password = document.getElementById("form-input-password");
        const emailValue = email.value;
        const passwordValue = password.value;

        const path = `/login`;

        fetch(path, {
            method: 'POST',
            credentials: 'include',
            dataType: 'json',
            body: JSON.stringify({emailValue, passwordValue}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(data => {
                alert(`UserId: ${data.userId}`);
            })
            .catch(err => console.error(err));
    } else {
        event.preventDefault();
    }
}

function handleVisibilityErrorMessage(inputElement) {
    const errorMessageElement = inputElement.parentElement.getElementsByClassName("handle-message-input-wrapper__message")[0];
    if (inputElement.validity.patternMismatch || inputElement.validity.valueMissing) {
        errorMessageElement.innerText = inputElement.validity.valueMissing ? `Can't be empty` : `Incorrect ${inputElement.name}`;
        errorMessageElement.classList.remove("hidden");
    } else {
        handleHideErrorMessage(errorMessageElement);
    }
}

function handleHideErrorMessage(errorMessageElement) {
    if (!errorMessageElement.classList.contains("hidden")) {
        errorMessageElement.classList.add("hidden");
    }
}

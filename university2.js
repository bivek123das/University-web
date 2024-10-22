const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');
const inputSubject = document.querySelector('#subject');
const inputButton = document.querySelector('#button');
const successMessage = document.querySelector('.success');
const failedMessage = document.querySelector('.failed');


inputButton.addEventListener('click', (e) =>{
    e.preventDefault();
    validatedForm();
})

function validatedForm() {
    if(!inputName.value || !inputEmail.value || !inputSubject.value || !inputMessage.value){
        failedMessage.style.display = 'block';
        successMessage.style.display = 'none';

        setTimeout(() => {
            failedMessage.style.display = 'none';
        },2000)
    }
    else{
        successMessage.style.display = 'block';
        failedMessage.style.display = 'none';

        inputName.value = '';
        inputEmail.value = '';
        inputSubject.value = '';
        inputMessage.value = '';

        setTimeout(() =>{
            successMessage.style.display = 'none';
        })
    }
}
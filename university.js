const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');
const button = document.querySelector('#button');
const successMessage = document.querySelector('.success');
const failedMessage = document.querySelector('.failed')


button.addEventListener('click',(e)=>{
   e.preventDefault();
   valadationForm();
})

function valadationForm (){
   if(!inputName.value || !inputEmail.value || !inputMessage.value){
      failedMessage.style.display = 'block';
       
      setTimeout(() =>{
        failedMessage.style.display = 'none';  
      },2000)
      
   }else{
       failedMessage.style.display = 'none';

       inputName.value = '';
       inputEmail.value = '';
       inputMessage.value = '';

       alert("Conguralations You submit the Form!!!");

   }
}
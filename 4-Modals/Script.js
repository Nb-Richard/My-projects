//variables
let openbtn = document.querySelector('.button');
let modal = document.getElementById('modalContainer');
let closebtn = document.querySelector('.cross');

//event listeners
openbtn.addEventListener('click', function(){
    modal.style.display = 'block';
});

closebtn.addEventListener('click', function(){
    modal.style.display = 'none';
});

window.addEventListener('click', function(e){  
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
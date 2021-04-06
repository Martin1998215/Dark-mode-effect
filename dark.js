const btn = document.querySelector('.toggle');
const mode = document.querySelector('.tip');

btn.addEventListener('change', ()=>{
 document.body.classList.toggle('tag');

 if(document.body.classList.contains('tag')){

mode.innerHTML = 'White Mode';

 }else {

mode.innerHTML = 'Dark Mode';

 }
    
});
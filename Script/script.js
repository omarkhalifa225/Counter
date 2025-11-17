let  counter=0;
let numbers=document.querySelectorAll('.num');
let cunter=document.getElementById('cunter');
let reset=document.querySelector('.icon');
function conterDisplay(){
    cunter.textContent=counter;
}

numbers.forEach((btn)=>{
btn.addEventListener('click', function(){

let value =btn.textContent;

if(value === '+'){
    counter += 1;
    conterDisplay();
}else if(value ==='-'){
    counter -= 1;
    conterDisplay();
}else if(value === '+10'){
    counter +=10;
    conterDisplay();
}else if(value === '-10'){
    counter -= 10;
    conterDisplay();
}
});
});
reset.addEventListener('click',function(){
counter=0;
cunter.textContent=counter;
});
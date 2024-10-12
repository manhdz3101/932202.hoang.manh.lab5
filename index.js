
let buttons = document.querySelectorAll('button');
buttons.forEach((button,i)=>{
    button.addEventListener("click",function(event)
    {
        event.stopPropagation();
        subupFunction(i);
    });
})
let subup = document.getElementsByClassName("sub");
let main = document.getElementsByClassName('main');
function subupFunction(i){
    let headNews = document.getElementById("sub-head");
    headNews.innerHTML=`Новость ${i+1}`;    
    let headText = document.getElementById("text");
    headText.innerHTML=`Новость ${i+1}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!`;
    subup[0].style.display = 'flex';    
    main[0].style.opacity = `20%`;
}
function close(event) {
    if (!subup[0].contains(event.target)) {
      subup[0].style.display = 'none';
      main[0].style.opacity = '100%';
    }
}
document.addEventListener('click',close);
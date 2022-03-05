'use strict'
const wrapperDiv= document.querySelector('.wrapper')
let statement=true;

   setInterval(function(){
   if(statement){
    for(let i=0; i<8; i++){  
        wrapperDiv.children[i].classList.remove('crvena-boja', 'zelena-boja')
        wrapperDiv.children[i].classList.add('zuta-boja')
   }}
       else{
        let newRequest = new XMLHttpRequest()
        newRequest.open('POST', 'https://www.random.org/integers/?num=1&min=0&max=255&col=1&base=10&format=plain&rnd=new', false)
        newRequest.send();
        const requestNumber= +(newRequest.responseText)
        let binary= requestNumber.toString(2)
    if(binary.length<8){
        let binaryShort=(Array(8-binary.length).fill(0)) ;
         binary=binaryShort.join('')+binary;
    }
    for(let i=0; i<binary.length; i++){  
       if(binary[i]==='0'){
           wrapperDiv.children[i].classList.remove('crvena-boja', 'zuta-boja')
           wrapperDiv.children[i].classList.add('zelena-boja')
       }
       if(binary[i]==='1'){
           wrapperDiv.children[i].classList.remove('zelena-boja', 'zuta-boja')
           wrapperDiv.children[i].classList.add('crvena-boja')
       } } }

    statement=!statement   

   },500)


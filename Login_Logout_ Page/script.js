window.alert=function(message,timeout=null){
    const alert=document.createElement('div');    
    const alertButton=document.createElement('button')
    alertButton.innerText='ok';
    alert.classList.add('alert');
    alert.setAttribute('style',`
         position:fixed;
         top:65%;
         left:42%;
         font-size:20px;
         padding:20px;
         border-radius:10px;
         box-shadow:0 10px 5px 0 #00000022;
         display:flex;
         border:1px solid #333;
    `);
    alert.innerText=message;
    document.body.appendChild(alert);
}
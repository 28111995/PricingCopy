var btnafter=document.getElementById('btnafter-table');
var showhidetable=document.getElementById('showhidetable');
var btnafterspan=document.getElementById('btnafterspan');
var inner=btnafter.textContent;
console.log(inner);
btnafter.addEventListener("click",function(){
    showhidetable.classList.toggle("hide");
    

})

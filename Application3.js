function deleteItem(e){
    alert("Keep Going King 🤘");
    e.parentNode.remove();
}
document.getElementById('add').addEventListener("click",function(){
    document.getElementById('Liste').innerHTML += "<li> <b>" + document.getElementById('Titre').value + " : </b> " + document.getElementById('Description').value +
    "   <img src='minus.png' height='20px' width='20px' onclick='deleteItem(this)'>" + "</li>";  
});

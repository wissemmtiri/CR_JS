document.getElementById('submit').addEventListener("click", function(){
    color = document.getElementById('color').value;
    font = document.getElementById('font').value;
    size = document.getElementById('size').value;
    document.getElementById('textarea').style.color = color; 
    document.getElementById('textarea').style.fontSize = size+"px";
    document.getElementById('textarea').style.fontFamily = font;   
});

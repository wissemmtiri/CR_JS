document.querySelector(".Play").addEventListener('click', function(){
    document.querySelector(".Play").style.visibility = "hidden";
    let play = true ;
    while(play){
        alert("L E T ' S   G O : ");
        let num_Cache = Math.floor(Math.random() * 11);
        let attempts = 0;
        let guess = "";
        let lvl = prompt('CHOOSE DIFFICULTY : HARD(1) | MED(2) | EASY(3) ');
        if (lvl == '1') {
            attempts = 3;
        } else if (lvl == '2') {
            attempts = 5;
        } else if (lvl == '3') {
            attempts = 8;
        } else {
            alert("-_-");
        }
        let i = 0;
        guess = Number(prompt('T R Y    ME : '));
        while ((i < attempts) && (guess != num_Cache)) {
            if (i == attempts - 1) alert("AYA RAKEZ ROUHEK : ");
            alert(attempts - i + " tries remaining :) ");
            guess = Number(prompt('T R Y    ME : '));
            i++;
        }
        if (guess == num_Cache) {
            alert("M3ALLEM ❤");
        } else {
            alert("💔 💔 💔");
        }
        replay = prompt("T3AWED ? (Y/N)");
        if(replay != "Y"){
            play = false;
            alert("SEE YOU 🙂 ");
        }
    }
});

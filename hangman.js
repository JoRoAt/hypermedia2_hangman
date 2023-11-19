function start(){
    currentround=0;
    currentguess=[];
    guesses=[];
    tablerow=0;
    wordn=Math.floor(Math.random()* (max - min) + min);
    word = Array.from(wordpool[wordn])
    while(currentguess.length != word.length){
        currentguess.push("_")
    }
    var hangman = document.getElementById("hangman");
    hangman.src="hangman06.jpg";
    var tableword = document.getElementById("hangword");
    var table=document.getElementById("MM")
    var index = 0;
    var cell;
    var row = tableword.insertRow(0);
    while(index < currentguess.length){
        cell = row.insertCell(index);
        cell.innerHTML = currentguess[index];
        index = index + 1;
    }table.insertRow(0);
}
function buttonpress(){
    var x=document.getElementById("labelinput");
    e=document.getElementById("idinput");
    if(x.innerHTML==="Name:"){
        var name=e.value;
        document.getElementById("idplayer").innerHTML=name;
        document.getElementById("button").innerHTML="Guess!";
        document.getElementById("winrate").innerText="Wins: " + win + ", Loses: " + lose;
        renderinitial();
    }
    else{
        const guess=e.value;
        compare(guess);
    }
    currentround=currentround+1;
    x.innerHTML="Guess " + currentround;
}
function compare(guess){
    var index=0;
    var found=false;
    if(!guesses.includes(guess)){ 
        while(index<word.length){
            if(guess==word[index]){
                currentguess[index]=word[index];
                found=true;
            }index=index+1;
        }if (!found){
            life=life-1;
            render_mistake();
        }if(comparearray(word,currentguess)){
            win=win+1;
            alert("You win!");
            reset();
        }else if(life==0){
            var hangman = document.getElementById("hangman");
            hangman.src="hangman00.jpg";
            lose=lose+1;
            alert("You lose... Answer: " + wordpool[wordn]);
            reset();
        }else{
            render(guess);
      }
    }
}

function comparearray(ar1, ar2){
    var index=0;
    while(index<ar1.length){
        if(ar1[index]!=ar2[index]){
            return false;
        }index = index+1;
    }return true;
}

function render_mistake(){
    var hangman = document.getElementById("hangman");
    if (life == 5){
        hangman.src="hangman05.jpg";
    }
    if (life == 4){
        hangman.src="hangman04.jpg";
    }
    if (life == 3){
        hangman.src="hangman03.jpg";
    }
    if (life == 2){
        hangman.src="hangman02.jpg";
    }
    if (life == 1){
        hangman.src="hangman01.jpg";
    }
}
function renderinitial(){
    var table=document.getElementById("MM");
    table.insertRow(tablerow);
    start();
}
function render(guess){
    var tableword = document.getElementById("hangword");
    var index = 0;
    var cell;
    var row = tableword.rows[0];
    while(index < currentguess.length){
        cell = row.cells[index];
        cell.innerHTML = currentguess[index];
        index = index + 1;
    }
    var table=document.getElementById("MM");
    row=table.rows[tablerow];
    cell=row.insertCell(tablen);
    guesses.push(guess);
    cell.innerHTML=guess;
    tablen = tablen+1;
    if (tablen>5){
        tablerow=tablerow+1;
        table.insertRow(tablerow);
        tablen=0;
    }
    
}
function reset(){
    var table=document.getElementById("MM");
    document.getElementById("winrate").innerText="Wins: " + win + ", Loses: " + lose;
    while(tablerow>=0){
        table.deleteRow(tablerow);
        tablerow=tablerow-1;
    }var hangman = document.getElementById("hangman")
    hangman.src = "hangman06.jpg";
    tablen=0;
    var tableword = document.getElementById("hangword");
    tableword.deleteRow(0);
    life = 6;
    start();
}

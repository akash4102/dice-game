function changevlaue(){
    //for dice one
    var dice1=Math.floor(Math.random()*6)+1;
    var location1="./images/dice"+dice1+".png";
    document.querySelector(".img1").setAttribute("src", location1);

    //for dice two
    var dice2=Math.floor(Math.random()*6)+1;
    var location2="./images/dice"+dice2+".png";
    document.querySelector(".img2").setAttribute("src", location2);
    if(dice1>dice2){
        document.querySelector("h1").innerText="player1 wins 🚩";
    }
    else if(dice2>dice1){
        document.querySelector("h1").innerText="player2 wins 🚩";
    }
    else{
        document.querySelector("h1").innerText="It is tie";
    }
}
changevlaue();

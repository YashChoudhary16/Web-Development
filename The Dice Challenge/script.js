var h = []
for (var i = 1 ; i <= 2 ; i++){
    var n = Math.random() * 6 
    var dice1 = Math.floor(n) + 1
    var dice = "./images/dice" + dice1 + ".png"
    document.querySelector(`.img${i}`).setAttribute("src", dice)
    h.push(dice1)
    if (i === 2){
        if (h[0] > h[1]) {
            document.querySelector("h1").textContent = "Player 1 wins!"
        }
        else if (h[1] > h[0]){
            document.querySelector("h1").textContent = "Player 2 wins!"
 
        }
        else {
            document.querySelector("h1").textContent = "Draw!"
        }
    }   
}

let userscore = 0;
let cmpscore = 0;

const snake = document.getElementById('option-1');
const water = document.getElementById('option-2');
const gun = document.getElementById('option-3');

snake.addEventListener("click", () => playGame("snake"));
water.addEventListener("click", () => playGame("water"));
gun.addEventListener("click", () => playGame("gun"));

const playGame = (user) => {
    const options = ['snake', 'water', 'gun'];
    const cmp = options[Math.floor(Math.random() * 3)];
    
    if (user === cmp) {
        // It's a tie
        return;
    } else if (
        (user === 'water' && cmp === 'gun') || 
        (user === 'snake' && cmp === 'water') ||
        (user === 'gun' && cmp === 'snake')
    ) {
        userscore++;
        document.getElementById('userScore').innerText = userscore;
        document.getElementById('message').innerText ="user won";

    } else {
        cmpscore++;
        document.getElementById('cmpScore').innerText = cmpscore;
        document.getElementById('message').innerText ="cmp won";

    }
};

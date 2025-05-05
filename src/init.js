let title = document.querySelector('.title');
let turn = 'x';
let squares = [];

function end(num1, num2, num3) {
    title.innerHTML = `${squares[num1]} wins!`;
    for (let i of [num1, num2, num3]) {
        document.getElementById('item' + i).classList.add('win');
    }
    setInterval(() => title.innerHTML += '.', 1000);
    setTimeout(() => location.reload(), 4000);
}

function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    const combos = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7],
    ];
    for (let combo of combos) {
        const [a, b, c] = combo;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            end(a, b, c);
            return;
        }
    }
}

function game(id) {
    let element = document.getElementById(id);
    if (element.innerHTML === '') {
        element.innerHTML = turn;
        element.classList.add(turn === 'x' ? 'filled-x' : 'filled-o');
        turn = turn === 'x' ? 'o' : 'x';
        title.innerHTML = `${turn}'s turn`;
        winner();
    }
}

window.game = game;
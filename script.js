const boxes = document.querySelectorAll(".box");
const clearbtn = document.querySelector(".clear");
const showbtn = document.querySelector(".show");

const positions = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const number_of_OX_on_board = [0, 0];
const OX = ["O", "X"];
let flag = 0;

boxes.forEach((box, i) => {
    box.addEventListener("click", () => {
        if (box.textContent === "" && number_of_OX_on_board[flag] < 3) {
            box.textContent = OX[flag];
            number_of_OX_on_board[flag]++;

            positions[i] = flag === 0 ? 1 : -1;
            flag = flag === 0 ? 1 : 0;
        } else if (
            number_of_OX_on_board[flag] === 3 &&
            box.textContent !== ""
        ) {
            if (box.textContent === OX[flag]) {
                box.textContent = "";
                positions[i] = 0;

                number_of_OX_on_board[flag]--;
            }
        }

        console.log(i);
        check_if_someone_won();
    });
});

const check_if_someone_won = () => {
    let b1 = positions[0];
    let b2 = positions[1];
    let b3 = positions[2];
    let b4 = positions[3];
    let b5 = positions[4];
    let b6 = positions[5];
    let b7 = positions[6];
    let b8 = positions[7];
    let b9 = positions[8];

    if (
        b1 + b2 + b3 === 3 ||
        b4 + b5 + b6 === 3 ||
        b7 + b8 + b9 === 3 ||
        b1 + b4 + b7 === 3 ||
        b2 + b5 + b8 === 3 ||
        b3 + b6 + b9 === 3 ||
        b1 + b5 + b9 === 3 ||
        b3 + b5 + b7 === 3
    ) {
        // delay is added, because without this alert was popping up before the last move can be seen on the board.
        // With 50ms delay, players get to see the last move and then alert pops up, showing who won.
        setTimeout(() => {
            window.alert("player O won");
            location.reload();
        }, 50);
    } else if (
        b1 + b2 + b3 === -3 ||
        b4 + b5 + b6 === -3 ||
        b7 + b8 + b9 === -3 ||
        b1 + b4 + b7 === -3 ||
        b2 + b5 + b8 === -3 ||
        b3 + b6 + b9 === -3 ||
        b1 + b5 + b9 === -3 ||
        b3 + b5 + b7 === -3
    ) {
        setTimeout(() => {
            window.alert("player X won");
            location.reload();
        }, 50);
    }
};

clearbtn.addEventListener("click", () => location.reload());
showbtn.addEventListener("click", () =>
    console.log(number_of_OX_on_board, positions)
);

const ball = document.querySelector("#ball");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const reverse = document.querySelector("#reverse");
const speedUp = document.querySelector("#speed-up");
const speedDown = document.querySelector("#speed-down");

const rollAnimation = [{
    transform: 'rotate(0) translate3D(-50%, -50%, 0)',
    color: "white",
    },
    {
        color: 'blue',
        offset: 0.3
    },
    {
        transform: "rotate(360deg) translate3D(-50%, -50%, 0)",
        color: "white",
    }
];

const rollOptions = {
    duration: 3000,
    iterations: Infinity,
}

const roll = ball.animate(rollAnimation, rollOptions);

pause.addEventListener('click', ()=> roll.pause());
play.addEventListener('click', ()=> {
    roll.playbackRate = 1;
    roll.play()
});
reverse.addEventListener("click", ()=> roll.reverse());
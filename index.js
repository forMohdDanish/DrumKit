
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", click);


}
document.addEventListener("keydown", click);
function click(e) {

    var audio;
    switch (this.innerText || e.key) {

        case "w":
            document.querySelector(".w").classList.toggle('pressed');


            audio = new Audio("./sounds/tom-1.mp3")
            audio.play();
            setTimeout(() => {
                document.querySelector(".w").classList.toggle('pressed');

            }, 100);

            break;
        case "a":
            document.querySelector(".a").classList.toggle('pressed');

            audio = new Audio("./sounds/tom-2.mp3")
            audio.play();
            setTimeout(() => {
                document.querySelector(".a").classList.toggle('pressed');

            }, 100);
            break;
        case "s":
            document.querySelector(".s").classList.toggle('pressed');

            audio = new Audio("./sounds/tom-3.mp3")
            audio.play();
            setTimeout(() => {
                document.querySelector(".s").classList.toggle('pressed');

            }, 100);
            break;
        case "d":
            document.querySelector(".d").classList.toggle('pressed');

            audio = new Audio("./sounds/tom-4.mp3")
            audio.play();
            setTimeout(() => {
                document.querySelector(".d").classList.toggle('pressed');

            }, 100);
            break;
        case "j":
            document.querySelector(".j").classList.toggle('pressed');

            audio = new Audio("./sounds/snare.mp3")
            audio.play();
            setTimeout(() => {
                document.querySelector(".j").classList.toggle('pressed');

            }, 100);
            break;
        case "k":
            document.querySelector(".k").classList.toggle('pressed');

            audio = new Audio("./sounds/crash.mp3")
            audio.play();
            setTimeout(() => {
                document.querySelector(".k").classList.toggle('pressed');

            }, 100);
            break;
        case "l":
            document.querySelector(".l").classList.toggle('pressed');

            audio = new Audio("./sounds/kick-bass.mp3")
            audio.play();
            setTimeout(() => {
                document.querySelector(".l").classList.toggle('pressed');

            }, 100);
            break;
        default:
            console.log(this.innerText);
            break;
    }
}


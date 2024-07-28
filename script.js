function showLoveMessage() {
    var message = document.getElementById("specialMessage");
    var music = document.getElementById("backgroundMusic");

    message.classList.toggle("hidden");

    if (!music.playing) {
        music.play();
        music.playing = true;
    } else {
        music.pause();
        music.playing = false;
    }
}
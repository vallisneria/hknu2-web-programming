var position = 0;
var playlist;
var video;

window.onload = function () {
    playlist = ["../video/preroll.mp4",
        "../video/areyoupopular.mp4",
        "../video/destinationearth.mp4"];
    video = document.getElementById("video");
    video.addEventListener("ended", nextvideo, false);

    video.src = playlist[position];
    video.load();
    video.play();
}

function nextvideo() {
    position++;
    if (position >= playlist.length) {
        position = 0;
    }
    video.src = playlist[position];
    video.load();
    video.play();
}
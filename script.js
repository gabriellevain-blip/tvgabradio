let mediaPlayer = null;

const streamUrl = "https://listen.radioking.com/radio/832216/stream/901481";
const apiUrl = "https://api.radioking.io/widget/radio/832216/track/current";

document.getElementById("playBtn").onclick = () => {
    if (!mediaPlayer) {
        mediaPlayer = new Audio(streamUrl);
    }
    mediaPlayer.play();
};

document.getElementById("stopBtn").onclick = () => {
    if (mediaPlayer) {
        mediaPlayer.pause();
        mediaPlayer = null;
    }
};

function updateTrack() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            document.getElementById("title").textContent = data.title;
            document.getElementById("artist").textContent = data.artist;
        })
        .catch(err => console.log(err));
}

setInterval(updateTrack, 5000);
updateTrack();

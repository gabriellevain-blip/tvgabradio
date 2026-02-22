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
            if (data && data.title) {
                document.getElementById("title").textContent = data.title;
                document.getElementById("artist").textContent = data.artist;
            } else {
                document.getElementById("title").textContent = "Titre indisponible";
                document.getElementById("artist").textContent = "Artiste indisponible";
            }
        })
        .catch(err => console.log("Erreur API :", err));
}

setInterval(updateTrack, 5000);
updateTrack();


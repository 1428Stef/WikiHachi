const tracks = [
    "https://open.spotify.com/embed/track/4NsPgRYUdHu2Q5JRNgXYU5",
    "https://open.spotify.com/embed/track/3hjRlteHMOimmqH1nQsJo6", 
    "https://open.spotify.com/embed/track/054SsgF3L2k5ZeTvbw9PaB",
];
let currentTrack = 0;

document.getElementById("changeTracks").onclick = () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    document.getElementById("spotifyWidget").src = tracks[currentTrack];
};
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleMute() {
    var video = document.getElementById('background-video');
    var button = document.getElementById('mute-button');
    video.muted = !video.muted;
    button.textContent = video.muted ? '🔇' : '🔊';
}

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
    video.volume = 0.2;
    video.play().catch(function(error) {
        console.log('Auto-play failed: ', error);
    });
});

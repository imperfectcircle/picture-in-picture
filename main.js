/* eslint-disable no-alert */
/* eslint-disable no-undef */
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select a media stream, pass to video element, then play
const selectMediaStream = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
        alert(
            `Something gone wrong. Please try later or contact the website owner and report this error message: ${error}`,
        );
    }
};

button.addEventListener('click', async () => {
    // Disable button
    button.disable = true;
    // Start PiP
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disable = false;
});

// On Load
selectMediaStream();

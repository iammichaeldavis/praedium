// HARP ********************************************************************************************
// *************************************************************************************************

const audioContext = new AudioContext();



function PlayExampleNoise() {
    let audioBuffer = audioContext.createBuffer(1, 48000, 48000);
    let sound = audioBuffer.getChannelData(0);
    for (let i = 0; i < sound.length; i++) {
        sound[i] = Math.random() * 2 - 1;
    }
    let audioSource = audioContext.createBufferSource();
    audioSource.connect(audioContext.destination);
    audioSource.buffer = audioBuffer;
    audioSource.start();
}



// End of Document
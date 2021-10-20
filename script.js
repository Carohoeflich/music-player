const musicContainer = document.querySelector(".music-container")
const playBtn = document.getElementById("#play")
const audio = document.querySelector("#audio")
const progress = document.querySelector(".progress")
const progressContainer = document.querySelector(".progress-container")

function playSong(){
musicContainer.classList.add('play')
playBtn.querySelector('i.fas').classList.remove('fa-play')
playBtn.querySelector('i.fas').classList.add('fa-pause')
audio.play()
}

function pauseSong(){
musicContainer.classList.remove('play')
playBtn.querySelector('i.fas').classList.remove('fa-pause')
playBtn.querySelector('i.fas').classList.add('fa-play')
audio.pause()
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong()
    } else{
        playSong()
    }
})
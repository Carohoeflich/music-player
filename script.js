window.onload = function () {
    const musicContainer = document.querySelector(".music-container")
    const playBtn = document.getElementById("play")
    const progress = document.querySelector(".progress")
    const progressContainer = document.querySelector(".progress-container")
    const volumenProgress = document.querySelector('.volume-progress')
    const volumenContainer = document.querySelector('.volume-progress-container')
    const volumenBtn = document.getElementById('volume')
    const audio = new Audio('lacura.mp3');
    const volumenInput = document.getElementById('volumeInput')
    const navigation = document.querySelector('.navigation')



    function playSong() {
        musicContainer.classList.add('play')
        playBtn.querySelector('i.fas').classList.remove('fa-play')
        playBtn.querySelector('i.fas').classList.add('fa-pause')
        audio.play()
    }

    function pauseSong() {
        musicContainer.classList.remove('play')
        playBtn.querySelector('i.fas').classList.remove('fa-pause')
        playBtn.querySelector('i.fas').classList.add('fa-play')
        audio.pause()
    }

    function updateProgress(e) {
        /* console.log(e.srcElement.currentTime) */ //console logs current time of the song
        /* console.log(e.srcElement.duration) */ // console logs the duration of the whole song
        const {
            duration,
            currentTime
        } = e.srcElement
        const progressPercent = (currentTime / duration) * 100
        progress.style.width = `${progressPercent}%`
    }


    function setProgress(e) {
        const width = this.clientWidth
        /* console.log(width) */ //this gives me the total width of the song
        const clickX = e.offsetX
        /* console.log(clickX)  */ // this gives me the width of the part in the progress bar i clicked on
        const duration = audio.duration

        audio.currentTime = (clickX / width) * duration // this makes it so the song changes to the part you click on in real time
    }


    if (playBtn) {
        playBtn.addEventListener('click', () => {
            const isPlaying = musicContainer.classList.contains('play')

            if (isPlaying) {
                pauseSong()
            } else {
                playSong()
            }
        })

    }


    volumenInput.addEventListener('change', function (e) {
        audio.volume = e.currentTarget.value / 100;
    })

    volumenBtn.addEventListener('click', () => {
        const isVolumen = navigation.classList.contains('volumen')
        if (isVolumen) {
            navigation.classList.remove('volumen')
        } else {
            navigation.classList.add('volumen')
        }
    })


    audio.addEventListener('timeupdate', updateProgress)
    progressContainer.addEventListener('click', setProgress)
    volumenProgress.addEventListener('click', setVolumen)

}
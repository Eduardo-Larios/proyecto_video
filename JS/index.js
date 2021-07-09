const video = document.querySelector('#Video1');
const play = document.querySelector('#play');
const pausa = document.querySelector('#pause');
const backward = document.querySelector('#backward');
const forward = document.querySelector('#forward');
const progress = document.querySelector('#progress')
play.addEventListener('click', handlePlay)
pausa.addEventListener('click', handlePause)
backward.addEventListener('click', handleBackward)
forward.addEventListener('click', handleForward)
video.addEventListener('Loadedmetadata', handleLoaded)
video.addEventListener('timeupdate', handleTimeupdate)
progress.addEventListener('input', handleInput)

function handlePlay() {
  video.play()
  play.hidden = true
  pause.hidden = false
  console.log('Si funciona');
}

function handlePause() {
  video.pause()
  play.hidden = false
  pause.hidden = true
  console.log('Si funciona');
}

function handleBackward() {
  console.log('Si funciona', video.currentTime);
  video.currentTime -= 10;
}

function handleForward() {
  console.log('Si funciona', video.currentTime);
  video.currentTime += 10;
}


function handleLoaded() {
  progress.max = video.duration
  console.log('Si funciona', video.duration)
}

function handleTimeupdate() {
  progress.value = video.currentTime
}

function handleInput() {
  video.currentTime = progress.value
}
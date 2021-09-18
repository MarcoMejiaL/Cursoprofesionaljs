import mediaPlayer from './mediaPlayer.js'
import autoPlay from './plugins/autoPlay.js'

const video = document.querySelector('video');
const play = document.getElementById('play');
const mute = document.getElementById('mute')


    

const player =new mediaPlayer({el: video, plugins:[/* new autoPlay() */]});

play.onclick=()=>player.togglePlay();
mute.onclick=()=>player.toggleMute();


    
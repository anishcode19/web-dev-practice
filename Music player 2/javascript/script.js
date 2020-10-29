// music src
var dir = "music/";

// music list
var playlist =["Hymn-For-The-Weekend","Alan-Walker-Alone","Blank-Space","Ed-Sheeran-Perfect","Ed-Sheeran-Shape-Of-You","ILY-I-LOVE-YOU-BABY.","Let-Me-Love-You-Justin-Bieber","Post-Malone-Rockstar","Senorita","Taio-Cruz-Dynamite","Taylor-Swift-You-Need-To-Calm-Down","The-Chainsmokers-Paris"];

var playlist_index =0;

// extension for different browser
var ext = ".mp3";
var agent = navigator.userAgent.toLowerCase();
if(agent.indexOf("firefox")!= -1 || agent.indexOf("opera") != -1){
  ext =".ogg";
}

// access  all button

var mainppbtn = document.querySelector("#playpausebtn");
var nextbtn = document.querySelector("#nextbtn");
var prevbtn = document.querySelector("#prevbtn");
var repeatbtn = document.querySelector("#repeat");
var randombtn = document.querySelector("#random");

// progress bar or seekslider
var seekslider = document.querySelector("#seekslider");
var currenttimetext = document.querySelector("#currenttimetext");
var durationtimetext = document.querySelector("#durationtimetext");
var mName = document.querySelector("#mName");
var aName = document.querySelector("#aName");

var audio = new Audio();
audio.src= dir+playlist[0]+ext;
audio.loop =false;

// Music Name

var title = ["Hymn-For-The-Weekend","Alone","Blank Space","Perfect","Shape Of You","I LOVE YOU BABY","Let Me Love You","Rockstar","Senorita","Dynamite","You Need To Calm Down","Paris"];

// image array

var poster= ["images/anish-1.jpg","images/anish-2.jpg","images/anish-3.jpg","images/anish-4.jpg","images/anish-5.jpg","images/anish-6.jpg","images/anish-7.jpg","images/anish-8.jpg","images/anish-9.jpg","images/anish-10.jpg","images/anish-1.jpg","images/anish-2.jpg"]

// Artist Name

var artist = ["Coldplay","Alan Walker","Taylor Swift","Ed Sheeran","Ed Sheeran","Surf Mesa","DJ Snake","Post Malone","Camila Cabello, Shawn Mendes","BTS","Taylor Swift","The Chainsmokers"]

// function for music detail
function fetchMusicDetail(){
  document.querySelector("#image").setAttribute("src",poster[playlist_index]);
  mName.innerHTML=title[playlist_index];
  aName.innerHTML=artist[playlist_index];
  audio.src = dir +playlist[playlist_index] +ext;
  audio.play();
}

mName.innerHTML = title[playlist_index];
aName.innerHTML = artist[playlist_index];


// function on play-pause btn
mainppbtn.addEventListener("click",function playpause(){
  if(audio.paused){
    audio.play();
    document.querySelector(".playpause").classList.add("active");
  }else{
    audio.pause();
    document.querySelector(".playpause").classList.remove("active");
  }
})
// function on next btn

nextbtn.addEventListener("click",function nextSong(){
  document.querySelector(".playpause").classList.add("active");
  playlist_index++;
  if(playlist_index > playlist.length-1){
    playlist_index =0;
  }
  fetchMusicDetail();
})

// function on prev btn

prevbtn.addEventListener("click",function nextSong(){
  document.querySelector(".playpause").classList.add("active");
  playlist_index--;
  if(playlist_index < 0){
    playlist_index =playlist.length-1;
  }
  fetchMusicDetail();
})

// function for loop

func

























//  conmment

console.log("Welcome To Spotify")
let songIndex = 0;
let audioelement = new Audio('./song/1.mp3');
let masterplay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let songItem =Array.from( document.getElementsByClassName("songItem"));
let songs = [
  {
    songname: "Let Me Love",
    filepath: "./song/1.mp3",
    coverpath: "./songimg/song1.jpg",
  },
  {
    songname: "Despasito",
    filepath: "./song/2.mp3",
    coverpath: "./songimg/song2.jpg",
  },
  {
    songname: "Amplifier",
    filepath: "./song/3.mp3",
    coverpath: "./songimg/song3.jpg",
  },
  {
    songname: "Blue Eyes",
    filepath: "./song/4.mp3",
    coverpath: "./songimg/song4.jpg",
  },
  {
    songname: "Khalasi",
    filepath: "./song/5 .mp3",
    coverpath: "./songimg/song5.jpg",
  },
];
songItem.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});
// PLAY AND PAUSE
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
      audioelement.play();
        //   console.log("play==>")
          masterplay.classList.remove("fa-circle-play");
          masterplay.classList.add("fa-circle-pause");
    }
    else {
      audioelement.paused();
        // console.log("pause==>")
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
    }
   
})
// EVENTS =>
audioelement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
    console.log(progress);
    myProgressBar.value = progress;
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName("songsItemPlay")).forEach(
        (element) => {
            console.log("pause==>");
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
      
    });
}
Array.from(document.getElementsByClassName("songsItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        console.log("play==>");
        makeAllPlay();
        index=parseInt(e.target.id);
          // e.classList.remove("fa-circle-play");
      // e.classList.remove("fa-circle-play");
      // e.classList.add("fa-circle-pause");
        audioelement.src = `./song/${index}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
    })
});
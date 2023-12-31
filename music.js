let now_playing = document.querySelector(".now-playing");
  let track_art = document.querySelector(".track-art");
  let track_name = document.querySelector(".track-name");
  let track_artist = document.querySelector(".track-artist");
  let playpause_btn = document.querySelector(".playpause-track");
  let next_btn = document.querySelector(".next-track");
  let prev_btn = document.querySelector(".prev-track");
  let seek_slider = document.querySelector(".seek_slider");
  let volume_slider = document.querySelector(".volume_slider");
  let curr_time = document.querySelector(".current-time");
  let total_duration = document.querySelector(".total-duration");
  let track_index = 0;
  let isPlaying = false;
  let updateTimer;
  let curr_track = document.createElement('audio');
  let track_list = [{
      name: "Loosu Penne",
      artist: "Loosu Penne",
      Image: "https://i.ibb.co/ykr8yyH/Fv-HKF4r-FFy-Sd-FY3-U7.jpg",
      path: "./1.mp3"
    },
{
    
  name: " GOA",
  path:"./2.mp3",
  artist: "Yuvan Shankar Raja",
  image: "https://i.ibb.co/ykr8yyH/Fv-HKF4r-FFy-Sd-FY3-U7.jpg",
},
{
  name: "GOA",
   artist: "Yuvan Shankar Raja",  
  path:"./3.mp3",
    image: "https://i.ibb.co/ykr8yyH/Fv-HKF4r-FFy-Sd-FY3-U7.jpg",
},
{
  name: "GOA",
      artist: "Yuvan Shankar Raja",  
  path:"./4.mp3",
    image: "https://i.ibb.co/ykr8yyH/Fv-HKF4r-FFy-Sd-FY3-U7.jpg",
},{
  name: "GOA",
      artist: "Yuvan Shankar Raja",  
  path:"./5.mp3",
    image: "https://i.ibb.co/ykr8yyH/Fv-HKF4r-FFy-Sd-FY3-U7.jpg",
},{
  name: "GOA",
      artist: "Yuvan Shankar Raja",    
  path:"./6.mp3",
    image: "https://i.ibb.co/ykr8yyH/Fv-HKF4r-FFy-Sd-FY3-U7.jpg",
},{
  name: "GOA",
      artist: "Yuvan Shankar Raja",    
  path:"./7.mp3",
    image: "https://i.ibb.co/ykr8yyH/Fv-HKF4r-FFy-Sd-FY3-U7.jpg",
},{
  name: "GOA",
      artist: "Yuvan Shankar Raja",    
  path:"./8.mp3",
    image: "https://i.ibb.co/ykr8yyH/Fv-HKF4r-FFy-Sd-FY3-U7.jpg",

}]
    function loadTrack(track_index) {
        clearInterval(updateTimer);
        resetValues();
        curr_track.src = track_list[track_index].path;
        curr_track.load();
        track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
        track_name.textContent = track_list[track_index].name;
        track_artist.textContent = track_list[track_index].artist;
        updateTimer = setInterval(seekUpdate, 1000);
        curr_track.addEventListener("ended", nextTrack);
      }
      function resetValues() {
        curr_time.textContent = "00:00";
        total_duration.textContent = "00:00";
        seek_slider.value = 0;
      }
      function playpauseTrack() {
        if (!isPlaying) playTrack();
        else pauseTrack();
      }
      function playTrack() {
        curr_track.play();
        isPlaying = true;
        playpause_btn.innerHTML = '<span class="fa fa-pause-circle fa-4x" id="icon10">';
      }
      function pauseTrack() {
        curr_track.pause();
        isPlaying = false;
        playpause_btn.innerHTML = '<span class="fa fa-play-circle fa-4x" id="icon9">';;
      }
      function nextTrack() {
        if (track_index < track_list.length - 1)
          track_index += 1;
        else track_index = 0;
        loadTrack(track_index);
        playTrack();
      }
      function prevTrack() {
        if (track_index > 0)
          track_index -= 1;
        else track_index = track_list.length;
        loadTrack(track_index);
        playTrack();
      }
      function seekTo() {
        seekto = curr_track.duration * (seek_slider.value / 100);
        curr_track.currentTime = seekto;
      }
    
      function setVolume() {
        curr_track.volume = volume_slider.value / 100;
      }
      function seekUpdate() {
        let seekPosition = 0;
        if (!isNaN(curr_track.duration)) {
          seekPosition = curr_track.currentTime * (100 / curr_track.duration);
          seek_slider.value = seekPosition;
          let currentMinutes = Math.floor(curr_track.currentTime / 60);
          let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
          let durationMinutes = Math.floor(curr_track.duration / 60);
          let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
          if (currentSeconds < 10) {
            currentSeconds = "0" + currentSeconds;
          }
          if (durationSeconds < 10) {
            durationSeconds = "0" + durationSeconds;
          }
          if (currentMinutes < 10) {
            currentMinutes = "0" + currentMinutes;
          }
          if (durationMinutes < 10) {
            durationMinutes = "0" + durationMinutes;
          }
          curr_time.textContent = currentMinutes + ":" + currentSeconds;
          total_duration.textContent = durationMinutes + ":" + durationSeconds;
        }
      }
      loadTrack(track_index);
    
      function correctTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      } 
$( document ).ready(function() {

  var sonosServer = "http://localhost:8000";
  var youtubeUrl = youtubeUrl;

  function play(){
    $.get(sonosServer + "/play", () => {
      console.log("Played");
    });
  }

  function pause(){
    $.get(sonosServer + "/pause", () => {
      console.log("Paused");
    });
  }

  function volume(){
    $.get(sonosServer + "/pause", () => {
      console.log("Paused");
    });
  }
});

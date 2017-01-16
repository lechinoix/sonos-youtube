$( document ).ready(function() {

  var sonosServer = "http://localhost:8000";
  var youtubeUrl = youtubeUrl;
  var volume = 5;

  $.post(sonosServer + "/volume", {vol: volume});

  function play(){
    $.post(sonosServer + "/play", {url: youtubeUrl});
  }

  function pause(){
    $.post(sonosServer + "/pause");
  }

  function raiseVolume(){
    $.post(sonosServer + "/volume", {vol: volume + 1});
  }

  function lowerVolume(){
    $.post(sonosServer + "/volume", {vol: volume - 1});
  }
});

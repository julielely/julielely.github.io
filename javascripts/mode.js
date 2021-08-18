var mode = true;

function setMode() {
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  if (hours >= 18 || hours <= 6) {
    darkMode();
  }
  else {
    lightMode();
  }
}

function formatAMPM() {
  var date = new Date;
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  $("#current-time").html(strTime);
}

window.setInterval(formatAMPM, 1000);
setMode();

function darkMode() {
  $("#switch").attr("src","images/dark-switch.png")
  $("body").css({"background-color":"#172741", "color":"#FFF"});
  $(".project-cards").css({"background-color":"#243558", "color":"#FFF", "box-shadow": "0px 4px 16px rgba(0, 0, 0, 0.2)"});
  // $(".button").css({"background-color":"#C4DDFD", "color":"#172741"});
  $(".button").css({"background-color":"var(--blue)", "color":"var(--navy)"});
  $(".disabled-button").css({"background-color": "var(--navy)"});
  mode = false;
}

function lightMode() {
  $("#switch").attr("src","images/light-switch.png")
  $("body").css({"background-color":"#FFF", "color":"#172741"});
  $(".project-cards").css({"background-color":"#172741", "color":"#FFF"});
  $(".button").css({"background-color":"#FFF", "color":"#172741"})
  $(".disabled-button").css({"background-color": "#243558"});
  mode = true;
}

$("#switch").on("click", function(event) {
  if (mode) {
    darkMode();
  }
  else {
    lightMode();
  }
});

if (mode) {

}
else {

}
$(".button").hover(function() {
  if (mode) { //If light mode
    $(this).css({"background-color":"#d5e5ff", "color":"var(--navy)", "box-shadow":"none"}).mouseout(function(){
              $(this).css({"background-color":"#FFF", "color":"var(--navy)", "box-shadow":"rgb(0 0 0 / 20%) 2px 2px 14px"});
      });
  }
  else {
    $(this).css({"background-color":"var(--navy)", "color":"white", "box-shadow":"none"}).mouseout(function(){
              $(this).css({"background-color":"var(--blue)", "color":"var(--navy)", "box-shadow":"rgb(0 0 0 / 20%) 2px 2px 14px"});
      });
  }
});

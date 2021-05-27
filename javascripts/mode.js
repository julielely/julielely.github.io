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

function showDate() {
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  // Format hours
  ampm = "AM"
  if (hours > 12) {
    hours -= 12;
    ampm = "PM"
  }
  if (minutes < 10) { minutes = "0" + minutes; }
  $("#current-time").html(hours + ":" + minutes + " " + ampm);
}

window.setInterval(showDate, 1000);
setMode();

function darkMode() {
  $("#switch").attr("src","images/dark-switch.png")
  $("body").css({"background-color":"#172741", "color":"#FFF"});
  $(".project-cards").css({"background-color":"#FFF", "color":"#172741"});
  $(".button").css({"background-color":"#172741", "color":"#FFF"});
  $(".project-image").css("border", "1px solid #E0E0E0");
  mode = false;
}

function lightMode() {
  $("#switch").attr("src","images/light-switch.png")
  $("body").css({"background-color":"#FFF", "color":"#172741"});
  $(".project-cards").css({"background-color":"#172741", "color":"#FFF"});
  $(".button").css({"background-color":"#FFF", "color":"#172741"})
  $(".project-image").css("border", "0px");
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
  if (mode) {
    $(this).css({"background-color":"#d5e5ff", "color":"var(--navy)"}).mouseout(function(){
              $(this).css({"background-color":"#FFF", "color":"var(--navy)"});
      });
  }
  else {
    $(this).css({"background-color":"#d5e5ff", "color":"var(--navy)"}).mouseout(function(){
              $(this).css({"background-color":"var(--navy)", "color":"#FFF"});
      });
  }
});

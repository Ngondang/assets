$(window).ready(function () {
  $('#cover').show();
  $('#loading').hide();
}) 
    
var audio = new Audio();
audio.src = "Degung.mp3";
    
$('#open').on('click', function(){
  $('#cover').hide();
  $('#content').show();
    audio.play();
})

$(".navigation").hide();
$(document).scroll(function() { 
  if($(window).scrollTop() >= 80) {
    $(".navigation").show();
  }else{
    $(".navigation").hide();
  }
});
  
$(function() {
  AOS.init({
    offset: 80,
    once: true,
    duration: 1200
  });
});

// Update the count down every 1 second
function countDown(date) {
  var countDownDate = new Date(date).getTime();

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;

  // If the count down is finished, write some text 
  if (distance < 0) {
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
};
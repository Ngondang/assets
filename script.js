window.addEventListener('load', function () {
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var source = audioCtx.createBufferSource();
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://cdn.jsdelivr.net/gh/Ngondang/assets/Degung.mp3');
  xhr.responseType = 'arraybuffer';
  xhr.addEventListener('load', function (r) {
      audioCtx.decodeAudioData(
              xhr.response, 
              function (buffer) {
                  source.buffer = buffer;
                  source.connect(audioCtx.destination);
                  source.loop = false;
              });
      source.start(0);
  });
  xhr.send();
});

$(".navigation").hide();
$(document).scroll(function() { 
  if($(window).scrollTop() >= 80) {
    $(".navigation").show();
  }else{
    $(".navigation").hide();
  }
});
  
AOS.init({
  offset: 80, 
  once: true,
  duration: 1200
});
$('#content').show();
$('#loading').hide();

$(".navigation").hide();
$(document).scroll(function() { 
  if($(window).scrollTop() >= 80) {
    $(".navigation").show();
  }else{
    $(".navigation").hide();
  }
});
  
AOS.init({
  offset: 80, 
  once: true,
  duration: 1200
});
$('#content').show();
$('#loading').hide();


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
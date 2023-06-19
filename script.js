$('#cover').show();
$('#loading').hide();

var audio = new Audio();
audio.src = "https://cdn.jsdelivr.net/gh/ngondang/assets/Degung.mp3";

audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
    
$('#open').on('click', function(){
    $('#loading').show();
    // If all images have loaded
    var imgs = document.images,
        len = imgs.length,
        counter = 0;
    
    [].forEach.call( imgs, function( img ) {
        if(img.complete)
        incrementCounter();
        else
        img.addEventListener( 'load', incrementCounter, false );
    } );
    
    function incrementCounter() {
        counter++;
        if ( counter === len ) {
            $('#loading').hide();
            $('#cover').hide();
            $('#content').show();
        }
      }
    AOS.init({
      offset: 80,
      once: true,
      duration: 1200
    });
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
};

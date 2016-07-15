$(document).ready(function() {
  var clock;
  var counter = 1;

  clock = $('.clock').FlipClock({
        clockFace: 'MinuteCounter',
        autoStart: false,
          callbacks: {
          stop: function() {
            counter++;
            // document.getElementById("count").value = counter;
            $('#count').html(counter);
            clock.setTime(10);
            clock.setCountdown(true);
            clock.start();
          }
        }
    });

    clock.setTime(10);
    clock.setCountdown(true);
    clock.start();

});


$(document).ready(function() {
  var upClock;

  clock = $('.upClock').FlipClock({
        autoStart: false
    });
    clock.start();
});

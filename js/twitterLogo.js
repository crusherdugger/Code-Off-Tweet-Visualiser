$(document).ready(function(){
  $("#jasonMayes").hide();

  $("#twitterImg").mouseenter(function(){
    $("#jasonMayes").show();
  });

  $("#twitterImg").mouseleave(function(){
    $("#jasonMayes").hide();
  });
});


anime({
  targets: ['.twitterLogoClass'],
  translateX: '13rem',
  direction: "alternate",
  rotate: 360,
  borderRadius: 8,
  duration: 5000,
  loop: false
});

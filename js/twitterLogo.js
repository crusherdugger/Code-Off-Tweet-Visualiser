$(document).ready(function(){
  $("#jasonMayes").hide();

  $("#twitterImg").mouseenter(function(){
    $("#jasonMayes").show();
  });

  $("#twitterImg").mouseleave(function(){
    $("#jasonMayes").hide();
  });
});

var mineAnimation = anime({
  targets: ['.mine','.myHeader'],
  translateX: 200,
  direction: 'alternate',
  duration: '2000',
  elasticity: 400,
  autoplay: false
});

mineAnimation.settings.complete = function() {
  // mineAnimation.restart();
}

mineAnimation.play();

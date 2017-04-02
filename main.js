var counter = 1;

$('.slideshow').on('click', '#right-arrow', function() {
  if (counter < 3) {
    counter++
    $('.page-dots').find('.active').next().addClass('active');
    $('.page-dots').find('.active').prev().removeClass('active');
  } else {
    counter = 1
    $('.page-dots').find('.active').removeClass('active');
    $('.page-dots i:first-child').addClass('active');
  }
  $('.slideshow').css('background-image', 'url("images/' + counter + '.jpg")')
});

$('.slideshow').on('click', '#left-arrow', function() {
  if (counter === 1) {
    counter = 3
    $('.page-dots').find('.active').removeClass('active');
    $('.page-dots i:last-child').addClass('active');
  } else {
    counter--
    $('.page-dots').find('.active').prev().addClass('active');
    $('.page-dots').find('.active').next().removeClass('active');
  }
  $('.slideshow').css('background-image', 'url("images/' + counter + '.jpg")')
});

$('.page-dots').on('click', function(e){
  switch (e.target.classList[0]) {
    case 'dot1':
      counter = 1;
      break;
    case 'dot2':
      counter = 2;
      break;
    case 'dot3':
      counter = 3;
      break;
  }
  changeSlide(counter);
})

function changeSlide(counter) {
  $('.slideshow').css('background-image', 'url("images/' + counter + '.jpg")')
  $('.page-dots').find('.active').removeClass('active');
  $('.page-dots i:nth-child(' + counter + ')').addClass('active');
}

setInterval(function(){
  if (counter < 3) {
    counter++;
  } else {
    counter = 1
  }
  changeSlide(counter);
}, 8000);

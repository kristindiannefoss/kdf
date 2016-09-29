'use strict';

$(document).ready(function(){
    $('.close').hide();
    sizeCheck();
  }
);

function sizeCheck() {
	if ($(window).width() <= 667 && $('#main-page').is(":hidden")){
	  $('#top-nav').hide();
    $('.close').show();
	} else if ($(window).width() >= 667 && $('#main-page').is(":hidden")) {
    $('#top-nav').show();
    $('.close').hide();
	} else if ( $('#main-page').is(":visible") ) {
    $('.close').hide();
	  $('#top-nav').hide();
	} else {
    $('.close').hide();
	}
}


$(window).resize(function(){
  sizeCheck();
});

function getModal(name) {
  $('.modal').hide();
  $('.close').show();
  $(`.${name}`).show();
  $('#main-page').hide();
  $('.close').hide();
  sizeCheck();
}

function closeModal() {
  $('.modal').hide();
  $('#top-nav').hide();
  $('#main-page').show();
  sizeCheck();
}

$('.nav-list').click(function(e) {
  $('.close').hide();
  var id = e.target.id;
  getModal(id);
  $('#top-nav').show();
  sizeCheck();
});

$('.close').click(function(e) {
  var id = e.target.id;
  closeModal(id);
  $('.close').hide();
});

'use strict';

$(document).ready(function(){
    $('.close').hide();
  }
);

function sizeCheck() {
	if ($(window).width() <= 667){
	  $('#top-nav').hide();
    $('.close').show();
	} else {
    $('.close').hide();
	}
}

$(window).resize(function(){
	if ($(window).width() <= 667){
	  $('#top-nav').hide();
	} else if ($(window).width() >= 667){
    $('.close').hide();
	  $('#top-nav').show();
	} else {
    $('.close').hide();
	}
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
  // $('.close').hide();
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

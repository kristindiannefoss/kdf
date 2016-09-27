function getModal(name) {
  $(`.${name}`).show();
  $('#main-page').hide();
}

function closeModal() {
  $('.modal').hide();
  $('#main-page').show();
}

$('.nav-list').click(function(e) {
  var id = e.target.id;
  getModal(id);
});

$('.close').click(function(e) {
  var id = e.target.id;
  closeModal(id);
});

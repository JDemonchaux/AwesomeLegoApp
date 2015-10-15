$(document).ready(function () {
  $('.vue').hide();
  // Routeur
  $('.link').on('click', function () {
    console.log("ok");
    var vue = $(this).attr("data-view");
    $('.vue').hide();
    $('.' + vue).show();
  })
  var socket = io();
  // socket.on('connect', function () { // TIP: you can avoid listening on `connect` and listen on events directly too!
  //   socket.emit('ferret', 'tobi', function (data) {
  //     console.log(data); // data will be 'woot'
  //   });
  // });
});

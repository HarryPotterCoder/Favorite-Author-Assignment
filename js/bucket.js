$(document).ready(function() {

  // $('.card').addClass('border-red');

  $("a.btn").click(function() {
     $(".jumbotron").toggle('pulsate',1400); // jQuery UI effect 'pulsate'
     $('h1').text('Welcome to a Magical World of Code!... TONY :)');
  });

  $('.jumbotron').hide().delay(500).fadeIn(1200);

  // jQuery UI Widgets

  $( "#tabs" ).tabs();
  $( "#accordion" ).accordion();

});

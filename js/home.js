

$('#btn_hcc').mouseover(function() {
      $('#letter1').addClass('letter_scale_plus');
      $('#letter2').addClass('letter_scale_plus');
      $('#letter3').addClass('letter_scale_plus');
})

$('#btn_hcc').mouseout(function() {
  $('#letter1').removeClass('letter_scale_plus');
  $('#letter2').removeClass('letter_scale_plus');
  $('#letter3').removeClass('letter_scale_plus');
})

$('#btn_gca').mouseover(function() {
      $('#letter3').addClass('letter_scale_plus');
      $('#letter4').addClass('letter_scale_plus');
      $('#letter5').addClass('letter_scale_plus');
})

$('#btn_gca').mouseout(function() {
  $('#letter3').removeClass('letter_scale_plus');
  $('#letter4').removeClass('letter_scale_plus');
  $('#letter5').removeClass('letter_scale_plus');
})



$('#btn_hcc').mouseover(function() {
      $('#letter1').addClass('letter_scale_plus');
      $('#letter2').addClass('letter_scale_plus');
      $('#letter3').addClass('letter_scale_plus');
      $(".div_g").css({ "height": "30.5px"});
      $(".div_g").css({ "padding-left": "63.5px"});
      $(".div_a").css({"padding-left": "64px"});
      $(".div_a").css({"margin-top": "-10.5px"});
})

$('#btn_hcc').mouseout(function() {
  $('#letter1').removeClass('letter_scale_plus');
  $('#letter2').removeClass('letter_scale_plus');
  $('#letter3').removeClass('letter_scale_plus');
  $(".div_g").css({ "height": "34px"});
  $(".div_g").css({ "padding-left": "62.5px"});
  $(".div_a").css({"padding-left": "62.5px"});
  $(".div_a").css({"margin-top": "-12.5px"});
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

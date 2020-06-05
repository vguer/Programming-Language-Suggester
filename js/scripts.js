$(document).ready(function() {
  $("form#quiz").submit(function() {
    const musicgenre= $("input:radio[name=musicgenre]:checked").val();
    const name= ("input#name").val();
    const gender= $("select#gender").val();
    const age= parseInt($("input#age").val());
    const favoritesubject= parseInt($("#favoritesubject").val());
    const toothbrushColor= $("#color").val();
 
    if (favoritesubject === 1) {
      $('#Python').show();
    } else if (favoritesubject === 2) {
      $('#Ruby').show();
    } else if (favoritesubject === 3) {
      $('#JavaScript').show(); 
    } else if (favoritesubject === 4) {
      $('#Ruby').show();
    } else if (favoritesubject === 5) {
      $('#JavaScript').show();
    } else {
      $('#Python').show();
    }
    event.preventDefault()
  });
});

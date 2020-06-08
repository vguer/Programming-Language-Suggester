$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const favoritesubject = parseInt($("#favorite-subject").val());
    const musicgenre = $("input:radio[name=musicgenre]:checked").val();
    const name = ($("input#name").val());
    const gender = $("select#gender").val();
    const age = parseInt($("input#age").val());
    const color = $("#color").val();

    const result = favoritesubject;
    if (favoritesubject === 1) {
      $("#Python").show();
    } else if (favoritesubject === 2) {
      $("#Ruby").show();
    } else if (favoritesubject === 3) {
      $("#JavaScript").show(); 
    } else if (favoritesubject === 4) {
      $("#Ruby").show();
    } else if (favoritesubject === 5) {
      $("#JavaScript").show();
    } else if (favoritesubject === 6) {
      $("#Ruby").show();
    } else if (favoritesubject === 7) {
      $("#JavaScript").show();
    } else {
      $("#Python").show();
    }

    event.preventDefault()
  });
});

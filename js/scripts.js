$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const name = ('$input#name').val ();
    const gender = $("select#gender").val();
    const age = parseInt($("input#age").val());
    const favoriteSubject = parseInt$("#favotiresubject").val();
    const musicGenre = $("input:radio[name=musicgenre]:checked").val();
    const toothbrushColor = $("#color").val();

    const result = 
  });

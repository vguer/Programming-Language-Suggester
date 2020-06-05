$(document).ready(function() {
  $("form#quiz").submit(function() {
    event.preventDefault()
    const musicgenre= $("input:radio[name=musicgenre]:checked").val();
    const name= ("input#name").val ();
    const gender= $("select#gender").val();
    const age= parseInt($("input#age").val());
    const favoriteSubject= parseInt($("#favotiresubject").val());
    const toothbrushColor= $("#color").val();

    if (musicGenre === 'Unblackmetal') {
      $('#Python').show();
    } else if (musicGenre === 'Medievalfolkrock') {
      $('#Ruby').show();
    } else if (musicGenre === 'Shoegaze') {
      $('#JavaScript').show(); 
    } else if (musicGenre === 'Germanreggae') {
      $('#Ruby').show();
    } else if (musicGenre ==='Mathrock') {
      $('#JavaScript').show();
    } else (musicGenre === 'Regrass') 
      $('#Python').show();

      event.preventDefault()
    })
  
  });

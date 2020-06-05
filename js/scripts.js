$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    let name = ("input#name").val ();
    let gender = $("select#gender").val();
    let age = parseInt($("input#age").val());
    let favoriteSubject = parseInt($("#favotiresubject").val());
    let musicGenre = $("input:radio[name=musicgenre]:checked").val();
    let toothbrushColor = $("#color").val();

    if (musicGenre === 'Unblackmetal') {
      $('#Unblackmetal').show();
    } else if (musicGenre === 'Medievalfolkrock') {
      $('#Medievalfolkrock').show();
    } else if (musicGenre === 'Shoegaze') {
      $('#Shoegaze').show(); 
    } else if (musicGenre === 'Germanreggae') {
      $('#Germanreggae').show();
    } else if (musicGenre ==='Mathrock') {
      $('#Germanreggae').show();
    } else (musicGenre === 'Regrass') 
      $('#Redgrass').show();
      
      event.preventDefault()
    })
  
  });

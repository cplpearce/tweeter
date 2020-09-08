$( document ).ready(function() {
  // on key-up, update the new tweet counter to length
  $( "#tweet-text" ).on('keyup', function() {
    $( ".counter" ).html(`${140 - this.innerHTML.length}`);
    if (140 - this.innerHTML.length < 0) {
      $( ".counter" ).css('color', 'red');
    } else {
      $( ".counter" ).css('color', '#545149');
    }
  });
});

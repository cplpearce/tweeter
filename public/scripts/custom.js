$( document ).ready(function() {
  /* increase tweet-text height dynmaically */
  autosize($( "#tweet-text" ));
  /* fade out the tweet-text label on input */
  $( "#tweet-text" ).focus(function() {
    $( "#tweet-text-label" ).fadeTo( 2500, 0, function() {
    });
  });
  /* fade in the tweet-text label if the field is empty */
  $( "#tweet-text" ).on('blur', function() {
    if (this.innerHTML.length === 0) {
      $( "#tweet-text-label" ).fadeTo( 2500, .7, function() {
      });
    }
  });

});
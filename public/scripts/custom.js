$( document ).ready(() => {
  /* increase tweet-text height dynmaically */
  autosize($( "#tweet-text" ));
  /* fade out the tweet-text label on input */
  $( "#tweet-text" ).focus(function() {
    $( "#tweet-text-label" ).fadeTo( 2500, 0, function() {
    })
  })
  /* fade in the tweet-text label if the field is empty */
  $( "#tweet-text" ).blur(function() {
    if (this.value.length === 0) {
      $( "#tweet-text-label" ).fadeTo( 1500, .7, function() {
      });
    }
  })
});

/* hover over tweet, get shadow and display @tag */
$(document).on('mouseover', '.tweet-container',function() {
  $( this ).css('box-shadow', '5px 5px rgb(182, 183, 207');
  $( '.handle', this ).fadeTo( 0, .7, function() {
  });
});

$(document).on('mouseout', '.tweet-container',function() {
  $( this ).css('box-shadow', 'none');
  $( '.handle', this ).fadeTo( 0, 0, function() {
  });
});
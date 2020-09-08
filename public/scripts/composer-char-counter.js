$( document ).ready(function() {
  // on key-down update the textarea height
  $("#tweet-text").on('input', function() {
    console.log($( this ).scrollHeight)
   $( this ).css('height', `${this.scrollHeight + 3}`)
  });
  // on key-up, update the counter to length
  $("#tweet-text").on('keyup', function() {
    $( ".counter" ).html(`${140 - this.value.length}`);
    if (140 - this.value.length < 0) {
      $( ".counter" ).css('color', 'red');
    } else {
      $( ".counter" ).css('color', '#545149');
    }
  });
});
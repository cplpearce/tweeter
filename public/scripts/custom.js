// a message toast for the user
const toast = (msg, success = false) => {
  const thisToast = new Promise(() => {
    // generate toast uid, though I imagine there are
    // more concise, npm-ish ways this is simple and low cost
    const uid = Math.random().toString(36).substr(2, 5);
    // ternary on success, default to false, create toast
    success
    ? $( 'body ').append(`<div id="toast" class="${uid} success"></div>`)
    : $( 'body ').append(`<div id="toast" class="${uid} fail"></div>`);
    // jquery selector on div #id toast
    const toastID = $( `#toast.${uid}` );
    // set the div html to [msg], then fadeIn .5 sec delay 2 sec, fadeOut 1 sec
    toastID.html(msg) && toastID.fadeTo(500, 1).delay(500).fadeTo(1000, 0, () => {
      // burn the toast
      $( `#toast.${uid}` ).remove();
    });
  });
}
// listeners and ready functions
$( document ).ready(() => {
  // increase tweet-text height dynmaically
  autosize($( "#tweet-text" ));
  // fade out the tweet-text label on input (css can't easily affect DOM elements above)
  $( "#tweet-text" ).focus(function() {
    $( "#tweet-text-label" ).fadeTo(1500, 0, function() {
    })
  });
  // fade in the tweet-text label if the field is empty */
  $( "#tweet-text" ).blur(function() {
    if (this.value.length === 0) {
      $( "#tweet-text-label" ).fadeTo(1500, .7, function() {
      });
    }
  });
  // flip arrow and unhide new tweet
  $( '#nav-form-toggle' ).click((event) => {
    $( '#nav-form-toggle' ).toggleClass('navClicked');
    $( '#new-tweet' ).slideToggle(500, 'linear');
    $( '#tweet-text' ).focus()
  });
  // fade in out scroll button at 150px
  $(document).scroll(function() {
    if ($(this).scrollTop() > 150) {
      console.log('test')
      $( '#scroll-up' ).fadeIn(700);
    } else {
      $( '#scroll-up' ).fadeOut(700);
    }
  });
  // scroll to the top of our page when $( '#scroll-up' ) is clicked
  $( '#scroll-up' ).click(() => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $( 'head' ).offset().top
    }, 300);
});
});

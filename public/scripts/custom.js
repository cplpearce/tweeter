// a message toast for the user
const toast = (msg, success = false) => {
  const thisToast = new Promise((res, err) => {
    // generate toast uid, though I imagine there are
    // more concise, npm ways this is simple and low cost
    const uid = Math.random().toString(36).substr(2, 5);
    // ternary on success, default to false, create toast
    success
    ? $( 'body ').append(`<div id="toast" class="${uid} success"></div>`)
    : $( 'body ').append(`<div id="toast" class="${uid} fail"></div>`);
    // jquery selector on div #id toast
    const toast = $( `#toast.${uid}` );
    // set the div html to [msg], then fadeIn .5 sec delay 2 sec, fadeOut 1 sec
    toast.html(msg) && toast.fadeTo(500, 1).delay(2000).fadeTo(1000, 0, () => {
      // burn the toast
      $( `#toast.${uid}` ).remove();
    });
  });
}

// listeners and ready functions
$( document ).ready(() => {
  /* increase tweet-text height dynmaically */
  autosize($( "#tweet-text" ));
  /* fade out the tweet-text label on input */
  $( "#tweet-text" ).focus(function() {
    $( "#tweet-text-label" ).fadeTo( 2500, 0, function() {
    })
  });
  /* fade in the tweet-text label if the field is empty */
  $( "#tweet-text" ).blur(function() {
    if (this.value.length === 0) {
      $( "#tweet-text-label" ).fadeTo( 1500, .7, function() {
      });
    }
  });
});

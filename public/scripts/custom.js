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

const wiggle = (selector) => {
  selector
    .animate({'top': '+=10',}, 500, () => {
      selector.animate({'top': '-=10',}, 500)
    });
};

// listeners and ready functions
$( document ).ready(() => {
  // give the form-toggle a shake so the user knows its there
  wiggle($( '#nav-arrow' ));
  // increase tweet-text height dynmaically
  autosize($( "#tweet-text" ));
  // fade out the tweet-text label on input
  $( "#tweet-text" ).focus(function() {
    $( "#tweet-text-label" ).fadeTo(2500, 0, function() {
    })
  });
  // fade in the tweet-text label if the field is empty */
  $( "#tweet-text" ).blur(function() {
    if (this.value.length === 0) {
      $( "#tweet-text-label" ).fadeTo(1500, .7, function() {
      });
    }
  });
  // wiggle $( '#nav-arrow' ) on mouseover of $( '#nav-form-toggle' )
  $( '#nav-form-toggle' ).hover(() => {
    wiggle($( '#nav-arrow' ));
  }, () => {
  $( '#nav-arrow' ).finish;
  });
  // flip arrow and unhide new tweet
  $( '#nav-form-toggle' ).click(() => {
    $( '#new-tweet' ).css('display') === 'none'
    ? $( '#nav-form-toggle' ).animate({ 'fontSize': '-=10', }, 1500)
    : $( '#nav-form-toggle' ).animate({'fontSize': '+=10' }, 1500);
    $( '#new-tweet' ).slideToggle(300, 'linear') && $( '#nav-arrow' ).toggleClass('flip');
  })
  // scroll to the top!
  $( 'to-top-btn' ).click(() => {
    $( 'html, body' ).animate({ scrollTop: 0 }, 1000);
 });
});

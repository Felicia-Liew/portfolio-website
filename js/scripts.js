function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
$('.anchor-scroll').anchorScroll({
   scrollSpeed: 1500, // scroll speed
   offsetTop: 0, // offset for fixed top bars (defaults to 0)
   onScroll: function () {
     // callback on scroll start
   },
   scrollEnd: function () {
     // callback on scroll end
   }
});

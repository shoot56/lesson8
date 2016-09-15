// центровка мяча
var area = document.getElementById('field');
var ball = document.getElementById('ball');
var ballLeft = area.clientWidth/2 - ball.clientWidth/2;
var ballTop = area.clientHeight/2 - ball.clientHeight/2;
ball.style.left = ballLeft  + 'px';
ball.style.top = ballTop + 'px';

// верстаем меню
function createNav(elements) {
  var nav = document.createElement('ul');
  nav.classList.add('nav');
  var body = document.body;
  body.appendChild(nav);

  var navItem = document.createElement('li');
  var navLink = document.createElement('a');
  for (var i = 0; i < elements; i++) {
    var navElement = navItem.cloneNode(true);
    var navLinkElement = navLink.cloneNode(true);
    navLinkElement.textContent = 'lorem ipsum';
    navLinkElement.setAttribute('href', '#');
    navElement.appendChild(navLinkElement);
    nav.appendChild(navElement);
  }
}

var _btn = document.querySelector('.buildNav');
_btn.onclick = (function() {
  createNav(5);
});







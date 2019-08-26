// Write your code here!
var el = document.getElementById('main');
el.remove();

var newHeader = document.createElement('H1');
newHeader.id = 'victory'
newHeader.innerHTML = 'Nick is the champion'
document.body.appendChild(newHeader);


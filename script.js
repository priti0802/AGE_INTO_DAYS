// CHALLENGE 1: YOUR AGE IN DAYS

function ageInDays () {
var birthyear= prompt('what year were you born...... my buddy');
var ageInDayss =(2021-birthyear)*365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('YOU ARE' + ' ' ,ageInDayss + 'DAYS OLD');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

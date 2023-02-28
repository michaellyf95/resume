// TRANSITION
function transition(val) {
    window.open('https://' + val); 
}

// PROJECTS ON HOVER
var frontend = document.getElementsByClassName('frontend-proj-content');
var design = document.getElementsByClassName('design-proj-content');

var addArrows = function() {
    var title = this.querySelector('.bottom-pad-title');
    title.innerHTML += '<i class="fas fa-angle-right"></i><i class="fas fa-angle-right"></i><i class="fas fa-angle-right"></i>';
};

var removeArrows = function() {
    var title = this.querySelector('.bottom-pad-title');
    var newTitle = title.innerHTML.replace('<i class="fas fa-angle-right"></i><i class="fas fa-angle-right"></i><i class="fas fa-angle-right"></i>', '');
    title.innerHTML = newTitle;
};

for (var i = 0; i < frontend.length; i++) {
    frontend[i].addEventListener('mouseover', addArrows, false);
    frontend[i].addEventListener('mouseout', removeArrows, false);
}

for (var i = 0; i < design.length; i++) {
    design[i].addEventListener('mouseover', addArrows, false);
    design[i].addEventListener('mouseout', removeArrows, false);
}
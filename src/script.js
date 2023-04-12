// TIP BUTTONS
var ten_Tip = document.getElementById('ten-tip-container')
var fifteen_Tip = document.getElementById('fifteen-tip-container')
var twenty_Tip = document.getElementById('twenty-tip-container')

function active_tip(element) {
    element.classList.add('active')
}

function unactive_tip(element) {
    element.classList.remove('active');
}

ten_Tip.onclick = function () {
    active_tip(ten_Tip)
    unactive_tip(fifteen_Tip)
    unactive_tip(twenty_Tip)
}

fifteen_Tip.onclick = function () {
    unactive_tip(ten_Tip)
    active_tip(fifteen_Tip)
    unactive_tip(twenty_Tip)
}

twenty_Tip.onclick = function () {
    unactive_tip(ten_Tip)
    unactive_tip(fifteen_Tip)
    active_tip(twenty_Tip)
}

// SUBMIT/CLEAR BUTTON
function hide_Summary() { 
    document.getElementById('is-hidden').style.display = 'none'
}

function unhide_Summary() {
    document.getElementById('is-hidden').style.display = 'block'
}

document.getElementById('clear').onclick = function () {
    hide_Summary()
}

document.getElementById('submit').onclick = function () {
    unhide_Summary()
}




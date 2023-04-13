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

// SUMMARY
function update_Summary() {
    if (document.getElementById('food-price').value == '') {
        document.getElementById('food-price-label').textContent = '$0'
    } else {
        document.getElementById('food-price-label').textContent = "$" + document.getElementById('food-price').value
    }

    if (document.getElementById('drink-price').value == '') {
        document.getElementById('drink-price-label').textContent = '$0'
    } else {
        document.getElementById('drink-price-label').textContent = "$" + document.getElementById('drink-price').value
    }

    if (document.getElementById('dessert-price').value == '') {
        document.getElementById('dessert-price-label').textContent = '$0'
    } else {
        document.getElementById('dessert-price-label').textContent = "$" + document.getElementById('dessert-price').value
    }
    // if (document.getElementById('food-price').value == '') {
    //     document.getElementById('food-price-label').textContent = '$0'
    // } else {
    //     document.getElementById('food-price-label').textContent = "$" + document.getElementById('food-price').value
    // }    if (document.getElementById('food-price').value == '') {
    //     document.getElementById('food-price-label').textContent = '$0'
    // } else {
    //     document.getElementById('food-price-label').textContent = "$" + document.getElementById('food-price').value
    // }
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
    update_Summary()
    unhide_Summary()
}




// TIP BUTTONS
var tip_Percentage = .10

var ten_Tip = document.getElementById('ten-tip-container')
var fifteen_Tip = document.getElementById('fifteen-tip-container')
var twenty_Tip = document.getElementById('twenty-tip-container')

function active_tip(element) {
    element.classList.add('active')
}

function unactive_tip(element) {
    element.classList.remove('active')
}

ten_Tip.onclick = function () {
    tip_Percentage = .10
    active_tip(ten_Tip)
    unactive_tip(fifteen_Tip)
    unactive_tip(twenty_Tip)
}

fifteen_Tip.onclick = function () {
    tip_Percentage = .15
    unactive_tip(ten_Tip)
    active_tip(fifteen_Tip)
    unactive_tip(twenty_Tip)
}

twenty_Tip.onclick = function () {
    tip_Percentage = .20
    unactive_tip(ten_Tip)
    unactive_tip(fifteen_Tip)
    active_tip(twenty_Tip)
}

// SUMMARY
var food_Price = document.getElementById('food-price')
var drink_Price = document.getElementById('drink-price')
var dessert_Price = document.getElementById('dessert-price')

function update_Summary() {
    // food
    if (food_Price.value == '') {
        document.getElementById('food-price-label').textContent = '$0'
        food_Price.value = 0
    } else {
        document.getElementById('food-price-label').textContent = "$" + food_Price.value
    }
    // drink
    if (drink_Price.value == '') {
        document.getElementById('drink-price-label').textContent = '$0'
        drink_Price.value = 0
    } else {
        document.getElementById('drink-price-label').textContent = "$" + drink_Price.value
    }
    // dessert
    if (dessert_Price.value == '') {
        document.getElementById('dessert-price-label').textContent = '$0'
        dessert_Price.value = 0
    } else {
        document.getElementById('dessert-price-label').textContent = "$" + dessert_Price.value
    }
    // tax
    var tax = (parseFloat(food_Price.value) + parseFloat(drink_Price.value) + parseFloat(dessert_Price.value)) * .10
    if (tax % 1 != 0) {
        tax = tax.toFixed(2)
    }
    if (isNaN(tax)) {
        document.getElementById('tax-price-label').textContent = "$0"
    } else {
        document.getElementById('tax-price-label').textContent = "$" + tax
    }
    // tip
    var total_Tip = (parseFloat(food_Price.value) + parseFloat(drink_Price.value) + parseFloat(dessert_Price.value)) * tip_Percentage
    if (total_Tip % 1 != 0) {
        total_Tip = total_Tip.toFixed(2)
    }
    if (isNaN(total_Tip)) {
        document.getElementById('tip-price-label').textContent = "$0"
    } else {
        document.getElementById('tip-price-label').textContent = "$" + total_Tip
    }
    // total
    var total_Price = (parseFloat(food_Price.value) + parseFloat(drink_Price.value) + parseFloat(dessert_Price.value)) + parseFloat(tax) + parseFloat(total_Tip)
    if (total_Price % 1 != 0) {
        total_Price = total_Price.toFixed(2)
    }
    if (isNaN(total_Price)) {
        document.getElementById('total-price-label').textContent = "$0"
    } else {
        document.getElementById('total-price-label').textContent = "$" + total_Price
    }
}

// SUBMIT/CLEAR BUTTON
function reset_Values() {
    food_Price.value = '';
    drink_Price.value = '';
    dessert_Price.value = '';
}

function hide_Summary() { 
    document.getElementById('is-hidden').style.display = 'none'
}

function unhide_Summary() {
    document.getElementById('is-hidden').style.display = 'block'
}

document.getElementById('clear').onclick = function () {
    hide_Summary()
    reset_Values()
}

document.getElementById('submit').onclick = function () {
    update_Summary()
    unhide_Summary()
}




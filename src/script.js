// TIP BUTTONS (changes bg color of selected tip amount)
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

var food_Price_Label = document.getElementById('food-price-label')
var drink_Price_Label = document.getElementById('drink-price-label')
var dessert_Price_Label = document.getElementById('dessert-price-label')
var tax_Price_label = document.getElementById('tax-price-label')
var tip_Price_Label = document.getElementById('tip-price-label')
var total_Price_Label = document.getElementById('total-price-label')

function update_Summary() {
    // food
    if (food_Price.value == '') {
        food_Price_Label.textContent = '$0'
        food_Price.value = 0
    } else {
        food_Price_Label.textContent = "$" + food_Price.value
    }

    // drink
    if (drink_Price.value == '') {
        drink_Price_Label.textContent = '$0'
        drink_Price.value = 0
    } else {
        drink_Price_Label.textContent = "$" + drink_Price.value
    }

    // dessert
    if (dessert_Price.value == '') {
        dessert_Price_Label.textContent = '$0'
        dessert_Price.value = 0
    } else {
        dessert_Price_Label.textContent = "$" + dessert_Price.value
    }

    // tax
    var tax = (parseFloat(food_Price.value) + parseFloat(drink_Price.value) + parseFloat(dessert_Price.value)) * .10
    
    // adds 2 decimal places if needed
    if (tax % 1 != 0) {
        tax = tax.toFixed(2)
    }

    if (isNaN(tax)) {
        tax_Price_label.textContent = "$0"
    } else {
        tax_Price_label.textContent = "$" + tax
    }

    // tip
    var total_Tip = (parseFloat(food_Price.value) + parseFloat(drink_Price.value) + parseFloat(dessert_Price.value)) * tip_Percentage
    
    // adds 2 decimal places if needed
    if (total_Tip % 1 != 0) {
        total_Tip = total_Tip.toFixed(2)
    }

    if (isNaN(total_Tip)) {
        tip_Price_Label.textContent = "$0"
    } else {
        tip_Price_Label.textContent = "$" + total_Tip
    }

    // total
    var total_Price = (parseFloat(food_Price.value) + parseFloat(drink_Price.value) + parseFloat(dessert_Price.value)) + parseFloat(tax) + parseFloat(total_Tip)
    
    // adds 2 decimal places if needed
    if (total_Price % 1 != 0) {
        total_Price = total_Price.toFixed(2)
    }
    
    if (isNaN(total_Price)) {
        total_Price_Label.textContent = "$0"
    } else {
        total_Price_Label.textContent = "$" + total_Price
    }
}

// SUBMIT/CLEAR BUTTON
var is_Hidden_Element = document.getElementById('is-hidden')
var submit_Button = document.getElementById('submit')
var clear_Button = document.getElementById('clear')

function reset_Values() {
    food_Price.value = '';
    drink_Price.value = '';
    dessert_Price.value = '';
}

function hide_Summary() { 
    is_Hidden_Element.style.display = 'none'
}

function unhide_Summary() {
    is_Hidden_Element.style.display = 'block'
}

clear_Button.onclick = function () {
    hide_Summary()
    reset_Values()
}

submit_Button.onclick = function () {
    update_Summary()
    unhide_Summary()
}




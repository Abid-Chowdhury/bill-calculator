var splitter_Is_Hidden_Element = document.getElementById('splitter-is-hidden')
var splitter_Submit_Button = document.getElementById('splitter-submit')
var splitter_Clear_Button = document.getElementById('splitter-clear')

var splitter_Total_Bill = document.getElementById('splitter-total-bill')
var splitter_Person = document.getElementById('splitter-people')
var per_Person_Label = document.getElementById('per-person-label')

function splitter_Update_Summary() {
    var per_Person_Bill = parseFloat(splitter_Total_Bill.value) / parseFloat(splitter_Person.value)
    
    // adds 2 decimal places if needed
    if (per_Person_Bill % 1 != 0) {
        per_Person_Bill = per_Person_Bill.toFixed(2)
    }

    if (isNaN(per_Person_Bill)) {
        per_Person_Label.textContent = 0
    } else {
        per_Person_Label.textContent = per_Person_Bill
    }
}

function splitter_Reset_Values() {
    food_Price.value = '';
    drink_Price.value = '';
    dessert_Price.value = '';
}

function splitter_Hide_Summary() { 
    splitter_Is_Hidden_Element.style.display = 'none'
}

function splitter_Unhide_Summary() {
    splitter_Is_Hidden_Element.style.display = 'block'
}

splitter_Clear_Button.onclick = function () {
    splitter_Hide_Summary()
    splitter_Reset_Values()
}

splitter_Submit_Button.onclick = function () {
    splitter_Update_Summary()
    splitter_Unhide_Summary()
}
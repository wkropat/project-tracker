// add project button
// on click, it makes a dialog box
// with a form

// Dialog box
//grid? list? items: project name, project type, due date, hoursly rate
// form with text input, default "enter the project name"
// form with drop down selector
// form with text input, default "$"
//  Calendar dropdown
// two buttons, close and Submit

// When submit is clicked
    // then we dynamically make the divs in the right hand side html elements
    // filling out the table

    // last box in the table has a buttton
        // clicking this button makes the entire row disappear


// Make moment current time in header


setInterval(function() {
    var rightNow = moment().format("HH:mm:ss");
    timeSlot = document.getElementById("timegoeshere");
    timeSlot.textContent = rightNow;
    console.log(rightNow);
}, 1000);


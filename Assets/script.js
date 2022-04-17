var currentDate = document.querySelector('#currentDay');
currentDate.textContent = moment().format('MMMM Do YYYY, h:mm a');
// var hour = document.querySelector();
var hour = moment().hours();
var saveBtn = $(".saveBtn");
var currentHour 


function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
timeBlockColor();


saveBtn.on('click', function () {
    var timeOfDay = $(this).siblings('.hour').text();
    var task = $(this).siblings('.plan').val();
    localStorage.setItem(timeOfDay, task);
});


function loadstorage () {
    $('.hour').each(function () {
        var currentHour = $(this).text();
        var currentTask = localStorage.getItem(currentHour);
        console.log();
        if (currentTask !== null) {
            $(this).siblings('.description').val(currentTask);
        }
    });
}
loadstorage();

function usePlanner() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentTask = localStorage.getItem(currentHour);

        if(currentTask !== null) {
            $(this).siblings(".plan").val(currentTask);
        }
    });
}
usePlanner();

//colorChange();

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// ?THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// ?THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// todo THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// ? THEN I can enter an event
// WHEN I click the save button for that time block
// todo THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
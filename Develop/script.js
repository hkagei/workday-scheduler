var currentDate = document.querySelector('#currentDay');
currentDate.textContent = moment().format('MMMM Do YYYY, h:mm a');
// var hour = document.querySelector();
var hour = moment().hours();
var saveBtn = $(".saveBtn");


var taskStatus = function () {
    currentdate;
    console.log();
}

saveBtn.on('click', function () {
    var timeOfDay = $(this).siblings('.hour').text();
    var task = $(this).siblings('.description').val();
    localStorage.setItem(timeOfDay, task);
});

var localstorage
function loadstorage () {
    $('.hour').each(function () {
        var currenthour = $(this).text();
        var currentTask = localStorage.getItem(currentHour);
        if (currentTask !== null) {
            $(this).siblings('.description').val(currenTask);
        }
    });
}
loadstorage();

function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        // console.log(this); //each time-block

        if (currHour > hour) {
            $(this).addClass(".future");
        } else if (currHour === hour) {
            $(this).addClass(".present");
        } else {
            $(this).addClass(".past");
        }
    })
};

// function colorChange (){
//    if (hour >= currentDate) {
//     var hour = $(this).attr('id');
//     var parseHour = parseInt(hour);
//     if (parseHour >=== currentDate) {
//         hour.classList.add('.past');
//     }
// });
//}

// function colorChange() {
//     if (hour >= currentDate)
//     var targetDiv = document.querySelectorAll('.time-block');
//     for (var i = 0; i < targetDiv.length; i++) {
//         if (targetDiv[i].hour === currentDate) {
//         targetDiv[i].style.background = 'red';
//         }
//     }
// }

//colorChange();

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// ?THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// ?THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// todo THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// todo THEN I can enter an event
// WHEN I click the save button for that time block
// todo THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
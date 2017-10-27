var datePickerData = new CalendarMonth();

var pickerMonth = document.querySelector(".headerMonth__monthName");
var pickerYear = document.querySelector(".headerYear__year");
var dayTable = document.querySelector(".daysTablet");
var prevMonth = document.querySelector(".headerMonth__prev");
var nextMonth = document.querySelector(".headerMonth__next");
var daysNumber = datePickerData.daysInMonth;
var myYear = pickerYear.innerHTML;
var dayShift = datePickerData.dayOfWeekOfFirstDay();

// display current month and year

pickerMonth.innerHTML = datePickerData.currentMonth;
pickerYear.innerHTML = datePickerData.currentYear;

//add display days
function addDays() {
    for (var i = 1; i <= daysNumber; i++) {
        var elem = document.createElement('div');
        elem.className = "dayCell";
        elem.innerHTML = i;
        dayTable.appendChild(elem);
    };
};
addDays();

// shift days for current week day
function dayIndent() {
    if (dayShift === 0) {
        dayShift = 7;
    };
    for (var j=1; j <= 7; j++) {
        if (dayShift === j) {
            dayTable.firstElementChild.style.marginLeft = ((j-1) * 50) + "px";
        }
    }
};
dayIndent();

// previous month select
prevMonth.onclick = function() {
    var myMonth = datePickerData.number(pickerMonth.innerHTML) - 1;
    if (myMonth === -1) {
        myMonth = 11;
        pickerYear.innerHTML = +pickerYear.innerHTML - 1;
    }
    customMonth = datePickerData.customMonth(myMonth);
    pickerMonth.innerHTML = customMonth;
    
    //delete display days
    for (var i = 1; i <= daysNumber; i++) {
        var elem = dayTable.firstElementChild;
        dayTable.removeChild(elem);
    }

    myYear = pickerYear.innerHTML;
    
    daysNumber = datePickerData.daysInMonthCustom(myYear, myMonth);
    dayShift=datePickerData.dayOfWeekCustom(myYear, myMonth);

    addDays();
    dayIndent();
}

// next month select

nextMonth.onclick = function() {
    // set month
    var myMonth = datePickerData.number(pickerMonth.innerHTML) + 1;
    if (myMonth === 12) {
        myMonth = 0;
        pickerYear.innerHTML = +pickerYear.innerHTML + 1;
    }
    customMonth = datePickerData.customMonth(myMonth);
    pickerMonth.innerHTML = customMonth;
    
    //delete display days
    for (var i = 1; i <= daysNumber; i++) {
        var elem = dayTable.firstElementChild;
        dayTable.removeChild(elem);
    }

    myYear = pickerYear.innerHTML;

    daysNumber = datePickerData.daysInMonthCustom(myYear, myMonth);
    dayShift=datePickerData.dayOfWeekCustom(myYear, myMonth);

    addDays();
    dayIndent();
}






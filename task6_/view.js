var datePickerData = new CalendarMonth();

var pickerMonth = document.querySelector(".headerMonth__monthName");
var pickerYear = document.querySelector(".headerYear__year");
var dayTable = document.querySelector(".daysTablet");
var prevMonth = document.querySelector(".headerMonth__prev");
var nextMonth = document.querySelector(".headerMonth__next");
var daysNumber = datePickerData.daysInMonth;
var myYear = pickerYear.innerHTML;
var dayShift = datePickerData.dayOfWeekOfFirstDay();
var nowDay = datePickerData.currentDayOfWeek;

// display current month and year

pickerMonth.innerHTML = datePickerData.currentMonth;
pickerYear.innerHTML = datePickerData.currentYear;

//add display days
function addDays() {
    for (var i = 1; i <= daysNumber; i++) {
        var elem = document.createElement('div');
        elem.className = "dayCell";
        elem.innerHTML = i;
        if ((i === nowDay) && 
        (+pickerYear.innerHTML === datePickerData.currentYear) && 
        (datePickerData.number(pickerMonth.innerHTML) === datePickerData.currentMonthNumber)) {
            elem.style.color = "red";
        }
        dayTable.appendChild(elem);
    };
    for (var j=1; j <= 13; j ++) {
        var elem = document.createElement('div');
        elem.className = "dayCell";
        elem.innerHTML = j;
        elem.style.color = "grey";
        dayTable.appendChild(elem);
    }
};
addDays();

// shift days for current week day
function dayIndent() {
    if (dayShift === 0) {
        dayShift = 7;
    };
    var myYear = pickerYear.innerHTML;
    var myMonth = datePickerData.number(pickerMonth.innerHTML) - 1;
    if (myMonth === -1) {
        myMonth = 11;
        myYear = +myYear - 1;
    }
    daysNumber = datePickerData.daysInMonthCustom(myYear, myMonth);
    for (var i = daysNumber; i >= (daysNumber - dayShift + 2); i--) {
        var elem = document.createElement('div');
        elem.className = "dayCell";
        elem.innerHTML = i;
        elem.style.color = "grey";
        dayTable.insertBefore(elem, dayTable.firstElementChild);
    };
    if (dayShift === 1) {
        for (var i = daysNumber; i >= (daysNumber - 6); i--) {
            var elem = document.createElement('div');
            elem.className = "dayCell";
            elem.innerHTML = i;
            elem.style.color = "grey";
            dayTable.insertBefore(elem, dayTable.firstElementChild);
        };
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
    var childNumber = dayTable.children.length;
    for (var i = 1; i <= childNumber; i++) {
        var elem = dayTable.firstElementChild;
        dayTable.removeChild(elem);
    }

    daysNumber = datePickerData.daysInMonthCustom(pickerYear.innerHTML, myMonth);
    dayShift=datePickerData.dayOfWeekCustom(pickerYear.innerHTML, myMonth);

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
    var childNumber = dayTable.children.length;
    for (var i = 1; i <= childNumber; i++) {
        var elem = dayTable.firstElementChild;
        dayTable.removeChild(elem);
    }

    daysNumber = datePickerData.daysInMonthCustom(pickerYear.innerHTML, myMonth);
    dayShift=datePickerData.dayOfWeekCustom(pickerYear.innerHTML, myMonth);

    addDays();
    dayIndent();
}






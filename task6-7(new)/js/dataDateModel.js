function DatesPicker() {
    this.monthArray = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    this.daysArray = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonthNumber = this.currentDate.getMonth();
    this.currentMonth = this.monthArray[this.currentMonthNumber];
    this.daysInMonth = 32 - new Date(this.currentYear, this.currentDate.getMonth(), 32).getDate();
    this.arrayOfDays = this.arrayDay();
}

DatesPicker.prototype.dayOfWeekOfFirstDay = function() {
    this.firstDay = new Date(this.currentYear, this.currentDate.getMonth(), 1);
    this.day = this.firstDay.getDay();
    if(this.day === 0) {
        this.day = 7;
    }
    return this.day;
}

DatesPicker.prototype.arrayDay = function() {
    this.array = [];
    for (var i = 1; i <= this.daysInMonth; i++) {
        this.array.push([i]);
    }
    return this.array;
}

DatesPicker.prototype.number = function(month) {
    return this.monthArray.indexOf(month);
}

DatesPicker.prototype.customMonth = function(month) {
    return this.monthArray[month];
}


function CustomDates(year, month) {
    DatesPicker.call(this);
    this.year = year;
    this.month = month;
    this.daysInMonth = 32 - new Date(year, month, 32).getDate();
    this.arrayOfDays = this.arrayDay();
}

CustomDates.prototype = Object.create(DatesPicker.prototype)
CustomDates.prototype.constructor = CustomDates;


CustomDates.prototype.arrayDay = function() {
    this.array = [];
    for (var i = 1; i <= this.daysInMonth; i++) {
        this.array.push([i]);
    }
    return this.array;
}

CustomDates.prototype.dayOfWeekOfFirstDay = function() {
    this.firstDay = new Date(this.year, this.month, 1);
    this.day = this.firstDay.getDay();
    if(this.day === 0) {
        this.day = 7;
    }
    return this.day;
}



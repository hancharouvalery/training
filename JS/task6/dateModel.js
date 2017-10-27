function CalendarMonth(year, month) {
    this.monthArray = ["Januar", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonthNumber = this.currentDate.getMonth()
    this.currentMonth = this.monthArray[this.currentDate.getMonth()];
    this.dayOfWeekOfFirstDay = function() {
        this.firstDay = new Date(this.currentYear, this.currentDate.getMonth(), 1);
        return this.firstDay.getDay();
    }
    this.currentDayOfWeek = this.currentDate.getDate();
    this.daysInMonth = 32 - new Date(this.currentYear, this.currentDate.getMonth(), 32).getDate();

    this.number = function(month) {
        return this.monthArray.indexOf(month);
    }

    this.customMonth = function(month) {
        return this.monthArray[month];
    }

    this.dayOfWeekCustom = function(year, month) {
        this.firstDayCustom = new Date(year, month, 1);
        return this.firstDayCustom.getDay();
    }

    this.daysInMonthCustom = function(year, month) {
        return 32 - new Date(year, month, 32).getDate();
    }


}


var renderer = new Renderer();
var dataDates = new DatesPicker();

// create container
var container = renderer.create(dataDates,
    {
        tag: 'div',
        classes: ['ht-calendar-container']
    }
);
renderer.render(container);

//create header container for month, year
var headerContainer = renderer.create(dataDates,
{
    tag: 'div',
    classes: ['ht-calendar-container__header']        
}
);
renderer.render(headerContainer, container);

var monthAndYearContainer = renderer.create(dataDates,
    {
        tag: 'div',
        classes: ['ht-calendar-container__month-and-year']        
    }
);
renderer.render(monthAndYearContainer, headerContainer);

var monthName = renderer.create(dataDates,
{
    tag: 'div',
    classes: ['ht-calendar-container__month'],
    property: 'currentMonth'      
}
);
renderer.render(monthName, monthAndYearContainer);

var yearName = renderer.create(dataDates,
{
    tag: 'div',
    classes: ['ht-calendar-container__year'],
    property: 'currentYear'      
}
);
renderer.render(yearName, monthAndYearContainer);

//create day of the week container
var weekContainer = renderer.create(dataDates,
{
    tag: 'div',
    classes: ['ht-calendar-container__week-container']
}
);
renderer.render(weekContainer, container);

var weekList = renderer.create(dataDates,
{
    tag: 'div',
    classes: ['ht-calendar-container__week-cell'],
    property: 'daysArray',
    arrayOfElements: true
}
);
renderer.render(weekList, weekContainer);

//create days contaier
var daysContainer = renderer.create(dataDates,
{
    tag: 'div',
    classes: ['ht-calendar-container__days-container']
}
);
renderer.render(daysContainer, container);

var daysList = renderer.create(dataDates,
{
    tag: 'div',
    classes: ['ht-calendar-container__days-cell'],
    property: 'arrayOfDays',
    daysShift: true,
    arrayOfElements: true
}
);
renderer.render(daysList, daysContainer);

//create arrowbuttons

var leftArrow = renderer.create(dataDates,
{
    tag: 'button',
    classes: ['ht-calendar-container__arrow', 'ht-calendar-container__arrow_text-style'],
    content: '<< Назад',
    event: ['click', function() {
        dataDates.currentMonthNumber = dataDates.currentMonthNumber - 1;
        if (dataDates.currentMonthNumber === -1) {
            dataDates.currentMonthNumber = 11;
            dataDates.currentYear = dataDates.currentYear - 1;
        }
        dataDates.currentMonth = dataDates.monthArray[dataDates.currentMonthNumber];
                
        //delete display childrens of days container and month-and-year container
        var childNumber = document.querySelector('.ht-calendar-container__days-container').children.length;
        for (var i = 1; i <= childNumber; i++) {
            var elem = document.querySelector('.ht-calendar-container__days-container').firstElementChild;
            document.querySelector('.ht-calendar-container__days-container').removeChild(elem);
        }
        childNumber = document.querySelector('.ht-calendar-container__month-and-year').children.length;
        for (var i = 1; i <= childNumber; i++) {
            var elem = document.querySelector('.ht-calendar-container__month-and-year').firstElementChild;
            document.querySelector('.ht-calendar-container__month-and-year').removeChild(elem);
        };

        var monthName = renderer.create(dataDates,
            {
                tag: 'div',
                classes: ['ht-calendar-container__month'],
                property: 'currentMonth'      
            }
        );
        renderer.render(monthName, monthAndYearContainer);

        var yearName = renderer.create(dataDates,
            {
                tag: 'div',
                classes: ['ht-calendar-container__year'],
                property: 'currentYear'      
            }
        );
        renderer.render(yearName, monthAndYearContainer);

        var daysList = renderer.create(new CustomDates(dataDates.currentYear, dataDates.currentMonthNumber),
            {
                tag: 'div',
                classes: ['ht-calendar-container__days-cell'],
                property: 'arrayOfDays',
                daysShift: true,
                arrayOfElements: true
            }
        );
        renderer.render(daysList, daysContainer);
    }]    
}
);
renderer.render(leftArrow, headerContainer);

var rightArrow = renderer.create(dataDates,
{
    tag: 'button',
    classes: ['ht-calendar-container__arrow', 'ht-calendar-container__arrow_text-style'],
    content: 'Вперед >>',
    event: ['click', function() {
        dataDates.currentMonthNumber = dataDates.currentMonthNumber + 1;
        if (dataDates.currentMonthNumber === 12) {
            dataDates.currentMonthNumber = 0;
            dataDates.currentYear = dataDates.currentYear + 1;
        }
        dataDates.currentMonth = dataDates.monthArray[dataDates.currentMonthNumber];
                
        //delete display childrens of days container and month-and-year container
        var childNumber = document.querySelector('.ht-calendar-container__days-container').children.length;
        for (var i = 1; i <= childNumber; i++) {
            var elem = document.querySelector('.ht-calendar-container__days-container').firstElementChild;
            document.querySelector('.ht-calendar-container__days-container').removeChild(elem);
        }
        childNumber = document.querySelector('.ht-calendar-container__month-and-year').children.length;
        for (var i = 1; i <= childNumber; i++) {
            var elem = document.querySelector('.ht-calendar-container__month-and-year').firstElementChild;
            document.querySelector('.ht-calendar-container__month-and-year').removeChild(elem);
        };

        var monthName = renderer.create(dataDates,
            {
                tag: 'div',
                classes: ['ht-calendar-container__month'],
                property: 'currentMonth'      
            }
        );
        renderer.render(monthName, monthAndYearContainer);

        var yearName = renderer.create(dataDates,
            {
                tag: 'div',
                classes: ['ht-calendar-container__year'],
                property: 'currentYear'      
            }
        );
        renderer.render(yearName, monthAndYearContainer);

        var daysList = renderer.create(new CustomDates(dataDates.currentYear, dataDates.currentMonthNumber),
            {
                tag: 'div',
                classes: ['ht-calendar-container__days-cell'],
                property: 'arrayOfDays',
                daysShift: true,
                arrayOfElements: true
            }
        );
        renderer.render(daysList, daysContainer);
    }]             
}
);
renderer.render(rightArrow, headerContainer);
    
    if ('localStorage' in window && window['localStorage'] !== null) {
        if (performance.navigation.type == 1) {
            localStorage.clear();
        };

        /*document.onkeydown = function(e) {
            if (e.key =="F5") {
                localStorage.clear();
            }
        };*/

        //input adress localStorage
        var adressEvent = document.querySelector('.person-section__adress');
        
        (function(adressEvent) {
            var name = adressEvent.getAttribute('name');
    
            adressEvent.value = localStorage.getItem(name);
    
            adressEvent.onkeyup = function() {
            localStorage.setItem(name, adressEvent.value);
            };
        })(adressEvent);

        //input Date localStorage
        var elementsDate = document.querySelectorAll('.date-section__input-date');
        
        for (var i = 0, length = elementsDate.length; i < length; i++) {
            (function(element) {
                var name = element.getAttribute('name');
                
                element.value = localStorage.getItem(name) || element.value;
                            
                element.onblur = function() {
                localStorage.setItem(name, element.value);
                };
            })(elementsDate[i]);
        };

        //input Time localStorage
        var elementsTime = document.querySelectorAll('.date-section__input-time');
        
        for (var i = 0, length = elementsDate.length; i < length; i++) {
            (function(element) {
                var name = element.getAttribute('name');
        
                element.value = localStorage.getItem(name) || element.value;
        
                element.onblur = function() {
                localStorage.setItem(name, element.value);
                };
            })(elementsTime[i]);
        };

        // radio button localStorage
        var place = document.getElementsByName('place');

        for (var i = 0; i < place.length; i++) {
            place[i].onclick = function() {
            localStorage.setItem('active', this.value);
            };
        }

        if(localStorage.getItem('active')) {
            var active = localStorage.getItem('active');
            document.querySelector('input[name="place"][value="' + active + '"]').setAttribute('checked','checked');
        }

        //input select localStorage
        var dressCode = document.querySelector('.person-section__code');
        
        dressCode.onchange = function() {
            localStorage.setItem('code', dressCode.value);
        }
        
        if (localStorage.getItem('code')) {
            dressCode.options[localStorage.getItem('code')].selected = true;
        }
        
        //input select2 localStorage
        var detail = document.querySelector('.person-section__detail');
        
        detail.onchange = function() {
            localStorage.setItem('detail', detail.value);
        }
     
        if (localStorage.getItem('detail')) {
            detail.options[localStorage.getItem('detail')].selected = true;
        }

        } else {
            alert('Данные не сохранятся, ваш браузер не поддерживает Localstorage');
        }

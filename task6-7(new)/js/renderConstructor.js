function Renderer() {
}
    
Renderer.prototype.create = function (datesObj, elemObj) {
        this.element = document.createElement(elemObj.tag);
        if (elemObj.classes) {
            for (var i = 0; i < elemObj.classes.length; i++) {
                this.element.classList.add(elemObj.classes[i]);
            }
        }
        if (elemObj.content) {
            this.element.innerHTML = elemObj.content;
        }
        if (elemObj.property) {
        this.element.innerHTML = datesObj[elemObj.property];
        }
        if (elemObj.arrayOfElements) {
            this.element = [];
            for (var i = 0; i < datesObj[elemObj.property].length; i++) {
                this.element.push(document.createElement(elemObj.tag));
                this.element[i].className = elemObj.classes;
                this.element[i].innerHTML = datesObj[elemObj.property][i];
            }
        } 
        if (elemObj.daysShift) {
            for (var j=1; j <= 7; j++) {
                if (datesObj.dayOfWeekOfFirstDay() === j) {
                    this.element[0].style.marginLeft = ((j-1) * 14.2) + "%";
                }
            }
        }

        if (elemObj.event) {
            this.element.addEventListener(elemObj.event[0], elemObj.event[1])
        }
        return this.element;
}
    
Renderer.prototype.render = function (elem, parentElem) {
    if (Array.isArray(elem)) {
        this.currentElem = document.querySelector('.' + parentElem.className);
        for (var i =0; i < elem.length; i++) {
            this.currentElem.appendChild(elem[i]);
        };
    } else if (!(Array.isArray(elem)) && (parentElem !== undefined)) {
        this.currentElem = document.querySelector('.' + parentElem.className);
        this.currentElem.appendChild(elem);
    } else {
    document.body.insertBefore(elem, document.body.children[0]);
    }
}
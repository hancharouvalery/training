(function() {

function AutoProduction(model, releaseYear, maker) {
    this.model = model;
    this.releaseYear = releaseYear;
    this.maker = maker;
    this.move = function() {
        console.log(this.model + " engine start");
    }
};

function TypeSedan(model, releaseYear, maker) {
    AutoProduction.call(this, model, releaseYear, maker);
    this.sedanAdvantages = function() {
        console.log(this.model + " has more attractive form, released by " + this.maker + " in " + this.releaseYear);
    }
};

var bmwSedan = new TypeSedan("BMW G30", "2016", "BMW AG");
bmwSedan.sedanAdvantages();
bmwSedan.move();

function TypeJeep(model, releaseYear, maker) {
    AutoProduction.call(this, model, releaseYear, maker);
    this.jeepAdvantages = function() {
        console.log(this.model + " has perfect drive feelings on bad road, released by " + this.maker + " in " + this.releaseYear)
    }
}

var tahoeJeep = new TypeJeep("Chevrolet Tahoe", "1995", "Chevrolet");
tahoeJeep.jeepAdvantages();
tahoeJeep.move();

function TypeEstate(model, releaseYear, maker) {
    AutoProduction.call(this, model, releaseYear, maker);
    this.estateAdvantages = function() {
        console.log(this.model + " has big luggage, released by " + this.maker + " in " + this.releaseYear)
    }
}

var audiEstate = new TypeEstate("Audi A4", "2008", "Audi AG");
audiEstate.estateAdvantages();
audiEstate.move();

}());






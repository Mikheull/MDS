const getJSON = require('get-json')

class Stations {
    

    constructor() {
        this.stationsList = [];
        this.query;

        // this.init();
    }


    set_query(query) {
        this.query = query;
    }

    get_query() {
        return this.query;
    }

    addValue(value) {
        this.stationsList.push(value);
    }

    init() {
        let arraystationsList = Array()

        getJSON('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=2000', function(error, response){
            // remplir le tableau
            if (response.nhits !== 0) {
                console.log(response.nhits);

                for(var i = 1; i < response.nhits; i++){
                    arraystationsList.push( response.records[i].fields.station_code );
                }

                console.log(arraystationsList);
                this.stationsList = arraystationsList;
                
            }
        })
    }

}

module.exports = Stations;



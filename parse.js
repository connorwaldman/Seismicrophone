var eyes = require('eyes');
var https = require('https');
var fs = require('fs');
var util = require('util');

var data = '';
https.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson', function (res) {
    if (res.statusCode >= 200 && res.statusCode < 400) {
        res.on('data', function (data_) { data += data_.toString(); });
        res.on('end', function () {
            
        var x = "";
        var quake = JSON.parse(data);

        for (i in quake.features) {
            x += quake.features[i];
          
        console.log("magnitude: ", quake.features[i].properties.mag);
        console.log("coordinates: ", quake.features[i].geometry.coordinates);
        console.log("place: ", quake.features[i].properties.place);
        }

        });
    }
});

! function() {
    var Map = require('ti.map');
    var MarkerManager = require('vendor/markermanager');
    var win = Ti.UI.createWindow();
    if (require('lib/gms.test')()) {
        win.add(Map.createView({
            region : {
                latitude : 53.553,
                longitude : 10,
                latitudeDelta : 1,
                longitudeDelta : 1
            }
        }));
        require('lib/car2go').loadFreeVehicles({
            done : function(placemarks) {
                var Car2GoMarker = new MarkerManager({
                    name : 'car2go',
                    points : placemarks.map(function(placemark) {
                        return {
                            lng : placemark.coordinates[0],
                            lat : placemark.coordinates[1],
                            title : placemark.address.split(',')[0],
                            subtitle : placemark.name,
                            name : 'car2go'
                        };
                    }),
                    image : '/images/car2go.png',
                    map : win.children[0]
                });
            }
        });
    }
}();

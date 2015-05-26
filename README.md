Ti.MarkerManager
================

Ti.MarkerManager is a library for Appcelerator Titanium for realizing to display a lot of annotations on map.


~~~
var Manager = new MarkerManager({
    name : 'groupname',
    points : points,   // array of annotation properties
    image : '/images/car2go.png',
    map : mapview // reference to mapview
});

~~~

See at app.js for more details. Currently you can only staticly display annotations. 

![](https://raw.githubusercontent.com/AppWerft/Ti.MarkerManager/master/screens/Screenshot_2015-05-26-15-18-43.png)
![](https://raw.githubusercontent.com/AppWerft/Ti.MarkerManager/master/screens/Screenshot_2015-05-26-15-25-20.png)

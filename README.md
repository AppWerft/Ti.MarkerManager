Ti.MarkerManager
================

Ti.MarkerManager is a library for Appcelerator Titanium for realizing to display a lot of annotations on map.

This is the repo fittng to the [meetup of Hamburg Titanium Group](http://www.meetup.com/de/Hamburg-Titanium/events/223965086/).
~~~
var Layer = new MarkerManager({
    image : '/images/car2go.png',
    maxannotations : 200,
    points : [{lat:53.23,lng:10,title:'Title',subtitle:'SubTitle'},{}],
    map : mapview // reference to mapview
});
Layer.addEventListener('start',function(){
    // do something like showing spinner
});
Layer.addEventListener('complete',function(){
// do something like hiding spinner
});
Layer.destroy();   
~~~

See at app.js for more details. Currently you can only staticly display annotations. 

TODO: dynamic managing of markers (new and obsolete markers, position changing)

![](https://raw.githubusercontent.com/AppWerft/Ti.MarkerManager/master/screens/Screenshot_2015-05-26-15-25-29.png)
![](https://raw.githubusercontent.com/AppWerft/Ti.MarkerManager/master/screens/Screenshot_2015-05-26-15-25-20.png)

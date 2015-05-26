Ti.MarkerManager
================

Ti.MarkerManager is a library for Appcelerator Titanium for realizing to display a lot of annotations on map.
~~~
var Layer = new MarkerManager({
    name : 'groupname',
    points : points,   // array of annotation properties
    image : '/images/car2go.png',
    maxannotations : 200,
    map : mapview // reference to mapview
});
Layer.addEventListener('start',function(){
    // do something like showing spinner
});
Layer.addEventListener('complete',function(){
// do something like hiding spinner
});

// you can remove this layer with:
Layer.destroy();   
~~~

See at app.js for more details. Currently you can only staticly display annotations. 

![](https://raw.githubusercontent.com/AppWerft/Ti.MarkerManager/master/screens/Screenshot_2015-05-26-15-25-29.png)
![](https://raw.githubusercontent.com/AppWerft/Ti.MarkerManager/master/screens/Screenshot_2015-05-26-15-25-20.png)

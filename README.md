Ti.MarkerManager
================

Ti.MarkerManager is a library for Appcelerator Titanium for realizing to display a lot of annotations on map.
~~~
var Manager = new MarkerManager({
    name : 'groupname',
    points : points,   // array of annotation properties
    image : '/images/car2go.png',
    maxannotations : 200,
    map : mapview // reference to mapview
});
Manager.addEventListener('start',function(){
    // do something like showing spinner
});
Manager.addEventListener('complete',function(){
// do something like hiding spinner
});

// you can remove this layer with:
Manager.destroy();   
~~~

See at app.js for more details. Currently you can only staticly display annotations. 

![](https://raw.githubusercontent.com/AppWerft/Ti.MarkerManager/master/screens/Screenshot_2015-05-26-15-25-29.png)
![](https://raw.githubusercontent.com/AppWerft/Ti.MarkerManager/master/screens/Screenshot_2015-05-26-15-25-20.png)

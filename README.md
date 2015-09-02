Ti.MarkerManager
================

![](https://github.com/AppWerft/Ti.MarkerManager/raw/master/markermanager.gif)


![](http://photos4.meetupstatic.com/photos/event/4/2/e/2/global_88937122.jpeg) Ti.MarkerManager is a library for Appcelerator Titanium for realizing to display a lot of annotations on map.

This repo supports the [meetup of Hamburg Titanium Group](http://www.meetup.com/de/Hamburg-Titanium/events/223965086/).

Usage:
======


First you add de.appwerft.markermanager in your tiapp.xml.

Now you open a terminal window in your project and
~~~
gittio install -g 
~~~


It will install all missing modules and widgets required by your tiapp.xml and app/config.json files. In our case it will install de.appwerft.markermanager

If gittio is missing in your system:

~~~
sudo npm install -g gittio
~~~

If npm is missing you download it from [here](http://coolestguidesontheplanet.com/installing-node-js-osx-10-9-mavericks/).


Now you can use it:
~~~
var MarkerMananger = require('de.appwerft.markermanager');

var Overlay = new MarkerManager({
    image : '/images/car2go.png',
    maxannotations : 200,
    points : [{lat:53.23,lng:10,title:'Title',subtitle:'SubTitle'},{}],
    map : mapview // reference to mapview
});
Overlay.addEventListener('start',function(){
    // do something like showing spinner
});
Overlay.addEventListener('complete',function(){
// do something like hiding spinner
});
Overlay.destroy();   
~~~

See at app.js for more details. Currently you can only staticly display annotations. 

TODO: dynamic managing of markers (new and obsolete markers, position changing)

![](https://raw.githubusercontent.com/AppWerft/Ti.MarkerManager/master/screens/Screenshot_2015-05-26-15-25-29.png)
![](https://raw.githubusercontent.com/AppWerft/Ti.MarkerManager/master/screens/Screenshot_2015-05-26-15-25-20.png)

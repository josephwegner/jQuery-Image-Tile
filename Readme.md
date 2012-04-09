jQuery Image Tiles
==================

A jQuery plugin for adding a tile animation to any image.

Use
---
It's very easy to run this plugin with the basic features.  All you need is an image and jQuery loaded.  So your HTML might look like this:

```
<html>
<head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.imageTile.js"></script>
    <script type="text/javascript">
         $(window).load(function() {
             $("#image").imageTile();
         });
    </script>
</head>
<body>
    <img src="image.jpg" id="image" />
</body>
</html>
```

Options
-------

We also offer some options that you can override to better fit your needs:

- **rows** ~ _Integer_ The number of rows in the grid. _Defaults to 10_
- **columns** ~ _Integer_ The number of columns in the grid. _Defaults to 10_
- **animateTime** ~ _Integer_ or _String_ The time for the fade effect to finish on each tile.  This accepts a millisecond value, or a jQuery timing string such as "slow". _Defaults to 800_
- **newTilesTime** ~ _Integer_ How often new tiles will be chosen to fade, in milliseconds.  _Defaults to 400_
- **tilesAtATime** ~ _Integer_ The number of tiles to fade at the same time. _Defaults to 5_
- **backgroundColor** ~ _String_ The color of the tiles.  Accepts any valid CSS value, such as "white" or "#C1C1C1". _Defaults to "white"_
- **className** ~ _String_ The class name to give the <div> that will be created over the image. _Defaults to jquery\_title\_div_
- **maxOpacity** ~ _Integer_ The maximum opacity to apply to any tile. _Defaults to 1 (100% Opacity)_  
                
You apply those options using a standard options object, like so:

```
$("#image").imageTile({
	maxOpacity: .7,
	rows: 8,
	columns: 15
});
```

Contributors
------------

- [Joe Wegner](https://www.twitter.com/Joe_Wegner)

License
-------

This plugins is licensed under the [Apache License](http://www.apache.org/licenses/LICENSE-2.0.html).

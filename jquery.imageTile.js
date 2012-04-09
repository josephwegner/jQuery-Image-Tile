(function($) {

	$.fn.imageTile = function(options) {
		var options = $.extend({
			rows: 10,
			columns: 10,
			animationTime: 800,
			newTilesTime: 400,
			tilesAtATime: 5,
			backgroundColor: "white",
			className: "jquery_tile_div",
			maxOpacity: 1
		}, options)

		if(options.maxOpacity > 1) {
			options.maxOpacity = option.maxOpacity / 100;
		}

		var tileWidth = Math.ceil(this.width() / options.columns);
		var tileHeight = Math.ceil(this.height() / options.rows);
		var tileCSS = {
			"background-color" : options.backgroundColor,
			"height": tileHeight,
			"width": tileWidth,
			"float": "left",
			"-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
			"filter": "alpha(opacity=0)",
			"-mox-opacity": "0",
			"opacity": "0"
		};

		var zIndex = this.css('z-index') + 1;
	
		var divCSS = {
			"position" : "absolute",
			"left" : this.offset().left,
			"top" : this.offset().top,
			"z-index" : zIndex,
			"overflow" : "hidden",
			"height": this.height(),
			"width": this.width()
		}

		var overDiv = $("<div>").addClass(options.className).css(divCSS);
		var allTiles = [];

		for(var i=0; i<options.rows; i++) {
			var curRow = [];
			for(var j=0; j<options.columns; j++) {
				var tile = $("<div>").addClass("tile_" + j + "_" + i).css(tileCSS);

				$(overDiv).append(tile);
				curRow.push(tile);
			}

			allTiles.push(curRow);
		}

		$("body").append(overDiv);

		setInterval(function() { beginFading(options.animationTime, options.columns, options.rows, options.tilesAtATime, options.maxOpacity, allTiles);  }, options.newTilesTime);

		return this;
	};

	var beginFading = function(fadeTime, cols, rows, numTiles, maxOpacity, tiles) {
		var fadeTiles = [];

		while(fadeTiles.length < numTiles) {
			var col = Math.floor(Math.random() * cols);
			var row = Math.floor(Math.random() * rows);

			if($.inArray(tiles[row][col], fadeTiles) === -1) {
				fadeTiles.push(tiles[row][col]);
			}
		}
		for(var i=0; i<numTiles; i++) {
			var tile = fadeTiles[i];
		
			var fade = Math.random() * maxOpacity;
	
			$(tile).stop(true).fadeTo(fadeTime, fade);
		}
	};

})(jQuery);

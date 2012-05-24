Ext.ns('Ext.ux.color.model.RGB');

Ext.ux.color.model.RGB = function(config) {

	var red;

	var green;

	var blue;

	var MIN_VALUE = 0;

	var MAX_VALUE = 255;
	
	function prepareValue(value) {
		
	}

	Ext.apply(this, {

		getRed: function() {
			return red;
		},

		getGreen: function() {
			return green;
		},

		getBlue: function() {
			return blue;
		},

		setRed: function(value) {
			red = value;
		},

		setGreen: function(value) {
			green = value;
		},

		setBlue: function(value) {
			blue = value;
		}

	});

};
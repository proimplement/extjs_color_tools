Ext.define('Ext.ux.color.model.RGB', {

	extend: 'Ext.ux.color.ColorModel',

	maxValue: 255,

	formatString: 'rgb({0},{1},{2})',

	constructor: function(red, green, blue) {
		this.red = this.validate(red);
		this.green = this.validate(green);
		this.blue = this.validate(blue);
	},

	getRed: function() {
		return this.red;
	},

	setRed: function(value) {
		this.red = this.validate(value);
	},

	getGreen: function() {
		return this.green;
	},

	set: function(red, green, blue) {
		this.red = this.validate(red);
		this.green = this.validate(green);
		this.blue = this.validate(blue);
	},

	setGreen: function(value) {
		this.green = this.validate(value);
	},

	getBlue: function() {
		return this.blue;
	},

	setBlue: function(value) {
		this.blue = this.validate(value);
	},

	toArray: function() {
		return [this.red, this.green, this.blue];
	},

	toObject: function() {
		return {
			r: this.red,
			g: this.green,
			b: this.blue
		};
	},

	toString: function() {
		return Ext.String.format(this.formatString, this.red, this.green, this.blue);
	}

});
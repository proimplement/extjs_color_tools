Ext.define('Ext.ux.color.model.RGB', {

	extend: 'Ext.ux.color.ColorModel',

	formatString: 'C{0}M{1}Y{2}K{3}',

	constructor: function(cyan, magenta, yellow, key) {
		this.cyan = this.validate(cyan);
		this.magenta = this.validate(magenta);
		this.yellow = this.validate(yellow);
		this.key = this.validate(key);
	},

	getCyan: function() {
		return this.cyan;
	},

	getMagenta: function() {
		return this.magenta;
	},

	getYellow: function() {
		return this.yellow;
	},

	getKey: function() {
		return this.key;
	},

	setCyan: function(value) {
		this.cyan = this.validate(value);
	},

	setMagenta: function(value) {
		this.magenta = this.validate(value);
	},

	setYellow: function(value) {
		this.yellow = this.validate(value);
	},

	setKey: function(value) {
		this.key = this.validate(value);
	},

	toArray: function() {
		return [this.cyan, this.magenta, this.yellow, this.key];
	},

	toObject: function() {
		return {
			c: this.cyan,
			m: this.magenta,
			y: this.yellow,
			k: this.key
		};
	},

	toString: function() {
		return Ext.String.format(this.formatString, this.cyan, this.magenta, this.yellow, this.key);
	}

});
Ext.define('Ext.ux.color.model.RGBA', {

	extend: 'Ext.ux.color.model.RGB',

	maxAlphaValue: 100,

	formatString: 'rgba({0},{1},{2},{3})',

	constructor: function(red, green, blue, alpha) {
		this.callParent(arguments);
		this.alpha = this.validateAlpha(alpha);
	},

	getAlpha: function() {
		return this.alpha;
	},

	setAlpha: function(value) {
		this.alpha = this.validateAlpha(value);
	},

	set: function(red, green, blue, alpha) {
		this.superclass.set.call(this, red, green, blue);
		this.alpha = this.validateAlpha(alpha);
	},

	toArray: function() {
		return [this.red, this.green, this.blue, this.alpha];
	},

	toObject: function() {
		return {
			r: this.red,
			g: this.green,
			b: this.blue,
			a: this.alpha
		};
	},

	toString: function() {
		return Ext.String.format(this.formatString, this.red, this.green, this.blue, this.alpha);
	},

	validateAlpha: function(value) {
		return this.superclass.validate.call(this, value, null, null, this.maxAlphaValue);
	}

});
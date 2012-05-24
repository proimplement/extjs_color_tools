Ext.define('Ext.ux.color.ColorModel', {

	defaultValue: 0,

	minValue: 0,

	maxValue: 100,

	validate: function(value, defaultValue, minValue, maxValue) {
		var Number = Ext.Number;

		defaultValue = defaultValue || this.defaultValue;
		minValue = minValue || this.minValue;
		maxValue = maxValue || this.maxValue;

		value = Number.from(value, defaultValue);
		value = Number.constrain(value, minValue, maxValue);

		return value;
	}

});
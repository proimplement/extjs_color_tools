Ext.ns('Ext.ux.color.model.RGB');

/**
 * Ext.ux.color.model.RGB 
 */
Ext.ux.color.model.RGB = function(config) {

	/*
	 * Shortcuts 
	 */
	var String = Ext.String,
		Number = Ext.Number,
		isArray = Ext.isArray,
		isObject = Ext.isObject,
		isString = Ext.isString;

	/**
	 * Red component, in the range 0..255.
	 * @private
	 */
	var red;

	/**
	 * Green component, in the range 0..255.
	 * @private
	 */
	var green;

	/**
	 * Blue component, in the range 0..255.
	 * @private
	 */
	var blue;

	/**
	 * The default value of the RGB component.
	 * @private
	 */
	var DEFAULT_VALUE = 0;

	/**
	 * Minimum value of the RGB component.
	 * @private
	 */
	var MIN_VALUE = 0;

	/**
	 * Maximum value of the RGB component.
	 * @private
	 */
	var MAX_VALUE = 255;

	/**
	 * TODO
	 * @private
	 */
	//var STRING_TO_RGB_RE = //;

	/**
	 * @private
	 */
	var FORMAT_STRING = 'rgb({0},{1},{2})';

	/**
	 * Set the color components from the values in the specified array.
	 * @param {Number[]/String[]} arr
	 * @private
	 */
	function fromArray(arr) {
		fromValues(arr[0], arr[1], arr[2]);
	};

	/**
	 * Set the color components from the values in the specified object.
	 * 
	 * Supported format:
	 * {
	 *    r: 30,
	 *    g: 45,
	 *    b: 80
	 * }
	 * 
	 * @param {Object} obj
	 * @private
	 */
	function fromObject(obj) {
		fromValues(obj.r, obj.g, obj.b);
	};

	/**
	 * Parse the string and set the color components.
	 * 
	 * Supported format: 
	 * 
	 * @param {String} str
	 * @private
	 */	
	function fromString(str) {
		//TODO
	};

	/**
	 * Set the color components from the specified RGB values.
	 * @param {Number/String} r Red component
	 * @param {Number/String} g Green component
	 * @param {Number/String} b Blue component
	 */
	function fromValues(r, g, b) {
		red = prepareValue(r);
		green = prepareValue(g);
		blue = prepareValue(b);
	};

	/**
	 * Helper function to prepare value.
	 * @param {Number/String} value
	 * @return {Number}
	 * @private
	 */
	function prepareValue(value) {
		value = Number.from(value, DEFAULT_VALUE);
		value = Number.constrain(value, MIN_VALUE, MAX_VALUE);
		return value;
	};

	/**
	 * Helper function to initialize color components.
	 * @private
	 */
	function init(config) {
		// from Array
		if (isArray(config)) {
			fromArray(config);
			return;
		}
		// from Object
		if (isObject(config)) {
			fromObject(config);
			return;
		}
		// from String
		if (isString(config)) {
			fromString(config);
			return;
		}
		// set default values
		fromValues();
	};

	// initialize
	if (arguments.length === 3) {
		fromValues(arguments[0], arguments[1], arguments[2]);
	} else {
		init(config);
	}

	// add public methods
	Ext.apply(this, {

		/**
		 * Returns the red component of the color, in the range 0..255.
		 * @return {Number}
		 */
		getRed: function() {
			return red;
		},

		/**
		 * Returns the green component of the color, in the range 0..255.
		 * @return {Number}
		 */
		getGreen: function() {
			return green;
		},

		/**
		 * Returns the blue component of the color, in the range 0..255.
		 * @return {Number}
		 */
		getBlue: function() {
			return blue;
		},

		/**
		 * Set the red component of the color, in the range 0..255.
		 * @param {Number/String} value
		 */
		setRed: function(value) {
			red = prepareValue(value);
		},

		/**
		 * Set the green component of the color, in the range 0..255.
		 * @param {Number/String} value
		 */
		setGreen: function(value) {
			green = prepareValue(value);
		},

		/**
		 * Set the blue component of the color, in the range 0..255.
		 * @param {Number/String} value
		 */
		setBlue: function(value) {
			blue = prepareValue(value);
		},

		/**
		 * @return {Number[]}
		 */
		toArray: function() {
			return [red, green, blue];
		},

		/**
		 * @return {Object}
		 */
		toObject: function() {
			return {
				r: red,
				g: green,
				b: blue
			};
		},

		/**
		 * @return {String}
		 */
		toString: function() {
			return String.format(FORMAT_STRING, red, green, blue);
		},

		/**
		 * @return {String}
		 */
		toHEX: function() {
			//TODO
		}

	});

};
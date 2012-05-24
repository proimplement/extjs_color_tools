Ext.ns('Ext.ux.color.model');

/**
 * Ext.ux.color.model.CMYK
 */
Ext.ux.color.model.CMYK = function(config) {

	/*
	 * Shortcuts
	 */
	var String = Ext.String,
		Number = Ext.Number,
		isArray = Ext.isArray,
		isObject = Ext.isObject,
		isString = Ext.isString;

	/**
	 * Cyan component, in the range 0..100.
	 * @private
	 */
	var cyan;

	/**
	 * Magenta component, in the range 0..100.
	 * @private
	 */
	var magenta;

	/**
	 * Yellow component, in the range 0..100.
	 * @private
	 */
	var yellow;

	/**
	 * Key component, in the range 0..100.
	 * @private
	 */
	var key;

	/**
	 * The default value of the CMYK component.
	 * @private
	 */
	var DEFAULT_VALUE = 0;

	/**
	 * Minimum value of the CMYK component.
	 * @private
	 */
	var MIN_VALUE = 0;

	/**
	 * Maximum value of the CMYK component.
	 * @private
	 */
	var MAX_VALUE = 100;

	/**
	 * @private
	 */
	var STRING_TO_CMYK_RE = /[Cc](\d+)[Mm](\d+)[Yy](\d+)[Kk](\d+)/;

	/**
	 * @private
	 */
	var FORMAT_STRING = 'C{0}M{1}Y{2}K{3}';

	/**
	 * Set the color components from the values in the specified array.
	 * @param {Number[]/String[]} arr
	 * @private
	 */
	function fromArray(arr) {
		fromValues(arr[0], arr[1], arr[2], arr[3]);
	};

	/**
	 * Set the color components from the values in the specified object.
	 * 
	 * Supported format:
	 * {
	 *    c: 30,
	 *    m: 45,
	 *    y: 80,
	 *    k: 5
	 * }
	 * 
	 * @param {Object} obj
	 * @private
	 */
	function fromObject(obj) {
		fromValues(obj.c, obj.m, obj.y, obj.k);
	};

	/**
	 * Parse the string and set the color components.
	 * 
	 * Supported format: 'C30M45Y80K5' (case-insensitive)
	 * 
	 * @param {String} str
	 * @private
	 */	
	function fromString(str) {
		var digits = STRING_TO_CMYK_RE.exec(str);
		fromValues(digits[1], digits[2], digits[3], digits[4]);
	};

	/**
	 * Set the color components from the values.
	 * @param {Number/String} c Cyan component
	 * @param {Number/String} m Magenta component
	 * @param {Number/String} y Yellow component
	 * @param {Number/String} k Key component
	 */
	function fromValues(c, m, y, k) {
		cyan = prepareValue(c);
		magenta = prepareValue(m);
		yellow = prepareValue(y);
		key = prepareValue(k);
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
	if (arguments.length === 4) {
		fromValues(arguments[0], arguments[1], arguments[2], arguments[3]);
	} else {
		init(config);
	}

	// add public methods
	Ext.apply(this, {

		/**
		 * Returns the cyan component of the color, in the range 0..100.
		 * @return {Number}
		 */
		getCyan: function() {
			return cyan;
		},

		/**
		 * Returns the magenta component of the color, in the range 0..100.
		 * @return {Number}
		 */
		getMagenta: function() {
			return magenta;
		},

		/**
		 * Returns the yellow component of the color, in the range 0..100.
		 * @return {Number}
		 */
		getYellow: function() {
			return yellow;
		},

		/**
		 * Returns the key component of the color, in the range 0..100.
		 * @return {Number}
		 */
		getKey: function() {
			return key;
		},

		/**
		 * Set the components of the color from object.
		 * @param {Number[]/String[]/Object/String} value
		 */
		set: function(value) {
			if (arguments.length === 4) {
				fromValues(arguments[0], arguments[1], arguments[2], arguments[3]);
			} else {
				init(value);
			}
		},

		/**
		 * Set the cyan component of the color, in the range 0..100.
		 * @param {Number/String} value
		 */
		setCyan: function(value) {
			cyan = prepareValue(value);
		},

		/**
		 * Set the magenta component of the color, in the range 0..100.
		 * @param {Number/String} value
		 */
		setMagenta: function(value) {
			magenta = prepareValue(value);
		},

		/**
		 * Set the yellow component of the color, in the range 0..100.
		 * @param {Number/String} value
		 */
		setYellow: function(value) {
			yellow = prepareValue(value);
		},

		/**
		 * Set the key component of the color, in the range 0..100.
		 * @param {Number/String} value
		 */
		setKey: function(value) {
			key = prepareValue(value);
		},

		/**
		 * @return {Number[]}
		 */
		toArray: function() {
			return [cyan, magenta, yellow, key];
		},

		/**
		 * @return {Object}
		 */
		toObject: function() {
			return {
				c: cyan,
				m: magenta,
				y: yellow,
				k: key
			};
		},

		/**
		 * @return {String}
		 */
		toString: function() {
			return String.format(FORMAT_STRING, cyan, magenta, yellow, key);
		}

	});

};
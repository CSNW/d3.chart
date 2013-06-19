(function(global) {

var toString = Object.prototype.toString;
var isArray = function(obj) {
	return toString.call(obj) === '[object Array]';
};

var assert = global.assert = function(val) {
	if (!val) {
		throw new Error("Expected '" + val + "' to be truthy");
	}
};
assert.ok = assert;
assert.equal =  function(a, b) {
	if (a !== b) {
		throw new Error("Expected '" + a + "' to equal '" + b + "'");
	}
};

// TODO: Implement :(
assert.deepEqual = function(a, b) {
	if (!_.isEqual(a, b)) {
		throw new Error("Expected '" + obj + "' to deeply equal '" + obj +
			"'");
	}
};

assert.typeOf = function(obj, type) {
	if (typeof obj !== type) {
		throw new Error("Expected '" + obj + "' to be of type '" + type + "'");
	}
};
assert.instanceOf = function(inst, Ctor) {
	if (!(inst instanceof Ctor)) {
		throw new Error();
	}
};
assert.isUndefined = function(val) {
	if (val !== undefined) {
		throw new Error("Expected '" + val + "' to be undefined");
	}
}
assert.notEqual = function(a, b) {
	if (a === b) {
		throw new Error("Expected '" + a + "' to not equal '" + b + "'");
	}
};
assert.doesNotThrow = function(fn) {
	try {
		fn();
	} catch(err) {
		throw new Error("Expected function not to throw");
	}
};
assert.throws = function(fn) {
	var threw;
	try {
		fn();
	} catch(err) {
		threw = true;
	}
	if (!threw) {
		throw new Error("Expected function to throw");
	}
};
assert.sameMembers = function(a, b) {
	var errorStr = "Expected '" + a.toString() +
		"' to have the same members as '" + b.toString() + "'";
	a.forEach(function(elem) {
		if (elem != undefined && !~b.indexOf(elem)) {
			throw new Error(errorStr);
		}
	});
	b.forEach(function(elem) {
		if (elem != undefined && !~a.indexOf(elem)) {
			throw new Error(errorStr)
		}
	});
};
}(this));

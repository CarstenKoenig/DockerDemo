
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo = function (a) {
	return {ctor: 'Logo', _0: a};
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon = function (a) {
	return {ctor: 'Icon', _0: a};
};

var _HolyMeekrob$elm_font_awesome_5$FontAwesome_Utils$onlyOne = F3(
	function (f, curr, _p0) {
		var _p1 = _p0;
		var _p4 = _p1._1;
		var _p3 = _p1._0;
		var _p2 = {
			ctor: '_Tuple2',
			_0: f(curr),
			_1: _p3
		};
		if (_p2._0 === true) {
			if (_p2._1 === false) {
				return {
					ctor: '_Tuple2',
					_0: true,
					_1: {ctor: '::', _0: curr, _1: _p4}
				};
			} else {
				return {ctor: '_Tuple2', _0: _p3, _1: _p4};
			}
		} else {
			return {
				ctor: '_Tuple2',
				_0: _p3,
				_1: {ctor: '::', _0: curr, _1: _p4}
			};
		}
	});
var _HolyMeekrob$elm_font_awesome_5$FontAwesome_Utils$dedup = F2(
	function (f, list) {
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldr,
				_HolyMeekrob$elm_font_awesome_5$FontAwesome_Utils$onlyOne(f),
				{
					ctor: '_Tuple2',
					_0: false,
					_1: {ctor: '[]'}
				},
				list));
	});

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _HolyMeekrob$elm_font_awesome_5$FontAwesome$youTubeSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('youtube-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$youTube = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('youtube');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$yoast = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('yoast');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$yenSign = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('yen-sign');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$yelp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('yelp');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$yCombinator = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('y-combinator');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$yandexInternational = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('yandex-international');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$yandex = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('yandex');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$yahoo = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('yahoo');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$xingSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('xing-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$xing = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('xing');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$xbox = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('xbox');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$xray = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('x-ray');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$wrench = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('wrench');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$wpForms = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('wpforms');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$wpExplorer = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('wpexplorer');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$wpBeginner = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('wpbeginner');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$wordPressSimple = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('wordpress-simple');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$wordPress = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('wordpress');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$wonSign = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('won-sign');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$wolfPackBattalion = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('wolf-pack-battalion');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$wix = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('wix');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$wineGlassAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('wine-glass-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$wineGlass = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('wine-glass');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$windows = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('windows');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$windowRestore = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('window-restore');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$windowMinimize = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('window-minimize');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$windowMaximize = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('window-maximize');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$windowClose = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('window-close');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$windowAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('window-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$window = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('window');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$wikipedia = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('wikipedia-w');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$wifi = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('wifi');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$whmcs = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('whmcs');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$whistle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('whistle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$wheelchair = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('wheelchair');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$whatsAppSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('whatsapp-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$whatsApp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('whatsapp');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$weixin = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('weixin');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$weightHanging = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('weight-hanging');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$weight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('weight');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$weibo = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('weibo');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$weebly = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('weebly');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$watch = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('watch');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$warehouseAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('warehouse-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$warehouse = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('warehouse');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$wallet = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('wallet');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$walking = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('walking');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$vuejs = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('vuejs');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$volumeUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('volume-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$volumeOff = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('volume-off');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$volumeMute = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('volume-mute');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$volumeDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('volume-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$volleyball = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('volleyball-ball');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$vnv = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('vnv');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$vk = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('vk');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$vine = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('vine');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$vimeoV = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('vimeo-v');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$vimeoSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('vimeo-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$vimeo = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('vimeo');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$videoSlash = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('video-slash');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$videoPlus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('video-plus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$video = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('video');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$viber = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('viber');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$vials = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('vials');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$vial = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('vial');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$viadeoSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('viadeo-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$viadeo = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('viadeo');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$viacoin = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('viacoin');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$venusMars = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('venus-mars');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$venusDouble = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('venus-double');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$venus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('venus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$vectorSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('vector-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$vaadin = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('vaadin');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$utensilsAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('utensils-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$utensils = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('utensils');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$utensilSpoon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('utensil-spoon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$utensilKnife = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('utensil-knife');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$utensilFork = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('utensil-fork');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$usersCog = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('users-cog');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$users = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('users');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userTimes = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-times');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userTie = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-tie');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userTag = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-tag');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userSlash = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-slash');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userShield = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-shield');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userSecret = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-secret');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userPlus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-plus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userNinja = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-ninja');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userMinus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-minus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userMD = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-md');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userLock = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-lock');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userGraduate = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-graduate');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userFriends = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-friends');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userEdit = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-edit');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userCog = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-cog');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userClock = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-clock');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userCheck = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-check');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userAstronaut = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-astronaut');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userAltSlash = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-alt-slash');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$userAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$user = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('user');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$usdSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('usd-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$usdCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('usd-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$usb = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('usb');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$usSunnah = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('ussunnah');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$upload = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('upload');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$untappd = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('untappd');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$unlockAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('unlock-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$unlock = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('unlock');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$unlink = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('unlink');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$university = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('university');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$universalAccess = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('universal-access');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$uniregistry = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('uniregistry');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$undoAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('undo-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$undo = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('undo');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$underline = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('underline');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$umbrellaBeach = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('umbrella-beach');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$umbrella = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('umbrella');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$uiKit = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('uikit');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$uber = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('uber');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$typo3 = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('typo3');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$twitterSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('twitter-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$twitter = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('twitter');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$twitch = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('twitch');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tvRetro = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tv-retro');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tv = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tv');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tumblrSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('tumblr-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tumblr = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('tumblr');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tty = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tty');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tshirt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tshirt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$truckRamp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('truck-ramp');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$truckMoving = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('truck-moving');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$truckLoading = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('truck-loading');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$truckCouch = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('truck-couch');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$truckContainer = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('truck-container');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$truck = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('truck');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$trophyAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('trophy-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$trophy = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('trophy');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tripAdvisor = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('tripadvisor');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$triangle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('triangle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$trello = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('trello');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$treeAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tree-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tree = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tree');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$trashAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('trash-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$trash = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('trash');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$transgenderAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('transgender-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$transgender = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('transgender');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$train = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('train');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$trademark = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('trademark');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tradeFederation = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('trade-federation');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tooth = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tooth');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$toolbox = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('toolbox');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$toggleOn = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('toggle-on');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$toggleOff = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('toggle-off');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tired = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tired');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tintSlash = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tint-slash');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tint = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tint');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$timesSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('times-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$timesOctagon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('times-octagon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$timesHexagon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('times-hexagon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$timesCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('times-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$times = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('times');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ticketAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ticket-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ticket = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ticket');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$thumbtack = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('thumbtack');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$thumbsUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('thumbs-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$thumbsDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('thumbs-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$thermometerThreeQuarters = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('thermometer-three-quarters');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$thermometerQuarter = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('thermometer-quarter');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$thermometerHalf = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('thermometer-half');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$thermometerFull = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('thermometer-full');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$thermometerEmpty = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('thermometer-empty');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$thermometer = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('thermometer');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$themeco = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('themeco');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$themeIsle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('themeisle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$thList = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('th-list');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$thLarge = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('th-large');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$th = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('th');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$textWidth = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('text-width');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$textHeight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('text-height');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$terminal = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('terminal');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tennisBall = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tennis-ball');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tencentWeibo = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('tencent-weibo');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$telegramPlane = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('telegram-plane');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$telegram = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('telegram');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$teamSpeak = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('teamspeak');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$taxi = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('taxi');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tasks = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tasks');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tape = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tape');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tags = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tags');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tag = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tag');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tachometerAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tachometer-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tachometer = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tachometer');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tablets = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tablets');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tabletRugged = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tablet-rugged');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tabletAndroidAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tablet-android-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tabletAndroid = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tablet-android');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tabletAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tablet-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tablet = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('tablet');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$tableTennis = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('table-tennis');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$table = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('table');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$syringe = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('syringe');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$syncAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sync-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sync = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sync');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$swimmingPool = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('swimming-pool');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$swimmer = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('swimmer');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$swatchbook = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('swatchbook');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$surprise = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('surprise');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$supple = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('supple');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$superscript = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('superscript');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$superpowers = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('superpowers');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sun = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sun');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$suitcaseRolling = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('suitcase-rolling');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$suitcase = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('suitcase');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$subway = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('subway');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$subscript = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('subscript');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stumbleUponCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('stumbleupon-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stumbleUpon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('stumbleupon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$studioVinari = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('studiovinari');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stroopwafel = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('stroopwafel');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stripeS = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('stripe-s');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stripe = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('stripe');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$strikethrough = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('strikethrough');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$streetView = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('street-view');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stream = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('stream');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$strava = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('strava');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$storeAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('store-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$store = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('store');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stopwatch = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('stopwatch');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stopCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('stop-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stop = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('stop');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stickyNote = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sticky-note');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stickerMule = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('sticker-mule');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stethoscope = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('stethoscope');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stepForward = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('step-forward');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stepBackward = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('step-backward');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$steamSymbol = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('steam-symbol');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$steamSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('steam-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$steam = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('steam');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stayLinked = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('staylinked');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$starHalfAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('star-half-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$starHalf = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('star-half');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$starExclamation = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('star-exclamation');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$star = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('star');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stamp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('stamp');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stackOverflow = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('stack-overflow');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$stackExchange = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('stack-exchange');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$squarespace = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('squarespace');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$squareFull = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('square-full');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$square = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sprayCan = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('spray-can');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$spotify = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('spotify');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$splotch = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('splotch');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$spinnerThird = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('spinner-third');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$spinner = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('spinner');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$speakap = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('speakap');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$spade = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('spade');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$spaceShuttle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('space-shuttle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$spa = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('spa');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$soundCloud = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('soundcloud');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sortUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sort-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sortNumericUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sort-numeric-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sortNumericDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sort-numeric-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sortDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sort-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sortAmountUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sort-amount-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sortAmountDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sort-amount-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sortAlphaUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sort-alpha-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sortAlphaDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sort-alpha-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sort = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sort');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$solarPanel = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('solar-panel');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$snowflake = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('snowflake');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$snapchatSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('snapchat-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$snapchatGhost = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('snapchat-ghost');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$snapchat = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('snapchat');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$smokingBan = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('smoking-ban');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$smoking = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('smoking');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$smileWink = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('smile-wink');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$smilePlus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('smile-plus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$smileBeam = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('smile-beam');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$smile = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('smile');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$slideshare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('slideshare');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$slidersVerticalSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sliders-v-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$slidersVertical = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sliders-v');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$slidersHorizontalSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sliders-h-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$slidersHorizontal = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sliders-h');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$slackHash = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('slack-hash');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$slack = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('slack');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$skype = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('skype');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$skyAtlas = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('skyatlas');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$skull = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('skull');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sith = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('sith');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sitemap = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sitemap');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sistrix = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('sistrix');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$simplyBuilt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('simplybuilt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$signature = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('signature');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$signal = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('signal');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$signOutAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sign-out-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$signOut = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sign-out');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$signLanguage = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sign-language');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$signInAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sign-in-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$signIn = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sign-in');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sign = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sign');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shuttlecock = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('shuttlecock');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shuttleVan = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('shuttle-van');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shower = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('shower');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shopware = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('shopware');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shoppingCart = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('shopping-cart');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shoppingBasket = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('shopping-basket');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shoppingBag = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('shopping-bag');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shoePrints = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('shoe-prints');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shirtsInBulk = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('shirtsinbulk');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shippingTimed = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('shipping-timed');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shippingFast = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('shipping-fast');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ship = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ship');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shieldCheck = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('shield-check');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shieldAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('shield-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shield = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('shield');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shekelSign = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('shekel-sign');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shareSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('share-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shareAltSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('share-alt-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shareAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('share-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$shareAll = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('share-all');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$share = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('share');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$serviceStack = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('servicestack');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$server = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('server');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sellsy = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('sellsy');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sellCast = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('sellcast');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$seedling = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('seedling');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$searchengin = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('searchengin');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$searchPlus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('search-plus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$searchMinus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('search-minus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$search = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('search');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$scrubber = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('scrubber');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$scribd = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('scribd');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$screwdriver = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('screwdriver');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$school = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('school');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$schlix = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('schlix');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$scannerTouchscreen = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('scanner-touchscreen');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$scannerKeyboard = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('scanner-keyboard');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$scanner = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('scanner');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$save = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('save');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sass = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('sass');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$safari = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('safari');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sadTear = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sad-tear');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sadCry = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('sad-cry');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rupeeSign = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('rupee-sign');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rulerVertical = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ruler-vertical');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rulerHorizontal = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ruler-horizontal');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rulerCombined = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ruler-combined');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ruler = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ruler');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rubleSign = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ruble-sign');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rssSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('rss-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rss = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('rss');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$route = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('route');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rocketChat = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('rocketchat');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rocket = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('rocket');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rockRMS = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('rockrms');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$robot = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('robot');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$road = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('road');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ribbon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ribbon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rev = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('rev');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$retweetAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('retweet-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$retweet = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('retweet');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$resolving = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('resolving');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$researchGate = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('researchgate');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$replyd = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('replyd');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$replyAll = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('reply-all');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$reply = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('reply');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$repeat1Alt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('repeat-1-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$repeat1 = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('repeat-1');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$repeatAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('repeat-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$repeat = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('repeat');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$renren = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('renren');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rendact = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('rendact');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$registered = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('registered');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$redoAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('redo-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$redo = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('redo');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$redditSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('reddit-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$redditAlien = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('reddit-alien');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$reddit = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('reddit');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$redRiver = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('red-river');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$recycle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('recycle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rectangleWide = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('rectangle-wide');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rectanglePortrait = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('rectangle-portrait');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rectangleLandscape = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('rectangle-landscape');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$receipt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('receipt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rebel = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('rebel');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$readme = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('readme');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$react = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('react');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ravelry = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('ravelry');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$random = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('random');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rampLoading = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ramp-loading');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$racquet = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('racquet');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$rProject = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('r-project');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$quoteRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('quote-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$quoteLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('quote-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$quora = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('quora');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$quinScape = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('quinscape');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$quidditch = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('quidditch');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$questionSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('question-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$questionCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('question-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$question = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('question');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$qrCode = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('qrcode');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$qq = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('qq');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$python = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('python');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$puzzlePiece = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('puzzle-piece');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$pushed = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('pushed');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$projectDiagram = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('project-diagram');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$productHunt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('product-hunt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$procedures = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('procedures');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$print = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('print');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$prescriptionBottleAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('prescription-bottle-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$prescriptionBottle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('prescription-bottle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$prescription = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('prescription');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$powerOff = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('power-off');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$poundSign = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('pound-sign');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$portrait = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('portrait');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$poo = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('poo');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$podcast = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('podcast');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$plusSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('plus-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$plusOctagon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('plus-octagon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$plusHexagon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('plus-hexagon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$plusCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('plus-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$plus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('plus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$plug = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('plug');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$playstation = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('playstation');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$playCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('play-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$play = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('play');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$planeDeparture = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('plane-departure');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$planeArrival = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('plane-arrival');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$planeAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('plane-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$plane = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('plane');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$pinterestSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('pinterest-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$pinterestP = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('pinterest-p');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$pinterest = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('pinterest');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$pills = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('pills');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$piggyBank = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('piggy-bank');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$piedPiperPP = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('pied-piper-pp');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$piedPiperHat = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('pied-piper-hat');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$piedPiperAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('pied-piper-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$piedPiper = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('pied-piper');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$php = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('php');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$phoneVolume = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('phone-volume');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$phoneSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('phone-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$phoneSlash = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('phone-slash');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$phonePlus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('phone-plus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$phone = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('phone');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$phoenixSquadron = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('phoenix-squadron');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$phoenixFramework = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('phoenix-framework');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$phabricator = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('phabricator');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$personDollyEmpty = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('person-dolly-empty');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$personDolly = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('person-dolly');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$personCarry = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('person-carry');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$periscope = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('periscope');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$percentage = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('percentage');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$percent = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('percent');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$peopleCarry = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('people-carry');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$pennant = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('pennant');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$pencilRuler = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('pencil-ruler');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$pencilAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('pencil-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$pencil = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('pencil');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$penSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('pen-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$penNib = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('pen-nib');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$penFancy = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('pen-fancy');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$penAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('pen-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$pen = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('pen');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$payPal = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('paypal');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$paw = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('paw');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$pauseCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('pause-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$pause = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('pause');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$patreon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('patreon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$paste = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('paste');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$passport = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('passport');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$parking = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('parking');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$paragraph = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('paragraph');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$parachuteBox = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('parachute-box');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$paperclip = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('paperclip');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$paperPlane = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('paper-plane');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$palletAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('pallet-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$pallet = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('pallet');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$palFed = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('palfed');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$palette = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('palette');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$paintRoller = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('paint-roller');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$paintBrushAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('paint-brush-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$paintBrush = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('paint-brush');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$page4 = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('page4');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$pageLines = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('pagelines');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$outdent = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('outdent');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$optinMonster = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('optin-monster');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$opera = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('opera');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$openSourceInitiative = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('osi');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$openID = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('openid');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$openCart = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('opencart');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$oldRepublic = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('old-republic');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$odnoklassnikiSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('odnoklassniki-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$odnoklassniki = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('odnoklassniki');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$octagon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('octagon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$objectUngroup = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('object-ungroup');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$objectGroup = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('object-group');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$nutritionix = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('nutritionix');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ns8 = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('ns8');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$npm = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('npm');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$notesMedical = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('notes-medical');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$notEqual = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('not-equal');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$nodejs = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('node-js');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$node = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('node');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$nintendoSwitch = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('nintendo-switch');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$nimblr = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('nimblr');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$newspaper = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('newspaper');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$neuter = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('neuter');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$napster = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('napster');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$music = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('music');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mousePointer = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('mouse-pointer');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$motorcycle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('motorcycle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mortarPestle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('mortar-pestle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$moon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('moon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$monument = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('monument');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$moneyCheckAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('money-check-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$moneyCheck = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('money-check');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$moneyBillWaveAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('money-bill-wave-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$moneyBillWave = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('money-bill-wave');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$moneyBillAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('money-bill-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$moneyBill = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('money-bill');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$monero = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('monero');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$modX = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('modx');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mobileAndroidAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('mobile-android-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mobileAndroid = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('mobile-android');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mobileAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('mobile-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mobile = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('mobile');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mizuni = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('mizuni');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mixcloud = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('mixcloud');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mix = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('mix');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$minusSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('minus-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$minusOctagon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('minus-octagon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$minusHexagon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('minus-hexagon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$minusCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('minus-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$minus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('minus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$microsoft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('microsoft');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$microphoneSlash = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('microphone-slash');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$microphoneAltSlash = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('microphone-alt-slash');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$microphoneAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('microphone-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$microphone = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('microphone');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$microchip = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('microchip');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mercury = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('mercury');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$memory = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('memory');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mehRollingEyes = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('meh-rolling-eyes');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mehBlank = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('meh-blank');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$meh = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('meh');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$megaport = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('megaport');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$meetup = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('meetup');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$medRT = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('medrt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$medkit = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('medkit');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mediumM = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('medium-m');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$medium = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('medium');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$medApps = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('medapps');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$medal = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('medal');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$maxCDN = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('maxcdn');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mastodon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('mastodon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$marsStrokeVertical = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('mars-stroke-v');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$marsStrokeHorizontal = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('mars-stroke-h');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$marsStroke = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('mars-stroke');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$marsDouble = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('mars-double');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mars = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('mars');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$marker = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('marker');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mapSigns = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('map-signs');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mapPin = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('map-pin');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mapMarkerAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('map-marker-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mapMarker = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('map-marker');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mapMarkedAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('map-marked-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mapMarked = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('map-marked');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$map = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('map');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mandalorian = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('mandalorian');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$male = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('male');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mailChimp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('mailchimp');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$magnet = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('magnet');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$magic = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('magic');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$magento = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('magento');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$lyft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('lyft');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$luggageCart = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('luggage-cart');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$luchador = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('luchador');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$lowVision = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('low-vision');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$loveseat = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('loveseat');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$longArrowUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('long-arrow-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$longArrowRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('long-arrow-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$longArrowLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('long-arrow-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$longArrowDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('long-arrow-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$longArrowAltUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('long-arrow-alt-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$longArrowAltRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('long-arrow-alt-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$longArrowAltLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('long-arrow-alt-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$longArrowAltDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('long-arrow-alt-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$lockOpenAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('lock-open-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$lockOpen = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('lock-open');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$lockAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('lock-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$lock = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('lock');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$locationArrow = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('location-arrow');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$listUl = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('list-ul');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$listOl = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('list-ol');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$listAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('list-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$list = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('list');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$liraSign = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('lira-sign');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$linux = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('linux');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$linode = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('linode');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$linkedInInverted = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('linkedin-in');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$linkedIn = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('linkedin');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$link = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('link');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$line = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('line');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$lightbulb = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('lightbulb');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$lifeRing = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('life-ring');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$levelUpAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('level-up-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$levelUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('level-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$levelDownAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('level-down-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$levelDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('level-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$lessThanEqual = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('less-than-equal');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$lessThan = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('less-than');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$less = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('less');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$lemon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('lemon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$leanpub = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('leanpub');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$leafHeart = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('leaf-heart');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$leaf = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('leaf');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$laughWink = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('laugh-wink');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$laughSquint = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('laugh-squint');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$laughBeam = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('laugh-beam');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$laugh = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('laugh');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$lastfmSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('lastfm-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$lastfm = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('lastfm');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$laravel = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('laravel');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$laptop = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('laptop');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$language = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('language');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$lamp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('lamp');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$korvue = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('korvue');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$kiwiBird = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('kiwi-bird');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$kissWinkHeart = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('kiss-wink-heart');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$kissBeam = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('kiss-beam');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$kiss = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('kiss');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$kickstarterK = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('kickstarter-k');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$kickstarter = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('kickstarter');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$keyboard = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('keyboard');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$keybase = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('keybase');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$keyCDN = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('keycdn');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$key = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('key');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$jsFiddle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('jsfiddle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$joomla = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('joomla');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$joint = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('joint');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$joget = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('joget');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$jenkins = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('jenkins');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$jediOrder = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('jedi-order');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$jsSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('js-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$js = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('js');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$java = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('java');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$jackOLantern = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('jack-o-lantern');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$iTunesNote = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('itunes-note');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$iTunes = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('itunes');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$italic = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('italic');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ioxHost = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('ioxhost');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$inventory = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('inventory');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$internetExplorer = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('internet-explorer');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$instagram = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('instagram');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$infoSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('info-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$infoCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('info-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$info = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('info');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$infinity = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('infinity');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$industryAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('industry-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$industry = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('industry');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$indent = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('indent');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$inboxOut = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('inbox-out');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$inboxIn = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('inbox-in');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$inbox = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('inbox');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$imdb = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('imdb');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$images = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('images');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$image = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('image');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$idCardAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('id-card-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$idCard = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('id-card');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$idBadge = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('id-badge');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$iCursor = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('i-cursor');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hubSpot = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('hubspot');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$html5 = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('html5');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$houzz = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('houzz');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hourglassStart = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hourglass-start');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hourglassHalf = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hourglass-half');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hourglassEnd = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hourglass-end');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hourglass = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hourglass');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hotjar = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('hotjar');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hotel = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hotel');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hotTub = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hot-tub');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hospitalSymbol = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hospital-symbol');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hospitalAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hospital-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hospital = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hospital');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hornbill = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('hornbill');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hooli = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('hooli');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$homeHeart = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('home-heart');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$home = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('home');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hockeySticks = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hockey-sticks');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hockeyPuck = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hockey-puck');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$history = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('history');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hireAHelper = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('hire-a-helper');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hips = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('hips');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$highlighter = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('highlighter');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hexagon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hexagon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$helicopter = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('helicopter');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$heartbeat = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('heartbeat');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$heartSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('heart-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$heartCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('heart-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$heart = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('heart');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$headset = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('headset');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$headphonesAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('headphones-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$headphones = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('headphones');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$heading = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('heading');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hdd = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hdd');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hashtag = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hashtag');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handshakeAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('handshake-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handshake = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('handshake');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handsUsd = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hands-usd');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handsHelping = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hands-helping');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handsHeart = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hands-heart');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hands = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hands');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handSpock = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-spock');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handScissors = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-scissors');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handRock = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-rock');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handReceiving = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-receiving');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handPointer = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-pointer');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handPointUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-point-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handPointRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-point-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handPointLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-point-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handPointDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-point-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handPeace = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-peace');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handPaper = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-paper');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handLizard = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-lizard');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handHoldingWater = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-holding-water');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handHoldingUsd = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-holding-usd');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handHoldingSeedling = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-holding-seedling');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handHoldingHeart = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-holding-heart');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handHoldingBox = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-holding-box');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handHolding = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-holding');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$handHeart = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('hand-heart');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hackerNewsSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('hacker-news-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hackerNews = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('hacker-news');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$h3 = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('h3');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$h2 = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('h2');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$h1 = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('h1');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$hSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('h-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gulp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('gulp');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grunt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('grunt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gripfire = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('gripfire');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gripVertical = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grip-vertical');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gripHorizontal = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grip-horizontal');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grinWink = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grin-wink');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grinTongueWink = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grin-tongue-wink');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grinTongueSquint = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grin-tongue-squint');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grinTongue = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grin-tongue');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grinTears = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grin-tears');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grinStars = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grin-stars');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grinSquintTears = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grin-squint-tears');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grinSquint = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grin-squint');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grinHearts = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grin-hearts');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grinBeamSweat = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grin-beam-sweat');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grinBeam = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grin-beam');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grinAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grin-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grin = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grin');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grimace = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('grimace');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$greaterThanEqual = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('greater-than-equal');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$greaterThan = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('greater-than');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$grav = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('grav');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gratipay = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('gratipay');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$graduationCap = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('graduation-cap');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$googleWallet = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('google-wallet');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$googlePlusSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('google-plus-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$googlePlusG = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('google-plus-g');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$googlePlus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('google-plus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$googlePlay = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('google-play');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$googleDrive = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('google-drive');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$google = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('google');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$goodreadsG = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('goodreads-g');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$goodreads = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('goodreads');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$golfClub = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('golf-club');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$golfBall = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('golf-ball');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gofore = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('gofore');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$globeAsia = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('globe-asia');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$globeAmericas = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('globe-americas');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$globeAfrica = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('globe-africa');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$globe = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('globe');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$glideG = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('glide-g');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$glide = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('glide');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$glasses = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('glasses');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$glassMartiniAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('glass-martini-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$glassMartini = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('glass-martini');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gitter = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('gitter');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gitLab = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('gitlab');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gitKraken = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('gitkraken');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gitHubSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('github-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gitHubAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('github-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gitHub = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('github');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gitSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('git-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$git = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('git');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gift = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('gift');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ggCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('gg-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gg = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('gg');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$getPocket = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('get-pocket');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$genderless = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('genderless');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gem = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('gem');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gavel = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('gavel');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gasPump = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('gas-pump');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$gamepad = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('gamepad');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$galacticSenate = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('galactic-senate');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$galacticRepublic = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('galactic-republic');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$futbol = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('futbol');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fulcrum = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('fulcrum');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$frownOpen = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('frown-open');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$frown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('frown');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$frog = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('frog');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$freeCodeCamp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('free-code-camp');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$freeBSD = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('freebsd');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fragile = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('fragile');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$foursquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('foursquare');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$forward = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('forward');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$forumbee = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('forumbee');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fortAwesomeAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('fort-awesome-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fortAwesome = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('fort-awesome');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$forklift = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('forklift');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$footballHelmet = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('football-helmet');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$footballBall = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('football-ball');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fontIconsFi = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('fonticons-fi');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fontIcons = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('fonticons');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fontAwesomeLogoFull = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('font-awesome-logo-full');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fontAwesomeFlag = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('font-awesome-flag');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fontAwesomeAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('font-awesome-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fontAwesome = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('font-awesome');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$font = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('font');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$folderOpen = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('folder-open');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$folder = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('folder');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fly = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('fly');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$flushed = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('flushed');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$flipboard = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('flipboard');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$flickr = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('flickr');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$flask = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('flask');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$flagCheckered = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('flag-checkered');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$flag = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('flag');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fish = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('fish');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$firstOrderAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('first-order-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$firstOrder = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('first-order');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$firstDraft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('firstdraft');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$firstAid = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('first-aid');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$firefox = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('firefox');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fireExtinguisher = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('fire-extinguisher');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fire = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('fire');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fingerprint = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('fingerprint');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$filter = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('filter');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$filmAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('film-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$film = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('film');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fillDrip = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('fill-drip');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fill = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('fill');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileWord = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-word');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileVideo = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-video');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileUpload = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-upload');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileTimes = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-times');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileSignature = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-signature');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$filePrescription = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-prescription');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$filePowerPoint = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-powerpoint');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$filePlus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-plus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$filePdf = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-pdf');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileMinus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-minus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileMedicalAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-medical-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileMedical = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-medical');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileInvoiceDollar = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-invoice-dollar');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileInvoice = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-invoice');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileImport = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-import');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileImage = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-image');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileExport = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-export');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileExclamation = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-exclamation');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileExcel = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-excel');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileEdit = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-edit');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileDownload = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-download');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileContract = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-contract');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileCode = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-code');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileCheck = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-check');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileAudio = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-audio');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileArchive = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-archive');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fileAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$file = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('file');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fighterJet = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('fighter-jet');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fieldHockey = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('field-hockey');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$female = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('female');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$featherAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('feather-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$feather = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('feather');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fax = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('fax');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fastForward = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('fast-forward');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fastBackward = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('fast-backward');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$facebookSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('facebook-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$facebookMessenger = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('facebook-messenger');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$facebookF = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('facebook-f');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$facebook = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('facebook');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$eyeSlash = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('eye-slash');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$eyeDropper = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('eye-dropper');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$eye = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('eye');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$externalLinkSquareAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('external-link-square-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$externalLinkSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('external-link-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$externalLinkAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('external-link-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$externalLink = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('external-link');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$expeditedSSL = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('expeditedssl');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$expandWide = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('expand-wide');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$expandArrowsAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('expand-arrows-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$expandArrows = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('expand-arrows');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$expandAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('expand-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$expand = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('expand');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$exclamationTriangle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('exclamation-triangle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$exclamationSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('exclamation-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$exclamationCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('exclamation-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$exclamation = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('exclamation');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$exchangeAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('exchange-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$exchange = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('exchange');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$euroSign = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('euro-sign');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$etsy = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('etsy');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ethereum = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('ethereum');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$erlang = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('erlang');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$eraser = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('eraser');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$equals = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('equals');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$envira = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('envira');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$envelopeSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('envelope-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$envelopeOpen = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('envelope-open');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$envelope = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('envelope');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$empire = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('empire');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ember = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('ember');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ellipsisVerticalAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ellipsis-v-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ellipsisVertical = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ellipsis-v');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ellipsisHorizontalAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ellipsis-h-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ellipsisHorizontal = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ellipsis-h');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$elementor = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('elementor');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$eject = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('eject');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$edit = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('edit');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$edge = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('edge');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ebay = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('ebay');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$earlyBirds = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('earlybirds');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dyalog = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('dyalog');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dAndD = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('d-and-d');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dumbbell = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dumbbell');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$drupal = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('drupal');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$drumSteelpan = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('drum-steelpan');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$drum = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('drum');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dropbox = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('dropbox');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dribbbleSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('dribbble-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dribbble = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('dribbble');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$draftingCompass = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('drafting-compass');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$draft2Digital = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('draft2digital');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$download = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('download');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dove = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dove');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dotCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dot-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$doorOpen = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('door-open');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$doorClosed = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('door-closed');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$donate = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('donate');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dollyFlatbedEmpty = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dolly-flatbed-empty');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dollyFlatbedAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dolly-flatbed-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dollyFlatbed = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dolly-flatbed');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dollyEmpty = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dolly-empty');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dolly = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dolly');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dollarSign = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dollar-sign');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$docker = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('docker');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$docHub = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('dochub');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dna = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dna');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dizzy = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dizzy');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$divide = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('divide');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$discourse = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('discourse');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$discord = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('discord');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$digitalTachograph = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('digital-tachograph');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$digitalOcean = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('digital-ocean');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$digg = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('digg');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$diceTwo = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dice-two');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$diceThree = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dice-three');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$diceSix = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dice-six');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$diceOne = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dice-one');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$diceFour = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dice-four');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$diceFive = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dice-five');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dice = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('dice');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$diamond = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('diamond');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$diagnoses = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('diagnoses');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$deviantArt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('deviantart');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$desktopAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('desktop-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$desktop = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('desktop');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$deskpro = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('deskpro');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$deployDog = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('deploydog');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$delicious = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('delicious');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$deaf = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('deaf');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$database = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('database');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$dashcube = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('dashcube');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cuttlefish = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('cuttlefish');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cut = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cut');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$curling = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('curling');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cubes = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cubes');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cube = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cube');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$css3Alt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('css3-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$css3 = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('css3');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$crown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('crown');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$crow = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('crow');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$crosshairs = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('crosshairs');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cropAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('crop-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$crop = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('crop');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cricket = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cricket');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creditCardFront = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('credit-card-front');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creditCardBlank = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('credit-card-blank');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creditCard = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('credit-card');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creativeCommonsZero = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('creative-commons-zero');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creativeCommonsShare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('creative-commons-share');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creativeCommonsSamplingPlus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('creative-commons-sampling-plus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creativeCommonsSampling = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('creative-commons-sampling');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creativeCommonsSa = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('creative-commons-sa');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creativeCommonsRemix = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('creative-commons-remix');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creativeCommonsPdAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('creative-commons-pd-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creativeCommonsPd = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('creative-commons-pd');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creativeCommonsNd = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('creative-commons-nd');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creativeCommonsNcJp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('creative-commons-nc-jp');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creativeCommonsNcEu = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('creative-commons-nc-eu');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creativeCommonsNc = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('creative-commons-nc');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creativeCommonsBy = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('creative-commons-by');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$creativeCommons = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('creative-commons');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cpanel = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('cpanel');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$couch = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('couch');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$copyright = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('copyright');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$copy = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('copy');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cookieBite = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cookie-bite');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cookie = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cookie');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$conveyorBeltAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('conveyor-belt-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$conveyorBelt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('conveyor-belt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$contao = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('contao');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$containerStorage = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('container-storage');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$connectDevelop = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('connectdevelop');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$conciergeBell = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('concierge-bell');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$compressWide = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('compress-wide');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$compressAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('compress-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$compress = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('compress');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$compass = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('compass');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$compactDisc = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('compact-disc');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentsAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comments-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$comments = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comments');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentTimes = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-times');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentSmile = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-smile');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentSlash = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-slash');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentPlus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-plus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentMinus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-minus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentLines = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-lines');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentExclamation = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-exclamation');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentEdit = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-edit');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentDots = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-dots');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentCheck = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-check');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentAltTimes = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-alt-times');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentAltSmile = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-alt-smile');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentAltSlash = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-alt-slash');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentAltPlus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-alt-plus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentAltMinus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-alt-minus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentAltLines = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-alt-lines');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentAltExclamation = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-alt-exclamation');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentAltEdit = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-alt-edit');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentAltDots = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-alt-dots');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentAltCheck = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-alt-check');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$commentAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$comment = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('comment');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$columns = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('columns');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$coins = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('coins');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cogs = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cogs');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cog = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cog');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$coffee = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('coffee');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$codiePie = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('codiepie');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$codePen = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('codepen');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$codeMerge = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('code-merge');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$codeCommit = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('code-commit');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$codeBranch = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('code-branch');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$code = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('code');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cocktail = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cocktail');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$club = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('club');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cloudversify = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('cloudversify');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cloudsmith = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('cloudsmith');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cloudScale = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('cloudscale');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cloudUploadAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cloud-upload-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cloudUpload = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cloud-upload');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cloudDownloadAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cloud-download-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cloudDownload = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cloud-download');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cloud = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cloud');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$closedCaptioning = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('closed-captioning');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$clone = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('clone');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$clock = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('clock');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$clipboardList = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('clipboard-list');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$clipboardCheck = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('clipboard-check');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$clipboard = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('clipboard');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$circleNotch = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('circle-notch');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$circle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$church = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('church');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chrome = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('chrome');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$child = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('child');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronSquareUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-square-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronSquareRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-square-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronSquareLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-square-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronSquareDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-square-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronDoubleUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-double-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronDoubleRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-double-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronDoubleLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-double-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronDoubleDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-double-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronCircleUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-circle-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronCircleRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-circle-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronCircleLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-circle-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chevronCircleDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chevron-circle-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chessRookAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess-rook-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chessRook = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess-rook');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chessQueenAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess-queen-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chessQueen = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess-queen');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chessPawnAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess-pawn-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chessPawn = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess-pawn');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chessKnightAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess-knight-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chessKnight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess-knight');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chessKingAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess-king-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chessKing = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess-king');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chessClockAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess-clock-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chessClock = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess-clock');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chessBoard = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess-board');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chessBishopAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess-bishop-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chessBishop = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess-bishop');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chess = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chess');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$checkSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('check-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$checkDouble = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('check-double');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$checkCircle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('check-circle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$check = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('check');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chartPie = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chart-pie');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chartLine = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chart-line');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chartBar = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chart-bar');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chartArea = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chart-area');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chalkboardTeacher = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chalkboard-teacher');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$chalkboard = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('chalkboard');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$certificate = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('certificate');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$centercode = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('centercode');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ccVisa = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('cc-visa');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ccStripe = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('cc-stripe');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ccPayPal = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('cc-paypal');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ccMastercard = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('cc-mastercard');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ccJcb = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('cc-jcb');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ccDiscover = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('cc-discover');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ccDinersClub = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('cc-diners-club');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ccApplePay = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('cc-apple-pay');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ccAmex = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('cc-amex');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ccAmazonPay = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('cc-amazon-pay');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cartPlus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cart-plus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cartArrowDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cart-arrow-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$caretUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('caret-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$caretSquareUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('caret-square-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$caretSquareRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('caret-square-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$caretSquareLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('caret-square-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$caretSquareDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('caret-square-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$caretRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('caret-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$caretLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('caret-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$caretDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('caret-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$caretCircleUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('caret-circle-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$caretCircleRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('caret-circle-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$caretCircleLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('caret-circle-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$caretCircleDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('caret-circle-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$car = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('car');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$capsules = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('capsules');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cannabis = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('cannabis');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cameraRetro = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('camera-retro');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$cameraAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('camera-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$camera = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('camera');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$calendarTimes = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('calendar-times');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$calendarPlus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('calendar-plus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$calendarMinus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('calendar-minus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$calendarExclamation = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('calendar-exclamation');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$calendarEdit = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('calendar-edit');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$calendarCheck = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('calendar-check');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$calendarAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('calendar-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$calendar = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('calendar');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$calculator = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('calculator');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$buySellAds = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('buysellads');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$busAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bus-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bus = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bus');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$buromobelExperte = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('buromobelexperte');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$burn = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('burn');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bullseye = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bullseye');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bullhorn = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bullhorn');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$building = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('building');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bug = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bug');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$btc = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('btc');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$brush = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('brush');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$browser = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('browser');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$broom = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('broom');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$broadcastTower = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('broadcast-tower');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$briefcaseMedical = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('briefcase-medical');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$briefcase = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('briefcase');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$braille = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('braille');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$boxingGlove = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('boxing-glove');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$boxesAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('boxes-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$boxes = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('boxes');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$boxUsd = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('box-usd');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$boxUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('box-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$boxOpen = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('box-open');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$boxHeart = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('box-heart');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$boxFull = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('box-full');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$boxFragile = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('box-fragile');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$boxCheck = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('box-check');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$boxAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('box-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$box = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('box');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bowlingPins = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bowling-pins');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bowlingBall = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bowling-ball');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bookmark = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bookmark');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bookOpen = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('book-open');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bookHeart = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('book-heart');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$book = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('book');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bong = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bong');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bomb = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bomb');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bolt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bolt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bold = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bold');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bluetoothB = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('bluetooth-b');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bluetooth = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('bluetooth');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bloggerB = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('blogger-b');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$blogger = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('blogger');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$blind = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('blind');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$blender = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('blender');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$blanket = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('blanket');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$blackberry = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('blackberry');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$blackTie = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('black-tie');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bity = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('bity');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bitcoin = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('bitcoin');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bitbucket = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('bitbucket');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$birthdayCake = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('birthday-cake');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$binoculars = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('binoculars');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bimObject = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('bimobject');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bicycle = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bicycle');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bezierCurve = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bezier-curve');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bellSlash = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bell-slash');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bell = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bell');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$behanceSquare = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('behance-square');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$behance = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('behance');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$beer = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('beer');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bed = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bed');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$batteryThreeQuarters = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('battery-three-quarters');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$batterySlash = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('battery-slash');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$batteryQuarter = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('battery-quarter');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$batteryHalf = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('battery-half');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$batteryFull = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('battery-full');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$batteryEmpty = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('battery-empty');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$batteryBolt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('battery-bolt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bath = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bath');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$basketballHoop = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('basketball-hoop');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$basketballBall = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('basketball-ball');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$baseballBall = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('baseball-ball');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$baseball = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('baseball');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bars = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('bars');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$barcodeScan = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('barcode-scan');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$barcodeRead = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('barcode-read');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$barcodeAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('barcode-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$barcode = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('barcode');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bandcamp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('bandcamp');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$bandAid = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('band-aid');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ban = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ban');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$balanceScaleRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('balance-scale-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$balanceScaleLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('balance-scale-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$balanceScale = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('balance-scale');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$badgeCheck = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('badge-check');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$badge = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('badge');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$backward = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('backward');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$backspace = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('backspace');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$aws = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('aws');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$award = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('award');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$aviato = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('aviato');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$avianex = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('avianex');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$autoprefixer = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('autoprefixer');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$audioDescription = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('audio-description');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$audible = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('audible');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$atlas = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('atlas');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$at = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('at');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$asymmetrik = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('asymmetrik');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$asterisk = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('asterisk');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$assistiveListeningSystems = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('assistive-listening-systems');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowsVertical = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrows-v');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowsHorizontal = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrows-h');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowsAltVertical = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrows-alt-v');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowsAltHorizontal = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrows-alt-h');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowsAlt = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrows-alt');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrows = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrows');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowToTop = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-to-top');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowToRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-to-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowToLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-to-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowToBottom = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-to-bottom');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowSquareUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-square-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowSquareRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-square-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowSquareLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-square-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowSquareDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-square-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowFromTop = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-from-top');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowFromRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-from-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowFromLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-from-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowFromBottom = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-from-bottom');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowCircleUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-circle-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowCircleRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-circle-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowCircleLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-circle-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowCircleDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-circle-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltToTop = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-to-top');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltToRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-to-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltToLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-to-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltToBottom = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-to-bottom');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltSquareUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-square-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltSquareRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-square-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltSquareLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-square-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltSquareDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-square-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltFromTop = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-from-top');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltFromRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-from-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltFromLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-from-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltFromBottom = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-from-bottom');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltCircleUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-circle-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltCircleRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-circle-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltCircleLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-circle-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$arrowAltCircleDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('arrow-alt-circle-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$archway = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('archway');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$archive = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('archive');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$applePay = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('apple-pay');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$apple = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('apple');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$apper = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('apper');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$appStoreIos = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('app-store-ios');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$appStore = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('app-store');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$angular = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('angular');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$angryCreative = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('angrycreative');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$angry = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('angry');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$angleUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('angle-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$angleRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('angle-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$angleLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('angle-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$angleDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('angle-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$angleDoubleUp = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('angle-double-up');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$angleDoubleRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('angle-double-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$angleDoubleLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('angle-double-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$angleDoubleDown = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('angle-double-down');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$angelList = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('angellist');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$android = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('android');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$anchor = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('anchor');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$amilia = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('amilia');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$americanSignLanguageInterpreting = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('american-sign-language-interpreting');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ambulance = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('ambulance');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$amazonPay = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('amazon-pay');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$amazon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('amazon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$allergies = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('allergies');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$alignRight = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('align-right');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$alignLeft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('align-left');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$alignJustify = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('align-justify');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$alignCenter = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('align-center');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$algolia = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('algolia');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$alarmClock = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('alarm-clock');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$affiliateTheme = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('affiliatetheme');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$adversal = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('adversal');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$adn = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('adn');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$adjust = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('adjust');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$addressCard = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('address-card');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$addressBook = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Icon('address-book');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$accusoft = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('accusoft');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$accessibleIcon = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('accessible-icon');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$fiveHundredPx = _HolyMeekrob$elm_font_awesome_5$FontAwesome_Icon$Logo('500px');
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$transformVal = function (transform) {
	var _p0 = transform;
	switch (_p0.ctor) {
		case 'Grow':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'grow-',
				_elm_lang$core$Basics$toString(_p0._0));
		case 'Shrink':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'shrink-',
				_elm_lang$core$Basics$toString(_p0._0));
		case 'ShiftDown':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'down-',
				_elm_lang$core$Basics$toString(_p0._0));
		case 'ShiftLeft':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'left-',
				_elm_lang$core$Basics$toString(_p0._0));
		case 'ShiftRight':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'right-',
				_elm_lang$core$Basics$toString(_p0._0));
		case 'ShiftUp':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'up-',
				_elm_lang$core$Basics$toString(_p0._0));
		case 'Rotate':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'rotate-',
				_elm_lang$core$Basics$toString(_p0._0));
		case 'FlipHorizontal':
			return 'flip-h';
		default:
			return 'flip-v';
	}
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$transform = F2(
	function (opt, opts) {
		var _p1 = opt;
		if (_p1.ctor === 'Transform') {
			var val = A2(
				_elm_lang$core$String$join,
				' ',
				A2(_elm_lang$core$List$map, _HolyMeekrob$elm_font_awesome_5$FontAwesome$transformVal, _p1._0));
			return {
				ctor: '::',
				_0: A2(_elm_lang$html$Html_Attributes$attribute, 'data-fa-transform', val),
				_1: opts
			};
		} else {
			return opts;
		}
	});
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$transformAttr = function (options) {
	return A3(
		_elm_lang$core$List$foldr,
		_HolyMeekrob$elm_font_awesome_5$FontAwesome$transform,
		{ctor: '[]'},
		options);
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$styleClass = F2(
	function (icon, style) {
		var _p2 = icon;
		if (_p2.ctor === 'Logo') {
			return 'fab';
		} else {
			var _p3 = style;
			switch (_p3.ctor) {
				case 'Solid':
					return 'fas';
				case 'Regular':
					return 'far';
				default:
					return 'fal';
			}
		}
	});
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$sizeClass = function (size) {
	var _p4 = size;
	switch (_p4.ctor) {
		case 'ExtraSmall':
			return 'fa-xs';
		case 'Small':
			return 'fa-sm';
		case 'Large':
			return 'fa-lg';
		default:
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'fa-',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p4._0),
					'x'));
	}
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$pullClass = function (p) {
	var _p5 = p;
	if (_p5.ctor === 'Left') {
		return 'fa-pull-left';
	} else {
		return 'fa-pull-right';
	}
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$invertClass = 'fa-inverse';
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$widthClass = 'fa-fw';
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$borderClass = 'fa-border';
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$animationClass = function (animation) {
	var _p6 = animation;
	if (_p6.ctor === 'Spin') {
		return 'fa-spin';
	} else {
		return 'fa-pulse';
	}
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$className = function (opt) {
	var _p7 = opt;
	switch (_p7.ctor) {
		case 'Animation':
			return {
				ctor: '_Tuple2',
				_0: _HolyMeekrob$elm_font_awesome_5$FontAwesome$animationClass(_p7._0),
				_1: true
			};
		case 'HasBorder':
			return {ctor: '_Tuple2', _0: _HolyMeekrob$elm_font_awesome_5$FontAwesome$borderClass, _1: true};
		case 'HasFixedWidth':
			return {ctor: '_Tuple2', _0: _HolyMeekrob$elm_font_awesome_5$FontAwesome$widthClass, _1: true};
		case 'InvertColor':
			return {ctor: '_Tuple2', _0: _HolyMeekrob$elm_font_awesome_5$FontAwesome$invertClass, _1: true};
		case 'Pull':
			return {
				ctor: '_Tuple2',
				_0: _HolyMeekrob$elm_font_awesome_5$FontAwesome$pullClass(_p7._0),
				_1: true
			};
		case 'Size':
			return {
				ctor: '_Tuple2',
				_0: _HolyMeekrob$elm_font_awesome_5$FontAwesome$sizeClass(_p7._0),
				_1: true
			};
		default:
			return {ctor: '_Tuple2', _0: '', _1: false};
	}
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$iconClass = function (icon) {
	var root = function () {
		var _p8 = icon;
		if (_p8.ctor === 'Icon') {
			return _p8._0;
		} else {
			return _p8._0;
		}
	}();
	return A2(_elm_lang$core$Basics_ops['++'], 'fa-', root);
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$classes = F3(
	function (icon, style, options) {
		return _elm_lang$html$Html_Attributes$classList(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: A2(_HolyMeekrob$elm_font_awesome_5$FontAwesome$styleClass, icon, style),
					_1: true
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: _HolyMeekrob$elm_font_awesome_5$FontAwesome$iconClass(icon),
						_1: true
					},
					_1: A2(_elm_lang$core$List$map, _HolyMeekrob$elm_font_awesome_5$FontAwesome$className, options)
				}
			});
	});
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$mask = F2(
	function (opt, opts) {
		var _p9 = opt;
		if (_p9.ctor === 'Mask') {
			var _p10 = _p9._0;
			var val = A2(
				_elm_lang$core$Basics_ops['++'],
				A2(_HolyMeekrob$elm_font_awesome_5$FontAwesome$styleClass, _p10, _p9._1),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					_HolyMeekrob$elm_font_awesome_5$FontAwesome$iconClass(_p10)));
			return {
				ctor: '::',
				_0: A2(_elm_lang$html$Html_Attributes$attribute, 'data-fa-mask', val),
				_1: opts
			};
		} else {
			return opts;
		}
	});
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$maskAttr = function (options) {
	return A3(
		_elm_lang$core$List$foldr,
		_HolyMeekrob$elm_font_awesome_5$FontAwesome$mask,
		{ctor: '[]'},
		options);
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$isWidth = function (option) {
	var _p11 = option;
	if (_p11.ctor === 'HasFixedWidth') {
		return true;
	} else {
		return false;
	}
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$isTransform = function (option) {
	var _p12 = option;
	if (_p12.ctor === 'Transform') {
		return true;
	} else {
		return false;
	}
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$isSize = function (option) {
	var _p13 = option;
	if (_p13.ctor === 'Size') {
		return true;
	} else {
		return false;
	}
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$isPull = function (option) {
	var _p14 = option;
	if (_p14.ctor === 'Pull') {
		return true;
	} else {
		return false;
	}
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$isMask = function (option) {
	var _p15 = option;
	if (_p15.ctor === 'Mask') {
		return true;
	} else {
		return false;
	}
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$isInvertColor = function (option) {
	var _p16 = option;
	if (_p16.ctor === 'InvertColor') {
		return true;
	} else {
		return false;
	}
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$isHtmlTag = function (option) {
	var _p17 = option;
	if (_p17.ctor === 'HtmlTag') {
		return true;
	} else {
		return false;
	}
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$isBorder = function (option) {
	var _p18 = option;
	if (_p18.ctor === 'HasBorder') {
		return true;
	} else {
		return false;
	}
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$isAnimation = function (option) {
	var _p19 = option;
	if (_p19.ctor === 'Animation') {
		return true;
	} else {
		return false;
	}
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$filterAttrs = function (options) {
	return A2(
		_HolyMeekrob$elm_font_awesome_5$FontAwesome_Utils$dedup,
		_HolyMeekrob$elm_font_awesome_5$FontAwesome$isWidth,
		A2(
			_HolyMeekrob$elm_font_awesome_5$FontAwesome_Utils$dedup,
			_HolyMeekrob$elm_font_awesome_5$FontAwesome$isTransform,
			A2(
				_HolyMeekrob$elm_font_awesome_5$FontAwesome_Utils$dedup,
				_HolyMeekrob$elm_font_awesome_5$FontAwesome$isSize,
				A2(
					_HolyMeekrob$elm_font_awesome_5$FontAwesome_Utils$dedup,
					_HolyMeekrob$elm_font_awesome_5$FontAwesome$isPull,
					A2(
						_HolyMeekrob$elm_font_awesome_5$FontAwesome_Utils$dedup,
						_HolyMeekrob$elm_font_awesome_5$FontAwesome$isMask,
						A2(
							_HolyMeekrob$elm_font_awesome_5$FontAwesome_Utils$dedup,
							_HolyMeekrob$elm_font_awesome_5$FontAwesome$isInvertColor,
							A2(
								_HolyMeekrob$elm_font_awesome_5$FontAwesome_Utils$dedup,
								_HolyMeekrob$elm_font_awesome_5$FontAwesome$isHtmlTag,
								A2(
									_HolyMeekrob$elm_font_awesome_5$FontAwesome_Utils$dedup,
									_HolyMeekrob$elm_font_awesome_5$FontAwesome$isBorder,
									A2(_HolyMeekrob$elm_font_awesome_5$FontAwesome_Utils$dedup, _HolyMeekrob$elm_font_awesome_5$FontAwesome$isAnimation, options)))))))));
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$htmlAttrs = F2(
	function (options, htmlAttributes) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_HolyMeekrob$elm_font_awesome_5$FontAwesome$transformAttr(options),
			A2(
				_elm_lang$core$Basics_ops['++'],
				_HolyMeekrob$elm_font_awesome_5$FontAwesome$maskAttr(options),
				htmlAttributes));
	});
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$findTag = F2(
	function (option, previousTag) {
		var _p20 = option;
		if (_p20.ctor === 'HtmlTag') {
			return _p20._0;
		} else {
			return previousTag;
		}
	});
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$useCss = A3(
	_elm_lang$html$Html$node,
	'link',
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$href('https://use.fontawesome.com/releases/v5.0.3/css/all.css'),
		_1: {
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$rel('stylesheet'),
			_1: {ctor: '[]'}
		}
	},
	{ctor: '[]'});
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$useSvg = A3(
	_elm_lang$html$Html$node,
	'script',
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$defer(true),
		_1: {
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$src('https://use.fontawesome.com/releases/v5.0.3/js/all.js'),
			_1: {ctor: '[]'}
		}
	},
	{ctor: '[]'});
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Transform = function (a) {
	return {ctor: 'Transform', _0: a};
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Size = function (a) {
	return {ctor: 'Size', _0: a};
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Pull = function (a) {
	return {ctor: 'Pull', _0: a};
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Mask = F2(
	function (a, b) {
		return {ctor: 'Mask', _0: a, _1: b};
	});
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$InvertColor = {ctor: 'InvertColor'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$HtmlTag = function (a) {
	return {ctor: 'HtmlTag', _0: a};
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$HasFixedWidth = {ctor: 'HasFixedWidth'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$HasBorder = {ctor: 'HasBorder'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Animation = function (a) {
	return {ctor: 'Animation', _0: a};
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Light = {ctor: 'Light'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Regular = {ctor: 'Regular'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Solid = {ctor: 'Solid'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Mult = function (a) {
	return {ctor: 'Mult', _0: a};
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Large = {ctor: 'Large'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Small = {ctor: 'Small'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ExtraSmall = {ctor: 'ExtraSmall'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Right = {ctor: 'Right'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Left = {ctor: 'Left'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Pulse = {ctor: 'Pulse'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Spin = {ctor: 'Spin'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Span = {ctor: 'Span'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$I = {ctor: 'I'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$htmlTag = function (opts) {
	var tag = A3(_elm_lang$core$List$foldl, _HolyMeekrob$elm_font_awesome_5$FontAwesome$findTag, _HolyMeekrob$elm_font_awesome_5$FontAwesome$I, opts);
	var _p21 = tag;
	if (_p21.ctor === 'I') {
		return _elm_lang$html$Html$i;
	} else {
		return _elm_lang$html$Html$span;
	}
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$iconWithOptions = F4(
	function (icon, style, options, htmlAttributes) {
		var opts = _HolyMeekrob$elm_font_awesome_5$FontAwesome$filterAttrs(options);
		return A3(
			_HolyMeekrob$elm_font_awesome_5$FontAwesome$htmlTag,
			opts,
			{
				ctor: '::',
				_0: A3(_HolyMeekrob$elm_font_awesome_5$FontAwesome$classes, icon, style, opts),
				_1: A2(_HolyMeekrob$elm_font_awesome_5$FontAwesome$htmlAttrs, opts, htmlAttributes)
			},
			{ctor: '[]'});
	});
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$icon = function (icon) {
	return A4(
		_HolyMeekrob$elm_font_awesome_5$FontAwesome$iconWithOptions,
		icon,
		_HolyMeekrob$elm_font_awesome_5$FontAwesome$Solid,
		{ctor: '[]'},
		{ctor: '[]'});
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$FlipVertical = {ctor: 'FlipVertical'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$FlipHorizontal = {ctor: 'FlipHorizontal'};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Rotate = function (a) {
	return {ctor: 'Rotate', _0: a};
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ShiftUp = function (a) {
	return {ctor: 'ShiftUp', _0: a};
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ShiftRight = function (a) {
	return {ctor: 'ShiftRight', _0: a};
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ShiftLeft = function (a) {
	return {ctor: 'ShiftLeft', _0: a};
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$ShiftDown = function (a) {
	return {ctor: 'ShiftDown', _0: a};
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Shrink = function (a) {
	return {ctor: 'Shrink', _0: a};
};
var _HolyMeekrob$elm_font_awesome_5$FontAwesome$Grow = function (a) {
	return {ctor: 'Grow', _0: a};
};

var _elm_lang$animation_frame$Native_AnimationFrame = function()
{

function create()
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = requestAnimationFrame(function() {
			callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
		});

		return function() {
			cancelAnimationFrame(id);
		};
	});
}

return {
	create: create
};

}();

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$animation_frame$AnimationFrame$rAF = _elm_lang$animation_frame$Native_AnimationFrame.create(
	{ctor: '_Tuple0'});
var _elm_lang$animation_frame$AnimationFrame$subscription = _elm_lang$core$Native_Platform.leaf('AnimationFrame');
var _elm_lang$animation_frame$AnimationFrame$State = F3(
	function (a, b, c) {
		return {subs: a, request: b, oldTime: c};
	});
var _elm_lang$animation_frame$AnimationFrame$init = _elm_lang$core$Task$succeed(
	A3(
		_elm_lang$animation_frame$AnimationFrame$State,
		{ctor: '[]'},
		_elm_lang$core$Maybe$Nothing,
		0));
var _elm_lang$animation_frame$AnimationFrame$onEffects = F3(
	function (router, subs, _p0) {
		var _p1 = _p0;
		var _p5 = _p1.request;
		var _p4 = _p1.oldTime;
		var _p2 = {ctor: '_Tuple2', _0: _p5, _1: subs};
		if (_p2._0.ctor === 'Nothing') {
			if (_p2._1.ctor === '[]') {
				return _elm_lang$core$Task$succeed(
					A3(
						_elm_lang$animation_frame$AnimationFrame$State,
						{ctor: '[]'},
						_elm_lang$core$Maybe$Nothing,
						_p4));
			} else {
				return A2(
					_elm_lang$core$Task$andThen,
					function (pid) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (time) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$animation_frame$AnimationFrame$State,
										subs,
										_elm_lang$core$Maybe$Just(pid),
										time));
							},
							_elm_lang$core$Time$now);
					},
					_elm_lang$core$Process$spawn(
						A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$core$Platform$sendToSelf(router),
							_elm_lang$animation_frame$AnimationFrame$rAF)));
			}
		} else {
			if (_p2._1.ctor === '[]') {
				return A2(
					_elm_lang$core$Task$andThen,
					function (_p3) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$animation_frame$AnimationFrame$State,
								{ctor: '[]'},
								_elm_lang$core$Maybe$Nothing,
								_p4));
					},
					_elm_lang$core$Process$kill(_p2._0._0));
			} else {
				return _elm_lang$core$Task$succeed(
					A3(_elm_lang$animation_frame$AnimationFrame$State, subs, _p5, _p4));
			}
		}
	});
var _elm_lang$animation_frame$AnimationFrame$onSelfMsg = F3(
	function (router, newTime, _p6) {
		var _p7 = _p6;
		var _p10 = _p7.subs;
		var diff = newTime - _p7.oldTime;
		var send = function (sub) {
			var _p8 = sub;
			if (_p8.ctor === 'Time') {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p8._0(newTime));
			} else {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p8._0(diff));
			}
		};
		return A2(
			_elm_lang$core$Task$andThen,
			function (pid) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (_p9) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$animation_frame$AnimationFrame$State,
								_p10,
								_elm_lang$core$Maybe$Just(pid),
								newTime));
					},
					_elm_lang$core$Task$sequence(
						A2(_elm_lang$core$List$map, send, _p10)));
			},
			_elm_lang$core$Process$spawn(
				A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$core$Platform$sendToSelf(router),
					_elm_lang$animation_frame$AnimationFrame$rAF)));
	});
var _elm_lang$animation_frame$AnimationFrame$Diff = function (a) {
	return {ctor: 'Diff', _0: a};
};
var _elm_lang$animation_frame$AnimationFrame$diffs = function (tagger) {
	return _elm_lang$animation_frame$AnimationFrame$subscription(
		_elm_lang$animation_frame$AnimationFrame$Diff(tagger));
};
var _elm_lang$animation_frame$AnimationFrame$Time = function (a) {
	return {ctor: 'Time', _0: a};
};
var _elm_lang$animation_frame$AnimationFrame$times = function (tagger) {
	return _elm_lang$animation_frame$AnimationFrame$subscription(
		_elm_lang$animation_frame$AnimationFrame$Time(tagger));
};
var _elm_lang$animation_frame$AnimationFrame$subMap = F2(
	function (func, sub) {
		var _p11 = sub;
		if (_p11.ctor === 'Time') {
			return _elm_lang$animation_frame$AnimationFrame$Time(
				function (_p12) {
					return func(
						_p11._0(_p12));
				});
		} else {
			return _elm_lang$animation_frame$AnimationFrame$Diff(
				function (_p13) {
					return func(
						_p11._0(_p13));
				});
		}
	});
_elm_lang$core$Native_Platform.effectManagers['AnimationFrame'] = {pkg: 'elm-lang/animation-frame', init: _elm_lang$animation_frame$AnimationFrame$init, onEffects: _elm_lang$animation_frame$AnimationFrame$onEffects, onSelfMsg: _elm_lang$animation_frame$AnimationFrame$onSelfMsg, tag: 'sub', subMap: _elm_lang$animation_frame$AnimationFrame$subMap};

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$dom$Dom$blur = _elm_lang$dom$Native_Dom.blur;
var _elm_lang$dom$Dom$focus = _elm_lang$dom$Native_Dom.focus;
var _elm_lang$dom$Dom$NotFound = function (a) {
	return {ctor: 'NotFound', _0: a};
};

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$html$Html_Keyed$node = _elm_lang$virtual_dom$VirtualDom$keyedNode;
var _elm_lang$html$Html_Keyed$ol = _elm_lang$html$Html_Keyed$node('ol');
var _elm_lang$html$Html_Keyed$ul = _elm_lang$html$Html_Keyed$node('ul');

var _elm_lang$http$Native_Http = function() {


// ENCODING AND DECODING

function encodeUri(string)
{
	return encodeURIComponent(string);
}

function decodeUri(string)
{
	try
	{
		return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
	}
	catch(e)
	{
		return _elm_lang$core$Maybe$Nothing;
	}
}


// SEND REQUEST

function toTask(request, maybeProgress)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
		});
		xhr.addEventListener('timeout', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
		});
		xhr.addEventListener('load', function() {
			callback(handleResponse(xhr, request.expect.responseToResult));
		});

		try
		{
			xhr.open(request.method, request.url, true);
		}
		catch (e)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
		}

		configureRequest(xhr, request);
		send(xhr, request.body);

		return function() { xhr.abort(); };
	});
}

function configureProgress(xhr, maybeProgress)
{
	if (maybeProgress.ctor === 'Nothing')
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
			bytes: event.loaded,
			bytesExpected: event.total
		}));
	});
}

function configureRequest(xhr, request)
{
	function setHeader(pair)
	{
		xhr.setRequestHeader(pair._0, pair._1);
	}

	A2(_elm_lang$core$List$map, setHeader, request.headers);
	xhr.responseType = request.expect.responseType;
	xhr.withCredentials = request.withCredentials;

	if (request.timeout.ctor === 'Just')
	{
		xhr.timeout = request.timeout._0;
	}
}

function send(xhr, body)
{
	switch (body.ctor)
	{
		case 'EmptyBody':
			xhr.send();
			return;

		case 'StringBody':
			xhr.setRequestHeader('Content-Type', body._0);
			xhr.send(body._1);
			return;

		case 'FormDataBody':
			xhr.send(body._0);
			return;
	}
}


// RESPONSES

function handleResponse(xhr, responseToResult)
{
	var response = toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadStatus',
			_0: response
		});
	}

	var result = responseToResult(response);

	if (result.ctor === 'Ok')
	{
		return _elm_lang$core$Native_Scheduler.succeed(result._0);
	}
	else
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadPayload',
			_0: result._0,
			_1: response
		});
	}
}

function toResponse(xhr)
{
	return {
		status: { code: xhr.status, message: xhr.statusText },
		headers: parseHeaders(xhr.getAllResponseHeaders()),
		url: xhr.responseURL,
		body: xhr.response
	};
}

function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function expectStringResponse(responseToResult)
{
	return {
		responseType: 'text',
		responseToResult: responseToResult
	};
}

function mapExpect(func, expect)
{
	return {
		responseType: expect.responseType,
		responseToResult: function(response) {
			var convertedResponse = expect.responseToResult(response);
			return A2(_elm_lang$core$Result$map, func, convertedResponse);
		}
	};
}


// BODY

function multipart(parts)
{
	var formData = new FormData();

	while (parts.ctor !== '[]')
	{
		var part = parts._0;
		formData.append(part._0, part._1);
		parts = parts._1;
	}

	return { ctor: 'FormDataBody', _0: formData };
}

return {
	toTask: F2(toTask),
	expectStringResponse: expectStringResponse,
	mapExpect: F2(mapExpect),
	multipart: multipart,
	encodeUri: encodeUri,
	decodeUri: decodeUri
};

}();

var _elm_lang$http$Http_Internal$map = F2(
	function (func, request) {
		return _elm_lang$core$Native_Utils.update(
			request,
			{
				expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
			});
	});
var _elm_lang$http$Http_Internal$RawRequest = F7(
	function (a, b, c, d, e, f, g) {
		return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
	});
var _elm_lang$http$Http_Internal$Request = function (a) {
	return {ctor: 'Request', _0: a};
};
var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
var _elm_lang$http$Http_Internal$StringBody = F2(
	function (a, b) {
		return {ctor: 'StringBody', _0: a, _1: b};
	});
var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
var _elm_lang$http$Http_Internal$Header = F2(
	function (a, b) {
		return {ctor: 'Header', _0: a, _1: b};
	});

var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
var _elm_lang$http$Http$expectJson = function (decoder) {
	return _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
		});
};
var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
	function (response) {
		return _elm_lang$core$Result$Ok(response.body);
	});
var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
var _elm_lang$http$Http$jsonBody = function (value) {
	return A2(
		_elm_lang$http$Http_Internal$StringBody,
		'application/json',
		A2(_elm_lang$core$Json_Encode$encode, 0, value));
};
var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
var _elm_lang$http$Http$post = F3(
	function (url, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'POST',
				headers: {ctor: '[]'},
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$get = F2(
	function (url, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$getString = function (url) {
	return _elm_lang$http$Http$request(
		{
			method: 'GET',
			headers: {ctor: '[]'},
			url: url,
			body: _elm_lang$http$Http$emptyBody,
			expect: _elm_lang$http$Http$expectString,
			timeout: _elm_lang$core$Maybe$Nothing,
			withCredentials: false
		});
};
var _elm_lang$http$Http$toTask = function (_p0) {
	var _p1 = _p0;
	return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
};
var _elm_lang$http$Http$send = F2(
	function (resultToMessage, request) {
		return A2(
			_elm_lang$core$Task$attempt,
			resultToMessage,
			_elm_lang$http$Http$toTask(request));
	});
var _elm_lang$http$Http$Response = F4(
	function (a, b, c, d) {
		return {url: a, status: b, headers: c, body: d};
	});
var _elm_lang$http$Http$BadPayload = F2(
	function (a, b) {
		return {ctor: 'BadPayload', _0: a, _1: b};
	});
var _elm_lang$http$Http$BadStatus = function (a) {
	return {ctor: 'BadStatus', _0: a};
};
var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
var _elm_lang$http$Http$BadUrl = function (a) {
	return {ctor: 'BadUrl', _0: a};
};
var _elm_lang$http$Http$StringPart = F2(
	function (a, b) {
		return {ctor: 'StringPart', _0: a, _1: b};
	});
var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;

var _elm_lang$keyboard$Keyboard$onSelfMsg = F3(
	function (router, _p0, state) {
		var _p1 = _p0;
		var _p2 = A2(_elm_lang$core$Dict$get, _p1.category, state);
		if (_p2.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (tagger) {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					tagger(_p1.keyCode));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p3) {
					return _elm_lang$core$Task$succeed(state);
				},
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p2._0.taggers)));
		}
	});
var _elm_lang$keyboard$Keyboard_ops = _elm_lang$keyboard$Keyboard_ops || {};
_elm_lang$keyboard$Keyboard_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p4) {
				return task2;
			},
			task1);
	});
var _elm_lang$keyboard$Keyboard$init = _elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty);
var _elm_lang$keyboard$Keyboard$categorizeHelpHelp = F2(
	function (value, maybeValues) {
		var _p5 = maybeValues;
		if (_p5.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Just(
				{
					ctor: '::',
					_0: value,
					_1: {ctor: '[]'}
				});
		} else {
			return _elm_lang$core$Maybe$Just(
				{ctor: '::', _0: value, _1: _p5._0});
		}
	});
var _elm_lang$keyboard$Keyboard$categorizeHelp = F2(
	function (subs, subDict) {
		categorizeHelp:
		while (true) {
			var _p6 = subs;
			if (_p6.ctor === '[]') {
				return subDict;
			} else {
				var _v4 = _p6._1,
					_v5 = A3(
					_elm_lang$core$Dict$update,
					_p6._0._0,
					_elm_lang$keyboard$Keyboard$categorizeHelpHelp(_p6._0._1),
					subDict);
				subs = _v4;
				subDict = _v5;
				continue categorizeHelp;
			}
		}
	});
var _elm_lang$keyboard$Keyboard$categorize = function (subs) {
	return A2(_elm_lang$keyboard$Keyboard$categorizeHelp, subs, _elm_lang$core$Dict$empty);
};
var _elm_lang$keyboard$Keyboard$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$keyboard$Keyboard$subscription = _elm_lang$core$Native_Platform.leaf('Keyboard');
var _elm_lang$keyboard$Keyboard$Watcher = F2(
	function (a, b) {
		return {taggers: a, pid: b};
	});
var _elm_lang$keyboard$Keyboard$Msg = F2(
	function (a, b) {
		return {category: a, keyCode: b};
	});
var _elm_lang$keyboard$Keyboard$onEffects = F3(
	function (router, newSubs, oldState) {
		var rightStep = F3(
			function (category, taggers, task) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (state) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$core$Dict$insert,
										category,
										A2(_elm_lang$keyboard$Keyboard$Watcher, taggers, pid),
										state));
							},
							_elm_lang$core$Process$spawn(
								A3(
									_elm_lang$dom$Dom_LowLevel$onDocument,
									category,
									_elm_lang$keyboard$Keyboard$keyCode,
									function (_p7) {
										return A2(
											_elm_lang$core$Platform$sendToSelf,
											router,
											A2(_elm_lang$keyboard$Keyboard$Msg, category, _p7));
									})));
					},
					task);
			});
		var bothStep = F4(
			function (category, _p8, taggers, task) {
				var _p9 = _p8;
				return A2(
					_elm_lang$core$Task$map,
					A2(
						_elm_lang$core$Dict$insert,
						category,
						A2(_elm_lang$keyboard$Keyboard$Watcher, taggers, _p9.pid)),
					task);
			});
		var leftStep = F3(
			function (category, _p10, task) {
				var _p11 = _p10;
				return A2(
					_elm_lang$keyboard$Keyboard_ops['&>'],
					_elm_lang$core$Process$kill(_p11.pid),
					task);
			});
		return A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			oldState,
			_elm_lang$keyboard$Keyboard$categorize(newSubs),
			_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
	});
var _elm_lang$keyboard$Keyboard$MySub = F2(
	function (a, b) {
		return {ctor: 'MySub', _0: a, _1: b};
	});
var _elm_lang$keyboard$Keyboard$presses = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keypress', tagger));
};
var _elm_lang$keyboard$Keyboard$downs = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keydown', tagger));
};
var _elm_lang$keyboard$Keyboard$ups = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keyup', tagger));
};
var _elm_lang$keyboard$Keyboard$subMap = F2(
	function (func, _p12) {
		var _p13 = _p12;
		return A2(
			_elm_lang$keyboard$Keyboard$MySub,
			_p13._0,
			function (_p14) {
				return func(
					_p13._1(_p14));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Keyboard'] = {pkg: 'elm-lang/keyboard', init: _elm_lang$keyboard$Keyboard$init, onEffects: _elm_lang$keyboard$Keyboard$onEffects, onSelfMsg: _elm_lang$keyboard$Keyboard$onSelfMsg, tag: 'sub', subMap: _elm_lang$keyboard$Keyboard$subMap};

var _elm_lang$navigation$Native_Navigation = function() {


// FAKE NAVIGATION

function go(n)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		if (n !== 0)
		{
			history.go(n);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function pushState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.pushState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function replaceState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.replaceState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}


// REAL NAVIGATION

function reloadPage(skipCache)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		document.location.reload(skipCache);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function setLocation(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		try
		{
			window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			document.location.reload(false);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


// GET LOCATION

function getLocation()
{
	var location = document.location;

	return {
		href: location.href,
		host: location.host,
		hostname: location.hostname,
		protocol: location.protocol,
		origin: location.origin,
		port_: location.port,
		pathname: location.pathname,
		search: location.search,
		hash: location.hash,
		username: location.username,
		password: location.password
	};
}


// DETECT IE11 PROBLEMS

function isInternetExplorer11()
{
	return window.navigator.userAgent.indexOf('Trident') !== -1;
}


return {
	go: go,
	setLocation: setLocation,
	reloadPage: reloadPage,
	pushState: pushState,
	replaceState: replaceState,
	getLocation: getLocation,
	isInternetExplorer11: isInternetExplorer11
};

}();

var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
var _elm_lang$navigation$Navigation$reloadPage = _elm_lang$navigation$Native_Navigation.reloadPage;
var _elm_lang$navigation$Navigation$setLocation = _elm_lang$navigation$Native_Navigation.setLocation;
var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
_elm_lang$navigation$Navigation_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return task2;
			},
			task1);
	});
var _elm_lang$navigation$Navigation$notify = F3(
	function (router, subs, location) {
		var send = function (_p1) {
			var _p2 = _p1;
			return A2(
				_elm_lang$core$Platform$sendToApp,
				router,
				_p2._0(location));
		};
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(_elm_lang$core$List$map, send, subs)),
			_elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'}));
	});
var _elm_lang$navigation$Navigation$cmdHelp = F3(
	function (router, subs, cmd) {
		var _p3 = cmd;
		switch (_p3.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$go(_p3._0);
			case 'New':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$pushState(_p3._0));
			case 'Modify':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$replaceState(_p3._0));
			case 'Visit':
				return _elm_lang$navigation$Navigation$setLocation(_p3._0);
			default:
				return _elm_lang$navigation$Navigation$reloadPage(_p3._0);
		}
	});
var _elm_lang$navigation$Navigation$killPopWatcher = function (popWatcher) {
	var _p4 = popWatcher;
	if (_p4.ctor === 'Normal') {
		return _elm_lang$core$Process$kill(_p4._0);
	} else {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Process$kill(_p4._0),
			_elm_lang$core$Process$kill(_p4._1));
	}
};
var _elm_lang$navigation$Navigation$onSelfMsg = F3(
	function (router, location, state) {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
			_elm_lang$core$Task$succeed(state));
	});
var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$Location = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$navigation$Navigation$State = F2(
	function (a, b) {
		return {subs: a, popWatcher: b};
	});
var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
	A2(
		_elm_lang$navigation$Navigation$State,
		{ctor: '[]'},
		_elm_lang$core$Maybe$Nothing));
var _elm_lang$navigation$Navigation$Reload = function (a) {
	return {ctor: 'Reload', _0: a};
};
var _elm_lang$navigation$Navigation$reload = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(false));
var _elm_lang$navigation$Navigation$reloadAndSkipCache = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(true));
var _elm_lang$navigation$Navigation$Visit = function (a) {
	return {ctor: 'Visit', _0: a};
};
var _elm_lang$navigation$Navigation$load = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Visit(url));
};
var _elm_lang$navigation$Navigation$Modify = function (a) {
	return {ctor: 'Modify', _0: a};
};
var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Modify(url));
};
var _elm_lang$navigation$Navigation$New = function (a) {
	return {ctor: 'New', _0: a};
};
var _elm_lang$navigation$Navigation$newUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$New(url));
};
var _elm_lang$navigation$Navigation$Jump = function (a) {
	return {ctor: 'Jump', _0: a};
};
var _elm_lang$navigation$Navigation$back = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(0 - n));
};
var _elm_lang$navigation$Navigation$forward = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(n));
};
var _elm_lang$navigation$Navigation$cmdMap = F2(
	function (_p5, myCmd) {
		var _p6 = myCmd;
		switch (_p6.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$Jump(_p6._0);
			case 'New':
				return _elm_lang$navigation$Navigation$New(_p6._0);
			case 'Modify':
				return _elm_lang$navigation$Navigation$Modify(_p6._0);
			case 'Visit':
				return _elm_lang$navigation$Navigation$Visit(_p6._0);
			default:
				return _elm_lang$navigation$Navigation$Reload(_p6._0);
		}
	});
var _elm_lang$navigation$Navigation$Monitor = function (a) {
	return {ctor: 'Monitor', _0: a};
};
var _elm_lang$navigation$Navigation$program = F2(
	function (locationToMessage, stuff) {
		var init = stuff.init(
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$program(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$programWithFlags = F2(
	function (locationToMessage, stuff) {
		var init = function (flags) {
			return A2(
				stuff.init,
				flags,
				_elm_lang$navigation$Native_Navigation.getLocation(
					{ctor: '_Tuple0'}));
		};
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$programWithFlags(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$subMap = F2(
	function (func, _p7) {
		var _p8 = _p7;
		return _elm_lang$navigation$Navigation$Monitor(
			function (_p9) {
				return func(
					_p8._0(_p9));
			});
	});
var _elm_lang$navigation$Navigation$InternetExplorer = F2(
	function (a, b) {
		return {ctor: 'InternetExplorer', _0: a, _1: b};
	});
var _elm_lang$navigation$Navigation$Normal = function (a) {
	return {ctor: 'Normal', _0: a};
};
var _elm_lang$navigation$Navigation$spawnPopWatcher = function (router) {
	var reportLocation = function (_p10) {
		return A2(
			_elm_lang$core$Platform$sendToSelf,
			router,
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
	};
	return _elm_lang$navigation$Native_Navigation.isInternetExplorer11(
		{ctor: '_Tuple0'}) ? A3(
		_elm_lang$core$Task$map2,
		_elm_lang$navigation$Navigation$InternetExplorer,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)),
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'hashchange', _elm_lang$core$Json_Decode$value, reportLocation))) : A2(
		_elm_lang$core$Task$map,
		_elm_lang$navigation$Navigation$Normal,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)));
};
var _elm_lang$navigation$Navigation$onEffects = F4(
	function (router, cmds, subs, _p11) {
		var _p12 = _p11;
		var _p15 = _p12.popWatcher;
		var stepState = function () {
			var _p13 = {ctor: '_Tuple2', _0: subs, _1: _p15};
			_v6_2:
			do {
				if (_p13._0.ctor === '[]') {
					if (_p13._1.ctor === 'Just') {
						return A2(
							_elm_lang$navigation$Navigation_ops['&>'],
							_elm_lang$navigation$Navigation$killPopWatcher(_p13._1._0),
							_elm_lang$core$Task$succeed(
								A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
					} else {
						break _v6_2;
					}
				} else {
					if (_p13._1.ctor === 'Nothing') {
						return A2(
							_elm_lang$core$Task$map,
							function (_p14) {
								return A2(
									_elm_lang$navigation$Navigation$State,
									subs,
									_elm_lang$core$Maybe$Just(_p14));
							},
							_elm_lang$navigation$Navigation$spawnPopWatcher(router));
					} else {
						break _v6_2;
					}
				}
			} while(false);
			return _elm_lang$core$Task$succeed(
				A2(_elm_lang$navigation$Navigation$State, subs, _p15));
		}();
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
					cmds)),
			stepState);
	});
_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};

var _elm_lang$websocket$Native_WebSocket = function() {

function open(url, settings)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		try
		{
			var socket = new WebSocket(url);
			socket.elm_web_socket = true;
		}
		catch(err)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail({
				ctor: err.name === 'SecurityError' ? 'BadSecurity' : 'BadArgs',
				_0: err.message
			}));
		}

		socket.addEventListener("open", function(event) {
			callback(_elm_lang$core$Native_Scheduler.succeed(socket));
		});

		socket.addEventListener("message", function(event) {
			_elm_lang$core$Native_Scheduler.rawSpawn(A2(settings.onMessage, socket, event.data));
		});

		socket.addEventListener("close", function(event) {
			_elm_lang$core$Native_Scheduler.rawSpawn(settings.onClose({
				code: event.code,
				reason: event.reason,
				wasClean: event.wasClean
			}));
		});

		return function()
		{
			if (socket && socket.close)
			{
				socket.close();
			}
		};
	});
}

function send(socket, string)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var result =
			socket.readyState === WebSocket.OPEN
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just({ ctor: 'NotOpen' });

		try
		{
			socket.send(string);
		}
		catch(err)
		{
			result = _elm_lang$core$Maybe$Just({ ctor: 'BadString' });
		}

		callback(_elm_lang$core$Native_Scheduler.succeed(result));
	});
}

function close(code, reason, socket)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		try
		{
			socket.close(code, reason);
		}
		catch(err)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail(_elm_lang$core$Maybe$Just({
				ctor: err.name === 'SyntaxError' ? 'BadReason' : 'BadCode'
			})));
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Maybe$Nothing));
	});
}

function bytesQueued(socket)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		callback(_elm_lang$core$Native_Scheduler.succeed(socket.bufferedAmount));
	});
}

return {
	open: F2(open),
	send: F2(send),
	close: F3(close),
	bytesQueued: bytesQueued
};

}();

var _elm_lang$websocket$WebSocket_LowLevel$bytesQueued = _elm_lang$websocket$Native_WebSocket.bytesQueued;
var _elm_lang$websocket$WebSocket_LowLevel$send = _elm_lang$websocket$Native_WebSocket.send;
var _elm_lang$websocket$WebSocket_LowLevel$closeWith = _elm_lang$websocket$Native_WebSocket.close;
var _elm_lang$websocket$WebSocket_LowLevel$close = function (socket) {
	return A2(
		_elm_lang$core$Task$map,
		_elm_lang$core$Basics$always(
			{ctor: '_Tuple0'}),
		A3(_elm_lang$websocket$WebSocket_LowLevel$closeWith, 1000, '', socket));
};
var _elm_lang$websocket$WebSocket_LowLevel$open = _elm_lang$websocket$Native_WebSocket.open;
var _elm_lang$websocket$WebSocket_LowLevel$Settings = F2(
	function (a, b) {
		return {onMessage: a, onClose: b};
	});
var _elm_lang$websocket$WebSocket_LowLevel$WebSocket = {ctor: 'WebSocket'};
var _elm_lang$websocket$WebSocket_LowLevel$BadArgs = {ctor: 'BadArgs'};
var _elm_lang$websocket$WebSocket_LowLevel$BadSecurity = {ctor: 'BadSecurity'};
var _elm_lang$websocket$WebSocket_LowLevel$BadReason = {ctor: 'BadReason'};
var _elm_lang$websocket$WebSocket_LowLevel$BadCode = {ctor: 'BadCode'};
var _elm_lang$websocket$WebSocket_LowLevel$BadString = {ctor: 'BadString'};
var _elm_lang$websocket$WebSocket_LowLevel$NotOpen = {ctor: 'NotOpen'};

var _elm_lang$websocket$WebSocket$closeConnection = function (connection) {
	var _p0 = connection;
	if (_p0.ctor === 'Opening') {
		return _elm_lang$core$Process$kill(_p0._1);
	} else {
		return _elm_lang$websocket$WebSocket_LowLevel$close(_p0._0);
	}
};
var _elm_lang$websocket$WebSocket$after = function (backoff) {
	return (_elm_lang$core$Native_Utils.cmp(backoff, 1) < 0) ? _elm_lang$core$Task$succeed(
		{ctor: '_Tuple0'}) : _elm_lang$core$Process$sleep(
		_elm_lang$core$Basics$toFloat(
			10 * Math.pow(2, backoff)));
};
var _elm_lang$websocket$WebSocket$removeQueue = F2(
	function (name, state) {
		return _elm_lang$core$Native_Utils.update(
			state,
			{
				queues: A2(_elm_lang$core$Dict$remove, name, state.queues)
			});
	});
var _elm_lang$websocket$WebSocket$updateSocket = F3(
	function (name, connection, state) {
		return _elm_lang$core$Native_Utils.update(
			state,
			{
				sockets: A3(_elm_lang$core$Dict$insert, name, connection, state.sockets)
			});
	});
var _elm_lang$websocket$WebSocket$add = F2(
	function (value, maybeList) {
		var _p1 = maybeList;
		if (_p1.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Just(
				{
					ctor: '::',
					_0: value,
					_1: {ctor: '[]'}
				});
		} else {
			return _elm_lang$core$Maybe$Just(
				{ctor: '::', _0: value, _1: _p1._0});
		}
	});
var _elm_lang$websocket$WebSocket$buildSubDict = F2(
	function (subs, dict) {
		buildSubDict:
		while (true) {
			var _p2 = subs;
			if (_p2.ctor === '[]') {
				return dict;
			} else {
				if (_p2._0.ctor === 'Listen') {
					var _v3 = _p2._1,
						_v4 = A3(
						_elm_lang$core$Dict$update,
						_p2._0._0,
						_elm_lang$websocket$WebSocket$add(_p2._0._1),
						dict);
					subs = _v3;
					dict = _v4;
					continue buildSubDict;
				} else {
					var _v5 = _p2._1,
						_v6 = A3(
						_elm_lang$core$Dict$update,
						_p2._0._0,
						function (_p3) {
							return _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$core$Maybe$withDefault,
									{ctor: '[]'},
									_p3));
						},
						dict);
					subs = _v5;
					dict = _v6;
					continue buildSubDict;
				}
			}
		}
	});
var _elm_lang$websocket$WebSocket_ops = _elm_lang$websocket$WebSocket_ops || {};
_elm_lang$websocket$WebSocket_ops['&>'] = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p4) {
				return t2;
			},
			t1);
	});
var _elm_lang$websocket$WebSocket$sendMessagesHelp = F3(
	function (cmds, socketsDict, queuesDict) {
		sendMessagesHelp:
		while (true) {
			var _p5 = cmds;
			if (_p5.ctor === '[]') {
				return _elm_lang$core$Task$succeed(queuesDict);
			} else {
				var _p9 = _p5._1;
				var _p8 = _p5._0._0;
				var _p7 = _p5._0._1;
				var _p6 = A2(_elm_lang$core$Dict$get, _p8, socketsDict);
				if ((_p6.ctor === 'Just') && (_p6._0.ctor === 'Connected')) {
					return A2(
						_elm_lang$websocket$WebSocket_ops['&>'],
						A2(_elm_lang$websocket$WebSocket_LowLevel$send, _p6._0._0, _p7),
						A3(_elm_lang$websocket$WebSocket$sendMessagesHelp, _p9, socketsDict, queuesDict));
				} else {
					var _v9 = _p9,
						_v10 = socketsDict,
						_v11 = A3(
						_elm_lang$core$Dict$update,
						_p8,
						_elm_lang$websocket$WebSocket$add(_p7),
						queuesDict);
					cmds = _v9;
					socketsDict = _v10;
					queuesDict = _v11;
					continue sendMessagesHelp;
				}
			}
		}
	});
var _elm_lang$websocket$WebSocket$subscription = _elm_lang$core$Native_Platform.leaf('WebSocket');
var _elm_lang$websocket$WebSocket$command = _elm_lang$core$Native_Platform.leaf('WebSocket');
var _elm_lang$websocket$WebSocket$State = F3(
	function (a, b, c) {
		return {sockets: a, queues: b, subs: c};
	});
var _elm_lang$websocket$WebSocket$init = _elm_lang$core$Task$succeed(
	A3(_elm_lang$websocket$WebSocket$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$websocket$WebSocket$Send = F2(
	function (a, b) {
		return {ctor: 'Send', _0: a, _1: b};
	});
var _elm_lang$websocket$WebSocket$send = F2(
	function (url, message) {
		return _elm_lang$websocket$WebSocket$command(
			A2(_elm_lang$websocket$WebSocket$Send, url, message));
	});
var _elm_lang$websocket$WebSocket$cmdMap = F2(
	function (_p11, _p10) {
		var _p12 = _p10;
		return A2(_elm_lang$websocket$WebSocket$Send, _p12._0, _p12._1);
	});
var _elm_lang$websocket$WebSocket$KeepAlive = function (a) {
	return {ctor: 'KeepAlive', _0: a};
};
var _elm_lang$websocket$WebSocket$keepAlive = function (url) {
	return _elm_lang$websocket$WebSocket$subscription(
		_elm_lang$websocket$WebSocket$KeepAlive(url));
};
var _elm_lang$websocket$WebSocket$Listen = F2(
	function (a, b) {
		return {ctor: 'Listen', _0: a, _1: b};
	});
var _elm_lang$websocket$WebSocket$listen = F2(
	function (url, tagger) {
		return _elm_lang$websocket$WebSocket$subscription(
			A2(_elm_lang$websocket$WebSocket$Listen, url, tagger));
	});
var _elm_lang$websocket$WebSocket$subMap = F2(
	function (func, sub) {
		var _p13 = sub;
		if (_p13.ctor === 'Listen') {
			return A2(
				_elm_lang$websocket$WebSocket$Listen,
				_p13._0,
				function (_p14) {
					return func(
						_p13._1(_p14));
				});
		} else {
			return _elm_lang$websocket$WebSocket$KeepAlive(_p13._0);
		}
	});
var _elm_lang$websocket$WebSocket$Connected = function (a) {
	return {ctor: 'Connected', _0: a};
};
var _elm_lang$websocket$WebSocket$Opening = F2(
	function (a, b) {
		return {ctor: 'Opening', _0: a, _1: b};
	});
var _elm_lang$websocket$WebSocket$BadOpen = function (a) {
	return {ctor: 'BadOpen', _0: a};
};
var _elm_lang$websocket$WebSocket$GoodOpen = F2(
	function (a, b) {
		return {ctor: 'GoodOpen', _0: a, _1: b};
	});
var _elm_lang$websocket$WebSocket$Die = function (a) {
	return {ctor: 'Die', _0: a};
};
var _elm_lang$websocket$WebSocket$Receive = F2(
	function (a, b) {
		return {ctor: 'Receive', _0: a, _1: b};
	});
var _elm_lang$websocket$WebSocket$open = F2(
	function (name, router) {
		return A2(
			_elm_lang$websocket$WebSocket_LowLevel$open,
			name,
			{
				onMessage: F2(
					function (_p15, msg) {
						return A2(
							_elm_lang$core$Platform$sendToSelf,
							router,
							A2(_elm_lang$websocket$WebSocket$Receive, name, msg));
					}),
				onClose: function (details) {
					return A2(
						_elm_lang$core$Platform$sendToSelf,
						router,
						_elm_lang$websocket$WebSocket$Die(name));
				}
			});
	});
var _elm_lang$websocket$WebSocket$attemptOpen = F3(
	function (router, backoff, name) {
		var badOpen = function (_p16) {
			return A2(
				_elm_lang$core$Platform$sendToSelf,
				router,
				_elm_lang$websocket$WebSocket$BadOpen(name));
		};
		var goodOpen = function (ws) {
			return A2(
				_elm_lang$core$Platform$sendToSelf,
				router,
				A2(_elm_lang$websocket$WebSocket$GoodOpen, name, ws));
		};
		var actuallyAttemptOpen = A2(
			_elm_lang$core$Task$onError,
			badOpen,
			A2(
				_elm_lang$core$Task$andThen,
				goodOpen,
				A2(_elm_lang$websocket$WebSocket$open, name, router)));
		return _elm_lang$core$Process$spawn(
			A2(
				_elm_lang$websocket$WebSocket_ops['&>'],
				_elm_lang$websocket$WebSocket$after(backoff),
				actuallyAttemptOpen));
	});
var _elm_lang$websocket$WebSocket$onEffects = F4(
	function (router, cmds, subs, state) {
		var newSubs = A2(_elm_lang$websocket$WebSocket$buildSubDict, subs, _elm_lang$core$Dict$empty);
		var cleanup = function (newQueues) {
			var rightStep = F3(
				function (name, connection, getNewSockets) {
					return A2(
						_elm_lang$websocket$WebSocket_ops['&>'],
						_elm_lang$websocket$WebSocket$closeConnection(connection),
						getNewSockets);
				});
			var bothStep = F4(
				function (name, _p17, connection, getNewSockets) {
					return A2(
						_elm_lang$core$Task$map,
						A2(_elm_lang$core$Dict$insert, name, connection),
						getNewSockets);
				});
			var leftStep = F3(
				function (name, _p18, getNewSockets) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (newSockets) {
							return A2(
								_elm_lang$core$Task$andThen,
								function (pid) {
									return _elm_lang$core$Task$succeed(
										A3(
											_elm_lang$core$Dict$insert,
											name,
											A2(_elm_lang$websocket$WebSocket$Opening, 0, pid),
											newSockets));
								},
								A3(_elm_lang$websocket$WebSocket$attemptOpen, router, 0, name));
						},
						getNewSockets);
				});
			var newEntries = A2(
				_elm_lang$core$Dict$union,
				newQueues,
				A2(
					_elm_lang$core$Dict$map,
					F2(
						function (k, v) {
							return {ctor: '[]'};
						}),
					newSubs));
			var collectNewSockets = A6(
				_elm_lang$core$Dict$merge,
				leftStep,
				bothStep,
				rightStep,
				newEntries,
				state.sockets,
				_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
			return A2(
				_elm_lang$core$Task$andThen,
				function (newSockets) {
					return _elm_lang$core$Task$succeed(
						A3(_elm_lang$websocket$WebSocket$State, newSockets, newQueues, newSubs));
				},
				collectNewSockets);
		};
		var sendMessagesGetNewQueues = A3(_elm_lang$websocket$WebSocket$sendMessagesHelp, cmds, state.sockets, state.queues);
		return A2(_elm_lang$core$Task$andThen, cleanup, sendMessagesGetNewQueues);
	});
var _elm_lang$websocket$WebSocket$onSelfMsg = F3(
	function (router, selfMsg, state) {
		var _p19 = selfMsg;
		switch (_p19.ctor) {
			case 'Receive':
				var sends = A2(
					_elm_lang$core$List$map,
					function (tagger) {
						return A2(
							_elm_lang$core$Platform$sendToApp,
							router,
							tagger(_p19._1));
					},
					A2(
						_elm_lang$core$Maybe$withDefault,
						{ctor: '[]'},
						A2(_elm_lang$core$Dict$get, _p19._0, state.subs)));
				return A2(
					_elm_lang$websocket$WebSocket_ops['&>'],
					_elm_lang$core$Task$sequence(sends),
					_elm_lang$core$Task$succeed(state));
			case 'Die':
				var _p21 = _p19._0;
				var _p20 = A2(_elm_lang$core$Dict$get, _p21, state.sockets);
				if (_p20.ctor === 'Nothing') {
					return _elm_lang$core$Task$succeed(state);
				} else {
					return A2(
						_elm_lang$core$Task$andThen,
						function (pid) {
							return _elm_lang$core$Task$succeed(
								A3(
									_elm_lang$websocket$WebSocket$updateSocket,
									_p21,
									A2(_elm_lang$websocket$WebSocket$Opening, 0, pid),
									state));
						},
						A3(_elm_lang$websocket$WebSocket$attemptOpen, router, 0, _p21));
				}
			case 'GoodOpen':
				var _p24 = _p19._1;
				var _p23 = _p19._0;
				var _p22 = A2(_elm_lang$core$Dict$get, _p23, state.queues);
				if (_p22.ctor === 'Nothing') {
					return _elm_lang$core$Task$succeed(
						A3(
							_elm_lang$websocket$WebSocket$updateSocket,
							_p23,
							_elm_lang$websocket$WebSocket$Connected(_p24),
							state));
				} else {
					return A3(
						_elm_lang$core$List$foldl,
						F2(
							function (msg, task) {
								return A2(
									_elm_lang$websocket$WebSocket_ops['&>'],
									A2(_elm_lang$websocket$WebSocket_LowLevel$send, _p24, msg),
									task);
							}),
						_elm_lang$core$Task$succeed(
							A2(
								_elm_lang$websocket$WebSocket$removeQueue,
								_p23,
								A3(
									_elm_lang$websocket$WebSocket$updateSocket,
									_p23,
									_elm_lang$websocket$WebSocket$Connected(_p24),
									state))),
						_p22._0);
				}
			default:
				var _p27 = _p19._0;
				var _p25 = A2(_elm_lang$core$Dict$get, _p27, state.sockets);
				if (_p25.ctor === 'Nothing') {
					return _elm_lang$core$Task$succeed(state);
				} else {
					if (_p25._0.ctor === 'Opening') {
						var _p26 = _p25._0._0;
						return A2(
							_elm_lang$core$Task$andThen,
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$websocket$WebSocket$updateSocket,
										_p27,
										A2(_elm_lang$websocket$WebSocket$Opening, _p26 + 1, pid),
										state));
							},
							A3(_elm_lang$websocket$WebSocket$attemptOpen, router, _p26 + 1, _p27));
					} else {
						return _elm_lang$core$Task$succeed(state);
					}
				}
		}
	});
_elm_lang$core$Native_Platform.effectManagers['WebSocket'] = {pkg: 'elm-lang/websocket', init: _elm_lang$websocket$WebSocket$init, onEffects: _elm_lang$websocket$WebSocket$onEffects, onSelfMsg: _elm_lang$websocket$WebSocket$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$websocket$WebSocket$cmdMap, subMap: _elm_lang$websocket$WebSocket$subMap};

var _evancz$url_parser$UrlParser$toKeyValuePair = function (segment) {
	var _p0 = A2(_elm_lang$core$String$split, '=', segment);
	if (((_p0.ctor === '::') && (_p0._1.ctor === '::')) && (_p0._1._1.ctor === '[]')) {
		return A3(
			_elm_lang$core$Maybe$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			_elm_lang$http$Http$decodeUri(_p0._0),
			_elm_lang$http$Http$decodeUri(_p0._1._0));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _evancz$url_parser$UrlParser$parseParams = function (queryString) {
	return _elm_lang$core$Dict$fromList(
		A2(
			_elm_lang$core$List$filterMap,
			_evancz$url_parser$UrlParser$toKeyValuePair,
			A2(
				_elm_lang$core$String$split,
				'&',
				A2(_elm_lang$core$String$dropLeft, 1, queryString))));
};
var _evancz$url_parser$UrlParser$splitUrl = function (url) {
	var _p1 = A2(_elm_lang$core$String$split, '/', url);
	if ((_p1.ctor === '::') && (_p1._0 === '')) {
		return _p1._1;
	} else {
		return _p1;
	}
};
var _evancz$url_parser$UrlParser$parseHelp = function (states) {
	parseHelp:
	while (true) {
		var _p2 = states;
		if (_p2.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p4 = _p2._0;
			var _p3 = _p4.unvisited;
			if (_p3.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p4.value);
			} else {
				if ((_p3._0 === '') && (_p3._1.ctor === '[]')) {
					return _elm_lang$core$Maybe$Just(_p4.value);
				} else {
					var _v4 = _p2._1;
					states = _v4;
					continue parseHelp;
				}
			}
		}
	}
};
var _evancz$url_parser$UrlParser$parse = F3(
	function (_p5, url, params) {
		var _p6 = _p5;
		return _evancz$url_parser$UrlParser$parseHelp(
			_p6._0(
				{
					visited: {ctor: '[]'},
					unvisited: _evancz$url_parser$UrlParser$splitUrl(url),
					params: params,
					value: _elm_lang$core$Basics$identity
				}));
	});
var _evancz$url_parser$UrlParser$parseHash = F2(
	function (parser, location) {
		return A3(
			_evancz$url_parser$UrlParser$parse,
			parser,
			A2(_elm_lang$core$String$dropLeft, 1, location.hash),
			_evancz$url_parser$UrlParser$parseParams(location.search));
	});
var _evancz$url_parser$UrlParser$parsePath = F2(
	function (parser, location) {
		return A3(
			_evancz$url_parser$UrlParser$parse,
			parser,
			location.pathname,
			_evancz$url_parser$UrlParser$parseParams(location.search));
	});
var _evancz$url_parser$UrlParser$intParamHelp = function (maybeValue) {
	var _p7 = maybeValue;
	if (_p7.ctor === 'Nothing') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Result$toMaybe(
			_elm_lang$core$String$toInt(_p7._0));
	}
};
var _evancz$url_parser$UrlParser$mapHelp = F2(
	function (func, _p8) {
		var _p9 = _p8;
		return {
			visited: _p9.visited,
			unvisited: _p9.unvisited,
			params: _p9.params,
			value: func(_p9.value)
		};
	});
var _evancz$url_parser$UrlParser$State = F4(
	function (a, b, c, d) {
		return {visited: a, unvisited: b, params: c, value: d};
	});
var _evancz$url_parser$UrlParser$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _evancz$url_parser$UrlParser$s = function (str) {
	return _evancz$url_parser$UrlParser$Parser(
		function (_p10) {
			var _p11 = _p10;
			var _p12 = _p11.unvisited;
			if (_p12.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p13 = _p12._0;
				return _elm_lang$core$Native_Utils.eq(_p13, str) ? {
					ctor: '::',
					_0: A4(
						_evancz$url_parser$UrlParser$State,
						{ctor: '::', _0: _p13, _1: _p11.visited},
						_p12._1,
						_p11.params,
						_p11.value),
					_1: {ctor: '[]'}
				} : {ctor: '[]'};
			}
		});
};
var _evancz$url_parser$UrlParser$custom = F2(
	function (tipe, stringToSomething) {
		return _evancz$url_parser$UrlParser$Parser(
			function (_p14) {
				var _p15 = _p14;
				var _p16 = _p15.unvisited;
				if (_p16.ctor === '[]') {
					return {ctor: '[]'};
				} else {
					var _p18 = _p16._0;
					var _p17 = stringToSomething(_p18);
					if (_p17.ctor === 'Ok') {
						return {
							ctor: '::',
							_0: A4(
								_evancz$url_parser$UrlParser$State,
								{ctor: '::', _0: _p18, _1: _p15.visited},
								_p16._1,
								_p15.params,
								_p15.value(_p17._0)),
							_1: {ctor: '[]'}
						};
					} else {
						return {ctor: '[]'};
					}
				}
			});
	});
var _evancz$url_parser$UrlParser$string = A2(_evancz$url_parser$UrlParser$custom, 'STRING', _elm_lang$core$Result$Ok);
var _evancz$url_parser$UrlParser$int = A2(_evancz$url_parser$UrlParser$custom, 'NUMBER', _elm_lang$core$String$toInt);
var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
_evancz$url_parser$UrlParser_ops['</>'] = F2(
	function (_p20, _p19) {
		var _p21 = _p20;
		var _p22 = _p19;
		return _evancz$url_parser$UrlParser$Parser(
			function (state) {
				return A2(
					_elm_lang$core$List$concatMap,
					_p22._0,
					_p21._0(state));
			});
	});
var _evancz$url_parser$UrlParser$map = F2(
	function (subValue, _p23) {
		var _p24 = _p23;
		return _evancz$url_parser$UrlParser$Parser(
			function (_p25) {
				var _p26 = _p25;
				return A2(
					_elm_lang$core$List$map,
					_evancz$url_parser$UrlParser$mapHelp(_p26.value),
					_p24._0(
						{visited: _p26.visited, unvisited: _p26.unvisited, params: _p26.params, value: subValue}));
			});
	});
var _evancz$url_parser$UrlParser$oneOf = function (parsers) {
	return _evancz$url_parser$UrlParser$Parser(
		function (state) {
			return A2(
				_elm_lang$core$List$concatMap,
				function (_p27) {
					var _p28 = _p27;
					return _p28._0(state);
				},
				parsers);
		});
};
var _evancz$url_parser$UrlParser$top = _evancz$url_parser$UrlParser$Parser(
	function (state) {
		return {
			ctor: '::',
			_0: state,
			_1: {ctor: '[]'}
		};
	});
var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
_evancz$url_parser$UrlParser_ops['<?>'] = F2(
	function (_p30, _p29) {
		var _p31 = _p30;
		var _p32 = _p29;
		return _evancz$url_parser$UrlParser$Parser(
			function (state) {
				return A2(
					_elm_lang$core$List$concatMap,
					_p32._0,
					_p31._0(state));
			});
	});
var _evancz$url_parser$UrlParser$QueryParser = function (a) {
	return {ctor: 'QueryParser', _0: a};
};
var _evancz$url_parser$UrlParser$customParam = F2(
	function (key, func) {
		return _evancz$url_parser$UrlParser$QueryParser(
			function (_p33) {
				var _p34 = _p33;
				var _p35 = _p34.params;
				return {
					ctor: '::',
					_0: A4(
						_evancz$url_parser$UrlParser$State,
						_p34.visited,
						_p34.unvisited,
						_p35,
						_p34.value(
							func(
								A2(_elm_lang$core$Dict$get, key, _p35)))),
					_1: {ctor: '[]'}
				};
			});
	});
var _evancz$url_parser$UrlParser$stringParam = function (name) {
	return A2(_evancz$url_parser$UrlParser$customParam, name, _elm_lang$core$Basics$identity);
};
var _evancz$url_parser$UrlParser$intParam = function (name) {
	return A2(_evancz$url_parser$UrlParser$customParam, name, _evancz$url_parser$UrlParser$intParamHelp);
};

var _rundis$elm_bootstrap$Bootstrap_General_Internal$screenSizeOption = function (size) {
	var _p0 = size;
	switch (_p0.ctor) {
		case 'XS':
			return _elm_lang$core$Maybe$Nothing;
		case 'SM':
			return _elm_lang$core$Maybe$Just('sm');
		case 'MD':
			return _elm_lang$core$Maybe$Just('md');
		case 'LG':
			return _elm_lang$core$Maybe$Just('lg');
		default:
			return _elm_lang$core$Maybe$Just('xl');
	}
};
var _rundis$elm_bootstrap$Bootstrap_General_Internal$horizontalAlignOption = function (align) {
	var _p1 = align;
	switch (_p1.ctor) {
		case 'Left':
			return 'start';
		case 'Center':
			return 'center';
		case 'Right':
			return 'end';
		case 'Around':
			return 'around';
		default:
			return 'between';
	}
};
var _rundis$elm_bootstrap$Bootstrap_General_Internal$hAlignClass = function (_p2) {
	var _p3 = _p2;
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'justify-content-',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					A2(
						_elm_lang$core$Maybe$map,
						function (v) {
							return A2(_elm_lang$core$Basics_ops['++'], v, '-');
						},
						_rundis$elm_bootstrap$Bootstrap_General_Internal$screenSizeOption(_p3.screenSize))),
				_rundis$elm_bootstrap$Bootstrap_General_Internal$horizontalAlignOption(_p3.align))));
};
var _rundis$elm_bootstrap$Bootstrap_General_Internal$HAlign = F2(
	function (a, b) {
		return {screenSize: a, align: b};
	});
var _rundis$elm_bootstrap$Bootstrap_General_Internal$Between = {ctor: 'Between'};
var _rundis$elm_bootstrap$Bootstrap_General_Internal$Around = {ctor: 'Around'};
var _rundis$elm_bootstrap$Bootstrap_General_Internal$Right = {ctor: 'Right'};
var _rundis$elm_bootstrap$Bootstrap_General_Internal$Center = {ctor: 'Center'};
var _rundis$elm_bootstrap$Bootstrap_General_Internal$Left = {ctor: 'Left'};
var _rundis$elm_bootstrap$Bootstrap_General_Internal$XL = {ctor: 'XL'};
var _rundis$elm_bootstrap$Bootstrap_General_Internal$LG = {ctor: 'LG'};
var _rundis$elm_bootstrap$Bootstrap_General_Internal$MD = {ctor: 'MD'};
var _rundis$elm_bootstrap$Bootstrap_General_Internal$SM = {ctor: 'SM'};
var _rundis$elm_bootstrap$Bootstrap_General_Internal$XS = {ctor: 'XS'};

var _rundis$elm_bootstrap$Bootstrap_Internal_Role$toClass = F2(
	function (prefix, role) {
		return _elm_lang$html$Html_Attributes$class(
			A2(
				_elm_lang$core$Basics_ops['++'],
				prefix,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'-',
					function () {
						var _p0 = role;
						switch (_p0.ctor) {
							case 'Primary':
								return 'primary';
							case 'Secondary':
								return 'secondary';
							case 'Success':
								return 'success';
							case 'Info':
								return 'info';
							case 'Warning':
								return 'warning';
							case 'Danger':
								return 'danger';
							case 'Light':
								return 'light';
							default:
								return 'dark';
						}
					}())));
	});
var _rundis$elm_bootstrap$Bootstrap_Internal_Role$Dark = {ctor: 'Dark'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Role$Light = {ctor: 'Light'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Role$Danger = {ctor: 'Danger'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Role$Warning = {ctor: 'Warning'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Role$Info = {ctor: 'Info'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Role$Success = {ctor: 'Success'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Role$Secondary = {ctor: 'Secondary'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Role$Primary = {ctor: 'Primary'};

var _rundis$elm_bootstrap$Bootstrap_Internal_Text$textColorClass = function (color) {
	var _p0 = color;
	if (_p0.ctor === 'White') {
		return _elm_lang$html$Html_Attributes$class('text-white');
	} else {
		return A2(_rundis$elm_bootstrap$Bootstrap_Internal_Role$toClass, 'text', _p0._0);
	}
};
var _rundis$elm_bootstrap$Bootstrap_Internal_Text$textAlignDirOption = function (dir) {
	var _p1 = dir;
	switch (_p1.ctor) {
		case 'Center':
			return 'center';
		case 'Left':
			return 'left';
		default:
			return 'right';
	}
};
var _rundis$elm_bootstrap$Bootstrap_Internal_Text$textAlignClass = function (_p2) {
	var _p3 = _p2;
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'text',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$Maybe$withDefault,
					'-',
					A2(
						_elm_lang$core$Maybe$map,
						function (s) {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'-',
								A2(_elm_lang$core$Basics_ops['++'], s, '-'));
						},
						_rundis$elm_bootstrap$Bootstrap_General_Internal$screenSizeOption(_p3.size))),
				_rundis$elm_bootstrap$Bootstrap_Internal_Text$textAlignDirOption(_p3.dir))));
};
var _rundis$elm_bootstrap$Bootstrap_Internal_Text$HAlign = F2(
	function (a, b) {
		return {dir: a, size: b};
	});
var _rundis$elm_bootstrap$Bootstrap_Internal_Text$Right = {ctor: 'Right'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Text$Center = {ctor: 'Center'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Text$Left = {ctor: 'Left'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Text$White = {ctor: 'White'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Text$Role = function (a) {
	return {ctor: 'Role', _0: a};
};

var _rundis$elm_bootstrap$Bootstrap_Text$dark = _rundis$elm_bootstrap$Bootstrap_Internal_Text$Role(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Dark);
var _rundis$elm_bootstrap$Bootstrap_Text$light = _rundis$elm_bootstrap$Bootstrap_Internal_Text$Role(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Light);
var _rundis$elm_bootstrap$Bootstrap_Text$danger = _rundis$elm_bootstrap$Bootstrap_Internal_Text$Role(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Danger);
var _rundis$elm_bootstrap$Bootstrap_Text$warning = _rundis$elm_bootstrap$Bootstrap_Internal_Text$Role(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Warning);
var _rundis$elm_bootstrap$Bootstrap_Text$info = _rundis$elm_bootstrap$Bootstrap_Internal_Text$Role(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Info);
var _rundis$elm_bootstrap$Bootstrap_Text$success = _rundis$elm_bootstrap$Bootstrap_Internal_Text$Role(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Success);
var _rundis$elm_bootstrap$Bootstrap_Text$secondary = _rundis$elm_bootstrap$Bootstrap_Internal_Text$Role(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Secondary);
var _rundis$elm_bootstrap$Bootstrap_Text$primary = _rundis$elm_bootstrap$Bootstrap_Internal_Text$Role(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Primary);
var _rundis$elm_bootstrap$Bootstrap_Text$white = _rundis$elm_bootstrap$Bootstrap_Internal_Text$White;
var _rundis$elm_bootstrap$Bootstrap_Text$alignXl = function (dir) {
	return {dir: dir, size: _rundis$elm_bootstrap$Bootstrap_General_Internal$XL};
};
var _rundis$elm_bootstrap$Bootstrap_Text$alignXlRight = _rundis$elm_bootstrap$Bootstrap_Text$alignXl(_rundis$elm_bootstrap$Bootstrap_Internal_Text$Right);
var _rundis$elm_bootstrap$Bootstrap_Text$alignXlCenter = _rundis$elm_bootstrap$Bootstrap_Text$alignXl(_rundis$elm_bootstrap$Bootstrap_Internal_Text$Center);
var _rundis$elm_bootstrap$Bootstrap_Text$alignXlLeft = _rundis$elm_bootstrap$Bootstrap_Text$alignXl(_rundis$elm_bootstrap$Bootstrap_Internal_Text$Left);
var _rundis$elm_bootstrap$Bootstrap_Text$alignLg = function (dir) {
	return {dir: dir, size: _rundis$elm_bootstrap$Bootstrap_General_Internal$LG};
};
var _rundis$elm_bootstrap$Bootstrap_Text$alignLgRight = _rundis$elm_bootstrap$Bootstrap_Text$alignLg(_rundis$elm_bootstrap$Bootstrap_Internal_Text$Right);
var _rundis$elm_bootstrap$Bootstrap_Text$alignLgCenter = _rundis$elm_bootstrap$Bootstrap_Text$alignLg(_rundis$elm_bootstrap$Bootstrap_Internal_Text$Center);
var _rundis$elm_bootstrap$Bootstrap_Text$alignLgLeft = _rundis$elm_bootstrap$Bootstrap_Text$alignLg(_rundis$elm_bootstrap$Bootstrap_Internal_Text$Left);
var _rundis$elm_bootstrap$Bootstrap_Text$alignMd = function (dir) {
	return {dir: dir, size: _rundis$elm_bootstrap$Bootstrap_General_Internal$MD};
};
var _rundis$elm_bootstrap$Bootstrap_Text$alignMdRight = _rundis$elm_bootstrap$Bootstrap_Text$alignMd(_rundis$elm_bootstrap$Bootstrap_Internal_Text$Right);
var _rundis$elm_bootstrap$Bootstrap_Text$alignMdCenter = _rundis$elm_bootstrap$Bootstrap_Text$alignMd(_rundis$elm_bootstrap$Bootstrap_Internal_Text$Center);
var _rundis$elm_bootstrap$Bootstrap_Text$alignMdLeft = _rundis$elm_bootstrap$Bootstrap_Text$alignMd(_rundis$elm_bootstrap$Bootstrap_Internal_Text$Left);
var _rundis$elm_bootstrap$Bootstrap_Text$alignSm = function (dir) {
	return {dir: dir, size: _rundis$elm_bootstrap$Bootstrap_General_Internal$SM};
};
var _rundis$elm_bootstrap$Bootstrap_Text$alignSmRight = _rundis$elm_bootstrap$Bootstrap_Text$alignSm(_rundis$elm_bootstrap$Bootstrap_Internal_Text$Right);
var _rundis$elm_bootstrap$Bootstrap_Text$alignSmCenter = _rundis$elm_bootstrap$Bootstrap_Text$alignSm(_rundis$elm_bootstrap$Bootstrap_Internal_Text$Center);
var _rundis$elm_bootstrap$Bootstrap_Text$alignSmLeft = _rundis$elm_bootstrap$Bootstrap_Text$alignSm(_rundis$elm_bootstrap$Bootstrap_Internal_Text$Left);
var _rundis$elm_bootstrap$Bootstrap_Text$alignXs = function (dir) {
	return {dir: dir, size: _rundis$elm_bootstrap$Bootstrap_General_Internal$XS};
};
var _rundis$elm_bootstrap$Bootstrap_Text$alignXsRight = _rundis$elm_bootstrap$Bootstrap_Text$alignXs(_rundis$elm_bootstrap$Bootstrap_Internal_Text$Right);
var _rundis$elm_bootstrap$Bootstrap_Text$alignXsCenter = _rundis$elm_bootstrap$Bootstrap_Text$alignXs(_rundis$elm_bootstrap$Bootstrap_Internal_Text$Center);
var _rundis$elm_bootstrap$Bootstrap_Text$alignXsLeft = _rundis$elm_bootstrap$Bootstrap_Text$alignXs(_rundis$elm_bootstrap$Bootstrap_Internal_Text$Left);

var _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$itemAttributes = function (options) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$classList(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'list-group-item', _1: true},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'disabled', _1: options.disabled},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'active', _1: options.active},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'list-group-item-action', _1: options.action},
								_1: {ctor: '[]'}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		A2(
			_elm_lang$core$Basics_ops['++'],
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$disabled(options.disabled),
				_1: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$Maybe$withDefault,
					{ctor: '[]'},
					A2(
						_elm_lang$core$Maybe$map,
						function (r) {
							return {
								ctor: '::',
								_0: A2(_rundis$elm_bootstrap$Bootstrap_Internal_Role$toClass, 'list-group-item', r),
								_1: {ctor: '[]'}
							};
						},
						options.role)),
				options.attributes)));
};
var _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$preventClick = A2(_elm_lang$html$Html_Attributes$attribute, 'onclick', 'var event = arguments[0] || window.event; event.preventDefault();');
var _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$applyModifier = F2(
	function (modifier, options) {
		var _p0 = modifier;
		switch (_p0.ctor) {
			case 'Roled':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						role: _elm_lang$core$Maybe$Just(_p0._0)
					});
			case 'Action':
				return _elm_lang$core$Native_Utils.update(
					options,
					{action: true});
			case 'Disabled':
				return _elm_lang$core$Native_Utils.update(
					options,
					{disabled: true});
			case 'Active':
				return _elm_lang$core$Native_Utils.update(
					options,
					{active: true});
			default:
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						attributes: A2(_elm_lang$core$Basics_ops['++'], options.attributes, _p0._0)
					});
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$defaultOptions = {
	role: _elm_lang$core$Maybe$Nothing,
	active: false,
	disabled: false,
	action: false,
	attributes: {ctor: '[]'}
};
var _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$renderCustomItem = function (_p1) {
	var _p2 = _p1;
	return A2(
		_p2._0.itemFn,
		_rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$itemAttributes(
			A3(_elm_lang$core$List$foldl, _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$applyModifier, _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$defaultOptions, _p2._0.options)),
		_p2._0.children);
};
var _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$renderItem = function (_p3) {
	var _p4 = _p3;
	return A2(
		_p4._0.itemFn,
		_rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$itemAttributes(
			A3(_elm_lang$core$List$foldl, _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$applyModifier, _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$defaultOptions, _p4._0.options)),
		_p4._0.children);
};
var _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$ItemOptions = F5(
	function (a, b, c, d, e) {
		return {role: a, active: b, disabled: c, action: d, attributes: e};
	});
var _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Attrs = function (a) {
	return {ctor: 'Attrs', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Action = {ctor: 'Action'};
var _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Disabled = {ctor: 'Disabled'};
var _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Active = {ctor: 'Active'};
var _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Roled = function (a) {
	return {ctor: 'Roled', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Item = function (a) {
	return {ctor: 'Item', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$CustomItem = function (a) {
	return {ctor: 'CustomItem', _0: a};
};

var _rundis$elm_bootstrap$Bootstrap_ListGroup$attrs = function (attrs) {
	return _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Attrs(attrs);
};
var _rundis$elm_bootstrap$Bootstrap_ListGroup$disabled = _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Disabled;
var _rundis$elm_bootstrap$Bootstrap_ListGroup$active = _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Active;
var _rundis$elm_bootstrap$Bootstrap_ListGroup$dark = _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Dark);
var _rundis$elm_bootstrap$Bootstrap_ListGroup$light = _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Light);
var _rundis$elm_bootstrap$Bootstrap_ListGroup$danger = _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Danger);
var _rundis$elm_bootstrap$Bootstrap_ListGroup$warning = _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Warning);
var _rundis$elm_bootstrap$Bootstrap_ListGroup$info = _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Info);
var _rundis$elm_bootstrap$Bootstrap_ListGroup$success = _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Success);
var _rundis$elm_bootstrap$Bootstrap_ListGroup$secondary = _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Secondary);
var _rundis$elm_bootstrap$Bootstrap_ListGroup$primary = _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Primary);
var _rundis$elm_bootstrap$Bootstrap_ListGroup$button = F2(
	function (options, children) {
		return _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$CustomItem(
			{
				itemFn: _elm_lang$html$Html$button,
				children: children,
				options: {
					ctor: '::',
					_0: _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Action,
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						options,
						{
							ctor: '::',
							_0: _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Attrs(
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$type_('button'),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						})
				}
			});
	});
var _rundis$elm_bootstrap$Bootstrap_ListGroup$anchor = F2(
	function (options, children) {
		var updOptions = A2(
			_elm_lang$core$List$any,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(_rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Disabled),
			options) ? A2(
			_elm_lang$core$Basics_ops['++'],
			options,
			{
				ctor: '::',
				_0: _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Attrs(
					{
						ctor: '::',
						_0: _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$preventClick,
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}) : options;
		return _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$CustomItem(
			{
				itemFn: _elm_lang$html$Html$a,
				children: children,
				options: {ctor: '::', _0: _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Action, _1: updOptions}
			});
	});
var _rundis$elm_bootstrap$Bootstrap_ListGroup$keyedCustom = function (items) {
	return A3(
		_elm_lang$html$Html_Keyed$node,
		'div',
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('list-group'),
			_1: {ctor: '[]'}
		},
		A2(
			_elm_lang$core$List$map,
			function (_p0) {
				var _p1 = _p0;
				return {
					ctor: '_Tuple2',
					_0: _p1._0,
					_1: _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$renderCustomItem(_p1._1)
				};
			},
			items));
};
var _rundis$elm_bootstrap$Bootstrap_ListGroup$custom = function (items) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('list-group'),
			_1: {ctor: '[]'}
		},
		A2(_elm_lang$core$List$map, _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$renderCustomItem, items));
};
var _rundis$elm_bootstrap$Bootstrap_ListGroup$li = F2(
	function (options, children) {
		return _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$Item(
			{itemFn: _elm_lang$html$Html$li, children: children, options: options});
	});
var _rundis$elm_bootstrap$Bootstrap_ListGroup$keyedUl = function (keyedItems) {
	return A2(
		_elm_lang$html$Html_Keyed$ul,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('list-group'),
			_1: {ctor: '[]'}
		},
		A2(
			_elm_lang$core$List$map,
			function (_p2) {
				var _p3 = _p2;
				return {
					ctor: '_Tuple2',
					_0: _p3._0,
					_1: _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$renderItem(_p3._1)
				};
			},
			keyedItems));
};
var _rundis$elm_bootstrap$Bootstrap_ListGroup$ul = function (items) {
	return A2(
		_elm_lang$html$Html$ul,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('list-group'),
			_1: {ctor: '[]'}
		},
		A2(_elm_lang$core$List$map, _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$renderItem, items));
};

var _rundis$elm_bootstrap$Bootstrap_Card_Internal$applyModifier = F2(
	function (option, options) {
		var _p0 = option;
		switch (_p0.ctor) {
			case 'Aligned':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						aligned: _elm_lang$core$Maybe$Just(_p0._0)
					});
			case 'Coloring':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						coloring: _elm_lang$core$Maybe$Just(_p0._0)
					});
			case 'TextColoring':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						textColoring: _elm_lang$core$Maybe$Just(_p0._0)
					});
			default:
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						attributes: A2(_elm_lang$core$Basics_ops['++'], options.attributes, _p0._0)
					});
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$defaultOptions = {
	aligned: _elm_lang$core$Maybe$Nothing,
	coloring: _elm_lang$core$Maybe$Nothing,
	textColoring: _elm_lang$core$Maybe$Nothing,
	attributes: {ctor: '[]'}
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$cardAttributes = function (modifiers) {
	var options = A3(_elm_lang$core$List$foldl, _rundis$elm_bootstrap$Bootstrap_Card_Internal$applyModifier, _rundis$elm_bootstrap$Bootstrap_Card_Internal$defaultOptions, modifiers);
	return A2(
		_elm_lang$core$Basics_ops['++'],
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('card'),
			_1: {ctor: '[]'}
		},
		A2(
			_elm_lang$core$Basics_ops['++'],
			function () {
				var _p1 = options.coloring;
				if (_p1.ctor === 'Just') {
					if (_p1._0.ctor === 'Roled') {
						return {
							ctor: '::',
							_0: A2(_rundis$elm_bootstrap$Bootstrap_Internal_Role$toClass, 'bg', _p1._0._0),
							_1: {ctor: '[]'}
						};
					} else {
						return {
							ctor: '::',
							_0: A2(_rundis$elm_bootstrap$Bootstrap_Internal_Role$toClass, 'border', _p1._0._0),
							_1: {ctor: '[]'}
						};
					}
				} else {
					return {ctor: '[]'};
				}
			}(),
			A2(
				_elm_lang$core$Basics_ops['++'],
				function () {
					var _p2 = options.textColoring;
					if (_p2.ctor === 'Just') {
						return {
							ctor: '::',
							_0: _rundis$elm_bootstrap$Bootstrap_Internal_Text$textColorClass(_p2._0),
							_1: {ctor: '[]'}
						};
					} else {
						return {ctor: '[]'};
					}
				}(),
				A2(
					_elm_lang$core$Basics_ops['++'],
					function () {
						var _p3 = options.aligned;
						if (_p3.ctor === 'Just') {
							return {
								ctor: '::',
								_0: _rundis$elm_bootstrap$Bootstrap_Internal_Text$textAlignClass(_p3._0),
								_1: {ctor: '[]'}
							};
						} else {
							return {ctor: '[]'};
						}
					}(),
					options.attributes))));
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$applyBlockModifier = F2(
	function (option, options) {
		var _p4 = option;
		switch (_p4.ctor) {
			case 'AlignedBlock':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						aligned: _elm_lang$core$Maybe$Just(_p4._0)
					});
			case 'BlockColoring':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						coloring: _elm_lang$core$Maybe$Just(_p4._0)
					});
			case 'BlockTextColoring':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						textColoring: _elm_lang$core$Maybe$Just(_p4._0)
					});
			default:
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						attributes: A2(_elm_lang$core$Basics_ops['++'], options.attributes, _p4._0)
					});
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$defaultBlockOptions = {
	aligned: _elm_lang$core$Maybe$Nothing,
	coloring: _elm_lang$core$Maybe$Nothing,
	textColoring: _elm_lang$core$Maybe$Nothing,
	attributes: {ctor: '[]'}
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$blockAttributes = function (modifiers) {
	var options = A3(_elm_lang$core$List$foldl, _rundis$elm_bootstrap$Bootstrap_Card_Internal$applyBlockModifier, _rundis$elm_bootstrap$Bootstrap_Card_Internal$defaultBlockOptions, modifiers);
	return A2(
		_elm_lang$core$Basics_ops['++'],
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('card-body'),
			_1: {ctor: '[]'}
		},
		A2(
			_elm_lang$core$Basics_ops['++'],
			function () {
				var _p5 = options.aligned;
				if (_p5.ctor === 'Just') {
					return {
						ctor: '::',
						_0: _rundis$elm_bootstrap$Bootstrap_Internal_Text$textAlignClass(_p5._0),
						_1: {ctor: '[]'}
					};
				} else {
					return {ctor: '[]'};
				}
			}(),
			A2(
				_elm_lang$core$Basics_ops['++'],
				function () {
					var _p6 = options.coloring;
					if (_p6.ctor === 'Just') {
						return {
							ctor: '::',
							_0: A2(_rundis$elm_bootstrap$Bootstrap_Internal_Role$toClass, 'bg', _p6._0),
							_1: {ctor: '[]'}
						};
					} else {
						return {ctor: '[]'};
					}
				}(),
				A2(
					_elm_lang$core$Basics_ops['++'],
					function () {
						var _p7 = options.textColoring;
						if (_p7.ctor === 'Just') {
							return {
								ctor: '::',
								_0: _rundis$elm_bootstrap$Bootstrap_Internal_Text$textColorClass(_p7._0),
								_1: {ctor: '[]'}
							};
						} else {
							return {ctor: '[]'};
						}
					}(),
					options.attributes))));
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$renderBlock = function (block) {
	var _p8 = block;
	if (_p8.ctor === 'CardBlock') {
		return _p8._0;
	} else {
		return _p8._0;
	}
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$renderBlocks = function (blocks) {
	return A2(
		_elm_lang$core$List$map,
		function (block) {
			var _p9 = block;
			if (_p9.ctor === 'CardBlock') {
				return _p9._0;
			} else {
				return _p9._0;
			}
		},
		blocks);
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$CardOptions = F4(
	function (a, b, c, d) {
		return {aligned: a, coloring: b, textColoring: c, attributes: d};
	});
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockOptions = F4(
	function (a, b, c, d) {
		return {aligned: a, coloring: b, textColoring: c, attributes: d};
	});
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$Attrs = function (a) {
	return {ctor: 'Attrs', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$TextColoring = function (a) {
	return {ctor: 'TextColoring', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring = function (a) {
	return {ctor: 'Coloring', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$Aligned = function (a) {
	return {ctor: 'Aligned', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$Outlined = function (a) {
	return {ctor: 'Outlined', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$Roled = function (a) {
	return {ctor: 'Roled', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockAttrs = function (a) {
	return {ctor: 'BlockAttrs', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockTextColoring = function (a) {
	return {ctor: 'BlockTextColoring', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockColoring = function (a) {
	return {ctor: 'BlockColoring', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$AlignedBlock = function (a) {
	return {ctor: 'AlignedBlock', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$ListGroup = function (a) {
	return {ctor: 'ListGroup', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$listGroup = function (items) {
	return _rundis$elm_bootstrap$Bootstrap_Card_Internal$ListGroup(
		A2(
			_elm_lang$html$Html$ul,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('list-group list-group-flush'),
				_1: {ctor: '[]'}
			},
			A2(_elm_lang$core$List$map, _rundis$elm_bootstrap$Bootstrap_Internal_ListGroup$renderItem, items)));
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$CardBlock = function (a) {
	return {ctor: 'CardBlock', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$block = F2(
	function (options, items) {
		return _rundis$elm_bootstrap$Bootstrap_Card_Internal$CardBlock(
			A2(
				_elm_lang$html$Html$div,
				_rundis$elm_bootstrap$Bootstrap_Card_Internal$blockAttributes(options),
				A2(
					_elm_lang$core$List$map,
					function (_p10) {
						var _p11 = _p10;
						return _p11._0;
					},
					items)));
	});
var _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockItem = function (a) {
	return {ctor: 'BlockItem', _0: a};
};

var _rundis$elm_bootstrap$Bootstrap_Card_Block$attrs = function (attrs) {
	return _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockAttrs(attrs);
};
var _rundis$elm_bootstrap$Bootstrap_Card_Block$textColor = function (color) {
	return _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockTextColoring(color);
};
var _rundis$elm_bootstrap$Bootstrap_Card_Block$dark = _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockColoring(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Dark);
var _rundis$elm_bootstrap$Bootstrap_Card_Block$light = _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockColoring(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Light);
var _rundis$elm_bootstrap$Bootstrap_Card_Block$danger = _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockColoring(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Danger);
var _rundis$elm_bootstrap$Bootstrap_Card_Block$warning = _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockColoring(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Warning);
var _rundis$elm_bootstrap$Bootstrap_Card_Block$info = _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockColoring(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Info);
var _rundis$elm_bootstrap$Bootstrap_Card_Block$success = _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockColoring(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Success);
var _rundis$elm_bootstrap$Bootstrap_Card_Block$secondary = _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockColoring(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Secondary);
var _rundis$elm_bootstrap$Bootstrap_Card_Block$primary = _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockColoring(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Primary);
var _rundis$elm_bootstrap$Bootstrap_Card_Block$align = function (align) {
	return _rundis$elm_bootstrap$Bootstrap_Card_Internal$AlignedBlock(align);
};
var _rundis$elm_bootstrap$Bootstrap_Card_Block$title = F3(
	function (elemFn, attributes, children) {
		return _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockItem(
			A2(
				elemFn,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('card-title'),
					_1: attributes
				},
				children));
	});
var _rundis$elm_bootstrap$Bootstrap_Card_Block$titleH6 = _rundis$elm_bootstrap$Bootstrap_Card_Block$title(_elm_lang$html$Html$h6);
var _rundis$elm_bootstrap$Bootstrap_Card_Block$titleH5 = _rundis$elm_bootstrap$Bootstrap_Card_Block$title(_elm_lang$html$Html$h5);
var _rundis$elm_bootstrap$Bootstrap_Card_Block$titleH4 = _rundis$elm_bootstrap$Bootstrap_Card_Block$title(_elm_lang$html$Html$h4);
var _rundis$elm_bootstrap$Bootstrap_Card_Block$titleH3 = _rundis$elm_bootstrap$Bootstrap_Card_Block$title(_elm_lang$html$Html$h3);
var _rundis$elm_bootstrap$Bootstrap_Card_Block$titleH2 = _rundis$elm_bootstrap$Bootstrap_Card_Block$title(_elm_lang$html$Html$h2);
var _rundis$elm_bootstrap$Bootstrap_Card_Block$titleH1 = _rundis$elm_bootstrap$Bootstrap_Card_Block$title(_elm_lang$html$Html$h1);
var _rundis$elm_bootstrap$Bootstrap_Card_Block$quote = F2(
	function (attributes, children) {
		return _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockItem(
			A2(
				_elm_lang$html$Html$blockquote,
				A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('card-blockquote'),
						_1: {ctor: '[]'}
					},
					attributes),
				children));
	});
var _rundis$elm_bootstrap$Bootstrap_Card_Block$custom = function (element) {
	return _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockItem(element);
};
var _rundis$elm_bootstrap$Bootstrap_Card_Block$text = F2(
	function (attributes, children) {
		return _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockItem(
			A2(
				_elm_lang$html$Html$p,
				A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('card-text'),
						_1: {ctor: '[]'}
					},
					attributes),
				children));
	});
var _rundis$elm_bootstrap$Bootstrap_Card_Block$link = F2(
	function (attributes, children) {
		return _rundis$elm_bootstrap$Bootstrap_Card_Internal$BlockItem(
			A2(
				_elm_lang$html$Html$a,
				A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('card-link'),
						_1: {ctor: '[]'}
					},
					attributes),
				children));
	});

var _rundis$elm_bootstrap$Bootstrap_Card$view = function (_p0) {
	var _p1 = _p0;
	return A2(
		_elm_lang$html$Html$div,
		_rundis$elm_bootstrap$Bootstrap_Card_Internal$cardAttributes(_p1._0.options),
		A2(
			_elm_lang$core$Basics_ops['++'],
			A2(
				_elm_lang$core$List$filterMap,
				_elm_lang$core$Basics$identity,
				{
					ctor: '::',
					_0: A2(
						_elm_lang$core$Maybe$map,
						function (_p2) {
							var _p3 = _p2;
							return _p3._0;
						},
						_p1._0.header),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$Maybe$map,
							function (_p4) {
								var _p5 = _p4;
								return _p5._0;
							},
							_p1._0.imgTop),
						_1: {ctor: '[]'}
					}
				}),
			A2(
				_elm_lang$core$Basics_ops['++'],
				_rundis$elm_bootstrap$Bootstrap_Card_Internal$renderBlocks(_p1._0.blocks),
				A2(
					_elm_lang$core$List$filterMap,
					_elm_lang$core$Basics$identity,
					{
						ctor: '::',
						_0: A2(
							_elm_lang$core$Maybe$map,
							function (_p6) {
								var _p7 = _p6;
								return _p7._0;
							},
							_p1._0.footer),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$core$Maybe$map,
								function (_p8) {
									var _p9 = _p8;
									return _p9._0;
								},
								_p1._0.imgBottom),
							_1: {ctor: '[]'}
						}
					}))));
};
var _rundis$elm_bootstrap$Bootstrap_Card$group = function (cards) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('card-group'),
			_1: {ctor: '[]'}
		},
		A2(_elm_lang$core$List$map, _rundis$elm_bootstrap$Bootstrap_Card$view, cards));
};
var _rundis$elm_bootstrap$Bootstrap_Card$deck = function (cards) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('card-deck'),
			_1: {ctor: '[]'}
		},
		A2(_elm_lang$core$List$map, _rundis$elm_bootstrap$Bootstrap_Card$view, cards));
};
var _rundis$elm_bootstrap$Bootstrap_Card$columns = function (cards) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('card-columns'),
			_1: {ctor: '[]'}
		},
		A2(_elm_lang$core$List$map, _rundis$elm_bootstrap$Bootstrap_Card$view, cards));
};
var _rundis$elm_bootstrap$Bootstrap_Card$keyedMulti = F2(
	function (clazz, keyedCards) {
		return A3(
			_elm_lang$html$Html_Keyed$node,
			'div',
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class(clazz),
				_1: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$List$map,
				function (_p10) {
					var _p11 = _p10;
					return {
						ctor: '_Tuple2',
						_0: _p11._0,
						_1: _rundis$elm_bootstrap$Bootstrap_Card$view(_p11._1)
					};
				},
				keyedCards));
	});
var _rundis$elm_bootstrap$Bootstrap_Card$keyedGroup = _rundis$elm_bootstrap$Bootstrap_Card$keyedMulti('card-group');
var _rundis$elm_bootstrap$Bootstrap_Card$keyedDeck = _rundis$elm_bootstrap$Bootstrap_Card$keyedMulti('card-deck');
var _rundis$elm_bootstrap$Bootstrap_Card$keyedColumns = _rundis$elm_bootstrap$Bootstrap_Card$keyedMulti('card-columns');
var _rundis$elm_bootstrap$Bootstrap_Card$attrs = function (attrs) {
	return _rundis$elm_bootstrap$Bootstrap_Card_Internal$Attrs(attrs);
};
var _rundis$elm_bootstrap$Bootstrap_Card$textColor = function (color) {
	return _rundis$elm_bootstrap$Bootstrap_Card_Internal$TextColoring(color);
};
var _rundis$elm_bootstrap$Bootstrap_Card$outlineDark = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Dark));
var _rundis$elm_bootstrap$Bootstrap_Card$outlineLight = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Light));
var _rundis$elm_bootstrap$Bootstrap_Card$outlineDanger = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Danger));
var _rundis$elm_bootstrap$Bootstrap_Card$outlineWarning = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Warning));
var _rundis$elm_bootstrap$Bootstrap_Card$outlineInfo = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Info));
var _rundis$elm_bootstrap$Bootstrap_Card$outlineSuccess = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Success));
var _rundis$elm_bootstrap$Bootstrap_Card$outlineSecondary = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Secondary));
var _rundis$elm_bootstrap$Bootstrap_Card$outlinePrimary = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Primary));
var _rundis$elm_bootstrap$Bootstrap_Card$dark = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Dark));
var _rundis$elm_bootstrap$Bootstrap_Card$light = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Light));
var _rundis$elm_bootstrap$Bootstrap_Card$danger = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Danger));
var _rundis$elm_bootstrap$Bootstrap_Card$warning = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Warning));
var _rundis$elm_bootstrap$Bootstrap_Card$info = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Info));
var _rundis$elm_bootstrap$Bootstrap_Card$success = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Success));
var _rundis$elm_bootstrap$Bootstrap_Card$secondary = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Secondary));
var _rundis$elm_bootstrap$Bootstrap_Card$primary = _rundis$elm_bootstrap$Bootstrap_Card_Internal$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Card_Internal$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Primary));
var _rundis$elm_bootstrap$Bootstrap_Card$align = function (align) {
	return _rundis$elm_bootstrap$Bootstrap_Card_Internal$Aligned(align);
};
var _rundis$elm_bootstrap$Bootstrap_Card$Config = function (a) {
	return {ctor: 'Config', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card$config = function (options) {
	return _rundis$elm_bootstrap$Bootstrap_Card$Config(
		{
			options: options,
			header: _elm_lang$core$Maybe$Nothing,
			footer: _elm_lang$core$Maybe$Nothing,
			imgTop: _elm_lang$core$Maybe$Nothing,
			imgBottom: _elm_lang$core$Maybe$Nothing,
			blocks: {ctor: '[]'}
		});
};
var _rundis$elm_bootstrap$Bootstrap_Card$listGroup = F2(
	function (items, _p12) {
		var _p13 = _p12;
		var _p14 = _p13._0;
		return _rundis$elm_bootstrap$Bootstrap_Card$Config(
			_elm_lang$core$Native_Utils.update(
				_p14,
				{
					blocks: A2(
						_elm_lang$core$Basics_ops['++'],
						_p14.blocks,
						{
							ctor: '::',
							_0: _rundis$elm_bootstrap$Bootstrap_Card_Internal$listGroup(items),
							_1: {ctor: '[]'}
						})
				}));
	});
var _rundis$elm_bootstrap$Bootstrap_Card$block = F3(
	function (options, items, _p15) {
		var _p16 = _p15;
		var _p17 = _p16._0;
		return _rundis$elm_bootstrap$Bootstrap_Card$Config(
			_elm_lang$core$Native_Utils.update(
				_p17,
				{
					blocks: A2(
						_elm_lang$core$Basics_ops['++'],
						_p17.blocks,
						{
							ctor: '::',
							_0: A2(_rundis$elm_bootstrap$Bootstrap_Card_Internal$block, options, items),
							_1: {ctor: '[]'}
						})
				}));
	});
var _rundis$elm_bootstrap$Bootstrap_Card$Header = function (a) {
	return {ctor: 'Header', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card$headerPrivate = F4(
	function (elemFn, attributes, children, _p18) {
		var _p19 = _p18;
		return _rundis$elm_bootstrap$Bootstrap_Card$Config(
			_elm_lang$core$Native_Utils.update(
				_p19._0,
				{
					header: _elm_lang$core$Maybe$Just(
						_rundis$elm_bootstrap$Bootstrap_Card$Header(
							A2(
								elemFn,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('card-header'),
									_1: attributes
								},
								children)))
				}));
	});
var _rundis$elm_bootstrap$Bootstrap_Card$header = _rundis$elm_bootstrap$Bootstrap_Card$headerPrivate(_elm_lang$html$Html$div);
var _rundis$elm_bootstrap$Bootstrap_Card$headerH1 = _rundis$elm_bootstrap$Bootstrap_Card$headerPrivate(_elm_lang$html$Html$h1);
var _rundis$elm_bootstrap$Bootstrap_Card$headerH2 = _rundis$elm_bootstrap$Bootstrap_Card$headerPrivate(_elm_lang$html$Html$h2);
var _rundis$elm_bootstrap$Bootstrap_Card$headerH3 = _rundis$elm_bootstrap$Bootstrap_Card$headerPrivate(_elm_lang$html$Html$h3);
var _rundis$elm_bootstrap$Bootstrap_Card$headerH4 = _rundis$elm_bootstrap$Bootstrap_Card$headerPrivate(_elm_lang$html$Html$h4);
var _rundis$elm_bootstrap$Bootstrap_Card$headerH5 = _rundis$elm_bootstrap$Bootstrap_Card$headerPrivate(_elm_lang$html$Html$h5);
var _rundis$elm_bootstrap$Bootstrap_Card$headerH6 = _rundis$elm_bootstrap$Bootstrap_Card$headerPrivate(_elm_lang$html$Html$h6);
var _rundis$elm_bootstrap$Bootstrap_Card$Footer = function (a) {
	return {ctor: 'Footer', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card$footer = F3(
	function (attributes, children, _p20) {
		var _p21 = _p20;
		return _rundis$elm_bootstrap$Bootstrap_Card$Config(
			_elm_lang$core$Native_Utils.update(
				_p21._0,
				{
					footer: _elm_lang$core$Maybe$Just(
						_rundis$elm_bootstrap$Bootstrap_Card$Footer(
							A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('card-footer'),
									_1: attributes
								},
								children)))
				}));
	});
var _rundis$elm_bootstrap$Bootstrap_Card$ImageTop = function (a) {
	return {ctor: 'ImageTop', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card$imgTop = F3(
	function (attributes, children, _p22) {
		var _p23 = _p22;
		return _rundis$elm_bootstrap$Bootstrap_Card$Config(
			_elm_lang$core$Native_Utils.update(
				_p23._0,
				{
					imgTop: _elm_lang$core$Maybe$Just(
						_rundis$elm_bootstrap$Bootstrap_Card$ImageTop(
							A2(
								_elm_lang$html$Html$img,
								A2(
									_elm_lang$core$Basics_ops['++'],
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('card-img-top'),
										_1: {ctor: '[]'}
									},
									attributes),
								children)))
				}));
	});
var _rundis$elm_bootstrap$Bootstrap_Card$ImageBottom = function (a) {
	return {ctor: 'ImageBottom', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Card$imgBottom = F3(
	function (attributes, children, _p24) {
		var _p25 = _p24;
		return _rundis$elm_bootstrap$Bootstrap_Card$Config(
			_elm_lang$core$Native_Utils.update(
				_p25._0,
				{
					imgBottom: _elm_lang$core$Maybe$Just(
						_rundis$elm_bootstrap$Bootstrap_Card$ImageBottom(
							A2(
								_elm_lang$html$Html$img,
								A2(
									_elm_lang$core$Basics_ops['++'],
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('card-img-bottom'),
										_1: {ctor: '[]'}
									},
									attributes),
								children)))
				}));
	});

var _rundis$elm_bootstrap$Bootstrap_Alert$headingPrivate = F3(
	function (elemFn, attributes, children) {
		return A2(
			elemFn,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('alert-header'),
				_1: attributes
			},
			children);
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$h6 = F2(
	function (attributes, children) {
		return A3(_rundis$elm_bootstrap$Bootstrap_Alert$headingPrivate, _elm_lang$html$Html$h6, attributes, children);
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$h5 = F2(
	function (attributes, children) {
		return A3(_rundis$elm_bootstrap$Bootstrap_Alert$headingPrivate, _elm_lang$html$Html$h5, attributes, children);
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$h4 = F2(
	function (attributes, children) {
		return A3(_rundis$elm_bootstrap$Bootstrap_Alert$headingPrivate, _elm_lang$html$Html$h4, attributes, children);
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$h3 = F2(
	function (attributes, children) {
		return A3(_rundis$elm_bootstrap$Bootstrap_Alert$headingPrivate, _elm_lang$html$Html$h3, attributes, children);
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$h2 = F2(
	function (attributes, children) {
		return A3(_rundis$elm_bootstrap$Bootstrap_Alert$headingPrivate, _elm_lang$html$Html$h2, attributes, children);
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$h1 = F2(
	function (attributes, children) {
		return A3(_rundis$elm_bootstrap$Bootstrap_Alert$headingPrivate, _elm_lang$html$Html$h1, attributes, children);
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$link = F2(
	function (attributes, children) {
		return A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('alert-link'),
				_1: attributes
			},
			children);
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$isDismissable = function (configRec) {
	var _p0 = configRec.dismissable;
	if (_p0.ctor === 'Just') {
		return true;
	} else {
		return false;
	}
};
var _rundis$elm_bootstrap$Bootstrap_Alert$injectButton = F2(
	function (btn, children) {
		var _p1 = children;
		if (_p1.ctor === '::') {
			return {
				ctor: '::',
				_0: _p1._0,
				_1: {ctor: '::', _0: btn, _1: _p1._1}
			};
		} else {
			return {
				ctor: '::',
				_0: btn,
				_1: {ctor: '[]'}
			};
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$ConfigRec = F6(
	function (a, b, c, d, e, f) {
		return {visibility: a, dismissable: b, attributes: c, children: d, role: e, withAnimation: f};
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$Config = function (a) {
	return {ctor: 'Config', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Alert$role = F2(
	function (role, _p2) {
		var _p3 = _p2;
		return _rundis$elm_bootstrap$Bootstrap_Alert$Config(
			_elm_lang$core$Native_Utils.update(
				_p3._0,
				{role: role}));
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$primary = function (config) {
	return A2(_rundis$elm_bootstrap$Bootstrap_Alert$role, _rundis$elm_bootstrap$Bootstrap_Internal_Role$Primary, config);
};
var _rundis$elm_bootstrap$Bootstrap_Alert$secondary = function (config) {
	return A2(_rundis$elm_bootstrap$Bootstrap_Alert$role, _rundis$elm_bootstrap$Bootstrap_Internal_Role$Secondary, config);
};
var _rundis$elm_bootstrap$Bootstrap_Alert$success = function (config) {
	return A2(_rundis$elm_bootstrap$Bootstrap_Alert$role, _rundis$elm_bootstrap$Bootstrap_Internal_Role$Success, config);
};
var _rundis$elm_bootstrap$Bootstrap_Alert$info = function (config) {
	return A2(_rundis$elm_bootstrap$Bootstrap_Alert$role, _rundis$elm_bootstrap$Bootstrap_Internal_Role$Info, config);
};
var _rundis$elm_bootstrap$Bootstrap_Alert$warning = function (config) {
	return A2(_rundis$elm_bootstrap$Bootstrap_Alert$role, _rundis$elm_bootstrap$Bootstrap_Internal_Role$Warning, config);
};
var _rundis$elm_bootstrap$Bootstrap_Alert$danger = function (config) {
	return A2(_rundis$elm_bootstrap$Bootstrap_Alert$role, _rundis$elm_bootstrap$Bootstrap_Internal_Role$Danger, config);
};
var _rundis$elm_bootstrap$Bootstrap_Alert$dark = function (config) {
	return A2(_rundis$elm_bootstrap$Bootstrap_Alert$role, _rundis$elm_bootstrap$Bootstrap_Internal_Role$Dark, config);
};
var _rundis$elm_bootstrap$Bootstrap_Alert$light = function (config) {
	return A2(_rundis$elm_bootstrap$Bootstrap_Alert$role, _rundis$elm_bootstrap$Bootstrap_Internal_Role$Light, config);
};
var _rundis$elm_bootstrap$Bootstrap_Alert$attrs = F2(
	function (attributes, _p4) {
		var _p5 = _p4;
		return _rundis$elm_bootstrap$Bootstrap_Alert$Config(
			_elm_lang$core$Native_Utils.update(
				_p5._0,
				{attributes: attributes}));
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$dismissable = F2(
	function (dismissMsg, _p6) {
		var _p7 = _p6;
		return _rundis$elm_bootstrap$Bootstrap_Alert$Config(
			_elm_lang$core$Native_Utils.update(
				_p7._0,
				{
					dismissable: _elm_lang$core$Maybe$Just(dismissMsg)
				}));
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$dismissableWithAnimation = F2(
	function (dismissMsg, _p8) {
		var _p9 = _p8;
		return _rundis$elm_bootstrap$Bootstrap_Alert$Config(
			_elm_lang$core$Native_Utils.update(
				_p9._0,
				{
					dismissable: _elm_lang$core$Maybe$Just(dismissMsg),
					withAnimation: true
				}));
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$children = F2(
	function (children, _p10) {
		var _p11 = _p10;
		return _rundis$elm_bootstrap$Bootstrap_Alert$Config(
			_elm_lang$core$Native_Utils.update(
				_p11._0,
				{children: children}));
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$Closed = {ctor: 'Closed'};
var _rundis$elm_bootstrap$Bootstrap_Alert$closed = _rundis$elm_bootstrap$Bootstrap_Alert$Closed;
var _rundis$elm_bootstrap$Bootstrap_Alert$FadeClose = {ctor: 'FadeClose'};
var _rundis$elm_bootstrap$Bootstrap_Alert$subscriptions = F2(
	function (visibility, animateMsg) {
		var _p12 = visibility;
		if (_p12.ctor === 'StartClose') {
			return _elm_lang$animation_frame$AnimationFrame$times(
				function (_p13) {
					return animateMsg(_rundis$elm_bootstrap$Bootstrap_Alert$FadeClose);
				});
		} else {
			return _elm_lang$core$Platform_Sub$none;
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$StartClose = {ctor: 'StartClose'};
var _rundis$elm_bootstrap$Bootstrap_Alert$clickHandler = F2(
	function (visibility, configRec) {
		var handleClick = F2(
			function (viz, toMsg) {
				return _elm_lang$html$Html_Events$onClick(
					toMsg(viz));
			});
		var _p14 = configRec.dismissable;
		if (_p14.ctor === 'Just') {
			var _p15 = _p14._0;
			return {
				ctor: '::',
				_0: configRec.withAnimation ? A2(handleClick, _rundis$elm_bootstrap$Bootstrap_Alert$StartClose, _p15) : A2(handleClick, _rundis$elm_bootstrap$Bootstrap_Alert$Closed, _p15),
				_1: {ctor: '[]'}
			};
		} else {
			return {ctor: '[]'};
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$maybeAddDismissButton = F3(
	function (visibilty, configRec, children) {
		return _rundis$elm_bootstrap$Bootstrap_Alert$isDismissable(configRec) ? A2(
			_rundis$elm_bootstrap$Bootstrap_Alert$injectButton,
			A2(
				_elm_lang$html$Html$button,
				A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$type_('button'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('close'),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'aria-label', 'close'),
								_1: {ctor: '[]'}
							}
						}
					},
					A2(_rundis$elm_bootstrap$Bootstrap_Alert$clickHandler, visibilty, configRec)),
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$span,
						{
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'aria-hidden', 'true'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('×'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}),
			children) : children;
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$Shown = {ctor: 'Shown'};
var _rundis$elm_bootstrap$Bootstrap_Alert$shown = _rundis$elm_bootstrap$Bootstrap_Alert$Shown;
var _rundis$elm_bootstrap$Bootstrap_Alert$config = _rundis$elm_bootstrap$Bootstrap_Alert$Config(
	{
		visibility: _rundis$elm_bootstrap$Bootstrap_Alert$Shown,
		dismissable: _elm_lang$core$Maybe$Nothing,
		attributes: {ctor: '[]'},
		children: {ctor: '[]'},
		role: _rundis$elm_bootstrap$Bootstrap_Internal_Role$Secondary,
		withAnimation: false
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$viewAttributes = F2(
	function (visibility, configRec) {
		var animationAttributes = function () {
			if (configRec.withAnimation) {
				var _p16 = configRec.dismissable;
				if (_p16.ctor === 'Just') {
					return {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html_Events$on,
							'transitionend',
							_elm_lang$core$Json_Decode$succeed(
								_p16._0(_rundis$elm_bootstrap$Bootstrap_Alert$Closed))),
						_1: {ctor: '[]'}
					};
				} else {
					return {ctor: '[]'};
				}
			} else {
				return {ctor: '[]'};
			}
		}();
		var visibiltyAttributes = _elm_lang$core$Native_Utils.eq(visibility, _rundis$elm_bootstrap$Bootstrap_Alert$Closed) ? {
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'display', _1: 'none'},
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		var alertAttributes = {
			ctor: '::',
			_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'alert'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'alert', _1: true},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'alert-dismissible',
								_1: _rundis$elm_bootstrap$Bootstrap_Alert$isDismissable(configRec)
							},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'fade', _1: configRec.withAnimation},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'show',
										_1: _elm_lang$core$Native_Utils.eq(visibility, _rundis$elm_bootstrap$Bootstrap_Alert$Shown)
									},
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(_rundis$elm_bootstrap$Bootstrap_Internal_Role$toClass, 'alert', configRec.role),
					_1: {ctor: '[]'}
				}
			}
		};
		return _elm_lang$core$List$concat(
			{
				ctor: '::',
				_0: configRec.attributes,
				_1: {
					ctor: '::',
					_0: alertAttributes,
					_1: {
						ctor: '::',
						_0: visibiltyAttributes,
						_1: {
							ctor: '::',
							_0: animationAttributes,
							_1: {ctor: '[]'}
						}
					}
				}
			});
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$view = F2(
	function (visibility, _p17) {
		var _p18 = _p17;
		var _p19 = _p18._0;
		return A2(
			_elm_lang$html$Html$div,
			A2(_rundis$elm_bootstrap$Bootstrap_Alert$viewAttributes, visibility, _p19),
			A3(_rundis$elm_bootstrap$Bootstrap_Alert$maybeAddDismissButton, visibility, _p19, _p19.children));
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$simple = F3(
	function (role_, attributes, children_) {
		return A2(
			_rundis$elm_bootstrap$Bootstrap_Alert$view,
			_rundis$elm_bootstrap$Bootstrap_Alert$Shown,
			A2(
				_rundis$elm_bootstrap$Bootstrap_Alert$children,
				children_,
				A2(
					_rundis$elm_bootstrap$Bootstrap_Alert$attrs,
					attributes,
					A2(_rundis$elm_bootstrap$Bootstrap_Alert$role, role_, _rundis$elm_bootstrap$Bootstrap_Alert$config))));
	});
var _rundis$elm_bootstrap$Bootstrap_Alert$simplePrimary = _rundis$elm_bootstrap$Bootstrap_Alert$simple(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Primary);
var _rundis$elm_bootstrap$Bootstrap_Alert$simpleSecondary = _rundis$elm_bootstrap$Bootstrap_Alert$simple(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Secondary);
var _rundis$elm_bootstrap$Bootstrap_Alert$simpleSuccess = _rundis$elm_bootstrap$Bootstrap_Alert$simple(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Success);
var _rundis$elm_bootstrap$Bootstrap_Alert$simpleInfo = _rundis$elm_bootstrap$Bootstrap_Alert$simple(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Info);
var _rundis$elm_bootstrap$Bootstrap_Alert$simpleWarning = _rundis$elm_bootstrap$Bootstrap_Alert$simple(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Warning);
var _rundis$elm_bootstrap$Bootstrap_Alert$simpleDanger = _rundis$elm_bootstrap$Bootstrap_Alert$simple(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Danger);
var _rundis$elm_bootstrap$Bootstrap_Alert$simpleDark = _rundis$elm_bootstrap$Bootstrap_Alert$simple(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Dark);
var _rundis$elm_bootstrap$Bootstrap_Alert$simpleLight = _rundis$elm_bootstrap$Bootstrap_Alert$simple(_rundis$elm_bootstrap$Bootstrap_Internal_Role$Light);

var _rundis$elm_bootstrap$Bootstrap_Internal_Button$roleClass = function (role) {
	var _p0 = role;
	switch (_p0.ctor) {
		case 'Primary':
			return 'primary';
		case 'Secondary':
			return 'secondary';
		case 'Success':
			return 'success';
		case 'Info':
			return 'info';
		case 'Warning':
			return 'warning';
		case 'Danger':
			return 'danger';
		case 'Dark':
			return 'dark';
		case 'Light':
			return 'light';
		default:
			return 'link';
	}
};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$applyModifier = F2(
	function (modifier, options) {
		var _p1 = modifier;
		switch (_p1.ctor) {
			case 'Size':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						size: _elm_lang$core$Maybe$Just(_p1._0)
					});
			case 'Coloring':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						coloring: _elm_lang$core$Maybe$Just(_p1._0)
					});
			case 'Block':
				return _elm_lang$core$Native_Utils.update(
					options,
					{block: true});
			case 'Disabled':
				return _elm_lang$core$Native_Utils.update(
					options,
					{disabled: _p1._0});
			default:
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						attributes: A2(_elm_lang$core$Basics_ops['++'], options.attributes, _p1._0)
					});
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$defaultOptions = {
	coloring: _elm_lang$core$Maybe$Nothing,
	block: false,
	disabled: false,
	size: _elm_lang$core$Maybe$Nothing,
	attributes: {ctor: '[]'}
};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$buttonAttributes = function (modifiers) {
	var options = A3(_elm_lang$core$List$foldl, _rundis$elm_bootstrap$Bootstrap_Internal_Button$applyModifier, _rundis$elm_bootstrap$Bootstrap_Internal_Button$defaultOptions, modifiers);
	return A2(
		_elm_lang$core$Basics_ops['++'],
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$classList(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'btn', _1: true},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'btn-block', _1: options.block},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'disabled', _1: options.disabled},
							_1: {ctor: '[]'}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$disabled(options.disabled),
				_1: {ctor: '[]'}
			}
		},
		A2(
			_elm_lang$core$Basics_ops['++'],
			function () {
				var _p2 = A2(_elm_lang$core$Maybe$andThen, _rundis$elm_bootstrap$Bootstrap_General_Internal$screenSizeOption, options.size);
				if (_p2.ctor === 'Just') {
					return {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class(
							A2(_elm_lang$core$Basics_ops['++'], 'btn-', _p2._0)),
						_1: {ctor: '[]'}
					};
				} else {
					return {ctor: '[]'};
				}
			}(),
			A2(
				_elm_lang$core$Basics_ops['++'],
				function () {
					var _p3 = options.coloring;
					if (_p3.ctor === 'Just') {
						if (_p3._0.ctor === 'Roled') {
							return {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class(
									A2(
										_elm_lang$core$Basics_ops['++'],
										'btn-',
										_rundis$elm_bootstrap$Bootstrap_Internal_Button$roleClass(_p3._0._0))),
								_1: {ctor: '[]'}
							};
						} else {
							return {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class(
									A2(
										_elm_lang$core$Basics_ops['++'],
										'btn-outline-',
										_rundis$elm_bootstrap$Bootstrap_Internal_Button$roleClass(_p3._0._0))),
								_1: {ctor: '[]'}
							};
						}
					} else {
						return {ctor: '[]'};
					}
				}(),
				options.attributes)));
};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Options = F5(
	function (a, b, c, d, e) {
		return {coloring: a, block: b, disabled: c, size: d, attributes: e};
	});
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Attrs = function (a) {
	return {ctor: 'Attrs', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Disabled = function (a) {
	return {ctor: 'Disabled', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Block = {ctor: 'Block'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring = function (a) {
	return {ctor: 'Coloring', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Size = function (a) {
	return {ctor: 'Size', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Outlined = function (a) {
	return {ctor: 'Outlined', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Roled = function (a) {
	return {ctor: 'Roled', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Link = {ctor: 'Link'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Light = {ctor: 'Light'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Dark = {ctor: 'Dark'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Danger = {ctor: 'Danger'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Warning = {ctor: 'Warning'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Info = {ctor: 'Info'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Success = {ctor: 'Success'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Secondary = {ctor: 'Secondary'};
var _rundis$elm_bootstrap$Bootstrap_Internal_Button$Primary = {ctor: 'Primary'};

var _rundis$elm_bootstrap$Bootstrap_Button$disabled = function (disabled) {
	return _rundis$elm_bootstrap$Bootstrap_Internal_Button$Disabled(disabled);
};
var _rundis$elm_bootstrap$Bootstrap_Button$block = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Block;
var _rundis$elm_bootstrap$Bootstrap_Button$outlineDark = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Dark));
var _rundis$elm_bootstrap$Bootstrap_Button$outlineLight = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Light));
var _rundis$elm_bootstrap$Bootstrap_Button$outlineDanger = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Danger));
var _rundis$elm_bootstrap$Bootstrap_Button$outlineWarning = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Warning));
var _rundis$elm_bootstrap$Bootstrap_Button$outlineInfo = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Info));
var _rundis$elm_bootstrap$Bootstrap_Button$outlineSuccess = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Success));
var _rundis$elm_bootstrap$Bootstrap_Button$outlineSecondary = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Secondary));
var _rundis$elm_bootstrap$Bootstrap_Button$outlinePrimary = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Outlined(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Primary));
var _rundis$elm_bootstrap$Bootstrap_Button$roleLink = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Link));
var _rundis$elm_bootstrap$Bootstrap_Button$dark = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Dark));
var _rundis$elm_bootstrap$Bootstrap_Button$light = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Light));
var _rundis$elm_bootstrap$Bootstrap_Button$danger = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Danger));
var _rundis$elm_bootstrap$Bootstrap_Button$warning = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Warning));
var _rundis$elm_bootstrap$Bootstrap_Button$info = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Info));
var _rundis$elm_bootstrap$Bootstrap_Button$success = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Success));
var _rundis$elm_bootstrap$Bootstrap_Button$secondary = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Secondary));
var _rundis$elm_bootstrap$Bootstrap_Button$primary = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Coloring(
	_rundis$elm_bootstrap$Bootstrap_Internal_Button$Roled(_rundis$elm_bootstrap$Bootstrap_Internal_Button$Primary));
var _rundis$elm_bootstrap$Bootstrap_Button$large = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Size(_rundis$elm_bootstrap$Bootstrap_General_Internal$LG);
var _rundis$elm_bootstrap$Bootstrap_Button$small = _rundis$elm_bootstrap$Bootstrap_Internal_Button$Size(_rundis$elm_bootstrap$Bootstrap_General_Internal$SM);
var _rundis$elm_bootstrap$Bootstrap_Button$attrs = function (attrs) {
	return _rundis$elm_bootstrap$Bootstrap_Internal_Button$Attrs(attrs);
};
var _rundis$elm_bootstrap$Bootstrap_Button$onClick = function (message) {
	var defaultOptions = _elm_lang$html$Html_Events$defaultOptions;
	return _rundis$elm_bootstrap$Bootstrap_Button$attrs(
		{
			ctor: '::',
			_0: A3(
				_elm_lang$html$Html_Events$onWithOptions,
				'click',
				_elm_lang$core$Native_Utils.update(
					defaultOptions,
					{preventDefault: true}),
				_elm_lang$core$Json_Decode$succeed(message)),
			_1: {ctor: '[]'}
		});
};
var _rundis$elm_bootstrap$Bootstrap_Button$checkboxButton = F3(
	function (checked, options, children) {
		return A2(
			_elm_lang$html$Html$label,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'active', _1: checked},
						_1: {ctor: '[]'}
					}),
				_1: _rundis$elm_bootstrap$Bootstrap_Internal_Button$buttonAttributes(options)
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$type_('checkbox'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$checked(checked),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$autocomplete(false),
								_1: {ctor: '[]'}
							}
						}
					},
					{ctor: '[]'}),
				_1: children
			});
	});
var _rundis$elm_bootstrap$Bootstrap_Button$radioButton = F3(
	function (checked, options, children) {
		var hideRadio = A2(_elm_lang$html$Html_Attributes$attribute, 'data-toggle', 'button');
		return A2(
			_elm_lang$html$Html$label,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'active', _1: checked},
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: hideRadio,
					_1: _rundis$elm_bootstrap$Bootstrap_Internal_Button$buttonAttributes(options)
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$type_('radio'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$checked(checked),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$autocomplete(false),
								_1: {ctor: '[]'}
							}
						}
					},
					{ctor: '[]'}),
				_1: children
			});
	});
var _rundis$elm_bootstrap$Bootstrap_Button$linkButton = F2(
	function (options, children) {
		return A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'button'),
				_1: _rundis$elm_bootstrap$Bootstrap_Internal_Button$buttonAttributes(options)
			},
			children);
	});
var _rundis$elm_bootstrap$Bootstrap_Button$button = F2(
	function (options, children) {
		return A2(
			_elm_lang$html$Html$button,
			_rundis$elm_bootstrap$Bootstrap_Internal_Button$buttonAttributes(options),
			children);
	});

var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$defaultOptions = {
	size: _elm_lang$core$Maybe$Nothing,
	vertical: false,
	attributes: {ctor: '[]'}
};
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$applyModifier = F2(
	function (modifier, options) {
		var _p0 = modifier;
		switch (_p0.ctor) {
			case 'Size':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						size: _elm_lang$core$Maybe$Just(_p0._0)
					});
			case 'Vertical':
				return _elm_lang$core$Native_Utils.update(
					options,
					{vertical: true});
			default:
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						attributes: A2(_elm_lang$core$Basics_ops['++'], options.attributes, _p0._0)
					});
		}
	});
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$groupAttributes = F2(
	function (toggle, modifiers) {
		var options = A3(_elm_lang$core$List$foldl, _rundis$elm_bootstrap$Bootstrap_ButtonGroup$applyModifier, _rundis$elm_bootstrap$Bootstrap_ButtonGroup$defaultOptions, modifiers);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			{
				ctor: '::',
				_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'group'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'btn-group', _1: true},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'btn-group-toggle', _1: toggle},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'btn-group-vertical', _1: options.vertical},
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'data-toggle', 'buttons'),
						_1: {ctor: '[]'}
					}
				}
			},
			A2(
				_elm_lang$core$Basics_ops['++'],
				function () {
					var _p1 = A2(_elm_lang$core$Maybe$andThen, _rundis$elm_bootstrap$Bootstrap_General_Internal$screenSizeOption, options.size);
					if (_p1.ctor === 'Just') {
						return {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class(
								A2(_elm_lang$core$Basics_ops['++'], 'btn-group-', _p1._0)),
							_1: {ctor: '[]'}
						};
					} else {
						return {ctor: '[]'};
					}
				}(),
				options.attributes));
	});
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$renderGroup = function (_p2) {
	var _p3 = _p2;
	return _p3._0;
};
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$toolbar = F2(
	function (attributes, items) {
		return A2(
			_elm_lang$html$Html$div,
			A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'toolbar'),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('btn-toolbar'),
						_1: {ctor: '[]'}
					}
				},
				attributes),
			A2(_elm_lang$core$List$map, _rundis$elm_bootstrap$Bootstrap_ButtonGroup$renderGroup, items));
	});
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$Options = F3(
	function (a, b, c) {
		return {size: a, vertical: b, attributes: c};
	});
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$Attrs = function (a) {
	return {ctor: 'Attrs', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$attrs = function (attrs) {
	return _rundis$elm_bootstrap$Bootstrap_ButtonGroup$Attrs(attrs);
};
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$Vertical = {ctor: 'Vertical'};
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$vertical = _rundis$elm_bootstrap$Bootstrap_ButtonGroup$Vertical;
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$Size = function (a) {
	return {ctor: 'Size', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$small = _rundis$elm_bootstrap$Bootstrap_ButtonGroup$Size(_rundis$elm_bootstrap$Bootstrap_General_Internal$SM);
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$large = _rundis$elm_bootstrap$Bootstrap_ButtonGroup$Size(_rundis$elm_bootstrap$Bootstrap_General_Internal$LG);
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$GroupItem = function (a) {
	return {ctor: 'GroupItem', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$buttonGroupItem = F2(
	function (options, items) {
		return _rundis$elm_bootstrap$Bootstrap_ButtonGroup$GroupItem(
			A2(
				_elm_lang$html$Html$div,
				A2(_rundis$elm_bootstrap$Bootstrap_ButtonGroup$groupAttributes, false, options),
				A2(
					_elm_lang$core$List$map,
					function (_p4) {
						var _p5 = _p4;
						return _p5._0;
					},
					items)));
	});
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$buttonGroup = F2(
	function (options, items) {
		return _rundis$elm_bootstrap$Bootstrap_ButtonGroup$renderGroup(
			A2(_rundis$elm_bootstrap$Bootstrap_ButtonGroup$buttonGroupItem, options, items));
	});
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$linkButtonGroupItem = F2(
	function (options, items) {
		return _rundis$elm_bootstrap$Bootstrap_ButtonGroup$GroupItem(
			A2(
				_elm_lang$html$Html$div,
				A2(_rundis$elm_bootstrap$Bootstrap_ButtonGroup$groupAttributes, false, options),
				A2(
					_elm_lang$core$List$map,
					function (_p6) {
						var _p7 = _p6;
						return _p7._0;
					},
					items)));
	});
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$linkButtonGroup = F2(
	function (options, items) {
		return _rundis$elm_bootstrap$Bootstrap_ButtonGroup$renderGroup(
			A2(_rundis$elm_bootstrap$Bootstrap_ButtonGroup$linkButtonGroupItem, options, items));
	});
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$radioButtonGroupItem = F2(
	function (options, items) {
		return _rundis$elm_bootstrap$Bootstrap_ButtonGroup$GroupItem(
			A2(
				_elm_lang$html$Html$div,
				A2(_rundis$elm_bootstrap$Bootstrap_ButtonGroup$groupAttributes, true, options),
				A2(
					_elm_lang$core$List$map,
					function (_p8) {
						var _p9 = _p8;
						return _p9._0;
					},
					items)));
	});
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$radioButtonGroup = F2(
	function (options, items) {
		return _rundis$elm_bootstrap$Bootstrap_ButtonGroup$renderGroup(
			A2(_rundis$elm_bootstrap$Bootstrap_ButtonGroup$radioButtonGroupItem, options, items));
	});
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$checkboxButtonGroupItem = F2(
	function (options, items) {
		return _rundis$elm_bootstrap$Bootstrap_ButtonGroup$GroupItem(
			A2(
				_elm_lang$html$Html$div,
				A2(_rundis$elm_bootstrap$Bootstrap_ButtonGroup$groupAttributes, true, options),
				A2(
					_elm_lang$core$List$map,
					function (_p10) {
						var _p11 = _p10;
						return _p11._0;
					},
					items)));
	});
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$checkboxButtonGroup = F2(
	function (options, items) {
		return _rundis$elm_bootstrap$Bootstrap_ButtonGroup$renderGroup(
			A2(_rundis$elm_bootstrap$Bootstrap_ButtonGroup$checkboxButtonGroupItem, options, items));
	});
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$ButtonItem = function (a) {
	return {ctor: 'ButtonItem', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$button = F2(
	function (options, children) {
		return _rundis$elm_bootstrap$Bootstrap_ButtonGroup$ButtonItem(
			A2(_rundis$elm_bootstrap$Bootstrap_Button$button, options, children));
	});
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$LinkButtonItem = function (a) {
	return {ctor: 'LinkButtonItem', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$linkButton = F2(
	function (options, children) {
		return _rundis$elm_bootstrap$Bootstrap_ButtonGroup$LinkButtonItem(
			A2(_rundis$elm_bootstrap$Bootstrap_Button$linkButton, options, children));
	});
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$RadioButtonItem = function (a) {
	return {ctor: 'RadioButtonItem', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$radioButton = F3(
	function (checked, options, children) {
		return _rundis$elm_bootstrap$Bootstrap_ButtonGroup$RadioButtonItem(
			A3(_rundis$elm_bootstrap$Bootstrap_Button$radioButton, checked, options, children));
	});
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$CheckboxButtonItem = function (a) {
	return {ctor: 'CheckboxButtonItem', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_ButtonGroup$checkboxButton = F3(
	function (checked, options, children) {
		return _rundis$elm_bootstrap$Bootstrap_ButtonGroup$CheckboxButtonItem(
			A3(_rundis$elm_bootstrap$Bootstrap_Button$checkboxButton, checked, options, children));
	});

var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$verticalAlignOption = function (align) {
	var _p0 = align;
	switch (_p0.ctor) {
		case 'Top':
			return 'start';
		case 'Middle':
			return 'center';
		default:
			return 'end';
	}
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$orderColOption = function (size) {
	var _p1 = size;
	switch (_p1.ctor) {
		case 'OrderFirst':
			return 'first';
		case 'Order1':
			return '1';
		case 'Order2':
			return '2';
		case 'Order3':
			return '3';
		case 'Order4':
			return '4';
		case 'Order5':
			return '5';
		case 'Order6':
			return '6';
		case 'Order7':
			return '7';
		case 'Order8':
			return '8';
		case 'Order9':
			return '9';
		case 'Order10':
			return '10';
		case 'Order11':
			return '11';
		case 'Order12':
			return '12';
		default:
			return 'last';
	}
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$moveCountOption = function (size) {
	var _p2 = size;
	switch (_p2.ctor) {
		case 'Move0':
			return '0';
		case 'Move1':
			return '1';
		case 'Move2':
			return '2';
		case 'Move3':
			return '3';
		case 'Move4':
			return '4';
		case 'Move5':
			return '5';
		case 'Move6':
			return '6';
		case 'Move7':
			return '7';
		case 'Move8':
			return '8';
		case 'Move9':
			return '9';
		case 'Move10':
			return '10';
		case 'Move11':
			return '11';
		default:
			return '12';
	}
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$offsetCountOption = function (size) {
	var _p3 = size;
	switch (_p3.ctor) {
		case 'Offset0':
			return '0';
		case 'Offset1':
			return '1';
		case 'Offset2':
			return '2';
		case 'Offset3':
			return '3';
		case 'Offset4':
			return '4';
		case 'Offset5':
			return '5';
		case 'Offset6':
			return '6';
		case 'Offset7':
			return '7';
		case 'Offset8':
			return '8';
		case 'Offset9':
			return '9';
		case 'Offset10':
			return '10';
		default:
			return '11';
	}
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$columnCountOption = function (size) {
	var _p4 = size;
	switch (_p4.ctor) {
		case 'Col':
			return _elm_lang$core$Maybe$Nothing;
		case 'Col1':
			return _elm_lang$core$Maybe$Just('1');
		case 'Col2':
			return _elm_lang$core$Maybe$Just('2');
		case 'Col3':
			return _elm_lang$core$Maybe$Just('3');
		case 'Col4':
			return _elm_lang$core$Maybe$Just('4');
		case 'Col5':
			return _elm_lang$core$Maybe$Just('5');
		case 'Col6':
			return _elm_lang$core$Maybe$Just('6');
		case 'Col7':
			return _elm_lang$core$Maybe$Just('7');
		case 'Col8':
			return _elm_lang$core$Maybe$Just('8');
		case 'Col9':
			return _elm_lang$core$Maybe$Just('9');
		case 'Col10':
			return _elm_lang$core$Maybe$Just('10');
		case 'Col11':
			return _elm_lang$core$Maybe$Just('11');
		case 'Col12':
			return _elm_lang$core$Maybe$Just('12');
		default:
			return _elm_lang$core$Maybe$Just('auto');
	}
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$screenSizeToPartialString = function (screenSize) {
	var _p5 = _rundis$elm_bootstrap$Bootstrap_General_Internal$screenSizeOption(screenSize);
	if (_p5.ctor === 'Just') {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'-',
			A2(_elm_lang$core$Basics_ops['++'], _p5._0, '-'));
	} else {
		return '-';
	}
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$hAlignsToAttributes = function (aligns) {
	var align = function (a) {
		return A2(_elm_lang$core$Maybe$map, _rundis$elm_bootstrap$Bootstrap_General_Internal$hAlignClass, a);
	};
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$core$Basics$identity,
		A2(_elm_lang$core$List$map, align, aligns));
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$vAlignClass = F2(
	function (prefix, _p6) {
		var _p7 = _p6;
		return _elm_lang$html$Html_Attributes$class(
			A2(
				_elm_lang$core$Basics_ops['++'],
				prefix,
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$Maybe$withDefault,
						'',
						A2(
							_elm_lang$core$Maybe$map,
							function (v) {
								return A2(_elm_lang$core$Basics_ops['++'], v, '-');
							},
							_rundis$elm_bootstrap$Bootstrap_General_Internal$screenSizeOption(_p7.screenSize))),
					_rundis$elm_bootstrap$Bootstrap_Grid_Internal$verticalAlignOption(_p7.align))));
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$vAlignsToAttributes = F2(
	function (prefix, aligns) {
		var align = function (a) {
			return A2(
				_elm_lang$core$Maybe$map,
				_rundis$elm_bootstrap$Bootstrap_Grid_Internal$vAlignClass(prefix),
				a);
		};
		return A2(
			_elm_lang$core$List$filterMap,
			_elm_lang$core$Basics$identity,
			A2(_elm_lang$core$List$map, align, aligns));
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$orderToAttributes = function (orders) {
	var order = function (m) {
		var _p8 = m;
		if (_p8.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				_elm_lang$html$Html_Attributes$class(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'order',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_rundis$elm_bootstrap$Bootstrap_Grid_Internal$screenSizeToPartialString(_p8._0.screenSize),
							_rundis$elm_bootstrap$Bootstrap_Grid_Internal$orderColOption(_p8._0.moveCount)))));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$core$Basics$identity,
		A2(_elm_lang$core$List$map, order, orders));
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$pushesToAttributes = function (pushes) {
	var push = function (m) {
		var _p9 = m;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				_elm_lang$html$Html_Attributes$class(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'push',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_rundis$elm_bootstrap$Bootstrap_Grid_Internal$screenSizeToPartialString(_p9._0.screenSize),
							_rundis$elm_bootstrap$Bootstrap_Grid_Internal$moveCountOption(_p9._0.moveCount)))));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$core$Basics$identity,
		A2(_elm_lang$core$List$map, push, pushes));
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$pullsToAttributes = function (pulls) {
	var pull = function (m) {
		var _p10 = m;
		if (_p10.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				_elm_lang$html$Html_Attributes$class(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'pull',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_rundis$elm_bootstrap$Bootstrap_Grid_Internal$screenSizeToPartialString(_p10._0.screenSize),
							_rundis$elm_bootstrap$Bootstrap_Grid_Internal$moveCountOption(_p10._0.moveCount)))));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$core$Basics$identity,
		A2(_elm_lang$core$List$map, pull, pulls));
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$offsetClass = function (_p11) {
	var _p12 = _p11;
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'offset',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_rundis$elm_bootstrap$Bootstrap_Grid_Internal$screenSizeToPartialString(_p12.screenSize),
				_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offsetCountOption(_p12.offsetCount))));
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$offsetsToAttributes = function (offsets) {
	var offset = function (m) {
		return A2(_elm_lang$core$Maybe$map, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$offsetClass, m);
	};
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$core$Basics$identity,
		A2(_elm_lang$core$List$map, offset, offsets));
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$colWidthClass = function (_p13) {
	var _p14 = _p13;
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'col',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					A2(
						_elm_lang$core$Maybe$map,
						function (v) {
							return A2(_elm_lang$core$Basics_ops['++'], '-', v);
						},
						_rundis$elm_bootstrap$Bootstrap_General_Internal$screenSizeOption(_p14.screenSize))),
				A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					A2(
						_elm_lang$core$Maybe$map,
						function (v) {
							return A2(_elm_lang$core$Basics_ops['++'], '-', v);
						},
						_rundis$elm_bootstrap$Bootstrap_Grid_Internal$columnCountOption(_p14.columnCount))))));
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$colWidthsToAttributes = function (widths) {
	var width = function (w) {
		return A2(_elm_lang$core$Maybe$map, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$colWidthClass, w);
	};
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$core$Basics$identity,
		A2(_elm_lang$core$List$map, width, widths));
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$defaultRowOptions = {
	attributes: {ctor: '[]'},
	vAlignXs: _elm_lang$core$Maybe$Nothing,
	vAlignSm: _elm_lang$core$Maybe$Nothing,
	vAlignMd: _elm_lang$core$Maybe$Nothing,
	vAlignLg: _elm_lang$core$Maybe$Nothing,
	vAlignXl: _elm_lang$core$Maybe$Nothing,
	hAlignXs: _elm_lang$core$Maybe$Nothing,
	hAlignSm: _elm_lang$core$Maybe$Nothing,
	hAlignMd: _elm_lang$core$Maybe$Nothing,
	hAlignLg: _elm_lang$core$Maybe$Nothing,
	hAlignXl: _elm_lang$core$Maybe$Nothing
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$defaultColOptions = {
	attributes: {ctor: '[]'},
	textAlign: _elm_lang$core$Maybe$Nothing,
	widthXs: _elm_lang$core$Maybe$Nothing,
	widthSm: _elm_lang$core$Maybe$Nothing,
	widthMd: _elm_lang$core$Maybe$Nothing,
	widthLg: _elm_lang$core$Maybe$Nothing,
	widthXl: _elm_lang$core$Maybe$Nothing,
	offsetXs: _elm_lang$core$Maybe$Nothing,
	offsetSm: _elm_lang$core$Maybe$Nothing,
	offsetMd: _elm_lang$core$Maybe$Nothing,
	offsetLg: _elm_lang$core$Maybe$Nothing,
	offsetXl: _elm_lang$core$Maybe$Nothing,
	pullXs: _elm_lang$core$Maybe$Nothing,
	pullSm: _elm_lang$core$Maybe$Nothing,
	pullMd: _elm_lang$core$Maybe$Nothing,
	pullLg: _elm_lang$core$Maybe$Nothing,
	pullXl: _elm_lang$core$Maybe$Nothing,
	pushXs: _elm_lang$core$Maybe$Nothing,
	pushSm: _elm_lang$core$Maybe$Nothing,
	pushMd: _elm_lang$core$Maybe$Nothing,
	pushLg: _elm_lang$core$Maybe$Nothing,
	pushXl: _elm_lang$core$Maybe$Nothing,
	orderXs: _elm_lang$core$Maybe$Nothing,
	orderSm: _elm_lang$core$Maybe$Nothing,
	orderMd: _elm_lang$core$Maybe$Nothing,
	orderLg: _elm_lang$core$Maybe$Nothing,
	orderXl: _elm_lang$core$Maybe$Nothing,
	alignXs: _elm_lang$core$Maybe$Nothing,
	alignSm: _elm_lang$core$Maybe$Nothing,
	alignMd: _elm_lang$core$Maybe$Nothing,
	alignLg: _elm_lang$core$Maybe$Nothing,
	alignXl: _elm_lang$core$Maybe$Nothing
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyRowHAlign = F2(
	function (align, options) {
		var _p15 = align.screenSize;
		switch (_p15.ctor) {
			case 'XS':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						hAlignXs: _elm_lang$core$Maybe$Just(align)
					});
			case 'SM':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						hAlignSm: _elm_lang$core$Maybe$Just(align)
					});
			case 'MD':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						hAlignMd: _elm_lang$core$Maybe$Just(align)
					});
			case 'LG':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						hAlignLg: _elm_lang$core$Maybe$Just(align)
					});
			default:
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						hAlignXl: _elm_lang$core$Maybe$Just(align)
					});
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyRowVAlign = F2(
	function (align, options) {
		var _p16 = align.screenSize;
		switch (_p16.ctor) {
			case 'XS':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						vAlignXs: _elm_lang$core$Maybe$Just(align)
					});
			case 'SM':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						vAlignSm: _elm_lang$core$Maybe$Just(align)
					});
			case 'MD':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						vAlignMd: _elm_lang$core$Maybe$Just(align)
					});
			case 'LG':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						vAlignLg: _elm_lang$core$Maybe$Just(align)
					});
			default:
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						vAlignXl: _elm_lang$core$Maybe$Just(align)
					});
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyRowOption = F2(
	function (modifier, options) {
		var _p17 = modifier;
		switch (_p17.ctor) {
			case 'RowAttrs':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						attributes: A2(_elm_lang$core$Basics_ops['++'], options.attributes, _p17._0)
					});
			case 'RowVAlign':
				return A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyRowVAlign, _p17._0, options);
			default:
				return A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyRowHAlign, _p17._0, options);
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyColAlign = F2(
	function (align, options) {
		var _p18 = align.screenSize;
		switch (_p18.ctor) {
			case 'XS':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						alignXs: _elm_lang$core$Maybe$Just(align)
					});
			case 'SM':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						alignSm: _elm_lang$core$Maybe$Just(align)
					});
			case 'MD':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						alignMd: _elm_lang$core$Maybe$Just(align)
					});
			case 'LG':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						alignLg: _elm_lang$core$Maybe$Just(align)
					});
			default:
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						alignXl: _elm_lang$core$Maybe$Just(align)
					});
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyColOrder = F2(
	function (order, options) {
		var _p19 = order.screenSize;
		switch (_p19.ctor) {
			case 'XS':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						orderXs: _elm_lang$core$Maybe$Just(order)
					});
			case 'SM':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						orderSm: _elm_lang$core$Maybe$Just(order)
					});
			case 'MD':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						orderMd: _elm_lang$core$Maybe$Just(order)
					});
			case 'LG':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						orderLg: _elm_lang$core$Maybe$Just(order)
					});
			default:
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						orderXl: _elm_lang$core$Maybe$Just(order)
					});
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyColPush = F2(
	function (push, options) {
		var _p20 = push.screenSize;
		switch (_p20.ctor) {
			case 'XS':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						pushXs: _elm_lang$core$Maybe$Just(push)
					});
			case 'SM':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						pushSm: _elm_lang$core$Maybe$Just(push)
					});
			case 'MD':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						pushMd: _elm_lang$core$Maybe$Just(push)
					});
			case 'LG':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						pushLg: _elm_lang$core$Maybe$Just(push)
					});
			default:
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						pushXl: _elm_lang$core$Maybe$Just(push)
					});
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyColPull = F2(
	function (pull, options) {
		var _p21 = pull.screenSize;
		switch (_p21.ctor) {
			case 'XS':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						pullXs: _elm_lang$core$Maybe$Just(pull)
					});
			case 'SM':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						pullSm: _elm_lang$core$Maybe$Just(pull)
					});
			case 'MD':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						pullMd: _elm_lang$core$Maybe$Just(pull)
					});
			case 'LG':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						pullLg: _elm_lang$core$Maybe$Just(pull)
					});
			default:
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						pullXl: _elm_lang$core$Maybe$Just(pull)
					});
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyColOffset = F2(
	function (offset, options) {
		var _p22 = offset.screenSize;
		switch (_p22.ctor) {
			case 'XS':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						offsetXs: _elm_lang$core$Maybe$Just(offset)
					});
			case 'SM':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						offsetSm: _elm_lang$core$Maybe$Just(offset)
					});
			case 'MD':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						offsetMd: _elm_lang$core$Maybe$Just(offset)
					});
			case 'LG':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						offsetLg: _elm_lang$core$Maybe$Just(offset)
					});
			default:
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						offsetXl: _elm_lang$core$Maybe$Just(offset)
					});
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyColWidth = F2(
	function (width, options) {
		var _p23 = width.screenSize;
		switch (_p23.ctor) {
			case 'XS':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						widthXs: _elm_lang$core$Maybe$Just(width)
					});
			case 'SM':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						widthSm: _elm_lang$core$Maybe$Just(width)
					});
			case 'MD':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						widthMd: _elm_lang$core$Maybe$Just(width)
					});
			case 'LG':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						widthLg: _elm_lang$core$Maybe$Just(width)
					});
			default:
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						widthXl: _elm_lang$core$Maybe$Just(width)
					});
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyColOption = F2(
	function (modifier, options) {
		var _p24 = modifier;
		switch (_p24.ctor) {
			case 'ColAttrs':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						attributes: A2(_elm_lang$core$Basics_ops['++'], options.attributes, _p24._0)
					});
			case 'ColWidth':
				return A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyColWidth, _p24._0, options);
			case 'ColOffset':
				return A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyColOffset, _p24._0, options);
			case 'ColPull':
				return A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyColPull, _p24._0, options);
			case 'ColPush':
				return A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyColPush, _p24._0, options);
			case 'ColOrder':
				return A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyColOrder, _p24._0, options);
			case 'ColAlign':
				return A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyColAlign, _p24._0, options);
			default:
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						textAlign: _elm_lang$core$Maybe$Just(_p24._0)
					});
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowAttributes = function (modifiers) {
	var options = A3(_elm_lang$core$List$foldl, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyRowOption, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$defaultRowOptions, modifiers);
	return A2(
		_elm_lang$core$Basics_ops['++'],
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('row'),
			_1: {ctor: '[]'}
		},
		A2(
			_elm_lang$core$Basics_ops['++'],
			A2(
				_rundis$elm_bootstrap$Bootstrap_Grid_Internal$vAlignsToAttributes,
				'align-items-',
				{
					ctor: '::',
					_0: options.vAlignXs,
					_1: {
						ctor: '::',
						_0: options.vAlignSm,
						_1: {
							ctor: '::',
							_0: options.vAlignMd,
							_1: {
								ctor: '::',
								_0: options.vAlignLg,
								_1: {
									ctor: '::',
									_0: options.vAlignXl,
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}),
			A2(
				_elm_lang$core$Basics_ops['++'],
				_rundis$elm_bootstrap$Bootstrap_Grid_Internal$hAlignsToAttributes(
					{
						ctor: '::',
						_0: options.hAlignXs,
						_1: {
							ctor: '::',
							_0: options.hAlignSm,
							_1: {
								ctor: '::',
								_0: options.hAlignMd,
								_1: {
									ctor: '::',
									_0: options.hAlignLg,
									_1: {
										ctor: '::',
										_0: options.hAlignXl,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}),
				options.attributes)));
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Width = F2(
	function (a, b) {
		return {screenSize: a, columnCount: b};
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset = F2(
	function (a, b) {
		return {screenSize: a, offsetCount: b};
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Pull = F2(
	function (a, b) {
		return {screenSize: a, moveCount: b};
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Push = F2(
	function (a, b) {
		return {screenSize: a, moveCount: b};
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order = F2(
	function (a, b) {
		return {screenSize: a, moveCount: b};
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$VAlign = F2(
	function (a, b) {
		return {screenSize: a, align: b};
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColOptions = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return function (r) {
																		return function (s) {
																			return function (t) {
																				return function (u) {
																					return function (v) {
																						return function (w) {
																							return function (x) {
																								return function (y) {
																									return function (z) {
																										return function (_1) {
																											return function (_2) {
																												return function (_3) {
																													return function (_4) {
																														return function (_5) {
																															return function (_6) {
																																return {attributes: a, textAlign: b, widthXs: c, widthSm: d, widthMd: e, widthLg: f, widthXl: g, offsetXs: h, offsetSm: i, offsetMd: j, offsetLg: k, offsetXl: l, pullXs: m, pullSm: n, pullMd: o, pullLg: p, pullXl: q, pushXs: r, pushSm: s, pushMd: t, pushLg: u, pushXl: v, orderXs: w, orderSm: x, orderMd: y, orderLg: z, orderXl: _1, alignXs: _2, alignSm: _3, alignMd: _4, alignLg: _5, alignXl: _6};
																															};
																														};
																													};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$RowOptions = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {attributes: a, vAlignXs: b, vAlignSm: c, vAlignMd: d, vAlignLg: e, vAlignXl: f, hAlignXs: g, hAlignSm: h, hAlignMd: i, hAlignLg: j, hAlignXl: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$TextAlign = function (a) {
	return {ctor: 'TextAlign', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColAttrs = function (a) {
	return {ctor: 'ColAttrs', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColAlign = function (a) {
	return {ctor: 'ColAlign', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign = F2(
	function (size, align) {
		return _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColAlign(
			A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$VAlign, size, align));
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColOrder = function (a) {
	return {ctor: 'ColOrder', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$order = F2(
	function (size, count) {
		return _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColOrder(
			A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order, size, count));
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColPush = function (a) {
	return {ctor: 'ColPush', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$push = F2(
	function (size, count) {
		return _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColPush(
			A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$Push, size, count));
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColPull = function (a) {
	return {ctor: 'ColPull', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull = F2(
	function (size, count) {
		return _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColPull(
			A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$Pull, size, count));
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColOffset = function (a) {
	return {ctor: 'ColOffset', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset = F2(
	function (size, count) {
		return _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColOffset(
			A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset, size, count));
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColWidth = function (a) {
	return {ctor: 'ColWidth', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$width = F2(
	function (size, count) {
		return _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColWidth(
			A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$Width, size, count));
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$RowAttrs = function (a) {
	return {ctor: 'RowAttrs', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$RowHAlign = function (a) {
	return {ctor: 'RowHAlign', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign = F2(
	function (size, align) {
		return _rundis$elm_bootstrap$Bootstrap_Grid_Internal$RowHAlign(
			A2(_rundis$elm_bootstrap$Bootstrap_General_Internal$HAlign, size, align));
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$RowVAlign = function (a) {
	return {ctor: 'RowVAlign', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign = F2(
	function (size, align) {
		return _rundis$elm_bootstrap$Bootstrap_Grid_Internal$RowVAlign(
			A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$VAlign, size, align));
	});
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColAuto = {ctor: 'ColAuto'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col12 = {ctor: 'Col12'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col11 = {ctor: 'Col11'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col10 = {ctor: 'Col10'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col9 = {ctor: 'Col9'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col8 = {ctor: 'Col8'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col7 = {ctor: 'Col7'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col6 = {ctor: 'Col6'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col5 = {ctor: 'Col5'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col4 = {ctor: 'Col4'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col3 = {ctor: 'Col3'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col2 = {ctor: 'Col2'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col1 = {ctor: 'Col1'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col = {ctor: 'Col'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$colAttributes = function (modifiers) {
	var options = A3(_elm_lang$core$List$foldl, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$applyColOption, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$defaultColOptions, modifiers);
	var shouldAddDefaultXs = _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$List$length(
			A2(
				_elm_lang$core$List$filterMap,
				_elm_lang$core$Basics$identity,
				{
					ctor: '::',
					_0: options.widthXs,
					_1: {
						ctor: '::',
						_0: options.widthSm,
						_1: {
							ctor: '::',
							_0: options.widthMd,
							_1: {
								ctor: '::',
								_0: options.widthLg,
								_1: {
									ctor: '::',
									_0: options.widthXl,
									_1: {ctor: '[]'}
								}
							}
						}
					}
				})),
		0);
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colWidthsToAttributes(
			{
				ctor: '::',
				_0: shouldAddDefaultXs ? _elm_lang$core$Maybe$Just(
					A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$Width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col)) : options.widthXs,
				_1: {
					ctor: '::',
					_0: options.widthSm,
					_1: {
						ctor: '::',
						_0: options.widthMd,
						_1: {
							ctor: '::',
							_0: options.widthLg,
							_1: {
								ctor: '::',
								_0: options.widthXl,
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}),
		A2(
			_elm_lang$core$Basics_ops['++'],
			_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offsetsToAttributes(
				{
					ctor: '::',
					_0: options.offsetXs,
					_1: {
						ctor: '::',
						_0: options.offsetSm,
						_1: {
							ctor: '::',
							_0: options.offsetMd,
							_1: {
								ctor: '::',
								_0: options.offsetLg,
								_1: {
									ctor: '::',
									_0: options.offsetXl,
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}),
			A2(
				_elm_lang$core$Basics_ops['++'],
				_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pullsToAttributes(
					{
						ctor: '::',
						_0: options.pullXs,
						_1: {
							ctor: '::',
							_0: options.pullSm,
							_1: {
								ctor: '::',
								_0: options.pullMd,
								_1: {
									ctor: '::',
									_0: options.pullLg,
									_1: {
										ctor: '::',
										_0: options.pullXl,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}),
				A2(
					_elm_lang$core$Basics_ops['++'],
					_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pushesToAttributes(
						{
							ctor: '::',
							_0: options.pushXs,
							_1: {
								ctor: '::',
								_0: options.pushSm,
								_1: {
									ctor: '::',
									_0: options.pushMd,
									_1: {
										ctor: '::',
										_0: options.pushLg,
										_1: {
											ctor: '::',
											_0: options.pushXl,
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}),
					A2(
						_elm_lang$core$Basics_ops['++'],
						_rundis$elm_bootstrap$Bootstrap_Grid_Internal$orderToAttributes(
							{
								ctor: '::',
								_0: options.orderXs,
								_1: {
									ctor: '::',
									_0: options.orderSm,
									_1: {
										ctor: '::',
										_0: options.orderMd,
										_1: {
											ctor: '::',
											_0: options.orderLg,
											_1: {
												ctor: '::',
												_0: options.orderXl,
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}),
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(
								_rundis$elm_bootstrap$Bootstrap_Grid_Internal$vAlignsToAttributes,
								'align-self-',
								{
									ctor: '::',
									_0: options.alignXs,
									_1: {
										ctor: '::',
										_0: options.alignSm,
										_1: {
											ctor: '::',
											_0: options.alignMd,
											_1: {
												ctor: '::',
												_0: options.alignLg,
												_1: {
													ctor: '::',
													_0: options.alignXl,
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}),
							function () {
								var _p25 = options.textAlign;
								if (_p25.ctor === 'Just') {
									return {
										ctor: '::',
										_0: _rundis$elm_bootstrap$Bootstrap_Internal_Text$textAlignClass(_p25._0),
										_1: {ctor: '[]'}
									};
								} else {
									return A2(
										_elm_lang$core$Basics_ops['++'],
										{ctor: '[]'},
										options.attributes);
								}
							}()))))));
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset11 = {ctor: 'Offset11'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset10 = {ctor: 'Offset10'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset9 = {ctor: 'Offset9'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset8 = {ctor: 'Offset8'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset7 = {ctor: 'Offset7'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset6 = {ctor: 'Offset6'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset5 = {ctor: 'Offset5'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset4 = {ctor: 'Offset4'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset3 = {ctor: 'Offset3'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset2 = {ctor: 'Offset2'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset1 = {ctor: 'Offset1'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset0 = {ctor: 'Offset0'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move12 = {ctor: 'Move12'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move11 = {ctor: 'Move11'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move10 = {ctor: 'Move10'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move9 = {ctor: 'Move9'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move8 = {ctor: 'Move8'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move7 = {ctor: 'Move7'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move6 = {ctor: 'Move6'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move5 = {ctor: 'Move5'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move4 = {ctor: 'Move4'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move3 = {ctor: 'Move3'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move2 = {ctor: 'Move2'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move1 = {ctor: 'Move1'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move0 = {ctor: 'Move0'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$OrderLast = {ctor: 'OrderLast'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order12 = {ctor: 'Order12'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order11 = {ctor: 'Order11'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order10 = {ctor: 'Order10'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order9 = {ctor: 'Order9'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order8 = {ctor: 'Order8'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order7 = {ctor: 'Order7'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order6 = {ctor: 'Order6'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order5 = {ctor: 'Order5'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order4 = {ctor: 'Order4'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order3 = {ctor: 'Order3'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order2 = {ctor: 'Order2'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order1 = {ctor: 'Order1'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$OrderFirst = {ctor: 'OrderFirst'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Bottom = {ctor: 'Bottom'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Middle = {ctor: 'Middle'};
var _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Top = {ctor: 'Top'};

var _rundis$elm_bootstrap$Bootstrap_Grid_Row$betweenXl = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_General_Internal$Between);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$betweenLg = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_General_Internal$Between);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$betweenMd = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_General_Internal$Between);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$betweenSm = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_General_Internal$Between);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$betweenXs = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_General_Internal$Between);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$aroundXl = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_General_Internal$Around);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$aroundLg = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_General_Internal$Around);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$aroundMd = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_General_Internal$Around);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$aroundSm = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_General_Internal$Around);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$aroundXs = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_General_Internal$Around);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$rightXl = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_General_Internal$Right);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$rightLg = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_General_Internal$Right);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$rightMd = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_General_Internal$Right);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$rightSm = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_General_Internal$Right);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$rightXs = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_General_Internal$Right);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$centerXl = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_General_Internal$Center);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$centerLg = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_General_Internal$Center);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$centerMd = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_General_Internal$Center);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$centerSm = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_General_Internal$Center);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$centerXs = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_General_Internal$Center);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$leftXl = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_General_Internal$Left);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$leftLg = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_General_Internal$Left);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$leftMd = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_General_Internal$Left);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$leftSm = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_General_Internal$Left);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$leftXs = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowHAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_General_Internal$Left);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$bottomXl = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Bottom);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$bottomLg = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Bottom);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$bottomMd = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Bottom);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$bottomSm = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Bottom);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$bottomXs = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Bottom);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$middleXl = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Middle);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$middleLg = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Middle);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$middleMd = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Middle);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$middleSm = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Middle);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$middleXs = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Middle);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$topXl = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Top);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$topLg = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Top);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$topMd = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Top);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$topSm = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Top);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$topXs = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Top);
var _rundis$elm_bootstrap$Bootstrap_Grid_Row$attrs = function (attrs) {
	return _rundis$elm_bootstrap$Bootstrap_Grid_Internal$RowAttrs(attrs);
};

var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXlLast = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$OrderLast);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXl12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXl11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXl10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXl9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXl8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXl7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXl6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXl5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXl4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXl3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXl2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXl1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXlFirst = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$OrderFirst);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderLgLast = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$OrderLast);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderLg12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderLg11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderLg10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderLg9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderLg8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderLg7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderLg6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderLg5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderLg4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderLg3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderLg2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderLg1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderLgFirst = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$OrderFirst);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderMdLast = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$OrderLast);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderMd12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderMd11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderMd10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderMd9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderMd8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderMd7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderMd6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderMd5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderMd4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderMd3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderMd2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderMd1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderMdFirst = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$OrderFirst);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderSmLast = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$OrderLast);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderSm12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderSm11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderSm10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderSm9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderSm8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderSm7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderSm6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderSm5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderSm4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderSm3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderSm2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderSm1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderSmFirst = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$OrderFirst);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXsLast = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$OrderLast);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXs12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXs11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXs10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXs9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXs8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXs7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXs6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXs5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXs4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXs3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXs2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXs1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Order1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$orderXsFirst = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$order, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$OrderFirst);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXl12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXl11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXl10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXl9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXl8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXl7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXl6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXl5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXl4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXl3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXl2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXl1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXl0 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move0);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushLg12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushLg11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushLg10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushLg9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushLg8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushLg7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushLg6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushLg5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushLg4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushLg3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushLg2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushLg1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushLg0 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move0);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushMd12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushMd11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushMd10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushMd9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushMd8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushMd7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushMd6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushMd5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushMd4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushMd3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushMd2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushMd1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushMd0 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move0);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushSm12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushSm11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushSm10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushSm9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushSm8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushSm7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushSm6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushSm5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushSm4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushSm3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushSm2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushSm1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushSm0 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move0);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXs12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXs11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXs10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXs9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXs8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXs7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXs6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXs5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXs4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXs3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXs2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXs1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pushXs0 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$push, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move0);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXl12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXl11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXl10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXl9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXl8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXl7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXl6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXl5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXl4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXl3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXl2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXl1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXl0 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move0);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullLg12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullLg11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullLg10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullLg9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullLg8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullLg7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullLg6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullLg5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullLg4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullLg3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullLg2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullLg1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullLg0 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move0);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullMd12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullMd11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullMd10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullMd9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullMd8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullMd7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullMd6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullMd5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullMd4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullMd3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullMd2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullMd1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullMd0 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move0);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullSm12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullSm11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullSm10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullSm9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullSm8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullSm7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullSm6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullSm5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullSm4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullSm3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullSm2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullSm1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullSm0 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move0);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXs12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXs11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXs10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXs9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXs8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXs7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXs6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXs5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXs4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXs3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXs2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXs1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$pullXs0 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$pull, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Move0);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXl11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXl10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXl9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXl8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXl7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXl6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXl5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXl4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXl3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXl2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXl1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXl0 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset0);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetLg11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetLg10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetLg9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetLg8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetLg7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetLg6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetLg5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetLg4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetLg3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetLg2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetLg1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetLg0 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset0);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetMd11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetMd10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetMd9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetMd8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetMd7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetMd6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetMd5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetMd4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetMd3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetMd2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetMd1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetMd0 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset0);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetSm11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetSm10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetSm9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetSm8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetSm7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetSm6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetSm5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetSm4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetSm3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetSm2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetSm1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetSm0 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset0);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXs11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXs10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXs9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXs8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXs7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXs6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXs5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXs4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXs3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXs2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$offsetXs1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$offset, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Offset1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xlAuto = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColAuto);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xl12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xl11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xl10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xl9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xl8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xl7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xl6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xl5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xl4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xl3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xl2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xl1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xl = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$lgAuto = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColAuto);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$lg12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$lg11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$lg10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$lg9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$lg8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$lg7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$lg6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$lg5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$lg4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$lg3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$lg2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$lg1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$lg = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$mdAuto = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColAuto);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$md12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$md11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$md10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$md9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$md8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$md7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$md6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$md5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$md4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$md3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$md2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$md1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$md = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$smAuto = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColAuto);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$sm12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$sm11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$sm10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$sm9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$sm8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$sm7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$sm6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$sm5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$sm4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$sm3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$sm2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$sm1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$sm = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xsAuto = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColAuto);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xs12 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col12);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xs11 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col11);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xs10 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col10);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xs9 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col9);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xs8 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col8);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xs7 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col7);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xs6 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col6);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xs5 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col5);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xs4 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col4);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xs3 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col3);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xs2 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col2);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xs1 = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col1);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$xs = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$width, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Col);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$bottomXl = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Bottom);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$bottomLg = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Bottom);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$bottomMd = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Bottom);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$bottomSm = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Bottom);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$bottomXs = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Bottom);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$middleXl = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Middle);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$middleLg = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Middle);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$middleMd = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Middle);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$middleSm = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Middle);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$middleXs = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Middle);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$topXl = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XL, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Top);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$topLg = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$LG, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Top);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$topMd = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$MD, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Top);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$topSm = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$SM, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Top);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$topXs = A2(_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colVAlign, _rundis$elm_bootstrap$Bootstrap_General_Internal$XS, _rundis$elm_bootstrap$Bootstrap_Grid_Internal$Top);
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$textAlign = function (align) {
	return _rundis$elm_bootstrap$Bootstrap_Grid_Internal$TextAlign(align);
};
var _rundis$elm_bootstrap$Bootstrap_Grid_Col$attrs = function (attrs) {
	return _rundis$elm_bootstrap$Bootstrap_Grid_Internal$ColAttrs(attrs);
};

var _rundis$elm_bootstrap$Bootstrap_Form$renderCol = function (_p0) {
	var _p1 = _p0;
	return A2(
		_p1._0.elemFn,
		_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colAttributes(_p1._0.options),
		_p1._0.children);
};
var _rundis$elm_bootstrap$Bootstrap_Form$row = F2(
	function (options, cols) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('form-group'),
				_1: _rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowAttributes(options)
			},
			A2(_elm_lang$core$List$map, _rundis$elm_bootstrap$Bootstrap_Form$renderCol, cols));
	});
var _rundis$elm_bootstrap$Bootstrap_Form$applyModifier = F2(
	function (modifier, options) {
		var _p2 = modifier;
		return _elm_lang$core$Native_Utils.update(
			options,
			{
				attributes: A2(_elm_lang$core$Basics_ops['++'], options.attributes, _p2._0)
			});
	});
var _rundis$elm_bootstrap$Bootstrap_Form$defaultOptions = {
	attributes: {ctor: '[]'}
};
var _rundis$elm_bootstrap$Bootstrap_Form$toAttributes = function (modifiers) {
	var options = A3(_elm_lang$core$List$foldl, _rundis$elm_bootstrap$Bootstrap_Form$applyModifier, _rundis$elm_bootstrap$Bootstrap_Form$defaultOptions, modifiers);
	return A2(
		_elm_lang$core$Basics_ops['++'],
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('form-group'),
			_1: {ctor: '[]'}
		},
		options.attributes);
};
var _rundis$elm_bootstrap$Bootstrap_Form$invalidFeedback = F2(
	function (attributes, children) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('invalid-feedback'),
				_1: attributes
			},
			children);
	});
var _rundis$elm_bootstrap$Bootstrap_Form$validFeedback = F2(
	function (attributes, children) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('valid-feedback'),
				_1: attributes
			},
			children);
	});
var _rundis$elm_bootstrap$Bootstrap_Form$helpInline = F2(
	function (attributes, children) {
		return A2(
			_elm_lang$html$Html$small,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('text-muted'),
				_1: attributes
			},
			children);
	});
var _rundis$elm_bootstrap$Bootstrap_Form$help = F2(
	function (attributes, children) {
		return A2(
			_elm_lang$html$Html$small,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('form-text text-muted'),
				_1: attributes
			},
			children);
	});
var _rundis$elm_bootstrap$Bootstrap_Form$label = F2(
	function (attributes, children) {
		return A2(
			_elm_lang$html$Html$label,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('form-control-label'),
				_1: attributes
			},
			children);
	});
var _rundis$elm_bootstrap$Bootstrap_Form$group = F2(
	function (options, children) {
		return A2(
			_elm_lang$html$Html$div,
			_rundis$elm_bootstrap$Bootstrap_Form$toAttributes(options),
			children);
	});
var _rundis$elm_bootstrap$Bootstrap_Form$form = F2(
	function (attributes, children) {
		return A2(_elm_lang$html$Html$form, attributes, children);
	});
var _rundis$elm_bootstrap$Bootstrap_Form$formInline = function (attributes) {
	return _rundis$elm_bootstrap$Bootstrap_Form$form(
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('form-inline'),
			_1: attributes
		});
};
var _rundis$elm_bootstrap$Bootstrap_Form$Options = function (a) {
	return {attributes: a};
};
var _rundis$elm_bootstrap$Bootstrap_Form$Col = function (a) {
	return {ctor: 'Col', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Form$col = F2(
	function (options, children) {
		return _rundis$elm_bootstrap$Bootstrap_Form$Col(
			{elemFn: _elm_lang$html$Html$div, options: options, children: children});
	});
var _rundis$elm_bootstrap$Bootstrap_Form$colLabel = F2(
	function (options, children) {
		return _rundis$elm_bootstrap$Bootstrap_Form$Col(
			{
				elemFn: _elm_lang$html$Html$label,
				options: {
					ctor: '::',
					_0: _rundis$elm_bootstrap$Bootstrap_Grid_Col$attrs(
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('col-form-label'),
							_1: {ctor: '[]'}
						}),
					_1: options
				},
				children: children
			});
	});
var _rundis$elm_bootstrap$Bootstrap_Form$colLabelSm = function (options) {
	return _rundis$elm_bootstrap$Bootstrap_Form$colLabel(
		{
			ctor: '::',
			_0: _rundis$elm_bootstrap$Bootstrap_Grid_Col$attrs(
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('col-form-label-sm'),
					_1: {ctor: '[]'}
				}),
			_1: options
		});
};
var _rundis$elm_bootstrap$Bootstrap_Form$colLabelLg = function (options) {
	return _rundis$elm_bootstrap$Bootstrap_Form$colLabel(
		{
			ctor: '::',
			_0: _rundis$elm_bootstrap$Bootstrap_Grid_Col$attrs(
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('col-form-label-lg'),
					_1: {ctor: '[]'}
				}),
			_1: options
		});
};
var _rundis$elm_bootstrap$Bootstrap_Form$Attrs = function (a) {
	return {ctor: 'Attrs', _0: a};
};

var _rundis$elm_bootstrap$Bootstrap_Form_FormInternal$validationToString = function (validation) {
	var _p0 = validation;
	if (_p0.ctor === 'Success') {
		return 'is-valid';
	} else {
		return 'is-invalid';
	}
};
var _rundis$elm_bootstrap$Bootstrap_Form_FormInternal$validationWrapperAttribute = function (validation) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'has-',
			_rundis$elm_bootstrap$Bootstrap_Form_FormInternal$validationToString(validation)));
};
var _rundis$elm_bootstrap$Bootstrap_Form_FormInternal$Danger = {ctor: 'Danger'};
var _rundis$elm_bootstrap$Bootstrap_Form_FormInternal$Success = {ctor: 'Success'};

var _rundis$elm_bootstrap$Bootstrap_Form_Input$validationAttribute = function (validation) {
	return _elm_lang$html$Html_Attributes$class(
		_rundis$elm_bootstrap$Bootstrap_Form_FormInternal$validationToString(validation));
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$typeAttribute = function (inputType) {
	return _elm_lang$html$Html_Attributes$type_(
		function () {
			var _p0 = inputType;
			switch (_p0.ctor) {
				case 'Text':
					return 'text';
				case 'Password':
					return 'password';
				case 'DatetimeLocal':
					return 'datetime-local';
				case 'Date':
					return 'date';
				case 'Month':
					return 'month';
				case 'Time':
					return 'time';
				case 'Week':
					return 'week';
				case 'Number':
					return 'number';
				case 'Email':
					return 'email';
				case 'Url':
					return 'url';
				case 'Search':
					return 'search';
				case 'Tel':
					return 'tel';
				default:
					return 'color';
			}
		}());
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$sizeAttribute = function (size) {
	return A2(
		_elm_lang$core$Maybe$map,
		function (s) {
			return _elm_lang$html$Html_Attributes$class(
				A2(_elm_lang$core$Basics_ops['++'], 'form-control-', s));
		},
		_rundis$elm_bootstrap$Bootstrap_General_Internal$screenSizeOption(size));
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$applyModifier = F2(
	function (modifier, options) {
		var _p1 = modifier;
		switch (_p1.ctor) {
			case 'Size':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						size: _elm_lang$core$Maybe$Just(_p1._0)
					});
			case 'Id':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						id: _elm_lang$core$Maybe$Just(_p1._0)
					});
			case 'Type':
				return _elm_lang$core$Native_Utils.update(
					options,
					{tipe: _p1._0});
			case 'Disabled':
				return _elm_lang$core$Native_Utils.update(
					options,
					{disabled: _p1._0});
			case 'Value':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						value: _elm_lang$core$Maybe$Just(_p1._0)
					});
			case 'DefaultValue':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						defaultValue: _elm_lang$core$Maybe$Just(_p1._0)
					});
			case 'Placeholder':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						placeholder: _elm_lang$core$Maybe$Just(_p1._0)
					});
			case 'OnInput':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						onInput: _elm_lang$core$Maybe$Just(_p1._0)
					});
			case 'Validation':
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						validation: _elm_lang$core$Maybe$Just(_p1._0)
					});
			case 'Readonly':
				return _elm_lang$core$Native_Utils.update(
					options,
					{readonly: _p1._0});
			default:
				return _elm_lang$core$Native_Utils.update(
					options,
					{
						attributes: A2(_elm_lang$core$Basics_ops['++'], options.attributes, _p1._0)
					});
		}
	});
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Options = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {tipe: a, id: b, size: c, disabled: d, value: e, defaultValue: f, placeholder: g, onInput: h, validation: i, readonly: j, attributes: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Input = function (a) {
	return {ctor: 'Input', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Attrs = function (a) {
	return {ctor: 'Attrs', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$attrs = function (attrs) {
	return _rundis$elm_bootstrap$Bootstrap_Form_Input$Attrs(attrs);
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Readonly = function (a) {
	return {ctor: 'Readonly', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$readonly = function (readonly) {
	return _rundis$elm_bootstrap$Bootstrap_Form_Input$Readonly(readonly);
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Placeholder = function (a) {
	return {ctor: 'Placeholder', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$placeholder = function (value) {
	return _rundis$elm_bootstrap$Bootstrap_Form_Input$Placeholder(value);
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Validation = function (a) {
	return {ctor: 'Validation', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$success = _rundis$elm_bootstrap$Bootstrap_Form_Input$Validation(_rundis$elm_bootstrap$Bootstrap_Form_FormInternal$Success);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$danger = _rundis$elm_bootstrap$Bootstrap_Form_Input$Validation(_rundis$elm_bootstrap$Bootstrap_Form_FormInternal$Danger);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$OnInput = function (a) {
	return {ctor: 'OnInput', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$onInput = function (toMsg) {
	return _rundis$elm_bootstrap$Bootstrap_Form_Input$OnInput(toMsg);
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$DefaultValue = function (a) {
	return {ctor: 'DefaultValue', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$defaultValue = function (value) {
	return _rundis$elm_bootstrap$Bootstrap_Form_Input$DefaultValue(value);
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Value = function (a) {
	return {ctor: 'Value', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$value = function (value) {
	return _rundis$elm_bootstrap$Bootstrap_Form_Input$Value(value);
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Disabled = function (a) {
	return {ctor: 'Disabled', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$disabled = function (disabled) {
	return _rundis$elm_bootstrap$Bootstrap_Form_Input$Disabled(disabled);
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Type = function (a) {
	return {ctor: 'Type', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$create = F2(
	function (tipe, options) {
		return _rundis$elm_bootstrap$Bootstrap_Form_Input$Input(
			{
				options: {
					ctor: '::',
					_0: _rundis$elm_bootstrap$Bootstrap_Form_Input$Type(tipe),
					_1: options
				}
			});
	});
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Id = function (a) {
	return {ctor: 'Id', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$id = function (id) {
	return _rundis$elm_bootstrap$Bootstrap_Form_Input$Id(id);
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Size = function (a) {
	return {ctor: 'Size', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$small = _rundis$elm_bootstrap$Bootstrap_Form_Input$Size(_rundis$elm_bootstrap$Bootstrap_General_Internal$SM);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$large = _rundis$elm_bootstrap$Bootstrap_Form_Input$Size(_rundis$elm_bootstrap$Bootstrap_General_Internal$LG);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Color = {ctor: 'Color'};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Tel = {ctor: 'Tel'};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Search = {ctor: 'Search'};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Url = {ctor: 'Url'};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Email = {ctor: 'Email'};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Number = {ctor: 'Number'};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Week = {ctor: 'Week'};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Time = {ctor: 'Time'};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Month = {ctor: 'Month'};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Date = {ctor: 'Date'};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$DatetimeLocal = {ctor: 'DatetimeLocal'};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Password = {ctor: 'Password'};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$Text = {ctor: 'Text'};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$defaultOptions = {
	tipe: _rundis$elm_bootstrap$Bootstrap_Form_Input$Text,
	id: _elm_lang$core$Maybe$Nothing,
	size: _elm_lang$core$Maybe$Nothing,
	disabled: false,
	value: _elm_lang$core$Maybe$Nothing,
	defaultValue: _elm_lang$core$Maybe$Nothing,
	placeholder: _elm_lang$core$Maybe$Nothing,
	onInput: _elm_lang$core$Maybe$Nothing,
	validation: _elm_lang$core$Maybe$Nothing,
	readonly: false,
	attributes: {ctor: '[]'}
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$toAttributes = function (modifiers) {
	var options = A3(_elm_lang$core$List$foldl, _rundis$elm_bootstrap$Bootstrap_Form_Input$applyModifier, _rundis$elm_bootstrap$Bootstrap_Form_Input$defaultOptions, modifiers);
	return A2(
		_elm_lang$core$Basics_ops['++'],
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('form-control'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$disabled(options.disabled),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$readonly(options.readonly),
					_1: {
						ctor: '::',
						_0: _rundis$elm_bootstrap$Bootstrap_Form_Input$typeAttribute(options.tipe),
						_1: {ctor: '[]'}
					}
				}
			}
		},
		A2(
			_elm_lang$core$Basics_ops['++'],
			A2(
				_elm_lang$core$List$filterMap,
				_elm_lang$core$Basics$identity,
				{
					ctor: '::',
					_0: A2(_elm_lang$core$Maybe$map, _elm_lang$html$Html_Attributes$id, options.id),
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$core$Maybe$andThen, _rundis$elm_bootstrap$Bootstrap_Form_Input$sizeAttribute, options.size),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$core$Maybe$map, _elm_lang$html$Html_Attributes$value, options.value),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$core$Maybe$map, _elm_lang$html$Html_Attributes$defaultValue, options.defaultValue),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$core$Maybe$map, _elm_lang$html$Html_Attributes$placeholder, options.placeholder),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$core$Maybe$map, _elm_lang$html$Html_Events$onInput, options.onInput),
										_1: {
											ctor: '::',
											_0: A2(_elm_lang$core$Maybe$map, _rundis$elm_bootstrap$Bootstrap_Form_Input$validationAttribute, options.validation),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}),
			options.attributes));
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$view = function (_p2) {
	var _p3 = _p2;
	return A2(
		_elm_lang$html$Html$input,
		_rundis$elm_bootstrap$Bootstrap_Form_Input$toAttributes(_p3._0.options),
		{ctor: '[]'});
};
var _rundis$elm_bootstrap$Bootstrap_Form_Input$input = F2(
	function (tipe, options) {
		return _rundis$elm_bootstrap$Bootstrap_Form_Input$view(
			A2(_rundis$elm_bootstrap$Bootstrap_Form_Input$create, tipe, options));
	});
var _rundis$elm_bootstrap$Bootstrap_Form_Input$text = _rundis$elm_bootstrap$Bootstrap_Form_Input$input(_rundis$elm_bootstrap$Bootstrap_Form_Input$Text);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$password = _rundis$elm_bootstrap$Bootstrap_Form_Input$input(_rundis$elm_bootstrap$Bootstrap_Form_Input$Password);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$datetimeLocal = _rundis$elm_bootstrap$Bootstrap_Form_Input$input(_rundis$elm_bootstrap$Bootstrap_Form_Input$DatetimeLocal);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$date = _rundis$elm_bootstrap$Bootstrap_Form_Input$input(_rundis$elm_bootstrap$Bootstrap_Form_Input$Date);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$month = _rundis$elm_bootstrap$Bootstrap_Form_Input$input(_rundis$elm_bootstrap$Bootstrap_Form_Input$Month);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$time = _rundis$elm_bootstrap$Bootstrap_Form_Input$input(_rundis$elm_bootstrap$Bootstrap_Form_Input$Time);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$week = _rundis$elm_bootstrap$Bootstrap_Form_Input$input(_rundis$elm_bootstrap$Bootstrap_Form_Input$Week);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$number = _rundis$elm_bootstrap$Bootstrap_Form_Input$input(_rundis$elm_bootstrap$Bootstrap_Form_Input$Number);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$email = _rundis$elm_bootstrap$Bootstrap_Form_Input$input(_rundis$elm_bootstrap$Bootstrap_Form_Input$Email);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$url = _rundis$elm_bootstrap$Bootstrap_Form_Input$input(_rundis$elm_bootstrap$Bootstrap_Form_Input$Url);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$search = _rundis$elm_bootstrap$Bootstrap_Form_Input$input(_rundis$elm_bootstrap$Bootstrap_Form_Input$Search);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$tel = _rundis$elm_bootstrap$Bootstrap_Form_Input$input(_rundis$elm_bootstrap$Bootstrap_Form_Input$Tel);
var _rundis$elm_bootstrap$Bootstrap_Form_Input$color = _rundis$elm_bootstrap$Bootstrap_Form_Input$input(_rundis$elm_bootstrap$Bootstrap_Form_Input$Color);

var _rundis$elm_bootstrap$Bootstrap_Grid$renderCol = function (column) {
	var _p0 = column;
	switch (_p0.ctor) {
		case 'Column':
			return A2(
				_elm_lang$html$Html$div,
				_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colAttributes(_p0._0.options),
				_p0._0.children);
		case 'ColBreak':
			return _p0._0;
		default:
			return A3(
				_elm_lang$html$Html_Keyed$node,
				'div',
				_rundis$elm_bootstrap$Bootstrap_Grid_Internal$colAttributes(_p0._0.options),
				_p0._0.children);
	}
};
var _rundis$elm_bootstrap$Bootstrap_Grid$keyedRow = F2(
	function (options, keyedCols) {
		return A3(
			_elm_lang$html$Html_Keyed$node,
			'div',
			_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowAttributes(options),
			A2(
				_elm_lang$core$List$map,
				function (_p1) {
					var _p2 = _p1;
					return {
						ctor: '_Tuple2',
						_0: _p2._0,
						_1: _rundis$elm_bootstrap$Bootstrap_Grid$renderCol(_p2._1)
					};
				},
				keyedCols));
	});
var _rundis$elm_bootstrap$Bootstrap_Grid$row = F2(
	function (options, cols) {
		return A2(
			_elm_lang$html$Html$div,
			_rundis$elm_bootstrap$Bootstrap_Grid_Internal$rowAttributes(options),
			A2(_elm_lang$core$List$map, _rundis$elm_bootstrap$Bootstrap_Grid$renderCol, cols));
	});
var _rundis$elm_bootstrap$Bootstrap_Grid$simpleRow = function (cols) {
	return A2(
		_rundis$elm_bootstrap$Bootstrap_Grid$row,
		{ctor: '[]'},
		cols);
};
var _rundis$elm_bootstrap$Bootstrap_Grid$containerFluid = F2(
	function (attributes, children) {
		return A2(
			_elm_lang$html$Html$div,
			A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('container-fluid'),
					_1: {ctor: '[]'}
				},
				attributes),
			children);
	});
var _rundis$elm_bootstrap$Bootstrap_Grid$container = F2(
	function (attributes, children) {
		return A2(
			_elm_lang$html$Html$div,
			A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('container'),
					_1: {ctor: '[]'}
				},
				attributes),
			children);
	});
var _rundis$elm_bootstrap$Bootstrap_Grid$KeyedColumn = function (a) {
	return {ctor: 'KeyedColumn', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Grid$keyedCol = F2(
	function (options, children) {
		return _rundis$elm_bootstrap$Bootstrap_Grid$KeyedColumn(
			{options: options, children: children});
	});
var _rundis$elm_bootstrap$Bootstrap_Grid$ColBreak = function (a) {
	return {ctor: 'ColBreak', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Grid$colBreak = function (attributes) {
	return _rundis$elm_bootstrap$Bootstrap_Grid$ColBreak(
		A2(
			_elm_lang$html$Html$div,
			A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('w-100'),
					_1: {ctor: '[]'}
				},
				attributes),
			{ctor: '[]'}));
};
var _rundis$elm_bootstrap$Bootstrap_Grid$Column = function (a) {
	return {ctor: 'Column', _0: a};
};
var _rundis$elm_bootstrap$Bootstrap_Grid$col = F2(
	function (options, children) {
		return _rundis$elm_bootstrap$Bootstrap_Grid$Column(
			{options: options, children: children});
	});

var _rundis$elm_bootstrap$Bootstrap_Utilities_Size$w100 = _elm_lang$html$Html_Attributes$class('w-100');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Size$w75 = _elm_lang$html$Html_Attributes$class('w-75');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Size$w50 = _elm_lang$html$Html_Attributes$class('w-50');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Size$w25 = _elm_lang$html$Html_Attributes$class('w-25');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Size$h100 = _elm_lang$html$Html_Attributes$class('h-100');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Size$h75 = _elm_lang$html$Html_Attributes$class('h-75');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Size$h50 = _elm_lang$html$Html_Attributes$class('h-50');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Size$h25 = _elm_lang$html$Html_Attributes$class('h-25');

var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py5Xl = _elm_lang$html$Html_Attributes$class('py-xl-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py4Xl = _elm_lang$html$Html_Attributes$class('py-xl-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py3Xl = _elm_lang$html$Html_Attributes$class('py-xl-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py2Xl = _elm_lang$html$Html_Attributes$class('py-xl-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py1Xl = _elm_lang$html$Html_Attributes$class('py-xl-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py0Xl = _elm_lang$html$Html_Attributes$class('py-xl-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px5Xl = _elm_lang$html$Html_Attributes$class('px-xl-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px4Xl = _elm_lang$html$Html_Attributes$class('px-xl-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px3Xl = _elm_lang$html$Html_Attributes$class('px-xl-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px2Xl = _elm_lang$html$Html_Attributes$class('px-xl-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px1Xl = _elm_lang$html$Html_Attributes$class('px-xl-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px0Xl = _elm_lang$html$Html_Attributes$class('px-xl-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr5Xl = _elm_lang$html$Html_Attributes$class('pr-xl-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr4Xl = _elm_lang$html$Html_Attributes$class('pr-xl-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr3Xl = _elm_lang$html$Html_Attributes$class('pr-xl-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr2Xl = _elm_lang$html$Html_Attributes$class('pr-xl-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr1Xl = _elm_lang$html$Html_Attributes$class('pr-xl-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr0Xl = _elm_lang$html$Html_Attributes$class('pr-xl-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl5Xl = _elm_lang$html$Html_Attributes$class('pl-xl-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl4Xl = _elm_lang$html$Html_Attributes$class('pl-xl-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl3Xl = _elm_lang$html$Html_Attributes$class('pl-xl-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl2Xl = _elm_lang$html$Html_Attributes$class('pl-xl-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl1Xl = _elm_lang$html$Html_Attributes$class('pl-xl-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl0Xl = _elm_lang$html$Html_Attributes$class('pl-xl-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb5Xl = _elm_lang$html$Html_Attributes$class('pb-xl-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb4Xl = _elm_lang$html$Html_Attributes$class('pb-xl-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb3Xl = _elm_lang$html$Html_Attributes$class('pb-xl-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb2Xl = _elm_lang$html$Html_Attributes$class('pb-xl-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb1Xl = _elm_lang$html$Html_Attributes$class('pb-xl-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb0Xl = _elm_lang$html$Html_Attributes$class('pb-xl-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt5Xl = _elm_lang$html$Html_Attributes$class('pt-xl-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt4Xl = _elm_lang$html$Html_Attributes$class('pt-xl-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt3Xl = _elm_lang$html$Html_Attributes$class('pt-xl-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt2Xl = _elm_lang$html$Html_Attributes$class('pt-xl-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt1Xl = _elm_lang$html$Html_Attributes$class('pt-xl-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt0Xl = _elm_lang$html$Html_Attributes$class('pt-xl-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p5Xl = _elm_lang$html$Html_Attributes$class('p-xl-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p4Xl = _elm_lang$html$Html_Attributes$class('p-xl-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p3Xl = _elm_lang$html$Html_Attributes$class('p-xl-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p2Xl = _elm_lang$html$Html_Attributes$class('p-xl-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p1Xl = _elm_lang$html$Html_Attributes$class('p-xl-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p0Xl = _elm_lang$html$Html_Attributes$class('p-xl-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py5Lg = _elm_lang$html$Html_Attributes$class('py-lg-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py4Lg = _elm_lang$html$Html_Attributes$class('py-lg-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py3Lg = _elm_lang$html$Html_Attributes$class('py-lg-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py2Lg = _elm_lang$html$Html_Attributes$class('py-lg-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py1Lg = _elm_lang$html$Html_Attributes$class('py-lg-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py0Lg = _elm_lang$html$Html_Attributes$class('py-lg-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px5Lg = _elm_lang$html$Html_Attributes$class('px-lg-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px4Lg = _elm_lang$html$Html_Attributes$class('px-lg-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px3Lg = _elm_lang$html$Html_Attributes$class('px-lg-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px2Lg = _elm_lang$html$Html_Attributes$class('px-lg-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px1Lg = _elm_lang$html$Html_Attributes$class('px-lg-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px0Lg = _elm_lang$html$Html_Attributes$class('px-lg-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr5Lg = _elm_lang$html$Html_Attributes$class('pr-lg-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr4Lg = _elm_lang$html$Html_Attributes$class('pr-lg-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr3Lg = _elm_lang$html$Html_Attributes$class('pr-lg-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr2Lg = _elm_lang$html$Html_Attributes$class('pr-lg-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr1Lg = _elm_lang$html$Html_Attributes$class('pr-lg-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr0Lg = _elm_lang$html$Html_Attributes$class('pr-lg-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl5Lg = _elm_lang$html$Html_Attributes$class('pl-lg-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl4Lg = _elm_lang$html$Html_Attributes$class('pl-lg-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl3Lg = _elm_lang$html$Html_Attributes$class('pl-lg-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl2Lg = _elm_lang$html$Html_Attributes$class('pl-lg-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl1Lg = _elm_lang$html$Html_Attributes$class('pl-lg-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl0Lg = _elm_lang$html$Html_Attributes$class('pl-lg-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb5Lg = _elm_lang$html$Html_Attributes$class('pb-lg-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb4Lg = _elm_lang$html$Html_Attributes$class('pb-lg-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb3Lg = _elm_lang$html$Html_Attributes$class('pb-lg-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb2Lg = _elm_lang$html$Html_Attributes$class('pb-lg-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb1Lg = _elm_lang$html$Html_Attributes$class('pb-lg-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb0Lg = _elm_lang$html$Html_Attributes$class('pb-lg-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt5Lg = _elm_lang$html$Html_Attributes$class('pt-lg-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt4Lg = _elm_lang$html$Html_Attributes$class('pt-lg-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt3Lg = _elm_lang$html$Html_Attributes$class('pt-lg-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt2Lg = _elm_lang$html$Html_Attributes$class('pt-lg-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt1Lg = _elm_lang$html$Html_Attributes$class('pt-lg-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt0Lg = _elm_lang$html$Html_Attributes$class('pt-lg-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p5Lg = _elm_lang$html$Html_Attributes$class('p-lg-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p4Lg = _elm_lang$html$Html_Attributes$class('p-lg-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p3Lg = _elm_lang$html$Html_Attributes$class('p-lg-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p2Lg = _elm_lang$html$Html_Attributes$class('p-lg-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p1Lg = _elm_lang$html$Html_Attributes$class('p-lg-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p0Lg = _elm_lang$html$Html_Attributes$class('p-lg-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py5Md = _elm_lang$html$Html_Attributes$class('py-md-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py4Md = _elm_lang$html$Html_Attributes$class('py-md-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py3Md = _elm_lang$html$Html_Attributes$class('py-md-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py2Md = _elm_lang$html$Html_Attributes$class('py-md-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py1Md = _elm_lang$html$Html_Attributes$class('py-md-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py0Md = _elm_lang$html$Html_Attributes$class('py-md-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px5Md = _elm_lang$html$Html_Attributes$class('px-md-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px4Md = _elm_lang$html$Html_Attributes$class('px-md-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px3Md = _elm_lang$html$Html_Attributes$class('px-md-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px2Md = _elm_lang$html$Html_Attributes$class('px-md-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px1Md = _elm_lang$html$Html_Attributes$class('px-md-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px0Md = _elm_lang$html$Html_Attributes$class('px-md-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr5Md = _elm_lang$html$Html_Attributes$class('pr-md-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr4Md = _elm_lang$html$Html_Attributes$class('pr-md-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr3Md = _elm_lang$html$Html_Attributes$class('pr-md-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr2Md = _elm_lang$html$Html_Attributes$class('pr-md-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr1Md = _elm_lang$html$Html_Attributes$class('pr-md-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr0Md = _elm_lang$html$Html_Attributes$class('pr-md-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl5Md = _elm_lang$html$Html_Attributes$class('pl-md-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl4Md = _elm_lang$html$Html_Attributes$class('pl-md-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl3Md = _elm_lang$html$Html_Attributes$class('pl-md-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl2Md = _elm_lang$html$Html_Attributes$class('pl-md-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl1Md = _elm_lang$html$Html_Attributes$class('pl-md-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl0Md = _elm_lang$html$Html_Attributes$class('pl-md-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb5Md = _elm_lang$html$Html_Attributes$class('pb-md-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb4Md = _elm_lang$html$Html_Attributes$class('pb-md-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb3Md = _elm_lang$html$Html_Attributes$class('pb-md-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb2Md = _elm_lang$html$Html_Attributes$class('pb-md-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb1Md = _elm_lang$html$Html_Attributes$class('pb-md-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb0Md = _elm_lang$html$Html_Attributes$class('pb-md-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt5Md = _elm_lang$html$Html_Attributes$class('pt-md-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt4Md = _elm_lang$html$Html_Attributes$class('pt-md-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt3Md = _elm_lang$html$Html_Attributes$class('pt-md-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt2Md = _elm_lang$html$Html_Attributes$class('pt-md-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt1Md = _elm_lang$html$Html_Attributes$class('pt-md-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt0Md = _elm_lang$html$Html_Attributes$class('pt-md-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p5Md = _elm_lang$html$Html_Attributes$class('p-md-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p4Md = _elm_lang$html$Html_Attributes$class('p-md-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p3Md = _elm_lang$html$Html_Attributes$class('p-md-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p2Md = _elm_lang$html$Html_Attributes$class('p-md-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p1Md = _elm_lang$html$Html_Attributes$class('p-md-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p0Md = _elm_lang$html$Html_Attributes$class('p-md-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py5Sm = _elm_lang$html$Html_Attributes$class('py-sm-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py4Sm = _elm_lang$html$Html_Attributes$class('py-sm-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py3Sm = _elm_lang$html$Html_Attributes$class('py-sm-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py2Sm = _elm_lang$html$Html_Attributes$class('py-sm-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py1Sm = _elm_lang$html$Html_Attributes$class('py-sm-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py0Sm = _elm_lang$html$Html_Attributes$class('py-sm-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px5Sm = _elm_lang$html$Html_Attributes$class('px-sm-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px4Sm = _elm_lang$html$Html_Attributes$class('px-sm-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px3Sm = _elm_lang$html$Html_Attributes$class('px-sm-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px2Sm = _elm_lang$html$Html_Attributes$class('px-sm-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px1Sm = _elm_lang$html$Html_Attributes$class('px-sm-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px0Sm = _elm_lang$html$Html_Attributes$class('px-sm-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr5Sm = _elm_lang$html$Html_Attributes$class('pr-sm-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr4Sm = _elm_lang$html$Html_Attributes$class('pr-sm-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr3Sm = _elm_lang$html$Html_Attributes$class('pr-sm-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr2Sm = _elm_lang$html$Html_Attributes$class('pr-sm-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr1Sm = _elm_lang$html$Html_Attributes$class('pr-sm-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr0Sm = _elm_lang$html$Html_Attributes$class('pr-sm-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl5Sm = _elm_lang$html$Html_Attributes$class('pl-sm-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl4Sm = _elm_lang$html$Html_Attributes$class('pl-sm-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl3Sm = _elm_lang$html$Html_Attributes$class('pl-sm-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl2Sm = _elm_lang$html$Html_Attributes$class('pl-sm-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl1Sm = _elm_lang$html$Html_Attributes$class('pl-sm-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl0Sm = _elm_lang$html$Html_Attributes$class('pl-sm-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb5Sm = _elm_lang$html$Html_Attributes$class('pb-sm-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb4Sm = _elm_lang$html$Html_Attributes$class('pb-sm-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb3Sm = _elm_lang$html$Html_Attributes$class('pb-sm-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb2Sm = _elm_lang$html$Html_Attributes$class('pb-sm-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb1Sm = _elm_lang$html$Html_Attributes$class('pb-sm-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb0Sm = _elm_lang$html$Html_Attributes$class('pb-sm-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt5Sm = _elm_lang$html$Html_Attributes$class('pt-sm-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt4Sm = _elm_lang$html$Html_Attributes$class('pt-sm-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt3Sm = _elm_lang$html$Html_Attributes$class('pt-sm-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt2Sm = _elm_lang$html$Html_Attributes$class('pt-sm-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt1Sm = _elm_lang$html$Html_Attributes$class('pt-sm-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt0Sm = _elm_lang$html$Html_Attributes$class('pt-sm-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p5Sm = _elm_lang$html$Html_Attributes$class('p-sm-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p4Sm = _elm_lang$html$Html_Attributes$class('p-sm-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p3Sm = _elm_lang$html$Html_Attributes$class('p-sm-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p2Sm = _elm_lang$html$Html_Attributes$class('p-sm-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p1Sm = _elm_lang$html$Html_Attributes$class('p-sm-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p0Sm = _elm_lang$html$Html_Attributes$class('p-sm-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py5 = _elm_lang$html$Html_Attributes$class('py-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py4 = _elm_lang$html$Html_Attributes$class('py-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py3 = _elm_lang$html$Html_Attributes$class('py-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py2 = _elm_lang$html$Html_Attributes$class('py-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py1 = _elm_lang$html$Html_Attributes$class('py-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$py0 = _elm_lang$html$Html_Attributes$class('py-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px5 = _elm_lang$html$Html_Attributes$class('px-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px4 = _elm_lang$html$Html_Attributes$class('px-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px3 = _elm_lang$html$Html_Attributes$class('px-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px2 = _elm_lang$html$Html_Attributes$class('px-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px1 = _elm_lang$html$Html_Attributes$class('px-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$px0 = _elm_lang$html$Html_Attributes$class('px-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr5 = _elm_lang$html$Html_Attributes$class('pr-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr4 = _elm_lang$html$Html_Attributes$class('pr-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr3 = _elm_lang$html$Html_Attributes$class('pr-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr2 = _elm_lang$html$Html_Attributes$class('pr-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr1 = _elm_lang$html$Html_Attributes$class('pr-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pr0 = _elm_lang$html$Html_Attributes$class('pr-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl5 = _elm_lang$html$Html_Attributes$class('pl-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl4 = _elm_lang$html$Html_Attributes$class('pl-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl3 = _elm_lang$html$Html_Attributes$class('pl-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl2 = _elm_lang$html$Html_Attributes$class('pl-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl1 = _elm_lang$html$Html_Attributes$class('pl-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pl0 = _elm_lang$html$Html_Attributes$class('pl-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb5 = _elm_lang$html$Html_Attributes$class('pb-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb4 = _elm_lang$html$Html_Attributes$class('pb-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb3 = _elm_lang$html$Html_Attributes$class('pb-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb2 = _elm_lang$html$Html_Attributes$class('pb-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb1 = _elm_lang$html$Html_Attributes$class('pb-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pb0 = _elm_lang$html$Html_Attributes$class('pb-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt5 = _elm_lang$html$Html_Attributes$class('pt-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt4 = _elm_lang$html$Html_Attributes$class('pt-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt3 = _elm_lang$html$Html_Attributes$class('pt-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt2 = _elm_lang$html$Html_Attributes$class('pt-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt1 = _elm_lang$html$Html_Attributes$class('pt-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$pt0 = _elm_lang$html$Html_Attributes$class('pt-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p5 = _elm_lang$html$Html_Attributes$class('p-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p4 = _elm_lang$html$Html_Attributes$class('p-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p3 = _elm_lang$html$Html_Attributes$class('p-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p2 = _elm_lang$html$Html_Attributes$class('p-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p1 = _elm_lang$html$Html_Attributes$class('p-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$p0 = _elm_lang$html$Html_Attributes$class('p-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$myAutoXl = _elm_lang$html$Html_Attributes$class('my-xl-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my5Xl = _elm_lang$html$Html_Attributes$class('my-xl-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my4Xl = _elm_lang$html$Html_Attributes$class('my-xl-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my3Xl = _elm_lang$html$Html_Attributes$class('my-xl-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my2Xl = _elm_lang$html$Html_Attributes$class('my-xl-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my1Xl = _elm_lang$html$Html_Attributes$class('my-xl-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my0Xl = _elm_lang$html$Html_Attributes$class('my-xl-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mxAutoXl = _elm_lang$html$Html_Attributes$class('mx-xl-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx5Xl = _elm_lang$html$Html_Attributes$class('mx-xl-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx4Xl = _elm_lang$html$Html_Attributes$class('mx-xl-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx3Xl = _elm_lang$html$Html_Attributes$class('mx-xl-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx2Xl = _elm_lang$html$Html_Attributes$class('mx-xl-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx1Xl = _elm_lang$html$Html_Attributes$class('mx-xl-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx0Xl = _elm_lang$html$Html_Attributes$class('mx-xl-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mrAutoXl = _elm_lang$html$Html_Attributes$class('mr-xl-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr5Xl = _elm_lang$html$Html_Attributes$class('mr-xl-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr4Xl = _elm_lang$html$Html_Attributes$class('mr-xl-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr3Xl = _elm_lang$html$Html_Attributes$class('mr-xl-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr2Xl = _elm_lang$html$Html_Attributes$class('mr-xl-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr1Xl = _elm_lang$html$Html_Attributes$class('mr-xl-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr0Xl = _elm_lang$html$Html_Attributes$class('mr-xl-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mlAutoXl = _elm_lang$html$Html_Attributes$class('ml-xl-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml5Xl = _elm_lang$html$Html_Attributes$class('ml-xl-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml4Xl = _elm_lang$html$Html_Attributes$class('ml-xl-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml3Xl = _elm_lang$html$Html_Attributes$class('ml-xl-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml2Xl = _elm_lang$html$Html_Attributes$class('ml-xl-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml1Xl = _elm_lang$html$Html_Attributes$class('ml-xl-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml0Xl = _elm_lang$html$Html_Attributes$class('ml-xl-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mbAutoXl = _elm_lang$html$Html_Attributes$class('mb-xl-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb5Xl = _elm_lang$html$Html_Attributes$class('mb-xl-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb4Xl = _elm_lang$html$Html_Attributes$class('mb-xl-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb3Xl = _elm_lang$html$Html_Attributes$class('mb-xl-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb2Xl = _elm_lang$html$Html_Attributes$class('mb-xl-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb1Xl = _elm_lang$html$Html_Attributes$class('mb-xl-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb0Xl = _elm_lang$html$Html_Attributes$class('mb-xl-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mtAutoXl = _elm_lang$html$Html_Attributes$class('mt-xl-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt5Xl = _elm_lang$html$Html_Attributes$class('mt-xl-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt4Xl = _elm_lang$html$Html_Attributes$class('mt-xl-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt3Xl = _elm_lang$html$Html_Attributes$class('mt-xl-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt2Xl = _elm_lang$html$Html_Attributes$class('mt-xl-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt1Xl = _elm_lang$html$Html_Attributes$class('mt-xl-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt0Xl = _elm_lang$html$Html_Attributes$class('mt-xl-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mAutoXl = _elm_lang$html$Html_Attributes$class('m-xl-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m5Xl = _elm_lang$html$Html_Attributes$class('m-xl-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m4Xl = _elm_lang$html$Html_Attributes$class('m-xl-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m3Xl = _elm_lang$html$Html_Attributes$class('m-xl-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m2Xl = _elm_lang$html$Html_Attributes$class('m-xl-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m1Xl = _elm_lang$html$Html_Attributes$class('m-xl-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m0Xl = _elm_lang$html$Html_Attributes$class('m-xl-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$myAutoLg = _elm_lang$html$Html_Attributes$class('my-lg-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my5Lg = _elm_lang$html$Html_Attributes$class('my-lg-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my4Lg = _elm_lang$html$Html_Attributes$class('my-lg-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my3Lg = _elm_lang$html$Html_Attributes$class('my-lg-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my2Lg = _elm_lang$html$Html_Attributes$class('my-lg-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my1Lg = _elm_lang$html$Html_Attributes$class('my-lg-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my0Lg = _elm_lang$html$Html_Attributes$class('my-lg-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mxAutoLg = _elm_lang$html$Html_Attributes$class('mx-lg-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx5Lg = _elm_lang$html$Html_Attributes$class('mx-lg-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx4Lg = _elm_lang$html$Html_Attributes$class('mx-lg-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx3Lg = _elm_lang$html$Html_Attributes$class('mx-lg-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx2Lg = _elm_lang$html$Html_Attributes$class('mx-lg-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx1Lg = _elm_lang$html$Html_Attributes$class('mx-lg-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx0Lg = _elm_lang$html$Html_Attributes$class('mx-lg-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mrAutoLg = _elm_lang$html$Html_Attributes$class('mr-lg-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr5Lg = _elm_lang$html$Html_Attributes$class('mr-lg-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr4Lg = _elm_lang$html$Html_Attributes$class('mr-lg-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr3Lg = _elm_lang$html$Html_Attributes$class('mr-lg-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr2Lg = _elm_lang$html$Html_Attributes$class('mr-lg-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr1Lg = _elm_lang$html$Html_Attributes$class('mr-lg-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr0Lg = _elm_lang$html$Html_Attributes$class('mr-lg-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mlAutoLg = _elm_lang$html$Html_Attributes$class('ml-lg-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml5Lg = _elm_lang$html$Html_Attributes$class('ml-lg-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml4Lg = _elm_lang$html$Html_Attributes$class('ml-lg-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml3Lg = _elm_lang$html$Html_Attributes$class('ml-lg-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml2Lg = _elm_lang$html$Html_Attributes$class('ml-lg-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml1Lg = _elm_lang$html$Html_Attributes$class('ml-lg-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml0Lg = _elm_lang$html$Html_Attributes$class('ml-lg-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mbAutoLg = _elm_lang$html$Html_Attributes$class('mb-lg-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb5Lg = _elm_lang$html$Html_Attributes$class('mb-lg-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb4Lg = _elm_lang$html$Html_Attributes$class('mb-lg-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb3Lg = _elm_lang$html$Html_Attributes$class('mb-lg-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb2Lg = _elm_lang$html$Html_Attributes$class('mb-lg-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb1Lg = _elm_lang$html$Html_Attributes$class('mb-lg-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb0Lg = _elm_lang$html$Html_Attributes$class('mb-lg-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mtAutoLg = _elm_lang$html$Html_Attributes$class('mt-lg-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt5Lg = _elm_lang$html$Html_Attributes$class('mt-lg-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt4Lg = _elm_lang$html$Html_Attributes$class('mt-lg-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt3Lg = _elm_lang$html$Html_Attributes$class('mt-lg-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt2Lg = _elm_lang$html$Html_Attributes$class('mt-lg-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt1Lg = _elm_lang$html$Html_Attributes$class('mt-lg-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt0Lg = _elm_lang$html$Html_Attributes$class('mt-lg-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mAutoLg = _elm_lang$html$Html_Attributes$class('m-lg-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m5Lg = _elm_lang$html$Html_Attributes$class('m-lg-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m4Lg = _elm_lang$html$Html_Attributes$class('m-lg-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m3Lg = _elm_lang$html$Html_Attributes$class('m-lg-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m2Lg = _elm_lang$html$Html_Attributes$class('m-lg-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m1Lg = _elm_lang$html$Html_Attributes$class('m-lg-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m0Lg = _elm_lang$html$Html_Attributes$class('m-lg-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$myAutoMd = _elm_lang$html$Html_Attributes$class('my-md-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my5Md = _elm_lang$html$Html_Attributes$class('my-md-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my4Md = _elm_lang$html$Html_Attributes$class('my-md-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my3Md = _elm_lang$html$Html_Attributes$class('my-md-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my2Md = _elm_lang$html$Html_Attributes$class('my-md-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my1Md = _elm_lang$html$Html_Attributes$class('my-md-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my0Md = _elm_lang$html$Html_Attributes$class('my-md-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mxAutoMd = _elm_lang$html$Html_Attributes$class('mx-md-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx5Md = _elm_lang$html$Html_Attributes$class('mx-md-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx4Md = _elm_lang$html$Html_Attributes$class('mx-md-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx3Md = _elm_lang$html$Html_Attributes$class('mx-md-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx2Md = _elm_lang$html$Html_Attributes$class('mx-md-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx1Md = _elm_lang$html$Html_Attributes$class('mx-md-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx0Md = _elm_lang$html$Html_Attributes$class('mx-md-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mrAutoMd = _elm_lang$html$Html_Attributes$class('mr-md-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr5Md = _elm_lang$html$Html_Attributes$class('mr-md-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr4Md = _elm_lang$html$Html_Attributes$class('mr-md-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr3Md = _elm_lang$html$Html_Attributes$class('mr-md-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr2Md = _elm_lang$html$Html_Attributes$class('mr-md-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr1Md = _elm_lang$html$Html_Attributes$class('mr-md-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr0Md = _elm_lang$html$Html_Attributes$class('mr-md-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mlAutoMd = _elm_lang$html$Html_Attributes$class('ml-md-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml5Md = _elm_lang$html$Html_Attributes$class('ml-md-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml4Md = _elm_lang$html$Html_Attributes$class('ml-md-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml3Md = _elm_lang$html$Html_Attributes$class('ml-md-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml2Md = _elm_lang$html$Html_Attributes$class('ml-md-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml1Md = _elm_lang$html$Html_Attributes$class('ml-md-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml0Md = _elm_lang$html$Html_Attributes$class('ml-md-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mbAutoMd = _elm_lang$html$Html_Attributes$class('mb-md-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb5Md = _elm_lang$html$Html_Attributes$class('mb-md-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb4Md = _elm_lang$html$Html_Attributes$class('mb-md-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb3Md = _elm_lang$html$Html_Attributes$class('mb-md-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb2Md = _elm_lang$html$Html_Attributes$class('mb-md-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb1Md = _elm_lang$html$Html_Attributes$class('mb-md-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb0Md = _elm_lang$html$Html_Attributes$class('mb-md-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mtAutoMd = _elm_lang$html$Html_Attributes$class('mt-md-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt5Md = _elm_lang$html$Html_Attributes$class('mt-md-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt4Md = _elm_lang$html$Html_Attributes$class('mt-md-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt3Md = _elm_lang$html$Html_Attributes$class('mt-md-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt2Md = _elm_lang$html$Html_Attributes$class('mt-md-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt1Md = _elm_lang$html$Html_Attributes$class('mt-md-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt0Md = _elm_lang$html$Html_Attributes$class('mt-md-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mAutoMd = _elm_lang$html$Html_Attributes$class('m-md-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m5Md = _elm_lang$html$Html_Attributes$class('m-md-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m4Md = _elm_lang$html$Html_Attributes$class('m-md-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m3Md = _elm_lang$html$Html_Attributes$class('m-md-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m2Md = _elm_lang$html$Html_Attributes$class('m-md-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m1Md = _elm_lang$html$Html_Attributes$class('m-md-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m0Md = _elm_lang$html$Html_Attributes$class('m-md-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$myAutoSm = _elm_lang$html$Html_Attributes$class('my-sm-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my5Sm = _elm_lang$html$Html_Attributes$class('my-sm-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my4Sm = _elm_lang$html$Html_Attributes$class('my-sm-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my3Sm = _elm_lang$html$Html_Attributes$class('my-sm-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my2Sm = _elm_lang$html$Html_Attributes$class('my-sm-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my1Sm = _elm_lang$html$Html_Attributes$class('my-sm-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my0Sm = _elm_lang$html$Html_Attributes$class('my-sm-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mxAutoSm = _elm_lang$html$Html_Attributes$class('mx-sm-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx5Sm = _elm_lang$html$Html_Attributes$class('mx-sm-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx4Sm = _elm_lang$html$Html_Attributes$class('mx-sm-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx3Sm = _elm_lang$html$Html_Attributes$class('mx-sm-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx2Sm = _elm_lang$html$Html_Attributes$class('mx-sm-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx1Sm = _elm_lang$html$Html_Attributes$class('mx-sm-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx0Sm = _elm_lang$html$Html_Attributes$class('mx-sm-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mrAutoSm = _elm_lang$html$Html_Attributes$class('mr-sm-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr5Sm = _elm_lang$html$Html_Attributes$class('mr-sm-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr4Sm = _elm_lang$html$Html_Attributes$class('mr-sm-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr3Sm = _elm_lang$html$Html_Attributes$class('mr-sm-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr2Sm = _elm_lang$html$Html_Attributes$class('mr-sm-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr1Sm = _elm_lang$html$Html_Attributes$class('mr-sm-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr0Sm = _elm_lang$html$Html_Attributes$class('mr-sm-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mlAutoSm = _elm_lang$html$Html_Attributes$class('ml-sm-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml5Sm = _elm_lang$html$Html_Attributes$class('ml-sm-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml4Sm = _elm_lang$html$Html_Attributes$class('ml-sm-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml3Sm = _elm_lang$html$Html_Attributes$class('ml-sm-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml2Sm = _elm_lang$html$Html_Attributes$class('ml-sm-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml1Sm = _elm_lang$html$Html_Attributes$class('ml-sm-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml0Sm = _elm_lang$html$Html_Attributes$class('ml-sm-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mbAutoSm = _elm_lang$html$Html_Attributes$class('mb-sm-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb5Sm = _elm_lang$html$Html_Attributes$class('mb-sm-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb4Sm = _elm_lang$html$Html_Attributes$class('mb-sm-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb3Sm = _elm_lang$html$Html_Attributes$class('mb-sm-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb2Sm = _elm_lang$html$Html_Attributes$class('mb-sm-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb1Sm = _elm_lang$html$Html_Attributes$class('mb-sm-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb0Sm = _elm_lang$html$Html_Attributes$class('mb-sm-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mtAutoSm = _elm_lang$html$Html_Attributes$class('mt-sm-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt5Sm = _elm_lang$html$Html_Attributes$class('mt-sm-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt4Sm = _elm_lang$html$Html_Attributes$class('mt-sm-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt3Sm = _elm_lang$html$Html_Attributes$class('mt-sm-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt2Sm = _elm_lang$html$Html_Attributes$class('mt-sm-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt1Sm = _elm_lang$html$Html_Attributes$class('mt-sm-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt0Sm = _elm_lang$html$Html_Attributes$class('mt-sm-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mAutoSm = _elm_lang$html$Html_Attributes$class('m-sm-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m5Sm = _elm_lang$html$Html_Attributes$class('m-sm-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m4Sm = _elm_lang$html$Html_Attributes$class('m-sm-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m3Sm = _elm_lang$html$Html_Attributes$class('m-sm-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m2Sm = _elm_lang$html$Html_Attributes$class('m-sm-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m1Sm = _elm_lang$html$Html_Attributes$class('m-sm-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m0Sm = _elm_lang$html$Html_Attributes$class('m-sm-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$myAuto = _elm_lang$html$Html_Attributes$class('my-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my5 = _elm_lang$html$Html_Attributes$class('my-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my4 = _elm_lang$html$Html_Attributes$class('my-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my3 = _elm_lang$html$Html_Attributes$class('my-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my2 = _elm_lang$html$Html_Attributes$class('my-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my1 = _elm_lang$html$Html_Attributes$class('my-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$my0 = _elm_lang$html$Html_Attributes$class('my-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mxAuto = _elm_lang$html$Html_Attributes$class('mx-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx5 = _elm_lang$html$Html_Attributes$class('mx-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx4 = _elm_lang$html$Html_Attributes$class('mx-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx3 = _elm_lang$html$Html_Attributes$class('mx-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx2 = _elm_lang$html$Html_Attributes$class('mx-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx1 = _elm_lang$html$Html_Attributes$class('mx-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mx0 = _elm_lang$html$Html_Attributes$class('mx-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mrAuto = _elm_lang$html$Html_Attributes$class('mr-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr5 = _elm_lang$html$Html_Attributes$class('mr-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr4 = _elm_lang$html$Html_Attributes$class('mr-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr3 = _elm_lang$html$Html_Attributes$class('mr-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr2 = _elm_lang$html$Html_Attributes$class('mr-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr1 = _elm_lang$html$Html_Attributes$class('mr-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mr0 = _elm_lang$html$Html_Attributes$class('mr-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mlAuto = _elm_lang$html$Html_Attributes$class('ml-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml5 = _elm_lang$html$Html_Attributes$class('ml-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml4 = _elm_lang$html$Html_Attributes$class('ml-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml3 = _elm_lang$html$Html_Attributes$class('ml-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml2 = _elm_lang$html$Html_Attributes$class('ml-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml1 = _elm_lang$html$Html_Attributes$class('ml-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$ml0 = _elm_lang$html$Html_Attributes$class('ml-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mbAuto = _elm_lang$html$Html_Attributes$class('mb-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb5 = _elm_lang$html$Html_Attributes$class('mb-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb4 = _elm_lang$html$Html_Attributes$class('mb-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb3 = _elm_lang$html$Html_Attributes$class('mb-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb2 = _elm_lang$html$Html_Attributes$class('mb-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb1 = _elm_lang$html$Html_Attributes$class('mb-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mb0 = _elm_lang$html$Html_Attributes$class('mb-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mtAuto = _elm_lang$html$Html_Attributes$class('mt-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt5 = _elm_lang$html$Html_Attributes$class('mt-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt4 = _elm_lang$html$Html_Attributes$class('mt-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt3 = _elm_lang$html$Html_Attributes$class('mt-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt2 = _elm_lang$html$Html_Attributes$class('mt-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt1 = _elm_lang$html$Html_Attributes$class('mt-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mt0 = _elm_lang$html$Html_Attributes$class('mt-0');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$mAuto = _elm_lang$html$Html_Attributes$class('m-auto');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m5 = _elm_lang$html$Html_Attributes$class('m-5');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m4 = _elm_lang$html$Html_Attributes$class('m-4');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m3 = _elm_lang$html$Html_Attributes$class('m-3');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m2 = _elm_lang$html$Html_Attributes$class('m-2');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m1 = _elm_lang$html$Html_Attributes$class('m-1');
var _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m0 = _elm_lang$html$Html_Attributes$class('m-0');

var _user$project$Model_Task$encode = function (task) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'id',
				_1: _elm_lang$core$Json_Encode$int(task.id)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'text',
					_1: _elm_lang$core$Json_Encode$string(task.text)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'finished',
						_1: _elm_lang$core$Json_Encode$bool(task.finished)
					},
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Model_Task$Task = F3(
	function (a, b, c) {
		return {id: a, text: b, finished: c};
	});
var _user$project$Model_Task$decoder = A4(
	_elm_lang$core$Json_Decode$map3,
	_user$project$Model_Task$Task,
	A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode$field, 'text', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode$field, 'finished', _elm_lang$core$Json_Decode$bool));

var _user$project$Model_TaskChannel$DeleteTask = function (a) {
	return {ctor: 'DeleteTask', _0: a};
};
var _user$project$Model_TaskChannel$UpdateTask = function (a) {
	return {ctor: 'UpdateTask', _0: a};
};
var _user$project$Model_TaskChannel$NewTask = function (a) {
	return {ctor: 'NewTask', _0: a};
};
var _user$project$Model_TaskChannel$decoder = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (tag) {
		var _p0 = tag;
		switch (_p0) {
			case 'NewTask':
				return A2(
					_elm_lang$core$Json_Decode$map,
					_user$project$Model_TaskChannel$NewTask,
					A2(_elm_lang$core$Json_Decode$field, 'contents', _user$project$Model_Task$decoder));
			case 'UpdateTask':
				return A2(
					_elm_lang$core$Json_Decode$map,
					_user$project$Model_TaskChannel$UpdateTask,
					A2(_elm_lang$core$Json_Decode$field, 'contents', _user$project$Model_Task$decoder));
			case 'DeleteTask':
				return A2(
					_elm_lang$core$Json_Decode$map,
					_user$project$Model_TaskChannel$DeleteTask,
					A2(_elm_lang$core$Json_Decode$field, 'contents', _elm_lang$core$Json_Decode$int));
			default:
				return _elm_lang$core$Json_Decode$fail(
					A2(_elm_lang$core$Basics_ops['++'], 'unknown case ', _p0));
		}
	},
	A2(_elm_lang$core$Json_Decode$field, 'tag', _elm_lang$core$Json_Decode$string));

var _user$project$Model_Tasks$sortList = function (tasks) {
	var sorting = F2(
		function (task1, task2) {
			var _p0 = {ctor: '_Tuple2', _0: task1.finished, _1: task2.finished};
			if (_p0._0 === false) {
				if (_p0._1 === false) {
					return A2(_elm_lang$core$Basics$compare, task1.id, task2.id);
				} else {
					return _elm_lang$core$Basics$LT;
				}
			} else {
				if (_p0._1 === false) {
					return _elm_lang$core$Basics$GT;
				} else {
					return A2(_elm_lang$core$Basics$compare, task1.id, task2.id);
				}
			}
		});
	return A2(_elm_lang$core$List$sortWith, sorting, tasks);
};
var _user$project$Model_Tasks$getSortedTaskList = F2(
	function (filter, model) {
		var applyFilter = function (task) {
			var _p1 = filter;
			switch (_p1.ctor) {
				case 'All':
					return true;
				case 'Pending':
					return !task.finished;
				default:
					return task.finished;
			}
		};
		return _user$project$Model_Tasks$sortList(
			A2(
				_elm_lang$core$List$filter,
				applyFilter,
				_elm_lang$core$Dict$values(model.tasks)));
	});
var _user$project$Model_Tasks$get = F2(
	function (taskId, model) {
		return A2(_elm_lang$core$Dict$get, taskId, model.tasks);
	});
var _user$project$Model_Tasks$delete = function (taskId) {
	return _elm_lang$core$Dict$remove(taskId);
};
var _user$project$Model_Tasks$insert = function (task) {
	return A2(_elm_lang$core$Dict$insert, task.id, task);
};
var _user$project$Model_Tasks$fromList = function (_p2) {
	return _elm_lang$core$Dict$fromList(
		A2(
			_elm_lang$core$List$map,
			function (task) {
				return {ctor: '_Tuple2', _0: task.id, _1: task};
			},
			_p2));
};
var _user$project$Model_Tasks$decoder = A2(
	_elm_lang$core$Json_Decode$map,
	_user$project$Model_Tasks$fromList,
	_elm_lang$core$Json_Decode$list(_user$project$Model_Task$decoder));
var _user$project$Model_Tasks$empty = _elm_lang$core$Dict$empty;
var _user$project$Model_Tasks$Completed = {ctor: 'Completed'};
var _user$project$Model_Tasks$Pending = {ctor: 'Pending'};
var _user$project$Model_Tasks$All = {ctor: 'All'};

var _user$project$Api_Task$listen = F3(
	function (baseUrl, mapErr, mapMsg) {
		var decodeMsg = function (text) {
			var _p0 = A2(_elm_lang$core$Json_Decode$decodeString, _user$project$Model_TaskChannel$decoder, text);
			if (_p0.ctor === 'Err') {
				return mapErr(_p0._0);
			} else {
				return mapMsg(_p0._0);
			}
		};
		var toWs = function (url) {
			return A2(_elm_lang$core$String$startsWith, 'http://', url) ? A2(
				_elm_lang$core$Basics_ops['++'],
				'ws://',
				A2(
					_elm_lang$core$String$dropLeft,
					_elm_lang$core$String$length('http://'),
					url)) : (A2(_elm_lang$core$String$startsWith, 'https://', url) ? A2(
				_elm_lang$core$Basics_ops['++'],
				'wss://',
				A2(
					_elm_lang$core$String$dropLeft,
					_elm_lang$core$String$length('https://'),
					url)) : A2(_elm_lang$core$Basics_ops['++'], 'ws://localhost:8080', url));
		};
		var url = A2(
			_elm_lang$core$Basics_ops['++'],
			toWs(baseUrl),
			'todos/listen');
		return A2(_elm_lang$websocket$WebSocket$listen, url, decodeMsg);
	});
var _user$project$Api_Task$new = F2(
	function (baseUrl, text) {
		return A3(
			_elm_lang$http$Http$post,
			A2(_elm_lang$core$Basics_ops['++'], baseUrl, 'todos'),
			_elm_lang$http$Http$jsonBody(
				_elm_lang$core$Json_Encode$string(text)),
			_user$project$Model_Task$decoder);
	});
var _user$project$Api_Task$delete = F2(
	function (baseUrl, taskId) {
		return _elm_lang$http$Http$request(
			{
				method: 'delete',
				headers: {ctor: '[]'},
				url: A2(
					_elm_lang$core$Basics_ops['++'],
					baseUrl,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'todos/',
						_elm_lang$core$Basics$toString(taskId))),
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectJson(_user$project$Model_Tasks$decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _user$project$Api_Task$update = F2(
	function (baseUrl, task) {
		return _elm_lang$http$Http$request(
			{
				method: 'put',
				headers: {ctor: '[]'},
				url: A2(_elm_lang$core$Basics_ops['++'], baseUrl, 'todos'),
				body: _elm_lang$http$Http$jsonBody(
					_user$project$Model_Task$encode(task)),
				expect: _elm_lang$http$Http$expectJson(_user$project$Model_Task$decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _user$project$Api_Task$getAll = function (baseUrl) {
	return A2(
		_elm_lang$http$Http$get,
		A2(_elm_lang$core$Basics_ops['++'], baseUrl, 'todos'),
		_user$project$Model_Tasks$decoder);
};
var _user$project$Api_Task$get = F2(
	function (baseUrl, taskId) {
		return A2(
			_elm_lang$http$Http$get,
			A2(
				_elm_lang$core$Basics_ops['++'],
				baseUrl,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'todos/',
					_elm_lang$core$Basics$toString(taskId))),
			_elm_lang$core$Json_Decode$maybe(_user$project$Model_Task$decoder));
	});

var _user$project$Routes$routeToUrl = function (route) {
	var _p0 = route;
	switch (_p0._0.ctor) {
		case 'All':
			return '/';
		case 'Pending':
			return '/pending';
		default:
			return '/completed';
	}
};
var _user$project$Routes$Show = function (a) {
	return {ctor: 'Show', _0: a};
};
var _user$project$Routes$route = function () {
	var basePart = _evancz$url_parser$UrlParser$top;
	return _evancz$url_parser$UrlParser$oneOf(
		{
			ctor: '::',
			_0: A2(
				_evancz$url_parser$UrlParser$map,
				_user$project$Routes$Show(_user$project$Model_Tasks$All),
				basePart),
			_1: {
				ctor: '::',
				_0: A2(
					_evancz$url_parser$UrlParser$map,
					_user$project$Routes$Show(_user$project$Model_Tasks$Pending),
					A2(
						_evancz$url_parser$UrlParser_ops['</>'],
						basePart,
						_evancz$url_parser$UrlParser$s('pending'))),
				_1: {
					ctor: '::',
					_0: A2(
						_evancz$url_parser$UrlParser$map,
						_user$project$Routes$Show(_user$project$Model_Tasks$Completed),
						A2(
							_evancz$url_parser$UrlParser_ops['</>'],
							basePart,
							_evancz$url_parser$UrlParser$s('completed'))),
					_1: {ctor: '[]'}
				}
			}
		});
}();
var _user$project$Routes$locationToRoute = _evancz$url_parser$UrlParser$parsePath(_user$project$Routes$route);

var _user$project$Main$viewError = function (error) {
	var _p0 = error;
	if (_p0.ctor === 'Nothing') {
		return _elm_lang$html$Html$text('');
	} else {
		return A2(
			_rundis$elm_bootstrap$Bootstrap_Alert$simpleDanger,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(_p0._0),
				_1: {ctor: '[]'}
			});
	}
};
var _user$project$Main$Model = F8(
	function (a, b, c, d, e, f, g, h) {
		return {flags: a, filter: b, isBusy: c, httpError: d, wsError: e, tasks: f, inputText: g, editTask: h};
	});
var _user$project$Main$Flags = function (a) {
	return {baseUrl: a};
};
var _user$project$Main$KeyDown = function (a) {
	return {ctor: 'KeyDown', _0: a};
};
var _user$project$Main$TaskItemMsg = function (a) {
	return {ctor: 'TaskItemMsg', _0: a};
};
var _user$project$Main$NewTaskMsg = function (a) {
	return {ctor: 'NewTaskMsg', _0: a};
};
var _user$project$Main$WebSocketError = function (a) {
	return {ctor: 'WebSocketError', _0: a};
};
var _user$project$Main$DeleteTaskReceived = function (a) {
	return {ctor: 'DeleteTaskReceived', _0: a};
};
var _user$project$Main$UpdateTaskResponse = function (a) {
	return {ctor: 'UpdateTaskResponse', _0: a};
};
var _user$project$Main$subscriptions = function (model) {
	var mapMsg = function (msg) {
		var _p1 = msg;
		switch (_p1.ctor) {
			case 'NewTask':
				return _user$project$Main$UpdateTaskResponse(
					_elm_lang$core$Result$Ok(_p1._0));
			case 'UpdateTask':
				return _user$project$Main$UpdateTaskResponse(
					_elm_lang$core$Result$Ok(_p1._0));
			default:
				return _user$project$Main$DeleteTaskReceived(_p1._0);
		}
	};
	var ws = A3(_user$project$Api_Task$listen, model.flags.baseUrl, _user$project$Main$WebSocketError, mapMsg);
	var kb = _elm_lang$keyboard$Keyboard$downs(_user$project$Main$KeyDown);
	return _elm_lang$core$Platform_Sub$batch(
		{
			ctor: '::',
			_0: kb,
			_1: {
				ctor: '::',
				_0: ws,
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Main$GetTasksResponse = function (a) {
	return {ctor: 'GetTasksResponse', _0: a};
};
var _user$project$Main$ChangeFilter = function (a) {
	return {ctor: 'ChangeFilter', _0: a};
};
var _user$project$Main$LocationChanged = function (a) {
	return {ctor: 'LocationChanged', _0: a};
};
var _user$project$Main$NoOp = {ctor: 'NoOp'};
var _user$project$Main$init = F2(
	function (flags, loc) {
		var _p2 = function () {
			var _p3 = _user$project$Routes$locationToRoute(loc);
			if (_p3.ctor === 'Just') {
				return {ctor: '_Tuple2', _0: _p3._0._0, _1: _elm_lang$core$Platform_Cmd$none};
			} else {
				return {
					ctor: '_Tuple2',
					_0: _user$project$Model_Tasks$All,
					_1: _elm_lang$navigation$Navigation$modifyUrl(
						_user$project$Routes$routeToUrl(
							_user$project$Routes$Show(_user$project$Model_Tasks$All)))
				};
			}
		}();
		var currentFilter = _p2._0;
		var updateUrlCmd = _p2._1;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			{flags: flags, filter: currentFilter, httpError: _elm_lang$core$Maybe$Nothing, wsError: _elm_lang$core$Maybe$Nothing, isBusy: true, tasks: _user$project$Model_Tasks$empty, inputText: '', editTask: _elm_lang$core$Maybe$Nothing},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$http$Http$send,
					_user$project$Main$GetTasksResponse,
					_user$project$Api_Task$getAll(flags.baseUrl)),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$Task$attempt,
						_elm_lang$core$Basics$always(_user$project$Main$NoOp),
						_elm_lang$dom$Dom$focus('inputText')),
					_1: {
						ctor: '::',
						_0: updateUrlCmd,
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _user$project$Main$updateNew = F2(
	function (msg, model) {
		var _p4 = msg;
		if (_p4.ctor === 'ChangeNewText') {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					model,
					{inputText: _p4._0}),
				{ctor: '[]'});
		} else {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					model,
					{isBusy: true, httpError: _elm_lang$core$Maybe$Nothing, editTask: _elm_lang$core$Maybe$Nothing}),
				{
					ctor: '::',
					_0: A2(
						_elm_lang$http$Http$send,
						_user$project$Main$UpdateTaskResponse,
						A2(_user$project$Api_Task$new, model.flags.baseUrl, _p4._0)),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$Task$attempt,
							_elm_lang$core$Basics$always(_user$project$Main$NoOp),
							_elm_lang$dom$Dom$focus('inputText')),
						_1: {ctor: '[]'}
					}
				});
		}
	});
var _user$project$Main$updateItem = F2(
	function (msg, model) {
		var _p5 = msg;
		switch (_p5.ctor) {
			case 'Edit':
				var _p6 = _p5._0;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							editTask: _elm_lang$core$Maybe$Just(
								{ctor: '_Tuple2', _0: _p6, _1: _p5._1})
						}),
					{
						ctor: '::',
						_0: A2(
							_elm_lang$core$Task$attempt,
							_elm_lang$core$Basics$always(_user$project$Main$NoOp),
							_elm_lang$dom$Dom$focus(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'task_',
									_elm_lang$core$Basics$toString(_p6)))),
						_1: {ctor: '[]'}
					});
			case 'ChangeEditText':
				var newEdit = A2(
					_elm_lang$core$Maybe$map,
					function (_p7) {
						var _p8 = _p7;
						return {ctor: '_Tuple2', _0: _p8._0, _1: _p5._0};
					},
					model.editTask);
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{editTask: newEdit}),
					{ctor: '[]'});
			case 'CancelEdit':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{editTask: _elm_lang$core$Maybe$Nothing}),
					{
						ctor: '::',
						_0: A2(
							_elm_lang$core$Task$attempt,
							_elm_lang$core$Basics$always(_user$project$Main$NoOp),
							_elm_lang$dom$Dom$focus('inputText')),
						_1: {ctor: '[]'}
					});
			case 'SubmitEdit':
				var changedTask = A2(
					_elm_lang$core$Maybe$map,
					function (task) {
						return _elm_lang$core$Native_Utils.update(
							task,
							{text: _p5._1});
					},
					A2(_user$project$Model_Tasks$get, _p5._0, model));
				var _p9 = changedTask;
				if (_p9.ctor === 'Nothing') {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						{ctor: '[]'});
				} else {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{isBusy: true, httpError: _elm_lang$core$Maybe$Nothing, editTask: _elm_lang$core$Maybe$Nothing}),
						{
							ctor: '::',
							_0: A2(
								_elm_lang$http$Http$send,
								_user$project$Main$UpdateTaskResponse,
								A2(_user$project$Api_Task$update, model.flags.baseUrl, _p9._0)),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$core$Task$attempt,
									_elm_lang$core$Basics$always(_user$project$Main$NoOp),
									_elm_lang$dom$Dom$focus('inputText')),
								_1: {ctor: '[]'}
							}
						});
				}
			case 'ToggleTask':
				var changedTask = A2(
					_elm_lang$core$Maybe$map,
					function (task) {
						return _elm_lang$core$Native_Utils.update(
							task,
							{finished: _p5._1});
					},
					A2(_user$project$Model_Tasks$get, _p5._0, model));
				var _p10 = changedTask;
				if (_p10.ctor === 'Nothing') {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						{ctor: '[]'});
				} else {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{isBusy: true, httpError: _elm_lang$core$Maybe$Nothing}),
						{
							ctor: '::',
							_0: A2(
								_elm_lang$http$Http$send,
								_user$project$Main$UpdateTaskResponse,
								A2(_user$project$Api_Task$update, model.flags.baseUrl, _p10._0)),
							_1: {ctor: '[]'}
						});
				}
			default:
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{editTask: _elm_lang$core$Maybe$Nothing, isBusy: true, httpError: _elm_lang$core$Maybe$Nothing}),
					{
						ctor: '::',
						_0: A2(
							_elm_lang$http$Http$send,
							_user$project$Main$GetTasksResponse,
							A2(_user$project$Api_Task$delete, model.flags.baseUrl, _p5._0)),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$core$Task$attempt,
								_elm_lang$core$Basics$always(_user$project$Main$NoOp),
								_elm_lang$dom$Dom$focus('inputText')),
							_1: {ctor: '[]'}
						}
					});
		}
	});
var _user$project$Main$update = F2(
	function (msg, model) {
		var _p11 = msg;
		switch (_p11.ctor) {
			case 'NoOp':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{ctor: '[]'});
			case 'LocationChanged':
				var _p12 = _user$project$Routes$locationToRoute(_p11._0);
				if (_p12.ctor === 'Nothing') {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{filter: _user$project$Model_Tasks$All}),
						{
							ctor: '::',
							_0: _elm_lang$navigation$Navigation$modifyUrl(
								_user$project$Routes$routeToUrl(
									_user$project$Routes$Show(_user$project$Model_Tasks$All))),
							_1: {ctor: '[]'}
						});
				} else {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{filter: _p12._0._0}),
						{ctor: '[]'});
				}
			case 'ChangeFilter':
				var _p13 = _p11._0;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{filter: _p13}),
					{
						ctor: '::',
						_0: _elm_lang$navigation$Navigation$newUrl(
							_user$project$Routes$routeToUrl(
								_user$project$Routes$Show(_p13))),
						_1: {ctor: '[]'}
					});
			case 'GetTasksResponse':
				if (_p11._0.ctor === 'Err') {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								httpError: _elm_lang$core$Maybe$Just(_p11._0._0),
								isBusy: false
							}),
						{ctor: '[]'});
				} else {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{tasks: _p11._0._0, httpError: _elm_lang$core$Maybe$Nothing, isBusy: false}),
						{ctor: '[]'});
				}
			case 'UpdateTaskResponse':
				if (_p11._0.ctor === 'Err') {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								httpError: _elm_lang$core$Maybe$Just(_p11._0._0),
								isBusy: false,
								editTask: _elm_lang$core$Maybe$Nothing,
								inputText: ''
							}),
						{
							ctor: '::',
							_0: A2(
								_elm_lang$core$Task$attempt,
								_elm_lang$core$Basics$always(_user$project$Main$NoOp),
								_elm_lang$dom$Dom$focus('inputText')),
							_1: {ctor: '[]'}
						});
				} else {
					var newTasks = A2(_user$project$Model_Tasks$insert, _p11._0._0, model.tasks);
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{tasks: newTasks, httpError: _elm_lang$core$Maybe$Nothing, isBusy: false, inputText: '', editTask: _elm_lang$core$Maybe$Nothing}),
						{
							ctor: '::',
							_0: A2(
								_elm_lang$core$Task$attempt,
								_elm_lang$core$Basics$always(_user$project$Main$NoOp),
								_elm_lang$dom$Dom$focus('inputText')),
							_1: {ctor: '[]'}
						});
				}
			case 'WebSocketError':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							wsError: _elm_lang$core$Maybe$Just(_p11._0)
						}),
					{ctor: '[]'});
			case 'DeleteTaskReceived':
				var newTasks = A2(_user$project$Model_Tasks$delete, _p11._0, model.tasks);
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{tasks: newTasks}),
					{ctor: '[]'});
			case 'NewTaskMsg':
				return A2(_user$project$Main$updateNew, _p11._0, model);
			case 'TaskItemMsg':
				return A2(_user$project$Main$updateItem, _p11._0, model);
			default:
				var _p14 = _p11._0;
				if (_p14 === 27) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{editTask: _elm_lang$core$Maybe$Nothing, inputText: '', httpError: _elm_lang$core$Maybe$Nothing}),
						{
							ctor: '::',
							_0: A2(
								_elm_lang$core$Task$attempt,
								_elm_lang$core$Basics$always(_user$project$Main$NoOp),
								_elm_lang$dom$Dom$focus('inputText')),
							_1: {ctor: '[]'}
						});
				} else {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						{ctor: '[]'});
				}
		}
	});
var _user$project$Main$viewFilterOptions = function (model) {
	var viewPill = F2(
		function (f, txt) {
			return A2(
				_elm_lang$html$Html$li,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('nav-item'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$a,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$href('javascript:void(0)'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('nav-link'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$classList(
										{
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'active',
												_1: _elm_lang$core$Native_Utils.eq(f, model.filter)
											},
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onClick(
											_elm_lang$core$Native_Utils.eq(f, model.filter) ? _user$project$Main$NoOp : _user$project$Main$ChangeFilter(f)),
										_1: {ctor: '[]'}
									}
								}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(txt),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				});
		});
	return A2(
		_elm_lang$html$Html$ul,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('nav nav-pills nav-fill'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(viewPill, _user$project$Model_Tasks$All, 'alle'),
			_1: {
				ctor: '::',
				_0: A2(viewPill, _user$project$Model_Tasks$Pending, 'zu erledigen'),
				_1: {
					ctor: '::',
					_0: A2(viewPill, _user$project$Model_Tasks$Completed, 'erledigt'),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Main$SubmitNew = function (a) {
	return {ctor: 'SubmitNew', _0: a};
};
var _user$project$Main$ChangeNewText = function (a) {
	return {ctor: 'ChangeNewText', _0: a};
};
var _user$project$Main$viewNewTaskForm = function (model) {
	return A2(
		_rundis$elm_bootstrap$Bootstrap_Form$formInline,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Events$onSubmit(
				_user$project$Main$SubmitNew(model.inputText)),
			_1: {
				ctor: '::',
				_0: _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m0,
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$disabled(
						model.isBusy || (!_elm_lang$core$Native_Utils.eq(model.editTask, _elm_lang$core$Maybe$Nothing))),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$autocomplete(false),
						_1: {ctor: '[]'}
					}
				}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_rundis$elm_bootstrap$Bootstrap_Grid$row,
				{
					ctor: '::',
					_0: _rundis$elm_bootstrap$Bootstrap_Grid_Row$attrs(
						{
							ctor: '::',
							_0: _rundis$elm_bootstrap$Bootstrap_Utilities_Size$w100,
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_rundis$elm_bootstrap$Bootstrap_Grid$col,
						{
							ctor: '::',
							_0: _rundis$elm_bootstrap$Bootstrap_Grid_Col$xs,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _rundis$elm_bootstrap$Bootstrap_Form_Input$text(
								{
									ctor: '::',
									_0: _rundis$elm_bootstrap$Bootstrap_Form_Input$onInput(_user$project$Main$ChangeNewText),
									_1: {
										ctor: '::',
										_0: _rundis$elm_bootstrap$Bootstrap_Form_Input$placeholder('was ist zu tun?'),
										_1: {
											ctor: '::',
											_0: _rundis$elm_bootstrap$Bootstrap_Form_Input$attrs(
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$id('inputText'),
													_1: {
														ctor: '::',
														_0: _rundis$elm_bootstrap$Bootstrap_Utilities_Size$w100,
														_1: {ctor: '[]'}
													}
												}),
											_1: {
												ctor: '::',
												_0: _rundis$elm_bootstrap$Bootstrap_Form_Input$value(model.inputText),
												_1: {ctor: '[]'}
											}
										}
									}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_rundis$elm_bootstrap$Bootstrap_Grid$col,
							{
								ctor: '::',
								_0: _rundis$elm_bootstrap$Bootstrap_Grid_Col$xsAuto,
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(
									_rundis$elm_bootstrap$Bootstrap_Button$button,
									{
										ctor: '::',
										_0: _rundis$elm_bootstrap$Bootstrap_Button$primary,
										_1: {
											ctor: '::',
											_0: _rundis$elm_bootstrap$Bootstrap_Button$disabled(
												_elm_lang$core$Native_Utils.cmp(
													_elm_lang$core$String$length(model.inputText),
													5) < 0),
											_1: {
												ctor: '::',
												_0: _rundis$elm_bootstrap$Bootstrap_Button$attrs(
													{
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$type_('submit'),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('ok'),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}),
			_1: {ctor: '[]'}
		});
};
var _user$project$Main$DeleteTask = function (a) {
	return {ctor: 'DeleteTask', _0: a};
};
var _user$project$Main$SubmitEdit = F2(
	function (a, b) {
		return {ctor: 'SubmitEdit', _0: a, _1: b};
	});
var _user$project$Main$CancelEdit = {ctor: 'CancelEdit'};
var _user$project$Main$ChangeEditText = function (a) {
	return {ctor: 'ChangeEditText', _0: a};
};
var _user$project$Main$Edit = F2(
	function (a, b) {
		return {ctor: 'Edit', _0: a, _1: b};
	});
var _user$project$Main$viewTaskButtons = function (task) {
	return A2(
		_rundis$elm_bootstrap$Bootstrap_ButtonGroup$buttonGroup,
		{
			ctor: '::',
			_0: _rundis$elm_bootstrap$Bootstrap_ButtonGroup$small,
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_rundis$elm_bootstrap$Bootstrap_ButtonGroup$button,
				{
					ctor: '::',
					_0: _rundis$elm_bootstrap$Bootstrap_Button$onClick(
						A2(_user$project$Main$Edit, task.id, task.text)),
					_1: {
						ctor: '::',
						_0: _rundis$elm_bootstrap$Bootstrap_Button$outlineLight,
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: _HolyMeekrob$elm_font_awesome_5$FontAwesome$icon(_HolyMeekrob$elm_font_awesome_5$FontAwesome$edit),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_rundis$elm_bootstrap$Bootstrap_ButtonGroup$button,
					{
						ctor: '::',
						_0: _rundis$elm_bootstrap$Bootstrap_Button$outlineLight,
						_1: {
							ctor: '::',
							_0: _rundis$elm_bootstrap$Bootstrap_Button$onClick(
								_user$project$Main$DeleteTask(task.id)),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _HolyMeekrob$elm_font_awesome_5$FontAwesome$icon(_HolyMeekrob$elm_font_awesome_5$FontAwesome$trash),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Main$ToggleTask = F2(
	function (a, b) {
		return {ctor: 'ToggleTask', _0: a, _1: b};
	});
var _user$project$Main$viewTask = F2(
	function (model, task) {
		var cursorPointer = _elm_lang$html$Html_Attributes$style(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'},
				_1: {ctor: '[]'}
			});
		var textStyle = task.finished ? _elm_lang$html$Html_Attributes$style(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'text-decoration', _1: 'line-through'},
				_1: {ctor: '[]'}
			}) : _elm_lang$html$Html_Attributes$style(
			{ctor: '[]'});
		var isDisabled = model.isBusy;
		var optColor = isDisabled ? {
			ctor: '::',
			_0: _rundis$elm_bootstrap$Bootstrap_ListGroup$disabled,
			_1: {ctor: '[]'}
		} : (task.finished ? {
			ctor: '::',
			_0: _rundis$elm_bootstrap$Bootstrap_ListGroup$light,
			_1: {ctor: '[]'}
		} : {ctor: '[]'});
		var _p15 = function () {
			var _p16 = model.editTask;
			if (_p16.ctor === 'Just') {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.eq(_p16._0._0, task.id),
					_1: _p16._0._1
				};
			} else {
				return {ctor: '_Tuple2', _0: false, _1: ''};
			}
		}();
		var isEdit = _p15._0;
		var editText = _p15._1;
		var taskEvents = (isDisabled || isEdit) ? {ctor: '[]'} : {
			ctor: '::',
			_0: _elm_lang$html$Html_Events$onClick(
				A2(_user$project$Main$ToggleTask, task.id, !task.finished)),
			_1: {ctor: '[]'}
		};
		var checkBox = A2(
			_elm_lang$html$Html$div,
			{ctor: '::', _0: cursorPointer, _1: taskEvents},
			{
				ctor: '::',
				_0: task.finished ? A4(
					_HolyMeekrob$elm_font_awesome_5$FontAwesome$iconWithOptions,
					_HolyMeekrob$elm_font_awesome_5$FontAwesome$checkCircle,
					_HolyMeekrob$elm_font_awesome_5$FontAwesome$Regular,
					{ctor: '[]'},
					{ctor: '[]'}) : A4(
					_HolyMeekrob$elm_font_awesome_5$FontAwesome$iconWithOptions,
					_HolyMeekrob$elm_font_awesome_5$FontAwesome$circle,
					_HolyMeekrob$elm_font_awesome_5$FontAwesome$Regular,
					{ctor: '[]'},
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			});
		var content = isEdit ? A2(
			_rundis$elm_bootstrap$Bootstrap_Form$formInline,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onSubmit(
					A2(_user$project$Main$SubmitEdit, task.id, editText)),
				_1: {
					ctor: '::',
					_0: _rundis$elm_bootstrap$Bootstrap_Utilities_Spacing$m0,
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$disabled(model.isBusy),
						_1: {ctor: '[]'}
					}
				}
			},
			{
				ctor: '::',
				_0: _rundis$elm_bootstrap$Bootstrap_Form_Input$text(
					{
						ctor: '::',
						_0: _rundis$elm_bootstrap$Bootstrap_Form_Input$onInput(_user$project$Main$ChangeEditText),
						_1: {
							ctor: '::',
							_0: _rundis$elm_bootstrap$Bootstrap_Form_Input$attrs(
								{
									ctor: '::',
									_0: _rundis$elm_bootstrap$Bootstrap_Utilities_Size$w100,
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onBlur(_user$project$Main$CancelEdit),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$id(
												A2(
													_elm_lang$core$Basics_ops['++'],
													'task_',
													_elm_lang$core$Basics$toString(task.id))),
											_1: {ctor: '[]'}
										}
									}
								}),
							_1: {
								ctor: '::',
								_0: _rundis$elm_bootstrap$Bootstrap_Form_Input$value(editText),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			}) : A2(
			_elm_lang$html$Html$strong,
			{
				ctor: '::',
				_0: textStyle,
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(task.text),
				_1: {ctor: '[]'}
			});
		return A2(
			_rundis$elm_bootstrap$Bootstrap_ListGroup$li,
			optColor,
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$map,
					_user$project$Main$TaskItemMsg,
					A2(
						_rundis$elm_bootstrap$Bootstrap_Grid$row,
						{
							ctor: '::',
							_0: _rundis$elm_bootstrap$Bootstrap_Grid_Row$attrs(
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('justify-content-center align-items-center'),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_rundis$elm_bootstrap$Bootstrap_Grid$col,
								{
									ctor: '::',
									_0: _rundis$elm_bootstrap$Bootstrap_Grid_Col$xsAuto,
									_1: {ctor: '[]'}
								},
								isEdit ? {ctor: '[]'} : {
									ctor: '::',
									_0: checkBox,
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_rundis$elm_bootstrap$Bootstrap_Grid$col,
									{
										ctor: '::',
										_0: _rundis$elm_bootstrap$Bootstrap_Grid_Col$xs,
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: content,
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_rundis$elm_bootstrap$Bootstrap_Grid$col,
										{
											ctor: '::',
											_0: _rundis$elm_bootstrap$Bootstrap_Grid_Col$xsAuto,
											_1: {ctor: '[]'}
										},
										isEdit ? {ctor: '[]'} : {
											ctor: '::',
											_0: _user$project$Main$viewTaskButtons(task),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}
						})),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Main$view = function (model) {
	return A2(
		_rundis$elm_bootstrap$Bootstrap_Grid$container,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('container h-100'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_rundis$elm_bootstrap$Bootstrap_Grid$row,
				{
					ctor: '::',
					_0: _rundis$elm_bootstrap$Bootstrap_Grid_Row$attrs(
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('h-100 justify-content-center align-items-center'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_rundis$elm_bootstrap$Bootstrap_Grid$col,
						{
							ctor: '::',
							_0: _rundis$elm_bootstrap$Bootstrap_Grid_Col$md12,
							_1: {
								ctor: '::',
								_0: _rundis$elm_bootstrap$Bootstrap_Grid_Col$middleMd,
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _rundis$elm_bootstrap$Bootstrap_Card$view(
								A2(
									_rundis$elm_bootstrap$Bootstrap_Card$listGroup,
									A2(
										_elm_lang$core$List$map,
										_user$project$Main$viewTask(model),
										A2(_user$project$Model_Tasks$getSortedTaskList, model.filter, model)),
									A3(
										_rundis$elm_bootstrap$Bootstrap_Card$block,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _rundis$elm_bootstrap$Bootstrap_Card_Block$custom(
												_user$project$Main$viewFilterOptions(model)),
											_1: {ctor: '[]'}
										},
										A3(
											_rundis$elm_bootstrap$Bootstrap_Card$block,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _rundis$elm_bootstrap$Bootstrap_Card_Block$custom(
													A2(
														_elm_lang$html$Html$map,
														_user$project$Main$NewTaskMsg,
														_user$project$Main$viewNewTaskForm(model))),
												_1: {ctor: '[]'}
											},
											A3(
												_rundis$elm_bootstrap$Bootstrap_Card$headerH1,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Elm-Todo-Liste'),
													_1: {ctor: '[]'}
												},
												_rundis$elm_bootstrap$Bootstrap_Card$config(
													{
														ctor: '::',
														_0: _rundis$elm_bootstrap$Bootstrap_Card$outlineLight,
														_1: {ctor: '[]'}
													})))))),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: _user$project$Main$viewError(model.wsError),
				_1: {
					ctor: '::',
					_0: _user$project$Main$viewError(
						A2(_elm_lang$core$Maybe$map, _elm_lang$core$Basics$toString, model.httpError)),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Main$main = A2(
	_elm_lang$navigation$Navigation$programWithFlags,
	_user$project$Main$LocationChanged,
	{init: _user$project$Main$init, view: _user$project$Main$view, update: _user$project$Main$update, subscriptions: _user$project$Main$subscriptions})(
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (baseUrl) {
			return _elm_lang$core$Json_Decode$succeed(
				{baseUrl: baseUrl});
		},
		A2(_elm_lang$core$Json_Decode$field, 'baseUrl', _elm_lang$core$Json_Decode$string)));

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _user$project$Main$main !== 'undefined') {
    _user$project$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);


webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(205)('wks');
var uid = __webpack_require__(206);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (false
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (false
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "production" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    false
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (false) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "production" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (false) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (false) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "production" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (false) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if (false
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    false
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (false) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (false) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (false) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        false
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (false
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (false) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (false) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (false) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (false
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "production" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (false) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (false) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (false) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (false) {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (false) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (false) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (false) {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (false) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (false) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (false) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (false) {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (false) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      false
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (false) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "production" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (false
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (false) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (false) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (false) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (false) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (false) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "production" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (false) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (false) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (false) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (false) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(11), __webpack_require__(240).setImmediate))

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(330);
var defined = __webpack_require__(33);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(205)('keys');
var uid = __webpack_require__(206);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(14).f;
var has = __webpack_require__(22);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(21);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_partials_HeaderComponent__ = __webpack_require__(246);
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  data: function data() {
    return {};
  },

  components: {
    HeaderComponent: __WEBPACK_IMPORTED_MODULE_0__components_partials_HeaderComponent__["a" /* default */]
  }
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Logo__ = __webpack_require__(42);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Logo: __WEBPACK_IMPORTED_MODULE_0__components_common_Logo__["a" /* default */]
  }
});

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_image_clarity_icon_png__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_image_clarity_icon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_image_clarity_icon_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_image_efficiency_icon_png__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_image_efficiency_icon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_image_efficiency_icon_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_image_consistency_icon_png__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_image_consistency_icon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_image_consistency_icon_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_image_beauty_icon_png__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_image_beauty_icon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_image_beauty_icon_png__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  components: {},
  data: function data() {
    return {
      clarityIcon: __WEBPACK_IMPORTED_MODULE_0__assets_image_clarity_icon_png___default.a,
      efficiencyIcon: __WEBPACK_IMPORTED_MODULE_1__assets_image_efficiency_icon_png___default.a,
      consistencyIcon: __WEBPACK_IMPORTED_MODULE_2__assets_image_consistency_icon_png___default.a,
      beautyIcon: __WEBPACK_IMPORTED_MODULE_3__assets_image_beauty_icon_png___default.a
    };
  }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_MenuPopup__ = __webpack_require__(46);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    MenuPopup: __WEBPACK_IMPORTED_MODULE_0__components_common_MenuPopup__["a" /* default */]
  },
  data: function data() {
    return {};
  }
});

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_forms_InputField__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_forms_TextareaField__ = __webpack_require__(24);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      input0: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      input9: '',
      input10: '',
      input11: '',
      input12: 'This value can\'t be edited',
      input13: ''
    };
  },

  components: {
    InputField: __WEBPACK_IMPORTED_MODULE_0__components_forms_InputField__["a" /* default */],
    TextareaField: __WEBPACK_IMPORTED_MODULE_1__components_forms_TextareaField__["a" /* default */]
  }
});

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_mixins_modalBase__ = __webpack_require__(25);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__components_mixins_modalBase__["a" /* default */]]
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_mixins_modalBase__ = __webpack_require__(25);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__components_mixins_modalBase__["a" /* default */]]
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_BannerNotification__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_image_promo_image_png__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_image_promo_image_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_image_promo_image_png__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      resolve: {
        text: 'Yes, tell me more!',
        url: 'http://www.google.com'
      },
      PromoImage: __WEBPACK_IMPORTED_MODULE_1__assets_image_promo_image_png___default.a
    };
  },

  components: {
    BannerNotification: __WEBPACK_IMPORTED_MODULE_0__components_common_BannerNotification__["a" /* default */],
    PromoImage: __WEBPACK_IMPORTED_MODULE_1__assets_image_promo_image_png___default.a
  }
});

/***/ }),
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_forms_ToggleButton__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_forms_RadioButton__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_forms_CheckboxButton__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_forms_DropdownSelect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_forms_TokenSelect__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_forms_DropdownMultiselect__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    ToggleButton: __WEBPACK_IMPORTED_MODULE_0__components_forms_ToggleButton__["a" /* default */],
    RadioButton: __WEBPACK_IMPORTED_MODULE_1__components_forms_RadioButton__["a" /* default */],
    CheckboxButton: __WEBPACK_IMPORTED_MODULE_2__components_forms_CheckboxButton__["a" /* default */],
    DropdownSelect: __WEBPACK_IMPORTED_MODULE_3__components_forms_DropdownSelect__["a" /* default */],
    DropdownMultiselect: __WEBPACK_IMPORTED_MODULE_5__components_forms_DropdownMultiselect__["a" /* default */],
    TokenSelect: __WEBPACK_IMPORTED_MODULE_4__components_forms_TokenSelect__["a" /* default */]
  },
  data: function data() {
    return {
      selected: false,
      checkbox1: false,
      checkbox2: true,
      checkbox3: false,
      checkbox4: false,
      toggle1: false,
      toggle2: false,
      toggle3: false,
      toggle4: false,
      radio1: 2,
      dropdown1: 0,
      dropdown2: 0,
      multiselect1: [],
      multiselect2: [1, 2],
      tokenselect: [],
      dropdownOptions: [{
        id: 1,
        text: 'Car'
      }, {
        id: 2,
        text: 'Car Box'
      }, {
        id: 3,
        text: 'Box'
      }, {
        id: 4,
        text: 'Grand'
      }, {
        id: 5,
        text: 'Car Box Grand'
      }, {
        id: 6,
        text: 'Match Box'
      }, {
        id: 7,
        text: 'Grand Match'
      }, {
        id: 8,
        text: 'Grand Prix'
      }, {
        id: 9,
        text: 'Prix Car'
      }, {
        id: 10,
        text: 'Grant Prix Match Car Box'
      }]
    };
  }
});

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_forms_InputField__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_forms_TextareaField__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_forms_DatePicker__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_forms_DateRangePicker__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_forms_DropdownSelect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_forms_DropdownMultiselect__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_forms_CheckboxButton__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_forms_RadioButton__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_forms_ToggleButton__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_forms_ValidationForm__ = __webpack_require__(301);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//















/* harmony default export */ __webpack_exports__["a"] = ({
  $_veeValidate: {
    validator: 'new'
  },
  data: function data() {
    return {
      validationMode: 'active',
      newPublication: this.getClearItem(),
      categories: {
        health: 'Health',
        fitness: 'Fitness',
        nutrition: 'Nutrition',
        natural: 'Natural Products',
        supplements: 'Dietary Supplements',
        invalid: 'Invalid Value'
      },
      tags: ['cuissine', 'diet', 'nutrition', 'fitnessEveryday', 'stayingHealthy', 'natural', 'dietProducts', 'healthForEveryone', 'fatBurning'],
      todayDateString: __WEBPACK_IMPORTED_MODULE_0_moment___default()().format('YYYY/MM/DD')
    };
  },
  components: {
    InputField: __WEBPACK_IMPORTED_MODULE_1__components_forms_InputField__["a" /* default */],
    TextareaField: __WEBPACK_IMPORTED_MODULE_2__components_forms_TextareaField__["a" /* default */],
    DatePicker: __WEBPACK_IMPORTED_MODULE_3__components_forms_DatePicker__["a" /* default */],
    DateRangePicker: __WEBPACK_IMPORTED_MODULE_4__components_forms_DateRangePicker__["a" /* default */],
    DropdownSelect: __WEBPACK_IMPORTED_MODULE_5__components_forms_DropdownSelect__["a" /* default */],
    DropdownMultiselect: __WEBPACK_IMPORTED_MODULE_6__components_forms_DropdownMultiselect__["a" /* default */],
    CheckboxButton: __WEBPACK_IMPORTED_MODULE_7__components_forms_CheckboxButton__["a" /* default */],
    RadioButton: __WEBPACK_IMPORTED_MODULE_8__components_forms_RadioButton__["a" /* default */],
    ToggleButton: __WEBPACK_IMPORTED_MODULE_9__components_forms_ToggleButton__["a" /* default */],
    ValidationForm: __WEBPACK_IMPORTED_MODULE_10__components_forms_ValidationForm__["a" /* default */]
  },
  methods: {
    getClearItem: function getClearItem() {
      return {
        name: '',
        username: '',
        email: '',
        content: '',
        publishDate: __WEBPACK_IMPORTED_MODULE_0_moment___default()().toDate(),
        start: __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('month').toDate(),
        end: __WEBPACK_IMPORTED_MODULE_0_moment___default()().endOf('month').toDate(),
        category: null,
        tags: [],
        isPrivate: false,
        isPublished: true,
        publishType: null,
        activateStyling: false,
        activateBoldness: true
      };
    },
    validate: function validate() {
      this.$refs.form1.validate();
    },
    clearErrors: function clearErrors() {
      this.$refs.form1.clearErrors();
    },
    addErrors: function addErrors() {
      var errors = [{
        field: 'name',
        msg: 'This name is not appropiate',
        rule: 'filter'
      }, {
        field: 'email',
        msg: 'This email has already been taken',
        rule: 'unique'
      }];
      this.$refs.form1.addErrors(errors);
    }
  }
});

/***/ }),
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  $_veeValidate: {
    validator: 'new'
  },
  data: function data() {
    return {};
  },
  methods: {
    validate: function validate() {
      this.$validator.validateAll();
    },
    clearErrors: function clearErrors() {
      this.errors.clear();
    },
    addErrors: function addErrors(errors) {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(errors, function (value, key) {
        _this.errors.add(value);
      });
    }
  }
});

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Notification__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_image_notification_example_png__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_image_notification_example_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_image_notification_example_png__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      NotificationImage: __WEBPACK_IMPORTED_MODULE_1__assets_image_notification_example_png___default.a
    };
  },

  components: {
    Notification: __WEBPACK_IMPORTED_MODULE_0__components_common_Notification__["a" /* default */],
    NotificationImage: __WEBPACK_IMPORTED_MODULE_1__assets_image_notification_example_png___default.a
  }
});

/***/ }),
/* 194 */,
/* 195 */,
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_image_modal_explained_png__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_image_modal_explained_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_image_modal_explained_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Modal__ = __webpack_require__(197);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    ModalExplained: __WEBPACK_IMPORTED_MODULE_0__assets_image_modal_explained_png___default.a,
    Modal: __WEBPACK_IMPORTED_MODULE_1__components_common_Modal__["a" /* default */]
  },
  data: function data() {
    return {
      ModalExplained: __WEBPACK_IMPORTED_MODULE_0__assets_image_modal_explained_png___default.a,
      ModalSmall: false,
      ModalMedium: false,
      ModalLarge: false,
      ModalXL: false
    };
  }
});

/***/ }),
/* 197 */,
/* 198 */,
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_DataTable__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_tableData_json__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_tableData_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__data_tableData_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_table_NormalHeader__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_table_SortableHeader__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_table_FilterInput__ = __webpack_require__(39);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    DataTable: __WEBPACK_IMPORTED_MODULE_2__components_common_DataTable__["a" /* default */],
    NormalHeader: __WEBPACK_IMPORTED_MODULE_4__components_table_NormalHeader__["a" /* default */],
    SortableHeader: __WEBPACK_IMPORTED_MODULE_5__components_table_SortableHeader__["a" /* default */],
    FilterInput: __WEBPACK_IMPORTED_MODULE_6__components_table_FilterInput__["a" /* default */]
  },
  data: function data() {
    return {
      tableData: __WEBPACK_IMPORTED_MODULE_3__data_tableData_json___default.a
    };
  },

  methods: {
    // These 2 methods are for the datatable
    // formatRow is the function that receives the row/item of the table and formats
    // it up to how the template needs, here can even add additional fields for
    // searching and filtering
    formatRow: function formatRow(item) {
      var newItem = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.cloneDeep(item);
      newItem.percentProgress = item.progress / item.total * 100;
      newItem.comission_text = '$' + String(item.comission);

      return newItem;
    },
    // tableSource is the dynamic source of the table, this is meant
    // as a way to populate the table dynamically
    tableSource: function tableSource(columns, size, page, search, filters, sorters, orders) {
      var _this = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        resolve(_this.tableData);
      });
    }
  }
});

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(201);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(324);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(16);
var $iterCreate = __webpack_require__(325);
var setToStringTag = __webpack_require__(37);
var getPrototypeOf = __webpack_require__(333);
var ITERATOR = __webpack_require__(4)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 202 */,
/* 203 */,
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(32);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 206 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 207 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(23);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(8);
var aFunction = __webpack_require__(21);
var SPECIES = __webpack_require__(4)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(20);
var invoke = __webpack_require__(345);
var html = __webpack_require__(208);
var cel = __webpack_require__(34);
var global = __webpack_require__(3);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(23)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var isObject = __webpack_require__(15);
var newPromiseCapability = __webpack_require__(38);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */
/***/ (function(module, exports) {

module.exports = [{"offerId":83321,"name":"The incredible automated flying machines","comission":42,"type":"Per Sale","progress":44,"total":252,"status":"active"},{"offerId":86674,"name":"Credible architecture goes viral","comission":25.74,"type":"Per Sale","progress":73,"total":126,"status":"warning"},{"offerId":70820,"name":"Creators of medicine","comission":73.12,"type":"Per Sale","progress":111,"total":179,"status":"success"},{"offerId":88647,"name":"Merchandizing great solutions","comission":62.22,"type":"Per Sale","progress":103,"total":137,"status":"error"},{"offerId":50629,"name":"Cluster \"status\" retrieval","comission":24.25,"type":"Per Sale","progress":12,"total":62,"status":"active"},{"offerId":63379,"name":"Credible architecture goes viral","comission":25.74,"type":"Per Sale","progress":73,"total":126,"status":"warning"},{"offerId":32683,"name":"Creators of medicine","comission":73.12,"type":"Per Sale","progress":111,"total":179,"status":"success"},{"offerId":43083,"name":"Merchandizing great solutions","comission":62.22,"type":"Per Sale","progress":103,"total":137,"status":"error"},{"offerId":83462,"name":"Cluster \"status\" retrieval","comission":24.25,"type":"Per Sale","progress":12,"total":62,"status":"active"},{"offerId":13784,"name":"Credible architecture goes viral","comission":25.74,"type":"Per Sale","progress":73,"total":126,"status":"warning"},{"offerId":92226,"name":"Creators of medicine","comission":73.12,"type":"Per Sale","progress":111,"total":179,"status":"success"},{"offerId":57449,"name":"Merchandizing great solutions","comission":62.22,"type":"Per Sale","progress":103,"total":137,"status":"error"},{"offerId":41021,"name":"Cluster \"status\" retrieval","comission":24.25,"type":"Per Sale","progress":12,"total":62,"status":"active"},{"offerId":18191,"name":"Credible architecture goes viral","comission":25.74,"type":"Per Sale","progress":73,"total":126,"status":"warning"},{"offerId":23605,"name":"Creators of medicine","comission":73.12,"type":"Per Sale","progress":111,"total":179,"status":"success"},{"offerId":3035,"name":"Merchandizing great solutions","comission":62.22,"type":"Per Sale","progress":103,"total":137,"status":"error"},{"offerId":73105,"name":"Cluster \"status\" retrieval","comission":24.25,"type":"Per Sale","progress":12,"total":62,"status":"active"},{"offerId":99653,"name":"Credible architecture goes viral","comission":25.74,"type":"Per Sale","progress":73,"total":126,"status":"warning"}]

/***/ }),
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Tooltip__ = __webpack_require__(229);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Tooltip: __WEBPACK_IMPORTED_MODULE_0__components_common_Tooltip__["a" /* default */]
  },
  data: function data() {
    return {
      tooltip: ''
    };
  }
});

/***/ }),
/* 229 */,
/* 230 */,
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Tabs__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Accordion__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_AccordionRow__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_image_vertical_tabs_png__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_image_vertical_tabs_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_image_vertical_tabs_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_image_horizontal_tabs_png__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_image_horizontal_tabs_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_image_horizontal_tabs_png__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Tabs: __WEBPACK_IMPORTED_MODULE_0__components_common_Tabs__["a" /* default */],
    Accordion: __WEBPACK_IMPORTED_MODULE_1__components_common_Accordion__["a" /* default */],
    AccordionRow: __WEBPACK_IMPORTED_MODULE_2__components_common_AccordionRow__["a" /* default */]
  },
  data: function data() {
    return {
      VerticalTabsImage: __WEBPACK_IMPORTED_MODULE_3__assets_image_vertical_tabs_png___default.a,
      HorizontalTabsImage: __WEBPACK_IMPORTED_MODULE_4__assets_image_horizontal_tabs_png___default.a
    };
  }
});

/***/ }),
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_forms_DatePicker__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_forms_DateRangePicker__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_tableData_json__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_tableData_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__data_tableData_json__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    DatePicker: __WEBPACK_IMPORTED_MODULE_1__components_forms_DatePicker__["a" /* default */],
    DateRangePicker: __WEBPACK_IMPORTED_MODULE_2__components_forms_DateRangePicker__["a" /* default */]
  },
  data: function data() {
    return {
      date1: __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('week').toDate(),
      date2: __WEBPACK_IMPORTED_MODULE_0_moment___default()().toDate(),
      date3: __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('month').toDate(),
      start: __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('week').toDate(),
      end: __WEBPACK_IMPORTED_MODULE_0_moment___default()().toDate(),
      start2: __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('month').toDate(),
      end2: __WEBPACK_IMPORTED_MODULE_0_moment___default()().endOf('month').toDate(),
      tableData: __WEBPACK_IMPORTED_MODULE_3__data_tableData_json___default.a
    };
  },

  methods: {
    // The following methods is for the format of the date range picker output
    formatDate: function formatDate(date) {
      return __WEBPACK_IMPORTED_MODULE_0_moment___default()(date).format('YYYY-MM-DD');
    }
  }
});

/***/ }),
/* 238 */,
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_notification__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validation__ = __webpack_require__(389);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_notification___default.a);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
}).$mount('#app');

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(241);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11), __webpack_require__(242)))

/***/ }),
/* 242 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(40);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0875a9a4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(250);
function injectStyle (ssrContext) {
  __webpack_require__(244)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0875a9a4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 244 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 245 */,
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HeaderComponent_vue__ = __webpack_require__(41);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_079cbb04_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_HeaderComponent_vue__ = __webpack_require__(249);
function injectStyle (ssrContext) {
  __webpack_require__(247)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HeaderComponent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_079cbb04_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_HeaderComponent_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 247 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 248 */,
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_c('a',{attrs:{"href":"/"}},[_c('Logo',{staticClass:"center-block"})],1),_vm._v(" "),_c('ul',{staticClass:"navigation"},[_c('li',{staticClass:"nav-header"},[_vm._v("COMPONENTS")]),_vm._v(" "),_c('li',[_c('router-link',{class:{'active-route': _vm.$route.path == '/buttons'},attrs:{"to":"/buttons"}},[_vm._v("Buttons")])],1),_vm._v(" "),_c('li',[_c('router-link',{class:{'active-route': _vm.$route.path == '/text-fields'},attrs:{"to":"/text-fields"}},[_vm._v("Text Fields")])],1),_vm._v(" "),_c('li',[_c('router-link',{class:{'active-route': _vm.$route.path == '/notifications'},attrs:{"to":"/notifications"}},[_vm._v("Notifications")])],1),_vm._v(" "),_c('li',[_c('router-link',{class:{'active-route': _vm.$route.path == '/banner-notifications'},attrs:{"to":"/banner-notifications"}},[_vm._v("Banners")])],1),_vm._v(" "),_c('li',[_c('router-link',{class:{'active-route': _vm.$route.path == '/modals'},attrs:{"to":"/modals"}},[_vm._v("Modals")])],1),_vm._v(" "),_c('li',[_c('router-link',{class:{'active-route': _vm.$route.path == '/tables'},attrs:{"to":"/tables"}},[_vm._v("Tables")])],1),_vm._v(" "),_c('li',[_c('router-link',{class:{'active-route': _vm.$route.path == '/tooltips'},attrs:{"to":"/tooltips"}},[_vm._v("Tooltips")])],1),_vm._v(" "),_c('li',[_c('router-link',{class:{'active-route': _vm.$route.path == '/tabs-and-accordions'},attrs:{"to":"/tabs-and-accordions"}},[_vm._v("Tabs & Accordions")])],1),_vm._v(" "),_c('li',[_c('router-link',{class:{'active-route': _vm.$route.path == '/loaders'},attrs:{"to":"/loaders"}},[_vm._v("Spinners & Loaders")])],1),_vm._v(" "),_c('li',[_c('router-link',{class:{'active-route': _vm.$route.path == '/selects'},attrs:{"to":"/selects"}},[_vm._v("Selects")])],1),_vm._v(" "),_c('li',{staticClass:"nav-header"},[_vm._v("PATTERNS")]),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/buttons"}},[_vm._v("Forms")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/buttons"}},[_vm._v("Media Upload")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/datepickers"}},[_vm._v("Datepickers")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/buttons"}},[_vm._v("Wizard")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/buttons"}},[_vm._v("Global Navigation")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/buttons"}},[_vm._v("Charts & Graphs")])],1),_vm._v(" "),_c('li',[_c('router-link',{class:{'active-route': _vm.$route.path == '/validation'},attrs:{"to":{name: 'Validation'}}},[_vm._v("Validation Form")])],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('header',{staticClass:"header"},[_c('header-component')],1),_vm._v(" "),_c('main',{staticClass:"main-content"},[_c('router-view')],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_routes_Index__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_routes_Buttons__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_routes_TextFields__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_routes_Modal1__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_routes_Modal2__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_routes_BannerNotifications__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_routes_Selects__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_partials_Validation__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_routes_Notifications__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_routes_Modals__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_routes_Tables__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_routes_Tooltips__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_routes_TabsAndAccordions__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_routes_DatePickers__ = __webpack_require__(385);

















__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    name: 'Index',
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__components_routes_Index__["a" /* default */]
  }, {
    name: 'Validation',
    path: '/validation',
    component: __WEBPACK_IMPORTED_MODULE_9__components_partials_Validation__["a" /* default */]
  }, {
    name: 'Buttons',
    path: '/buttons',
    component: __WEBPACK_IMPORTED_MODULE_3__components_routes_Buttons__["a" /* default */]
  }, {
    name: 'Text Fields',
    path: '/text-fields',
    component: __WEBPACK_IMPORTED_MODULE_4__components_routes_TextFields__["a" /* default */]
  }, {
    name: 'Banner Notifications',
    path: '/banner-notifications',
    component: __WEBPACK_IMPORTED_MODULE_7__components_routes_BannerNotifications__["a" /* default */]
  }, {
    name: 'Selects',
    path: '/selects',
    component: __WEBPACK_IMPORTED_MODULE_8__components_routes_Selects__["a" /* default */]
  }, {
    name: 'Notifications',
    path: '/notifications',
    component: __WEBPACK_IMPORTED_MODULE_10__components_routes_Notifications__["a" /* default */]
  }, {
    name: 'Modals',
    path: '/modals',
    component: __WEBPACK_IMPORTED_MODULE_11__components_routes_Modals__["a" /* default */],
    children: [{
      name: 'Modal1',
      path: 'modal1',
      component: __WEBPACK_IMPORTED_MODULE_5__components_routes_Modal1__["a" /* default */]
    }, {
      name: 'Modal2',
      path: 'modal2',
      component: __WEBPACK_IMPORTED_MODULE_6__components_routes_Modal2__["a" /* default */]
    }]
  }, {
    name: 'Tables',
    path: '/tables',
    component: __WEBPACK_IMPORTED_MODULE_12__components_routes_Tables__["a" /* default */]
  }, {
    name: 'Tooltips',
    path: '/tooltips',
    component: __WEBPACK_IMPORTED_MODULE_13__components_routes_Tooltips__["a" /* default */]
  }, {
    name: 'Tabs and Accordions',
    path: '/tabs-and-accordions',
    component: __WEBPACK_IMPORTED_MODULE_14__components_routes_TabsAndAccordions__["a" /* default */]
  }, {
    name: 'Datepicker',
    path: '/datepickers',
    component: __WEBPACK_IMPORTED_MODULE_15__components_routes_DatePickers__["a" /* default */]
  }]
}));

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (false) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (false) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "production" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (false) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (false) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (false) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (false) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (false) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (false) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (false) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (false) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (false) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "production" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (false) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "production" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);


/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(44);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9855d8d0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(259);
function injectStyle (ssrContext) {
  __webpack_require__(254)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9855d8d0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 254 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAAC5CAMAAABEMbB7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RDEzNjExNjI3MTQxMUU4OUY0QUU5RjUzRDc1NkM2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5RDEzNjExNzI3MTQxMUU4OUY0QUU5RjUzRDc1NkM2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlEMTM2MTE0MjcxNDExRTg5RjRBRTlGNTNENzU2QzY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlEMTM2MTE1MjcxNDExRTg5RjRBRTlGNTNENzU2QzY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+fEkqkgAAAGBQTFRF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"

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAAC5CAMAAABEMbB7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RDEzNjExQTI3MTQxMUU4OUY0QUU5RjUzRDc1NkM2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5RDEzNjExQjI3MTQxMUU4OUY0QUU5RjUzRDc1NkM2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlEMTM2MTE4MjcxNDExRTg5RjRBRTlGNTNENzU2QzY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlEMTM2MTE5MjcxNDExRTg5RjRBRTlGNTNENzU2QzY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+gyIuqgAAAGBQTFRF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"

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAAC5CAMAAABEMbB7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RDEzNjExRTI3MTQxMUU4OUY0QUU5RjUzRDc1NkM2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNjU5MUY1NjI3MTQxMUU4OUY0QUU5RjUzRDc1NkM2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlEMTM2MTFDMjcxNDExRTg5RjRBRTlGNTNENzU2QzY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlEMTM2MTFEMjcxNDExRTg5RjRBRTlGNTNENzU2QzY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2zZ32wAAAGBQTFRF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"

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAAC5CAMAAABEMbB7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNjU5MUY1OTI3MTQxMUU4OUY0QUU5RjUzRDc1NkM2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNjU5MUY1QTI3MTQxMUU4OUY0QUU5RjUzRDc1NkM2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI2NTkxRjU3MjcxNDExRTg5RjRBRTlGNTNENzU2QzY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI2NTkxRjU4MjcxNDExRTg5RjRBRTlGNTNENzU2QzY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+neriwgAAAGBQTFRF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"

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_c('h1',[_vm._v("Welcome")]),_vm._v(" "),_c('span',{staticClass:"headline-divider"},[_vm._v(" ")]),_vm._v(" "),_c('p',[_vm._v("The Sxale Design System reflects the patterns and components that underpin the Sxale software platform. These patterns and components provide a unified language and consistent look and feel when designing features for the user interface. By following these guidelines and usage standards, Sxale is able to provide a consistent, intuitive and pleasurable experience for its users.")]),_vm._v(" "),_c('h3',[_vm._v("Design Principles")]),_vm._v(" "),_c('p',[_vm._v("The following core principles are used to shape design decisions for the Sxale UI. By understanding the hierarchy of user needs we are able to craft the best user experience possible for all clients, internal and external. These principle should be reference in order of importance when making any design decisions. ")]),_vm._v(" "),_c('div',{staticClass:"padding-div"},[_vm._v(" ")]),_vm._v(" "),_c('div',{staticClass:"design-principle-box"},[_c('span',{staticClass:"principle-number"},[_vm._v("1")]),_vm._v(" "),_c('img',{attrs:{"src":_vm.clarityIcon,"alt":"Clarity Icon"}}),_vm._v(" "),_c('h3',[_vm._v("CLARITY")]),_vm._v(" "),_c('p',[_vm._v("Eliminate ambiguity. Enable people to see, understand and act with confidence")])]),_vm._v(" "),_c('div',{staticClass:"design-principle-box"},[_c('span',{staticClass:"principle-number"},[_vm._v("2")]),_vm._v(" "),_c('img',{attrs:{"src":_vm.efficiencyIcon,"alt":"Efficiency Icon"}}),_vm._v(" "),_c('h3',[_vm._v("EFFICIENCY")]),_vm._v(" "),_c('p',[_vm._v("Streamline and optimize workflows. Intelligently anticipate needs to help people work better, smarter, and faster.")])]),_vm._v(" "),_c('div',{staticClass:"design-principle-box"},[_c('span',{staticClass:"principle-number"},[_vm._v("3")]),_vm._v(" "),_c('img',{attrs:{"src":_vm.consistencyIcon,"alt":"Consistency Icon"}}),_vm._v(" "),_c('h3',[_vm._v("CONSISTENCY")]),_vm._v(" "),_c('p',[_vm._v("Create familiarity and strengthen intuition by applying the same solution to the same problem.")])]),_vm._v(" "),_c('div',{staticClass:"design-principle-box"},[_c('span',{staticClass:"principle-number"},[_vm._v("4")]),_vm._v(" "),_c('img',{attrs:{"src":_vm.beautyIcon,"alt":"Beauty Icon"}}),_vm._v(" "),_c('h3',[_vm._v("BEAUTY")]),_vm._v(" "),_c('p',[_vm._v("Demonstrate respect for people’s time and attention through thoughtful and elegant craftsmanship.")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Buttons_vue__ = __webpack_require__(45);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15763e30_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Buttons_vue__ = __webpack_require__(264);
function injectStyle (ssrContext) {
  __webpack_require__(261)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Buttons_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15763e30_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Buttons_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 261 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 262 */,
/* 263 */,
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper button-content"},[_c('h1',[_vm._v("Buttons")]),_vm._v(" "),_c('span',{staticClass:"headline-divider"}),_vm._v(" "),_c('p',[_vm._v("Use buttons and links to trigger actions. Buttons can contain a combination of a clear label and an icon while links are always text. Buttons can take a variety of sizes based on their placement within the application.")]),_vm._v(" "),_c('h2',[_vm._v("Writing Labels")]),_vm._v(" "),_c('p',[_vm._v("Button labels are title case and are as short as possible, while clearly explaining what happens when the button is pressed.")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h2',[_vm._v("Minium Spacing & Sizing")]),_vm._v(" "),_c('p',[_vm._v("All buttons should adhere to the minimum spacing and sizing requirements")]),_vm._v(" "),_c('h2',[_vm._v("Navigation (sandwich) Menu")]),_vm._v(" "),_c('p',[_vm._v("This button is useful when trying to consolidate a navigation for smaller screens or menu options within a table.")]),_vm._v(" "),_c('MenuPopup',[_c('ul',[_c('li',[_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"material-icons"},[_vm._v("home")]),_vm._v("Home\n        ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"material-icons"},[_vm._v("build")]),_vm._v("Tools\n        ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"material-icons"},[_vm._v("credit_card")]),_vm._v("Payment\n        ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"material-icons"},[_vm._v("lock")]),_vm._v("Security\n        ")])])])]),_vm._v(" "),_c('h2',[_vm._v("Custom Menu (opens at the left end of the button)")]),_vm._v(" "),_c('MenuPopup',{attrs:{"align":"left"},scopedSlots:_vm._u([{key:"button",fn:function(ref){
var toggle = ref.toggle;
return [_c('button',{staticClass:"btn-icon fa-bars",attrs:{"type":"button"},on:{"click":toggle}})]}}])},[_c('ul',[_c('li',[_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"material-icons"},[_vm._v("home")]),_vm._v("Home\n        ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"material-icons"},[_vm._v("build")]),_vm._v("Tools\n        ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"material-icons"},[_vm._v("credit_card")]),_vm._v("Payment\n        ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"material-icons"},[_vm._v("lock")]),_vm._v("Security\n        ")])])])]),_vm._v(" "),_c('MenuPopup',{attrs:{"align":"left"},scopedSlots:_vm._u([{key:"button",fn:function(ref){
var toggle = ref.toggle;
return [_c('button',{staticClass:"btn-standard fa-wrench",attrs:{"type":"button"},on:{"click":toggle}},[_vm._v("Button w/ Icon long enough to see the menu below is on the left")])]}}])},[_c('ul',[_c('li',[_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"material-icons"},[_vm._v("home")]),_vm._v("Home\n        ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"material-icons"},[_vm._v("build")]),_vm._v("Tools\n        ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"material-icons"},[_vm._v("credit_card")]),_vm._v("Payment\n        ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"material-icons"},[_vm._v("lock")]),_vm._v("Security\n        ")])])])]),_vm._v(" "),_c('h2',{staticClass:"code-headline"},[_vm._v("Code")]),_vm._v(" "),_vm._m(1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"text-center"},[_c('li',[_c('button',{staticClass:"btn-primary",attrs:{"type":"button"}},[_vm._v("Button Primary")])]),_vm._v(" "),_c('li',[_c('button',{staticClass:"btn-outline",attrs:{"type":"button"}},[_vm._v("Button Outline")])]),_vm._v(" "),_c('li',[_c('button',{staticClass:"btn-standard",attrs:{"type":"button"}},[_vm._v("Button Standard")])]),_vm._v(" "),_c('li',[_c('button',{staticClass:"btn-standard fa-pencil",attrs:{"type":"button"}},[_vm._v("Button w/ Icon")])]),_vm._v(" "),_c('li',[_c('button',{staticClass:"btn-standard fa-refresh icon-right",attrs:{"type":"button"}},[_vm._v("Button w/ Right Icon")])]),_vm._v(" "),_c('li',[_c('button',{staticClass:"btn-icon fa-calendar",attrs:{"type":"button"}})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"code-box"},[_c('iframe',{attrs:{"width":"100%","height":"300","src":"//jsfiddle.net/2snkosgo/1/embedded/html,css,result/","allowpaymentrequest":"","allowfullscreen":"allowfullscreen","frameborder":"0"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TextFields_vue__ = __webpack_require__(48);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_35af9848_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TextFields_vue__ = __webpack_require__(269);
function injectStyle (ssrContext) {
  __webpack_require__(266)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TextFields_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_35af9848_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TextFields_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 266 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 267 */,
/* 268 */,
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper text-fields-content"},[_c('h1',[_vm._v("TEXT FIELDS")]),_vm._v(" "),_c('span',{staticClass:"headline-divider"}),_vm._v(" "),_c('p',[_vm._v("Use text input in forms to help people enter, select, and search for text. Common text input types include:")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h2',[_vm._v("Basic Inputs")]),_vm._v(" "),_c('p',[_vm._v("Sxale text fields utilize material design principles including floating labels and contextual messaging. All field labels should be sentence case and float above the input field.")]),_vm._v(" "),_c('div',{staticClass:"text-fields-left-column"},[_c('div',{staticClass:"padding"},[_c('input-field',{attrs:{"value":_vm.input0,"type":"text","placeholder":"Text field w/ no label"},on:{"update:value":function($event){_vm.input0=$event}}}),_vm._v(" "),_c('input-field',{attrs:{"value":_vm.input1,"type":"password","id":"","fieldClass":"","placeholder":"Password field w/ label","label":"Password field","name":"","tag":"","attribute":""},on:{"update:value":function($event){_vm.input1=$event}}}),_vm._v(" "),_c('input-field',{attrs:{"value":_vm.input2,"placeholder":"Field with description","label":"Field with description","description":"some decription"},on:{"update:value":function($event){_vm.input2=$event}}}),_vm._v(" "),_c('input-field',{attrs:{"value":_vm.input3,"tag":"error","placeholder":"Invalid field","label":"Invalid field"},on:{"update:value":function($event){_vm.input3=$event}}}),_vm._v(" "),_c('input-field',{attrs:{"value":_vm.input4,"tag":"valid","placeholder":"Valid field","label":"Valid field"},on:{"update:value":function($event){_vm.input4=$event}}}),_vm._v(" "),_c('input-field',{attrs:{"value":_vm.input5,"tag":"help","placeholder":"Help field"},on:{"update:value":function($event){_vm.input5=$event}}}),_vm._v(" "),_c('input-field',{staticClass:"fa-dollar",attrs:{"value":_vm.input6,"placeholder":"Text field w/ icon","label":"Text field w/ icon"},on:{"update:value":function($event){_vm.input6=$event}}}),_vm._v(" "),_c('input-field',{staticClass:"fa-rocket icon-right",attrs:{"value":_vm.input7,"placeholder":"Text field w/ right icon","label":"Text field w/ right icon"},on:{"update:value":function($event){_vm.input7=$event}}})],1)]),_vm._v(" "),_c('div',{staticClass:"text-fields-right-column"},[_c('div',{staticClass:"padding"},[_c('input-field',{attrs:{"value":_vm.input8,"placeholder":"Field w/ prefix","label":"Field w/ prefix"},on:{"update:value":function($event){_vm.input8=$event}}},[_c('span',{staticClass:"prefix"},[_vm._v("www.")])]),_vm._v(" "),_c('input-field',{attrs:{"value":_vm.input9,"placeholder":"Field w/ right suffix","label":"Field w/ right suffix"},on:{"update:value":function($event){_vm.input9=$event}}},[_c('span',{staticClass:"suffix"},[_vm._v(".com")])]),_vm._v(" "),_c('input-field',{attrs:{"value":_vm.input10,"placeholder":"Field w/ button","label":"Field w/ button"},on:{"update:value":function($event){_vm.input10=$event}}},[_c('button',{staticClass:"btn-standard"},[_vm._v("Apply")])]),_vm._v(" "),_c('input-field',{attrs:{"value":_vm.input11,"placeholder":"Field w/ right button","label":"Field w/ right button"},on:{"update:value":function($event){_vm.input11=$event}}},[_c('button',{staticClass:"btn-standard right"},[_vm._v("Apply")])]),_vm._v(" "),_c('input-field',{attrs:{"value":_vm.input12,"placeholder":"Disabled field","disabled":"disabled"}}),_vm._v(" "),_c('textarea-field',{attrs:{"value":_vm.input13,"type":"textarea","placeholder":"Text Area","label":"Text Area","textareaClass":""}})],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_vm._v("Text: Usernames, descriptions, URLs.")]),_vm._v(" "),_c('li',[_vm._v("Number: Phone numbers, credit card numbers.")]),_vm._v(" "),_c('li',[_vm._v("Mixed format: Email addresses, street addresses, searches.")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modal1_vue__ = __webpack_require__(52);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24294a58_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modal1_vue__ = __webpack_require__(271);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modal1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24294a58_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modal1_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"modal-small modal-container",class:{active: _vm.modalActive},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }_vm.goBack()}}},[_c('div',{staticClass:"modal-wrapper"},[_c('button',{staticClass:"modal-dismiss icon-cross",attrs:{"type":"button"},on:{"click":function($event){_vm.goBack()}}}),_vm._v(" "),_c('div',{staticClass:"modal-title"},[_vm._t("default",[_vm._v("This is a 400 pixel wide modal")])],2),_vm._v(" "),_c('hr'),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn-clear",attrs:{"type":"button"},on:{"click":function($event){_vm.goBack()}}},[_vm._v("Cancel")]),_vm._v(" "),_c('button',{staticClass:"btn-primary",attrs:{"type":"button"},on:{"click":function($event){_vm.goBack()}}},[_vm._v("Apply")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-body"},[_c('p',[_vm._v("Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.")]),_vm._v(" "),_c('p',[_vm._v("Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modal2_vue__ = __webpack_require__(53);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a30aca5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modal2_vue__ = __webpack_require__(273);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modal2_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a30aca5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modal2_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"modal-xl modal-container",class:{active: _vm.modalActive},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }_vm.goBack()}}},[_c('div',{staticClass:"modal-wrapper"},[_c('button',{staticClass:"modal-dismiss icon-cross",attrs:{"type":"button"},on:{"click":function($event){_vm.goBack()}}}),_vm._v(" "),_c('div',{staticClass:"modal-title"},[_vm._v("This is a 968 pixel wide modal")]),_vm._v(" "),_c('hr'),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn-clear",attrs:{"type":"button"},on:{"click":function($event){_vm.goBack()}}},[_vm._v("Cancel")]),_vm._v(" "),_c('button',{staticClass:"btn-primary",attrs:{"type":"button"},on:{"click":function($event){_vm.goBack()}}},[_vm._v("Apply")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-body"},[_c('p',[_vm._v("Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.")]),_vm._v(" "),_c('p',[_vm._v("Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BannerNotifications_vue__ = __webpack_require__(54);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5de89677_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BannerNotifications_vue__ = __webpack_require__(278);
function injectStyle (ssrContext) {
  __webpack_require__(275)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BannerNotifications_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5de89677_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BannerNotifications_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 275 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 276 */,
/* 277 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAoCAIAAAA0fiJLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUZERkE4Q0M0MEQxMUU3OTVCQzkwREI5MUVBNzk1OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUZERkE4REM0MEQxMUU3OTVCQzkwREI5MUVBNzk1OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU5RkRGQThBQzQwRDExRTc5NUJDOTBEQjkxRUE3OTU5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU5RkRGQThCQzQwRDExRTc5NUJDOTBEQjkxRUE3OTU5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dS72xQAACOtJREFU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"

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper banner-notification-content"},[_c('h1',[_vm._v("Banner Notifications")]),_vm._v(" "),_c('span',{staticClass:"headline-divider"}),_vm._v(" "),_c('h2',[_vm._v("Banner Style")]),_vm._v(" "),_c('p',[_vm._v("Banners can come in different types depending on the nature of the messaging to the user. Banners should remain fixed just below the main header bar and span the full width of the screen.")]),_vm._v(" "),_c('banner-notification',{staticClass:"banner-critical",attrs:{"resolve":{text: 'Link to resolve issue', url: 'https://www.aol.com'}}},[_vm._v("This is a critical error banner. It is imperative the user resolves this issue before proceeding.")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h2',[_vm._v("Banner Type")]),_vm._v(" "),_c('p',[_vm._v("Banners can come in 4 options and their use should be relevant to the message provided. Error, Warning, Info and Promo.  Promo banners can contain a 200px by 40px image or logo.")]),_vm._v(" "),_c('banner-notification'),_vm._v(" "),_c('banner-notification',{staticClass:"banner-critical",attrs:{"resolve":{text: 'Link to resolve issue', url: 'https://www.aol.com'}}},[_vm._v("This is a critical error banner. It is imperative the user resolves this issue before proceeding.")]),_vm._v(" "),_c('banner-notification',{staticClass:"banner-warning",attrs:{"resolve":_vm.resolve}},[_vm._v("This is a warning message. Something may happen soon if not addressed.")]),_vm._v(" "),_c('banner-notification',{staticClass:"banner-info",attrs:{"resolve":{text: 'Guide me to the promised land', url: 'http://www.yahoo.com'}}},[_vm._v("Hey user, here is something that may interest you. Would you like to learn more?")]),_vm._v(" "),_c('banner-notification',{staticClass:"banner-promo",attrs:{"resolve":_vm.resolve,"PromoImage":_vm.PromoImage}},[_vm._v("Hey user, here is something that may interest you. Would you like to learn more?")])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ol',[_c('li',[_c('strong',[_vm._v("Icon")]),_vm._v(" - Icon and color are selected based on notification type. The border of the banner should match the icon color")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Message")]),_vm._v(" - Short but descriptive message about the type of banner or action.")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Action")]),_vm._v(" (required) - Single link to resolve the error/warning or learn more in the case of info or promo banners.")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Close Icon")]),_vm._v(" - Used to dismiss the banner. Once dismissed the banner should not show again during the users session.")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Selects_vue__ = __webpack_require__(57);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18c63ad8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Selects_vue__ = __webpack_require__(290);
function injectStyle (ssrContext) {
  __webpack_require__(280)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Selects_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18c63ad8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Selects_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 280 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper select-content"},[_c('h1',[_vm._v("Selects, Radios, Checks & Toggles")]),_vm._v(" "),_c('span',{staticClass:"headline-divider"}),_vm._v(" "),_c('h2',[_vm._v("Drop Menu Selects (Single & Search)")]),_vm._v(" "),_c('p',[_vm._v("Drop menu selects give the user the ability to select a single item or multiple from a list of predefined options.  When the user enters text into the search field, the items in the drop menu are filtered")]),_vm._v(" "),_c('div',{staticClass:"dropdown-wrapper clearfix"},[_c('div',{staticClass:"column width-50"},[_c('div',{staticClass:"padding-right-15"},[_c('dropdown-select',{attrs:{"value":_vm.dropdown1,"options":_vm.dropdownOptions,"placeholder":"Standard Select Field","name":"selectName","fieldClass":"field-class","description":"testing description"},on:{"update:value":function($event){_vm.dropdown1=$event}}})],1)]),_vm._v(" "),_c('div',{staticClass:"column width-50"},[_c('div',{staticClass:"padding-left-15"},[_c('dropdown-select',{attrs:{"value":_vm.dropdown2,"options":_vm.dropdownOptions,"placeholder":"Select Field W/ Search & Label","name":"selectName2","label":"Select Label","searchField":"true"},on:{"update:value":function($event){_vm.dropdown2=$event}}})],1)])]),_vm._v(" "),_c('h2',[_vm._v("Form Multiselects")]),_vm._v(" "),_c('div',{staticClass:"dropdown-wrapper clearfix"},[_c('div',{staticClass:"column width-50"},[_c('div',{staticClass:"padding-right-15"},[_c('dropdown-multiselect',{attrs:{"value":_vm.multiselect1,"options":_vm.dropdownOptions,"placeholder":"Standard Select Field","name":"multiselectName","fieldClass":"field-class"},on:{"update:value":function($event){_vm.multiselect1=$event}}})],1)]),_vm._v(" "),_c('div',{staticClass:"column width-50"},[_c('div',{staticClass:"padding-left-15"},[_c('dropdown-multiselect',{attrs:{"value":_vm.multiselect2,"options":_vm.dropdownOptions,"placeholder":"Select Field W/ Search & Label","name":"multiselectName","label":"Multiselect Label","fieldClass":"field-class","searchField":"true"},on:{"update:value":function($event){_vm.multiselect2=$event}}})],1)])]),_vm._v(" "),_c('h2',[_vm._v("Pill Style Multi-Select")]),_vm._v(" "),_c('p',[_vm._v("Pill style multi-selects allow the user to view, cancel or add multiple options from a predetermined list OR via direct text input. This is commonly used for fields such as tags or categories where the options are determined by the user. The options are displayed as the user types in the text field.")]),_vm._v(" "),_c('token-select',{attrs:{"value":_vm.tokenselect,"options":_vm.dropdownOptions,"tagging":true,"name":"selectTokenName","fieldClass":"field-class"},on:{"update:value":function($event){_vm.tokenselect=$event}}}),_vm._v(" "),_c('h2',[_vm._v("Form Radios, Checkboxes & Toggles")]),_vm._v(" "),_c('div',{staticClass:"button-form-wrapper"},[_c('p',{staticClass:"checkbox-group-label"},[_vm._v("Horizontal Checkbox Headline")]),_vm._v(" "),_c('checkbox-button',{attrs:{"value":_vm.checkbox1,"name":"myCheckbox","label":"First Checkbox"},on:{"update:value":function($event){_vm.checkbox1=$event}}}),_vm._v(" "),_c('checkbox-button',{attrs:{"value":_vm.checkbox2,"name":"myCheckbox","label":"Pre-Checked Box","checked":"true"},on:{"update:value":function($event){_vm.checkbox2=$event}}}),_vm._v(" "),_c('checkbox-button',{attrs:{"value":_vm.checkbox4,"name":"myCheckbox","label":"Fourth Checkbox"},on:{"update:value":function($event){_vm.checkbox4=$event}}}),_vm._v(" "),_c('checkbox-button',{attrs:{"value":_vm.checkbox3,"name":"myCheckbox","label":"Checkbox Right Position","position":"right"},on:{"update:value":function($event){_vm.checkbox3=$event}}})],1),_vm._v(" "),_c('div',{staticClass:"button-form-wrapper"},[_c('p',{staticClass:"checkbox-group-label"},[_vm._v("Horizontal Radio Buttons Headline")]),_vm._v(" "),_c('radio-button',{attrs:{"value":_vm.radio1,"selected-value":"1","id":"firstRadio","name":"myRadio","label":"First Radio"},on:{"update:value":function($event){_vm.radio1=$event}}}),_vm._v(" "),_c('radio-button',{attrs:{"value":_vm.radio1,"selected-value":"2","id":"secondRadio","name":"myRadio","label":"Pre-Checked Radio"},on:{"update:value":function($event){_vm.radio1=$event}}}),_vm._v(" "),_c('radio-button',{attrs:{"value":_vm.radio1,"selected-value":"3","id":"thirdRadio","name":"myRadio","label":"Radio Right"},on:{"update:value":function($event){_vm.radio1=$event}}}),_vm._v(" "),_c('radio-button',{attrs:{"value":_vm.radio1,"selected-value":"4","id":"fourthRadio","name":"myRadio","label":"Fourth Radio"},on:{"update:value":function($event){_vm.radio1=$event}}})],1),_vm._v(" "),_c('div',{staticClass:"button-form-wrapper"},[_c('p',{staticClass:"toggle-group-label"},[_vm._v("Toggle Button Headline")]),_vm._v(" "),_c('toggle-button',{attrs:{"value":_vm.toggle1,"id":"smallToggle","name":"mySmallToggle","label":"Toggle"},on:{"update:value":function($event){_vm.toggle1=$event}}}),_vm._v(" "),_c('toggle-button',{staticClass:"large",attrs:{"value":_vm.toggle2,"id":"largeToggle","name":"myLargeToggle","label":"Large Toggle"},on:{"update:value":function($event){_vm.toggle2=$event}}}),_vm._v(" "),_c('toggle-button',{attrs:{"value":_vm.toggle3,"id":"smallToggleRight","name":"mySmallToggleRight","label":"Toggle Right","position":"right"},on:{"update:value":function($event){_vm.toggle3=$event}}}),_vm._v(" "),_c('toggle-button',{staticClass:"large",attrs:{"value":_vm.toggle4,"id":"largeToggleRight","name":"myLargeToggleRight","label":"Toggle Right Large","position":"right"},on:{"update:value":function($event){_vm.toggle4=$event}}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Validation_vue__ = __webpack_require__(65);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_635ed6fc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Validation_vue__ = __webpack_require__(304);
function injectStyle (ssrContext) {
  __webpack_require__(292)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-635ed6fc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Validation_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_635ed6fc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Validation_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 292 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ValidationForm_vue__ = __webpack_require__(192);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f22cdea6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ValidationForm_vue__ = __webpack_require__(303);
function injectStyle (ssrContext) {
  __webpack_require__(302)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f22cdea6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ValidationForm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f22cdea6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ValidationForm_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 302 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',[_vm._t("default",null,{formErrors:_vm.errors,formFields:_vm.fields})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h2',[_vm._v("Validation Forms")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/"}},[_vm._v("Go Back Home")]),_vm._v(" "),_c('ul',[_c('li',[_c('span',[_c('radio-button',{attrs:{"value":_vm.validationMode,"selected-value":"active","label":"Active (The input will be validated once the user types anything)"},on:{"update:value":function($event){_vm.validationMode=$event}}})],1),_vm._v(" "),_c('span',[_c('radio-button',{attrs:{"value":_vm.validationMode,"selected-value":"onBlur","label":"On Blur (The input will be validated only once the input losses focus)"},on:{"update:value":function($event){_vm.validationMode=$event}}})],1),_vm._v(" "),_c('span',[_c('radio-button',{attrs:{"value":_vm.validationMode,"selected-value":"passive","label":"Passive (The input wont be validated actively in any way. Must be used in conjunction with a 'validate' method, like the button below)"},on:{"update:value":function($event){_vm.validationMode=$event}}})],1)])]),_vm._v(" "),_c('validation-form',{ref:"form1",scopedSlots:_vm._u([{key:"default",fn:function(ref){
var formErrors = ref.formErrors;
var formFields = ref.formFields;
return _c('div',{staticClass:"wrapper"},[_c('h2',[_vm._v("Form 1")]),_vm._v(" "),_c('ul',{staticClass:"row"},[_c('li',{staticClass:"col-2"},[_c('input-field',{attrs:{"value":_vm.newPublication.name,"type":"text","name":"name","description":"Your first name","placeholder":"Your name","validation":"required|alpha","label":"Name","validation-mode":_vm.validationMode,"validation-attr":"Weird Name"},on:{"update:value":function($event){_vm.$set(_vm.newPublication, "name", $event)}}})],1),_vm._v(" "),_c('li',{staticClass:"col-2"},[_c('input-field',{attrs:{"value":_vm.newPublication.username,"type":"text","name":"username","description":"Your alias","placeholder":"Your username","label":"Username","validation":"required|alpha_num|min:5|max:20","validation-mode":_vm.validationMode},on:{"update:value":function($event){_vm.$set(_vm.newPublication, "username", $event)}}})],1),_vm._v(" "),_c('li',{staticClass:"col-2"},[_c('input-field',{attrs:{"value":_vm.newPublication.email,"type":"text","name":"email","description":"Your email","placeholder":"Your email","label":"Email","validation":"required|email","validation-mode":_vm.validationMode},on:{"update:value":function($event){_vm.$set(_vm.newPublication, "email", $event)}}})],1),_vm._v(" "),_c('li',{staticClass:"col-6"},[_c('textarea-field',{attrs:{"value":_vm.newPublication.content,"type":"textarea","name":"content","description":(400 - _vm.newPublication.content.length) + ' characters left',"placeholder":"Something that has happened to you","label":"Content","validation":"max:400","validation-mode":_vm.validationMode},on:{"update:value":function($event){_vm.$set(_vm.newPublication, "content", $event)}}})],1),_vm._v(" "),_c('li',{staticClass:"col-3"},[_c('date-range-picker',{attrs:{"start":_vm.newPublication.start,"end":_vm.newPublication.end},on:{"update:start":function($event){_vm.$set(_vm.newPublication, "start", $event)},"update:end":function($event){_vm.$set(_vm.newPublication, "end", $event)}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var start = ref.start;
var end = ref.end;
return [_vm._v("("+_vm._s(start.toDateString())+" - "+_vm._s(end.toDateString())+")")]}}])})],1),_vm._v(" "),_c('li',{staticClass:"col-3"},[_c('dropdown-select',{attrs:{"value":_vm.newPublication.category,"options":_vm.categories,"name":"category","placeholder":"Select a category","description":"The category of your publication","label":"Category","fieldClass":"field-class","validation":"required|in:health,fitness,nutrition,natural,supplements"},on:{"update:value":function($event){_vm.$set(_vm.newPublication, "category", $event)}}})],1),_vm._v(" "),_c('li',{staticClass:"col-3"},[_c('dropdown-multiselect',{attrs:{"value":_vm.newPublication.tags,"options":_vm.tags,"name":"tags","placeholder":"Select tags","description":"Select at least 3 tags that apply to your post","label":"Tags","fieldClass":"field-class","validation":"required|array_min:3","selected-label":"tags selected"},on:{"update:value":function($event){_vm.$set(_vm.newPublication, "tags", $event)}}})],1),_vm._v(" "),_c('li',{staticClass:"col-2"},[_c('checkbox-button',{attrs:{"value":_vm.newPublication.isPrivate,"name":"is_private","label":"Is Private"},on:{"update:value":function($event){_vm.$set(_vm.newPublication, "isPrivate", $event)}}})],1),_vm._v(" "),_c('li',{staticClass:"col-2"},[_c('checkbox-button',{attrs:{"value":_vm.newPublication.isPublished,"name":"is_published","label":"Is Published"},on:{"update:value":function($event){_vm.$set(_vm.newPublication, "isPublished", $event)}}})],1),_vm._v(" "),(!_vm.newPublication.isPublished)?_c('li',{staticClass:"col-2"},[_c('date-picker',{attrs:{"value":_vm.newPublication.publishDate,"name":"publish_date","description":"The date you wish this article to be published","label":"Publish Date","validation":'after:' + _vm.todayDateString},on:{"update:value":function($event){_vm.$set(_vm.newPublication, "publishDate", $event)}}})],1):_vm._e(),_vm._v(" "),_c('li',{staticClass:"col-2"},[_c('h4',[_vm._v("What is the frequency of this article being shown?")]),_vm._v(" "),_c('div',[_c('span',[_c('radio-button',{attrs:{"value":_vm.newPublication.publishType,"selected-value":"daily","name":"publish_type","label":"Daily","validation":"required|in:daily,weekly,monthly"},on:{"update:value":function($event){_vm.$set(_vm.newPublication, "publishType", $event)}}})],1),_vm._v(" "),_c('span',[_c('radio-button',{attrs:{"value":_vm.newPublication.publishType,"selected-value":"weekly","name":"publish_type","label":"Weekly"},on:{"update:value":function($event){_vm.$set(_vm.newPublication, "publishType", $event)}}})],1),_vm._v(" "),_c('span',[_c('radio-button',{attrs:{"value":_vm.newPublication.publishType,"selected-value":"monthly","name":"publish_type","label":"Monthly"},on:{"update:value":function($event){_vm.$set(_vm.newPublication, "publishType", $event)}}})],1),_vm._v(" "),_c('span',[_c('radio-button',{attrs:{"value":_vm.newPublication.publishType,"selected-value":"invalid","name":"publish_type","label":"Invalid"},on:{"update:value":function($event){_vm.$set(_vm.newPublication, "publishType", $event)}}})],1)]),_vm._v(" "),(formErrors.has('publish_type'))?_c('span',{staticClass:"field-description italic",staticStyle:{"color":"red"}},[_vm._v(_vm._s(formErrors.first('publish_type')))]):_c('span',[_vm._v(" ")])]),_vm._v(" "),_c('li',{staticClass:"col-2"},[_c('toggle-button',{attrs:{"value":_vm.newPublication.activateStyling,"name":"activate_styling","label":"Styling"},on:{"update:value":function($event){_vm.$set(_vm.newPublication, "activateStyling", $event)}}})],1),_vm._v(" "),_c('li',{staticClass:"col-2"},[_c('toggle-button',{attrs:{"value":_vm.newPublication.activateBoldness,"name":"actiavate_boldness","label":"Boldness"},on:{"update:value":function($event){_vm.$set(_vm.newPublication, "activateBoldness", $event)}}})],1)]),_vm._v(" "),_c('ul',[_c('li',[_c('button',{staticClass:"btn-primary",attrs:{"type":"button"},on:{"click":_vm.validate}},[_vm._v("Validate All")])]),_vm._v(" "),_c('li',[_c('button',{staticClass:"btn-standard",attrs:{"type":"button"},on:{"click":_vm.clearErrors}},[_vm._v("Clear Errors")])]),_vm._v(" "),_c('li',[_c('button',{staticClass:"btn-outline",attrs:{"type":"button"},on:{"click":_vm.addErrors}},[_vm._v("Add Server Side Errors")])])])])}}])})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Notifications_vue__ = __webpack_require__(193);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33d7cf2e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Notifications_vue__ = __webpack_require__(309);
function injectStyle (ssrContext) {
  __webpack_require__(306)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Notifications_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33d7cf2e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Notifications_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 306 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 307 */,
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "docs/image/notification-example.0a38da3.png";

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper notifications-content"},[_c('h1',[_vm._v("Notifications")]),_vm._v(" "),_c('span',{staticClass:"headline-divider"}),_vm._v(" "),_c('p',[_vm._v("Use notifications to communicate conditions, indicate an event, or to show responses to user actions. Content can include authentication, information, confirmation, warnings, and error messages. It is important to specify which of these the content of the message falls under in order to choose the correct icon and colors.")]),_vm._v(" "),_c('h2',[_vm._v("Notification Types")]),_vm._v(" "),_c('h3',[_vm._v("Growlrs")]),_vm._v(" "),_c('p',[_vm._v("Growlrs are used for confirmations, alerts, and acknowledgments that require minimal user interaction. These event-driven messages appear by overlaying content at the bottom right of the screen, emerging from the bottom of the screen. Growlrs have a max width of 350px.")]),_vm._v(" "),_c('div',{staticClass:"notification-image-parent"},[_c('div',{staticClass:"notification-image-child"},[_c('img',{staticClass:"notification-image",attrs:{"src":_vm.NotificationImage}})])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h3',{staticClass:"clear"},[_vm._v("Variations")]),_vm._v(" "),_c('p',[_vm._v("Growlrs can contain a combination of a title, a description, and one or two actions. Growlers can also be used for success confirmations, warnings, errors or general information. ")]),_vm._v(" "),_c('div',{staticClass:"notification-buttons"},[_c('button',{staticClass:"btn-standard fa-check",attrs:{"type":"button"},on:{"click":function($event){_vm.$refs.success.show()}}},[_vm._v("Success Notification")]),_vm._v(" "),_c('button',{staticClass:"btn-standard fa-info",attrs:{"type":"button"},on:{"click":function($event){_vm.$refs.info.show()}}},[_vm._v("Info Notification")]),_vm._v(" "),_c('button',{staticClass:"btn-standard fa-exclamation-triangle",attrs:{"type":"button"},on:{"click":function($event){_vm.$refs.warning.show()}}},[_vm._v("Warning Notification")]),_vm._v(" "),_c('button',{staticClass:"btn-standard fa-exclamation-circle",attrs:{"type":"button"},on:{"click":function($event){_vm.$refs.critical.show()}}},[_vm._v("Critical Notification")])]),_vm._v(" "),_c('notification',{ref:"success",staticClass:"success",attrs:{"group":"success","title":"Success Title","content":"success content"}}),_vm._v(" "),_c('notification',{ref:"info",staticClass:"info",attrs:{"group":"info","title":"Info Title","content":"info content"}}),_vm._v(" "),_c('notification',{ref:"warning",staticClass:"warning",attrs:{"group":"warning","title":"Warning Title","content":"warning content"}}),_vm._v(" "),_c('notification',{ref:"critical",staticClass:"critical",attrs:{"group":"critical","title":"Critical Title","content":"Used to help users avoid error situations. Consists of a description of potential errors. It should provide a recommended next step, and an option to be reminded at a later date. <br> <a href='#'>Link One</a> <a href='#'>Link Two</a>"}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"notification-list-parent"},[_c('div',{staticClass:"notifcation-list-child"},[_c('ol',[_c('li',[_c('strong',[_vm._v("Icon")]),_vm._v(" - Icon and color are selected based on notification type")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Title")]),_vm._v(" - Short, concise title in sentence case based on the action")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Description")]),_vm._v(" - Informative description about the details of the notification. Descriptions are restricted to five lines in length. If the text overflows, it will truncate using an ellipsis.")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Close icon")]),_vm._v(" - Used by the user to dismiss the notification")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Actions ("),_c('span',{staticClass:"italic"},[_vm._v("optional")]),_vm._v(")")]),_vm._v(" - A maximum of two links that enable users to act on the notification’s content.")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modals_vue__ = __webpack_require__(196);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1dbf1261_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modals_vue__ = __webpack_require__(314);
function injectStyle (ssrContext) {
  __webpack_require__(311)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modals_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1dbf1261_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modals_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 311 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "docs/image/modal-explained.d0e0b41.png";

/***/ }),
/* 313 */,
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper modals-content"},[_c('h1',[_vm._v("Modals")]),_vm._v(" "),_c('span',{staticClass:"headline-divider"}),_vm._v(" "),_c('p',[_vm._v("Use modal dialogs when you need a response from a user, to reveal critical information, or to show info without losing the context of the page. No other interactions on the main page can be accessed while a modal dialog is active.")]),_vm._v(" "),_c('h2',[_vm._v("Basic Modals")]),_vm._v(" "),_c('p',[_vm._v("The basic dialog for modals should contain only valuable and relevant information. Simplify dialogs by removing unnecessary elements or content that doesn't support user tasks. If you find that the number of required elements for your design are making the dialog excessively large, then try a different design solution.")]),_vm._v(" "),_c('div',{staticClass:"modal-explained-parent"},[_c('img',{staticClass:"modal-explained",attrs:{"src":_vm.ModalExplained}})]),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('h2',{staticClass:"sizes-headline"},[_vm._v("Modal Sizes")]),_vm._v(" "),_c('p',[_vm._v("Modals are available in 4 sizes and should be used based on the content and action required from the user within the modal content. ")]),_vm._v(" "),_c('div',{staticClass:"modal-buttons"},[_c('button',{staticClass:"btn-standard",attrs:{"type":"button"},on:{"click":function($event){_vm.ModalSmall = true}}},[_vm._v("Small (400px wide)")]),_vm._v(" "),_c('button',{staticClass:"btn-standard",attrs:{"type":"button"},on:{"click":function($event){_vm.ModalMedium = true}}},[_vm._v("Medium (600px wide)")]),_vm._v(" "),_c('button',{staticClass:"btn-standard",attrs:{"type":"button"},on:{"click":function($event){_vm.ModalLarge = true}}},[_vm._v("Large (800px wide)")]),_vm._v(" "),_c('button',{staticClass:"btn-standard",attrs:{"type":"button"},on:{"click":function($event){_vm.ModalXL = true}}},[_vm._v("Extra-Large (968px wide)")])]),_vm._v(" "),_c('modal',{staticClass:"modal-small",attrs:{"modal":_vm.ModalSmall},on:{"close":function($event){_vm.ModalSmall = false}}},[_c('div',{attrs:{"slot":"modal-title"},slot:"modal-title"},[_vm._v("This is a 400 pixel wide modal")]),_vm._v(" "),_c('div',{attrs:{"slot":"modal-body"},slot:"modal-body"},[_c('p',[_vm._v("Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.")]),_vm._v(" "),_c('p',[_vm._v("Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.")])])]),_vm._v(" "),_c('modal',{staticClass:"modal-medium",attrs:{"modal":_vm.ModalMedium},on:{"close":function($event){_vm.ModalMedium = false}}},[_c('div',{attrs:{"slot":"modal-title"},slot:"modal-title"},[_vm._v("This is a 600 pixel wide modal")]),_vm._v(" "),_c('div',{attrs:{"slot":"modal-body"},slot:"modal-body"},[_c('p',[_vm._v("Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.")]),_vm._v(" "),_c('p',[_vm._v("Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.")])])]),_vm._v(" "),_c('modal',{staticClass:"modal-large",attrs:{"modal":_vm.ModalLarge},on:{"close":function($event){_vm.ModalLarge = false}}},[_c('div',{attrs:{"slot":"modal-title"},slot:"modal-title"},[_vm._v("This is a 800 pixel wide modal")]),_vm._v(" "),_c('div',{attrs:{"slot":"modal-body"},slot:"modal-body"},[_c('p',[_vm._v("Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.")]),_vm._v(" "),_c('p',[_vm._v("Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.")])])]),_vm._v(" "),_c('modal',{staticClass:"modal-xl",attrs:{"modal":_vm.ModalXL},on:{"close":function($event){_vm.ModalXL = false}}},[_c('div',{attrs:{"slot":"modal-title"},slot:"modal-title"},[_vm._v("This is a 968 pixel wide modal")]),_vm._v(" "),_c('div',{attrs:{"slot":"modal-body"},slot:"modal-body"},[_c('p',[_vm._v("Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.")]),_vm._v(" "),_c('p',[_vm._v("Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.")])])]),_vm._v(" "),_c('h2',[_vm._v("Modals in the url")]),_vm._v(" "),_c('div',{staticClass:"modal-buttons"},[_c('router-link',{staticClass:"btn-standard show-modal",attrs:{"to":{name: 'Modal1'},"tag":"button"}},[_vm._v("\n      Activate Small Modal\n    ")]),_vm._v(" "),_c('router-link',{staticClass:"btn-standard show-modal",attrs:{"to":{name: 'Modal2'},"tag":"button"}},[_vm._v("\n      Activate XL Modal\n    ")])],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-list"},[_c('div',{staticClass:"padding"},[_c('ol',{staticClass:"modal-explained-list"},[_c('li',[_c('strong',[_vm._v("Title")]),_vm._v(" -  The title provides a concise overview of the contents of the modal dialog. The underline for the modal title should span 50% of the modal width despite the length of the title text.")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Content")]),_vm._v(" - The contents of the dialog. Don't try to cram too much info in here or include multiple steps. If multiple steps are required, consider using a whole page or wizard pattern instead.")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Footer")]),_vm._v(" - Contains a primary action, the ability to cancel the dialog, and may contain a text hint (in detailed dialogs). Should remain fixed to the bottom of the modal.")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Close Icon")]),_vm._v(" - Used to dismiss the modal.")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Background Overlay")]),_vm._v(" - "),_c('span',{staticClass:"italic"},[_vm._v("n400")]),_vm._v(" - Clooney at 70% opacity should overlay all content on the page. No actions on the main page are available while the modal is active.")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Actions")]),_vm._v(" - Contains a primary action and the ability to cancel and close the dialog. The main action should be a primary button that uses self-describing action verbs ('Add' instead of 'OK').")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Header")]),_vm._v(" - Contains the title of the modal and provides access to additional information and filters (in detailed dialogs). Remains fixed to the top of the modal")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-height"},[_c('div',{staticClass:"padding"},[_c('h2',[_vm._v("Scrolling & Modal Height")]),_vm._v(" "),_c('p',[_vm._v("The height of a dialog is determined by the content. Once it reaches a certain threshold, the body content will scroll while the header and footer remain fixed until it reaches the bottom of the modal dialog.")]),_vm._v(" "),_c('p',[_vm._v("Content will begin scrolling once the modal has reached 90% of the screen height.")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tables_vue__ = __webpack_require__(199);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cf2b6f9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tables_vue__ = __webpack_require__(370);
function injectStyle (ssrContext) {
  __webpack_require__(316)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tables_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cf2b6f9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tables_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 316 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(318), __esModule: true };

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(319);
__webpack_require__(320);
__webpack_require__(335);
__webpack_require__(339);
__webpack_require__(350);
__webpack_require__(351);
module.exports = __webpack_require__(7).Promise;


/***/ }),
/* 319 */
/***/ (function(module, exports) {



/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(321)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(200)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var defined = __webpack_require__(33);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 322 */,
/* 323 */,
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(326);
var descriptor = __webpack_require__(203);
var setToStringTag = __webpack_require__(37);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(8);
var dPs = __webpack_require__(327);
var enumBugKeys = __webpack_require__(207);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(34)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(208).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var anObject = __webpack_require__(8);
var getKeys = __webpack_require__(328);

module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(329);
var enumBugKeys = __webpack_require__(207);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(22);
var toIObject = __webpack_require__(35);
var arrayIndexOf = __webpack_require__(331)(false);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(23);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(35);
var toLength = __webpack_require__(204);
var toAbsoluteIndex = __webpack_require__(332);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(22);
var toObject = __webpack_require__(334);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(33);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(336);
var global = __webpack_require__(3);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(16);
var TO_STRING_TAG = __webpack_require__(4)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(337);
var step = __webpack_require__(338);
var Iterators = __webpack_require__(16);
var toIObject = __webpack_require__(35);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(200)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 337 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 338 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(201);
var global = __webpack_require__(3);
var ctx = __webpack_require__(20);
var classof = __webpack_require__(209);
var $export = __webpack_require__(13);
var isObject = __webpack_require__(15);
var aFunction = __webpack_require__(21);
var anInstance = __webpack_require__(340);
var forOf = __webpack_require__(341);
var speciesConstructor = __webpack_require__(210);
var task = __webpack_require__(211).set;
var microtask = __webpack_require__(346)();
var newPromiseCapabilityModule = __webpack_require__(38);
var perform = __webpack_require__(212);
var promiseResolve = __webpack_require__(213);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(347)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(37)($Promise, PROMISE);
__webpack_require__(348)(PROMISE);
Wrapper = __webpack_require__(7)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(349)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 340 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(20);
var call = __webpack_require__(342);
var isArrayIter = __webpack_require__(343);
var anObject = __webpack_require__(8);
var toLength = __webpack_require__(204);
var getIterFn = __webpack_require__(344);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(8);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(16);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(209);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(16);
module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 345 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var macrotask = __webpack_require__(211).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(23)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(9);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var core = __webpack_require__(7);
var dP = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(10);
var SPECIES = __webpack_require__(4)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(4)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(13);
var core = __webpack_require__(7);
var global = __webpack_require__(3);
var speciesConstructor = __webpack_require__(210);
var promiseResolve = __webpack_require__(213);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(13);
var newPromiseCapability = __webpack_require__(38);
var perform = __webpack_require__(212);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper button-content"},[_c('h1',[_vm._v("Tables")]),_vm._v(" "),_c('span',{staticClass:"headline-divider"}),_vm._v(" "),_c('p',[_vm._v("Data tables are used to communicate a group of related information into a grid format for better readablity and relational understanding. ")]),_vm._v(" "),_c('h2',[_vm._v("Basic Tables")]),_vm._v(" "),_c('p',[_vm._v("Basic tables are used as the base for all tables. Any additional functionality or features are added on top of the base styling. Typically, tables span 100% width inside their container. ")]),_vm._v(" "),_c('h2',[_vm._v("Tables")]),_vm._v(" "),_c('h3',[_vm._v("Normal Table")]),_vm._v(" "),_c('data-table',{attrs:{"data":_vm.tableData,"table-key":"offerId"},scopedSlots:_vm._u([{key:"table.row",fn:function(ref){
var item = ref.item;
return [_c('td',[_c('button',{staticClass:"btn-clear fa-navicon actions-button"})]),_vm._v(" "),_c('td',[_vm._v(_vm._s(item.offerId))]),_vm._v(" "),_c('td',[_c('span',{staticClass:"fa-circle"}),_vm._v(" "+_vm._s(item.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(item.comission))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(item.type))]),_vm._v(" "),_c('td',{staticClass:"progress-bar-parent"},[_c('div',{staticClass:"progress-bar",class:item.status},[_c('span',{style:({width: item.progress / item.total * 100 + '%'})})]),_vm._v("\n        "+_vm._s(item.progress)+" / "+_vm._s(item.total)+"\n      ")]),_vm._v(" "),_c('td',{staticClass:"label-cell"},[_c('span',{class:'label-' + item.status},[_vm._v(_vm._s(item.status))])])]}}])},[_c('template',{slot:"table.headers"},[_c('normal-header',{attrs:{"name":"actions"}},[_vm._v("Actions")]),_vm._v(" "),_c('sortable-header',{attrs:{"name":"offerId"}},[_vm._v("Offer ID")]),_vm._v(" "),_c('sortable-header',{attrs:{"name":"name"}},[_vm._v("Name")]),_vm._v(" "),_c('sortable-header',{attrs:{"name":"comission"}},[_vm._v("Commission")]),_vm._v(" "),_c('sortable-header',{attrs:{"name":"type"}},[_vm._v("Type")]),_vm._v(" "),_c('sortable-header',{attrs:{"name":"progress"}},[_vm._v("Inventory")]),_vm._v(" "),_c('sortable-header',{attrs:{"name":"status"}},[_vm._v("Status")])],1),_vm._v(" "),_c('template',{slot:"controls.filters"},[_c('filter-input',{attrs:{"property":"status","label":"Status"}}),_vm._v(" "),_c('filter-input',{attrs:{"property":"type","label":"Type","all-label":"All Types"}}),_vm._v(" "),_c('filter-input',{attrs:{"property":"name","label":"Name"}})],1)],2),_vm._v(" "),_c('h3',[_vm._v("Table without headers neither columns format (RAW)")]),_vm._v(" "),_c('data-table',{attrs:{"data":_vm.tableData,"table-key":"offerId"}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('h3',[_vm._v("Table that can hide columns")]),_vm._v(" "),_c('data-table',{attrs:{"data":_vm.tableData,"table-key":"offerId","formatter":_vm.formatRow,"source":_vm.tableSource,"column-selector":true},scopedSlots:_vm._u([{key:"trow.actions",fn:function(ref){
var item = ref.item;
return _c('td',{},[_c('button',{staticClass:"btn-clear fa-navicon actions-button"})])}},{key:"trow.offerId",fn:function(ref){
var item = ref.item;
return _c('td',{},[_vm._v(_vm._s(item.offerId))])}},{key:"trow.name",fn:function(ref){
var item = ref.item;
return _c('td',{},[_c('span',{staticClass:"fa-circle"}),_vm._v(" "+_vm._s(item.name)+"\n    ")])}},{key:"trow.comission",fn:function(ref){
var item = ref.item;
return _c('td',{},[_vm._v(_vm._s(item.comission_text))])}},{key:"trow.type",fn:function(ref){
var item = ref.item;
return _c('td',{},[_vm._v(_vm._s(item.type))])}},{key:"trow.percentProgress",fn:function(ref){
var item = ref.item;
return _c('td',{staticClass:"progress-bar-parent"},[_c('div',{staticClass:"progress-bar",class:item.status},[_c('span',{style:({width: item.percentProgress + '%'})})]),_vm._v("\n      "+_vm._s(item.progress)+" / "+_vm._s(item.total)+"\n    ")])}},{key:"trow.status",fn:function(ref){
var item = ref.item;
return _c('td',{staticClass:"label-cell"},[_c('span',{class:'label-' + item.status},[_vm._v(_vm._s(item.status))])])}}])},[_c('template',{slot:"table.headers"},[_c('normal-header',{attrs:{"name":"actions","title":"Actions"}},[_vm._v("Actions")]),_vm._v(" "),_c('sortable-header',{attrs:{"name":"offerId","title":"Offer ID"}},[_vm._v("Offer ID")]),_vm._v(" "),_c('sortable-header',{attrs:{"name":"name","title":"Name"}},[_vm._v("Name")]),_vm._v(" "),_c('sortable-header',{attrs:{"name":"comission","title":"Comission"}},[_vm._v("Commission")]),_vm._v(" "),_c('sortable-header',{attrs:{"name":"type","title":"Type"}},[_vm._v("Type")]),_vm._v(" "),_c('sortable-header',{attrs:{"name":"percentProgress","title":"Inventory"}},[_vm._v("Inventory")]),_vm._v(" "),_c('sortable-header',{attrs:{"name":"status","title":"Status"}},[_vm._v("Status")])],1)],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tooltips_vue__ = __webpack_require__(228);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c6514c8a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tooltips_vue__ = __webpack_require__(375);
function injectStyle (ssrContext) {
  __webpack_require__(372)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tooltips_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c6514c8a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tooltips_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 372 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 373 */,
/* 374 */,
/* 375 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper button-content"},[_c('h1',[_vm._v("Tooltips")]),_vm._v(" "),_c('p',[_vm._v("Use tooltips to identify or add a small amount of information to an element. Typically, tooltips are used to help users understand the meaning or purpose of icons, showing the full version of truncated text, or displaying the alt text for an image. Sxale tooltips replace standard browser tooltips when more emphasis is required. Tooltips do not receive input focus.")]),_vm._v(" "),_c('p',[_vm._v("When writing tooltips, be short and concise. When you need to add more than a single line of extra information, consider using inline notifications instead.")]),_vm._v(" "),_c('h2',[_vm._v("Behavior & Style")]),_vm._v(" "),_c('p',[_vm._v("The position of tooltips is flexible and will change depending on how close the element is to the edge of the screen. Tooltips are triggered on hover on desktop, and tap on mobile devices. Tooltips can be styled as light or dark depending on the surrounding UI elements. ")]),_vm._v(" "),_c('ul',{staticClass:"tooltip-list",staticStyle:{"text-align":"center"}},[_c('li',[_c('Tooltip',{attrs:{"content":"Hello World!"}},[_c('button',{staticClass:"fa-angle-up btn-standard",attrs:{"type":"button"}},[_vm._v("On Hover Top")])])],1),_vm._v(" "),_c('li',[_c('Tooltip',{attrs:{"content":"Hello World!","color":"light"}},[_c('button',{staticClass:"fa-angle-up btn-standard",attrs:{"type":"button"}},[_vm._v("On Hover Top Light")])])],1),_vm._v(" "),_c('li',[_c('Tooltip',{attrs:{"content":"Hello World!","position":"right"}},[_c('button',{staticClass:"fa-angle-right btn-standard",attrs:{"type":"button"}},[_vm._v("On Hover Right")])])],1),_vm._v(" "),_c('li',[_c('Tooltip',{attrs:{"content":"Hello World!","position":"bottom"}},[_c('button',{staticClass:"fa-angle-down btn-standard",attrs:{"type":"button"}},[_vm._v("On Hover Bottom")])])],1),_vm._v(" "),_c('li',[_c('Tooltip',{attrs:{"content":"Hello World!","position":"left"}},[_c('button',{staticClass:"fa-angle-down btn-standard",attrs:{"type":"button"}},[_vm._v("On Hover Left")])])],1),_vm._v(" "),_c('li',[_c('Tooltip',{attrs:{"content":"Hello World!","trigger":"click"}},[_c('button',{staticClass:"fa-angle-up btn-standard",attrs:{"type":"button"}},[_vm._v("On Click")])])],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TabsAndAccordions_vue__ = __webpack_require__(231);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b4a806c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TabsAndAccordions_vue__ = __webpack_require__(384);
function injectStyle (ssrContext) {
  __webpack_require__(377)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TabsAndAccordions_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b4a806c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TabsAndAccordions_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 377 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwIAAAIYCAMAAADpWKvDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRjM3ODI3QjI2M0ExMUU4OUY0QUU5RjUzRDc1NkM2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRjM3ODI3QzI2M0ExMUU4OUY0QUU5RjUzRDc1NkM2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNGMzc4Mjc5MjYzQTExRTg5RjRBRTlGNTNENzU2QzY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGMzc4MjdBMjYzQTExRTg5RjRBRTlGNTNENzU2QzY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yPFY4gAAAGBQTFRF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gRlisgD8ugIH4ZrT/9oVBycIXqJAP9rDqBBR5MgLCzwUgN9VILSjn9VCJi+J/aYW6LX/l37TEKr66WGLAvB7CuRika7GwcW5Pqqyj1hGkeyngfvesgkF4GsF3JEYsOpngXRhTv/7KPIYCMHjBkJq5JMcB0J54LzunTCuLJRWaSCmHIaHKRDY2vesHH4RVxbJpVGU/mihHArADR0h/WlRnaboS76Z3tRYvHDj4SywZl4AflcB0wYK9JAoCG0ySBfPnxrzxcUqOVMH5xe1AAsk4DFZoPm7EouXLJDoTwxsq8hZeJ570RFimRw8RIGTBEGkC+QXfGZIOrxSdOexWBqeokAjgB4PvWaGrL9UNBZKgNL1llwyA09TwGjwsm/nsicUe1w4CU9X4DQoejZcPg+jUeAlBBFvogJvrYDjlLyVFry3AryhIry7AhddoR5FgAIwbwV4c3V4dwX4iA14dwWc8toHLe0dFIB3UODax+1FDgrAmyjAh67C2yvgNB+9vV3y0dvwrgr45sKYqN1AAXg3BX4NFAAUAEABABQAQAEAFABAAQAUAEABABQAFEABQAEUABRAAUABFAAUQAFAARQAFEABQAEUABRAAUABFAAUQAFAARQAFEABQAEUABRAAUABFAAUQAFAARQAFEABQAEUABRAAUABFAAUQAFAARQAFEABQAEUABRAAUABFAAUQAFAARQAFEABQAEUABRAAUABFAAUQAFAARQAFEABQAEUABRAAUABFABAAQAUAEABABQAQAEAFABAAQAUAEABABQAQAEAFABAAQAUAEABABQAQAEAFABAAQAUAEABABQAQAEAFABAAQAUAPia/wUYAIGr3o5Pmcd8AAAAAElFTkSuQmCC"

/***/ }),
/* 383 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKwAAAGaCAMAAAAVYitsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRjM3ODI3NzI2M0ExMUU4OUY0QUU5RjUzRDc1NkM2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRjM3ODI3ODI2M0ExMUU4OUY0QUU5RjUzRDc1NkM2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNGMzc4Mjc1MjYzQTExRTg5RjRBRTlGNTNENzU2QzY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGMzc4Mjc2MjYzQTExRTg5RjRBRTlGNTNENzU2QzY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+nvTJ5gAAAGBQTFRF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"

/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper tabs-and-accordions-content"},[_c('h1',[_vm._v("TABS & ACCORDIANS")]),_vm._v(" "),_c('span',{staticClass:"headline-divider"},[_vm._v(" ")]),_vm._v(" "),_c('p',[_vm._v("Tabs and accordians can be used to group content into distinct sections or containers. Tabs are commonly used for secondary navigation on pages while accordians are best suited for revealing more details about specific content blocks.")]),_vm._v(" "),_c('h2',[_vm._v("Vertical Tabs")]),_vm._v(" "),_c('p',[_vm._v("Vertical tabs are commonly used for secondary page navigation. The provide a quick, intuitive way for users to jump between sections of content or pages. ")]),_vm._v(" "),_c('div',{staticClass:"vertical-tabs-image-wrapper clearfix"},[_c('img',{staticClass:"vertical-tabs-image",attrs:{"src":_vm.VerticalTabsImage}})]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h2',{staticClass:"horizontal-tabs-h2"},[_vm._v("Horizontal Tabs")]),_vm._v(" "),_c('p',[_vm._v("Horizontal tabs are commonly used to display different sub-sections of content within a single page. The sections are related to the same page, yet should be divided into distinct sections to simplify the experience for the user.")]),_vm._v(" "),_c('div',{staticClass:"horizontal-tabs-image-wrapper clearfix"},[_c('img',{staticClass:"horizontal-tabs-image",attrs:{"src":_vm.HorizontalTabsImage}})]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('h2',{staticClass:"vertical-tabs-h2"},[_vm._v("Vertical Tabs Demo")]),_vm._v(" "),_c('ul',{staticClass:"vertical-tabs"},[_c('tabs',{attrs:{"orientation":"vertical","nav":{myaccount: 'My Account', integrations: 'Integrations', billing: 'Billing', settings: 'Settings'}}},[_c('div',{attrs:{"slot":"tab.myaccount"},slot:"tab.myaccount"},[_c('p',[_c('strong',[_vm._v("My Account Content")]),_vm._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum vel elit non convallis. Donec nec convallis tortor, id elementum arcu. Quisque id mauris vitae tortor congue blandit eu nec ex. Nunc suscipit risus nulla, vitae sagittis ante vestibulum ut. Vivamus tristique non nulla sed fermentum. Quisque varius gravida hendrerit. Nulla a risus enim. Vivamus commodo odio felis, eget accumsan neque bibendum et. Cras a odio ultricies, vehicula nibh quis, mattis tellus. Nam bibendum vel odio sed vestibulum.")]),_vm._v(" "),_c('p',[_vm._v("Vestibulum nisi tortor, pharetra a augue vel, finibus ultrices nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas a felis vel lectus hendrerit ornare at sit amet nunc. Sed volutpat erat enim, eget pellentesque neque rhoncus sed. Nullam eu tempus neque. Nunc in ante odio. Donec luctus efficitur nulla ac fermentum. Duis id quam libero. Duis enim nisi, aliquet et tortor facilisis, luctus elementum sapien. Fusce porta mi mauris, sit amet sollicitudin lacus fringilla ac.")])]),_vm._v(" "),_c('div',{attrs:{"slot":"tab.integrations"},slot:"tab.integrations"},[_c('p',[_c('strong',[_vm._v("Integrations Content")]),_vm._v(" Vestibulum nisi tortor, pharetra a augue vel, finibus ultrices nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas a felis vel lectus hendrerit ornare at sit amet nunc. Sed volutpat erat enim, eget pellentesque neque rhoncus sed. Nullam eu tempus neque. Nunc in ante odio. Donec luctus efficitur nulla ac fermentum. Duis id quam libero. Duis enim nisi, aliquet et tortor facilisis, luctus elementum sapien. Fusce porta mi mauris, sit amet sollicitudin lacus fringilla ac.")])]),_vm._v(" "),_c('div',{attrs:{"slot":"tab.billing"},slot:"tab.billing"},[_c('p',[_c('strong',[_vm._v("Billing Content")]),_vm._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum vel elit non convallis. Donec nec convallis tortor, id elementum arcu. Quisque id mauris vitae tortor congue blandit eu nec ex. Nunc suscipit risus nulla, vitae sagittis ante vestibulum ut. Vivamus tristique non nulla sed fermentum. Quisque varius gravida hendrerit. Nulla a risus enim. Vivamus commodo odio felis, eget accumsan neque bibendum et. Cras a odio ultricies, vehicula nibh quis, mattis tellus. Nam bibendum vel odio sed vestibulum.")])]),_vm._v(" "),_c('div',{attrs:{"slot":"tab.settings"},slot:"tab.settings"},[_c('p',[_c('strong',[_vm._v("Settings Content")]),_vm._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum vel elit non convallis. Donec nec convallis tortor, id elementum arcu. Quisque id mauris vitae tortor congue blandit eu nec ex. Nunc suscipit risus nulla, vitae sagittis ante vestibulum ut. Vivamus tristique non nulla sed fermentum. Quisque varius gravida hendrerit. Nulla a risus enim. Vivamus commodo odio felis.")])])])],1),_vm._v(" "),_c('h2',{staticClass:"horizontal-tabs-h2"},[_vm._v("Horizontal Tabs Demo")]),_vm._v(" "),_c('tabs',{attrs:{"nav":['Overview', 'Offers', 'Analytics', 'Reporting', 'Pixels']}},[_c('div',{attrs:{"slot":"tab.Overview"},slot:"tab.Overview"},[_c('p',[_c('strong',[_vm._v("Overview Content")]),_vm._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum vel elit non convallis. Donec nec convallis tortor, id elementum arcu. Quisque id mauris vitae tortor congue blandit eu nec ex. Nunc suscipit risus nulla, vitae sagittis ante vestibulum ut. Vivamus tristique non nulla sed fermentum. Quisque varius gravida hendrerit. Nulla a risus enim. Vivamus commodo odio felis, eget accumsan neque bibendum et. Cras a odio ultricies, vehicula nibh quis, mattis tellus. Nam bibendum vel odio sed vestibulum.")]),_vm._v(" "),_c('p',[_vm._v("Vestibulum nisi tortor, pharetra a augue vel, finibus ultrices nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas a felis vel lectus hendrerit ornare at sit amet nunc. Sed volutpat erat enim, eget pellentesque neque rhoncus sed. Nullam eu tempus neque. Nunc in ante odio. Donec luctus efficitur nulla ac fermentum. Duis id quam libero. Duis enim nisi, aliquet et tortor facilisis, luctus elementum sapien. Fusce porta mi mauris, sit amet sollicitudin lacus fringilla ac.")])]),_vm._v(" "),_c('div',{attrs:{"slot":"tab.Offers"},slot:"tab.Offers"},[_c('p',[_c('strong',[_vm._v("Offers Content")]),_vm._v(" Vestibulum nisi tortor, pharetra a augue vel, finibus ultrices nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas a felis vel lectus hendrerit ornare at sit amet nunc. Sed volutpat erat enim, eget pellentesque neque rhoncus sed. Nullam eu tempus neque. Nunc in ante odio. Donec luctus efficitur nulla ac fermentum. Duis id quam libero. Duis enim nisi, aliquet et tortor facilisis, luctus elementum sapien. Fusce porta mi mauris, sit amet sollicitudin lacus fringilla ac.")])]),_vm._v(" "),_c('div',{attrs:{"slot":"tab.Analytics"},slot:"tab.Analytics"},[_c('p',[_c('strong',[_vm._v("Analytics Content")]),_vm._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum vel elit non convallis. Donec nec convallis tortor, id elementum arcu. Quisque id mauris vitae tortor congue blandit eu nec ex. Nunc suscipit risus nulla, vitae sagittis ante vestibulum ut. Vivamus tristique non nulla sed fermentum. Quisque varius gravida hendrerit. Nulla a risus enim. Vivamus commodo odio felis, eget accumsan neque bibendum et. Cras a odio ultricies, vehicula nibh quis, mattis tellus. Nam bibendum vel odio sed vestibulum.")])]),_vm._v(" "),_c('div',{attrs:{"slot":"tab.Reporting"},slot:"tab.Reporting"},[_c('p',[_c('strong',[_vm._v("Reporting Content")]),_vm._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum vel elit non convallis. Donec nec convallis tortor, id elementum arcu. Quisque id mauris vitae tortor congue blandit eu nec ex. Nunc suscipit risus nulla, vitae sagittis ante vestibulum ut. Vivamus tristique non nulla sed fermentum. Quisque varius gravida hendrerit. Nulla a risus enim. Vivamus commodo odio felis, eget accumsan neque bibendum et. Cras a odio ultricies, vehicula nibh quis, mattis tellus. Nam bibendum vel odio sed vestibulum.")])]),_vm._v(" "),_c('div',{attrs:{"slot":"tab.Pixels"},slot:"tab.Pixels"},[_c('p',[_c('strong',[_vm._v("Pixels Content")]),_vm._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum vel elit non convallis. Donec nec convallis tortor, id elementum arcu. Quisque id mauris vitae tortor congue blandit eu nec ex. Nunc suscipit risus nulla, vitae sagittis ante vestibulum ut. Vivamus tristique non nulla sed fermentum. Quisque varius gravida hendrerit. Nulla a risus enim. Vivamus commodo odio felis.")])])]),_vm._v(" "),_c('h2',{staticClass:"accordion-h2"},[_vm._v("Accordions")]),_vm._v(" "),_c('p',[_vm._v("Accordions are used to display details about specific groups of content. For example, elaborating on a list of key values for a particular feature or tool.  Accordians can be set to have only one section open at a time, or allow multiple sections to be active together.")]),_vm._v(" "),_c('accordion',[_c('accordion-row',{attrs:{"title":"This is the title of the FIRST accordion tab"}},[_c('p',[_vm._v("This is some content related to this FIRST accordian section. It elaborates and give some advance details about the information listed in the accordian section title. This is a great UI component when you’re introducing software features at a high level and don’t want to overwhelm the user with content out of the gates. However, you also have advanced users who desire more details, therefore they can dig into the accordian to discover more about a particular feature which resonates with their needs.")])]),_vm._v(" "),_c('accordion-row',{attrs:{"title":"This is the title of the SECOND accordion tab"}},[_c('p',[_vm._v("This is some content related to this SECOND accordian section. It elaborates and give some advance details about the information listed in the accordian section title. This is a great UI component when you’re introducing software features at a high level and don’t want to overwhelm the user with content out of the gates. However, you also have advanced users who desire more details, therefore they can dig into the accordian to discover more about a particular feature which resonates with their needs.")])]),_vm._v(" "),_c('accordion-row',{attrs:{"title":"This is the title of the THIRD accordion tab"}},[_c('p',[_vm._v("This is some content related to this THIRD accordian section. It elaborates and give some advance details about the information listed in the accordian section title. This is a great UI component when you’re introducing software features at a high level and don’t want to overwhelm the user with content out of the gates. However, you also have advanced users who desire more details, therefore they can dig into the accordian to discover more about a particular feature which resonates with their needs.")])])],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vertical-tabs-list clearfix"},[_c('ol',[_c('li',[_c('strong',[_vm._v("Inactive Tab")]),_vm._v(" - Text styling for an inactive tab")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Active Page Indicator")]),_vm._v(" - Short line indicator of active tab")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Active Page Title")]),_vm._v(" - Text styling for the active tab")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Hover Tab")]),_vm._v(" - Text styling for tab on hover")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Divider")]),_vm._v(" - If the tabs are being used as a secondary page navigation they should have a vertical divider separating from the main content area.")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"horizontal-tabs-list clearfix"},[_c('ol',[_c('li',[_c('strong',[_vm._v("Inactive Tab")]),_vm._v(" - Text styling for an inactive tab")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Active Page Indicator")]),_vm._v(" - Short line indicator of active tab")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Active Page Title")]),_vm._v(" - Text styling for the active tab")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Hover Tab")]),_vm._v(" - Text styling for tab on hover")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Divider")]),_vm._v(" - If the tabs are being used as a secondary page navigation they should have a vertical divider separating from the main content area.")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DatePickers_vue__ = __webpack_require__(237);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_42bf3c5c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DatePickers_vue__ = __webpack_require__(387);
function injectStyle (ssrContext) {
  __webpack_require__(386)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DatePickers_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_42bf3c5c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DatePickers_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 386 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper button-content"},[_c('h1',[_vm._v("Date Picker")]),_vm._v(" "),_c('span',{staticClass:"headline-divider"}),_vm._v(" "),_c('h2',[_vm._v("Date Picker")]),_vm._v(" "),_c('ul',[_c('li',[_c('date-picker',{attrs:{"value":_vm.date1},on:{"update:value":function($event){_vm.date1=$event}}})],1),_vm._v(" "),_c('li',[_c('date-picker',{attrs:{"value":_vm.date2,"label":"Date Picker w/ label"},on:{"update:value":function($event){_vm.date2=$event}}})],1),_vm._v(" "),_c('li',[_c('date-picker',{attrs:{"value":_vm.date2,"label":"Date Picker w/ label & description","description":"some decription"},on:{"update:value":function($event){_vm.date2=$event}}})],1)]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('h2',[_vm._v("Date Range Picker")]),_vm._v(" "),_c('ul',[_c('li',[_c('date-range-picker',{attrs:{"start":_vm.start,"end":_vm.end},on:{"update:start":function($event){_vm.start=$event},"update:end":function($event){_vm.end=$event}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var start = ref.start;
var end = ref.end;
return [_vm._v("("+_vm._s(start.toDateString())+" - "+_vm._s(end.toDateString())+")")]}}])})],1),_vm._v(" "),_c('li',[_c('date-range-picker',{attrs:{"start":_vm.start2,"end":_vm.end2,"label":"Date Range Picker w/ label"},on:{"update:start":function($event){_vm.start2=$event},"update:end":function($event){_vm.end2=$event}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var start = ref.start;
var end = ref.end;
return [_vm._v(_vm._s(_vm.formatDate(start))+" - "+_vm._s(_vm.formatDate(end)))]}}])})],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(17));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-notification"] = factory(require("vue"));
	else
		root["vue-notification"] = factory(root["vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_20__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return events; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

var events = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notifications_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(1);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




var Notify = {
  install: function install(Vue) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.installed) {
      return;
    }

    this.installed = true;
    this.params = params;

    Vue.component('notifications', __WEBPACK_IMPORTED_MODULE_0__Notifications_vue___default.a);

    Vue.prototype.$notify = function (params) {
      if (typeof params === 'string') {
        params = { title: '', text: params };
      }

      if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
        __WEBPACK_IMPORTED_MODULE_1__events__["a" /* events */].$emit('add', params);
      }
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Notify);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(17)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(15),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CssGroup',
  props: ['name']
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaults__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VelocityGroup_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VelocityGroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__VelocityGroup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CssGroup_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CssGroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__CssGroup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__parser__ = __webpack_require__(8);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var STATE = {
  IDLE: 0,
  DESTROYED: 2
};

var Component = {
  name: 'Notifications',
  components: {
    VelocityGroup: __WEBPACK_IMPORTED_MODULE_4__VelocityGroup_vue___default.a,
    CssGroup: __WEBPACK_IMPORTED_MODULE_5__CssGroup_vue___default.a
  },
  props: {
    group: {
      type: String,
      default: ''
    },

    width: {
      type: [Number, String],
      default: 300
    },

    reverse: {
      type: Boolean,
      default: false
    },

    position: {
      type: [String, Array],
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_3__defaults__["a" /* default */].position;
      }
    },

    classes: {
      type: String,
      default: 'vue-notification'
    },

    animationType: {
      type: String,
      default: 'css',
      validator: function validator(value) {
        return value === 'css' || value === 'velocity';
      }
    },

    animation: {
      type: Object,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_3__defaults__["a" /* default */].velocityAnimation;
      }
    },

    animationName: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_3__defaults__["a" /* default */].cssAnimation
    },

    speed: {
      type: Number,
      default: 300
    },

    cooldown: {
      type: Number,
      default: 0
    },

    duration: {
      type: Number,
      default: 3000
    },

    delay: {
      type: Number,
      default: 0
    },

    max: {
      type: Number,
      default: Infinity
    }
  },
  data: function data() {
    return {
      list: [],
      velocity: __WEBPACK_IMPORTED_MODULE_0__index__["default"].params.velocity
    };
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_1__events__["a" /* events */].$on('add', this.addItem);
  },

  computed: {
    actualWidth: function actualWidth() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__parser__["a" /* default */])(this.width);
    },
    isVA: function isVA() {
      return this.animationType === 'velocity';
    },
    componentName: function componentName() {
      return this.isVA ? 'VelocityGroup' : 'CssGroup';
    },
    styles: function styles() {
      var _listToDirection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* listToDirection */])(this.position),
          x = _listToDirection.x,
          y = _listToDirection.y;

      var width = this.actualWidth.value;
      var suffix = this.actualWidth.type;

      var styles = _defineProperty({
        width: width + suffix
      }, y, '0px');

      if (x === 'center') {
        styles['left'] = 'calc(50% - ' + width / 2 + suffix + ')';
      } else {
        styles[x] = '0px';
      }

      return styles;
    },
    active: function active() {
      return this.list.filter(function (v) {
        return v.state !== STATE.DESTROYED;
      });
    },
    botToTop: function botToTop() {
      return this.styles.hasOwnProperty('bottom');
    }
  },
  methods: {
    addItem: function addItem(event) {
      var _this = this;

      event.group = event.group || '';

      if (this.group !== event.group) {
        return;
      }

      if (event.clean || event.clear) {
        this.destroyAll();
        return;
      }

      var duration = typeof event.duration === 'number' ? event.duration : this.duration;

      var speed = typeof event.speed === 'number' ? event.speed : this.speed;

      var title = event.title,
          text = event.text,
          type = event.type,
          data = event.data;


      var item = {
        id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* Id */])(),
        title: title,
        text: text,
        type: type,
        state: STATE.IDLE,
        speed: speed,
        length: duration + 2 * speed,
        data: data
      };

      if (duration >= 0) {
        item.timer = setTimeout(function () {
          _this.destroy(item);
        }, item.length);
      }

      var direction = this.reverse ? !this.botToTop : this.botToTop;

      var indexToDestroy = -1;

      if (direction) {
        this.list.push(item);

        if (this.active.length > this.max) {
          indexToDestroy = -1;
        }
      } else {
        this.list.unshift(item);

        if (this.active.length > this.max) {
          indexToDestroy = this.active.length - 1;
        }
      }

      if (indexToDestroy !== -1) {
        this.destroy(this.active[indexToDestroy]);
      }
    },
    notifyClass: function notifyClass(item) {
      return ['notification', this.classes, item.type];
    },
    notifyWrapperStyle: function notifyWrapperStyle(item) {
      return this.isVA ? null : {
        transition: 'all ' + item.speed + 'ms'
      };
    },
    destroy: function destroy(item) {
      clearTimeout(item.timer);
      item.state = STATE.DESTROYED;

      if (!this.isVA) {
        this.clean();
      }
    },
    destroyAll: function destroyAll() {
      this.active.forEach(this.destroy);
    },
    getAnimation: function getAnimation(index, el) {
      var animation = this.animation[index];

      return typeof animation === 'function' ? animation.call(this, el) : animation;
    },
    enter: function enter(_ref) {
      var el = _ref.el,
          complete = _ref.complete;

      var animation = this.getAnimation('enter', el);

      this.velocity(el, animation, {
        duration: this.speed,
        complete: complete
      });
    },
    leave: function leave(_ref2) {
      var el = _ref2.el,
          complete = _ref2.complete;

      var animation = this.getAnimation('leave', el);

      this.velocity(el, animation, {
        duration: this.speed,
        complete: complete
      });
    },
    clean: function clean() {
      this.list = this.list.filter(function (v) {
        return v.state !== STATE.DESTROYED;
      });
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VelocityGroup',
  methods: {
    enter: function enter(el, complete) {
      this.$emit('enter', { el: el, complete: complete });
    },
    leave: function leave(el, complete) {
      this.$emit('leave', { el: el, complete: complete });
    },
    afterLeave: function afterLeave() {
      this.$emit('afterLeave');
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  position: ['top', 'right'],
  cssAnimation: 'vn-fade',
  velocityAnimation: {
    enter: function enter(el) {
      var height = el.clientHeight;

      return {
        height: [height, 0],
        opacity: [1, 0]
      };
    },
    leave: {
      height: 0,
      opacity: [0, 1]
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parse */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var floatRegexp = '[-+]?[0-9]*.?[0-9]+';

var types = [{
  name: 'px',
  regexp: new RegExp('^' + floatRegexp + 'px$')
}, {
  name: '%',
  regexp: new RegExp('^' + floatRegexp + '%$')
}, {
  name: 'px',
  regexp: new RegExp('^' + floatRegexp + '$')
}];

var getType = function getType(value) {
  if (value === 'auto') {
    return {
      type: value,
      value: 0
    };
  }

  for (var i = 0; i < types.length; i++) {
    var type = types[i];
    if (type.regexp.test(value)) {
      return {
        type: type.name,
        value: parseFloat(value)
      };
    }
  }

  return {
    type: '',
    value: value
  };
};

var parse = function parse(value) {
  switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
    case 'number':
      return { type: 'px', value: value };
    case 'string':
      return getType(value);
    default:
      return { type: '', value: value };
  }
};

/* harmony default export */ __webpack_exports__["a"] = (parse);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Id; });
/* unused harmony export split */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listToDirection; });
var directions = {
  x: ['left', 'center', 'right'],
  y: ['top', 'bottom']
};

var Id = function (i) {
  return function () {
    return i++;
  };
}(0);

var split = function split(value) {
  if (typeof value !== 'string') {
    return [];
  }

  return value.split(/\s+/gi).filter(function (v) {
    return v;
  });
};

var listToDirection = function listToDirection(value) {
  if (typeof value === 'string') {
    value = split(value);
  }

  var x = null;
  var y = null;

  value.forEach(function (v) {
    if (directions.y.indexOf(v) !== -1) {
      y = v;
    }
    if (directions.x.indexOf(v) !== -1) {
      x = v;
    }
  });

  return { x: x, y: y };
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".notifications{display:block;position:fixed;z-index:5000}.notification-wrapper{display:block;overflow:hidden;width:100%;margin:0;padding:0}.notification{display:block;box-sizing:border-box;background:#fff;text-align:left}.notification-title{font-weight:600}.vue-notification{font-size:12px;padding:10px;margin:0 5px 5px;color:#fff;background:#44a4fc;border-left:5px solid #187fe7}.vue-notification.warn{background:#ffb648;border-left-color:#f48a06}.vue-notification.error{background:#e54d42;border-left-color:#b82e24}.vue-notification.success{background:#68cd86;border-left-color:#42a85f}.vn-fade-enter-active,.vn-fade-leave-active,.vn-fade-move{transition:all .5s}.vn-fade-enter,.vn-fade-leave-to{opacity:0}", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(14),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition-group', {
    attrs: {
      "css": false
    },
    on: {
      "enter": _vm.enter,
      "leave": _vm.leave,
      "after-leave": _vm.afterLeave
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "notifications",
    style: (_vm.styles)
  }, [_c(_vm.componentName, {
    tag: "component",
    attrs: {
      "name": _vm.animationName
    },
    on: {
      "enter": _vm.enter,
      "leave": _vm.leave,
      "after-leave": _vm.clean
    }
  }, _vm._l((_vm.list), function(item) {
    return (item.state != 2) ? _c('div', {
      key: item.id,
      staticClass: "notification-wrapper",
      style: (_vm.notifyWrapperStyle(item)),
      attrs: {
        "data-id": item.id
      }
    }, [_vm._t("body", [_c('div', {
      class: _vm.notifyClass(item),
      on: {
        "click": function($event) {
          _vm.destroy(item)
        }
      }
    }, [(item.title) ? _c('div', {
      staticClass: "notification-title",
      domProps: {
        "innerHTML": _vm._s(item.title)
      }
    }) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "notification-content",
      domProps: {
        "innerHTML": _vm._s(item.text)
      }
    })])], {
      item: item,
      close: function () { return _vm.destroy(item); }
    })], 2) : _vm._e()
  }))], 1)
},staticRenderFns: []}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition-group', {
    attrs: {
      "name": _vm.name
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("2901aeae", content, true);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(19)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation_array_min_js__ = __webpack_require__(391);



// Custom Rules


// Add custom rules
__WEBPACK_IMPORTED_MODULE_1_vee_validate__["a" /* default */].Validator.extend('array_min', __WEBPACK_IMPORTED_MODULE_2__validation_array_min_js__["a" /* default */]);

// Initialize VeeValidate
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vee_validate__["a" /* default */], { inject: false });

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_1_vee_validate__["a" /* default */]);

/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export install */
/* unused harmony export use */
/* unused harmony export directive */
/* unused harmony export mixin */
/* unused harmony export mapFields */
/* unused harmony export Validator */
/* unused harmony export ErrorBag */
/* unused harmony export Rules */
/* unused harmony export ErrorComponent */
/* unused harmony export version */
/**
  * vee-validate v2.0.8
  * (c) 2018 Abdelrahman Awad
  * @license MIT
  */
var supportsPassive = true;
var detectPassiveSupport = function () {
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
                supportsPassive = true;
            }
        });
        window.addEventListener('testPassive', null, opts);
        window.removeEventListener('testPassive', null, opts);
    } catch (e) {
        supportsPassive = false;
    }
    return supportsPassive;
};
var addEventListener = function (el, eventName, cb) {
    el.addEventListener(eventName, cb, supportsPassive ? {
        passive: true
    } : false);
};
var isTextInput = function (el) { return ['text','number','password','search','email','tel',
    'url','textarea'].indexOf(el.type) !== -1; };
var getDataAttribute = function (el, name) { return el.getAttribute(("data-vv-" + name)); };
var isNullOrUndefined = function (value) { return value === null || value === undefined; };
var setDataAttribute = function (el, name, value) { return el.setAttribute(("data-vv-" + name), value); };
var createFlags = function () { return ({
    untouched: true,
    touched: false,
    dirty: false,
    pristine: true,
    valid: null,
    invalid: null,
    validated: false,
    pending: false,
    required: false,
    changed: false
}); };
var isEqual = function (lhs, rhs) {
    if (lhs instanceof RegExp && rhs instanceof RegExp) {
        return isEqual(lhs.source, rhs.source) && isEqual(lhs.flags, rhs.flags);
    }
    if (Array.isArray(lhs) && Array.isArray(rhs)) {
        if (lhs.length !== rhs.length) 
            { return false; }
        for (var i = 0;i < lhs.length; i++) {
            if (!isEqual(lhs[i], rhs[i])) {
                return false;
            }
        }
        return true;
    }
    if (isObject(lhs) && isObject(rhs)) {
        return Object.keys(lhs).every(function (key) { return isEqual(lhs[key], rhs[key]); }) && Object.keys(rhs).every(function (key) { return isEqual(lhs[key], rhs[key]); });
    }
    return lhs === rhs;
};
var getScope = function (el) {
    var scope = getDataAttribute(el, 'scope');
    if (isNullOrUndefined(scope) && el.form) {
        scope = getDataAttribute(el.form, 'scope');
    }
    return !isNullOrUndefined(scope) ? scope : null;
};
var getPath = function (path, target, def) {
    if ( def === void 0 ) def = undefined;

    if (!path || !target) 
        { return def; }
    var value = target;
    path.split('.').every(function (prop) {
        if (!Object.prototype.hasOwnProperty.call(value, prop) && value[prop] === undefined) {
            value = def;
            return false;
        }
        value = value[prop];
        return true;
    });
    return value;
};
var hasPath = function (path, target) {
    var obj = target;
    return path.split('.').every(function (prop) {
        if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
        obj = obj[prop];
        return true;
    });
};
var parseRule = function (rule) {
    var params = [];
    var name = rule.split(':')[0];
    if (~rule.indexOf(':')) {
        params = rule.split(':').slice(1).join(':').split(',');
    }
    return {
        name: name,
        params: params
    };
};
var debounce = function (fn, wait, immediate) {
    if ( wait === void 0 ) wait = 0;
    if ( immediate === void 0 ) immediate = false;

    if (wait === 0) {
        return fn;
    }
    var timeout;
    return function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var later = function () {
            timeout = null;
            if (!immediate) 
                { fn.apply(void 0, args); }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) 
            { fn.apply(void 0, args); }
    };
};
var normalizeRules = function (rules) {
    if (!rules) {
        return {};
    }
    if (isObject(rules)) {
        return Object.keys(rules).reduce(function (prev, curr) {
            var params = [];
            if (rules[curr] === true) {
                params = [];
            } else if (Array.isArray(rules[curr])) {
                params = rules[curr];
            } else {
                params = [rules[curr]];
            }
            if (rules[curr] !== false) {
                prev[curr] = params;
            }
            return prev;
        }, {});
    }
    if (typeof rules !== 'string') {
        warn('rules must be either a string or an object.');
        return {};
    }
    return rules.split('|').reduce(function (prev, rule) {
        var parsedRule = parseRule(rule);
        if (!parsedRule.name) {
            return prev;
        }
        prev[parsedRule.name] = parsedRule.params;
        return prev;
    }, {});
};
var warn = function (message) {
    console.warn(("[vee-validate] " + message));
};
var createError = function (message) { return new Error(("[vee-validate] " + message)); };
var isObject = function (obj) { return obj !== null && obj && typeof obj === 'object' && !Array.isArray(obj); };
var isCallable = function (func) { return typeof func === 'function'; };
var hasClass = function (el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    }
    return !(!el.className.match(new RegExp(("(\\s|^)" + className + "(\\s|$)"))));
};
var addClass = function (el, className) {
    if (el.classList) {
        el.classList.add(className);
        return;
    }
    if (!hasClass(el, className)) {
        el.className += " " + className;
    }
};
var removeClass = function (el, className) {
    if (el.classList) {
        el.classList.remove(className);
        return;
    }
    if (hasClass(el, className)) {
        var reg = new RegExp(("(\\s|^)" + className + "(\\s|$)"));
        el.className = el.className.replace(reg, ' ');
    }
};
var toggleClass = function (el, className, status) {
    if (!el || !className) 
        { return; }
    if (Array.isArray(className)) {
        className.forEach(function (item) { return toggleClass(el, item, status); });
        return;
    }
    if (status) {
        return addClass(el, className);
    }
    removeClass(el, className);
};
var toArray = function (arrayLike) {
    if (isCallable(Array.from)) {
        return Array.from(arrayLike);
    }
    var array = [];
    var length = arrayLike.length;
    for (var i = 0;i < length; i++) {
        array.push(arrayLike[i]);
    }
    return array;
};
var assign = function (target) {
    var others = [], len = arguments.length - 1;
    while ( len-- > 0 ) others[ len ] = arguments[ len + 1 ];

    if (isCallable(Object.assign)) {
        return Object.assign.apply(Object, [ target ].concat( others ));
    }
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    others.forEach(function (arg) {
        if (arg != null) {
            Object.keys(arg).forEach(function (key) {
                to[key] = arg[key];
            });
        }
    });
    return to;
};
var id = 0;
var idTemplate = '{id}';
var uniqId = function () {
    if (id >= 9999) {
        id = 0;
        idTemplate = idTemplate.replace('{id}', '_{id}');
    }
    id++;
    var newId = idTemplate.replace('{id}', String(id));
    return newId;
};
var find = function (arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
    for (var i = 0;i < array.length; i++) {
        if (predicate(array[i])) {
            return array[i];
        }
    }
    return undefined;
};
var isBuiltInComponent = function (vnode) {
    if (!vnode) {
        return false;
    }
    var tag = vnode.componentOptions.tag;
    return /keep-alive|transition|transition-group/.test(tag);
};
var makeEventsArray = function (events) { return typeof events === 'string' && events.length ? events.split('|') : []; };
var makeDelayObject = function (events, delay, delayConfig) {
    if (typeof delay === 'number') {
        return events.reduce(function (prev, e) {
            prev[e] = delay;
            return prev;
        }, {});
    }
    return events.reduce(function (prev, e) {
        if (typeof delay === 'object' && e in delay) {
            prev[e] = delay[e];
            return prev;
        }
        if (typeof delayConfig === 'number') {
            prev[e] = delayConfig;
            return prev;
        }
        prev[e] = delayConfig && delayConfig[e] || 0;
        return prev;
    }, {});
};
var deepParseInt = function (input) {
    if (typeof input === 'number') 
        { return input; }
    if (typeof input === 'string') 
        { return parseInt(input); }
    var map = {};
    for (var element in input) {
        map[element] = parseInt(input[element]);
    }
    return map;
};
var merge = function (target, source) {
    if (!(isObject(target) && isObject(source))) {
        return target;
    }
    Object.keys(source).forEach(function (key) {
        var obj, obj$1;

        if (isObject(source[key])) {
            if (!target[key]) {
                assign(target, ( obj = {}, obj[key] = {}, obj ));
            }
            merge(target[key], source[key]);
            return;
        }
        assign(target, ( obj$1 = {}, obj$1[key] = source[key], obj$1 ));
    });
    return target;
};

var ErrorBag = function ErrorBag() {
    this.items = [];
};
ErrorBag.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function () {
        var this$1 = this;

    var index = 0;
    return {
        next: function () { return ({
            value: this$1.items[index++],
            done: index > this$1.items.length
        }); }
    };
};
ErrorBag.prototype.add = function add (error) {
        var ref;

    if (arguments.length > 1) {
        error = {
            field: arguments[0],
            msg: arguments[1],
            rule: arguments[2],
            scope: !isNullOrUndefined(arguments[3]) ? arguments[3] : null,
            regenerate: null
        };
    }
    (ref = this.items).push.apply(ref, this._normalizeError(error));
};
ErrorBag.prototype._normalizeError = function _normalizeError (error) {
    if (Array.isArray(error)) {
        return error.map(function (e) {
            e.scope = !isNullOrUndefined(e.scope) ? e.scope : null;
            return e;
        });
    }
    error.scope = !isNullOrUndefined(error.scope) ? error.scope : null;
    return [error];
};
ErrorBag.prototype.regenerate = function regenerate () {
    this.items.forEach(function (i) {
        i.msg = isCallable(i.regenerate) ? i.regenerate() : i.msg;
    });
};
ErrorBag.prototype.update = function update (id, error) {
    var item = find(this.items, function (i) { return i.id === id; });
    if (!item) {
        return;
    }
    var idx = this.items.indexOf(item);
    this.items.splice(idx, 1);
    item.scope = error.scope;
    this.items.push(item);
};
ErrorBag.prototype.all = function all (scope) {
    if (isNullOrUndefined(scope)) {
        return this.items.map(function (e) { return e.msg; });
    }
    return this.items.filter(function (e) { return e.scope === scope; }).map(function (e) { return e.msg; });
};
ErrorBag.prototype.any = function any (scope) {
    if (isNullOrUndefined(scope)) {
        return !(!this.items.length);
    }
    return !(!this.items.filter(function (e) { return e.scope === scope; }).length);
};
ErrorBag.prototype.clear = function clear (scope) {
        var this$1 = this;

    if (isNullOrUndefined(scope)) {
        scope = null;
    }
    for (var i = 0;i < this.items.length; ++i) {
        if (this$1.items[i].scope === scope) {
            this$1.items.splice(i, 1);
            --i;
        }
    }
};
ErrorBag.prototype.collect = function collect (field, scope, map) {
        if ( map === void 0 ) map = true;

    if (!field) {
        var collection = {};
        this.items.forEach(function (e) {
            if (!collection[e.field]) {
                collection[e.field] = [];
            }
            collection[e.field].push(map ? e.msg : e);
        });
        return collection;
    }
    field = !isNullOrUndefined(field) ? String(field) : field;
    if (isNullOrUndefined(scope)) {
        return this.items.filter(function (e) { return e.field === field; }).map(function (e) { return map ? e.msg : e; });
    }
    return this.items.filter(function (e) { return e.field === field && e.scope === scope; }).map(function (e) { return map ? e.msg : e; });
};
ErrorBag.prototype.count = function count () {
    return this.items.length;
};
ErrorBag.prototype.firstById = function firstById (id) {
    var error = find(this.items, function (i) { return i.id === id; });
    return error ? error.msg : null;
};
ErrorBag.prototype.first = function first (field, scope) {
        var this$1 = this;
        if ( scope === void 0 ) scope = null;

    if (isNullOrUndefined(field)) {
        return null;
    }
    field = String(field);
    var selector = this._selector(field);
    var scoped = this._scope(field);
    if (scoped) {
        var result = this.first(scoped.name, scoped.scope);
        if (result) {
            return result;
        }
    }
    if (selector) {
        return this.firstByRule(selector.name, selector.rule, scope);
    }
    for (var i = 0;i < this.items.length; ++i) {
        if (this$1.items[i].field === field && this$1.items[i].scope === scope) {
            return this$1.items[i].msg;
        }
    }
    return null;
};
ErrorBag.prototype.firstRule = function firstRule (field, scope) {
    var errors = this.collect(field, scope, false);
    return errors.length && errors[0].rule || null;
};
ErrorBag.prototype.has = function has (field, scope) {
        if ( scope === void 0 ) scope = null;

    return !(!this.first(field, scope));
};
ErrorBag.prototype.firstByRule = function firstByRule (name, rule, scope) {
        if ( scope === void 0 ) scope = null;

    var error = this.collect(name, scope, false).filter(function (e) { return e.rule === rule; })[0];
    return error && error.msg || null;
};
ErrorBag.prototype.firstNot = function firstNot (name, rule, scope) {
        if ( rule === void 0 ) rule = 'required';
        if ( scope === void 0 ) scope = null;

    var error = this.collect(name, scope, false).filter(function (e) { return e.rule !== rule; })[0];
    return error && error.msg || null;
};
ErrorBag.prototype.removeById = function removeById (id) {
        var this$1 = this;

    if (Array.isArray(id)) {
        this.items = this.items.filter(function (i) { return id.indexOf(i.id) === -1; });
        return;
    }
    for (var i = 0;i < this.items.length; ++i) {
        if (this$1.items[i].id === id) {
            this$1.items.splice(i, 1);
            --i;
        }
    }
};
ErrorBag.prototype.remove = function remove (field, scope) {
        var this$1 = this;

    field = !isNullOrUndefined(field) ? String(field) : field;
    var removeCondition = function (e) {
        if (!isNullOrUndefined(scope)) {
            return e.field === field && e.scope === scope;
        }
        return e.field === field && e.scope === null;
    };
    for (var i = 0;i < this.items.length; ++i) {
        if (removeCondition(this$1.items[i])) {
            this$1.items.splice(i, 1);
            --i;
        }
    }
};
ErrorBag.prototype._selector = function _selector (field) {
    if (field.indexOf(':') > -1) {
        var ref = field.split(':');
            var name = ref[0];
            var rule = ref[1];
        return {
            name: name,
            rule: rule
        };
    }
    return null;
};
ErrorBag.prototype._scope = function _scope (field) {
    if (field.indexOf('.') > -1) {
        var ref = field.split('.');
            var scope = ref[0];
            var name = ref.slice(1);
        return {
            name: name.join('.'),
            scope: scope
        };
    }
    return null;
};

var LOCALE = 'en';
var Dictionary = function Dictionary(dictionary) {
    if ( dictionary === void 0 ) dictionary = {};

    this.container = {};
    this.merge(dictionary);
};

var prototypeAccessors = { locale: { configurable: true } };
prototypeAccessors.locale.get = function () {
    return LOCALE;
};
prototypeAccessors.locale.set = function (value) {
    LOCALE = value || 'en';
};
Dictionary.prototype.hasLocale = function hasLocale (locale) {
    return !(!this.container[locale]);
};
Dictionary.prototype.setDateFormat = function setDateFormat (locale, format) {
    if (!this.container[locale]) {
        this.container[locale] = {};
    }
    this.container[locale].dateFormat = format;
};
Dictionary.prototype.getDateFormat = function getDateFormat (locale) {
    if (!this.container[locale] || !this.container[locale].dateFormat) {
        return null;
    }
    return this.container[locale].dateFormat;
};
Dictionary.prototype.getMessage = function getMessage (locale, key, data) {
    var message = null;
    if (!this.hasMessage(locale, key)) {
        message = this._getDefaultMessage(locale);
    } else {
        message = this.container[locale].messages[key];
    }
    return isCallable(message) ? message.apply(void 0, data) : message;
};
Dictionary.prototype.getFieldMessage = function getFieldMessage (locale, field, key, data) {
    if (!this.hasLocale(locale)) {
        return this.getMessage(locale, key, data);
    }
    var dict = this.container[locale].custom && this.container[locale].custom[field];
    if (!dict || !dict[key]) {
        return this.getMessage(locale, key, data);
    }
    var message = dict[key];
    return isCallable(message) ? message.apply(void 0, data) : message;
};
Dictionary.prototype._getDefaultMessage = function _getDefaultMessage (locale) {
    if (this.hasMessage(locale, '_default')) {
        return this.container[locale].messages._default;
    }
    return this.container.en.messages._default;
};
Dictionary.prototype.getAttribute = function getAttribute (locale, key, fallback) {
        if ( fallback === void 0 ) fallback = '';

    if (!this.hasAttribute(locale, key)) {
        return fallback;
    }
    return this.container[locale].attributes[key];
};
Dictionary.prototype.hasMessage = function hasMessage (locale, key) {
    return !(!(this.hasLocale(locale) && this.container[locale].messages && this.container[locale].messages[key]));
};
Dictionary.prototype.hasAttribute = function hasAttribute (locale, key) {
    return !(!(this.hasLocale(locale) && this.container[locale].attributes && this.container[locale].attributes[key]));
};
Dictionary.prototype.merge = function merge$1 (dictionary) {
    merge(this.container, dictionary);
};
Dictionary.prototype.setMessage = function setMessage (locale, key, message) {
    if (!this.hasLocale(locale)) {
        this.container[locale] = {
            messages: {},
            attributes: {}
        };
    }
    this.container[locale].messages[key] = message;
};
Dictionary.prototype.setAttribute = function setAttribute (locale, key, attribute) {
    if (!this.hasLocale(locale)) {
        this.container[locale] = {
            messages: {},
            attributes: {}
        };
    }
    this.container[locale].attributes[key] = attribute;
};

Object.defineProperties( Dictionary.prototype, prototypeAccessors );

var normalizeValue = function (value) {
    if (isObject(value)) {
        return Object.keys(value).reduce(function (prev, key) {
            prev[key] = normalizeValue(value[key]);
            return prev;
        }, {});
    }
    if (isCallable(value)) {
        return value('{0}', ['{1}','{2}','{3}']);
    }
    return value;
};
var normalizeFormat = function (locale) {
    var messages = normalizeValue(locale.messages);
    var custom = normalizeValue(locale.custom);
    return {
        messages: messages,
        custom: custom,
        attributes: locale.attributes,
        dateFormat: locale.dateFormat
    };
};
var I18nDictionary = function I18nDictionary(i18n, rootKey) {
    this.i18n = i18n;
    this.rootKey = rootKey;
};

var prototypeAccessors$1 = { locale: { configurable: true } };
prototypeAccessors$1.locale.get = function () {
    return this.i18n.locale;
};
prototypeAccessors$1.locale.set = function (value) {
    warn('Cannot set locale from the validator when using vue-i18n, use i18n.locale setter instead');
};
I18nDictionary.prototype.getDateFormat = function getDateFormat (locale) {
    return this.i18n.getDateTimeFormat(locale || this.locale);
};
I18nDictionary.prototype.setDateFormat = function setDateFormat (locale, value) {
    this.i18n.setDateTimeFormat(locale || this.locale, value);
};
I18nDictionary.prototype.getMessage = function getMessage (locale, key, data) {
    var path = (this.rootKey) + ".messages." + key;
    if (!this.i18n.te(path)) {
        return this.i18n.t(((this.rootKey) + ".messages._default"), locale, data);
    }
    return this.i18n.t(path, locale, data);
};
I18nDictionary.prototype.getAttribute = function getAttribute (locale, key, fallback) {
        if ( fallback === void 0 ) fallback = '';

    var path = (this.rootKey) + ".attributes." + key;
    if (!this.i18n.te(path)) {
        return fallback;
    }
    return this.i18n.t(path, locale);
};
I18nDictionary.prototype.getFieldMessage = function getFieldMessage (locale, field, key, data) {
    var path = (this.rootKey) + ".custom." + field + "." + key;
    if (this.i18n.te(path)) {
        return this.i18n.t(path);
    }
    return this.getMessage(locale, key, data);
};
I18nDictionary.prototype.merge = function merge$1 (dictionary) {
        var this$1 = this;

    Object.keys(dictionary).forEach(function (localeKey) {
            var obj;

        var clone = merge({}, getPath((localeKey + "." + (this$1.rootKey)), this$1.i18n.messages, {}));
        var locale = merge(clone, normalizeFormat(dictionary[localeKey]));
        this$1.i18n.mergeLocaleMessage(localeKey, ( obj = {}, obj[this$1.rootKey] = locale, obj ));
        if (locale.dateFormat) {
            this$1.i18n.setDateTimeFormat(localeKey, locale.dateFormat);
        }
    });
};
I18nDictionary.prototype.setMessage = function setMessage (locale, key, value) {
        var obj, obj$1;

    this.merge(( obj$1 = {}, obj$1[locale] = {
            messages: ( obj = {}, obj[key] = value, obj )
        }, obj$1 ));
};
I18nDictionary.prototype.setAttribute = function setAttribute (locale, key, value) {
        var obj, obj$1;

    this.merge(( obj$1 = {}, obj$1[locale] = {
            attributes: ( obj = {}, obj[key] = value, obj )
        }, obj$1 ));
};

Object.defineProperties( I18nDictionary.prototype, prototypeAccessors$1 );

var defaultConfig = {
    locale: 'en',
    delay: 0,
    errorBagName: 'errors',
    dictionary: null,
    strict: true,
    fieldsBagName: 'fields',
    classes: false,
    classNames: null,
    events: 'input|blur',
    inject: true,
    fastExit: true,
    aria: true,
    validity: false,
    i18n: null,
    i18nRootKey: 'validation'
};
var currentConfig = assign({}, defaultConfig);
var dependencies = {
    dictionary: new Dictionary({
        en: {
            messages: {},
            attributes: {},
            custom: {}
        }
    })
};
var Config = function Config () {};

var staticAccessors = { default: { configurable: true },current: { configurable: true } };

staticAccessors.default.get = function () {
    return defaultConfig;
};
staticAccessors.current.get = function () {
    return currentConfig;
};
Config.dependency = function dependency (key) {
    return dependencies[key];
};
Config.merge = function merge$$1 (config) {
    currentConfig = assign({}, currentConfig, config);
    if (currentConfig.i18n) {
        Config.register('dictionary', new I18nDictionary(currentConfig.i18n, currentConfig.i18nRootKey));
    }
};
Config.register = function register (key, value) {
    dependencies[key] = value;
};
Config.resolve = function resolve (context) {
    var selfConfig = getPath('$options.$_veeValidate', context, {});
    return assign({}, Config.current, selfConfig);
};

Object.defineProperties( Config, staticAccessors );

var Generator = function Generator () {};

Generator.generate = function generate (el, binding, vnode) {
    var model = Generator.resolveModel(binding, vnode);
    var options = Config.resolve(vnode.context);
    return {
        name: Generator.resolveName(el, vnode),
        el: el,
        listen: !binding.modifiers.disable,
        scope: Generator.resolveScope(el, binding, vnode),
        vm: Generator.makeVM(vnode.context),
        expression: binding.value,
        component: vnode.child,
        classes: options.classes,
        classNames: options.classNames,
        getter: Generator.resolveGetter(el, vnode, model),
        events: Generator.resolveEvents(el, vnode) || options.events,
        model: model,
        delay: Generator.resolveDelay(el, vnode, options),
        rules: Generator.resolveRules(el, binding),
        initial: !(!binding.modifiers.initial),
        validity: options.validity,
        aria: options.aria,
        initialValue: Generator.resolveInitialValue(vnode)
    };
};
Generator.getCtorConfig = function getCtorConfig (vnode) {
    if (!vnode.child) 
        { return null; }
    var config = getPath('child.$options.$_veeValidate', vnode);
    return config;
};
Generator.resolveRules = function resolveRules (el, binding) {
    if (!binding.value && (!binding || !binding.expression)) {
        return getDataAttribute(el, 'rules');
    }
    if (binding.value && ~['string','object'].indexOf(typeof binding.value.rules)) {
        return binding.value.rules;
    }
    return binding.value;
};
Generator.resolveInitialValue = function resolveInitialValue (vnode) {
    var model = vnode.data.model || find(vnode.data.directives, function (d) { return d.name === 'model'; });
    return model && model.value;
};
Generator.makeVM = function makeVM (vm) {
    return {
        get $el() {
            return vm.$el;
        },
        get $refs() {
            return vm.$refs;
        },
        $watch: vm.$watch ? vm.$watch.bind(vm) : function () {},
        $validator: vm.$validator ? {
            errors: vm.$validator.errors,
            validate: vm.$validator.validate.bind(vm.$validator),
            update: vm.$validator.update.bind(vm.$validator)
        } : null
    };
};
Generator.resolveDelay = function resolveDelay (el, vnode, options) {
    var delay = getDataAttribute(el, 'delay');
    var globalDelay = options && 'delay' in options ? options.delay : 0;
    if (!delay && vnode.child && vnode.child.$attrs) {
        delay = vnode.child.$attrs['data-vv-delay'];
    }
    if (!isObject(globalDelay)) {
        return deepParseInt(delay || globalDelay);
    }
    globalDelay.input = delay || 0;
    return deepParseInt(globalDelay);
};
Generator.resolveEvents = function resolveEvents (el, vnode) {
    var events = getDataAttribute(el, 'validate-on');
    if (!events && vnode.child && vnode.child.$attrs) {
        events = vnode.child.$attrs['data-vv-validate-on'];
    }
    if (!events && vnode.child) {
        var config = Generator.getCtorConfig(vnode);
        events = config && config.events;
    }
    return events;
};
Generator.resolveScope = function resolveScope (el, binding, vnode) {
        if ( vnode === void 0 ) vnode = {};

    var scope = null;
    if (vnode.child && isNullOrUndefined(scope)) {
        scope = vnode.child.$attrs && vnode.child.$attrs['data-vv-scope'];
    }
    return !isNullOrUndefined(scope) ? scope : getScope(el);
};
Generator.resolveModel = function resolveModel (binding, vnode) {
    if (binding.arg) {
        return {
            expression: binding.arg
        };
    }
    var model = vnode.data.model || find(vnode.data.directives, function (d) { return d.name === 'model'; });
    if (!model) {
        return null;
    }
    var watchable = !/[^\w.$]/.test(model.expression) && hasPath(model.expression, vnode.context);
    var lazy = !(!(model.modifiers && model.modifiers.lazy));
    if (!watchable) {
        return {
            expression: null,
            lazy: lazy
        };
    }
    return {
        expression: model.expression,
        lazy: lazy
    };
};
Generator.resolveName = function resolveName (el, vnode) {
    var name = getDataAttribute(el, 'name');
    if (!name && !vnode.child) {
        return el.name;
    }
    if (!name && vnode.child && vnode.child.$attrs) {
        name = vnode.child.$attrs['data-vv-name'] || vnode.child.$attrs['name'];
    }
    if (!name && vnode.child) {
        var config = Generator.getCtorConfig(vnode);
        if (config && isCallable(config.name)) {
            var boundGetter = config.name.bind(vnode.child);
            return boundGetter();
        }
        return vnode.child.name;
    }
    return name;
};
Generator.resolveGetter = function resolveGetter (el, vnode, model) {
    if (model && model.expression) {
        return function () { return getPath(model.expression, vnode.context); };
    }
    if (vnode.child) {
        var path = getDataAttribute(el, 'value-path') || vnode.child.$attrs && vnode.child.$attrs['data-vv-value-path'];
        if (path) {
            return function () { return getPath(path, vnode.child); };
        }
        var config = Generator.getCtorConfig(vnode);
        if (config && isCallable(config.value)) {
            var boundGetter = config.value.bind(vnode.child);
            return function () { return boundGetter(); };
        }
        return function () { return vnode.child.value; };
    }
    switch (el.type) {
        case 'checkbox':
            return function () {
                var els = document.querySelectorAll(("input[name=\"" + (el.name) + "\"]"));
                els = toArray(els).filter(function (el) { return el.checked; });
                if (!els.length) 
                    { return undefined; }
                return els.map(function (checkbox) { return checkbox.value; });
            };
        case 'radio':
            return function () {
                var els = document.querySelectorAll(("input[name=\"" + (el.name) + "\"]"));
                var elm = find(els, function (el) { return el.checked; });
                return elm && elm.value;
            };
        case 'file':
            return function (context) { return toArray(el.files); };
        case 'select-multiple':
            return function () { return toArray(el.options).filter(function (opt) { return opt.selected; }).map(function (opt) { return opt.value; }); };
        default:
            return function () { return el && el.value; };
    }
};

var DEFAULT_OPTIONS = {
    targetOf: null,
    initial: false,
    scope: null,
    listen: true,
    name: null,
    rules: {},
    vm: null,
    classes: false,
    validity: true,
    aria: true,
    events: 'input|blur',
    delay: 0,
    classNames: {
        touched: 'touched',
        untouched: 'untouched',
        valid: 'valid',
        invalid: 'invalid',
        pristine: 'pristine',
        dirty: 'dirty'
    }
};
var Field = function Field(options) {
    if ( options === void 0 ) options = {};

    this.id = uniqId();
    this.el = options.el;
    this.updated = false;
    this.dependencies = [];
    this.watchers = [];
    this.events = [];
    this.delay = 0;
    this.rules = {};
    this._cacheId(options);
    this.classNames = assign({}, DEFAULT_OPTIONS.classNames);
    options = assign({}, DEFAULT_OPTIONS, options);
    this._delay = !isNullOrUndefined(options.delay) ? options.delay : 0;
    this.validity = options.validity;
    this.aria = options.aria;
    this.flags = createFlags();
    this.vm = options.vm;
    this.component = options.component;
    this.ctorConfig = this.component ? getPath('$options.$_veeValidate', this.component) : undefined;
    this.update(options);
    this.initialValue = this.value;
    this.updated = false;
};

var prototypeAccessors$2 = { validator: { configurable: true },isRequired: { configurable: true },isDisabled: { configurable: true },alias: { configurable: true },value: { configurable: true },rejectsFalse: { configurable: true } };
prototypeAccessors$2.validator.get = function () {
    if (!this.vm || !this.vm.$validator) {
        warn('No validator instance detected.');
        return {
            validate: function () {}
        };
    }
    return this.vm.$validator;
};
prototypeAccessors$2.isRequired.get = function () {
    return !(!this.rules.required);
};
prototypeAccessors$2.isDisabled.get = function () {
    return !(!(this.component && this.component.disabled)) || !(!(this.el && this.el.disabled));
};
prototypeAccessors$2.alias.get = function () {
    if (this._alias) {
        return this._alias;
    }
    var alias = null;
    if (this.el) {
        alias = getDataAttribute(this.el, 'as');
    }
    if (!alias && this.component) {
        return this.component.$attrs && this.component.$attrs['data-vv-as'];
    }
    return alias;
};
prototypeAccessors$2.value.get = function () {
    if (!isCallable(this.getter)) {
        return undefined;
    }
    return this.getter();
};
prototypeAccessors$2.rejectsFalse.get = function () {
    if (this.component && this.ctorConfig) {
        return !(!this.ctorConfig.rejectsFalse);
    }
    if (!this.el) {
        return false;
    }
    return this.el.type === 'checkbox';
};
Field.prototype.matches = function matches (options) {
    if (!options) {
        return true;
    }
    if (options.id) {
        return this.id === options.id;
    }
    if (options.name === undefined && options.scope === undefined) {
        return true;
    }
    if (options.scope === undefined) {
        return this.name === options.name;
    }
    if (options.name === undefined) {
        return this.scope === options.scope;
    }
    return options.name === this.name && options.scope === this.scope;
};
Field.prototype._cacheId = function _cacheId (options) {
    if (this.el && !options.targetOf) {
        setDataAttribute(this.el, 'id', this.id);
    }
};
Field.prototype.update = function update (options) {
    this.targetOf = options.targetOf || null;
    this.initial = options.initial || this.initial || false;
    if (!isNullOrUndefined(options.scope) && options.scope !== this.scope && isCallable(this.validator.update)) {
        this.validator.update(this.id, {
            scope: options.scope
        });
    }
    this.scope = !isNullOrUndefined(options.scope) ? options.scope : !isNullOrUndefined(this.scope) ? this.scope : null;
    this.name = (!isNullOrUndefined(options.name) ? String(options.name) : options.name) || this.name || null;
    this.rules = options.rules !== undefined ? normalizeRules(options.rules) : this.rules;
    this.model = options.model || this.model;
    this.listen = options.listen !== undefined ? options.listen : this.listen;
    this.classes = (options.classes || this.classes || false) && !this.component;
    this.classNames = isObject(options.classNames) ? merge(this.classNames, options.classNames) : this.classNames;
    this.getter = isCallable(options.getter) ? options.getter : this.getter;
    this._alias = options.alias || this._alias;
    this.events = options.events ? makeEventsArray(options.events) : this.events;
    this.delay = options.delay ? makeDelayObject(this.events, options.delay, this._delay) : makeDelayObject(this.events, this.delay, this._delay);
    this.updateDependencies();
    this.addActionListeners();
    if (!this.name) {
        warn('A field is missing a "name" or "data-vv-name" attribute');
    }
    if (options.rules !== undefined) {
        this.flags.required = this.isRequired;
    }
    if (this.flags.validated && options.rules !== undefined && this.updated) {
        this.validator.validate(("#" + (this.id)));
    }
    this.updated = true;
    this.addValueListeners();
    if (!this.el) {
        return;
    }
    this.updateClasses();
    this.updateAriaAttrs();
};
Field.prototype.reset = function reset () {
        var this$1 = this;

    var defaults = createFlags();
    Object.keys(this.flags).filter(function (flag) { return flag !== 'required'; }).forEach(function (flag) {
        this$1.flags[flag] = defaults[flag];
    });
    this.addActionListeners();
    this.updateClasses();
    this.updateAriaAttrs();
    this.updateCustomValidity();
};
Field.prototype.setFlags = function setFlags (flags) {
        var this$1 = this;

    var negated = {
        pristine: 'dirty',
        dirty: 'pristine',
        valid: 'invalid',
        invalid: 'valid',
        touched: 'untouched',
        untouched: 'touched'
    };
    Object.keys(flags).forEach(function (flag) {
        this$1.flags[flag] = flags[flag];
        if (negated[flag] && flags[negated[flag]] === undefined) {
            this$1.flags[negated[flag]] = !flags[flag];
        }
    });
    if (flags.untouched !== undefined || flags.touched !== undefined || flags.dirty !== undefined || flags.pristine !== undefined) {
        this.addActionListeners();
    }
    this.updateClasses();
    this.updateAriaAttrs();
    this.updateCustomValidity();
};
Field.prototype.updateDependencies = function updateDependencies () {
        var this$1 = this;

    this.dependencies.forEach(function (d) { return d.field.destroy(); });
    this.dependencies = [];
    var fields = Object.keys(this.rules).reduce(function (prev, r) {
        if (Validator.isTargetRule(r)) {
            var selector = this$1.rules[r][0];
            if (r === 'confirmed' && !selector) {
                selector = (this$1.name) + "_confirmation";
            }
            prev.push({
                selector: selector,
                name: r
            });
        }
        return prev;
    }, []);
    if (!fields.length || !this.vm || !this.vm.$el) 
        { return; }
    fields.forEach(function (ref) {
            var selector = ref.selector;
            var name = ref.name;

        var el = null;
        if (selector[0] === '$') {
            var ref$1 = this$1.vm.$refs[selector.slice(1)];
            el = Array.isArray(ref$1) ? ref$1[0] : ref$1;
        } else {
            try {
                el = this$1.vm.$el.querySelector(selector);
            } catch (err) {
                el = null;
            }
        }
        if (!el) {
            try {
                el = this$1.vm.$el.querySelector(("input[name=\"" + selector + "\"]"));
            } catch (err) {
                el = null;
            }
        }
        if (!el) {
            return;
        }
        var options = {
            vm: this$1.vm,
            classes: this$1.classes,
            classNames: this$1.classNames,
            delay: this$1.delay,
            scope: this$1.scope,
            events: this$1.events.join('|'),
            initial: this$1.initial,
            targetOf: this$1.id
        };
        if (isCallable(el.$watch)) {
            options.component = el;
            options.el = el.$el;
            options.getter = Generator.resolveGetter(el.$el, {
                child: el
            });
        } else {
            options.el = el;
            options.getter = Generator.resolveGetter(el, {});
        }
        this$1.dependencies.push({
            name: name,
            field: new Field(options)
        });
    });
};
Field.prototype.unwatch = function unwatch (tag) {
        if ( tag === void 0 ) tag = null;

    if (!tag) {
        this.watchers.forEach(function (w) { return w.unwatch(); });
        this.watchers = [];
        return;
    }
    this.watchers.filter(function (w) { return tag.test(w.tag); }).forEach(function (w) { return w.unwatch(); });
    this.watchers = this.watchers.filter(function (w) { return !tag.test(w.tag); });
};
Field.prototype.updateClasses = function updateClasses () {
    if (!this.classes || this.isDisabled) 
        { return; }
    toggleClass(this.el, this.classNames.dirty, this.flags.dirty);
    toggleClass(this.el, this.classNames.pristine, this.flags.pristine);
    toggleClass(this.el, this.classNames.touched, this.flags.touched);
    toggleClass(this.el, this.classNames.untouched, this.flags.untouched);
    if (!isNullOrUndefined(this.flags.valid) && this.flags.validated) {
        toggleClass(this.el, this.classNames.valid, this.flags.valid);
    }
    if (!isNullOrUndefined(this.flags.invalid) && this.flags.validated) {
        toggleClass(this.el, this.classNames.invalid, this.flags.invalid);
    }
};
Field.prototype.addActionListeners = function addActionListeners () {
        var this$1 = this;

    this.unwatch(/class/);
    if (!this.el) 
        { return; }
    var onBlur = function () {
        this$1.flags.touched = true;
        this$1.flags.untouched = false;
        if (this$1.classes) {
            toggleClass(this$1.el, this$1.classNames.touched, true);
            toggleClass(this$1.el, this$1.classNames.untouched, false);
        }
        this$1.unwatch(/^class_blur$/);
    };
    var inputEvent = isTextInput(this.el) ? 'input' : 'change';
    var onInput = function () {
        this$1.flags.dirty = true;
        this$1.flags.pristine = false;
        if (this$1.classes) {
            toggleClass(this$1.el, this$1.classNames.pristine, false);
            toggleClass(this$1.el, this$1.classNames.dirty, true);
        }
        this$1.unwatch(/^class_input$/);
    };
    if (this.component && isCallable(this.component.$once)) {
        this.component.$once('input', onInput);
        this.component.$once('blur', onBlur);
        this.watchers.push({
            tag: 'class_input',
            unwatch: function () {
                this$1.component.$off('input', onInput);
            }
        });
        this.watchers.push({
            tag: 'class_blur',
            unwatch: function () {
                this$1.component.$off('blur', onBlur);
            }
        });
        return;
    }
    if (!this.el) 
        { return; }
    addEventListener(this.el, inputEvent, onInput);
    var blurEvent = ['radio','checkbox'].indexOf(this.el.type) === -1 ? 'blur' : 'click';
    addEventListener(this.el, blurEvent, onBlur);
    this.watchers.push({
        tag: 'class_input',
        unwatch: function () {
            this$1.el.removeEventListener(inputEvent, onInput);
        }
    });
    this.watchers.push({
        tag: 'class_blur',
        unwatch: function () {
            this$1.el.removeEventListener(blurEvent, onBlur);
        }
    });
};
Field.prototype.checkValueChanged = function checkValueChanged () {
    if (this.initialValue === null && this.value === '' && isTextInput(this.el)) {
        return false;
    }
    return this.value !== this.initialValue;
};
Field.prototype.addValueListeners = function addValueListeners () {
        var this$1 = this;

    this.unwatch(/^input_.+/);
    if (!this.listen || !this.el) 
        { return; }
    var fn = this.targetOf ? function () {
        this$1.flags.changed = this$1.checkValueChanged();
        this$1.validator.validate(("#" + (this$1.targetOf)));
    } : function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

        if (args.length === 0 || isCallable(Event) && args[0] instanceof Event || args[0] && args[0].srcElement) {
            args[0] = this$1.value;
        }
        this$1.flags.changed = this$1.checkValueChanged();
        this$1.validator.validate(("#" + (this$1.id)), args[0]);
    };
    var inputEvent = isTextInput(this.el) ? 'input' : 'change';
    inputEvent = this.model && this.model.lazy ? 'change' : inputEvent;
    var events = !this.events.length || isTextInput(this.el) ? this.events : ['change'];
    if (this.model && this.model.expression && events.indexOf(inputEvent) !== -1) {
        var debouncedFn = debounce(fn, this.delay[inputEvent]);
        var unwatch = this.vm.$watch(this.model.expression, function () {
                var args = [], len = arguments.length;
                while ( len-- ) args[ len ] = arguments[ len ];

            this$1.flags.pending = true;
            debouncedFn.apply(void 0, args);
        });
        this.watchers.push({
            tag: 'input_model',
            unwatch: unwatch
        });
        events = events.filter(function (e) { return e !== inputEvent; });
    }
    events.forEach(function (e) {
        var debouncedFn = debounce(fn, this$1.delay[e]);
        var validate = function () {
                var args = [], len = arguments.length;
                while ( len-- ) args[ len ] = arguments[ len ];

            this$1.flags.pending = true;
            debouncedFn.apply(void 0, args);
        };
        this$1._addComponentEventListener(e, validate);
        this$1._addHTMLEventListener(e, validate);
    });
};
Field.prototype._addComponentEventListener = function _addComponentEventListener (evt, validate) {
        var this$1 = this;

    if (!this.component) 
        { return; }
    this.component.$on(evt, validate);
    this.watchers.push({
        tag: 'input_vue',
        unwatch: function () {
            this$1.component.$off(evt, validate);
        }
    });
};
Field.prototype._addHTMLEventListener = function _addHTMLEventListener (evt, validate) {
        var this$1 = this;

    if (!this.el || this.component) 
        { return; }
    addEventListener(this.el, evt, validate);
    this.watchers.push({
        tag: 'input_native',
        unwatch: function () {
            this$1.el.removeEventListener(evt, validate);
        }
    });
    if (~['radio','checkbox'].indexOf(this.el.type)) {
        var els = document.querySelectorAll(("input[name=\"" + (this.el.name) + "\"]"));
        toArray(els).forEach(function (el) {
            if (getDataAttribute(el, 'id') && el !== this$1.el) {
                return;
            }
            addEventListener(el, evt, validate);
            this$1.watchers.push({
                tag: 'input_native',
                unwatch: function () {
                    el.removeEventListener(evt, validate);
                }
            });
        });
    }
};
Field.prototype.updateAriaAttrs = function updateAriaAttrs () {
    if (!this.aria || !this.el || !isCallable(this.el.setAttribute)) 
        { return; }
    this.el.setAttribute('aria-required', this.isRequired ? 'true' : 'false');
    this.el.setAttribute('aria-invalid', this.flags.invalid ? 'true' : 'false');
};
Field.prototype.updateCustomValidity = function updateCustomValidity () {
    if (!this.validity || !this.el || !isCallable(this.el.setCustomValidity)) 
        { return; }
    this.el.setCustomValidity(this.flags.valid ? '' : this.validator.errors.firstById(this.id) || '');
};
Field.prototype.destroy = function destroy () {
    this.unwatch();
    this.dependencies.forEach(function (d) { return d.field.destroy(); });
    this.dependencies = [];
};

Object.defineProperties( Field.prototype, prototypeAccessors$2 );

var FieldBag = function FieldBag() {
    this.items = [];
};

var prototypeAccessors$3 = { length: { configurable: true } };
FieldBag.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function () {
        var this$1 = this;

    var index = 0;
    return {
        next: function () { return ({
            value: this$1.items[index++],
            done: index > this$1.items.length
        }); }
    };
};
prototypeAccessors$3.length.get = function () {
    return this.items.length;
};
FieldBag.prototype.find = function find$1 (matcher) {
    return find(this.items, function (item) { return item.matches(matcher); });
};
FieldBag.prototype.filter = function filter (matcher) {
    if (Array.isArray(matcher)) {
        return this.items.filter(function (item) { return matcher.some(function (m) { return item.matches(m); }); });
    }
    return this.items.filter(function (item) { return item.matches(matcher); });
};
FieldBag.prototype.map = function map (mapper) {
    return this.items.map(mapper);
};
FieldBag.prototype.remove = function remove (matcher) {
    var item = null;
    if (matcher instanceof Field) {
        item = matcher;
    } else {
        item = this.find(matcher);
    }
    if (!item) 
        { return null; }
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);
    return item;
};
FieldBag.prototype.push = function push (item) {
    if (!(item instanceof Field)) {
        throw createError('FieldBag only accepts instances of Field that has an id defined.');
    }
    if (!item.id) {
        throw createError('Field id must be defined.');
    }
    if (this.find({
        id: item.id
    })) {
        throw createError(("Field with id " + (item.id) + " is already added."));
    }
    this.items.push(item);
};

Object.defineProperties( FieldBag.prototype, prototypeAccessors$3 );

var RULES = {};
var STRICT_MODE = true;
var TARGET_RULES = ['confirmed','after','before'];
var Validator = function Validator(validations, options) {
    var this$1 = this;
    if ( options === void 0 ) options = {
    fastExit: true
};

    this.strict = STRICT_MODE;
    this.errors = new ErrorBag();
    this.fields = new FieldBag();
    this.flags = {};
    this._createFields(validations);
    this.paused = false;
    this.fastExit = options.fastExit || false;
    this.ownerId = options.vm && options.vm._uid;
    this._localeListener = (function () {
        this$1.errors.regenerate();
    });
    if (this._vm) {
        this._vm.$on('localeChanged', this._localeListener);
    }
};

var prototypeAccessors$4 = { dictionary: { configurable: true },_vm: { configurable: true },locale: { configurable: true },rules: { configurable: true } };
var staticAccessors$1 = { dictionary: { configurable: true },locale: { configurable: true },rules: { configurable: true } };
prototypeAccessors$4.dictionary.get = function () {
    return Config.dependency('dictionary');
};
prototypeAccessors$4._vm.get = function () {
    return Config.dependency('vm');
};
staticAccessors$1.dictionary.get = function () {
    return Config.dependency('dictionary');
};
prototypeAccessors$4.locale.get = function () {
    return this.dictionary.locale;
};
prototypeAccessors$4.locale.set = function (value) {
    Validator.locale = value;
};
staticAccessors$1.locale.get = function () {
    return Validator.dictionary.locale;
};
staticAccessors$1.locale.set = function (value) {
    var hasChanged = value !== Validator.dictionary.locale;
    Validator.dictionary.locale = value;
    if (hasChanged && Config.dependency('vm')) {
        Config.dependency('vm').$emit('localeChanged');
    }
};
prototypeAccessors$4.rules.get = function () {
    return RULES;
};
staticAccessors$1.rules.get = function () {
    return RULES;
};
Validator.create = function create (validations, options) {
    return new Validator(validations, options);
};
Validator.extend = function extend (name, validator, options) {
        if ( options === void 0 ) options = {};

    Validator._guardExtend(name, validator);
    Validator._merge(name, validator);
    if (options && options.hasTarget) {
        TARGET_RULES.push(name);
    }
};
Validator.remove = function remove (name) {
    delete RULES[name];
    var idx = TARGET_RULES.indexOf(name);
    if (idx === -1) 
        { return; }
    TARGET_RULES.splice(idx, 1);
};
Validator.isTargetRule = function isTargetRule (name) {
    return TARGET_RULES.indexOf(name) !== -1;
};
Validator.setStrictMode = function setStrictMode (strictMode) {
        if ( strictMode === void 0 ) strictMode = true;

    STRICT_MODE = strictMode;
};
Validator.prototype.localize = function localize (lang, dictionary) {
    Validator.localize(lang, dictionary);
};
Validator.localize = function localize (lang, dictionary) {
        var obj;

    if (isObject(lang)) {
        Validator.dictionary.merge(lang);
        return;
    }
    if (dictionary) {
        var locale = lang || dictionary.name;
        dictionary = assign({}, dictionary);
        Validator.dictionary.merge(( obj = {}, obj[locale] = dictionary, obj ));
    }
    if (lang) {
        Validator.locale = lang;
    }
};
Validator.prototype.attach = function attach (field) {
    if (arguments.length > 1) {
        warn('This signature of the attach method has been deprecated, please consult the docs.');
        field = assign({}, {
            name: arguments[0],
            rules: arguments[1]
        }, arguments[2] || {
            vm: {
                $validator: this
            }
        });
    }
    var value = field.initialValue;
    if (!(field instanceof Field)) {
        field = new Field(field);
    }
    this.fields.push(field);
    if (field.initial) {
        this.validate(("#" + (field.id)), value || field.value);
    } else {
        this._validate(field, value || field.value, true).then(function (result) {
            field.flags.valid = result.valid;
            field.flags.invalid = !result.valid;
        });
    }
    this._addFlag(field, field.scope);
    return field;
};
Validator.prototype.flag = function flag (name, flags) {
    var field = this._resolveField(name);
    if (!field || !flags) {
        return;
    }
    field.setFlags(flags);
};
Validator.prototype.detach = function detach (name, scope) {
    var field = name instanceof Field ? name : this._resolveField(name, scope);
    if (!field) 
        { return; }
    field.destroy();
    this.errors.remove(field.name, field.scope, field.id);
    this.fields.remove(field);
    var flags = this.flags;
    if (!isNullOrUndefined(field.scope) && flags[("$" + (field.scope))]) {
        delete flags[("$" + (field.scope))][field.name];
    } else if (isNullOrUndefined(field.scope)) {
        delete flags[field.name];
    }
    this.flags = assign({}, flags);
};
Validator.prototype.extend = function extend (name, validator, options) {
        if ( options === void 0 ) options = {};

    Validator.extend(name, validator, options);
};
Validator.prototype.reset = function reset (matcher) {
    return new Promise((function ($return, $error) {
        return this._vm.$nextTick().then((function ($await_1) {
            try {
                return this._vm.$nextTick().then((function ($await_2) {
                        var this$1 = this;

                    try {
                        this.fields.filter(matcher).forEach(function (field) {
                            field.reset();
                            this$1.errors.remove(field.name, field.scope, field.id);
                        });
                        return $return();
                    } catch ($boundEx) {
                        return $error($boundEx);
                    }
                }).bind(this), $error);
            } catch ($boundEx) {
                return $error($boundEx);
            }
        }).bind(this), $error);
    }).bind(this));
};
Validator.prototype.update = function update (id, ref) {
        var scope = ref.scope;

    var field = this._resolveField(("#" + id));
    if (!field) 
        { return; }
    this.errors.update(id, {
        scope: scope
    });
    if (!isNullOrUndefined(field.scope) && this.flags[("$" + (field.scope))]) {
        delete this.flags[("$" + (field.scope))][field.name];
    } else if (isNullOrUndefined(field.scope)) {
        delete this.flags[field.name];
    }
    this._addFlag(field, scope);
};
Validator.prototype.remove = function remove (name) {
    Validator.remove(name);
};
Validator.prototype.validate = function validate (name, value, scope, silent) {
        if ( scope === void 0 ) scope = null;
        if ( silent === void 0 ) silent = false;

    var $args = arguments;
    return new Promise((function ($return, $error) {
        var matched, field, result;
        if (this.paused) 
            { return $return(Promise.resolve(true)); }
        if ($args.length === 0) {
            return $return(this.validateScopes());
        }
        if ($args.length === 1 && $args[0] === '*') {
            return $return(this.validateAll());
        }
        if ($args.length === 1 && typeof $args[0] === 'string' && /^(.+)\.\*$/.test($args[0])) {
            matched = $args[0].match(/^(.+)\.\*$/)[1];
            return $return(this.validateAll(matched));
        }
        field = this._resolveField(name, scope);
        if (!field) {
            return $return(this._handleFieldNotFound(name, scope));
        }
        if (!silent) 
            { field.flags.pending = true; }
        if ($args.length === 1) {
            value = field.value;
        }
        if (field.isDisabled) {
            return $return(true);
        }
        return this._validate(field, value).then((function ($await_3) {
            try {
                result = $await_3;
                if (!silent) {
                    this._handleValidationResults([result]);
                }
                return $return(result.valid);
            } catch ($boundEx) {
                return $error($boundEx);
            }
        }).bind(this), $error);
    }).bind(this));
};
Validator.prototype.pause = function pause () {
    this.paused = true;
    return this;
};
Validator.prototype.resume = function resume () {
    this.paused = false;
    return this;
};
Validator.prototype.validateAll = function validateAll (values, scope, silent) {
        if ( scope === void 0 ) scope = null;
        if ( silent === void 0 ) silent = false;

    return new Promise((function ($return, $error) {
            var this$1 = this;

        var results;
        var matcher, providedValues;
        if (this.paused) 
            { return $return(true); }
        matcher = null;
        providedValues = false;
        if (typeof values === 'string') {
            matcher = {
                scope: values
            };
        } else if (isObject(values)) {
            matcher = Object.keys(values).map(function (key) { return ({
                name: key,
                scope: scope
            }); });
            providedValues = true;
        } else if (Array.isArray(values)) {
            matcher = values.map(function (key) { return ({
                name: key,
                scope: scope
            }); });
        } else {
            matcher = {
                scope: scope
            };
        }
        return Promise.all(this.fields.filter(matcher).map(function (field) { return this$1._validate(field, providedValues ? values[field.name] : field.value); })).then((function ($await_4) {
            try {
                results = $await_4;
                if (!silent) {
                    this._handleValidationResults(results);
                }
                return $return(results.every(function (t) { return t.valid; }));
            } catch ($boundEx) {
                return $error($boundEx);
            }
        }).bind(this), $error);
    }).bind(this));
};
Validator.prototype.validateScopes = function validateScopes (silent) {
        if ( silent === void 0 ) silent = false;

    return new Promise((function ($return, $error) {
            var this$1 = this;

        var results;
        if (this.paused) 
            { return $return(true); }
        return Promise.all(this.fields.map(function (field) { return this$1._validate(field, field.value); })).then((function ($await_5) {
            try {
                results = $await_5;
                if (!silent) {
                    this._handleValidationResults(results);
                }
                return $return(results.every(function (t) { return t.valid; }));
            } catch ($boundEx) {
                return $error($boundEx);
            }
        }).bind(this), $error);
    }).bind(this));
};
Validator.prototype.destroy = function destroy () {
    this._vm.$off('localeChanged', this._localeListener);
};
Validator.prototype._createFields = function _createFields (validations) {
        var this$1 = this;

    if (!validations) 
        { return; }
    Object.keys(validations).forEach(function (field) {
        var options = assign({}, {
            name: field,
            rules: validations[field]
        });
        this$1.attach(options);
    });
};
Validator.prototype._getDateFormat = function _getDateFormat (validations) {
    var format = null;
    if (validations.date_format && Array.isArray(validations.date_format)) {
        format = validations.date_format[0];
    }
    return format || this.dictionary.getDateFormat(this.locale);
};
Validator.prototype._isADateRule = function _isADateRule (rule) {
    return !(!(~['after','before','date_between','date_format'].indexOf(rule)));
};
Validator.prototype._formatErrorMessage = function _formatErrorMessage (field, rule, data, targetName) {
        if ( data === void 0 ) data = {};
        if ( targetName === void 0 ) targetName = null;

    var name = this._getFieldDisplayName(field);
    var params = this._getLocalizedParams(rule, targetName);
    return this.dictionary.getFieldMessage(this.locale, field.name, rule.name, [name,
        params,data]);
};
Validator.prototype._getLocalizedParams = function _getLocalizedParams (rule, targetName) {
        if ( targetName === void 0 ) targetName = null;

    if (~TARGET_RULES.indexOf(rule.name) && rule.params && rule.params[0]) {
        var localizedName = targetName || this.dictionary.getAttribute(this.locale, rule.params[0], rule.params[0]);
        return [localizedName].concat(rule.params.slice(1));
    }
    return rule.params;
};
Validator.prototype._getFieldDisplayName = function _getFieldDisplayName (field) {
    return field.alias || this.dictionary.getAttribute(this.locale, field.name, field.name);
};
Validator.prototype._addFlag = function _addFlag (field, scope) {
        var obj, obj$1, obj$2;

        if ( scope === void 0 ) scope = null;
    if (isNullOrUndefined(scope)) {
        this.flags = assign({}, this.flags, ( obj = {}, obj[("" + (field.name))] = field.flags, obj ));
        return;
    }
    var scopeObj = assign({}, this.flags[("$" + scope)] || {}, ( obj$1 = {}, obj$1[("" + (field.name))] = field.flags, obj$1 ));
    this.flags = assign({}, this.flags, ( obj$2 = {}, obj$2[("$" + scope)] = scopeObj, obj$2 ));
};
Validator.prototype._test = function _test (field, value, rule) {
        var this$1 = this;

    var validator = RULES[rule.name];
    var params = Array.isArray(rule.params) ? toArray(rule.params) : [];
    var targetName = null;
    if (!validator || typeof validator !== 'function') {
        throw createError(("No such validator '" + (rule.name) + "' exists."));
    }
    if (TARGET_RULES.indexOf(rule.name) !== -1) {
        var target = find(field.dependencies, function (d) { return d.name === rule.name; });
        if (target) {
            targetName = target.field.alias;
            params = [target.field.value].concat(params.slice(1));
        }
    } else if (rule.name === 'required' && field.rejectsFalse) {
        params = params.length ? params : [true];
    }
    if (this._isADateRule(rule.name)) {
        var dateFormat = this._getDateFormat(field.rules);
        if (rule.name !== 'date_format') {
            params.push(dateFormat);
        }
    }
    var result = validator(value, params);
    if (isCallable(result.then)) {
        return result.then(function (values) {
            var allValid = true;
            var data = {};
            if (Array.isArray(values)) {
                allValid = values.every(function (t) { return isObject(t) ? t.valid : t; });
            } else {
                allValid = isObject(values) ? values.valid : values;
                data = values.data;
            }
            return {
                valid: allValid,
                errors: allValid ? [] : [this$1._createFieldError(field, rule, data, targetName)]
            };
        });
    }
    if (!isObject(result)) {
        result = {
            valid: result,
            data: {}
        };
    }
    return {
        valid: result.valid,
        errors: result.valid ? [] : [this._createFieldError(field, rule, result.data, targetName)]
    };
};
Validator._merge = function _merge (name, validator) {
    if (isCallable(validator)) {
        RULES[name] = validator;
        return;
    }
    RULES[name] = validator.validate;
    if (validator.getMessage) {
        Validator.dictionary.setMessage(this.locale, name, validator.getMessage);
    }
};
Validator._guardExtend = function _guardExtend (name, validator) {
    if (isCallable(validator)) {
        return;
    }
    if (!isCallable(validator.validate)) {
        throw createError(("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method."));
    }
};
Validator.prototype._createFieldError = function _createFieldError (field, rule, data, targetName) {
        var this$1 = this;

    return {
        id: field.id,
        field: field.name,
        msg: this._formatErrorMessage(field, rule, data, targetName),
        rule: rule.name,
        scope: field.scope,
        regenerate: function () { return this$1._formatErrorMessage(field, rule, data, targetName); }
    };
};
Validator.prototype._resolveField = function _resolveField (name, scope) {
    if (!isNullOrUndefined(scope)) {
        return this.fields.find({
            name: name,
            scope: scope
        });
    }
    if (name[0] === '#') {
        return this.fields.find({
            id: name.slice(1)
        });
    }
    if (name.indexOf('.') > -1) {
        var ref = name.split('.');
            var fieldScope = ref[0];
            var fieldName = ref.slice(1);
        var field = this.fields.find({
            name: fieldName.join('.'),
            scope: fieldScope
        });
        if (field) {
            return field;
        }
    }
    return this.fields.find({
        name: name,
        scope: null
    });
};
Validator.prototype._handleFieldNotFound = function _handleFieldNotFound (name, scope) {
    if (!this.strict) 
        { return true; }
    var fullName = isNullOrUndefined(scope) ? name : ("" + (!isNullOrUndefined(scope) ? scope + '.' : '') + name);
    throw createError(("Validating a non-existent field: \"" + fullName + "\". Use \"attach()\" first."));
};
Validator.prototype._handleValidationResults = function _handleValidationResults (results) {
    var matchers = results.map(function (result) { return ({
        id: result.id
    }); });
    this.errors.removeById(matchers.map(function (m) { return m.id; }));
    var allErrors = results.reduce(function (prev, curr) {
        prev.push.apply(prev, curr.errors);
        return prev;
    }, []);
    this.errors.add(allErrors);
    this.fields.filter(matchers).forEach(function (field) {
        var result = find(results, function (r) { return r.id === field.id; });
        field.setFlags({
            pending: false,
            valid: result.valid,
            validated: true
        });
    });
};
Validator.prototype._validate = function _validate (field, value) {
    return new Promise((function ($return, $error) {
            var this$1 = this;

        var promises, errors;
        var isExitEarly;
        if (!field.isRequired && (isNullOrUndefined(value) || value === '')) {
            return $return({
                valid: true,
                id: field.id,
                errors: []
            });
        }
        promises = [];
        errors = [];
        isExitEarly = false;
        Object.keys(field.rules).some(function (rule) {
            var result = this$1._test(field, value, {
                name: rule,
                params: field.rules[rule]
            });
            if (isCallable(result.then)) {
                promises.push(result);
            } else if (this$1.fastExit && !result.valid) {
                errors.push.apply(errors, result.errors);
                isExitEarly = true;
            } else {
                promises.push(new Promise(function (resolve) { return resolve(result); }));
            }
            return isExitEarly;
        });
        if (isExitEarly) {
            return $return({
                valid: false,
                errors: errors,
                id: field.id
            });
        }
        return Promise.all(promises).then((function ($await_6) {
            try {
                return $return($await_6.reduce(function (prev, v) {
                        var ref;

                    if (!v.valid) {
                        (ref = prev.errors).push.apply(ref, v.errors);
                    }
                    prev.valid = prev.valid && v.valid;
                    return prev;
                }, {
                    valid: true,
                    errors: errors,
                    id: field.id
                }));
            } catch ($boundEx) {
                return $error($boundEx);
            }
        }).bind(this), $error);
    }).bind(this));
};

Object.defineProperties( Validator.prototype, prototypeAccessors$4 );
Object.defineProperties( Validator, staticAccessors$1 );

var requestsValidator = function (injections) {
    if (isObject(injections) && injections.$validator) {
        return true;
    }
    return false;
};
var createValidator = function (vm, options) { return new Validator(null, {
    vm: vm,
    fastExit: options.fastExit
}); };
var mixin = {
    provide: function provide() {
        if (this.$validator && !isBuiltInComponent(this.$vnode)) {
            return {
                $validator: this.$validator
            };
        }
        return {};
    },
    beforeCreate: function beforeCreate() {
        if (isBuiltInComponent(this.$vnode)) {
            return;
        }
        if (!this.$parent) {
            Config.merge(this.$options.$_veeValidate || {});
        }
        var options = Config.resolve(this);
        var Vue = this.$options._base;
        if (this.$options.$validates) {
            warn('The ctor $validates option has been deprecated please set the $_veeValidate.validator option to "new" instead');
            this.$validator = createValidator(this, options);
        }
        if (!this.$parent || this.$options.$_veeValidate && /new/.test(this.$options.$_veeValidate.validator)) {
            this.$validator = createValidator(this, options);
        }
        var requested = requestsValidator(this.$options.inject);
        if (!this.$validator && options.inject && !requested) {
            this.$validator = createValidator(this, options);
        }
        if (!requested && !this.$validator) {
            return;
        }
        if (!requested && this.$validator) {
            Vue.util.defineReactive(this.$validator, 'errors', this.$validator.errors);
            Vue.util.defineReactive(this.$validator, 'flags', this.$validator.flags);
        }
        if (!this.$options.computed) {
            this.$options.computed = {};
        }
        this.$options.computed[options.errorBagName || 'errors'] = function errorBagGetter() {
            return this.$validator.errors;
        };
        this.$options.computed[options.fieldsBagName || 'fields'] = function fieldBagGetter() {
            return this.$validator.flags;
        };
    },
    beforeDestroy: function beforeDestroy() {
        if (isBuiltInComponent(this.$vnode)) 
            { return; }
        if (this.$validator && this.$validator.ownerId === this._uid) {
            this.$validator.pause();
            this.$validator.destroy();
        }
    }
}

var findField = function (el, context) {
    if (!context || !context.$validator) {
        return null;
    }
    return context.$validator.fields.find({
        id: getDataAttribute(el, 'id')
    });
};
var directive = {
    bind: function bind(el, binding, vnode) {
        var validator = vnode.context.$validator;
        if (!validator) {
            warn("No validator instance is present on vm, did you forget to inject '$validator'?");
            return;
        }
        var fieldOptions = Generator.generate(el, binding, vnode);
        validator.attach(fieldOptions);
    },
    inserted: function (el, binding, vnode) {
        var field = findField(el, vnode.context);
        var scope = Generator.resolveScope(el, binding, vnode);
        if (!field || scope === field.scope) 
            { return; }
        field.update({
            scope: scope
        });
        field.updated = false;
    },
    update: function (el, binding, vnode) {
        var field = findField(el, vnode.context);
        if (!field || field.updated && isEqual(binding.value, binding.oldValue)) 
            { return; }
        var scope = Generator.resolveScope(el, binding, vnode);
        var rules = Generator.resolveRules(el, binding);
        field.update({
            scope: scope,
            rules: rules
        });
    },
    unbind: function unbind(el, binding, ref) {
        var context = ref.context;

        var field = findField(el, context);
        if (!field) 
            { return; }
        context.$validator.detach(field);
    }
}

var Vue;
function install(_Vue, options) {
    if ( options === void 0 ) options = {};

    if (Vue && _Vue === Vue) {
        if (false) {
            warn('already installed, Vue.use(VeeValidate) should only be called once.');
        }
        return;
    }
    detectPassiveSupport();
    Vue = _Vue;
    Config.register('vm', new Vue());
    Config.merge(options);
    var ref = Config.current;
    var dictionary = ref.dictionary;
    var i18n = ref.i18n;
    if (dictionary) {
        Validator.localize(dictionary);
    }
    if (i18n && i18n._vm && isCallable(i18n._vm.$watch)) {
        i18n._vm.$watch('locale', function () {
            Validator.regenerate();
        });
    }
    if (!i18n && options.locale) {
        Validator.localize(options.locale);
    }
    Validator.setStrictMode(Config.current.strict);
    Vue.mixin(mixin);
    Vue.directive('validate', directive);
}

var formatFileSize = function (size) {
    var units = ['Byte','KB','MB','GB','TB','PB','EB','ZB','YB'];
    var threshold = 1024;
    size = Number(size) * threshold;
    var i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(threshold));
    return (((size / Math.pow(threshold, i)).toFixed(2) * 1) + " " + (units[i]));
};
var isDefinedGlobally = function () { return typeof VeeValidate !== 'undefined'; };

var obj;
var messages = {
    _default: function (field) { return ("The " + field + " value is not valid."); },
    after: function (field, ref) {
        var target = ref[0];
        var inclusion = ref[1];

        return ("The " + field + " must be after " + (inclusion ? 'or equal to ' : '') + target + ".");
},
    alpha_dash: function (field) { return ("The " + field + " field may contain alpha-numeric characters as well as dashes and underscores."); },
    alpha_num: function (field) { return ("The " + field + " field may only contain alpha-numeric characters."); },
    alpha_spaces: function (field) { return ("The " + field + " field may only contain alphabetic characters as well as spaces."); },
    alpha: function (field) { return ("The " + field + " field may only contain alphabetic characters."); },
    before: function (field, ref) {
        var target = ref[0];
        var inclusion = ref[1];

        return ("The " + field + " must be before " + (inclusion ? 'or equal to ' : '') + target + ".");
},
    between: function (field, ref) {
        var min = ref[0];
        var max = ref[1];

        return ("The " + field + " field must be between " + min + " and " + max + ".");
},
    confirmed: function (field) { return ("The " + field + " confirmation does not match."); },
    credit_card: function (field) { return ("The " + field + " field is invalid."); },
    date_between: function (field, ref) {
        var min = ref[0];
        var max = ref[1];

        return ("The " + field + " must be between " + min + " and " + max + ".");
},
    date_format: function (field, ref) {
        var format = ref[0];

        return ("The " + field + " must be in the format " + format + ".");
},
    decimal: function (field, ref) {
        if ( ref === void 0 ) ref = [];
        var decimals = ref[0]; if ( decimals === void 0 ) decimals = '*';

        return ("The " + field + " field must be numeric and may contain " + (!decimals || decimals === '*' ? '' : decimals) + " decimal points.");
},
    digits: function (field, ref) {
        var length = ref[0];

        return ("The " + field + " field must be numeric and exactly contain " + length + " digits.");
},
    dimensions: function (field, ref) {
        var width = ref[0];
        var height = ref[1];

        return ("The " + field + " field must be " + width + " pixels by " + height + " pixels.");
},
    email: function (field) { return ("The " + field + " field must be a valid email."); },
    ext: function (field) { return ("The " + field + " field must be a valid file."); },
    image: function (field) { return ("The " + field + " field must be an image."); },
    in: function (field) { return ("The " + field + " field must be a valid value."); },
    integer: function (field) { return ("The " + field + " field must be an integer."); },
    ip: function (field) { return ("The " + field + " field must be a valid ip address."); },
    length: function (field, ref) {
        var length = ref[0];
        var max = ref[1];

        if (max) {
            return ("The " + field + " length must be between " + length + " and " + max + ".");
        }
        return ("The " + field + " length must be " + length + ".");
    },
    max: function (field, ref) {
        var length = ref[0];

        return ("The " + field + " field may not be greater than " + length + " characters.");
},
    max_value: function (field, ref) {
        var max = ref[0];

        return ("The " + field + " field must be " + max + " or less.");
},
    mimes: function (field) { return ("The " + field + " field must have a valid file type."); },
    min: function (field, ref) {
        var length = ref[0];

        return ("The " + field + " field must be at least " + length + " characters.");
},
    min_value: function (field, ref) {
        var min = ref[0];

        return ("The " + field + " field must be " + min + " or more.");
},
    not_in: function (field) { return ("The " + field + " field must be a valid value."); },
    numeric: function (field) { return ("The " + field + " field may only contain numeric characters."); },
    regex: function (field) { return ("The " + field + " field format is invalid."); },
    required: function (field) { return ("The " + field + " field is required."); },
    size: function (field, ref) {
        var size = ref[0];

        return ("The " + field + " size must be less than " + (formatFileSize(size)) + ".");
},
    url: function (field) { return ("The " + field + " field is not a valid URL."); }
};
var locale = {
    name: 'en',
    messages: messages,
    attributes: {}
};
if (isDefinedGlobally()) {
    VeeValidate.Validator.localize(( obj = {}, obj[locale.name] = locale, obj ));
}

function use(plugin, options) {
    if ( options === void 0 ) options = {};

    if (!isCallable(plugin)) {
        return warn('The plugin must be a callable function');
    }
    plugin({
        Validator: Validator,
        ErrorBag: ErrorBag,
        Rules: Validator.rules
    }, options);
}

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
    dateTimeDelimeter: /[T ]/,
    plainTime: /:/,
    YY: /^(\d{2})$/,
    YYY: [/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],
    YYYY: /^(\d{4})/,
    YYYYY: [/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-])(\d{2})$/,
    timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function toDate(argument, dirtyOptions) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    if (argument === null) {
        return new Date(NaN);
    }
    var options = dirtyOptions || {};
    var additionalDigits = options.additionalDigits === undefined ? DEFAULT_ADDITIONAL_DIGITS : Number(options.additionalDigits);
    if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
        throw new RangeError('additionalDigits must be 0, 1 or 2');
    }
    if (argument instanceof Date) {
        return new Date(argument.getTime());
    } else if (typeof argument !== 'string') {
        return new Date(argument);
    }
    var dateStrings = splitDateString(argument);
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    var year = parseYearResult.year;
    var restDateString = parseYearResult.restDateString;
    var date = parseDate(restDateString, year);
    if (date) {
        var timestamp = date.getTime();
        var time = 0;
        var offset;
        if (dateStrings.time) {
            time = parseTime(dateStrings.time);
        }
        if (dateStrings.timezone) {
            offset = parseTimezone(dateStrings.timezone);
        } else {
            offset = new Date(timestamp + time).getTimezoneOffset();
            offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset();
        }
        return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE);
    } else {
        return new Date(argument);
    }
}

function splitDateString(dateString) {
    var dateStrings = {};
    var array = dateString.split(patterns.dateTimeDelimeter);
    var timeString;
    if (patterns.plainTime.test(array[0])) {
        dateStrings.date = null;
        timeString = array[0];
    } else {
        dateStrings.date = array[0];
        timeString = array[1];
    }
    if (timeString) {
        var token = patterns.timezone.exec(timeString);
        if (token) {
            dateStrings.time = timeString.replace(token[1], '');
            dateStrings.timezone = token[1];
        } else {
            dateStrings.time = timeString;
        }
    }
    return dateStrings;
}

function parseYear(dateString, additionalDigits) {
    var patternYYY = patterns.YYY[additionalDigits];
    var patternYYYYY = patterns.YYYYY[additionalDigits];
    var token;
    token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
    if (token) {
        var yearString = token[1];
        return {
            year: parseInt(yearString, 10),
            restDateString: dateString.slice(yearString.length)
        };
    }
    token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
    if (token) {
        var centuryString = token[1];
        return {
            year: parseInt(centuryString, 10) * 100,
            restDateString: dateString.slice(centuryString.length)
        };
    }
    return {
        year: null
    };
}

function parseDate(dateString, year) {
    if (year === null) {
        return null;
    }
    var token;
    var date;
    var month;
    var week;
    if (dateString.length === 0) {
        date = new Date(0);
        date.setUTCFullYear(year);
        return date;
    }
    token = patterns.MM.exec(dateString);
    if (token) {
        date = new Date(0);
        month = parseInt(token[1], 10) - 1;
        date.setUTCFullYear(year, month);
        return date;
    }
    token = patterns.DDD.exec(dateString);
    if (token) {
        date = new Date(0);
        var dayOfYear = parseInt(token[1], 10);
        date.setUTCFullYear(year, 0, dayOfYear);
        return date;
    }
    token = patterns.MMDD.exec(dateString);
    if (token) {
        date = new Date(0);
        month = parseInt(token[1], 10) - 1;
        var day = parseInt(token[2], 10);
        date.setUTCFullYear(year, month, day);
        return date;
    }
    token = patterns.Www.exec(dateString);
    if (token) {
        week = parseInt(token[1], 10) - 1;
        return dayOfISOYear(year, week);
    }
    token = patterns.WwwD.exec(dateString);
    if (token) {
        week = parseInt(token[1], 10) - 1;
        var dayOfWeek = parseInt(token[2], 10) - 1;
        return dayOfISOYear(year, week, dayOfWeek);
    }
    return null;
}

function parseTime(timeString) {
    var token;
    var hours;
    var minutes;
    token = patterns.HH.exec(timeString);
    if (token) {
        hours = parseFloat(token[1].replace(',', '.'));
        return hours % 24 * MILLISECONDS_IN_HOUR;
    }
    token = patterns.HHMM.exec(timeString);
    if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseFloat(token[2].replace(',', '.'));
        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    }
    token = patterns.HHMMSS.exec(timeString);
    if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseInt(token[2], 10);
        var seconds = parseFloat(token[3].replace(',', '.'));
        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
    }
    return null;
}

function parseTimezone(timezoneString) {
    var token;
    var absoluteOffset;
    token = patterns.timezoneZ.exec(timezoneString);
    if (token) {
        return 0;
    }
    token = patterns.timezoneHH.exec(timezoneString);
    if (token) {
        absoluteOffset = parseInt(token[2], 10) * 60;
        return token[1] === '+' ? -absoluteOffset : absoluteOffset;
    }
    token = patterns.timezoneHHMM.exec(timezoneString);
    if (token) {
        absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
        return token[1] === '+' ? -absoluteOffset : absoluteOffset;
    }
    return 0;
}

function dayOfISOYear(isoYear, week, day) {
    week = week || 0;
    day = day || 0;
    var date = new Date(0);
    date.setUTCFullYear(isoYear, 0, 4);
    var fourthOfJanuaryDay = date.getUTCDay() || 7;
    var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}

function addMilliseconds(dirtyDate, dirtyAmount, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var timestamp = toDate(dirtyDate, dirtyOptions).getTime();
    var amount = Number(dirtyAmount);
    return new Date(timestamp + amount);
}

function cloneObject(dirtyObject) {
    dirtyObject = dirtyObject || {};
    var object = {};
    for (var property in dirtyObject) {
        if (dirtyObject.hasOwnProperty(property)) {
            object[property] = dirtyObject[property];
        }
    }
    return object;
}

var MILLISECONDS_IN_MINUTE$2 = 60000;
function addMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var amount = Number(dirtyAmount);
    return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE$2, dirtyOptions);
}

function isValid(dirtyDate, dirtyOptions) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    var date = toDate(dirtyDate, dirtyOptions);
    return !isNaN(date);
}

var formatDistanceLocale = {
    lessThanXSeconds: {
        one: 'less than a second',
        other: 'less than {{count}} seconds'
    },
    xSeconds: {
        one: '1 second',
        other: '{{count}} seconds'
    },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
        one: 'less than a minute',
        other: 'less than {{count}} minutes'
    },
    xMinutes: {
        one: '1 minute',
        other: '{{count}} minutes'
    },
    aboutXHours: {
        one: 'about 1 hour',
        other: 'about {{count}} hours'
    },
    xHours: {
        one: '1 hour',
        other: '{{count}} hours'
    },
    xDays: {
        one: '1 day',
        other: '{{count}} days'
    },
    aboutXMonths: {
        one: 'about 1 month',
        other: 'about {{count}} months'
    },
    xMonths: {
        one: '1 month',
        other: '{{count}} months'
    },
    aboutXYears: {
        one: 'about 1 year',
        other: 'about {{count}} years'
    },
    xYears: {
        one: '1 year',
        other: '{{count}} years'
    },
    overXYears: {
        one: 'over 1 year',
        other: 'over {{count}} years'
    },
    almostXYears: {
        one: 'almost 1 year',
        other: 'almost {{count}} years'
    }
};
function formatDistance(token, count, options) {
    options = options || {};
    var result;
    if (typeof formatDistanceLocale[token] === 'string') {
        result = formatDistanceLocale[token];
    } else if (count === 1) {
        result = formatDistanceLocale[token].one;
    } else {
        result = formatDistanceLocale[token].other.replace('{{count}}', count);
    }
    if (options.addSuffix) {
        if (options.comparison > 0) {
            return 'in ' + result;
        } else {
            return result + ' ago';
        }
    }
    return result;
}

var tokensToBeShortedPattern = /MMMM|MM|DD|dddd/g;
function buildShortLongFormat(format) {
    return format.replace(tokensToBeShortedPattern, function (token) {
        return token.slice(1);
    });
}

function buildFormatLongFn(obj) {
    var formatLongLocale = {
        LTS: obj.LTS,
        LT: obj.LT,
        L: obj.L,
        LL: obj.LL,
        LLL: obj.LLL,
        LLLL: obj.LLLL,
        l: obj.l || buildShortLongFormat(obj.L),
        ll: obj.ll || buildShortLongFormat(obj.LL),
        lll: obj.lll || buildShortLongFormat(obj.LLL),
        llll: obj.llll || buildShortLongFormat(obj.LLLL)
    };
    return function (token) {
        return formatLongLocale[token];
    };
}

var formatLong = buildFormatLongFn({
    LT: 'h:mm aa',
    LTS: 'h:mm:ss aa',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D YYYY',
    LLL: 'MMMM D YYYY h:mm aa',
    LLLL: 'dddd, MMMM D YYYY h:mm aa'
});

var formatRelativeLocale = {
    lastWeek: '[last] dddd [at] LT',
    yesterday: '[yesterday at] LT',
    today: '[today at] LT',
    tomorrow: '[tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    other: 'L'
};
function formatRelative(token, date, baseDate, options) {
    return formatRelativeLocale[token];
}

function buildLocalizeFn(values, defaultType, indexCallback) {
    return function (dirtyIndex, dirtyOptions) {
        var options = dirtyOptions || {};
        var type = options.type ? String(options.type) : defaultType;
        var valuesArray = values[type] || values[defaultType];
        var index = indexCallback ? indexCallback(Number(dirtyIndex)) : Number(dirtyIndex);
        return valuesArray[index];
    };
}

function buildLocalizeArrayFn(values, defaultType) {
    return function (dirtyOptions) {
        var options = dirtyOptions || {};
        var type = options.type ? String(options.type) : defaultType;
        return values[type] || values[defaultType];
    };
}

var weekdayValues = {
    narrow: ['Su','Mo','Tu','We','Th','Fr','Sa'],
    short: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    long: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
};
var monthValues = {
    short: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    long: ['January','February','March','April','May','June','July','August','September',
        'October','November','December']
};
var timeOfDayValues = {
    uppercase: ['AM','PM'],
    lowercase: ['am','pm'],
    long: ['a.m.','p.m.']
};
function ordinalNumber(dirtyNumber, dirtyOptions) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
            case 1:
                return number + 'st';
            case 2:
                return number + 'nd';
            case 3:
                return number + 'rd';
        }
    }
    return number + 'th';
}

var localize = {
    ordinalNumber: ordinalNumber,
    weekday: buildLocalizeFn(weekdayValues, 'long'),
    weekdays: buildLocalizeArrayFn(weekdayValues, 'long'),
    month: buildLocalizeFn(monthValues, 'long'),
    months: buildLocalizeArrayFn(monthValues, 'long'),
    timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
        return hours / 12 >= 1 ? 1 : 0;
    }),
    timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
};

function buildMatchFn(patterns, defaultType) {
    return function (dirtyString, dirtyOptions) {
        var options = dirtyOptions || {};
        var type = options.type ? String(options.type) : defaultType;
        var pattern = patterns[type] || patterns[defaultType];
        var string = String(dirtyString);
        return string.match(pattern);
    };
}

function buildParseFn(patterns, defaultType) {
    return function (matchResult, dirtyOptions) {
        var options = dirtyOptions || {};
        var type = options.type ? String(options.type) : defaultType;
        var patternsArray = patterns[type] || patterns[defaultType];
        var string = matchResult[1];
        return patternsArray.findIndex(function (pattern) {
            return pattern.test(string);
        });
    };
}

function buildMatchPatternFn(pattern) {
    return function (dirtyString) {
        var string = String(dirtyString);
        return string.match(pattern);
    };
}

function parseDecimal(matchResult) {
    return parseInt(matchResult[1], 10);
}

var matchOrdinalNumbersPattern = /^(\d+)(th|st|nd|rd)?/i;
var matchWeekdaysPatterns = {
    narrow: /^(su|mo|tu|we|th|fr|sa)/i,
    short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseWeekdayPatterns = {
    any: [/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]
};
var matchMonthsPatterns = {
    short: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    long: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
    any: [/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,
        /^n/i,/^d/i]
};
var matchTimesOfDayPatterns = {
    short: /^(am|pm)/i,
    long: /^([ap]\.?\s?m\.?)/i
};
var parseTimeOfDayPatterns = {
    any: [/^a/i,/^p/i]
};
var match = {
    ordinalNumbers: buildMatchPatternFn(matchOrdinalNumbersPattern),
    ordinalNumber: parseDecimal,
    weekdays: buildMatchFn(matchWeekdaysPatterns, 'long'),
    weekday: buildParseFn(parseWeekdayPatterns, 'any'),
    months: buildMatchFn(matchMonthsPatterns, 'long'),
    month: buildParseFn(parseMonthPatterns, 'any'),
    timesOfDay: buildMatchFn(matchTimesOfDayPatterns, 'long'),
    timeOfDay: buildParseFn(parseTimeOfDayPatterns, 'any')
};

var locale$1 = {
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};

var MILLISECONDS_IN_DAY$1 = 86400000;
function getUTCDayOfYear(dirtyDate, dirtyOptions) {
    var date = toDate(dirtyDate, dirtyOptions);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY$1) + 1;
}

function startOfUTCISOWeek(dirtyDate, dirtyOptions) {
    var weekStartsOn = 1;
    var date = toDate(dirtyDate, dirtyOptions);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}

function getUTCISOWeekYear(dirtyDate, dirtyOptions) {
    var date = toDate(dirtyDate, dirtyOptions);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear, dirtyOptions);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear, dirtyOptions);
    if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}

function startOfUTCISOWeekYear(dirtyDate, dirtyOptions) {
    var year = getUTCISOWeekYear(dirtyDate, dirtyOptions);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCISOWeek(fourthOfJanuary, dirtyOptions);
    return date;
}

var MILLISECONDS_IN_WEEK$2 = 604800000;
function getUTCISOWeek(dirtyDate, dirtyOptions) {
    var date = toDate(dirtyDate, dirtyOptions);
    var diff = startOfUTCISOWeek(date, dirtyOptions).getTime() - startOfUTCISOWeekYear(date, dirtyOptions).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1;
}

var formatters = {
    'M': function (date) {
        return date.getUTCMonth() + 1;
    },
    'Mo': function (date, options) {
        var month = date.getUTCMonth() + 1;
        return options.locale.localize.ordinalNumber(month, {
            unit: 'month'
        });
    },
    'MM': function (date) {
        return addLeadingZeros(date.getUTCMonth() + 1, 2);
    },
    'MMM': function (date, options) {
        return options.locale.localize.month(date.getUTCMonth(), {
            type: 'short'
        });
    },
    'MMMM': function (date, options) {
        return options.locale.localize.month(date.getUTCMonth(), {
            type: 'long'
        });
    },
    'Q': function (date) {
        return Math.ceil((date.getUTCMonth() + 1) / 3);
    },
    'Qo': function (date, options) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        return options.locale.localize.ordinalNumber(quarter, {
            unit: 'quarter'
        });
    },
    'D': function (date) {
        return date.getUTCDate();
    },
    'Do': function (date, options) {
        return options.locale.localize.ordinalNumber(date.getUTCDate(), {
            unit: 'dayOfMonth'
        });
    },
    'DD': function (date) {
        return addLeadingZeros(date.getUTCDate(), 2);
    },
    'DDD': function (date) {
        return getUTCDayOfYear(date);
    },
    'DDDo': function (date, options) {
        return options.locale.localize.ordinalNumber(getUTCDayOfYear(date), {
            unit: 'dayOfYear'
        });
    },
    'DDDD': function (date) {
        return addLeadingZeros(getUTCDayOfYear(date), 3);
    },
    'dd': function (date, options) {
        return options.locale.localize.weekday(date.getUTCDay(), {
            type: 'narrow'
        });
    },
    'ddd': function (date, options) {
        return options.locale.localize.weekday(date.getUTCDay(), {
            type: 'short'
        });
    },
    'dddd': function (date, options) {
        return options.locale.localize.weekday(date.getUTCDay(), {
            type: 'long'
        });
    },
    'd': function (date) {
        return date.getUTCDay();
    },
    'do': function (date, options) {
        return options.locale.localize.ordinalNumber(date.getUTCDay(), {
            unit: 'dayOfWeek'
        });
    },
    'E': function (date) {
        return date.getUTCDay() || 7;
    },
    'W': function (date) {
        return getUTCISOWeek(date);
    },
    'Wo': function (date, options) {
        return options.locale.localize.ordinalNumber(getUTCISOWeek(date), {
            unit: 'isoWeek'
        });
    },
    'WW': function (date) {
        return addLeadingZeros(getUTCISOWeek(date), 2);
    },
    'YY': function (date) {
        return addLeadingZeros(date.getUTCFullYear(), 4).substr(2);
    },
    'YYYY': function (date) {
        return addLeadingZeros(date.getUTCFullYear(), 4);
    },
    'GG': function (date) {
        return String(getUTCISOWeekYear(date)).substr(2);
    },
    'GGGG': function (date) {
        return getUTCISOWeekYear(date);
    },
    'H': function (date) {
        return date.getUTCHours();
    },
    'HH': function (date) {
        return addLeadingZeros(date.getUTCHours(), 2);
    },
    'h': function (date) {
        var hours = date.getUTCHours();
        if (hours === 0) {
            return 12;
        } else if (hours > 12) {
            return hours % 12;
        } else {
            return hours;
        }
    },
    'hh': function (date) {
        return addLeadingZeros(formatters['h'](date), 2);
    },
    'm': function (date) {
        return date.getUTCMinutes();
    },
    'mm': function (date) {
        return addLeadingZeros(date.getUTCMinutes(), 2);
    },
    's': function (date) {
        return date.getUTCSeconds();
    },
    'ss': function (date) {
        return addLeadingZeros(date.getUTCSeconds(), 2);
    },
    'S': function (date) {
        return Math.floor(date.getUTCMilliseconds() / 100);
    },
    'SS': function (date) {
        return addLeadingZeros(Math.floor(date.getUTCMilliseconds() / 10), 2);
    },
    'SSS': function (date) {
        return addLeadingZeros(date.getUTCMilliseconds(), 3);
    },
    'Z': function (date, options) {
        var originalDate = options._originalDate || date;
        return formatTimezone(originalDate.getTimezoneOffset(), ':');
    },
    'ZZ': function (date, options) {
        var originalDate = options._originalDate || date;
        return formatTimezone(originalDate.getTimezoneOffset());
    },
    'X': function (date, options) {
        var originalDate = options._originalDate || date;
        return Math.floor(originalDate.getTime() / 1000);
    },
    'x': function (date, options) {
        var originalDate = options._originalDate || date;
        return originalDate.getTime();
    },
    'A': function (date, options) {
        return options.locale.localize.timeOfDay(date.getUTCHours(), {
            type: 'uppercase'
        });
    },
    'a': function (date, options) {
        return options.locale.localize.timeOfDay(date.getUTCHours(), {
            type: 'lowercase'
        });
    },
    'aa': function (date, options) {
        return options.locale.localize.timeOfDay(date.getUTCHours(), {
            type: 'long'
        });
    }
};
function formatTimezone(offset, delimeter) {
    delimeter = delimeter || '';
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2);
}

function addLeadingZeros(number, targetLength) {
    var output = Math.abs(number).toString();
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

function addUTCMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
    var date = toDate(dirtyDate, dirtyOptions);
    var amount = Number(dirtyAmount);
    date.setUTCMinutes(date.getUTCMinutes() + amount);
    return date;
}

var longFormattingTokensRegExp = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
var defaultFormattingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var formatStr = String(dirtyFormatStr);
    var options = dirtyOptions || {};
    var locale = options.locale || locale$1;
    if (!locale.localize) {
        throw new RangeError('locale must contain localize property');
    }
    if (!locale.formatLong) {
        throw new RangeError('locale must contain formatLong property');
    }
    var localeFormatters = locale.formatters || {};
    var formattingTokensRegExp = locale.formattingTokensRegExp || defaultFormattingTokensRegExp;
    var formatLong = locale.formatLong;
    var originalDate = toDate(dirtyDate, options);
    if (!isValid(originalDate, options)) {
        return 'Invalid Date';
    }
    var timezoneOffset = originalDate.getTimezoneOffset();
    var utcDate = addUTCMinutes(originalDate, -timezoneOffset, options);
    var formatterOptions = cloneObject(options);
    formatterOptions.locale = locale;
    formatterOptions.formatters = formatters;
    formatterOptions._originalDate = originalDate;
    var result = formatStr.replace(longFormattingTokensRegExp, function (substring) {
        if (substring[0] === '[') {
            return substring;
        }
        if (substring[0] === '\\') {
            return cleanEscapedString(substring);
        }
        return formatLong(substring);
    }).replace(formattingTokensRegExp, function (substring) {
        var formatter = localeFormatters[substring] || formatters[substring];
        if (formatter) {
            return formatter(utcDate, formatterOptions);
        } else {
            return cleanEscapedString(substring);
        }
    });
    return result;
}

function cleanEscapedString(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function subMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var amount = Number(dirtyAmount);
    return addMinutes(dirtyDate, -amount, dirtyOptions);
}

function isAfter(dirtyDate, dirtyDateToCompare, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var date = toDate(dirtyDate, dirtyOptions);
    var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
    return date.getTime() > dateToCompare.getTime();
}

function isBefore(dirtyDate, dirtyDateToCompare, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var date = toDate(dirtyDate, dirtyOptions);
    var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
    return date.getTime() < dateToCompare.getTime();
}

function isEqual$1(dirtyLeftDate, dirtyRightDate, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var dateLeft = toDate(dirtyLeftDate, dirtyOptions);
    var dateRight = toDate(dirtyRightDate, dirtyOptions);
    return dateLeft.getTime() === dateRight.getTime();
}

var patterns$1 = {
    'M': /^(1[0-2]|0?\d)/,
    'D': /^(3[0-1]|[0-2]?\d)/,
    'DDD': /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    'W': /^(5[0-3]|[0-4]?\d)/,
    'YYYY': /^(\d{1,4})/,
    'H': /^(2[0-3]|[0-1]?\d)/,
    'm': /^([0-5]?\d)/,
    'Z': /^([+-])(\d{2}):(\d{2})/,
    'ZZ': /^([+-])(\d{2})(\d{2})/,
    singleDigit: /^(\d)/,
    twoDigits: /^(\d{2})/,
    threeDigits: /^(\d{3})/,
    fourDigits: /^(\d{4})/,
    anyDigits: /^(\d+)/
};
function parseDecimal$1(matchResult) {
    return parseInt(matchResult[1], 10);
}

var parsers = {
    'YY': {
        unit: 'twoDigitYear',
        match: patterns$1.twoDigits,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult);
        }
    },
    'YYYY': {
        unit: 'year',
        match: patterns$1.YYYY,
        parse: parseDecimal$1
    },
    'GG': {
        unit: 'isoYear',
        match: patterns$1.twoDigits,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult) + 1900;
        }
    },
    'GGGG': {
        unit: 'isoYear',
        match: patterns$1.YYYY,
        parse: parseDecimal$1
    },
    'Q': {
        unit: 'quarter',
        match: patterns$1.singleDigit,
        parse: parseDecimal$1
    },
    'Qo': {
        unit: 'quarter',
        match: function (string, options) {
            return options.locale.match.ordinalNumbers(string, {
                unit: 'quarter'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.ordinalNumber(matchResult, {
                unit: 'quarter'
            });
        }
    },
    'M': {
        unit: 'month',
        match: patterns$1.M,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult) - 1;
        }
    },
    'Mo': {
        unit: 'month',
        match: function (string, options) {
            return options.locale.match.ordinalNumbers(string, {
                unit: 'month'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.ordinalNumber(matchResult, {
                unit: 'month'
            }) - 1;
        }
    },
    'MM': {
        unit: 'month',
        match: patterns$1.twoDigits,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult) - 1;
        }
    },
    'MMM': {
        unit: 'month',
        match: function (string, options) {
            return options.locale.match.months(string, {
                type: 'short'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.month(matchResult, {
                type: 'short'
            });
        }
    },
    'MMMM': {
        unit: 'month',
        match: function (string, options) {
            return options.locale.match.months(string, {
                type: 'long'
            }) || options.locale.match.months(string, {
                type: 'short'
            });
        },
        parse: function (matchResult, options) {
            var parseResult = options.locale.match.month(matchResult, {
                type: 'long'
            });
            if (parseResult == null) {
                parseResult = options.locale.match.month(matchResult, {
                    type: 'short'
                });
            }
            return parseResult;
        }
    },
    'W': {
        unit: 'isoWeek',
        match: patterns$1.W,
        parse: parseDecimal$1
    },
    'Wo': {
        unit: 'isoWeek',
        match: function (string, options) {
            return options.locale.match.ordinalNumbers(string, {
                unit: 'isoWeek'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.ordinalNumber(matchResult, {
                unit: 'isoWeek'
            });
        }
    },
    'WW': {
        unit: 'isoWeek',
        match: patterns$1.twoDigits,
        parse: parseDecimal$1
    },
    'd': {
        unit: 'dayOfWeek',
        match: patterns$1.singleDigit,
        parse: parseDecimal$1
    },
    'do': {
        unit: 'dayOfWeek',
        match: function (string, options) {
            return options.locale.match.ordinalNumbers(string, {
                unit: 'dayOfWeek'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.ordinalNumber(matchResult, {
                unit: 'dayOfWeek'
            });
        }
    },
    'dd': {
        unit: 'dayOfWeek',
        match: function (string, options) {
            return options.locale.match.weekdays(string, {
                type: 'narrow'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.weekday(matchResult, {
                type: 'narrow'
            });
        }
    },
    'ddd': {
        unit: 'dayOfWeek',
        match: function (string, options) {
            return options.locale.match.weekdays(string, {
                type: 'short'
            }) || options.locale.match.weekdays(string, {
                type: 'narrow'
            });
        },
        parse: function (matchResult, options) {
            var parseResult = options.locale.match.weekday(matchResult, {
                type: 'short'
            });
            if (parseResult == null) {
                parseResult = options.locale.match.weekday(matchResult, {
                    type: 'narrow'
                });
            }
            return parseResult;
        }
    },
    'dddd': {
        unit: 'dayOfWeek',
        match: function (string, options) {
            return options.locale.match.weekdays(string, {
                type: 'long'
            }) || options.locale.match.weekdays(string, {
                type: 'short'
            }) || options.locale.match.weekdays(string, {
                type: 'narrow'
            });
        },
        parse: function (matchResult, options) {
            var parseResult = options.locale.match.weekday(matchResult, {
                type: 'long'
            });
            if (parseResult == null) {
                parseResult = options.locale.match.weekday(matchResult, {
                    type: 'short'
                });
                if (parseResult == null) {
                    parseResult = options.locale.match.weekday(matchResult, {
                        type: 'narrow'
                    });
                }
            }
            return parseResult;
        }
    },
    'E': {
        unit: 'dayOfISOWeek',
        match: patterns$1.singleDigit,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult);
        }
    },
    'D': {
        unit: 'dayOfMonth',
        match: patterns$1.D,
        parse: parseDecimal$1
    },
    'Do': {
        unit: 'dayOfMonth',
        match: function (string, options) {
            return options.locale.match.ordinalNumbers(string, {
                unit: 'dayOfMonth'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.ordinalNumber(matchResult, {
                unit: 'dayOfMonth'
            });
        }
    },
    'DD': {
        unit: 'dayOfMonth',
        match: patterns$1.twoDigits,
        parse: parseDecimal$1
    },
    'DDD': {
        unit: 'dayOfYear',
        match: patterns$1.DDD,
        parse: parseDecimal$1
    },
    'DDDo': {
        unit: 'dayOfYear',
        match: function (string, options) {
            return options.locale.match.ordinalNumbers(string, {
                unit: 'dayOfYear'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.ordinalNumber(matchResult, {
                unit: 'dayOfYear'
            });
        }
    },
    'DDDD': {
        unit: 'dayOfYear',
        match: patterns$1.threeDigits,
        parse: parseDecimal$1
    },
    'A': {
        unit: 'timeOfDay',
        match: function (string, options) {
            return options.locale.match.timesOfDay(string, {
                type: 'short'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.timeOfDay(matchResult, {
                type: 'short'
            });
        }
    },
    'aa': {
        unit: 'timeOfDay',
        match: function (string, options) {
            return options.locale.match.timesOfDay(string, {
                type: 'long'
            }) || options.locale.match.timesOfDay(string, {
                type: 'short'
            });
        },
        parse: function (matchResult, options) {
            var parseResult = options.locale.match.timeOfDay(matchResult, {
                type: 'long'
            });
            if (parseResult == null) {
                parseResult = options.locale.match.timeOfDay(matchResult, {
                    type: 'short'
                });
            }
            return parseResult;
        }
    },
    'H': {
        unit: 'hours',
        match: patterns$1.H,
        parse: parseDecimal$1
    },
    'HH': {
        unit: 'hours',
        match: patterns$1.twoDigits,
        parse: parseDecimal$1
    },
    'h': {
        unit: 'timeOfDayHours',
        match: patterns$1.M,
        parse: parseDecimal$1
    },
    'hh': {
        unit: 'timeOfDayHours',
        match: patterns$1.twoDigits,
        parse: parseDecimal$1
    },
    'm': {
        unit: 'minutes',
        match: patterns$1.m,
        parse: parseDecimal$1
    },
    'mm': {
        unit: 'minutes',
        match: patterns$1.twoDigits,
        parse: parseDecimal$1
    },
    's': {
        unit: 'seconds',
        match: patterns$1.m,
        parse: parseDecimal$1
    },
    'ss': {
        unit: 'seconds',
        match: patterns$1.twoDigits,
        parse: parseDecimal$1
    },
    'S': {
        unit: 'milliseconds',
        match: patterns$1.singleDigit,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult) * 100;
        }
    },
    'SS': {
        unit: 'milliseconds',
        match: patterns$1.twoDigits,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult) * 10;
        }
    },
    'SSS': {
        unit: 'milliseconds',
        match: patterns$1.threeDigits,
        parse: parseDecimal$1
    },
    'Z': {
        unit: 'timezone',
        match: patterns$1.Z,
        parse: function (matchResult) {
            var sign = matchResult[1];
            var hours = parseInt(matchResult[2], 10);
            var minutes = parseInt(matchResult[3], 10);
            var absoluteOffset = hours * 60 + minutes;
            return sign === '+' ? absoluteOffset : -absoluteOffset;
        }
    },
    'ZZ': {
        unit: 'timezone',
        match: patterns$1.ZZ,
        parse: function (matchResult) {
            var sign = matchResult[1];
            var hours = parseInt(matchResult[2], 10);
            var minutes = parseInt(matchResult[3], 10);
            var absoluteOffset = hours * 60 + minutes;
            return sign === '+' ? absoluteOffset : -absoluteOffset;
        }
    },
    'X': {
        unit: 'timestamp',
        match: patterns$1.anyDigits,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult) * 1000;
        }
    },
    'x': {
        unit: 'timestamp',
        match: patterns$1.anyDigits,
        parse: parseDecimal$1
    }
};
parsers['a'] = parsers['A'];

function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn === undefined ? 0 : Number(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn === undefined ? defaultWeekStartsOn : Number(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }
    var date = toDate(dirtyDate, dirtyOptions);
    var day = Number(dirtyDay);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}

function setUTCISODay(dirtyDate, dirtyDay, dirtyOptions) {
    var day = Number(dirtyDay);
    if (day % 7 === 0) {
        day = day - 7;
    }
    var weekStartsOn = 1;
    var date = toDate(dirtyDate, dirtyOptions);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}

function setUTCISOWeek(dirtyDate, dirtyISOWeek, dirtyOptions) {
    var date = toDate(dirtyDate, dirtyOptions);
    var isoWeek = Number(dirtyISOWeek);
    var diff = getUTCISOWeek(date, dirtyOptions) - isoWeek;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
}

var MILLISECONDS_IN_DAY$3 = 86400000;
function setUTCISOWeekYear(dirtyDate, dirtyISOYear, dirtyOptions) {
    var date = toDate(dirtyDate, dirtyOptions);
    var isoYear = Number(dirtyISOYear);
    var dateStartOfYear = startOfUTCISOWeekYear(date, dirtyOptions);
    var diff = Math.floor((date.getTime() - dateStartOfYear.getTime()) / MILLISECONDS_IN_DAY$3);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(isoYear, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    date = startOfUTCISOWeekYear(fourthOfJanuary, dirtyOptions);
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}

var MILLISECONDS_IN_MINUTE$6 = 60000;
function setTimeOfDay(hours, timeOfDay) {
    var isAM = timeOfDay === 0;
    if (isAM) {
        if (hours === 12) {
            return 0;
        }
    } else {
        if (hours !== 12) {
            return 12 + hours;
        }
    }
    return hours;
}

var units = {
    twoDigitYear: {
        priority: 10,
        set: function (dateValues, value) {
            var century = Math.floor(dateValues.date.getUTCFullYear() / 100);
            var year = century * 100 + value;
            dateValues.date.setUTCFullYear(year, 0, 1);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    year: {
        priority: 10,
        set: function (dateValues, value) {
            dateValues.date.setUTCFullYear(value, 0, 1);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    isoYear: {
        priority: 10,
        set: function (dateValues, value, options) {
            dateValues.date = startOfUTCISOWeekYear(setUTCISOWeekYear(dateValues.date, value, options), options);
            return dateValues;
        }
    },
    quarter: {
        priority: 20,
        set: function (dateValues, value) {
            dateValues.date.setUTCMonth((value - 1) * 3, 1);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    month: {
        priority: 30,
        set: function (dateValues, value) {
            dateValues.date.setUTCMonth(value, 1);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    isoWeek: {
        priority: 40,
        set: function (dateValues, value, options) {
            dateValues.date = startOfUTCISOWeek(setUTCISOWeek(dateValues.date, value, options), options);
            return dateValues;
        }
    },
    dayOfWeek: {
        priority: 50,
        set: function (dateValues, value, options) {
            dateValues.date = setUTCDay(dateValues.date, value, options);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    dayOfISOWeek: {
        priority: 50,
        set: function (dateValues, value, options) {
            dateValues.date = setUTCISODay(dateValues.date, value, options);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    dayOfMonth: {
        priority: 50,
        set: function (dateValues, value) {
            dateValues.date.setUTCDate(value);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    dayOfYear: {
        priority: 50,
        set: function (dateValues, value) {
            dateValues.date.setUTCMonth(0, value);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    timeOfDay: {
        priority: 60,
        set: function (dateValues, value, options) {
            dateValues.timeOfDay = value;
            return dateValues;
        }
    },
    hours: {
        priority: 70,
        set: function (dateValues, value, options) {
            dateValues.date.setUTCHours(value, 0, 0, 0);
            return dateValues;
        }
    },
    timeOfDayHours: {
        priority: 70,
        set: function (dateValues, value, options) {
            var timeOfDay = dateValues.timeOfDay;
            if (timeOfDay != null) {
                value = setTimeOfDay(value, timeOfDay);
            }
            dateValues.date.setUTCHours(value, 0, 0, 0);
            return dateValues;
        }
    },
    minutes: {
        priority: 80,
        set: function (dateValues, value) {
            dateValues.date.setUTCMinutes(value, 0, 0);
            return dateValues;
        }
    },
    seconds: {
        priority: 90,
        set: function (dateValues, value) {
            dateValues.date.setUTCSeconds(value, 0);
            return dateValues;
        }
    },
    milliseconds: {
        priority: 100,
        set: function (dateValues, value) {
            dateValues.date.setUTCMilliseconds(value);
            return dateValues;
        }
    },
    timezone: {
        priority: 110,
        set: function (dateValues, value) {
            dateValues.date = new Date(dateValues.date.getTime() - value * MILLISECONDS_IN_MINUTE$6);
            return dateValues;
        }
    },
    timestamp: {
        priority: 120,
        set: function (dateValues, value) {
            dateValues.date = new Date(value);
            return dateValues;
        }
    }
};

var TIMEZONE_UNIT_PRIORITY = 110;
var MILLISECONDS_IN_MINUTE$7 = 60000;
var longFormattingTokensRegExp$1 = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
var defaultParsingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;
function parse(dirtyDateString, dirtyFormatString, dirtyBaseDate, dirtyOptions) {
    if (arguments.length < 3) {
        throw new TypeError('3 arguments required, but only ' + arguments.length + ' present');
    }
    var dateString = String(dirtyDateString);
    var options = dirtyOptions || {};
    var weekStartsOn = options.weekStartsOn === undefined ? 0 : Number(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }
    var locale = options.locale || locale$1;
    var localeParsers = locale.parsers || {};
    var localeUnits = locale.units || {};
    if (!locale.match) {
        throw new RangeError('locale must contain match property');
    }
    if (!locale.formatLong) {
        throw new RangeError('locale must contain formatLong property');
    }
    var formatString = String(dirtyFormatString).replace(longFormattingTokensRegExp$1, function (substring) {
        if (substring[0] === '[') {
            return substring;
        }
        if (substring[0] === '\\') {
            return cleanEscapedString$1(substring);
        }
        return locale.formatLong(substring);
    });
    if (formatString === '') {
        if (dateString === '') {
            return toDate(dirtyBaseDate, options);
        } else {
            return new Date(NaN);
        }
    }
    var subFnOptions = cloneObject(options);
    subFnOptions.locale = locale;
    var tokens = formatString.match(locale.parsingTokensRegExp || defaultParsingTokensRegExp);
    var tokensLength = tokens.length;
    var setters = [{
        priority: TIMEZONE_UNIT_PRIORITY,
        set: dateToSystemTimezone,
        index: 0
    }];
    var i;
    for (i = 0; i < tokensLength; i++) {
        var token = tokens[i];
        var parser = localeParsers[token] || parsers[token];
        if (parser) {
            var matchResult;
            if (parser.match instanceof RegExp) {
                matchResult = parser.match.exec(dateString);
            } else {
                matchResult = parser.match(dateString, subFnOptions);
            }
            if (!matchResult) {
                return new Date(NaN);
            }
            var unitName = parser.unit;
            var unit = localeUnits[unitName] || units[unitName];
            setters.push({
                priority: unit.priority,
                set: unit.set,
                value: parser.parse(matchResult, subFnOptions),
                index: setters.length
            });
            var substring = matchResult[0];
            dateString = dateString.slice(substring.length);
        } else {
            var head = tokens[i].match(/^\[.*]$/) ? tokens[i].replace(/^\[|]$/g, '') : tokens[i];
            if (dateString.indexOf(head) === 0) {
                dateString = dateString.slice(head.length);
            } else {
                return new Date(NaN);
            }
        }
    }
    var uniquePrioritySetters = setters.map(function (setter) {
        return setter.priority;
    }).sort(function (a, b) {
        return a - b;
    }).filter(function (priority, index, array) {
        return array.indexOf(priority) === index;
    }).map(function (priority) {
        return setters.filter(function (setter) {
            return setter.priority === priority;
        }).reverse();
    }).map(function (setterArray) {
        return setterArray[0];
    });
    var date = toDate(dirtyBaseDate, options);
    if (isNaN(date)) {
        return new Date(NaN);
    }
    var utcDate = subMinutes(date, date.getTimezoneOffset());
    var dateValues = {
        date: utcDate
    };
    var settersLength = uniquePrioritySetters.length;
    for (i = 0; i < settersLength; i++) {
        var setter = uniquePrioritySetters[i];
        dateValues = setter.set(dateValues, setter.value, subFnOptions);
    }
    return dateValues.date;
}

function dateToSystemTimezone(dateValues) {
    var date = dateValues.date;
    var time = date.getTime();
    var offset = date.getTimezoneOffset();
    offset = new Date(time + offset * MILLISECONDS_IN_MINUTE$7).getTimezoneOffset();
    dateValues.date = new Date(time + offset * MILLISECONDS_IN_MINUTE$7);
    return dateValues;
}

function cleanEscapedString$1(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function parseDate$1(date, format$$1) {
    if (typeof date !== 'string') {
        return isValid(date) ? date : null;
    }
    var parsed = parse(date, format$$1, new Date());
    if (!isValid(parsed) || format(parsed, format$$1) !== date) {
        return null;
    }
    return parsed;
}

function after (value, ref) {
    var otherValue = ref[0];
    var inclusion = ref[1];
    var format$$1 = ref[2];

    if (typeof format$$1 === 'undefined') {
        format$$1 = inclusion;
        inclusion = false;
    }
    value = parseDate$1(value, format$$1);
    otherValue = parseDate$1(otherValue, format$$1);
    if (!value || !otherValue) {
        return false;
    }
    return isAfter(value, otherValue) || inclusion && isEqual$1(value, otherValue);
}

var alpha = {
    en: /^[A-Z]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[A-ZÆØÅ]*$/i,
    de: /^[A-ZÄÖÜß]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ru: /^[А-ЯЁ]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[A-ZČĆŽŠĐ]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};
var alphaSpaces = {
    en: /^[A-Z\s]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
    da: /^[A-ZÆØÅ\s]*$/i,
    de: /^[A-ZÄÖÜß\s]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
    ru: /^[А-ЯЁ\s]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
    sr: /^[A-ZČĆŽŠĐ\s]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/
};
var alphanumeric = {
    en: /^[0-9A-Z]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[0-9A-ZÆØÅ]$/i,
    de: /^[0-9A-ZÄÖÜß]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ru: /^[0-9А-ЯЁ]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};
var alphaDash = {
    en: /^[0-9A-Z_-]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
    da: /^[0-9A-ZÆØÅ_-]*$/i,
    de: /^[0-9A-ZÄÖÜß_-]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
    ru: /^[0-9А-ЯЁ_-]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/
};

var validate = function (value, ref) {
    if ( ref === void 0 ) ref = [];
    var locale = ref[0]; if ( locale === void 0 ) locale = null;

    if (Array.isArray(value)) {
        return value.every(function (val) { return validate(val, [locale]); });
    }
    if (!locale) {
        return Object.keys(alpha).some(function (loc) { return alpha[loc].test(value); });
    }
    return (alpha[locale] || alpha.en).test(value);
};

var validate$1 = function (value, ref) {
    if ( ref === void 0 ) ref = [];
    var locale = ref[0]; if ( locale === void 0 ) locale = null;

    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$1(val, [locale]); });
    }
    if (!locale) {
        return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
    }
    return (alphaDash[locale] || alphaDash.en).test(value);
};

var validate$2 = function (value, ref) {
    if ( ref === void 0 ) ref = [];
    var locale = ref[0]; if ( locale === void 0 ) locale = null;

    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$2(val, [locale]); });
    }
    if (!locale) {
        return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
    }
    return (alphanumeric[locale] || alphanumeric.en).test(value);
};

var validate$3 = function (value, ref) {
    if ( ref === void 0 ) ref = [];
    var locale = ref[0]; if ( locale === void 0 ) locale = null;

    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$3(val, [locale]); });
    }
    if (!locale) {
        return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
    }
    return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};

function before (value, ref) {
    var otherValue = ref[0];
    var inclusion = ref[1];
    var format$$1 = ref[2];

    if (typeof format$$1 === 'undefined') {
        format$$1 = inclusion;
        inclusion = false;
    }
    value = parseDate$1(value, format$$1);
    otherValue = parseDate$1(otherValue, format$$1);
    if (!value || !otherValue) {
        return false;
    }
    return isBefore(value, otherValue) || inclusion && isEqual$1(value, otherValue);
}

var validate$4 = function (value, ref) {
    var min = ref[0];
    var max = ref[1];

    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$4(val, [min,max]); });
    }
    return Number(min) <= value && Number(max) >= value;
};

function confirmed (value, other) { return String(value) === String(other); }

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var assertString_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = assertString;
    function assertString(input) {
        var isString = typeof input === 'string' || input instanceof String;
        if (!isString) {
            throw new TypeError('This library (validator.js) validates strings only');
        }
    }
    
    module.exports = exports['default'];
});
var assertString = unwrapExports(assertString_1)

var assertString$1 = /*#__PURE__*/Object.freeze({
  default: assertString,
  __moduleExports: assertString_1
});

var _assertString = ( assertString$1 && assertString ) || assertString$1;

var isCreditCard_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isCreditCard;
    var _assertString2 = _interopRequireDefault(_assertString);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    
    var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
    function isCreditCard(str) {
        (0, _assertString2.default)(str);
        var sanitized = str.replace(/[- ]+/g, '');
        if (!creditCard.test(sanitized)) {
            return false;
        }
        var sum = 0;
        var digit = void 0;
        var tmpNum = void 0;
        var shouldDouble = void 0;
        for (var i = sanitized.length - 1;i >= 0; i--) {
            digit = sanitized.substring(i, i + 1);
            tmpNum = parseInt(digit, 10);
            if (shouldDouble) {
                tmpNum *= 2;
                if (tmpNum >= 10) {
                    sum += tmpNum % 10 + 1;
                } else {
                    sum += tmpNum;
                }
            } else {
                sum += tmpNum;
            }
            shouldDouble = !shouldDouble;
        }
        return !(!(sum % 10 === 0 ? sanitized : false));
    }
    
    module.exports = exports['default'];
});
var isCreditCard = unwrapExports(isCreditCard_1)

function credit_card (value) { return isCreditCard(String(value)); }

var validate$5 = function (value, ref) {
    if ( ref === void 0 ) ref = [];
    var decimals = ref[0]; if ( decimals === void 0 ) decimals = '*';
    var separator = ref[1]; if ( separator === void 0 ) separator = '.';

    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$5(val, [decimals,separator]); });
    }
    if (value === null || value === undefined || value === '') {
        return true;
    }
    if (Number(decimals) === 0) {
        return /^-?\d*$/.test(value);
    }
    var regexPart = decimals === '*' ? '+' : ("{1," + decimals + "}");
    var regex = new RegExp(("^-?\\d*(\\" + separator + "\\d" + regexPart + ")?$"));
    if (!regex.test(value)) {
        return false;
    }
    var parsedValue = parseFloat(value);
    return parsedValue === parsedValue;
};

function date_between (value, params) {
    var assign, assign$1;

    var min$$1;
    var max$$1;
    var format$$1;
    var inclusivity = '()';
    if (params.length > 3) {
        (assign = params, min$$1 = assign[0], max$$1 = assign[1], inclusivity = assign[2], format$$1 = assign[3]);
    } else {
        (assign$1 = params, min$$1 = assign$1[0], max$$1 = assign$1[1], format$$1 = assign$1[2]);
    }
    var minDate = parseDate$1(String(min$$1), format$$1);
    var maxDate = parseDate$1(String(max$$1), format$$1);
    var dateVal = parseDate$1(String(value), format$$1);
    if (!minDate || !maxDate || !dateVal) {
        return false;
    }
    if (inclusivity === '()') {
        return isAfter(dateVal, minDate) && isBefore(dateVal, maxDate);
    }
    if (inclusivity === '(]') {
        return isAfter(dateVal, minDate) && (isEqual$1(dateVal, maxDate) || isBefore(dateVal, maxDate));
    }
    if (inclusivity === '[)') {
        return isBefore(dateVal, maxDate) && (isEqual$1(dateVal, minDate) || isAfter(dateVal, minDate));
    }
    return isEqual$1(dateVal, maxDate) || isEqual$1(dateVal, minDate) || isBefore(dateVal, maxDate) && isAfter(dateVal, minDate);
}

function date_format (value, ref) {
	var format = ref[0];

	return !(!parseDate$1(value, format));
}

var validate$6 = function (value, ref) {
    var length = ref[0];

    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$6(val, [length]); });
    }
    var strVal = String(value);
    return /^[0-9]*$/.test(strVal) && strVal.length === Number(length);
};

var validateImage = function (file, width, height) {
    var URL = window.URL || window.webkitURL;
    return new Promise(function (resolve) {
        var image = new Image();
        image.onerror = (function () { return resolve({
            valid: false
        }); });
        image.onload = (function () { return resolve({
            valid: image.width === Number(width) && image.height === Number(height)
        }); });
        image.src = URL.createObjectURL(file);
    });
};
function dimensions (files, ref) {
    var width = ref[0];
    var height = ref[1];

    var list = [];
    for (var i = 0;i < files.length; i++) {
        if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
            return false;
        }
        list.push(files[i]);
    }
    return Promise.all(list.map(function (file) { return validateImage(file, width, height); }));
}

var merge_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = merge;
    function merge() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var defaults = arguments[1];
        for (var key in defaults) {
            if (typeof obj[key] === 'undefined') {
                obj[key] = defaults[key];
            }
        }
        return obj;
    }
    
    module.exports = exports['default'];
});
var merge$1 = unwrapExports(merge_1)

var merge$2 = /*#__PURE__*/Object.freeze({
  default: merge$1,
  __moduleExports: merge_1
});

var isByteLength_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    exports.default = isByteLength;
    var _assertString2 = _interopRequireDefault(_assertString);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    
    function isByteLength(str, options) {
        (0, _assertString2.default)(str);
        var min = void 0;
        var max = void 0;
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            min = options.min || 0;
            max = options.max;
        } else {
            min = arguments[1];
            max = arguments[2];
        }
        var len = encodeURI(str).split(/%..|./).length - 1;
        return len >= min && (typeof max === 'undefined' || len <= max);
    }
    
    module.exports = exports['default'];
});
var isByteLength = unwrapExports(isByteLength_1)

var isByteLength$1 = /*#__PURE__*/Object.freeze({
  default: isByteLength,
  __moduleExports: isByteLength_1
});

var _merge = ( merge$2 && merge$1 ) || merge$2;

var isFQDN_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isFQDN;
    var _assertString2 = _interopRequireDefault(_assertString);
    var _merge2 = _interopRequireDefault(_merge);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    
    var default_fqdn_options = {
        require_tld: true,
        allow_underscores: false,
        allow_trailing_dot: false
    };
    function isFQDN(str, options) {
        (0, _assertString2.default)(str);
        options = (0, _merge2.default)(options, default_fqdn_options);
        if (options.allow_trailing_dot && str[str.length - 1] === '.') {
            str = str.substring(0, str.length - 1);
        }
        var parts = str.split('.');
        if (options.require_tld) {
            var tld = parts.pop();
            if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
                return false;
            }
            if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
                return false;
            }
        }
        for (var part, i = 0;i < parts.length; i++) {
            part = parts[i];
            if (options.allow_underscores) {
                part = part.replace(/_/g, '');
            }
            if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
                return false;
            }
            if (/[\uff01-\uff5e]/.test(part)) {
                return false;
            }
            if (part[0] === '-' || part[part.length - 1] === '-') {
                return false;
            }
        }
        return true;
    }
    
    module.exports = exports['default'];
});
var isFQDN = unwrapExports(isFQDN_1)

var isFQDN$1 = /*#__PURE__*/Object.freeze({
  default: isFQDN,
  __moduleExports: isFQDN_1
});

var _isByteLength = ( isByteLength$1 && isByteLength ) || isByteLength$1;

var _isFQDN = ( isFQDN$1 && isFQDN ) || isFQDN$1;

var isEmail_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isEmail;
    var _assertString2 = _interopRequireDefault(_assertString);
    var _merge2 = _interopRequireDefault(_merge);
    var _isByteLength2 = _interopRequireDefault(_isByteLength);
    var _isFQDN2 = _interopRequireDefault(_isFQDN);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    
    var default_email_options = {
        allow_display_name: false,
        require_display_name: false,
        allow_utf8_local_part: true,
        require_tld: true
    };
    var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
    var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
    var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
    var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
    var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
    function isEmail(str, options) {
        (0, _assertString2.default)(str);
        options = (0, _merge2.default)(options, default_email_options);
        if (options.require_display_name || options.allow_display_name) {
            var display_email = str.match(displayName);
            if (display_email) {
                str = display_email[1];
            } else if (options.require_display_name) {
                return false;
            }
        }
        var parts = str.split('@');
        var domain = parts.pop();
        var user = parts.join('@');
        var lower_domain = domain.toLowerCase();
        if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
            user = user.replace(/\./g, '').toLowerCase();
        }
        if (!(0, _isByteLength2.default)(user, {
            max: 64
        }) || !(0, _isByteLength2.default)(domain, {
            max: 254
        })) {
            return false;
        }
        if (!(0, _isFQDN2.default)(domain, {
            require_tld: options.require_tld
        })) {
            return false;
        }
        if (user[0] === '"') {
            user = user.slice(1, user.length - 1);
            return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
        }
        var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
        var user_parts = user.split('.');
        for (var i = 0;i < user_parts.length; i++) {
            if (!pattern.test(user_parts[i])) {
                return false;
            }
        }
        return true;
    }
    
    module.exports = exports['default'];
});
var isEmail = unwrapExports(isEmail_1)

var validate$7 = function (value) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return isEmail(String(val)); });
    }
    return isEmail(String(value));
};

function ext (files, extensions) {
    var regex = new RegExp((".(" + (extensions.join('|')) + ")$"), 'i');
    return files.every(function (file) { return regex.test(file.name); });
}

function image (files) { return files.every(function (file) { return /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(file.name); }); }

var validate$8 = function (value, options) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$8(val, options); });
    }
    return !(!options.filter(function (option) { return option == value; }).length);
};

var isIP_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isIP;
    var _assertString2 = _interopRequireDefault(_assertString);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    
    var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
    var ipv6Block = /^[0-9A-F]{1,4}$/i;
    function isIP(str) {
        var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        (0, _assertString2.default)(str);
        version = String(version);
        if (!version) {
            return isIP(str, 4) || isIP(str, 6);
        } else if (version === '4') {
            if (!ipv4Maybe.test(str)) {
                return false;
            }
            var parts = str.split('.').sort(function (a, b) {
                return a - b;
            });
            return parts[3] <= 255;
        } else if (version === '6') {
            var blocks = str.split(':');
            var foundOmissionBlock = false;
            var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
            var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;
            if (blocks.length > expectedNumberOfBlocks) {
                return false;
            }
            if (str === '::') {
                return true;
            } else if (str.substr(0, 2) === '::') {
                blocks.shift();
                blocks.shift();
                foundOmissionBlock = true;
            } else if (str.substr(str.length - 2) === '::') {
                blocks.pop();
                blocks.pop();
                foundOmissionBlock = true;
            }
            for (var i = 0;i < blocks.length; ++i) {
                if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
                    if (foundOmissionBlock) {
                        return false;
                    }
                    foundOmissionBlock = true;
                } else if (foundIPv4TransitionBlock && i === blocks.length - 1) ; else if (!ipv6Block.test(blocks[i])) {
                    return false;
                }
            }
            if (foundOmissionBlock) {
                return blocks.length >= 1;
            }
            return blocks.length === expectedNumberOfBlocks;
        }
        return false;
    }
    
    module.exports = exports['default'];
});
var isIP = unwrapExports(isIP_1)

var isIP$1 = /*#__PURE__*/Object.freeze({
  default: isIP,
  __moduleExports: isIP_1
});

function ip (value, ref) {
    if ( ref === void 0 ) ref = [];
    var version = ref[0]; if ( version === void 0 ) version = 4;

    if (isNullOrUndefined(value)) {
        value = '';
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return isIP(val, version); });
    }
    return isIP(value, version);
}

function is (value, ref) {
	if ( ref === void 0 ) ref = [];
	var other = ref[0];

	return value === other;
}

function is_not (value, ref) {
	if ( ref === void 0 ) ref = [];
	var other = ref[0];

	return value !== other;
}

var compare = function (value, length, max) {
    if (max === undefined) {
        return value.length === length;
    }
    max = Number(max);
    return value.length >= length && value.length <= max;
};
function length (value, ref) {
    var length = ref[0];
    var max = ref[1]; if ( max === void 0 ) max = undefined;

    length = Number(length);
    if (value === undefined || value === null) {
        return false;
    }
    if (typeof value === 'number') {
        value = String(value);
    }
    if (!value.length) {
        value = toArray(value);
    }
    return compare(value, length, max);
}

function integer (value) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return /^-?[0-9]+$/.test(String(val)); });
    }
    return /^-?[0-9]+$/.test(String(value));
}

function max$1 (value, ref) {
    var length = ref[0];

    if (value === undefined || value === null) {
        return length >= 0;
    }
    return String(value).length <= length;
}

function max_value (value, ref) {
    var max = ref[0];

    if (Array.isArray(value) || value === null || value === undefined || value === '') {
        return false;
    }
    return Number(value) <= max;
}

function mimes (files, mimes) {
    var regex = new RegExp(((mimes.join('|').replace('*', '.+')) + "$"), 'i');
    return files.every(function (file) { return regex.test(file.type); });
}

function min$1 (value, ref) {
    var length = ref[0];

    if (value === undefined || value === null) {
        return false;
    }
    return String(value).length >= length;
}

function min_value (value, ref) {
    var min = ref[0];

    if (Array.isArray(value) || value === null || value === undefined || value === '') {
        return false;
    }
    return Number(value) >= min;
}

var validate$9 = function (value, options) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$9(val, options); });
    }
    return !options.filter(function (option) { return option == value; }).length;
};

function numeric (value) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return /^[0-9]+$/.test(String(val)); });
    }
    return /^[0-9]+$/.test(String(value));
}

function regex (value, ref) {
    var regex = ref[0];
    var flags = ref.slice(1);

    if (regex instanceof RegExp) {
        return regex.test(value);
    }
    return new RegExp(regex, flags).test(String(value));
}

function required (value, ref) {
    if ( ref === void 0 ) ref = [];
    var invalidateFalse = ref[0]; if ( invalidateFalse === void 0 ) invalidateFalse = false;

    if (Array.isArray(value)) {
        return !(!value.length);
    }
    if (value === false && invalidateFalse) {
        return false;
    }
    if (value === undefined || value === null) {
        return false;
    }
    return !(!String(value).trim().length);
}

function size (files, ref) {
    var size = ref[0];

    if (isNaN(size)) {
        return false;
    }
    var nSize = Number(size) * 1024;
    for (var i = 0;i < files.length; i++) {
        if (files[i].size > nSize) {
            return false;
        }
    }
    return true;
}

var _isIP = ( isIP$1 && isIP ) || isIP$1;

var isURL_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isURL;
    var _assertString2 = _interopRequireDefault(_assertString);
    var _isFQDN2 = _interopRequireDefault(_isFQDN);
    var _isIP2 = _interopRequireDefault(_isIP);
    var _merge2 = _interopRequireDefault(_merge);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    
    var default_url_options = {
        protocols: ['http','https','ftp'],
        require_tld: true,
        require_protocol: false,
        require_host: true,
        require_valid_protocol: true,
        allow_underscores: false,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false
    };
    var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
    function isRegExp(obj) {
        return Object.prototype.toString.call(obj) === '[object RegExp]';
    }
    
    function checkHost(host, matches) {
        for (var i = 0;i < matches.length; i++) {
            var match = matches[i];
            if (host === match || isRegExp(match) && match.test(host)) {
                return true;
            }
        }
        return false;
    }
    
    function isURL(url, options) {
        (0, _assertString2.default)(url);
        if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
            return false;
        }
        if (url.indexOf('mailto:') === 0) {
            return false;
        }
        options = (0, _merge2.default)(options, default_url_options);
        var protocol = void 0, auth = void 0, host = void 0, hostname = void 0, port = void 0, port_str = void 0, split = void 0, ipv6 = void 0;
        split = url.split('#');
        url = split.shift();
        split = url.split('?');
        url = split.shift();
        split = url.split('://');
        if (split.length > 1) {
            protocol = split.shift();
            if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
                return false;
            }
        } else if (options.require_protocol) {
            return false;
        } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
            split[0] = url.substr(2);
        }
        url = split.join('://');
        if (url === '') {
            return false;
        }
        split = url.split('/');
        url = split.shift();
        if (url === '' && !options.require_host) {
            return true;
        }
        split = url.split('@');
        if (split.length > 1) {
            auth = split.shift();
            if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
                return false;
            }
        }
        hostname = split.join('@');
        port_str = null;
        ipv6 = null;
        var ipv6_match = hostname.match(wrapped_ipv6);
        if (ipv6_match) {
            host = '';
            ipv6 = ipv6_match[1];
            port_str = ipv6_match[2] || null;
        } else {
            split = hostname.split(':');
            host = split.shift();
            if (split.length) {
                port_str = split.join(':');
            }
        }
        if (port_str !== null) {
            port = parseInt(port_str, 10);
            if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
                return false;
            }
        }
        if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6))) {
            return false;
        }
        host = host || ipv6;
        if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
            return false;
        }
        if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
            return false;
        }
        return true;
    }
    
    module.exports = exports['default'];
});
var isURL = unwrapExports(isURL_1)

function url (value, ref) {
    if ( ref === void 0 ) ref = [];
    var requireProtocol = ref[0]; if ( requireProtocol === void 0 ) requireProtocol = false;

    var options = {
        require_protocol: !(!requireProtocol),
        allow_underscores: true
    };
    if (isNullOrUndefined(value)) {
        value = '';
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return isURL(val, options); });
    }
    return isURL(value, options);
}

var Rules = {
    after: after,
    alpha_dash: validate$1,
    alpha_num: validate$2,
    alpha_spaces: validate$3,
    alpha: validate,
    before: before,
    between: validate$4,
    confirmed: confirmed,
    credit_card: credit_card,
    date_between: date_between,
    date_format: date_format,
    decimal: validate$5,
    digits: validate$6,
    dimensions: dimensions,
    email: validate$7,
    ext: ext,
    image: image,
    in: validate$8,
    integer: integer,
    length: length,
    ip: ip,
    is_not: is_not,
    is: is,
    max: max$1,
    max_value: max_value,
    mimes: mimes,
    min: min$1,
    min_value: min_value,
    not_in: validate$9,
    numeric: numeric,
    regex: regex,
    required: required,
    size: size,
    url: url
}

var normalize = function (fields) {
    if (Array.isArray(fields)) {
        return fields.reduce(function (prev, curr) {
            if (~curr.indexOf('.')) {
                prev[curr.split('.')[1]] = curr;
            } else {
                prev[curr] = curr;
            }
            return prev;
        }, {});
    }
    return fields;
};
var combine = function (lhs, rhs) {
    var mapper = {
        pristine: function (lhs, rhs) { return lhs && rhs; },
        dirty: function (lhs, rhs) { return lhs || rhs; },
        touched: function (lhs, rhs) { return lhs || rhs; },
        untouched: function (lhs, rhs) { return lhs && rhs; },
        valid: function (lhs, rhs) { return lhs && rhs; },
        invalid: function (lhs, rhs) { return lhs || rhs; },
        pending: function (lhs, rhs) { return lhs || rhs; },
        required: function (lhs, rhs) { return lhs || rhs; },
        validated: function (lhs, rhs) { return lhs && rhs; }
    };
    return Object.keys(mapper).reduce(function (flags, flag) {
        flags[flag] = mapper[flag](lhs[flag], rhs[flag]);
        return flags;
    }, {});
};
var mapScope = function (scope, deep) {
    if ( deep === void 0 ) deep = true;

    return Object.keys(scope).reduce(function (flags, field) {
    if (!flags) {
        flags = assign({}, scope[field]);
        return flags;
    }
    var isScope = field.indexOf('$') === 0;
    if (deep && isScope) {
        return combine(mapScope(scope[field]), flags);
    } else if (!deep && isScope) {
        return flags;
    }
    flags = combine(flags, scope[field]);
    return flags;
}, null);
};
var mapFields = function (fields) {
    if (!fields) {
        return function () {
            return mapScope(this.$validator.flags);
        };
    }
    var normalized = normalize(fields);
    return Object.keys(normalized).reduce(function (prev, curr) {
        var field = normalized[curr];
        prev[curr] = function mappedField() {
            if (this.$validator.flags[field]) {
                return this.$validator.flags[field];
            }
            if (normalized[curr] === '*') {
                return mapScope(this.$validator.flags, false);
            }
            var index = field.indexOf('.');
            if (index <= 0) {
                return {};
            }
            var ref = field.split('.');
            var scope = ref[0];
            var name = ref.slice(1);
            scope = this.$validator.flags[("$" + scope)];
            name = name.join('.');
            if (name === '*' && scope) {
                return mapScope(scope);
            }
            if (scope && scope[name]) {
                return scope[name];
            }
            return {};
        };
        return prev;
    }, {});
};

var ErrorComponent = {
    name: 'vv-error',
    inject: ['$validator'],
    functional: true,
    props: {
        for: {
            type: String,
            required: true
        },
        tag: {
            type: String,
            default: 'span'
        }
    },
    render: function render(createElement, ref) {
        var props = ref.props;
        var injections = ref.injections;

        return createElement(props.tag, injections.$validator.errors.first(props.for));
    }
};

var version = '2.0.8';
var rulesPlugin = function (ref) {
    var Validator$$1 = ref.Validator;

    Object.keys(Rules).forEach(function (rule) {
        Validator$$1.extend(rule, Rules[rule]);
    });
    Validator$$1.localize('en', locale);
};
use(rulesPlugin);
var index_esm = {
    install: install,
    use: use,
    directive: directive,
    mixin: mixin,
    mapFields: mapFields,
    Validator: Validator,
    ErrorBag: ErrorBag,
    ErrorComponent: ErrorComponent,
    Rules: Rules,
    version: version
}

/* harmony default export */ __webpack_exports__["a"] = (index_esm);



/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  getMessage: function getMessage(field, args) {
    return "The " + field + " field may not be smaller than " + args[0] + " characters";
  },
  validate: function validate(value, args) {
    return value.length >= args[0];
  }
});

/***/ })
],[239]);
//# sourceMappingURL=docs.ec5ad5ec12a8b4ef7dba.js.map
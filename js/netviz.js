! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.netviz = e()
    }
}(function() {
    var e;
    return function t(e, n, r) {
        function i(a, s) {
            if (!n[a]) {
                if (!e[a]) {
                    var u = "function" == typeof require && require;
                    if (!s && u) return u(a, !0);
                    if (o) return o(a, !0);
                    var f = new Error("Cannot find module '" + a + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = n[a] = {
                    exports: {}
                };
                e[a][0].call(l.exports, function(t) {
                    var n = e[a][1][t];
                    return i(n ? n : t)
                }, l, l.exports, t, e, n, r)
            }
            return n[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
        return i
    }({
        1: [function(e, t, n) {}, {}],
        2: [function(e, t, n) {
            (function(e) {
                function t(e, t) {
                    for (var n = 0, r = e.length - 1; r >= 0; r--) {
                        var i = e[r];
                        "." === i ? e.splice(r, 1) : ".." === i ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--)
                    }
                    if (t)
                        for (; n--; n) e.unshift("..");
                    return e
                }

                function r(e, t) {
                    if (e.filter) return e.filter(t);
                    for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
                    return n
                }
                var i = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                    o = function(e) {
                        return i.exec(e).slice(1)
                    };
                n.resolve = function() {
                    for (var n = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
                        var a = o >= 0 ? arguments[o] : e.cwd();
                        if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                        a && (n = a + "/" + n, i = "/" === a.charAt(0))
                    }
                    return n = t(r(n.split("/"), function(e) {
                        return !!e
                    }), !i).join("/"), (i ? "/" : "") + n || "."
                }, n.normalize = function(e) {
                    var i = n.isAbsolute(e),
                        o = "/" === a(e, -1);
                    return e = t(r(e.split("/"), function(e) {
                        return !!e
                    }), !i).join("/"), e || i || (e = "."), e && o && (e += "/"), (i ? "/" : "") + e
                }, n.isAbsolute = function(e) {
                    return "/" === e.charAt(0)
                }, n.join = function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return n.normalize(r(e, function(e, t) {
                        if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                        return e
                    }).join("/"))
                }, n.relative = function(e, t) {
                    function r(e) {
                        for (var t = 0; t < e.length && "" === e[t]; t++);
                        for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                        return t > n ? [] : e.slice(t, n - t + 1)
                    }
                    e = n.resolve(e).substr(1), t = n.resolve(t).substr(1);
                    for (var i = r(e.split("/")), o = r(t.split("/")), a = Math.min(i.length, o.length), s = a, u = 0; a > u; u++)
                        if (i[u] !== o[u]) {
                            s = u;
                            break
                        }
                    for (var f = [], u = s; u < i.length; u++) f.push("..");
                    return f = f.concat(o.slice(s)), f.join("/")
                }, n.sep = "/", n.delimiter = ":", n.dirname = function(e) {
                    var t = o(e),
                        n = t[0],
                        r = t[1];
                    return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : "."
                }, n.basename = function(e, t) {
                    var n = o(e)[2];
                    return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
                }, n.extname = function(e) {
                    return o(e)[3]
                };
                var a = "b" === "ab".substr(-1) ? function(e, t, n) {
                    return e.substr(t, n)
                } : function(e, t, n) {
                    return 0 > t && (t = e.length + t), e.substr(t, n)
                }
            }).call(this, e("_process"))
        }, {
            _process: 3
        }],
        3: [function(e, t, n) {
            function r() {
                l = !1, s.length ? f = s.concat(f) : h = -1, f.length && i()
            }

            function i() {
                if (!l) {
                    var e = setTimeout(r);
                    l = !0;
                    for (var t = f.length; t;) {
                        for (s = f, f = []; ++h < t;) s[h].run();
                        h = -1, t = f.length
                    }
                    s = null, l = !1, clearTimeout(e)
                }
            }

            function o(e, t) {
                this.fun = e, this.array = t
            }

            function a() {}
            var s, u = t.exports = {},
                f = [],
                l = !1,
                h = -1;
            u.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                f.push(new o(e, t)), 1 !== f.length || l || setTimeout(i, 0)
            }, o.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = a, u.addListener = a, u.once = a, u.off = a, u.removeListener = a, u.removeAllListeners = a, u.emit = a, u.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, u.cwd = function() {
                return "/"
            }, u.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, u.umask = function() {
                return 0
            }
        }, {}],
        4: [function(e, t, n) {
            /**
             * @license
             * Copyright (c) 2012-2013 Chris Pettitt
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            t.exports = {
                graphlib: e("./lib/graphlib"),
                dagre: e("./lib/dagre"),
                intersect: e("./lib/intersect"),
                render: e("./lib/render"),
                util: e("./lib/util"),
                version: e("./lib/version")
            }
        }, {
            "./lib/dagre": 11,
            "./lib/graphlib": 12,
            "./lib/intersect": 13,
            "./lib/render": 28,
            "./lib/util": 30,
            "./lib/version": 31
        }],
        5: [function(e, t, n) {
            function r(e, t, n, r) {
                var i = e.append("marker").attr("id", t).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto"),
                    o = i.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
                a.applyStyle(o, n[r + "Style"])
            }

            function i(e, t, n, r) {
                var i = e.append("marker").attr("id", t).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto"),
                    o = i.append("path").attr("d", "M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
                a.applyStyle(o, n[r + "Style"])
            }

            function o(e, t, n, r) {
                var i = e.append("marker").attr("id", t).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto"),
                    o = i.append("path").attr("d", "M 0 5 L 10 5").style("stroke-width", 1).style("stroke-dasharray", "1,0");
                a.applyStyle(o, n[r + "Style"])
            }
            var a = e("./util");
            t.exports = {
                "default": r,
                normal: r,
                vee: i,
                undirected: o
            }
        }, {
            "./util": 30
        }],
        6: [function(e, t, n) {
            function r(e, t) {
                var n = t.nodes().filter(function(e) {
                        return i.isSubgraph(t, e)
                    }),
                    r = e.selectAll("g.cluster").data(n, function(e) {
                        return e
                    });
                return r.selectAll("*").remove(), r.enter().append("g").attr("class", "cluster").attr("id", function(e) {
                    var n = t.node(e);
                    return n.id
                }).style("opacity", 0), i.applyTransition(r, t).style("opacity", 1), r.each(function(e) {
                    var n = t.node(e),
                        r = d3.select(this),
                        i = r.append("g").attr("class", "label");
                    d3.select(this).append("rect"), o(i, n, n.clusterLabelPos)
                }), r.selectAll("rect").each(function(e) {
                    var n = t.node(e),
                        r = d3.select(this);
                    i.applyStyle(r, n.style)
                }), i.applyTransition(r.exit(), t).style("opacity", 0).remove(), r
            }
            var i = e("./util"),
                o = e("./label/add-label");
            t.exports = r
        }, {
            "./label/add-label": 21,
            "./util": 30
        }],
        7: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = e.selectAll("g.edgeLabel").data(t.edges(), function(e) {
                    return a.edgeToId(e)
                }).classed("update", !0);
                return n.selectAll("*").remove(), n.enter().append("g").classed("edgeLabel", !0).style("opacity", 0), n.each(function(e) {
                    var n = t.edge(e),
                        r = o(s.select(this), t.edge(e), 0, 0).classed("label", !0),
                        a = r.node().getBBox();
                    n.labelId && r.attr("id", n.labelId), i.has(n, "width") || (n.width = a.width), i.has(n, "height") || (n.height = a.height)
                }), a.applyTransition(n.exit(), t).style("opacity", 0).remove(), n
            }
            var i = e("./lodash"),
                o = e("./label/add-label"),
                a = e("./util"),
                s = e("./d3");
            t.exports = r
        }, {
            "./d3": 10,
            "./label/add-label": 21,
            "./lodash": 24,
            "./util": 30
        }],
        8: [function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                var r = e.selectAll("g.edgePath").data(t.edges(), function(e) {
                    return h.edgeToId(e)
                }).classed("update", !0);
                return s(r, t), u(r, t), h.applyTransition(r, t).style("opacity", 1), r.each(function(e) {
                    var n = c.select(this),
                        r = t.edge(e);
                    r.elem = this, r.id && n.attr("id", r.id), h.applyClass(n, r["class"], (n.classed("update") ? "update " : "") + "edgePath")
                }), r.selectAll("path.path").each(function(e) {
                    var n = t.edge(e);
                    n.arrowheadId = f.uniqueId("arrowhead");
                    var r = c.select(this).attr("marker-end", function() {
                        return "url(#" + n.arrowheadId + ")"
                    }).style("fill", "none");
                    h.applyTransition(r, t).attr("d", function(e) {
                        return i(t, e)
                    }), h.applyStyle(r, n.style)
                }), r.selectAll("defs *").remove(), r.selectAll("defs").each(function(e) {
                    var r = t.edge(e),
                        i = n[r.arrowhead];
                    i(c.select(this), r.arrowheadId, r, "arrowhead")
                }), r
            }

            function i(e, t) {
                var n = e.edge(t),
                    r = e.node(t.v),
                    i = e.node(t.w),
                    a = n.points.slice(1, n.points.length - 1);
                return a.unshift(l(r, a[0])), a.push(l(i, a[a.length - 1])), o(n, a)
            }

            function o(e, t) {
                var n = c.svg.line().x(function(e) {
                    return e.x
                }).y(function(e) {
                    return e.y
                });
                return f.has(e, "lineInterpolate") && n.interpolate(e.lineInterpolate), f.has(e, "lineTension") && n.tension(Number(e.lineTension)), n(t)
            }

            function a(e) {
                var t = e.getBBox(),
                    n = e.getTransformToElement(e.ownerSVGElement).translate(t.width / 2, t.height / 2);
                return {
                    x: n.e,
                    y: n.f
                }
            }

            function s(e, t) {
                var n = e.enter().append("g").attr("class", "edgePath").style("opacity", 0);
                n.append("path").attr("class", "path").attr("d", function(e) {
                    var n = t.edge(e),
                        r = t.node(e.v).elem,
                        i = f.range(n.points.length).map(function() {
                            return a(r)
                        });
                    return o(n, i)
                }), n.append("defs")
            }

            function u(e, t) {
                var n = e.exit();
                h.applyTransition(n, t).style("opacity", 0).remove(), h.applyTransition(n.select("path.path"), t).attr("d", function(e) {
                    var n = t.node(e.v);
                    if (n) {
                        var r = f.range(this.pathSegList.length).map(function() {
                            return n
                        });
                        return o({}, r)
                    }
                    return c.select(this).attr("d")
                })
            }
            var f = e("./lodash"),
                l = e("./intersect/intersect-node"),
                h = e("./util"),
                c = e("./d3");
            t.exports = r
        }, {
            "./d3": 10,
            "./intersect/intersect-node": 17,
            "./lodash": 24,
            "./util": 30
        }],
        9: [function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                var r = t.nodes().filter(function(e) {
                        return !a.isSubgraph(t, e)
                    }),
                    u = e.selectAll("g.node").data(r, function(e) {
                        return e
                    }).classed("update", !0);
                return u.selectAll("*").remove(), u.enter().append("g").attr("class", "node").style("opacity", 0), u.each(function(e) {
                    var r = t.node(e),
                        u = s.select(this),
                        f = u.append("g").attr("class", "label"),
                        l = o(f, r),
                        h = n[r.shape],
                        c = i.pick(l.node().getBBox(), "width", "height");
                    r.elem = this, r.id && u.attr("id", r.id), r.labelId && f.attr("id", r.labelId), a.applyClass(u, r["class"], (u.classed("update") ? "update " : "") + "node"), i.has(r, "width") && (c.width = r.width), i.has(r, "height") && (c.height = r.height), c.width += r.paddingLeft + r.paddingRight, c.height += r.paddingTop + r.paddingBottom, f.attr("transform", "translate(" + (r.paddingLeft - r.paddingRight) / 2 + "," + (r.paddingTop - r.paddingBottom) / 2 + ")");
                    var p = h(s.select(this), c, r);
                    a.applyStyle(p, r.style);
                    var d = p.node().getBBox();
                    r.width = d.width, r.height = d.height
                }), a.applyTransition(u.exit(), t).style("opacity", 0).remove(), u
            }
            var i = e("./lodash"),
                o = e("./label/add-label"),
                a = e("./util"),
                s = e("./d3");
            t.exports = r
        }, {
            "./d3": 10,
            "./label/add-label": 21,
            "./lodash": 24,
            "./util": 30
        }],
        10: [function(e, t, n) {
            t.exports = window.d3
        }, {}],
        11: [function(e, t, n) {
            var r;
            if (e) try {
                r = e("dagre")
            } catch (i) {}
            r || (r = window.dagre), t.exports = r
        }, {
            dagre: 32
        }],
        12: [function(e, t, n) {
            var r;
            if (e) try {
                r = e("graphlib")
            } catch (i) {}
            r || (r = window.graphlib), t.exports = r
        }, {
            graphlib: 62
        }],
        13: [function(e, t, n) {
            t.exports = {
                node: e("./intersect-node"),
                circle: e("./intersect-circle"),
                ellipse: e("./intersect-ellipse"),
                polygon: e("./intersect-polygon"),
                rect: e("./intersect-rect")
            }
        }, {
            "./intersect-circle": 14,
            "./intersect-ellipse": 15,
            "./intersect-node": 17,
            "./intersect-polygon": 18,
            "./intersect-rect": 19
        }],
        14: [function(e, t, n) {
            function r(e, t, n) {
                return i(e, t, t, n)
            }
            var i = e("./intersect-ellipse");
            t.exports = r
        }, {
            "./intersect-ellipse": 15
        }],
        15: [function(e, t, n) {
            function r(e, t, n, r) {
                var i = e.x,
                    o = e.y,
                    a = i - r.x,
                    s = o - r.y,
                    u = Math.sqrt(t * t * s * s + n * n * a * a),
                    f = Math.abs(t * n * a / u);
                r.x < i && (f = -f);
                var l = Math.abs(t * n * s / u);
                return r.y < o && (l = -l), {
                    x: i + f,
                    y: o + l
                }
            }
            t.exports = r
        }, {}],
        16: [function(e, t, n) {
            function r(e, t, n, r) {
                var o, a, s, u, f, l, h, c, p, d, g, y, v, m, b;
                return o = t.y - e.y, s = e.x - t.x, f = t.x * e.y - e.x * t.y, p = o * n.x + s * n.y + f, d = o * r.x + s * r.y + f, 0 !== p && 0 !== d && i(p, d) || (a = r.y - n.y, u = n.x - r.x, l = r.x * n.y - n.x * r.y, h = a * e.x + u * e.yy + l, c = a * t.x + u * t.y + l, 0 !== h && 0 !== c && i(h, c) || (g = o * u - a * s, 0 === g)) ? void 0 : (y = Math.abs(g / 2), v = s * l - u * f, m = 0 > v ? (v - y) / g : (v + y) / g, v = a * f - o * l, b = 0 > v ? (v - y) / g : (v + y) / g, {
                    x: m,
                    y: b
                })
            }

            function i(e, t) {
                return e * t > 0
            }
            t.exports = r
        }, {}],
        17: [function(e, t, n) {
            function r(e, t) {
                return e.intersect(t)
            }
            t.exports = r
        }, {}],
        18: [function(e, t, n) {
            function r(e, t, n) {
                var r = e.x,
                    o = e.y,
                    a = [],
                    s = Number.POSITIVE_INFINITY,
                    u = Number.POSITIVE_INFINITY;
                t.forEach(function(e) {
                    s = Math.min(s, e.x), u = Math.min(u, e.y)
                });
                for (var f = r - e.width / 2 - s, l = o - e.height / 2 - u, h = 0; h < t.length; h++) {
                    var c = t[h],
                        p = t[h < t.length - 1 ? h + 1 : 0],
                        d = i(e, n, {
                            x: f + c.x,
                            y: l + c.y
                        }, {
                            x: f + p.x,
                            y: l + p.y
                        });
                    d && a.push(d)
                }
                return a.length ? (a.length > 1 && a.sort(function(e, t) {
                    var r = e.x - n.x,
                        i = e.y - n.y,
                        o = Math.sqrt(r * r + i * i),
                        a = t.x - n.x,
                        s = t.y - n.y,
                        u = Math.sqrt(a * a + s * s);
                    return u > o ? -1 : o === u ? 0 : 1
                }), a[0]) : (console.log("NO INTERSECTION FOUND, RETURN NODE CENTER", e), e)
            }
            var i = e("./intersect-line");
            t.exports = r
        }, {
            "./intersect-line": 16
        }],
        19: [function(e, t, n) {
            function r(e, t) {
                var n, r, i = e.x,
                    o = e.y,
                    a = t.x - i,
                    s = t.y - o,
                    u = e.width / 2,
                    f = e.height / 2;
                return Math.abs(s) * u > Math.abs(a) * f ? (0 > s && (f = -f), n = 0 === s ? 0 : f * a / s, r = f) : (0 > a && (u = -u), n = u, r = 0 === a ? 0 : u * s / a), {
                    x: i + n,
                    y: o + r
                }
            }
            t.exports = r
        }, {}],
        20: [function(e, t, n) {
            function r(e, t) {
                var n = e.append("foreignObject").attr("width", "100000"),
                    r = n.append("xhtml:div"),
                    o = t.label;
                switch (typeof o) {
                    case "function":
                        r.insert(o);
                        break;
                    case "object":
                        r.insert(function() {
                            return o
                        });
                        break;
                    default:
                        r.html(o)
                }
                i.applyStyle(r, t.labelStyle), r.style("display", "inline-block"), r.style("white-space", "nowrap");
                var a, s;
                return r.each(function() {
                    a = this.clientWidth, s = this.clientHeight
                }), n.attr("width", a).attr("height", s), n
            }
            var i = e("../util");
            t.exports = r
        }, {
            "../util": 30
        }],
        21: [function(e, t, n) {
            function r(e, t, n) {
                var r = t.label,
                    s = e.append("g");
                "svg" === t.labelType ? a(s, t) : "string" != typeof r || "html" === t.labelType ? o(s, t) : i(s, t);
                var u = s.node().getBBox();
                switch (n) {
                    case "top":
                        y = -t.height / 2;
                        break;
                    case "bottom":
                        y = t.height / 2 - u.height;
                        break;
                    default:
                        y = -u.height / 2
                }
                return s.attr("transform", "translate(" + -u.width / 2 + "," + y + ")"), s
            }
            var i = e("./add-text-label"),
                o = e("./add-html-label"),
                a = e("./add-svg-label");
            t.exports = r
        }, {
            "./add-html-label": 20,
            "./add-svg-label": 22,
            "./add-text-label": 23
        }],
        22: [function(e, t, n) {
            function r(e, t) {
                var n = e;
                return n.node().appendChild(t.label), i.applyStyle(n, t.labelStyle), n
            }
            var i = e("../util");
            t.exports = r
        }, {
            "../util": 30
        }],
        23: [function(e, t, n) {
            function r(e, t) {
                for (var n = e.append("text"), r = i(t.label).split("\n"), a = 0; a < r.length; a++) n.append("tspan").attr("xml:space", "preserve").attr("dy", "1em").attr("x", "1").text(r[a]);
                return o.applyStyle(n, t.labelStyle), n
            }

            function i(e) {
                for (var t, n = "", r = !1, i = 0; i < e.length; ++i)
                    if (t = e[i], r) {
                        switch (t) {
                            case "n":
                                n += "\n";
                                break;
                            default:
                                n += t
                        }
                        r = !1
                    } else "\\" === t ? r = !0 : n += t;
                return n
            }
            var o = e("../util");
            t.exports = r
        }, {
            "../util": 30
        }],
        24: [function(e, t, n) {
            var r;
            if (e) try {
                r = e("lodash")
            } catch (i) {}
            r || (r = window._), t.exports = r
        }, {
            lodash: 82
        }],
        25: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                function n(e) {
                    var n = t.node(e);
                    return "translate(" + n.x + "," + n.y + ")"
                }
                var r = e.filter(function() {
                    return !o.select(this).classed("update")
                });
                r.attr("transform", n), i.applyTransition(e, t).style("opacity", 1).attr("transform", n), i.applyTransition(r.selectAll("rect"), t).attr("width", function(e) {
                    return t.node(e).width
                }).attr("height", function(e) {
                    return t.node(e).height
                }).attr("x", function(e) {
                    var n = t.node(e);
                    return -n.width / 2
                }).attr("y", function(e) {
                    var n = t.node(e);
                    return -n.height / 2
                })
            }
            var i = e("./util"),
                o = e("./d3");
            t.exports = r
        }, {
            "./d3": 10,
            "./util": 30
        }],
        26: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                function n(e) {
                    var n = t.edge(e);
                    return a.has(n, "x") ? "translate(" + n.x + "," + n.y + ")" : ""
                }
                var r = e.filter(function() {
                    return !o.select(this).classed("update")
                });
                r.attr("transform", n), i.applyTransition(e, t).style("opacity", 1).attr("transform", n)
            }
            var i = e("./util"),
                o = e("./d3"),
                a = e("./lodash");
            t.exports = r
        }, {
            "./d3": 10,
            "./lodash": 24,
            "./util": 30
        }],
        27: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                function n(e) {
                    var n = t.node(e);
                    return "translate(" + n.x + "," + n.y + ")"
                }
                var r = e.filter(function() {
                    return !o.select(this).classed("update")
                });
                r.attr("transform", n), i.applyTransition(e, t).style("opacity", 1).attr("transform", n)
            }
            var i = e("./util"),
                o = e("./d3");
            t.exports = r
        }, {
            "./d3": 10,
            "./util": 30
        }],
        28: [function(e, t, n) {
            function r() {
                var t = e("./create-nodes"),
                    n = e("./create-clusters"),
                    r = e("./create-edge-labels"),
                    s = e("./create-edge-paths"),
                    f = e("./position-nodes"),
                    l = e("./position-edge-labels"),
                    h = e("./position-clusters"),
                    c = e("./shapes"),
                    p = e("./arrows"),
                    d = function(e, d) {
                        i(d);
                        var g = a(e, "output"),
                            y = a(g, "clusters"),
                            v = a(g, "edgePaths"),
                            m = r(a(g, "edgeLabels"), d),
                            b = t(a(g, "nodes"), d, c);
                        u(d), f(b, d), l(m, d), s(v, d, p);
                        var w = n(y, d);
                        h(w, d), o(d)
                    };
                return d.createNodes = function(e) {
                    return arguments.length ? (t = e, d) : t
                }, d.createClusters = function(e) {
                    return arguments.length ? (n = e, d) : n
                }, d.createEdgeLabels = function(e) {
                    return arguments.length ? (r = e, d) : r
                }, d.createEdgePaths = function(e) {
                    return arguments.length ? (s = e, d) : s
                }, d.shapes = function(e) {
                    return arguments.length ? (c = e, d) : c
                }, d.arrows = function(e) {
                    return arguments.length ? (p = e, d) : p
                }, d
            }

            function i(e) {
                e.nodes().forEach(function(t) {
                    var n = e.node(t);
                    s.has(n, "label") || e.children(t).length || (n.label = t), s.has(n, "paddingX") && s.defaults(n, {
                        paddingLeft: n.paddingX,
                        paddingRight: n.paddingX
                    }), s.has(n, "paddingY") && s.defaults(n, {
                        paddingTop: n.paddingY,
                        paddingBottom: n.paddingY
                    }), s.has(n, "padding") && s.defaults(n, {
                        paddingLeft: n.padding,
                        paddingRight: n.padding,
                        paddingTop: n.padding,
                        paddingBottom: n.padding
                    }), s.defaults(n, f), s.each(["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"], function(e) {
                        n[e] = Number(n[e])
                    }), s.has(n, "width") && (n._prevWidth = n.width), s.has(n, "height") && (n._prevHeight = n.height)
                }), e.edges().forEach(function(t) {
                    var n = e.edge(t);
                    s.has(n, "label") || (n.label = ""), s.defaults(n, l)
                })
            }

            function o(e) {
                s.each(e.nodes(), function(t) {
                    var n = e.node(t);
                    s.has(n, "_prevWidth") ? n.width = n._prevWidth : delete n.width, s.has(n, "_prevHeight") ? n.height = n._prevHeight : delete n.height, delete n._prevWidth, delete n._prevHeight
                })
            }

            function a(e, t) {
                var n = e.select("g." + t);
                return n.empty() && (n = e.append("g").attr("class", t)), n
            }
            var s = e("./lodash"),
                u = e("./dagre").layout;
            t.exports = r;
            var f = {
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    rx: 0,
                    ry: 0,
                    shape: "rect"
                },
                l = {
                    arrowhead: "normal",
                    lineInterpolate: "linear"
                }
        }, {
            "./arrows": 5,
            "./create-clusters": 6,
            "./create-edge-labels": 7,
            "./create-edge-paths": 8,
            "./create-nodes": 9,
            "./dagre": 11,
            "./lodash": 24,
            "./position-clusters": 25,
            "./position-edge-labels": 26,
            "./position-nodes": 27,
            "./shapes": 29
        }],
        29: [function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                var r = e.insert("rect", ":first-child").attr("rx", n.rx).attr("ry", n.ry).attr("x", -t.width / 2).attr("y", -t.height / 2).attr("width", t.width).attr("height", t.height);
                return n.intersect = function(e) {
                    return s(n, e)
                }, r
            }

            function i(e, t, n) {
                var r = t.width / 2,
                    i = t.height / 2,
                    o = e.insert("ellipse", ":first-child").attr("x", -t.width / 2).attr("y", -t.height / 2).attr("rx", r).attr("ry", i);
                return n.intersect = function(e) {
                    return u(n, r, i, e)
                }, o
            }

            function o(e, t, n) {
                var r = Math.max(t.width, t.height) / 2,
                    i = e.insert("circle", ":first-child").attr("x", -t.width / 2).attr("y", -t.height / 2).attr("r", r);
                return n.intersect = function(e) {
                    return f(n, r, e)
                }, i
            }

            function a(e, t, n) {
                var r = t.width * Math.SQRT2 / 2,
                    i = t.height * Math.SQRT2 / 2,
                    o = [{
                        x: 0,
                        y: -i
                    }, {
                        x: -r,
                        y: 0
                    }, {
                        x: 0,
                        y: i
                    }, {
                        x: r,
                        y: 0
                    }],
                    a = e.insert("polygon", ":first-child").attr("points", o.map(function(e) {
                        return e.x + "," + e.y
                    }).join(" "));
                return n.intersect = function(e) {
                    return l(n, o, e)
                }, a
            }
            var s = e("./intersect/intersect-rect"),
                u = e("./intersect/intersect-ellipse"),
                f = e("./intersect/intersect-circle"),
                l = e("./intersect/intersect-polygon");
            t.exports = {
                rect: r,
                ellipse: i,
                circle: o,
                diamond: a
            }
        }, {
            "./intersect/intersect-circle": 14,
            "./intersect/intersect-ellipse": 15,
            "./intersect/intersect-polygon": 18,
            "./intersect/intersect-rect": 19
        }],
        30: [function(e, t, n) {
            function r(e, t) {
                return !!e.children(t).length
            }

            function i(e) {
                return o(e.v) + ":" + o(e.w) + ":" + o(e.name)
            }

            function o(e) {
                return e ? String(e).replace(l, "\\:") : ""
            }

            function a(e, t) {
                t && e.attr("style", t)
            }

            function s(e, t, n) {
                t && e.attr("class", t).attr("class", n + " " + e.attr("class"))
            }

            function u(e, t) {
                var n = t.graph();
                if (f.isPlainObject(n)) {
                    var r = n.transition;
                    if (f.isFunction(r)) return r(e)
                }
                return e
            }
            var f = e("./lodash");
            t.exports = {
                isSubgraph: r,
                edgeToId: i,
                applyStyle: a,
                applyClass: s,
                applyTransition: u
            };
            var l = /:/g
        }, {
            "./lodash": 24
        }],
        31: [function(e, t, n) {
            t.exports = "0.4.8"
        }, {}],
        32: [function(e, t, n) {
            t.exports = {
                graphlib: e("./lib/graphlib"),
                layout: e("./lib/layout"),
                debug: e("./lib/debug"),
                util: {
                    time: e("./lib/util").time,
                    notime: e("./lib/util").notime
                },
                version: e("./lib/version")
            }
        }, {
            "./lib/debug": 37,
            "./lib/graphlib": 38,
            "./lib/layout": 40,
            "./lib/util": 60,
            "./lib/version": 61
        }],
        33: [function(e, t, n) {
            "use strict";

            function r(e) {
                function t(e) {
                    return function(t) {
                        return e.edge(t).weight
                    }
                }
                var n = "greedy" === e.graph().acyclicer ? s(e, t(e)) : i(e);
                a.each(n, function(t) {
                    var n = e.edge(t);
                    e.removeEdge(t), n.forwardName = t.name, n.reversed = !0, e.setEdge(t.w, t.v, n, a.uniqueId("rev"))
                })
            }

            function i(e) {
                function t(o) {
                    a.has(i, o) || (i[o] = !0, r[o] = !0, a.each(e.outEdges(o), function(e) {
                        a.has(r, e.w) ? n.push(e) : t(e.w)
                    }), delete r[o])
                }
                var n = [],
                    r = {},
                    i = {};
                return a.each(e.nodes(), t), n
            }

            function o(e) {
                a.each(e.edges(), function(t) {
                    var n = e.edge(t);
                    if (n.reversed) {
                        e.removeEdge(t);
                        var r = n.forwardName;
                        delete n.reversed, delete n.forwardName, e.setEdge(t.w, t.v, n, r)
                    }
                })
            }
            var a = e("./lodash"),
                s = e("./greedy-fas");
            t.exports = {
                run: r,
                undo: o
            }
        }, {
            "./greedy-fas": 39,
            "./lodash": 41
        }],
        34: [function(e, t, n) {
            function r(e) {
                function t(n) {
                    var r = e.children(n),
                        a = e.node(n);
                    if (r.length && o.each(r, t), o.has(a, "minRank")) {
                        a.borderLeft = [], a.borderRight = [];
                        for (var s = a.minRank, u = a.maxRank + 1; u > s; ++s) i(e, "borderLeft", "_bl", n, a, s), i(e, "borderRight", "_br", n, a, s)
                    }
                }
                o.each(e.children(), t)
            }

            function i(e, t, n, r, i, o) {
                var s = {
                        width: 0,
                        height: 0,
                        rank: o,
                        borderType: t
                    },
                    u = i[t][o - 1],
                    f = a.addDummyNode(e, "border", s, n);
                i[t][o] = f, e.setParent(f, r), u && e.setEdge(u, f, {
                    weight: 1
                })
            }
            var o = e("./lodash"),
                a = e("./util");
            t.exports = r
        }, {
            "./lodash": 41,
            "./util": 60
        }],
        35: [function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e.graph().rankdir.toLowerCase();
                ("lr" === t || "rl" === t) && o(e)
            }

            function i(e) {
                var t = e.graph().rankdir.toLowerCase();
                ("bt" === t || "rl" === t) && s(e), ("lr" === t || "rl" === t) && (f(e), o(e))
            }

            function o(e) {
                h.each(e.nodes(), function(t) {
                    a(e.node(t))
                }), h.each(e.edges(), function(t) {
                    a(e.edge(t))
                })
            }

            function a(e) {
                var t = e.width;
                e.width = e.height, e.height = t
            }

            function s(e) {
                h.each(e.nodes(), function(t) {
                    u(e.node(t))
                }), h.each(e.edges(), function(t) {
                    var n = e.edge(t);
                    h.each(n.points, u), h.has(n, "y") && u(n)
                })
            }

            function u(e) {
                e.y = -e.y
            }

            function f(e) {
                h.each(e.nodes(), function(t) {
                    l(e.node(t))
                }), h.each(e.edges(), function(t) {
                    var n = e.edge(t);
                    h.each(n.points, l), h.has(n, "x") && l(n)
                })
            }

            function l(e) {
                var t = e.x;
                e.x = e.y, e.y = t
            }
            var h = e("./lodash");
            t.exports = {
                adjust: r,
                undo: i
            }
        }, {
            "./lodash": 41
        }],
        36: [function(e, t, n) {
            function r() {
                var e = {};
                e._next = e._prev = e, this._sentinel = e
            }

            function i(e) {
                e._prev._next = e._next, e._next._prev = e._prev, delete e._next, delete e._prev
            }

            function o(e, t) {
                return "_next" !== e && "_prev" !== e ? t : void 0
            }
            t.exports = r, r.prototype.dequeue = function() {
                var e = this._sentinel,
                    t = e._prev;
                return t !== e ? (i(t), t) : void 0
            }, r.prototype.enqueue = function(e) {
                var t = this._sentinel;
                e._prev && e._next && i(e), e._next = t._next, t._next._prev = e, t._next = e, e._prev = t
            }, r.prototype.toString = function() {
                for (var e = [], t = this._sentinel, n = t._prev; n !== t;) e.push(JSON.stringify(n, o)), n = n._prev;
                return "[" + e.join(", ") + "]"
            }
        }, {}],
        37: [function(e, t, n) {
            function r(e) {
                var t = o.buildLayerMatrix(e),
                    n = new a({
                        compound: !0,
                        multigraph: !0
                    }).setGraph({});
                return i.each(e.nodes(), function(t) {
                    n.setNode(t, {
                        label: t
                    }), n.setParent(t, "layer" + e.node(t).rank)
                }), i.each(e.edges(), function(e) {
                    n.setEdge(e.v, e.w, {}, e.name)
                }), i.each(t, function(e, t) {
                    var r = "layer" + t;
                    n.setNode(r, {
                        rank: "same"
                    }), i.reduce(e, function(e, t) {
                        return n.setEdge(e, t, {
                            style: "invis"
                        }), t
                    })
                }), n
            }
            var i = e("./lodash"),
                o = e("./util"),
                a = e("./graphlib").Graph;
            t.exports = {
                debugOrdering: r
            }
        }, {
            "./graphlib": 38,
            "./lodash": 41,
            "./util": 60
        }],
        38: [function(e, t, n) {
            arguments[4][12][0].apply(n, arguments)
        }, {
            dup: 12,
            graphlib: 62
        }],
        39: [function(e, t, n) {
            function r(e, t) {
                if (e.nodeCount() <= 1) return [];
                var n = a(e, t || h),
                    r = i(n.graph, n.buckets, n.zeroIdx);
                return u.flatten(u.map(r, function(t) {
                    return e.outEdges(t.v, t.w)
                }), !0)
            }

            function i(e, t, n) {
                for (var r, i = [], a = t[t.length - 1], s = t[0]; e.nodeCount();) {
                    for (; r = s.dequeue();) o(e, t, n, r);
                    for (; r = a.dequeue();) o(e, t, n, r);
                    if (e.nodeCount())
                        for (var u = t.length - 2; u > 0; --u)
                            if (r = t[u].dequeue()) {
                                i = i.concat(o(e, t, n, r, !0));
                                break
                            }
                }
                return i
            }

            function o(e, t, n, r, i) {
                var o = i ? [] : void 0;
                return u.each(e.inEdges(r.v), function(r) {
                    var a = e.edge(r),
                        u = e.node(r.v);
                    i && o.push({
                        v: r.v,
                        w: r.w
                    }), u.out -= a, s(t, n, u)
                }), u.each(e.outEdges(r.v), function(r) {
                    var i = e.edge(r),
                        o = r.w,
                        a = e.node(o);
                    a["in"] -= i, s(t, n, a)
                }), e.removeNode(r.v), o
            }

            function a(e, t) {
                var n = new f,
                    r = 0,
                    i = 0;
                u.each(e.nodes(), function(e) {
                    n.setNode(e, {
                        v: e,
                        "in": 0,
                        out: 0
                    })
                }), u.each(e.edges(), function(e) {
                    var o = n.edge(e.v, e.w) || 0,
                        a = t(e),
                        s = o + a;
                    n.setEdge(e.v, e.w, s), i = Math.max(i, n.node(e.v).out += a), r = Math.max(r, n.node(e.w)["in"] += a)
                });
                var o = u.range(i + r + 3).map(function() {
                        return new l
                    }),
                    a = r + 1;
                return u.each(n.nodes(), function(e) {
                    s(o, a, n.node(e))
                }), {
                    graph: n,
                    buckets: o,
                    zeroIdx: a
                }
            }

            function s(e, t, n) {
                n.out ? n["in"] ? e[n.out - n["in"] + t].enqueue(n) : e[e.length - 1].enqueue(n) : e[0].enqueue(n)
            }
            var u = e("./lodash"),
                f = e("./graphlib").Graph,
                l = e("./data/list");
            t.exports = r;
            var h = u.constant(1)
        }, {
            "./data/list": 36,
            "./graphlib": 38,
            "./lodash": 41
        }],
        40: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = t && t.debugTiming ? A.time : A.notime;
                n("layout", function() {
                    var t = n("  buildLayoutGraph", function() {
                        return a(e)
                    });
                    n("  runLayout", function() {
                        i(t, n)
                    }), n("  updateInputGraph", function() {
                        o(e, t)
                    })
                })
            }

            function i(e, t) {
                t("    makeSpaceForEdgeLabels", function() {
                    s(e)
                }), t("    removeSelfEdges", function() {
                    y(e)
                }), t("    acyclic", function() {
                    _.run(e)
                }), t("    nestingGraph.run", function() {
                    N.run(e)
                }), t("    rank", function() {
                    x(A.asNonCompoundGraph(e))
                }), t("    injectEdgeLabelProxies", function() {
                    u(e)
                }), t("    removeEmptyRanks", function() {
                    k(e)
                }), t("    nestingGraph.cleanup", function() {
                    N.cleanup(e)
                }), t("    normalizeRanks", function() {
                    I(e)
                }), t("    assignRankMinMax", function() {
                    f(e)
                }), t("    removeEdgeLabelProxies", function() {
                    l(e)
                }), t("    normalize.run", function() {
                    T.run(e)
                }), t("    parentDummyChains", function() {
                    S(e)
                }), t("    addBorderSegments", function() {
                    L(e)
                }), t("    order", function() {
                    R(e)
                }), t("    insertSelfEdges", function() {
                    v(e)
                }), t("    adjustCoordinateSystem", function() {
                    P.adjust(e)
                }), t("    position", function() {
                    O(e)
                }), t("    positionSelfEdges", function() {
                    m(e)
                }), t("    removeBorderNodes", function() {
                    g(e)
                }), t("    normalize.undo", function() {
                    T.undo(e)
                }), t("    fixupEdgeLabelCoords", function() {
                    p(e)
                }), t("    undoCoordinateSystem", function() {
                    P.undo(e)
                }), t("    translateGraph", function() {
                    h(e)
                }), t("    assignNodeIntersects", function() {
                    c(e)
                }), t("    reversePoints", function() {
                    d(e)
                }), t("    acyclic.undo", function() {
                    _.undo(e)
                })
            }

            function o(e, t) {
                E.each(e.nodes(), function(n) {
                    var r = e.node(n),
                        i = t.node(n);
                    r && (r.x = i.x, r.y = i.y, t.children(n).length && (r.width = i.width, r.height = i.height))
                }), E.each(e.edges(), function(n) {
                    var r = e.edge(n),
                        i = t.edge(n);
                    r.points = i.points, E.has(i, "x") && (r.x = i.x, r.y = i.y)
                }), e.graph().width = t.graph().width, e.graph().height = t.graph().height
            }

            function a(e) {
                var t = new U({
                        multigraph: !0,
                        compound: !0
                    }),
                    n = w(e.graph());
                return t.setGraph(E.merge({}, C, b(n, j), E.pick(n, M))), E.each(e.nodes(), function(n) {
                    var r = w(e.node(n));
                    t.setNode(n, E.defaults(b(r, V), F)), t.setParent(n, e.parent(n))
                }), E.each(e.edges(), function(n) {
                    var r = w(e.edge(n));
                    t.setEdge(n, E.merge({}, B, b(r, Y), E.pick(r, D)))
                }), t
            }

            function s(e) {
                var t = e.graph();
                t.ranksep /= 2, E.each(e.edges(), function(n) {
                    var r = e.edge(n);
                    r.minlen *= 2, "c" !== r.labelpos.toLowerCase() && ("TB" === t.rankdir || "BT" === t.rankdir ? r.width += r.labeloffset : r.height += r.labeloffset)
                })
            }

            function u(e) {
                E.each(e.edges(), function(t) {
                    var n = e.edge(t);
                    if (n.width && n.height) {
                        var r = e.node(t.v),
                            i = e.node(t.w),
                            o = {
                                rank: (i.rank - r.rank) / 2 + r.rank,
                                e: t
                            };
                        A.addDummyNode(e, "edge-proxy", o, "_ep")
                    }
                })
            }

            function f(e) {
                var t = 0;
                E.each(e.nodes(), function(n) {
                    var r = e.node(n);
                    r.borderTop && (r.minRank = e.node(r.borderTop).rank, r.maxRank = e.node(r.borderBottom).rank, t = E.max(t, r.maxRank))
                }), e.graph().maxRank = t
            }

            function l(e) {
                E.each(e.nodes(), function(t) {
                    var n = e.node(t);
                    "edge-proxy" === n.dummy && (e.edge(n.e).labelRank = n.rank, e.removeNode(t))
                })
            }

            function h(e) {
                function t(e) {
                    var t = e.x,
                        a = e.y,
                        s = e.width,
                        u = e.height;
                    n = Math.min(n, t - s / 2), r = Math.max(r, t + s / 2), i = Math.min(i, a - u / 2), o = Math.max(o, a + u / 2)
                }
                var n = Number.POSITIVE_INFINITY,
                    r = 0,
                    i = Number.POSITIVE_INFINITY,
                    o = 0,
                    a = e.graph(),
                    s = a.marginx || 0,
                    u = a.marginy || 0;
                E.each(e.nodes(), function(n) {
                    t(e.node(n))
                }), E.each(e.edges(), function(n) {
                    var r = e.edge(n);
                    E.has(r, "x") && t(r)
                }), n -= s, i -= u, E.each(e.nodes(), function(t) {
                    var r = e.node(t);
                    r.x -= n, r.y -= i
                }), E.each(e.edges(), function(t) {
                    var r = e.edge(t);
                    E.each(r.points, function(e) {
                        e.x -= n, e.y -= i
                    }), E.has(r, "x") && (r.x -= n), E.has(r, "y") && (r.y -= i)
                }), a.width = r - n + s, a.height = o - i + u
            }

            function c(e) {
                E.each(e.edges(), function(t) {
                    var n, r, i = e.edge(t),
                        o = e.node(t.v),
                        a = e.node(t.w);
                    i.points ? (n = i.points[0], r = i.points[i.points.length - 1]) : (i.points = [], n = a, r = o), i.points.unshift(A.intersectRect(o, n)), i.points.push(A.intersectRect(a, r))
                })
            }

            function p(e) {
                E.each(e.edges(), function(t) {
                    var n = e.edge(t);
                    if (E.has(n, "x")) switch (("l" === n.labelpos || "r" === n.labelpos) && (n.width -= n.labeloffset), n.labelpos) {
                        case "l":
                            n.x -= n.width / 2 + n.labeloffset;
                            break;
                        case "r":
                            n.x += n.width / 2 + n.labeloffset
                    }
                })
            }

            function d(e) {
                E.each(e.edges(), function(t) {
                    var n = e.edge(t);
                    n.reversed && n.points.reverse()
                })
            }

            function g(e) {
                E.each(e.nodes(), function(t) {
                    if (e.children(t).length) {
                        var n = e.node(t),
                            r = e.node(n.borderTop),
                            i = e.node(n.borderBottom),
                            o = e.node(E.last(n.borderLeft)),
                            a = e.node(E.last(n.borderRight));
                        n.width = Math.abs(a.x - o.x), n.height = Math.abs(i.y - r.y), n.x = o.x + n.width / 2, n.y = r.y + n.height / 2
                    }
                }), E.each(e.nodes(), function(t) {
                    "border" === e.node(t).dummy && e.removeNode(t)
                })
            }

            function y(e) {
                E.each(e.edges(), function(t) {
                    if (t.v === t.w) {
                        var n = e.node(t.v);
                        n.selfEdges || (n.selfEdges = []), n.selfEdges.push({
                            e: t,
                            label: e.edge(t)
                        }), e.removeEdge(t)
                    }
                })
            }

            function v(e) {
                var t = A.buildLayerMatrix(e);
                E.each(t, function(t) {
                    var n = 0;
                    E.each(t, function(t, r) {
                        var i = e.node(t);
                        i.order = r + n, E.each(i.selfEdges, function(t) {
                            A.addDummyNode(e, "selfedge", {
                                width: t.label.width,
                                height: t.label.height,
                                rank: i.rank,
                                order: r + ++n,
                                e: t.e,
                                label: t.label
                            }, "_se")
                        }), delete i.selfEdges
                    })
                })
            }

            function m(e) {
                E.each(e.nodes(), function(t) {
                    var n = e.node(t);
                    if ("selfedge" === n.dummy) {
                        var r = e.node(n.e.v),
                            i = r.x + r.width / 2,
                            o = r.y,
                            a = n.x - i,
                            s = r.height / 2;
                        e.setEdge(n.e, n.label), e.removeNode(t), n.label.points = [{
                            x: i + 2 * a / 3,
                            y: o - s
                        }, {
                            x: i + 5 * a / 6,
                            y: o - s
                        }, {
                            x: i + a,
                            y: o
                        }, {
                            x: i + 5 * a / 6,
                            y: o + s
                        }, {
                            x: i + 2 * a / 3,
                            y: o + s
                        }], n.label.x = n.x, n.label.y = n.y
                    }
                })
            }

            function b(e, t) {
                return E.mapValues(E.pick(e, t), Number)
            }

            function w(e) {
                var t = {};
                return E.each(e, function(e, n) {
                    t[n.toLowerCase()] = e
                }), t
            }
            var E = e("./lodash"),
                _ = e("./acyclic"),
                T = e("./normalize"),
                x = e("./rank"),
                I = e("./util").normalizeRanks,
                S = e("./parent-dummy-chains"),
                k = e("./util").removeEmptyRanks,
                N = e("./nesting-graph"),
                L = e("./add-border-segments"),
                P = e("./coordinate-system"),
                R = e("./order"),
                O = e("./position"),
                A = e("./util"),
                U = e("./graphlib").Graph;
            t.exports = r;
            var j = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
                C = {
                    ranksep: 50,
                    edgesep: 20,
                    nodesep: 50,
                    rankdir: "tb"
                },
                M = ["acyclicer", "ranker", "rankdir", "align"],
                V = ["width", "height"],
                F = {
                    width: 0,
                    height: 0
                },
                Y = ["minlen", "weight", "width", "height", "labeloffset"],
                B = {
                    minlen: 1,
                    weight: 1,
                    width: 0,
                    height: 0,
                    labeloffset: 10,
                    labelpos: "r"
                },
                D = ["labelpos"]
        }, {
            "./acyclic": 33,
            "./add-border-segments": 34,
            "./coordinate-system": 35,
            "./graphlib": 38,
            "./lodash": 41,
            "./nesting-graph": 42,
            "./normalize": 43,
            "./order": 48,
            "./parent-dummy-chains": 53,
            "./position": 55,
            "./rank": 57,
            "./util": 60
        }],
        41: [function(e, t, n) {
            arguments[4][24][0].apply(n, arguments)
        }, {
            dup: 24,
            lodash: 82
        }],
        42: [function(e, t, n) {
            function r(e) {
                var t = f.addDummyNode(e, "root", {}, "_root"),
                    n = o(e),
                    r = u.max(n) - 1,
                    s = 2 * r + 1;
                e.graph().nestingRoot = t, u.each(e.edges(), function(t) {
                    e.edge(t).minlen *= s
                });
                var l = a(e) + 1;
                u.each(e.children(), function(o) {
                    i(e, t, s, l, r, n, o)
                }), e.graph().nodeRankFactor = s
            }

            function i(e, t, n, r, o, a, s) {
                var l = e.children(s);
                if (!l.length) return void(s !== t && e.setEdge(t, s, {
                    weight: 0,
                    minlen: n
                }));
                var h = f.addBorderNode(e, "_bt"),
                    c = f.addBorderNode(e, "_bb"),
                    p = e.node(s);
                e.setParent(h, s), p.borderTop = h, e.setParent(c, s), p.borderBottom = c, u.each(l, function(u) {
                    i(e, t, n, r, o, a, u);
                    var f = e.node(u),
                        l = f.borderTop ? f.borderTop : u,
                        p = f.borderBottom ? f.borderBottom : u,
                        d = f.borderTop ? r : 2 * r,
                        g = l !== p ? 1 : o - a[s] + 1;
                    e.setEdge(h, l, {
                        weight: d,
                        minlen: g,
                        nestingEdge: !0
                    }), e.setEdge(p, c, {
                        weight: d,
                        minlen: g,
                        nestingEdge: !0
                    })
                }), e.parent(s) || e.setEdge(t, h, {
                    weight: 0,
                    minlen: o + a[s]
                })
            }

            function o(e) {
                function t(r, i) {
                    var o = e.children(r);
                    o && o.length && u.each(o, function(e) {
                        t(e, i + 1)
                    }), n[r] = i
                }
                var n = {};
                return u.each(e.children(), function(e) {
                    t(e, 1)
                }), n
            }

            function a(e) {
                return u.reduce(e.edges(), function(t, n) {
                    return t + e.edge(n).weight
                }, 0)
            }

            function s(e) {
                var t = e.graph();
                e.removeNode(t.nestingRoot), delete t.nestingRoot, u.each(e.edges(), function(t) {
                    var n = e.edge(t);
                    n.nestingEdge && e.removeEdge(t)
                })
            }
            var u = e("./lodash"),
                f = e("./util");
            t.exports = {
                run: r,
                cleanup: s
            }
        }, {
            "./lodash": 41,
            "./util": 60
        }],
        43: [function(e, t, n) {
            "use strict";

            function r(e) {
                e.graph().dummyChains = [], a.each(e.edges(), function(t) {
                    i(e, t)
                })
            }

            function i(e, t) {
                var n = t.v,
                    r = e.node(n).rank,
                    i = t.w,
                    o = e.node(i).rank,
                    a = t.name,
                    u = e.edge(t),
                    f = u.labelRank;
                if (o !== r + 1) {
                    e.removeEdge(t);
                    var l, h, c;
                    for (c = 0, ++r; o > r; ++c, ++r) u.points = [], h = {
                        width: 0,
                        height: 0,
                        edgeLabel: u,
                        edgeObj: t,
                        rank: r
                    }, l = s.addDummyNode(e, "edge", h, "_d"), r === f && (h.width = u.width, h.height = u.height, h.dummy = "edge-label", h.labelpos = u.labelpos), e.setEdge(n, l, {
                        weight: u.weight
                    }, a), 0 === c && e.graph().dummyChains.push(l), n = l;
                    e.setEdge(n, i, {
                        weight: u.weight
                    }, a)
                }
            }

            function o(e) {
                a.each(e.graph().dummyChains, function(t) {
                    var n, r = e.node(t),
                        i = r.edgeLabel;
                    for (e.setEdge(r.edgeObj, i); r.dummy;) n = e.successors(t)[0], e.removeNode(t), i.points.push({
                        x: r.x,
                        y: r.y
                    }), "edge-label" === r.dummy && (i.x = r.x, i.y = r.y, i.width = r.width, i.height = r.height), t = n, r = e.node(t)
                })
            }
            var a = e("./lodash"),
                s = e("./util");
            t.exports = {
                run: r,
                undo: o
            }
        }, {
            "./lodash": 41,
            "./util": 60
        }],
        44: [function(e, t, n) {
            function r(e, t, n) {
                var r, o = {};
                i.each(n, function(n) {
                    for (var i, a, s = e.parent(n); s;) {
                        if (i = e.parent(s), i ? (a = o[i], o[i] = s) : (a = r, r = s), a && a !== s) return void t.setEdge(a, s);
                        s = i
                    }
                })
            }
            var i = e("../lodash");
            t.exports = r
        }, {
            "../lodash": 41
        }],
        45: [function(e, t, n) {
            function r(e, t) {
                return i.map(t, function(t) {
                    var n = e.inEdges(t);
                    if (n.length) {
                        var r = i.reduce(n, function(t, n) {
                            var r = e.edge(n),
                                i = e.node(n.v);
                            return {
                                sum: t.sum + r.weight * i.order,
                                weight: t.weight + r.weight
                            }
                        }, {
                            sum: 0,
                            weight: 0
                        });
                        return {
                            v: t,
                            barycenter: r.sum / r.weight,
                            weight: r.weight
                        }
                    }
                    return {
                        v: t
                    }
                })
            }
            var i = e("../lodash");
            t.exports = r
        }, {
            "../lodash": 41
        }],
        46: [function(e, t, n) {
            function r(e, t, n) {
                var r = i(e),
                    s = new a({
                        compound: !0
                    }).setGraph({
                        root: r
                    }).setDefaultNodeLabel(function(t) {
                        return e.node(t)
                    });
                return o.each(e.nodes(), function(i) {
                    var a = e.node(i),
                        u = e.parent(i);
                    (a.rank === t || a.minRank <= t && t <= a.maxRank) && (s.setNode(i), s.setParent(i, u || r), o.each(e[n](i), function(t) {
                        var n = t.v === i ? t.w : t.v,
                            r = s.edge(n, i),
                            a = o.isUndefined(r) ? 0 : r.weight;
                        s.setEdge(n, i, {
                            weight: e.edge(t).weight + a
                        })
                    }), o.has(a, "minRank") && s.setNode(i, {
                        borderLeft: a.borderLeft[t],
                        borderRight: a.borderRight[t]
                    }))
                }), s
            }

            function i(e) {
                for (var t; e.hasNode(t = o.uniqueId("_root")););
                return t
            }
            var o = e("../lodash"),
                a = e("../graphlib").Graph;
            t.exports = r
        }, {
            "../graphlib": 38,
            "../lodash": 41
        }],
        47: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0, r = 1; r < t.length; ++r) n += i(e, t[r - 1], t[r]);
                return n
            }

            function i(e, t, n) {
                for (var r = o.zipObject(n, o.map(n, function(e, t) {
                        return t
                    })), i = o.flatten(o.map(t, function(t) {
                        return o.chain(e.outEdges(t)).map(function(t) {
                            return {
                                pos: r[t.w],
                                weight: e.edge(t).weight
                            }
                        }).sortBy("pos").value()
                    }), !0), a = 1; a < n.length;) a <<= 1;
                var s = 2 * a - 1;
                a -= 1;
                var u = o.map(new Array(s), function() {
                        return 0
                    }),
                    f = 0;
                return o.each(i.forEach(function(e) {
                    var t = e.pos + a;
                    u[t] += e.weight;
                    for (var n = 0; t > 0;) t % 2 && (n += u[t + 1]), t = t - 1 >> 1, u[t] += e.weight;
                    f += e.weight * n
                })), f
            }
            var o = e("../lodash");
            t.exports = r
        }, {
            "../lodash": 41
        }],
        48: [function(e, t, n) {
            "use strict";

            function r(e) {
                var t = d.maxRank(e),
                    n = i(e, s.range(1, t + 1), "inEdges"),
                    r = i(e, s.range(t - 1, -1, -1), "outEdges"),
                    l = u(e);
                a(e, l);
                for (var h, c = Number.POSITIVE_INFINITY, p = 0, g = 0; 4 > g; ++p, ++g) {
                    o(p % 2 ? n : r, p % 4 >= 2), l = d.buildLayerMatrix(e);
                    var y = f(e, l);
                    c > y && (g = 0, h = s.cloneDeep(l), c = y)
                }
                a(e, h)
            }

            function i(e, t, n) {
                return s.map(t, function(t) {
                    return h(e, t, n)
                })
            }

            function o(e, t) {
                var n = new p;
                s.each(e, function(e) {
                    var r = e.graph().root,
                        i = l(e, r, n, t);
                    s.each(i.vs, function(t, n) {
                        e.node(t).order = n
                    }), c(e, n, i.vs)
                })
            }

            function a(e, t) {
                s.each(t, function(t) {
                    s.each(t, function(t, n) {
                        e.node(t).order = n
                    })
                })
            }
            var s = e("../lodash"),
                u = e("./init-order"),
                f = e("./cross-count"),
                l = e("./sort-subgraph"),
                h = e("./build-layer-graph"),
                c = e("./add-subgraph-constraints"),
                p = e("../graphlib").Graph,
                d = e("../util");
            t.exports = r
        }, {
            "../graphlib": 38,
            "../lodash": 41,
            "../util": 60,
            "./add-subgraph-constraints": 44,
            "./build-layer-graph": 46,
            "./cross-count": 47,
            "./init-order": 49,
            "./sort-subgraph": 51
        }],
        49: [function(e, t, n) {
            "use strict";

            function r(e) {
                function t(r) {
                    if (!i.has(n, r)) {
                        n[r] = !0;
                        var o = e.node(r);
                        a[o.rank].push(r), i.each(e.successors(r), t)
                    }
                }
                var n = {},
                    r = i.filter(e.nodes(), function(t) {
                        return !e.children(t).length
                    }),
                    o = i.max(i.map(r, function(t) {
                        return e.node(t).rank
                    })),
                    a = i.map(i.range(o + 1), function() {
                        return []
                    }),
                    s = i.sortBy(r, function(t) {
                        return e.node(t).rank
                    });
                return i.each(s, t), a
            }
            var i = e("../lodash");
            t.exports = r
        }, {
            "../lodash": 41
        }],
        50: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = {};
                a.each(e, function(e, t) {
                    var r = n[e.v] = {
                        indegree: 0,
                        "in": [],
                        out: [],
                        vs: [e.v],
                        i: t
                    };
                    a.isUndefined(e.barycenter) || (r.barycenter = e.barycenter, r.weight = e.weight)
                }), a.each(t.edges(), function(e) {
                    var t = n[e.v],
                        r = n[e.w];
                    a.isUndefined(t) || a.isUndefined(r) || (r.indegree++, t.out.push(n[e.w]))
                });
                var r = a.filter(n, function(e) {
                    return !e.indegree
                });
                return i(r)
            }

            function i(e) {
                function t(e) {
                    return function(t) {
                        t.merged || (a.isUndefined(t.barycenter) || a.isUndefined(e.barycenter) || t.barycenter >= e.barycenter) && o(e, t)
                    }
                }

                function n(t) {
                    return function(n) {
                        n["in"].push(t), 0 === --n.indegree && e.push(n)
                    }
                }
                for (var r = []; e.length;) {
                    var i = e.pop();
                    r.push(i), a.each(i["in"].reverse(), t(i)), a.each(i.out, n(i))
                }
                return a.chain(r).filter(function(e) {
                    return !e.merged
                }).map(function(e) {
                    return a.pick(e, ["vs", "i", "barycenter", "weight"])
                }).value()
            }

            function o(e, t) {
                var n = 0,
                    r = 0;
                e.weight && (n += e.barycenter * e.weight, r += e.weight), t.weight && (n += t.barycenter * t.weight, r += t.weight), e.vs = t.vs.concat(e.vs), e.barycenter = n / r, e.weight = r, e.i = Math.min(t.i, e.i), t.merged = !0
            }
            var a = e("../lodash");
            t.exports = r
        }, {
            "../lodash": 41
        }],
        51: [function(e, t, n) {
            function r(e, t, n, l) {
                var h = e.children(t),
                    c = e.node(t),
                    p = c ? c.borderLeft : void 0,
                    d = c ? c.borderRight : void 0,
                    g = {};
                p && (h = a.filter(h, function(e) {
                    return e !== p && e !== d
                }));
                var y = s(e, h);
                a.each(y, function(t) {
                    if (e.children(t.v).length) {
                        var i = r(e, t.v, n, l);
                        g[t.v] = i, a.has(i, "barycenter") && o(t, i)
                    }
                });
                var v = u(y, n);
                i(v, g);
                var m = f(v, l);
                if (p && (m.vs = a.flatten([p, m.vs, d], !0), e.predecessors(p).length)) {
                    var b = e.node(e.predecessors(p)[0]),
                        w = e.node(e.predecessors(d)[0]);
                    a.has(m, "barycenter") || (m.barycenter = 0, m.weight = 0), m.barycenter = (m.barycenter * m.weight + b.order + w.order) / (m.weight + 2), m.weight += 2
                }
                return m
            }

            function i(e, t) {
                a.each(e, function(e) {
                    e.vs = a.flatten(e.vs.map(function(e) {
                        return t[e] ? t[e].vs : e
                    }), !0)
                })
            }

            function o(e, t) {
                a.isUndefined(e.barycenter) ? (e.barycenter = t.barycenter, e.weight = t.weight) : (e.barycenter = (e.barycenter * e.weight + t.barycenter * t.weight) / (e.weight + t.weight), e.weight += t.weight)
            }
            var a = e("../lodash"),
                s = e("./barycenter"),
                u = e("./resolve-conflicts"),
                f = e("./sort");
            t.exports = r
        }, {
            "../lodash": 41,
            "./barycenter": 45,
            "./resolve-conflicts": 50,
            "./sort": 52
        }],
        52: [function(e, t, n) {
            function r(e, t) {
                var n = s.partition(e, function(e) {
                        return a.has(e, "barycenter")
                    }),
                    r = n.lhs,
                    u = a.sortBy(n.rhs, function(e) {
                        return -e.i
                    }),
                    f = [],
                    l = 0,
                    h = 0,
                    c = 0;
                r.sort(o(!!t)), c = i(f, u, c), a.each(r, function(e) {
                    c += e.vs.length, f.push(e.vs), l += e.barycenter * e.weight, h += e.weight, c = i(f, u, c)
                });
                var p = {
                    vs: a.flatten(f, !0)
                };
                return h && (p.barycenter = l / h, p.weight = h), p
            }

            function i(e, t, n) {
                for (var r; t.length && (r = a.last(t)).i <= n;) t.pop(), e.push(r.vs), n++;
                return n
            }

            function o(e) {
                return function(t, n) {
                    return t.barycenter < n.barycenter ? -1 : t.barycenter > n.barycenter ? 1 : e ? n.i - t.i : t.i - n.i
                }
            }
            var a = e("../lodash"),
                s = e("../util");
            t.exports = r
        }, {
            "../lodash": 41,
            "../util": 60
        }],
        53: [function(e, t, n) {
            function r(e) {
                var t = o(e);
                a.each(e.graph().dummyChains, function(n) {
                    for (var r = e.node(n), o = r.edgeObj, a = i(e, t, o.v, o.w), s = a.path, u = a.lca, f = 0, l = s[f], h = !0; n !== o.w;) {
                        if (r = e.node(n), h) {
                            for (;
                                (l = s[f]) !== u && e.node(l).maxRank < r.rank;) f++;
                            l === u && (h = !1)
                        }
                        if (!h) {
                            for (; f < s.length - 1 && e.node(l = s[f + 1]).minRank <= r.rank;) f++;
                            l = s[f]
                        }
                        e.setParent(n, l), n = e.successors(n)[0]
                    }
                })
            }

            function i(e, t, n, r) {
                var i, o, a = [],
                    s = [],
                    u = Math.min(t[n].low, t[r].low),
                    f = Math.max(t[n].lim, t[r].lim);
                i = n;
                do i = e.parent(i), a.push(i); while (i && (t[i].low > u || f > t[i].lim));
                for (o = i, i = r;
                    (i = e.parent(i)) !== o;) s.push(i);
                return {
                    path: a.concat(s.reverse()),
                    lca: o
                }
            }

            function o(e) {
                function t(i) {
                    var o = r;
                    a.each(e.children(i), t), n[i] = {
                        low: o,
                        lim: r++
                    }
                }
                var n = {},
                    r = 0;
                return a.each(e.children(), t), n
            }
            var a = e("./lodash");
            t.exports = r
        }, {
            "./lodash": 41
        }],
        54: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                function n(t, n) {
                    var i = 0,
                        s = 0,
                        u = t.length,
                        f = v.last(n);
                    return v.each(n, function(t, l) {
                        var h = o(e, t),
                            c = h ? e.node(h).order : u;
                        (h || t === f) && (v.each(n.slice(s, l + 1), function(t) {
                            v.each(e.predecessors(t), function(n) {
                                var o = e.node(n),
                                    s = o.order;
                                !(i > s || s > c) || o.dummy && e.node(t).dummy || a(r, n, t)
                            })
                        }), s = l + 1, i = c)
                    }), n
                }
                var r = {};
                return v.reduce(t, n), r
            }

            function i(e, t) {
                function n(t, n, r, o, s) {
                    var u;
                    v.each(v.range(n, r), function(n) {
                        u = t[n], e.node(u).dummy && v.each(e.predecessors(u), function(t) {
                            var n = e.node(t);
                            n.dummy && (n.order < o || n.order > s) && a(i, t, u)
                        })
                    })
                }

                function r(t, r) {
                    var i, o = -1,
                        a = 0;
                    return v.each(r, function(s, u) {
                        if ("border" === e.node(s).dummy) {
                            var f = e.predecessors(s);
                            f.length && (i = e.node(f[0]).order, n(r, a, u, o, i), a = u, o = i)
                        }
                        n(r, a, r.length, i, t.length)
                    }), r
                }
                var i = {};
                return v.reduce(t, r), i
            }

            function o(e, t) {
                return e.node(t).dummy ? v.find(e.predecessors(t), function(t) {
                    return e.node(t).dummy
                }) : void 0
            }

            function a(e, t, n) {
                if (t > n) {
                    var r = t;
                    t = n, n = r
                }
                var i = e[t];
                i || (e[t] = i = {}), i[n] = !0
            }

            function s(e, t, n) {
                if (t > n) {
                    var r = t;
                    t = n, n = r
                }
                return v.has(e[t], n)
            }

            function u(e, t, n, r) {
                var i = {},
                    o = {},
                    a = {};
                return v.each(t, function(e) {
                    v.each(e, function(e, t) {
                        i[e] = e, o[e] = e, a[e] = t
                    })
                }), v.each(t, function(e) {
                    var t = -1;
                    v.each(e, function(e) {
                        var u = r(e);
                        if (u.length) {
                            u = v.sortBy(u, function(e) {
                                return a[e]
                            });
                            for (var f = (u.length - 1) / 2, l = Math.floor(f), h = Math.ceil(f); h >= l; ++l) {
                                var c = u[l];
                                o[e] === e && t < a[c] && !s(n, e, c) && (o[c] = e, o[e] = i[e] = i[c], t = a[c])
                            }
                        }
                    })
                }), {
                    root: i,
                    align: o
                }
            }

            function f(e, t, n, r, i) {
                function o(e) {
                    v.has(f, e) || (f[e] = !0, s[e] = v.reduce(u.inEdges(e), function(e, t) {
                        return o(t.v), Math.max(e, s[t.v] + u.edge(t))
                    }, 0))
                }

                function a(t) {
                    if (2 !== f[t]) {
                        f[t]++;
                        var n = e.node(t),
                            r = v.reduce(u.outEdges(t), function(e, t) {
                                return a(t.w), Math.min(e, s[t.w] - u.edge(t))
                            }, Number.POSITIVE_INFINITY);
                        r !== Number.POSITIVE_INFINITY && n.borderType !== h && (s[t] = Math.max(s[t], r))
                    }
                }
                var s = {},
                    u = l(e, t, n, i),
                    f = {};
                v.each(u.nodes(), o);
                var h = i ? "borderLeft" : "borderRight";
                return v.each(u.nodes(), a), v.each(r, function(e) {
                    s[e] = s[n[e]]
                }), s
            }

            function l(e, t, n, r) {
                var i = new m,
                    o = e.graph(),
                    a = g(o.nodesep, o.edgesep, r);
                return v.each(t, function(t) {
                    var r;
                    v.each(t, function(t) {
                        var o = n[t];
                        if (i.setNode(o), r) {
                            var s = n[r],
                                u = i.edge(s, o);
                            i.setEdge(s, o, Math.max(a(e, t, r), u || 0))
                        }
                        r = t
                    })
                }), i
            }

            function h(e, t) {
                return v.min(t, function(t) {
                    var n = v.min(t, function(t, n) {
                            return t - y(e, n) / 2
                        }),
                        r = v.max(t, function(t, n) {
                            return t + y(e, n) / 2
                        });
                    return r - n
                })
            }

            function c(e, t) {
                var n = v.min(t),
                    r = v.max(t);
                v.each(["u", "d"], function(i) {
                    v.each(["l", "r"], function(o) {
                        var a, s = i + o,
                            u = e[s];
                        u !== t && (a = "l" === o ? n - v.min(u) : r - v.max(u), a && (e[s] = v.mapValues(u, function(e) {
                            return e + a
                        })))
                    })
                })
            }

            function p(e, t) {
                return v.mapValues(e.ul, function(n, r) {
                    if (t) return e[t.toLowerCase()][r];
                    var i = v.sortBy(v.pluck(e, r));
                    return (i[1] + i[2]) / 2
                })
            }

            function d(e) {
                var t, n = b.buildLayerMatrix(e),
                    o = v.merge(r(e, n), i(e, n)),
                    a = {};
                v.each(["u", "d"], function(r) {
                    t = "u" === r ? n : v.values(n).reverse(), v.each(["l", "r"], function(n) {
                        "r" === n && (t = v.map(t, function(e) {
                            return v.values(e).reverse()
                        }));
                        var i = v.bind("u" === r ? e.predecessors : e.successors, e),
                            s = u(e, t, o, i),
                            l = f(e, t, s.root, s.align, "r" === n);
                        "r" === n && (l = v.mapValues(l, function(e) {
                            return -e
                        })), a[r + n] = l
                    })
                });
                var s = h(e, a);
                return c(a, s), p(a, e.graph().align)
            }

            function g(e, t, n) {
                return function(r, i, o) {
                    var a, s = r.node(i),
                        u = r.node(o),
                        f = 0;
                    if (f += s.width / 2, v.has(s, "labelpos")) switch (s.labelpos.toLowerCase()) {
                        case "l":
                            a = -s.width / 2;
                            break;
                        case "r":
                            a = s.width / 2
                    }
                    if (a && (f += n ? a : -a), a = 0, f += (s.dummy ? t : e) / 2, f += (u.dummy ? t : e) / 2, f += u.width / 2, v.has(u, "labelpos")) switch (u.labelpos.toLowerCase()) {
                        case "l":
                            a = u.width / 2;
                            break;
                        case "r":
                            a = -u.width / 2
                    }
                    return a && (f += n ? a : -a), a = 0, f
                }
            }

            function y(e, t) {
                return e.node(t).width
            }
            var v = e("../lodash"),
                m = e("../graphlib").Graph,
                b = e("../util");
            t.exports = {
                positionX: d,
                findType1Conflicts: r,
                findType2Conflicts: i,
                addConflict: a,
                hasConflict: s,
                verticalAlignment: u,
                horizontalCompaction: f,
                alignCoordinates: c,
                findSmallestWidthAlignment: h,
                balance: p
            }
        }, {
            "../graphlib": 38,
            "../lodash": 41,
            "../util": 60
        }],
        55: [function(e, t, n) {
            "use strict";

            function r(e) {
                e = a.asNonCompoundGraph(e), i(e), o.each(s(e), function(t, n) {
                    e.node(n).x = t
                })
            }

            function i(e) {
                var t = a.buildLayerMatrix(e),
                    n = e.graph().ranksep,
                    r = 0;
                o.each(t, function(t) {
                    var i = o.max(o.map(t, function(t) {
                        return e.node(t).height
                    }));
                    o.each(t, function(t) {
                        e.node(t).y = r + i / 2
                    }), r += i + n
                })
            }
            var o = e("../lodash"),
                a = e("../util"),
                s = e("./bk").positionX;
            t.exports = r
        }, {
            "../lodash": 41,
            "../util": 60,
            "./bk": 54
        }],
        56: [function(e, t, n) {
            "use strict";

            function r(e) {
                var t = new u({
                        directed: !1
                    }),
                    n = e.nodes()[0],
                    r = e.nodeCount();
                t.setNode(n, {});
                for (var s, l; i(t, e) < r;) s = o(t, e), l = t.hasNode(s.v) ? f(e, s) : -f(e, s), a(t, e, l);
                return t
            }

            function i(e, t) {
                function n(r) {
                    s.each(t.nodeEdges(r), function(i) {
                        var o = i.v,
                            a = r === o ? i.w : o;
                        e.hasNode(a) || f(t, i) || (e.setNode(a, {}), e.setEdge(r, a, {}), n(a))
                    })
                }
                return s.each(e.nodes(), n), e.nodeCount()
            }

            function o(e, t) {
                return s.min(t.edges(), function(n) {
                    return e.hasNode(n.v) !== e.hasNode(n.w) ? f(t, n) : void 0
                })
            }

            function a(e, t, n) {
                s.each(e.nodes(), function(e) {
                    t.node(e).rank += n
                })
            }
            var s = e("../lodash"),
                u = e("../graphlib").Graph,
                f = e("./util").slack;
            t.exports = r
        }, {
            "../graphlib": 38,
            "../lodash": 41,
            "./util": 59
        }],
        57: [function(e, t, n) {
            "use strict";

            function r(e) {
                switch (e.graph().ranker) {
                    case "network-simplex":
                        o(e);
                        break;
                    case "tight-tree":
                        i(e);
                        break;
                    case "longest-path":
                        l(e);
                        break;
                    default:
                        o(e)
                }
            }

            function i(e) {
                s(e), u(e)
            }

            function o(e) {
                f(e)
            }
            var a = e("./util"),
                s = a.longestPath,
                u = e("./feasible-tree"),
                f = e("./network-simplex");
            t.exports = r;
            var l = s
        }, {
            "./feasible-tree": 56,
            "./network-simplex": 58,
            "./util": 59
        }],
        58: [function(e, t, n) {
            "use strict";

            function r(e) {
                e = E(e), m(e);
                var t = y(e);
                s(t), i(t, e);
                for (var n, r; n = f(t);) r = l(t, e, n), h(t, e, n, r)
            }

            function i(e, t) {
                var n = w(e, e.nodes());
                n = n.slice(0, n.length - 1), g.each(n, function(n) {
                    o(e, t, n)
                })
            }

            function o(e, t, n) {
                var r = e.node(n),
                    i = r.parent;
                e.edge(n, i).cutvalue = a(e, t, n)
            }

            function a(e, t, n) {
                var r = e.node(n),
                    i = r.parent,
                    o = !0,
                    a = t.edge(n, i),
                    s = 0;
                return a || (o = !1, a = t.edge(i, n)), s = a.weight, g.each(t.nodeEdges(n), function(r) {
                    var a = r.v === n,
                        u = a ? r.w : r.v;
                    if (u !== i) {
                        var f = a === o,
                            l = t.edge(r).weight;
                        if (s += f ? l : -l, p(e, n, u)) {
                            var h = e.edge(n, u).cutvalue;
                            s += f ? -h : h
                        }
                    }
                }), s
            }

            function s(e, t) {
                arguments.length < 2 && (t = e.nodes()[0]), u(e, {}, 1, t)
            }

            function u(e, t, n, r, i) {
                var o = n,
                    a = e.node(r);
                return t[r] = !0, g.each(e.neighbors(r), function(i) {
                    g.has(t, i) || (n = u(e, t, n, i, r))
                }), a.low = o, a.lim = n++, i ? a.parent = i : delete a.parent, n
            }

            function f(e) {
                return g.find(e.edges(), function(t) {
                    return e.edge(t).cutvalue < 0
                })
            }

            function l(e, t, n) {
                var r = n.v,
                    i = n.w;
                t.hasEdge(r, i) || (r = n.w, i = n.v);
                var o = e.node(r),
                    a = e.node(i),
                    s = o,
                    u = !1;
                o.lim > a.lim && (s = a, u = !0);
                var f = g.filter(t.edges(), function(t) {
                    return u === d(e, e.node(t.v), s) && u !== d(e, e.node(t.w), s)
                });
                return g.min(f, function(e) {
                    return v(t, e)
                })
            }

            function h(e, t, n, r) {
                var o = n.v,
                    a = n.w;
                e.removeEdge(o, a), e.setEdge(r.v, r.w, {}), s(e), i(e, t), c(e, t)
            }

            function c(e, t) {
                var n = g.find(e.nodes(), function(e) {
                        return !t.node(e).parent
                    }),
                    r = b(e, n);
                r = r.slice(1), g.each(r, function(n) {
                    var r = e.node(n).parent,
                        i = t.edge(n, r),
                        o = !1;
                    i || (i = t.edge(r, n), o = !0), t.node(n).rank = t.node(r).rank + (o ? i.minlen : -i.minlen)
                })
            }

            function p(e, t, n) {
                return e.hasEdge(t, n)
            }

            function d(e, t, n) {
                return n.low <= t.lim && t.lim <= n.lim
            }
            var g = e("../lodash"),
                y = e("./feasible-tree"),
                v = e("./util").slack,
                m = e("./util").longestPath,
                b = e("../graphlib").alg.preorder,
                w = e("../graphlib").alg.postorder,
                E = e("../util").simplify;
            t.exports = r, r.initLowLimValues = s, r.initCutValues = i, r.calcCutValue = a, r.leaveEdge = f, r.enterEdge = l, r.exchangeEdges = h
        }, {
            "../graphlib": 38,
            "../lodash": 41,
            "../util": 60,
            "./feasible-tree": 56,
            "./util": 59
        }],
        59: [function(e, t, n) {
            "use strict";

            function r(e) {
                function t(r) {
                    var i = e.node(r);
                    if (o.has(n, r)) return i.rank;
                    n[r] = !0;
                    var a = o.min(o.map(e.outEdges(r), function(n) {
                        return t(n.w) - e.edge(n).minlen
                    }));
                    return a === Number.POSITIVE_INFINITY && (a = 0), i.rank = a
                }
                var n = {};
                o.each(e.sources(), t)
            }

            function i(e, t) {
                return e.node(t.w).rank - e.node(t.v).rank - e.edge(t).minlen
            }
            var o = e("../lodash");
            t.exports = {
                longestPath: r,
                slack: i
            }
        }, {
            "../lodash": 41
        }],
        60: [function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                var i;
                do i = v.uniqueId(r); while (e.hasNode(i));
                return n.dummy = t, e.setNode(i, n), i
            }

            function i(e) {
                var t = (new m).setGraph(e.graph());
                return v.each(e.nodes(), function(n) {
                    t.setNode(n, e.node(n))
                }), v.each(e.edges(), function(n) {
                    var r = t.edge(n.v, n.w) || {
                            weight: 0,
                            minlen: 1
                        },
                        i = e.edge(n);
                    t.setEdge(n.v, n.w, {
                        weight: r.weight + i.weight,
                        minlen: Math.max(r.minlen, i.minlen)
                    })
                }), t
            }

            function o(e) {
                var t = new m({
                    multigraph: e.isMultigraph()
                }).setGraph(e.graph());
                return v.each(e.nodes(), function(n) {
                    e.children(n).length || t.setNode(n, e.node(n))
                }), v.each(e.edges(), function(n) {
                    t.setEdge(n, e.edge(n))
                }), t
            }

            function a(e) {
                var t = v.map(e.nodes(), function(t) {
                    var n = {};
                    return v.each(e.outEdges(t), function(t) {
                        n[t.w] = (n[t.w] || 0) + e.edge(t).weight
                    }), n
                });
                return v.zipObject(e.nodes(), t)
            }

            function s(e) {
                var t = v.map(e.nodes(), function(t) {
                    var n = {};
                    return v.each(e.inEdges(t), function(t) {
                        n[t.v] = (n[t.v] || 0) + e.edge(t).weight
                    }), n
                });
                return v.zipObject(e.nodes(), t)
            }

            function u(e, t) {
                var n = e.x,
                    r = e.y,
                    i = t.x - n,
                    o = t.y - r,
                    a = e.width / 2,
                    s = e.height / 2;
                if (!i && !o) throw new Error("Not possible to find intersection inside of the rectangle");
                var u, f;
                return Math.abs(o) * a > Math.abs(i) * s ? (0 > o && (s = -s), u = s * i / o, f = s) : (0 > i && (a = -a), u = a, f = a * o / i), {
                    x: n + u,
                    y: r + f
                }
            }

            function f(e) {
                var t = v.map(v.range(p(e) + 1), function() {
                    return []
                });
                return v.each(e.nodes(), function(n) {
                    var r = e.node(n),
                        i = r.rank;
                    v.isUndefined(i) || (t[i][r.order] = n)
                }), t
            }

            function l(e) {
                var t = v.min(v.map(e.nodes(), function(t) {
                    return e.node(t).rank
                }));
                v.each(e.nodes(), function(n) {
                    var r = e.node(n);
                    v.has(r, "rank") && (r.rank -= t)
                })
            }

            function h(e) {
                var t = v.min(v.map(e.nodes(), function(t) {
                        return e.node(t).rank
                    })),
                    n = [];
                v.each(e.nodes(), function(r) {
                    var i = e.node(r).rank - t;
                    v.has(n, i) || (n[i] = []), n[i].push(r)
                });
                var r = 0,
                    i = e.graph().nodeRankFactor;
                v.each(n, function(t, n) {
                    v.isUndefined(t) && n % i !== 0 ? --r : r && v.each(t, function(t) {
                        e.node(t).rank += r
                    })
                })
            }

            function c(e, t, n, i) {
                var o = {
                    width: 0,
                    height: 0
                };
                return arguments.length >= 4 && (o.rank = n, o.order = i), r(e, "border", o, t)
            }

            function p(e) {
                return v.max(v.map(e.nodes(), function(t) {
                    var n = e.node(t).rank;
                    return v.isUndefined(n) ? void 0 : n
                }))
            }

            function d(e, t) {
                var n = {
                    lhs: [],
                    rhs: []
                };
                return v.each(e, function(e) {
                    t(e) ? n.lhs.push(e) : n.rhs.push(e)
                }), n
            }

            function g(e, t) {
                var n = v.now();
                try {
                    return t()
                } finally {
                    console.log(e + " time: " + (v.now() - n) + "ms")
                }
            }

            function y(e, t) {
                return t()
            }
            var v = e("./lodash"),
                m = e("./graphlib").Graph;
            t.exports = {
                addDummyNode: r,
                simplify: i,
                asNonCompoundGraph: o,
                successorWeights: a,
                predecessorWeights: s,
                intersectRect: u,
                buildLayerMatrix: f,
                normalizeRanks: l,
                removeEmptyRanks: h,
                addBorderNode: c,
                maxRank: p,
                partition: d,
                time: g,
                notime: y
            }
        }, {
            "./graphlib": 38,
            "./lodash": 41
        }],
        61: [function(e, t, n) {
            t.exports = "0.7.2"
        }, {}],
        62: [function(e, t, n) {
            var r = e("./lib");
            t.exports = {
                Graph: r.Graph,
                json: e("./lib/json"),
                alg: e("./lib/alg"),
                version: r.version
            }
        }, {
            "./lib": 78,
            "./lib/alg": 69,
            "./lib/json": 79
        }],
        63: [function(e, t, n) {
            function r(e) {
                function t(o) {
                    i.has(r, o) || (r[o] = !0, n.push(o), i.each(e.successors(o), t), i.each(e.predecessors(o), t))
                }
                var n, r = {},
                    o = [];
                return i.each(e.nodes(), function(e) {
                    n = [], t(e), n.length && o.push(n)
                }), o
            }
            var i = e("../lodash");
            t.exports = r
        }, {
            "../lodash": 80
        }],
        64: [function(e, t, n) {
            function r(e, t, n) {
                o.isArray(t) || (t = [t]);
                var r = [],
                    a = {};
                return o.each(t, function(t) {
                    if (!e.hasNode(t)) throw new Error("Graph does not have node: " + t);
                    i(e, t, "post" === n, a, r)
                }), r
            }

            function i(e, t, n, r, a) {
                o.has(r, t) || (r[t] = !0, n || a.push(t), o.each(e.neighbors(t), function(t) {
                    i(e, t, n, r, a)
                }), n && a.push(t))
            }
            var o = e("../lodash");
            t.exports = r
        }, {
            "../lodash": 80
        }],
        65: [function(e, t, n) {
            function r(e, t, n) {
                return o.transform(e.nodes(), function(r, o) {
                    r[o] = i(e, o, t, n)
                }, {})
            }
            var i = e("./dijkstra"),
                o = e("../lodash");
            t.exports = r
        }, {
            "../lodash": 80,
            "./dijkstra": 66
        }],
        66: [function(e, t, n) {
            function r(e, t, n, r) {
                return i(e, String(t), n || s, r || function(t) {
                    return e.outEdges(t)
                })
            }

            function i(e, t, n, r) {
                var i, o, s = {},
                    u = new a,
                    f = function(e) {
                        var t = e.v !== i ? e.v : e.w,
                            r = s[t],
                            a = n(e),
                            f = o.distance + a;
                        if (0 > a) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + e + " Weight: " + a);
                        f < r.distance && (r.distance = f, r.predecessor = i, u.decrease(t, f))
                    };
                for (e.nodes().forEach(function(e) {
                        var n = e === t ? 0 : Number.POSITIVE_INFINITY;
                        s[e] = {
                            distance: n
                        }, u.add(e, n)
                    }); u.size() > 0 && (i = u.removeMin(), o = s[i], o.distance !== Number.POSITIVE_INFINITY);) r(i).forEach(f);
                return s
            }
            var o = e("../lodash"),
                a = e("../data/priority-queue");
            t.exports = r;
            var s = o.constant(1)
        }, {
            "../data/priority-queue": 76,
            "../lodash": 80
        }],
        67: [function(e, t, n) {
            function r(e) {
                return i.filter(o(e), function(t) {
                    return t.length > 1 || 1 === t.length && e.hasEdge(t[0], t[0])
                })
            }
            var i = e("../lodash"),
                o = e("./tarjan");
            t.exports = r
        }, {
            "../lodash": 80,
            "./tarjan": 74
        }],
        68: [function(e, t, n) {
            function r(e, t, n) {
                return i(e, t || a, n || function(t) {
                    return e.outEdges(t)
                })
            }

            function i(e, t, n) {
                var r = {},
                    i = e.nodes();
                return i.forEach(function(e) {
                    r[e] = {}, r[e][e] = {
                        distance: 0
                    }, i.forEach(function(t) {
                        e !== t && (r[e][t] = {
                            distance: Number.POSITIVE_INFINITY
                        })
                    }), n(e).forEach(function(n) {
                        var i = n.v === e ? n.w : n.v,
                            o = t(n);
                        r[e][i] = {
                            distance: o,
                            predecessor: e
                        }
                    })
                }), i.forEach(function(e) {
                    var t = r[e];
                    i.forEach(function(n) {
                        var o = r[n];
                        i.forEach(function(n) {
                            var r = o[e],
                                i = t[n],
                                a = o[n],
                                s = r.distance + i.distance;
                            s < a.distance && (a.distance = s, a.predecessor = i.predecessor)
                        })
                    })
                }), r
            }
            var o = e("../lodash");
            t.exports = r;
            var a = o.constant(1)
        }, {
            "../lodash": 80
        }],
        69: [function(e, t, n) {
            t.exports = {
                components: e("./components"),
                dijkstra: e("./dijkstra"),
                dijkstraAll: e("./dijkstra-all"),
                findCycles: e("./find-cycles"),
                floydWarshall: e("./floyd-warshall"),
                isAcyclic: e("./is-acyclic"),
                postorder: e("./postorder"),
                preorder: e("./preorder"),
                prim: e("./prim"),
                tarjan: e("./tarjan"),
                topsort: e("./topsort")
            }
        }, {
            "./components": 63,
            "./dijkstra": 66,
            "./dijkstra-all": 65,
            "./find-cycles": 67,
            "./floyd-warshall": 68,
            "./is-acyclic": 70,
            "./postorder": 71,
            "./preorder": 72,
            "./prim": 73,
            "./tarjan": 74,
            "./topsort": 75
        }],
        70: [function(e, t, n) {
            function r(e) {
                try {
                    i(e)
                } catch (t) {
                    if (t instanceof i.CycleException) return !1;
                    throw t
                }
                return !0
            }
            var i = e("./topsort");
            t.exports = r
        }, {
            "./topsort": 75
        }],
        71: [function(e, t, n) {
            function r(e, t) {
                return i(e, t, "post")
            }
            var i = e("./dfs");
            t.exports = r
        }, {
            "./dfs": 64
        }],
        72: [function(e, t, n) {
            function r(e, t) {
                return i(e, t, "pre")
            }
            var i = e("./dfs");
            t.exports = r
        }, {
            "./dfs": 64
        }],
        73: [function(e, t, n) {
            function r(e, t) {
                function n(e) {
                    var n = e.v === r ? e.w : e.v,
                        i = f.priority(n);
                    if (void 0 !== i) {
                        var o = t(e);
                        i > o && (u[n] = r, f.decrease(n, o))
                    }
                }
                var r, s = new o,
                    u = {},
                    f = new a;
                if (0 === e.nodeCount()) return s;
                i.each(e.nodes(), function(e) {
                    f.add(e, Number.POSITIVE_INFINITY), s.setNode(e)
                }), f.decrease(e.nodes()[0], 0);
                for (var l = !1; f.size() > 0;) {
                    if (r = f.removeMin(), i.has(u, r)) s.setEdge(r, u[r]);
                    else {
                        if (l) throw new Error("Input graph is not connected: " + e);
                        l = !0
                    }
                    e.nodeEdges(r).forEach(n)
                }
                return s
            }
            var i = e("../lodash"),
                o = e("../graph"),
                a = e("../data/priority-queue");
            t.exports = r
        }, {
            "../data/priority-queue": 76,
            "../graph": 77,
            "../lodash": 80
        }],
        74: [function(e, t, n) {
            function r(e) {
                function t(s) {
                    var u = o[s] = {
                        onStack: !0,
                        lowlink: n,
                        index: n++
                    };
                    if (r.push(s), e.successors(s).forEach(function(e) {
                            i.has(o, e) ? o[e].onStack && (u.lowlink = Math.min(u.lowlink, o[e].index)) : (t(e), u.lowlink = Math.min(u.lowlink, o[e].lowlink))
                        }), u.lowlink === u.index) {
                        var f, l = [];
                        do f = r.pop(), o[f].onStack = !1, l.push(f); while (s !== f);
                        a.push(l)
                    }
                }
                var n = 0,
                    r = [],
                    o = {},
                    a = [];
                return e.nodes().forEach(function(e) {
                    i.has(o, e) || t(e)
                }), a
            }
            var i = e("../lodash");
            t.exports = r
        }, {
            "../lodash": 80
        }],
        75: [function(e, t, n) {
            function r(e) {
                function t(s) {
                    if (o.has(r, s)) throw new i;
                    o.has(n, s) || (r[s] = !0, n[s] = !0, o.each(e.predecessors(s), t), delete r[s], a.push(s))
                }
                var n = {},
                    r = {},
                    a = [];
                if (o.each(e.sinks(), t), o.size(n) !== e.nodeCount()) throw new i;
                return a
            }

            function i() {}
            var o = e("../lodash");
            t.exports = r, r.CycleException = i
        }, {
            "../lodash": 80
        }],
        76: [function(e, t, n) {
            function r() {
                this._arr = [], this._keyIndices = {}
            }
            var i = e("../lodash");
            t.exports = r, r.prototype.size = function() {
                return this._arr.length
            }, r.prototype.keys = function() {
                return this._arr.map(function(e) {
                    return e.key
                })
            }, r.prototype.has = function(e) {
                return i.has(this._keyIndices, e)
            }, r.prototype.priority = function(e) {
                var t = this._keyIndices[e];
                return void 0 !== t ? this._arr[t].priority : void 0
            }, r.prototype.min = function() {
                if (0 === this.size()) throw new Error("Queue underflow");
                return this._arr[0].key
            }, r.prototype.add = function(e, t) {
                var n = this._keyIndices;
                if (e = String(e), !i.has(n, e)) {
                    var r = this._arr,
                        o = r.length;
                    return n[e] = o, r.push({
                        key: e,
                        priority: t
                    }), this._decrease(o), !0
                }
                return !1
            }, r.prototype.removeMin = function() {
                this._swap(0, this._arr.length - 1);
                var e = this._arr.pop();
                return delete this._keyIndices[e.key], this._heapify(0), e.key
            }, r.prototype.decrease = function(e, t) {
                var n = this._keyIndices[e];
                if (t > this._arr[n].priority) throw new Error("New priority is greater than current priority. Key: " + e + " Old: " + this._arr[n].priority + " New: " + t);
                this._arr[n].priority = t, this._decrease(n)
            }, r.prototype._heapify = function(e) {
                var t = this._arr,
                    n = 2 * e,
                    r = n + 1,
                    i = e;
                n < t.length && (i = t[n].priority < t[i].priority ? n : i, r < t.length && (i = t[r].priority < t[i].priority ? r : i), i !== e && (this._swap(e, i), this._heapify(i)))
            }, r.prototype._decrease = function(e) {
                for (var t, n = this._arr, r = n[e].priority; 0 !== e && (t = e >> 1, !(n[t].priority < r));) this._swap(e, t), e = t
            }, r.prototype._swap = function(e, t) {
                var n = this._arr,
                    r = this._keyIndices,
                    i = n[e],
                    o = n[t];
                n[e] = o, n[t] = i, r[o.key] = e, r[i.key] = t
            }
        }, {
            "../lodash": 80
        }],
        77: [function(e, t, n) {
            "use strict";

            function r(e) {
                this._isDirected = f.has(e, "directed") ? e.directed : !0, this._isMultigraph = f.has(e, "multigraph") ? e.multigraph : !1, this._isCompound = f.has(e, "compound") ? e.compound : !1, this._label = void 0, this._defaultNodeLabelFn = f.constant(void 0), this._defaultEdgeLabelFn = f.constant(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[h] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}
            }

            function i(e, t) {
                f.has(e, t) ? e[t]++ : e[t] = 1
            }

            function o(e, t) {
                --e[t] || delete e[t]
            }

            function a(e, t, n, r) {
                if (!e && t > n) {
                    var i = t;
                    t = n, n = i
                }
                return t + c + n + c + (f.isUndefined(r) ? l : r)
            }

            function s(e, t, n, r) {
                if (!e && t > n) {
                    var i = t;
                    t = n, n = i
                }
                var o = {
                    v: t,
                    w: n
                };
                return r && (o.name = r), o
            }

            function u(e, t) {
                return a(e, t.v, t.w, t.name)
            }
            var f = e("./lodash");
            t.exports = r;
            var l = "\x00",
                h = "\x00",
                c = "";
            r.prototype._nodeCount = 0, r.prototype._edgeCount = 0, r.prototype.isDirected = function() {
                return this._isDirected
            }, r.prototype.isMultigraph = function() {
                return this._isMultigraph
            }, r.prototype.isCompound = function() {
                return this._isCompound
            }, r.prototype.setGraph = function(e) {
                return this._label = e, this
            }, r.prototype.graph = function() {
                return this._label
            }, r.prototype.setDefaultNodeLabel = function(e) {
                return f.isFunction(e) || (e = f.constant(e)), this._defaultNodeLabelFn = e, this
            }, r.prototype.nodeCount = function() {
                return this._nodeCount
            }, r.prototype.nodes = function() {
                return f.keys(this._nodes)
            }, r.prototype.sources = function() {
                return f.filter(this.nodes(), function(e) {
                    return f.isEmpty(this._in[e])
                }, this)
            }, r.prototype.sinks = function() {
                return f.filter(this.nodes(), function(e) {
                    return f.isEmpty(this._out[e])
                }, this)
            }, r.prototype.setNodes = function(e, t) {
                var n = arguments;
                return f.each(e, function(e) {
                    n.length > 1 ? this.setNode(e, t) : this.setNode(e)
                }, this), this
            }, r.prototype.setNode = function(e, t) {
                return f.has(this._nodes, e) ? (arguments.length > 1 && (this._nodes[e] = t), this) : (this._nodes[e] = arguments.length > 1 ? t : this._defaultNodeLabelFn(e), this._isCompound && (this._parent[e] = h, this._children[e] = {}, this._children[h][e] = !0), this._in[e] = {}, this._preds[e] = {}, this._out[e] = {}, this._sucs[e] = {}, ++this._nodeCount, this)
            }, r.prototype.node = function(e) {
                return this._nodes[e]
            }, r.prototype.hasNode = function(e) {
                return f.has(this._nodes, e)
            }, r.prototype.removeNode = function(e) {
                var t = this;
                if (f.has(this._nodes, e)) {
                    var n = function(e) {
                        t.removeEdge(t._edgeObjs[e])
                    };
                    delete this._nodes[e], this._isCompound && (this._removeFromParentsChildList(e), delete this._parent[e], f.each(this.children(e), function(e) {
                        this.setParent(e)
                    }, this), delete this._children[e]), f.each(f.keys(this._in[e]), n), delete this._in[e], delete this._preds[e], f.each(f.keys(this._out[e]), n), delete this._out[e], delete this._sucs[e], --this._nodeCount
                }
                return this
            }, r.prototype.setParent = function(e, t) {
                if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
                if (f.isUndefined(t)) t = h;
                else {
                    t += "";
                    for (var n = t; !f.isUndefined(n); n = this.parent(n))
                        if (n === e) throw new Error("Setting " + t + " as parent of " + e + " would create create a cycle");
                    this.setNode(t)
                }
                return this.setNode(e), this._removeFromParentsChildList(e), this._parent[e] = t, this._children[t][e] = !0, this
            }, r.prototype._removeFromParentsChildList = function(e) {
                delete this._children[this._parent[e]][e]
            }, r.prototype.parent = function(e) {
                if (this._isCompound) {
                    var t = this._parent[e];
                    if (t !== h) return t
                }
            }, r.prototype.children = function(e) {
                if (f.isUndefined(e) && (e = h), this._isCompound) {
                    var t = this._children[e];
                    if (t) return f.keys(t)
                } else {
                    if (e === h) return this.nodes();
                    if (this.hasNode(e)) return []
                }
            }, r.prototype.predecessors = function(e) {
                var t = this._preds[e];
                return t ? f.keys(t) : void 0
            }, r.prototype.successors = function(e) {
                var t = this._sucs[e];
                return t ? f.keys(t) : void 0
            }, r.prototype.neighbors = function(e) {
                var t = this.predecessors(e);
                return t ? f.union(t, this.successors(e)) : void 0
            }, r.prototype.setDefaultEdgeLabel = function(e) {
                return f.isFunction(e) || (e = f.constant(e)), this._defaultEdgeLabelFn = e, this
            }, r.prototype.edgeCount = function() {
                return this._edgeCount
            }, r.prototype.edges = function() {
                return f.values(this._edgeObjs)
            }, r.prototype.setPath = function(e, t) {
                var n = this,
                    r = arguments;
                return f.reduce(e, function(e, i) {
                    return r.length > 1 ? n.setEdge(e, i, t) : n.setEdge(e, i), i
                }), this
            }, r.prototype.setEdge = function() {
                var e, t, n, r, o = !1;
                f.isPlainObject(arguments[0]) ? (e = arguments[0].v, t = arguments[0].w, n = arguments[0].name, 2 === arguments.length && (r = arguments[1], o = !0)) : (e = arguments[0], t = arguments[1], n = arguments[3], arguments.length > 2 && (r = arguments[2], o = !0)), e = "" + e, t = "" + t, f.isUndefined(n) || (n = "" + n);
                var u = a(this._isDirected, e, t, n);
                if (f.has(this._edgeLabels, u)) return o && (this._edgeLabels[u] = r), this;
                if (!f.isUndefined(n) && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
                this.setNode(e), this.setNode(t), this._edgeLabels[u] = o ? r : this._defaultEdgeLabelFn(e, t, n);
                var l = s(this._isDirected, e, t, n);
                return e = l.v, t = l.w, Object.freeze(l), this._edgeObjs[u] = l, i(this._preds[t], e), i(this._sucs[e], t), this._in[t][u] = l, this._out[e][u] = l, this._edgeCount++, this
            }, r.prototype.edge = function(e, t, n) {
                var r = 1 === arguments.length ? u(this._isDirected, arguments[0]) : a(this._isDirected, e, t, n);
                return this._edgeLabels[r]
            }, r.prototype.hasEdge = function(e, t, n) {
                var r = 1 === arguments.length ? u(this._isDirected, arguments[0]) : a(this._isDirected, e, t, n);
                return f.has(this._edgeLabels, r)
            }, r.prototype.removeEdge = function(e, t, n) {
                var r = 1 === arguments.length ? u(this._isDirected, arguments[0]) : a(this._isDirected, e, t, n),
                    i = this._edgeObjs[r];
                return i && (e = i.v, t = i.w, delete this._edgeLabels[r], delete this._edgeObjs[r], o(this._preds[t], e), o(this._sucs[e], t), delete this._in[t][r], delete this._out[e][r], this._edgeCount--), this
            }, r.prototype.inEdges = function(e, t) {
                var n = this._in[e];
                if (n) {
                    var r = f.values(n);
                    return t ? f.filter(r, function(e) {
                        return e.v === t
                    }) : r
                }
            }, r.prototype.outEdges = function(e, t) {
                var n = this._out[e];
                if (n) {
                    var r = f.values(n);
                    return t ? f.filter(r, function(e) {
                        return e.w === t
                    }) : r
                }
            }, r.prototype.nodeEdges = function(e, t) {
                var n = this.inEdges(e, t);
                return n ? n.concat(this.outEdges(e, t)) : void 0
            }
        }, {
            "./lodash": 80
        }],
        78: [function(e, t, n) {
            t.exports = {
                Graph: e("./graph"),
                version: e("./version")
            }
        }, {
            "./graph": 77,
            "./version": 81
        }],
        79: [function(e, t, n) {
            function r(e) {
                var t = {
                    options: {
                        directed: e.isDirected(),
                        multigraph: e.isMultigraph(),
                        compound: e.isCompound()
                    },
                    nodes: i(e),
                    edges: o(e)
                };
                return s.isUndefined(e.graph()) || (t.value = s.clone(e.graph())), t
            }

            function i(e) {
                return s.map(e.nodes(), function(t) {
                    var n = e.node(t),
                        r = e.parent(t),
                        i = {
                            v: t
                        };
                    return s.isUndefined(n) || (i.value = n), s.isUndefined(r) || (i.parent = r), i
                })
            }

            function o(e) {
                return s.map(e.edges(), function(t) {
                    var n = e.edge(t),
                        r = {
                            v: t.v,
                            w: t.w
                        };
                    return s.isUndefined(t.name) || (r.name = t.name), s.isUndefined(n) || (r.value = n), r
                })
            }

            function a(e) {
                var t = new u(e.options).setGraph(e.value);
                return s.each(e.nodes, function(e) {
                    t.setNode(e.v, e.value), e.parent && t.setParent(e.v, e.parent)
                }), s.each(e.edges, function(e) {
                    t.setEdge({
                        v: e.v,
                        w: e.w,
                        name: e.name
                    }, e.value)
                }), t
            }
            var s = e("./lodash"),
                u = e("./graph");
            t.exports = {
                write: r,
                read: a
            }
        }, {
            "./graph": 77,
            "./lodash": 80
        }],
        80: [function(e, t, n) {
            var r;
            if ("function" == typeof e) try {
                r = e("lodash")
            } catch (i) {}
            r || (r = window._), t.exports = r
        }, {
            lodash: 82
        }],
        81: [function(e, t, n) {
            t.exports = "1.0.4"
        }, {}],
        82: [function(t, n, r) {
            (function(t) {
                (function() {
                    function i(e, t, n) {
                        for (var r = (n || 0) - 1, i = e ? e.length : 0; ++r < i;)
                            if (e[r] === t) return r;
                        return -1
                    }

                    function o(e, t) {
                        var n = typeof t;
                        if (e = e.cache, "boolean" == n || null == t) return e[t] ? 0 : -1;
                        "number" != n && "string" != n && (n = "object");
                        var r = "number" == n ? t : E + t;
                        return e = (e = e[n]) && e[r], "object" == n ? e && i(e, t) > -1 ? 0 : -1 : e ? 0 : -1
                    }

                    function a(e) {
                        var t = this.cache,
                            n = typeof e;
                        if ("boolean" == n || null == e) t[e] = !0;
                        else {
                            "number" != n && "string" != n && (n = "object");
                            var r = "number" == n ? e : E + e,
                                i = t[n] || (t[n] = {});
                            "object" == n ? (i[r] || (i[r] = [])).push(e) : i[r] = !0
                        }
                    }

                    function s(e) {
                        return e.charCodeAt(0)
                    }

                    function u(e, t) {
                        for (var n = e.criteria, r = t.criteria, i = -1, o = n.length; ++i < o;) {
                            var a = n[i],
                                s = r[i];
                            if (a !== s) {
                                if (a > s || "undefined" == typeof a) return 1;
                                if (s > a || "undefined" == typeof s) return -1
                            }
                        }
                        return e.index - t.index
                    }

                    function f(e) {
                        var t = -1,
                            n = e.length,
                            r = e[0],
                            i = e[n / 2 | 0],
                            o = e[n - 1];
                        if (r && "object" == typeof r && i && "object" == typeof i && o && "object" == typeof o) return !1;
                        var s = c();
                        s["false"] = s["null"] = s["true"] = s.undefined = !1;
                        var u = c();
                        for (u.array = e, u.cache = s, u.push = a; ++t < n;) u.push(e[t]);
                        return u
                    }

                    function l(e) {
                        return "\\" + Q[e]
                    }

                    function h() {
                        return m.pop() || []
                    }

                    function c() {
                        return b.pop() || {
                            array: null,
                            cache: null,
                            criteria: null,
                            "false": !1,
                            index: 0,
                            "null": !1,
                            number: null,
                            object: null,
                            push: null,
                            string: null,
                            "true": !1,
                            undefined: !1,
                            value: null
                        }
                    }

                    function p(e) {
                        e.length = 0, m.length < T && m.push(e)
                    }

                    function d(e) {
                        var t = e.cache;
                        t && d(t), e.array = e.cache = e.criteria = e.object = e.number = e.string = e.value = null, b.length < T && b.push(e)
                    }

                    function g(e, t, n) {
                        t || (t = 0), "undefined" == typeof n && (n = e ? e.length : 0);
                        for (var r = -1, i = n - t || 0, o = Array(0 > i ? 0 : i); ++r < i;) o[r] = e[t + r];
                        return o
                    }

                    function y(e) {
                        function t(e) {
                            return e && "object" == typeof e && !Jn(e) && Un.call(e, "__wrapped__") ? e : new n(e)
                        }

                        function n(e, t) {
                            this.__chain__ = !!t, this.__wrapped__ = e
                        }

                        function r(e) {
                            function t() {
                                if (r) {
                                    var e = g(r);
                                    jn.apply(e, arguments)
                                }
                                if (this instanceof t) {
                                    var o = m(n.prototype),
                                        a = n.apply(o, e || arguments);
                                    return Pe(a) ? a : o
                                }
                                return n.apply(i, e || arguments)
                            }
                            var n = e[0],
                                r = e[2],
                                i = e[4];
                            return Qn(t, e), t
                        }

                        function a(e, t, n, r, i) {
                            if (n) {
                                var o = n(e);
                                if ("undefined" != typeof o) return o
                            }
                            var s = Pe(e);
                            if (!s) return e;
                            var u = kn.call(e);
                            if (!Z[u]) return e;
                            var f = Xn[u];
                            switch (u) {
                                case Y:
                                case B:
                                    return new f(+e);
                                case z:
                                case G:
                                    return new f(e);
                                case W:
                                    return o = f(e.source, L.exec(e)), o.lastIndex = e.lastIndex, o
                            }
                            var l = Jn(e);
                            if (t) {
                                var c = !r;
                                r || (r = h()), i || (i = h());
                                for (var d = r.length; d--;)
                                    if (r[d] == e) return i[d];
                                o = l ? f(e.length) : {}
                            } else o = l ? g(e) : or({}, e);
                            return l && (Un.call(e, "index") && (o.index = e.index), Un.call(e, "input") && (o.input = e.input)), t ? (r.push(e), i.push(o), (l ? He : ur)(e, function(e, s) {
                                o[s] = a(e, t, n, r, i)
                            }), c && (p(r), p(i)), o) : o
                        }

                        function m(e, t) {
                            return Pe(e) ? Yn(e) : {}
                        }

                        function b(e, t, n) {
                            if ("function" != typeof e) return Qt;
                            if ("undefined" == typeof t || !("prototype" in e)) return e;
                            var r = e.__bindData__;
                            if ("undefined" == typeof r && (Hn.funcNames && (r = !e.name), r = r || !Hn.funcDecomp, !r)) {
                                var i = On.call(e);
                                Hn.funcNames || (r = !P.test(i)), r || (r = U.test(i), Qn(e, r))
                            }
                            if (r === !1 || r !== !0 && 1 & r[1]) return e;
                            switch (n) {
                                case 1:
                                    return function(n) {
                                        return e.call(t, n)
                                    };
                                case 2:
                                    return function(n, r) {
                                        return e.call(t, n, r)
                                    };
                                case 3:
                                    return function(n, r, i) {
                                        return e.call(t, n, r, i)
                                    };
                                case 4:
                                    return function(n, r, i, o) {
                                        return e.call(t, n, r, i, o)
                                    }
                            }
                            return Ut(e, t)
                        }

                        function T(e) {
                            function t() {
                                var e = u ? a : this;
                                if (i) {
                                    var p = g(i);
                                    jn.apply(p, arguments)
                                }
                                if ((o || l) && (p || (p = g(arguments)), o && jn.apply(p, o), l && p.length < s)) return r |= 16, T([n, h ? r : -4 & r, p, null, a, s]);
                                if (p || (p = arguments), f && (n = e[c]), this instanceof t) {
                                    e = m(n.prototype);
                                    var d = n.apply(e, p);
                                    return Pe(d) ? d : e
                                }
                                return n.apply(e, p)
                            }
                            var n = e[0],
                                r = e[1],
                                i = e[2],
                                o = e[3],
                                a = e[4],
                                s = e[5],
                                u = 1 & r,
                                f = 2 & r,
                                l = 4 & r,
                                h = 8 & r,
                                c = n;
                            return Qn(t, e), t
                        }

                        function Q(e, t) {
                            var n = -1,
                                r = ue(),
                                a = e ? e.length : 0,
                                s = a >= _ && r === i,
                                u = [];
                            if (s) {
                                var l = f(t);
                                l ? (r = o, t = l) : s = !1
                            }
                            for (; ++n < a;) {
                                var h = e[n];
                                r(t, h) < 0 && u.push(h)
                            }
                            return s && d(t), u
                        }

                        function K(e, t, n, r) {
                            for (var i = (r || 0) - 1, o = e ? e.length : 0, a = []; ++i < o;) {
                                var s = e[i];
                                if (s && "object" == typeof s && "number" == typeof s.length && (Jn(s) || ce(s))) {
                                    t || (s = K(s, t, n));
                                    var u = -1,
                                        f = s.length,
                                        l = a.length;
                                    for (a.length += f; ++u < f;) a[l++] = s[u]
                                } else n || a.push(s)
                            }
                            return a
                        }

                        function ee(e, t, n, r, i, o) {
                            if (n) {
                                var a = n(e, t);
                                if ("undefined" != typeof a) return !!a
                            }
                            if (e === t) return 0 !== e || 1 / e == 1 / t;
                            var s = typeof e,
                                u = typeof t;
                            if (!(e !== e || e && H[s] || t && H[u])) return !1;
                            if (null == e || null == t) return e === t;
                            var f = kn.call(e),
                                l = kn.call(t);
                            if (f == V && (f = q), l == V && (l = q), f != l) return !1;
                            switch (f) {
                                case Y:
                                case B:
                                    return +e == +t;
                                case z:
                                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;

                                case W:
                                case G:
                                    return e == _n(t)
                            }
                            var c = f == F;
                            if (!c) {
                                var d = Un.call(e, "__wrapped__"),
                                    g = Un.call(t, "__wrapped__");
                                if (d || g) return ee(d ? e.__wrapped__ : e, g ? t.__wrapped__ : t, n, r, i, o);
                                if (f != q) return !1;
                                var y = e.constructor,
                                    v = t.constructor;
                                if (y != v && !(Le(y) && y instanceof y && Le(v) && v instanceof v) && "constructor" in e && "constructor" in t) return !1
                            }
                            var m = !i;
                            i || (i = h()), o || (o = h());
                            for (var b = i.length; b--;)
                                if (i[b] == e) return o[b] == t;
                            var w = 0;
                            if (a = !0, i.push(e), o.push(t), c) {
                                if (b = e.length, w = t.length, a = w == b, a || r)
                                    for (; w--;) {
                                        var E = b,
                                            _ = t[w];
                                        if (r)
                                            for (; E-- && !(a = ee(e[E], _, n, r, i, o)););
                                        else if (!(a = ee(e[w], _, n, r, i, o))) break
                                    }
                            } else sr(t, function(t, s, u) {
                                return Un.call(u, s) ? (w++, a = Un.call(e, s) && ee(e[s], t, n, r, i, o)) : void 0
                            }), a && !r && sr(e, function(e, t, n) {
                                return Un.call(n, t) ? a = --w > -1 : void 0
                            });
                            return i.pop(), o.pop(), m && (p(i), p(o)), a
                        }

                        function te(e, t, n, r, i) {
                            (Jn(t) ? He : ur)(t, function(t, o) {
                                var a, s, u = t,
                                    f = e[o];
                                if (t && ((s = Jn(t)) || fr(t))) {
                                    for (var l = r.length; l--;)
                                        if (a = r[l] == t) {
                                            f = i[l];
                                            break
                                        }
                                    if (!a) {
                                        var h;
                                        n && (u = n(f, t), (h = "undefined" != typeof u) && (f = u)), h || (f = s ? Jn(f) ? f : [] : fr(f) ? f : {}), r.push(t), i.push(f), h || te(f, t, n, r, i)
                                    }
                                } else n && (u = n(f, t), "undefined" == typeof u && (u = t)), "undefined" != typeof u && (f = u);
                                e[o] = f
                            })
                        }

                        function ne(e, t) {
                            return e + Rn($n() * (t - e + 1))
                        }

                        function ie(e, t, n) {
                            var r = -1,
                                a = ue(),
                                s = e ? e.length : 0,
                                u = [],
                                l = !t && s >= _ && a === i,
                                c = n || l ? h() : u;
                            if (l) {
                                var g = f(c);
                                a = o, c = g
                            }
                            for (; ++r < s;) {
                                var y = e[r],
                                    v = n ? n(y, r, e) : y;
                                (t ? !r || c[c.length - 1] !== v : a(c, v) < 0) && ((n || l) && c.push(v), u.push(y))
                            }
                            return l ? (p(c.array), d(c)) : n && p(c), u
                        }

                        function oe(e) {
                            return function(n, r, i) {
                                var o = {};
                                r = t.createCallback(r, i, 3);
                                var a = -1,
                                    s = n ? n.length : 0;
                                if ("number" == typeof s)
                                    for (; ++a < s;) {
                                        var u = n[a];
                                        e(o, u, r(u, a, n), n)
                                    } else ur(n, function(t, n, i) {
                                        e(o, t, r(t, n, i), i)
                                    });
                                return o
                            }
                        }

                        function ae(e, t, n, i, o, a) {
                            var s = 1 & t,
                                u = 2 & t,
                                f = 4 & t,
                                l = 16 & t,
                                h = 32 & t;
                            if (!u && !Le(e)) throw new Tn;
                            l && !n.length && (t &= -17, l = n = !1), h && !i.length && (t &= -33, h = i = !1);
                            var c = e && e.__bindData__;
                            if (c && c !== !0) return c = g(c), c[2] && (c[2] = g(c[2])), c[3] && (c[3] = g(c[3])), !s || 1 & c[1] || (c[4] = o), !s && 1 & c[1] && (t |= 8), !f || 4 & c[1] || (c[5] = a), l && jn.apply(c[2] || (c[2] = []), n), h && Vn.apply(c[3] || (c[3] = []), i), c[1] |= t, ae.apply(null, c);
                            var p = 1 == t || 17 === t ? r : T;
                            return p([e, t, n, i, o, a])
                        }

                        function se(e) {
                            return tr[e]
                        }

                        function ue() {
                            var e = (e = t.indexOf) === vt ? i : e;
                            return e
                        }

                        function fe(e) {
                            return "function" == typeof e && Nn.test(e)
                        }

                        function le(e) {
                            var t, n;
                            return e && kn.call(e) == q && (t = e.constructor, !Le(t) || t instanceof t) ? (sr(e, function(e, t) {
                                n = t
                            }), "undefined" == typeof n || Un.call(e, n)) : !1
                        }

                        function he(e) {
                            return nr[e]
                        }

                        function ce(e) {
                            return e && "object" == typeof e && "number" == typeof e.length && kn.call(e) == V || !1
                        }

                        function pe(e, t, n, r) {
                            return "boolean" != typeof t && null != t && (r = n, n = t, t = !1), a(e, t, "function" == typeof n && b(n, r, 1))
                        }

                        function de(e, t, n) {
                            return a(e, !0, "function" == typeof t && b(t, n, 1))
                        }

                        function ge(e, t) {
                            var n = m(e);
                            return t ? or(n, t) : n
                        }

                        function ye(e, n, r) {
                            var i;
                            return n = t.createCallback(n, r, 3), ur(e, function(e, t, r) {
                                return n(e, t, r) ? (i = t, !1) : void 0
                            }), i
                        }

                        function ve(e, n, r) {
                            var i;
                            return n = t.createCallback(n, r, 3), be(e, function(e, t, r) {
                                return n(e, t, r) ? (i = t, !1) : void 0
                            }), i
                        }

                        function me(e, t, n) {
                            var r = [];
                            sr(e, function(e, t) {
                                r.push(t, e)
                            });
                            var i = r.length;
                            for (t = b(t, n, 3); i-- && t(r[i--], r[i], e) !== !1;);
                            return e
                        }

                        function be(e, t, n) {
                            var r = er(e),
                                i = r.length;
                            for (t = b(t, n, 3); i--;) {
                                var o = r[i];
                                if (t(e[o], o, e) === !1) break
                            }
                            return e
                        }

                        function we(e) {
                            var t = [];
                            return sr(e, function(e, n) {
                                Le(e) && t.push(n)
                            }), t.sort()
                        }

                        function Ee(e, t) {
                            return e ? Un.call(e, t) : !1
                        }

                        function _e(e) {
                            for (var t = -1, n = er(e), r = n.length, i = {}; ++t < r;) {
                                var o = n[t];
                                i[e[o]] = o
                            }
                            return i
                        }

                        function Te(e) {
                            return e === !0 || e === !1 || e && "object" == typeof e && kn.call(e) == Y || !1
                        }

                        function xe(e) {
                            return e && "object" == typeof e && kn.call(e) == B || !1
                        }

                        function Ie(e) {
                            return e && 1 === e.nodeType || !1
                        }

                        function Se(e) {
                            var t = !0;
                            if (!e) return t;
                            var n = kn.call(e),
                                r = e.length;
                            return n == F || n == G || n == V || n == q && "number" == typeof r && Le(e.splice) ? !r : (ur(e, function() {
                                return t = !1
                            }), t)
                        }

                        function ke(e, t, n, r) {
                            return ee(e, t, "function" == typeof n && b(n, r, 2))
                        }

                        function Ne(e) {
                            return Dn(e) && !zn(parseFloat(e))
                        }

                        function Le(e) {
                            return "function" == typeof e
                        }

                        function Pe(e) {
                            return !(!e || !H[typeof e])
                        }

                        function Re(e) {
                            return Ae(e) && e != +e
                        }

                        function Oe(e) {
                            return null === e
                        }

                        function Ae(e) {
                            return "number" == typeof e || e && "object" == typeof e && kn.call(e) == z || !1
                        }

                        function Ue(e) {
                            return e && "object" == typeof e && kn.call(e) == W || !1
                        }

                        function je(e) {
                            return "string" == typeof e || e && "object" == typeof e && kn.call(e) == G || !1
                        }

                        function Ce(e) {
                            return "undefined" == typeof e
                        }

                        function Me(e, n, r) {
                            var i = {};
                            return n = t.createCallback(n, r, 3), ur(e, function(e, t, r) {
                                i[t] = n(e, t, r)
                            }), i
                        }

                        function Ve(e) {
                            var t = arguments,
                                n = 2;
                            if (!Pe(e)) return e;
                            if ("number" != typeof t[2] && (n = t.length), n > 3 && "function" == typeof t[n - 2]) var r = b(t[--n - 1], t[n--], 2);
                            else n > 2 && "function" == typeof t[n - 1] && (r = t[--n]);
                            for (var i = g(arguments, 1, n), o = -1, a = h(), s = h(); ++o < n;) te(e, i[o], r, a, s);
                            return p(a), p(s), e
                        }

                        function Fe(e, n, r) {
                            var i = {};
                            if ("function" != typeof n) {
                                var o = [];
                                sr(e, function(e, t) {
                                    o.push(t)
                                }), o = Q(o, K(arguments, !0, !1, 1));
                                for (var a = -1, s = o.length; ++a < s;) {
                                    var u = o[a];
                                    i[u] = e[u]
                                }
                            } else n = t.createCallback(n, r, 3), sr(e, function(e, t, r) {
                                n(e, t, r) || (i[t] = e)
                            });
                            return i
                        }

                        function Ye(e) {
                            for (var t = -1, n = er(e), r = n.length, i = dn(r); ++t < r;) {
                                var o = n[t];
                                i[t] = [o, e[o]]
                            }
                            return i
                        }

                        function Be(e, n, r) {
                            var i = {};
                            if ("function" != typeof n)
                                for (var o = -1, a = K(arguments, !0, !1, 1), s = Pe(e) ? a.length : 0; ++o < s;) {
                                    var u = a[o];
                                    u in e && (i[u] = e[u])
                                } else n = t.createCallback(n, r, 3), sr(e, function(e, t, r) {
                                    n(e, t, r) && (i[t] = e)
                                });
                            return i
                        }

                        function De(e, n, r, i) {
                            var o = Jn(e);
                            if (null == r)
                                if (o) r = [];
                                else {
                                    var a = e && e.constructor,
                                        s = a && a.prototype;
                                    r = m(s)
                                }
                            return n && (n = t.createCallback(n, i, 4), (o ? He : ur)(e, function(e, t, i) {
                                return n(r, e, t, i)
                            })), r
                        }

                        function ze(e) {
                            for (var t = -1, n = er(e), r = n.length, i = dn(r); ++t < r;) i[t] = e[n[t]];
                            return i
                        }

                        function qe(e) {
                            for (var t = arguments, n = -1, r = K(t, !0, !1, 1), i = t[2] && t[2][t[1]] === e ? 1 : r.length, o = dn(i); ++n < i;) o[n] = e[r[n]];
                            return o
                        }

                        function We(e, t, n) {
                            var r = -1,
                                i = ue(),
                                o = e ? e.length : 0,
                                a = !1;
                            return n = (0 > n ? Wn(0, o + n) : n) || 0, Jn(e) ? a = i(e, t, n) > -1 : "number" == typeof o ? a = (je(e) ? e.indexOf(t, n) : i(e, t, n)) > -1 : ur(e, function(e) {
                                return ++r >= n ? !(a = e === t) : void 0
                            }), a
                        }

                        function Ge(e, n, r) {
                            var i = !0;
                            n = t.createCallback(n, r, 3);
                            var o = -1,
                                a = e ? e.length : 0;
                            if ("number" == typeof a)
                                for (; ++o < a && (i = !!n(e[o], o, e)););
                            else ur(e, function(e, t, r) {
                                return i = !!n(e, t, r)
                            });
                            return i
                        }

                        function Ze(e, n, r) {
                            var i = [];
                            n = t.createCallback(n, r, 3);
                            var o = -1,
                                a = e ? e.length : 0;
                            if ("number" == typeof a)
                                for (; ++o < a;) {
                                    var s = e[o];
                                    n(s, o, e) && i.push(s)
                                } else ur(e, function(e, t, r) {
                                    n(e, t, r) && i.push(e)
                                });
                            return i
                        }

                        function $e(e, n, r) {
                            n = t.createCallback(n, r, 3);
                            var i = -1,
                                o = e ? e.length : 0;
                            if ("number" != typeof o) {
                                var a;
                                return ur(e, function(e, t, r) {
                                    return n(e, t, r) ? (a = e, !1) : void 0
                                }), a
                            }
                            for (; ++i < o;) {
                                var s = e[i];
                                if (n(s, i, e)) return s
                            }
                        }

                        function Xe(e, n, r) {
                            var i;
                            return n = t.createCallback(n, r, 3), Qe(e, function(e, t, r) {
                                return n(e, t, r) ? (i = e, !1) : void 0
                            }), i
                        }

                        function He(e, t, n) {
                            var r = -1,
                                i = e ? e.length : 0;
                            if (t = t && "undefined" == typeof n ? t : b(t, n, 3), "number" == typeof i)
                                for (; ++r < i && t(e[r], r, e) !== !1;);
                            else ur(e, t);
                            return e
                        }

                        function Qe(e, t, n) {
                            var r = e ? e.length : 0;
                            if (t = t && "undefined" == typeof n ? t : b(t, n, 3), "number" == typeof r)
                                for (; r-- && t(e[r], r, e) !== !1;);
                            else {
                                var i = er(e);
                                r = i.length, ur(e, function(e, n, o) {
                                    return n = i ? i[--r] : --r, t(o[n], n, o)
                                })
                            }
                            return e
                        }

                        function Je(e, t) {
                            var n = g(arguments, 2),
                                r = -1,
                                i = "function" == typeof t,
                                o = e ? e.length : 0,
                                a = dn("number" == typeof o ? o : 0);
                            return He(e, function(e) {
                                a[++r] = (i ? t : e[t]).apply(e, n)
                            }), a
                        }

                        function Ke(e, n, r) {
                            var i = -1,
                                o = e ? e.length : 0;
                            if (n = t.createCallback(n, r, 3), "number" == typeof o)
                                for (var a = dn(o); ++i < o;) a[i] = n(e[i], i, e);
                            else a = [], ur(e, function(e, t, r) {
                                a[++i] = n(e, t, r)
                            });
                            return a
                        }

                        function et(e, n, r) {
                            var i = -(1 / 0),
                                o = i;
                            if ("function" != typeof n && r && r[n] === e && (n = null), null == n && Jn(e))
                                for (var a = -1, u = e.length; ++a < u;) {
                                    var f = e[a];
                                    f > o && (o = f)
                                } else n = null == n && je(e) ? s : t.createCallback(n, r, 3), He(e, function(e, t, r) {
                                    var a = n(e, t, r);
                                    a > i && (i = a, o = e)
                                });
                            return o
                        }

                        function tt(e, n, r) {
                            var i = 1 / 0,
                                o = i;
                            if ("function" != typeof n && r && r[n] === e && (n = null), null == n && Jn(e))
                                for (var a = -1, u = e.length; ++a < u;) {
                                    var f = e[a];
                                    o > f && (o = f)
                                } else n = null == n && je(e) ? s : t.createCallback(n, r, 3), He(e, function(e, t, r) {
                                    var a = n(e, t, r);
                                    i > a && (i = a, o = e)
                                });
                            return o
                        }

                        function nt(e, n, r, i) {
                            if (!e) return r;
                            var o = arguments.length < 3;
                            n = t.createCallback(n, i, 4);
                            var a = -1,
                                s = e.length;
                            if ("number" == typeof s)
                                for (o && (r = e[++a]); ++a < s;) r = n(r, e[a], a, e);
                            else ur(e, function(e, t, i) {
                                r = o ? (o = !1, e) : n(r, e, t, i)
                            });
                            return r
                        }

                        function rt(e, n, r, i) {
                            var o = arguments.length < 3;
                            return n = t.createCallback(n, i, 4), Qe(e, function(e, t, i) {
                                r = o ? (o = !1, e) : n(r, e, t, i)
                            }), r
                        }

                        function it(e, n, r) {
                            return n = t.createCallback(n, r, 3), Ze(e, function(e, t, r) {
                                return !n(e, t, r)
                            })
                        }

                        function ot(e, t, n) {
                            if (e && "number" != typeof e.length && (e = ze(e)), null == t || n) return e ? e[ne(0, e.length - 1)] : v;
                            var r = at(e);
                            return r.length = Gn(Wn(0, t), r.length), r
                        }

                        function at(e) {
                            var t = -1,
                                n = e ? e.length : 0,
                                r = dn("number" == typeof n ? n : 0);
                            return He(e, function(e) {
                                var n = ne(0, ++t);
                                r[t] = r[n], r[n] = e
                            }), r
                        }

                        function st(e) {
                            var t = e ? e.length : 0;
                            return "number" == typeof t ? t : er(e).length
                        }

                        function ut(e, n, r) {
                            var i;
                            n = t.createCallback(n, r, 3);
                            var o = -1,
                                a = e ? e.length : 0;
                            if ("number" == typeof a)
                                for (; ++o < a && !(i = n(e[o], o, e)););
                            else ur(e, function(e, t, r) {
                                return !(i = n(e, t, r))
                            });
                            return !!i
                        }

                        function ft(e, n, r) {
                            var i = -1,
                                o = Jn(n),
                                a = e ? e.length : 0,
                                s = dn("number" == typeof a ? a : 0);
                            for (o || (n = t.createCallback(n, r, 3)), He(e, function(e, t, r) {
                                    var a = s[++i] = c();
                                    o ? a.criteria = Ke(n, function(t) {
                                        return e[t]
                                    }) : (a.criteria = h())[0] = n(e, t, r), a.index = i, a.value = e
                                }), a = s.length, s.sort(u); a--;) {
                                var f = s[a];
                                s[a] = f.value, o || p(f.criteria), d(f)
                            }
                            return s
                        }

                        function lt(e) {
                            return e && "number" == typeof e.length ? g(e) : ze(e)
                        }

                        function ht(e) {
                            for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
                                var i = e[t];
                                i && r.push(i)
                            }
                            return r
                        }

                        function ct(e) {
                            return Q(e, K(arguments, !0, !0, 1))
                        }

                        function pt(e, n, r) {
                            var i = -1,
                                o = e ? e.length : 0;
                            for (n = t.createCallback(n, r, 3); ++i < o;)
                                if (n(e[i], i, e)) return i;
                            return -1
                        }

                        function dt(e, n, r) {
                            var i = e ? e.length : 0;
                            for (n = t.createCallback(n, r, 3); i--;)
                                if (n(e[i], i, e)) return i;
                            return -1
                        }

                        function gt(e, n, r) {
                            var i = 0,
                                o = e ? e.length : 0;
                            if ("number" != typeof n && null != n) {
                                var a = -1;
                                for (n = t.createCallback(n, r, 3); ++a < o && n(e[a], a, e);) i++
                            } else if (i = n, null == i || r) return e ? e[0] : v;
                            return g(e, 0, Gn(Wn(0, i), o))
                        }

                        function yt(e, t, n, r) {
                            return "boolean" != typeof t && null != t && (r = n, n = "function" != typeof t && r && r[t] === e ? null : t, t = !1), null != n && (e = Ke(e, n, r)), K(e, t)
                        }

                        function vt(e, t, n) {
                            if ("number" == typeof n) {
                                var r = e ? e.length : 0;
                                n = 0 > n ? Wn(0, r + n) : n || 0
                            } else if (n) {
                                var o = St(e, t);
                                return e[o] === t ? o : -1
                            }
                            return i(e, t, n)
                        }

                        function mt(e, n, r) {
                            var i = 0,
                                o = e ? e.length : 0;
                            if ("number" != typeof n && null != n) {
                                var a = o;
                                for (n = t.createCallback(n, r, 3); a-- && n(e[a], a, e);) i++
                            } else i = null == n || r ? 1 : n || i;
                            return g(e, 0, Gn(Wn(0, o - i), o))
                        }

                        function bt() {
                            for (var e = [], t = -1, n = arguments.length, r = h(), a = ue(), s = a === i, u = h(); ++t < n;) {
                                var l = arguments[t];
                                (Jn(l) || ce(l)) && (e.push(l), r.push(s && l.length >= _ && f(t ? e[t] : u)))
                            }
                            var c = e[0],
                                g = -1,
                                y = c ? c.length : 0,
                                v = [];
                            e: for (; ++g < y;) {
                                var m = r[0];
                                if (l = c[g], (m ? o(m, l) : a(u, l)) < 0) {
                                    for (t = n, (m || u).push(l); --t;)
                                        if (m = r[t], (m ? o(m, l) : a(e[t], l)) < 0) continue e;
                                    v.push(l)
                                }
                            }
                            for (; n--;) m = r[n], m && d(m);
                            return p(r), p(u), v
                        }

                        function wt(e, n, r) {
                            var i = 0,
                                o = e ? e.length : 0;
                            if ("number" != typeof n && null != n) {
                                var a = o;
                                for (n = t.createCallback(n, r, 3); a-- && n(e[a], a, e);) i++
                            } else if (i = n, null == i || r) return e ? e[o - 1] : v;
                            return g(e, Wn(0, o - i))
                        }

                        function Et(e, t, n) {
                            var r = e ? e.length : 0;
                            for ("number" == typeof n && (r = (0 > n ? Wn(0, r + n) : Gn(n, r - 1)) + 1); r--;)
                                if (e[r] === t) return r;
                            return -1
                        }

                        function _t(e) {
                            for (var t = arguments, n = 0, r = t.length, i = e ? e.length : 0; ++n < r;)
                                for (var o = -1, a = t[n]; ++o < i;) e[o] === a && (Mn.call(e, o--, 1), i--);
                            return e
                        }

                        function Tt(e, t, n) {
                            e = +e || 0, n = "number" == typeof n ? n : +n || 1, null == t && (t = e, e = 0);
                            for (var r = -1, i = Wn(0, Ln((t - e) / (n || 1))), o = dn(i); ++r < i;) o[r] = e, e += n;
                            return o
                        }

                        function xt(e, n, r) {
                            var i = -1,
                                o = e ? e.length : 0,
                                a = [];
                            for (n = t.createCallback(n, r, 3); ++i < o;) {
                                var s = e[i];
                                n(s, i, e) && (a.push(s), Mn.call(e, i--, 1), o--)
                            }
                            return a
                        }

                        function It(e, n, r) {
                            if ("number" != typeof n && null != n) {
                                var i = 0,
                                    o = -1,
                                    a = e ? e.length : 0;
                                for (n = t.createCallback(n, r, 3); ++o < a && n(e[o], o, e);) i++
                            } else i = null == n || r ? 1 : Wn(0, n);
                            return g(e, i)
                        }

                        function St(e, n, r, i) {
                            var o = 0,
                                a = e ? e.length : o;
                            for (r = r ? t.createCallback(r, i, 1) : Qt, n = r(n); a > o;) {
                                var s = o + a >>> 1;
                                r(e[s]) < n ? o = s + 1 : a = s
                            }
                            return o
                        }

                        function kt() {
                            return ie(K(arguments, !0, !0))
                        }

                        function Nt(e, n, r, i) {
                            return "boolean" != typeof n && null != n && (i = r, r = "function" != typeof n && i && i[n] === e ? null : n, n = !1), null != r && (r = t.createCallback(r, i, 3)), ie(e, n, r)
                        }

                        function Lt(e) {
                            return Q(e, g(arguments, 1))
                        }

                        function Pt() {
                            for (var e = -1, t = arguments.length; ++e < t;) {
                                var n = arguments[e];
                                if (Jn(n) || ce(n)) var r = r ? ie(Q(r, n).concat(Q(n, r))) : n
                            }
                            return r || []
                        }

                        function Rt() {
                            for (var e = arguments.length > 1 ? arguments : arguments[0], t = -1, n = e ? et(pr(e, "length")) : 0, r = dn(0 > n ? 0 : n); ++t < n;) r[t] = pr(e, t);
                            return r
                        }

                        function Ot(e, t) {
                            var n = -1,
                                r = e ? e.length : 0,
                                i = {};
                            for (t || !r || Jn(e[0]) || (t = []); ++n < r;) {
                                var o = e[n];
                                t ? i[o] = t[n] : o && (i[o[0]] = o[1])
                            }
                            return i
                        }

                        function At(e, t) {
                            if (!Le(t)) throw new Tn;
                            return function() {
                                return --e < 1 ? t.apply(this, arguments) : void 0
                            }
                        }

                        function Ut(e, t) {
                            return arguments.length > 2 ? ae(e, 17, g(arguments, 2), null, t) : ae(e, 1, null, null, t)
                        }

                        function jt(e) {
                            for (var t = arguments.length > 1 ? K(arguments, !0, !1, 1) : we(e), n = -1, r = t.length; ++n < r;) {
                                var i = t[n];
                                e[i] = ae(e[i], 1, null, null, e)
                            }
                            return e
                        }

                        function Ct(e, t) {
                            return arguments.length > 2 ? ae(t, 19, g(arguments, 2), null, e) : ae(t, 3, null, null, e)
                        }

                        function Mt() {
                            for (var e = arguments, t = e.length; t--;)
                                if (!Le(e[t])) throw new Tn;
                            return function() {
                                for (var t = arguments, n = e.length; n--;) t = [e[n].apply(this, t)];
                                return t[0]
                            }
                        }

                        function Vt(e, t) {
                            return t = "number" == typeof t ? t : +t || e.length, ae(e, 4, null, null, null, t)
                        }

                        function Ft(e, t, n) {
                            var r, i, o, a, s, u, f, l = 0,
                                h = !1,
                                c = !0;
                            if (!Le(e)) throw new Tn;
                            if (t = Wn(0, t) || 0, n === !0) {
                                var p = !0;
                                c = !1
                            } else Pe(n) && (p = n.leading, h = "maxWait" in n && (Wn(t, n.maxWait) || 0), c = "trailing" in n ? n.trailing : c);
                            var d = function() {
                                    var n = t - (gr() - a);
                                    if (0 >= n) {
                                        i && Pn(i);
                                        var h = f;
                                        i = u = f = v, h && (l = gr(), o = e.apply(s, r), u || i || (r = s = null))
                                    } else u = Cn(d, n)
                                },
                                g = function() {
                                    u && Pn(u), i = u = f = v, (c || h !== t) && (l = gr(), o = e.apply(s, r), u || i || (r = s = null))
                                };
                            return function() {
                                if (r = arguments, a = gr(), s = this, f = c && (u || !p), h === !1) var n = p && !u;
                                else {
                                    i || p || (l = a);
                                    var y = h - (a - l),
                                        v = 0 >= y;
                                    v ? (i && (i = Pn(i)), l = a, o = e.apply(s, r)) : i || (i = Cn(g, y))
                                }
                                return v && u ? u = Pn(u) : u || t === h || (u = Cn(d, t)), n && (v = !0, o = e.apply(s, r)), !v || u || i || (r = s = null), o
                            }
                        }

                        function Yt(e) {
                            if (!Le(e)) throw new Tn;
                            var t = g(arguments, 1);
                            return Cn(function() {
                                e.apply(v, t)
                            }, 1)
                        }

                        function Bt(e, t) {
                            if (!Le(e)) throw new Tn;
                            var n = g(arguments, 2);
                            return Cn(function() {
                                e.apply(v, n)
                            }, t)
                        }

                        function Dt(e, t) {
                            if (!Le(e)) throw new Tn;
                            var n = function() {
                                var r = n.cache,
                                    i = t ? t.apply(this, arguments) : E + arguments[0];
                                return Un.call(r, i) ? r[i] : r[i] = e.apply(this, arguments)
                            };
                            return n.cache = {}, n
                        }

                        function zt(e) {
                            var t, n;
                            if (!Le(e)) throw new Tn;
                            return function() {
                                return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
                            }
                        }

                        function qt(e) {
                            return ae(e, 16, g(arguments, 1))
                        }

                        function Wt(e) {
                            return ae(e, 32, null, g(arguments, 1))
                        }

                        function Gt(e, t, n) {
                            var r = !0,
                                i = !0;
                            if (!Le(e)) throw new Tn;
                            return n === !1 ? r = !1 : Pe(n) && (r = "leading" in n ? n.leading : r, i = "trailing" in n ? n.trailing : i), $.leading = r, $.maxWait = t, $.trailing = i, Ft(e, t, $)
                        }

                        function Zt(e, t) {
                            return ae(t, 16, [e])
                        }

                        function $t(e) {
                            return function() {
                                return e
                            }
                        }

                        function Xt(e, t, n) {
                            var r = typeof e;
                            if (null == e || "function" == r) return b(e, t, n);
                            if ("object" != r) return tn(e);
                            var i = er(e),
                                o = i[0],
                                a = e[o];
                            return 1 != i.length || a !== a || Pe(a) ? function(t) {
                                for (var n = i.length, r = !1; n-- && (r = ee(t[i[n]], e[i[n]], null, !0)););
                                return r
                            } : function(e) {
                                var t = e[o];
                                return a === t && (0 !== a || 1 / a == 1 / t)
                            }
                        }

                        function Ht(e) {
                            return null == e ? "" : _n(e).replace(ir, se)
                        }

                        function Qt(e) {
                            return e
                        }

                        function Jt(e, r, i) {
                            var o = !0,
                                a = r && we(r);
                            r && (i || a.length) || (null == i && (i = r), s = n, r = e, e = t, a = we(r)), i === !1 ? o = !1 : Pe(i) && "chain" in i && (o = i.chain);
                            var s = e,
                                u = Le(s);
                            He(a, function(t) {
                                var n = e[t] = r[t];
                                u && (s.prototype[t] = function() {
                                    var t = this.__chain__,
                                        r = this.__wrapped__,
                                        i = [r];
                                    jn.apply(i, arguments);
                                    var a = n.apply(e, i);
                                    if (o || t) {
                                        if (r === a && Pe(a)) return this;
                                        a = new s(a), a.__chain__ = t
                                    }
                                    return a
                                })
                            })
                        }

                        function Kt() {
                            return e._ = Sn, this
                        }

                        function en() {}

                        function tn(e) {
                            return function(t) {
                                return t[e]
                            }
                        }

                        function nn(e, t, n) {
                            var r = null == e,
                                i = null == t;
                            if (null == n && ("boolean" == typeof e && i ? (n = e, e = 1) : i || "boolean" != typeof t || (n = t, i = !0)), r && i && (t = 1), e = +e || 0, i ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1) {
                                var o = $n();
                                return Gn(e + o * (t - e + parseFloat("1e-" + ((o + "").length - 1))), t)
                            }
                            return ne(e, t)
                        }

                        function rn(e, t) {
                            if (e) {
                                var n = e[t];
                                return Le(n) ? e[t]() : n
                            }
                        }

                        function on(e, n, r) {
                            var i = t.templateSettings;
                            e = _n(e || ""), r = ar({}, r, i);
                            var o, a = ar({}, r.imports, i.imports),
                                s = er(a),
                                u = ze(a),
                                f = 0,
                                h = r.interpolate || A,
                                c = "__p += '",
                                p = En((r.escape || A).source + "|" + h.source + "|" + (h === R ? N : A).source + "|" + (r.evaluate || A).source + "|$", "g");
                            e.replace(p, function(t, n, r, i, a, s) {
                                return r || (r = i), c += e.slice(f, s).replace(j, l), n && (c += "' +\n__e(" + n + ") +\n'"), a && (o = !0, c += "';\n" + a + ";\n__p += '"), r && (c += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), f = s + t.length, t
                            }), c += "';\n";
                            var d = r.variable,
                                g = d;
                            g || (d = "obj", c = "with (" + d + ") {\n" + c + "\n}\n"), c = (o ? c.replace(I, "") : c).replace(S, "$1").replace(k, "$1;"), c = "function(" + d + ") {\n" + (g ? "" : d + " || (" + d + " = {});\n") + "var __t, __p = '', __e = _.escape" + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + c + "return __p\n}";
                            var y = "\n/*\n//# sourceURL=" + (r.sourceURL || "/lodash/template/source[" + M++ + "]") + "\n*/";
                            try {
                                var m = vn(s, "return " + c + y).apply(v, u)
                            } catch (b) {
                                throw b.source = c, b
                            }
                            return n ? m(n) : (m.source = c, m)
                        }

                        function an(e, t, n) {
                            e = (e = +e) > -1 ? e : 0;
                            var r = -1,
                                i = dn(e);
                            for (t = b(t, n, 1); ++r < e;) i[r] = t(r);
                            return i
                        }

                        function sn(e) {
                            return null == e ? "" : _n(e).replace(rr, he)
                        }

                        function un(e) {
                            var t = ++w;
                            return _n(null == e ? "" : e) + t
                        }

                        function fn(e) {
                            return e = new n(e), e.__chain__ = !0, e
                        }

                        function ln(e, t) {
                            return t(e), e
                        }

                        function hn() {
                            return this.__chain__ = !0, this
                        }

                        function cn() {
                            return _n(this.__wrapped__)
                        }

                        function pn() {
                            return this.__wrapped__
                        }
                        e = e ? re.defaults(J.Object(), e, re.pick(J, C)) : J;
                        var dn = e.Array,
                            gn = e.Boolean,
                            yn = e.Date,
                            vn = e.Function,
                            mn = e.Math,
                            bn = e.Number,
                            wn = e.Object,
                            En = e.RegExp,
                            _n = e.String,
                            Tn = e.TypeError,
                            xn = [],
                            In = wn.prototype,
                            Sn = e._,
                            kn = In.toString,
                            Nn = En("^" + _n(kn).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                            Ln = mn.ceil,
                            Pn = e.clearTimeout,
                            Rn = mn.floor,
                            On = vn.prototype.toString,
                            An = fe(An = wn.getPrototypeOf) && An,
                            Un = In.hasOwnProperty,
                            jn = xn.push,
                            Cn = e.setTimeout,
                            Mn = xn.splice,
                            Vn = xn.unshift,
                            Fn = function() {
                                try {
                                    var e = {},
                                        t = fe(t = wn.defineProperty) && t,
                                        n = t(e, e, e) && t
                                } catch (r) {}
                                return n
                            }(),
                            Yn = fe(Yn = wn.create) && Yn,
                            Bn = fe(Bn = dn.isArray) && Bn,
                            Dn = e.isFinite,
                            zn = e.isNaN,
                            qn = fe(qn = wn.keys) && qn,
                            Wn = mn.max,
                            Gn = mn.min,
                            Zn = e.parseInt,
                            $n = mn.random,
                            Xn = {};
                        Xn[F] = dn, Xn[Y] = gn, Xn[B] = yn, Xn[D] = vn, Xn[q] = wn, Xn[z] = bn, Xn[W] = En, Xn[G] = _n, n.prototype = t.prototype;
                        var Hn = t.support = {};
                        Hn.funcDecomp = !fe(e.WinRTError) && U.test(y), Hn.funcNames = "string" == typeof vn.name, t.templateSettings = {
                            escape: /<%-([\s\S]+?)%>/g,
                            evaluate: /<%([\s\S]+?)%>/g,
                            interpolate: R,
                            variable: "",
                            imports: {
                                _: t
                            }
                        }, Yn || (m = function() {
                            function t() {}
                            return function(n) {
                                if (Pe(n)) {
                                    t.prototype = n;
                                    var r = new t;
                                    t.prototype = null
                                }
                                return r || e.Object()
                            }
                        }());
                        var Qn = Fn ? function(e, t) {
                                X.value = t, Fn(e, "__bindData__", X), X.value = null
                            } : en,
                            Jn = Bn || function(e) {
                                return e && "object" == typeof e && "number" == typeof e.length && kn.call(e) == F || !1
                            },
                            Kn = function(e) {
                                var t, n = e,
                                    r = [];
                                if (!n) return r;
                                if (!H[typeof e]) return r;
                                for (t in n) Un.call(n, t) && r.push(t);
                                return r
                            },
                            er = qn ? function(e) {
                                return Pe(e) ? qn(e) : []
                            } : Kn,
                            tr = {
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;"
                            },
                            nr = _e(tr),
                            rr = En("(" + er(nr).join("|") + ")", "g"),
                            ir = En("[" + er(tr).join("") + "]", "g"),
                            or = function(e, t, n) {
                                var r, i = e,
                                    o = i;
                                if (!i) return o;
                                var a = arguments,
                                    s = 0,
                                    u = "number" == typeof n ? 2 : a.length;
                                if (u > 3 && "function" == typeof a[u - 2]) var f = b(a[--u - 1], a[u--], 2);
                                else u > 2 && "function" == typeof a[u - 1] && (f = a[--u]);
                                for (; ++s < u;)
                                    if (i = a[s], i && H[typeof i])
                                        for (var l = -1, h = H[typeof i] && er(i), c = h ? h.length : 0; ++l < c;) r = h[l], o[r] = f ? f(o[r], i[r]) : i[r];
                                return o
                            },
                            ar = function(e, t, n) {
                                var r, i = e,
                                    o = i;
                                if (!i) return o;
                                for (var a = arguments, s = 0, u = "number" == typeof n ? 2 : a.length; ++s < u;)
                                    if (i = a[s], i && H[typeof i])
                                        for (var f = -1, l = H[typeof i] && er(i), h = l ? l.length : 0; ++f < h;) r = l[f], "undefined" == typeof o[r] && (o[r] = i[r]);
                                return o
                            },
                            sr = function(e, t, n) {
                                var r, i = e,
                                    o = i;
                                if (!i) return o;
                                if (!H[typeof i]) return o;
                                t = t && "undefined" == typeof n ? t : b(t, n, 3);
                                for (r in i)
                                    if (t(i[r], r, e) === !1) return o;
                                return o
                            },
                            ur = function(e, t, n) {
                                var r, i = e,
                                    o = i;
                                if (!i) return o;
                                if (!H[typeof i]) return o;
                                t = t && "undefined" == typeof n ? t : b(t, n, 3);
                                for (var a = -1, s = H[typeof i] && er(i), u = s ? s.length : 0; ++a < u;)
                                    if (r = s[a], t(i[r], r, e) === !1) return o;
                                return o
                            },
                            fr = An ? function(e) {
                                if (!e || kn.call(e) != q) return !1;
                                var t = e.valueOf,
                                    n = fe(t) && (n = An(t)) && An(n);
                                return n ? e == n || An(e) == n : le(e)
                            } : le,
                            lr = oe(function(e, t, n) {
                                Un.call(e, n) ? e[n]++ : e[n] = 1
                            }),
                            hr = oe(function(e, t, n) {
                                (Un.call(e, n) ? e[n] : e[n] = []).push(t)
                            }),
                            cr = oe(function(e, t, n) {
                                e[n] = t
                            }),
                            pr = Ke,
                            dr = Ze,
                            gr = fe(gr = yn.now) && gr || function() {
                                return (new yn).getTime()
                            },
                            yr = 8 == Zn(x + "08") ? Zn : function(e, t) {
                                return Zn(je(e) ? e.replace(O, "") : e, t || 0)
                            };
                        return t.after = At, t.assign = or, t.at = qe, t.bind = Ut, t.bindAll = jt, t.bindKey = Ct, t.chain = fn, t.compact = ht, t.compose = Mt, t.constant = $t, t.countBy = lr, t.create = ge, t.createCallback = Xt, t.curry = Vt, t.debounce = Ft, t.defaults = ar, t.defer = Yt, t.delay = Bt, t.difference = ct, t.filter = Ze, t.flatten = yt, t.forEach = He, t.forEachRight = Qe, t.forIn = sr, t.forInRight = me, t.forOwn = ur, t.forOwnRight = be, t.functions = we, t.groupBy = hr, t.indexBy = cr, t.initial = mt, t.intersection = bt, t.invert = _e, t.invoke = Je, t.keys = er, t.map = Ke, t.mapValues = Me, t.max = et, t.memoize = Dt, t.merge = Ve, t.min = tt, t.omit = Fe, t.once = zt, t.pairs = Ye, t.partial = qt, t.partialRight = Wt, t.pick = Be, t.pluck = pr, t.property = tn, t.pull = _t, t.range = Tt, t.reject = it, t.remove = xt, t.rest = It, t.shuffle = at, t.sortBy = ft, t.tap = ln, t.throttle = Gt, t.times = an, t.toArray = lt, t.transform = De, t.union = kt, t.uniq = Nt, t.values = ze, t.where = dr, t.without = Lt, t.wrap = Zt, t.xor = Pt, t.zip = Rt, t.zipObject = Ot, t.collect = Ke, t.drop = It, t.each = He, t.eachRight = Qe, t.extend = or, t.methods = we, t.object = Ot, t.select = Ze, t.tail = It, t.unique = Nt, t.unzip = Rt, Jt(t), t.clone = pe, t.cloneDeep = de, t.contains = We, t.escape = Ht, t.every = Ge, t.find = $e, t.findIndex = pt, t.findKey = ye, t.findLast = Xe, t.findLastIndex = dt, t.findLastKey = ve, t.has = Ee, t.identity = Qt, t.indexOf = vt, t.isArguments = ce, t.isArray = Jn, t.isBoolean = Te, t.isDate = xe, t.isElement = Ie, t.isEmpty = Se, t.isEqual = ke, t.isFinite = Ne, t.isFunction = Le, t.isNaN = Re, t.isNull = Oe, t.isNumber = Ae, t.isObject = Pe, t.isPlainObject = fr, t.isRegExp = Ue, t.isString = je, t.isUndefined = Ce, t.lastIndexOf = Et, t.mixin = Jt, t.noConflict = Kt, t.noop = en, t.now = gr, t.parseInt = yr, t.random = nn, t.reduce = nt, t.reduceRight = rt, t.result = rn, t.runInContext = y, t.size = st, t.some = ut, t.sortedIndex = St, t.template = on, t.unescape = sn, t.uniqueId = un, t.all = Ge, t.any = ut, t.detect = $e, t.findWhere = $e, t.foldl = nt, t.foldr = rt, t.include = We, t.inject = nt, Jt(function() {
                            var e = {};
                            return ur(t, function(n, r) {
                                t.prototype[r] || (e[r] = n)
                            }), e
                        }(), !1), t.first = gt, t.last = wt, t.sample = ot, t.take = gt, t.head = gt, ur(t, function(e, r) {
                            var i = "sample" !== r;
                            t.prototype[r] || (t.prototype[r] = function(t, r) {
                                var o = this.__chain__,
                                    a = e(this.__wrapped__, t, r);
                                return o || null != t && (!r || i && "function" == typeof t) ? new n(a, o) : a
                            })
                        }), t.VERSION = "2.4.2", t.prototype.chain = hn, t.prototype.toString = cn, t.prototype.value = pn, t.prototype.valueOf = pn, He(["join", "pop", "shift"], function(e) {
                            var r = xn[e];
                            t.prototype[e] = function() {
                                var e = this.__chain__,
                                    t = r.apply(this.__wrapped__, arguments);
                                return e ? new n(t, e) : t
                            }
                        }), He(["push", "reverse", "sort", "unshift"], function(e) {
                            var n = xn[e];
                            t.prototype[e] = function() {
                                return n.apply(this.__wrapped__, arguments), this
                            }
                        }), He(["concat", "slice", "splice"], function(e) {
                            var r = xn[e];
                            t.prototype[e] = function() {
                                return new n(r.apply(this.__wrapped__, arguments), this.__chain__)
                            }
                        }), t
                    }
                    var v, m = [],
                        b = [],
                        w = 0,
                        E = +new Date + "",
                        _ = 75,
                        T = 40,
                        x = " 	\f \ufeff\n\r\u2028\u2029 ᠎             　",
                        I = /\b__p \+= '';/g,
                        S = /\b(__p \+=) '' \+/g,
                        k = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        N = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        L = /\w*$/,
                        P = /^\s*function[ \n\r\t]+\w/,
                        R = /<%=([\s\S]+?)%>/g,
                        O = RegExp("^[" + x + "]*0+(?=.$)"),
                        A = /($^)/,
                        U = /\bthis\b/,
                        j = /['\n\r\t\u2028\u2029\\]/g,
                        C = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
                        M = 0,
                        V = "[object Arguments]",
                        F = "[object Array]",
                        Y = "[object Boolean]",
                        B = "[object Date]",
                        D = "[object Function]",
                        z = "[object Number]",
                        q = "[object Object]",
                        W = "[object RegExp]",
                        G = "[object String]",
                        Z = {};
                    Z[D] = !1, Z[V] = Z[F] = Z[Y] = Z[B] = Z[z] = Z[q] = Z[W] = Z[G] = !0;
                    var $ = {
                            leading: !1,
                            maxWait: 0,
                            trailing: !1
                        },
                        X = {
                            configurable: !1,
                            enumerable: !1,
                            value: null,
                            writable: !1
                        },
                        H = {
                            "boolean": !1,
                            "function": !0,
                            object: !0,
                            number: !1,
                            string: !1,
                            undefined: !1
                        },
                        Q = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "	": "t",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        J = H[typeof window] && window || this,
                        K = H[typeof r] && r && !r.nodeType && r,
                        ee = H[typeof n] && n && !n.nodeType && n,
                        te = ee && ee.exports === K && K,
                        ne = H[typeof t] && t;
                    !ne || ne.global !== ne && ne.window !== ne || (J = ne);
                    var re = y();
                    "function" == typeof e && "object" == typeof e.amd && e.amd ? (J._ = re, e(function() {
                        return re
                    })) : K && ee ? te ? (ee.exports = re)._ = re : K._ = re : J._ = re
                }).call(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        83: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                t.map(function(t) {
                    var n, i = e.$type.getChild(t.name);
                    if ("pair" === t.type) n = t.value;
                    else if ("message" === t.type) {
                        var o = i.resolvedType.build(),
                            n = new o;
                        r(n, t.values)
                    }
                    i.repeated ? e.add(t.name, n) : e.set(t.name, n)
                })
            }
            var i = e("./src/parser");
            t.exports.encode = e("./src/encoder"), t.exports.parse = function(e, t, n) {
                var o = e.build(t),
                    a = new o,
                    s = i(n);
                return s.status && (r(a, s.value), s.message = a), s
            }
        }, {
            "./src/encoder": 91,
            "./src/parser": 92
        }],
        84: [function(t, n, r) {
            (function(t) {
                (function() {
                    function i(e, t, n) {
                        for (var r = (n || 0) - 1, i = e ? e.length : 0; ++r < i;)
                            if (e[r] === t) return r;
                        return -1
                    }

                    function o(e, t) {
                        var n = typeof t;
                        if (e = e.cache, "boolean" == n || null == t) return e[t] ? 0 : -1;
                        "number" != n && "string" != n && (n = "object");
                        var r = "number" == n ? t : E + t;
                        return e = (e = e[n]) && e[r], "object" == n ? e && i(e, t) > -1 ? 0 : -1 : e ? 0 : -1
                    }

                    function a(e) {
                        var t = this.cache,
                            n = typeof e;
                        if ("boolean" == n || null == e) t[e] = !0;
                        else {
                            "number" != n && "string" != n && (n = "object");
                            var r = "number" == n ? e : E + e,
                                i = t[n] || (t[n] = {});
                            "object" == n ? (i[r] || (i[r] = [])).push(e) : i[r] = !0
                        }
                    }

                    function s(e) {
                        return e.charCodeAt(0)
                    }

                    function u(e, t) {
                        for (var n = e.criteria, r = t.criteria, i = -1, o = n.length; ++i < o;) {
                            var a = n[i],
                                s = r[i];
                            if (a !== s) {
                                if (a > s || "undefined" == typeof a) return 1;
                                if (s > a || "undefined" == typeof s) return -1
                            }
                        }
                        return e.index - t.index
                    }

                    function f(e) {
                        var t = -1,
                            n = e.length,
                            r = e[0],
                            i = e[n / 2 | 0],
                            o = e[n - 1];
                        if (r && "object" == typeof r && i && "object" == typeof i && o && "object" == typeof o) return !1;
                        var s = c();
                        s["false"] = s["null"] = s["true"] = s.undefined = !1;
                        var u = c();
                        for (u.array = e, u.cache = s, u.push = a; ++t < n;) u.push(e[t]);
                        return u
                    }

                    function l(e) {
                        return "\\" + Q[e]
                    }

                    function h() {
                        return m.pop() || []
                    }

                    function c() {
                        return b.pop() || {
                            array: null,
                            cache: null,
                            criteria: null,
                            "false": !1,
                            index: 0,
                            "null": !1,
                            number: null,
                            object: null,
                            push: null,
                            string: null,
                            "true": !1,
                            undefined: !1,
                            value: null
                        }
                    }

                    function p(e) {
                        e.length = 0, m.length < T && m.push(e)
                    }

                    function d(e) {
                        var t = e.cache;
                        t && d(t), e.array = e.cache = e.criteria = e.object = e.number = e.string = e.value = null, b.length < T && b.push(e)
                    }

                    function g(e, t, n) {
                        t || (t = 0), "undefined" == typeof n && (n = e ? e.length : 0);
                        for (var r = -1, i = n - t || 0, o = Array(0 > i ? 0 : i); ++r < i;) o[r] = e[t + r];
                        return o
                    }

                    function y(e) {
                        function t(e) {
                            return e && "object" == typeof e && !Jn(e) && Un.call(e, "__wrapped__") ? e : new n(e)
                        }

                        function n(e, t) {
                            this.__chain__ = !!t, this.__wrapped__ = e
                        }

                        function r(e) {
                            function t() {
                                if (r) {
                                    var e = g(r);
                                    jn.apply(e, arguments)
                                }
                                if (this instanceof t) {
                                    var o = m(n.prototype),
                                        a = n.apply(o, e || arguments);
                                    return Pe(a) ? a : o
                                }
                                return n.apply(i, e || arguments)
                            }
                            var n = e[0],
                                r = e[2],
                                i = e[4];
                            return Qn(t, e), t
                        }

                        function a(e, t, n, r, i) {
                            if (n) {
                                var o = n(e);
                                if ("undefined" != typeof o) return o
                            }
                            var s = Pe(e);
                            if (!s) return e;
                            var u = kn.call(e);
                            if (!Z[u]) return e;
                            var f = Xn[u];
                            switch (u) {
                                case Y:
                                case B:
                                    return new f(+e);
                                case z:
                                case G:
                                    return new f(e);
                                case W:
                                    return o = f(e.source, L.exec(e)), o.lastIndex = e.lastIndex, o
                            }
                            var l = Jn(e);
                            if (t) {
                                var c = !r;
                                r || (r = h()), i || (i = h());
                                for (var d = r.length; d--;)
                                    if (r[d] == e) return i[d];
                                o = l ? f(e.length) : {}
                            } else o = l ? g(e) : or({}, e);
                            return l && (Un.call(e, "index") && (o.index = e.index), Un.call(e, "input") && (o.input = e.input)), t ? (r.push(e), i.push(o), (l ? He : ur)(e, function(e, s) {
                                o[s] = a(e, t, n, r, i)
                            }), c && (p(r), p(i)), o) : o
                        }

                        function m(e, t) {
                            return Pe(e) ? Yn(e) : {}
                        }

                        function b(e, t, n) {
                            if ("function" != typeof e) return Qt;
                            if ("undefined" == typeof t || !("prototype" in e)) return e;
                            var r = e.__bindData__;
                            if ("undefined" == typeof r && (Hn.funcNames && (r = !e.name), r = r || !Hn.funcDecomp, !r)) {
                                var i = On.call(e);
                                Hn.funcNames || (r = !P.test(i)), r || (r = U.test(i), Qn(e, r))
                            }
                            if (r === !1 || r !== !0 && 1 & r[1]) return e;
                            switch (n) {
                                case 1:
                                    return function(n) {
                                        return e.call(t, n)
                                    };
                                case 2:
                                    return function(n, r) {
                                        return e.call(t, n, r)
                                    };
                                case 3:
                                    return function(n, r, i) {
                                        return e.call(t, n, r, i)
                                    };
                                case 4:
                                    return function(n, r, i, o) {
                                        return e.call(t, n, r, i, o)
                                    }
                            }
                            return Ut(e, t)
                        }

                        function T(e) {
                            function t() {
                                var e = u ? a : this;
                                if (i) {
                                    var p = g(i);
                                    jn.apply(p, arguments)
                                }
                                if ((o || l) && (p || (p = g(arguments)), o && jn.apply(p, o), l && p.length < s)) return r |= 16, T([n, h ? r : -4 & r, p, null, a, s]);
                                if (p || (p = arguments), f && (n = e[c]), this instanceof t) {
                                    e = m(n.prototype);
                                    var d = n.apply(e, p);
                                    return Pe(d) ? d : e
                                }
                                return n.apply(e, p)
                            }
                            var n = e[0],
                                r = e[1],
                                i = e[2],
                                o = e[3],
                                a = e[4],
                                s = e[5],
                                u = 1 & r,
                                f = 2 & r,
                                l = 4 & r,
                                h = 8 & r,
                                c = n;
                            return Qn(t, e), t
                        }

                        function Q(e, t) {
                            var n = -1,
                                r = ue(),
                                a = e ? e.length : 0,
                                s = a >= _ && r === i,
                                u = [];
                            if (s) {
                                var l = f(t);
                                l ? (r = o, t = l) : s = !1
                            }
                            for (; ++n < a;) {
                                var h = e[n];
                                r(t, h) < 0 && u.push(h)
                            }
                            return s && d(t), u
                        }

                        function K(e, t, n, r) {
                            for (var i = (r || 0) - 1, o = e ? e.length : 0, a = []; ++i < o;) {
                                var s = e[i];
                                if (s && "object" == typeof s && "number" == typeof s.length && (Jn(s) || ce(s))) {
                                    t || (s = K(s, t, n));
                                    var u = -1,
                                        f = s.length,
                                        l = a.length;
                                    for (a.length += f; ++u < f;) a[l++] = s[u]
                                } else n || a.push(s)
                            }
                            return a
                        }

                        function ee(e, t, n, r, i, o) {
                            if (n) {
                                var a = n(e, t);
                                if ("undefined" != typeof a) return !!a
                            }
                            if (e === t) return 0 !== e || 1 / e == 1 / t;
                            var s = typeof e,
                                u = typeof t;
                            if (!(e !== e || e && H[s] || t && H[u])) return !1;
                            if (null == e || null == t) return e === t;
                            var f = kn.call(e),
                                l = kn.call(t);
                            if (f == V && (f = q), l == V && (l = q), f != l) return !1;
                            switch (f) {
                                case Y:
                                case B:
                                    return +e == +t;
                                case z:
                                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                                case W:
                                case G:
                                    return e == _n(t)
                            }
                            var c = f == F;
                            if (!c) {
                                var d = Un.call(e, "__wrapped__"),
                                    g = Un.call(t, "__wrapped__");
                                if (d || g) return ee(d ? e.__wrapped__ : e, g ? t.__wrapped__ : t, n, r, i, o);
                                if (f != q) return !1;
                                var y = e.constructor,
                                    v = t.constructor;
                                if (y != v && !(Le(y) && y instanceof y && Le(v) && v instanceof v) && "constructor" in e && "constructor" in t) return !1
                            }
                            var m = !i;
                            i || (i = h()), o || (o = h());
                            for (var b = i.length; b--;)
                                if (i[b] == e) return o[b] == t;
                            var w = 0;
                            if (a = !0, i.push(e), o.push(t), c) {
                                if (b = e.length, w = t.length, a = w == b, a || r)
                                    for (; w--;) {
                                        var E = b,
                                            _ = t[w];
                                        if (r)
                                            for (; E-- && !(a = ee(e[E], _, n, r, i, o)););
                                        else if (!(a = ee(e[w], _, n, r, i, o))) break
                                    }
                            } else sr(t, function(t, s, u) {
                                return Un.call(u, s) ? (w++, a = Un.call(e, s) && ee(e[s], t, n, r, i, o)) : void 0
                            }), a && !r && sr(e, function(e, t, n) {
                                return Un.call(n, t) ? a = --w > -1 : void 0
                            });
                            return i.pop(), o.pop(), m && (p(i), p(o)), a
                        }

                        function te(e, t, n, r, i) {
                            (Jn(t) ? He : ur)(t, function(t, o) {
                                var a, s, u = t,
                                    f = e[o];
                                if (t && ((s = Jn(t)) || fr(t))) {
                                    for (var l = r.length; l--;)
                                        if (a = r[l] == t) {
                                            f = i[l];
                                            break
                                        }
                                    if (!a) {
                                        var h;
                                        n && (u = n(f, t), (h = "undefined" != typeof u) && (f = u)), h || (f = s ? Jn(f) ? f : [] : fr(f) ? f : {}), r.push(t), i.push(f), h || te(f, t, n, r, i)
                                    }
                                } else n && (u = n(f, t), "undefined" == typeof u && (u = t)), "undefined" != typeof u && (f = u);
                                e[o] = f
                            })
                        }

                        function ne(e, t) {
                            return e + Rn($n() * (t - e + 1))
                        }

                        function ie(e, t, n) {
                            var r = -1,
                                a = ue(),
                                s = e ? e.length : 0,
                                u = [],
                                l = !t && s >= _ && a === i,
                                c = n || l ? h() : u;
                            if (l) {
                                var g = f(c);
                                a = o, c = g
                            }
                            for (; ++r < s;) {
                                var y = e[r],
                                    v = n ? n(y, r, e) : y;
                                (t ? !r || c[c.length - 1] !== v : a(c, v) < 0) && ((n || l) && c.push(v), u.push(y))
                            }
                            return l ? (p(c.array), d(c)) : n && p(c), u
                        }

                        function oe(e) {
                            return function(n, r, i) {
                                var o = {};
                                r = t.createCallback(r, i, 3);
                                var a = -1,
                                    s = n ? n.length : 0;
                                if ("number" == typeof s)
                                    for (; ++a < s;) {
                                        var u = n[a];
                                        e(o, u, r(u, a, n), n)
                                    } else ur(n, function(t, n, i) {
                                        e(o, t, r(t, n, i), i)
                                    });
                                return o
                            }
                        }

                        function ae(e, t, n, i, o, a) {
                            var s = 1 & t,
                                u = 2 & t,
                                f = 4 & t,
                                l = 16 & t,
                                h = 32 & t;
                            if (!u && !Le(e)) throw new Tn;
                            l && !n.length && (t &= -17, l = n = !1), h && !i.length && (t &= -33, h = i = !1);
                            var c = e && e.__bindData__;
                            if (c && c !== !0) return c = g(c), c[2] && (c[2] = g(c[2])), c[3] && (c[3] = g(c[3])), !s || 1 & c[1] || (c[4] = o), !s && 1 & c[1] && (t |= 8), !f || 4 & c[1] || (c[5] = a), l && jn.apply(c[2] || (c[2] = []), n), h && Vn.apply(c[3] || (c[3] = []), i), c[1] |= t, ae.apply(null, c);
                            var p = 1 == t || 17 === t ? r : T;
                            return p([e, t, n, i, o, a])
                        }

                        function se(e) {
                            return tr[e]
                        }

                        function ue() {
                            var e = (e = t.indexOf) === vt ? i : e;
                            return e
                        }

                        function fe(e) {
                            return "function" == typeof e && Nn.test(e)
                        }

                        function le(e) {
                            var t, n;
                            return e && kn.call(e) == q && (t = e.constructor, !Le(t) || t instanceof t) ? (sr(e, function(e, t) {
                                n = t
                            }), "undefined" == typeof n || Un.call(e, n)) : !1
                        }

                        function he(e) {
                            return nr[e]
                        }

                        function ce(e) {
                            return e && "object" == typeof e && "number" == typeof e.length && kn.call(e) == V || !1
                        }

                        function pe(e, t, n, r) {
                            return "boolean" != typeof t && null != t && (r = n, n = t, t = !1), a(e, t, "function" == typeof n && b(n, r, 1))
                        }

                        function de(e, t, n) {
                            return a(e, !0, "function" == typeof t && b(t, n, 1))
                        }

                        function ge(e, t) {
                            var n = m(e);
                            return t ? or(n, t) : n
                        }

                        function ye(e, n, r) {
                            var i;
                            return n = t.createCallback(n, r, 3), ur(e, function(e, t, r) {
                                return n(e, t, r) ? (i = t, !1) : void 0
                            }), i
                        }

                        function ve(e, n, r) {
                            var i;

                            return n = t.createCallback(n, r, 3), be(e, function(e, t, r) {
                                return n(e, t, r) ? (i = t, !1) : void 0
                            }), i
                        }

                        function me(e, t, n) {
                            var r = [];
                            sr(e, function(e, t) {
                                r.push(t, e)
                            });
                            var i = r.length;
                            for (t = b(t, n, 3); i-- && t(r[i--], r[i], e) !== !1;);
                            return e
                        }

                        function be(e, t, n) {
                            var r = er(e),
                                i = r.length;
                            for (t = b(t, n, 3); i--;) {
                                var o = r[i];
                                if (t(e[o], o, e) === !1) break
                            }
                            return e
                        }

                        function we(e) {
                            var t = [];
                            return sr(e, function(e, n) {
                                Le(e) && t.push(n)
                            }), t.sort()
                        }

                        function Ee(e, t) {
                            return e ? Un.call(e, t) : !1
                        }

                        function _e(e) {
                            for (var t = -1, n = er(e), r = n.length, i = {}; ++t < r;) {
                                var o = n[t];
                                i[e[o]] = o
                            }
                            return i
                        }

                        function Te(e) {
                            return e === !0 || e === !1 || e && "object" == typeof e && kn.call(e) == Y || !1
                        }

                        function xe(e) {
                            return e && "object" == typeof e && kn.call(e) == B || !1
                        }

                        function Ie(e) {
                            return e && 1 === e.nodeType || !1
                        }

                        function Se(e) {
                            var t = !0;
                            if (!e) return t;
                            var n = kn.call(e),
                                r = e.length;
                            return n == F || n == G || n == V || n == q && "number" == typeof r && Le(e.splice) ? !r : (ur(e, function() {
                                return t = !1
                            }), t)
                        }

                        function ke(e, t, n, r) {
                            return ee(e, t, "function" == typeof n && b(n, r, 2))
                        }

                        function Ne(e) {
                            return Dn(e) && !zn(parseFloat(e))
                        }

                        function Le(e) {
                            return "function" == typeof e
                        }

                        function Pe(e) {
                            return !(!e || !H[typeof e])
                        }

                        function Re(e) {
                            return Ae(e) && e != +e
                        }

                        function Oe(e) {
                            return null === e
                        }

                        function Ae(e) {
                            return "number" == typeof e || e && "object" == typeof e && kn.call(e) == z || !1
                        }

                        function Ue(e) {
                            return e && "object" == typeof e && kn.call(e) == W || !1
                        }

                        function je(e) {
                            return "string" == typeof e || e && "object" == typeof e && kn.call(e) == G || !1
                        }

                        function Ce(e) {
                            return "undefined" == typeof e
                        }

                        function Me(e, n, r) {
                            var i = {};
                            return n = t.createCallback(n, r, 3), ur(e, function(e, t, r) {
                                i[t] = n(e, t, r)
                            }), i
                        }

                        function Ve(e) {
                            var t = arguments,
                                n = 2;
                            if (!Pe(e)) return e;
                            if ("number" != typeof t[2] && (n = t.length), n > 3 && "function" == typeof t[n - 2]) var r = b(t[--n - 1], t[n--], 2);
                            else n > 2 && "function" == typeof t[n - 1] && (r = t[--n]);
                            for (var i = g(arguments, 1, n), o = -1, a = h(), s = h(); ++o < n;) te(e, i[o], r, a, s);
                            return p(a), p(s), e
                        }

                        function Fe(e, n, r) {
                            var i = {};
                            if ("function" != typeof n) {
                                var o = [];
                                sr(e, function(e, t) {
                                    o.push(t)
                                }), o = Q(o, K(arguments, !0, !1, 1));
                                for (var a = -1, s = o.length; ++a < s;) {
                                    var u = o[a];
                                    i[u] = e[u]
                                }
                            } else n = t.createCallback(n, r, 3), sr(e, function(e, t, r) {
                                n(e, t, r) || (i[t] = e)
                            });
                            return i
                        }

                        function Ye(e) {
                            for (var t = -1, n = er(e), r = n.length, i = dn(r); ++t < r;) {
                                var o = n[t];
                                i[t] = [o, e[o]]
                            }
                            return i
                        }

                        function Be(e, n, r) {
                            var i = {};
                            if ("function" != typeof n)
                                for (var o = -1, a = K(arguments, !0, !1, 1), s = Pe(e) ? a.length : 0; ++o < s;) {
                                    var u = a[o];
                                    u in e && (i[u] = e[u])
                                } else n = t.createCallback(n, r, 3), sr(e, function(e, t, r) {
                                    n(e, t, r) && (i[t] = e)
                                });
                            return i
                        }

                        function De(e, n, r, i) {
                            var o = Jn(e);
                            if (null == r)
                                if (o) r = [];
                                else {
                                    var a = e && e.constructor,
                                        s = a && a.prototype;
                                    r = m(s)
                                }
                            return n && (n = t.createCallback(n, i, 4), (o ? He : ur)(e, function(e, t, i) {
                                return n(r, e, t, i)
                            })), r
                        }

                        function ze(e) {
                            for (var t = -1, n = er(e), r = n.length, i = dn(r); ++t < r;) i[t] = e[n[t]];
                            return i
                        }

                        function qe(e) {
                            for (var t = arguments, n = -1, r = K(t, !0, !1, 1), i = t[2] && t[2][t[1]] === e ? 1 : r.length, o = dn(i); ++n < i;) o[n] = e[r[n]];
                            return o
                        }

                        function We(e, t, n) {
                            var r = -1,
                                i = ue(),
                                o = e ? e.length : 0,
                                a = !1;
                            return n = (0 > n ? Wn(0, o + n) : n) || 0, Jn(e) ? a = i(e, t, n) > -1 : "number" == typeof o ? a = (je(e) ? e.indexOf(t, n) : i(e, t, n)) > -1 : ur(e, function(e) {
                                return ++r >= n ? !(a = e === t) : void 0
                            }), a
                        }

                        function Ge(e, n, r) {
                            var i = !0;
                            n = t.createCallback(n, r, 3);
                            var o = -1,
                                a = e ? e.length : 0;
                            if ("number" == typeof a)
                                for (; ++o < a && (i = !!n(e[o], o, e)););
                            else ur(e, function(e, t, r) {
                                return i = !!n(e, t, r)
                            });
                            return i
                        }

                        function Ze(e, n, r) {
                            var i = [];
                            n = t.createCallback(n, r, 3);
                            var o = -1,
                                a = e ? e.length : 0;
                            if ("number" == typeof a)
                                for (; ++o < a;) {
                                    var s = e[o];
                                    n(s, o, e) && i.push(s)
                                } else ur(e, function(e, t, r) {
                                    n(e, t, r) && i.push(e)
                                });
                            return i
                        }

                        function $e(e, n, r) {
                            n = t.createCallback(n, r, 3);
                            var i = -1,
                                o = e ? e.length : 0;
                            if ("number" != typeof o) {
                                var a;
                                return ur(e, function(e, t, r) {
                                    return n(e, t, r) ? (a = e, !1) : void 0
                                }), a
                            }
                            for (; ++i < o;) {
                                var s = e[i];
                                if (n(s, i, e)) return s
                            }
                        }

                        function Xe(e, n, r) {
                            var i;
                            return n = t.createCallback(n, r, 3), Qe(e, function(e, t, r) {
                                return n(e, t, r) ? (i = e, !1) : void 0
                            }), i
                        }

                        function He(e, t, n) {
                            var r = -1,
                                i = e ? e.length : 0;
                            if (t = t && "undefined" == typeof n ? t : b(t, n, 3), "number" == typeof i)
                                for (; ++r < i && t(e[r], r, e) !== !1;);
                            else ur(e, t);
                            return e
                        }

                        function Qe(e, t, n) {
                            var r = e ? e.length : 0;
                            if (t = t && "undefined" == typeof n ? t : b(t, n, 3), "number" == typeof r)
                                for (; r-- && t(e[r], r, e) !== !1;);
                            else {
                                var i = er(e);
                                r = i.length, ur(e, function(e, n, o) {
                                    return n = i ? i[--r] : --r, t(o[n], n, o)
                                })
                            }
                            return e
                        }

                        function Je(e, t) {
                            var n = g(arguments, 2),
                                r = -1,
                                i = "function" == typeof t,
                                o = e ? e.length : 0,
                                a = dn("number" == typeof o ? o : 0);
                            return He(e, function(e) {
                                a[++r] = (i ? t : e[t]).apply(e, n)
                            }), a
                        }

                        function Ke(e, n, r) {
                            var i = -1,
                                o = e ? e.length : 0;
                            if (n = t.createCallback(n, r, 3), "number" == typeof o)
                                for (var a = dn(o); ++i < o;) a[i] = n(e[i], i, e);
                            else a = [], ur(e, function(e, t, r) {
                                a[++i] = n(e, t, r)
                            });
                            return a
                        }

                        function et(e, n, r) {
                            var i = -(1 / 0),
                                o = i;
                            if ("function" != typeof n && r && r[n] === e && (n = null), null == n && Jn(e))
                                for (var a = -1, u = e.length; ++a < u;) {
                                    var f = e[a];
                                    f > o && (o = f)
                                } else n = null == n && je(e) ? s : t.createCallback(n, r, 3), He(e, function(e, t, r) {
                                    var a = n(e, t, r);
                                    a > i && (i = a, o = e)
                                });
                            return o
                        }

                        function tt(e, n, r) {
                            var i = 1 / 0,
                                o = i;
                            if ("function" != typeof n && r && r[n] === e && (n = null), null == n && Jn(e))
                                for (var a = -1, u = e.length; ++a < u;) {
                                    var f = e[a];
                                    o > f && (o = f)
                                } else n = null == n && je(e) ? s : t.createCallback(n, r, 3), He(e, function(e, t, r) {
                                    var a = n(e, t, r);
                                    i > a && (i = a, o = e)
                                });
                            return o
                        }

                        function nt(e, n, r, i) {
                            if (!e) return r;
                            var o = arguments.length < 3;
                            n = t.createCallback(n, i, 4);
                            var a = -1,
                                s = e.length;
                            if ("number" == typeof s)
                                for (o && (r = e[++a]); ++a < s;) r = n(r, e[a], a, e);
                            else ur(e, function(e, t, i) {
                                r = o ? (o = !1, e) : n(r, e, t, i)
                            });
                            return r
                        }

                        function rt(e, n, r, i) {
                            var o = arguments.length < 3;
                            return n = t.createCallback(n, i, 4), Qe(e, function(e, t, i) {
                                r = o ? (o = !1, e) : n(r, e, t, i)
                            }), r
                        }

                        function it(e, n, r) {
                            return n = t.createCallback(n, r, 3), Ze(e, function(e, t, r) {
                                return !n(e, t, r)
                            })
                        }

                        function ot(e, t, n) {
                            if (e && "number" != typeof e.length && (e = ze(e)), null == t || n) return e ? e[ne(0, e.length - 1)] : v;
                            var r = at(e);
                            return r.length = Gn(Wn(0, t), r.length), r
                        }

                        function at(e) {
                            var t = -1,
                                n = e ? e.length : 0,
                                r = dn("number" == typeof n ? n : 0);
                            return He(e, function(e) {
                                var n = ne(0, ++t);
                                r[t] = r[n], r[n] = e
                            }), r
                        }

                        function st(e) {
                            var t = e ? e.length : 0;
                            return "number" == typeof t ? t : er(e).length
                        }

                        function ut(e, n, r) {
                            var i;
                            n = t.createCallback(n, r, 3);
                            var o = -1,
                                a = e ? e.length : 0;
                            if ("number" == typeof a)
                                for (; ++o < a && !(i = n(e[o], o, e)););
                            else ur(e, function(e, t, r) {
                                return !(i = n(e, t, r))
                            });
                            return !!i
                        }

                        function ft(e, n, r) {
                            var i = -1,
                                o = Jn(n),
                                a = e ? e.length : 0,
                                s = dn("number" == typeof a ? a : 0);
                            for (o || (n = t.createCallback(n, r, 3)), He(e, function(e, t, r) {
                                    var a = s[++i] = c();
                                    o ? a.criteria = Ke(n, function(t) {
                                        return e[t]
                                    }) : (a.criteria = h())[0] = n(e, t, r), a.index = i, a.value = e
                                }), a = s.length, s.sort(u); a--;) {
                                var f = s[a];
                                s[a] = f.value, o || p(f.criteria), d(f)
                            }
                            return s
                        }

                        function lt(e) {
                            return e && "number" == typeof e.length ? g(e) : ze(e)
                        }

                        function ht(e) {
                            for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
                                var i = e[t];
                                i && r.push(i)
                            }
                            return r
                        }

                        function ct(e) {
                            return Q(e, K(arguments, !0, !0, 1))
                        }

                        function pt(e, n, r) {
                            var i = -1,
                                o = e ? e.length : 0;
                            for (n = t.createCallback(n, r, 3); ++i < o;)
                                if (n(e[i], i, e)) return i;
                            return -1
                        }

                        function dt(e, n, r) {
                            var i = e ? e.length : 0;
                            for (n = t.createCallback(n, r, 3); i--;)
                                if (n(e[i], i, e)) return i;
                            return -1
                        }

                        function gt(e, n, r) {
                            var i = 0,
                                o = e ? e.length : 0;
                            if ("number" != typeof n && null != n) {
                                var a = -1;
                                for (n = t.createCallback(n, r, 3); ++a < o && n(e[a], a, e);) i++
                            } else if (i = n, null == i || r) return e ? e[0] : v;
                            return g(e, 0, Gn(Wn(0, i), o))
                        }

                        function yt(e, t, n, r) {
                            return "boolean" != typeof t && null != t && (r = n, n = "function" != typeof t && r && r[t] === e ? null : t, t = !1), null != n && (e = Ke(e, n, r)), K(e, t)
                        }

                        function vt(e, t, n) {
                            if ("number" == typeof n) {
                                var r = e ? e.length : 0;
                                n = 0 > n ? Wn(0, r + n) : n || 0
                            } else if (n) {
                                var o = St(e, t);
                                return e[o] === t ? o : -1
                            }
                            return i(e, t, n)
                        }

                        function mt(e, n, r) {
                            var i = 0,
                                o = e ? e.length : 0;
                            if ("number" != typeof n && null != n) {
                                var a = o;
                                for (n = t.createCallback(n, r, 3); a-- && n(e[a], a, e);) i++
                            } else i = null == n || r ? 1 : n || i;
                            return g(e, 0, Gn(Wn(0, o - i), o))
                        }

                        function bt() {
                            for (var e = [], t = -1, n = arguments.length, r = h(), a = ue(), s = a === i, u = h(); ++t < n;) {
                                var l = arguments[t];
                                (Jn(l) || ce(l)) && (e.push(l), r.push(s && l.length >= _ && f(t ? e[t] : u)))
                            }
                            var c = e[0],
                                g = -1,
                                y = c ? c.length : 0,
                                v = [];
                            e: for (; ++g < y;) {
                                var m = r[0];
                                if (l = c[g], (m ? o(m, l) : a(u, l)) < 0) {
                                    for (t = n, (m || u).push(l); --t;)
                                        if (m = r[t], (m ? o(m, l) : a(e[t], l)) < 0) continue e;
                                    v.push(l)
                                }
                            }
                            for (; n--;) m = r[n], m && d(m);
                            return p(r), p(u), v
                        }

                        function wt(e, n, r) {
                            var i = 0,
                                o = e ? e.length : 0;
                            if ("number" != typeof n && null != n) {
                                var a = o;
                                for (n = t.createCallback(n, r, 3); a-- && n(e[a], a, e);) i++
                            } else if (i = n, null == i || r) return e ? e[o - 1] : v;
                            return g(e, Wn(0, o - i))
                        }

                        function Et(e, t, n) {
                            var r = e ? e.length : 0;
                            for ("number" == typeof n && (r = (0 > n ? Wn(0, r + n) : Gn(n, r - 1)) + 1); r--;)
                                if (e[r] === t) return r;
                            return -1
                        }

                        function _t(e) {
                            for (var t = arguments, n = 0, r = t.length, i = e ? e.length : 0; ++n < r;)
                                for (var o = -1, a = t[n]; ++o < i;) e[o] === a && (Mn.call(e, o--, 1), i--);
                            return e
                        }

                        function Tt(e, t, n) {
                            e = +e || 0, n = "number" == typeof n ? n : +n || 1, null == t && (t = e, e = 0);
                            for (var r = -1, i = Wn(0, Ln((t - e) / (n || 1))), o = dn(i); ++r < i;) o[r] = e, e += n;
                            return o
                        }

                        function xt(e, n, r) {
                            var i = -1,
                                o = e ? e.length : 0,
                                a = [];
                            for (n = t.createCallback(n, r, 3); ++i < o;) {
                                var s = e[i];
                                n(s, i, e) && (a.push(s), Mn.call(e, i--, 1), o--)
                            }
                            return a
                        }

                        function It(e, n, r) {
                            if ("number" != typeof n && null != n) {
                                var i = 0,
                                    o = -1,
                                    a = e ? e.length : 0;
                                for (n = t.createCallback(n, r, 3); ++o < a && n(e[o], o, e);) i++
                            } else i = null == n || r ? 1 : Wn(0, n);
                            return g(e, i)
                        }

                        function St(e, n, r, i) {
                            var o = 0,
                                a = e ? e.length : o;
                            for (r = r ? t.createCallback(r, i, 1) : Qt, n = r(n); a > o;) {
                                var s = o + a >>> 1;
                                r(e[s]) < n ? o = s + 1 : a = s
                            }
                            return o
                        }

                        function kt() {
                            return ie(K(arguments, !0, !0))
                        }

                        function Nt(e, n, r, i) {
                            return "boolean" != typeof n && null != n && (i = r, r = "function" != typeof n && i && i[n] === e ? null : n, n = !1), null != r && (r = t.createCallback(r, i, 3)), ie(e, n, r)
                        }

                        function Lt(e) {
                            return Q(e, g(arguments, 1))
                        }

                        function Pt() {
                            for (var e = -1, t = arguments.length; ++e < t;) {
                                var n = arguments[e];
                                if (Jn(n) || ce(n)) var r = r ? ie(Q(r, n).concat(Q(n, r))) : n
                            }
                            return r || []
                        }

                        function Rt() {
                            for (var e = arguments.length > 1 ? arguments : arguments[0], t = -1, n = e ? et(pr(e, "length")) : 0, r = dn(0 > n ? 0 : n); ++t < n;) r[t] = pr(e, t);
                            return r
                        }

                        function Ot(e, t) {
                            var n = -1,
                                r = e ? e.length : 0,
                                i = {};
                            for (t || !r || Jn(e[0]) || (t = []); ++n < r;) {
                                var o = e[n];
                                t ? i[o] = t[n] : o && (i[o[0]] = o[1])
                            }
                            return i
                        }

                        function At(e, t) {
                            if (!Le(t)) throw new Tn;
                            return function() {
                                return --e < 1 ? t.apply(this, arguments) : void 0
                            }
                        }

                        function Ut(e, t) {
                            return arguments.length > 2 ? ae(e, 17, g(arguments, 2), null, t) : ae(e, 1, null, null, t)
                        }

                        function jt(e) {
                            for (var t = arguments.length > 1 ? K(arguments, !0, !1, 1) : we(e), n = -1, r = t.length; ++n < r;) {
                                var i = t[n];
                                e[i] = ae(e[i], 1, null, null, e)
                            }
                            return e
                        }

                        function Ct(e, t) {
                            return arguments.length > 2 ? ae(t, 19, g(arguments, 2), null, e) : ae(t, 3, null, null, e)
                        }

                        function Mt() {
                            for (var e = arguments, t = e.length; t--;)
                                if (!Le(e[t])) throw new Tn;
                            return function() {
                                for (var t = arguments, n = e.length; n--;) t = [e[n].apply(this, t)];
                                return t[0]
                            }
                        }

                        function Vt(e, t) {
                            return t = "number" == typeof t ? t : +t || e.length, ae(e, 4, null, null, null, t)
                        }

                        function Ft(e, t, n) {
                            var r, i, o, a, s, u, f, l = 0,
                                h = !1,
                                c = !0;
                            if (!Le(e)) throw new Tn;
                            if (t = Wn(0, t) || 0, n === !0) {
                                var p = !0;
                                c = !1
                            } else Pe(n) && (p = n.leading, h = "maxWait" in n && (Wn(t, n.maxWait) || 0), c = "trailing" in n ? n.trailing : c);
                            var d = function() {
                                    var n = t - (gr() - a);
                                    if (0 >= n) {
                                        i && Pn(i);
                                        var h = f;
                                        i = u = f = v, h && (l = gr(), o = e.apply(s, r), u || i || (r = s = null))
                                    } else u = Cn(d, n)
                                },
                                g = function() {
                                    u && Pn(u), i = u = f = v, (c || h !== t) && (l = gr(), o = e.apply(s, r), u || i || (r = s = null))
                                };
                            return function() {
                                if (r = arguments, a = gr(), s = this, f = c && (u || !p), h === !1) var n = p && !u;
                                else {
                                    i || p || (l = a);
                                    var y = h - (a - l),
                                        v = 0 >= y;
                                    v ? (i && (i = Pn(i)), l = a, o = e.apply(s, r)) : i || (i = Cn(g, y))
                                }
                                return v && u ? u = Pn(u) : u || t === h || (u = Cn(d, t)), n && (v = !0, o = e.apply(s, r)), !v || u || i || (r = s = null), o
                            }
                        }

                        function Yt(e) {
                            if (!Le(e)) throw new Tn;
                            var t = g(arguments, 1);
                            return Cn(function() {
                                e.apply(v, t)
                            }, 1)
                        }

                        function Bt(e, t) {
                            if (!Le(e)) throw new Tn;
                            var n = g(arguments, 2);
                            return Cn(function() {
                                e.apply(v, n)
                            }, t)
                        }

                        function Dt(e, t) {
                            if (!Le(e)) throw new Tn;
                            var n = function() {
                                var r = n.cache,
                                    i = t ? t.apply(this, arguments) : E + arguments[0];
                                return Un.call(r, i) ? r[i] : r[i] = e.apply(this, arguments)
                            };
                            return n.cache = {}, n
                        }

                        function zt(e) {
                            var t, n;
                            if (!Le(e)) throw new Tn;
                            return function() {
                                return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
                            }
                        }

                        function qt(e) {
                            return ae(e, 16, g(arguments, 1))
                        }

                        function Wt(e) {
                            return ae(e, 32, null, g(arguments, 1))
                        }

                        function Gt(e, t, n) {
                            var r = !0,
                                i = !0;
                            if (!Le(e)) throw new Tn;
                            return n === !1 ? r = !1 : Pe(n) && (r = "leading" in n ? n.leading : r, i = "trailing" in n ? n.trailing : i), $.leading = r, $.maxWait = t, $.trailing = i, Ft(e, t, $)
                        }

                        function Zt(e, t) {
                            return ae(t, 16, [e])
                        }

                        function $t(e) {
                            return function() {
                                return e
                            }
                        }

                        function Xt(e, t, n) {
                            var r = typeof e;
                            if (null == e || "function" == r) return b(e, t, n);
                            if ("object" != r) return tn(e);
                            var i = er(e),
                                o = i[0],
                                a = e[o];
                            return 1 != i.length || a !== a || Pe(a) ? function(t) {
                                for (var n = i.length, r = !1; n-- && (r = ee(t[i[n]], e[i[n]], null, !0)););
                                return r
                            } : function(e) {
                                var t = e[o];
                                return a === t && (0 !== a || 1 / a == 1 / t)
                            }
                        }

                        function Ht(e) {
                            return null == e ? "" : _n(e).replace(ir, se)
                        }

                        function Qt(e) {
                            return e
                        }

                        function Jt(e, r, i) {
                            var o = !0,
                                a = r && we(r);
                            r && (i || a.length) || (null == i && (i = r), s = n, r = e, e = t, a = we(r)), i === !1 ? o = !1 : Pe(i) && "chain" in i && (o = i.chain);
                            var s = e,
                                u = Le(s);
                            He(a, function(t) {
                                var n = e[t] = r[t];
                                u && (s.prototype[t] = function() {
                                    var t = this.__chain__,
                                        r = this.__wrapped__,
                                        i = [r];
                                    jn.apply(i, arguments);
                                    var a = n.apply(e, i);
                                    if (o || t) {
                                        if (r === a && Pe(a)) return this;
                                        a = new s(a), a.__chain__ = t
                                    }
                                    return a
                                })
                            })
                        }

                        function Kt() {
                            return e._ = Sn, this
                        }

                        function en() {}

                        function tn(e) {
                            return function(t) {
                                return t[e]
                            }
                        }

                        function nn(e, t, n) {
                            var r = null == e,
                                i = null == t;
                            if (null == n && ("boolean" == typeof e && i ? (n = e, e = 1) : i || "boolean" != typeof t || (n = t, i = !0)), r && i && (t = 1), e = +e || 0, i ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1) {
                                var o = $n();
                                return Gn(e + o * (t - e + parseFloat("1e-" + ((o + "").length - 1))), t)
                            }
                            return ne(e, t)
                        }

                        function rn(e, t) {
                            if (e) {
                                var n = e[t];
                                return Le(n) ? e[t]() : n
                            }
                        }

                        function on(e, n, r) {
                            var i = t.templateSettings;
                            e = _n(e || ""), r = ar({}, r, i);
                            var o, a = ar({}, r.imports, i.imports),
                                s = er(a),
                                u = ze(a),
                                f = 0,
                                h = r.interpolate || A,
                                c = "__p += '",
                                p = En((r.escape || A).source + "|" + h.source + "|" + (h === R ? N : A).source + "|" + (r.evaluate || A).source + "|$", "g");
                            e.replace(p, function(t, n, r, i, a, s) {
                                return r || (r = i), c += e.slice(f, s).replace(j, l), n && (c += "' +\n__e(" + n + ") +\n'"), a && (o = !0, c += "';\n" + a + ";\n__p += '"), r && (c += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), f = s + t.length, t
                            }), c += "';\n";
                            var d = r.variable,
                                g = d;
                            g || (d = "obj", c = "with (" + d + ") {\n" + c + "\n}\n"), c = (o ? c.replace(I, "") : c).replace(S, "$1").replace(k, "$1;"), c = "function(" + d + ") {\n" + (g ? "" : d + " || (" + d + " = {});\n") + "var __t, __p = '', __e = _.escape" + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + c + "return __p\n}";
                            var y = "\n/*\n//# sourceURL=" + (r.sourceURL || "/lodash/template/source[" + M++ + "]") + "\n*/";
                            try {
                                var m = vn(s, "return " + c + y).apply(v, u)
                            } catch (b) {
                                throw b.source = c, b
                            }
                            return n ? m(n) : (m.source = c, m)
                        }

                        function an(e, t, n) {
                            e = (e = +e) > -1 ? e : 0;
                            var r = -1,
                                i = dn(e);
                            for (t = b(t, n, 1); ++r < e;) i[r] = t(r);
                            return i
                        }

                        function sn(e) {
                            return null == e ? "" : _n(e).replace(rr, he)
                        }

                        function un(e) {
                            var t = ++w;
                            return _n(null == e ? "" : e) + t
                        }

                        function fn(e) {
                            return e = new n(e), e.__chain__ = !0, e
                        }

                        function ln(e, t) {
                            return t(e), e
                        }

                        function hn() {
                            return this.__chain__ = !0, this
                        }

                        function cn() {
                            return _n(this.__wrapped__)
                        }

                        function pn() {
                            return this.__wrapped__
                        }
                        e = e ? re.defaults(J.Object(), e, re.pick(J, C)) : J;
                        var dn = e.Array,
                            gn = e.Boolean,
                            yn = e.Date,
                            vn = e.Function,
                            mn = e.Math,
                            bn = e.Number,
                            wn = e.Object,
                            En = e.RegExp,
                            _n = e.String,
                            Tn = e.TypeError,
                            xn = [],
                            In = wn.prototype,
                            Sn = e._,
                            kn = In.toString,
                            Nn = En("^" + _n(kn).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                            Ln = mn.ceil,
                            Pn = e.clearTimeout,
                            Rn = mn.floor,
                            On = vn.prototype.toString,
                            An = fe(An = wn.getPrototypeOf) && An,
                            Un = In.hasOwnProperty,
                            jn = xn.push,
                            Cn = e.setTimeout,
                            Mn = xn.splice,
                            Vn = xn.unshift,
                            Fn = function() {
                                try {
                                    var e = {},
                                        t = fe(t = wn.defineProperty) && t,
                                        n = t(e, e, e) && t
                                } catch (r) {}
                                return n
                            }(),
                            Yn = fe(Yn = wn.create) && Yn,
                            Bn = fe(Bn = dn.isArray) && Bn,
                            Dn = e.isFinite,
                            zn = e.isNaN,
                            qn = fe(qn = wn.keys) && qn,
                            Wn = mn.max,
                            Gn = mn.min,
                            Zn = e.parseInt,
                            $n = mn.random,
                            Xn = {};
                        Xn[F] = dn, Xn[Y] = gn, Xn[B] = yn, Xn[D] = vn, Xn[q] = wn, Xn[z] = bn, Xn[W] = En, Xn[G] = _n, n.prototype = t.prototype;
                        var Hn = t.support = {};
                        Hn.funcDecomp = !fe(e.WinRTError) && U.test(y), Hn.funcNames = "string" == typeof vn.name, t.templateSettings = {
                            escape: /<%-([\s\S]+?)%>/g,
                            evaluate: /<%([\s\S]+?)%>/g,
                            interpolate: R,
                            variable: "",
                            imports: {
                                _: t
                            }
                        }, Yn || (m = function() {
                            function t() {}
                            return function(n) {
                                if (Pe(n)) {
                                    t.prototype = n;
                                    var r = new t;
                                    t.prototype = null
                                }
                                return r || e.Object()
                            }
                        }());
                        var Qn = Fn ? function(e, t) {
                                X.value = t, Fn(e, "__bindData__", X), X.value = null
                            } : en,
                            Jn = Bn || function(e) {
                                return e && "object" == typeof e && "number" == typeof e.length && kn.call(e) == F || !1
                            },
                            Kn = function(e) {
                                var t, n = e,
                                    r = [];
                                if (!n) return r;
                                if (!H[typeof e]) return r;
                                for (t in n) Un.call(n, t) && r.push(t);
                                return r
                            },
                            er = qn ? function(e) {
                                return Pe(e) ? qn(e) : []
                            } : Kn,
                            tr = {
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;"
                            },
                            nr = _e(tr),
                            rr = En("(" + er(nr).join("|") + ")", "g"),
                            ir = En("[" + er(tr).join("") + "]", "g"),
                            or = function(e, t, n) {
                                var r, i = e,
                                    o = i;
                                if (!i) return o;
                                var a = arguments,
                                    s = 0,
                                    u = "number" == typeof n ? 2 : a.length;
                                if (u > 3 && "function" == typeof a[u - 2]) var f = b(a[--u - 1], a[u--], 2);
                                else u > 2 && "function" == typeof a[u - 1] && (f = a[--u]);
                                for (; ++s < u;)
                                    if (i = a[s], i && H[typeof i])
                                        for (var l = -1, h = H[typeof i] && er(i), c = h ? h.length : 0; ++l < c;) r = h[l], o[r] = f ? f(o[r], i[r]) : i[r];
                                return o
                            },
                            ar = function(e, t, n) {
                                var r, i = e,
                                    o = i;
                                if (!i) return o;
                                for (var a = arguments, s = 0, u = "number" == typeof n ? 2 : a.length; ++s < u;)
                                    if (i = a[s], i && H[typeof i])
                                        for (var f = -1, l = H[typeof i] && er(i), h = l ? l.length : 0; ++f < h;) r = l[f], "undefined" == typeof o[r] && (o[r] = i[r]);
                                return o
                            },
                            sr = function(e, t, n) {
                                var r, i = e,
                                    o = i;
                                if (!i) return o;
                                if (!H[typeof i]) return o;
                                t = t && "undefined" == typeof n ? t : b(t, n, 3);
                                for (r in i)
                                    if (t(i[r], r, e) === !1) return o;
                                return o
                            },
                            ur = function(e, t, n) {
                                var r, i = e,
                                    o = i;
                                if (!i) return o;
                                if (!H[typeof i]) return o;
                                t = t && "undefined" == typeof n ? t : b(t, n, 3);
                                for (var a = -1, s = H[typeof i] && er(i), u = s ? s.length : 0; ++a < u;)
                                    if (r = s[a], t(i[r], r, e) === !1) return o;
                                return o
                            },
                            fr = An ? function(e) {
                                if (!e || kn.call(e) != q) return !1;
                                var t = e.valueOf,
                                    n = fe(t) && (n = An(t)) && An(n);
                                return n ? e == n || An(e) == n : le(e)
                            } : le,
                            lr = oe(function(e, t, n) {
                                Un.call(e, n) ? e[n]++ : e[n] = 1
                            }),
                            hr = oe(function(e, t, n) {
                                (Un.call(e, n) ? e[n] : e[n] = []).push(t)
                            }),
                            cr = oe(function(e, t, n) {
                                e[n] = t
                            }),
                            pr = Ke,
                            dr = Ze,
                            gr = fe(gr = yn.now) && gr || function() {
                                return (new yn).getTime()
                            },
                            yr = 8 == Zn(x + "08") ? Zn : function(e, t) {
                                return Zn(je(e) ? e.replace(O, "") : e, t || 0)
                            };
                        return t.after = At, t.assign = or, t.at = qe, t.bind = Ut, t.bindAll = jt, t.bindKey = Ct, t.chain = fn, t.compact = ht, t.compose = Mt, t.constant = $t, t.countBy = lr, t.create = ge, t.createCallback = Xt, t.curry = Vt, t.debounce = Ft, t.defaults = ar, t.defer = Yt, t.delay = Bt, t.difference = ct, t.filter = Ze, t.flatten = yt, t.forEach = He, t.forEachRight = Qe, t.forIn = sr, t.forInRight = me, t.forOwn = ur, t.forOwnRight = be, t.functions = we, t.groupBy = hr, t.indexBy = cr, t.initial = mt, t.intersection = bt, t.invert = _e, t.invoke = Je, t.keys = er, t.map = Ke, t.mapValues = Me, t.max = et, t.memoize = Dt, t.merge = Ve, t.min = tt, t.omit = Fe, t.once = zt, t.pairs = Ye, t.partial = qt, t.partialRight = Wt, t.pick = Be, t.pluck = pr, t.property = tn, t.pull = _t, t.range = Tt, t.reject = it, t.remove = xt, t.rest = It, t.shuffle = at, t.sortBy = ft, t.tap = ln, t.throttle = Gt, t.times = an, t.toArray = lt, t.transform = De, t.union = kt, t.uniq = Nt, t.values = ze, t.where = dr, t.without = Lt, t.wrap = Zt, t.xor = Pt, t.zip = Rt, t.zipObject = Ot, t.collect = Ke, t.drop = It, t.each = He, t.eachRight = Qe, t.extend = or, t.methods = we, t.object = Ot, t.select = Ze, t.tail = It, t.unique = Nt, t.unzip = Rt, Jt(t), t.clone = pe, t.cloneDeep = de, t.contains = We, t.escape = Ht, t.every = Ge, t.find = $e, t.findIndex = pt, t.findKey = ye, t.findLast = Xe, t.findLastIndex = dt, t.findLastKey = ve, t.has = Ee, t.identity = Qt, t.indexOf = vt, t.isArguments = ce, t.isArray = Jn, t.isBoolean = Te, t.isDate = xe, t.isElement = Ie, t.isEmpty = Se, t.isEqual = ke, t.isFinite = Ne, t.isFunction = Le, t.isNaN = Re, t.isNull = Oe, t.isNumber = Ae, t.isObject = Pe, t.isPlainObject = fr, t.isRegExp = Ue, t.isString = je, t.isUndefined = Ce, t.lastIndexOf = Et, t.mixin = Jt, t.noConflict = Kt, t.noop = en, t.now = gr, t.parseInt = yr, t.random = nn, t.reduce = nt, t.reduceRight = rt, t.result = rn, t.runInContext = y, t.size = st, t.some = ut, t.sortedIndex = St, t.template = on, t.unescape = sn, t.uniqueId = un, t.all = Ge, t.any = ut, t.detect = $e, t.findWhere = $e, t.foldl = nt, t.foldr = rt, t.include = We, t.inject = nt, Jt(function() {
                            var e = {};
                            return ur(t, function(n, r) {
                                t.prototype[r] || (e[r] = n)
                            }), e
                        }(), !1), t.first = gt, t.last = wt, t.sample = ot, t.take = gt, t.head = gt, ur(t, function(e, r) {
                            var i = "sample" !== r;
                            t.prototype[r] || (t.prototype[r] = function(t, r) {
                                var o = this.__chain__,
                                    a = e(this.__wrapped__, t, r);
                                return o || null != t && (!r || i && "function" == typeof t) ? new n(a, o) : a
                            })
                        }), t.VERSION = "2.4.2", t.prototype.chain = hn, t.prototype.toString = cn, t.prototype.value = pn, t.prototype.valueOf = pn, He(["join", "pop", "shift"], function(e) {
                            var r = xn[e];
                            t.prototype[e] = function() {
                                var e = this.__chain__,
                                    t = r.apply(this.__wrapped__, arguments);
                                return e ? new n(t, e) : t
                            }
                        }), He(["push", "reverse", "sort", "unshift"], function(e) {
                            var n = xn[e];
                            t.prototype[e] = function() {
                                return n.apply(this.__wrapped__, arguments), this
                            }
                        }), He(["concat", "slice", "splice"], function(e) {
                            var r = xn[e];
                            t.prototype[e] = function() {
                                return new n(r.apply(this.__wrapped__, arguments), this.__chain__)
                            }
                        }), t
                    }
                    var v, m = [],
                        b = [],
                        w = 0,
                        E = +new Date + "",
                        _ = 75,
                        T = 40,
                        x = " 	\f \ufeff\n\r\u2028\u2029 ᠎             　",
                        I = /\b__p \+= '';/g,
                        S = /\b(__p \+=) '' \+/g,
                        k = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        N = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        L = /\w*$/,
                        P = /^\s*function[ \n\r\t]+\w/,
                        R = /<%=([\s\S]+?)%>/g,
                        O = RegExp("^[" + x + "]*0+(?=.$)"),
                        A = /($^)/,
                        U = /\bthis\b/,
                        j = /['\n\r\t\u2028\u2029\\]/g,
                        C = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
                        M = 0,
                        V = "[object Arguments]",
                        F = "[object Array]",
                        Y = "[object Boolean]",
                        B = "[object Date]",
                        D = "[object Function]",
                        z = "[object Number]",
                        q = "[object Object]",
                        W = "[object RegExp]",
                        G = "[object String]",
                        Z = {};
                    Z[D] = !1, Z[V] = Z[F] = Z[Y] = Z[B] = Z[z] = Z[q] = Z[W] = Z[G] = !0;
                    var $ = {
                            leading: !1,
                            maxWait: 0,
                            trailing: !1
                        },
                        X = {
                            configurable: !1,
                            enumerable: !1,
                            value: null,
                            writable: !1
                        },
                        H = {
                            "boolean": !1,
                            "function": !0,
                            object: !0,
                            number: !1,
                            string: !1,
                            undefined: !1
                        },
                        Q = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "	": "t",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        J = H[typeof window] && window || this,
                        K = H[typeof r] && r && !r.nodeType && r,
                        ee = H[typeof n] && n && !n.nodeType && n,
                        te = ee && ee.exports === K && K,
                        ne = H[typeof t] && t;
                    !ne || ne.global !== ne && ne.window !== ne || (J = ne);
                    var re = y();
                    "function" == typeof e && "object" == typeof e.amd && e.amd ? (J._ = re, e(function() {
                        return re
                    })) : K && ee ? te ? (ee.exports = re)._ = re : K._ = re : J._ = re
                }).call(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        85: [function(e, t, n) {
            var r = e("pjs").P,
                i = {};
            i.Parser = r(function(e, t, n) {
                "use strict";

                function r(e, t) {
                    return {
                        status: !0,
                        index: e,
                        value: t,
                        furthest: -1,
                        expected: ""
                    }
                }

                function o(e, t) {
                    return {
                        status: !1,
                        index: -1,
                        value: null,
                        furthest: e,
                        expected: t
                    }
                }

                function a(e, t) {
                    return t ? e.furthest >= t.furthest ? e : {
                        status: e.status,
                        index: e.index,
                        value: e.value,
                        furthest: t.furthest,
                        expected: t.expected
                    } : e
                }

                function s(e) {
                    if (!(e instanceof n)) throw new Error("not a parser: " + e)
                }
                i.formatError = function(e, t) {
                    var n = t.expected,
                        r = t.index;
                    if (r === e.length) return "expected " + n + ", got the end of the string";
                    var i = r > 0 ? "'..." : "'",
                        o = e.length - r > 12 ? "...'" : "'";
                    return "expected " + n + " at character " + r + ", got " + i + e.slice(r, r + 12) + o
                };
                e.init = function(e) {
                    this._ = e
                }, e.parse = function(e) {
                    var t = this.skip(p)._(e, 0);
                    return t.status ? {
                        status: !0,
                        value: t.value
                    } : {
                        status: !1,
                        index: t.furthest,
                        expected: t.expected
                    }
                };
                var u = i.seq = function() {
                        var e = [].slice.call(arguments),
                            t = e.length;
                        return n(function(n, i) {
                            for (var o, s = new Array(t), u = 0; t > u; u += 1) {
                                if (o = a(e[u]._(n, i), o), !o.status) return o;
                                s[u] = o.value, i = o.index
                            }
                            return a(r(i, s), o)
                        })
                    },
                    f = (i.custom = function(e) {
                        return n(e(r, o))
                    }, i.alt = function() {
                        var e = [].slice.call(arguments),
                            t = e.length;
                        return 0 === t ? c("zero alternates") : n(function(t, n) {
                            for (var r, i = 0; i < e.length; i += 1)
                                if (r = a(e[i]._(t, n), r), r.status) return r;
                            return r
                        })
                    });
                e.or = function(e) {
                    return f(this, e)
                }, e.then = function(e) {
                    if ("function" == typeof e) throw new Error("chaining features of .then are no longer supported");
                    return s(e), u(this, e).map(function(e) {
                        return e[1]
                    })
                }, e.many = function() {
                    var e = this;
                    return n(function(t, n) {
                        for (var i, o = [];;) {
                            if (i = a(e._(t, n), i), !i.status) return a(r(n, o), i);
                            n = i.index, o.push(i.value)
                        }
                    })
                }, e.times = function(e, t) {
                    arguments.length < 2 && (t = e);
                    var i = this;
                    return n(function(n, o) {
                        for (var s, u, f = [], l = 0; e > l; l += 1) {
                            if (s = i._(n, o), u = a(s, u), !s.status) return u;
                            o = s.index, f.push(s.value)
                        }
                        for (; t > l && (s = i._(n, o), u = a(s, u), s.status); l += 1) o = s.index, f.push(s.value);
                        return a(r(o, f), u)
                    })
                }, e.result = function(e) {
                    return this.then(h(e))
                }, e.atMost = function(e) {
                    return this.times(0, e)
                }, e.atLeast = function(e) {
                    return u(this.times(e), this.many()).map(function(e) {
                        return e[0].concat(e[1])
                    })
                }, e.map = function(e) {
                    var t = this;
                    return n(function(n, i) {
                        var o = t._(n, i);
                        return o.status ? a(r(o.index, e(o.value)), o) : o
                    })
                }, e.skip = function(e) {
                    return u(this, e).map(function(e) {
                        return e[0]
                    })
                }, e.mark = function() {
                    return u(d, this, d).map(function(e) {
                        return {
                            start: e[0],
                            value: e[1],
                            end: e[2]
                        }
                    })
                }, e.desc = function(e) {
                    return this.or(c(e))
                };
                var l = (i.string = function(e) {
                        var t = e.length,
                            i = "'" + e + "'";
                        return n(function(n, a) {
                            var s = n.slice(a, a + t);
                            return s === e ? r(a + t, s) : o(a, i)
                        })
                    }, i.regex = function(e) {
                        var t = RegExp("^(?:" + e.source + ")", ("" + e).slice(("" + e).lastIndexOf("/") + 1));
                        return n(function(n, i) {
                            var a = t.exec(n.slice(i));
                            if (a) {
                                var s = a[0];
                                return r(i + s.length, s)
                            }
                            return o(i, e)
                        })
                    }),
                    h = i.succeed = function(e) {
                        return n(function(t, n) {
                            return r(n, e)
                        })
                    },
                    c = i.fail = function(e) {
                        return n(function(t, n) {
                            return o(n, e)
                        })
                    },
                    p = (i.letter = l(/[a-z]/i).desc("a letter"), i.letters = l(/[a-z]*/i), i.digit = l(/[0-9]/).desc("a digit"), i.digits = l(/[0-9]*/), i.whitespace = l(/\s+/).desc("whitespace"), i.optWhitespace = l(/\s*/), i.any = n(function(e, t) {
                        return t >= e.length ? o(t, "any character") : r(t + 1, e.charAt(t))
                    }), i.all = n(function(e, t) {
                        return r(e.length, e.slice(t))
                    }), i.eof = n(function(e, t) {
                        return t < e.length ? o(t, "EOF") : r(t, null)
                    })),
                    d = (i.test = function(e) {
                        return n(function(t, n) {
                            var i = t.charAt(n);
                            return n < t.length && e(i) ? r(n + 1, i) : o(n, "a character matching " + e)
                        })
                    }, i.takeWhile = function(e) {
                        return n(function(t, n) {
                            for (var i = n; i < t.length && e(t.charAt(i));) i += 1;
                            return r(i, t.slice(n, i))
                        })
                    }, i.lazy = function(e, t) {
                        arguments.length < 2 && (t = e, e = void 0);
                        var r = n(function(e, n) {
                            return r._ = t()._, r._(e, n)
                        });
                        return e && (r = r.desc(e)), r
                    }, i.index = n(function(e, t) {
                        return r(t, t)
                    }));
                e.concat = e.or, e.empty = c("empty"), e.of = n.of = i.of = h, e.ap = function(e) {
                    return u(this, e).map(function(e) {
                        return e[0](e[1])
                    })
                }, e.chain = function(e) {
                    var t = this;
                    return n(function(n, r) {
                        var i = t._(n, r);
                        if (!i.status) return i;
                        var o = e(i.value);
                        return a(o._(n, i.index), i)
                    })
                }
            }), t.exports = i
        }, {
            pjs: 88
        }],
        86: [function(e, t, n) {
            t.exports = e("./build/parsimmon.commonjs"), n.version = e("./package.json").version
        }, {
            "./build/parsimmon.commonjs": 85,
            "./package.json": 90
        }],
        87: [function(e, t, n) {
            var r = function(e, t, n) {
                return function r(i, o) {
                    function a() {
                        var e = this instanceof a ? this : new s;
                        return e.init.apply(e, arguments), e
                    }

                    function s() {}
                    o === n && (o = i, i = Object), a.Bare = s;
                    var u, f = s[e] = i[e],
                        l = s[e] = a[e] = a.p = new s;
                    return l.constructor = a, a.extend = function(e) {
                        return r(a, e)
                    }, (a.open = function(e) {
                        if ("function" == typeof e && (e = e.call(a, l, f, a, i)), "object" == typeof e)
                            for (u in e) t.call(e, u) && (l[u] = e[u]);
                        return "init" in l || (l.init = i), a
                    })(o)
                }
            }("prototype", {}.hasOwnProperty);
            n.P = r
        }, {}],
        88: [function(e, t, n) {
            n.P = e("./build/p.commonjs").P, n.version = e("./package.json").version
        }, {
            "./build/p.commonjs": 87,
            "./package.json": 89
        }],
        89: [function(e, t, n) {
            t.exports = {
                name: "pjs",
                version: "5.1.1",
                description: "A lightweight class system.  It's just prototypes!",
                keywords: ["class", "pjs", "P", "inheritance", "super"],
                author: {
                    name: "Jeanine Adkisson",
                    email: "jneen at jneen dot net"
                },
                repository: {
                    type: "git",
                    url: "git://github.com/jneen/pjs"
                },
                files: ["index.js", "src", "test", "Makefile", "package.json", "README.md", "CHANGELOG.md", "build/p.commonjs.js"],
                main: "index.js",
                devDependencies: {
                    mocha: "*",
                    "uglify-js": "*"
                },
                scripts: {
                    test: "make test"
                },
                bugs: {
                    url: "https://github.com/jneen/pjs/issues"
                },
                homepage: "https://github.com/jneen/pjs",
                _id: "pjs@5.1.1",
                _shasum: "9dfc4673bb01deffd6915fb1dec75827aba42abf",
                _resolved: "https://registry.npmjs.org/pjs/-/pjs-5.1.1.tgz",
                _from: "pjs@>=5.0.0-0 <6.0.0-0",
                _npmVersion: "1.4.14",
                _npmUser: {
                    name: "jayferd",
                    email: "jjmadkisson@gmail.com"
                },
                maintainers: [{
                    name: "jayferd",
                    email: "jjmadkisson@gmail.com"
                }],
                dist: {
                    shasum: "9dfc4673bb01deffd6915fb1dec75827aba42abf",
                    tarball: "http://registry.npmjs.org/pjs/-/pjs-5.1.1.tgz"
                },
                directories: {},
                readme: "ERROR: No README data found!"
            }
        }, {}],
        90: [function(e, t, n) {
            t.exports = {
                name: "parsimmon",
                version: "0.5.1",
                description: "A monadic LL(infinity) parser combinator library",
                keywords: ["parsing", "parse", "parser combinators"],
                author: {
                    name: "Jeanine Adkisson",
                    email: "jneen at jneen dot net"
                },
                repository: {
                    type: "git",
                    url: "git://github.com/jneen/parsimmon"
                },
                files: ["index.js", "src", "test", "Makefile", "package.json", "build/parsimmon.commonjs.js", "build/parsimmon.browser.js", "build/parsimmon.browser.min.js"],
                main: "index.js",
                devDependencies: {
                    mocha: "1.8.x",
                    chai: "1.5.x",
                    "uglify-js": "2.x"
                },
                dependencies: {
                    pjs: "5.x"
                },
                scripts: {
                    test: "make test"
                },
                bugs: {
                    url: "https://github.com/jneen/parsimmon/issues"
                },
                homepage: "https://github.com/jneen/parsimmon",
                _id: "parsimmon@0.5.1",
                _shasum: "247c970d7d5e99a51115b16a106de96f0eb9303b",
                _resolved: "https://registry.npmjs.org/parsimmon/-/parsimmon-0.5.1.tgz",
                _from: "parsimmon@>=0.5.1-0 <0.6.0-0",
                _npmVersion: "1.4.14",
                _npmUser: {
                    name: "jayferd",
                    email: "jjmadkisson@gmail.com"
                },
                maintainers: [{
                    name: "jayferd",
                    email: "jjmadkisson@gmail.com"
                }, {
                    name: "jneen",
                    email: "jneen@jneen.net"
                }],
                dist: {
                    shasum: "247c970d7d5e99a51115b16a106de96f0eb9303b",
                    tarball: "http://registry.npmjs.org/parsimmon/-/parsimmon-0.5.1.tgz"
                },
                directories: {}
            }
        }, {}],
        91: [function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return n + e.name + ': "' + t + '"'
            }

            function i(e, t, n) {
                return n + e.name + ": " + t
            }

            function o(e, t, n) {
                return n + e.name + ": " + (t ? "true" : "false")
            }

            function a(e, t, n) {
                var r = e.resolvedType.object,
                    i = f.findKey(r, function(e) {
                        return e == t
                    });
                return n + e.name + ": " + (i || t)
            }

            function s(e, t, n) {
                n = n || "";
                var r = f(t.$type.children).filter(function(e) {
                    return "Message.Field" === e.className
                }).map(function(e) {
                    var r = t.get(e.name);
                    return null === r || e.repeated || (r = [r]), r ? u(r, e, n) : []
                }).flatten().value();
                return e && r.length > 0 ? [n + e.name + " {", r, n + "}"] : r
            }

            function u(e, t, n) {
                var r = l[t.type.name];
                return r ? e.map(function(e) {
                    return r(t, e, n)
                }) : (console.error("No encoder for", t.type.name), [])
            }
            var f = e("lodash"),
                l = {
                    message: s,
                    group: s,
                    "enum": a,
                    string: r,
                    bytes: r,
                    "float": i,
                    "double": i,
                    bool: o,
                    int32: i,
                    sint32: i,
                    sfixed32: i,
                    uint32: i,
                    fixed32: i,
                    int64: i,
                    sint64: i,
                    sfixed64: i,
                    uint64: i,
                    fixed64: i
                };
            t.exports = function(e) {
                var t = f.flatten(s(null, e));
                return t.join("\n")
            }
        }, {
            lodash: 84
        }],
        92: [function(e, t, n) {
            "use strict";
            var r = e("parsimmon"),
                i = r.regex,
                o = r.string,
                a = (r.optWhitespace, r.lazy),
                s = r.alt,
                u = r.seq,
                f = r.whitespace,
                l = i(/#.*\n/),
                h = f.or(l.many()),
                c = function(e) {
                    return e.skip(h)
                },
                p = c(o(":")),
                d = c(o("{")),
                g = c(o("}")),
                y = function(e) {
                    return e.substr(1, e.length - 2)
                },
                v = c(i(/[a-zA-Z_][0-9a-zA-Z_+-]*/)),
                m = c(i(/\"([^\"\n\\\\]|\\\\.)*(\"|\\\\?$)/).map(y)),
                b = c(i(/\'([^\'\n\\\\]|\\\\.)*(\'|\\\\?$)/).map(y)),
                w = c(i(/[.]?[0-9+-][0-9a-zA-Z_.+-]*/)).map(Number),
                E = c(o("true")).result(!0),
                _ = c(o("false")).result(!1),
                T = a("an expression", function() {
                    return c(s(S, x))
                }),
                x = c(u(v, p.times(0, 1).then(d).then(T.many()).skip(g)).map(function(e) {
                    return {
                        type: "message",
                        name: e[0],
                        values: e[1]
                    }
                })),
                I = s(E, _, w, m, b, v),
                S = u(v.skip(p), I).map(function(e) {
                    return {
                        type: "pair",
                        name: e[0],
                        value: e[1]
                    }
                });
            t.exports = function(e) {
                var t = h.then(T.many()).parse(e);
                return t.status || (t.error = r.formatError(e, t)), t
            }
        }, {
            parsimmon: 86
        }],
        93: [function(t, n, r) {
            (function(i) {
                /**
                 * @license ProtoBuf.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
                 * Released under the Apache License, Version 2.0
                 * see: https://github.com/dcodeIO/ProtoBuf.js for details
                 */
                ! function(o) {
                    "use strict";

                    function a(e) {
                        var n = {};
                        return n.ByteBuffer = e, n.Long = e.Long || null, n.VERSION = "4.0.0-b5", n.WIRE_TYPES = {}, n.WIRE_TYPES.VARINT = 0, n.WIRE_TYPES.BITS64 = 1, n.WIRE_TYPES.LDELIM = 2, n.WIRE_TYPES.STARTGROUP = 3, n.WIRE_TYPES.ENDGROUP = 4, n.WIRE_TYPES.BITS32 = 5, n.PACKABLE_WIRE_TYPES = [n.WIRE_TYPES.VARINT, n.WIRE_TYPES.BITS64, n.WIRE_TYPES.BITS32], n.TYPES = {
                            int32: {
                                name: "int32",
                                wireType: n.WIRE_TYPES.VARINT,
                                defaultValue: 0
                            },
                            uint32: {
                                name: "uint32",
                                wireType: n.WIRE_TYPES.VARINT,
                                defaultValue: 0
                            },
                            sint32: {
                                name: "sint32",
                                wireType: n.WIRE_TYPES.VARINT,
                                defaultValue: 0
                            },
                            int64: {
                                name: "int64",
                                wireType: n.WIRE_TYPES.VARINT,
                                defaultValue: n.Long ? n.Long.ZERO : void 0
                            },
                            uint64: {
                                name: "uint64",
                                wireType: n.WIRE_TYPES.VARINT,
                                defaultValue: n.Long ? n.Long.UZERO : void 0
                            },
                            sint64: {
                                name: "sint64",
                                wireType: n.WIRE_TYPES.VARINT,
                                defaultValue: n.Long ? n.Long.ZERO : void 0
                            },
                            bool: {
                                name: "bool",
                                wireType: n.WIRE_TYPES.VARINT,
                                defaultValue: !1
                            },
                            "double": {
                                name: "double",
                                wireType: n.WIRE_TYPES.BITS64,
                                defaultValue: 0
                            },
                            string: {
                                name: "string",
                                wireType: n.WIRE_TYPES.LDELIM,
                                defaultValue: ""
                            },
                            bytes: {
                                name: "bytes",
                                wireType: n.WIRE_TYPES.LDELIM,
                                defaultValue: null
                            },
                            fixed32: {
                                name: "fixed32",
                                wireType: n.WIRE_TYPES.BITS32,
                                defaultValue: 0
                            },
                            sfixed32: {
                                name: "sfixed32",
                                wireType: n.WIRE_TYPES.BITS32,
                                defaultValue: 0
                            },
                            fixed64: {
                                name: "fixed64",
                                wireType: n.WIRE_TYPES.BITS64,
                                defaultValue: n.Long ? n.Long.UZERO : void 0
                            },
                            sfixed64: {
                                name: "sfixed64",
                                wireType: n.WIRE_TYPES.BITS64,
                                defaultValue: n.Long ? n.Long.ZERO : void 0
                            },
                            "float": {
                                name: "float",
                                wireType: n.WIRE_TYPES.BITS32,
                                defaultValue: 0
                            },
                            "enum": {
                                name: "enum",
                                wireType: n.WIRE_TYPES.VARINT,
                                defaultValue: 0
                            },
                            message: {
                                name: "message",
                                wireType: n.WIRE_TYPES.LDELIM,
                                defaultValue: null
                            },
                            group: {
                                name: "group",
                                wireType: n.WIRE_TYPES.STARTGROUP,
                                defaultValue: null
                            }
                        }, n.MAP_KEY_TYPES = [n.TYPES.int32, n.TYPES.sint32, n.TYPES.sfixed32, n.TYPES.uint32, n.TYPES.fixed32, n.TYPES.int64, n.TYPES.sint64, n.TYPES.sfixed64, n.TYPES.uint64, n.TYPES.fixed64, n.TYPES.bool, n.TYPES.string, n.TYPES.bytes], n.ID_MIN = 1, n.ID_MAX = 536870911, n.convertFieldsToCamelCase = !1, n.populateAccessors = !0, n.populateDefaults = !0, n.Util = function() {
                            Object.create || (Object.create = function(e) {
                                function t() {}
                                if (arguments.length > 1) throw Error("Object.create polyfill only accepts the first parameter.");
                                return t.prototype = e, new t
                            });
                            var e = {};
                            return e.IS_NODE = !("object" != typeof i || i + "" != "[object process]"), e.XHR = function() {
                                for (var e = [function() {
                                        return new XMLHttpRequest
                                    }, function() {
                                        return new ActiveXObject("Msxml2.XMLHTTP")
                                    }, function() {
                                        return new ActiveXObject("Msxml3.XMLHTTP")
                                    }, function() {
                                        return new ActiveXObject("Microsoft.XMLHTTP")
                                    }], t = null, n = 0; n < e.length; n++) {
                                    try {
                                        t = e[n]()
                                    } catch (r) {
                                        continue
                                    }
                                    break
                                }
                                if (!t) throw Error("XMLHttpRequest is not supported");
                                return t
                            }, e.fetch = function(n, r) {
                                if (r && "function" != typeof r && (r = null), e.IS_NODE)
                                    if (r) t("fs").readFile(n, function(e, t) {
                                        r(e ? null : "" + t)
                                    });
                                    else try {
                                        return t("fs").readFileSync(n)
                                    } catch (i) {
                                        return null
                                    } else {
                                        var o = e.XHR();
                                        if (o.open("GET", n, r ? !0 : !1), o.setRequestHeader("Accept", "text/plain"), "function" == typeof o.overrideMimeType && o.overrideMimeType("text/plain"), !r) return o.send(null), 200 == o.status || 0 == o.status && "string" == typeof o.responseText ? o.responseText : null;
                                        if (o.onreadystatechange = function() {
                                                4 == o.readyState && r(200 == o.status || 0 == o.status && "string" == typeof o.responseText ? o.responseText : null)
                                            }, 4 == o.readyState) return;
                                        o.send(null)
                                    }
                            }, e.isArray = Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            }, e
                        }(), n.Lang = {
                            OPEN: "{",
                            CLOSE: "}",
                            OPTOPEN: "[",
                            OPTCLOSE: "]",
                            OPTEND: ",",
                            EQUAL: "=",
                            END: ";",
                            COMMA: ",",
                            STRINGOPEN: '"',
                            STRINGCLOSE: '"',
                            STRINGOPEN_SQ: "'",
                            STRINGCLOSE_SQ: "'",
                            COPTOPEN: "(",
                            COPTCLOSE: ")",
                            LT: "<",
                            GT: ">",
                            DELIM: /[\s\{\}=;\[\],'"\(\)<>]/g,
                            RULE: /^(?:required|optional|repeated|map)$/,
                            TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
                            NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
                            TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
                            TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,
                            FQTYPEREF: /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/,
                            NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
                            NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
                            NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,
                            NUMBER_OCT: /^0[0-7]+$/,
                            NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
                            ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
                            NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
                            WHITESPACE: /\s/,
                            STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
                            BOOL: /^(?:true|false)$/i
                        }, n.DotProto = function(e, t) {
                            var n = {},
                                r = function(e) {
                                    this.source = "" + e, this.index = 0, this.line = 1, this.stack = [], this.readingString = !1, this.stringEndsWith = t.STRINGCLOSE
                                },
                                i = r.prototype;
                            i._readString = function() {
                                t.STRING.lastIndex = this.index - 1;
                                var e;
                                if (null !== (e = t.STRING.exec(this.source))) {
                                    var n = "undefined" != typeof e[1] ? e[1] : e[2];
                                    return this.index = t.STRING.lastIndex, this.stack.push(this.stringEndsWith), n
                                }
                                throw Error("Unterminated string at line " + this.line + ", index " + this.index)
                            }, i.next = function() {
                                if (this.stack.length > 0) return this.stack.shift();
                                if (this.index >= this.source.length) return null;
                                if (this.readingString) return this.readingString = !1, this._readString();
                                var e, n;
                                do {
                                    for (e = !1; t.WHITESPACE.test(n = this.source.charAt(this.index));)
                                        if (this.index++, "\n" === n && this.line++, this.index === this.source.length) return null;
                                    if ("/" === this.source.charAt(this.index))
                                        if ("/" === this.source.charAt(++this.index)) {
                                            for (;
                                                "\n" !== this.source.charAt(this.index);)
                                                if (this.index++, this.index == this.source.length) return null;
                                            this.index++, this.line++, e = !0
                                        } else {
                                            if ("*" !== this.source.charAt(this.index)) throw Error("Unterminated comment at line " + this.line + ": /" + this.source.charAt(this.index));
                                            for (n = ""; n + (n = this.source.charAt(this.index)) !== "*/";)
                                                if (this.index++, "\n" === n && this.line++, this.index === this.source.length) return null;
                                            this.index++, e = !0
                                        }
                                } while (e);
                                if (this.index === this.source.length) return null;
                                var r = this.index;
                                t.DELIM.lastIndex = 0;
                                var i = t.DELIM.test(this.source.charAt(r));
                                if (i) ++r;
                                else
                                    for (++r; r < this.source.length && !t.DELIM.test(this.source.charAt(r));) r++;
                                var o = this.source.substring(this.index, this.index = r);
                                return o === t.STRINGOPEN ? (this.readingString = !0, this.stringEndsWith = t.STRINGCLOSE) : o === t.STRINGOPEN_SQ && (this.readingString = !0, this.stringEndsWith = t.STRINGCLOSE_SQ), o
                            }, i.peek = function() {
                                if (0 === this.stack.length) {
                                    var e = this.next();
                                    if (null === e) return null;
                                    this.stack.push(e)
                                }
                                return this.stack[0]
                            }, i.toString = function() {
                                return "Tokenizer(" + this.index + "/" + this.source.length + " at line " + this.line + ")"
                            }, n.Tokenizer = r;
                            var o = function(e) {
                                    this.tn = new r(e)
                                },
                                a = o.prototype;
                            return a.parse = function() {
                                for (var e, t = {
                                        name: "[ROOT]",
                                        "package": null,
                                        messages: [],
                                        enums: [],
                                        imports: [],
                                        options: {},
                                        services: []
                                    }, n = !0; e = this.tn.next();) switch (e) {
                                    case "package":
                                        if (!n || null !== t["package"]) throw Error("Unexpected package at line " + this.tn.line);
                                        t["package"] = this._parsePackage(e);
                                        break;
                                    case "import":
                                        if (!n) throw Error("Unexpected import at line " + this.tn.line);
                                        t.imports.push(this._parseImport(e));
                                        break;
                                    case "message":
                                        this._parseMessage(t, null, e), n = !1;
                                        break;
                                    case "enum":
                                        this._parseEnum(t, e), n = !1;
                                        break;
                                    case "option":
                                        this._parseOption(t, e);
                                        break;
                                    case "service":
                                        this._parseService(t, e);
                                        break;
                                    case "extend":
                                        this._parseExtend(t, e);
                                        break;
                                    case "syntax":
                                        t.syntax = this._parseSyntax(t);
                                        break;
                                    default:
                                        throw Error("Unexpected token at line " + this.tn.line + ": " + e)
                                }
                                return delete t.name, t
                            }, a._parseNumber = function(e) {
                                var n = 1;
                                if ("-" == e.charAt(0) && (n = -1, e = e.substring(1)), t.NUMBER_DEC.test(e)) return n * parseInt(e, 10);
                                if (t.NUMBER_HEX.test(e)) return n * parseInt(e.substring(2), 16);
                                if (t.NUMBER_OCT.test(e)) return n * parseInt(e.substring(1), 8);
                                if (t.NUMBER_FLT.test(e)) return "inf" === e ? n * (1 / 0) : "nan" === e ? 0 / 0 : n * parseFloat(e);
                                throw Error("Illegal number at line " + this.tn.line + ": " + (0 > n ? "-" : "") + e)
                            }, a._parseString = function() {
                                var e, n, r = "";
                                do {
                                    if (n = this.tn.next(), r += this.tn.next(), e = this.tn.next(), e !== n) throw Error("Illegal end of string at line " + this.tn.line + ": " + e);
                                    e = this.tn.peek()
                                } while (e === t.STRINGOPEN || e === t.STRINGOPEN_SQ);
                                return r
                            }, a._parseId = function(e, n) {
                                var r = -1,
                                    i = 1;
                                if ("-" == e.charAt(0) && (i = -1, e = e.substring(1)), t.NUMBER_DEC.test(e)) r = parseInt(e);
                                else if (t.NUMBER_HEX.test(e)) r = parseInt(e.substring(2), 16);
                                else {
                                    if (!t.NUMBER_OCT.test(e)) throw Error("Illegal id at line " + this.tn.line + ": " + (0 > i ? "-" : "") + e);
                                    r = parseInt(e.substring(1), 8)
                                }
                                if (r = i * r | 0, !n && 0 > r) throw Error("Illegal id at line " + this.tn.line + ": " + (0 > i ? "-" : "") + e);
                                return r
                            }, a._parsePackage = function(e) {
                                if (e = this.tn.next(), !t.TYPEREF.test(e)) throw Error("Illegal package name at line " + this.tn.line + ": " + e);
                                var n = e;
                                if (e = this.tn.next(), e != t.END) throw Error("Illegal end of package at line " + this.tn.line + ": " + e);
                                return n
                            }, a._parseImport = function(e) {
                                if (e = this.tn.peek(), "public" === e && (this.tn.next(), e = this.tn.peek()), e !== t.STRINGOPEN && e !== t.STRINGOPEN_SQ) throw Error("Illegal start of import at line " + this.tn.line + ": " + e);
                                var n = this._parseString();
                                if (e = this.tn.next(), e !== t.END) throw Error("Illegal end of import at line " + this.tn.line + ": " + e);
                                return n
                            }, a._parseOption = function(e, n) {
                                n = this.tn.next();
                                var r = !1;
                                if (n == t.COPTOPEN && (r = !0, n = this.tn.next()), !t.TYPEREF.test(n) && !/google\.protobuf\./.test(n)) throw Error("Illegal option name in message " + e.name + " at line " + this.tn.line + ": " + n);
                                var i = n;
                                if (n = this.tn.next(), r) {
                                    if (n !== t.COPTCLOSE) throw Error("Illegal end in message " + e.name + ", option " + i + " at line " + this.tn.line + ": " + n);
                                    i = "(" + i + ")", n = this.tn.next(), t.FQTYPEREF.test(n) && (i += n, n = this.tn.next())
                                }
                                if (n !== t.EQUAL) throw Error("Illegal operator in message " + e.name + ", option " + i + " at line " + this.tn.line + ": " + n);
                                var o;
                                if (n = this.tn.peek(), n === t.STRINGOPEN || n === t.STRINGOPEN_SQ) o = this._parseString();
                                else if (this.tn.next(), t.NUMBER.test(n)) o = this._parseNumber(n, !0);
                                else if (t.BOOL.test(n)) o = "true" === n;
                                else {
                                    if (!t.TYPEREF.test(n)) throw Error("Illegal option value in message " + e.name + ", option " + i + " at line " + this.tn.line + ": " + n);
                                    o = n
                                }
                                if (n = this.tn.next(), n !== t.END) throw Error("Illegal end of option in message " + e.name + ", option " + i + " at line " + this.tn.line + ": " + n);
                                e.options[i] = o
                            }, a._parseIgnoredStatement = function(e, n) {
                                for (var r;;) {
                                    if (r = this.tn.next(), null === r) throw Error("Unexpected EOF in " + e.name + ", " + n + " at line " + this.tn.line);
                                    if (r === t.END) break
                                }
                            }, a._parseService = function(e, n) {
                                if (n = this.tn.next(), !t.NAME.test(n)) throw Error("Illegal service name at line " + this.tn.line + ": " + n);
                                var r = n,
                                    i = {
                                        name: r,
                                        rpc: {},
                                        options: {}
                                    };
                                if (n = this.tn.next(), n !== t.OPEN) throw Error("Illegal start of service " + r + " at line " + this.tn.line + ": " + n);
                                do
                                    if (n = this.tn.next(), "option" === n) this._parseOption(i, n);
                                    else if ("rpc" === n) this._parseServiceRPC(i, n);
                                else if (n !== t.CLOSE) throw Error("Illegal type of service " + r + " at line " + this.tn.line + ": " + n);
                                while (n !== t.CLOSE);
                                e.services.push(i)
                            }, a._parseServiceRPC = function(e, n) {
                                var r = n;
                                if (n = this.tn.next(), !t.NAME.test(n)) throw Error("Illegal method name in service " + e.name + " at line " + this.tn.line + ": " + n);
                                var i = n,
                                    o = {
                                        request: null,
                                        response: null,
                                        request_stream: !1,
                                        response_stream: !1,
                                        options: {}
                                    };
                                if (n = this.tn.next(), n !== t.COPTOPEN) throw Error("Illegal start of request type in service " + e.name + "#" + i + " at line " + this.tn.line + ": " + n);
                                if (n = this.tn.next(), "stream" === n.toLowerCase() && (o.request_stream = !0, n = this.tn.next()), !t.TYPEREF.test(n)) throw Error("Illegal request type in service " + e.name + "#" + i + " at line " + this.tn.line + ": " + n);
                                if (o.request = n, n = this.tn.next(), n != t.COPTCLOSE) throw Error("Illegal end of request type in service " + e.name + "#" + i + " at line " + this.tn.line + ": " + n);
                                if (n = this.tn.next(), "returns" !== n.toLowerCase()) throw Error("Illegal delimiter in service " + e.name + "#" + i + " at line " + this.tn.line + ": " + n);
                                if (n = this.tn.next(), n != t.COPTOPEN) throw Error("Illegal start of response type in service " + e.name + "#" + i + " at line " + this.tn.line + ": " + n);
                                if (n = this.tn.next(), "stream" === n.toLowerCase() && (o.response_stream = !0, n = this.tn.next()), o.response = n, n = this.tn.next(), n !== t.COPTCLOSE) throw Error("Illegal end of response type in service " + e.name + "#" + i + " at line " + this.tn.line + ": " + n);
                                if (n = this.tn.next(), n === t.OPEN) {
                                    do
                                        if (n = this.tn.next(), "option" === n) this._parseOption(o, n);
                                        else if (n !== t.CLOSE) throw Error("Illegal start of option inservice " + e.name + "#" + i + " at line " + this.tn.line + ": " + n); while (n !== t.CLOSE);
                                    this.tn.peek() === t.END && this.tn.next()
                                } else if (n !== t.END) throw Error("Illegal delimiter in service " + e.name + "#" + i + " at line " + this.tn.line + ": " + n);
                                "undefined" == typeof e[r] && (e[r] = {}), e[r][i] = o
                            }, a._parseMessage = function(e, n, r) {
                                var i = {},
                                    o = "group" === r;
                                if (r = this.tn.next(), !t.NAME.test(r)) throw Error("Illegal " + (o ? "group" : "message") + " name" + (e ? " in message " + e.name : "") + " at line " + this.tn.line + ": " + r);
                                if (i.name = r, o) {
                                    if (r = this.tn.next(), r !== t.EQUAL) throw Error("Illegal id assignment after group " + i.name + " at line " + this.tn.line + ": " + r);
                                    r = this.tn.next();
                                    try {
                                        n.id = this._parseId(r)
                                    } catch (a) {
                                        throw Error("Illegal field id value for group " + i.name + "#" + n.name + " at line " + this.tn.line + ": " + r)
                                    }
                                    i.isGroup = !0
                                }
                                if (i.fields = [], i.enums = [], i.messages = [], i.options = {}, i.oneofs = {}, r = this.tn.next(), r === t.OPTOPEN && n && (this._parseFieldOptions(i, n, r), r = this.tn.next()), r !== t.OPEN) throw Error("Illegal start of " + (o ? "group" : "message") + " " + i.name + " at line " + this.tn.line + ": " + r);
                                for (;;) {
                                    if (r = this.tn.next(), r === t.CLOSE) {
                                        r = this.tn.peek(), r === t.END && this.tn.next();
                                        break
                                    }
                                    if (t.RULE.test(r)) this._parseMessageField(i, r);
                                    else if ("oneof" === r) this._parseMessageOneOf(i, r);
                                    else if ("enum" === r) this._parseEnum(i, r);
                                    else if ("message" === r) this._parseMessage(i, null, r);
                                    else if ("option" === r) this._parseOption(i, r);
                                    else if ("extensions" === r) i.extensions = this._parseExtensions(i, r);
                                    else if ("extend" === r) this._parseExtend(i, r);
                                    else {
                                        if (!t.TYPEREF.test(r)) throw Error("Illegal token in message " + i.name + " at line " + this.tn.line + ": " + r);
                                        this._parseMessageField(i, "optional", r)
                                    }
                                }
                                return e.messages.push(i), i
                            }, a._parseMessageField = function(e, n, r) {
                                var i = {},
                                    o = null;
                                if (i.rule = n, i.options = {}, n = "undefined" != typeof r ? r : this.tn.next(), "map" === i.rule) {
                                    if (n !== t.LT) throw Error("Illegal token in message " + e.name + " at line " + this.tn.line + ": " + n);
                                    if (n = this.tn.next(), !t.TYPE.test(n) && !t.TYPEREF.test(n)) throw Error("Illegal token in message " + e.name + " at line " + this.tn.line + ": " + n);
                                    if (i.keytype = n, n = this.tn.next(), n !== t.COMMA) throw Error("Illegal token in message " + e.name + " at line " + this.tn.line + ": " + n);
                                    if (n = this.tn.next(), !t.TYPE.test(n) && !t.TYPEREF.test(n)) throw Error("Illegal token in message " + e.name + " at line " + this.tn.line + ": " + n);
                                    if (i.type = n, n = this.tn.next(), n !== t.GT) throw Error("Illegal token in message " + e.name + " at line " + this.tn.line + ": " + n);
                                    if (n = this.tn.next(), !t.NAME.test(n)) throw Error("Illegal token in message " + e.name + " at line " + this.tn.line + ": " + n);
                                    if (i.name = n, n = this.tn.next(), n !== t.EQUAL) throw Error("Illegal token in field " + e.name + "#" + i.name + " at line " + this.line + ": " + n);
                                    n = this.tn.next();
                                    try {
                                        i.id = this._parseId(n)
                                    } catch (a) {
                                        throw Error("Illegal field id in message " + e.name + "#" + i.name + " at line " + this.tn.line + ": " + n)
                                    }
                                    if (n = this.tn.next(), n === t.OPTOPEN && (this._parseFieldOptions(e, i, n), n = this.tn.next()), n !== t.END) throw Error("Illegal delimiter in message " + e.name + "#" + i.name + " at line " + this.tn.line + ": " + n)
                                } else if ("group" === n) {
                                    if (o = this._parseMessage(e, i, n), !/^[A-Z]/.test(o.name)) throw Error("Group names must start with a capital letter");
                                    i.type = o.name, i.name = o.name.toLowerCase(), n = this.tn.peek(), n === t.END && this.tn.next()
                                } else {
                                    if (!t.TYPE.test(n) && !t.TYPEREF.test(n)) throw Error("Illegal field type in message " + e.name + " at line " + this.tn.line + ": " + n);
                                    if (i.type = n, n = this.tn.next(), !t.NAME.test(n)) throw Error("Illegal field name in message " + e.name + " at line " + this.tn.line + ": " + n);
                                    if (i.name = n, n = this.tn.next(), n !== t.EQUAL) throw Error("Illegal token in field " + e.name + "#" + i.name + " at line " + this.tn.line + ": " + n);
                                    n = this.tn.next();
                                    try {
                                        i.id = this._parseId(n)
                                    } catch (a) {
                                        throw Error("Illegal field id in message " + e.name + "#" + i.name + " at line " + this.tn.line + ": " + n)
                                    }
                                    if (n = this.tn.next(), n === t.OPTOPEN && (this._parseFieldOptions(e, i, n), n = this.tn.next()), n !== t.END) throw Error("Illegal delimiter in message " + e.name + "#" + i.name + " at line " + this.tn.line + ": " + n)
                                }
                                return e.fields.push(i), i
                            }, a._parseMessageOneOf = function(e, n) {
                                if (n = this.tn.next(), !t.NAME.test(n)) throw Error("Illegal oneof name in message " + e.name + " at line " + this.tn.line + ": " + n);
                                var r, i = n,
                                    o = [];
                                if (n = this.tn.next(), n !== t.OPEN) throw Error("Illegal start of oneof " + i + " at line " + this.tn.line + ": " + n);
                                for (; this.tn.peek() !== t.CLOSE;) r = this._parseMessageField(e, "optional"), r.oneof = i, o.push(r.id);
                                this.tn.next(), e.oneofs[i] = o
                            }, a._parseFieldOptions = function(e, n, r) {
                                for (var i = !0;;) {
                                    if (r = this.tn.next(), r === t.OPTCLOSE) break;
                                    if (r === t.OPTEND) {
                                        if (i) throw Error("Illegal start of options in message " + e.name + "#" + n.name + " at line " + this.tn.line + ": " + r);
                                        r = this.tn.next()
                                    }
                                    this._parseFieldOption(e, n, r), i = !1
                                }
                            }, a._parseFieldOption = function(e, n, r) {
                                var i = !1;
                                if (r === t.COPTOPEN && (r = this.tn.next(), i = !0), !t.TYPEREF.test(r)) throw Error("Illegal field option in " + e.name + "#" + n.name + " at line " + this.tn.line + ": " + r);
                                var o = r;
                                if (r = this.tn.next(), i) {
                                    if (r !== t.COPTCLOSE) throw Error("Illegal delimiter in " + e.name + "#" + n.name + " at line " + this.tn.line + ": " + r);
                                    o = "(" + o + ")", r = this.tn.next(), t.FQTYPEREF.test(r) && (o += r, r = this.tn.next())
                                }
                                if (r !== t.EQUAL) throw Error("Illegal token in " + e.name + "#" + n.name + " at line " + this.tn.line + ": " + r);
                                var a;
                                if (r = this.tn.peek(), r === t.STRINGOPEN || r === t.STRINGOPEN_SQ) a = this._parseString();
                                else if (t.NUMBER.test(r, !0)) a = this._parseNumber(this.tn.next(), !0);
                                else if (t.BOOL.test(r)) a = "true" === this.tn.next().toLowerCase();
                                else {
                                    if (!t.TYPEREF.test(r)) throw Error("Illegal value in message " + e.name + "#" + n.name + ", option " + o + " at line " + this.tn.line + ": " + r);
                                    a = this.tn.next()
                                }
                                n.options[o] = a
                            }, a._parseEnum = function(e, n) {
                                var r = {};
                                if (n = this.tn.next(), !t.NAME.test(n)) throw Error("Illegal enum name in message " + e.name + " at line " + this.tn.line + ": " + n);
                                if (r.name = n, n = this.tn.next(), n !== t.OPEN) throw Error("Illegal start of enum " + r.name + " at line " + this.tn.line + ": " + n);
                                for (r.values = [], r.options = {};;) {
                                    if (n = this.tn.next(), n === t.CLOSE) {
                                        n = this.tn.peek(), n === t.END && this.tn.next();
                                        break
                                    }
                                    if ("option" == n) this._parseOption(r, n);
                                    else {
                                        if (!t.NAME.test(n)) throw Error("Illegal name in enum " + r.name + " at line " + this.tn.line + ": " + n);
                                        this._parseEnumValue(r, n)
                                    }
                                }
                                e.enums.push(r)
                            }, a._parseEnumValue = function(e, n) {
                                var r = {};
                                if (r.name = n, n = this.tn.next(), n !== t.EQUAL) throw Error("Illegal token in enum " + e.name + " at line " + this.tn.line + ": " + n);
                                n = this.tn.next();
                                try {
                                    r.id = this._parseId(n, !0)
                                } catch (i) {
                                    throw Error("Illegal id in enum " + e.name + " at line " + this.tn.line + ": " + n)
                                }
                                if (e.values.push(r), n = this.tn.next(), n === t.OPTOPEN) {
                                    var o = {
                                        options: {}
                                    };
                                    this._parseFieldOptions(e, o, n), n = this.tn.next()
                                }
                                if (n !== t.END) throw Error("Illegal delimiter in enum " + e.name + " at line " + this.tn.line + ": " + n)
                            }, a._parseExtensions = function(n, r) {
                                var i = [];
                                if (r = this.tn.next(), i.push("min" === r ? e.ID_MIN : "max" === r ? e.ID_MAX : this._parseNumber(r)), r = this.tn.next(), "to" !== r) throw Error("Illegal extensions delimiter in message " + n.name + " at line " + this.tn.line + ": " + r);
                                if (r = this.tn.next(), i.push("min" === r ? e.ID_MIN : "max" === r ? e.ID_MAX : this._parseNumber(r)), r = this.tn.next(), r !== t.END) throw Error("Illegal extensions delimiter in message " + n.name + " at line " + this.tn.line + ": " + r);
                                return i
                            }, a._parseExtend = function(e, n) {
                                if (n = this.tn.next(), !t.TYPEREF.test(n)) throw Error("Illegal message name at line " + this.tn.line + ": " + n);
                                var r = {};
                                if (r.ref = n, r.fields = [], n = this.tn.next(), n !== t.OPEN) throw Error("Illegal start of extend " + r.name + " at line " + this.tn.line + ": " + n);
                                for (;;) {
                                    if (n = this.tn.next(), n === t.CLOSE) {
                                        n = this.tn.peek(), n == t.END && this.tn.next();
                                        break
                                    }
                                    if (t.RULE.test(n)) this._parseMessageField(r, n);
                                    else {
                                        if (!t.TYPEREF.test(n)) throw Error("Illegal token in extend " + r.name + " at line " + this.tn.line + ": " + n);
                                        this._parseMessageField(r, "optional", n)
                                    }
                                }
                                return e.messages.push(r), r
                            }, a._parseSyntax = function(e) {
                                var n = this.tn.next();
                                if (n !== t.EQUAL) throw Error("Illegal token at line " + this.tn.line + ": " + n);
                                if (n = this.tn.peek(), n !== t.STRINGOPEN && n !== t.STRINGOPEN_SQ) throw Error("Illegal token at line " + this.tn.line + ": " + n);
                                var r = this._parseString();
                                if (n = this.tn.next(), n !== t.END) throw Error("Illegal token at line " + this.tn.line + ": " + n);
                                return r
                            }, a.toString = function() {
                                return "Parser"
                            }, n.Parser = o, n
                        }(n, n.Lang), n.Reflect = function(t) {
                            function n(n) {
                                if ("string" == typeof n && (n = t.TYPES[n]), "undefined" == typeof n.defaultValue) throw Error("default value for type " + n.name + " is not supported");
                                return n == t.TYPES.bytes ? new e(0) : n.defaultValue
                            }

                            function r(e, n) {
                                if (e && "number" == typeof e.low && "number" == typeof e.high && "boolean" == typeof e.unsigned && e.low === e.low && e.high === e.high) return new t.Long(e.low, e.high, "undefined" == typeof n ? e.unsigned : n);
                                if ("string" == typeof e) return t.Long.fromString(e, n || !1, 10);
                                if ("number" == typeof e) return t.Long.fromNumber(e, n || !1);
                                throw Error("not convertible to Long")
                            }

                            function i(e, n) {
                                var r = n.readVarint32(),
                                    o = 7 & r,
                                    a = r >>> 3;
                                switch (o) {
                                    case t.WIRE_TYPES.VARINT:
                                        do r = n.readUint8(); while (128 === (128 & r));
                                        break;
                                    case t.WIRE_TYPES.BITS64:
                                        n.offset += 8;
                                        break;
                                    case t.WIRE_TYPES.LDELIM:
                                        r = n.readVarint32(), n.offset += r;
                                        break;
                                    case t.WIRE_TYPES.STARTGROUP:
                                        i(a, n);
                                        break;
                                    case t.WIRE_TYPES.ENDGROUP:
                                        if (a === e) return !1;
                                        throw Error("Illegal GROUPEND after unknown group: " + a + " (" + e + " expected)");
                                    case t.WIRE_TYPES.BITS32:
                                        n.offset += 4;
                                        break;
                                    default:
                                        throw Error("Illegal wire type in unknown group " + e + ": " + o)
                                }
                                return !0
                            }
                            var o = {},
                                a = function(e, t, n) {
                                    this.builder = e, this.parent = t, this.name = n, this.className
                                },
                                s = a.prototype;
                            s.fqn = function() {
                                for (var e = this.name, t = this;;) {
                                    if (t = t.parent, null == t) break;
                                    e = t.name + "." + e
                                }
                                return e
                            }, s.toString = function(e) {
                                return (e ? this.className + " " : "") + this.fqn()
                            }, s.build = function() {
                                throw Error(this.toString(!0) + " cannot be built directly")
                            }, o.T = a;
                            var u = function(e, t, n, r, i) {
                                    a.call(this, e, t, n), this.className = "Namespace", this.children = [], this.options = r || {}, this.syntax = i || "proto2"
                                },
                                f = u.prototype = Object.create(a.prototype);
                            f.getChildren = function(e) {
                                if (e = e || null, null == e) return this.children.slice();
                                for (var t = [], n = 0, r = this.children.length; r > n; ++n) this.children[n] instanceof e && t.push(this.children[n]);
                                return t
                            }, f.addChild = function(e) {
                                var t;
                                if (t = this.getChild(e.name))
                                    if (t instanceof c.Field && t.name !== t.originalName && null === this.getChild(t.originalName)) t.name = t.originalName;
                                    else {
                                        if (!(e instanceof c.Field && e.name !== e.originalName && null === this.getChild(e.originalName))) throw Error("Duplicate name in namespace " + this.toString(!0) + ": " + e.name);
                                        e.name = e.originalName
                                    }
                                this.children.push(e)
                            }, f.getChild = function(e) {
                                for (var t = "number" == typeof e ? "id" : "name", n = 0, r = this.children.length; r > n; ++n)
                                    if (this.children[n][t] === e) return this.children[n];
                                return null
                            }, f.resolve = function(e, t) {
                                var n = "string" == typeof e ? e.split(".") : e,
                                    r = this,
                                    i = 0;
                                if ("" === n[i]) {
                                    for (; null !== r.parent;) r = r.parent;
                                    i++
                                }
                                var a;
                                do {
                                    do {
                                        if (!(r instanceof o.Namespace)) {
                                            r = null;
                                            break
                                        }
                                        if (a = r.getChild(n[i]), !(a && a instanceof o.T && (!t || a instanceof o.Namespace))) {
                                            r = null;
                                            break
                                        }
                                        r = a, i++
                                    } while (i < n.length);
                                    if (null != r) break;
                                    if (null !== this.parent) return this.parent.resolve(e, t)
                                } while (null != r);
                                return r
                            }, f.qn = function(e) {
                                var t = [],
                                    n = e;
                                do t.unshift(n.name), n = n.parent; while (null !== n);
                                for (var r = 1; r <= t.length; r++) {
                                    var i = t.slice(t.length - r);
                                    if (e === this.resolve(i, e instanceof o.Namespace)) return i.join(".")
                                }
                                return e.fqn()
                            }, f.build = function() {
                                for (var e, t = {}, n = this.children, r = 0, i = n.length; i > r; ++r) e = n[r], e instanceof u && (t[e.name] = e.build());
                                return Object.defineProperty && Object.defineProperty(t, "$options", {
                                    value: this.buildOpt()
                                }), t
                            }, f.buildOpt = function() {
                                for (var e = {}, t = Object.keys(this.options), n = 0, r = t.length; r > n; ++n) {
                                    var i = t[n],
                                        o = this.options[t[n]];
                                    e[i] = o
                                }
                                return e
                            }, f.getOption = function(e) {
                                return "undefined" == typeof e ? this.options : "undefined" != typeof this.options[e] ? this.options[e] : null
                            }, o.Namespace = u;
                            var l = function(e, n, r, i) {
                                    if (this.type = e, this.resolvedType = n, this.isMapKey = r, this.syntax = i, r && t.MAP_KEY_TYPES.indexOf(e) < 0) throw Error("Invalid map key type: " + e.name)
                                },
                                h = l.prototype;
                            h.defaultFieldValue = n, h.verifyValue = function(n) {
                                var i = function(e, t) {
                                    throw Error("Illegal value for " + this.toString(!0) + " of type " + this.type.name + ": " + e + " (" + t + ")")
                                }.bind(this);
                                switch (this.type) {
                                    case t.TYPES.int32:
                                    case t.TYPES.sint32:
                                    case t.TYPES.sfixed32:
                                        return ("number" != typeof n || n === n && n % 1 !== 0) && i(typeof n, "not an integer"), n > 4294967295 ? 0 | n : n;
                                    case t.TYPES.uint32:
                                    case t.TYPES.fixed32:
                                        return ("number" != typeof n || n === n && n % 1 !== 0) && i(typeof n, "not an integer"), 0 > n ? n >>> 0 : n;
                                    case t.TYPES.int64:
                                    case t.TYPES.sint64:
                                    case t.TYPES.sfixed64:
                                        if (t.Long) try {
                                            return r(n, !1)
                                        } catch (o) {
                                            i(typeof n, o.message)
                                        } else i(typeof n, "requires Long.js");
                                    case t.TYPES.uint64:
                                    case t.TYPES.fixed64:
                                        if (t.Long) try {
                                            return r(n, !0)
                                        } catch (o) {
                                            i(typeof n, o.message)
                                        } else i(typeof n, "requires Long.js");
                                    case t.TYPES.bool:
                                        return "boolean" != typeof n && i(typeof n, "not a boolean"), n;
                                    case t.TYPES["float"]:
                                    case t.TYPES["double"]:
                                        return "number" != typeof n && i(typeof n, "not a number"), n;
                                    case t.TYPES.string:
                                        return "string" == typeof n || n && n instanceof String || i(typeof n, "not a string"), "" + n;
                                    case t.TYPES.bytes:
                                        return e.isByteBuffer(n) ? n : e.wrap(n, "base64");
                                    case t.TYPES["enum"]:
                                        var a = this.resolvedType.getChildren(t.Reflect.Enum.Value);
                                        for (u = 0; u < a.length; u++) {
                                            if (a[u].name == n) return a[u].id;
                                            if (a[u].id == n) return a[u].id
                                        }
                                        if ("proto3" === this.syntax) return ("number" != typeof n || n === n && n % 1 !== 0) && i(typeof n, "not an integer"), (n > 4294967295 || 0 > n) && i(typeof n, "not in range for uint32"), n;
                                        i(n, "not a valid enum value");
                                    case t.TYPES.group:
                                    case t.TYPES.message:
                                        if (n && "object" == typeof n || i(typeof n, "object expected"), n instanceof this.resolvedType.clazz) return n;
                                        if (n instanceof t.Builder.Message) {
                                            var s = {};
                                            for (var u in n) n.hasOwnProperty(u) && (s[u] = n[u]);
                                            n = s
                                        }
                                        return new this.resolvedType.clazz(n)
                                }
                                throw Error("[INTERNAL] Illegal value for " + this.toString(!0) + ": " + n + " (undefined type " + this.type + ")")
                            }, h.calculateLength = function(n, r) {
                                if (null === r) return 0;
                                var i;
                                switch (this.type) {
                                    case t.TYPES.int32:
                                        return 0 > r ? e.calculateVarint64(r) : e.calculateVarint32(r);
                                    case t.TYPES.uint32:
                                        return e.calculateVarint32(r);
                                    case t.TYPES.sint32:
                                        return e.calculateVarint32(e.zigZagEncode32(r));
                                    case t.TYPES.fixed32:
                                    case t.TYPES.sfixed32:
                                    case t.TYPES["float"]:
                                        return 4;
                                    case t.TYPES.int64:
                                    case t.TYPES.uint64:
                                        return e.calculateVarint64(r);
                                    case t.TYPES.sint64:
                                        return e.calculateVarint64(e.zigZagEncode64(r));
                                    case t.TYPES.fixed64:
                                    case t.TYPES.sfixed64:
                                        return 8;
                                    case t.TYPES.bool:
                                        return 1;
                                    case t.TYPES["enum"]:
                                        return e.calculateVarint32(r);
                                    case t.TYPES["double"]:
                                        return 8;
                                    case t.TYPES.string:
                                        return i = e.calculateUTF8Bytes(r), e.calculateVarint32(i) + i;
                                    case t.TYPES.bytes:
                                        if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
                                        return e.calculateVarint32(r.remaining()) + r.remaining();
                                    case t.TYPES.message:
                                        return i = this.resolvedType.calculate(r), e.calculateVarint32(i) + i;
                                    case t.TYPES.group:
                                        return i = this.resolvedType.calculate(r), i + e.calculateVarint32(n << 3 | t.WIRE_TYPES.ENDGROUP)
                                }
                                throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)")
                            }, h.encodeValue = function(n, r, i) {
                                if (null === r) return i;
                                switch (this.type) {
                                    case t.TYPES.int32:
                                        0 > r ? i.writeVarint64(r) : i.writeVarint32(r);
                                        break;
                                    case t.TYPES.uint32:
                                        i.writeVarint32(r);
                                        break;
                                    case t.TYPES.sint32:
                                        i.writeVarint32ZigZag(r);
                                        break;
                                    case t.TYPES.fixed32:
                                        i.writeUint32(r);
                                        break;
                                    case t.TYPES.sfixed32:
                                        i.writeInt32(r);
                                        break;
                                    case t.TYPES.int64:
                                    case t.TYPES.uint64:
                                        i.writeVarint64(r);
                                        break;
                                    case t.TYPES.sint64:
                                        i.writeVarint64ZigZag(r);
                                        break;
                                    case t.TYPES.fixed64:
                                        i.writeUint64(r);
                                        break;
                                    case t.TYPES.sfixed64:
                                        i.writeInt64(r);
                                        break;
                                    case t.TYPES.bool:
                                        i.writeVarint32("string" == typeof r ? "false" === r.toLowerCase() ? 0 : !!r : r ? 1 : 0);
                                        break;
                                    case t.TYPES["enum"]:
                                        i.writeVarint32(r);
                                        break;
                                    case t.TYPES["float"]:
                                        i.writeFloat32(r);
                                        break;
                                    case t.TYPES["double"]:
                                        i.writeFloat64(r);
                                        break;
                                    case t.TYPES.string:
                                        i.writeVString(r);
                                        break;
                                    case t.TYPES.bytes:
                                        if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
                                        var o = r.offset;
                                        i.writeVarint32(r.remaining()), i.append(r), r.offset = o;
                                        break;
                                    case t.TYPES.message:
                                        var a = (new e).LE();
                                        this.resolvedType.encode(r, a), i.writeVarint32(a.offset), i.append(a.flip());
                                        break;
                                    case t.TYPES.group:
                                        this.resolvedType.encode(r, i), i.writeVarint32(n << 3 | t.WIRE_TYPES.ENDGROUP);
                                        break;
                                    default:
                                        throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)")
                                }
                                return i
                            }, h.decode = function(e, n, r) {
                                if (n != this.type.wireType) throw Error("Unexpected wire type for element");
                                var i, o;
                                switch (this.type) {
                                    case t.TYPES.int32:
                                        return 0 | e.readVarint32();
                                    case t.TYPES.uint32:
                                        return e.readVarint32() >>> 0;
                                    case t.TYPES.sint32:
                                        return 0 | e.readVarint32ZigZag();
                                    case t.TYPES.fixed32:
                                        return e.readUint32() >>> 0;
                                    case t.TYPES.sfixed32:
                                        return 0 | e.readInt32();
                                    case t.TYPES.int64:
                                        return e.readVarint64();
                                    case t.TYPES.uint64:
                                        return e.readVarint64().toUnsigned();
                                    case t.TYPES.sint64:
                                        return e.readVarint64ZigZag();
                                    case t.TYPES.fixed64:
                                        return e.readUint64();
                                    case t.TYPES.sfixed64:
                                        return e.readInt64();
                                    case t.TYPES.bool:
                                        return !!e.readVarint32();
                                    case t.TYPES["enum"]:
                                        return e.readVarint32();
                                    case t.TYPES["float"]:
                                        return e.readFloat();
                                    case t.TYPES["double"]:
                                        return e.readDouble();
                                    case t.TYPES.string:
                                        return e.readVString();
                                    case t.TYPES.bytes:
                                        if (o = e.readVarint32(), e.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + e.remaining());
                                        return i = e.clone(), i.limit = i.offset + o, e.offset += o, i;
                                    case t.TYPES.message:
                                        return o = e.readVarint32(), this.resolvedType.decode(e, o);
                                    case t.TYPES.group:
                                        return this.resolvedType.decode(e, -1, r)
                                }
                                throw Error("[INTERNAL] Illegal decode type")
                            }, h.valueFromString = function(n) {
                                if (!this.isMapKey) throw Error("valueFromString() called on non-map-key element");
                                switch (this.type) {
                                    case t.TYPES.int32:
                                    case t.TYPES.sint32:
                                    case t.TYPES.sfixed32:
                                    case t.TYPES.uint32:
                                    case t.TYPES.fixed32:
                                        return this.verifyValue(parseInt(n));
                                    case t.TYPES.int64:
                                    case t.TYPES.sint64:
                                    case t.TYPES.sfixed64:
                                    case t.TYPES.uint64:
                                    case t.TYPES.fixed64:
                                        return this.verifyValue(n);
                                    case t.TYPES.bool:
                                        return "true" === n;
                                    case t.TYPES.string:
                                        return this.verifyValue(n);
                                    case t.TYPES.bytes:
                                        return e.fromBinary(n)
                                }
                            }, h.valueToString = function(e) {
                                if (!this.isMapKey) throw Error("valueToString() called on non-map-key element");
                                return this.type === t.TYPES.bytes ? e.toString("binary") : e.toString()
                            }, o.Element = l;
                            var c = function(e, n, r, i, o, a) {
                                    u.call(this, e, n, r, i, a), this.className = "Message", this.extensions = [t.ID_MIN, t.ID_MAX], this.clazz = null, this.isGroup = !!o, this._fields = null, this._fieldsById = null, this._fieldsByName = null
                                },
                                p = c.prototype = Object.create(u.prototype);
                            p.build = function(n) {
                                if (this.clazz && !n) return this.clazz;
                                var r = function(t, n) {
                                    function r(n, i, o, a, s) {
                                        var u = void 0;
                                        if (null === n || "object" != typeof n) {
                                            if (a == t.TYPES["enum"])
                                                for (var f = s.getChildren(t.Reflect.Enum.Value), l = 0; l < f.length; l++)
                                                    if (f[l].id === n) {
                                                        n = f[l].name;
                                                        break
                                                    }
                                            u = n
                                        } else if (n instanceof e) u = i ? n.toBase64() : n.toBuffer();
                                        else if (t.Util.isArray(n)) {
                                            var h = n;
                                            u = [];
                                            for (var c = 0; c < h.length; c++) u.push(r(h[c], i, o, a, s))
                                        } else if (n instanceof t.Map) {
                                            var p = n.entries();
                                            u = {};
                                            for (var d = p.next(); !d.done; d = p.next()) u[n.keyElem.valueToString(d.value[0])] = r(d.value[1], i, o, n.valueElem.type, n.valueElem.resolvedType)
                                        } else if (n instanceof t.Long) u = o ? n.toString() : new t.Long(n);
                                        else {
                                            u = {};
                                            var g = n.$type,
                                                y = void 0;
                                            for (var l in n)
                                                if (n.hasOwnProperty(l)) {
                                                    var v = n[l];
                                                    g && (y = g.getChild(l)), u[l] = r(v, i, o, y.type, y.resolvedType)
                                                }
                                        }
                                        return u
                                    }
                                    var i = n.getChildren(t.Reflect.Message.Field),
                                        o = n.getChildren(t.Reflect.Message.OneOf),
                                        a = function(r, a) {
                                            t.Builder.Message.call(this);
                                            for (var s = 0, u = o.length; u > s; ++s) this[o[s].name] = null;
                                            for (s = 0, u = i.length; u > s; ++s) {
                                                var f = i[s];
                                                this[f.name] = f.repeated ? [] : f.map ? new t.Map(f) : null, !f.required && "proto3" !== n.syntax || null === f.defaultValue || (this[f.name] = f.defaultValue)
                                            }
                                            if (arguments.length > 0) {
                                                var l;
                                                if (1 !== arguments.length || "object" != typeof r || "function" == typeof r.encode || t.Util.isArray(r) || r instanceof t.Map || r instanceof e || r instanceof ArrayBuffer || t.Long && r instanceof t.Long)
                                                    for (s = 0, u = arguments.length; u > s; ++s) "undefined" != typeof(l = arguments[s]) && this.$set(i[s].name, l);
                                                else this.$set(r)
                                            }
                                        },
                                        s = a.prototype = Object.create(t.Builder.Message.prototype);
                                    s.add = function(e, r, i) {
                                        var o = n._fieldsByName[e];
                                        if (!i) {
                                            if (!o) throw Error(this + "#" + e + " is undefined");
                                            if (!(o instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + o.toString(!0));
                                            if (!o.repeated) throw Error(this + "#" + e + " is not a repeated field");

                                        }
                                        return null === this[o.name] && (this[o.name] = []), this[o.name].push(i ? r : o.verifyValue(r, !0)), this
                                    }, s.$add = s.add, s.set = function(e, r, i) {
                                        if (e && "object" == typeof e) {
                                            i = r;
                                            for (var o in e) e.hasOwnProperty(o) && "undefined" != typeof(r = e[o]) && this.$set(o, r, i);
                                            return this
                                        }
                                        var a = n._fieldsByName[e];
                                        if (i) this[a.name] = r;
                                        else {
                                            if (!a) throw Error(this + "#" + e + " is not a field: undefined");
                                            if (!(a instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + a.toString(!0));
                                            this[a.name] = r = a.verifyValue(r)
                                        }
                                        return a.oneof && (null !== r ? (null !== this[a.oneof.name] && (this[this[a.oneof.name]] = null), this[a.oneof.name] = a.name) : a.oneof.name === e && (this[a.oneof.name] = null)), this
                                    }, s.$set = s.set, s.get = function(e, r) {
                                        if (r) return this[e];
                                        var i = n._fieldsByName[e];
                                        if (!(i && i instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: undefined");
                                        if (!(i instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + i.toString(!0));
                                        return this[i.name]
                                    }, s.$get = s.get;
                                    for (var u = 0; u < i.length; u++) {
                                        var f = i[u];
                                        f instanceof t.Reflect.Message.ExtensionField || n.builder.options.populateAccessors && function(e) {
                                            var t = e.originalName.replace(/(_[a-zA-Z])/g, function(e) {
                                                return e.toUpperCase().replace("_", "")
                                            });
                                            t = t.substring(0, 1).toUpperCase() + t.substring(1);
                                            var r = e.originalName.replace(/([A-Z])/g, function(e) {
                                                    return "_" + e
                                                }),
                                                i = function(t, n) {
                                                    return this[e.name] = n ? t : e.verifyValue(t), this
                                                },
                                                o = function() {
                                                    return this[e.name]
                                                };
                                            null === n.getChild("set" + t) && (s["set" + t] = i), null === n.getChild("set_" + r) && (s["set_" + r] = i), null === n.getChild("get" + t) && (s["get" + t] = o), null === n.getChild("get_" + r) && (s["get_" + r] = o)
                                        }(f)
                                    }
                                    s.encode = function(t, r) {
                                        "boolean" == typeof t && (r = t, t = void 0);
                                        var i = !1;
                                        t || (t = new e, i = !0);
                                        var o = t.littleEndian;
                                        try {
                                            return n.encode(this, t.LE(), r), (i ? t.flip() : t).LE(o)
                                        } catch (a) {
                                            throw t.LE(o), a
                                        }
                                    }, a.encode = function(e, t, n) {
                                        return new a(e).encode(t, n)
                                    }, s.calculate = function() {
                                        return n.calculate(this)
                                    }, s.encodeDelimited = function(t) {
                                        var r = !1;
                                        t || (t = new e, r = !0);
                                        var i = (new e).LE();
                                        return n.encode(this, i).flip(), t.writeVarint32(i.remaining()), t.append(i), r ? t.flip() : t
                                    }, s.encodeAB = function() {
                                        try {
                                            return this.encode().toArrayBuffer()
                                        } catch (e) {
                                            throw e.encoded && (e.encoded = e.encoded.toArrayBuffer()), e
                                        }
                                    }, s.toArrayBuffer = s.encodeAB, s.encodeNB = function() {
                                        try {
                                            return this.encode().toBuffer()
                                        } catch (e) {
                                            throw e.encoded && (e.encoded = e.encoded.toBuffer()), e
                                        }
                                    }, s.toBuffer = s.encodeNB, s.encode64 = function() {
                                        try {
                                            return this.encode().toBase64()
                                        } catch (e) {
                                            throw e.encoded && (e.encoded = e.encoded.toBase64()), e
                                        }
                                    }, s.toBase64 = s.encode64, s.encodeHex = function() {
                                        try {
                                            return this.encode().toHex()
                                        } catch (e) {
                                            throw e.encoded && (e.encoded = e.encoded.toHex()), e
                                        }
                                    }, s.toHex = s.encodeHex, s.toRaw = function(e, n) {
                                        return r(this, !!e, !!n, t.TYPES.message, this.$type)
                                    }, s.encodeJSON = function() {
                                        return JSON.stringify(r(this, !0, !0, t.TYPES.message, this.$type))
                                    }, a.decode = function(t, r) {
                                        "string" == typeof t && (t = e.wrap(t, r ? r : "base64")), t = t instanceof e ? t : e.wrap(t);
                                        var i = t.littleEndian;
                                        try {
                                            var o = n.decode(t.LE());
                                            return t.LE(i), o
                                        } catch (a) {
                                            throw t.LE(i), a
                                        }
                                    }, a.decodeDelimited = function(t, r) {
                                        if ("string" == typeof t && (t = e.wrap(t, r ? r : "base64")), t = t instanceof e ? t : e.wrap(t), t.remaining() < 1) return null;
                                        var i = t.offset,
                                            o = t.readVarint32();
                                        if (t.remaining() < o) return t.offset = i, null;
                                        try {
                                            var a = n.decode(t.slice(t.offset, t.offset + o).LE());
                                            return t.offset += o, a
                                        } catch (s) {
                                            throw t.offset += o, s
                                        }
                                    }, a.decode64 = function(e) {
                                        return a.decode(e, "base64")
                                    }, a.decodeHex = function(e) {
                                        return a.decode(e, "hex")
                                    }, a.decodeJSON = function(e) {
                                        return new a(JSON.parse(e))
                                    }, s.toString = function() {
                                        return n.toString()
                                    };
                                    return Object.defineProperty && (Object.defineProperty(a, "$options", {
                                        value: n.buildOpt()
                                    }), Object.defineProperty(s, "$options", {
                                        value: a.$options
                                    }), Object.defineProperty(a, "$type", {
                                        value: n
                                    }), Object.defineProperty(s, "$type", {
                                        value: n
                                    })), a
                                }(t, this);
                                this._fields = [], this._fieldsById = {}, this._fieldsByName = {};
                                for (var i, o = 0, a = this.children.length; a > o; o++)
                                    if (i = this.children[o], i instanceof m) r[i.name] = i.build();
                                    else if (i instanceof c) r[i.name] = i.build();
                                else if (i instanceof c.Field) i.build(), this._fields.push(i), this._fieldsById[i.id] = i, this._fieldsByName[i.name] = i;
                                else if (!(i instanceof c.OneOf || i instanceof E)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + children[o].toString(!0));
                                return this.clazz = r
                            }, p.encode = function(e, t, n) {
                                for (var r, i, o = null, a = 0, s = this._fields.length; s > a; ++a) r = this._fields[a], i = e[r.name], r.required && null === i ? null === o && (o = r) : r.encode(n ? i : r.verifyValue(i), t);
                                if (null !== o) {
                                    var u = Error("Missing at least one required field for " + this.toString(!0) + ": " + o);
                                    throw u.encoded = t, u
                                }
                                return t
                            }, p.calculate = function(e) {
                                for (var t, n, r = 0, i = 0, o = this._fields.length; o > i; ++i) {
                                    if (t = this._fields[i], n = e[t.name], t.required && null === n) throw Error("Missing at least one required field for " + this.toString(!0) + ": " + t);
                                    r += t.calculate(n)
                                }
                                return r
                            }, p.decode = function(e, n, r) {
                                n = "number" == typeof n ? n : -1;
                                for (var o, a, s, u, f = e.offset, l = new this.clazz; e.offset < f + n || -1 === n && e.remaining() > 0;) {
                                    if (o = e.readVarint32(), a = 7 & o, s = o >>> 3, a === t.WIRE_TYPES.ENDGROUP) {
                                        if (s !== r) throw Error("Illegal group end indicator for " + this.toString(!0) + ": " + s + " (" + (r ? r + " expected" : "not a group") + ")");
                                        break
                                    }
                                    if (u = this._fieldsById[s])
                                        if (u.repeated && !u.options.packed) l[u.name].push(u.decode(a, e));
                                        else if (u.map) {
                                        var h = u.decode(a, e);
                                        l[u.name].set(h[0], h[1])
                                    } else l[u.name] = u.decode(a, e), u.oneof && (null !== this[u.oneof.name] && (this[this[u.oneof.name]] = null), l[u.oneof.name] = u.name);
                                    else switch (a) {
                                        case t.WIRE_TYPES.VARINT:
                                            e.readVarint32();
                                            break;
                                        case t.WIRE_TYPES.BITS32:
                                            e.offset += 4;
                                            break;
                                        case t.WIRE_TYPES.BITS64:
                                            e.offset += 8;
                                            break;
                                        case t.WIRE_TYPES.LDELIM:
                                            var c = e.readVarint32();
                                            e.offset += c;
                                            break;
                                        case t.WIRE_TYPES.STARTGROUP:
                                            for (; i(s, e););
                                            break;
                                        default:
                                            throw Error("Illegal wire type for unknown field " + s + " in " + this.toString(!0) + "#decode: " + a)
                                    }
                                }
                                for (var p = 0, d = this._fields.length; d > p; ++p)
                                    if (u = this._fields[p], null === l[u.name]) {
                                        if (u.required) {
                                            var g = Error("Missing at least one required field for " + this.toString(!0) + ": " + u.name);
                                            throw g.decoded = l, g
                                        }
                                        t.populateDefaults && null !== u.defaultValue && (l[u.name] = u.defaultValue)
                                    }
                                return l
                            }, o.Message = c;
                            var d = function(e, t, n, r, i, o, s, u, f, l) {
                                a.call(this, e, t, o), this.className = "Message.Field", this.required = "required" === n, this.repeated = "repeated" === n, this.map = "map" === n, this.keyType = r || null, this.type = i, this.resolvedType = null, this.id = s, this.options = u || {}, this.defaultValue = null, this.oneof = f || null, this.syntax = l || "proto2", this.originalName = this.name, this.element = null, this.keyElement = null, !this.builder.options.convertFieldsToCamelCase || this instanceof c.ExtensionField || (this.name = d._toCamelCase(this.name))
                            };
                            d._toCamelCase = function(e) {
                                return e.replace(/_([a-zA-Z])/g, function(e, t) {
                                    return t.toUpperCase()
                                })
                            };
                            var g = d.prototype = Object.create(a.prototype);
                            g.build = function() {
                                this.element = new l(this.type, this.resolvedType, !1, this.syntax), this.map && (this.keyElement = new l(this.keyType, void 0, !0, this.syntax)), this.defaultValue = "undefined" != typeof this.options["default"] ? this.verifyValue(this.options["default"]) : null, "proto3" !== this.syntax || this.repeated || this.map || (this.defaultValue = this.element.defaultFieldValue(this.type))
                            }, g.verifyValue = function(e, n) {
                                n = n || !1;
                                var r = function(e, t) {
                                    throw Error("Illegal value for " + this.toString(!0) + " of type " + this.type.name + ": " + e + " (" + t + ")")
                                }.bind(this);
                                if (null === e) return this.required && r(typeof e, "required"), "proto3" === this.syntax && this.type !== t.TYPES.message && r(typeof e, "proto3 field without field presence cannot be null"), null;
                                var i;
                                if (this.repeated && !n) {
                                    t.Util.isArray(e) || (e = [e]);
                                    var o = [];
                                    for (i = 0; i < e.length; i++) o.push(this.element.verifyValue(e[i]));
                                    return o
                                }
                                return this.map && !n ? e instanceof t.Map ? e : (e instanceof Object || r(typeof e, "expected ProtoBuf.Map or raw object for map field"), new t.Map(this, e)) : (!this.repeated && t.Util.isArray(e) && r(typeof e, "no array expected"), this.element.verifyValue(e))
                            }, g.hasWirePresence = function(e) {
                                if ("proto3" !== this.syntax) return null !== e;
                                switch (this.type) {
                                    case t.TYPES.int32:
                                    case t.TYPES.sint32:
                                    case t.TYPES.sfixed32:
                                    case t.TYPES.uint32:
                                    case t.TYPES.fixed32:
                                        return 0 !== e;
                                    case t.TYPES.int64:
                                    case t.TYPES.sint64:
                                    case t.TYPES.sfixed64:
                                    case t.TYPES.uint64:
                                    case t.TYPES.fixed64:
                                        return 0 !== e.low || 0 !== e.high;
                                    case t.TYPES.bool:
                                        return e;
                                    case t.TYPES["float"]:
                                    case t.TYPES["double"]:
                                        return 0 !== e;
                                    case t.TYPES.string:
                                        return e.length > 0;
                                    case t.TYPES.bytes:
                                        return e.remaining() > 0;
                                    case t.TYPES["enum"]:
                                        return 0 !== e;
                                    case t.TYPES.message:
                                        return null !== e;
                                    default:
                                        return !0
                                }
                            }, g.encode = function(n, r) {
                                if (null === this.type || "object" != typeof this.type) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                                if (null === n || this.repeated && 0 == n.length) return r;
                                try {
                                    if (this.repeated) {
                                        var i;
                                        if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                                            r.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), r.ensureCapacity(r.offset += 1);
                                            var o = r.offset;
                                            for (i = 0; i < n.length; i++) this.element.encodeValue(this.id, n[i], r);
                                            var a = r.offset - o,
                                                s = e.calculateVarint32(a);
                                            if (s > 1) {
                                                var u = r.slice(o, r.offset);
                                                o += s - 1, r.offset = o, r.append(u)
                                            }
                                            r.writeVarint32(a, o - s)
                                        } else
                                            for (i = 0; i < n.length; i++) r.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, n[i], r)
                                    } else this.map ? n.forEach(function(n, i, o) {
                                        var a = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, i) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, n);
                                        r.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), r.writeVarint32(a), r.writeVarint32(8 | this.keyType.wireType), this.keyElement.encodeValue(1, i, r), r.writeVarint32(16 | this.type.wireType), this.element.encodeValue(2, n, r)
                                    }, this) : this.hasWirePresence(n) && (r.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, n, r))
                                } catch (f) {
                                    throw Error("Illegal value for " + this.toString(!0) + ": " + n + " (" + f + ")")
                                }
                                return r
                            }, g.calculate = function(n) {
                                if (n = this.verifyValue(n), null === this.type || "object" != typeof this.type) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                                if (null === n || this.repeated && 0 == n.length) return 0;
                                var r = 0;
                                try {
                                    if (this.repeated) {
                                        var i, o;
                                        if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                                            for (r += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), o = 0, i = 0; i < n.length; i++) o += this.element.calculateLength(this.id, n[i]);
                                            r += e.calculateVarint32(o), r += o
                                        } else
                                            for (i = 0; i < n.length; i++) r += e.calculateVarint32(this.id << 3 | this.type.wireType), r += this.element.calculateLength(this.id, n[i])
                                    } else this.map ? n.forEach(function(n, i, o) {
                                        var a = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, i) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, n);
                                        r += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), r += e.calculateVarint32(a), r += a
                                    }, this) : this.hasWirePresence(n) && (r += e.calculateVarint32(this.id << 3 | this.type.wireType), r += this.element.calculateLength(this.id, n))
                                } catch (a) {
                                    throw Error("Illegal value for " + this.toString(!0) + ": " + n + " (" + a + ")")
                                }
                                return r
                            }, g.decode = function(e, n, r) {
                                var i, o, a = !this.map && e == this.type.wireType || !r && this.repeated && this.options.packed && e == t.WIRE_TYPES.LDELIM || this.map && e == t.WIRE_TYPES.LDELIM;
                                if (!a) throw Error("Illegal wire type for field " + this.toString(!0) + ": " + e + " (" + this.type.wireType + " expected)");
                                if (e == t.WIRE_TYPES.LDELIM && this.repeated && this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0 && !r) {
                                    o = n.readVarint32(), o = n.offset + o;
                                    for (var s = []; n.offset < o;) s.push(this.decode(this.type.wireType, n, !0));
                                    return s
                                }
                                if (this.map) {
                                    var u = this.keyElement.defaultFieldValue(this.keyType);
                                    if (i = this.element.defaultFieldValue(this.type), o = n.readVarint32(), n.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + n.remaining());
                                    var f = n.clone();
                                    for (f.limit = f.offset + o, n.offset += o; f.remaining() > 0;) {
                                        var l = f.readVarint32();
                                        e = 7 & l;
                                        var h = l >>> 3;
                                        if (1 === h) u = this.keyElement.decode(f, e, h);
                                        else {
                                            if (2 !== h) throw Error("Unexpected tag in map field key/value submessage");
                                            i = this.element.decode(f, e, h)
                                        }
                                    }
                                    return [u, i]
                                }
                                return this.element.decode(n, e, this.id)
                            }, o.Message.Field = d;
                            var y = function(e, t, n, r, i, o, a) {
                                d.call(this, e, t, n, null, r, i, o, a), this.extension
                            };
                            y.prototype = Object.create(d.prototype), o.Message.ExtensionField = y;
                            var v = function(e, t, n) {
                                a.call(this, e, t, n), this.fields = []
                            };
                            o.Message.OneOf = v;
                            var m = function(e, t, n, r, i) {
                                    u.call(this, e, t, n, r, i), this.className = "Enum", this.object = null
                                },
                                b = m.prototype = Object.create(u.prototype);
                            b.build = function() {
                                for (var e = {}, t = this.getChildren(m.Value), n = 0, r = t.length; r > n; ++n) e[t[n].name] = t[n].id;
                                return Object.defineProperty && Object.defineProperty(e, "$options", {
                                    value: this.buildOpt()
                                }), this.object = e
                            }, o.Enum = m;
                            var w = function(e, t, n, r) {
                                a.call(this, e, t, n), this.className = "Enum.Value", this.id = r
                            };
                            w.prototype = Object.create(a.prototype), o.Enum.Value = w;
                            var E = function(e, t, n, r) {
                                a.call(this, e, t, n), this.field = r
                            };
                            E.prototype = Object.create(a.prototype), o.Extension = E;
                            var _ = function(e, t, n, r) {
                                    u.call(this, e, t, n, r), this.className = "Service", this.clazz = null
                                },
                                T = _.prototype = Object.create(u.prototype);
                            T.build = function(n) {
                                return this.clazz && !n ? this.clazz : this.clazz = function(t, n) {
                                    for (var r = function(e) {
                                            t.Builder.Service.call(this), this.rpcImpl = e || function(e, t, n) {
                                                setTimeout(n.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0)
                                            }
                                        }, i = r.prototype = Object.create(t.Builder.Service.prototype), o = n.getChildren(t.Reflect.Service.RPCMethod), a = 0; a < o.length; a++) ! function(t) {
                                        i[t.name] = function(r, i) {
                                            try {
                                                try {
                                                    r = t.resolvedRequestType.clazz.decode(e.wrap(r))
                                                } catch (o) {
                                                    if (!(o instanceof TypeError)) throw o
                                                }
                                                if (!(r && r instanceof t.resolvedRequestType.clazz)) return void setTimeout(i.bind(this, Error("Illegal request type provided to service method " + n.name + "#" + t.name)), 0);
                                                this.rpcImpl(t.fqn(), r, function(e, r) {
                                                    if (e) return void i(e);
                                                    try {
                                                        r = t.resolvedResponseType.clazz.decode(r)
                                                    } catch (o) {}
                                                    return r && r instanceof t.resolvedResponseType.clazz ? void i(null, r) : void i(Error("Illegal response type received in service method " + n.name + "#" + t.name))
                                                })
                                            } catch (o) {
                                                setTimeout(i.bind(this, o), 0)
                                            }
                                        }, r[t.name] = function(e, n, i) {
                                            new r(e)[t.name](n, i)
                                        }, Object.defineProperty && (Object.defineProperty(r[t.name], "$options", {
                                            value: t.buildOpt()
                                        }), Object.defineProperty(i[t.name], "$options", {
                                            value: r[t.name].$options
                                        }))
                                    }(o[a]);
                                    return Object.defineProperty && (Object.defineProperty(r, "$options", {
                                        value: n.buildOpt()
                                    }), Object.defineProperty(i, "$options", {
                                        value: r.$options
                                    }), Object.defineProperty(r, "$type", {
                                        value: n
                                    }), Object.defineProperty(i, "$type", {
                                        value: n
                                    })), r
                                }(t, this)
                            }, o.Service = _;
                            var x = function(e, t, n, r) {
                                    a.call(this, e, t, n), this.className = "Service.Method", this.options = r || {}
                                },
                                I = x.prototype = Object.create(a.prototype);
                            I.buildOpt = f.buildOpt, o.Service.Method = x;
                            var S = function(e, t, n, r, i, o, a, s) {
                                x.call(this, e, t, n, s), this.className = "Service.RPCMethod", this.requestName = r, this.responseName = i, this.requestStream = o, this.responseStream = a, this.resolvedRequestType = null, this.resolvedResponseType = null
                            };
                            return S.prototype = Object.create(x.prototype), o.Service.RPCMethod = S, o
                        }(n), n.Builder = function(e, n, r) {
                            function i(e, t) {
                                t.syntax = e, t.messages && t.messages.forEach(function(t) {
                                    i(e, t)
                                }), t.enums && t.enums.forEach(function(t) {
                                    i(e, t)
                                })
                            }
                            var o = function(e) {
                                    this.ns = new r.Namespace(this, null, ""), this.ptr = this.ns, this.resolved = !1, this.result = null, this.files = {}, this.importRoot = null, this.options = e || {}
                                },
                                a = o.prototype;
                            return a.reset = function() {
                                this.ptr = this.ns
                            }, a.define = function(e) {
                                if ("string" != typeof e || !n.TYPEREF.test(e)) throw Error("Illegal package: " + e);
                                var t, i, o = e.split(".");
                                for (t = 0; t < o.length; t++)
                                    if (!n.NAME.test(o[t])) throw Error("Illegal package: " + o[t]);
                                for (t = 0; t < o.length; t++) i = this.ptr.getChild(o[t]), null === i && this.ptr.addChild(i = new r.Namespace(this, this.ptr, o[t])), this.ptr = i;
                                return this
                            }, o.isValidMessage = function(t) {
                                if ("string" != typeof t.name || !n.NAME.test(t.name)) return !1;
                                if ("undefined" != typeof t.values || "undefined" != typeof t.rpc) return !1;
                                var r;
                                if ("undefined" != typeof t.fields) {
                                    if (!e.Util.isArray(t.fields)) return !1;
                                    var i, a = [];
                                    for (r = 0; r < t.fields.length; r++) {
                                        if (!o.isValidMessageField(t.fields[r])) return !1;
                                        if (i = parseInt(t.fields[r].id, 10), a.indexOf(i) >= 0) return !1;
                                        a.push(i)
                                    }
                                    a = null
                                }
                                if ("undefined" != typeof t.enums) {
                                    if (!e.Util.isArray(t.enums)) return !1;
                                    for (r = 0; r < t.enums.length; r++)
                                        if (!o.isValidEnum(t.enums[r])) return !1
                                }
                                if ("undefined" != typeof t.messages) {
                                    if (!e.Util.isArray(t.messages)) return !1;
                                    for (r = 0; r < t.messages.length; r++)
                                        if (!o.isValidMessage(t.messages[r]) && !o.isValidExtend(t.messages[r])) return !1
                                }
                                if ("undefined" != typeof t.extensions && (!e.Util.isArray(t.extensions) || 2 !== t.extensions.length || "number" != typeof t.extensions[0] || "number" != typeof t.extensions[1])) return !1;
                                if ("proto3" === t.syntax) {
                                    for (r = 0; r < t.fields.length; r++) {
                                        var s = t.fields[r];
                                        if ("required" === s.rule) return !1;
                                        if (s["default"]) return !1;
                                        if (s.options)
                                            for (var u = Object.keys(s.options), f = 0; f < u.length; f++)
                                                if ("default" === u[f]) return !1
                                    }
                                    if (t.extensions) return !1
                                }
                                return !0
                            }, o.isValidMessageField = function(e) {
                                if ("string" != typeof e.rule || "string" != typeof e.name || "string" != typeof e.type || "undefined" == typeof e.id) return !1;
                                if (!(n.RULE.test(e.rule) && n.NAME.test(e.name) && n.TYPEREF.test(e.type) && n.ID.test("" + e.id))) return !1;
                                if ("undefined" != typeof e.options) {
                                    if ("object" != typeof e.options) return !1;
                                    for (var t, r = Object.keys(e.options), i = 0; i < r.length; i++)
                                        if ("string" != typeof(t = r[i]) || "string" != typeof e.options[t] && "number" != typeof e.options[t] && "boolean" != typeof e.options[t]) return !1
                                }
                                return !0
                            }, o.isValidEnum = function(t) {
                                if ("string" != typeof t.name || !n.NAME.test(t.name)) return !1;
                                if ("undefined" == typeof t.values || !e.Util.isArray(t.values) || 0 == t.values.length) return !1;
                                for (var r = 0; r < t.values.length; r++) {
                                    if ("object" != typeof t.values[r]) return !1;
                                    if ("string" != typeof t.values[r].name || "undefined" == typeof t.values[r].id) return !1;
                                    if (!n.NAME.test(t.values[r].name) || !n.NEGID.test("" + t.values[r].id)) return !1
                                }
                                return "proto3" === t.syntax && 0 !== t.values[0].id ? !1 : !0
                            }, a.create = function(t) {
                                if (!t) return this;
                                if (e.Util.isArray(t)) {
                                    if (0 === t.length) return this;
                                    t = t.slice()
                                } else t = [t];
                                var n = [];
                                for (n.push(t); n.length > 0;) {
                                    if (t = n.pop(), !e.Util.isArray(t)) throw Error("Not a valid namespace: " + JSON.stringify(t));
                                    for (; t.length > 0;) {
                                        var i = t.shift();
                                        if (o.isValidMessage(i)) {
                                            var a = new r.Message(this, this.ptr, i.name, i.options, i.isGroup, i.syntax),
                                                s = {};
                                            if (i.oneofs)
                                                for (var u = Object.keys(i.oneofs), f = 0, l = u.length; l > f; ++f) a.addChild(s[u[f]] = new r.Message.OneOf(this, a, u[f]));
                                            if (i.fields && i.fields.length > 0)
                                                for (f = 0, l = i.fields.length; l > f; ++f) {
                                                    var h = i.fields[f];
                                                    if (null !== a.getChild(h.id)) throw Error("Duplicate field id in message " + a.name + ": " + h.id);
                                                    if (h.options)
                                                        for (var c = Object.keys(h.options), p = 0, d = c.length; d > p; ++p) {
                                                            if ("string" != typeof c[p]) throw Error("Illegal field option name in message " + a.name + "#" + h.name + ": " + c[p]);
                                                            if ("string" != typeof h.options[c[p]] && "number" != typeof h.options[c[p]] && "boolean" != typeof h.options[c[p]]) throw Error("Illegal field option value in message " + a.name + "#" + h.name + "#" + c[p] + ": " + h.options[c[p]])
                                                        }
                                                    var g = null;
                                                    if ("string" == typeof h.oneof && (g = s[h.oneof], "undefined" == typeof g)) throw Error("Illegal oneof in message " + a.name + "#" + h.name + ": " + h.oneof);
                                                    h = new r.Message.Field(this, a, h.rule, h.keytype, h.type, h.name, h.id, h.options, g, i.syntax), g && g.fields.push(h), a.addChild(h)
                                                }
                                            var y = [];
                                            if ("undefined" != typeof i.enums && i.enums.length > 0)
                                                for (f = 0; f < i.enums.length; f++) y.push(i.enums[f]);
                                            if (i.messages && i.messages.length > 0)
                                                for (f = 0; f < i.messages.length; f++) y.push(i.messages[f]);
                                            if (i.extensions && (a.extensions = i.extensions, a.extensions[0] < e.ID_MIN && (a.extensions[0] = e.ID_MIN), a.extensions[1] > e.ID_MAX && (a.extensions[1] = e.ID_MAX)), this.ptr.addChild(a), y.length > 0) {
                                                n.push(t), t = y, y = null, this.ptr = a, a = null;
                                                continue
                                            }
                                            y = null, a = null
                                        } else if (o.isValidEnum(i)) {
                                            for (a = new r.Enum(this, this.ptr, i.name, i.options, i.syntax), f = 0; f < i.values.length; f++) a.addChild(new r.Enum.Value(this, a, i.values[f].name, i.values[f].id));
                                            this.ptr.addChild(a), a = null
                                        } else if (o.isValidService(i)) {
                                            a = new r.Service(this, this.ptr, i.name, i.options);
                                            for (f in i.rpc) i.rpc.hasOwnProperty(f) && a.addChild(new r.Service.RPCMethod(this, a, f, i.rpc[f].request, i.rpc[f].response, !!i.rpc[f].request_stream, !!i.rpc[f].response_stream, i.rpc[f].options));
                                            this.ptr.addChild(a), a = null
                                        } else {
                                            if (!o.isValidExtend(i)) throw Error("Not a valid definition: " + JSON.stringify(i));
                                            if (a = this.ptr.resolve(i.ref, !0))
                                                for (f = 0; f < i.fields.length; f++) {
                                                    if (null !== a.getChild(i.fields[f].id)) throw Error("Duplicate extended field id in message " + a.name + ": " + i.fields[f].id);
                                                    if (i.fields[f].id < a.extensions[0] || i.fields[f].id > a.extensions[1]) throw Error("Illegal extended field id in message " + a.name + ": " + i.fields[f].id + " (" + a.extensions.join(" to ") + " expected)");
                                                    var v = i.fields[f].name;
                                                    this.options.convertFieldsToCamelCase && (v = r.Message.Field._toCamelCase(i.fields[f].name)), h = new r.Message.ExtensionField(this, a, i.fields[f].rule, i.fields[f].type, this.ptr.fqn() + "." + v, i.fields[f].id, i.fields[f].options);
                                                    var m = new r.Extension(this, this.ptr, i.fields[f].name, h);
                                                    h.extension = m, this.ptr.addChild(m), a.addChild(h)
                                                } else if (!/\.?google\.protobuf\./.test(i.ref)) throw Error("Extended message " + i.ref + " is not defined")
                                        }
                                        i = null
                                    }
                                    t = null, this.ptr = this.ptr.parent
                                }
                                return this.resolved = !1, this.result = null, this
                            }, a["import"] = function(n, r) {
                                if ("string" == typeof r) {
                                    if (e.Util.IS_NODE && (r = t("path").resolve(r)), this.files[r] === !0) return this.reset(), this;
                                    this.files[r] = !0
                                } else if ("object" == typeof r) {
                                    var o = r.root;
                                    e.Util.IS_NODE && (o = t("path").resolve(o));
                                    var a = [o, r.file].join("/");
                                    if (this.files[a] === !0) return this.reset(), this;
                                    this.files[a] = !0
                                }
                                if (n.imports && n.imports.length > 0) {
                                    var s, u = "/",
                                        f = !1;
                                    "object" == typeof r ? (this.importRoot = r.root, f = !0, s = this.importRoot, r = r.file, (s.indexOf("\\") >= 0 || r.indexOf("\\") >= 0) && (u = "\\")) : "string" == typeof r ? this.importRoot ? s = this.importRoot : r.indexOf("/") >= 0 ? (s = r.replace(/\/[^\/]*$/, ""), "" === s && (s = "/")) : r.indexOf("\\") >= 0 ? (s = r.replace(/\\[^\\]*$/, ""), u = "\\") : s = "." : s = null;
                                    for (var l = 0; l < n.imports.length; l++)
                                        if ("string" == typeof n.imports[l]) {
                                            if (!s) throw Error("Cannot determine import root: File name is unknown");
                                            var h = n.imports[l];
                                            if ("google/protobuf/descriptor.proto" === h) continue;
                                            if (h = s + u + h, this.files[h] === !0) continue;
                                            /\.proto$/i.test(h) && !e.DotProto && (h = h.replace(/\.proto$/, ".json"));
                                            var c = e.Util.fetch(h);
                                            if (null === c) throw Error("Failed to import '" + h + "' in '" + r + "': File not found");
                                            /\.json$/i.test(h) ? this["import"](JSON.parse(c + ""), h) : this["import"](new e.DotProto.Parser(c + "").parse(), h)
                                        } else r ? /\.(\w+)$/.test(r) ? this["import"](n.imports[l], r.replace(/^(.+)\.(\w+)$/, function(e, t, n) {
                                            return t + "_import" + l + "." + n
                                        })) : this["import"](n.imports[l], r + "_import" + l) : this["import"](n.imports[l]);
                                    f && (this.importRoot = null)
                                }
                                n["package"] && this.define(n["package"]), n.syntax && i(n.syntax, n);
                                var p = this.ptr;
                                return n.options && Object.keys(n.options).forEach(function(e) {
                                    p.options[e] = n.options[e]
                                }), n.messages && (this.create(n.messages), this.ptr = p), n.enums && (this.create(n.enums), this.ptr = p), n.services && (this.create(n.services), this.ptr = p), n["extends"] && this.create(n["extends"]), this.reset(), this
                            }, o.isValidService = function(e) {
                                return !("string" != typeof e.name || !n.NAME.test(e.name) || "object" != typeof e.rpc)
                            }, o.isValidExtend = function(t) {
                                if ("string" != typeof t.ref || !n.TYPEREF.test(t.ref)) return !1;
                                var r;
                                if ("undefined" != typeof t.fields) {
                                    if (!e.Util.isArray(t.fields)) return !1;
                                    var i, a = [];
                                    for (r = 0; r < t.fields.length; r++) {
                                        if (!o.isValidMessageField(t.fields[r])) return !1;
                                        if (i = parseInt(t.id, 10), a.indexOf(i) >= 0) return !1;
                                        a.push(i)
                                    }
                                    a = null
                                }
                                return !0
                            }, a.resolveAll = function() {
                                var t;
                                if (null != this.ptr && "object" != typeof this.ptr.type) {
                                    if (this.ptr instanceof r.Namespace)
                                        for (var i = this.ptr.children, o = 0, a = i.length; a > o; ++o) this.ptr = i[o], this.resolveAll();
                                    else if (this.ptr instanceof r.Message.Field) {
                                        if (n.TYPE.test(this.ptr.type)) this.ptr.type = e.TYPES[this.ptr.type];
                                        else {
                                            if (!n.TYPEREF.test(this.ptr.type)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                                            if (t = (this.ptr instanceof r.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, !0), !t) throw Error("Unresolvable type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                                            if (this.ptr.resolvedType = t, t instanceof r.Enum) {
                                                if (this.ptr.type = e.TYPES["enum"], "proto3" === this.ptr.syntax && "proto3" !== t.syntax) throw Error("Proto3 message refers to proto2 enum; this is not allowed due to differing enum semantics in proto3")
                                            } else {
                                                if (!(t instanceof r.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                                                this.ptr.type = t.isGroup ? e.TYPES.group : e.TYPES.message
                                            }
                                        }
                                        if (this.ptr.map) {
                                            if (!n.TYPE.test(this.ptr.keyType)) throw Error("Illegal key type for map field in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                                            this.ptr.keyType = e.TYPES[this.ptr.keyType]
                                        }
                                    } else if (this.ptr instanceof e.Reflect.Enum.Value);
                                    else if (this.ptr instanceof e.Reflect.Service.Method) {
                                        if (!(this.ptr instanceof e.Reflect.Service.RPCMethod)) throw Error("Illegal service type in " + this.ptr.toString(!0));
                                        if (t = this.ptr.parent.resolve(this.ptr.requestName, !0), !(t && t instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.requestName);
                                        if (this.ptr.resolvedRequestType = t, t = this.ptr.parent.resolve(this.ptr.responseName, !0), !(t && t instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.responseName);
                                        this.ptr.resolvedResponseType = t
                                    } else if (!(this.ptr instanceof e.Reflect.Message.OneOf || this.ptr instanceof e.Reflect.Extension)) throw Error("Illegal object in namespace: " + typeof this.ptr + ":" + this.ptr);
                                    this.reset()
                                }
                            }, a.build = function(e) {
                                if (this.reset(), this.resolved || (this.resolveAll(), this.resolved = !0, this.result = null), null === this.result && (this.result = this.ns.build()), e) {
                                    for (var t = "string" == typeof e ? e.split(".") : e, n = this.result, r = 0; r < t.length; r++) {
                                        if (!n[t[r]]) {
                                            n = null;
                                            break
                                        }
                                        n = n[t[r]]
                                    }
                                    return n
                                }
                                return this.result
                            }, a.lookup = function(e, t) {
                                return e ? this.ns.resolve(e, t) : this.ns
                            }, a.toString = function() {
                                return "Builder"
                            }, o.Message = function() {}, o.Service = function() {}, o
                        }(n, n.Lang, n.Reflect), n.Map = function(e) {
                            function t(e) {
                                var t = 0;
                                return {
                                    next: function() {
                                        return t < e.length ? {
                                            done: !1,
                                            value: e[t++]
                                        } : {
                                            done: !0
                                        }
                                    }
                                }
                            }
                            var n = function(t, n) {
                                    if (!t.map) throw Error("field is not a map");
                                    if (this.field = t, this.keyElem = new e.Reflect.Element(t.keyType, null, !0, t.syntax), this.valueElem = new e.Reflect.Element(t.type, t.resolvedType, !1, t.syntax), this.map = {}, Object.defineProperty(this, "size", {
                                            get: function() {
                                                return Object.keys(this.map).length
                                            }
                                        }), n)
                                        for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                                            var o = this.keyElem.valueFromString(r[i]),
                                                a = this.valueElem.verifyValue(n[r[i]]);
                                            this.map[this.keyElem.valueToString(o)] = {
                                                key: o,
                                                value: a
                                            }
                                        }
                                },
                                r = n.prototype;
                            return r.clear = function() {
                                this.map = {}
                            }, r["delete"] = function(e) {
                                var t = this.keyElem.valueToString(this.keyElem.verifyValue(e)),
                                    n = t in this.map;
                                return delete this.map[t], n
                            }, r.entries = function() {
                                for (var e, n = [], r = Object.keys(this.map), i = 0; i < r.length; i++) n.push([(e = this.map[r[i]]).key, e.value]);
                                return t(n)
                            }, r.keys = function() {
                                for (var e = [], n = Object.keys(this.map), r = 0; r < n.length; r++) e.push(this.map[n[r]].key);
                                return t(e)
                            }, r.values = function() {
                                for (var e = [], n = Object.keys(this.map), r = 0; r < n.length; r++) e.push(this.map[n[r]].value);
                                return t(e)
                            }, r.forEach = function(e, t) {
                                for (var n, r = Object.keys(this.map), i = 0; i < r.length; i++) e.call(t, (n = this.map[r[i]]).value, n.key, this)
                            }, r.set = function(e, t) {
                                var n = this.keyElem.verifyValue(e),
                                    r = this.valueElem.verifyValue(t);
                                return this.map[this.keyElem.valueToString(n)] = {
                                    key: n,
                                    value: r
                                }, this
                            }, r.get = function(e) {
                                var t = this.keyElem.valueToString(this.keyElem.verifyValue(e));
                                return t in this.map ? this.map[t].value : void 0
                            }, r.has = function(e) {
                                var t = this.keyElem.valueToString(this.keyElem.verifyValue(e));
                                return t in this.map
                            }, n
                        }(n), n.loadProto = function(e, t, r) {
                            return ("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (r = t, t = void 0), n.loadJson(new n.DotProto.Parser(e).parse(), t, r)
                        }, n.protoFromString = n.loadProto, n.loadProtoFile = function(e, t, r) {
                            if (t && "object" == typeof t ? (r = t, t = null) : t && "function" == typeof t || (t = null), t) return n.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file, function(i) {
                                if (null === i) return void t(Error("Failed to fetch file"));
                                try {
                                    t(null, n.loadProto(i, r, e))
                                } catch (o) {
                                    t(o)
                                }
                            });
                            var i = n.Util.fetch("object" == typeof e ? e.root + "/" + e.file : e);
                            return null === i ? null : n.loadProto(i, r, e)
                        }, n.protoFromFile = n.loadProtoFile, n.newBuilder = function(e) {
                            return e = e || {}, "undefined" == typeof e.convertFieldsToCamelCase && (e.convertFieldsToCamelCase = n.convertFieldsToCamelCase), "undefined" == typeof e.populateAccessors && (e.populateAccessors = n.populateAccessors), new n.Builder(e)
                        }, n.loadJson = function(e, t, r) {
                            return ("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (r = t, t = null), t && "object" == typeof t || (t = n.newBuilder()), "string" == typeof e && (e = JSON.parse(e)), t["import"](e, r), t.resolveAll(), t
                        }, n.loadJsonFile = function(e, t, r) {
                            if (t && "object" == typeof t ? (r = t, t = null) : t && "function" == typeof t || (t = null), t) return n.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file, function(i) {
                                if (null === i) return void t(Error("Failed to fetch file"));
                                try {
                                    t(null, n.loadJson(JSON.parse(i), r, e))
                                } catch (o) {
                                    t(o)
                                }
                            });
                            var i = n.Util.fetch("object" == typeof e ? e.root + "/" + e.file : e);
                            return null === i ? null : n.loadJson(JSON.parse(i), r, e)
                        }, n
                    }
                    "function" == typeof t && "object" == typeof n && n && "object" == typeof r && r ? n.exports = a(t("bytebuffer")) : "function" == typeof e && e.amd ? e(["ByteBuffer"], a) : (o.dcodeIO = o.dcodeIO || {}).ProtoBuf = a(o.dcodeIO.ByteBuffer)
                }(this)
            }).call(this, t("_process"))
        }, {
            _process: 3,
            bytebuffer: 94,
            fs: 1,
            path: 2
        }],
        94: [function(t, n, r) {
            /**
             * @license ByteBuffer.js (c) 2013-2014 Daniel Wirtz <dcode@dcode.io>
             * This version of ByteBuffer.js uses an ArrayBuffer (AB) as its backing buffer and is compatible with modern browsers.
             * Released under the Apache License, Version 2.0
             * see: https://github.com/dcodeIO/ByteBuffer.js for details
             */
            ! function(o) {
                "use strict";

                function a(e) {
                    function t(e) {
                        var t = 0;
                        return function() {
                            return t < e.length ? e.charCodeAt(t++) : null
                        }
                    }

                    function n() {
                        var e = [],
                            t = [];
                        return function() {
                            return 0 === arguments.length ? t.join("") + s.apply(String, e) : (e.length + arguments.length > 1024 && (t.push(s.apply(String, e)), e.length = 0), void Array.prototype.push.apply(e, arguments))
                        }
                    }
                    var r = function(e, t, n) {
                        if ("undefined" == typeof e && (e = r.DEFAULT_CAPACITY), "undefined" == typeof t && (t = r.DEFAULT_ENDIAN), "undefined" == typeof n && (n = r.DEFAULT_NOASSERT), !n) {
                            if (e = 0 | e, 0 > e) throw RangeError("Illegal capacity");
                            t = !!t, n = !!n
                        }
                        this.buffer = 0 === e ? a : new ArrayBuffer(e), this.view = 0 === e ? null : new DataView(this.buffer), this.offset = 0, this.markedOffset = -1, this.limit = e, this.littleEndian = "undefined" != typeof t ? !!t : !1, this.noAssert = !!n
                    };
                    r.VERSION = "3.5.4", r.LITTLE_ENDIAN = !0, r.BIG_ENDIAN = !1, r.DEFAULT_CAPACITY = 16, r.DEFAULT_ENDIAN = r.BIG_ENDIAN, r.DEFAULT_NOASSERT = !1, r.Long = e || null;
                    var o = r.prototype,
                        a = new ArrayBuffer(0),
                        s = String.fromCharCode;
                    r.allocate = function(e, t, n) {
                        return new r(e, t, n)
                    }, r.concat = function(e, t, n, i) {
                        ("boolean" == typeof t || "string" != typeof t) && (i = n, n = t, t = void 0);
                        for (var o, a = 0, s = 0, u = e.length; u > s; ++s) r.isByteBuffer(e[s]) || (e[s] = r.wrap(e[s], t)), o = e[s].limit - e[s].offset, o > 0 && (a += o);
                        if (0 === a) return new r(0, n, i);
                        var f, l = new r(a, n, i),
                            h = new Uint8Array(l.buffer);
                        for (s = 0; u > s;) f = e[s++], o = f.limit - f.offset, 0 >= o || (h.set(new Uint8Array(f.buffer).subarray(f.offset, f.limit), l.offset), l.offset += o);
                        return l.limit = l.offset, l.offset = 0, l
                    }, r.isByteBuffer = function(e) {
                        return (e && e instanceof r) === !0
                    }, r.type = function() {
                        return ArrayBuffer
                    }, r.wrap = function(e, t, n, a) {
                        if ("string" != typeof t && (a = n, n = t, t = void 0), "string" == typeof e) switch ("undefined" == typeof t && (t = "utf8"), t) {
                            case "base64":
                                return r.fromBase64(e, n);
                            case "hex":
                                return r.fromHex(e, n);
                            case "binary":
                                return r.fromBinary(e, n);
                            case "utf8":
                                return r.fromUTF8(e, n);
                            case "debug":
                                return r.fromDebug(e, n);
                            default:
                                throw Error("Unsupported encoding: " + t)
                        }
                        if (null === e || "object" != typeof e) throw TypeError("Illegal buffer");
                        var s;
                        if (r.isByteBuffer(e)) return s = o.clone.call(e), s.markedOffset = -1, s;
                        if (e instanceof Uint8Array) s = new r(0, n, a), e.length > 0 && (s.buffer = e.buffer, s.offset = e.byteOffset, s.limit = e.byteOffset + e.length, s.view = e.length > 0 ? new DataView(e.buffer) : null);
                        else if (e instanceof ArrayBuffer) s = new r(0, n, a), e.byteLength > 0 && (s.buffer = e, s.offset = 0, s.limit = e.byteLength, s.view = e.byteLength > 0 ? new DataView(e) : null);
                        else {
                            if ("[object Array]" !== Object.prototype.toString.call(e)) throw TypeError("Illegal buffer");
                            for (s = new r(e.length, n, a), s.limit = e.length, i = 0; i < e.length; ++i) s.view.setUint8(i, e[i])
                        }
                        return s
                    }, o.writeInt8 = function(e, t) {
                        var n = "undefined" == typeof t;
                        if (n && (t = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                            if (e |= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                            if (t >>>= 0, 0 > t || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                        }
                        t += 1;
                        var r = this.buffer.byteLength;
                        return t > r && this.resize((r *= 2) > t ? r : t), t -= 1, this.view.setInt8(t, e), n && (this.offset += 1), this
                    }, o.writeByte = o.writeInt8, o.readInt8 = function(e) {
                        var t = "undefined" == typeof e;
                        if (t && (e = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                            if (e >>>= 0, 0 > e || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                        }
                        var n = this.view.getInt8(e);
                        return t && (this.offset += 1), n
                    }, o.readByte = o.readInt8, o.writeUint8 = function(e, t) {
                        var n = "undefined" == typeof t;
                        if (n && (t = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                            if (e >>>= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                            if (t >>>= 0, 0 > t || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                        }
                        t += 1;
                        var r = this.buffer.byteLength;
                        return t > r && this.resize((r *= 2) > t ? r : t), t -= 1, this.view.setUint8(t, e), n && (this.offset += 1), this
                    }, o.readUint8 = function(e) {
                        var t = "undefined" == typeof e;
                        if (t && (e = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                            if (e >>>= 0, 0 > e || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                        }
                        var n = this.view.getUint8(e);
                        return t && (this.offset += 1), n
                    }, o.writeInt16 = function(e, t) {
                        var n = "undefined" == typeof t;
                        if (n && (t = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                            if (e |= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                            if (t >>>= 0, 0 > t || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                        }
                        t += 2;
                        var r = this.buffer.byteLength;
                        return t > r && this.resize((r *= 2) > t ? r : t), t -= 2, this.view.setInt16(t, e, this.littleEndian), n && (this.offset += 2), this
                    }, o.writeShort = o.writeInt16, o.readInt16 = function(e) {
                        var t = "undefined" == typeof e;
                        if (t && (e = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                            if (e >>>= 0, 0 > e || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength)
                        }
                        var n = this.view.getInt16(e, this.littleEndian);
                        return t && (this.offset += 2), n
                    }, o.readShort = o.readInt16, o.writeUint16 = function(e, t) {
                        var n = "undefined" == typeof t;
                        if (n && (t = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                            if (e >>>= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                            if (t >>>= 0, 0 > t || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                        }
                        t += 2;
                        var r = this.buffer.byteLength;
                        return t > r && this.resize((r *= 2) > t ? r : t), t -= 2, this.view.setUint16(t, e, this.littleEndian), n && (this.offset += 2), this
                    }, o.readUint16 = function(e) {
                        var t = "undefined" == typeof e;
                        if (t && (e = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                            if (e >>>= 0, 0 > e || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength)
                        }
                        var n = this.view.getUint16(e, this.littleEndian);
                        return t && (this.offset += 2), n
                    }, o.writeInt32 = function(e, t) {
                        var n = "undefined" == typeof t;
                        if (n && (t = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                            if (e |= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                            if (t >>>= 0, 0 > t || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                        }
                        t += 4;
                        var r = this.buffer.byteLength;
                        return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, this.view.setInt32(t, e, this.littleEndian), n && (this.offset += 4), this
                    }, o.writeInt = o.writeInt32, o.readInt32 = function(e) {
                        var t = "undefined" == typeof e;
                        if (t && (e = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                            if (e >>>= 0, 0 > e || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                        }
                        var n = this.view.getInt32(e, this.littleEndian);
                        return t && (this.offset += 4), n
                    }, o.readInt = o.readInt32, o.writeUint32 = function(e, t) {
                        var n = "undefined" == typeof t;
                        if (n && (t = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                            if (e >>>= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                            if (t >>>= 0, 0 > t || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                        }
                        t += 4;
                        var r = this.buffer.byteLength;
                        return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, this.view.setUint32(t, e, this.littleEndian), n && (this.offset += 4), this
                    }, o.readUint32 = function(e) {
                        var t = "undefined" == typeof e;
                        if (t && (e = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                            if (e >>>= 0, 0 > e || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                        }
                        var n = this.view.getUint32(e, this.littleEndian);
                        return t && (this.offset += 4), n
                    }, e && (o.writeInt64 = function(t, n) {
                        var r = "undefined" == typeof n;
                        if (r && (n = this.offset), !this.noAssert) {
                            if ("number" == typeof t) t = e.fromNumber(t);
                            else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
                            if ("number" != typeof n || n % 1 !== 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                            if (n >>>= 0, 0 > n || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                        }
                        "number" == typeof t && (t = e.fromNumber(t)), n += 8;
                        var i = this.buffer.byteLength;
                        return n > i && this.resize((i *= 2) > n ? i : n), n -= 8, this.littleEndian ? (this.view.setInt32(n, t.low, !0), this.view.setInt32(n + 4, t.high, !0)) : (this.view.setInt32(n, t.high, !1), this.view.setInt32(n + 4, t.low, !1)), r && (this.offset += 8), this
                    }, o.writeLong = o.writeInt64, o.readInt64 = function(t) {
                        var n = "undefined" == typeof t;
                        if (n && (t = this.offset), !this.noAssert) {
                            if ("number" != typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                            if (t >>>= 0, 0 > t || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength)
                        }
                        var r = this.littleEndian ? new e(this.view.getInt32(t, !0), this.view.getInt32(t + 4, !0), !1) : new e(this.view.getInt32(t + 4, !1), this.view.getInt32(t, !1), !1);
                        return n && (this.offset += 8), r
                    }, o.readLong = o.readInt64, o.writeUint64 = function(t, n) {
                        var r = "undefined" == typeof n;
                        if (r && (n = this.offset), !this.noAssert) {
                            if ("number" == typeof t) t = e.fromNumber(t);
                            else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
                            if ("number" != typeof n || n % 1 !== 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                            if (n >>>= 0, 0 > n || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                        }
                        "number" == typeof t && (t = e.fromNumber(t)), n += 8;
                        var i = this.buffer.byteLength;
                        return n > i && this.resize((i *= 2) > n ? i : n), n -= 8, this.littleEndian ? (this.view.setInt32(n, t.low, !0), this.view.setInt32(n + 4, t.high, !0)) : (this.view.setInt32(n, t.high, !1), this.view.setInt32(n + 4, t.low, !1)), r && (this.offset += 8), this
                    }, o.readUint64 = function(t) {
                        var n = "undefined" == typeof t;
                        if (n && (t = this.offset), !this.noAssert) {
                            if ("number" != typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                            if (t >>>= 0, 0 > t || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength)
                        }
                        var r = this.littleEndian ? new e(this.view.getInt32(t, !0), this.view.getInt32(t + 4, !0), !0) : new e(this.view.getInt32(t + 4, !1), this.view.getInt32(t, !1), !0);
                        return n && (this.offset += 8), r
                    }), o.writeFloat32 = function(e, t) {
                        var n = "undefined" == typeof t;
                        if (n && (t = this.offset), !this.noAssert) {
                            if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
                            if ("number" != typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                            if (t >>>= 0, 0 > t || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                        }
                        t += 4;
                        var r = this.buffer.byteLength;
                        return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, this.view.setFloat32(t, e, this.littleEndian), n && (this.offset += 4), this
                    }, o.writeFloat = o.writeFloat32, o.readFloat32 = function(e) {
                        var t = "undefined" == typeof e;
                        if (t && (e = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                            if (e >>>= 0, 0 > e || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                        }
                        var n = this.view.getFloat32(e, this.littleEndian);
                        return t && (this.offset += 4), n
                    }, o.readFloat = o.readFloat32, o.writeFloat64 = function(e, t) {
                        var n = "undefined" == typeof t;
                        if (n && (t = this.offset), !this.noAssert) {
                            if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
                            if ("number" != typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                            if (t >>>= 0, 0 > t || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                        }
                        t += 8;
                        var r = this.buffer.byteLength;
                        return t > r && this.resize((r *= 2) > t ? r : t), t -= 8, this.view.setFloat64(t, e, this.littleEndian), n && (this.offset += 8), this
                    }, o.writeDouble = o.writeFloat64, o.readFloat64 = function(e) {
                        var t = "undefined" == typeof e;
                        if (t && (e = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                            if (e >>>= 0, 0 > e || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
                        }
                        var n = this.view.getFloat64(e, this.littleEndian);
                        return t && (this.offset += 8), n
                    }, o.readDouble = o.readFloat64, r.MAX_VARINT32_BYTES = 5, r.calculateVarint32 = function(e) {
                        return e >>>= 0, 128 > e ? 1 : 16384 > e ? 2 : 1 << 21 > e ? 3 : 1 << 28 > e ? 4 : 5
                    }, r.zigZagEncode32 = function(e) {
                        return ((e |= 0) << 1 ^ e >> 31) >>> 0
                    }, r.zigZagDecode32 = function(e) {
                        return e >>> 1 ^ -(1 & e) | 0
                    }, o.writeVarint32 = function(e, t) {
                        var n = "undefined" == typeof t;
                        if (n && (t = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                            if (e |= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                            if (t >>>= 0, 0 > t || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                        }
                        var i, o = r.calculateVarint32(e);
                        t += o;
                        var a = this.buffer.byteLength;
                        return t > a && this.resize((a *= 2) > t ? a : t), t -= o, this.view.setUint8(t, i = 128 | e), e >>>= 0, e >= 128 ? (i = e >> 7 | 128, this.view.setUint8(t + 1, i), e >= 16384 ? (i = e >> 14 | 128, this.view.setUint8(t + 2, i), e >= 1 << 21 ? (i = e >> 21 | 128, this.view.setUint8(t + 3, i), e >= 1 << 28 ? (this.view.setUint8(t + 4, e >> 28 & 15), o = 5) : (this.view.setUint8(t + 3, 127 & i), o = 4)) : (this.view.setUint8(t + 2, 127 & i), o = 3)) : (this.view.setUint8(t + 1, 127 & i), o = 2)) : (this.view.setUint8(t, 127 & i), o = 1), n ? (this.offset += o, this) : o
                    }, o.writeVarint32ZigZag = function(e, t) {
                        return this.writeVarint32(r.zigZagEncode32(e), t)
                    }, o.readVarint32 = function(e) {
                        var t = "undefined" == typeof e;
                        if (t && (e = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                            if (e >>>= 0, 0 > e || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                        }
                        var n, r, i = 0,
                            o = 0;
                        do {
                            if (r = e + i, !this.noAssert && r > this.limit) {
                                var a = Error("Truncated");
                                throw a.truncated = !0, a
                            }
                            n = this.view.getUint8(r), 5 > i && (o |= (127 & n) << 7 * i >>> 0), ++i
                        } while (128 === (128 & n));
                        return o = 0 | o, t ? (this.offset += i, o) : {
                            value: o,
                            length: i
                        }
                    }, o.readVarint32ZigZag = function(e) {
                        var t = this.readVarint32(e);
                        return "object" == typeof t ? t.value = r.zigZagDecode32(t.value) : t = r.zigZagDecode32(t), t
                    }, e && (r.MAX_VARINT64_BYTES = 10, r.calculateVarint64 = function(t) {
                        "number" == typeof t && (t = e.fromNumber(t));
                        var n = t.toInt() >>> 0,
                            r = t.shiftRightUnsigned(28).toInt() >>> 0,
                            i = t.shiftRightUnsigned(56).toInt() >>> 0;
                        return 0 == i ? 0 == r ? 16384 > n ? 128 > n ? 1 : 2 : 1 << 21 > n ? 3 : 4 : 16384 > r ? 128 > r ? 5 : 6 : 1 << 21 > r ? 7 : 8 : 128 > i ? 9 : 10
                    }, r.zigZagEncode64 = function(t) {
                        return "number" == typeof t ? t = e.fromNumber(t, !1) : t.unsigned !== !1 && (t = t.toSigned()), t.shiftLeft(1).xor(t.shiftRight(63)).toUnsigned()
                    }, r.zigZagDecode64 = function(t) {
                        return "number" == typeof t ? t = e.fromNumber(t, !1) : t.unsigned !== !1 && (t = t.toSigned()), t.shiftRightUnsigned(1).xor(t.and(e.ONE).toSigned().negate()).toSigned()
                    }, o.writeVarint64 = function(t, n) {
                        var i = "undefined" == typeof n;
                        if (i && (n = this.offset), !this.noAssert) {
                            if ("number" == typeof t) t = e.fromNumber(t);
                            else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
                            if ("number" != typeof n || n % 1 !== 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                            if (n >>>= 0, 0 > n || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                        }
                        "number" == typeof t ? t = e.fromNumber(t, !1) : t.unsigned !== !1 && (t = t.toSigned());
                        var o = r.calculateVarint64(t),
                            a = t.toInt() >>> 0,
                            s = t.shiftRightUnsigned(28).toInt() >>> 0,
                            u = t.shiftRightUnsigned(56).toInt() >>> 0;
                        n += o;
                        var f = this.buffer.byteLength;
                        switch (n > f && this.resize((f *= 2) > n ? f : n), n -= o, o) {
                            case 10:
                                this.view.setUint8(n + 9, u >>> 7 & 1);
                            case 9:
                                this.view.setUint8(n + 8, 9 !== o ? 128 | u : 127 & u);
                            case 8:
                                this.view.setUint8(n + 7, 8 !== o ? s >>> 21 | 128 : s >>> 21 & 127);
                            case 7:
                                this.view.setUint8(n + 6, 7 !== o ? s >>> 14 | 128 : s >>> 14 & 127);
                            case 6:
                                this.view.setUint8(n + 5, 6 !== o ? s >>> 7 | 128 : s >>> 7 & 127);
                            case 5:
                                this.view.setUint8(n + 4, 5 !== o ? 128 | s : 127 & s);
                            case 4:
                                this.view.setUint8(n + 3, 4 !== o ? a >>> 21 | 128 : a >>> 21 & 127);
                            case 3:
                                this.view.setUint8(n + 2, 3 !== o ? a >>> 14 | 128 : a >>> 14 & 127);
                            case 2:
                                this.view.setUint8(n + 1, 2 !== o ? a >>> 7 | 128 : a >>> 7 & 127);
                            case 1:
                                this.view.setUint8(n, 1 !== o ? 128 | a : 127 & a)
                        }
                        return i ? (this.offset += o, this) : o
                    }, o.writeVarint64ZigZag = function(e, t) {
                        return this.writeVarint64(r.zigZagEncode64(e), t)
                    }, o.readVarint64 = function(t) {
                        var n = "undefined" == typeof t;
                        if (n && (t = this.offset), !this.noAssert) {
                            if ("number" != typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                            if (t >>>= 0, 0 > t || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
                        }
                        var r = t,
                            i = 0,
                            o = 0,
                            a = 0,
                            s = 0;
                        if (s = this.view.getUint8(t++), i = 127 & s, 128 & s && (s = this.view.getUint8(t++), i |= (127 & s) << 7, 128 & s && (s = this.view.getUint8(t++), i |= (127 & s) << 14, 128 & s && (s = this.view.getUint8(t++), i |= (127 & s) << 21, 128 & s && (s = this.view.getUint8(t++), o = 127 & s, 128 & s && (s = this.view.getUint8(t++), o |= (127 & s) << 7, 128 & s && (s = this.view.getUint8(t++), o |= (127 & s) << 14, 128 & s && (s = this.view.getUint8(t++), o |= (127 & s) << 21, 128 & s && (s = this.view.getUint8(t++), a = 127 & s, 128 & s && (s = this.view.getUint8(t++), a |= (127 & s) << 7, 128 & s)))))))))) throw Error("Buffer overrun");
                        var u = e.fromBits(i | o << 28, o >>> 4 | a << 24, !1);
                        return n ? (this.offset = t, u) : {
                            value: u,
                            length: t - r
                        }
                    }, o.readVarint64ZigZag = function(t) {
                        var n = this.readVarint64(t);
                        return n && n.value instanceof e ? n.value = r.zigZagDecode64(n.value) : n = r.zigZagDecode64(n), n
                    }), o.writeCString = function(e, n) {
                        var r = "undefined" == typeof n;
                        r && (n = this.offset);
                        var i, o = e.length;
                        if (!this.noAssert) {
                            if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                            for (i = 0; o > i; ++i)
                                if (0 === e.charCodeAt(i)) throw RangeError("Illegal str: Contains NULL-characters");
                            if ("number" != typeof n || n % 1 !== 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                            if (n >>>= 0, 0 > n || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                        }
                        var a = n;
                        o = f.calculateUTF16asUTF8(t(e))[1], n += o + 1;
                        var s = this.buffer.byteLength;
                        return n > s && this.resize((s *= 2) > n ? s : n), n -= o + 1, f.encodeUTF16toUTF8(t(e), function(e) {
                            this.view.setUint8(n++, e)
                        }.bind(this)), this.view.setUint8(n++, 0), r ? (this.offset = n - a, this) : o
                    }, o.readCString = function(e) {
                        var t = "undefined" == typeof e;
                        if (t && (e = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                            if (e >>>= 0, 0 > e || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                        }
                        var r, i = e,
                            o = -1;
                        return f.decodeUTF8toUTF16(function() {
                            if (0 === o) return null;
                            if (e >= this.limit) throw RangeError("Illegal range: Truncated data, " + e + " < " + this.limit);
                            return 0 === (o = this.view.getUint8(e++)) ? null : o
                        }.bind(this), r = n(), !0), t ? (this.offset = e, r()) : {
                            string: r(),
                            length: e - i
                        }
                    }, o.writeIString = function(e, n) {
                        var r = "undefined" == typeof n;
                        if (r && (n = this.offset), !this.noAssert) {
                            if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                            if ("number" != typeof n || n % 1 !== 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                            if (n >>>= 0, 0 > n || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                        }
                        var i, o = n;
                        i = f.calculateUTF16asUTF8(t(e), this.noAssert)[1], n += 4 + i;
                        var a = this.buffer.byteLength;
                        if (n > a && this.resize((a *= 2) > n ? a : n), n -= 4 + i, this.view.setUint32(n, i, this.littleEndian), n += 4, f.encodeUTF16toUTF8(t(e), function(e) {
                                this.view.setUint8(n++, e)
                            }.bind(this)), n !== o + 4 + i) throw RangeError("Illegal range: Truncated data, " + n + " == " + (n + 4 + i));
                        return r ? (this.offset = n, this) : n - o
                    }, o.readIString = function(e) {
                        var t = "undefined" == typeof e;
                        if (t && (e = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                            if (e >>>= 0, 0 > e || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                        }
                        var r, i = 0,
                            o = e;
                        i = this.view.getUint32(e, this.littleEndian), e += 4;
                        var a, s = e + i;
                        return f.decodeUTF8toUTF16(function() {
                            return s > e ? this.view.getUint8(e++) : null
                        }.bind(this), a = n(), this.noAssert), r = a(), t ? (this.offset = e, r) : {
                            string: r,
                            length: e - o
                        }
                    }, r.METRICS_CHARS = "c", r.METRICS_BYTES = "b", o.writeUTF8String = function(e, n) {
                        var r = "undefined" == typeof n;
                        if (r && (n = this.offset), !this.noAssert) {
                            if ("number" != typeof n || n % 1 !== 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                            if (n >>>= 0, 0 > n || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                        }
                        var i, o = n;
                        i = f.calculateUTF16asUTF8(t(e))[1], n += i;
                        var a = this.buffer.byteLength;
                        return n > a && this.resize((a *= 2) > n ? a : n), n -= i, f.encodeUTF16toUTF8(t(e), function(e) {
                            this.view.setUint8(n++, e)
                        }.bind(this)), r ? (this.offset = n, this) : n - o
                    }, o.writeString = o.writeUTF8String, r.calculateUTF8Chars = function(e) {
                        return f.calculateUTF16asUTF8(t(e))[0]
                    }, r.calculateUTF8Bytes = function(e) {
                        return f.calculateUTF16asUTF8(t(e))[1]
                    }, o.readUTF8String = function(e, t, i) {
                        "number" == typeof t && (i = t, t = void 0);
                        var o = "undefined" == typeof i;
                        if (o && (i = this.offset), "undefined" == typeof t && (t = r.METRICS_CHARS), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal length: " + e + " (not an integer)");
                            if (e |= 0, "number" != typeof i || i % 1 !== 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
                            if (i >>>= 0, 0 > i || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
                        }
                        var a, s = 0,
                            u = i;
                        if (t === r.METRICS_CHARS) {
                            if (a = n(), f.decodeUTF8(function() {
                                    return e > s && i < this.limit ? this.view.getUint8(i++) : null
                                }.bind(this), function(e) {
                                    ++s, f.UTF8toUTF16(e, a)
                                }.bind(this)), s !== e) throw RangeError("Illegal range: Truncated data, " + s + " == " + e);
                            return o ? (this.offset = i, a()) : {
                                string: a(),
                                length: i - u
                            }
                        }
                        if (t === r.METRICS_BYTES) {
                            if (!this.noAssert) {
                                if ("number" != typeof i || i % 1 !== 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
                                if (i >>>= 0, 0 > i || i + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+" + e + ") <= " + this.buffer.byteLength)
                            }
                            var l = i + e;
                            if (f.decodeUTF8toUTF16(function() {
                                    return l > i ? this.view.getUint8(i++) : null
                                }.bind(this), a = n(), this.noAssert), i !== l) throw RangeError("Illegal range: Truncated data, " + i + " == " + l);
                            return o ? (this.offset = i, a()) : {
                                string: a(),
                                length: i - u
                            }
                        }
                        throw TypeError("Unsupported metrics: " + t)
                    }, o.readString = o.readUTF8String, o.writeVString = function(e, n) {
                        var i = "undefined" == typeof n;
                        if (i && (n = this.offset), !this.noAssert) {
                            if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                            if ("number" != typeof n || n % 1 !== 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                            if (n >>>= 0, 0 > n || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                        }
                        var o, a, s = n;
                        o = f.calculateUTF16asUTF8(t(e), this.noAssert)[1], a = r.calculateVarint32(o), n += a + o;
                        var u = this.buffer.byteLength;
                        if (n > u && this.resize((u *= 2) > n ? u : n), n -= a + o, n += this.writeVarint32(o, n), f.encodeUTF16toUTF8(t(e), function(e) {
                                this.view.setUint8(n++, e)
                            }.bind(this)), n !== s + o + a) throw RangeError("Illegal range: Truncated data, " + n + " == " + (n + o + a));
                        return i ? (this.offset = n, this) : n - s
                    }, o.readVString = function(e) {
                        var t = "undefined" == typeof e;
                        if (t && (e = this.offset), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                            if (e >>>= 0, 0 > e || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                        }
                        var r, i = this.readVarint32(e),
                            o = e;
                        e += i.length, i = i.value;
                        var a = e + i,
                            s = n();
                        return f.decodeUTF8toUTF16(function() {
                            return a > e ? this.view.getUint8(e++) : null
                        }.bind(this), s, this.noAssert), r = s(), t ? (this.offset = e, r) : {
                            string: r,
                            length: e - o
                        }
                    }, o.append = function(e, t, n) {
                        ("number" == typeof t || "string" != typeof t) && (n = t, t = void 0);
                        var i = "undefined" == typeof n;
                        if (i && (n = this.offset), !this.noAssert) {
                            if ("number" != typeof n || n % 1 !== 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                            if (n >>>= 0, 0 > n || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                        }
                        e instanceof r || (e = r.wrap(e, t));
                        var o = e.limit - e.offset;
                        if (0 >= o) return this;
                        n += o;
                        var a = this.buffer.byteLength;
                        return n > a && this.resize((a *= 2) > n ? a : n), n -= o, new Uint8Array(this.buffer, n).set(new Uint8Array(e.buffer).subarray(e.offset, e.limit)), e.offset += o, i && (this.offset += o), this
                    }, o.appendTo = function(e, t) {
                        return e.append(this, t), this
                    }, o.assert = function(e) {
                        return this.noAssert = !e, this
                    }, o.capacity = function() {
                        return this.buffer.byteLength
                    }, o.clear = function() {
                        return this.offset = 0, this.limit = this.buffer.byteLength, this.markedOffset = -1, this
                    }, o.clone = function(e) {
                        var t = new r(0, this.littleEndian, this.noAssert);
                        if (e) {
                            var n = new ArrayBuffer(this.buffer.byteLength);
                            new Uint8Array(n).set(this.buffer), t.buffer = n, t.view = new DataView(n)
                        } else t.buffer = this.buffer, t.view = this.view;
                        return t.offset = this.offset, t.markedOffset = this.markedOffset, t.limit = this.limit, t
                    }, o.compact = function(e, t) {
                        if ("undefined" == typeof e && (e = this.offset), "undefined" == typeof t && (t = this.limit), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
                            if (e >>>= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal end: Not an integer");
                            if (t >>>= 0, 0 > e || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                        }
                        if (0 === e && t === this.buffer.byteLength) return this;
                        var n = t - e;
                        if (0 === n) return this.buffer = a, this.view = null, this.markedOffset >= 0 && (this.markedOffset -= e), this.offset = 0, this.limit = 0, this;
                        var r = new ArrayBuffer(n);
                        return new Uint8Array(r).set(new Uint8Array(this.buffer).subarray(e, t)), this.buffer = r, this.view = new DataView(r), this.markedOffset >= 0 && (this.markedOffset -= e), this.offset = 0, this.limit = n, this
                    }, o.copy = function(e, t) {
                        if ("undefined" == typeof e && (e = this.offset), "undefined" == typeof t && (t = this.limit), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
                            if (e >>>= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal end: Not an integer");
                            if (t >>>= 0, 0 > e || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                        }
                        if (e === t) return new r(0, this.littleEndian, this.noAssert);
                        var n = t - e,
                            i = new r(n, this.littleEndian, this.noAssert);
                        return i.offset = 0, i.limit = n, i.markedOffset >= 0 && (i.markedOffset -= e), this.copyTo(i, 0, e, t), i
                    }, o.copyTo = function(e, t, n, i) {
                        var o, a;
                        if (!this.noAssert && !r.isByteBuffer(e)) throw TypeError("Illegal target: Not a ByteBuffer");
                        if (t = (a = "undefined" == typeof t) ? e.offset : 0 | t, n = (o = "undefined" == typeof n) ? this.offset : 0 | n, i = "undefined" == typeof i ? this.limit : 0 | i, 0 > t || t > e.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + t + " <= " + e.buffer.byteLength);
                        if (0 > n || i > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + n + " <= " + this.buffer.byteLength);
                        var s = i - n;
                        return 0 === s ? e : (e.ensureCapacity(t + s), new Uint8Array(e.buffer).set(new Uint8Array(this.buffer).subarray(n, i), t), o && (this.offset += s), a && (e.offset += s), this)
                    }, o.ensureCapacity = function(e) {
                        var t = this.buffer.byteLength;
                        return e > t ? this.resize((t *= 2) > e ? t : e) : this
                    }, o.fill = function(e, t, n) {
                        var r = "undefined" == typeof t;
                        if (r && (t = this.offset), "string" == typeof e && e.length > 0 && (e = e.charCodeAt(0)), "undefined" == typeof t && (t = this.offset), "undefined" == typeof n && (n = this.limit), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                            if (e |= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
                            if (t >>>= 0, "number" != typeof n || n % 1 !== 0) throw TypeError("Illegal end: Not an integer");
                            if (n >>>= 0, 0 > t || t > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + n + " <= " + this.buffer.byteLength)
                        }
                        if (t >= n) return this;
                        for (; n > t;) this.view.setUint8(t++, e);
                        return r && (this.offset = t), this
                    }, o.flip = function() {
                        return this.limit = this.offset, this.offset = 0, this
                    }, o.mark = function(e) {
                        if (e = "undefined" == typeof e ? this.offset : e, !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                            if (e >>>= 0, 0 > e || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                        }
                        return this.markedOffset = e, this
                    }, o.order = function(e) {
                        if (!this.noAssert && "boolean" != typeof e) throw TypeError("Illegal littleEndian: Not a boolean");
                        return this.littleEndian = !!e, this
                    }, o.LE = function(e) {
                        return this.littleEndian = "undefined" != typeof e ? !!e : !0, this
                    }, o.BE = function(e) {
                        return this.littleEndian = "undefined" != typeof e ? !e : !1, this
                    }, o.prepend = function(e, t, n) {
                        ("number" == typeof t || "string" != typeof t) && (n = t, t = void 0);
                        var i = "undefined" == typeof n;
                        if (i && (n = this.offset), !this.noAssert) {
                            if ("number" != typeof n || n % 1 !== 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                            if (n >>>= 0, 0 > n || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                        }
                        e instanceof r || (e = r.wrap(e, t));
                        var o = e.limit - e.offset;
                        if (0 >= o) return this;
                        var a, s = o - n;
                        if (s > 0) {
                            var u = new ArrayBuffer(this.buffer.byteLength + s);
                            a = new Uint8Array(u), a.set(new Uint8Array(this.buffer).subarray(n, this.buffer.byteLength), o), this.buffer = u, this.view = new DataView(u), this.offset += s, this.markedOffset >= 0 && (this.markedOffset += s), this.limit += s, n += s
                        } else a = new Uint8Array(this.buffer);
                        return a.set(new Uint8Array(e.buffer).subarray(e.offset, e.limit), n - o), e.offset = e.limit, i && (this.offset -= o), this
                    }, o.prependTo = function(e, t) {
                        return e.prepend(this, t), this
                    }, o.printDebug = function(e) {
                        "function" != typeof e && (e = console.log.bind(console)), e(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0))
                    }, o.remaining = function() {
                        return this.limit - this.offset
                    }, o.reset = function() {
                        return this.markedOffset >= 0 ? (this.offset = this.markedOffset, this.markedOffset = -1) : this.offset = 0, this
                    }, o.resize = function(e) {
                        if (!this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal capacity: " + e + " (not an integer)");
                            if (e |= 0, 0 > e) throw RangeError("Illegal capacity: 0 <= " + e)
                        }
                        if (this.buffer.byteLength < e) {
                            var t = new ArrayBuffer(e);
                            new Uint8Array(t).set(new Uint8Array(this.buffer)), this.buffer = t, this.view = new DataView(t)
                        }
                        return this
                    }, o.reverse = function(e, t) {
                        if ("undefined" == typeof e && (e = this.offset), "undefined" == typeof t && (t = this.limit), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
                            if (e >>>= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal end: Not an integer");
                            if (t >>>= 0, 0 > e || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                        }
                        return e === t ? this : (Array.prototype.reverse.call(new Uint8Array(this.buffer).subarray(e, t)), this.view = new DataView(this.buffer), this)
                    }, o.skip = function(e) {
                        if (!this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal length: " + e + " (not an integer)");
                            e |= 0
                        }
                        var t = this.offset + e;
                        if (!this.noAssert && (0 > t || t > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + e + " <= " + this.buffer.byteLength);
                        return this.offset = t, this
                    }, o.slice = function(e, t) {
                        if ("undefined" == typeof e && (e = this.offset), "undefined" == typeof t && (t = this.limit), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
                            if (e >>>= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal end: Not an integer");
                            if (t >>>= 0, 0 > e || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                        }
                        var n = this.clone();
                        return n.offset = e, n.limit = t, n
                    }, o.toBuffer = function(e) {
                        var t = this.offset,
                            n = this.limit;
                        if (t > n) {
                            var r = t;
                            t = n, n = r
                        }
                        if (!this.noAssert) {
                            if ("number" != typeof t || t % 1 !== 0) throw TypeError("Illegal offset: Not an integer");
                            if (t >>>= 0, "number" != typeof n || n % 1 !== 0) throw TypeError("Illegal limit: Not an integer");
                            if (n >>>= 0, 0 > t || t > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + n + " <= " + this.buffer.byteLength)
                        }
                        if (!e && 0 === t && n === this.buffer.byteLength) return this.buffer;
                        if (t === n) return a;
                        var i = new ArrayBuffer(n - t);
                        return new Uint8Array(i).set(new Uint8Array(this.buffer).subarray(t, n), 0), i
                    }, o.toArrayBuffer = o.toBuffer, o.toString = function(e, t, n) {
                        if ("undefined" == typeof e) return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";

                        switch ("number" == typeof e && (e = "utf8", t = e, n = t), e) {
                            case "utf8":
                                return this.toUTF8(t, n);
                            case "base64":
                                return this.toBase64(t, n);
                            case "hex":
                                return this.toHex(t, n);
                            case "binary":
                                return this.toBinary(t, n);
                            case "debug":
                                return this.toDebug();
                            case "columns":
                                return this.toColumns();
                            default:
                                throw Error("Unsupported encoding: " + e)
                        }
                    };
                    var u = function() {
                        for (var e = {}, t = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47], n = [], r = 0, i = t.length; i > r; ++r) n[t[r]] = r;
                        return e.encode = function(e, n) {
                            for (var r, i; null !== (r = e());) n(t[r >> 2 & 63]), i = (3 & r) << 4, null !== (r = e()) ? (i |= r >> 4 & 15, n(t[63 & (i | r >> 4 & 15)]), i = (15 & r) << 2, null !== (r = e()) ? (n(t[63 & (i | r >> 6 & 3)]), n(t[63 & r])) : (n(t[63 & i]), n(61))) : (n(t[63 & i]), n(61), n(61))
                        }, e.decode = function(e, t) {
                            function r(e) {
                                throw Error("Illegal character code: " + e)
                            }
                            for (var i, o, a; null !== (i = e());)
                                if (o = n[i], "undefined" == typeof o && r(i), null !== (i = e()) && (a = n[i], "undefined" == typeof a && r(i), t(o << 2 >>> 0 | (48 & a) >> 4), null !== (i = e()))) {
                                    if (o = n[i], "undefined" == typeof o) {
                                        if (61 === i) break;
                                        r(i)
                                    }
                                    if (t((15 & a) << 4 >>> 0 | (60 & o) >> 2), null !== (i = e())) {
                                        if (a = n[i], "undefined" == typeof a) {
                                            if (61 === i) break;
                                            r(i)
                                        }
                                        t((3 & o) << 6 >>> 0 | a)
                                    }
                                }
                        }, e.test = function(e) {
                            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
                        }, e
                    }();
                    o.toBase64 = function(e, t) {
                        if ("undefined" == typeof e && (e = this.offset), "undefined" == typeof t && (t = this.limit), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
                            if (e >>>= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal end: Not an integer");
                            if (t >>>= 0, 0 > e || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                        }
                        var r;
                        return u.encode(function() {
                            return t > e ? this.view.getUint8(e++) : null
                        }.bind(this), r = n()), r()
                    }, r.fromBase64 = function(e, n, i) {
                        if (!i) {
                            if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                            if (e.length % 4 !== 0) throw TypeError("Illegal str: Length not a multiple of 4")
                        }
                        var o = new r(e.length / 4 * 3, n, i),
                            a = 0;
                        return u.decode(t(e), function(e) {
                            o.view.setUint8(a++, e)
                        }), o.limit = a, o
                    }, r.btoa = function(e) {
                        return r.fromBinary(e).toBase64()
                    }, r.atob = function(e) {
                        return r.fromBase64(e).toBinary()
                    }, o.toBinary = function(e, t) {
                        if (e = "undefined" == typeof e ? this.offset : e, t = "undefined" == typeof t ? this.limit : t, !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
                            if (e >>>= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal end: Not an integer");
                            if (t >>>= 0, 0 > e || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                        }
                        if (e === t) return "";
                        for (var n = [], r = []; t > e;) n.push(this.view.getUint8(e++)), n.length >= 1024 && (r.push(String.fromCharCode.apply(String, n)), n = []);
                        return r.join("") + String.fromCharCode.apply(String, n)
                    }, r.fromBinary = function(e, t, n) {
                        if (!n && "string" != typeof e) throw TypeError("Illegal str: Not a string");
                        for (var i, o = 0, a = e.length, s = new r(a, t, n); a > o;) {
                            if (i = e.charCodeAt(o), !n && i > 255) throw RangeError("Illegal charCode at " + o + ": 0 <= " + i + " <= 255");
                            s.view.setUint8(o++, i)
                        }
                        return s.limit = a, s
                    }, o.toDebug = function(e) {
                        for (var t, n = -1, r = this.buffer.byteLength, i = "", o = "", a = ""; r > n;) {
                            if (-1 !== n && (t = this.view.getUint8(n), i += 16 > t ? "0" + t.toString(16).toUpperCase() : t.toString(16).toUpperCase(), e && (o += t > 32 && 127 > t ? String.fromCharCode(t) : ".")), ++n, e && n > 0 && n % 16 === 0 && n !== r) {
                                for (; i.length < 51;) i += " ";
                                a += i + o + "\n", i = o = ""
                            }
                            i += n === this.offset && n === this.limit ? n === this.markedOffset ? "!" : "|" : n === this.offset ? n === this.markedOffset ? "[" : "<" : n === this.limit ? n === this.markedOffset ? "]" : ">" : n === this.markedOffset ? "'" : e || 0 !== n && n !== r ? " " : ""
                        }
                        if (e && " " !== i) {
                            for (; i.length < 51;) i += " ";
                            a += i + o + "\n"
                        }
                        return e ? a : i
                    }, r.fromDebug = function(e, t, n) {
                        for (var i, o, a = e.length, s = new r((a + 1) / 3 | 0, t, n), u = 0, f = 0, l = !1, h = !1, c = !1, p = !1, d = !1; a > u;) {
                            switch (i = e.charAt(u++)) {
                                case "!":
                                    if (!n) {
                                        if (h || c || p) {
                                            d = !0;
                                            break
                                        }
                                        h = c = p = !0
                                    }
                                    s.offset = s.markedOffset = s.limit = f, l = !1;
                                    break;
                                case "|":
                                    if (!n) {
                                        if (h || p) {
                                            d = !0;
                                            break
                                        }
                                        h = p = !0
                                    }
                                    s.offset = s.limit = f, l = !1;
                                    break;
                                case "[":
                                    if (!n) {
                                        if (h || c) {
                                            d = !0;
                                            break
                                        }
                                        h = c = !0
                                    }
                                    s.offset = s.markedOffset = f, l = !1;
                                    break;
                                case "<":
                                    if (!n) {
                                        if (h) {
                                            d = !0;
                                            break
                                        }
                                        h = !0
                                    }
                                    s.offset = f, l = !1;
                                    break;
                                case "]":
                                    if (!n) {
                                        if (p || c) {
                                            d = !0;
                                            break
                                        }
                                        p = c = !0
                                    }
                                    s.limit = s.markedOffset = f, l = !1;
                                    break;
                                case ">":
                                    if (!n) {
                                        if (p) {
                                            d = !0;
                                            break
                                        }
                                        p = !0
                                    }
                                    s.limit = f, l = !1;
                                    break;
                                case "'":
                                    if (!n) {
                                        if (c) {
                                            d = !0;
                                            break
                                        }
                                        c = !0
                                    }
                                    s.markedOffset = f, l = !1;
                                    break;
                                case " ":
                                    l = !1;
                                    break;
                                default:
                                    if (!n && l) {
                                        d = !0;
                                        break
                                    }
                                    if (o = parseInt(i + e.charAt(u++), 16), !n && (isNaN(o) || 0 > o || o > 255)) throw TypeError("Illegal str: Not a debug encoded string");
                                    s.view.setUint8(f++, o), l = !0
                            }
                            if (d) throw TypeError("Illegal str: Invalid symbol at " + u)
                        }
                        if (!n) {
                            if (!h || !p) throw TypeError("Illegal str: Missing offset or limit");
                            if (f < s.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + f + " < " + a)
                        }
                        return s
                    }, o.toHex = function(e, t) {
                        if (e = "undefined" == typeof e ? this.offset : e, t = "undefined" == typeof t ? this.limit : t, !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
                            if (e >>>= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal end: Not an integer");
                            if (t >>>= 0, 0 > e || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                        }
                        for (var n, r = new Array(t - e); t > e;) n = this.view.getUint8(e++), 16 > n ? r.push("0", n.toString(16)) : r.push(n.toString(16));
                        return r.join("")
                    }, r.fromHex = function(e, t, n) {
                        if (!n) {
                            if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                            if (e.length % 2 !== 0) throw TypeError("Illegal str: Length not a multiple of 2")
                        }
                        for (var i, o = e.length, a = new r(o / 2 | 0, t), s = 0, u = 0; o > s; s += 2) {
                            if (i = parseInt(e.substring(s, s + 2), 16), !n && (!isFinite(i) || 0 > i || i > 255)) throw TypeError("Illegal str: Contains non-hex characters");
                            a.view.setUint8(u++, i)
                        }
                        return a.limit = u, a
                    };
                    var f = function() {
                        var e = {};
                        return e.MAX_CODEPOINT = 1114111, e.encodeUTF8 = function(e, t) {
                            var n = null;
                            for ("number" == typeof e && (n = e, e = function() {
                                    return null
                                }); null !== n || null !== (n = e());) 128 > n ? t(127 & n) : 2048 > n ? (t(n >> 6 & 31 | 192), t(63 & n | 128)) : 65536 > n ? (t(n >> 12 & 15 | 224), t(n >> 6 & 63 | 128), t(63 & n | 128)) : (t(n >> 18 & 7 | 240), t(n >> 12 & 63 | 128), t(n >> 6 & 63 | 128), t(63 & n | 128)), n = null
                        }, e.decodeUTF8 = function(e, t) {
                            for (var n, r, i, o, a = function(e) {
                                    e = e.slice(0, e.indexOf(null));
                                    var t = Error(e.toString());
                                    throw t.name = "TruncatedError", t.bytes = e, t
                                }; null !== (n = e());)
                                if (0 === (128 & n)) t(n);
                                else if (192 === (224 & n)) null === (r = e()) && a([n, r]), t((31 & n) << 6 | 63 & r);
                            else if (224 === (240 & n))(null === (r = e()) || null === (i = e())) && a([n, r, i]), t((15 & n) << 12 | (63 & r) << 6 | 63 & i);
                            else {
                                if (240 !== (248 & n)) throw RangeError("Illegal starting byte: " + n);
                                (null === (r = e()) || null === (i = e()) || null === (o = e())) && a([n, r, i, o]), t((7 & n) << 18 | (63 & r) << 12 | (63 & i) << 6 | 63 & o)
                            }
                        }, e.UTF16toUTF8 = function(e, t) {
                            for (var n, r = null;;) {
                                if (null === (n = null !== r ? r : e())) break;
                                n >= 55296 && 57343 >= n && null !== (r = e()) && r >= 56320 && 57343 >= r ? (t(1024 * (n - 55296) + r - 56320 + 65536), r = null) : t(n)
                            }
                            null !== r && t(r)
                        }, e.UTF8toUTF16 = function(e, t) {
                            var n = null;
                            for ("number" == typeof e && (n = e, e = function() {
                                    return null
                                }); null !== n || null !== (n = e());) 65535 >= n ? t(n) : (n -= 65536, t((n >> 10) + 55296), t(n % 1024 + 56320)), n = null
                        }, e.encodeUTF16toUTF8 = function(t, n) {
                            e.UTF16toUTF8(t, function(t) {
                                e.encodeUTF8(t, n)
                            })
                        }, e.decodeUTF8toUTF16 = function(t, n) {
                            e.decodeUTF8(t, function(t) {
                                e.UTF8toUTF16(t, n)
                            })
                        }, e.calculateCodePoint = function(e) {
                            return 128 > e ? 1 : 2048 > e ? 2 : 65536 > e ? 3 : 4
                        }, e.calculateUTF8 = function(t) {
                            for (var n, r = 0; null !== (n = t());) r += e.calculateCodePoint(n);
                            return r
                        }, e.calculateUTF16asUTF8 = function(t) {
                            var n = 0,
                                r = 0;
                            return e.UTF16toUTF8(t, function(t) {
                                ++n, r += e.calculateCodePoint(t)
                            }), [n, r]
                        }, e
                    }();
                    return o.toUTF8 = function(e, t) {
                        if ("undefined" == typeof e && (e = this.offset), "undefined" == typeof t && (t = this.limit), !this.noAssert) {
                            if ("number" != typeof e || e % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
                            if (e >>>= 0, "number" != typeof t || t % 1 !== 0) throw TypeError("Illegal end: Not an integer");
                            if (t >>>= 0, 0 > e || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                        }
                        var r;
                        try {
                            f.decodeUTF8toUTF16(function() {
                                return t > e ? this.view.getUint8(e++) : null
                            }.bind(this), r = n())
                        } catch (i) {
                            if (e !== t) throw RangeError("Illegal range: Truncated data, " + e + " != " + t)
                        }
                        return r()
                    }, r.fromUTF8 = function(e, n, i) {
                        if (!i && "string" != typeof e) throw TypeError("Illegal str: Not a string");
                        var o = new r(f.calculateUTF16asUTF8(t(e), !0)[1], n, i),
                            a = 0;
                        return f.encodeUTF16toUTF8(t(e), function(e) {
                            o.view.setUint8(a++, e)
                        }), o.limit = a, o
                    }, r
                }
                "function" == typeof t && "object" == typeof n && n && "object" == typeof r && r ? n.exports = function() {
                    var e;
                    try {
                        e = t("long")
                    } catch (n) {}
                    return a(e)
                }() : "function" == typeof e && e.amd ? e("ByteBuffer", ["Long"], function(e) {
                    return a(e)
                }) : (o.dcodeIO = o.dcodeIO || {}).ByteBuffer = a(o.dcodeIO.Long)
            }(this)
        }, {
            "long": 95
        }],
        95: [function(t, n, r) {
            /**
             * @license Long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
             * Released under the Apache License, Version 2.0
             * see: https://github.com/dcodeIO/Long.js for details
             */
            ! function(i) {
                "use strict";
                var o = function(e, t, n) {
                    this.low = 0 | e, this.high = 0 | t, this.unsigned = !!n
                };
                o.isLong = function(e) {
                    return (e && e instanceof o) === !0
                };
                var a = {},
                    s = {};
                o.fromInt = function(e, t) {
                    var n, r;
                    return t ? (e >>>= 0, e >= 0 && 256 > e && (r = s[e]) ? r : (n = new o(e, 0 > (0 | e) ? -1 : 0, !0), e >= 0 && 256 > e && (s[e] = n), n)) : (e = 0 | e, e >= -128 && 128 > e && (r = a[e]) ? r : (n = new o(e, 0 > e ? -1 : 0, !1), e >= -128 && 128 > e && (a[e] = n), n))
                }, o.fromNumber = function(e, t) {
                    return t = !!t, isNaN(e) || !isFinite(e) ? o.ZERO : !t && -c >= e ? o.MIN_VALUE : !t && e + 1 >= c ? o.MAX_VALUE : t && e >= h ? o.MAX_UNSIGNED_VALUE : 0 > e ? o.fromNumber(-e, t).negate() : new o(e % l | 0, e / l | 0, t)
                }, o.fromBits = function(e, t, n) {
                    return new o(e, t, n)
                }, o.fromString = function(e, t, n) {
                    if (0 === e.length) throw Error("number format error: empty string");
                    if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return o.ZERO;
                    if ("number" == typeof t && (n = t, t = !1), n = n || 10, 2 > n || n > 36) throw Error("radix out of range: " + n);
                    var r;
                    if ((r = e.indexOf("-")) > 0) throw Error('number format error: interior "-" character: ' + e);
                    if (0 === r) return o.fromString(e.substring(1), t, n).negate();
                    for (var i = o.fromNumber(Math.pow(n, 8)), a = o.ZERO, s = 0; s < e.length; s += 8) {
                        var u = Math.min(8, e.length - s),
                            f = parseInt(e.substring(s, s + u), n);
                        if (8 > u) {
                            var l = o.fromNumber(Math.pow(n, u));
                            a = a.multiply(l).add(o.fromNumber(f))
                        } else a = a.multiply(i), a = a.add(o.fromNumber(f))
                    }
                    return a.unsigned = t, a
                }, o.fromValue = function(e) {
                    return "number" == typeof e ? o.fromNumber(e) : "string" == typeof e ? o.fromString(e) : o.isLong(e) ? e : new o(e.low, e.high, e.unsigned)
                };
                var u = 65536,
                    f = 1 << 24,
                    l = u * u,
                    h = l * l,
                    c = h / 2,
                    p = o.fromInt(f);
                o.ZERO = o.fromInt(0), o.UZERO = o.fromInt(0, !0), o.ONE = o.fromInt(1), o.UONE = o.fromInt(1, !0), o.NEG_ONE = o.fromInt(-1), o.MAX_VALUE = o.fromBits(-1, 2147483647, !1), o.MAX_UNSIGNED_VALUE = o.fromBits(-1, -1, !0), o.MIN_VALUE = o.fromBits(0, -2147483648, !1), o.prototype.toInt = function() {
                    return this.unsigned ? this.low >>> 0 : this.low
                }, o.prototype.toNumber = function() {
                    return this.unsigned ? (this.high >>> 0) * l + (this.low >>> 0) : this.high * l + (this.low >>> 0)
                }, o.prototype.toString = function(e) {
                    if (e = e || 10, 2 > e || e > 36) throw RangeError("radix out of range: " + e);
                    if (this.isZero()) return "0";
                    var t;
                    if (this.isNegative()) {
                        if (this.equals(o.MIN_VALUE)) {
                            var n = o.fromNumber(e),
                                r = this.div(n);
                            return t = r.multiply(n).subtract(this), r.toString(e) + t.toInt().toString(e)
                        }
                        return "-" + this.negate().toString(e)
                    }
                    var i = o.fromNumber(Math.pow(e, 6), this.unsigned);
                    t = this;
                    for (var a = "";;) {
                        var s = t.div(i),
                            u = t.subtract(s.multiply(i)).toInt() >>> 0,
                            f = u.toString(e);
                        if (t = s, t.isZero()) return f + a;
                        for (; f.length < 6;) f = "0" + f;
                        a = "" + f + a
                    }
                }, o.prototype.getHighBits = function() {
                    return this.high
                }, o.prototype.getHighBitsUnsigned = function() {
                    return this.high >>> 0
                }, o.prototype.getLowBits = function() {
                    return this.low
                }, o.prototype.getLowBitsUnsigned = function() {
                    return this.low >>> 0
                }, o.prototype.getNumBitsAbs = function() {
                    if (this.isNegative()) return this.equals(o.MIN_VALUE) ? 64 : this.negate().getNumBitsAbs();
                    for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (e & 1 << t); t--);
                    return 0 != this.high ? t + 33 : t + 1
                }, o.prototype.isZero = function() {
                    return 0 === this.high && 0 === this.low
                }, o.prototype.isNegative = function() {
                    return !this.unsigned && this.high < 0
                }, o.prototype.isPositive = function() {
                    return this.unsigned || this.high >= 0
                }, o.prototype.isOdd = function() {
                    return 1 === (1 & this.low)
                }, o.prototype.isEven = function() {
                    return 0 === (1 & this.low)
                }, o.prototype.equals = function(e) {
                    return o.isLong(e) || (e = o.fromValue(e)), this.unsigned !== e.unsigned && this.high >>> 31 === 1 && e.high >>> 31 === 1 ? !1 : this.high === e.high && this.low === e.low
                }, o.prototype.notEquals = function(e) {
                    return o.isLong(e) || (e = o.fromValue(e)), !this.equals(e)
                }, o.prototype.lessThan = function(e) {
                    return o.isLong(e) || (e = o.fromValue(e)), this.compare(e) < 0
                }, o.prototype.lessThanOrEqual = function(e) {
                    return o.isLong(e) || (e = o.fromValue(e)), this.compare(e) <= 0
                }, o.prototype.greaterThan = function(e) {
                    return o.isLong(e) || (e = o.fromValue(e)), this.compare(e) > 0
                }, o.prototype.greaterThanOrEqual = function(e) {
                    return o.isLong(e) || (e = o.fromValue(e)), this.compare(e) >= 0
                }, o.prototype.compare = function(e) {
                    if (this.equals(e)) return 0;
                    var t = this.isNegative(),
                        n = e.isNegative();
                    return t && !n ? -1 : !t && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.subtract(e).isNegative() ? -1 : 1
                }, o.prototype.negate = function() {
                    return !this.unsigned && this.equals(o.MIN_VALUE) ? o.MIN_VALUE : this.not().add(o.ONE)
                }, o.prototype.add = function(e) {
                    o.isLong(e) || (e = o.fromValue(e));
                    var t = this.high >>> 16,
                        n = 65535 & this.high,
                        r = this.low >>> 16,
                        i = 65535 & this.low,
                        a = e.high >>> 16,
                        s = 65535 & e.high,
                        u = e.low >>> 16,
                        f = 65535 & e.low,
                        l = 0,
                        h = 0,
                        c = 0,
                        p = 0;
                    return p += i + f, c += p >>> 16, p &= 65535, c += r + u, h += c >>> 16, c &= 65535, h += n + s, l += h >>> 16, h &= 65535, l += t + a, l &= 65535, o.fromBits(c << 16 | p, l << 16 | h, this.unsigned)
                }, o.prototype.subtract = function(e) {
                    return o.isLong(e) || (e = o.fromValue(e)), this.add(e.negate())
                }, o.prototype.multiply = function(e) {
                    if (this.isZero()) return o.ZERO;
                    if (o.isLong(e) || (e = o.fromValue(e)), e.isZero()) return o.ZERO;
                    if (this.equals(o.MIN_VALUE)) return e.isOdd() ? o.MIN_VALUE : o.ZERO;
                    if (e.equals(o.MIN_VALUE)) return this.isOdd() ? o.MIN_VALUE : o.ZERO;
                    if (this.isNegative()) return e.isNegative() ? this.negate().multiply(e.negate()) : this.negate().multiply(e).negate();
                    if (e.isNegative()) return this.multiply(e.negate()).negate();
                    if (this.lessThan(p) && e.lessThan(p)) return o.fromNumber(this.toNumber() * e.toNumber(), this.unsigned);
                    var t = this.high >>> 16,
                        n = 65535 & this.high,
                        r = this.low >>> 16,
                        i = 65535 & this.low,
                        a = e.high >>> 16,
                        s = 65535 & e.high,
                        u = e.low >>> 16,
                        f = 65535 & e.low,
                        l = 0,
                        h = 0,
                        c = 0,
                        d = 0;
                    return d += i * f, c += d >>> 16, d &= 65535, c += r * f, h += c >>> 16, c &= 65535, c += i * u, h += c >>> 16, c &= 65535, h += n * f, l += h >>> 16, h &= 65535, h += r * u, l += h >>> 16, h &= 65535, h += i * s, l += h >>> 16, h &= 65535, l += t * f + n * u + r * s + i * a, l &= 65535, o.fromBits(c << 16 | d, l << 16 | h, this.unsigned)
                }, o.prototype.div = function(e) {
                    if (o.isLong(e) || (e = o.fromValue(e)), e.isZero()) throw new Error("division by zero");
                    if (this.isZero()) return this.unsigned ? o.UZERO : o.ZERO;
                    var t, n, r;
                    if (this.equals(o.MIN_VALUE)) {
                        if (e.equals(o.ONE) || e.equals(o.NEG_ONE)) return o.MIN_VALUE;
                        if (e.equals(o.MIN_VALUE)) return o.ONE;
                        var i = this.shiftRight(1);
                        return t = i.div(e).shiftLeft(1), t.equals(o.ZERO) ? e.isNegative() ? o.ONE : o.NEG_ONE : (n = this.subtract(e.multiply(t)), r = t.add(n.div(e)))
                    }
                    if (e.equals(o.MIN_VALUE)) return this.unsigned ? o.UZERO : o.ZERO;
                    if (this.isNegative()) return e.isNegative() ? this.negate().div(e.negate()) : this.negate().div(e).negate();
                    if (e.isNegative()) return this.div(e.negate()).negate();
                    for (r = o.ZERO, n = this; n.greaterThanOrEqual(e);) {
                        t = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
                        for (var a = Math.ceil(Math.log(t) / Math.LN2), s = 48 >= a ? 1 : Math.pow(2, a - 48), u = o.fromNumber(t), f = u.multiply(e); f.isNegative() || f.greaterThan(n);) t -= s, u = o.fromNumber(t, this.unsigned), f = u.multiply(e);
                        u.isZero() && (u = o.ONE), r = r.add(u), n = n.subtract(f)
                    }
                    return r
                }, o.prototype.modulo = function(e) {
                    return o.isLong(e) || (e = o.fromValue(e)), this.subtract(this.div(e).multiply(e))
                }, o.prototype.not = function() {
                    return o.fromBits(~this.low, ~this.high, this.unsigned)
                }, o.prototype.and = function(e) {
                    return o.isLong(e) || (e = o.fromValue(e)), o.fromBits(this.low & e.low, this.high & e.high, this.unsigned)
                }, o.prototype.or = function(e) {
                    return o.isLong(e) || (e = o.fromValue(e)), o.fromBits(this.low | e.low, this.high | e.high, this.unsigned)
                }, o.prototype.xor = function(e) {
                    return o.isLong(e) || (e = o.fromValue(e)), o.fromBits(this.low ^ e.low, this.high ^ e.high, this.unsigned)
                }, o.prototype.shiftLeft = function(e) {
                    return o.isLong(e) && (e = e.toInt()), 0 === (e &= 63) ? this : 32 > e ? o.fromBits(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : o.fromBits(0, this.low << e - 32, this.unsigned)
                }, o.prototype.shiftRight = function(e) {
                    return o.isLong(e) && (e = e.toInt()), 0 === (e &= 63) ? this : 32 > e ? o.fromBits(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : o.fromBits(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned)
                }, o.prototype.shiftRightUnsigned = function(e) {
                    if (o.isLong(e) && (e = e.toInt()), e &= 63, 0 === e) return this;
                    var t = this.high;
                    if (32 > e) {
                        var n = this.low;
                        return o.fromBits(n >>> e | t << 32 - e, t >>> e, this.unsigned)
                    }
                    return 32 === e ? o.fromBits(t, 0, this.unsigned) : o.fromBits(t >>> e - 32, 0, this.unsigned)
                }, o.prototype.toSigned = function() {
                    return this.unsigned ? new o(this.low, this.high, !1) : this
                }, o.prototype.toUnsigned = function() {
                    return this.unsigned ? this : new o(this.low, this.high, !0)
                }, "function" == typeof t && "object" == typeof n && n && "object" == typeof r && r ? n.exports = o : "function" == typeof e && e.amd ? e(function() {
                    return o
                }) : (i.dcodeIO = i.dcodeIO || {}).Long = o
            }(this)
        }, {}],
        96: [function(e, t, n) {
            var r = e("dagre-d3");
            n.build_graph = function(e) {
                var t = (new r.graphlib.Graph).setGraph({}).setDefaultEdgeLabel(function() {
                    return {}
                });
                return e.layer.forEach(function(e) {
                    t.setNode(e.name, {
                        label: e.name,
                        "class": "layer",
                        layer_type: e.type
                    }), e.top.forEach(function(n) {
                        var r = n + "_blob";
                        t.setNode(r, {
                            label: n,
                            "class": "blob"
                        }), t.setEdge(e.name, r)
                    }), e.bottom.forEach(function(n) {
                        var r = n + "_blob";
                        t.setNode(r, {
                            label: n,
                            "class": "blob"
                        }), t.setEdge(r, e.name)
                    })
                }), t
            }
        }, {
            "dagre-d3": 4
        }],
        97: [function(e, t, n) {
            t.exports = {
                graph: e("./graph"),
                parse: e("./parse")
            }
        }, {
            "./graph": 96,
            "./parse": 98
        }],
        98: [function(e, t, n) {
            var r, i = e("protobufjs"),
                o = (i.ByteBuffer, e("protobuf-textformat"));
            n.getMaster = function() {
                return new Promise(r ? function(e, t) {
                    e(r)
                } : function(e, t) {
                    var n = "https://raw.githubusercontent.com/BVLC/caffe/master/src/caffe/proto/caffe.proto",
                        o = new XMLHttpRequest;
                    o.open("GET", n, !0), o.onload = function() {
                        200 === o.status ? (r = i.protoFromString(o.responseText), e(r)) : t(new Error(o.statusText))
                    }, o.onerror = function() {
                        t(new Error(o.statusText))
                    }, o.send()
                })
            }, n.netParameter = function(e) {
                return n.getMaster().then(function(t) {
                    return o.parse(t, "caffe.NetParameter", e)
                })["catch"](function() {
                    return null
                })
            }
        }, {
            "protobuf-textformat": 83,
            protobufjs: 93
        }]
    }, {}, [97])(97)
});
//# sourceMappingURL=netviz.min.js.map
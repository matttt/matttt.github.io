/*!
 * Bootstrap Colorpicker - Simple and customizable colorpicker component for Twitter Bootstrap.
 * @package bootstrap-colorpicker
 * @version v3.0.0-beta.1
 * @license MIT
 * @link https://farbelous.github.io/bootstrap-colorpicker/
 * @link https://github.com/farbelous/bootstrap-colorpicker.git
 */
! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e(require("jQuery")) : "function" == typeof define && define.amd ? define("bootstrap-colorpicker", ["jQuery"], e) : "object" == typeof exports ? exports["bootstrap-colorpicker"] = e(require("jQuery")) : t["bootstrap-colorpicker"] = e(t.jQuery) }(this, function(t) {
    return function(t) {
        function e(r) { if (o[r]) return o[r].exports; var i = o[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports }
        var o = {};
        return e.m = t, e.c = o, e.d = function(t, o, r) { e.o(t, o) || Object.defineProperty(t, o, { configurable: !1, enumerable: !0, get: r }) }, e.n = function(t) { var o = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(o, "a", o), o }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 3)
    }([function(e, o) { e.exports = t }, function(t, e, o) {
        "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = function() {
                function t(t, e) {
                    for (var o = 0; o < e.length; o++) {
                        var r = e[o];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, o, r) { return o && t(e.prototype, o), r && t(e, r), e }
            }(),
            n = o(0),
            s = function(t) { return t && t.__esModule ? t : { default: t } }(n),
            a = function() {
                function t(e) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (r(this, t), this.colorpicker = e, this.options = o, !this.colorpicker.element || !this.colorpicker.element.length) throw new Error("Extension: this.colorpicker.element is not valid");
                    this.colorpicker.element.on("colorpickerCreate.colorpicker-ext", s.default.proxy(this.onCreate, this)), this.colorpicker.element.on("colorpickerDestroy.colorpicker-ext", s.default.proxy(this.onDestroy, this)), this.colorpicker.element.on("colorpickerUpdate.colorpicker-ext", s.default.proxy(this.onUpdate, this)), this.colorpicker.element.on("colorpickerChange.colorpicker-ext", s.default.proxy(this.onChange, this)), this.colorpicker.element.on("colorpickerInvalid.colorpicker-ext", s.default.proxy(this.onInvalid, this)), this.colorpicker.element.on("colorpickerShow.colorpicker-ext", s.default.proxy(this.onShow, this)), this.colorpicker.element.on("colorpickerHide.colorpicker-ext", s.default.proxy(this.onHide, this)), this.colorpicker.element.on("colorpickerEnable.colorpicker-ext", s.default.proxy(this.onEnable, this)), this.colorpicker.element.on("colorpickerDisable.colorpicker-ext", s.default.proxy(this.onDisable, this))
                }
                return i(t, [{ key: "resolveColor", value: function(t) { return !1 } }, { key: "onCreate", value: function(t) {} }, { key: "onDestroy", value: function(t) { this.colorpicker.element.off(".colorpicker-ext") } }, { key: "onUpdate", value: function(t) {} }, { key: "onChange", value: function(t) {} }, { key: "onInvalid", value: function(t) {} }, { key: "onHide", value: function(t) {} }, { key: "onShow", value: function(t) {} }, { key: "onDisable", value: function(t) {} }, { key: "onEnable", value: function(t) {} }]), t
            }();
        e.default = a
    }, function(t, e, o) {
        "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function n(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            a = function() {
                function t(t, e) {
                    for (var o = 0; o < e.length; o++) {
                        var r = e[o];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, o, r) { return o && t(e.prototype, o), r && t(e, r), e }
            }(),
            l = o(1),
            c = function(t) { return t && t.__esModule ? t : { default: t } }(l),
            u = { colors: null, namesAsValues: !0 },
            h = function(t) {
                function e(t) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, e);
                    var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, Object.assign({}, u, o)));
                    return Array.isArray(n.options.colors) || "object" === s(n.options.colors) || (n.options.colors = null), n
                }
                return n(e, t), a(e, [{ key: "colors", get: function() { return this.options.colors } }]), a(e, [{ key: "getLength", value: function() { return this.options.colors ? Array.isArray(this.options.colors) ? this.options.colors.length : "object" === s(this.options.colors) ? Object.keys(this.options.colors).length : 0 : 0 } }, { key: "resolveColor", value: function(t) { return !(this.getLength() <= 0) && (Array.isArray(this.options.colors) ? this.options.colors.indexOf(t) >= 0 ? t : this.options.colors.indexOf(t.toUpperCase()) >= 0 ? t.toUpperCase() : this.options.colors.indexOf(t.toLowerCase()) >= 0 && t.toLowerCase() : "object" === s(this.options.colors) && (this.options.namesAsValues ? this.getName(t, this.getName("#" + t, this.getValue(t, !1))) : this.getValue(t, !1))) } }, {
                    key: "getName",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if ("string" != typeof t || !this.options.colors) return e;
                        for (var o in this.options.colors)
                            if (this.options.colors.hasOwnProperty(o) && this.options.colors[o].toLowerCase() === t.toLowerCase()) return o;
                        return e
                    }
                }, { key: "getValue", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; return "string" == typeof t && this.options.colors && this.options.colors.hasOwnProperty(t) ? this.options.colors[t] : e } }]), e
            }(c.default);
        e.default = h
    }, function(t, e, o) {
        "use strict";

        function r(t) { return t && t.__esModule ? t : { default: t } }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            n = o(4),
            s = r(n),
            a = o(0),
            l = r(a),
            c = "colorpicker";
        l.default[c] = s.default, l.default.fn[c] = function(t) {
            var e = Array.prototype.slice.call(arguments, 1),
                o = 1 === this.length,
                r = null,
                n = this.each(function() {
                    var o = (0, l.default)(this),
                        n = o.data(c),
                        a = "object" === (void 0 === t ? "undefined" : i(t)) ? t : {};
                    n || (n = new s.default(this, a), o.data(c, n)), "string" == typeof t ? "colorpicker" === t ? r = n : l.default.isFunction(n[t]) ? r = n[t].apply(n, e) : (e.length && (n[t] = e[0]), r = n[t]) : r = o
                });
            return o ? r : n
        }, l.default.fn[c].constructor = s.default
    }, function(t, e, o) {
        "use strict";

        function r(t) { return t && t.__esModule ? t : { default: t } }

        function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = function() {
                function t(t, e) {
                    for (var o = 0; o < e.length; o++) {
                        var r = e[o];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, o, r) { return o && t(e.prototype, o), r && t(e, r), e }
            }(),
            s = o(5),
            a = r(s),
            l = o(1),
            c = r(l),
            u = o(7),
            h = r(u),
            f = o(8),
            p = r(f),
            d = o(0),
            g = r(d),
            v = 0,
            b = function() {
                function t(e, o) {
                    var r = this;
                    i(this, t), v += 1, this.id = v, this.element = (0, g.default)(e).addClass("colorpicker-element"), this.element.attr("data-colorpicker-id", this.id), this.options = Object.assign({}, h.default, o, this.element.data()), this.extensions = [], Array.isArray(this.options.extensions) || (this.options.extensions = []), this.component = this.options.component, this.component = !1 !== this.component && this.element.find(this.component), this.component && 0 === this.component.length && (this.component = !1), this.container = !0 === this.options.container ? this.element : this.options.container, this.container = !1 !== this.container && (0, g.default)(this.container), this.currentSlider = null, this.mousePointer = { left: 0, top: 0 }, this.lastEvent = { name: null, e: null }, this.input = this.element.is("input") ? this.element : !!this.options.input && this.element.find(this.options.input), this.input && 0 === this.input.length && (this.input = !1), this.options.debug && this.options.extensions.push({ name: "Debugger" }), this.options.extensions.forEach(function(t) { r.addExtension(t.name, p.default[t.name.toLowerCase()], t) });
                    var n = !1 !== this.options.color ? this.options.color : this.getValue();
                    this.color = !!n && this.createColor(n), !1 === this.options.format && (this.options.format = this.color.format), this.disabled = !1;
                    var s = this.picker = (0, g.default)(this.options.template);
                    this.options.customClass && s.addClass(this.options.customClass), this.options.inline ? s.addClass("colorpicker-inline colorpicker-visible") : s.addClass("colorpicker-hidden"), this.options.horizontal && s.addClass("colorpicker-horizontal"), (this.options.useAlpha || this.hasColor() && this.color.hasTransparency()) && !1 !== this.options.useAlpha && (this.options.useAlpha = !0, s.addClass("colorpicker-with-alpha")), "right" === this.options.align && s.addClass("colorpicker-right"), !0 === this.options.inline && s.addClass("colorpicker-no-arrow"), s.on("mousedown.colorpicker touchstart.colorpicker", g.default.proxy(function(t) { t.target === t.currentTarget && t.preventDefault() }, this)), s.find(".colorpicker-saturation, .colorpicker-hue, .colorpicker-alpha").on("mousedown.colorpicker touchstart.colorpicker", g.default.proxy(this._mousedown, this)), s.appendTo(this.container ? this.container : (0, g.default)("body")), this.hasInput() && (this.input.on({ "keyup.colorpicker": g.default.proxy(this._keyup, this) }), this.input.on({ "change.colorpicker": g.default.proxy(this._change, this) }), !1 === this.component && this.element.on({ "focus.colorpicker": g.default.proxy(this.show, this) }), !1 === this.options.inline && this.element.on({ "focusout.colorpicker": g.default.proxy(this.hide, this) })), !1 !== this.component && this.component.on({ "click.colorpicker": g.default.proxy(this.show, this) }), !1 !== this.hasInput() || !1 !== this.component || this.element.has(".colorpicker") || this.element.on({ "click.colorpicker": g.default.proxy(this.show, this) }), this.hasInput() && !1 !== this.component && "color" === this.input.attr("type") && this.input.on({ "click.colorpicker": g.default.proxy(this.show, this), "focus.colorpicker": g.default.proxy(this.show, this) }), this.update(!1 !== this.options.color), (0, g.default)(g.default.proxy(function() { this.element.trigger({ type: "colorpickerCreate", colorpicker: this, color: this.color }) }, this))
                }
                return n(t, [{ key: "color", get: function() { return this.element.data("color") }, set: function(t) { this.element.data("color", t) } }], [{ key: "Color", get: function() { return a.default } }, { key: "Extension", get: function() { return c.default } }, { key: "Extensions", get: function() { return p.default } }]), n(t, [{
                    key: "addExtension",
                    value: function(t, e) {
                        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = t instanceof c.default ? t : new e(this, o);
                        return this.extensions.push(r), r
                    }
                }, { key: "destroy", value: function() { this.picker.remove(), this.element.removeData("colorpicker", "color").off(".colorpicker"), this.hasInput() && this.input.off(".colorpicker"), !1 !== this.component && this.component.off(".colorpicker"), this.element.removeClass("colorpicker-element"), this.element.trigger({ type: "colorpickerDestroy", colorpicker: this, color: this.color }) } }, { key: "hasColor", value: function() { return this.color instanceof a.default } }, { key: "toInputColorString", value: function() { var t = this.toCssColorString(); return t ? (!1 === this.options.useHashPrefix && (t = t.replace(/^#/g, "")), this._resolveColor(t)) : t } }, { key: "toCssColorString", value: function() { return this.hasColor() ? this.color.toString(this.format) : "" } }, {
                    key: "_reposition",
                    value: function(t) {
                        if (this.lastEvent.name = "reposition", this.lastEvent.e = t, !1 !== this.options.inline || this.options.container) return !1;
                        var e = this.container && this.container[0] !== window.document.body ? "position" : "offset",
                            o = this.component || this.element,
                            r = o[e]();
                        return "right" === this.options.align && (r.left -= this.picker.outerWidth() - o.outerWidth()), this.picker.css({ top: r.top + o.outerHeight(), left: r.left }), !0
                    }
                }, { key: "show", value: function(t) { return this.lastEvent.name = "show", this.lastEvent.e = t, !this.isVisible() && !this.isDisabled() && (this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"), this._reposition(t), (0, g.default)(window).on("resize.colorpicker", g.default.proxy(this._reposition, this)), !t || this.hasInput() && "color" !== this.input.attr("type") || t.stopPropagation && t.preventDefault && (t.stopPropagation(), t.preventDefault()), !this.component && this.input || !1 !== this.options.inline || (0, g.default)(window.document).on({ "mousedown.colorpicker": g.default.proxy(this.hide, this) }), this.element.trigger({ type: "colorpickerShow", colorpicker: this, color: this.color }), !0) } }, { key: "hide", value: function(t) { return this.lastEvent.name = "hide", this.lastEvent.e = t, !this.isHidden() && ((void 0 === t || !t.target || !((0, g.default)(t.currentTarget).parents(".colorpicker").length > 0 || (0, g.default)(t.target).parents(".colorpicker").length > 0)) && (this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"), (0, g.default)(window).off("resize.colorpicker", this._reposition), (0, g.default)(window.document).off({ "mousedown.colorpicker": this.hide }), this.element.trigger({ type: "colorpickerHide", colorpicker: this, color: this.color }), !0)) } }, { key: "isVisible", value: function() { return this.picker.hasClass("colorpicker-visible") && !this.picker.hasClass("colorpicker-hidden") } }, { key: "isHidden", value: function() { return this.picker.hasClass("colorpicker-hidden") && !this.picker.hasClass("colorpicker-visible") } }, {
                    key: "_updateInput",
                    value: function() {
                        if (this.hasInput()) {
                            var t = this.toInputColorString();
                            if (t === this.input.prop("value")) return;
                            this.input.prop("value", t || ""), this.input.trigger({ type: "change", colorpicker: this, color: this.color, value: t })
                        }
                    }
                }, {
                    key: "_updatePicker",
                    value: function() {
                        if (this.hasColor()) {
                            var t = !1 === this.options.horizontal,
                                e = t ? this.options.sliders : this.options.slidersHorz,
                                o = this.picker.find(".colorpicker-saturation .colorpicker-guide"),
                                r = this.picker.find(".colorpicker-hue .colorpicker-guide"),
                                i = this.picker.find(".colorpicker-alpha .colorpicker-guide"),
                                n = this.color.hsvaRatio;
                            r.length && r.css(t ? "top" : "left", (t ? e.hue.maxTop : e.hue.maxLeft) * (1 - n.h)), i.length && i.css(t ? "top" : "left", (t ? e.alpha.maxTop : e.alpha.maxLeft) * (1 - n.a)), o.length && o.css({ top: e.saturation.maxTop - n.v * e.saturation.maxTop, left: n.s * e.saturation.maxLeft }), this.picker.find(".colorpicker-saturation").css("backgroundColor", this.color.getHueOnlyCopy().toHexString()), this.picker.find(".colorpicker-alpha").css("backgroundColor", this.color.toString("hex6"))
                        }
                    }
                }, {
                    key: "_updateComponent",
                    value: function() {
                        if (this.hasColor() && !1 !== this.component) {
                            var t = this.component.find("i").eq(0);
                            t.length > 0 ? t.css({ backgroundColor: this.toCssColorString() }) : this.component.css({ backgroundColor: this.toCssColorString() })
                        }
                    }
                }, { key: "_shouldUpdate", value: function() { return this.hasColor() && !1 !== this.getValue(!1) } }, { key: "update", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; if (this._shouldUpdate() || !0 === t) { this._updateComponent();!0 !== this.options.autoInputFallback && "keyup" === this.lastEvent.name || this._updateInput(), this._updatePicker(), this.element.trigger({ type: "colorpickerUpdate", colorpicker: this, color: this.color }) } } }, {
                    key: "getValue",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        t = void 0 === t ? this.fallbackColor : t;
                        var e = [],
                            o = !1;
                        return this.hasInput() && (e.push(this.input.val()), e.push(this.input.data("color"))), e.push(this.element.data("color")), e.map(function(t) { t && !1 === o && (o = t) }), o = !1 === o ? t : o, o instanceof a.default ? o.toString(this.format) : o
                    }
                }, {
                    key: "setValue",
                    value: function(t) {
                        if (!this.hasColor() || !this.color.equals(t)) {
                            var e = !!t && this.createColor(t);
                            if (this.hasColor() || e) {
                                var o = this.hasColor() && !e;
                                this.color = e, this.element.trigger({ type: "colorpickerChange", colorpicker: this, color: this.color, value: t }), this.update(o)
                            }
                        }
                    }
                }, {
                    key: "createColor",
                    value: function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            o = new a.default(this._resolveColor(t), { format: this.format });
                        if (!o.isValid()) {
                            var r = o,
                                i = void 0;
                            if (e && (i = this.fallbackColor instanceof a.default && this.fallbackColor.isValid() ? this.fallbackColor : this._resolveColor(this.fallbackColor), o = new a.default(i, { format: this.format }), !o.isValid() && e)) throw new Error("The fallback color is invalid.");
                            o.previous = r, this.element.trigger({ type: "colorpickerInvalid", colorpicker: this, color: o, value: t })
                        }
                        if (!this.isAlphaEnabled() && o.hasTransparency() && o.setAlpha(1), !this.hasColor()) return o;
                        var n = o.hsvaRatio,
                            s = this.color.hsvaRatio;
                        return 0 === n.s && 0 === n.h && 0 !== s.h && o.setHueRatio(s.h), !this.isAlphaEnabled() && o.hasTransparency() && o.setAlpha(1), o
                    }
                }, { key: "isInvalidColor", value: function() { return !this.hasColor() || !this.color.isValid() || !!this.color.previous } }, { key: "isAlphaEnabled", value: function() { return !0 === this.options.useAlpha } }, { key: "_resolveColor", value: function(t) { var e = !1; return g.default.each(this.extensions, function(o, r) {!1 === e && (e = r.resolveColor(t)) }), !1 !== e && (t = e), t } }, { key: "hasInput", value: function() { return !1 !== this.input } }, { key: "isDisabled", value: function() { return !0 === this.disabled } }, { key: "disable", value: function() { return this.hasInput() && this.input.prop("disabled", !0), this.disabled = !0, this.element.trigger({ type: "colorpickerDisable", colorpicker: this, color: this.color }), !0 } }, { key: "enable", value: function() { return this.hasInput() && this.input.prop("disabled", !1), this.disabled = !1, this.element.trigger({ type: "colorpickerEnable", colorpicker: this, color: this.color }), !0 } }, {
                    key: "_mousedown",
                    value: function(t) {
                        this.lastEvent.name = "mousedown", this.lastEvent.e = t, !t.pageX && !t.pageY && t.originalEvent && t.originalEvent.touches && (t.pageX = t.originalEvent.touches[0].pageX, t.pageY = t.originalEvent.touches[0].pageY), t.stopPropagation(), t.preventDefault();
                        var e = (0, g.default)(t.target),
                            o = e.closest("div"),
                            r = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
                        if (!o.is(".colorpicker")) {
                            if (o.is(".colorpicker-saturation")) this.currentSlider = g.default.extend({}, r.saturation);
                            else if (o.is(".colorpicker-hue")) this.currentSlider = g.default.extend({}, r.hue);
                            else {
                                if (!o.is(".colorpicker-alpha")) return !1;
                                this.currentSlider = g.default.extend({}, r.alpha)
                            }
                            var i = o.offset();
                            this.currentSlider.guide = o.find(".colorpicker-guide")[0].style, this.currentSlider.left = t.pageX - i.left, this.currentSlider.top = t.pageY - i.top, this.mousePointer = { left: t.pageX, top: t.pageY }, (0, g.default)(window.document).on({ "mousemove.colorpicker": g.default.proxy(this._mousemove, this), "touchmove.colorpicker": g.default.proxy(this._mousemove, this), "mouseup.colorpicker": g.default.proxy(this._mouseup, this), "touchend.colorpicker": g.default.proxy(this._mouseup, this) }).trigger("mousemove")
                        }
                        return !1
                    }
                }, {
                    key: "_mousemove",
                    value: function(t) {
                        this.lastEvent.name = "mousemove", this.lastEvent.e = t;
                        var e = this.hasColor() ? this.color.getCopy() : this.createColor(this.fallbackColor);
                        !t.pageX && !t.pageY && t.originalEvent && t.originalEvent.touches && (t.pageX = t.originalEvent.touches[0].pageX, t.pageY = t.originalEvent.touches[0].pageY), t.stopPropagation(), t.preventDefault();
                        var o = Math.max(0, Math.min(this.currentSlider.maxLeft, this.currentSlider.left + ((t.pageX || this.mousePointer.left) - this.mousePointer.left))),
                            r = Math.max(0, Math.min(this.currentSlider.maxTop, this.currentSlider.top + ((t.pageY || this.mousePointer.top) - this.mousePointer.top)));
                        return this.currentSlider.guide.left = o + "px", this.currentSlider.guide.top = r + "px", this.currentSlider.callLeft && e[this.currentSlider.callLeft].call(e, o / this.currentSlider.maxLeft), this.currentSlider.callTop && e[this.currentSlider.callTop].call(e, r / this.currentSlider.maxTop), this.setValue(e), !1
                    }
                }, { key: "_mouseup", value: function(t) { return this.lastEvent.name = "mouseup", this.lastEvent.e = t, t.stopPropagation(), t.preventDefault(), (0, g.default)(window.document).off({ "mousemove.colorpicker": this._mousemove, "touchmove.colorpicker": this._mousemove, "mouseup.colorpicker": this._mouseup, "touchend.colorpicker": this._mouseup }), !1 } }, {
                    key: "_change",
                    value: function(t) {
                        this.lastEvent.name = "change", this.lastEvent.e = t;
                        var e = this.input.val();
                        e !== this.toInputColorString() && this.setValue(e)
                    }
                }, {
                    key: "_keyup",
                    value: function(t) {
                        this.lastEvent.name = "keyup", this.lastEvent.e = t;
                        var e = this.input.val();
                        e !== this.toInputColorString() && this.setValue(e)
                    }
                }, { key: "fallbackColor", get: function() { return this.options.fallbackColor ? this.options.fallbackColor : this.hasColor() ? this.color : "#000" } }, { key: "format", get: function() { return this.options.format ? this.options.format : this.hasColor() && this.color.hasTransparency() && this.color.format.match(/^hex/) ? this.options.enableHex8 ? "hex8" : this.isAlphaEnabled() ? "rgba" : "hex" : this.hasColor() ? this.color.format : null } }]), t
            }();
        e.default = b
    }, function(t, e, o) {
        "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function n(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function s(t) { return t instanceof h.default ? { r: t._r, g: t._g, b: t._b, a: t._a } : t }

        function a(t) { return t instanceof String || "string" == typeof t ? t.replace(/a$/gi, "") : t }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var l = function t(e, o, r) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, o); if (void 0 === i) { var n = Object.getPrototypeOf(e); return null === n ? void 0 : t(n, o, r) } if ("value" in i) return i.value; var s = i.get; if (void 0 !== s) return s.call(r) },
            c = function() {
                function t(t, e) {
                    for (var o = 0; o < e.length; o++) {
                        var r = e[o];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, o, r) { return o && t(e.prototype, o), r && t(e, r), e }
            }(),
            u = o(6),
            h = function(t) { return t && t.__esModule ? t : { default: t } }(u),
            f = function(t) {
                function e(t) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { format: null };
                    r(this, e), o.format && (o.format = a(o.format));
                    var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, s(t), o));
                    return n._originalInput = t, n._hbak = n.hsva.h, n.previous = null, n
                }
                return n(e, t), c(e, [{ key: "id", get: function() { return this._tc_id } }, { key: "format", get: function() { return this._format } }, { key: "options", get: function() { return { format: this._format, gradientType: this._gradientType } } }, { key: "hsva", get: function() { return this.toHsv() } }, { key: "hsvaRatio", get: function() { var t = this.hsva; return { h: t.h / 360, s: t.s, v: t.v, a: t.a } } }]), c(e, [{ key: "equals", value: function(t) { return t instanceof h.default && (this._r === t._r && this._g === t._g && this._b === t._b && this._a === t._a && this._roundA === t._roundA && this._format === t._format && this._gradientType === t._gradientType && this._ok === t._ok) } }, {
                    key: "importColor",
                    value: function(t) {
                        if (!(t instanceof h.default)) throw new Error("Color.importColor: The color argument is not an instance of tinycolor.");
                        this._originalInput = t._originalInput, this._r = t._r, this._g = t._g, this._b = t._b, this._a = t._a, this._roundA = t._roundA, this._format = a(t._format), this._gradientType = t._gradientType, this._ok = t._ok
                    }
                }, {
                    key: "importRgb",
                    value: function(t) {
                        if (!t instanceof e) throw new Error("Color.importColor: The color argument is not an instance of tinycolor.");
                        this._r = t._r, this._g = t._g, this._b = t._b, this._a = t._a, this._ok = t._ok, this._hbak = t._hbak
                    }
                }, { key: "importHsv", value: function(t) { this._hbak = t.h, this.importRgb(new e(t, this.options)) } }, { key: "getCopy", value: function() { return new e(this.hsva, this.options) } }, { key: "getHueOnlyCopy", value: function() { return new e({ h: this._hbak ? this._hbak : this.hsva.h, s: 100, v: 100 }, this.options) } }, { key: "getOpaqueCopy", value: function() { return new e(Object.assign({}, this.hsva, { a: 1 }), this.options) } }, { key: "setHue", value: function(t) { this.importHsv(Object.assign({}, this.hsva, { h: t })) } }, { key: "setSaturation", value: function(t) { this.importHsv(Object.assign({}, this.hsva, { s: t })) } }, { key: "setBrightness", value: function(t) { this.importHsv(Object.assign({}, this.hsva, { v: t })) } }, { key: "setHueRatio", value: function(t) { 0 !== t && this.setHue(360 * (1 - t)) } }, { key: "setSaturationRatio", value: function(t) { this.setSaturation(t) } }, { key: "setBrightnessRatio", value: function(t) { this.setBrightness(1 - t) } }, { key: "setAlphaRatio", value: function(t) { this.setAlpha(1 - t) } }, { key: "isTransparent", value: function() { return 0 === this._a } }, { key: "hasTransparency", value: function() { return 1 !== this._a } }, {
                    key: "toString",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        t = t ? a(t) : this.format;
                        var o = l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "toString", this).call(this, t);
                        return o && o.match(/^#[0-9a-f]{3,8}$/i) && this.isTransparent() && 0 === this._r && 0 === this._g && 0 === this._b ? "transparent" : o
                    }
                }]), e
            }(h.default);
        e.default = f
    }, function(t, e, o) {
        var r;
        ! function(i) {
            function n(t, e) {
                if (t = t || "", e = e || {}, t instanceof n) return t;
                if (!(this instanceof n)) return new n(t, e);
                var o = s(t);
                this._originalInput = t, this._r = o.r, this._g = o.g, this._b = o.b, this._a = o.a, this._roundA = X(100 * this._a) / 100, this._format = e.format || o.format, this._gradientType = e.gradientType, this._r < 1 && (this._r = X(this._r)), this._g < 1 && (this._g = X(this._g)), this._b < 1 && (this._b = X(this._b)), this._ok = o.ok, this._tc_id = N++
            }

            function s(t) {
                var e = { r: 0, g: 0, b: 0 },
                    o = 1,
                    r = null,
                    i = null,
                    n = null,
                    s = !1,
                    l = !1;
                return "string" == typeof t && (t = V(t)), "object" == typeof t && (F(t.r) && F(t.g) && F(t.b) ? (e = a(t.r, t.g, t.b), s = !0, l = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : F(t.h) && F(t.s) && F(t.v) ? (r = D(t.s), i = D(t.v), e = h(t.h, r, i), s = !0, l = "hsv") : F(t.h) && F(t.s) && F(t.l) && (r = D(t.s), n = D(t.l), e = c(t.h, r, n), s = !0, l = "hsl"), t.hasOwnProperty("a") && (o = t.a)), o = j(o), { ok: s, format: t.format || l, r: Y(255, B(e.r, 0)), g: Y(255, B(e.g, 0)), b: Y(255, B(e.b, 0)), a: o }
            }

            function a(t, e, o) { return { r: 255 * P(t, 255), g: 255 * P(e, 255), b: 255 * P(o, 255) } }

            function l(t, e, o) {
                t = P(t, 255), e = P(e, 255), o = P(o, 255);
                var r, i, n = B(t, e, o),
                    s = Y(t, e, o),
                    a = (n + s) / 2;
                if (n == s) r = i = 0;
                else {
                    var l = n - s;
                    switch (i = a > .5 ? l / (2 - n - s) : l / (n + s), n) {
                        case t:
                            r = (e - o) / l + (e < o ? 6 : 0);
                            break;
                        case e:
                            r = (o - t) / l + 2;
                            break;
                        case o:
                            r = (t - e) / l + 4
                    }
                    r /= 6
                }
                return { h: r, s: i, l: a }
            }

            function c(t, e, o) {
                function r(t, e, o) { return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? t + 6 * (e - t) * o : o < .5 ? e : o < 2 / 3 ? t + (e - t) * (2 / 3 - o) * 6 : t }
                var i, n, s;
                if (t = P(t, 360), e = P(e, 100), o = P(o, 100), 0 === e) i = n = s = o;
                else {
                    var a = o < .5 ? o * (1 + e) : o + e - o * e,
                        l = 2 * o - a;
                    i = r(l, a, t + 1 / 3), n = r(l, a, t), s = r(l, a, t - 1 / 3)
                }
                return { r: 255 * i, g: 255 * n, b: 255 * s }
            }

            function u(t, e, o) {
                t = P(t, 255), e = P(e, 255), o = P(o, 255);
                var r, i, n = B(t, e, o),
                    s = Y(t, e, o),
                    a = n,
                    l = n - s;
                if (i = 0 === n ? 0 : l / n, n == s) r = 0;
                else {
                    switch (n) {
                        case t:
                            r = (e - o) / l + (e < o ? 6 : 0);
                            break;
                        case e:
                            r = (o - t) / l + 2;
                            break;
                        case o:
                            r = (t - e) / l + 4
                    }
                    r /= 6
                }
                return { h: r, s: i, v: a }
            }

            function h(t, e, o) {
                t = 6 * P(t, 360), e = P(e, 100), o = P(o, 100);
                var r = i.floor(t),
                    n = t - r,
                    s = o * (1 - e),
                    a = o * (1 - n * e),
                    l = o * (1 - (1 - n) * e),
                    c = r % 6;
                return { r: 255 * [o, a, s, s, l, o][c], g: 255 * [l, o, o, a, s, s][c], b: 255 * [s, s, l, o, o, a][c] }
            }

            function f(t, e, o, r) { var i = [I(X(t).toString(16)), I(X(e).toString(16)), I(X(o).toString(16))]; return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("") }

            function p(t, e, o, r, i) { var n = [I(X(t).toString(16)), I(X(e).toString(16)), I(X(o).toString(16)), I(L(r))]; return i && n[0].charAt(0) == n[0].charAt(1) && n[1].charAt(0) == n[1].charAt(1) && n[2].charAt(0) == n[2].charAt(1) && n[3].charAt(0) == n[3].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) + n[3].charAt(0) : n.join("") }

            function d(t, e, o, r) { return [I(L(r)), I(X(t).toString(16)), I(X(e).toString(16)), I(X(o).toString(16))].join("") }

            function g(t, e) { e = 0 === e ? 0 : e || 10; var o = n(t).toHsl(); return o.s -= e / 100, o.s = E(o.s), n(o) }

            function v(t, e) { e = 0 === e ? 0 : e || 10; var o = n(t).toHsl(); return o.s += e / 100, o.s = E(o.s), n(o) }

            function b(t) { return n(t).desaturate(100) }

            function y(t, e) { e = 0 === e ? 0 : e || 10; var o = n(t).toHsl(); return o.l += e / 100, o.l = E(o.l), n(o) }

            function m(t, e) { e = 0 === e ? 0 : e || 10; var o = n(t).toRgb(); return o.r = B(0, Y(255, o.r - X(-e / 100 * 255))), o.g = B(0, Y(255, o.g - X(-e / 100 * 255))), o.b = B(0, Y(255, o.b - X(-e / 100 * 255))), n(o) }

            function k(t, e) { e = 0 === e ? 0 : e || 10; var o = n(t).toHsl(); return o.l -= e / 100, o.l = E(o.l), n(o) }

            function _(t, e) {
                var o = n(t).toHsl(),
                    r = (o.h + e) % 360;
                return o.h = r < 0 ? 360 + r : r, n(o)
            }

            function x(t) { var e = n(t).toHsl(); return e.h = (e.h + 180) % 360, n(e) }

            function w(t) {
                var e = n(t).toHsl(),
                    o = e.h;
                return [n(t), n({ h: (o + 120) % 360, s: e.s, l: e.l }), n({ h: (o + 240) % 360, s: e.s, l: e.l })]
            }

            function C(t) {
                var e = n(t).toHsl(),
                    o = e.h;
                return [n(t), n({ h: (o + 90) % 360, s: e.s, l: e.l }), n({ h: (o + 180) % 360, s: e.s, l: e.l }), n({ h: (o + 270) % 360, s: e.s, l: e.l })]
            }

            function O(t) {
                var e = n(t).toHsl(),
                    o = e.h;
                return [n(t), n({ h: (o + 72) % 360, s: e.s, l: e.l }), n({ h: (o + 216) % 360, s: e.s, l: e.l })]
            }

            function A(t, e, o) {
                e = e || 6, o = o || 30;
                var r = n(t).toHsl(),
                    i = 360 / o,
                    s = [n(t)];
                for (r.h = (r.h - (i * e >> 1) + 720) % 360; --e;) r.h = (r.h + i) % 360, s.push(n(r));
                return s
            }

            function S(t, e) { e = e || 6; for (var o = n(t).toHsv(), r = o.h, i = o.s, s = o.v, a = [], l = 1 / e; e--;) a.push(n({ h: r, s: i, v: s })), s = (s + l) % 1; return a }

            function j(t) { return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t }

            function P(t, e) { H(t) && (t = "100%"); var o = R(t); return t = Y(e, B(0, parseFloat(t))), o && (t = parseInt(t * e, 10) / 100), i.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e) }

            function E(t) { return Y(1, B(0, t)) }

            function T(t) { return parseInt(t, 16) }

            function H(t) { return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t) }

            function R(t) { return "string" == typeof t && -1 != t.indexOf("%") }

            function I(t) { return 1 == t.length ? "0" + t : "" + t }

            function D(t) { return t <= 1 && (t = 100 * t + "%"), t }

            function L(t) { return i.round(255 * parseFloat(t)).toString(16) }

            function M(t) { return T(t) / 255 }

            function F(t) { return !!G.CSS_UNIT.exec(t) }

            function V(t) {
                t = t.replace(q, "").replace(U, "").toLowerCase();
                var e = !1;
                if (Q[t]) t = Q[t], e = !0;
                else if ("transparent" == t) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
                var o;
                return (o = G.rgb.exec(t)) ? { r: o[1], g: o[2], b: o[3] } : (o = G.rgba.exec(t)) ? { r: o[1], g: o[2], b: o[3], a: o[4] } : (o = G.hsl.exec(t)) ? { h: o[1], s: o[2], l: o[3] } : (o = G.hsla.exec(t)) ? { h: o[1], s: o[2], l: o[3], a: o[4] } : (o = G.hsv.exec(t)) ? { h: o[1], s: o[2], v: o[3] } : (o = G.hsva.exec(t)) ? { h: o[1], s: o[2], v: o[3], a: o[4] } : (o = G.hex8.exec(t)) ? { r: T(o[1]), g: T(o[2]), b: T(o[3]), a: M(o[4]), format: e ? "name" : "hex8" } : (o = G.hex6.exec(t)) ? { r: T(o[1]), g: T(o[2]), b: T(o[3]), format: e ? "name" : "hex" } : (o = G.hex4.exec(t)) ? { r: T(o[1] + "" + o[1]), g: T(o[2] + "" + o[2]), b: T(o[3] + "" + o[3]), a: M(o[4] + "" + o[4]), format: e ? "name" : "hex8" } : !!(o = G.hex3.exec(t)) && { r: T(o[1] + "" + o[1]), g: T(o[2] + "" + o[2]), b: T(o[3] + "" + o[3]), format: e ? "name" : "hex" }
            }

            function z(t) { var e, o; return t = t || { level: "AA", size: "small" }, e = (t.level || "AA").toUpperCase(), o = (t.size || "small").toLowerCase(), "AA" !== e && "AAA" !== e && (e = "AA"), "small" !== o && "large" !== o && (o = "small"), { level: e, size: o } }
            var q = /^\s+/,
                U = /\s+$/,
                N = 0,
                X = i.round,
                Y = i.min,
                B = i.max,
                $ = i.random;
            n.prototype = {
                isDark: function() { return this.getBrightness() < 128 },
                isLight: function() { return !this.isDark() },
                isValid: function() { return this._ok },
                getOriginalInput: function() { return this._originalInput },
                getFormat: function() { return this._format },
                getAlpha: function() { return this._a },
                getBrightness: function() { var t = this.toRgb(); return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3 },
                getLuminance: function() { var t, e, o, r, n, s, a = this.toRgb(); return t = a.r / 255, e = a.g / 255, o = a.b / 255, r = t <= .03928 ? t / 12.92 : i.pow((t + .055) / 1.055, 2.4), n = e <= .03928 ? e / 12.92 : i.pow((e + .055) / 1.055, 2.4), s = o <= .03928 ? o / 12.92 : i.pow((o + .055) / 1.055, 2.4), .2126 * r + .7152 * n + .0722 * s },
                setAlpha: function(t) { return this._a = j(t), this._roundA = X(100 * this._a) / 100, this },
                toHsv: function() { var t = u(this._r, this._g, this._b); return { h: 360 * t.h, s: t.s, v: t.v, a: this._a } },
                toHsvString: function() {
                    var t = u(this._r, this._g, this._b),
                        e = X(360 * t.h),
                        o = X(100 * t.s),
                        r = X(100 * t.v);
                    return 1 == this._a ? "hsv(" + e + ", " + o + "%, " + r + "%)" : "hsva(" + e + ", " + o + "%, " + r + "%, " + this._roundA + ")"
                },
                toHsl: function() { var t = l(this._r, this._g, this._b); return { h: 360 * t.h, s: t.s, l: t.l, a: this._a } },
                toHslString: function() {
                    var t = l(this._r, this._g, this._b),
                        e = X(360 * t.h),
                        o = X(100 * t.s),
                        r = X(100 * t.l);
                    return 1 == this._a ? "hsl(" + e + ", " + o + "%, " + r + "%)" : "hsla(" + e + ", " + o + "%, " + r + "%, " + this._roundA + ")"
                },
                toHex: function(t) { return f(this._r, this._g, this._b, t) },
                toHexString: function(t) { return "#" + this.toHex(t) },
                toHex8: function(t) { return p(this._r, this._g, this._b, this._a, t) },
                toHex8String: function(t) { return "#" + this.toHex8(t) },
                toRgb: function() { return { r: X(this._r), g: X(this._g), b: X(this._b), a: this._a } },
                toRgbString: function() { return 1 == this._a ? "rgb(" + X(this._r) + ", " + X(this._g) + ", " + X(this._b) + ")" : "rgba(" + X(this._r) + ", " + X(this._g) + ", " + X(this._b) + ", " + this._roundA + ")" },
                toPercentageRgb: function() { return { r: X(100 * P(this._r, 255)) + "%", g: X(100 * P(this._g, 255)) + "%", b: X(100 * P(this._b, 255)) + "%", a: this._a } },
                toPercentageRgbString: function() { return 1 == this._a ? "rgb(" + X(100 * P(this._r, 255)) + "%, " + X(100 * P(this._g, 255)) + "%, " + X(100 * P(this._b, 255)) + "%)" : "rgba(" + X(100 * P(this._r, 255)) + "%, " + X(100 * P(this._g, 255)) + "%, " + X(100 * P(this._b, 255)) + "%, " + this._roundA + ")" },
                toName: function() { return 0 === this._a ? "transparent" : !(this._a < 1) && (W[f(this._r, this._g, this._b, !0)] || !1) },
                toFilter: function(t) {
                    var e = "#" + d(this._r, this._g, this._b, this._a),
                        o = e,
                        r = this._gradientType ? "GradientType = 1, " : "";
                    if (t) {
                        var i = n(t);
                        o = "#" + d(i._r, i._g, i._b, i._a)
                    }
                    return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + e + ",endColorstr=" + o + ")"
                },
                toString: function(t) {
                    var e = !!t;
                    t = t || this._format;
                    var o = !1,
                        r = this._a < 1 && this._a >= 0;
                    return e || !r || "hex" !== t && "hex6" !== t && "hex3" !== t && "hex4" !== t && "hex8" !== t && "name" !== t ? ("rgb" === t && (o = this.toRgbString()), "prgb" === t && (o = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (o = this.toHexString()), "hex3" === t && (o = this.toHexString(!0)), "hex4" === t && (o = this.toHex8String(!0)), "hex8" === t && (o = this.toHex8String()), "name" === t && (o = this.toName()), "hsl" === t && (o = this.toHslString()), "hsv" === t && (o = this.toHsvString()), o || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString()
                },
                clone: function() { return n(this.toString()) },
                _applyModification: function(t, e) { var o = t.apply(null, [this].concat([].slice.call(e))); return this._r = o._r, this._g = o._g, this._b = o._b, this.setAlpha(o._a), this },
                lighten: function() { return this._applyModification(y, arguments) },
                brighten: function() { return this._applyModification(m, arguments) },
                darken: function() { return this._applyModification(k, arguments) },
                desaturate: function() { return this._applyModification(g, arguments) },
                saturate: function() { return this._applyModification(v, arguments) },
                greyscale: function() { return this._applyModification(b, arguments) },
                spin: function() { return this._applyModification(_, arguments) },
                _applyCombination: function(t, e) { return t.apply(null, [this].concat([].slice.call(e))) },
                analogous: function() { return this._applyCombination(A, arguments) },
                complement: function() { return this._applyCombination(x, arguments) },
                monochromatic: function() { return this._applyCombination(S, arguments) },
                splitcomplement: function() { return this._applyCombination(O, arguments) },
                triad: function() { return this._applyCombination(w, arguments) },
                tetrad: function() { return this._applyCombination(C, arguments) }
            }, n.fromRatio = function(t, e) {
                if ("object" == typeof t) {
                    var o = {};
                    for (var r in t) t.hasOwnProperty(r) && (o[r] = "a" === r ? t[r] : D(t[r]));
                    t = o
                }
                return n(t, e)
            }, n.equals = function(t, e) { return !(!t || !e) && n(t).toRgbString() == n(e).toRgbString() }, n.random = function() { return n.fromRatio({ r: $(), g: $(), b: $() }) }, n.mix = function(t, e, o) {
                o = 0 === o ? 0 : o || 50;
                var r = n(t).toRgb(),
                    i = n(e).toRgb(),
                    s = o / 100;
                return n({ r: (i.r - r.r) * s + r.r, g: (i.g - r.g) * s + r.g, b: (i.b - r.b) * s + r.b, a: (i.a - r.a) * s + r.a })
            }, n.readability = function(t, e) {
                var o = n(t),
                    r = n(e);
                return (i.max(o.getLuminance(), r.getLuminance()) + .05) / (i.min(o.getLuminance(), r.getLuminance()) + .05)
            }, n.isReadable = function(t, e, o) {
                var r, i, s = n.readability(t, e);
                switch (i = !1, r = z(o), r.level + r.size) {
                    case "AAsmall":
                    case "AAAlarge":
                        i = s >= 4.5;
                        break;
                    case "AAlarge":
                        i = s >= 3;
                        break;
                    case "AAAsmall":
                        i = s >= 7
                }
                return i
            }, n.mostReadable = function(t, e, o) {
                var r, i, s, a, l = null,
                    c = 0;
                o = o || {}, i = o.includeFallbackColors, s = o.level, a = o.size;
                for (var u = 0; u < e.length; u++)(r = n.readability(t, e[u])) > c && (c = r, l = n(e[u]));
                return n.isReadable(t, l, { level: s, size: a }) || !i ? l : (o.includeFallbackColors = !1, n.mostReadable(t, ["#fff", "#000"], o))
            };
            var Q = n.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" },
                W = n.hexNames = function(t) { var e = {}; for (var o in t) t.hasOwnProperty(o) && (e[t[o]] = o); return e }(Q),
                G = function() {
                    var t = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
                        e = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?",
                        o = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?";
                    return { CSS_UNIT: new RegExp(t), rgb: new RegExp("rgb" + e), rgba: new RegExp("rgba" + o), hsl: new RegExp("hsl" + e), hsla: new RegExp("hsla" + o), hsv: new RegExp("hsv" + e), hsva: new RegExp("hsva" + o), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ }
                }();
            void 0 !== t && t.exports ? t.exports = n : void 0 !== (r = function() { return n }.call(e, o, e, t)) && (t.exports = r)
        }(Math)
    }, function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = { debug: !1, color: !1, format: !1, horizontal: !1, inline: !1, input: "input", container: !1, component: ".add-on, .input-group-addon", fallbackColor: !1, autoInputFallback: !1, useHashPrefix: !0, useAlpha: !0, enableHex8: !1, sliders: { saturation: { maxLeft: 100, maxTop: 100, callLeft: "setSaturationRatio", callTop: "setBrightnessRatio" }, hue: { maxLeft: 0, maxTop: 100, callLeft: !1, callTop: "setHueRatio" }, alpha: { maxLeft: 0, maxTop: 100, callLeft: !1, callTop: "setAlphaRatio" } }, slidersHorz: { saturation: { maxLeft: 100, maxTop: 100, callLeft: "setSaturationRatio", callTop: "setBrightnessRatio" }, hue: { maxLeft: 100, maxTop: 0, callLeft: "setHueRatio", callTop: !1 }, alpha: { maxLeft: 100, maxTop: 0, callLeft: "setAlphaRatio", callTop: !1 } }, align: "right", customClass: null, template: '<div class="colorpicker">\n    <div class="colorpicker-saturation"><i class="colorpicker-guide"><i /></div>\n    <div class="colorpicker-hue"><i class="colorpicker-guide"></i></div>\n    <div class="colorpicker-alpha"><i class="colorpicker-guide"></i></div></div>', extensions: [{ name: "preview", showText: !1 }] }
    }, function(t, e, o) {
        "use strict";

        function r(t) { return t && t.__esModule ? t : { default: t } }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.Palette = e.Swatches = e.Preview = e.Debugger = void 0;
        var i = o(9),
            n = r(i),
            s = o(10),
            a = r(s),
            l = o(11),
            c = r(l),
            u = o(2),
            h = r(u);
        e.Debugger = n.default, e.Preview = a.default, e.Swatches = c.default, e.Palette = h.default, e.default = { debugger: n.default, preview: a.default, swatches: c.default, palette: h.default }
    }, function(t, e, o) {
        "use strict";

        function r(t) { return t && t.__esModule ? t : { default: t } }

        function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function n(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a = function() {
                function t(t, e) {
                    for (var o = 0; o < e.length; o++) {
                        var r = e[o];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, o, r) { return o && t(e.prototype, o), r && t(e, r), e }
            }(),
            l = function t(e, o, r) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, o); if (void 0 === i) { var n = Object.getPrototypeOf(e); return null === n ? void 0 : t(n, o, r) } if ("value" in i) return i.value; var s = i.get; if (void 0 !== s) return s.call(r) },
            c = o(1),
            u = r(c),
            h = o(0),
            f = r(h),
            p = function(t) {
                function e(t) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    i(this, e);
                    var r = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, o));
                    return r.eventCounter = 0, r.colorpicker.hasInput() && r.colorpicker.input.on("change.colorpicker-ext", f.default.proxy(r.onChangeInput, r)), r
                }
                return s(e, t), a(e, [{
                    key: "log",
                    value: function(t) {
                        for (var e, o = arguments.length, r = Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) r[i - 1] = arguments[i];
                        this.eventCounter += 1;
                        var n = "#" + this.eventCounter + ": Colorpicker#" + this.colorpicker.id + " [" + t + "]";
                        (e = console).debug.apply(e, [n].concat(r)), this.colorpicker.element.trigger({ type: "colorpickerDebug", colorpicker: this.colorpicker, color: this.color, debug: { debugger: this, eventName: t, logArgs: r, logMessage: n } })
                    }
                }, { key: "resolveColor", value: function(t) { return this.log("resolveColor()", t), !1 } }, { key: "onCreate", value: function(t) { return this.log("colorpickerCreate"), l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onCreate", this).call(this, t) } }, { key: "onDestroy", value: function(t) { return this.log("colorpickerDestroy"), this.eventCounter = 0, this.colorpicker.hasInput() && this.colorpicker.input.off(".colorpicker-ext"), l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onDestroy", this).call(this, t) } }, { key: "onUpdate", value: function(t) { this.log("colorpickerUpdate") } }, { key: "onChangeInput", value: function(t) { this.log("input:change.colorpicker", t.value, t.color) } }, { key: "onChange", value: function(t) { this.log("colorpickerChange", t.value, t.color) } }, { key: "onInvalid", value: function(t) { this.log("colorpickerInvalid", t.value, t.color) } }, { key: "onHide", value: function(t) { this.log("colorpickerHide"), this.eventCounter = 0 } }, { key: "onShow", value: function(t) { this.log("colorpickerShow") } }, { key: "onDisable", value: function(t) { this.log("colorpickerDisable") } }, { key: "onEnable", value: function(t) { this.log("colorpickerEnable") } }]), e
            }(u.default);
        e.default = p
    }, function(t, e, o) {
        "use strict";

        function r(t) { return t && t.__esModule ? t : { default: t } }

        function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function n(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a = function() {
                function t(t, e) {
                    for (var o = 0; o < e.length; o++) {
                        var r = e[o];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, o, r) { return o && t(e.prototype, o), r && t(e, r), e }
            }(),
            l = function t(e, o, r) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, o); if (void 0 === i) { var n = Object.getPrototypeOf(e); return null === n ? void 0 : t(n, o, r) } if ("value" in i) return i.value; var s = i.get; if (void 0 !== s) return s.call(r) },
            c = o(1),
            u = r(c),
            h = o(0),
            f = r(h),
            p = function(t) {
                function e(t) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    i(this, e);
                    var r = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, Object.assign({}, { template: '<div class="colorpicker-bar colorpicker-preview"><div /></div>', showText: !0, format: t.format }, o)));
                    return r.element = (0, f.default)(r.options.template), r.elementInner = r.element.find("div"), r
                }
                return s(e, t), a(e, [{ key: "onCreate", value: function(t) { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onCreate", this).call(this, t), this.colorpicker.picker.append(this.element) } }, {
                    key: "onUpdate",
                    value: function(t) {
                        if (l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onUpdate", this).call(this, t), !t.color) return void this.elementInner.css("backgroundColor", null).css("color", null).html("");
                        this.elementInner.css("backgroundColor", t.color.toRgbString()), this.options.showText && (this.elementInner.html(t.color.toString(this.options.format || this.colorpicker.format)), t.color.isDark() ? this.elementInner.css("color", "white") : this.elementInner.css("color", "black"))
                    }
                }]), e
            }(u.default);
        e.default = p
    }, function(t, e, o) {
        "use strict";

        function r(t) { return t && t.__esModule ? t : { default: t } }

        function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function n(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a = function() {
                function t(t, e) {
                    for (var o = 0; o < e.length; o++) {
                        var r = e[o];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, o, r) { return o && t(e.prototype, o), r && t(e, r), e }
            }(),
            l = function t(e, o, r) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, o); if (void 0 === i) { var n = Object.getPrototypeOf(e); return null === n ? void 0 : t(n, o, r) } if ("value" in i) return i.value; var s = i.get; if (void 0 !== s) return s.call(r) },
            c = o(2),
            u = r(c),
            h = o(0),
            f = r(h),
            p = { barTemplate: '<div class="colorpicker-bar colorpicker-swatches"></div>', swatchTemplate: '<i class="colorpicker-swatch"></i>' },
            d = function(t) {
                function e(t) { var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return i(this, e), n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, Object.assign({}, p, o))) }
                return s(e, t), a(e, [{ key: "isEnabled", value: function() { return this.getLength() > 0 } }, {
                    key: "onCreate",
                    value: function(t) {
                        var o = this;
                        if (l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onCreate", this).call(this, t), this.isEnabled()) {
                            var r = this.colorpicker,
                                i = (0, f.default)(this.options.barTemplate),
                                n = !0 === this.options.namesAsValues && !Array.isArray(this.colors);
                            f.default.each(this.colors, function(t, e) {
                                var s = (0, f.default)(o.options.swatchTemplate).css("background-color", e).attr("data-name", t).attr("data-value", e).attr("title", t + ": " + e);
                                s.on("mousedown.colorpicker touchstart.colorpicker", function(t) { t.preventDefault(), r.setValue(n ? (0, f.default)(this).data("name") : (0, f.default)(this).data("value")) }), i.append(s)
                            }), r.picker.append(i)
                        }
                    }
                }]), e
            }(u.default);
        e.default = d
    }])
});
//# sourceMappingURL=bootstrap-colorpicker.min.js.map
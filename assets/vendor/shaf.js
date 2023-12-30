/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if ((b[0] < 2 && b[1] < 9) || (1 == b[0] && 9 == b[1] && b[2] < 1))
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
})(jQuery),
  +(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                return a(b.target).is(this)
                  ? b.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.4"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a(f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.4"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0), d.addClass(c).attr(c, c))
                  : this.isLoading &&
                    ((this.isLoading = !1), d.removeClass(c).removeAttr(c));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type") &&
            (c.prop("checked") && this.$element.hasClass("active")
              ? (a = !1)
              : b.find(".active").removeClass("active")),
            a &&
              c
                .prop("checked", !this.$element.hasClass("active"))
                .trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on("click.bs.button.data-api", '[data-toggle^="button"]', function (
          c
        ) {
          var d = a(c.target);
          d.hasClass("btn") || (d = d.closest(".btn")),
            b.call(d, "toggle"),
            c.preventDefault();
        })
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return a > this.$items.length - 1 || 0 > a
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              b.to(a);
            })
          : c == a
          ? this.pause().cycle()
          : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.4"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0 }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      (b && 3 === b.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = c(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            (e.trigger((b = a.Event("hide.bs.dropdown", f))),
            b.isDefaultPrevented() ||
              (d.attr("aria-expanded", "false"),
              e.removeClass("open").trigger("hidden.bs.dropdown", f)));
        }));
    }
    function c(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.4"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = c(e),
            g = f.hasClass("open");
          if ((b(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a('<div class="dropdown-backdrop"/>')
                .insertAfter(a(this))
                .on("click", b);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger("shown.bs.dropdown", h);
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (b) {
        if (
          /(38|40|27|32)/.test(b.which) &&
          !/input|textarea/i.test(b.target.tagName)
        ) {
          var d = a(this);
          if (
            (b.preventDefault(),
            b.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = c(d),
              g = e.hasClass("open");
            if ((!g && 27 != b.which) || (g && 27 == b.which))
              return (
                27 == b.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.disabled):visible a",
              i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
            if (i.length) {
              var j = i.index(b.target);
              38 == b.which && j > 0 && j--,
                40 == b.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", b)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="menu"]',
          g.prototype.keydown
        )
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="listbox"]',
          g.prototype.keydown
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in").attr("aria-hidden", !1),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$dialog
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .attr("aria-hidden", !0)
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a(
              '<div class="modal-backdrop ' + e + '" />'
            ).appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              a.proxy(function (a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(this.options.viewport.selector || this.options.viewport)),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible")
          ? void (c.hoverState = "in")
          : (c ||
              ((c = new this.constructor(
                b.currentTarget,
                this.getDelegateOptions()
              )),
              a(b.currentTarget).data("bs." + this.type, c)),
            clearTimeout(c.timeout),
            (c.hoverState = "in"),
            c.options.delay && c.options.delay.show
              ? void (c.timeout = setTimeout(function () {
                  "in" == c.hoverState && c.show();
                }, c.options.delay.show))
              : c.show());
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          clearTimeout(c.timeout),
          (c.hoverState = "out"),
          c.options.delay && c.options.delay.hide
            ? void (c.timeout = setTimeout(function () {
                "out" == c.hoverState && c.hide();
              }, c.options.delay.hide))
            : c.hide()
        );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.options.container
                ? a(this.options.container)
                : this.$element.parent(),
              p = this.getPosition(o);
            (h =
              "bottom" == h && k.bottom + m > p.bottom
                ? "top"
                : "top" == h && k.top - m < p.top
                ? "bottom"
                : "right" == h && k.right + l > p.width
                ? "left"
                : "left" == h && k.left - l < p.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var q = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(q, h);
          var r = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", r)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : r();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top = b.top + g),
          (b.left = b.left + h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(g),
          g.isDefaultPrevented()
            ? void 0
            : (f.removeClass("in"),
              a.support.transition && f.hasClass("fade")
                ? f
                    .one("bsTransitionEnd", d)
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d(),
              (this.hoverState = null),
              this)
        );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = d ? { top: 0, left: 0 } : b.offset(),
          g = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          h = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, g, h, f);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.width && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        return (this.$tip = this.$tip || a(this.options.template));
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.4"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(c, d) {
      (this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.4"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
            ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              );
            })
            .sort(function (a, b) {
              return a[0] - b[0];
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1]);
            });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.4"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
          return null != c
            ? e + this.unpin <= f.top
              ? !1
              : "bottom"
            : a - d >= e + g
            ? !1
            : "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && c >= e
          ? "top"
          : null != d && i + j >= a - d
          ? "bottom"
          : !1;
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = a(document.body).height();
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(jQuery);
/*!
 * accounting.js v0.4.2, copyright 2014 Open Exchange Rates, MIT license, http://openexchangerates.github.io/accounting.js
 */
(function (p, z) {
  function q(a) {
    return !!("" === a || (a && a.charCodeAt && a.substr));
  }
  function m(a) {
    return u ? u(a) : "[object Array]" === v.call(a);
  }
  function r(a) {
    return "[object Object]" === v.call(a);
  }
  function s(a, b) {
    var d,
      a = a || {},
      b = b || {};
    for (d in b) b.hasOwnProperty(d) && null == a[d] && (a[d] = b[d]);
    return a;
  }
  function j(a, b, d) {
    var c = [],
      e,
      h;
    if (!a) return c;
    if (w && a.map === w) return a.map(b, d);
    for (e = 0, h = a.length; e < h; e++) c[e] = b.call(d, a[e], e, a);
    return c;
  }
  function n(a, b) {
    a = Math.round(Math.abs(a));
    return isNaN(a) ? b : a;
  }
  function x(a) {
    var b = c.settings.currency.format;
    "function" === typeof a && (a = a());
    return q(a) && a.match("%v")
      ? { pos: a, neg: a.replace("-", "").replace("%v", "-%v"), zero: a }
      : !a || !a.pos || !a.pos.match("%v")
      ? !q(b)
        ? b
        : (c.settings.currency.format = {
            pos: b,
            neg: b.replace("%v", "-%v"),
            zero: b,
          })
      : a;
  }
  var c = {
      version: "0.4.1",
      settings: {
        currency: {
          symbol: "$",
          format: "%s%v",
          decimal: ".",
          thousand: ",",
          precision: 2,
          grouping: 3,
        },
        number: { precision: 0, grouping: 3, thousand: ",", decimal: "." },
      },
    },
    w = Array.prototype.map,
    u = Array.isArray,
    v = Object.prototype.toString,
    o = (c.unformat = c.parse = function (a, b) {
      if (m(a))
        return j(a, function (a) {
          return o(a, b);
        });
      a = a || 0;
      if ("number" === typeof a) return a;
      var b = b || ".",
        c = RegExp("[^0-9-" + b + "]", ["g"]),
        c = parseFloat(
          ("" + a)
            .replace(/\((.*)\)/, "-$1")
            .replace(c, "")
            .replace(b, ".")
        );
      return !isNaN(c) ? c : 0;
    }),
    y = (c.toFixed = function (a, b) {
      var b = n(b, c.settings.number.precision),
        d = Math.pow(10, b);
      return (Math.round(c.unformat(a) * d) / d).toFixed(b);
    }),
    t = (c.formatNumber = c.format = function (a, b, d, i) {
      if (m(a))
        return j(a, function (a) {
          return t(a, b, d, i);
        });
      var a = o(a),
        e = s(
          r(b) ? b : { precision: b, thousand: d, decimal: i },
          c.settings.number
        ),
        h = n(e.precision),
        f = 0 > a ? "-" : "",
        g = parseInt(y(Math.abs(a || 0), h), 10) + "",
        l = 3 < g.length ? g.length % 3 : 0;
      return (
        f +
        (l ? g.substr(0, l) + e.thousand : "") +
        g.substr(l).replace(/(\d{3})(?=\d)/g, "$1" + e.thousand) +
        (h ? e.decimal + y(Math.abs(a), h).split(".")[1] : "")
      );
    }),
    A = (c.formatMoney = function (a, b, d, i, e, h) {
      if (m(a))
        return j(a, function (a) {
          return A(a, b, d, i, e, h);
        });
      var a = o(a),
        f = s(
          r(b)
            ? b
            : { symbol: b, precision: d, thousand: i, decimal: e, format: h },
          c.settings.currency
        ),
        g = x(f.format);
      return (0 < a ? g.pos : 0 > a ? g.neg : g.zero)
        .replace("%s", f.symbol)
        .replace("%v", t(Math.abs(a), n(f.precision), f.thousand, f.decimal));
    });
  c.formatColumn = function (a, b, d, i, e, h) {
    if (!a) return [];
    var f = s(
        r(b)
          ? b
          : { symbol: b, precision: d, thousand: i, decimal: e, format: h },
        c.settings.currency
      ),
      g = x(f.format),
      l = g.pos.indexOf("%s") < g.pos.indexOf("%v") ? !0 : !1,
      k = 0,
      a = j(a, function (a) {
        if (m(a)) return c.formatColumn(a, f);
        a = o(a);
        a = (0 < a ? g.pos : 0 > a ? g.neg : g.zero)
          .replace("%s", f.symbol)
          .replace("%v", t(Math.abs(a), n(f.precision), f.thousand, f.decimal));
        if (a.length > k) k = a.length;
        return a;
      });
    return j(a, function (a) {
      return q(a) && a.length < k
        ? l
          ? a.replace(f.symbol, f.symbol + Array(k - a.length + 1).join(" "))
          : Array(k - a.length + 1).join(" ") + a
        : a;
    });
  };
  if ("undefined" !== typeof exports) {
    if ("undefined" !== typeof module && module.exports)
      exports = module.exports = c;
    exports.accounting = c;
  } else
    "function" === typeof define && define.amd
      ? define([], function () {
          return c;
        })
      : ((c.noConflict = (function (a) {
          return function () {
            p.accounting = a;
            c.noConflict = z;
            return c;
          };
        })(p.accounting)),
        (p.accounting = c));
})(
  this
); /*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.8.7
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011-2018 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/
(function () {
  var $,
    AbstractChosen,
    Chosen,
    SelectParser,
    bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    },
    extend = function (child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    hasProp = {}.hasOwnProperty;
  SelectParser = (function () {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }
    SelectParser.prototype.add_node = function (child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };
    SelectParser.prototype.add_group = function (group) {
      var group_position, i, len, option, ref, results1;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: !0,
        label: group.label,
        title: group.title ? group.title : void 0,
        children: 0,
        disabled: group.disabled,
        classes: group.className,
      });
      ref = group.childNodes;
      results1 = [];
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        results1.push(this.add_option(option, group_position, group.disabled));
      }
      return results1;
    };
    SelectParser.prototype.add_option = function (
      option,
      group_position,
      group_disabled
    ) {
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            title: option.title ? option.title : void 0,
            selected: option.selected,
            disabled: group_disabled === !0 ? group_disabled : option.disabled,
            group_array_index: group_position,
            group_label:
              group_position != null ? this.parsed[group_position].label : null,
            classes: option.className,
            style: option.style.cssText,
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: !0,
          });
        }
        return (this.options_index += 1);
      }
    };
    return SelectParser;
  })();
  SelectParser.select_to_array = function (select) {
    var child, i, len, parser, ref;
    parser = new SelectParser();
    ref = select.childNodes;
    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      parser.add_node(child);
    }
    return parser.parsed;
  };
  AbstractChosen = (function () {
    function AbstractChosen(form_field, options1) {
      this.form_field = form_field;
      this.options = options1 != null ? options1 : {};
      this.label_click_handler = bind(this.label_click_handler, this);
      if (!AbstractChosen.browser_is_supported()) {
        return;
      }
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
      this.on_ready();
    }
    AbstractChosen.prototype.set_default_values = function () {
      this.click_test_action = (function (_this) {
        return function (evt) {
          return _this.test_active_click(evt);
        };
      })(this);
      this.activate_action = (function (_this) {
        return function (evt) {
          return _this.activate_field(evt);
        };
      })(this);
      this.active_field = !1;
      this.mouse_on_container = !1;
      this.results_showing = !1;
      this.result_highlighted = null;
      this.is_rtl =
        this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className);
      this.allow_single_deselect =
        this.options.allow_single_deselect != null &&
        this.form_field.options[0] != null &&
        this.form_field.options[0].text === ""
          ? this.options.allow_single_deselect
          : !1;
      this.disable_search_threshold =
        this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || !1;
      this.enable_split_word_search =
        this.options.enable_split_word_search != null
          ? this.options.enable_split_word_search
          : !0;
      this.group_search =
        this.options.group_search != null ? this.options.group_search : !0;
      this.search_contains = this.options.search_contains || !1;
      this.single_backstroke_delete =
        this.options.single_backstroke_delete != null
          ? this.options.single_backstroke_delete
          : !0;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      this.inherit_select_classes = this.options.inherit_select_classes || !1;
      this.display_selected_options =
        this.options.display_selected_options != null
          ? this.options.display_selected_options
          : !0;
      this.display_disabled_options =
        this.options.display_disabled_options != null
          ? this.options.display_disabled_options
          : !0;
      this.include_group_label_in_selected =
        this.options.include_group_label_in_selected || !1;
      this.max_shown_results =
        this.options.max_shown_results || Number.POSITIVE_INFINITY;
      this.case_sensitive_search = this.options.case_sensitive_search || !1;
      return (this.hide_results_on_select =
        this.options.hide_results_on_select != null
          ? this.options.hide_results_on_select
          : !0);
    };
    AbstractChosen.prototype.set_default_text = function () {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text =
          this.options.placeholder_text_multiple ||
          this.options.placeholder_text ||
          AbstractChosen.default_multiple_text;
      } else {
        this.default_text =
          this.options.placeholder_text_single ||
          this.options.placeholder_text ||
          AbstractChosen.default_single_text;
      }
      this.default_text = this.escape_html(this.default_text);
      return (this.results_none_found =
        this.form_field.getAttribute("data-no_results_text") ||
        this.options.no_results_text ||
        AbstractChosen.default_no_result_text);
    };
    AbstractChosen.prototype.choice_label = function (item) {
      if (this.include_group_label_in_selected && item.group_label != null) {
        return (
          "<b class='group-name'>" +
          this.escape_html(item.group_label) +
          "</b>" +
          item.html
        );
      } else {
        return item.html;
      }
    };
    AbstractChosen.prototype.mouse_enter = function () {
      return (this.mouse_on_container = !0);
    };
    AbstractChosen.prototype.mouse_leave = function () {
      return (this.mouse_on_container = !1);
    };
    AbstractChosen.prototype.input_focus = function (evt) {
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout(
            (function (_this) {
              return function () {
                return _this.container_mousedown();
              };
            })(this),
            50
          );
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };
    AbstractChosen.prototype.input_blur = function (evt) {
      if (!this.mouse_on_container) {
        this.active_field = !1;
        return setTimeout(
          (function (_this) {
            return function () {
              return _this.blur_test();
            };
          })(this),
          100
        );
      }
    };
    AbstractChosen.prototype.label_click_handler = function (evt) {
      if (this.is_multiple) {
        return this.container_mousedown(evt);
      } else {
        return this.activate_field();
      }
    };
    AbstractChosen.prototype.results_option_build = function (options) {
      var content, data, data_content, i, len, ref, shown_results;
      content = "";
      shown_results = 0;
      ref = this.results_data;
      for (i = 0, len = ref.length; i < len; i++) {
        data = ref[i];
        data_content = "";
        if (data.group) {
          data_content = this.result_add_group(data);
        } else {
          data_content = this.result_add_option(data);
        }
        if (data_content !== "") {
          shown_results++;
          content += data_content;
        }
        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(this.choice_label(data));
          }
        }
        if (shown_results >= this.max_shown_results) {
          break;
        }
      }
      return content;
    };
    AbstractChosen.prototype.result_add_option = function (option) {
      var classes, option_el;
      if (!option.search_match) {
        return "";
      }
      if (!this.include_option_in_results(option)) {
        return "";
      }
      classes = [];
      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("active-result");
      }
      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("disabled-result");
      }
      if (option.selected) {
        classes.push("result-selected");
      }
      if (option.group_array_index != null) {
        classes.push("group-option");
      }
      if (option.classes !== "") {
        classes.push(option.classes);
      }
      option_el = document.createElement("li");
      option_el.className = classes.join(" ");
      if (option.style) {
        option_el.style.cssText = option.style;
      }
      option_el.setAttribute("data-option-array-index", option.array_index);
      option_el.innerHTML = option.highlighted_html || option.html;
      if (option.title) {
        option_el.title = option.title;
      }
      return this.outerHTML(option_el);
    };
    AbstractChosen.prototype.result_add_group = function (group) {
      var classes, group_el;
      if (!(group.search_match || group.group_match)) {
        return "";
      }
      if (!(group.active_options > 0)) {
        return "";
      }
      classes = [];
      classes.push("group-result");
      if (group.classes) {
        classes.push(group.classes);
      }
      group_el = document.createElement("li");
      group_el.className = classes.join(" ");
      group_el.innerHTML =
        group.highlighted_html || this.escape_html(group.label);
      if (group.title) {
        group_el.title = group.title;
      }
      return this.outerHTML(group_el);
    };
    AbstractChosen.prototype.results_update_field = function () {
      this.set_default_text();
      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }
      this.result_clear_highlight();
      this.results_build();
      if (this.results_showing) {
        return this.winnow_results();
      }
    };
    AbstractChosen.prototype.reset_single_select_options = function () {
      var i, len, ref, result, results1;
      ref = this.results_data;
      results1 = [];
      for (i = 0, len = ref.length; i < len; i++) {
        result = ref[i];
        if (result.selected) {
          results1.push((result.selected = !1));
        } else {
          results1.push(void 0);
        }
      }
      return results1;
    };
    AbstractChosen.prototype.results_toggle = function () {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };
    AbstractChosen.prototype.results_search = function (evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };
    AbstractChosen.prototype.winnow_results = function (options) {
      var escapedQuery,
        fix,
        i,
        len,
        option,
        prefix,
        query,
        ref,
        regex,
        results,
        results_group,
        search_match,
        startpos,
        suffix,
        text;
      this.no_results_clear();
      results = 0;
      query = this.get_search_text();
      escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      regex = this.get_search_regex(escapedQuery);
      ref = this.results_data;
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        option.search_match = !1;
        results_group = null;
        search_match = null;
        option.highlighted_html = "";
        if (this.include_option_in_results(option)) {
          if (option.group) {
            option.group_match = !1;
            option.active_options = 0;
          }
          if (
            option.group_array_index != null &&
            this.results_data[option.group_array_index]
          ) {
            results_group = this.results_data[option.group_array_index];
            if (
              results_group.active_options === 0 &&
              results_group.search_match
            ) {
              results += 1;
            }
            results_group.active_options += 1;
          }
          text = option.group ? option.label : option.text;
          if (!(option.group && !this.group_search)) {
            search_match = this.search_string_match(text, regex);
            option.search_match = search_match != null;
            if (option.search_match && !option.group) {
              results += 1;
            }
            if (option.search_match) {
              if (query.length) {
                startpos = search_match.index;
                prefix = text.slice(0, startpos);
                fix = text.slice(startpos, startpos + query.length);
                suffix = text.slice(startpos + query.length);
                option.highlighted_html =
                  this.escape_html(prefix) +
                  "<em>" +
                  this.escape_html(fix) +
                  "</em>" +
                  this.escape_html(suffix);
              }
              if (results_group != null) {
                results_group.group_match = !0;
              }
            } else if (
              option.group_array_index != null &&
              this.results_data[option.group_array_index].search_match
            ) {
              option.search_match = !0;
            }
          }
        }
      }
      this.result_clear_highlight();
      if (results < 1 && query.length) {
        this.update_results_content("");
        return this.no_results(query);
      } else {
        this.update_results_content(this.results_option_build());
        if (!(options != null ? options.skip_highlight : void 0)) {
          return this.winnow_results_set_highlight();
        }
      }
    };
    AbstractChosen.prototype.get_search_regex = function (
      escaped_search_string
    ) {
      var regex_flag, regex_string;
      regex_string = this.search_contains
        ? escaped_search_string
        : "(^|\\s|\\b)" + escaped_search_string + "[^\\s]*";
      if (!(this.enable_split_word_search || this.search_contains)) {
        regex_string = "^" + regex_string;
      }
      regex_flag = this.case_sensitive_search ? "" : "i";
      return new RegExp(regex_string, regex_flag);
    };
    AbstractChosen.prototype.search_string_match = function (
      search_string,
      regex
    ) {
      var match;
      match = regex.exec(search_string);
      if (!this.search_contains && (match != null ? match[1] : void 0)) {
        match.index += 1;
      }
      return match;
    };
    AbstractChosen.prototype.choices_count = function () {
      var i, len, option, ref;
      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }
      this.selected_option_count = 0;
      ref = this.form_field.options;
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        if (option.selected) {
          this.selected_option_count += 1;
        }
      }
      return this.selected_option_count;
    };
    AbstractChosen.prototype.choices_click = function (evt) {
      evt.preventDefault();
      this.activate_field();
      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    };
    AbstractChosen.prototype.keydown_checker = function (evt) {
      var ref, stroke;
      stroke = (ref = evt.which) != null ? ref : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }
      switch (stroke) {
        case 8:
          this.backstroke_length = this.get_search_field_value().length;
          break;
        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }
          this.mouse_on_container = !1;
          break;
        case 13:
          if (this.results_showing) {
            evt.preventDefault();
          }
          break;
        case 27:
          if (this.results_showing) {
            evt.preventDefault();
          }
          break;
        case 32:
          if (this.disable_search) {
            evt.preventDefault();
          }
          break;
        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;
        case 40:
          evt.preventDefault();
          this.keydown_arrow();
          break;
      }
    };
    AbstractChosen.prototype.keyup_checker = function (evt) {
      var ref, stroke;
      stroke = (ref = evt.which) != null ? ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (
            this.is_multiple &&
            this.backstroke_length < 1 &&
            this.choices_count() > 0
          ) {
            this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) {
            this.result_select(evt);
          }
          break;
        case 27:
          if (this.results_showing) {
            this.results_hide();
          }
          break;
        case 9:
        case 16:
        case 17:
        case 18:
        case 38:
        case 40:
        case 91:
          break;
        default:
          this.results_search();
          break;
      }
    };
    AbstractChosen.prototype.clipboard_event_checker = function (evt) {
      if (this.is_disabled) {
        return;
      }
      return setTimeout(
        (function (_this) {
          return function () {
            return _this.results_search();
          };
        })(this),
        50
      );
    };
    AbstractChosen.prototype.container_width = function () {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return this.form_field.offsetWidth + "px";
      }
    };
    AbstractChosen.prototype.include_option_in_results = function (option) {
      if (
        this.is_multiple &&
        !this.display_selected_options &&
        option.selected
      ) {
        return !1;
      }
      if (!this.display_disabled_options && option.disabled) {
        return !1;
      }
      if (option.empty) {
        return !1;
      }
      return !0;
    };
    AbstractChosen.prototype.search_results_touchstart = function (evt) {
      this.touch_started = !0;
      return this.search_results_mouseover(evt);
    };
    AbstractChosen.prototype.search_results_touchmove = function (evt) {
      this.touch_started = !1;
      return this.search_results_mouseout(evt);
    };
    AbstractChosen.prototype.search_results_touchend = function (evt) {
      if (this.touch_started) {
        return this.search_results_mouseup(evt);
      }
    };
    AbstractChosen.prototype.outerHTML = function (element) {
      var tmp;
      if (element.outerHTML) {
        return element.outerHTML;
      }
      tmp = document.createElement("div");
      tmp.appendChild(element);
      return tmp.innerHTML;
    };
    AbstractChosen.prototype.get_single_html = function () {
      return (
        '<a class="chosen-single chosen-default">\n  <span>' +
        this.default_text +
        '</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'
      );
    };
    AbstractChosen.prototype.get_multi_html = function () {
      return (
        '<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="' +
        this.default_text +
        '" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'
      );
    };
    AbstractChosen.prototype.get_no_results_html = function (terms) {
      return (
        '<li class="no-results">\n  ' +
        this.results_none_found +
        " <span>" +
        this.escape_html(terms) +
        "</span>\n</li>"
      );
    };
    AbstractChosen.browser_is_supported = function () {
      if ("Microsoft Internet Explorer" === window.navigator.appName) {
        return document.documentMode >= 8;
      }
      if (
        /iP(od|hone)/i.test(window.navigator.userAgent) ||
        /IEMobile/i.test(window.navigator.userAgent) ||
        /Windows Phone/i.test(window.navigator.userAgent) ||
        /BlackBerry/i.test(window.navigator.userAgent) ||
        /BB10/i.test(window.navigator.userAgent) ||
        /Android.*Mobile/i.test(window.navigator.userAgent)
      ) {
        return !1;
      }
      const userAgent = navigator.userAgent.toLowerCase();
      const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
        userAgent
      );
      return !isTablet;
    };
    AbstractChosen.default_multiple_text = "Select Some Options";
    AbstractChosen.default_single_text = "Select an Option";
    AbstractChosen.default_no_result_text = "No results match";
    return AbstractChosen;
  })();
  $ = jQuery;
  $.fn.extend({
    chosen: function (options) {
      if (!AbstractChosen.browser_is_supported()) {
        return this;
      }
      return this.each(function (input_field) {
        var $this, chosen;
        $this = $(this);
        chosen = $this.data("chosen");
        if (options === "destroy") {
          if (chosen instanceof Chosen) {
            chosen.destroy();
          }
          return;
        }
        if (!(chosen instanceof Chosen)) {
          $this.data("chosen", new Chosen(this, options));
        }
      });
    },
  });
  Chosen = (function (superClass) {
    extend(Chosen, superClass);
    function Chosen() {
      return Chosen.__super__.constructor.apply(this, arguments);
    }
    Chosen.prototype.setup = function () {
      this.form_field_jq = $(this.form_field);
      return (this.current_selectedIndex = this.form_field.selectedIndex);
    };
    Chosen.prototype.set_up_html = function () {
      var container_classes, container_props;
      container_classes = ["chosen-container"];
      container_classes.push(
        "chosen-container-" + (this.is_multiple ? "multi" : "single")
      );
      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }
      if (this.is_rtl) {
        container_classes.push("chosen-rtl");
      }
      container_props = {
        class: container_classes.join(" "),
        title: this.form_field.title,
      };
      if (this.form_field.id.length) {
        container_props.id =
          this.form_field.id.replace(/[^\w]/g, "_") + "_chosen";
      }
      this.container = $("<div />", container_props);
      this.container.width(this.container_width());
      if (this.is_multiple) {
        this.container.html(this.get_multi_html());
      } else {
        this.container.html(this.get_single_html());
      }
      this.form_field_jq.hide().after(this.container);
      this.dropdown = this.container.find("div.chosen-drop").first();
      this.search_field = this.container.find("input").first();
      this.search_results = this.container.find("ul.chosen-results").first();
      this.search_field_scale();
      this.search_no_results = this.container.find("li.no-results").first();
      if (this.is_multiple) {
        this.search_choices = this.container.find("ul.chosen-choices").first();
        this.search_container = this.container.find("li.search-field").first();
      } else {
        this.search_container = this.container
          .find("div.chosen-search")
          .first();
        this.selected_item = this.container.find(".chosen-single").first();
      }
      this.results_build();
      this.set_tab_index();
      return this.set_label_behavior();
    };
    Chosen.prototype.on_ready = function () {
      return this.form_field_jq.trigger("chosen:ready", { chosen: this });
    };
    Chosen.prototype.register_observers = function () {
      this.container.on(
        "touchstart.chosen",
        (function (_this) {
          return function (evt) {
            _this.container_mousedown(evt);
          };
        })(this)
      );
      this.container.on(
        "touchend.chosen",
        (function (_this) {
          return function (evt) {
            _this.container_mouseup(evt);
          };
        })(this)
      );
      this.container.on(
        "mousedown.chosen",
        (function (_this) {
          return function (evt) {
            _this.container_mousedown(evt);
          };
        })(this)
      );
      this.container.on(
        "mouseup.chosen",
        (function (_this) {
          return function (evt) {
            _this.container_mouseup(evt);
          };
        })(this)
      );
      this.container.on(
        "mouseenter.chosen",
        (function (_this) {
          return function (evt) {
            _this.mouse_enter(evt);
          };
        })(this)
      );
      this.container.on(
        "mouseleave.chosen",
        (function (_this) {
          return function (evt) {
            _this.mouse_leave(evt);
          };
        })(this)
      );
      this.search_results.on(
        "mouseup.chosen",
        (function (_this) {
          return function (evt) {
            _this.search_results_mouseup(evt);
          };
        })(this)
      );
      this.search_results.on(
        "mouseover.chosen",
        (function (_this) {
          return function (evt) {
            _this.search_results_mouseover(evt);
          };
        })(this)
      );
      this.search_results.on(
        "mouseout.chosen",
        (function (_this) {
          return function (evt) {
            _this.search_results_mouseout(evt);
          };
        })(this)
      );
      this.search_results.on(
        "mousewheel.chosen DOMMouseScroll.chosen",
        (function (_this) {
          return function (evt) {
            _this.search_results_mousewheel(evt);
          };
        })(this)
      );
      this.search_results.on(
        "touchstart.chosen",
        (function (_this) {
          return function (evt) {
            _this.search_results_touchstart(evt);
          };
        })(this)
      );
      this.search_results.on(
        "touchmove.chosen",
        (function (_this) {
          return function (evt) {
            _this.search_results_touchmove(evt);
          };
        })(this)
      );
      this.search_results.on(
        "touchend.chosen",
        (function (_this) {
          return function (evt) {
            _this.search_results_touchend(evt);
          };
        })(this)
      );
      this.form_field_jq.on(
        "chosen:updated.chosen",
        (function (_this) {
          return function (evt) {
            _this.results_update_field(evt);
          };
        })(this)
      );
      this.form_field_jq.on(
        "chosen:activate.chosen",
        (function (_this) {
          return function (evt) {
            _this.activate_field(evt);
          };
        })(this)
      );
      this.form_field_jq.on(
        "chosen:open.chosen",
        (function (_this) {
          return function (evt) {
            _this.container_mousedown(evt);
          };
        })(this)
      );
      this.form_field_jq.on(
        "chosen:close.chosen",
        (function (_this) {
          return function (evt) {
            _this.close_field(evt);
          };
        })(this)
      );
      this.search_field.on(
        "blur.chosen",
        (function (_this) {
          return function (evt) {
            _this.input_blur(evt);
          };
        })(this)
      );
      this.search_field.on(
        "keyup.chosen",
        (function (_this) {
          return function (evt) {
            _this.keyup_checker(evt);
          };
        })(this)
      );
      this.search_field.on(
        "keydown.chosen",
        (function (_this) {
          return function (evt) {
            _this.keydown_checker(evt);
          };
        })(this)
      );
      this.search_field.on(
        "focus.chosen",
        (function (_this) {
          return function (evt) {
            _this.input_focus(evt);
          };
        })(this)
      );
      this.search_field.on(
        "cut.chosen",
        (function (_this) {
          return function (evt) {
            _this.clipboard_event_checker(evt);
          };
        })(this)
      );
      this.search_field.on(
        "paste.chosen",
        (function (_this) {
          return function (evt) {
            _this.clipboard_event_checker(evt);
          };
        })(this)
      );
      if (this.is_multiple) {
        return this.search_choices.on(
          "click.chosen",
          (function (_this) {
            return function (evt) {
              _this.choices_click(evt);
            };
          })(this)
        );
      } else {
        return this.container.on("click.chosen", function (evt) {
          evt.preventDefault();
        });
      }
    };
    Chosen.prototype.destroy = function () {
      $(this.container[0].ownerDocument).off(
        "click.chosen",
        this.click_test_action
      );
      if (this.form_field_label.length > 0) {
        this.form_field_label.off("click.chosen");
      }
      if (this.search_field[0].tabIndex) {
        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
      }
      this.container.remove();
      this.form_field_jq.removeData("chosen");
      return this.form_field_jq.show();
    };
    Chosen.prototype.search_field_disabled = function () {
      this.is_disabled =
        this.form_field.disabled ||
        this.form_field_jq.parents("fieldset").is(":disabled");
      this.container.toggleClass("chosen-disabled", this.is_disabled);
      this.search_field[0].disabled = this.is_disabled;
      if (!this.is_multiple) {
        this.selected_item.off("focus.chosen", this.activate_field);
      }
      if (this.is_disabled) {
        return this.close_field();
      } else if (!this.is_multiple) {
        return this.selected_item.on("focus.chosen", this.activate_field);
      }
    };
    Chosen.prototype.container_mousedown = function (evt) {
      var ref;
      if (this.is_disabled) {
        return;
      }
      if (
        evt &&
        ((ref = evt.type) === "mousedown" || ref === "touchstart") &&
        !this.results_showing
      ) {
        evt.preventDefault();
      }
      if (!(evt != null && $(evt.target).hasClass("search-choice-close"))) {
        if (!this.active_field) {
          if (this.is_multiple) {
            this.search_field.val("");
          }
          $(this.container[0].ownerDocument).on(
            "click.chosen",
            this.click_test_action
          );
          this.results_show();
        } else if (
          !this.is_multiple &&
          evt &&
          ($(evt.target)[0] === this.selected_item[0] ||
            $(evt.target).parents("a.chosen-single").length)
        ) {
          evt.preventDefault();
          this.results_toggle();
        }
        return this.activate_field();
      }
    };
    Chosen.prototype.container_mouseup = function (evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };
    Chosen.prototype.search_results_mousewheel = function (evt) {
      var delta;
      if (evt.originalEvent) {
        delta =
          evt.originalEvent.deltaY ||
          -evt.originalEvent.wheelDelta ||
          evt.originalEvent.detail;
      }
      if (delta != null) {
        evt.preventDefault();
        if (evt.type === "DOMMouseScroll") {
          delta = delta * 40;
        }
        return this.search_results.scrollTop(
          delta + this.search_results.scrollTop()
        );
      }
    };
    Chosen.prototype.blur_test = function (evt) {
      if (
        !this.active_field &&
        this.container.hasClass("chosen-container-active")
      ) {
        return this.close_field();
      }
    };
    Chosen.prototype.close_field = function () {
      $(this.container[0].ownerDocument).off(
        "click.chosen",
        this.click_test_action
      );
      this.active_field = !1;
      this.results_hide();
      this.container.removeClass("chosen-container-active");
      this.clear_backstroke();
      this.show_search_field_default();
      this.search_field_scale();
      return this.search_field.blur();
    };
    Chosen.prototype.activate_field = function () {
      if (this.is_disabled) {
        return;
      }
      this.container.addClass("chosen-container-active");
      this.active_field = !0;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };
    Chosen.prototype.test_active_click = function (evt) {
      var active_container;
      active_container = $(evt.target).closest(".chosen-container");
      if (
        active_container.length &&
        this.container[0] === active_container[0]
      ) {
        return (this.active_field = !0);
      } else {
        return this.close_field();
      }
    };
    Chosen.prototype.results_build = function () {
      this.parsing = !0;
      this.selected_option_count = null;
      this.results_data = SelectParser.select_to_array(this.form_field);
      if (this.is_multiple) {
        this.search_choices.find("li.search-choice").remove();
      } else {
        this.single_set_selected_text();
        if (
          this.disable_search ||
          this.form_field.options.length <= this.disable_search_threshold
        ) {
          this.search_field[0].readOnly = !0;
          this.container.addClass("chosen-container-single-nosearch");
        } else {
          this.search_field[0].readOnly = !1;
          this.container.removeClass("chosen-container-single-nosearch");
        }
      }
      this.update_results_content(this.results_option_build({ first: !0 }));
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      return (this.parsing = !1);
    };
    Chosen.prototype.result_do_highlight = function (el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top =
          this.result_highlight.position().top +
          this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();
        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop(
            high_bottom - maxHeight > 0 ? high_bottom - maxHeight : 0
          );
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };
    Chosen.prototype.result_clear_highlight = function () {
      if (this.result_highlight) {
        this.result_highlight.removeClass("highlighted");
      }
      return (this.result_highlight = null);
    };
    Chosen.prototype.results_show = function () {
      if (
        this.is_multiple &&
        this.max_selected_options <= this.choices_count()
      ) {
        this.form_field_jq.trigger("chosen:maxselected", { chosen: this });
        return !1;
      }
      this.container.addClass("chosen-with-drop");
      this.results_showing = !0;
      this.search_field.focus();
      this.search_field.val(this.get_search_field_value());
      this.winnow_results();
      return this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this,
      });
    };
    Chosen.prototype.update_results_content = function (content) {
      return this.search_results.html(content);
    };
    Chosen.prototype.results_hide = function () {
      if (this.results_showing) {
        this.result_clear_highlight();
        this.container.removeClass("chosen-with-drop");
        this.form_field_jq.trigger("chosen:hiding_dropdown", { chosen: this });
      }
      return (this.results_showing = !1);
    };
    Chosen.prototype.set_tab_index = function (el) {
      var ti;
      if (this.form_field.tabIndex) {
        ti = this.form_field.tabIndex;
        this.form_field.tabIndex = -1;
        return (this.search_field[0].tabIndex = ti);
      }
    };
    Chosen.prototype.set_label_behavior = function () {
      this.form_field_label = this.form_field_jq.parents("label");
      if (!this.form_field_label.length && this.form_field.id.length) {
        this.form_field_label = $("label[for='" + this.form_field.id + "']");
      }
      if (this.form_field_label.length > 0) {
        return this.form_field_label.on(
          "click.chosen",
          this.label_click_handler
        );
      }
    };
    Chosen.prototype.show_search_field_default = function () {
      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };
    Chosen.prototype.search_results_mouseup = function (evt) {
      var target;
      target = $(evt.target).hasClass("active-result")
        ? $(evt.target)
        : $(evt.target).parents(".active-result").first();
      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };
    Chosen.prototype.search_results_mouseover = function (evt) {
      var target;
      target = $(evt.target).hasClass("active-result")
        ? $(evt.target)
        : $(evt.target).parents(".active-result").first();
      if (target) {
        return this.result_do_highlight(target);
      }
    };
    Chosen.prototype.search_results_mouseout = function (evt) {
      if (
        $(evt.target).hasClass("active-result") ||
        $(evt.target).parents(".active-result").first()
      ) {
        return this.result_clear_highlight();
      }
    };
    Chosen.prototype.choice_build = function (item) {
      var choice, close_link;
      choice = $("<li />", { class: "search-choice" }).html(
        "<span>" + this.choice_label(item) + "</span>"
      );
      if (item.disabled) {
        choice.addClass("search-choice-disabled");
      } else {
        close_link = $("<a />", {
          class: "search-choice-close",
          "data-option-array-index": item.array_index,
        });
        close_link.on(
          "click.chosen",
          (function (_this) {
            return function (evt) {
              return _this.choice_destroy_link_click(evt);
            };
          })(this)
        );
        choice.append(close_link);
      }
      return this.search_container.before(choice);
    };
    Chosen.prototype.choice_destroy_link_click = function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (!this.is_disabled) {
        return this.choice_destroy($(evt.target));
      }
    };
    Chosen.prototype.choice_destroy = function (link) {
      if (
        this.result_deselect(link[0].getAttribute("data-option-array-index"))
      ) {
        if (this.active_field) {
          this.search_field.focus();
        } else {
          this.show_search_field_default();
        }
        if (
          this.is_multiple &&
          this.choices_count() > 0 &&
          this.get_search_field_value().length < 1
        ) {
          this.results_hide();
        }
        link.parents("li").first().remove();
        return this.search_field_scale();
      }
    };
    Chosen.prototype.results_reset = function () {
      this.reset_single_select_options();
      this.form_field.options[0].selected = !0;
      this.single_set_selected_text();
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.trigger_form_field_change();
      if (this.active_field) {
        return this.results_hide();
      }
    };
    Chosen.prototype.results_reset_cleanup = function () {
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.selected_item.find("abbr").remove();
    };
    Chosen.prototype.result_select = function (evt) {
      var high, item;
      if (this.result_highlight) {
        high = this.result_highlight;
        this.result_clear_highlight();
        if (
          this.is_multiple &&
          this.max_selected_options <= this.choices_count()
        ) {
          this.form_field_jq.trigger("chosen:maxselected", { chosen: this });
          return !1;
        }
        if (this.is_multiple) {
          high.removeClass("active-result");
        } else {
          this.reset_single_select_options();
        }
        high.addClass("result-selected");
        item = this.results_data[
          high[0].getAttribute("data-option-array-index")
        ];
        item.selected = !0;
        this.form_field.options[item.options_index].selected = !0;
        this.selected_option_count = null;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.single_set_selected_text(this.choice_label(item));
        }
        if (
          this.is_multiple &&
          (!this.hide_results_on_select || evt.metaKey || evt.ctrlKey)
        ) {
          if (evt.metaKey || evt.ctrlKey) {
            this.winnow_results({ skip_highlight: !0 });
          } else {
            this.search_field.val("");
            this.winnow_results();
          }
        } else {
          this.results_hide();
          this.show_search_field_default();
        }
        if (
          this.is_multiple ||
          this.form_field.selectedIndex !== this.current_selectedIndex
        ) {
          this.trigger_form_field_change({
            selected: this.form_field.options[item.options_index].value,
          });
        }
        this.current_selectedIndex = this.form_field.selectedIndex;
        evt.preventDefault();
        return this.search_field_scale();
      }
    };
    Chosen.prototype.single_set_selected_text = function (text) {
      if (text == null) {
        text = this.default_text;
      }
      if (text === this.default_text) {
        this.selected_item.addClass("chosen-default");
      } else {
        this.single_deselect_control_build();
        this.selected_item.removeClass("chosen-default");
      }
      return this.selected_item.find("span").html(text);
    };
    Chosen.prototype.result_deselect = function (pos) {
      var result_data;
      result_data = this.results_data[pos];
      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = !1;
        this.form_field.options[result_data.options_index].selected = !1;
        this.selected_option_count = null;
        this.result_clear_highlight();
        if (this.results_showing) {
          this.winnow_results();
        }
        this.trigger_form_field_change({
          deselected: this.form_field.options[result_data.options_index].value,
        });
        this.search_field_scale();
        return !0;
      } else {
        return !1;
      }
    };
    Chosen.prototype.single_deselect_control_build = function () {
      if (!this.allow_single_deselect) {
        return;
      }
      if (!this.selected_item.find("abbr").length) {
        this.selected_item
          .find("span")
          .first()
          .after('<abbr class="search-choice-close"></abbr>');
      }
      return this.selected_item.addClass("chosen-single-with-deselect");
    };
    Chosen.prototype.get_search_field_value = function () {
      return this.search_field.val();
    };
    Chosen.prototype.get_search_text = function () {
      return $.trim(this.get_search_field_value());
    };
    Chosen.prototype.escape_html = function (text) {
      return $("<div/>").text(text).html();
    };
    Chosen.prototype.winnow_results_set_highlight = function () {
      var do_high, selected_results;
      selected_results = !this.is_multiple
        ? this.search_results.find(".result-selected.active-result")
        : [];
      do_high = selected_results.length
        ? selected_results.first()
        : this.search_results.find(".active-result").first();
      if (do_high != null) {
        return this.result_do_highlight(do_high);
      }
    };
    Chosen.prototype.no_results = function (terms) {
      var no_results_html;
      no_results_html = this.get_no_results_html(terms);
      this.search_results.append(no_results_html);
      return this.form_field_jq.trigger("chosen:no_results", { chosen: this });
    };
    Chosen.prototype.no_results_clear = function () {
      return this.search_results.find(".no-results").remove();
    };
    Chosen.prototype.keydown_arrow = function () {
      var next_sib;
      if (this.results_showing && this.result_highlight) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();
        if (next_sib) {
          return this.result_do_highlight(next_sib);
        }
      } else {
        return this.results_show();
      }
    };
    Chosen.prototype.keyup_arrow = function () {
      var prev_sibs;
      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices_count() > 0) {
            this.results_hide();
          }
          return this.result_clear_highlight();
        }
      }
    };
    Chosen.prototype.keydown_backstroke = function () {
      var next_available_destroy;
      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container
          .siblings("li.search-choice")
          .last();
        if (
          next_available_destroy.length &&
          !next_available_destroy.hasClass("search-choice-disabled")
        ) {
          this.pending_backstroke = next_available_destroy;
          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass("search-choice-focus");
          }
        }
      }
    };
    Chosen.prototype.clear_backstroke = function () {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }
      return (this.pending_backstroke = null);
    };
    Chosen.prototype.search_field_scale = function () {
      var div, i, len, style, style_block, styles, width;
      if (!this.is_multiple) {
        return;
      }
      style_block = {
        position: "absolute",
        left: "-1000px",
        top: "-1000px",
        display: "none",
        whiteSpace: "pre",
      };
      styles = [
        "fontSize",
        "fontStyle",
        "fontWeight",
        "fontFamily",
        "lineHeight",
        "textTransform",
        "letterSpacing",
      ];
      for (i = 0, len = styles.length; i < len; i++) {
        style = styles[i];
        style_block[style] = this.search_field.css(style);
      }
      div = $("<div />").css(style_block);
      div.text(this.get_search_field_value());
      $("body").append(div);
      width = div.width() + 25;
      div.remove();
      if (this.container.is(":visible")) {
        width = Math.min(this.container.outerWidth() - 10, width);
      }
      return this.search_field.width(width);
    };
    Chosen.prototype.trigger_form_field_change = function (extra) {
      this.form_field_jq.trigger("input", extra);
      return this.form_field_jq.trigger("change", extra);
    };
    return Chosen;
  })(AbstractChosen);
}.call(this));
/*!
 DataTables 1.10.9
 Â©2008-2015 SpryMedia Ltd - datatables.net/license
*/
(function (Fa, T, k) {
  var S = function (h) {
    function X(a) {
      var b,
        c,
        d = {};
      h.each(a, function (e) {
        if (
          (b = e.match(/^([^A-Z]+?)([A-Z])/)) &&
          -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")
        )
          (c = e.replace(b[0], b[2].toLowerCase())),
            (d[c] = e),
            "o" === b[1] && X(a[e]);
      });
      a._hungarianMap = d;
    }
    function I(a, b, c) {
      a._hungarianMap || X(a);
      var d;
      h.each(b, function (e) {
        d = a._hungarianMap[e];
        if (d !== k && (c || b[d] === k))
          "o" === d.charAt(0)
            ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), I(a[d], b[d], c))
            : (b[d] = b[e]);
      });
    }
    function S(a) {
      var b = m.defaults.oLanguage,
        c = a.sZeroRecords;
      !a.sEmptyTable &&
        c &&
        "No data available in table" === b.sEmptyTable &&
        F(a, a, "sZeroRecords", "sEmptyTable");
      !a.sLoadingRecords &&
        c &&
        "Loading..." === b.sLoadingRecords &&
        F(a, a, "sZeroRecords", "sLoadingRecords");
      a.sInfoThousands && (a.sThousands = a.sInfoThousands);
      (a = a.sDecimal) && cb(a);
    }
    function db(a) {
      A(a, "ordering", "bSort");
      A(a, "orderMulti", "bSortMulti");
      A(a, "orderClasses", "bSortClasses");
      A(a, "orderCellsTop", "bSortCellsTop");
      A(a, "order", "aaSorting");
      A(a, "orderFixed", "aaSortingFixed");
      A(a, "paging", "bPaginate");
      A(a, "pagingType", "sPaginationType");
      A(a, "pageLength", "iDisplayLength");
      A(a, "searching", "bFilter");
      "boolean" === typeof a.sScrollX &&
        (a.sScrollX = a.sScrollX ? "100%" : "");
      if ((a = a.aoSearchCols))
        for (var b = 0, c = a.length; b < c; b++)
          a[b] && I(m.models.oSearch, a[b]);
    }
    function eb(a) {
      A(a, "orderable", "bSortable");
      A(a, "orderData", "aDataSort");
      A(a, "orderSequence", "asSorting");
      A(a, "orderDataType", "sortDataType");
      var b = a.aDataSort;
      b && !h.isArray(b) && (a.aDataSort = [b]);
    }
    function fb(a) {
      if (!m.__browser) {
        var b = {};
        m.__browser = b;
        var c = h("<div/>")
            .css({
              position: "fixed",
              top: 0,
              left: 0,
              height: 1,
              width: 1,
              overflow: "hidden",
            })
            .append(
              h("<div/>")
                .css({
                  position: "absolute",
                  top: 1,
                  left: 1,
                  width: 100,
                  overflow: "scroll",
                })
                .append(h("<div/>").css({ width: "100%", height: 10 }))
            )
            .appendTo("body"),
          d = c.children(),
          e = d.children();
        b.barWidth = d[0].offsetWidth - d[0].clientWidth;
        b.bScrollOversize =
          100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
        b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
        b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
        c.remove();
      }
      h.extend(a.oBrowser, m.__browser);
      a.oScroll.iBarWidth = m.__browser.barWidth;
    }
    function gb(a, b, c, d, e, f) {
      var g,
        i = !1;
      c !== k && ((g = c), (i = !0));
      for (; d !== e; )
        a.hasOwnProperty(d) &&
          ((g = i ? b(g, a[d], d, a) : a[d]), (i = !0), (d += f));
      return g;
    }
    function Ga(a, b) {
      var c = m.defaults.column,
        d = a.aoColumns.length,
        c = h.extend({}, m.models.oColumn, c, {
          nTh: b ? b : T.createElement("th"),
          sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
          aDataSort: c.aDataSort ? c.aDataSort : [d],
          mData: c.mData ? c.mData : d,
          idx: d,
        });
      a.aoColumns.push(c);
      c = a.aoPreSearchCols;
      c[d] = h.extend({}, m.models.oSearch, c[d]);
      la(a, d, h(b).data());
    }
    function la(a, b, c) {
      var b = a.aoColumns[b],
        d = a.oClasses,
        e = h(b.nTh);
      if (!b.sWidthOrig) {
        b.sWidthOrig = e.attr("width") || null;
        var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
        f && (b.sWidthOrig = f[1]);
      }
      c !== k &&
        null !== c &&
        (eb(c),
        I(m.defaults.column, c),
        c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp),
        c.sType && (b._sManualType = c.sType),
        c.className && !c.sClass && (c.sClass = c.className),
        h.extend(b, c),
        F(b, c, "sWidth", "sWidthOrig"),
        c.iDataSort !== k && (b.aDataSort = [c.iDataSort]),
        F(b, c, "aDataSort"));
      var g = b.mData,
        i = P(g),
        j = b.mRender ? P(b.mRender) : null,
        c = function (a) {
          return "string" === typeof a && -1 !== a.indexOf("@");
        };
      b._bAttrSrc =
        h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
      b.fnGetData = function (a, b, c) {
        var d = i(a, b, k, c);
        return j && b ? j(d, b, a, c) : d;
      };
      b.fnSetData = function (a, b, c) {
        return Q(g)(a, b, c);
      };
      "number" !== typeof g && (a._rowReadObject = !0);
      a.oFeatures.bSort || ((b.bSortable = !1), e.addClass(d.sSortableNone));
      a = -1 !== h.inArray("asc", b.asSorting);
      c = -1 !== h.inArray("desc", b.asSorting);
      !b.bSortable || (!a && !c)
        ? ((b.sSortingClass = d.sSortableNone), (b.sSortingClassJUI = ""))
        : a && !c
        ? ((b.sSortingClass = d.sSortableAsc),
          (b.sSortingClassJUI = d.sSortJUIAscAllowed))
        : !a && c
        ? ((b.sSortingClass = d.sSortableDesc),
          (b.sSortingClassJUI = d.sSortJUIDescAllowed))
        : ((b.sSortingClass = d.sSortable), (b.sSortingClassJUI = d.sSortJUI));
    }
    function Y(a) {
      if (!1 !== a.oFeatures.bAutoWidth) {
        var b = a.aoColumns;
        Ha(a);
        for (var c = 0, d = b.length; c < d; c++)
          b[c].nTh.style.width = b[c].sWidth;
      }
      b = a.oScroll;
      ("" !== b.sY || "" !== b.sX) && Z(a);
      w(a, null, "column-sizing", [a]);
    }
    function $(a, b) {
      var c = aa(a, "bVisible");
      return "number" === typeof c[b] ? c[b] : null;
    }
    function ba(a, b) {
      var c = aa(a, "bVisible"),
        c = h.inArray(b, c);
      return -1 !== c ? c : null;
    }
    function ca(a) {
      return aa(a, "bVisible").length;
    }
    function aa(a, b) {
      var c = [];
      h.map(a.aoColumns, function (a, e) {
        a[b] && c.push(e);
      });
      return c;
    }
    function Ia(a) {
      var b = a.aoColumns,
        c = a.aoData,
        d = m.ext.type.detect,
        e,
        f,
        g,
        i,
        j,
        h,
        l,
        r,
        q;
      e = 0;
      for (f = b.length; e < f; e++)
        if (((l = b[e]), (q = []), !l.sType && l._sManualType))
          l.sType = l._sManualType;
        else if (!l.sType) {
          g = 0;
          for (i = d.length; g < i; g++) {
            j = 0;
            for (h = c.length; j < h; j++) {
              q[j] === k && (q[j] = B(a, j, e, "type"));
              r = d[g](q[j], a);
              if (!r && g !== d.length - 1) break;
              if ("html" === r) break;
            }
            if (r) {
              l.sType = r;
              break;
            }
          }
          l.sType || (l.sType = "string");
        }
    }
    function hb(a, b, c, d) {
      var e,
        f,
        g,
        i,
        j,
        n,
        l = a.aoColumns;
      if (b)
        for (e = b.length - 1; 0 <= e; e--) {
          n = b[e];
          var r = n.targets !== k ? n.targets : n.aTargets;
          h.isArray(r) || (r = [r]);
          f = 0;
          for (g = r.length; f < g; f++)
            if ("number" === typeof r[f] && 0 <= r[f]) {
              for (; l.length <= r[f]; ) Ga(a);
              d(r[f], n);
            } else if ("number" === typeof r[f] && 0 > r[f])
              d(l.length + r[f], n);
            else if ("string" === typeof r[f]) {
              i = 0;
              for (j = l.length; i < j; i++)
                ("_all" == r[f] || h(l[i].nTh).hasClass(r[f])) && d(i, n);
            }
        }
      if (c) {
        e = 0;
        for (a = c.length; e < a; e++) d(e, c[e]);
      }
    }
    function L(a, b, c, d) {
      var e = a.aoData.length,
        f = h.extend(!0, {}, m.models.oRow, {
          src: c ? "dom" : "data",
          idx: e,
        });
      f._aData = b;
      a.aoData.push(f);
      for (var g = a.aoColumns, i = 0, j = g.length; i < j; i++)
        g[i].sType = null;
      a.aiDisplayMaster.push(e);
      b = a.rowIdFn(b);
      b !== k && (a.aIds[b] = f);
      (c || !a.oFeatures.bDeferRender) && Ja(a, e, c, d);
      return e;
    }
    function ma(a, b) {
      var c;
      b instanceof h || (b = h(b));
      return b.map(function (b, e) {
        c = Ka(a, e);
        return L(a, c.data, e, c.cells);
      });
    }
    function B(a, b, c, d) {
      var e = a.iDraw,
        f = a.aoColumns[c],
        g = a.aoData[b]._aData,
        i = f.sDefaultContent,
        c = f.fnGetData(g, d, { settings: a, row: b, col: c });
      if (c === k)
        return (
          a.iDrawError != e &&
            null === i &&
            (J(
              a,
              0,
              "Requested unknown parameter " +
                ("function" == typeof f.mData
                  ? "{function}"
                  : "'" + f.mData + "'") +
                " for row " +
                b,
              4
            ),
            (a.iDrawError = e)),
          i
        );
      if ((c === g || null === c) && null !== i) c = i;
      else if ("function" === typeof c) return c.call(g);
      return null === c && "display" == d ? "" : c;
    }
    function ib(a, b, c, d) {
      a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
        settings: a,
        row: b,
        col: c,
      });
    }
    function La(a) {
      return h.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) {
        return a.replace(/\\./g, ".");
      });
    }
    function P(a) {
      if (h.isPlainObject(a)) {
        var b = {};
        h.each(a, function (a, c) {
          c && (b[a] = P(c));
        });
        return function (a, c, f, g) {
          var i = b[c] || b._;
          return i !== k ? i(a, c, f, g) : a;
        };
      }
      if (null === a)
        return function (a) {
          return a;
        };
      if ("function" === typeof a)
        return function (b, c, f, g) {
          return a(b, c, f, g);
        };
      if (
        "string" === typeof a &&
        (-1 !== a.indexOf(".") ||
          -1 !== a.indexOf("[") ||
          -1 !== a.indexOf("("))
      ) {
        var c = function (a, b, f) {
          var g, i;
          if ("" !== f) {
            i = La(f);
            for (var j = 0, n = i.length; j < n; j++) {
              f = i[j].match(da);
              g = i[j].match(U);
              if (f) {
                i[j] = i[j].replace(da, "");
                "" !== i[j] && (a = a[i[j]]);
                g = [];
                i.splice(0, j + 1);
                i = i.join(".");
                if (h.isArray(a)) {
                  j = 0;
                  for (n = a.length; j < n; j++) g.push(c(a[j], b, i));
                }
                a = f[0].substring(1, f[0].length - 1);
                a = "" === a ? g : g.join(a);
                break;
              } else if (g) {
                i[j] = i[j].replace(U, "");
                a = a[i[j]]();
                continue;
              }
              if (null === a || a[i[j]] === k) return k;
              a = a[i[j]];
            }
          }
          return a;
        };
        return function (b, e) {
          return c(b, e, a);
        };
      }
      return function (b) {
        return b[a];
      };
    }
    function Q(a) {
      if (h.isPlainObject(a)) return Q(a._);
      if (null === a) return function () {};
      if ("function" === typeof a)
        return function (b, d, e) {
          a(b, "set", d, e);
        };
      if (
        "string" === typeof a &&
        (-1 !== a.indexOf(".") ||
          -1 !== a.indexOf("[") ||
          -1 !== a.indexOf("("))
      ) {
        var b = function (a, d, e) {
          var e = La(e),
            f;
          f = e[e.length - 1];
          for (var g, i, j = 0, n = e.length - 1; j < n; j++) {
            g = e[j].match(da);
            i = e[j].match(U);
            if (g) {
              e[j] = e[j].replace(da, "");
              a[e[j]] = [];
              f = e.slice();
              f.splice(0, j + 1);
              g = f.join(".");
              if (h.isArray(d)) {
                i = 0;
                for (n = d.length; i < n; i++)
                  (f = {}), b(f, d[i], g), a[e[j]].push(f);
              } else a[e[j]] = d;
              return;
            }
            i && ((e[j] = e[j].replace(U, "")), (a = a[e[j]](d)));
            if (null === a[e[j]] || a[e[j]] === k) a[e[j]] = {};
            a = a[e[j]];
          }
          if (f.match(U)) a[f.replace(U, "")](d);
          else a[f.replace(da, "")] = d;
        };
        return function (c, d) {
          return b(c, d, a);
        };
      }
      return function (b, d) {
        b[a] = d;
      };
    }
    function Ma(a) {
      return D(a.aoData, "_aData");
    }
    function na(a) {
      a.aoData.length = 0;
      a.aiDisplayMaster.length = 0;
      a.aiDisplay.length = 0;
      a.aIds = {};
    }
    function oa(a, b, c) {
      for (var d = -1, e = 0, f = a.length; e < f; e++)
        a[e] == b ? (d = e) : a[e] > b && a[e]--;
      -1 != d && c === k && a.splice(d, 1);
    }
    function ea(a, b, c, d) {
      var e = a.aoData[b],
        f,
        g = function (c, d) {
          for (; c.childNodes.length; ) c.removeChild(c.firstChild);
          c.innerHTML = B(a, b, d, "display");
        };
      if ("dom" === c || ((!c || "auto" === c) && "dom" === e.src))
        e._aData = Ka(a, e, d, d === k ? k : e._aData).data;
      else {
        var i = e.anCells;
        if (i)
          if (d !== k) g(i[d], d);
          else {
            c = 0;
            for (f = i.length; c < f; c++) g(i[c], c);
          }
      }
      e._aSortData = null;
      e._aFilterData = null;
      g = a.aoColumns;
      if (d !== k) g[d].sType = null;
      else {
        c = 0;
        for (f = g.length; c < f; c++) g[c].sType = null;
        Na(a, e);
      }
    }
    function Ka(a, b, c, d) {
      var e = [],
        f = b.firstChild,
        g,
        i,
        j = 0,
        n,
        l = a.aoColumns,
        r = a._rowReadObject,
        d = d !== k ? d : r ? {} : [],
        q = function (a, b) {
          if ("string" === typeof a) {
            var c = a.indexOf("@");
            -1 !== c && ((c = a.substring(c + 1)), Q(a)(d, b.getAttribute(c)));
          }
        },
        jb = function (a) {
          if (c === k || c === j)
            (i = l[j]),
              (n = h.trim(a.innerHTML)),
              i && i._bAttrSrc
                ? (Q(i.mData._)(d, n),
                  q(i.mData.sort, a),
                  q(i.mData.type, a),
                  q(i.mData.filter, a))
                : r
                ? (i._setter || (i._setter = Q(i.mData)), i._setter(d, n))
                : (d[j] = n);
          j++;
        };
      if (f)
        for (; f; ) {
          g = f.nodeName.toUpperCase();
          if ("TD" == g || "TH" == g) jb(f), e.push(f);
          f = f.nextSibling;
        }
      else {
        e = b.anCells;
        g = 0;
        for (var o = e.length; g < o; g++) jb(e[g]);
      }
      if ((b = f ? b : b.nTr)) (b = b.getAttribute("id")) && Q(a.rowId)(d, b);
      return { data: d, cells: e };
    }
    function Ja(a, b, c, d) {
      var e = a.aoData[b],
        f = e._aData,
        g = [],
        i,
        j,
        h,
        l,
        r;
      if (null === e.nTr) {
        i = c || T.createElement("tr");
        e.nTr = i;
        e.anCells = g;
        i._DT_RowIndex = b;
        Na(a, e);
        l = 0;
        for (r = a.aoColumns.length; l < r; l++) {
          h = a.aoColumns[l];
          j = c ? d[l] : T.createElement(h.sCellType);
          g.push(j);
          if (!c || h.mRender || h.mData !== l)
            j.innerHTML = B(a, b, l, "display");
          h.sClass && (j.className += " " + h.sClass);
          h.bVisible && !c
            ? i.appendChild(j)
            : !h.bVisible && c && j.parentNode.removeChild(j);
          h.fnCreatedCell &&
            h.fnCreatedCell.call(a.oInstance, j, B(a, b, l), f, b, l);
        }
        w(a, "aoRowCreatedCallback", null, [i, f, b]);
      }
      e.nTr.setAttribute("role", "row");
    }
    function Na(a, b) {
      var c = b.nTr,
        d = b._aData;
      if (c) {
        var e = a.rowIdFn(d);
        e && (c.id = e);
        d.DT_RowClass &&
          ((e = d.DT_RowClass.split(" ")),
          (b.__rowc = b.__rowc ? pa(b.__rowc.concat(e)) : e),
          h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
        d.DT_RowAttr && h(c).attr(d.DT_RowAttr);
        d.DT_RowData && h(c).data(d.DT_RowData);
      }
    }
    function kb(a) {
      var b,
        c,
        d,
        e,
        f,
        g = a.nTHead,
        i = a.nTFoot,
        j = 0 === h("th, td", g).length,
        n = a.oClasses,
        l = a.aoColumns;
      j && (e = h("<tr/>").appendTo(g));
      b = 0;
      for (c = l.length; b < c; b++)
        (f = l[b]),
          (d = h(f.nTh).addClass(f.sClass)),
          j && d.appendTo(e),
          a.oFeatures.bSort &&
            (d.addClass(f.sSortingClass),
            !1 !== f.bSortable &&
              (d
                .attr("tabindex", a.iTabIndex)
                .attr("aria-controls", a.sTableId),
              Oa(a, f.nTh, b))),
          f.sTitle != d[0].innerHTML && d.html(f.sTitle),
          Pa(a, "header")(a, d, f, n);
      j && fa(a.aoHeader, g);
      h(g).find(">tr").attr("role", "row");
      h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);
      h(i).find(">tr>th, >tr>td").addClass(n.sFooterTH);
      if (null !== i) {
        a = a.aoFooter[0];
        b = 0;
        for (c = a.length; b < c; b++)
          (f = l[b]),
            (f.nTf = a[b].cell),
            f.sClass && h(f.nTf).addClass(f.sClass);
      }
    }
    function ga(a, b, c) {
      var d,
        e,
        f,
        g = [],
        i = [],
        j = a.aoColumns.length,
        n;
      if (b) {
        c === k && (c = !1);
        d = 0;
        for (e = b.length; d < e; d++) {
          g[d] = b[d].slice();
          g[d].nTr = b[d].nTr;
          for (f = j - 1; 0 <= f; f--)
            !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
          i.push([]);
        }
        d = 0;
        for (e = g.length; d < e; d++) {
          if ((a = g[d].nTr)) for (; (f = a.firstChild); ) a.removeChild(f);
          f = 0;
          for (b = g[d].length; f < b; f++)
            if (((n = j = 1), i[d][f] === k)) {
              a.appendChild(g[d][f].cell);
              for (
                i[d][f] = 1;
                g[d + j] !== k && g[d][f].cell == g[d + j][f].cell;

              )
                (i[d + j][f] = 1), j++;
              for (; g[d][f + n] !== k && g[d][f].cell == g[d][f + n].cell; ) {
                for (c = 0; c < j; c++) i[d + c][f + n] = 1;
                n++;
              }
              h(g[d][f].cell).attr("rowspan", j).attr("colspan", n);
            }
        }
      }
    }
    function M(a) {
      var b = w(a, "aoPreDrawCallback", "preDraw", [a]);
      if (-1 !== h.inArray(!1, b)) C(a, !1);
      else {
        var b = [],
          c = 0,
          d = a.asStripeClasses,
          e = d.length,
          f = a.oLanguage,
          g = a.iInitDisplayStart,
          i = "ssp" == y(a),
          j = a.aiDisplay;
        a.bDrawing = !0;
        g !== k &&
          -1 !== g &&
          ((a._iDisplayStart = i ? g : g >= a.fnRecordsDisplay() ? 0 : g),
          (a.iInitDisplayStart = -1));
        var g = a._iDisplayStart,
          n = a.fnDisplayEnd();
        if (a.bDeferLoading) (a.bDeferLoading = !1), a.iDraw++, C(a, !1);
        else if (i) {
          if (!a.bDestroying && !lb(a)) return;
        } else a.iDraw++;
        if (0 !== j.length) {
          f = i ? a.aoData.length : n;
          for (i = i ? 0 : g; i < f; i++) {
            var l = j[i],
              r = a.aoData[l];
            null === r.nTr && Ja(a, l);
            l = r.nTr;
            if (0 !== e) {
              var q = d[c % e];
              r._sRowStripe != q &&
                (h(l).removeClass(r._sRowStripe).addClass(q),
                (r._sRowStripe = q));
            }
            w(a, "aoRowCallback", null, [l, r._aData, c, i]);
            b.push(l);
            c++;
          }
        } else
          (c = f.sZeroRecords),
            1 == a.iDraw && "ajax" == y(a)
              ? (c = f.sLoadingRecords)
              : f.sEmptyTable &&
                0 === a.fnRecordsTotal() &&
                (c = f.sEmptyTable),
            (b[0] = h("<tr/>", { class: e ? d[0] : "" }).append(
              h("<td />", {
                valign: "top",
                colSpan: ca(a),
                class: a.oClasses.sRowEmpty,
              }).html(c)
            )[0]);
        w(a, "aoHeaderCallback", "header", [
          h(a.nTHead).children("tr")[0],
          Ma(a),
          g,
          n,
          j,
        ]);
        w(a, "aoFooterCallback", "footer", [
          h(a.nTFoot).children("tr")[0],
          Ma(a),
          g,
          n,
          j,
        ]);
        d = h(a.nTBody);
        d.children().detach();
        d.append(h(b));
        w(a, "aoDrawCallback", "draw", [a]);
        a.bSorted = !1;
        a.bFiltered = !1;
        a.bDrawing = !1;
      }
    }
    function R(a, b) {
      var c = a.oFeatures,
        d = c.bFilter;
      c.bSort && mb(a);
      d ? ha(a, a.oPreviousSearch) : (a.aiDisplay = a.aiDisplayMaster.slice());
      !0 !== b && (a._iDisplayStart = 0);
      a._drawHold = b;
      M(a);
      a._drawHold = !1;
    }
    function nb(a) {
      var b = a.oClasses,
        c = h(a.nTable),
        c = h("<div/>").insertBefore(c),
        d = a.oFeatures,
        e = h("<div/>", {
          id: a.sTableId + "_wrapper",
          class: b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter),
        });
      a.nHolding = c[0];
      a.nTableWrapper = e[0];
      a.nTableReinsertBefore = a.nTable.nextSibling;
      for (
        var f = a.sDom.split(""), g, i, j, n, l, r, q = 0;
        q < f.length;
        q++
      ) {
        g = null;
        i = f[q];
        if ("<" == i) {
          j = h("<div/>")[0];
          n = f[q + 1];
          if ("'" == n || '"' == n) {
            l = "";
            for (r = 2; f[q + r] != n; ) (l += f[q + r]), r++;
            "H" == l ? (l = b.sJUIHeader) : "F" == l && (l = b.sJUIFooter);
            -1 != l.indexOf(".")
              ? ((n = l.split(".")),
                (j.id = n[0].substr(1, n[0].length - 1)),
                (j.className = n[1]))
              : "#" == l.charAt(0)
              ? (j.id = l.substr(1, l.length - 1))
              : (j.className = l);
            q += r;
          }
          e.append(j);
          e = h(j);
        } else if (">" == i) e = e.parent();
        else if ("l" == i && d.bPaginate && d.bLengthChange) g = ob(a);
        else if ("f" == i && d.bFilter) g = pb(a);
        else if ("r" == i && d.bProcessing) g = qb(a);
        else if ("t" == i) g = rb(a);
        else if ("i" == i && d.bInfo) g = sb(a);
        else if ("p" == i && d.bPaginate) g = tb(a);
        else if (0 !== m.ext.feature.length) {
          j = m.ext.feature;
          r = 0;
          for (n = j.length; r < n; r++)
            if (i == j[r].cFeature) {
              g = j[r].fnInit(a);
              break;
            }
        }
        g &&
          ((j = a.aanFeatures), j[i] || (j[i] = []), j[i].push(g), e.append(g));
      }
      c.replaceWith(e);
      a.nHolding = null;
    }
    function fa(a, b) {
      var c = h(b).children("tr"),
        d,
        e,
        f,
        g,
        i,
        j,
        n,
        l,
        r,
        q;
      a.splice(0, a.length);
      f = 0;
      for (j = c.length; f < j; f++) a.push([]);
      f = 0;
      for (j = c.length; f < j; f++) {
        d = c[f];
        for (e = d.firstChild; e; ) {
          if (
            "TD" == e.nodeName.toUpperCase() ||
            "TH" == e.nodeName.toUpperCase()
          ) {
            l = 1 * e.getAttribute("colspan");
            r = 1 * e.getAttribute("rowspan");
            l = !l || 0 === l || 1 === l ? 1 : l;
            r = !r || 0 === r || 1 === r ? 1 : r;
            g = 0;
            for (i = a[f]; i[g]; ) g++;
            n = g;
            q = 1 === l ? !0 : !1;
            for (i = 0; i < l; i++)
              for (g = 0; g < r; g++)
                (a[f + g][n + i] = { cell: e, unique: q }), (a[f + g].nTr = d);
          }
          e = e.nextSibling;
        }
      }
    }
    function qa(a, b, c) {
      var d = [];
      c || ((c = a.aoHeader), b && ((c = []), fa(c, b)));
      for (var b = 0, e = c.length; b < e; b++)
        for (var f = 0, g = c[b].length; f < g; f++)
          if (c[b][f].unique && (!d[f] || !a.bSortCellsTop))
            d[f] = c[b][f].cell;
      return d;
    }
    function ra(a, b, c) {
      w(a, "aoServerParams", "serverParams", [b]);
      if (b && h.isArray(b)) {
        var d = {},
          e = /(.*?)\[\]$/;
        h.each(b, function (a, b) {
          var c = b.name.match(e);
          c
            ? ((c = c[0]), d[c] || (d[c] = []), d[c].push(b.value))
            : (d[b.name] = b.value);
        });
        b = d;
      }
      var f,
        g = a.ajax,
        i = a.oInstance,
        j = function (b) {
          w(a, null, "xhr", [a, b, a.jqXHR]);
          c(b);
        };
      if (h.isPlainObject(g) && g.data) {
        f = g.data;
        var n = h.isFunction(f) ? f(b, a) : f,
          b = h.isFunction(f) && n ? n : h.extend(!0, b, n);
        delete g.data;
      }
      n = {
        data: b,
        success: function (b) {
          var c = b.error || b.sError;
          c && J(a, 0, c);
          a.json = b;
          j(b);
        },
        dataType: "json",
        cache: !1,
        type: a.sServerMethod,
        error: function (b, c) {
          var d = w(a, null, "xhr", [a, null, a.jqXHR]);
          -1 === h.inArray(!0, d) &&
            ("parsererror" == c
              ? J(a, 0, "Invalid JSON response", 1)
              : 4 === b.readyState && J(a, 0, "Ajax error", 7));
          C(a, !1);
        },
      };
      a.oAjaxData = b;
      w(a, null, "preXhr", [a, b]);
      a.fnServerData
        ? a.fnServerData.call(
            i,
            a.sAjaxSource,
            h.map(b, function (a, b) {
              return { name: b, value: a };
            }),
            j,
            a
          )
        : a.sAjaxSource || "string" === typeof g
        ? (a.jqXHR = h.ajax(h.extend(n, { url: g || a.sAjaxSource })))
        : h.isFunction(g)
        ? (a.jqXHR = g.call(i, b, j, a))
        : ((a.jqXHR = h.ajax(h.extend(n, g))), (g.data = f));
    }
    function lb(a) {
      return a.bAjaxDataGet
        ? (a.iDraw++,
          C(a, !0),
          ra(a, ub(a), function (b) {
            vb(a, b);
          }),
          !1)
        : !0;
    }
    function ub(a) {
      var b = a.aoColumns,
        c = b.length,
        d = a.oFeatures,
        e = a.oPreviousSearch,
        f = a.aoPreSearchCols,
        g,
        i = [],
        j,
        n,
        l,
        r = V(a);
      g = a._iDisplayStart;
      j = !1 !== d.bPaginate ? a._iDisplayLength : -1;
      var q = function (a, b) {
        i.push({ name: a, value: b });
      };
      q("sEcho", a.iDraw);
      q("iColumns", c);
      q("sColumns", D(b, "sName").join(","));
      q("iDisplayStart", g);
      q("iDisplayLength", j);
      var k = {
        draw: a.iDraw,
        columns: [],
        order: [],
        start: g,
        length: j,
        search: { value: e.sSearch, regex: e.bRegex },
      };
      for (g = 0; g < c; g++)
        (n = b[g]),
          (l = f[g]),
          (j = "function" == typeof n.mData ? "function" : n.mData),
          k.columns.push({
            data: j,
            name: n.sName,
            searchable: n.bSearchable,
            orderable: n.bSortable,
            search: { value: l.sSearch, regex: l.bRegex },
          }),
          q("mDataProp_" + g, j),
          d.bFilter &&
            (q("sSearch_" + g, l.sSearch),
            q("bRegex_" + g, l.bRegex),
            q("bSearchable_" + g, n.bSearchable)),
          d.bSort && q("bSortable_" + g, n.bSortable);
      d.bFilter && (q("sSearch", e.sSearch), q("bRegex", e.bRegex));
      d.bSort &&
        (h.each(r, function (a, b) {
          k.order.push({ column: b.col, dir: b.dir });
          q("iSortCol_" + a, b.col);
          q("sSortDir_" + a, b.dir);
        }),
        q("iSortingCols", r.length));
      b = m.ext.legacy.ajax;
      return null === b ? (a.sAjaxSource ? i : k) : b ? i : k;
    }
    function vb(a, b) {
      var c = sa(a, b),
        d = b.sEcho !== k ? b.sEcho : b.draw,
        e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
        f =
          b.iTotalDisplayRecords !== k
            ? b.iTotalDisplayRecords
            : b.recordsFiltered;
      if (d) {
        if (1 * d < a.iDraw) return;
        a.iDraw = 1 * d;
      }
      na(a);
      a._iRecordsTotal = parseInt(e, 10);
      a._iRecordsDisplay = parseInt(f, 10);
      d = 0;
      for (e = c.length; d < e; d++) L(a, c[d]);
      a.aiDisplay = a.aiDisplayMaster.slice();
      a.bAjaxDataGet = !1;
      M(a);
      a._bInitComplete || ta(a, b);
      a.bAjaxDataGet = !0;
      C(a, !1);
    }
    function sa(a, b) {
      var c =
        h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k
          ? a.ajax.dataSrc
          : a.sAjaxDataProp;
      return "data" === c ? b.aaData || b[c] : "" !== c ? P(c)(b) : b;
    }
    function pb(a) {
      var b = a.oClasses,
        c = a.sTableId,
        d = a.oLanguage,
        e = a.oPreviousSearch,
        f = a.aanFeatures,
        g = '<input type="search" class="' + b.sFilterInput + '"/>',
        i = d.sSearch,
        i = i.match(/_INPUT_/) ? i.replace("_INPUT_", g) : i + g,
        b = h("<div/>", {
          id: !f.f ? c + "_filter" : null,
          class: b.sFilter,
        }).append(h("<label/>").append(i)),
        f = function () {
          var b = !this.value ? "" : this.value;
          b != e.sSearch &&
            (ha(a, {
              sSearch: b,
              bRegex: e.bRegex,
              bSmart: e.bSmart,
              bCaseInsensitive: e.bCaseInsensitive,
            }),
            (a._iDisplayStart = 0),
            M(a));
        },
        g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0,
        j = h("input", b)
          .val(e.sSearch)
          .attr("placeholder", d.sSearchPlaceholder)
          .bind("keyup.DT search.DT input.DT paste.DT cut.DT", g ? ua(f, g) : f)
          .bind("keypress.DT", function (a) {
            if (13 == a.keyCode) return !1;
          })
          .attr("aria-controls", c);
      h(a.nTable).on("search.dt.DT", function (b, c) {
        if (a === c)
          try {
            j[0] !== T.activeElement && j.val(e.sSearch);
          } catch (d) {}
      });
      return b[0];
    }
    function ha(a, b, c) {
      var d = a.oPreviousSearch,
        e = a.aoPreSearchCols,
        f = function (a) {
          d.sSearch = a.sSearch;
          d.bRegex = a.bRegex;
          d.bSmart = a.bSmart;
          d.bCaseInsensitive = a.bCaseInsensitive;
        };
      Ia(a);
      if ("ssp" != y(a)) {
        wb(
          a,
          b.sSearch,
          c,
          b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex,
          b.bSmart,
          b.bCaseInsensitive
        );
        f(b);
        for (b = 0; b < e.length; b++)
          xb(
            a,
            e[b].sSearch,
            b,
            e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex,
            e[b].bSmart,
            e[b].bCaseInsensitive
          );
        yb(a);
      } else f(b);
      a.bFiltered = !0;
      w(a, null, "search", [a]);
    }
    function yb(a) {
      for (
        var b = m.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length;
        f < g;
        f++
      ) {
        for (var i = [], j = 0, n = c.length; j < n; j++)
          (e = c[j]),
            (d = a.aoData[e]),
            b[f](a, d._aFilterData, e, d._aData, j) && i.push(e);
        c.length = 0;
        h.merge(c, i);
      }
    }
    function xb(a, b, c, d, e, f) {
      if ("" !== b)
        for (
          var g = a.aiDisplay, d = Qa(b, d, e, f), e = g.length - 1;
          0 <= e;
          e--
        )
          (b = a.aoData[g[e]]._aFilterData[c]), d.test(b) || g.splice(e, 1);
    }
    function wb(a, b, c, d, e, f) {
      var d = Qa(b, d, e, f),
        e = a.oPreviousSearch.sSearch,
        f = a.aiDisplayMaster,
        g;
      0 !== m.ext.search.length && (c = !0);
      g = zb(a);
      if (0 >= b.length) a.aiDisplay = f.slice();
      else {
        if (g || c || e.length > b.length || 0 !== b.indexOf(e) || a.bSorted)
          a.aiDisplay = f.slice();
        b = a.aiDisplay;
        for (c = b.length - 1; 0 <= c; c--)
          d.test(a.aoData[b[c]]._sFilterRow) || b.splice(c, 1);
      }
    }
    function Qa(a, b, c, d) {
      a = b ? a : va(a);
      c &&
        (a =
          "^(?=.*?" +
          h
            .map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
              if ('"' === a.charAt(0))
                var b = a.match(/^"(.*)"$/),
                  a = b ? b[1] : a;
              return a.replace('"', "");
            })
            .join(")(?=.*?") +
          ").*$");
      return RegExp(a, d ? "i" : "");
    }
    function va(a) {
      return a.replace(Yb, "\\$1");
    }
    function zb(a) {
      var b = a.aoColumns,
        c,
        d,
        e,
        f,
        g,
        i,
        j,
        h,
        l = m.ext.type.search;
      c = !1;
      d = 0;
      for (f = a.aoData.length; d < f; d++)
        if (((h = a.aoData[d]), !h._aFilterData)) {
          i = [];
          e = 0;
          for (g = b.length; e < g; e++)
            (c = b[e]),
              c.bSearchable
                ? ((j = B(a, d, e, "filter")),
                  l[c.sType] && (j = l[c.sType](j)),
                  null === j && (j = ""),
                  "string" !== typeof j && j.toString && (j = j.toString()))
                : (j = ""),
              j.indexOf &&
                -1 !== j.indexOf("&") &&
                ((wa.innerHTML = j), (j = Zb ? wa.textContent : wa.innerText)),
              j.replace && (j = j.replace(/[\r\n]/g, "")),
              i.push(j);
          h._aFilterData = i;
          h._sFilterRow = i.join("  ");
          c = !0;
        }
      return c;
    }
    function Ab(a) {
      return {
        search: a.sSearch,
        smart: a.bSmart,
        regex: a.bRegex,
        caseInsensitive: a.bCaseInsensitive,
      };
    }
    function Bb(a) {
      return {
        sSearch: a.search,
        bSmart: a.smart,
        bRegex: a.regex,
        bCaseInsensitive: a.caseInsensitive,
      };
    }
    function sb(a) {
      var b = a.sTableId,
        c = a.aanFeatures.i,
        d = h("<div/>", {
          class: a.oClasses.sInfo,
          id: !c ? b + "_info" : null,
        });
      c ||
        (a.aoDrawCallback.push({ fn: Cb, sName: "information" }),
        d.attr("role", "status").attr("aria-live", "polite"),
        h(a.nTable).attr("aria-describedby", b + "_info"));
      return d[0];
    }
    function Cb(a) {
      var b = a.aanFeatures.i;
      if (0 !== b.length) {
        var c = a.oLanguage,
          d = a._iDisplayStart + 1,
          e = a.fnDisplayEnd(),
          f = a.fnRecordsTotal(),
          g = a.fnRecordsDisplay(),
          i = g ? c.sInfo : c.sInfoEmpty;
        g !== f && (i += " " + c.sInfoFiltered);
        i += c.sInfoPostFix;
        i = Db(a, i);
        c = c.fnInfoCallback;
        null !== c && (i = c.call(a.oInstance, a, d, e, f, g, i));
        h(b).html(i);
      }
    }
    function Db(a, b) {
      var c = a.fnFormatNumber,
        d = a._iDisplayStart + 1,
        e = a._iDisplayLength,
        f = a.fnRecordsDisplay(),
        g = -1 === e;
      return b
        .replace(/_START_/g, c.call(a, d))
        .replace(/_END_/g, c.call(a, a.fnDisplayEnd()))
        .replace(/_MAX_/g, c.call(a, a.fnRecordsTotal()))
        .replace(/_TOTAL_/g, c.call(a, f))
        .replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e)))
        .replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)));
    }
    function ia(a) {
      var b,
        c,
        d = a.iInitDisplayStart,
        e = a.aoColumns,
        f;
      c = a.oFeatures;
      var g = a.bDeferLoading;
      if (a.bInitialised) {
        nb(a);
        kb(a);
        ga(a, a.aoHeader);
        ga(a, a.aoFooter);
        C(a, !0);
        c.bAutoWidth && Ha(a);
        b = 0;
        for (c = e.length; b < c; b++)
          (f = e[b]), f.sWidth && (f.nTh.style.width = u(f.sWidth));
        w(a, null, "preInit", [a]);
        R(a);
        e = y(a);
        if ("ssp" != e || g)
          "ajax" == e
            ? ra(
                a,
                [],
                function (c) {
                  var f = sa(a, c);
                  for (b = 0; b < f.length; b++) L(a, f[b]);
                  a.iInitDisplayStart = d;
                  R(a);
                  C(a, !1);
                  ta(a, c);
                },
                a
              )
            : (C(a, !1), ta(a));
      } else
        setTimeout(function () {
          ia(a);
        }, 200);
    }
    function ta(a, b) {
      a._bInitComplete = !0;
      (b || a.oInit.aaData) && Y(a);
      w(a, "aoInitComplete", "init", [a, b]);
    }
    function Ra(a, b) {
      var c = parseInt(b, 10);
      a._iDisplayLength = c;
      Sa(a);
      w(a, null, "length", [a, c]);
    }
    function ob(a) {
      for (
        var b = a.oClasses,
          c = a.sTableId,
          d = a.aLengthMenu,
          e = h.isArray(d[0]),
          f = e ? d[0] : d,
          d = e ? d[1] : d,
          e = h("<select/>", {
            name: c + "_length",
            "aria-controls": c,
            class: b.sLengthSelect,
          }),
          g = 0,
          i = f.length;
        g < i;
        g++
      )
        e[0][g] = new Option(d[g], f[g]);
      var j = h("<div><label/></div>").addClass(b.sLength);
      a.aanFeatures.l || (j[0].id = c + "_length");
      j.children().append(
        a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML)
      );
      h("select", j)
        .val(a._iDisplayLength)
        .bind("change.DT", function () {
          Ra(a, h(this).val());
          M(a);
        });
      h(a.nTable).bind("length.dt.DT", function (b, c, d) {
        a === c && h("select", j).val(d);
      });
      return j[0];
    }
    function tb(a) {
      var b = a.sPaginationType,
        c = m.ext.pager[b],
        d = "function" === typeof c,
        e = function (a) {
          M(a);
        },
        b = h("<div/>").addClass(a.oClasses.sPaging + b)[0],
        f = a.aanFeatures;
      d || c.fnInit(a, b, e);
      f.p ||
        ((b.id = a.sTableId + "_paginate"),
        a.aoDrawCallback.push({
          fn: function (a) {
            if (d) {
              var b = a._iDisplayStart,
                j = a._iDisplayLength,
                h = a.fnRecordsDisplay(),
                l = -1 === j,
                b = l ? 0 : Math.ceil(b / j),
                j = l ? 1 : Math.ceil(h / j),
                h = c(b, j),
                k,
                l = 0;
              for (k = f.p.length; l < k; l++)
                Pa(a, "pageButton")(a, f.p[l], l, h, b, j);
            } else c.fnUpdate(a, e);
          },
          sName: "pagination",
        }));
      return b;
    }
    function Ta(a, b, c) {
      var d = a._iDisplayStart,
        e = a._iDisplayLength,
        f = a.fnRecordsDisplay();
      0 === f || -1 === e
        ? (d = 0)
        : "number" === typeof b
        ? ((d = b * e), d > f && (d = 0))
        : "first" == b
        ? (d = 0)
        : "previous" == b
        ? ((d = 0 <= e ? d - e : 0), 0 > d && (d = 0))
        : "next" == b
        ? d + e < f && (d += e)
        : "last" == b
        ? (d = Math.floor((f - 1) / e) * e)
        : J(a, 0, "Unknown paging action: " + b, 5);
      b = a._iDisplayStart !== d;
      a._iDisplayStart = d;
      b && (w(a, null, "page", [a]), c && M(a));
      return b;
    }
    function qb(a) {
      return h("<div/>", {
        id: !a.aanFeatures.r ? a.sTableId + "_processing" : null,
        class: a.oClasses.sProcessing,
      })
        .html(a.oLanguage.sProcessing)
        .insertBefore(a.nTable)[0];
    }
    function C(a, b) {
      a.oFeatures.bProcessing &&
        h(a.aanFeatures.r).css("display", b ? "block" : "none");
      w(a, null, "processing", [a, b]);
    }
    function rb(a) {
      var b = h(a.nTable);
      b.attr("role", "grid");
      var c = a.oScroll;
      if ("" === c.sX && "" === c.sY) return a.nTable;
      var d = c.sX,
        e = c.sY,
        f = a.oClasses,
        g = b.children("caption"),
        i = g.length ? g[0]._captionSide : null,
        j = h(b[0].cloneNode(!1)),
        n = h(b[0].cloneNode(!1)),
        l = b.children("tfoot");
      c.sX && "100%" === b.attr("width") && b.removeAttr("width");
      l.length || (l = null);
      j = h("<div/>", { class: f.sScrollWrapper })
        .append(
          h("<div/>", { class: f.sScrollHead })
            .css({
              overflow: "hidden",
              position: "relative",
              border: 0,
              width: d ? (!d ? null : u(d)) : "100%",
            })
            .append(
              h("<div/>", { class: f.sScrollHeadInner })
                .css({
                  "box-sizing": "content-box",
                  width: c.sXInner || "100%",
                })
                .append(
                  j
                    .removeAttr("id")
                    .css("margin-left", 0)
                    .append("top" === i ? g : null)
                    .append(b.children("thead"))
                )
            )
        )
        .append(
          h("<div/>", { class: f.sScrollBody })
            .css({
              position: "relative",
              overflow: "auto",
              width: !d ? null : u(d),
            })
            .append(b)
        );
      l &&
        j.append(
          h("<div/>", { class: f.sScrollFoot })
            .css({
              overflow: "hidden",
              border: 0,
              width: d ? (!d ? null : u(d)) : "100%",
            })
            .append(
              h("<div/>", { class: f.sScrollFootInner }).append(
                n
                  .removeAttr("id")
                  .css("margin-left", 0)
                  .append("bottom" === i ? g : null)
                  .append(b.children("tfoot"))
              )
            )
        );
      var b = j.children(),
        k = b[0],
        f = b[1],
        q = l ? b[2] : null;
      if (d)
        h(f).on("scroll.DT", function () {
          var a = this.scrollLeft;
          k.scrollLeft = a;
          l && (q.scrollLeft = a);
        });
      h(f).css(e && c.bCollapse ? "max-height" : "height", e);
      a.nScrollHead = k;
      a.nScrollBody = f;
      a.nScrollFoot = q;
      a.aoDrawCallback.push({ fn: Z, sName: "scrolling" });
      return j[0];
    }
    function Z(a) {
      var b = a.oScroll,
        c = b.sX,
        d = b.sXInner,
        e = b.sY,
        b = b.iBarWidth,
        f = h(a.nScrollHead),
        g = f[0].style,
        i = f.children("div"),
        j = i[0].style,
        n = i.children("table"),
        i = a.nScrollBody,
        l = h(i),
        k = i.style,
        q = h(a.nScrollFoot).children("div"),
        m = q.children("table"),
        o = h(a.nTHead),
        E = h(a.nTable),
        p = E[0],
        t = p.style,
        N = a.nTFoot ? h(a.nTFoot) : null,
        Eb = a.oBrowser,
        w = Eb.bScrollOversize,
        s,
        v,
        O,
        x,
        y = [],
        z = [],
        A = [],
        B,
        C = function (a) {
          a = a.style;
          a.paddingTop = "0";
          a.paddingBottom = "0";
          a.borderTopWidth = "0";
          a.borderBottomWidth = "0";
          a.height = 0;
        };
      E.children("thead, tfoot").remove();
      x = o.clone().prependTo(E);
      o = o.find("tr");
      v = x.find("tr");
      x.find("th, td").removeAttr("tabindex");
      N &&
        ((O = N.clone().prependTo(E)), (s = N.find("tr")), (O = O.find("tr")));
      c || ((k.width = "100%"), (f[0].style.width = "100%"));
      h.each(qa(a, x), function (b, c) {
        B = $(a, b);
        c.style.width = a.aoColumns[B].sWidth;
      });
      N &&
        H(function (a) {
          a.style.width = "";
        }, O);
      f = E.outerWidth();
      if ("" === c) {
        t.width = "100%";
        if (
          w &&
          (E.find("tbody").height() > i.offsetHeight ||
            "scroll" == l.css("overflow-y"))
        )
          t.width = u(E.outerWidth() - b);
        f = E.outerWidth();
      } else "" !== d && ((t.width = u(d)), (f = E.outerWidth()));
      H(C, v);
      H(function (a) {
        A.push(a.innerHTML);
        y.push(u(h(a).css("width")));
      }, v);
      H(function (a, b) {
        a.style.width = y[b];
      }, o);
      h(v).height(0);
      N &&
        (H(C, O),
        H(function (a) {
          z.push(u(h(a).css("width")));
        }, O),
        H(function (a, b) {
          a.style.width = z[b];
        }, s),
        h(O).height(0));
      H(function (a, b) {
        a.innerHTML =
          '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' +
          A[b] +
          "</div>";
        a.style.width = y[b];
      }, v);
      N &&
        H(function (a, b) {
          a.innerHTML = "";
          a.style.width = z[b];
        }, O);
      if (E.outerWidth() < f) {
        s =
          i.scrollHeight > i.offsetHeight || "scroll" == l.css("overflow-y")
            ? f + b
            : f;
        if (
          w &&
          (i.scrollHeight > i.offsetHeight || "scroll" == l.css("overflow-y"))
        )
          t.width = u(s - b);
        ("" === c || "" !== d) && J(a, 1, "Possible column misalignment", 6);
      } else s = "100%";
      k.width = u(s);
      g.width = u(s);
      N && (a.nScrollFoot.style.width = u(s));
      !e && w && (k.height = u(p.offsetHeight + b));
      c = E.outerWidth();
      n[0].style.width = u(c);
      j.width = u(c);
      d = E.height() > i.clientHeight || "scroll" == l.css("overflow-y");
      e = "padding" + (Eb.bScrollbarLeft ? "Left" : "Right");
      j[e] = d ? b + "px" : "0px";
      N &&
        ((m[0].style.width = u(c)),
        (q[0].style.width = u(c)),
        (q[0].style[e] = d ? b + "px" : "0px"));
      l.scroll();
      if ((a.bSorted || a.bFiltered) && !a._drawHold) i.scrollTop = 0;
    }
    function H(a, b, c) {
      for (var d = 0, e = 0, f = b.length, g, i; e < f; ) {
        g = b[e].firstChild;
        for (i = c ? c[e].firstChild : null; g; )
          1 === g.nodeType && (c ? a(g, i, d) : a(g, d), d++),
            (g = g.nextSibling),
            (i = c ? i.nextSibling : null);
        e++;
      }
    }
    function Ha(a) {
      var b = a.nTable,
        c = a.aoColumns,
        d = a.oScroll,
        e = d.sY,
        f = d.sX,
        g = d.sXInner,
        i = c.length,
        j = aa(a, "bVisible"),
        n = h("th", a.nTHead),
        l = b.getAttribute("width"),
        k = b.parentNode,
        q = !1,
        m,
        o,
        p;
      p = a.oBrowser;
      d = p.bScrollOversize;
      (m = b.style.width) && -1 !== m.indexOf("%") && (l = m);
      for (m = 0; m < j.length; m++)
        (o = c[j[m]]),
          null !== o.sWidth && ((o.sWidth = Fb(o.sWidthOrig, k)), (q = !0));
      if (d || (!q && !f && !e && i == ca(a) && i == n.length))
        for (m = 0; m < i; m++) {
          if ((j = $(a, m))) c[j].sWidth = u(n.eq(m).width());
        }
      else {
        i = h(b).clone().css("visibility", "hidden").removeAttr("id");
        i.find("tbody tr").remove();
        var t = h("<tr/>").appendTo(i.find("tbody"));
        i.find("thead, tfoot").remove();
        i.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());
        i.find("tfoot th, tfoot td").css("width", "");
        n = qa(a, i.find("thead")[0]);
        for (m = 0; m < j.length; m++)
          (o = c[j[m]]),
            (n[m].style.width =
              null !== o.sWidthOrig && "" !== o.sWidthOrig
                ? u(o.sWidthOrig)
                : "");
        if (a.aoData.length)
          for (m = 0; m < j.length; m++)
            (q = j[m]),
              (o = c[q]),
              h(Gb(a, q)).clone(!1).append(o.sContentPadding).appendTo(t);
        q = h("<div/>")
          .css(
            f || e
              ? {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: 1,
                  right: 0,
                  overflow: "hidden",
                }
              : {}
          )
          .append(i)
          .appendTo(k);
        f && g
          ? i.width(g)
          : f
          ? (i.css("width", "auto"),
            i.width() < k.clientWidth && i.width(k.clientWidth))
          : e
          ? i.width(k.clientWidth)
          : l && i.width(l);
        if (f) {
          for (m = g = 0; m < j.length; m++)
            (o = c[j[m]]),
              (e = p.bBounding
                ? n[m].getBoundingClientRect().width
                : h(n[m]).outerWidth()),
              (g +=
                null === o.sWidthOrig
                  ? e
                  : parseInt(o.sWidth, 10) + e - h(n[m]).width());
          i.width(u(g));
          b.style.width = u(g);
        }
        for (m = 0; m < j.length; m++)
          if (((o = c[j[m]]), (p = h(n[m]).width()))) o.sWidth = u(p);
        b.style.width = u(i.css("width"));
        q.remove();
      }
      l && (b.style.width = u(l));
      if ((l || f) && !a._reszEvt)
        (b = function () {
          h(Fa).bind(
            "resize.DT-" + a.sInstance,
            ua(function () {
              Y(a);
            })
          );
        }),
          d ? setTimeout(b, 1e3) : b(),
          (a._reszEvt = !0);
    }
    function ua(a, b) {
      var c = b !== k ? b : 200,
        d,
        e;
      return function () {
        var b = this,
          g = +new Date(),
          i = arguments;
        d && g < d + c
          ? (clearTimeout(e),
            (e = setTimeout(function () {
              d = k;
              a.apply(b, i);
            }, c)))
          : ((d = g), a.apply(b, i));
      };
    }
    function Fb(a, b) {
      if (!a) return 0;
      var c = h("<div/>")
          .css("width", u(a))
          .appendTo(b || T.body),
        d = c[0].offsetWidth;
      c.remove();
      return d;
    }
    function Gb(a, b) {
      var c = Hb(a, b);
      if (0 > c) return null;
      var d = a.aoData[c];
      return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b];
    }
    function Hb(a, b) {
      for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++)
        (c = B(a, f, b, "display") + ""),
          (c = c.replace($b, "")),
          c.length > d && ((d = c.length), (e = f));
      return e;
    }
    function u(a) {
      return null === a
        ? "0px"
        : "number" == typeof a
        ? 0 > a
          ? "0px"
          : a + "px"
        : a.match(/\d$/)
        ? a + "px"
        : a;
    }
    function V(a) {
      var b,
        c,
        d = [],
        e = a.aoColumns,
        f,
        g,
        i,
        j;
      b = a.aaSortingFixed;
      c = h.isPlainObject(b);
      var n = [];
      f = function (a) {
        a.length && !h.isArray(a[0]) ? n.push(a) : h.merge(n, a);
      };
      h.isArray(b) && f(b);
      c && b.pre && f(b.pre);
      f(a.aaSorting);
      c && b.post && f(b.post);
      for (a = 0; a < n.length; a++) {
        j = n[a][0];
        f = e[j].aDataSort;
        b = 0;
        for (c = f.length; b < c; b++)
          (g = f[b]),
            (i = e[g].sType || "string"),
            n[a]._idx === k && (n[a]._idx = h.inArray(n[a][1], e[g].asSorting)),
            d.push({
              src: j,
              col: g,
              dir: n[a][1],
              index: n[a]._idx,
              type: i,
              formatter: m.ext.type.order[i + "-pre"],
            });
      }
      return d;
    }
    function mb(a) {
      var b,
        c,
        d = [],
        e = m.ext.type.order,
        f = a.aoData,
        g = 0,
        i,
        j = a.aiDisplayMaster,
        h;
      Ia(a);
      h = V(a);
      b = 0;
      for (c = h.length; b < c; b++)
        (i = h[b]), i.formatter && g++, Ib(a, i.col);
      if ("ssp" != y(a) && 0 !== h.length) {
        b = 0;
        for (c = j.length; b < c; b++) d[j[b]] = b;
        g === h.length
          ? j.sort(function (a, b) {
              var c,
                e,
                g,
                i,
                j = h.length,
                k = f[a]._aSortData,
                m = f[b]._aSortData;
              for (g = 0; g < j; g++)
                if (
                  ((i = h[g]),
                  (c = k[i.col]),
                  (e = m[i.col]),
                  (c = c < e ? -1 : c > e ? 1 : 0),
                  0 !== c)
                )
                  return "asc" === i.dir ? c : -c;
              c = d[a];
              e = d[b];
              return c < e ? -1 : c > e ? 1 : 0;
            })
          : j.sort(function (a, b) {
              var c,
                g,
                i,
                j,
                k = h.length,
                m = f[a]._aSortData,
                p = f[b]._aSortData;
              for (i = 0; i < k; i++)
                if (
                  ((j = h[i]),
                  (c = m[j.col]),
                  (g = p[j.col]),
                  (j = e[j.type + "-" + j.dir] || e["string-" + j.dir]),
                  (c = j(c, g)),
                  0 !== c)
                )
                  return c;
              c = d[a];
              g = d[b];
              return c < g ? -1 : c > g ? 1 : 0;
            });
      }
      a.bSorted = !0;
    }
    function Jb(a) {
      for (
        var b,
          c,
          d = a.aoColumns,
          e = V(a),
          a = a.oLanguage.oAria,
          f = 0,
          g = d.length;
        f < g;
        f++
      ) {
        c = d[f];
        var i = c.asSorting;
        b = c.sTitle.replace(/<.*?>/g, "");
        var j = c.nTh;
        j.removeAttribute("aria-sort");
        c.bSortable &&
          (0 < e.length && e[0].col == f
            ? (j.setAttribute(
                "aria-sort",
                "asc" == e[0].dir ? "ascending" : "descending"
              ),
              (c = i[e[0].index + 1] || i[0]))
            : (c = i[0]),
          (b += "asc" === c ? a.sSortAscending : a.sSortDescending));
        j.setAttribute("aria-label", b);
      }
    }
    function Ua(a, b, c, d) {
      var e = a.aaSorting,
        f = a.aoColumns[b].asSorting,
        g = function (a, b) {
          var c = a._idx;
          c === k && (c = h.inArray(a[1], f));
          return c + 1 < f.length ? c + 1 : b ? null : 0;
        };
      "number" === typeof e[0] && (e = a.aaSorting = [e]);
      c && a.oFeatures.bSortMulti
        ? ((c = h.inArray(b, D(e, "0"))),
          -1 !== c
            ? ((b = g(e[c], !0)),
              null === b && 1 === e.length && (b = 0),
              null === b ? e.splice(c, 1) : ((e[c][1] = f[b]), (e[c]._idx = b)))
            : (e.push([b, f[0], 0]), (e[e.length - 1]._idx = 0)))
        : e.length && e[0][0] == b
        ? ((b = g(e[0])), (e.length = 1), (e[0][1] = f[b]), (e[0]._idx = b))
        : ((e.length = 0), e.push([b, f[0]]), (e[0]._idx = 0));
      R(a);
      "function" == typeof d && d(a);
    }
    function Oa(a, b, c, d) {
      var e = a.aoColumns[c];
      Va(b, {}, function (b) {
        !1 !== e.bSortable &&
          (a.oFeatures.bProcessing
            ? (C(a, !0),
              setTimeout(function () {
                Ua(a, c, b.shiftKey, d);
                "ssp" !== y(a) && C(a, !1);
              }, 0))
            : Ua(a, c, b.shiftKey, d));
      });
    }
    function xa(a) {
      var b = a.aLastSort,
        c = a.oClasses.sSortColumn,
        d = V(a),
        e = a.oFeatures,
        f,
        g;
      if (e.bSort && e.bSortClasses) {
        e = 0;
        for (f = b.length; e < f; e++)
          (g = b[e].src),
            h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
        e = 0;
        for (f = d.length; e < f; e++)
          (g = d[e].src),
            h(D(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3));
      }
      a.aLastSort = d;
    }
    function Ib(a, b) {
      var c = a.aoColumns[b],
        d = m.ext.order[c.sSortDataType],
        e;
      d && (e = d.call(a.oInstance, a, b, ba(a, b)));
      for (
        var f,
          g = m.ext.type.order[c.sType + "-pre"],
          i = 0,
          h = a.aoData.length;
        i < h;
        i++
      )
        if (
          ((c = a.aoData[i]),
          c._aSortData || (c._aSortData = []),
          !c._aSortData[b] || d)
        )
          (f = d ? e[i] : B(a, i, b, "sort")), (c._aSortData[b] = g ? g(f) : f);
    }
    function ya(a) {
      if (a.oFeatures.bStateSave && !a.bDestroying) {
        var b = {
          time: +new Date(),
          start: a._iDisplayStart,
          length: a._iDisplayLength,
          order: h.extend(!0, [], a.aaSorting),
          search: Ab(a.oPreviousSearch),
          columns: h.map(a.aoColumns, function (b, d) {
            return { visible: b.bVisible, search: Ab(a.aoPreSearchCols[d]) };
          }),
        };
        w(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
        a.oSavedState = b;
        a.fnStateSaveCallback.call(a.oInstance, a, b);
      }
    }
    function Kb(a) {
      var b,
        c,
        d = a.aoColumns;
      if (a.oFeatures.bStateSave) {
        var e = a.fnStateLoadCallback.call(a.oInstance, a);
        if (
          e &&
          e.time &&
          ((b = w(a, "aoStateLoadParams", "stateLoadParams", [a, e])),
          -1 === h.inArray(!1, b) &&
            ((b = a.iStateDuration),
            !(0 < b && e.time < +new Date() - 1e3 * b) &&
              d.length === e.columns.length))
        ) {
          a.oLoadedState = h.extend(!0, {}, e);
          e.start !== k &&
            ((a._iDisplayStart = e.start), (a.iInitDisplayStart = e.start));
          e.length !== k && (a._iDisplayLength = e.length);
          e.order !== k &&
            ((a.aaSorting = []),
            h.each(e.order, function (b, c) {
              a.aaSorting.push(c[0] >= d.length ? [0, c[1]] : c);
            }));
          e.search !== k && h.extend(a.oPreviousSearch, Bb(e.search));
          b = 0;
          for (c = e.columns.length; b < c; b++) {
            var f = e.columns[b];
            f.visible !== k && (d[b].bVisible = f.visible);
            f.search !== k && h.extend(a.aoPreSearchCols[b], Bb(f.search));
          }
          w(a, "aoStateLoaded", "stateLoaded", [a, e]);
        }
      }
    }
    function za(a) {
      var b = m.settings,
        a = h.inArray(a, D(b, "nTable"));
      return -1 !== a ? b[a] : null;
    }
    function J(a, b, c, d) {
      c =
        "DataTables warning: " +
        (a ? "table id=" + a.sTableId + " - " : "") +
        c;
      d &&
        (c +=
          ". For more information about this error, please see http://datatables.net/tn/" +
          d);
      if (b) Fa.console && console.log && console.log(c);
      else if (
        ((b = m.ext),
        (b = b.sErrMode || b.errMode),
        a && w(a, null, "error", [a, d, c]),
        "alert" == b)
      )
        alert(c);
      else {
        if ("throw" == b) throw Error(c);
        "function" == typeof b && b(a, d, c);
      }
    }
    function F(a, b, c, d) {
      h.isArray(c)
        ? h.each(c, function (c, d) {
            h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d);
          })
        : (d === k && (d = c), b[c] !== k && (a[d] = b[c]));
    }
    function Lb(a, b, c) {
      var d, e;
      for (e in b)
        b.hasOwnProperty(e) &&
          ((d = b[e]),
          h.isPlainObject(d)
            ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d))
            : (a[e] =
                c && "data" !== e && "aaData" !== e && h.isArray(d)
                  ? d.slice()
                  : d));
      return a;
    }
    function Va(a, b, c) {
      h(a)
        .bind("click.DT", b, function (b) {
          a.blur();
          c(b);
        })
        .bind("keypress.DT", b, function (a) {
          13 === a.which && (a.preventDefault(), c(a));
        })
        .bind("selectstart.DT", function () {
          return !1;
        });
    }
    function z(a, b, c, d) {
      c && a[b].push({ fn: c, sName: d });
    }
    function w(a, b, c, d) {
      var e = [];
      b &&
        (e = h.map(a[b].slice().reverse(), function (b) {
          return b.fn.apply(a.oInstance, d);
        }));
      null !== c &&
        ((b = h.Event(c + ".dt")), h(a.nTable).trigger(b, d), e.push(b.result));
      return e;
    }
    function Sa(a) {
      var b = a._iDisplayStart,
        c = a.fnDisplayEnd(),
        d = a._iDisplayLength;
      b >= c && (b = c - d);
      b -= b % d;
      if (-1 === d || 0 > b) b = 0;
      a._iDisplayStart = b;
    }
    function Pa(a, b) {
      var c = a.renderer,
        d = m.ext.renderer[b];
      return h.isPlainObject(c) && c[b]
        ? d[c[b]] || d._
        : "string" === typeof c
        ? d[c] || d._
        : d._;
    }
    function y(a) {
      return a.oFeatures.bServerSide
        ? "ssp"
        : a.ajax || a.sAjaxSource
        ? "ajax"
        : "dom";
    }
    function Aa(a, b) {
      var c = [],
        c = Mb.numbers_length,
        d = Math.floor(c / 2);
      b <= c
        ? (c = W(0, b))
        : a <= d
        ? ((c = W(0, c - 2)), c.push("ellipsis"), c.push(b - 1))
        : (a >= b - 1 - d
            ? (c = W(b - (c - 2), b))
            : ((c = W(a - d + 2, a + d - 1)),
              c.push("ellipsis"),
              c.push(b - 1)),
          c.splice(0, 0, "ellipsis"),
          c.splice(0, 0, 0));
      c.DT_el = "span";
      return c;
    }
    function cb(a) {
      h.each(
        {
          num: function (b) {
            return Ba(b, a);
          },
          "num-fmt": function (b) {
            return Ba(b, a, Wa);
          },
          "html-num": function (b) {
            return Ba(b, a, Ca);
          },
          "html-num-fmt": function (b) {
            return Ba(b, a, Ca, Wa);
          },
        },
        function (b, c) {
          v.type.order[b + a + "-pre"] = c;
          b.match(/^html\-/) && (v.type.search[b + a] = v.type.search.html);
        }
      );
    }
    function Nb(a) {
      return function () {
        var b = [za(this[m.ext.iApiIndex])].concat(
          Array.prototype.slice.call(arguments)
        );
        return m.ext.internal[a].apply(this, b);
      };
    }
    var m,
      v,
      t,
      p,
      s,
      Xa = {},
      Ob = /[\r\n]/g,
      Ca = /<.*?>/g,
      ac = /^[\w\+\-]/,
      bc = /[\w\+\-]$/,
      Yb = RegExp(
        "(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)",
        "g"
      ),
      Wa = /[',$Â£â‚¬Â¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
      K = function (a) {
        return !a || !0 === a || "-" === a ? !0 : !1;
      },
      Pb = function (a) {
        var b = parseInt(a, 10);
        return !isNaN(b) && isFinite(a) ? b : null;
      },
      Qb = function (a, b) {
        Xa[b] || (Xa[b] = RegExp(va(b), "g"));
        return "string" === typeof a && "." !== b
          ? a.replace(/\./g, "").replace(Xa[b], ".")
          : a;
      },
      Ya = function (a, b, c) {
        var d = "string" === typeof a;
        if (K(a)) return !0;
        b && d && (a = Qb(a, b));
        c && d && (a = a.replace(Wa, ""));
        return !isNaN(parseFloat(a)) && isFinite(a);
      },
      Rb = function (a, b, c) {
        return K(a)
          ? !0
          : !(K(a) || "string" === typeof a)
          ? null
          : Ya(a.replace(Ca, ""), b, c)
          ? !0
          : null;
      },
      D = function (a, b, c) {
        var d = [],
          e = 0,
          f = a.length;
        if (c !== k) for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
        else for (; e < f; e++) a[e] && d.push(a[e][b]);
        return d;
      },
      ja = function (a, b, c, d) {
        var e = [],
          f = 0,
          g = b.length;
        if (d !== k) for (; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
        else for (; f < g; f++) e.push(a[b[f]][c]);
        return e;
      },
      W = function (a, b) {
        var c = [],
          d;
        b === k ? ((b = 0), (d = a)) : ((d = b), (b = a));
        for (var e = b; e < d; e++) c.push(e);
        return c;
      },
      Sb = function (a) {
        for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
        return b;
      },
      pa = function (a) {
        var b = [],
          c,
          d,
          e = a.length,
          f,
          g = 0;
        d = 0;
        a: for (; d < e; d++) {
          c = a[d];
          for (f = 0; f < g; f++) if (b[f] === c) continue a;
          b.push(c);
          g++;
        }
        return b;
      },
      A = function (a, b, c) {
        a[b] !== k && (a[c] = a[b]);
      },
      da = /\[.*?\]$/,
      U = /\(\)$/,
      wa = h("<div>")[0],
      Zb = wa.textContent !== k,
      $b = /<.*?>/g;
    m = function (a) {
      this.$ = function (a, b) {
        return this.api(!0).$(a, b);
      };
      this._ = function (a, b) {
        return this.api(!0).rows(a, b).data();
      };
      this.api = function (a) {
        return a ? new t(za(this[v.iApiIndex])) : new t(this);
      };
      this.fnAddData = function (a, b) {
        var c = this.api(!0),
          d =
            h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0]))
              ? c.rows.add(a)
              : c.row.add(a);
        (b === k || b) && c.draw();
        return d.flatten().toArray();
      };
      this.fnAdjustColumnSizing = function (a) {
        var b = this.api(!0).columns.adjust(),
          c = b.settings()[0],
          d = c.oScroll;
        a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && Z(c);
      };
      this.fnClearTable = function (a) {
        var b = this.api(!0).clear();
        (a === k || a) && b.draw();
      };
      this.fnClose = function (a) {
        this.api(!0).row(a).child.hide();
      };
      this.fnDeleteRow = function (a, b, c) {
        var d = this.api(!0),
          a = d.rows(a),
          e = a.settings()[0],
          h = e.aoData[a[0][0]];
        a.remove();
        b && b.call(this, e, h);
        (c === k || c) && d.draw();
        return h;
      };
      this.fnDestroy = function (a) {
        this.api(!0).destroy(a);
      };
      this.fnDraw = function (a) {
        this.api(!0).draw(a);
      };
      this.fnFilter = function (a, b, c, d, e, h) {
        e = this.api(!0);
        null === b || b === k
          ? e.search(a, c, d, h)
          : e.column(b).search(a, c, d, h);
        e.draw();
      };
      this.fnGetData = function (a, b) {
        var c = this.api(!0);
        if (a !== k) {
          var d = a.nodeName ? a.nodeName.toLowerCase() : "";
          return b !== k || "td" == d || "th" == d
            ? c.cell(a, b).data()
            : c.row(a).data() || null;
        }
        return c.data().toArray();
      };
      this.fnGetNodes = function (a) {
        var b = this.api(!0);
        return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray();
      };
      this.fnGetPosition = function (a) {
        var b = this.api(!0),
          c = a.nodeName.toUpperCase();
        return "TR" == c
          ? b.row(a).index()
          : "TD" == c || "TH" == c
          ? ((a = b.cell(a).index()), [a.row, a.columnVisible, a.column])
          : null;
      };
      this.fnIsOpen = function (a) {
        return this.api(!0).row(a).child.isShown();
      };
      this.fnOpen = function (a, b, c) {
        return this.api(!0).row(a).child(b, c).show().child()[0];
      };
      this.fnPageChange = function (a, b) {
        var c = this.api(!0).page(a);
        (b === k || b) && c.draw(!1);
      };
      this.fnSetColumnVis = function (a, b, c) {
        a = this.api(!0).column(a).visible(b);
        (c === k || c) && a.columns.adjust().draw();
      };
      this.fnSettings = function () {
        return za(this[v.iApiIndex]);
      };
      this.fnSort = function (a) {
        this.api(!0).order(a).draw();
      };
      this.fnSortListener = function (a, b, c) {
        this.api(!0).order.listener(a, b, c);
      };
      this.fnUpdate = function (a, b, c, d, e) {
        var h = this.api(!0);
        c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
        (e === k || e) && h.columns.adjust();
        (d === k || d) && h.draw();
        return 0;
      };
      this.fnVersionCheck = v.fnVersionCheck;
      var b = this,
        c = a === k,
        d = this.length;
      c && (a = {});
      this.oApi = this.internal = v.internal;
      for (var e in m.ext.internal) e && (this[e] = Nb(e));
      this.each(function () {
        var e = {},
          e = 1 < d ? Lb(e, a, !0) : a,
          g = 0,
          i,
          j = this.getAttribute("id"),
          n = !1,
          l = m.defaults,
          r = h(this);
        if ("table" != this.nodeName.toLowerCase())
          J(
            null,
            0,
            "Non-table node initialisation (" + this.nodeName + ")",
            2
          );
        else {
          db(l);
          eb(l.column);
          I(l, l, !0);
          I(l.column, l.column, !0);
          I(l, h.extend(e, r.data()));
          var q = m.settings,
            g = 0;
          for (i = q.length; g < i; g++) {
            var p = q[g];
            if (
              p.nTable == this ||
              p.nTHead.parentNode == this ||
              (p.nTFoot && p.nTFoot.parentNode == this)
            ) {
              g = e.bRetrieve !== k ? e.bRetrieve : l.bRetrieve;
              if (c || g) return p.oInstance;
              if (e.bDestroy !== k ? e.bDestroy : l.bDestroy) {
                p.oInstance.fnDestroy();
                break;
              } else {
                J(p, 0, "Cannot reinitialise DataTable", 3);
                return;
              }
            }
            if (p.sTableId == this.id) {
              q.splice(g, 1);
              break;
            }
          }
          if (null === j || "" === j)
            this.id = j = "DataTables_Table_" + m.ext._unique++;
          var o = h.extend(!0, {}, m.models.oSettings, {
            sDestroyWidth: r[0].style.width,
            sInstance: j,
            sTableId: j,
          });
          o.nTable = this;
          o.oApi = b.internal;
          o.oInit = e;
          q.push(o);
          o.oInstance = 1 === b.length ? b : r.dataTable();
          db(e);
          e.oLanguage && S(e.oLanguage);
          e.aLengthMenu &&
            !e.iDisplayLength &&
            (e.iDisplayLength = h.isArray(e.aLengthMenu[0])
              ? e.aLengthMenu[0][0]
              : e.aLengthMenu[0]);
          e = Lb(h.extend(!0, {}, l), e);
          F(
            o.oFeatures,
            e,
            "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(
              " "
            )
          );
          F(o, e, [
            "asStripeClasses",
            "ajax",
            "fnServerData",
            "fnFormatNumber",
            "sServerMethod",
            "aaSorting",
            "aaSortingFixed",
            "aLengthMenu",
            "sPaginationType",
            "sAjaxSource",
            "sAjaxDataProp",
            "iStateDuration",
            "sDom",
            "bSortCellsTop",
            "iTabIndex",
            "fnStateLoadCallback",
            "fnStateSaveCallback",
            "renderer",
            "searchDelay",
            "rowId",
            ["iCookieDuration", "iStateDuration"],
            ["oSearch", "oPreviousSearch"],
            ["aoSearchCols", "aoPreSearchCols"],
            ["iDisplayLength", "_iDisplayLength"],
            ["bJQueryUI", "bJUI"],
          ]);
          F(o.oScroll, e, [
            ["sScrollX", "sX"],
            ["sScrollXInner", "sXInner"],
            ["sScrollY", "sY"],
            ["bScrollCollapse", "bCollapse"],
          ]);
          F(o.oLanguage, e, "fnInfoCallback");
          z(o, "aoDrawCallback", e.fnDrawCallback, "user");
          z(o, "aoServerParams", e.fnServerParams, "user");
          z(o, "aoStateSaveParams", e.fnStateSaveParams, "user");
          z(o, "aoStateLoadParams", e.fnStateLoadParams, "user");
          z(o, "aoStateLoaded", e.fnStateLoaded, "user");
          z(o, "aoRowCallback", e.fnRowCallback, "user");
          z(o, "aoRowCreatedCallback", e.fnCreatedRow, "user");
          z(o, "aoHeaderCallback", e.fnHeaderCallback, "user");
          z(o, "aoFooterCallback", e.fnFooterCallback, "user");
          z(o, "aoInitComplete", e.fnInitComplete, "user");
          z(o, "aoPreDrawCallback", e.fnPreDrawCallback, "user");
          o.rowIdFn = P(e.rowId);
          fb(o);
          j = o.oClasses;
          e.bJQueryUI
            ? (h.extend(j, m.ext.oJUIClasses, e.oClasses),
              e.sDom === l.sDom &&
                "lfrtip" === l.sDom &&
                (o.sDom = '<"H"lfr>t<"F"ip>'),
              o.renderer)
              ? h.isPlainObject(o.renderer) &&
                !o.renderer.header &&
                (o.renderer.header = "jqueryui")
              : (o.renderer = "jqueryui")
            : h.extend(j, m.ext.classes, e.oClasses);
          r.addClass(j.sTable);
          o.iInitDisplayStart === k &&
            ((o.iInitDisplayStart = e.iDisplayStart),
            (o._iDisplayStart = e.iDisplayStart));
          null !== e.iDeferLoading &&
            ((o.bDeferLoading = !0),
            (g = h.isArray(e.iDeferLoading)),
            (o._iRecordsDisplay = g ? e.iDeferLoading[0] : e.iDeferLoading),
            (o._iRecordsTotal = g ? e.iDeferLoading[1] : e.iDeferLoading));
          var t = o.oLanguage;
          h.extend(!0, t, e.oLanguage);
          "" !== t.sUrl &&
            (h.ajax({
              dataType: "json",
              url: t.sUrl,
              success: function (a) {
                S(a);
                I(l.oLanguage, a);
                h.extend(!0, t, a);
                ia(o);
              },
              error: function () {
                ia(o);
              },
            }),
            (n = !0));
          null === e.asStripeClasses &&
            (o.asStripeClasses = [j.sStripeOdd, j.sStripeEven]);
          var g = o.asStripeClasses,
            s = r.children("tbody").find("tr").eq(0);
          -1 !==
            h.inArray(
              !0,
              h.map(g, function (a) {
                return s.hasClass(a);
              })
            ) &&
            (h("tbody tr", this).removeClass(g.join(" ")),
            (o.asDestroyStripes = g.slice()));
          q = [];
          g = this.getElementsByTagName("thead");
          0 !== g.length && (fa(o.aoHeader, g[0]), (q = qa(o)));
          if (null === e.aoColumns) {
            p = [];
            g = 0;
            for (i = q.length; g < i; g++) p.push(null);
          } else p = e.aoColumns;
          g = 0;
          for (i = p.length; g < i; g++) Ga(o, q ? q[g] : null);
          hb(o, e.aoColumnDefs, p, function (a, b) {
            la(o, a, b);
          });
          if (s.length) {
            var u = function (a, b) {
              return a.getAttribute("data-" + b) !== null ? b : null;
            };
            h(s[0])
              .children("th, td")
              .each(function (a, b) {
                var c = o.aoColumns[a];
                if (c.mData === a) {
                  var d = u(b, "sort") || u(b, "order"),
                    e = u(b, "filter") || u(b, "search");
                  if (d !== null || e !== null) {
                    c.mData = {
                      _: a + ".display",
                      sort: d !== null ? a + ".@data-" + d : k,
                      type: d !== null ? a + ".@data-" + d : k,
                      filter: e !== null ? a + ".@data-" + e : k,
                    };
                    la(o, a);
                  }
                }
              });
          }
          var v = o.oFeatures;
          e.bStateSave &&
            ((v.bStateSave = !0),
            Kb(o, e),
            z(o, "aoDrawCallback", ya, "state_save"));
          if (e.aaSorting === k) {
            q = o.aaSorting;
            g = 0;
            for (i = q.length; g < i; g++)
              q[g][1] = o.aoColumns[g].asSorting[0];
          }
          xa(o);
          v.bSort &&
            z(o, "aoDrawCallback", function () {
              if (o.bSorted) {
                var a = V(o),
                  b = {};
                h.each(a, function (a, c) {
                  b[c.src] = c.dir;
                });
                w(o, null, "order", [o, a, b]);
                Jb(o);
              }
            });
          z(
            o,
            "aoDrawCallback",
            function () {
              (o.bSorted || y(o) === "ssp" || v.bDeferRender) && xa(o);
            },
            "sc"
          );
          g = r.children("caption").each(function () {
            this._captionSide = r.css("caption-side");
          });
          i = r.children("thead");
          0 === i.length && (i = h("<thead/>").appendTo(this));
          o.nTHead = i[0];
          i = r.children("tbody");
          0 === i.length && (i = h("<tbody/>").appendTo(this));
          o.nTBody = i[0];
          i = r.children("tfoot");
          if (
            0 === i.length &&
            0 < g.length &&
            ("" !== o.oScroll.sX || "" !== o.oScroll.sY)
          )
            i = h("<tfoot/>").appendTo(this);
          0 === i.length || 0 === i.children().length
            ? r.addClass(j.sNoFooter)
            : 0 < i.length && ((o.nTFoot = i[0]), fa(o.aoFooter, o.nTFoot));
          if (e.aaData) for (g = 0; g < e.aaData.length; g++) L(o, e.aaData[g]);
          else
            (o.bDeferLoading || "dom" == y(o)) &&
              ma(o, h(o.nTBody).children("tr"));
          o.aiDisplay = o.aiDisplayMaster.slice();
          o.bInitialised = !0;
          !1 === n && ia(o);
        }
      });
      b = null;
      return this;
    };
    var Tb = [],
      x = Array.prototype,
      cc = function (a) {
        var b,
          c,
          d = m.settings,
          e = h.map(d, function (a) {
            return a.nTable;
          });
        if (a) {
          if (a.nTable && a.oApi) return [a];
          if (a.nodeName && "table" === a.nodeName.toLowerCase())
            return (b = h.inArray(a, e)), -1 !== b ? [d[b]] : null;
          if (a && "function" === typeof a.settings)
            return a.settings().toArray();
          "string" === typeof a ? (c = h(a)) : a instanceof h && (c = a);
        } else return [];
        if (c)
          return c
            .map(function () {
              b = h.inArray(this, e);
              return -1 !== b ? d[b] : null;
            })
            .toArray();
      };
    t = function (a, b) {
      if (!(this instanceof t)) return new t(a, b);
      var c = [],
        d = function (a) {
          (a = cc(a)) && (c = c.concat(a));
        };
      if (h.isArray(a)) for (var e = 0, f = a.length; e < f; e++) d(a[e]);
      else d(a);
      this.context = pa(c);
      b && h.merge(this, b);
      this.selector = { rows: null, cols: null, opts: null };
      t.extend(this, this, Tb);
    };
    m.Api = t;
    h.extend(t.prototype, {
      any: function () {
        return 0 !== this.count();
      },
      concat: x.concat,
      context: [],
      count: function () {
        return this.flatten().length;
      },
      each: function (a) {
        for (var b = 0, c = this.length; b < c; b++)
          a.call(this, this[b], b, this);
        return this;
      },
      eq: function (a) {
        var b = this.context;
        return b.length > a ? new t(b[a], this[a]) : null;
      },
      filter: function (a) {
        var b = [];
        if (x.filter) b = x.filter.call(this, a, this);
        else
          for (var c = 0, d = this.length; c < d; c++)
            a.call(this, this[c], c, this) && b.push(this[c]);
        return new t(this.context, b);
      },
      flatten: function () {
        var a = [];
        return new t(this.context, a.concat.apply(a, this.toArray()));
      },
      join: x.join,
      indexOf:
        x.indexOf ||
        function (a, b) {
          for (var c = b || 0, d = this.length; c < d; c++)
            if (this[c] === a) return c;
          return -1;
        },
      iterator: function (a, b, c, d) {
        var e = [],
          f,
          g,
          h,
          j,
          n,
          l = this.context,
          m,
          q,
          p = this.selector;
        "string" === typeof a && ((d = c), (c = b), (b = a), (a = !1));
        g = 0;
        for (h = l.length; g < h; g++) {
          var o = new t(l[g]);
          if ("table" === b) (f = c.call(o, l[g], g)), f !== k && e.push(f);
          else if ("columns" === b || "rows" === b)
            (f = c.call(o, l[g], this[g], g)), f !== k && e.push(f);
          else if (
            "column" === b ||
            "column-rows" === b ||
            "row" === b ||
            "cell" === b
          ) {
            q = this[g];
            "column-rows" === b && (m = Da(l[g], p.opts));
            j = 0;
            for (n = q.length; j < n; j++)
              (f = q[j]),
                (f =
                  "cell" === b
                    ? c.call(o, l[g], f.row, f.column, g, j)
                    : c.call(o, l[g], f, g, j, m)),
                f !== k && e.push(f);
          }
        }
        return e.length || d
          ? ((a = new t(l, a ? e.concat.apply([], e) : e)),
            (b = a.selector),
            (b.rows = p.rows),
            (b.cols = p.cols),
            (b.opts = p.opts),
            a)
          : this;
      },
      lastIndexOf:
        x.lastIndexOf ||
        function (a, b) {
          return this.indexOf.apply(this.toArray.reverse(), arguments);
        },
      length: 0,
      map: function (a) {
        var b = [];
        if (x.map) b = x.map.call(this, a, this);
        else
          for (var c = 0, d = this.length; c < d; c++)
            b.push(a.call(this, this[c], c));
        return new t(this.context, b);
      },
      pluck: function (a) {
        return this.map(function (b) {
          return b[a];
        });
      },
      pop: x.pop,
      push: x.push,
      reduce:
        x.reduce ||
        function (a, b) {
          return gb(this, a, b, 0, this.length, 1);
        },
      reduceRight:
        x.reduceRight ||
        function (a, b) {
          return gb(this, a, b, this.length - 1, -1, -1);
        },
      reverse: x.reverse,
      selector: null,
      shift: x.shift,
      sort: x.sort,
      splice: x.splice,
      toArray: function () {
        return x.slice.call(this);
      },
      to$: function () {
        return h(this);
      },
      toJQuery: function () {
        return h(this);
      },
      unique: function () {
        return new t(this.context, pa(this));
      },
      unshift: x.unshift,
    });
    t.extend = function (a, b, c) {
      if (c.length && b && (b instanceof t || b.__dt_wrapper)) {
        var d,
          e,
          f,
          g = function (a, b, c) {
            return function () {
              var d = b.apply(a, arguments);
              t.extend(d, d, c.methodExt);
              return d;
            };
          };
        d = 0;
        for (e = c.length; d < e; d++)
          (f = c[d]),
            (b[f.name] =
              "function" === typeof f.val
                ? g(a, f.val, f)
                : h.isPlainObject(f.val)
                ? {}
                : f.val),
            (b[f.name].__dt_wrapper = !0),
            t.extend(a, b[f.name], f.propExt);
      }
    };
    t.register = p = function (a, b) {
      if (h.isArray(a))
        for (var c = 0, d = a.length; c < d; c++) t.register(a[c], b);
      else
        for (
          var e = a.split("."), f = Tb, g, i, c = 0, d = e.length;
          c < d;
          c++
        ) {
          g = (i = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
          var j;
          a: {
            j = 0;
            for (var n = f.length; j < n; j++)
              if (f[j].name === g) {
                j = f[j];
                break a;
              }
            j = null;
          }
          j ||
            ((j = { name: g, val: {}, methodExt: [], propExt: [] }), f.push(j));
          c === d - 1 ? (j.val = b) : (f = i ? j.methodExt : j.propExt);
        }
    };
    t.registerPlural = s = function (a, b, c) {
      t.register(a, c);
      t.register(b, function () {
        var a = c.apply(this, arguments);
        return a === this
          ? this
          : a instanceof t
          ? a.length
            ? h.isArray(a[0])
              ? new t(a.context, a[0])
              : a[0]
            : k
          : a;
      });
    };
    p("tables()", function (a) {
      var b;
      if (a) {
        b = t;
        var c = this.context;
        if ("number" === typeof a) a = [c[a]];
        else
          var d = h.map(c, function (a) {
              return a.nTable;
            }),
            a = h(d)
              .filter(a)
              .map(function () {
                var a = h.inArray(this, d);
                return c[a];
              })
              .toArray();
        b = new b(a);
      } else b = this;
      return b;
    });
    p("table()", function (a) {
      var a = this.tables(a),
        b = a.context;
      return b.length ? new t(b[0]) : a;
    });
    s("tables().nodes()", "table().node()", function () {
      return this.iterator(
        "table",
        function (a) {
          return a.nTable;
        },
        1
      );
    });
    s("tables().body()", "table().body()", function () {
      return this.iterator(
        "table",
        function (a) {
          return a.nTBody;
        },
        1
      );
    });
    s("tables().header()", "table().header()", function () {
      return this.iterator(
        "table",
        function (a) {
          return a.nTHead;
        },
        1
      );
    });
    s("tables().footer()", "table().footer()", function () {
      return this.iterator(
        "table",
        function (a) {
          return a.nTFoot;
        },
        1
      );
    });
    s("tables().containers()", "table().container()", function () {
      return this.iterator(
        "table",
        function (a) {
          return a.nTableWrapper;
        },
        1
      );
    });
    p("draw()", function (a) {
      return this.iterator("table", function (b) {
        "page" === a
          ? M(b)
          : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0),
            R(b, !1 === a));
      });
    });
    p("page()", function (a) {
      return a === k
        ? this.page.info().page
        : this.iterator("table", function (b) {
            Ta(b, a);
          });
    });
    p("page.info()", function () {
      if (0 === this.context.length) return k;
      var a = this.context[0],
        b = a._iDisplayStart,
        c = a._iDisplayLength,
        d = a.fnRecordsDisplay(),
        e = -1 === c;
      return {
        page: e ? 0 : Math.floor(b / c),
        pages: e ? 1 : Math.ceil(d / c),
        start: b,
        end: a.fnDisplayEnd(),
        length: c,
        recordsTotal: a.fnRecordsTotal(),
        recordsDisplay: d,
        serverSide: "ssp" === y(a),
      };
    });
    p("page.len()", function (a) {
      return a === k
        ? 0 !== this.context.length
          ? this.context[0]._iDisplayLength
          : k
        : this.iterator("table", function (b) {
            Ra(b, a);
          });
    });
    var Ub = function (a, b, c) {
      if (c) {
        var d = new t(a);
        d.one("draw", function () {
          c(d.ajax.json());
        });
      }
      if ("ssp" == y(a)) R(a, b);
      else {
        C(a, !0);
        var e = a.jqXHR;
        e && 4 !== e.readyState && e.abort();
        ra(a, [], function (c) {
          na(a);
          for (var c = sa(a, c), d = 0, e = c.length; d < e; d++) L(a, c[d]);
          R(a, b);
          C(a, !1);
        });
      }
    };
    p("ajax.json()", function () {
      var a = this.context;
      if (0 < a.length) return a[0].json;
    });
    p("ajax.params()", function () {
      var a = this.context;
      if (0 < a.length) return a[0].oAjaxData;
    });
    p("ajax.reload()", function (a, b) {
      return this.iterator("table", function (c) {
        Ub(c, !1 === b, a);
      });
    });
    p("ajax.url()", function (a) {
      var b = this.context;
      if (a === k) {
        if (0 === b.length) return k;
        b = b[0];
        return b.ajax
          ? h.isPlainObject(b.ajax)
            ? b.ajax.url
            : b.ajax
          : b.sAjaxSource;
      }
      return this.iterator("table", function (b) {
        h.isPlainObject(b.ajax) ? (b.ajax.url = a) : (b.ajax = a);
      });
    });
    p("ajax.url().load()", function (a, b) {
      return this.iterator("table", function (c) {
        Ub(c, !1 === b, a);
      });
    });
    var Za = function (a, b, c, d, e) {
        var f = [],
          g,
          i,
          j,
          n,
          l,
          m;
        j = typeof b;
        if (!b || "string" === j || "function" === j || b.length === k) b = [b];
        j = 0;
        for (n = b.length; j < n; j++) {
          i = b[j] && b[j].split ? b[j].split(",") : [b[j]];
          l = 0;
          for (m = i.length; l < m; l++)
            (g = c("string" === typeof i[l] ? h.trim(i[l]) : i[l])) &&
              g.length &&
              (f = f.concat(g));
        }
        a = v.selector[a];
        if (a.length) {
          j = 0;
          for (n = a.length; j < n; j++) f = a[j](d, e, f);
        }
        return pa(f);
      },
      $a = function (a) {
        a || (a = {});
        a.filter && a.search === k && (a.search = a.filter);
        return h.extend({ search: "none", order: "current", page: "all" }, a);
      },
      ab = function (a) {
        for (var b = 0, c = a.length; b < c; b++)
          if (0 < a[b].length)
            return (
              (a[0] = a[b]),
              (a[0].length = 1),
              (a.length = 1),
              (a.context = [a.context[b]]),
              a
            );
        a.length = 0;
        return a;
      },
      Da = function (a, b) {
        var c,
          d,
          e,
          f = [],
          g = a.aiDisplay;
        c = a.aiDisplayMaster;
        var i = b.search;
        d = b.order;
        e = b.page;
        if ("ssp" == y(a)) return "removed" === i ? [] : W(0, c.length);
        if ("current" == e) {
          c = a._iDisplayStart;
          for (d = a.fnDisplayEnd(); c < d; c++) f.push(g[c]);
        } else if ("current" == d || "applied" == d)
          f =
            "none" == i
              ? c.slice()
              : "applied" == i
              ? g.slice()
              : h.map(c, function (a) {
                  return -1 === h.inArray(a, g) ? a : null;
                });
        else if ("index" == d || "original" == d) {
          c = 0;
          for (d = a.aoData.length; c < d; c++)
            "none" == i
              ? f.push(c)
              : ((e = h.inArray(c, g)),
                ((-1 === e && "removed" == i) || (0 <= e && "applied" == i)) &&
                  f.push(c));
        }
        return f;
      };
    p("rows()", function (a, b) {
      a === k ? (a = "") : h.isPlainObject(a) && ((b = a), (a = ""));
      var b = $a(b),
        c = this.iterator(
          "table",
          function (c) {
            var e = b;
            return Za(
              "row",
              a,
              function (a) {
                var b = Pb(a);
                if (b !== null && !e) return [b];
                var i = Da(c, e);
                if (b !== null && h.inArray(b, i) !== -1) return [b];
                if (!a) return i;
                if (typeof a === "function")
                  return h.map(i, function (b) {
                    var e = c.aoData[b];
                    return a(b, e._aData, e.nTr) ? b : null;
                  });
                b = Sb(ja(c.aoData, i, "nTr"));
                if (a.nodeName && h.inArray(a, b) !== -1)
                  return [a._DT_RowIndex];
                if (typeof a === "string" && a.charAt(0) === "#") {
                  i = c.aIds[a.replace(/^#/, "")];
                  if (i !== k) return [i.idx];
                }
                return h(b)
                  .filter(a)
                  .map(function () {
                    return this._DT_RowIndex;
                  })
                  .toArray();
              },
              c,
              e
            );
          },
          1
        );
      c.selector.rows = a;
      c.selector.opts = b;
      return c;
    });
    p("rows().nodes()", function () {
      return this.iterator(
        "row",
        function (a, b) {
          return a.aoData[b].nTr || k;
        },
        1
      );
    });
    p("rows().data()", function () {
      return this.iterator(
        !0,
        "rows",
        function (a, b) {
          return ja(a.aoData, b, "_aData");
        },
        1
      );
    });
    s("rows().cache()", "row().cache()", function (a) {
      return this.iterator(
        "row",
        function (b, c) {
          var d = b.aoData[c];
          return "search" === a ? d._aFilterData : d._aSortData;
        },
        1
      );
    });
    s("rows().invalidate()", "row().invalidate()", function (a) {
      return this.iterator("row", function (b, c) {
        ea(b, c, a);
      });
    });
    s("rows().indexes()", "row().index()", function () {
      return this.iterator(
        "row",
        function (a, b) {
          return b;
        },
        1
      );
    });
    s("rows().ids()", "row().id()", function (a) {
      for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
        for (var f = 0, g = this[d].length; f < g; f++) {
          var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
          b.push((!0 === a ? "#" : "") + h);
        }
      return new t(c, b);
    });
    s("rows().remove()", "row().remove()", function () {
      var a = this;
      this.iterator("row", function (b, c, d) {
        var e = b.aoData,
          f = e[c];
        e.splice(c, 1);
        for (var g = 0, h = e.length; g < h; g++)
          null !== e[g].nTr && (e[g].nTr._DT_RowIndex = g);
        oa(b.aiDisplayMaster, c);
        oa(b.aiDisplay, c);
        oa(a[d], c, !1);
        Sa(b);
        c = b.rowIdFn(f._aData);
        c !== k && delete b.aIds[c];
      });
      this.iterator("table", function (a) {
        for (var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c;
      });
      return this;
    });
    p("rows.add()", function (a) {
      var b = this.iterator(
          "table",
          function (b) {
            var c,
              f,
              g,
              h = [];
            f = 0;
            for (g = a.length; f < g; f++)
              (c = a[f]),
                c.nodeName && "TR" === c.nodeName.toUpperCase()
                  ? h.push(ma(b, c)[0])
                  : h.push(L(b, c));
            return h;
          },
          1
        ),
        c = this.rows(-1);
      c.pop();
      h.merge(c, b);
      return c;
    });
    p("row()", function (a, b) {
      return ab(this.rows(a, b));
    });
    p("row().data()", function (a) {
      var b = this.context;
      if (a === k)
        return b.length && this.length ? b[0].aoData[this[0]]._aData : k;
      b[0].aoData[this[0]]._aData = a;
      ea(b[0], this[0], "data");
      return this;
    });
    p("row().node()", function () {
      var a = this.context;
      return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
    });
    p("row.add()", function (a) {
      a instanceof h && a.length && (a = a[0]);
      var b = this.iterator("table", function (b) {
        return a.nodeName && "TR" === a.nodeName.toUpperCase()
          ? ma(b, a)[0]
          : L(b, a);
      });
      return this.row(b[0]);
    });
    var bb = function (a, b) {
        var c = a.context;
        if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details)
          c._details.remove(), (c._detailsShow = k), (c._details = k);
      },
      Vb = function (a, b) {
        var c = a.context;
        if (c.length && a.length) {
          var d = c[0].aoData[a[0]];
          if (d._details) {
            (d._detailsShow = b)
              ? d._details.insertAfter(d.nTr)
              : d._details.detach();
            var e = c[0],
              f = new t(e),
              g = e.aoData;
            f.off(
              "draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"
            );
            0 < D(g, "_details").length &&
              (f.on("draw.dt.DT_details", function (a, b) {
                e === b &&
                  f
                    .rows({ page: "current" })
                    .eq(0)
                    .each(function (a) {
                      a = g[a];
                      a._detailsShow && a._details.insertAfter(a.nTr);
                    });
              }),
              f.on("column-visibility.dt.DT_details", function (a, b) {
                if (e === b)
                  for (var c, d = ca(b), f = 0, h = g.length; f < h; f++)
                    (c = g[f]),
                      c._details &&
                        c._details.children("td[colspan]").attr("colspan", d);
              }),
              f.on("destroy.dt.DT_details", function (a, b) {
                if (e === b)
                  for (var c = 0, d = g.length; c < d; c++)
                    g[c]._details && bb(f, c);
              }));
          }
        }
      };
    p("row().child()", function (a, b) {
      var c = this.context;
      if (a === k)
        return c.length && this.length ? c[0].aoData[this[0]]._details : k;
      if (!0 === a) this.child.show();
      else if (!1 === a) bb(this);
      else if (c.length && this.length) {
        var d = c[0],
          c = c[0].aoData[this[0]],
          e = [],
          f = function (a, b) {
            if (h.isArray(a) || a instanceof h)
              for (var c = 0, k = a.length; c < k; c++) f(a[c], b);
            else
              a.nodeName && "tr" === a.nodeName.toLowerCase()
                ? e.push(a)
                : ((c = h("<tr><td/></tr>").addClass(b)),
                  (h("td", c).addClass(b).html(a)[0].colSpan = ca(d)),
                  e.push(c[0]));
          };
        f(a, b);
        c._details && c._details.remove();
        c._details = h(e);
        c._detailsShow && c._details.insertAfter(c.nTr);
      }
      return this;
    });
    p(["row().child.show()", "row().child().show()"], function () {
      Vb(this, !0);
      return this;
    });
    p(["row().child.hide()", "row().child().hide()"], function () {
      Vb(this, !1);
      return this;
    });
    p(["row().child.remove()", "row().child().remove()"], function () {
      bb(this);
      return this;
    });
    p("row().child.isShown()", function () {
      var a = this.context;
      return a.length && this.length
        ? a[0].aoData[this[0]]._detailsShow || !1
        : !1;
    });
    var dc = /^(.+):(name|visIdx|visible)$/,
      Wb = function (a, b, c, d, e) {
        for (var c = [], d = 0, f = e.length; d < f; d++) c.push(B(a, e[d], b));
        return c;
      };
    p("columns()", function (a, b) {
      a === k ? (a = "") : h.isPlainObject(a) && ((b = a), (a = ""));
      var b = $a(b),
        c = this.iterator(
          "table",
          function (c) {
            var e = a,
              f = b,
              g = c.aoColumns,
              i = D(g, "sName"),
              j = D(g, "nTh");
            return Za(
              "column",
              e,
              function (a) {
                var b = Pb(a);
                if (a === "") return W(g.length);
                if (b !== null) return [b >= 0 ? b : g.length + b];
                if (typeof a === "function") {
                  var e = Da(c, f);
                  return h.map(g, function (b, f) {
                    return a(f, Wb(c, f, 0, 0, e), j[f]) ? f : null;
                  });
                }
                var k = typeof a === "string" ? a.match(dc) : "";
                if (k)
                  switch (k[2]) {
                    case "visIdx":
                    case "visible":
                      b = parseInt(k[1], 10);
                      if (b < 0) {
                        var m = h.map(g, function (a, b) {
                          return a.bVisible ? b : null;
                        });
                        return [m[m.length + b]];
                      }
                      return [$(c, b)];
                    case "name":
                      return h.map(i, function (a, b) {
                        return a === k[1] ? b : null;
                      });
                  }
                else
                  return h(j)
                    .filter(a)
                    .map(function () {
                      return h.inArray(this, j);
                    })
                    .toArray();
              },
              c,
              f
            );
          },
          1
        );
      c.selector.cols = a;
      c.selector.opts = b;
      return c;
    });
    s("columns().header()", "column().header()", function () {
      return this.iterator(
        "column",
        function (a, b) {
          return a.aoColumns[b].nTh;
        },
        1
      );
    });
    s("columns().footer()", "column().footer()", function () {
      return this.iterator(
        "column",
        function (a, b) {
          return a.aoColumns[b].nTf;
        },
        1
      );
    });
    s("columns().data()", "column().data()", function () {
      return this.iterator("column-rows", Wb, 1);
    });
    s("columns().dataSrc()", "column().dataSrc()", function () {
      return this.iterator(
        "column",
        function (a, b) {
          return a.aoColumns[b].mData;
        },
        1
      );
    });
    s("columns().cache()", "column().cache()", function (a) {
      return this.iterator(
        "column-rows",
        function (b, c, d, e, f) {
          return ja(
            b.aoData,
            f,
            "search" === a ? "_aFilterData" : "_aSortData",
            c
          );
        },
        1
      );
    });
    s("columns().nodes()", "column().nodes()", function () {
      return this.iterator(
        "column-rows",
        function (a, b, c, d, e) {
          return ja(a.aoData, e, "anCells", b);
        },
        1
      );
    });
    s("columns().visible()", "column().visible()", function (a, b) {
      return this.iterator("column", function (c, d) {
        if (a === k) return c.aoColumns[d].bVisible;
        var e = c.aoColumns,
          f = e[d],
          g = c.aoData,
          i,
          j,
          m;
        if (a !== k && f.bVisible !== a) {
          if (a) {
            var l = h.inArray(!0, D(e, "bVisible"), d + 1);
            i = 0;
            for (j = g.length; i < j; i++)
              (m = g[i].nTr),
                (e = g[i].anCells),
                m && m.insertBefore(e[d], e[l] || null);
          } else h(D(c.aoData, "anCells", d)).detach();
          f.bVisible = a;
          ga(c, c.aoHeader);
          ga(c, c.aoFooter);
          if (b === k || b) Y(c), (c.oScroll.sX || c.oScroll.sY) && Z(c);
          w(c, null, "column-visibility", [c, d, a]);
          ya(c);
        }
      });
    });
    s("columns().indexes()", "column().index()", function (a) {
      return this.iterator(
        "column",
        function (b, c) {
          return "visible" === a ? ba(b, c) : c;
        },
        1
      );
    });
    p("columns.adjust()", function () {
      return this.iterator(
        "table",
        function (a) {
          Y(a);
        },
        1
      );
    });
    p("column.index()", function (a, b) {
      if (0 !== this.context.length) {
        var c = this.context[0];
        if ("fromVisible" === a || "toData" === a) return $(c, b);
        if ("fromData" === a || "toVisible" === a) return ba(c, b);
      }
    });
    p("column()", function (a, b) {
      return ab(this.columns(a, b));
    });
    p("cells()", function (a, b, c) {
      h.isPlainObject(a) &&
        (a.row === k ? ((c = a), (a = null)) : ((c = b), (b = null)));
      h.isPlainObject(b) && ((c = b), (b = null));
      if (null === b || b === k)
        return this.iterator("table", function (b) {
          var d = a,
            e = $a(c),
            f = b.aoData,
            g = Da(b, e),
            i = Sb(ja(f, g, "anCells")),
            j = h([].concat.apply([], i)),
            l,
            m = b.aoColumns.length,
            n,
            p,
            t,
            s,
            u,
            v;
          return Za(
            "cell",
            d,
            function (a) {
              var c = typeof a === "function";
              if (a === null || a === k || c) {
                n = [];
                p = 0;
                for (t = g.length; p < t; p++) {
                  l = g[p];
                  for (s = 0; s < m; s++) {
                    u = { row: l, column: s };
                    if (c) {
                      v = f[l];
                      a(u, B(b, l, s), v.anCells ? v.anCells[s] : null) &&
                        n.push(u);
                    } else n.push(u);
                  }
                }
                return n;
              }
              return h.isPlainObject(a)
                ? [a]
                : j
                    .filter(a)
                    .map(function (a, b) {
                      if (b.parentNode) l = b.parentNode._DT_RowIndex;
                      else {
                        a = 0;
                        for (t = f.length; a < t; a++)
                          if (h.inArray(b, f[a].anCells) !== -1) {
                            l = a;
                            break;
                          }
                      }
                      return { row: l, column: h.inArray(b, f[l].anCells) };
                    })
                    .toArray();
            },
            b,
            e
          );
        });
      var d = this.columns(b, c),
        e = this.rows(a, c),
        f,
        g,
        i,
        j,
        m,
        l = this.iterator(
          "table",
          function (a, b) {
            f = [];
            g = 0;
            for (i = e[b].length; g < i; g++) {
              j = 0;
              for (m = d[b].length; j < m; j++)
                f.push({ row: e[b][g], column: d[b][j] });
            }
            return f;
          },
          1
        );
      h.extend(l.selector, { cols: b, rows: a, opts: c });
      return l;
    });
    s("cells().nodes()", "cell().node()", function () {
      return this.iterator(
        "cell",
        function (a, b, c) {
          return (a = a.aoData[b].anCells) ? a[c] : k;
        },
        1
      );
    });
    p("cells().data()", function () {
      return this.iterator(
        "cell",
        function (a, b, c) {
          return B(a, b, c);
        },
        1
      );
    });
    s("cells().cache()", "cell().cache()", function (a) {
      a = "search" === a ? "_aFilterData" : "_aSortData";
      return this.iterator(
        "cell",
        function (b, c, d) {
          return b.aoData[c][a][d];
        },
        1
      );
    });
    s("cells().render()", "cell().render()", function (a) {
      return this.iterator(
        "cell",
        function (b, c, d) {
          return B(b, c, d, a);
        },
        1
      );
    });
    s("cells().indexes()", "cell().index()", function () {
      return this.iterator(
        "cell",
        function (a, b, c) {
          return { row: b, column: c, columnVisible: ba(a, c) };
        },
        1
      );
    });
    s("cells().invalidate()", "cell().invalidate()", function (a) {
      return this.iterator("cell", function (b, c, d) {
        ea(b, c, a, d);
      });
    });
    p("cell()", function (a, b, c) {
      return ab(this.cells(a, b, c));
    });
    p("cell().data()", function (a) {
      var b = this.context,
        c = this[0];
      if (a === k)
        return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k;
      ib(b[0], c[0].row, c[0].column, a);
      ea(b[0], c[0].row, "data", c[0].column);
      return this;
    });
    p("order()", function (a, b) {
      var c = this.context;
      if (a === k) return 0 !== c.length ? c[0].aaSorting : k;
      "number" === typeof a
        ? (a = [[a, b]])
        : h.isArray(a[0]) || (a = Array.prototype.slice.call(arguments));
      return this.iterator("table", function (b) {
        b.aaSorting = a.slice();
      });
    });
    p("order.listener()", function (a, b, c) {
      return this.iterator("table", function (d) {
        Oa(d, a, b, c);
      });
    });
    p(["columns().order()", "column().order()"], function (a) {
      var b = this;
      return this.iterator("table", function (c, d) {
        var e = [];
        h.each(b[d], function (b, c) {
          e.push([c, a]);
        });
        c.aaSorting = e;
      });
    });
    p("search()", function (a, b, c, d) {
      var e = this.context;
      return a === k
        ? 0 !== e.length
          ? e[0].oPreviousSearch.sSearch
          : k
        : this.iterator("table", function (e) {
            e.oFeatures.bFilter &&
              ha(
                e,
                h.extend({}, e.oPreviousSearch, {
                  sSearch: a + "",
                  bRegex: null === b ? !1 : b,
                  bSmart: null === c ? !0 : c,
                  bCaseInsensitive: null === d ? !0 : d,
                }),
                1
              );
          });
    });
    s("columns().search()", "column().search()", function (a, b, c, d) {
      return this.iterator("column", function (e, f) {
        var g = e.aoPreSearchCols;
        if (a === k) return g[f].sSearch;
        e.oFeatures.bFilter &&
          (h.extend(g[f], {
            sSearch: a + "",
            bRegex: null === b ? !1 : b,
            bSmart: null === c ? !0 : c,
            bCaseInsensitive: null === d ? !0 : d,
          }),
          ha(e, e.oPreviousSearch, 1));
      });
    });
    p("state()", function () {
      return this.context.length ? this.context[0].oSavedState : null;
    });
    p("state.clear()", function () {
      return this.iterator("table", function (a) {
        a.fnStateSaveCallback.call(a.oInstance, a, {});
      });
    });
    p("state.loaded()", function () {
      return this.context.length ? this.context[0].oLoadedState : null;
    });
    p("state.save()", function () {
      return this.iterator("table", function (a) {
        ya(a);
      });
    });
    m.versionCheck = m.fnVersionCheck = function (a) {
      for (
        var b = m.version.split("."),
          a = a.split("."),
          c,
          d,
          e = 0,
          f = a.length;
        e < f;
        e++
      )
        if (
          ((c = parseInt(b[e], 10) || 0),
          (d = parseInt(a[e], 10) || 0),
          c !== d)
        )
          return c > d;
      return !0;
    };
    m.isDataTable = m.fnIsDataTable = function (a) {
      var b = h(a).get(0),
        c = !1;
      h.each(m.settings, function (a, e) {
        var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null,
          g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] : null;
        if (e.nTable === b || f === b || g === b) c = !0;
      });
      return c;
    };
    m.tables = m.fnTables = function (a) {
      var b = !1;
      h.isPlainObject(a) && ((b = a.api), (a = a.visible));
      var c = h.map(m.settings, function (b) {
        if (!a || (a && h(b.nTable).is(":visible"))) return b.nTable;
      });
      return b ? new t(c) : c;
    };
    m.util = { throttle: ua, escapeRegex: va };
    m.camelToHungarian = I;
    p("$()", function (a, b) {
      var c = this.rows(b).nodes(),
        c = h(c);
      return h([].concat(c.filter(a).toArray(), c.find(a).toArray()));
    });
    h.each(["on", "one", "off"], function (a, b) {
      p(b + "()", function () {
        var a = Array.prototype.slice.call(arguments);
        a[0].match(/\.dt\b/) || (a[0] += ".dt");
        var d = h(this.tables().nodes());
        d[b].apply(d, a);
        return this;
      });
    });
    p("clear()", function () {
      return this.iterator("table", function (a) {
        na(a);
      });
    });
    p("settings()", function () {
      return new t(this.context, this.context);
    });
    p("init()", function () {
      var a = this.context;
      return a.length ? a[0].oInit : null;
    });
    p("data()", function () {
      return this.iterator("table", function (a) {
        return D(a.aoData, "_aData");
      }).flatten();
    });
    p("destroy()", function (a) {
      a = a || !1;
      return this.iterator("table", function (b) {
        var c = b.nTableWrapper.parentNode,
          d = b.oClasses,
          e = b.nTable,
          f = b.nTBody,
          g = b.nTHead,
          i = b.nTFoot,
          j = h(e),
          f = h(f),
          k = h(b.nTableWrapper),
          l = h.map(b.aoData, function (a) {
            return a.nTr;
          }),
          p;
        b.bDestroying = !0;
        w(b, "aoDestroyCallback", "destroy", [b]);
        a || new t(b).columns().visible(!0);
        k.unbind(".DT").find(":not(tbody *)").unbind(".DT");
        h(Fa).unbind(".DT-" + b.sInstance);
        e != g.parentNode && (j.children("thead").detach(), j.append(g));
        i && e != i.parentNode && (j.children("tfoot").detach(), j.append(i));
        b.aaSorting = [];
        b.aaSortingFixed = [];
        xa(b);
        h(l).removeClass(b.asStripeClasses.join(" "));
        h("th, td", g).removeClass(
          d.sSortable +
            " " +
            d.sSortableAsc +
            " " +
            d.sSortableDesc +
            " " +
            d.sSortableNone
        );
        b.bJUI &&
          (h("th span." + d.sSortIcon + ", td span." + d.sSortIcon, g).detach(),
          h("th, td", g).each(function () {
            var a = h("div." + d.sSortJUIWrapper, this);
            h(this).append(a.contents());
            a.detach();
          }));
        f.children().detach();
        f.append(l);
        g = a ? "remove" : "detach";
        j[g]();
        k[g]();
        !a &&
          c &&
          (c.insertBefore(e, b.nTableReinsertBefore),
          j.css("width", b.sDestroyWidth).removeClass(d.sTable),
          (p = b.asDestroyStripes.length) &&
            f.children().each(function (a) {
              h(this).addClass(b.asDestroyStripes[a % p]);
            }));
        c = h.inArray(b, m.settings);
        -1 !== c && m.settings.splice(c, 1);
      });
    });
    h.each(["column", "row", "cell"], function (a, b) {
      p(b + "s().every()", function (a) {
        return this.iterator(b, function (d, e, f, g, h) {
          a.call(new t(d)[b](e, "cell" === b ? f : k), e, f, g, h);
        });
      });
    });
    p("i18n()", function (a, b, c) {
      var d = this.context[0],
        a = P(a)(d.oLanguage);
      a === k && (a = b);
      c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);
      return a.replace("%d", c);
    });
    m.version = "1.10.9";
    m.settings = [];
    m.models = {};
    m.models.oSearch = {
      bCaseInsensitive: !0,
      sSearch: "",
      bRegex: !1,
      bSmart: !0,
    };
    m.models.oRow = {
      nTr: null,
      anCells: null,
      _aData: [],
      _aSortData: null,
      _aFilterData: null,
      _sFilterRow: null,
      _sRowStripe: "",
      src: null,
      idx: -1,
    };
    m.models.oColumn = {
      idx: null,
      aDataSort: null,
      asSorting: null,
      bSearchable: null,
      bSortable: null,
      bVisible: null,
      _sManualType: null,
      _bAttrSrc: !1,
      fnCreatedCell: null,
      fnGetData: null,
      fnSetData: null,
      mData: null,
      mRender: null,
      nTh: null,
      nTf: null,
      sClass: null,
      sContentPadding: null,
      sDefaultContent: null,
      sName: null,
      sSortDataType: "std",
      sSortingClass: null,
      sSortingClassJUI: null,
      sTitle: null,
      sType: null,
      sWidth: null,
      sWidthOrig: null,
    };
    m.defaults = {
      aaData: null,
      aaSorting: [[0, "asc"]],
      aaSortingFixed: [],
      ajax: null,
      aLengthMenu: [10, 25, 50, 100],
      aoColumns: null,
      aoColumnDefs: null,
      aoSearchCols: [],
      asStripeClasses: null,
      bAutoWidth: !0,
      bDeferRender: !1,
      bDestroy: !1,
      bFilter: !0,
      bInfo: !0,
      bJQueryUI: !1,
      bLengthChange: !0,
      bPaginate: !0,
      bProcessing: !1,
      bRetrieve: !1,
      bScrollCollapse: !1,
      bServerSide: !1,
      bSort: !0,
      bSortMulti: !0,
      bSortCellsTop: !1,
      bSortClasses: !0,
      bStateSave: !1,
      fnCreatedRow: null,
      fnDrawCallback: null,
      fnFooterCallback: null,
      fnFormatNumber: function (a) {
        return a
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
      },
      fnHeaderCallback: null,
      fnInfoCallback: null,
      fnInitComplete: null,
      fnPreDrawCallback: null,
      fnRowCallback: null,
      fnServerData: null,
      fnServerParams: null,
      fnStateLoadCallback: function (a) {
        try {
          return JSON.parse(
            (-1 === a.iStateDuration ? sessionStorage : localStorage).getItem(
              "DataTables_" + a.sInstance + "_" + location.pathname
            )
          );
        } catch (b) {}
      },
      fnStateLoadParams: null,
      fnStateLoaded: null,
      fnStateSaveCallback: function (a, b) {
        try {
          (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem(
            "DataTables_" + a.sInstance + "_" + location.pathname,
            JSON.stringify(b)
          );
        } catch (c) {}
      },
      fnStateSaveParams: null,
      iStateDuration: 7200,
      iDeferLoading: null,
      iDisplayLength: 10,
      iDisplayStart: 0,
      iTabIndex: 0,
      oClasses: {},
      oLanguage: {
        oAria: {
          sSortAscending: ": activate to sort column ascending",
          sSortDescending: ": activate to sort column descending",
        },
        oPaginate: {
          sFirst: "First",
          sLast: "Last",
          sNext: "Next",
          sPrevious: "Previous",
        },
        sEmptyTable: "No data available in table",
        sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
        sInfoEmpty: "Showing 0 to 0 of 0 entries",
        sInfoFiltered: "(filtered from _MAX_ total entries)",
        sInfoPostFix: "",
        sDecimal: "",
        sThousands: ",",
        sLengthMenu: "Show _MENU_ entries",
        sLoadingRecords: "Loading...",
        sProcessing: "Processing...",
        sSearch: "Search:",
        sSearchPlaceholder: "",
        sUrl: "",
        sZeroRecords: "No matching records found",
      },
      oSearch: h.extend({}, m.models.oSearch),
      sAjaxDataProp: "data",
      sAjaxSource: null,
      sDom: "lfrtip",
      searchDelay: null,
      sPaginationType: "simple_numbers",
      sScrollX: "",
      sScrollXInner: "",
      sScrollY: "",
      sServerMethod: "GET",
      renderer: null,
      rowId: "DT_RowId",
    };
    X(m.defaults);
    m.defaults.column = {
      aDataSort: null,
      iDataSort: -1,
      asSorting: ["asc", "desc"],
      bSearchable: !0,
      bSortable: !0,
      bVisible: !0,
      fnCreatedCell: null,
      mData: null,
      mRender: null,
      sCellType: "td",
      sClass: "",
      sContentPadding: "",
      sDefaultContent: null,
      sName: "",
      sSortDataType: "std",
      sTitle: null,
      sType: null,
      sWidth: null,
    };
    X(m.defaults.column);
    m.models.oSettings = {
      oFeatures: {
        bAutoWidth: null,
        bDeferRender: null,
        bFilter: null,
        bInfo: null,
        bLengthChange: null,
        bPaginate: null,
        bProcessing: null,
        bServerSide: null,
        bSort: null,
        bSortMulti: null,
        bSortClasses: null,
        bStateSave: null,
      },
      oScroll: {
        bCollapse: null,
        iBarWidth: 0,
        sX: null,
        sXInner: null,
        sY: null,
      },
      oLanguage: { fnInfoCallback: null },
      oBrowser: {
        bScrollOversize: !1,
        bScrollbarLeft: !1,
        bBounding: !1,
        barWidth: 0,
      },
      ajax: null,
      aanFeatures: [],
      aoData: [],
      aiDisplay: [],
      aiDisplayMaster: [],
      aIds: {},
      aoColumns: [],
      aoHeader: [],
      aoFooter: [],
      oPreviousSearch: {},
      aoPreSearchCols: [],
      aaSorting: null,
      aaSortingFixed: [],
      asStripeClasses: null,
      asDestroyStripes: [],
      sDestroyWidth: 0,
      aoRowCallback: [],
      aoHeaderCallback: [],
      aoFooterCallback: [],
      aoDrawCallback: [],
      aoRowCreatedCallback: [],
      aoPreDrawCallback: [],
      aoInitComplete: [],
      aoStateSaveParams: [],
      aoStateLoadParams: [],
      aoStateLoaded: [],
      sTableId: "",
      nTable: null,
      nTHead: null,
      nTFoot: null,
      nTBody: null,
      nTableWrapper: null,
      bDeferLoading: !1,
      bInitialised: !1,
      aoOpenRows: [],
      sDom: null,
      searchDelay: null,
      sPaginationType: "two_button",
      iStateDuration: 0,
      aoStateSave: [],
      aoStateLoad: [],
      oSavedState: null,
      oLoadedState: null,
      sAjaxSource: null,
      sAjaxDataProp: null,
      bAjaxDataGet: !0,
      jqXHR: null,
      json: k,
      oAjaxData: k,
      fnServerData: null,
      aoServerParams: [],
      sServerMethod: null,
      fnFormatNumber: null,
      aLengthMenu: null,
      iDraw: 0,
      bDrawing: !1,
      iDrawError: -1,
      _iDisplayLength: 10,
      _iDisplayStart: 0,
      _iRecordsTotal: 0,
      _iRecordsDisplay: 0,
      bJUI: null,
      oClasses: {},
      bFiltered: !1,
      bSorted: !1,
      bSortCellsTop: null,
      oInit: null,
      aoDestroyCallback: [],
      fnRecordsTotal: function () {
        return "ssp" == y(this)
          ? 1 * this._iRecordsTotal
          : this.aiDisplayMaster.length;
      },
      fnRecordsDisplay: function () {
        return "ssp" == y(this)
          ? 1 * this._iRecordsDisplay
          : this.aiDisplay.length;
      },
      fnDisplayEnd: function () {
        var a = this._iDisplayLength,
          b = this._iDisplayStart,
          c = b + a,
          d = this.aiDisplay.length,
          e = this.oFeatures,
          f = e.bPaginate;
        return e.bServerSide
          ? !1 === f || -1 === a
            ? b + d
            : Math.min(b + a, this._iRecordsDisplay)
          : !f || c > d || -1 === a
          ? d
          : c;
      },
      oInstance: null,
      sInstance: null,
      iTabIndex: 0,
      nScrollHead: null,
      nScrollFoot: null,
      aLastSort: [],
      oPlugins: {},
      rowIdFn: null,
      rowId: null,
    };
    m.ext = v = {
      buttons: {},
      classes: {},
      errMode: "alert",
      feature: [],
      search: [],
      selector: { cell: [], column: [], row: [] },
      internal: {},
      legacy: { ajax: null },
      pager: {},
      renderer: { pageButton: {}, header: {} },
      order: {},
      type: { detect: [], search: {}, order: {} },
      _unique: 0,
      fnVersionCheck: m.fnVersionCheck,
      iApiIndex: 0,
      oJUIClasses: {},
      sVersion: m.version,
    };
    h.extend(v, {
      afnFiltering: v.search,
      aTypes: v.type.detect,
      ofnSearch: v.type.search,
      oSort: v.type.order,
      afnSortData: v.order,
      aoFeatures: v.feature,
      oApi: v.internal,
      oStdClasses: v.classes,
      oPagination: v.pager,
    });
    h.extend(m.ext.classes, {
      sTable: "dataTable",
      sNoFooter: "no-footer",
      sPageButton: "paginate_button",
      sPageButtonActive: "current",
      sPageButtonDisabled: "disabled",
      sStripeOdd: "odd",
      sStripeEven: "even",
      sRowEmpty: "dataTables_empty",
      sWrapper: "dataTables_wrapper",
      sFilter: "dataTables_filter",
      sInfo: "dataTables_info",
      sPaging: "dataTables_paginate paging_",
      sLength: "dataTables_length",
      sProcessing: "dataTables_processing",
      sSortAsc: "sorting_asc",
      sSortDesc: "sorting_desc",
      sSortable: "sorting",
      sSortableAsc: "sorting_asc_disabled",
      sSortableDesc: "sorting_desc_disabled",
      sSortableNone: "sorting_disabled",
      sSortColumn: "sorting_",
      sFilterInput: "",
      sLengthSelect: "",
      sScrollWrapper: "dataTables_scroll",
      sScrollHead: "dataTables_scrollHead",
      sScrollHeadInner: "dataTables_scrollHeadInner",
      sScrollBody: "dataTables_scrollBody",
      sScrollFoot: "dataTables_scrollFoot",
      sScrollFootInner: "dataTables_scrollFootInner",
      sHeaderTH: "",
      sFooterTH: "",
      sSortJUIAsc: "",
      sSortJUIDesc: "",
      sSortJUI: "",
      sSortJUIAscAllowed: "",
      sSortJUIDescAllowed: "",
      sSortJUIWrapper: "",
      sSortIcon: "",
      sJUIHeader: "",
      sJUIFooter: "",
    });
    var Ea = "",
      Ea = "",
      G = Ea + "ui-state-default",
      ka = Ea + "css_right ui-icon ui-icon-",
      Xb = Ea + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
    h.extend(m.ext.oJUIClasses, m.ext.classes, {
      sPageButton: "fg-button ui-button " + G,
      sPageButtonActive: "ui-state-disabled",
      sPageButtonDisabled: "ui-state-disabled",
      sPaging:
        "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
      sSortAsc: G + " sorting_asc",
      sSortDesc: G + " sorting_desc",
      sSortable: G + " sorting",
      sSortableAsc: G + " sorting_asc_disabled",
      sSortableDesc: G + " sorting_desc_disabled",
      sSortableNone: G + " sorting_disabled",
      sSortJUIAsc: ka + "triangle-1-n",
      sSortJUIDesc: ka + "triangle-1-s",
      sSortJUI: ka + "carat-2-n-s",
      sSortJUIAscAllowed: ka + "carat-1-n",
      sSortJUIDescAllowed: ka + "carat-1-s",
      sSortJUIWrapper: "DataTables_sort_wrapper",
      sSortIcon: "DataTables_sort_icon",
      sScrollHead: "dataTables_scrollHead " + G,
      sScrollFoot: "dataTables_scrollFoot " + G,
      sHeaderTH: G,
      sFooterTH: G,
      sJUIHeader: Xb + " ui-corner-tl ui-corner-tr",
      sJUIFooter: Xb + " ui-corner-bl ui-corner-br",
    });
    var Mb = m.ext.pager;
    h.extend(Mb, {
      simple: function () {
        return ["previous", "next"];
      },
      full: function () {
        return ["first", "previous", "next", "last"];
      },
      numbers: function (a, b) {
        return [Aa(a, b)];
      },
      simple_numbers: function (a, b) {
        return ["previous", Aa(a, b), "next"];
      },
      full_numbers: function (a, b) {
        return ["first", "previous", Aa(a, b), "next", "last"];
      },
      _numbers: Aa,
      numbers_length: 7,
    });
    h.extend(!0, m.ext.renderer, {
      pageButton: {
        _: function (a, b, c, d, e, f) {
          var g = a.oClasses,
            i = a.oLanguage.oPaginate,
            j,
            k,
            l = 0,
            m = function (b, d) {
              var p,
                q,
                t,
                s,
                u = function (b) {
                  Ta(a, b.data.action, !0);
                };
              p = 0;
              for (q = d.length; p < q; p++) {
                s = d[p];
                if (h.isArray(s)) {
                  t = h("<" + (s.DT_el || "div") + "/>").appendTo(b);
                  m(t, s);
                } else {
                  j = null;
                  k = "";
                  switch (s) {
                    case "ellipsis":
                      b.append('<span class="ellipsis">&#x2026;</span>');
                      break;
                    case "first":
                      j = i.sFirst;
                      k = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                      break;
                    case "previous":
                      j = i.sPrevious;
                      k = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                      break;
                    case "next":
                      j = i.sNext;
                      k = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                      break;
                    case "last":
                      j = i.sLast;
                      k = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                      break;
                    default:
                      j = s + 1;
                      k = e === s ? g.sPageButtonActive : "";
                  }
                  if (j !== null) {
                    t = h("<a>", {
                      class: g.sPageButton + " " + k,
                      "aria-controls": a.sTableId,
                      "data-dt-idx": l,
                      tabindex: a.iTabIndex,
                      id:
                        c === 0 && typeof s === "string"
                          ? a.sTableId + "_" + s
                          : null,
                    })
                      .html(j)
                      .appendTo(b);
                    Va(t, { action: s }, u);
                    l++;
                  }
                }
              }
            },
            p;
          try {
            p = h(b).find(T.activeElement).data("dt-idx");
          } catch (t) {}
          m(h(b).empty(), d);
          p &&
            h(b)
              .find("[data-dt-idx=" + p + "]")
              .focus();
        },
      },
    });
    h.extend(m.ext.type.detect, [
      function (a, b) {
        var c = b.oLanguage.sDecimal;
        return Ya(a, c) ? "num" + c : null;
      },
      function (a) {
        if (a && !(a instanceof Date) && (!ac.test(a) || !bc.test(a)))
          return null;
        var b = Date.parse(a);
        return (null !== b && !isNaN(b)) || K(a) ? "date" : null;
      },
      function (a, b) {
        var c = b.oLanguage.sDecimal;
        return Ya(a, c, !0) ? "num-fmt" + c : null;
      },
      function (a, b) {
        var c = b.oLanguage.sDecimal;
        return Rb(a, c) ? "html-num" + c : null;
      },
      function (a, b) {
        var c = b.oLanguage.sDecimal;
        return Rb(a, c, !0) ? "html-num-fmt" + c : null;
      },
      function (a) {
        return K(a) || ("string" === typeof a && -1 !== a.indexOf("<"))
          ? "html"
          : null;
      },
    ]);
    h.extend(m.ext.type.search, {
      html: function (a) {
        return K(a)
          ? a
          : "string" === typeof a
          ? a.replace(Ob, " ").replace(Ca, "")
          : "";
      },
      string: function (a) {
        return K(a) ? a : "string" === typeof a ? a.replace(Ob, " ") : a;
      },
    });
    var Ba = function (a, b, c, d) {
      if (0 !== a && (!a || "-" === a)) return -Infinity;
      b && (a = Qb(a, b));
      a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
      return 1 * a;
    };
    h.extend(v.type.order, {
      "date-pre": function (a) {
        return Date.parse(a) || 0;
      },
      "html-pre": function (a) {
        return K(a)
          ? ""
          : a.replace
          ? a.replace(/<.*?>/g, "").toLowerCase()
          : a + "";
      },
      "string-pre": function (a) {
        return K(a)
          ? ""
          : "string" === typeof a
          ? a.toLowerCase()
          : !a.toString
          ? ""
          : a.toString();
      },
      "string-asc": function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
      },
      "string-desc": function (a, b) {
        return a < b ? 1 : a > b ? -1 : 0;
      },
    });
    cb("");
    h.extend(!0, m.ext.renderer, {
      header: {
        _: function (a, b, c, d) {
          h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
            if (a === f) {
              e = c.idx;
              b.removeClass(
                c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc
              ).addClass(
                h[e] == "asc"
                  ? d.sSortAsc
                  : h[e] == "desc"
                  ? d.sSortDesc
                  : c.sSortingClass
              );
            }
          });
        },
        jqueryui: function (a, b, c, d) {
          h("<div/>")
            .addClass(d.sSortJUIWrapper)
            .append(b.contents())
            .append(
              h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)
            )
            .appendTo(b);
          h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
            if (a === f) {
              e = c.idx;
              b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(
                h[e] == "asc"
                  ? d.sSortAsc
                  : h[e] == "desc"
                  ? d.sSortDesc
                  : c.sSortingClass
              );
              b.find("span." + d.sSortIcon)
                .removeClass(
                  d.sSortJUIAsc +
                    " " +
                    d.sSortJUIDesc +
                    " " +
                    d.sSortJUI +
                    " " +
                    d.sSortJUIAscAllowed +
                    " " +
                    d.sSortJUIDescAllowed
                )
                .addClass(
                  h[e] == "asc"
                    ? d.sSortJUIAsc
                    : h[e] == "desc"
                    ? d.sSortJUIDesc
                    : c.sSortingClassJUI
                );
            }
          });
        },
      },
    });
    m.render = {
      number: function (a, b, c, d, e) {
        return {
          display: function (f) {
            if ("number" !== typeof f && "string" !== typeof f) return f;
            var g = 0 > f ? "-" : "",
              f = Math.abs(parseFloat(f)),
              h = parseInt(f, 10),
              f = c ? b + (f - h).toFixed(c).substring(2) : "";
            return (
              g +
              (d || "") +
              h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) +
              f +
              (e || "")
            );
          },
        };
      },
    };
    h.extend(m.ext.internal, {
      _fnExternApiFunc: Nb,
      _fnBuildAjax: ra,
      _fnAjaxUpdate: lb,
      _fnAjaxParameters: ub,
      _fnAjaxUpdateDraw: vb,
      _fnAjaxDataSrc: sa,
      _fnAddColumn: Ga,
      _fnColumnOptions: la,
      _fnAdjustColumnSizing: Y,
      _fnVisibleToColumnIndex: $,
      _fnColumnIndexToVisible: ba,
      _fnVisbleColumns: ca,
      _fnGetColumns: aa,
      _fnColumnTypes: Ia,
      _fnApplyColumnDefs: hb,
      _fnHungarianMap: X,
      _fnCamelToHungarian: I,
      _fnLanguageCompat: S,
      _fnBrowserDetect: fb,
      _fnAddData: L,
      _fnAddTr: ma,
      _fnNodeToDataIndex: function (a, b) {
        return b._DT_RowIndex !== k ? b._DT_RowIndex : null;
      },
      _fnNodeToColumnIndex: function (a, b, c) {
        return h.inArray(c, a.aoData[b].anCells);
      },
      _fnGetCellData: B,
      _fnSetCellData: ib,
      _fnSplitObjNotation: La,
      _fnGetObjectDataFn: P,
      _fnSetObjectDataFn: Q,
      _fnGetDataMaster: Ma,
      _fnClearTable: na,
      _fnDeleteIndex: oa,
      _fnInvalidate: ea,
      _fnGetRowElements: Ka,
      _fnCreateTr: Ja,
      _fnBuildHead: kb,
      _fnDrawHead: ga,
      _fnDraw: M,
      _fnReDraw: R,
      _fnAddOptionsHtml: nb,
      _fnDetectHeader: fa,
      _fnGetUniqueThs: qa,
      _fnFeatureHtmlFilter: pb,
      _fnFilterComplete: ha,
      _fnFilterCustom: yb,
      _fnFilterColumn: xb,
      _fnFilter: wb,
      _fnFilterCreateSearch: Qa,
      _fnEscapeRegex: va,
      _fnFilterData: zb,
      _fnFeatureHtmlInfo: sb,
      _fnUpdateInfo: Cb,
      _fnInfoMacros: Db,
      _fnInitialise: ia,
      _fnInitComplete: ta,
      _fnLengthChange: Ra,
      _fnFeatureHtmlLength: ob,
      _fnFeatureHtmlPaginate: tb,
      _fnPageChange: Ta,
      _fnFeatureHtmlProcessing: qb,
      _fnProcessingDisplay: C,
      _fnFeatureHtmlTable: rb,
      _fnScrollDraw: Z,
      _fnApplyToChildren: H,
      _fnCalculateColumnWidths: Ha,
      _fnThrottle: ua,
      _fnConvertToWidth: Fb,
      _fnGetWidestNode: Gb,
      _fnGetMaxLenString: Hb,
      _fnStringToCss: u,
      _fnSortFlatten: V,
      _fnSort: mb,
      _fnSortAria: Jb,
      _fnSortListener: Ua,
      _fnSortAttachListener: Oa,
      _fnSortingClasses: xa,
      _fnSortData: Ib,
      _fnSaveState: ya,
      _fnLoadState: Kb,
      _fnSettingsFromNode: za,
      _fnLog: J,
      _fnMap: F,
      _fnBindAction: Va,
      _fnCallbackReg: z,
      _fnCallbackFire: w,
      _fnLengthOverflow: Sa,
      _fnRenderer: Pa,
      _fnDataSource: y,
      _fnRowAttributes: Na,
      _fnCalculateEnd: function () {},
    });
    h.fn.dataTable = m;
    h.fn.dataTableSettings = m.settings;
    h.fn.dataTableExt = m.ext;
    h.fn.DataTable = function (a) {
      return h(this).dataTable(a).api();
    };
    h.each(m, function (a, b) {
      h.fn.DataTable[a] = b;
    });
    return h.fn.dataTable;
  };
  "function" === typeof define && define.amd
    ? define("datatables", ["jquery"], S)
    : "object" === typeof exports
    ? (module.exports = S(require("jquery")))
    : jQuery && !jQuery.fn.dataTable && S(jQuery);
})(window, document);
jQuery.fn.dataTable.ext.builder = "dt/dt-1.10.9,r-1.0.7";
/*!
 Responsive 1.0.7
 2014-2015 SpryMedia Ltd - datatables.net/license
*/
(function (n, p) {
  var o = function (e, k) {
    var h = function (d, a) {
      if (!k.versionCheck || !k.versionCheck("1.10.1"))
        throw "DataTables Responsive requires DataTables 1.10.1 or newer";
      this.s = { dt: new k.Api(d), columns: [] };
      this.s.dt.settings()[0].responsive ||
        (a &&
          "string" === typeof a.details &&
          (a.details = { type: a.details }),
        (this.c = e.extend(!0, {}, h.defaults, k.defaults.responsive, a)),
        (d.responsive = this),
        this._constructor());
    };
    h.prototype = {
      _constructor: function () {
        var d = this,
          a = this.s.dt;
        a.settings()[0]._responsive = this;
        e(n).on(
          "resize.dtr orientationchange.dtr",
          a.settings()[0].oApi._fnThrottle(function () {
            d._resize();
          })
        );
        a.on("destroy.dtr", function () {
          e(n).off("resize.dtr orientationchange.dtr draw.dtr");
        });
        this.c.breakpoints.sort(function (a, c) {
          return a.width < c.width ? 1 : a.width > c.width ? -1 : 0;
        });
        this._classLogic();
        this._resizeAuto();
        var c = this.c.details;
        c.type &&
          (d._detailsInit(),
          this._detailsVis(),
          a.on("column-visibility.dtr", function () {
            d._detailsVis();
          }),
          a.on("draw.dtr", function () {
            a.rows({ page: "current" }).iterator("row", function (b, c) {
              var f = a.row(c);
              if (f.child.isShown()) {
                var i = d.c.details.renderer(a, c);
                f.child(i, "child").show();
              }
            });
          }),
          e(a.table().node()).addClass("dtr-" + c.type));
        this._resize();
      },
      _columnsVisiblity: function (d) {
        var a = this.s.dt,
          c = this.s.columns,
          b,
          g,
          f = e.map(c, function (a) {
            return a.auto && null === a.minWidth
              ? !1
              : !0 === a.auto
              ? "-"
              : -1 !== e.inArray(d, a.includeIn);
          }),
          i = 0;
        b = 0;
        for (g = f.length; b < g; b++) !0 === f[b] && (i += c[b].minWidth);
        b = a.settings()[0].oScroll;
        b = b.sY || b.sX ? b.iBarWidth : 0;
        a = a.table().container().offsetWidth - b - i;
        b = 0;
        for (g = f.length; b < g; b++) c[b].control && (a -= c[b].minWidth);
        i = !1;
        b = 0;
        for (g = f.length; b < g; b++)
          "-" === f[b] &&
            !c[b].control &&
            (i || 0 > a - c[b].minWidth ? ((i = !0), (f[b] = !1)) : (f[b] = !0),
            (a -= c[b].minWidth));
        a = !1;
        b = 0;
        for (g = c.length; b < g; b++)
          if (!c[b].control && !c[b].never && !f[b]) {
            a = !0;
            break;
          }
        b = 0;
        for (g = c.length; b < g; b++) c[b].control && (f[b] = a);
        -1 === e.inArray(!0, f) && (f[0] = !0);
        return f;
      },
      _classLogic: function () {
        var d = this,
          a = this.c.breakpoints,
          c = this.s.dt
            .columns()
            .eq(0)
            .map(function (a) {
              a = this.column(a).header().className;
              return {
                className: a,
                includeIn: [],
                auto: !1,
                control: !1,
                never: a.match(/\bnever\b/) ? !0 : !1,
              };
            }),
          b = function (a, b) {
            var d = c[a].includeIn;
            -1 === e.inArray(b, d) && d.push(b);
          },
          g = function (f, g, e, j) {
            if (e)
              if ("max-" === e) {
                j = d._find(g).width;
                g = 0;
                for (e = a.length; g < e; g++)
                  a[g].width <= j && b(f, a[g].name);
              } else if ("min-" === e) {
                j = d._find(g).width;
                g = 0;
                for (e = a.length; g < e; g++)
                  a[g].width >= j && b(f, a[g].name);
              } else {
                if ("not-" === e) {
                  g = 0;
                  for (e = a.length; g < e; g++)
                    -1 === a[g].name.indexOf(j) && b(f, a[g].name);
                }
              }
            else c[f].includeIn.push(g);
          };
        c.each(function (b, c) {
          for (
            var d = b.className.split(" "), j = !1, h = 0, k = d.length;
            h < k;
            h++
          ) {
            var l = e.trim(d[h]);
            if ("all" === l) {
              j = !0;
              b.includeIn = e.map(a, function (a) {
                return a.name;
              });
              return;
            }
            if ("none" === l || "never" === l) {
              j = !0;
              return;
            }
            if ("control" === l) {
              j = !0;
              b.control = !0;
              return;
            }
            e.each(a, function (a, b) {
              var d = b.name.split("-"),
                e = l.match(
                  RegExp(
                    "(min\\-|max\\-|not\\-)?(" + d[0] + ")(\\-[_a-zA-Z0-9])?"
                  )
                );
              e &&
                ((j = !0),
                e[2] === d[0] && e[3] === "-" + d[1]
                  ? g(c, b.name, e[1], e[2] + e[3])
                  : e[2] === d[0] && !e[3] && g(c, b.name, e[1], e[2]));
            });
          }
          j || (b.auto = !0);
        });
        this.s.columns = c;
      },
      _detailsInit: function () {
        var d = this,
          a = this.s.dt,
          c = this.c.details;
        "inline" === c.type && (c.target = "td:first-child");
        var b = c.target;
        e(a.table().body()).on(
          "click",
          "string" === typeof b ? b : "td",
          function () {
            if (
              e(a.table().node()).hasClass("collapsed") &&
              a.row(e(this).closest("tr")).length
            ) {
              if (typeof b === "number") {
                var c = b < 0 ? a.columns().eq(0).length + b : b;
                if (a.cell(this).index().column !== c) return;
              }
              c = a.row(e(this).closest("tr"));
              if (c.child.isShown()) {
                c.child(!1);
                e(c.node()).removeClass("parent");
              } else {
                var f = d.c.details.renderer(a, c[0]);
                c.child(f, "child").show();
                e(c.node()).addClass("parent");
              }
            }
          }
        );
      },
      _detailsVis: function () {
        var d = this,
          a = this.s.dt,
          c = a
            .columns()
            .indexes()
            .filter(function (b) {
              var c = a.column(b);
              return c.visible()
                ? null
                : e(c.header()).hasClass("never")
                ? null
                : b;
            }),
          b = !0;
        if (0 === c.length || (1 === c.length && this.s.columns[c[0]].control))
          b = !1;
        b
          ? a
              .rows({ page: "current" })
              .eq(0)
              .each(function (b) {
                b = a.row(b);
                if (b.child()) {
                  var c = d.c.details.renderer(a, b[0]);
                  !1 === c ? b.child.hide() : b.child(c, "child").show();
                }
              })
          : a
              .rows({ page: "current" })
              .eq(0)
              .each(function (b) {
                a.row(b).child.hide();
              });
      },
      _find: function (d) {
        for (var a = this.c.breakpoints, c = 0, b = a.length; c < b; c++)
          if (a[c].name === d) return a[c];
      },
      _resize: function () {
        var d = this.s.dt,
          a = e(n).width(),
          c = this.c.breakpoints,
          b = c[0].name,
          g = this.s.columns,
          f;
        for (f = c.length - 1; 0 <= f; f--)
          if (a <= c[f].width) {
            b = c[f].name;
            break;
          }
        var i = this._columnsVisiblity(b),
          c = !1;
        f = 0;
        for (a = g.length; f < a; f++)
          if (!1 === i[f] && !g[f].never) {
            c = !0;
            break;
          }
        e(d.table().node()).toggleClass("collapsed", c);
        d.columns()
          .eq(0)
          .each(function (a, b) {
            d.column(a).visible(i[b]);
          });
      },
      _resizeAuto: function () {
        var d = this.s.dt,
          a = this.s.columns;
        if (
          this.c.auto &&
          -1 !==
            e.inArray(
              !0,
              e.map(a, function (a) {
                return a.auto;
              })
            )
        ) {
          d.table().node();
          var c = d.table().node().cloneNode(!1),
            b = e(d.table().header().cloneNode(!1)).appendTo(c),
            g = e(d.table().body().cloneNode(!1)).appendTo(c);
          e(d.table().footer()).clone(!1).appendTo(c);
          d.rows({ page: "current" })
            .indexes()
            .flatten()
            .each(function (a) {
              var b = d.row(a).node().cloneNode(!0);
              d.columns(":hidden").flatten().length &&
                e(b).append(d.cells(a, ":hidden").nodes().to$().clone());
              e(b).appendTo(g);
            });
          var f = d.columns().header().to$().clone(!1);
          e("<tr/>").append(f).appendTo(b);
          "inline" === this.c.details.type &&
            e(c).addClass("dtr-inline collapsed");
          c = e("<div/>")
            .css({ width: 1, height: 1, overflow: "hidden" })
            .append(c);
          c.find("th.never, td.never").remove();
          c.insertBefore(d.table().node());
          d.columns()
            .eq(0)
            .each(function (b) {
              a[b].minWidth = f[b].offsetWidth || 0;
            });
          c.remove();
        }
      },
    };
    h.breakpoints = [
      { name: "desktop", width: Infinity },
      { name: "tablet-l", width: 1024 },
      { name: "tablet-p", width: 768 },
      { name: "mobile-l", width: 480 },
      { name: "mobile-p", width: 320 },
    ];
    h.defaults = {
      breakpoints: h.breakpoints,
      auto: !0,
      details: {
        renderer: function (d, a) {
          var c = d
            .cells(a, ":hidden")
            .eq(0)
            .map(function (a) {
              var c = e(d.column(a.column).header()),
                a = d.cell(a).index();
              if (c.hasClass("control") || c.hasClass("never")) return "";
              var f = d.settings()[0],
                f = f.oApi._fnGetCellData(f, a.row, a.column, "display");
              (c = c.text()) && (c += ":");
              return (
                '<li data-dtr-index="' +
                a.column +
                '"><span class="dtr-title">' +
                c +
                '</span> <span class="dtr-data">' +
                f +
                "</span></li>"
              );
            })
            .toArray()
            .join("");
          return c ? e('<ul data-dtr-index="' + a + '"/>').append(c) : !1;
        },
        target: 0,
        type: "inline",
      },
    };
    var m = e.fn.dataTable.Api;
    m.register("responsive()", function () {
      return this;
    });
    m.register("responsive.index()", function (d) {
      d = e(d);
      return { column: d.data("dtr-index"), row: d.parent().data("dtr-index") };
    });
    m.register("responsive.rebuild()", function () {
      return this.iterator("table", function (d) {
        d._responsive && d._responsive._classLogic();
      });
    });
    m.register("responsive.recalc()", function () {
      return this.iterator("table", function (d) {
        d._responsive && (d._responsive._resizeAuto(), d._responsive._resize());
      });
    });
    h.version = "1.0.7";
    e.fn.dataTable.Responsive = h;
    e.fn.DataTable.Responsive = h;
    e(p).on("init.dt.dtr", function (d, a) {
      if (
        "dt" === d.namespace &&
        (e(a.nTable).hasClass("responsive") ||
          e(a.nTable).hasClass("dt-responsive") ||
          a.oInit.responsive ||
          k.defaults.responsive)
      ) {
        var c = a.oInit.responsive;
        !1 !== c && new h(a, e.isPlainObject(c) ? c : {});
      }
    });
    return h;
  };
  "function" === typeof define && define.amd
    ? define(["jquery", "datatables"], o)
    : "object" === typeof exports
    ? o(require("jquery"), require("datatables"))
    : jQuery &&
      !jQuery.fn.dataTable.Responsive &&
      o(jQuery, jQuery.fn.dataTable);
})(window, document);
var DateFormatter;
!(function () {
  "use strict";
  var e, t, a, r, n, o;
  (n = 864e5),
    (o = 3600),
    (e = function (e, t) {
      return (
        "string" == typeof e &&
        "string" == typeof t &&
        e.toLowerCase() === t.toLowerCase()
      );
    }),
    (t = function (e, a, r) {
      var n = r || "0",
        o = e.toString();
      return o.length < a ? t(n + o, a) : o;
    }),
    (a = function (e) {
      var t, r;
      for (e = e || {}, t = 1; t < arguments.length; t++)
        if ((r = arguments[t]))
          for (var n in r)
            r.hasOwnProperty(n) &&
              ("object" == typeof r[n] ? a(e[n], r[n]) : (e[n] = r[n]));
      return e;
    }),
    (r = {
      dateSettings: {
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthsShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        meridiem: ["AM", "PM"],
        ordinal: function (e) {
          var t = e % 10,
            a = { 1: "st", 2: "nd", 3: "rd" };
          return 1 !== Math.floor((e % 100) / 10) && a[t] ? a[t] : "th";
        },
      },
      separators: /[ \-+\/\.T:@]/g,
      validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
      intParts: /[djwNzmnyYhHgGis]/g,
      tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
      tzClip: /[^-+\dA-Z]/g,
    }),
    (DateFormatter = function (e) {
      var t = this,
        n = a(r, e);
      (t.dateSettings = n.dateSettings),
        (t.separators = n.separators),
        (t.validParts = n.validParts),
        (t.intParts = n.intParts),
        (t.tzParts = n.tzParts),
        (t.tzClip = n.tzClip);
    }),
    (DateFormatter.prototype = {
      constructor: DateFormatter,
      parseDate: function (t, a) {
        var r,
          n,
          o,
          i,
          s,
          d,
          u,
          l,
          f,
          c,
          m = this,
          h = !1,
          g = !1,
          p = m.dateSettings,
          y = {
            date: null,
            year: null,
            month: null,
            day: null,
            hour: 0,
            min: 0,
            sec: 0,
          };
        if (!t) return void 0;
        if (t instanceof Date) return t;
        if ("number" == typeof t) return new Date(t);
        if ("U" === a) return (o = parseInt(t)), o ? new Date(1e3 * o) : t;
        if ("string" != typeof t) return "";
        if (((r = a.match(m.validParts)), !r || 0 === r.length))
          throw new Error("Invalid date format definition.");
        for (
          n = t.replace(m.separators, "\x00").split("\x00"), o = 0;
          o < n.length;
          o++
        )
          switch (((i = n[o]), (s = parseInt(i)), r[o])) {
            case "y":
            case "Y":
              (f = i.length),
                2 === f
                  ? (y.year = parseInt((70 > s ? "20" : "19") + i))
                  : 4 === f && (y.year = s),
                (h = !0);
              break;
            case "m":
            case "n":
            case "M":
            case "F":
              isNaN(i)
                ? ((d = p.monthsShort.indexOf(i)),
                  d > -1 && (y.month = d + 1),
                  (d = p.months.indexOf(i)),
                  d > -1 && (y.month = d + 1))
                : s >= 1 && 12 >= s && (y.month = s),
                (h = !0);
              break;
            case "d":
            case "j":
              s >= 1 && 31 >= s && (y.day = s), (h = !0);
              break;
            case "g":
            case "h":
              (u =
                r.indexOf("a") > -1
                  ? r.indexOf("a")
                  : r.indexOf("A") > -1
                  ? r.indexOf("A")
                  : -1),
                (c = n[u]),
                u > -1
                  ? ((l = e(c, p.meridiem[0])
                      ? 0
                      : e(c, p.meridiem[1])
                      ? 12
                      : -1),
                    s >= 1 && 12 >= s && l > -1
                      ? (y.hour = s + l - 1)
                      : s >= 0 && 23 >= s && (y.hour = s))
                  : s >= 0 && 23 >= s && (y.hour = s),
                (g = !0);
              break;
            case "G":
            case "H":
              s >= 0 && 23 >= s && (y.hour = s), (g = !0);
              break;
            case "i":
              s >= 0 && 59 >= s && (y.min = s), (g = !0);
              break;
            case "s":
              s >= 0 && 59 >= s && (y.sec = s), (g = !0);
          }
        if (h === !0 && y.year && y.month && y.day)
          y.date = new Date(
            y.year,
            y.month - 1,
            y.day,
            y.hour,
            y.min,
            y.sec,
            0
          );
        else {
          if (g !== !0) return !1;
          y.date = new Date(0, 0, 0, y.hour, y.min, y.sec, 0);
        }
        return y.date;
      },
      guessDate: function (e, t) {
        if ("string" != typeof e) return e;
        var a,
          r,
          n,
          o,
          i = this,
          s = e.replace(i.separators, "\x00").split("\x00"),
          d = /^[djmn]/g,
          u = t.match(i.validParts),
          l = new Date(),
          f = 0;
        if (!d.test(u[0])) return e;
        for (r = 0; r < s.length; r++) {
          switch (((f = 2), (n = s[r]), (o = parseInt(n.substr(0, 2))), r)) {
            case 0:
              "m" === u[0] || "n" === u[0] ? l.setMonth(o - 1) : l.setDate(o);
              break;
            case 1:
              "m" === u[0] || "n" === u[0] ? l.setDate(o) : l.setMonth(o - 1);
              break;
            case 2:
              (a = l.getFullYear()),
                n.length < 4
                  ? (l.setFullYear(
                      parseInt(a.toString().substr(0, 4 - n.length) + n)
                    ),
                    (f = n.length))
                  : ((l.setFullYear = parseInt(n.substr(0, 4))), (f = 4));
              break;
            case 3:
              l.setHours(o);
              break;
            case 4:
              l.setMinutes(o);
              break;
            case 5:
              l.setSeconds(o);
          }
          n.substr(f).length > 0 && s.splice(r + 1, 0, n.substr(f));
        }
        return l;
      },
      parseFormat: function (e, a) {
        var r,
          i = this,
          s = i.dateSettings,
          d = /\\?(.?)/gi,
          u = function (e, t) {
            return r[e] ? r[e]() : t;
          };
        return (
          (r = {
            d: function () {
              return t(r.j(), 2);
            },
            D: function () {
              return s.daysShort[r.w()];
            },
            j: function () {
              return a.getDate();
            },
            l: function () {
              return s.days[r.w()];
            },
            N: function () {
              return r.w() || 7;
            },
            w: function () {
              return a.getDay();
            },
            z: function () {
              var e = new Date(r.Y(), r.n() - 1, r.j()),
                t = new Date(r.Y(), 0, 1);
              return Math.round((e - t) / n);
            },
            W: function () {
              var e = new Date(r.Y(), r.n() - 1, r.j() - r.N() + 3),
                a = new Date(e.getFullYear(), 0, 4);
              return t(1 + Math.round((e - a) / n / 7), 2);
            },
            F: function () {
              return s.months[a.getMonth()];
            },
            m: function () {
              return t(r.n(), 2);
            },
            M: function () {
              return s.monthsShort[a.getMonth()];
            },
            n: function () {
              return a.getMonth() + 1;
            },
            t: function () {
              return new Date(r.Y(), r.n(), 0).getDate();
            },
            L: function () {
              var e = r.Y();
              return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0 ? 1 : 0;
            },
            o: function () {
              var e = r.n(),
                t = r.W(),
                a = r.Y();
              return a + (12 === e && 9 > t ? 1 : 1 === e && t > 9 ? -1 : 0);
            },
            Y: function () {
              return a.getFullYear();
            },
            y: function () {
              return r.Y().toString().slice(-2);
            },
            a: function () {
              return r.A().toLowerCase();
            },
            A: function () {
              var e = r.G() < 12 ? 0 : 1;
              return s.meridiem[e];
            },
            B: function () {
              var e = a.getUTCHours() * o,
                r = 60 * a.getUTCMinutes(),
                n = a.getUTCSeconds();
              return t(Math.floor((e + r + n + o) / 86.4) % 1e3, 3);
            },
            g: function () {
              return r.G() % 12 || 12;
            },
            G: function () {
              return a.getHours();
            },
            h: function () {
              return t(r.g(), 2);
            },
            H: function () {
              return t(r.G(), 2);
            },
            i: function () {
              return t(a.getMinutes(), 2);
            },
            s: function () {
              return t(a.getSeconds(), 2);
            },
            u: function () {
              return t(1e3 * a.getMilliseconds(), 6);
            },
            e: function () {
              var e = /\((.*)\)/.exec(String(a))[1];
              return e || "Coordinated Universal Time";
            },
            T: function () {
              var e = (String(a).match(i.tzParts) || [""])
                .pop()
                .replace(i.tzClip, "");
              return e || "UTC";
            },
            I: function () {
              var e = new Date(r.Y(), 0),
                t = Date.UTC(r.Y(), 0),
                a = new Date(r.Y(), 6),
                n = Date.UTC(r.Y(), 6);
              return e - t !== a - n ? 1 : 0;
            },
            O: function () {
              var e = a.getTimezoneOffset(),
                r = Math.abs(e);
              return (
                (e > 0 ? "-" : "+") + t(100 * Math.floor(r / 60) + (r % 60), 4)
              );
            },
            P: function () {
              var e = r.O();
              return e.substr(0, 3) + ":" + e.substr(3, 2);
            },
            Z: function () {
              return 60 * -a.getTimezoneOffset();
            },
            c: function () {
              return "Y-m-d\\TH:i:sP".replace(d, u);
            },
            r: function () {
              return "D, d M Y H:i:s O".replace(d, u);
            },
            U: function () {
              return a.getTime() / 1e3 || 0;
            },
          }),
          u(e, e)
        );
      },
      formatDate: function (e, t) {
        var a,
          r,
          n,
          o,
          i,
          s = this,
          d = "";
        if ("string" == typeof e && ((e = s.parseDate(e, t)), e === !1))
          return !1;
        if (e instanceof Date) {
          for (n = t.length, a = 0; n > a; a++)
            (i = t.charAt(a)),
              "S" !== i &&
                ((o = s.parseFormat(i, e)),
                a !== n - 1 &&
                  s.intParts.test(i) &&
                  "S" === t.charAt(a + 1) &&
                  ((r = parseInt(o)), (o += s.dateSettings.ordinal(r))),
                (d += o));
          return d;
        }
        return "";
      },
    });
})(),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "jquery-mousewheel"], e)
      : "object" == typeof exports
      ? (module.exports = e)
      : e(jQuery);
  })(function (e) {
    "use strict";
    function t(e, t, a) {
      (this.date = e), (this.desc = t), (this.style = a);
    }
    var a = {
        i18n: {
          ar: {
            months: [
              "ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ",
              "Ø´Ø¨Ø§Ø·",
              "Ø¢Ø°Ø§Ø±",
              "Ù†ÙŠØ³Ø§Ù†",
              "Ù…Ø§ÙŠÙˆ",
              "Ø­Ø²ÙŠØ±Ø§Ù†",
              "ØªÙ…ÙˆØ²",
              "Ø¢Ø¨",
              "Ø£ÙŠÙ„ÙˆÙ„",
              "ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø£ÙˆÙ„",
              "ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ",
              "ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø£ÙˆÙ„",
            ],
            dayOfWeekShort: ["Ù†", "Ø«", "Ø¹", "Ø®", "Ø¬", "Ø³", "Ø­"],
            dayOfWeek: [
              "Ø§Ù„Ø£Ø­Ø¯",
              "Ø§Ù„Ø§Ø«Ù†ÙŠÙ†",
              "Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡",
              "Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡",
              "Ø§Ù„Ø®Ù…ÙŠØ³",
              "Ø§Ù„Ø¬Ù…Ø¹Ø©",
              "Ø§Ù„Ø³Ø¨Øª",
              "Ø§Ù„Ø£Ø­Ø¯",
            ],
          },
          ro: {
            months: [
              "Ianuarie",
              "Februarie",
              "Martie",
              "Aprilie",
              "Mai",
              "Iunie",
              "Iulie",
              "August",
              "Septembrie",
              "Octombrie",
              "Noiembrie",
              "Decembrie",
            ],
            dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "SÃ¢"],
            dayOfWeek: [
              "DuminicÄƒ",
              "Luni",
              "MarÅ£i",
              "Miercuri",
              "Joi",
              "Vineri",
              "SÃ¢mbÄƒtÄƒ",
            ],
          },
          id: {
            months: [
              "Januari",
              "Februari",
              "Maret",
              "April",
              "Mei",
              "Juni",
              "Juli",
              "Agustus",
              "September",
              "Oktober",
              "November",
              "Desember",
            ],
            dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
            dayOfWeek: [
              "Minggu",
              "Senin",
              "Selasa",
              "Rabu",
              "Kamis",
              "Jumat",
              "Sabtu",
            ],
          },
          is: {
            months: [
              "JanÃºar",
              "FebrÃºar",
              "Mars",
              "AprÃ­l",
              "MaÃ­",
              "JÃºnÃ­",
              "JÃºlÃ­",
              "ÃgÃºst",
              "September",
              "OktÃ³ber",
              "NÃ³vember",
              "Desember",
            ],
            dayOfWeekShort: [
              "Sun",
              "MÃ¡n",
              "ÃžriÃ°",
              "MiÃ°",
              "Fim",
              "FÃ¶s",
              "Lau",
            ],
            dayOfWeek: [
              "Sunnudagur",
              "MÃ¡nudagur",
              "ÃžriÃ°judagur",
              "MiÃ°vikudagur",
              "Fimmtudagur",
              "FÃ¶studagur",
              "Laugardagur",
            ],
          },
          bg: {
            months: [
              "Ð¯Ð½ÑƒÐ°Ñ€Ð¸",
              "Ð¤ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸",
              "ÐœÐ°Ñ€Ñ‚",
              "ÐÐ¿Ñ€Ð¸Ð»",
              "ÐœÐ°Ð¹",
              "Ð®Ð½Ð¸",
              "Ð®Ð»Ð¸",
              "ÐÐ²Ð³ÑƒÑÑ‚",
              "Ð¡ÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸",
              "ÐžÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸",
              "ÐÐ¾ÐµÐ¼Ð²Ñ€Ð¸",
              "Ð”ÐµÐºÐµÐ¼Ð²Ñ€Ð¸",
            ],
            dayOfWeekShort: [
              "ÐÐ´",
              "ÐŸÐ½",
              "Ð’Ñ‚",
              "Ð¡Ñ€",
              "Ð§Ñ‚",
              "ÐŸÑ‚",
              "Ð¡Ð±",
            ],
            dayOfWeek: [
              "ÐÐµÐ´ÐµÐ»Ñ",
              "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº",
              "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº",
              "Ð¡Ñ€ÑÐ´Ð°",
              "Ð§ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº",
              "ÐŸÐµÑ‚ÑŠÐº",
              "Ð¡ÑŠÐ±Ð¾Ñ‚Ð°",
            ],
          },
          fa: {
            months: [
              "ÙØ±ÙˆØ±Ø¯ÛŒÙ†",
              "Ø§Ø±Ø¯ÛŒØ¨Ù‡Ø´Øª",
              "Ø®Ø±Ø¯Ø§Ø¯",
              "ØªÛŒØ±",
              "Ù…Ø±Ø¯Ø§Ø¯",
              "Ø´Ù‡Ø±ÛŒÙˆØ±",
              "Ù…Ù‡Ø±",
              "Ø¢Ø¨Ø§Ù†",
              "Ø¢Ø°Ø±",
              "Ø¯ÛŒ",
              "Ø¨Ù‡Ù…Ù†",
              "Ø§Ø³ÙÙ†Ø¯",
            ],
            dayOfWeekShort: [
              "ÛŒÚ©Ø´Ù†Ø¨Ù‡",
              "Ø¯ÙˆØ´Ù†Ø¨Ù‡",
              "Ø³Ù‡ Ø´Ù†Ø¨Ù‡",
              "Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡",
              "Ù¾Ù†Ø¬Ø´Ù†Ø¨Ù‡",
              "Ø¬Ù…Ø¹Ù‡",
              "Ø´Ù†Ø¨Ù‡",
            ],
            dayOfWeek: [
              "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡",
              "Ø¯ÙˆØ´Ù†Ø¨Ù‡",
              "Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡",
              "Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡",
              "Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡",
              "Ø¬Ù…Ø¹Ù‡",
              "Ø´Ù†Ø¨Ù‡",
              "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡",
            ],
          },
          ru: {
            months: [
              "Ð¯Ð½Ð²Ð°Ñ€ÑŒ",
              "Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ",
              "ÐœÐ°Ñ€Ñ‚",
              "ÐÐ¿Ñ€ÐµÐ»ÑŒ",
              "ÐœÐ°Ð¹",
              "Ð˜ÑŽÐ½ÑŒ",
              "Ð˜ÑŽÐ»ÑŒ",
              "ÐÐ²Ð³ÑƒÑÑ‚",
              "Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ",
              "ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ",
              "ÐÐ¾ÑÐ±Ñ€ÑŒ",
              "Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ",
            ],
            dayOfWeekShort: [
              "Ð’Ñ",
              "ÐŸÐ½",
              "Ð’Ñ‚",
              "Ð¡Ñ€",
              "Ð§Ñ‚",
              "ÐŸÑ‚",
              "Ð¡Ð±",
            ],
            dayOfWeek: [
              "Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ",
              "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº",
              "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº",
              "Ð¡Ñ€ÐµÐ´Ð°",
              "Ð§ÐµÑ‚Ð²ÐµÑ€Ð³",
              "ÐŸÑÑ‚Ð½Ð¸Ñ†Ð°",
              "Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ð°",
            ],
          },
          uk: {
            months: [
              "Ð¡Ñ–Ñ‡ÐµÐ½ÑŒ",
              "Ð›ÑŽÑ‚Ð¸Ð¹",
              "Ð‘ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ",
              "ÐšÐ²Ñ–Ñ‚ÐµÐ½ÑŒ",
              "Ð¢Ñ€Ð°Ð²ÐµÐ½ÑŒ",
              "Ð§ÐµÑ€Ð²ÐµÐ½ÑŒ",
              "Ð›Ð¸Ð¿ÐµÐ½ÑŒ",
              "Ð¡ÐµÑ€Ð¿ÐµÐ½ÑŒ",
              "Ð’ÐµÑ€ÐµÑÐµÐ½ÑŒ",
              "Ð–Ð¾Ð²Ñ‚ÐµÐ½ÑŒ",
              "Ð›Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´",
              "Ð“Ñ€ÑƒÐ´ÐµÐ½ÑŒ",
            ],
            dayOfWeekShort: [
              "ÐÐ´Ð»",
              "ÐŸÐ½Ð´",
              "Ð’Ñ‚Ñ€",
              "Ð¡Ñ€Ð´",
              "Ð§Ñ‚Ð²",
              "ÐŸÑ‚Ð½",
              "Ð¡Ð±Ñ‚",
            ],
            dayOfWeek: [
              "ÐÐµÐ´Ñ–Ð»Ñ",
              "ÐŸÐ¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº",
              "Ð’Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº",
              "Ð¡ÐµÑ€ÐµÐ´Ð°",
              "Ð§ÐµÑ‚Ð²ÐµÑ€",
              "ÐŸ'ÑÑ‚Ð½Ð¸Ñ†Ñ",
              "Ð¡ÑƒÐ±Ð¾Ñ‚Ð°",
            ],
          },
          en: {
            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayOfWeek: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          el: {
            months: [
              "Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚",
              "Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚",
              "ÎœÎ¬ÏÏ„Î¹Î¿Ï‚",
              "Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚",
              "ÎœÎ¬Î¹Î¿Ï‚",
              "Î™Î¿ÏÎ½Î¹Î¿Ï‚",
              "Î™Î¿ÏÎ»Î¹Î¿Ï‚",
              "Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚",
              "Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚",
              "ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚",
              "ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚",
              "Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚",
            ],
            dayOfWeekShort: [
              "ÎšÏ…Ï",
              "Î”ÎµÏ…",
              "Î¤ÏÎ¹",
              "Î¤ÎµÏ„",
              "Î ÎµÎ¼",
              "Î Î±Ï",
              "Î£Î±Î²",
            ],
            dayOfWeek: [
              "ÎšÏ…ÏÎ¹Î±ÎºÎ®",
              "Î”ÎµÏ…Ï„Î­ÏÎ±",
              "Î¤ÏÎ¯Ï„Î·",
              "Î¤ÎµÏ„Î¬ÏÏ„Î·",
              "Î Î­Î¼Ï€Ï„Î·",
              "Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®",
              "Î£Î¬Î²Î²Î±Ï„Î¿",
            ],
          },
          de: {
            months: [
              "Januar",
              "Februar",
              "MÃ¤rz",
              "April",
              "Mai",
              "Juni",
              "Juli",
              "August",
              "September",
              "Oktober",
              "November",
              "Dezember",
            ],
            dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayOfWeek: [
              "Sonntag",
              "Montag",
              "Dienstag",
              "Mittwoch",
              "Donnerstag",
              "Freitag",
              "Samstag",
            ],
          },
          nl: {
            months: [
              "januari",
              "februari",
              "maart",
              "april",
              "mei",
              "juni",
              "juli",
              "augustus",
              "september",
              "oktober",
              "november",
              "december",
            ],
            dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            dayOfWeek: [
              "zondag",
              "maandag",
              "dinsdag",
              "woensdag",
              "donderdag",
              "vrijdag",
              "zaterdag",
            ],
          },
          tr: {
            months: [
              "Ocak",
              "Åžubat",
              "Mart",
              "Nisan",
              "MayÄ±s",
              "Haziran",
              "Temmuz",
              "AÄŸustos",
              "EylÃ¼l",
              "Ekim",
              "KasÄ±m",
              "AralÄ±k",
            ],
            dayOfWeekShort: ["Paz", "Pts", "Sal", "Ã‡ar", "Per", "Cum", "Cts"],
            dayOfWeek: [
              "Pazar",
              "Pazartesi",
              "SalÄ±",
              "Ã‡arÅŸamba",
              "PerÅŸembe",
              "Cuma",
              "Cumartesi",
            ],
          },
          fr: {
            months: [
              "Janvier",
              "FÃ©vrier",
              "Mars",
              "Avril",
              "Mai",
              "Juin",
              "Juillet",
              "AoÃ»t",
              "Septembre",
              "Octobre",
              "Novembre",
              "DÃ©cembre",
            ],
            dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            dayOfWeek: [
              "dimanche",
              "lundi",
              "mardi",
              "mercredi",
              "jeudi",
              "vendredi",
              "samedi",
            ],
          },
          es: {
            months: [
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
              "Mayo",
              "Junio",
              "Julio",
              "Agosto",
              "Septiembre",
              "Octubre",
              "Noviembre",
              "Diciembre",
            ],
            dayOfWeekShort: ["Dom", "Lun", "Mar", "MiÃ©", "Jue", "Vie", "SÃ¡b"],
            dayOfWeek: [
              "Domingo",
              "Lunes",
              "Martes",
              "MiÃ©rcoles",
              "Jueves",
              "Viernes",
              "SÃ¡bado",
            ],
          },
          th: {
            months: [
              "à¸¡à¸à¸£à¸²à¸„à¸¡",
              "à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ",
              "à¸¡à¸µà¸™à¸²à¸„à¸¡",
              "à¹€à¸¡à¸©à¸²à¸¢à¸™",
              "à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡",
              "à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™",
              "à¸à¸£à¸à¸Žà¸²à¸„à¸¡",
              "à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡",
              "à¸à¸±à¸™à¸¢à¸²à¸¢à¸™",
              "à¸•à¸¸à¸¥à¸²à¸„à¸¡",
              "à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™",
              "à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡",
            ],
            dayOfWeekShort: [
              "à¸­à¸².",
              "à¸ˆ.",
              "à¸­.",
              "à¸ž.",
              "à¸žà¸¤.",
              "à¸¨.",
              "à¸ª.",
            ],
            dayOfWeek: [
              "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ",
              "à¸ˆà¸±à¸™à¸—à¸£à¹Œ",
              "à¸­à¸±à¸‡à¸„à¸²à¸£",
              "à¸žà¸¸à¸˜",
              "à¸žà¸¤à¸«à¸±à¸ª",
              "à¸¨à¸¸à¸à¸£à¹Œ",
              "à¹€à¸ªà¸²à¸£à¹Œ",
              "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ",
            ],
          },
          pl: {
            months: [
              "styczeÅ„",
              "luty",
              "marzec",
              "kwiecieÅ„",
              "maj",
              "czerwiec",
              "lipiec",
              "sierpieÅ„",
              "wrzesieÅ„",
              "paÅºdziernik",
              "listopad",
              "grudzieÅ„",
            ],
            dayOfWeekShort: ["nd", "pn", "wt", "Å›r", "cz", "pt", "sb"],
            dayOfWeek: [
              "niedziela",
              "poniedziaÅ‚ek",
              "wtorek",
              "Å›roda",
              "czwartek",
              "piÄ…tek",
              "sobota",
            ],
          },
          pt: {
            months: [
              "Janeiro",
              "Fevereiro",
              "MarÃ§o",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ],
            dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            dayOfWeek: [
              "Domingo",
              "Segunda",
              "TerÃ§a",
              "Quarta",
              "Quinta",
              "Sexta",
              "SÃ¡bado",
            ],
          },
          ch: {
            months: [
              "ä¸€æœˆ",
              "äºŒæœˆ",
              "ä¸‰æœˆ",
              "å››æœˆ",
              "äº”æœˆ",
              "å…­æœˆ",
              "ä¸ƒæœˆ",
              "å…«æœˆ",
              "ä¹æœˆ",
              "åæœˆ",
              "åä¸€æœˆ",
              "åäºŒæœˆ",
            ],
            dayOfWeekShort: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
          },
          se: {
            months: [
              "Januari",
              "Februari",
              "Mars",
              "April",
              "Maj",
              "Juni",
              "Juli",
              "Augusti",
              "September",
              "Oktober",
              "November",
              "December",
            ],
            dayOfWeekShort: [
              "SÃ¶n",
              "MÃ¥n",
              "Tis",
              "Ons",
              "Tor",
              "Fre",
              "LÃ¶r",
            ],
          },
          kr: {
            months: [
              "1ì›”",
              "2ì›”",
              "3ì›”",
              "4ì›”",
              "5ì›”",
              "6ì›”",
              "7ì›”",
              "8ì›”",
              "9ì›”",
              "10ì›”",
              "11ì›”",
              "12ì›”",
            ],
            dayOfWeekShort: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
            dayOfWeek: [
              "ì¼ìš”ì¼",
              "ì›”ìš”ì¼",
              "í™”ìš”ì¼",
              "ìˆ˜ìš”ì¼",
              "ëª©ìš”ì¼",
              "ê¸ˆìš”ì¼",
              "í† ìš”ì¼",
            ],
          },
          it: {
            months: [
              "Gennaio",
              "Febbraio",
              "Marzo",
              "Aprile",
              "Maggio",
              "Giugno",
              "Luglio",
              "Agosto",
              "Settembre",
              "Ottobre",
              "Novembre",
              "Dicembre",
            ],
            dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
            dayOfWeek: [
              "Domenica",
              "LunedÃ¬",
              "MartedÃ¬",
              "MercoledÃ¬",
              "GiovedÃ¬",
              "VenerdÃ¬",
              "Sabato",
            ],
          },
          da: {
            months: [
              "January",
              "Februar",
              "Marts",
              "April",
              "Maj",
              "Juni",
              "July",
              "August",
              "September",
              "Oktober",
              "November",
              "December",
            ],
            dayOfWeekShort: ["SÃ¸n", "Man", "Tir", "Ons", "Tor", "Fre", "LÃ¸r"],
            dayOfWeek: [
              "sÃ¸ndag",
              "mandag",
              "tirsdag",
              "onsdag",
              "torsdag",
              "fredag",
              "lÃ¸rdag",
            ],
          },
          no: {
            months: [
              "Januar",
              "Februar",
              "Mars",
              "April",
              "Mai",
              "Juni",
              "Juli",
              "August",
              "September",
              "Oktober",
              "November",
              "Desember",
            ],
            dayOfWeekShort: ["SÃ¸n", "Man", "Tir", "Ons", "Tor", "Fre", "LÃ¸r"],
            dayOfWeek: [
              "SÃ¸ndag",
              "Mandag",
              "Tirsdag",
              "Onsdag",
              "Torsdag",
              "Fredag",
              "LÃ¸rdag",
            ],
          },
          ja: {
            months: [
              "1æœˆ",
              "2æœˆ",
              "3æœˆ",
              "4æœˆ",
              "5æœˆ",
              "6æœˆ",
              "7æœˆ",
              "8æœˆ",
              "9æœˆ",
              "10æœˆ",
              "11æœˆ",
              "12æœˆ",
            ],
            dayOfWeekShort: ["æ—¥", "æœˆ", "ç«", "æ°´", "æœ¨", "é‡‘", "åœŸ"],
            dayOfWeek: [
              "æ—¥æ›œ",
              "æœˆæ›œ",
              "ç«æ›œ",
              "æ°´æ›œ",
              "æœ¨æ›œ",
              "é‡‘æ›œ",
              "åœŸæ›œ",
            ],
          },
          vi: {
            months: [
              "ThÃ¡ng 1",
              "ThÃ¡ng 2",
              "ThÃ¡ng 3",
              "ThÃ¡ng 4",
              "ThÃ¡ng 5",
              "ThÃ¡ng 6",
              "ThÃ¡ng 7",
              "ThÃ¡ng 8",
              "ThÃ¡ng 9",
              "ThÃ¡ng 10",
              "ThÃ¡ng 11",
              "ThÃ¡ng 12",
            ],
            dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            dayOfWeek: [
              "Chá»§ nháº­t",
              "Thá»© hai",
              "Thá»© ba",
              "Thá»© tÆ°",
              "Thá»© nÄƒm",
              "Thá»© sÃ¡u",
              "Thá»© báº£y",
            ],
          },
          sl: {
            months: [
              "Januar",
              "Februar",
              "Marec",
              "April",
              "Maj",
              "Junij",
              "Julij",
              "Avgust",
              "September",
              "Oktober",
              "November",
              "December",
            ],
            dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "ÄŒet", "Pet", "Sob"],
            dayOfWeek: [
              "Nedelja",
              "Ponedeljek",
              "Torek",
              "Sreda",
              "ÄŒetrtek",
              "Petek",
              "Sobota",
            ],
          },
          cs: {
            months: [
              "Leden",
              "Ãšnor",
              "BÅ™ezen",
              "Duben",
              "KvÄ›ten",
              "ÄŒerven",
              "ÄŒervenec",
              "Srpen",
              "ZÃ¡Å™Ã­",
              "Å˜Ã­jen",
              "Listopad",
              "Prosinec",
            ],
            dayOfWeekShort: ["Ne", "Po", "Ãšt", "St", "ÄŒt", "PÃ¡", "So"],
          },
          hu: {
            months: [
              "JanuÃ¡r",
              "FebruÃ¡r",
              "MÃ¡rcius",
              "Ãprilis",
              "MÃ¡jus",
              "JÃºnius",
              "JÃºlius",
              "Augusztus",
              "Szeptember",
              "OktÃ³ber",
              "November",
              "December",
            ],
            dayOfWeekShort: ["Va", "HÃ©", "Ke", "Sze", "Cs", "PÃ©", "Szo"],
            dayOfWeek: [
              "vasÃ¡rnap",
              "hÃ©tfÅ‘",
              "kedd",
              "szerda",
              "csÃ¼tÃ¶rtÃ¶k",
              "pÃ©ntek",
              "szombat",
            ],
          },
          az: {
            months: [
              "Yanvar",
              "Fevral",
              "Mart",
              "Aprel",
              "May",
              "Iyun",
              "Iyul",
              "Avqust",
              "Sentyabr",
              "Oktyabr",
              "Noyabr",
              "Dekabr",
            ],
            dayOfWeekShort: ["B", "Be", "Ã‡a", "Ã‡", "Ca", "C", "Åž"],
            dayOfWeek: [
              "Bazar",
              "Bazar ertÉ™si",
              "Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±",
              "Ã‡É™rÅŸÉ™nbÉ™",
              "CÃ¼mÉ™ axÅŸamÄ±",
              "CÃ¼mÉ™",
              "ÅžÉ™nbÉ™",
            ],
          },
          bs: {
            months: [
              "Januar",
              "Februar",
              "Mart",
              "April",
              "Maj",
              "Jun",
              "Jul",
              "Avgust",
              "Septembar",
              "Oktobar",
              "Novembar",
              "Decembar",
            ],
            dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "ÄŒet", "Pet", "Sub"],
            dayOfWeek: [
              "Nedjelja",
              "Ponedjeljak",
              "Utorak",
              "Srijeda",
              "ÄŒetvrtak",
              "Petak",
              "Subota",
            ],
          },
          ca: {
            months: [
              "Gener",
              "Febrer",
              "MarÃ§",
              "Abril",
              "Maig",
              "Juny",
              "Juliol",
              "Agost",
              "Setembre",
              "Octubre",
              "Novembre",
              "Desembre",
            ],
            dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
            dayOfWeek: [
              "Diumenge",
              "Dilluns",
              "Dimarts",
              "Dimecres",
              "Dijous",
              "Divendres",
              "Dissabte",
            ],
          },
          "en-GB": {
            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayOfWeek: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          et: {
            months: [
              "Jaanuar",
              "Veebruar",
              "MÃ¤rts",
              "Aprill",
              "Mai",
              "Juuni",
              "Juuli",
              "August",
              "September",
              "Oktoober",
              "November",
              "Detsember",
            ],
            dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
            dayOfWeek: [
              "PÃ¼hapÃ¤ev",
              "EsmaspÃ¤ev",
              "TeisipÃ¤ev",
              "KolmapÃ¤ev",
              "NeljapÃ¤ev",
              "Reede",
              "LaupÃ¤ev",
            ],
          },
          eu: {
            months: [
              "Urtarrila",
              "Otsaila",
              "Martxoa",
              "Apirila",
              "Maiatza",
              "Ekaina",
              "Uztaila",
              "Abuztua",
              "Iraila",
              "Urria",
              "Azaroa",
              "Abendua",
            ],
            dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
            dayOfWeek: [
              "Igandea",
              "Astelehena",
              "Asteartea",
              "Asteazkena",
              "Osteguna",
              "Ostirala",
              "Larunbata",
            ],
          },
          fi: {
            months: [
              "Tammikuu",
              "Helmikuu",
              "Maaliskuu",
              "Huhtikuu",
              "Toukokuu",
              "KesÃ¤kuu",
              "HeinÃ¤kuu",
              "Elokuu",
              "Syyskuu",
              "Lokakuu",
              "Marraskuu",
              "Joulukuu",
            ],
            dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            dayOfWeek: [
              "sunnuntai",
              "maanantai",
              "tiistai",
              "keskiviikko",
              "torstai",
              "perjantai",
              "lauantai",
            ],
          },
          gl: {
            months: [
              "Xan",
              "Feb",
              "Maz",
              "Abr",
              "Mai",
              "Xun",
              "Xul",
              "Ago",
              "Set",
              "Out",
              "Nov",
              "Dec",
            ],
            dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
            dayOfWeek: [
              "Domingo",
              "Luns",
              "Martes",
              "MÃ©rcores",
              "Xoves",
              "Venres",
              "SÃ¡bado",
            ],
          },
          hr: {
            months: [
              "SijeÄanj",
              "VeljaÄa",
              "OÅ¾ujak",
              "Travanj",
              "Svibanj",
              "Lipanj",
              "Srpanj",
              "Kolovoz",
              "Rujan",
              "Listopad",
              "Studeni",
              "Prosinac",
            ],
            dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "ÄŒet", "Pet", "Sub"],
            dayOfWeek: [
              "Nedjelja",
              "Ponedjeljak",
              "Utorak",
              "Srijeda",
              "ÄŒetvrtak",
              "Petak",
              "Subota",
            ],
          },
          ko: {
            months: [
              "1ì›”",
              "2ì›”",
              "3ì›”",
              "4ì›”",
              "5ì›”",
              "6ì›”",
              "7ì›”",
              "8ì›”",
              "9ì›”",
              "10ì›”",
              "11ì›”",
              "12ì›”",
            ],
            dayOfWeekShort: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
            dayOfWeek: [
              "ì¼ìš”ì¼",
              "ì›”ìš”ì¼",
              "í™”ìš”ì¼",
              "ìˆ˜ìš”ì¼",
              "ëª©ìš”ì¼",
              "ê¸ˆìš”ì¼",
              "í† ìš”ì¼",
            ],
          },
          lt: {
            months: [
              "Sausio",
              "Vasario",
              "Kovo",
              "BalandÅ¾io",
              "GeguÅ¾Ä—s",
              "BirÅ¾elio",
              "Liepos",
              "RugpjÅ«Äio",
              "RugsÄ—jo",
              "Spalio",
              "LapkriÄio",
              "GruodÅ¾io",
            ],
            dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Å eÅ¡"],
            dayOfWeek: [
              "Sekmadienis",
              "Pirmadienis",
              "Antradienis",
              "TreÄiadienis",
              "Ketvirtadienis",
              "Penktadienis",
              "Å eÅ¡tadienis",
            ],
          },
          lv: {
            months: [
              "JanvÄris",
              "FebruÄris",
              "Marts",
              "AprÄ«lis ",
              "Maijs",
              "JÅ«nijs",
              "JÅ«lijs",
              "Augusts",
              "Septembris",
              "Oktobris",
              "Novembris",
              "Decembris",
            ],
            dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
            dayOfWeek: [
              "SvÄ“tdiena",
              "Pirmdiena",
              "Otrdiena",
              "TreÅ¡diena",
              "Ceturtdiena",
              "Piektdiena",
              "Sestdiena",
            ],
          },
          mk: {
            months: [
              "Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸",
              "Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸",
              "Ð¼Ð°Ñ€Ñ‚",
              "Ð°Ð¿Ñ€Ð¸Ð»",
              "Ð¼Ð°Ñ˜",
              "Ñ˜ÑƒÐ½Ð¸",
              "Ñ˜ÑƒÐ»Ð¸",
              "Ð°Ð²Ð³ÑƒÑÑ‚",
              "ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸",
              "Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸",
              "Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸",
              "Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸",
            ],
            dayOfWeekShort: [
              "Ð½ÐµÐ´",
              "Ð¿Ð¾Ð½",
              "Ð²Ñ‚Ð¾",
              "ÑÑ€Ðµ",
              "Ñ‡ÐµÑ‚",
              "Ð¿ÐµÑ‚",
              "ÑÐ°Ð±",
            ],
            dayOfWeek: [
              "ÐÐµÐ´ÐµÐ»Ð°",
              "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº",
              "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº",
              "Ð¡Ñ€ÐµÐ´Ð°",
              "Ð§ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº",
              "ÐŸÐµÑ‚Ð¾Ðº",
              "Ð¡Ð°Ð±Ð¾Ñ‚Ð°",
            ],
          },
          mn: {
            months: [
              "1-Ñ€ ÑÐ°Ñ€",
              "2-Ñ€ ÑÐ°Ñ€",
              "3-Ñ€ ÑÐ°Ñ€",
              "4-Ñ€ ÑÐ°Ñ€",
              "5-Ñ€ ÑÐ°Ñ€",
              "6-Ñ€ ÑÐ°Ñ€",
              "7-Ñ€ ÑÐ°Ñ€",
              "8-Ñ€ ÑÐ°Ñ€",
              "9-Ñ€ ÑÐ°Ñ€",
              "10-Ñ€ ÑÐ°Ñ€",
              "11-Ñ€ ÑÐ°Ñ€",
              "12-Ñ€ ÑÐ°Ñ€",
            ],
            dayOfWeekShort: [
              "Ð”Ð°Ð²",
              "ÐœÑÐ³",
              "Ð›Ñ…Ð°",
              "ÐŸÒ¯Ñ€",
              "Ð‘ÑÐ½",
              "Ð‘ÑÐ¼",
              "ÐÑÐ¼",
            ],
            dayOfWeek: [
              "Ð”Ð°Ð²Ð°Ð°",
              "ÐœÑÐ³Ð¼Ð°Ñ€",
              "Ð›Ñ…Ð°Ð³Ð²Ð°",
              "ÐŸÒ¯Ñ€ÑÐ²",
              "Ð‘Ð°Ð°ÑÐ°Ð½",
              "Ð‘ÑÐ¼Ð±Ð°",
              "ÐÑÐ¼",
            ],
          },
          "pt-BR": {
            months: [
              "Janeiro",
              "Fevereiro",
              "MarÃ§o",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ],
            dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "SÃ¡b"],
            dayOfWeek: [
              "Domingo",
              "Segunda",
              "TerÃ§a",
              "Quarta",
              "Quinta",
              "Sexta",
              "SÃ¡bado",
            ],
          },
          sk: {
            months: [
              "JanuÃ¡r",
              "FebruÃ¡r",
              "Marec",
              "AprÃ­l",
              "MÃ¡j",
              "JÃºn",
              "JÃºl",
              "August",
              "September",
              "OktÃ³ber",
              "November",
              "December",
            ],
            dayOfWeekShort: ["Ne", "Po", "Ut", "St", "Å t", "Pi", "So"],
            dayOfWeek: [
              "NedeÄ¾a",
              "Pondelok",
              "Utorok",
              "Streda",
              "Å tvrtok",
              "Piatok",
              "Sobota",
            ],
          },
          sq: {
            months: [
              "Janar",
              "Shkurt",
              "Mars",
              "Prill",
              "Maj",
              "Qershor",
              "Korrik",
              "Gusht",
              "Shtator",
              "Tetor",
              "NÃ«ntor",
              "Dhjetor",
            ],
            dayOfWeekShort: [
              "Die",
              "HÃ«n",
              "Mar",
              "MÃ«r",
              "Enj",
              "Pre",
              "Shtu",
            ],
            dayOfWeek: [
              "E Diel",
              "E HÃ«nÃ«",
              "E MartÄ“",
              "E MÃ«rkurÃ«",
              "E Enjte",
              "E Premte",
              "E ShtunÃ«",
            ],
          },
          "sr-YU": {
            months: [
              "Januar",
              "Februar",
              "Mart",
              "April",
              "Maj",
              "Jun",
              "Jul",
              "Avgust",
              "Septembar",
              "Oktobar",
              "Novembar",
              "Decembar",
            ],
            dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "Äet", "Pet", "Sub"],
            dayOfWeek: [
              "Nedelja",
              "Ponedeljak",
              "Utorak",
              "Sreda",
              "ÄŒetvrtak",
              "Petak",
              "Subota",
            ],
          },
          sr: {
            months: [
              "Ñ˜Ð°Ð½ÑƒÐ°Ñ€",
              "Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€",
              "Ð¼Ð°Ñ€Ñ‚",
              "Ð°Ð¿Ñ€Ð¸Ð»",
              "Ð¼Ð°Ñ˜",
              "Ñ˜ÑƒÐ½",
              "Ñ˜ÑƒÐ»",
              "Ð°Ð²Ð³ÑƒÑÑ‚",
              "ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€",
              "Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€",
              "Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€",
              "Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€",
            ],
            dayOfWeekShort: [
              "Ð½ÐµÐ´",
              "Ð¿Ð¾Ð½",
              "ÑƒÑ‚Ð¾",
              "ÑÑ€Ðµ",
              "Ñ‡ÐµÑ‚",
              "Ð¿ÐµÑ‚",
              "ÑÑƒÐ±",
            ],
            dayOfWeek: [
              "ÐÐµÐ´ÐµÑ™Ð°",
              "ÐŸÐ¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº",
              "Ð£Ñ‚Ð¾Ñ€Ð°Ðº",
              "Ð¡Ñ€ÐµÐ´Ð°",
              "Ð§ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº",
              "ÐŸÐµÑ‚Ð°Ðº",
              "Ð¡ÑƒÐ±Ð¾Ñ‚Ð°",
            ],
          },
          sv: {
            months: [
              "Januari",
              "Februari",
              "Mars",
              "April",
              "Maj",
              "Juni",
              "Juli",
              "Augusti",
              "September",
              "Oktober",
              "November",
              "December",
            ],
            dayOfWeekShort: [
              "SÃ¶n",
              "MÃ¥n",
              "Tis",
              "Ons",
              "Tor",
              "Fre",
              "LÃ¶r",
            ],
            dayOfWeek: [
              "SÃ¶ndag",
              "MÃ¥ndag",
              "Tisdag",
              "Onsdag",
              "Torsdag",
              "Fredag",
              "LÃ¶rdag",
            ],
          },
          "zh-TW": {
            months: [
              "ä¸€æœˆ",
              "äºŒæœˆ",
              "ä¸‰æœˆ",
              "å››æœˆ",
              "äº”æœˆ",
              "å…­æœˆ",
              "ä¸ƒæœˆ",
              "å…«æœˆ",
              "ä¹æœˆ",
              "åæœˆ",
              "åä¸€æœˆ",
              "åäºŒæœˆ",
            ],
            dayOfWeekShort: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
            dayOfWeek: [
              "æ˜ŸæœŸæ—¥",
              "æ˜ŸæœŸä¸€",
              "æ˜ŸæœŸäºŒ",
              "æ˜ŸæœŸä¸‰",
              "æ˜ŸæœŸå››",
              "æ˜ŸæœŸäº”",
              "æ˜ŸæœŸå…­",
            ],
          },
          zh: {
            months: [
              "ä¸€æœˆ",
              "äºŒæœˆ",
              "ä¸‰æœˆ",
              "å››æœˆ",
              "äº”æœˆ",
              "å…­æœˆ",
              "ä¸ƒæœˆ",
              "å…«æœˆ",
              "ä¹æœˆ",
              "åæœˆ",
              "åä¸€æœˆ",
              "åäºŒæœˆ",
            ],
            dayOfWeekShort: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
            dayOfWeek: [
              "æ˜ŸæœŸæ—¥",
              "æ˜ŸæœŸä¸€",
              "æ˜ŸæœŸäºŒ",
              "æ˜ŸæœŸä¸‰",
              "æ˜ŸæœŸå››",
              "æ˜ŸæœŸäº”",
              "æ˜ŸæœŸå…­",
            ],
          },
          he: {
            months: [
              "×™× ×•××¨",
              "×¤×‘×¨×•××¨",
              "×ž×¨×¥",
              "××¤×¨×™×œ",
              "×ž××™",
              "×™×•× ×™",
              "×™×•×œ×™",
              "××•×’×•×¡×˜",
              "×¡×¤×˜×ž×‘×¨",
              "××•×§×˜×•×‘×¨",
              "× ×•×‘×ž×‘×¨",
              "×“×¦×ž×‘×¨",
            ],
            dayOfWeekShort: ["×'", "×‘'", "×’'", "×“'", "×”'", "×•'", "×©×‘×ª"],
            dayOfWeek: [
              "×¨××©×•×Ÿ",
              "×©× ×™",
              "×©×œ×™×©×™",
              "×¨×‘×™×¢×™",
              "×—×ž×™×©×™",
              "×©×™×©×™",
              "×©×‘×ª",
              "×¨××©×•×Ÿ",
            ],
          },
          hy: {
            months: [
              "Õ€Õ¸Ö‚Õ¶Õ¾Õ¡Ö€",
              "Õ“Õ¥Õ¿Ö€Õ¾Õ¡Ö€",
              "Õ„Õ¡Ö€Õ¿",
              "Ô±ÕºÖ€Õ«Õ¬",
              "Õ„Õ¡ÕµÕ«Õ½",
              "Õ€Õ¸Ö‚Õ¶Õ«Õ½",
              "Õ€Õ¸Ö‚Õ¬Õ«Õ½",
              "Õ•Õ£Õ¸Õ½Õ¿Õ¸Õ½",
              "ÕÕ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€",
              "Õ€Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€",
              "Õ†Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€",
              "Ô´Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€",
            ],
            dayOfWeekShort: [
              "Ô¿Õ«",
              "ÔµÖ€Õ¯",
              "ÔµÖ€Ö„",
              "Õ‰Õ¸Ö€",
              "Õ€Õ¶Õ£",
              "ÕˆÖ‚Ö€Õ¢",
              "Õ‡Õ¢Õ©",
            ],
            dayOfWeek: [
              "Ô¿Õ«Ö€Õ¡Õ¯Õ«",
              "ÔµÖ€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«",
              "ÔµÖ€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«",
              "Õ‰Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«",
              "Õ€Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«",
              "ÕˆÖ‚Ö€Õ¢Õ¡Õ©",
              "Õ‡Õ¡Õ¢Õ¡Õ©",
            ],
          },
          kg: {
            months: [
              "Ò®Ñ‡Ñ‚Ò¯Ð½ Ð°Ð¹Ñ‹",
              "Ð‘Ð¸Ñ€Ð´Ð¸Ð½ Ð°Ð¹Ñ‹",
              "Ð–Ð°Ð»Ð³Ð°Ð½ ÐšÑƒÑ€Ð°Ð½",
              "Ð§Ñ‹Ð½ ÐšÑƒÑ€Ð°Ð½",
              "Ð‘ÑƒÐ³Ñƒ",
              "ÐšÑƒÐ»Ð¶Ð°",
              "Ð¢ÐµÐºÐµ",
              "Ð‘Ð°Ñˆ ÐžÐ¾Ð½Ð°",
              "ÐÑÐº ÐžÐ¾Ð½Ð°",
              "Ð¢Ð¾Ð³ÑƒÐ·Ð´ÑƒÐ½ Ð°Ð¹Ñ‹",
              "Ð–ÐµÑ‚Ð¸Ð½Ð¸Ð½ Ð°Ð¹Ñ‹",
              "Ð‘ÐµÑˆÑ‚Ð¸Ð½ Ð°Ð¹Ñ‹",
            ],
            dayOfWeekShort: [
              "Ð–ÐµÐº",
              "Ð”Ò¯Ð¹",
              "Ð¨ÐµÐ¹",
              "Ð¨Ð°Ñ€",
              "Ð‘ÐµÐ¹",
              "Ð–ÑƒÐ¼",
              "Ð˜ÑˆÐµ",
            ],
            dayOfWeek: [
              "Ð–ÐµÐºÑˆÐµÐ¼Ð±",
              "Ð”Ò¯Ð¹ÑˆÓ©Ð¼Ð±",
              "Ð¨ÐµÐ¹ÑˆÐµÐ¼Ð±",
              "Ð¨Ð°Ñ€ÑˆÐµÐ¼Ð±",
              "Ð‘ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸",
              "Ð–ÑƒÐ¼Ð°",
              "Ð˜ÑˆÐµÐ½Ð±",
            ],
          },
          rm: {
            months: [
              "Schaner",
              "Favrer",
              "Mars",
              "Avrigl",
              "Matg",
              "Zercladur",
              "Fanadur",
              "Avust",
              "Settember",
              "October",
              "November",
              "December",
            ],
            dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
            dayOfWeek: [
              "Dumengia",
              "Glindesdi",
              "Mardi",
              "Mesemna",
              "Gievgia",
              "Venderdi",
              "Sonda",
            ],
          },
          ka: {
            months: [
              "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜",
              "áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜",
              "áƒ›áƒáƒ áƒ¢áƒ˜",
              "áƒáƒžáƒ áƒ˜áƒšáƒ˜",
              "áƒ›áƒáƒ˜áƒ¡áƒ˜",
              "áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜",
              "áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜",
              "áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ",
              "áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜",
              "áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜",
              "áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜",
              "áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜",
            ],
            dayOfWeekShort: [
              "áƒ™áƒ•",
              "áƒáƒ áƒ¨",
              "áƒ¡áƒáƒ›áƒ¨",
              "áƒáƒ—áƒ®",
              "áƒ®áƒ£áƒ—",
              "áƒžáƒáƒ ",
              "áƒ¨áƒáƒ‘",
            ],
            dayOfWeek: [
              "áƒ™áƒ•áƒ˜áƒ áƒ",
              "áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜",
              "áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜",
              "áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜",
              "áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜",
              "áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜",
              "áƒ¨áƒáƒ‘áƒáƒ—áƒ˜",
            ],
          },
        },
        value: "",
        rtl: !1,
        format: "Y/m/d H:i",
        formatTime: "H:i",
        formatDate: "Y/m/d",
        startDate: !1,
        step: 60,
        monthChangeSpinner: !0,
        closeOnDateSelect: !1,
        closeOnTimeSelect: !0,
        closeOnWithoutClick: !0,
        closeOnInputClick: !0,
        timepicker: !0,
        datepicker: !0,
        weeks: !1,
        defaultTime: !1,
        defaultDate: !1,
        minDate: !1,
        maxDate: !1,
        minTime: !1,
        maxTime: !1,
        disabledMinTime: !1,
        disabledMaxTime: !1,
        allowTimes: [],
        opened: !1,
        initTime: !0,
        inline: !1,
        theme: "",
        onSelectDate: function () {},
        onSelectTime: function () {},
        onChangeMonth: function () {},
        onGetWeekOfYear: function () {},
        onChangeYear: function () {},
        onChangeDateTime: function () {},
        onShow: function () {},
        onClose: function () {},
        onGenerate: function () {},
        withoutCopyright: !0,
        inverseButton: !1,
        hours12: !1,
        next: "xdsoft_next",
        prev: "xdsoft_prev",
        dayOfWeekStart: 0,
        parentID: "body",
        timeHeightInTimePicker: 25,
        timepickerScrollbar: !0,
        todayButton: !0,
        prevButton: !0,
        nextButton: !0,
        defaultSelect: !0,
        scrollMonth: !0,
        scrollTime: !0,
        scrollInput: !0,
        lazyInit: !1,
        mask: !1,
        validateOnBlur: !0,
        allowBlank: !0,
        yearStart: 1950,
        yearEnd: 2050,
        monthStart: 0,
        monthEnd: 11,
        style: "",
        id: "",
        fixed: !1,
        roundTime: "round",
        className: "",
        weekends: [],
        highlightedDates: [],
        highlightedPeriods: [],
        allowDates: [],
        allowDateRe: null,
        disabledDates: [],
        disabledWeekDays: [],
        yearOffset: 0,
        beforeShowDay: null,
        enterLikeTab: !0,
        showApplyButton: !1,
      },
      r = null,
      n = "en",
      o = "en",
      i = { meridiem: ["AM", "PM"] },
      s = function () {
        var t = a.i18n[o],
          n = {
            days: t.dayOfWeek,
            daysShort: t.dayOfWeekShort,
            months: t.months,
            monthsShort: e.map(t.months, function (e) {
              return e.substring(0, 3);
            }),
          };
        r = new DateFormatter({ dateSettings: e.extend({}, i, n) });
      };
    (e.datetimepicker = {
      setLocale: function (e) {
        var t = a.i18n[e] ? e : n;
        o != t && ((o = t), s());
      },
      setDateFormatter: function (e) {
        r = e;
      },
      RFC_2822: "D, d M Y H:i:s O",
      ATOM: "Y-m-dTH:i:sP",
      ISO_8601: "Y-m-dTH:i:sO",
      RFC_822: "D, d M y H:i:s O",
      RFC_850: "l, d-M-y H:i:s T",
      RFC_1036: "D, d M y H:i:s O",
      RFC_1123: "D, d M Y H:i:s O",
      RSS: "D, d M Y H:i:s O",
      W3C: "Y-m-dTH:i:sP",
    }),
      s(),
      window.getComputedStyle ||
        (window.getComputedStyle = function (e) {
          return (
            (this.el = e),
            (this.getPropertyValue = function (t) {
              var a = /(\-([a-z]){1})/g;
              return (
                "float" === t && (t = "styleFloat"),
                a.test(t) &&
                  (t = t.replace(a, function (e, t, a) {
                    return a.toUpperCase();
                  })),
                e.currentStyle[t] || null
              );
            }),
            this
          );
        }),
      Array.prototype.indexOf ||
        (Array.prototype.indexOf = function (e, t) {
          var a, r;
          for (a = t || 0, r = this.length; r > a; a += 1)
            if (this[a] === e) return a;
          return -1;
        }),
      (Date.prototype.countDaysInMonth = function () {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
      }),
      (e.fn.xdsoftScroller = function (t) {
        return this.each(function () {
          var a,
            r,
            n,
            o,
            i,
            s = e(this),
            d = function (e) {
              var t,
                a = { x: 0, y: 0 };
              return (
                "touchstart" === e.type ||
                "touchmove" === e.type ||
                "touchend" === e.type ||
                "touchcancel" === e.type
                  ? ((t =
                      e.originalEvent.touches[0] ||
                      e.originalEvent.changedTouches[0]),
                    (a.x = t.clientX),
                    (a.y = t.clientY))
                  : ("mousedown" === e.type ||
                      "mouseup" === e.type ||
                      "mousemove" === e.type ||
                      "mouseover" === e.type ||
                      "mouseout" === e.type ||
                      "mouseenter" === e.type ||
                      "mouseleave" === e.type) &&
                    ((a.x = e.clientX), (a.y = e.clientY)),
                a
              );
            },
            u = 100,
            l = !1,
            f = 0,
            c = 0,
            m = 0,
            h = !1,
            g = 0,
            p = function () {};
          return "hide" === t
            ? void s.find(".xdsoft_scrollbar").hide()
            : (e(this).hasClass("xdsoft_scroller_box") ||
                ((a = s.children().eq(0)),
                (r = s[0].clientHeight),
                (n = a[0].offsetHeight),
                (o = e('<div class="xdsoft_scrollbar"></div>')),
                (i = e('<div class="xdsoft_scroller"></div>')),
                o.append(i),
                s.addClass("xdsoft_scroller_box").append(o),
                (p = function (e) {
                  var t = d(e).y - f + g;
                  0 > t && (t = 0),
                    t + i[0].offsetHeight > m && (t = m - i[0].offsetHeight),
                    s.trigger("scroll_element.xdsoft_scroller", [
                      u ? t / u : 0,
                    ]);
                }),
                i
                  .on(
                    "touchstart.xdsoft_scroller mousedown.xdsoft_scroller",
                    function (a) {
                      r || s.trigger("resize_scroll.xdsoft_scroller", [t]),
                        (f = d(a).y),
                        (g = parseInt(i.css("margin-top"), 10)),
                        (m = o[0].offsetHeight),
                        "mousedown" === a.type || "touchstart" === a.type
                          ? (document &&
                              e(document.body).addClass("xdsoft_noselect"),
                            e([document.body, window]).on(
                              "touchend mouseup.xdsoft_scroller",
                              function n() {
                                e([document.body, window])
                                  .off("touchend mouseup.xdsoft_scroller", n)
                                  .off("mousemove.xdsoft_scroller", p)
                                  .removeClass("xdsoft_noselect");
                              }
                            ),
                            e(document.body).on("mousemove.xdsoft_scroller", p))
                          : ((h = !0), a.stopPropagation(), a.preventDefault());
                    }
                  )
                  .on("touchmove", function (e) {
                    h && (e.preventDefault(), p(e));
                  })
                  .on("touchend touchcancel", function () {
                    (h = !1), (g = 0);
                  }),
                s
                  .on("scroll_element.xdsoft_scroller", function (e, t) {
                    r || s.trigger("resize_scroll.xdsoft_scroller", [t, !0]),
                      (t = t > 1 ? 1 : 0 > t || isNaN(t) ? 0 : t),
                      i.css("margin-top", u * t),
                      setTimeout(function () {
                        a.css(
                          "marginTop",
                          -parseInt((a[0].offsetHeight - r) * t, 10)
                        );
                      }, 10);
                  })
                  .on("resize_scroll.xdsoft_scroller", function (e, t, d) {
                    var l, f;
                    (r = s[0].clientHeight),
                      (n = a[0].offsetHeight),
                      (l = r / n),
                      (f = l * o[0].offsetHeight),
                      l > 1
                        ? i.hide()
                        : (i.show(),
                          i.css("height", parseInt(f > 10 ? f : 10, 10)),
                          (u = o[0].offsetHeight - i[0].offsetHeight),
                          d !== !0 &&
                            s.trigger("scroll_element.xdsoft_scroller", [
                              t ||
                                Math.abs(parseInt(a.css("marginTop"), 10)) /
                                  (n - r),
                            ]));
                  }),
                s.on("mousewheel", function (e) {
                  var t = Math.abs(parseInt(a.css("marginTop"), 10));
                  return (
                    (t -= 20 * e.deltaY),
                    0 > t && (t = 0),
                    s.trigger("scroll_element.xdsoft_scroller", [t / (n - r)]),
                    e.stopPropagation(),
                    !1
                  );
                }),
                s.on("touchstart", function (e) {
                  (l = d(e)), (c = Math.abs(parseInt(a.css("marginTop"), 10)));
                }),
                s.on("touchmove", function (e) {
                  if (l) {
                    e.preventDefault();
                    var t = d(e);
                    s.trigger("scroll_element.xdsoft_scroller", [
                      (c - (t.y - l.y)) / (n - r),
                    ]);
                  }
                }),
                s.on("touchend touchcancel", function () {
                  (l = !1), (c = 0);
                })),
              void s.trigger("resize_scroll.xdsoft_scroller", [t]));
        });
      }),
      (e.fn.datetimepicker = function (n, i) {
        var s,
          d,
          u = this,
          l = 48,
          f = 57,
          c = 96,
          m = 105,
          h = 17,
          g = 46,
          p = 13,
          y = 27,
          v = 8,
          b = 37,
          D = 38,
          k = 39,
          x = 40,
          T = 9,
          S = 116,
          w = 65,
          O = 67,
          M = 86,
          _ = 90,
          W = 89,
          F = !1,
          C =
            e.isPlainObject(n) || !n
              ? e.extend(!0, {}, a, n)
              : e.extend(!0, {}, a),
          P = 0,
          A = function (e) {
            e.on(
              "open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",
              function t() {
                e.is(":disabled") ||
                  e.data("xdsoft_datetimepicker") ||
                  (clearTimeout(P),
                  (P = setTimeout(function () {
                    e.data("xdsoft_datetimepicker") || s(e),
                      e
                        .off(
                          "open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",
                          t
                        )
                        .trigger("open.xdsoft");
                  }, 100)));
              }
            );
          };
        return (
          (s = function (a) {
            function i() {
              var e,
                t = !1;
              return (
                C.startDate
                  ? (t = j.strToDate(C.startDate))
                  : ((t = C.value || (a && a.val && a.val() ? a.val() : "")),
                    t
                      ? (t = j.strToDateTime(t))
                      : C.defaultDate &&
                        ((t = j.strToDateTime(C.defaultDate)),
                        C.defaultTime &&
                          ((e = j.strtotime(C.defaultTime)),
                          t.setHours(e.getHours()),
                          t.setMinutes(e.getMinutes())))),
                t && j.isValidDate(t) ? J.data("changed", !0) : (t = ""),
                t || 0
              );
            }
            function s(t) {
              var r = function (e, t) {
                  var a = e
                    .replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1")
                    .replace(/_/g, "{digit+}")
                    .replace(/([0-9]{1})/g, "{digit$1}")
                    .replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}")
                    .replace(/\{digit[\+]\}/g, "[0-9_]{1}");
                  return new RegExp(a).test(t);
                },
                n = function (e) {
                  try {
                    if (document.selection && document.selection.createRange) {
                      var t = document.selection.createRange();
                      return t.getBookmark().charCodeAt(2) - 2;
                    }
                    if (e.setSelectionRange) return e.selectionStart;
                  } catch (a) {
                    return 0;
                  }
                },
                o = function (e, t) {
                  if (
                    ((e =
                      "string" == typeof e || e instanceof String
                        ? document.getElementById(e)
                        : e),
                    !e)
                  )
                    return !1;
                  if (e.createTextRange) {
                    var a = e.createTextRange();
                    return (
                      a.collapse(!0),
                      a.moveEnd("character", t),
                      a.moveStart("character", t),
                      a.select(),
                      !0
                    );
                  }
                  return e.setSelectionRange
                    ? (e.setSelectionRange(t, t), !0)
                    : !1;
                };
              t.mask && a.off("keydown.xdsoft"),
                t.mask === !0 &&
                  (t.mask =
                    "undefined" != typeof moment
                      ? t.format
                          .replace(/Y{4}/g, "9999")
                          .replace(/Y{2}/g, "99")
                          .replace(/M{2}/g, "19")
                          .replace(/D{2}/g, "39")
                          .replace(/H{2}/g, "29")
                          .replace(/m{2}/g, "59")
                          .replace(/s{2}/g, "59")
                      : t.format
                          .replace(/Y/g, "9999")
                          .replace(/F/g, "9999")
                          .replace(/m/g, "19")
                          .replace(/d/g, "39")
                          .replace(/H/g, "29")
                          .replace(/i/g, "59")
                          .replace(/s/g, "59")),
                "string" === e.type(t.mask) &&
                  (r(t.mask, a.val()) ||
                    (a.val(t.mask.replace(/[0-9]/g, "_")), o(a[0], 0)),
                  a.on("keydown.xdsoft", function (i) {
                    var s,
                      d,
                      u = this.value,
                      C = i.which;
                    if (
                      (C >= l && f >= C) ||
                      (C >= c && m >= C) ||
                      C === v ||
                      C === g
                    ) {
                      for (
                        s = n(this),
                          d =
                            C !== v && C !== g
                              ? String.fromCharCode(
                                  C >= c && m >= C ? C - l : C
                                )
                              : "_",
                          (C !== v && C !== g) || !s || ((s -= 1), (d = "_"));
                        /[^0-9_]/.test(t.mask.substr(s, 1)) &&
                        s < t.mask.length &&
                        s > 0;

                      )
                        s += C === v || C === g ? -1 : 1;
                      if (
                        ((u = u.substr(0, s) + d + u.substr(s + 1)),
                        "" === e.trim(u))
                      )
                        u = t.mask.replace(/[0-9]/g, "_");
                      else if (s === t.mask.length)
                        return i.preventDefault(), !1;
                      for (
                        s += C === v || C === g ? 0 : 1;
                        /[^0-9_]/.test(t.mask.substr(s, 1)) &&
                        s < t.mask.length &&
                        s > 0;

                      )
                        s += C === v || C === g ? -1 : 1;
                      r(t.mask, u)
                        ? ((this.value = u), o(this, s))
                        : "" === e.trim(u)
                        ? (this.value = t.mask.replace(/[0-9]/g, "_"))
                        : a.trigger("error_input.xdsoft");
                    } else if ((-1 !== [w, O, M, _, W].indexOf(C) && F) || -1 !== [y, D, x, b, k, S, h, T, p].indexOf(C)) return !0;
                    return i.preventDefault(), !1;
                  }));
            }
            var d,
              u,
              P,
              A,
              Y,
              j,
              H,
              J = e(
                '<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'
              ),
              z = e(
                '<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'
              ),
              I = e('<div class="xdsoft_datepicker active"></div>'),
              N = e(
                '<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'
              ),
              L = e('<div class="xdsoft_calendar"></div>'),
              E = e(
                '<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'
              ),
              R = E.find(".xdsoft_time_box").eq(0),
              B = e('<div class="xdsoft_time_variant"></div>'),
              V = e(
                '<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'
              ),
              G = e(
                '<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'
              ),
              U = e(
                '<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'
              ),
              q = !1,
              X = 0;
            C.id && J.attr("id", C.id),
              C.style && J.attr("style", C.style),
              C.weeks && J.addClass("xdsoft_showweeks"),
              C.rtl && J.addClass("xdsoft_rtl"),
              J.addClass("xdsoft_" + C.theme),
              J.addClass(C.className),
              N.find(".xdsoft_month span").after(G),
              N.find(".xdsoft_year span").after(U),
              N.find(".xdsoft_month,.xdsoft_year").on(
                "touchstart mousedown.xdsoft",
                function (t) {
                  var a,
                    r,
                    n = e(this).find(".xdsoft_select").eq(0),
                    o = 0,
                    i = 0,
                    s = n.is(":visible");
                  for (
                    N.find(".xdsoft_select").hide(),
                      j.currentTime &&
                        (o = j.currentTime[
                          e(this).hasClass("xdsoft_month")
                            ? "getMonth"
                            : "getFullYear"
                        ]()),
                      n[s ? "hide" : "show"](),
                      a = n.find("div.xdsoft_option"),
                      r = 0;
                    r < a.length && a.eq(r).data("value") !== o;
                    r += 1
                  )
                    i += a[0].offsetHeight;
                  return (
                    n.xdsoftScroller(
                      i / (n.children()[0].offsetHeight - n[0].clientHeight)
                    ),
                    t.stopPropagation(),
                    !1
                  );
                }
              ),
              N.find(".xdsoft_select")
                .xdsoftScroller()
                .on("touchstart mousedown.xdsoft", function (e) {
                  e.stopPropagation(), e.preventDefault();
                })
                .on(
                  "touchstart mousedown.xdsoft",
                  ".xdsoft_option",
                  function () {
                    (void 0 === j.currentTime || null === j.currentTime) &&
                      (j.currentTime = j.now());
                    var t = j.currentTime.getFullYear();
                    j &&
                      j.currentTime &&
                      j.currentTime[
                        e(this).parent().parent().hasClass("xdsoft_monthselect")
                          ? "setMonth"
                          : "setFullYear"
                      ](e(this).data("value")),
                      e(this).parent().parent().hide(),
                      J.trigger("xchange.xdsoft"),
                      C.onChangeMonth &&
                        e.isFunction(C.onChangeMonth) &&
                        C.onChangeMonth.call(J, j.currentTime, J.data("input")),
                      t !== j.currentTime.getFullYear() &&
                        e.isFunction(C.onChangeYear) &&
                        C.onChangeYear.call(J, j.currentTime, J.data("input"));
                  }
                ),
              (J.getValue = function () {
                return j.getCurrentTime();
              }),
              (J.setOptions = function (n) {
                var o = {};
                (C = e.extend(!0, {}, C, n)),
                  n.allowTimes &&
                    e.isArray(n.allowTimes) &&
                    n.allowTimes.length &&
                    (C.allowTimes = e.extend(!0, [], n.allowTimes)),
                  n.weekends &&
                    e.isArray(n.weekends) &&
                    n.weekends.length &&
                    (C.weekends = e.extend(!0, [], n.weekends)),
                  n.allowDates &&
                    e.isArray(n.allowDates) &&
                    n.allowDates.length &&
                    (C.allowDates = e.extend(!0, [], n.allowDates)),
                  n.allowDateRe &&
                    "[object String]" ===
                      Object.prototype.toString.call(n.allowDateRe) &&
                    (C.allowDateRe = new RegExp(n.allowDateRe)),
                  n.highlightedDates &&
                    e.isArray(n.highlightedDates) &&
                    n.highlightedDates.length &&
                    (e.each(n.highlightedDates, function (a, n) {
                      var i,
                        s = e.map(n.split(","), e.trim),
                        d = new t(r.parseDate(s[0], C.formatDate), s[1], s[2]),
                        u = r.formatDate(d.date, C.formatDate);
                      void 0 !== o[u]
                        ? ((i = o[u].desc),
                          i &&
                            i.length &&
                            d.desc &&
                            d.desc.length &&
                            (o[u].desc = i + "\n" + d.desc))
                        : (o[u] = d);
                    }),
                    (C.highlightedDates = e.extend(!0, [], o))),
                  n.highlightedPeriods &&
                    e.isArray(n.highlightedPeriods) &&
                    n.highlightedPeriods.length &&
                    ((o = e.extend(!0, [], C.highlightedDates)),
                    e.each(n.highlightedPeriods, function (a, n) {
                      var i, s, d, u, l, f, c;
                      if (e.isArray(n))
                        (i = n[0]), (s = n[1]), (d = n[2]), (c = n[3]);
                      else {
                        var m = e.map(n.split(","), e.trim);
                        (i = r.parseDate(m[0], C.formatDate)),
                          (s = r.parseDate(m[1], C.formatDate)),
                          (d = m[2]),
                          (c = m[3]);
                      }
                      for (; s >= i; )
                        (u = new t(i, d, c)),
                          (l = r.formatDate(i, C.formatDate)),
                          i.setDate(i.getDate() + 1),
                          void 0 !== o[l]
                            ? ((f = o[l].desc),
                              f &&
                                f.length &&
                                u.desc &&
                                u.desc.length &&
                                (o[l].desc = f + "\n" + u.desc))
                            : (o[l] = u);
                    }),
                    (C.highlightedDates = e.extend(!0, [], o))),
                  n.disabledDates &&
                    e.isArray(n.disabledDates) &&
                    n.disabledDates.length &&
                    (C.disabledDates = e.extend(!0, [], n.disabledDates)),
                  n.disabledWeekDays &&
                    e.isArray(n.disabledWeekDays) &&
                    n.disabledWeekDays.length &&
                    (C.disabledWeekDays = e.extend(!0, [], n.disabledWeekDays)),
                  (!C.open && !C.opened) ||
                    C.inline ||
                    a.trigger("open.xdsoft"),
                  C.inline &&
                    ((q = !0), J.addClass("xdsoft_inline"), a.after(J).hide()),
                  C.inverseButton &&
                    ((C.next = "xdsoft_prev"), (C.prev = "xdsoft_next")),
                  C.datepicker ? I.addClass("active") : I.removeClass("active"),
                  C.timepicker ? E.addClass("active") : E.removeClass("active"),
                  C.value &&
                    (j.setCurrentTime(C.value), a && a.val && a.val(j.str)),
                  (C.dayOfWeekStart = isNaN(C.dayOfWeekStart)
                    ? 0
                    : parseInt(C.dayOfWeekStart, 10) % 7),
                  C.timepickerScrollbar || R.xdsoftScroller("hide"),
                  C.minDate &&
                    /^[\+\-](.*)$/.test(C.minDate) &&
                    (C.minDate = r.formatDate(
                      j.strToDateTime(C.minDate),
                      C.formatDate
                    )),
                  C.maxDate &&
                    /^[\+\-](.*)$/.test(C.maxDate) &&
                    (C.maxDate = r.formatDate(
                      j.strToDateTime(C.maxDate),
                      C.formatDate
                    )),
                  V.toggle(C.showApplyButton),
                  N.find(".xdsoft_today_button").css(
                    "visibility",
                    C.todayButton ? "visible" : "hidden"
                  ),
                  N.find("." + C.prev).css(
                    "visibility",
                    C.prevButton ? "visible" : "hidden"
                  ),
                  N.find("." + C.next).css(
                    "visibility",
                    C.nextButton ? "visible" : "hidden"
                  ),
                  s(C),
                  C.validateOnBlur &&
                    a.off("blur.xdsoft").on("blur.xdsoft", function () {
                      if (
                        C.allowBlank &&
                        (!e.trim(e(this).val()).length ||
                          ("string" == typeof C.mask &&
                            e.trim(e(this).val()) ===
                              C.mask.replace(/[0-9]/g, "_")))
                      )
                        e(this).val(null), J.data("xdsoft_datetime").empty();
                      else {
                        var t = r.parseDate(e(this).val(), C.format);
                        if (t) e(this).val(r.formatDate(t, C.format));
                        else {
                          var a = +[e(this).val()[0], e(this).val()[1]].join(
                              ""
                            ),
                            n = +[e(this).val()[2], e(this).val()[3]].join("");
                          e(this).val(
                            !C.datepicker &&
                              C.timepicker &&
                              a >= 0 &&
                              24 > a &&
                              n >= 0 &&
                              60 > n
                              ? [a, n]
                                  .map(function (e) {
                                    return e > 9 ? e : "0" + e;
                                  })
                                  .join(":")
                              : r.formatDate(j.now(), C.format)
                          );
                        }
                        J.data("xdsoft_datetime").setCurrentTime(e(this).val());
                      }
                      J.trigger("changedatetime.xdsoft"),
                        J.trigger("close.xdsoft");
                    }),
                  (C.dayOfWeekStartPrev =
                    0 === C.dayOfWeekStart ? 6 : C.dayOfWeekStart - 1),
                  J.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft");
              }),
              J.data("options", C).on("touchstart mousedown.xdsoft", function (
                e
              ) {
                return (
                  e.stopPropagation(),
                  e.preventDefault(),
                  U.hide(),
                  G.hide(),
                  !1
                );
              }),
              R.append(B),
              R.xdsoftScroller(),
              J.on("afterOpen.xdsoft", function () {
                R.xdsoftScroller();
              }),
              J.append(I).append(E),
              C.withoutCopyright !== !0 && J.append(z),
              I.append(N).append(L).append(V),
              e(C.parentID).append(J),
              (d = function () {
                var t = this;
                (t.now = function (e) {
                  var a,
                    r,
                    n = new Date();
                  return (
                    !e &&
                      C.defaultDate &&
                      ((a = t.strToDateTime(C.defaultDate)),
                      n.setFullYear(a.getFullYear()),
                      n.setMonth(a.getMonth()),
                      n.setDate(a.getDate())),
                    C.yearOffset &&
                      n.setFullYear(n.getFullYear() + C.yearOffset),
                    !e &&
                      C.defaultTime &&
                      ((r = t.strtotime(C.defaultTime)),
                      n.setHours(r.getHours()),
                      n.setMinutes(r.getMinutes())),
                    n
                  );
                }),
                  (t.isValidDate = function (e) {
                    return "[object Date]" !== Object.prototype.toString.call(e)
                      ? !1
                      : !isNaN(e.getTime());
                  }),
                  (t.setCurrentTime = function (e, a) {
                    (t.currentTime =
                      "string" == typeof e
                        ? t.strToDateTime(e)
                        : t.isValidDate(e)
                        ? e
                        : e || a || !C.allowBlank
                        ? t.now()
                        : null),
                      J.trigger("xchange.xdsoft");
                  }),
                  (t.empty = function () {
                    t.currentTime = null;
                  }),
                  (t.getCurrentTime = function () {
                    return t.currentTime;
                  }),
                  (t.nextMonth = function () {
                    (void 0 === t.currentTime || null === t.currentTime) &&
                      (t.currentTime = t.now());
                    var a,
                      r = t.currentTime.getMonth() + 1;
                    return (
                      12 === r &&
                        (t.currentTime.setFullYear(
                          t.currentTime.getFullYear() + 1
                        ),
                        (r = 0)),
                      (a = t.currentTime.getFullYear()),
                      t.currentTime.setDate(
                        Math.min(
                          new Date(
                            t.currentTime.getFullYear(),
                            r + 1,
                            0
                          ).getDate(),
                          t.currentTime.getDate()
                        )
                      ),
                      t.currentTime.setMonth(r),
                      C.onChangeMonth &&
                        e.isFunction(C.onChangeMonth) &&
                        C.onChangeMonth.call(J, j.currentTime, J.data("input")),
                      a !== t.currentTime.getFullYear() &&
                        e.isFunction(C.onChangeYear) &&
                        C.onChangeYear.call(J, j.currentTime, J.data("input")),
                      J.trigger("xchange.xdsoft"),
                      r
                    );
                  }),
                  (t.prevMonth = function () {
                    (void 0 === t.currentTime || null === t.currentTime) &&
                      (t.currentTime = t.now());
                    var a = t.currentTime.getMonth() - 1;
                    return (
                      -1 === a &&
                        (t.currentTime.setFullYear(
                          t.currentTime.getFullYear() - 1
                        ),
                        (a = 11)),
                      t.currentTime.setDate(
                        Math.min(
                          new Date(
                            t.currentTime.getFullYear(),
                            a + 1,
                            0
                          ).getDate(),
                          t.currentTime.getDate()
                        )
                      ),
                      t.currentTime.setMonth(a),
                      C.onChangeMonth &&
                        e.isFunction(C.onChangeMonth) &&
                        C.onChangeMonth.call(J, j.currentTime, J.data("input")),
                      J.trigger("xchange.xdsoft"),
                      a
                    );
                  }),
                  (t.getWeekOfYear = function (t) {
                    if (C.onGetWeekOfYear && e.isFunction(C.onGetWeekOfYear)) {
                      var a = C.onGetWeekOfYear.call(J, t);
                      if ("undefined" != typeof a) return a;
                    }
                    var r = new Date(t.getFullYear(), 0, 1);
                    return (
                      4 != r.getDay() &&
                        r.setMonth(0, 1 + ((4 - r.getDay() + 7) % 7)),
                      Math.ceil(((t - r) / 864e5 + r.getDay() + 1) / 7)
                    );
                  }),
                  (t.strToDateTime = function (e) {
                    var a,
                      n,
                      o = [];
                    return e && e instanceof Date && t.isValidDate(e)
                      ? e
                      : ((o = /^(\+|\-)(.*)$/.exec(e)),
                        o && (o[2] = r.parseDate(o[2], C.formatDate)),
                        o && o[2]
                          ? ((a =
                              o[2].getTime() - 6e4 * o[2].getTimezoneOffset()),
                            (n = new Date(
                              t.now(!0).getTime() + parseInt(o[1] + "1", 10) * a
                            )))
                          : (n = e ? r.parseDate(e, C.format) : t.now()),
                        t.isValidDate(n) || (n = t.now()),
                        n);
                  }),
                  (t.strToDate = function (e) {
                    if (e && e instanceof Date && t.isValidDate(e)) return e;
                    var a = e ? r.parseDate(e, C.formatDate) : t.now(!0);
                    return t.isValidDate(a) || (a = t.now(!0)), a;
                  }),
                  (t.strtotime = function (e) {
                    if (e && e instanceof Date && t.isValidDate(e)) return e;
                    var a = e ? r.parseDate(e, C.formatTime) : t.now(!0);
                    return t.isValidDate(a) || (a = t.now(!0)), a;
                  }),
                  (t.str = function () {
                    return r.formatDate(t.currentTime, C.format);
                  }),
                  (t.currentTime = this.now());
              }),
              (j = new d()),
              V.on("touchend click", function (e) {
                e.preventDefault(),
                  J.data("changed", !0),
                  j.setCurrentTime(i()),
                  a.val(j.str()),
                  J.trigger("close.xdsoft");
              }),
              N.find(".xdsoft_today_button")
                .on("touchend mousedown.xdsoft", function () {
                  J.data("changed", !0),
                    j.setCurrentTime(0, !0),
                    J.trigger("afterOpen.xdsoft");
                })
                .on("dblclick.xdsoft", function () {
                  var e,
                    t,
                    r = j.getCurrentTime();
                  (r = new Date(r.getFullYear(), r.getMonth(), r.getDate())),
                    (e = j.strToDate(C.minDate)),
                    (e = new Date(e.getFullYear(), e.getMonth(), e.getDate())),
                    e > r ||
                      ((t = j.strToDate(C.maxDate)),
                      (t = new Date(
                        t.getFullYear(),
                        t.getMonth(),
                        t.getDate()
                      )),
                      r > t ||
                        (a.val(j.str()),
                        a.trigger("change"),
                        J.trigger("close.xdsoft")));
                }),
              N.find(".xdsoft_prev,.xdsoft_next").on(
                "touchend mousedown.xdsoft",
                function () {
                  var t = e(this),
                    a = 0,
                    r = !1;
                  !(function n(e) {
                    t.hasClass(C.next)
                      ? j.nextMonth()
                      : t.hasClass(C.prev) && j.prevMonth(),
                      C.monthChangeSpinner &&
                        (r || (a = setTimeout(n, e || 100)));
                  })(500),
                    e([document.body, window]).on(
                      "touchend mouseup.xdsoft",
                      function o() {
                        clearTimeout(a),
                          (r = !0),
                          e([document.body, window]).off(
                            "touchend mouseup.xdsoft",
                            o
                          );
                      }
                    );
                }
              ),
              E.find(".xdsoft_prev,.xdsoft_next").on(
                "touchend mousedown.xdsoft",
                function () {
                  var t = e(this),
                    a = 0,
                    r = !1,
                    n = 110;
                  !(function o(e) {
                    var i = R[0].clientHeight,
                      s = B[0].offsetHeight,
                      d = Math.abs(parseInt(B.css("marginTop"), 10));
                    t.hasClass(C.next) && s - i - C.timeHeightInTimePicker >= d
                      ? B.css(
                          "marginTop",
                          "-" + (d + C.timeHeightInTimePicker) + "px"
                        )
                      : t.hasClass(C.prev) &&
                        d - C.timeHeightInTimePicker >= 0 &&
                        B.css(
                          "marginTop",
                          "-" + (d - C.timeHeightInTimePicker) + "px"
                        ),
                      R.trigger("scroll_element.xdsoft_scroller", [
                        Math.abs(parseInt(B[0].style.marginTop, 10) / (s - i)),
                      ]),
                      (n = n > 10 ? 10 : n - 10),
                      r || (a = setTimeout(o, e || n));
                  })(500),
                    e([document.body, window]).on(
                      "touchend mouseup.xdsoft",
                      function i() {
                        clearTimeout(a),
                          (r = !0),
                          e([document.body, window]).off(
                            "touchend mouseup.xdsoft",
                            i
                          );
                      }
                    );
                }
              ),
              (u = 0),
              J.on("xchange.xdsoft", function (t) {
                clearTimeout(u),
                  (u = setTimeout(function () {
                    if (void 0 === j.currentTime || null === j.currentTime) {
                      if (C.allowBlank) return;
                      j.currentTime = j.now();
                    }
                    for (
                      var t,
                        i,
                        s,
                        d,
                        u,
                        l,
                        f,
                        c,
                        m,
                        h,
                        g = "",
                        p = new Date(
                          j.currentTime.getFullYear(),
                          j.currentTime.getMonth(),
                          1,
                          12,
                          0,
                          0
                        ),
                        y = 0,
                        v = j.now(),
                        b = !1,
                        D = !1,
                        k = [],
                        x = !0,
                        T = "",
                        S = "";
                      p.getDay() !== C.dayOfWeekStart;

                    )
                      p.setDate(p.getDate() - 1);
                    for (
                      g += "<table><thead><tr>",
                        C.weeks && (g += "<th></th>"),
                        t = 0;
                      7 > t;
                      t += 1
                    )
                      g +=
                        "<th>" +
                        C.i18n[o].dayOfWeekShort[(t + C.dayOfWeekStart) % 7] +
                        "</th>";
                    for (
                      g += "</tr></thead>",
                        g += "<tbody>",
                        C.maxDate !== !1 &&
                          ((b = j.strToDate(C.maxDate)),
                          (b = new Date(
                            b.getFullYear(),
                            b.getMonth(),
                            b.getDate(),
                            23,
                            59,
                            59,
                            999
                          ))),
                        C.minDate !== !1 &&
                          ((D = j.strToDate(C.minDate)),
                          (D = new Date(
                            D.getFullYear(),
                            D.getMonth(),
                            D.getDate()
                          )));
                      y < j.currentTime.countDaysInMonth() ||
                      p.getDay() !== C.dayOfWeekStart ||
                      j.currentTime.getMonth() === p.getMonth();

                    )
                      (k = []),
                        (y += 1),
                        (s = p.getDay()),
                        (d = p.getDate()),
                        (u = p.getFullYear()),
                        (l = p.getMonth()),
                        (f = j.getWeekOfYear(p)),
                        (h = ""),
                        k.push("xdsoft_date"),
                        (c =
                          C.beforeShowDay && e.isFunction(C.beforeShowDay.call)
                            ? C.beforeShowDay.call(J, p)
                            : null),
                        C.allowDateRe &&
                        "[object RegExp]" ===
                          Object.prototype.toString.call(C.allowDateRe)
                          ? C.allowDateRe.test(r.formatDate(p, C.formatDate)) ||
                            k.push("xdsoft_disabled")
                          : C.allowDates && C.allowDates.length > 0
                          ? -1 ===
                              C.allowDates.indexOf(
                                r.formatDate(p, C.formatDate)
                              ) && k.push("xdsoft_disabled")
                          : (b !== !1 && p > b) ||
                            (D !== !1 && D > p) ||
                            (c && c[0] === !1)
                          ? k.push("xdsoft_disabled")
                          : -1 !==
                            C.disabledDates.indexOf(
                              r.formatDate(p, C.formatDate)
                            )
                          ? k.push("xdsoft_disabled")
                          : -1 !== C.disabledWeekDays.indexOf(s)
                          ? k.push("xdsoft_disabled")
                          : a.is("[readonly]") && k.push("xdsoft_disabled"),
                        c && "" !== c[1] && k.push(c[1]),
                        j.currentTime.getMonth() !== l &&
                          k.push("xdsoft_other_month"),
                        (C.defaultSelect || J.data("changed")) &&
                          r.formatDate(j.currentTime, C.formatDate) ===
                            r.formatDate(p, C.formatDate) &&
                          k.push("xdsoft_current"),
                        r.formatDate(v, C.formatDate) ===
                          r.formatDate(p, C.formatDate) &&
                          k.push("xdsoft_today"),
                        (0 === p.getDay() ||
                          6 === p.getDay() ||
                          -1 !==
                            C.weekends.indexOf(
                              r.formatDate(p, C.formatDate)
                            )) &&
                          k.push("xdsoft_weekend"),
                        void 0 !==
                          C.highlightedDates[r.formatDate(p, C.formatDate)] &&
                          ((i =
                            C.highlightedDates[r.formatDate(p, C.formatDate)]),
                          k.push(
                            void 0 === i.style
                              ? "xdsoft_highlighted_default"
                              : i.style
                          ),
                          (h = void 0 === i.desc ? "" : i.desc)),
                        C.beforeShowDay &&
                          e.isFunction(C.beforeShowDay) &&
                          k.push(C.beforeShowDay(p)),
                        x &&
                          ((g += "<tr>"),
                          (x = !1),
                          C.weeks && (g += "<th>" + f + "</th>")),
                        (g +=
                          '<td data-date="' +
                          d +
                          '" data-month="' +
                          l +
                          '" data-year="' +
                          u +
                          '" class="xdsoft_date xdsoft_day_of_week' +
                          p.getDay() +
                          " " +
                          k.join(" ") +
                          '" title="' +
                          h +
                          '"><div>' +
                          d +
                          "</div></td>"),
                        p.getDay() === C.dayOfWeekStartPrev &&
                          ((g += "</tr>"), (x = !0)),
                        p.setDate(d + 1);
                    if (
                      ((g += "</tbody></table>"),
                      L.html(g),
                      N.find(".xdsoft_label span")
                        .eq(0)
                        .text(C.i18n[o].months[j.currentTime.getMonth()]),
                      N.find(".xdsoft_label span")
                        .eq(1)
                        .text(j.currentTime.getFullYear()),
                      (T = ""),
                      (S = ""),
                      (l = ""),
                      (m = function (t, n) {
                        var o,
                          i,
                          s = j.now(),
                          d =
                            C.allowTimes &&
                            e.isArray(C.allowTimes) &&
                            C.allowTimes.length;
                        s.setHours(t),
                          (t = parseInt(s.getHours(), 10)),
                          s.setMinutes(n),
                          (n = parseInt(s.getMinutes(), 10)),
                          (o = new Date(j.currentTime)),
                          o.setHours(t),
                          o.setMinutes(n),
                          (k = []),
                          (C.minDateTime !== !1 && C.minDateTime > o) ||
                          (C.maxTime !== !1 &&
                            j.strtotime(C.maxTime).getTime() < s.getTime()) ||
                          (C.minTime !== !1 &&
                            j.strtotime(C.minTime).getTime() > s.getTime())
                            ? k.push("xdsoft_disabled")
                            : (C.minDateTime !== !1 && C.minDateTime > o) ||
                              (C.disabledMinTime !== !1 &&
                                s.getTime() >
                                  j.strtotime(C.disabledMinTime).getTime() &&
                                C.disabledMaxTime !== !1 &&
                                s.getTime() <
                                  j.strtotime(C.disabledMaxTime).getTime())
                            ? k.push("xdsoft_disabled")
                            : a.is("[readonly]") && k.push("xdsoft_disabled"),
                          (i = new Date(j.currentTime)),
                          i.setHours(parseInt(j.currentTime.getHours(), 10)),
                          d ||
                            i.setMinutes(
                              Math[C.roundTime](
                                j.currentTime.getMinutes() / C.step
                              ) * C.step
                            ),
                          (C.initTime ||
                            C.defaultSelect ||
                            J.data("changed")) &&
                            i.getHours() === parseInt(t, 10) &&
                            ((!d && C.step > 59) ||
                              i.getMinutes() === parseInt(n, 10)) &&
                            (C.defaultSelect || J.data("changed")
                              ? k.push("xdsoft_current")
                              : C.initTime && k.push("xdsoft_init_time")),
                          parseInt(v.getHours(), 10) === parseInt(t, 10) &&
                            parseInt(v.getMinutes(), 10) === parseInt(n, 10) &&
                            k.push("xdsoft_today"),
                          (T +=
                            '<div class="xdsoft_time ' +
                            k.join(" ") +
                            '" data-hour="' +
                            t +
                            '" data-minute="' +
                            n +
                            '">' +
                            r.formatDate(s, C.formatTime) +
                            "</div>");
                      }),
                      C.allowTimes &&
                        e.isArray(C.allowTimes) &&
                        C.allowTimes.length)
                    )
                      for (y = 0; y < C.allowTimes.length; y += 1)
                        (S = j.strtotime(C.allowTimes[y]).getHours()),
                          (l = j.strtotime(C.allowTimes[y]).getMinutes()),
                          m(S, l);
                    else
                      for (y = 0, t = 0; y < (C.hours12 ? 12 : 24); y += 1)
                        for (t = 0; 60 > t; t += C.step)
                          (S = (10 > y ? "0" : "") + y),
                            (l = (10 > t ? "0" : "") + t),
                            m(S, l);
                    for (
                      B.html(T),
                        n = "",
                        y = 0,
                        y = parseInt(C.yearStart, 10) + C.yearOffset;
                      y <= parseInt(C.yearEnd, 10) + C.yearOffset;
                      y += 1
                    )
                      n +=
                        '<div class="xdsoft_option ' +
                        (j.currentTime.getFullYear() === y
                          ? "xdsoft_current"
                          : "") +
                        '" data-value="' +
                        y +
                        '">' +
                        y +
                        "</div>";
                    for (
                      U.children().eq(0).html(n),
                        y = parseInt(C.monthStart, 10),
                        n = "";
                      y <= parseInt(C.monthEnd, 10);
                      y += 1
                    )
                      n +=
                        '<div class="xdsoft_option ' +
                        (j.currentTime.getMonth() === y
                          ? "xdsoft_current"
                          : "") +
                        '" data-value="' +
                        y +
                        '">' +
                        C.i18n[o].months[y] +
                        "</div>";
                    G.children().eq(0).html(n), e(J).trigger("generate.xdsoft");
                  }, 10)),
                  t.stopPropagation();
              }).on("afterOpen.xdsoft", function () {
                if (C.timepicker) {
                  var e, t, a, r;
                  B.find(".xdsoft_current").length
                    ? (e = ".xdsoft_current")
                    : B.find(".xdsoft_init_time").length &&
                      (e = ".xdsoft_init_time"),
                    e
                      ? ((t = R[0].clientHeight),
                        (a = B[0].offsetHeight),
                        (r = B.find(e).index() * C.timeHeightInTimePicker + 1),
                        r > a - t && (r = a - t),
                        R.trigger("scroll_element.xdsoft_scroller", [
                          parseInt(r, 10) / (a - t),
                        ]))
                      : R.trigger("scroll_element.xdsoft_scroller", [0]);
                }
              }),
              (P = 0),
              L.on("touchend click.xdsoft", "td", function (t) {
                t.stopPropagation(), (P += 1);
                var r = e(this),
                  n = j.currentTime;
                return (
                  (void 0 === n || null === n) &&
                    ((j.currentTime = j.now()), (n = j.currentTime)),
                  r.hasClass("xdsoft_disabled")
                    ? !1
                    : (n.setDate(1),
                      n.setFullYear(r.data("year")),
                      n.setMonth(r.data("month")),
                      n.setDate(r.data("date")),
                      J.trigger("select.xdsoft", [n]),
                      a.val(j.str()),
                      C.onSelectDate &&
                        e.isFunction(C.onSelectDate) &&
                        C.onSelectDate.call(
                          J,
                          j.currentTime,
                          J.data("input"),
                          t
                        ),
                      J.data("changed", !0),
                      J.trigger("xchange.xdsoft"),
                      J.trigger("changedatetime.xdsoft"),
                      (P > 1 ||
                        C.closeOnDateSelect === !0 ||
                        (C.closeOnDateSelect === !1 && !C.timepicker)) &&
                        !C.inline &&
                        J.trigger("close.xdsoft"),
                      void setTimeout(function () {
                        P = 0;
                      }, 200))
                );
              }),
              B.on("touchend click.xdsoft", "div", function (t) {
                t.stopPropagation();
                var a = e(this),
                  r = j.currentTime;
                return (
                  (void 0 === r || null === r) &&
                    ((j.currentTime = j.now()), (r = j.currentTime)),
                  a.hasClass("xdsoft_disabled")
                    ? !1
                    : (r.setHours(a.data("hour")),
                      r.setMinutes(a.data("minute")),
                      J.trigger("select.xdsoft", [r]),
                      J.data("input").val(j.str()),
                      C.onSelectTime &&
                        e.isFunction(C.onSelectTime) &&
                        C.onSelectTime.call(
                          J,
                          j.currentTime,
                          J.data("input"),
                          t
                        ),
                      J.data("changed", !0),
                      J.trigger("xchange.xdsoft"),
                      J.trigger("changedatetime.xdsoft"),
                      void (
                        C.inline !== !0 &&
                        C.closeOnTimeSelect === !0 &&
                        J.trigger("close.xdsoft")
                      ))
                );
              }),
              I.on("mousewheel.xdsoft", function (e) {
                return C.scrollMonth
                  ? (e.deltaY < 0 ? j.nextMonth() : j.prevMonth(), !1)
                  : !0;
              }),
              a.on("mousewheel.xdsoft", function (e) {
                return C.scrollInput
                  ? !C.datepicker && C.timepicker
                    ? ((A = B.find(".xdsoft_current").length
                        ? B.find(".xdsoft_current").eq(0).index()
                        : 0),
                      A + e.deltaY >= 0 &&
                        A + e.deltaY < B.children().length &&
                        (A += e.deltaY),
                      B.children().eq(A).length &&
                        B.children().eq(A).trigger("mousedown"),
                      !1)
                    : C.datepicker && !C.timepicker
                    ? (I.trigger(e, [e.deltaY, e.deltaX, e.deltaY]),
                      a.val && a.val(j.str()),
                      J.trigger("changedatetime.xdsoft"),
                      !1)
                    : void 0
                  : !0;
              }),
              J.on("changedatetime.xdsoft", function (t) {
                if (C.onChangeDateTime && e.isFunction(C.onChangeDateTime)) {
                  var a = J.data("input");
                  C.onChangeDateTime.call(J, j.currentTime, a, t),
                    delete C.value,
                    a.trigger("change");
                }
              })
                .on("generate.xdsoft", function () {
                  C.onGenerate &&
                    e.isFunction(C.onGenerate) &&
                    C.onGenerate.call(J, j.currentTime, J.data("input")),
                    q && (J.trigger("afterOpen.xdsoft"), (q = !1));
                })
                .on("click.xdsoft", function (e) {
                  e.stopPropagation();
                }),
              (A = 0),
              (H = function (e, t) {
                do if (((e = e.parentNode), t(e) === !1)) break;
                while ("HTML" !== e.nodeName);
              }),
              (Y = function () {
                var t, a, r, n, o, i, s, d, u, l, f, c, m;
                if (
                  ((d = J.data("input")),
                  (t = d.offset()),
                  (a = d[0]),
                  (l = "top"),
                  (r = t.top + a.offsetHeight - 1),
                  (n = t.left),
                  (o = "absolute"),
                  (u = e(window).width()),
                  (c = e(window).height()),
                  (m = e(window).scrollTop()),
                  document.documentElement.clientWidth - t.left <
                    I.parent().outerWidth(!0))
                ) {
                  var h = I.parent().outerWidth(!0) - a.offsetWidth;
                  n -= h;
                }
                "rtl" === d.parent().css("direction") &&
                  (n -= J.outerWidth() - d.outerWidth()),
                  C.fixed
                    ? ((r -= m), (n -= e(window).scrollLeft()), (o = "fixed"))
                    : ((s = !1),
                      H(a, function (e) {
                        return "fixed" ===
                          window
                            .getComputedStyle(e)
                            .getPropertyValue("position")
                          ? ((s = !0), !1)
                          : void 0;
                      }),
                      s
                        ? ((o = "fixed"),
                          r + J.outerHeight() > c + m
                            ? ((l = "bottom"), (r = c + m - t.top))
                            : (r -= m))
                        : r + a.offsetHeight > c + m &&
                          (r = t.top - a.offsetHeight + 1),
                      0 > r && (r = 0),
                      n + a.offsetWidth > u && (n = u - a.offsetWidth)),
                  (i = J[0]),
                  H(i, function (e) {
                    var t;
                    return (
                      (t = window
                        .getComputedStyle(e)
                        .getPropertyValue("position")),
                      "relative" === t && u >= e.offsetWidth
                        ? ((n -= (u - e.offsetWidth) / 2), !1)
                        : void 0
                    );
                  }),
                  (f = { position: o, left: n, top: "", bottom: "" }),
                  (f[l] = r),
                  J.css(f);
              }),
              J.on("open.xdsoft", function (t) {
                var a = !0;
                C.onShow &&
                  e.isFunction(C.onShow) &&
                  (a = C.onShow.call(J, j.currentTime, J.data("input"), t)),
                  a !== !1 &&
                    (J.show(),
                    Y(),
                    e(window).off("resize.xdsoft", Y).on("resize.xdsoft", Y),
                    C.closeOnWithoutClick &&
                      e([document.body, window]).on(
                        "touchstart mousedown.xdsoft",
                        function r() {
                          J.trigger("close.xdsoft"),
                            e([document.body, window]).off(
                              "touchstart mousedown.xdsoft",
                              r
                            );
                        }
                      ));
              })
                .on("close.xdsoft", function (t) {
                  var a = !0;
                  N.find(".xdsoft_month,.xdsoft_year")
                    .find(".xdsoft_select")
                    .hide(),
                    C.onClose &&
                      e.isFunction(C.onClose) &&
                      (a = C.onClose.call(
                        J,
                        j.currentTime,
                        J.data("input"),
                        t
                      )),
                    a === !1 || C.opened || C.inline || J.hide(),
                    t.stopPropagation();
                })
                .on("toggle.xdsoft", function () {
                  J.trigger(J.is(":visible") ? "close.xdsoft" : "open.xdsoft");
                })
                .data("input", a),
              (X = 0),
              J.data("xdsoft_datetime", j),
              J.setOptions(C),
              j.setCurrentTime(i()),
              a
                .data("xdsoft_datetimepicker", J)
                .on(
                  "open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",
                  function () {
                    a.is(":disabled") ||
                      (a.data("xdsoft_datetimepicker").is(":visible") &&
                        C.closeOnInputClick) ||
                      (clearTimeout(X),
                      (X = setTimeout(function () {
                        a.is(":disabled") ||
                          ((q = !0),
                          j.setCurrentTime(i(), !0),
                          C.mask && s(C),
                          J.trigger("open.xdsoft"));
                      }, 100)));
                  }
                )
                .on("keydown.xdsoft", function (t) {
                  var a,
                    r = t.which;
                  return -1 !== [p].indexOf(r) && C.enterLikeTab
                    ? ((a = e(
                        "input:visible,textarea:visible,button:visible,a:visible"
                      )),
                      J.trigger("close.xdsoft"),
                      a.eq(a.index(this) + 1).focus(),
                      !1)
                    : -1 !== [T].indexOf(r)
                    ? (J.trigger("close.xdsoft"), !0)
                    : void 0;
                })
                .on("blur.xdsoft", function () {
                  J.trigger("close.xdsoft");
                });
          }),
          (d = function (t) {
            var a = t.data("xdsoft_datetimepicker");
            a &&
              (a.data("xdsoft_datetime", null),
              a.remove(),
              t.data("xdsoft_datetimepicker", null).off(".xdsoft"),
              e(window).off("resize.xdsoft"),
              e([window, document.body]).off("mousedown.xdsoft touchstart"),
              t.unmousewheel && t.unmousewheel());
          }),
          e(document)
            .off("keydown.xdsoftctrl keyup.xdsoftctrl")
            .on("keydown.xdsoftctrl", function (e) {
              e.keyCode === h && (F = !0);
            })
            .on("keyup.xdsoftctrl", function (e) {
              e.keyCode === h && (F = !1);
            }),
          this.each(function () {
            var t,
              a = e(this).data("xdsoft_datetimepicker");
            if (a) {
              if ("string" === e.type(n))
                switch (n) {
                  case "show":
                    e(this).select().focus(), a.trigger("open.xdsoft");
                    break;
                  case "hide":
                    a.trigger("close.xdsoft");
                    break;
                  case "toggle":
                    a.trigger("toggle.xdsoft");
                    break;
                  case "destroy":
                    d(e(this));
                    break;
                  case "reset":
                    (this.value = this.defaultValue),
                      (this.value &&
                        a
                          .data("xdsoft_datetime")
                          .isValidDate(r.parseDate(this.value, C.format))) ||
                        a.data("changed", !1),
                      a.data("xdsoft_datetime").setCurrentTime(this.value);
                    break;
                  case "validate":
                    (t = a.data("input")), t.trigger("blur.xdsoft");
                    break;
                  default:
                    a[n] && e.isFunction(a[n]) && (u = a[n](i));
                }
              else a.setOptions(n);
              return 0;
            }
            "string" !== e.type(n) &&
              (!C.lazyInit || C.open || C.inline ? s(e(this)) : A(e(this)));
          }),
          u
        );
      }),
      (e.fn.datetimepicker.defaults = a);
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
      ? (module.exports = e)
      : e(jQuery);
  })(function (e) {
    function t(t) {
      var i = t || window.event,
        s = d.call(arguments, 1),
        u = 0,
        f = 0,
        c = 0,
        m = 0,
        h = 0,
        g = 0;
      if (
        ((t = e.event.fix(i)),
        (t.type = "mousewheel"),
        "detail" in i && (c = -1 * i.detail),
        "wheelDelta" in i && (c = i.wheelDelta),
        "wheelDeltaY" in i && (c = i.wheelDeltaY),
        "wheelDeltaX" in i && (f = -1 * i.wheelDeltaX),
        "axis" in i && i.axis === i.HORIZONTAL_AXIS && ((f = -1 * c), (c = 0)),
        (u = 0 === c ? f : c),
        "deltaY" in i && ((c = -1 * i.deltaY), (u = c)),
        "deltaX" in i && ((f = i.deltaX), 0 === c && (u = -1 * f)),
        0 !== c || 0 !== f)
      ) {
        if (1 === i.deltaMode) {
          var p = e.data(this, "mousewheel-line-height");
          (u *= p), (c *= p), (f *= p);
        } else if (2 === i.deltaMode) {
          var y = e.data(this, "mousewheel-page-height");
          (u *= y), (c *= y), (f *= y);
        }
        if (
          ((m = Math.max(Math.abs(c), Math.abs(f))),
          (!o || o > m) && ((o = m), r(i, m) && (o /= 40)),
          r(i, m) && ((u /= 40), (f /= 40), (c /= 40)),
          (u = Math[u >= 1 ? "floor" : "ceil"](u / o)),
          (f = Math[f >= 1 ? "floor" : "ceil"](f / o)),
          (c = Math[c >= 1 ? "floor" : "ceil"](c / o)),
          l.settings.normalizeOffset && this.getBoundingClientRect)
        ) {
          var v = this.getBoundingClientRect();
          (h = t.clientX - v.left), (g = t.clientY - v.top);
        }
        return (
          (t.deltaX = f),
          (t.deltaY = c),
          (t.deltaFactor = o),
          (t.offsetX = h),
          (t.offsetY = g),
          (t.deltaMode = 0),
          s.unshift(t, u, f, c),
          n && clearTimeout(n),
          (n = setTimeout(a, 200)),
          (e.event.dispatch || e.event.handle).apply(this, s)
        );
      }
    }
    function a() {
      o = null;
    }
    function r(e, t) {
      return (
        l.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
      );
    }
    var n,
      o,
      i = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      s =
        "onwheel" in document || document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      d = Array.prototype.slice;
    if (e.event.fixHooks)
      for (var u = i.length; u; ) e.event.fixHooks[i[--u]] = e.event.mouseHooks;
    var l = (e.event.special.mousewheel = {
      version: "3.1.12",
      setup: function () {
        if (this.addEventListener)
          for (var a = s.length; a; ) this.addEventListener(s[--a], t, !1);
        else this.onmousewheel = t;
        e.data(this, "mousewheel-line-height", l.getLineHeight(this)),
          e.data(this, "mousewheel-page-height", l.getPageHeight(this));
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var a = s.length; a; ) this.removeEventListener(s[--a], t, !1);
        else this.onmousewheel = null;
        e.removeData(this, "mousewheel-line-height"),
          e.removeData(this, "mousewheel-page-height");
      },
      getLineHeight: function (t) {
        var a = e(t),
          r = a["offsetParent" in e.fn ? "offsetParent" : "parent"]();
        return (
          r.length || (r = e("body")),
          parseInt(r.css("fontSize"), 10) ||
            parseInt(a.css("fontSize"), 10) ||
            16
        );
      },
      getPageHeight: function (t) {
        return e(t).height();
      },
      settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
    });
    e.fn.extend({
      mousewheel: function (e) {
        return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
      },
      unmousewheel: function (e) {
        return this.unbind("mousewheel", e);
      },
    });
  });
!(function (e) {
  var a = (function () {
    "use strict";
    var e = "s",
      s = {
        DAY: 864e5,
        HOUR: 36e5,
        MINUTE: 6e4,
        SECOND: 1e3,
        BASELINE_YEAR: 2014,
        MAX_SCORE: 864e6,
        AMBIGUITIES: {
          "America/Denver": ["America/Mazatlan"],
          "Europe/London": ["Africa/Casablanca"],
          "America/Chicago": ["America/Mexico_City"],
          "America/Asuncion": ["America/Campo_Grande", "America/Santiago"],
          "America/Montevideo": ["America/Sao_Paulo", "America/Santiago"],
          "Asia/Beirut": [
            "Asia/Amman",
            "Asia/Jerusalem",
            "Europe/Helsinki",
            "Asia/Damascus",
            "Africa/Cairo",
            "Asia/Gaza",
            "Europe/Minsk",
          ],
          "Pacific/Auckland": ["Pacific/Fiji"],
          "America/Los_Angeles": ["America/Santa_Isabel"],
          "America/New_York": ["America/Havana"],
          "America/Halifax": ["America/Goose_Bay"],
          "America/Godthab": ["America/Miquelon"],
          "Asia/Dubai": ["Asia/Yerevan"],
          "Asia/Jakarta": ["Asia/Krasnoyarsk"],
          "Asia/Shanghai": ["Asia/Irkutsk", "Australia/Perth"],
          "Australia/Sydney": ["Australia/Lord_Howe"],
          "Asia/Tokyo": ["Asia/Yakutsk"],
          "Asia/Dhaka": ["Asia/Omsk"],
          "Asia/Baku": ["Asia/Yerevan"],
          "Australia/Brisbane": ["Asia/Vladivostok"],
          "Pacific/Noumea": ["Asia/Vladivostok"],
          "Pacific/Majuro": ["Asia/Kamchatka", "Pacific/Fiji"],
          "Pacific/Tongatapu": ["Pacific/Apia"],
          "Asia/Baghdad": ["Europe/Minsk", "Europe/Moscow"],
          "Asia/Karachi": ["Asia/Yekaterinburg"],
          "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"],
        },
      },
      i = function (e) {
        var a = -e.getTimezoneOffset();
        return null !== a ? a : 0;
      },
      r = function () {
        var a = i(new Date(s.BASELINE_YEAR, 0, 2)),
          r = i(new Date(s.BASELINE_YEAR, 5, 2)),
          n = a - r;
        return 0 > n ? a + ",1" : n > 0 ? r + ",1," + e : a + ",0";
      },
      n = function () {
        var e, a;
        if (
          "undefined" != typeof Intl &&
          "undefined" != typeof Intl.DateTimeFormat &&
          ((e = Intl.DateTimeFormat()),
          "undefined" != typeof e && "undefined" != typeof e.resolvedOptions)
        )
          return (
            (a = e.resolvedOptions().timeZone),
            a && (a.indexOf("/") > -1 || "UTC" === a) ? a : void 0
          );
      },
      o = function (e) {
        for (
          var a = new Date(e, 0, 1, 0, 0, 1, 0).getTime(),
            s = new Date(e, 12, 31, 23, 59, 59).getTime(),
            i = a,
            r = new Date(i).getTimezoneOffset(),
            n = null,
            o = null;
          s - 864e5 > i;

        ) {
          var t = new Date(i),
            A = t.getTimezoneOffset();
          A !== r && (r > A && (n = t), A > r && (o = t), (r = A)),
            (i += 864e5);
        }
        return n && o ? { s: u(n).getTime(), e: u(o).getTime() } : !1;
      },
      u = function l(e, a, i) {
        "undefined" == typeof a && ((a = s.DAY), (i = s.HOUR));
        for (
          var r = new Date(e.getTime() - a).getTime(),
            n = e.getTime() + a,
            o = new Date(r).getTimezoneOffset(),
            u = r,
            t = null;
          n - i > u;

        ) {
          var A = new Date(u),
            c = A.getTimezoneOffset();
          if (c !== o) {
            t = A;
            break;
          }
          u += i;
        }
        return a === s.DAY
          ? l(t, s.HOUR, s.MINUTE)
          : a === s.HOUR
          ? l(t, s.MINUTE, s.SECOND)
          : t;
      },
      t = function (e, a, s, i) {
        if ("N/A" !== s) return s;
        if ("Asia/Beirut" === a) {
          if (
            "Africa/Cairo" === i.name &&
            13983768e5 === e[6].s &&
            14116788e5 === e[6].e
          )
            return 0;
          if (
            "Asia/Jerusalem" === i.name &&
            13959648e5 === e[6].s &&
            14118588e5 === e[6].e
          )
            return 0;
        } else if ("America/Santiago" === a) {
          if (
            "America/Asuncion" === i.name &&
            14124816e5 === e[6].s &&
            1397358e6 === e[6].e
          )
            return 0;
          if (
            "America/Campo_Grande" === i.name &&
            14136912e5 === e[6].s &&
            13925196e5 === e[6].e
          )
            return 0;
        } else if ("America/Montevideo" === a) {
          if (
            "America/Sao_Paulo" === i.name &&
            14136876e5 === e[6].s &&
            1392516e6 === e[6].e
          )
            return 0;
        } else if (
          "Pacific/Auckland" === a &&
          "Pacific/Fiji" === i.name &&
          14142456e5 === e[6].s &&
          13961016e5 === e[6].e
        )
          return 0;
        return s;
      },
      A = function (e, i) {
        for (
          var r = function (a) {
              for (var r = 0, n = 0; n < e.length; n++)
                if (a.rules[n] && e[n]) {
                  if (!(e[n].s >= a.rules[n].s && e[n].e <= a.rules[n].e)) {
                    r = "N/A";
                    break;
                  }
                  if (
                    ((r = 0),
                    (r += Math.abs(e[n].s - a.rules[n].s)),
                    (r += Math.abs(a.rules[n].e - e[n].e)),
                    r > s.MAX_SCORE)
                  ) {
                    r = "N/A";
                    break;
                  }
                }
              return (r = t(e, i, r, a));
            },
            n = {},
            o = a.olson.dst_rules.zones,
            u = o.length,
            A = s.AMBIGUITIES[i],
            c = 0;
          u > c;
          c++
        ) {
          var m = o[c],
            l = r(o[c]);
          "N/A" !== l && (n[m.name] = l);
        }
        for (var f in n)
          if (n.hasOwnProperty(f))
            for (var d = 0; d < A.length; d++) if (A[d] === f) return f;
        return i;
      },
      c = function (e) {
        var s = function () {
            for (var e = [], s = 0; s < a.olson.dst_rules.years.length; s++) {
              var i = o(a.olson.dst_rules.years[s]);
              e.push(i);
            }
            return e;
          },
          i = function (e) {
            for (var a = 0; a < e.length; a++) if (e[a] !== !1) return !0;
            return !1;
          },
          r = s(),
          n = i(r);
        return n ? A(r, e) : e;
      },
      m = function () {
        var e = n();
        return (
          e ||
            ((e = a.olson.timezones[r()]),
            "undefined" != typeof s.AMBIGUITIES[e] && (e = c(e))),
          {
            name: function () {
              return e;
            },
          }
        );
      };
    return { determine: m };
  })();
  (a.olson = a.olson || {}),
    (a.olson.timezones = {
      "-720,0": "Etc/GMT+12",
      "-660,0": "Pacific/Pago_Pago",
      "-660,1,s": "Pacific/Apia",
      "-600,1": "America/Adak",
      "-600,0": "Pacific/Honolulu",
      "-570,0": "Pacific/Marquesas",
      "-540,0": "Pacific/Gambier",
      "-540,1": "America/Anchorage",
      "-480,1": "America/Los_Angeles",
      "-480,0": "Pacific/Pitcairn",
      "-420,0": "America/Phoenix",
      "-420,1": "America/Denver",
      "-360,0": "America/Guatemala",
      "-360,1": "America/Chicago",
      "-360,1,s": "Pacific/Easter",
      "-300,0": "America/Bogota",
      "-300,1": "America/New_York",
      "-270,0": "America/Caracas",
      "-240,1": "America/Halifax",
      "-240,0": "America/Santo_Domingo",
      "-240,1,s": "America/Asuncion",
      "-210,1": "America/St_Johns",
      "-180,1": "America/Godthab",
      "-180,0": "America/Argentina/Buenos_Aires",
      "-180,1,s": "America/Montevideo",
      "-120,0": "America/Noronha",
      "-120,1": "America/Noronha",
      "-60,1": "Atlantic/Azores",
      "-60,0": "Atlantic/Cape_Verde",
      "0,0": "UTC",
      "0,1": "Europe/London",
      "60,1": "Europe/Berlin",
      "60,0": "Africa/Lagos",
      "60,1,s": "Africa/Windhoek",
      "120,1": "Asia/Beirut",
      "120,0": "Africa/Johannesburg",
      "180,0": "Asia/Baghdad",
      "180,1": "Europe/Moscow",
      "210,1": "Asia/Tehran",
      "240,0": "Asia/Dubai",
      "240,1": "Asia/Baku",
      "270,0": "Asia/Kabul",
      "300,1": "Asia/Yekaterinburg",
      "300,0": "Asia/Karachi",
      "330,0": "Asia/Kolkata",
      "345,0": "Asia/Kathmandu",
      "360,0": "Asia/Dhaka",
      "360,1": "Asia/Omsk",
      "390,0": "Asia/Rangoon",
      "420,1": "Asia/Krasnoyarsk",
      "420,0": "Asia/Jakarta",
      "480,0": "Asia/Shanghai",
      "480,1": "Asia/Irkutsk",
      "525,0": "Australia/Eucla",
      "525,1,s": "Australia/Eucla",
      "540,1": "Asia/Yakutsk",
      "540,0": "Asia/Tokyo",
      "570,0": "Australia/Darwin",
      "570,1,s": "Australia/Adelaide",
      "600,0": "Australia/Brisbane",
      "600,1": "Asia/Vladivostok",
      "600,1,s": "Australia/Sydney",
      "630,1,s": "Australia/Lord_Howe",
      "660,1": "Asia/Kamchatka",
      "660,0": "Pacific/Noumea",
      "690,0": "Pacific/Norfolk",
      "720,1,s": "Pacific/Auckland",
      "720,0": "Pacific/Majuro",
      "765,1,s": "Pacific/Chatham",
      "780,0": "Pacific/Tongatapu",
      "780,1,s": "Pacific/Apia",
      "840,0": "Pacific/Kiritimati",
    }),
    (a.olson.dst_rules = {
      years: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      zones: [
        {
          name: "Africa/Cairo",
          rules: [
            { e: 12199572e5, s: 12090744e5 },
            { e: 1250802e6, s: 1240524e6 },
            { e: 12858804e5, s: 12840696e5 },
            !1,
            !1,
            !1,
            { e: 14116788e5, s: 1406844e6 },
          ],
        },
        {
          name: "Africa/Casablanca",
          rules: [
            { e: 12202236e5, s: 12122784e5 },
            { e: 12508092e5, s: 12438144e5 },
            { e: 1281222e6, s: 12727584e5 },
            { e: 13120668e5, s: 13017888e5 },
            { e: 13489704e5, s: 1345428e6 },
            { e: 13828392e5, s: 13761e8 },
            { e: 14142888e5, s: 14069448e5 },
          ],
        },
        {
          name: "America/Asuncion",
          rules: [
            { e: 12050316e5, s: 12243888e5 },
            { e: 12364812e5, s: 12558384e5 },
            { e: 12709548e5, s: 12860784e5 },
            { e: 13024044e5, s: 1317528e6 },
            { e: 1333854e6, s: 13495824e5 },
            { e: 1364094e6, s: 1381032e6 },
            { e: 13955436e5, s: 14124816e5 },
          ],
        },
        {
          name: "America/Campo_Grande",
          rules: [
            { e: 12032172e5, s: 12243888e5 },
            { e: 12346668e5, s: 12558384e5 },
            { e: 12667212e5, s: 1287288e6 },
            { e: 12981708e5, s: 13187376e5 },
            { e: 13302252e5, s: 1350792e6 },
            { e: 136107e7, s: 13822416e5 },
            { e: 13925196e5, s: 14136912e5 },
          ],
        },
        {
          name: "America/Goose_Bay",
          rules: [
            { e: 122559486e4, s: 120503526e4 },
            { e: 125704446e4, s: 123648486e4 },
            { e: 128909886e4, s: 126853926e4 },
            { e: 13205556e5, s: 129998886e4 },
            { e: 13520052e5, s: 13314456e5 },
            { e: 13834548e5, s: 13628952e5 },
            { e: 14149044e5, s: 13943448e5 },
          ],
        },
        {
          name: "America/Havana",
          rules: [
            { e: 12249972e5, s: 12056436e5 },
            { e: 12564468e5, s: 12364884e5 },
            { e: 12885012e5, s: 12685428e5 },
            { e: 13211604e5, s: 13005972e5 },
            { e: 13520052e5, s: 13332564e5 },
            { e: 13834548e5, s: 13628916e5 },
            { e: 14149044e5, s: 13943412e5 },
          ],
        },
        {
          name: "America/Mazatlan",
          rules: [
            { e: 1225008e6, s: 12074724e5 },
            { e: 12564576e5, s: 1238922e6 },
            { e: 1288512e6, s: 12703716e5 },
            { e: 13199616e5, s: 13018212e5 },
            { e: 13514112e5, s: 13332708e5 },
            { e: 13828608e5, s: 13653252e5 },
            { e: 14143104e5, s: 13967748e5 },
          ],
        },
        {
          name: "America/Mexico_City",
          rules: [
            { e: 12250044e5, s: 12074688e5 },
            { e: 1256454e6, s: 12389184e5 },
            { e: 12885084e5, s: 1270368e6 },
            { e: 1319958e6, s: 13018176e5 },
            { e: 13514076e5, s: 13332672e5 },
            { e: 13828572e5, s: 13653216e5 },
            { e: 14143068e5, s: 13967712e5 },
          ],
        },
        {
          name: "America/Miquelon",
          rules: [
            { e: 12255984e5, s: 12050388e5 },
            { e: 1257048e6, s: 12364884e5 },
            { e: 12891024e5, s: 12685428e5 },
            { e: 1320552e6, s: 12999924e5 },
            { e: 13520016e5, s: 1331442e6 },
            { e: 13834512e5, s: 13628916e5 },
            { e: 14149008e5, s: 13943412e5 },
          ],
        },
        {
          name: "America/Santa_Isabel",
          rules: [
            { e: 12250116e5, s: 1207476e6 },
            { e: 12564612e5, s: 12389256e5 },
            { e: 12885156e5, s: 12703752e5 },
            { e: 13199652e5, s: 13018248e5 },
            { e: 13514148e5, s: 13332744e5 },
            { e: 13828644e5, s: 13653288e5 },
            { e: 1414314e6, s: 13967784e5 },
          ],
        },
        {
          name: "America/Santiago",
          rules: [
            { e: 1206846e6, s: 1223784e6 },
            { e: 1237086e6, s: 12552336e5 },
            { e: 127035e7, s: 12866832e5 },
            { e: 13048236e5, s: 13138992e5 },
            { e: 13356684e5, s: 13465584e5 },
            { e: 1367118e6, s: 13786128e5 },
            { e: 13985676e5, s: 14100624e5 },
          ],
        },
        {
          name: "America/Sao_Paulo",
          rules: [
            { e: 12032136e5, s: 12243852e5 },
            { e: 12346632e5, s: 12558348e5 },
            { e: 12667176e5, s: 12872844e5 },
            { e: 12981672e5, s: 1318734e6 },
            { e: 13302216e5, s: 13507884e5 },
            { e: 13610664e5, s: 1382238e6 },
            { e: 1392516e6, s: 14136876e5 },
          ],
        },
        {
          name: "Asia/Amman",
          rules: [
            { e: 1225404e6, s: 12066552e5 },
            { e: 12568536e5, s: 12381048e5 },
            { e: 12883032e5, s: 12695544e5 },
            { e: 13197528e5, s: 13016088e5 },
            !1,
            !1,
            { e: 14147064e5, s: 13959576e5 },
          ],
        },
        {
          name: "Asia/Damascus",
          rules: [
            { e: 12254868e5, s: 120726e7 },
            { e: 125685e7, s: 12381048e5 },
            { e: 12882996e5, s: 12701592e5 },
            { e: 13197492e5, s: 13016088e5 },
            { e: 13511988e5, s: 13330584e5 },
            { e: 13826484e5, s: 1364508e6 },
            { e: 14147028e5, s: 13959576e5 },
          ],
        },
        { name: "Asia/Dubai", rules: [!1, !1, !1, !1, !1, !1, !1] },
        {
          name: "Asia/Gaza",
          rules: [
            { e: 12199572e5, s: 12066552e5 },
            { e: 12520152e5, s: 12381048e5 },
            { e: 1281474e6, s: 126964086e4 },
            { e: 1312146e6, s: 130160886e4 },
            { e: 13481784e5, s: 13330584e5 },
            { e: 13802292e5, s: 1364508e6 },
            { e: 1414098e6, s: 13959576e5 },
          ],
        },
        {
          name: "Asia/Irkutsk",
          rules: [
            { e: 12249576e5, s: 12068136e5 },
            { e: 12564072e5, s: 12382632e5 },
            { e: 12884616e5, s: 12697128e5 },
            !1,
            !1,
            !1,
            !1,
          ],
        },
        {
          name: "Asia/Jerusalem",
          rules: [
            { e: 12231612e5, s: 12066624e5 },
            { e: 1254006e6, s: 1238112e6 },
            { e: 1284246e6, s: 12695616e5 },
            { e: 131751e7, s: 1301616e6 },
            { e: 13483548e5, s: 13330656e5 },
            { e: 13828284e5, s: 13645152e5 },
            { e: 1414278e6, s: 13959648e5 },
          ],
        },
        {
          name: "Asia/Kamchatka",
          rules: [
            { e: 12249432e5, s: 12067992e5 },
            { e: 12563928e5, s: 12382488e5 },
            { e: 12884508e5, s: 12696984e5 },
            !1,
            !1,
            !1,
            !1,
          ],
        },
        {
          name: "Asia/Krasnoyarsk",
          rules: [
            { e: 12249612e5, s: 12068172e5 },
            { e: 12564108e5, s: 12382668e5 },
            { e: 12884652e5, s: 12697164e5 },
            !1,
            !1,
            !1,
            !1,
          ],
        },
        {
          name: "Asia/Omsk",
          rules: [
            { e: 12249648e5, s: 12068208e5 },
            { e: 12564144e5, s: 12382704e5 },
            { e: 12884688e5, s: 126972e7 },
            !1,
            !1,
            !1,
            !1,
          ],
        },
        {
          name: "Asia/Vladivostok",
          rules: [
            { e: 12249504e5, s: 12068064e5 },
            { e: 12564e8, s: 1238256e6 },
            { e: 12884544e5, s: 12697056e5 },
            !1,
            !1,
            !1,
            !1,
          ],
        },
        {
          name: "Asia/Yakutsk",
          rules: [
            { e: 1224954e6, s: 120681e7 },
            { e: 12564036e5, s: 12382596e5 },
            { e: 1288458e6, s: 12697092e5 },
            !1,
            !1,
            !1,
            !1,
          ],
        },
        {
          name: "Asia/Yekaterinburg",
          rules: [
            { e: 12249684e5, s: 12068244e5 },
            { e: 1256418e6, s: 1238274e6 },
            { e: 12884724e5, s: 12697236e5 },
            !1,
            !1,
            !1,
            !1,
          ],
        },
        {
          name: "Asia/Yerevan",
          rules: [
            { e: 1224972e6, s: 1206828e6 },
            { e: 12564216e5, s: 12382776e5 },
            { e: 1288476e6, s: 12697272e5 },
            { e: 13199256e5, s: 13011768e5 },
            !1,
            !1,
            !1,
          ],
        },
        {
          name: "Australia/Lord_Howe",
          rules: [
            { e: 12074076e5, s: 12231342e5 },
            { e: 12388572e5, s: 12545838e5 },
            { e: 12703068e5, s: 12860334e5 },
            { e: 13017564e5, s: 1317483e6 },
            { e: 1333206e6, s: 13495374e5 },
            { e: 13652604e5, s: 1380987e6 },
            { e: 139671e7, s: 14124366e5 },
          ],
        },
        {
          name: "Australia/Perth",
          rules: [{ e: 12068136e5, s: 12249576e5 }, !1, !1, !1, !1, !1, !1],
        },
        {
          name: "Europe/Helsinki",
          rules: [
            { e: 12249828e5, s: 12068388e5 },
            { e: 12564324e5, s: 12382884e5 },
            { e: 12884868e5, s: 1269738e6 },
            { e: 13199364e5, s: 13011876e5 },
            { e: 1351386e6, s: 13326372e5 },
            { e: 13828356e5, s: 13646916e5 },
            { e: 14142852e5, s: 13961412e5 },
          ],
        },
        {
          name: "Europe/Minsk",
          rules: [
            { e: 12249792e5, s: 12068352e5 },
            { e: 12564288e5, s: 12382848e5 },
            { e: 12884832e5, s: 12697344e5 },
            !1,
            !1,
            !1,
            !1,
          ],
        },
        {
          name: "Europe/Moscow",
          rules: [
            { e: 12249756e5, s: 12068316e5 },
            { e: 12564252e5, s: 12382812e5 },
            { e: 12884796e5, s: 12697308e5 },
            !1,
            !1,
            !1,
            !1,
          ],
        },
        {
          name: "Pacific/Apia",
          rules: [
            !1,
            !1,
            !1,
            { e: 13017528e5, s: 13168728e5 },
            { e: 13332024e5, s: 13489272e5 },
            { e: 13652568e5, s: 13803768e5 },
            { e: 13967064e5, s: 14118264e5 },
          ],
        },
        {
          name: "Pacific/Fiji",
          rules: [
            !1,
            !1,
            { e: 12696984e5, s: 12878424e5 },
            { e: 13271544e5, s: 1319292e6 },
            { e: 1358604e6, s: 13507416e5 },
            { e: 139005e7, s: 1382796e6 },
            { e: 14215032e5, s: 14148504e5 },
          ],
        },
        {
          name: "Europe/London",
          rules: [
            { e: 12249828e5, s: 12068388e5 },
            { e: 12564324e5, s: 12382884e5 },
            { e: 12884868e5, s: 1269738e6 },
            { e: 13199364e5, s: 13011876e5 },
            { e: 1351386e6, s: 13326372e5 },
            { e: 13828356e5, s: 13646916e5 },
            { e: 14142852e5, s: 13961412e5 },
          ],
        },
      ],
    }),
    "undefined" != typeof module && "undefined" != typeof module.exports
      ? (module.exports = a)
      : "undefined" != typeof define && null !== define && null != define.amd
      ? define([], function () {
          return a;
        })
      : "undefined" == typeof e
      ? (window.jstz = a)
      : (e.jstz = a);
})();
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.moment = t());
})(this, function () {
  "use strict";
  var e, i;
  function c() {
    return e.apply(null, arguments);
  }
  function o(e) {
    return (
      e instanceof Array ||
      "[object Array]" === Object.prototype.toString.call(e)
    );
  }
  function u(e) {
    return null != e && "[object Object]" === Object.prototype.toString.call(e);
  }
  function l(e) {
    return void 0 === e;
  }
  function d(e) {
    return (
      "number" == typeof e ||
      "[object Number]" === Object.prototype.toString.call(e)
    );
  }
  function h(e) {
    return (
      e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    );
  }
  function f(e, t) {
    var n,
      s = [];
    for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
    return s;
  }
  function m(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function _(e, t) {
    for (var n in t) m(t, n) && (e[n] = t[n]);
    return (
      m(t, "toString") && (e.toString = t.toString),
      m(t, "valueOf") && (e.valueOf = t.valueOf),
      e
    );
  }
  function y(e, t, n, s) {
    return Ot(e, t, n, s, !0).utc();
  }
  function g(e) {
    return (
      null == e._pf &&
        (e._pf = {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1,
        }),
      e._pf
    );
  }
  function p(e) {
    if (null == e._isValid) {
      var t = g(e),
        n = i.call(t.parsedDateParts, function (e) {
          return null != e;
        }),
        s =
          !isNaN(e._d.getTime()) &&
          t.overflow < 0 &&
          !t.empty &&
          !t.invalidMonth &&
          !t.invalidWeekday &&
          !t.weekdayMismatch &&
          !t.nullInput &&
          !t.invalidFormat &&
          !t.userInvalidated &&
          (!t.meridiem || (t.meridiem && n));
      if (
        (e._strict &&
          (s =
            s &&
            0 === t.charsLeftOver &&
            0 === t.unusedTokens.length &&
            void 0 === t.bigHour),
        null != Object.isFrozen && Object.isFrozen(e))
      )
        return s;
      e._isValid = s;
    }
    return e._isValid;
  }
  function v(e) {
    var t = y(NaN);
    return null != e ? _(g(t), e) : (g(t).userInvalidated = !0), t;
  }
  i = Array.prototype.some
    ? Array.prototype.some
    : function (e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
          if (s in t && e.call(this, t[s], s, t)) return !0;
        return !1;
      };
  var r = (c.momentProperties = []);
  function w(e, t) {
    var n, s, i;
    if (
      (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
      l(t._i) || (e._i = t._i),
      l(t._f) || (e._f = t._f),
      l(t._l) || (e._l = t._l),
      l(t._strict) || (e._strict = t._strict),
      l(t._tzm) || (e._tzm = t._tzm),
      l(t._isUTC) || (e._isUTC = t._isUTC),
      l(t._offset) || (e._offset = t._offset),
      l(t._pf) || (e._pf = g(t)),
      l(t._locale) || (e._locale = t._locale),
      0 < r.length)
    )
      for (n = 0; n < r.length; n++) l((i = t[(s = r[n])])) || (e[s] = i);
    return e;
  }
  var t = !1;
  function M(e) {
    w(this, e),
      (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      !1 === t && ((t = !0), c.updateOffset(this), (t = !1));
  }
  function S(e) {
    return e instanceof M || (null != e && null != e._isAMomentObject);
  }
  function D(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function k(e) {
    var t = +e,
      n = 0;
    return 0 !== t && isFinite(t) && (n = D(t)), n;
  }
  function a(e, t, n) {
    var s,
      i = Math.min(e.length, t.length),
      r = Math.abs(e.length - t.length),
      a = 0;
    for (s = 0; s < i; s++)
      ((n && e[s] !== t[s]) || (!n && k(e[s]) !== k(t[s]))) && a++;
    return a + r;
  }
  function Y(e) {
    !1 === c.suppressDeprecationWarnings &&
      "undefined" != typeof console &&
      console.warn &&
      console.warn("Deprecation warning: " + e);
  }
  function n(i, r) {
    var a = !0;
    return _(function () {
      if ((null != c.deprecationHandler && c.deprecationHandler(null, i), a)) {
        for (var e, t = [], n = 0; n < arguments.length; n++) {
          if (((e = ""), "object" == typeof arguments[n])) {
            for (var s in ((e += "\n[" + n + "] "), arguments[0]))
              e += s + ": " + arguments[0][s] + ", ";
            e = e.slice(0, -2);
          } else e = arguments[n];
          t.push(e);
        }
        Y(
          i +
            "\nArguments: " +
            Array.prototype.slice.call(t).join("") +
            "\n" +
            new Error().stack
        ),
          (a = !1);
      }
      return r.apply(this, arguments);
    }, r);
  }
  var s,
    O = {};
  function T(e, t) {
    null != c.deprecationHandler && c.deprecationHandler(e, t),
      O[e] || (Y(t), (O[e] = !0));
  }
  function x(e) {
    return (
      e instanceof Function ||
      "[object Function]" === Object.prototype.toString.call(e)
    );
  }
  function b(e, t) {
    var n,
      s = _({}, e);
    for (n in t)
      m(t, n) &&
        (u(e[n]) && u(t[n])
          ? ((s[n] = {}), _(s[n], e[n]), _(s[n], t[n]))
          : null != t[n]
          ? (s[n] = t[n])
          : delete s[n]);
    for (n in e) m(e, n) && !m(t, n) && u(e[n]) && (s[n] = _({}, s[n]));
    return s;
  }
  function P(e) {
    null != e && this.set(e);
  }
  (c.suppressDeprecationWarnings = !1),
    (c.deprecationHandler = null),
    (s = Object.keys
      ? Object.keys
      : function (e) {
          var t,
            n = [];
          for (t in e) m(e, t) && n.push(t);
          return n;
        });
  var W = {};
  function H(e, t) {
    var n = e.toLowerCase();
    W[n] = W[n + "s"] = W[t] = e;
  }
  function R(e) {
    return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0;
  }
  function C(e) {
    var t,
      n,
      s = {};
    for (n in e) m(e, n) && (t = R(n)) && (s[t] = e[n]);
    return s;
  }
  var F = {};
  function L(e, t) {
    F[e] = t;
  }
  function U(e, t, n) {
    var s = "" + Math.abs(e),
      i = t - s.length;
    return (
      (0 <= e ? (n ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, i)).toString().substr(1) +
      s
    );
  }
  var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    V = {},
    E = {};
  function I(e, t, n, s) {
    var i = s;
    "string" == typeof s &&
      (i = function () {
        return this[s]();
      }),
      e && (E[e] = i),
      t &&
        (E[t[0]] = function () {
          return U(i.apply(this, arguments), t[1], t[2]);
        }),
      n &&
        (E[n] = function () {
          return this.localeData().ordinal(i.apply(this, arguments), e);
        });
  }
  function A(e, t) {
    return e.isValid()
      ? ((t = j(t, e.localeData())),
        (V[t] =
          V[t] ||
          (function (s) {
            var e,
              i,
              t,
              r = s.match(N);
            for (e = 0, i = r.length; e < i; e++)
              E[r[e]]
                ? (r[e] = E[r[e]])
                : (r[e] = (t = r[e]).match(/\[[\s\S]/)
                    ? t.replace(/^\[|\]$/g, "")
                    : t.replace(/\\/g, ""));
            return function (e) {
              var t,
                n = "";
              for (t = 0; t < i; t++) n += x(r[t]) ? r[t].call(e, s) : r[t];
              return n;
            };
          })(t)),
        V[t](e))
      : e.localeData().invalidDate();
  }
  function j(e, t) {
    var n = 5;
    function s(e) {
      return t.longDateFormat(e) || e;
    }
    for (G.lastIndex = 0; 0 <= n && G.test(e); )
      (e = e.replace(G, s)), (G.lastIndex = 0), (n -= 1);
    return e;
  }
  var Z = /\d/,
    z = /\d\d/,
    $ = /\d{3}/,
    q = /\d{4}/,
    J = /[+-]?\d{6}/,
    B = /\d\d?/,
    Q = /\d\d\d\d?/,
    X = /\d\d\d\d\d\d?/,
    K = /\d{1,3}/,
    ee = /\d{1,4}/,
    te = /[+-]?\d{1,6}/,
    ne = /\d+/,
    se = /[+-]?\d+/,
    ie = /Z|[+-]\d\d:?\d\d/gi,
    re = /Z|[+-]\d\d(?::?\d\d)?/gi,
    ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    oe = {};
  function ue(e, n, s) {
    oe[e] = x(n)
      ? n
      : function (e, t) {
          return e && s ? s : n;
        };
  }
  function le(e, t) {
    return m(oe, e)
      ? oe[e](t._strict, t._locale)
      : new RegExp(
          de(
            e
              .replace("\\", "")
              .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
                e,
                t,
                n,
                s,
                i
              ) {
                return t || n || s || i;
              })
          )
        );
  }
  function de(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  var he = {};
  function ce(e, n) {
    var t,
      s = n;
    for (
      "string" == typeof e && (e = [e]),
        d(n) &&
          (s = function (e, t) {
            t[n] = k(e);
          }),
        t = 0;
      t < e.length;
      t++
    )
      he[e[t]] = s;
  }
  function fe(e, i) {
    ce(e, function (e, t, n, s) {
      (n._w = n._w || {}), i(e, n._w, n, s);
    });
  }
  var me = 0,
    _e = 1,
    ye = 2,
    ge = 3,
    pe = 4,
    ve = 5,
    we = 6,
    Me = 7,
    Se = 8;
  function De(e) {
    return ke(e) ? 366 : 365;
  }
  function ke(e) {
    return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
  }
  I("Y", 0, 0, function () {
    var e = this.year();
    return e <= 9999 ? "" + e : "+" + e;
  }),
    I(0, ["YY", 2], 0, function () {
      return this.year() % 100;
    }),
    I(0, ["YYYY", 4], 0, "year"),
    I(0, ["YYYYY", 5], 0, "year"),
    I(0, ["YYYYYY", 6, !0], 0, "year"),
    H("year", "y"),
    L("year", 1),
    ue("Y", se),
    ue("YY", B, z),
    ue("YYYY", ee, q),
    ue("YYYYY", te, J),
    ue("YYYYYY", te, J),
    ce(["YYYYY", "YYYYYY"], me),
    ce("YYYY", function (e, t) {
      t[me] = 2 === e.length ? c.parseTwoDigitYear(e) : k(e);
    }),
    ce("YY", function (e, t) {
      t[me] = c.parseTwoDigitYear(e);
    }),
    ce("Y", function (e, t) {
      t[me] = parseInt(e, 10);
    }),
    (c.parseTwoDigitYear = function (e) {
      return k(e) + (68 < k(e) ? 1900 : 2e3);
    });
  var Ye,
    Oe = Te("FullYear", !0);
  function Te(t, n) {
    return function (e) {
      return null != e
        ? (be(this, t, e), c.updateOffset(this, n), this)
        : xe(this, t);
    };
  }
  function xe(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
  }
  function be(e, t, n) {
    e.isValid() &&
      !isNaN(n) &&
      ("FullYear" === t && ke(e.year()) && 1 === e.month() && 29 === e.date()
        ? e._d["set" + (e._isUTC ? "UTC" : "") + t](
            n,
            e.month(),
            Pe(n, e.month())
          )
        : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
  }
  function Pe(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var n,
      s = ((t % (n = 12)) + n) % n;
    return (
      (e += (t - s) / 12), 1 === s ? (ke(e) ? 29 : 28) : 31 - ((s % 7) % 2)
    );
  }
  (Ye = Array.prototype.indexOf
    ? Array.prototype.indexOf
    : function (e) {
        var t;
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
        return -1;
      }),
    I("M", ["MM", 2], "Mo", function () {
      return this.month() + 1;
    }),
    I("MMM", 0, 0, function (e) {
      return this.localeData().monthsShort(this, e);
    }),
    I("MMMM", 0, 0, function (e) {
      return this.localeData().months(this, e);
    }),
    H("month", "M"),
    L("month", 8),
    ue("M", B),
    ue("MM", B, z),
    ue("MMM", function (e, t) {
      return t.monthsShortRegex(e);
    }),
    ue("MMMM", function (e, t) {
      return t.monthsRegex(e);
    }),
    ce(["M", "MM"], function (e, t) {
      t[_e] = k(e) - 1;
    }),
    ce(["MMM", "MMMM"], function (e, t, n, s) {
      var i = n._locale.monthsParse(e, s, n._strict);
      null != i ? (t[_e] = i) : (g(n).invalidMonth = e);
    });
  var We = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    He = "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    );
  var Re = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
  function Ce(e, t) {
    var n;
    if (!e.isValid()) return e;
    if ("string" == typeof t)
      if (/^\d+$/.test(t)) t = k(t);
      else if (!d((t = e.localeData().monthsParse(t)))) return e;
    return (
      (n = Math.min(e.date(), Pe(e.year(), t))),
      e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
      e
    );
  }
  function Fe(e) {
    return null != e
      ? (Ce(this, e), c.updateOffset(this, !0), this)
      : xe(this, "Month");
  }
  var Le = ae;
  var Ue = ae;
  function Ne() {
    function e(e, t) {
      return t.length - e.length;
    }
    var t,
      n,
      s = [],
      i = [],
      r = [];
    for (t = 0; t < 12; t++)
      (n = y([2e3, t])),
        s.push(this.monthsShort(n, "")),
        i.push(this.months(n, "")),
        r.push(this.months(n, "")),
        r.push(this.monthsShort(n, ""));
    for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++)
      (s[t] = de(s[t])), (i[t] = de(i[t]));
    for (t = 0; t < 24; t++) r[t] = de(r[t]);
    (this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i")),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")),
      (this._monthsShortStrictRegex = new RegExp(
        "^(" + s.join("|") + ")",
        "i"
      ));
  }
  function Ge(e) {
    var t = new Date(Date.UTC.apply(null, arguments));
    return (
      e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
      t
    );
  }
  function Ve(e, t, n) {
    var s = 7 + t - n;
    return -((7 + Ge(e, 0, s).getUTCDay() - t) % 7) + s - 1;
  }
  function Ee(e, t, n, s, i) {
    var r,
      a,
      o = 1 + 7 * (t - 1) + ((7 + n - s) % 7) + Ve(e, s, i);
    return (
      (a =
        o <= 0
          ? De((r = e - 1)) + o
          : o > De(e)
          ? ((r = e + 1), o - De(e))
          : ((r = e), o)),
      { year: r, dayOfYear: a }
    );
  }
  function Ie(e, t, n) {
    var s,
      i,
      r = Ve(e.year(), t, n),
      a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
    return (
      a < 1
        ? (s = a + Ae((i = e.year() - 1), t, n))
        : a > Ae(e.year(), t, n)
        ? ((s = a - Ae(e.year(), t, n)), (i = e.year() + 1))
        : ((i = e.year()), (s = a)),
      { week: s, year: i }
    );
  }
  function Ae(e, t, n) {
    var s = Ve(e, t, n),
      i = Ve(e + 1, t, n);
    return (De(e) - s + i) / 7;
  }
  I("w", ["ww", 2], "wo", "week"),
    I("W", ["WW", 2], "Wo", "isoWeek"),
    H("week", "w"),
    H("isoWeek", "W"),
    L("week", 5),
    L("isoWeek", 5),
    ue("w", B),
    ue("ww", B, z),
    ue("W", B),
    ue("WW", B, z),
    fe(["w", "ww", "W", "WW"], function (e, t, n, s) {
      t[s.substr(0, 1)] = k(e);
    });
  I("d", 0, "do", "day"),
    I("dd", 0, 0, function (e) {
      return this.localeData().weekdaysMin(this, e);
    }),
    I("ddd", 0, 0, function (e) {
      return this.localeData().weekdaysShort(this, e);
    }),
    I("dddd", 0, 0, function (e) {
      return this.localeData().weekdays(this, e);
    }),
    I("e", 0, 0, "weekday"),
    I("E", 0, 0, "isoWeekday"),
    H("day", "d"),
    H("weekday", "e"),
    H("isoWeekday", "E"),
    L("day", 11),
    L("weekday", 11),
    L("isoWeekday", 11),
    ue("d", B),
    ue("e", B),
    ue("E", B),
    ue("dd", function (e, t) {
      return t.weekdaysMinRegex(e);
    }),
    ue("ddd", function (e, t) {
      return t.weekdaysShortRegex(e);
    }),
    ue("dddd", function (e, t) {
      return t.weekdaysRegex(e);
    }),
    fe(["dd", "ddd", "dddd"], function (e, t, n, s) {
      var i = n._locale.weekdaysParse(e, s, n._strict);
      null != i ? (t.d = i) : (g(n).invalidWeekday = e);
    }),
    fe(["d", "e", "E"], function (e, t, n, s) {
      t[s] = k(e);
    });
  var je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
    "_"
  );
  var Ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
  var ze = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  var $e = ae;
  var qe = ae;
  var Je = ae;
  function Be() {
    function e(e, t) {
      return t.length - e.length;
    }
    var t,
      n,
      s,
      i,
      r,
      a = [],
      o = [],
      u = [],
      l = [];
    for (t = 0; t < 7; t++)
      (n = y([2e3, 1]).day(t)),
        (s = this.weekdaysMin(n, "")),
        (i = this.weekdaysShort(n, "")),
        (r = this.weekdays(n, "")),
        a.push(s),
        o.push(i),
        u.push(r),
        l.push(s),
        l.push(i),
        l.push(r);
    for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++)
      (o[t] = de(o[t])), (u[t] = de(u[t])), (l[t] = de(l[t]));
    (this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i")),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i")),
      (this._weekdaysShortStrictRegex = new RegExp(
        "^(" + o.join("|") + ")",
        "i"
      )),
      (this._weekdaysMinStrictRegex = new RegExp(
        "^(" + a.join("|") + ")",
        "i"
      ));
  }
  function Qe() {
    return this.hours() % 12 || 12;
  }
  function Xe(e, t) {
    I(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }
  function Ke(e, t) {
    return t._meridiemParse;
  }
  I("H", ["HH", 2], 0, "hour"),
    I("h", ["hh", 2], 0, Qe),
    I("k", ["kk", 2], 0, function () {
      return this.hours() || 24;
    }),
    I("hmm", 0, 0, function () {
      return "" + Qe.apply(this) + U(this.minutes(), 2);
    }),
    I("hmmss", 0, 0, function () {
      return "" + Qe.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2);
    }),
    I("Hmm", 0, 0, function () {
      return "" + this.hours() + U(this.minutes(), 2);
    }),
    I("Hmmss", 0, 0, function () {
      return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2);
    }),
    Xe("a", !0),
    Xe("A", !1),
    H("hour", "h"),
    L("hour", 13),
    ue("a", Ke),
    ue("A", Ke),
    ue("H", B),
    ue("h", B),
    ue("k", B),
    ue("HH", B, z),
    ue("hh", B, z),
    ue("kk", B, z),
    ue("hmm", Q),
    ue("hmmss", X),
    ue("Hmm", Q),
    ue("Hmmss", X),
    ce(["H", "HH"], ge),
    ce(["k", "kk"], function (e, t, n) {
      var s = k(e);
      t[ge] = 24 === s ? 0 : s;
    }),
    ce(["a", "A"], function (e, t, n) {
      (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
    }),
    ce(["h", "hh"], function (e, t, n) {
      (t[ge] = k(e)), (g(n).bigHour = !0);
    }),
    ce("hmm", function (e, t, n) {
      var s = e.length - 2;
      (t[ge] = k(e.substr(0, s))),
        (t[pe] = k(e.substr(s))),
        (g(n).bigHour = !0);
    }),
    ce("hmmss", function (e, t, n) {
      var s = e.length - 4,
        i = e.length - 2;
      (t[ge] = k(e.substr(0, s))),
        (t[pe] = k(e.substr(s, 2))),
        (t[ve] = k(e.substr(i))),
        (g(n).bigHour = !0);
    }),
    ce("Hmm", function (e, t, n) {
      var s = e.length - 2;
      (t[ge] = k(e.substr(0, s))), (t[pe] = k(e.substr(s)));
    }),
    ce("Hmmss", function (e, t, n) {
      var s = e.length - 4,
        i = e.length - 2;
      (t[ge] = k(e.substr(0, s))),
        (t[pe] = k(e.substr(s, 2))),
        (t[ve] = k(e.substr(i)));
    });
  var et,
    tt = Te("Hours", !0),
    nt = {
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L",
      },
      longDateFormat: {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      },
      invalidDate: "Invalid date",
      ordinal: "%d",
      dayOfMonthOrdinalParse: /\d{1,2}/,
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years",
      },
      months: He,
      monthsShort: Re,
      week: { dow: 0, doy: 6 },
      weekdays: je,
      weekdaysMin: ze,
      weekdaysShort: Ze,
      meridiemParse: /[ap]\.?m?\.?/i,
    },
    st = {},
    it = {};
  function rt(e) {
    return e ? e.toLowerCase().replace("_", "-") : e;
  }
  function at(e) {
    var t = null;
    if (!st[e] && "undefined" != typeof module && module && module.exports)
      try {
        (t = et._abbr), require("./locale/" + e), ot(t);
      } catch (e) {}
    return st[e];
  }
  function ot(e, t) {
    var n;
    return (
      e &&
        ((n = l(t) ? lt(e) : ut(e, t))
          ? (et = n)
          : "undefined" != typeof console &&
            console.warn &&
            console.warn(
              "Locale " + e + " not found. Did you forget to load it?"
            )),
      et._abbr
    );
  }
  function ut(e, t) {
    if (null === t) return delete st[e], null;
    var n,
      s = nt;
    if (((t.abbr = e), null != st[e]))
      T(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ),
        (s = st[e]._config);
    else if (null != t.parentLocale)
      if (null != st[t.parentLocale]) s = st[t.parentLocale]._config;
      else {
        if (null == (n = at(t.parentLocale)))
          return (
            it[t.parentLocale] || (it[t.parentLocale] = []),
            it[t.parentLocale].push({ name: e, config: t }),
            null
          );
        s = n._config;
      }
    return (
      (st[e] = new P(b(s, t))),
      it[e] &&
        it[e].forEach(function (e) {
          ut(e.name, e.config);
        }),
      ot(e),
      st[e]
    );
  }
  function lt(e) {
    var t;
    if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
      return et;
    if (!o(e)) {
      if ((t = at(e))) return t;
      e = [e];
    }
    return (function (e) {
      for (var t, n, s, i, r = 0; r < e.length; ) {
        for (
          t = (i = rt(e[r]).split("-")).length,
            n = (n = rt(e[r + 1])) ? n.split("-") : null;
          0 < t;

        ) {
          if ((s = at(i.slice(0, t).join("-")))) return s;
          if (n && n.length >= t && a(i, n, !0) >= t - 1) break;
          t--;
        }
        r++;
      }
      return et;
    })(e);
  }
  function dt(e) {
    var t,
      n = e._a;
    return (
      n &&
        -2 === g(e).overflow &&
        ((t =
          n[_e] < 0 || 11 < n[_e]
            ? _e
            : n[ye] < 1 || n[ye] > Pe(n[me], n[_e])
            ? ye
            : n[ge] < 0 ||
              24 < n[ge] ||
              (24 === n[ge] && (0 !== n[pe] || 0 !== n[ve] || 0 !== n[we]))
            ? ge
            : n[pe] < 0 || 59 < n[pe]
            ? pe
            : n[ve] < 0 || 59 < n[ve]
            ? ve
            : n[we] < 0 || 999 < n[we]
            ? we
            : -1),
        g(e)._overflowDayOfYear && (t < me || ye < t) && (t = ye),
        g(e)._overflowWeeks && -1 === t && (t = Me),
        g(e)._overflowWeekday && -1 === t && (t = Se),
        (g(e).overflow = t)),
      e
    );
  }
  function ht(e, t, n) {
    return null != e ? e : null != t ? t : n;
  }
  function ct(e) {
    var t,
      n,
      s,
      i,
      r,
      a = [];
    if (!e._d) {
      var o, u;
      for (
        o = e,
          u = new Date(c.now()),
          s = o._useUTC
            ? [u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()]
            : [u.getFullYear(), u.getMonth(), u.getDate()],
          e._w &&
            null == e._a[ye] &&
            null == e._a[_e] &&
            (function (e) {
              var t, n, s, i, r, a, o, u;
              if (null != (t = e._w).GG || null != t.W || null != t.E)
                (r = 1),
                  (a = 4),
                  (n = ht(t.GG, e._a[me], Ie(Tt(), 1, 4).year)),
                  (s = ht(t.W, 1)),
                  ((i = ht(t.E, 1)) < 1 || 7 < i) && (u = !0);
              else {
                (r = e._locale._week.dow), (a = e._locale._week.doy);
                var l = Ie(Tt(), r, a);
                (n = ht(t.gg, e._a[me], l.year)),
                  (s = ht(t.w, l.week)),
                  null != t.d
                    ? ((i = t.d) < 0 || 6 < i) && (u = !0)
                    : null != t.e
                    ? ((i = t.e + r), (t.e < 0 || 6 < t.e) && (u = !0))
                    : (i = r);
              }
              s < 1 || s > Ae(n, r, a)
                ? (g(e)._overflowWeeks = !0)
                : null != u
                ? (g(e)._overflowWeekday = !0)
                : ((o = Ee(n, s, i, r, a)),
                  (e._a[me] = o.year),
                  (e._dayOfYear = o.dayOfYear));
            })(e),
          null != e._dayOfYear &&
            ((r = ht(e._a[me], s[me])),
            (e._dayOfYear > De(r) || 0 === e._dayOfYear) &&
              (g(e)._overflowDayOfYear = !0),
            (n = Ge(r, 0, e._dayOfYear)),
            (e._a[_e] = n.getUTCMonth()),
            (e._a[ye] = n.getUTCDate())),
          t = 0;
        t < 3 && null == e._a[t];
        ++t
      )
        e._a[t] = a[t] = s[t];
      for (; t < 7; t++)
        e._a[t] = a[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
      24 === e._a[ge] &&
        0 === e._a[pe] &&
        0 === e._a[ve] &&
        0 === e._a[we] &&
        ((e._nextDay = !0), (e._a[ge] = 0)),
        (e._d = (e._useUTC
          ? Ge
          : function (e, t, n, s, i, r, a) {
              var o = new Date(e, t, n, s, i, r, a);
              return (
                e < 100 &&
                  0 <= e &&
                  isFinite(o.getFullYear()) &&
                  o.setFullYear(e),
                o
              );
            }
        ).apply(null, a)),
        (i = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
        null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        e._nextDay && (e._a[ge] = 24),
        e._w &&
          void 0 !== e._w.d &&
          e._w.d !== i &&
          (g(e).weekdayMismatch = !0);
    }
  }
  var ft = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    mt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    _t = /Z|[+-]\d\d(?::?\d\d)?/,
    yt = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/],
    ],
    gt = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/],
    ],
    pt = /^\/?Date\((\-?\d+)/i;
  function vt(e) {
    var t,
      n,
      s,
      i,
      r,
      a,
      o = e._i,
      u = ft.exec(o) || mt.exec(o);
    if (u) {
      for (g(e).iso = !0, t = 0, n = yt.length; t < n; t++)
        if (yt[t][1].exec(u[1])) {
          (i = yt[t][0]), (s = !1 !== yt[t][2]);
          break;
        }
      if (null == i) return void (e._isValid = !1);
      if (u[3]) {
        for (t = 0, n = gt.length; t < n; t++)
          if (gt[t][1].exec(u[3])) {
            r = (u[2] || " ") + gt[t][0];
            break;
          }
        if (null == r) return void (e._isValid = !1);
      }
      if (!s && null != r) return void (e._isValid = !1);
      if (u[4]) {
        if (!_t.exec(u[4])) return void (e._isValid = !1);
        a = "Z";
      }
      (e._f = i + (r || "") + (a || "")), kt(e);
    } else e._isValid = !1;
  }
  var wt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
  function Mt(e, t, n, s, i, r) {
    var a = [
      (function (e) {
        var t = parseInt(e, 10);
        {
          if (t <= 49) return 2e3 + t;
          if (t <= 999) return 1900 + t;
        }
        return t;
      })(e),
      Re.indexOf(t),
      parseInt(n, 10),
      parseInt(s, 10),
      parseInt(i, 10),
    ];
    return r && a.push(parseInt(r, 10)), a;
  }
  var St = {
    UT: 0,
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480,
  };
  function Dt(e) {
    var t,
      n,
      s,
      i = wt.exec(
        e._i
          .replace(/\([^)]*\)|[\n\t]/g, " ")
          .replace(/(\s\s+)/g, " ")
          .replace(/^\s\s*/, "")
          .replace(/\s\s*$/, "")
      );
    if (i) {
      var r = Mt(i[4], i[3], i[2], i[5], i[6], i[7]);
      if (
        ((t = i[1]),
        (n = r),
        (s = e),
        t &&
          Ze.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() &&
          ((g(s).weekdayMismatch = !0), !(s._isValid = !1)))
      )
        return;
      (e._a = r),
        (e._tzm = (function (e, t, n) {
          if (e) return St[e];
          if (t) return 0;
          var s = parseInt(n, 10),
            i = s % 100;
          return ((s - i) / 100) * 60 + i;
        })(i[8], i[9], i[10])),
        (e._d = Ge.apply(null, e._a)),
        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        (g(e).rfc2822 = !0);
    } else e._isValid = !1;
  }
  function kt(e) {
    if (e._f !== c.ISO_8601)
      if (e._f !== c.RFC_2822) {
        (e._a = []), (g(e).empty = !0);
        var t,
          n,
          s,
          i,
          r,
          a,
          o,
          u,
          l = "" + e._i,
          d = l.length,
          h = 0;
        for (s = j(e._f, e._locale).match(N) || [], t = 0; t < s.length; t++)
          (i = s[t]),
            (n = (l.match(le(i, e)) || [])[0]) &&
              (0 < (r = l.substr(0, l.indexOf(n))).length &&
                g(e).unusedInput.push(r),
              (l = l.slice(l.indexOf(n) + n.length)),
              (h += n.length)),
            E[i]
              ? (n ? (g(e).empty = !1) : g(e).unusedTokens.push(i),
                (a = i),
                (u = e),
                null != (o = n) && m(he, a) && he[a](o, u._a, u, a))
              : e._strict && !n && g(e).unusedTokens.push(i);
        (g(e).charsLeftOver = d - h),
          0 < l.length && g(e).unusedInput.push(l),
          e._a[ge] <= 12 &&
            !0 === g(e).bigHour &&
            0 < e._a[ge] &&
            (g(e).bigHour = void 0),
          (g(e).parsedDateParts = e._a.slice(0)),
          (g(e).meridiem = e._meridiem),
          (e._a[ge] = (function (e, t, n) {
            var s;
            if (null == n) return t;
            return null != e.meridiemHour
              ? e.meridiemHour(t, n)
              : (null != e.isPM &&
                  ((s = e.isPM(n)) && t < 12 && (t += 12),
                  s || 12 !== t || (t = 0)),
                t);
          })(e._locale, e._a[ge], e._meridiem)),
          ct(e),
          dt(e);
      } else Dt(e);
    else vt(e);
  }
  function Yt(e) {
    var t,
      n,
      s,
      i,
      r = e._i,
      a = e._f;
    return (
      (e._locale = e._locale || lt(e._l)),
      null === r || (void 0 === a && "" === r)
        ? v({ nullInput: !0 })
        : ("string" == typeof r && (e._i = r = e._locale.preparse(r)),
          S(r)
            ? new M(dt(r))
            : (h(r)
                ? (e._d = r)
                : o(a)
                ? (function (e) {
                    var t, n, s, i, r;
                    if (0 === e._f.length)
                      return (g(e).invalidFormat = !0), (e._d = new Date(NaN));
                    for (i = 0; i < e._f.length; i++)
                      (r = 0),
                        (t = w({}, e)),
                        null != e._useUTC && (t._useUTC = e._useUTC),
                        (t._f = e._f[i]),
                        kt(t),
                        p(t) &&
                          ((r += g(t).charsLeftOver),
                          (r += 10 * g(t).unusedTokens.length),
                          (g(t).score = r),
                          (null == s || r < s) && ((s = r), (n = t)));
                    _(e, n || t);
                  })(e)
                : a
                ? kt(e)
                : l((n = (t = e)._i))
                ? (t._d = new Date(c.now()))
                : h(n)
                ? (t._d = new Date(n.valueOf()))
                : "string" == typeof n
                ? ((s = t),
                  null === (i = pt.exec(s._i))
                    ? (vt(s),
                      !1 === s._isValid &&
                        (delete s._isValid,
                        Dt(s),
                        !1 === s._isValid &&
                          (delete s._isValid, c.createFromInputFallback(s))))
                    : (s._d = new Date(+i[1])))
                : o(n)
                ? ((t._a = f(n.slice(0), function (e) {
                    return parseInt(e, 10);
                  })),
                  ct(t))
                : u(n)
                ? (function (e) {
                    if (!e._d) {
                      var t = C(e._i);
                      (e._a = f(
                        [
                          t.year,
                          t.month,
                          t.day || t.date,
                          t.hour,
                          t.minute,
                          t.second,
                          t.millisecond,
                        ],
                        function (e) {
                          return e && parseInt(e, 10);
                        }
                      )),
                        ct(e);
                    }
                  })(t)
                : d(n)
                ? (t._d = new Date(n))
                : c.createFromInputFallback(t),
              p(e) || (e._d = null),
              e))
    );
  }
  function Ot(e, t, n, s, i) {
    var r,
      a = {};
    return (
      (!0 !== n && !1 !== n) || ((s = n), (n = void 0)),
      ((u(e) &&
        (function (e) {
          if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(e).length;
          var t;
          for (t in e) if (e.hasOwnProperty(t)) return !1;
          return !0;
        })(e)) ||
        (o(e) && 0 === e.length)) &&
        (e = void 0),
      (a._isAMomentObject = !0),
      (a._useUTC = a._isUTC = i),
      (a._l = n),
      (a._i = e),
      (a._f = t),
      (a._strict = s),
      (r = new M(dt(Yt(a))))._nextDay && (r.add(1, "d"), (r._nextDay = void 0)),
      r
    );
  }
  function Tt(e, t, n, s) {
    return Ot(e, t, n, s, !1);
  }
  (c.createFromInputFallback = n(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function (e) {
      e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
    }
  )),
    (c.ISO_8601 = function () {}),
    (c.RFC_2822 = function () {});
  var xt = n(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var e = Tt.apply(null, arguments);
        return this.isValid() && e.isValid() ? (e < this ? this : e) : v();
      }
    ),
    bt = n(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var e = Tt.apply(null, arguments);
        return this.isValid() && e.isValid() ? (this < e ? this : e) : v();
      }
    );
  function Pt(e, t) {
    var n, s;
    if ((1 === t.length && o(t[0]) && (t = t[0]), !t.length)) return Tt();
    for (n = t[0], s = 1; s < t.length; ++s)
      (t[s].isValid() && !t[s][e](n)) || (n = t[s]);
    return n;
  }
  var Wt = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond",
  ];
  function Ht(e) {
    var t = C(e),
      n = t.year || 0,
      s = t.quarter || 0,
      i = t.month || 0,
      r = t.week || t.isoWeek || 0,
      a = t.day || 0,
      o = t.hour || 0,
      u = t.minute || 0,
      l = t.second || 0,
      d = t.millisecond || 0;
    (this._isValid = (function (e) {
      for (var t in e)
        if (-1 === Ye.call(Wt, t) || (null != e[t] && isNaN(e[t]))) return !1;
      for (var n = !1, s = 0; s < Wt.length; ++s)
        if (e[Wt[s]]) {
          if (n) return !1;
          parseFloat(e[Wt[s]]) !== k(e[Wt[s]]) && (n = !0);
        }
      return !0;
    })(t)),
      (this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60),
      (this._days = +a + 7 * r),
      (this._months = +i + 3 * s + 12 * n),
      (this._data = {}),
      (this._locale = lt()),
      this._bubble();
  }
  function Rt(e) {
    return e instanceof Ht;
  }
  function Ct(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
  }
  function Ft(e, n) {
    I(e, 0, 0, function () {
      var e = this.utcOffset(),
        t = "+";
      return (
        e < 0 && ((e = -e), (t = "-")),
        t + U(~~(e / 60), 2) + n + U(~~e % 60, 2)
      );
    });
  }
  Ft("Z", ":"),
    Ft("ZZ", ""),
    ue("Z", re),
    ue("ZZ", re),
    ce(["Z", "ZZ"], function (e, t, n) {
      (n._useUTC = !0), (n._tzm = Ut(re, e));
    });
  var Lt = /([\+\-]|\d\d)/gi;
  function Ut(e, t) {
    var n = (t || "").match(e);
    if (null === n) return null;
    var s = ((n[n.length - 1] || []) + "").match(Lt) || ["-", 0, 0],
      i = 60 * s[1] + k(s[2]);
    return 0 === i ? 0 : "+" === s[0] ? i : -i;
  }
  function Nt(e, t) {
    var n, s;
    return t._isUTC
      ? ((n = t.clone()),
        (s = (S(e) || h(e) ? e.valueOf() : Tt(e).valueOf()) - n.valueOf()),
        n._d.setTime(n._d.valueOf() + s),
        c.updateOffset(n, !1),
        n)
      : Tt(e).local();
  }
  function Gt(e) {
    return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
  }
  function Vt() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }
  c.updateOffset = function () {};
  var Et = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
    It = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function At(e, t) {
    var n,
      s,
      i,
      r = e,
      a = null;
    return (
      Rt(e)
        ? (r = { ms: e._milliseconds, d: e._days, M: e._months })
        : d(e)
        ? ((r = {}), t ? (r[t] = e) : (r.milliseconds = e))
        : (a = Et.exec(e))
        ? ((n = "-" === a[1] ? -1 : 1),
          (r = {
            y: 0,
            d: k(a[ye]) * n,
            h: k(a[ge]) * n,
            m: k(a[pe]) * n,
            s: k(a[ve]) * n,
            ms: k(Ct(1e3 * a[we])) * n,
          }))
        : (a = It.exec(e))
        ? ((n = "-" === a[1] ? -1 : 1),
          (r = {
            y: jt(a[2], n),
            M: jt(a[3], n),
            w: jt(a[4], n),
            d: jt(a[5], n),
            h: jt(a[6], n),
            m: jt(a[7], n),
            s: jt(a[8], n),
          }))
        : null == r
        ? (r = {})
        : "object" == typeof r &&
          ("from" in r || "to" in r) &&
          ((i = (function (e, t) {
            var n;
            if (!e.isValid() || !t.isValid())
              return { milliseconds: 0, months: 0 };
            (t = Nt(t, e)),
              e.isBefore(t)
                ? (n = Zt(e, t))
                : (((n = Zt(t, e)).milliseconds = -n.milliseconds),
                  (n.months = -n.months));
            return n;
          })(Tt(r.from), Tt(r.to))),
          ((r = {}).ms = i.milliseconds),
          (r.M = i.months)),
      (s = new Ht(r)),
      Rt(e) && m(e, "_locale") && (s._locale = e._locale),
      s
    );
  }
  function jt(e, t) {
    var n = e && parseFloat(e.replace(",", "."));
    return (isNaN(n) ? 0 : n) * t;
  }
  function Zt(e, t) {
    var n = { milliseconds: 0, months: 0 };
    return (
      (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
      e.clone().add(n.months, "M").isAfter(t) && --n.months,
      (n.milliseconds = +t - +e.clone().add(n.months, "M")),
      n
    );
  }
  function zt(s, i) {
    return function (e, t) {
      var n;
      return (
        null === t ||
          isNaN(+t) ||
          (T(
            i,
            "moment()." +
              i +
              "(period, number) is deprecated. Please use moment()." +
              i +
              "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          ),
          (n = e),
          (e = t),
          (t = n)),
        $t(this, At((e = "string" == typeof e ? +e : e), t), s),
        this
      );
    };
  }
  function $t(e, t, n, s) {
    var i = t._milliseconds,
      r = Ct(t._days),
      a = Ct(t._months);
    e.isValid() &&
      ((s = null == s || s),
      a && Ce(e, xe(e, "Month") + a * n),
      r && be(e, "Date", xe(e, "Date") + r * n),
      i && e._d.setTime(e._d.valueOf() + i * n),
      s && c.updateOffset(e, r || a));
  }
  (At.fn = Ht.prototype),
    (At.invalid = function () {
      return At(NaN);
    });
  var qt = zt(1, "add"),
    Jt = zt(-1, "subtract");
  function Bt(e, t) {
    var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
      s = e.clone().add(n, "months");
    return (
      -(
        n +
        (t - s < 0
          ? (t - s) / (s - e.clone().add(n - 1, "months"))
          : (t - s) / (e.clone().add(n + 1, "months") - s))
      ) || 0
    );
  }
  function Qt(e) {
    var t;
    return void 0 === e
      ? this._locale._abbr
      : (null != (t = lt(e)) && (this._locale = t), this);
  }
  (c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
    (c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
  var Xt = n(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (e) {
      return void 0 === e ? this.localeData() : this.locale(e);
    }
  );
  function Kt() {
    return this._locale;
  }
  function en(e, t) {
    I(0, [e, e.length], 0, t);
  }
  function tn(e, t, n, s, i) {
    var r;
    return null == e
      ? Ie(this, s, i).year
      : ((r = Ae(e, s, i)) < t && (t = r),
        function (e, t, n, s, i) {
          var r = Ee(e, t, n, s, i),
            a = Ge(r.year, 0, r.dayOfYear);
          return (
            this.year(a.getUTCFullYear()),
            this.month(a.getUTCMonth()),
            this.date(a.getUTCDate()),
            this
          );
        }.call(this, e, t, n, s, i));
  }
  I(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }),
    I(0, ["GG", 2], 0, function () {
      return this.isoWeekYear() % 100;
    }),
    en("gggg", "weekYear"),
    en("ggggg", "weekYear"),
    en("GGGG", "isoWeekYear"),
    en("GGGGG", "isoWeekYear"),
    H("weekYear", "gg"),
    H("isoWeekYear", "GG"),
    L("weekYear", 1),
    L("isoWeekYear", 1),
    ue("G", se),
    ue("g", se),
    ue("GG", B, z),
    ue("gg", B, z),
    ue("GGGG", ee, q),
    ue("gggg", ee, q),
    ue("GGGGG", te, J),
    ue("ggggg", te, J),
    fe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) {
      t[s.substr(0, 2)] = k(e);
    }),
    fe(["gg", "GG"], function (e, t, n, s) {
      t[s] = c.parseTwoDigitYear(e);
    }),
    I("Q", 0, "Qo", "quarter"),
    H("quarter", "Q"),
    L("quarter", 7),
    ue("Q", Z),
    ce("Q", function (e, t) {
      t[_e] = 3 * (k(e) - 1);
    }),
    I("D", ["DD", 2], "Do", "date"),
    H("date", "D"),
    L("date", 9),
    ue("D", B),
    ue("DD", B, z),
    ue("Do", function (e, t) {
      return e
        ? t._dayOfMonthOrdinalParse || t._ordinalParse
        : t._dayOfMonthOrdinalParseLenient;
    }),
    ce(["D", "DD"], ye),
    ce("Do", function (e, t) {
      t[ye] = k(e.match(B)[0]);
    });
  var nn = Te("Date", !0);
  I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    H("dayOfYear", "DDD"),
    L("dayOfYear", 4),
    ue("DDD", K),
    ue("DDDD", $),
    ce(["DDD", "DDDD"], function (e, t, n) {
      n._dayOfYear = k(e);
    }),
    I("m", ["mm", 2], 0, "minute"),
    H("minute", "m"),
    L("minute", 14),
    ue("m", B),
    ue("mm", B, z),
    ce(["m", "mm"], pe);
  var sn = Te("Minutes", !1);
  I("s", ["ss", 2], 0, "second"),
    H("second", "s"),
    L("second", 15),
    ue("s", B),
    ue("ss", B, z),
    ce(["s", "ss"], ve);
  var rn,
    an = Te("Seconds", !1);
  for (
    I("S", 0, 0, function () {
      return ~~(this.millisecond() / 100);
    }),
      I(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10);
      }),
      I(0, ["SSS", 3], 0, "millisecond"),
      I(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond();
      }),
      I(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond();
      }),
      I(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond();
      }),
      I(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond();
      }),
      I(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond();
      }),
      I(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond();
      }),
      H("millisecond", "ms"),
      L("millisecond", 16),
      ue("S", K, Z),
      ue("SS", K, z),
      ue("SSS", K, $),
      rn = "SSSS";
    rn.length <= 9;
    rn += "S"
  )
    ue(rn, ne);
  function on(e, t) {
    t[we] = k(1e3 * ("0." + e));
  }
  for (rn = "S"; rn.length <= 9; rn += "S") ce(rn, on);
  var un = Te("Milliseconds", !1);
  I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");
  var ln = M.prototype;
  function dn(e) {
    return e;
  }
  (ln.add = qt),
    (ln.calendar = function (e, t) {
      var n = e || Tt(),
        s = Nt(n, this).startOf("day"),
        i = c.calendarFormat(this, s) || "sameElse",
        r = t && (x(t[i]) ? t[i].call(this, n) : t[i]);
      return this.format(r || this.localeData().calendar(i, this, Tt(n)));
    }),
    (ln.clone = function () {
      return new M(this);
    }),
    (ln.diff = function (e, t, n) {
      var s, i, r;
      if (!this.isValid()) return NaN;
      if (!(s = Nt(e, this)).isValid()) return NaN;
      switch (((i = 6e4 * (s.utcOffset() - this.utcOffset())), (t = R(t)))) {
        case "year":
          r = Bt(this, s) / 12;
          break;
        case "month":
          r = Bt(this, s);
          break;
        case "quarter":
          r = Bt(this, s) / 3;
          break;
        case "second":
          r = (this - s) / 1e3;
          break;
        case "minute":
          r = (this - s) / 6e4;
          break;
        case "hour":
          r = (this - s) / 36e5;
          break;
        case "day":
          r = (this - s - i) / 864e5;
          break;
        case "week":
          r = (this - s - i) / 6048e5;
          break;
        default:
          r = this - s;
      }
      return n ? r : D(r);
    }),
    (ln.endOf = function (e) {
      return void 0 === (e = R(e)) || "millisecond" === e
        ? this
        : ("date" === e && (e = "day"),
          this.startOf(e)
            .add(1, "isoWeek" === e ? "week" : e)
            .subtract(1, "ms"));
    }),
    (ln.format = function (e) {
      e || (e = this.isUtc() ? c.defaultFormatUtc : c.defaultFormat);
      var t = A(this, e);
      return this.localeData().postformat(t);
    }),
    (ln.from = function (e, t) {
      return this.isValid() && ((S(e) && e.isValid()) || Tt(e).isValid())
        ? At({ to: this, from: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }),
    (ln.fromNow = function (e) {
      return this.from(Tt(), e);
    }),
    (ln.to = function (e, t) {
      return this.isValid() && ((S(e) && e.isValid()) || Tt(e).isValid())
        ? At({ from: this, to: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }),
    (ln.toNow = function (e) {
      return this.to(Tt(), e);
    }),
    (ln.get = function (e) {
      return x(this[(e = R(e))]) ? this[e]() : this;
    }),
    (ln.invalidAt = function () {
      return g(this).overflow;
    }),
    (ln.isAfter = function (e, t) {
      var n = S(e) ? e : Tt(e);
      return (
        !(!this.isValid() || !n.isValid()) &&
        ("millisecond" === (t = R(t) || "millisecond")
          ? this.valueOf() > n.valueOf()
          : n.valueOf() < this.clone().startOf(t).valueOf())
      );
    }),
    (ln.isBefore = function (e, t) {
      var n = S(e) ? e : Tt(e);
      return (
        !(!this.isValid() || !n.isValid()) &&
        ("millisecond" === (t = R(t) || "millisecond")
          ? this.valueOf() < n.valueOf()
          : this.clone().endOf(t).valueOf() < n.valueOf())
      );
    }),
    (ln.isBetween = function (e, t, n, s) {
      var i = S(e) ? e : Tt(e),
        r = S(t) ? t : Tt(t);
      return (
        !!(this.isValid() && i.isValid() && r.isValid()) &&
        ("(" === (s = s || "()")[0]
          ? this.isAfter(i, n)
          : !this.isBefore(i, n)) &&
        (")" === s[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
      );
    }),
    (ln.isSame = function (e, t) {
      var n,
        s = S(e) ? e : Tt(e);
      return (
        !(!this.isValid() || !s.isValid()) &&
        ("millisecond" === (t = R(t) || "millisecond")
          ? this.valueOf() === s.valueOf()
          : ((n = s.valueOf()),
            this.clone().startOf(t).valueOf() <= n &&
              n <= this.clone().endOf(t).valueOf()))
      );
    }),
    (ln.isSameOrAfter = function (e, t) {
      return this.isSame(e, t) || this.isAfter(e, t);
    }),
    (ln.isSameOrBefore = function (e, t) {
      return this.isSame(e, t) || this.isBefore(e, t);
    }),
    (ln.isValid = function () {
      return p(this);
    }),
    (ln.lang = Xt),
    (ln.locale = Qt),
    (ln.localeData = Kt),
    (ln.max = bt),
    (ln.min = xt),
    (ln.parsingFlags = function () {
      return _({}, g(this));
    }),
    (ln.set = function (e, t) {
      if ("object" == typeof e)
        for (
          var n = (function (e) {
              var t = [];
              for (var n in e) t.push({ unit: n, priority: F[n] });
              return (
                t.sort(function (e, t) {
                  return e.priority - t.priority;
                }),
                t
              );
            })((e = C(e))),
            s = 0;
          s < n.length;
          s++
        )
          this[n[s].unit](e[n[s].unit]);
      else if (x(this[(e = R(e))])) return this[e](t);
      return this;
    }),
    (ln.startOf = function (e) {
      switch ((e = R(e))) {
        case "year":
          this.month(0);
        case "quarter":
        case "month":
          this.date(1);
        case "week":
        case "isoWeek":
        case "day":
        case "date":
          this.hours(0);
        case "hour":
          this.minutes(0);
        case "minute":
          this.seconds(0);
        case "second":
          this.milliseconds(0);
      }
      return (
        "week" === e && this.weekday(0),
        "isoWeek" === e && this.isoWeekday(1),
        "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
        this
      );
    }),
    (ln.subtract = Jt),
    (ln.toArray = function () {
      var e = this;
      return [
        e.year(),
        e.month(),
        e.date(),
        e.hour(),
        e.minute(),
        e.second(),
        e.millisecond(),
      ];
    }),
    (ln.toObject = function () {
      var e = this;
      return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds(),
      };
    }),
    (ln.toDate = function () {
      return new Date(this.valueOf());
    }),
    (ln.toISOString = function (e) {
      if (!this.isValid()) return null;
      var t = !0 !== e,
        n = t ? this.clone().utc() : this;
      return n.year() < 0 || 9999 < n.year()
        ? A(
            n,
            t
              ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
              : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
          )
        : x(Date.prototype.toISOString)
        ? t
          ? this.toDate().toISOString()
          : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
              .toISOString()
              .replace("Z", A(n, "Z"))
        : A(
            n,
            t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
    }),
    (ln.inspect = function () {
      if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
      var e = "moment",
        t = "";
      this.isLocal() ||
        ((e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
        (t = "Z"));
      var n = "[" + e + '("]',
        s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        i = t + '[")]';
      return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i);
    }),
    (ln.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    }),
    (ln.toString = function () {
      return this.clone()
        .locale("en")
        .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }),
    (ln.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }),
    (ln.valueOf = function () {
      return this._d.valueOf() - 6e4 * (this._offset || 0);
    }),
    (ln.creationData = function () {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
      };
    }),
    (ln.year = Oe),
    (ln.isLeapYear = function () {
      return ke(this.year());
    }),
    (ln.weekYear = function (e) {
      return tn.call(
        this,
        e,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }),
    (ln.isoWeekYear = function (e) {
      return tn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    }),
    (ln.quarter = ln.quarters = function (e) {
      return null == e
        ? Math.ceil((this.month() + 1) / 3)
        : this.month(3 * (e - 1) + (this.month() % 3));
    }),
    (ln.month = Fe),
    (ln.daysInMonth = function () {
      return Pe(this.year(), this.month());
    }),
    (ln.week = ln.weeks = function (e) {
      var t = this.localeData().week(this);
      return null == e ? t : this.add(7 * (e - t), "d");
    }),
    (ln.isoWeek = ln.isoWeeks = function (e) {
      var t = Ie(this, 1, 4).week;
      return null == e ? t : this.add(7 * (e - t), "d");
    }),
    (ln.weeksInYear = function () {
      var e = this.localeData()._week;
      return Ae(this.year(), e.dow, e.doy);
    }),
    (ln.isoWeeksInYear = function () {
      return Ae(this.year(), 1, 4);
    }),
    (ln.date = nn),
    (ln.day = ln.days = function (e) {
      if (!this.isValid()) return null != e ? this : NaN;
      var t,
        n,
        s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != e
        ? ((t = e),
          (n = this.localeData()),
          (e =
            "string" != typeof t
              ? t
              : isNaN(t)
              ? "number" == typeof (t = n.weekdaysParse(t))
                ? t
                : null
              : parseInt(t, 10)),
          this.add(e - s, "d"))
        : s;
    }),
    (ln.weekday = function (e) {
      if (!this.isValid()) return null != e ? this : NaN;
      var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == e ? t : this.add(e - t, "d");
    }),
    (ln.isoWeekday = function (e) {
      if (!this.isValid()) return null != e ? this : NaN;
      if (null == e) return this.day() || 7;
      var t,
        n,
        s =
          ((t = e),
          (n = this.localeData()),
          "string" == typeof t
            ? n.weekdaysParse(t) % 7 || 7
            : isNaN(t)
            ? null
            : t);
      return this.day(this.day() % 7 ? s : s - 7);
    }),
    (ln.dayOfYear = function (e) {
      var t =
        Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
      return null == e ? t : this.add(e - t, "d");
    }),
    (ln.hour = ln.hours = tt),
    (ln.minute = ln.minutes = sn),
    (ln.second = ln.seconds = an),
    (ln.millisecond = ln.milliseconds = un),
    (ln.utcOffset = function (e, t, n) {
      var s,
        i = this._offset || 0;
      if (!this.isValid()) return null != e ? this : NaN;
      if (null == e) return this._isUTC ? i : Gt(this);
      if ("string" == typeof e) {
        if (null === (e = Ut(re, e))) return this;
      } else Math.abs(e) < 16 && !n && (e *= 60);
      return (
        !this._isUTC && t && (s = Gt(this)),
        (this._offset = e),
        (this._isUTC = !0),
        null != s && this.add(s, "m"),
        i !== e &&
          (!t || this._changeInProgress
            ? $t(this, At(e - i, "m"), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              c.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this
      );
    }),
    (ln.utc = function (e) {
      return this.utcOffset(0, e);
    }),
    (ln.local = function (e) {
      return (
        this._isUTC &&
          (this.utcOffset(0, e),
          (this._isUTC = !1),
          e && this.subtract(Gt(this), "m")),
        this
      );
    }),
    (ln.parseZone = function () {
      if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
      else if ("string" == typeof this._i) {
        var e = Ut(ie, this._i);
        null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
      }
      return this;
    }),
    (ln.hasAlignedHourOffset = function (e) {
      return (
        !!this.isValid() &&
        ((e = e ? Tt(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
      );
    }),
    (ln.isDST = function () {
      return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
      );
    }),
    (ln.isLocal = function () {
      return !!this.isValid() && !this._isUTC;
    }),
    (ln.isUtcOffset = function () {
      return !!this.isValid() && this._isUTC;
    }),
    (ln.isUtc = Vt),
    (ln.isUTC = Vt),
    (ln.zoneAbbr = function () {
      return this._isUTC ? "UTC" : "";
    }),
    (ln.zoneName = function () {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }),
    (ln.dates = n("dates accessor is deprecated. Use date instead.", nn)),
    (ln.months = n("months accessor is deprecated. Use month instead", Fe)),
    (ln.years = n("years accessor is deprecated. Use year instead", Oe)),
    (ln.zone = n(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      function (e, t) {
        return null != e
          ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
          : -this.utcOffset();
      }
    )),
    (ln.isDSTShifted = n(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      function () {
        if (!l(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if ((w(e, this), (e = Yt(e))._a)) {
          var t = e._isUTC ? y(e._a) : Tt(e._a);
          this._isDSTShifted = this.isValid() && 0 < a(e._a, t.toArray());
        } else this._isDSTShifted = !1;
        return this._isDSTShifted;
      }
    ));
  var hn = P.prototype;
  function cn(e, t, n, s) {
    var i = lt(),
      r = y().set(s, t);
    return i[n](r, e);
  }
  function fn(e, t, n) {
    if ((d(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
      return cn(e, t, n, "month");
    var s,
      i = [];
    for (s = 0; s < 12; s++) i[s] = cn(e, s, n, "month");
    return i;
  }
  function mn(e, t, n, s) {
    t =
      ("boolean" == typeof e
        ? d(t) && ((n = t), (t = void 0))
        : ((t = e), (e = !1), d((n = t)) && ((n = t), (t = void 0))),
      t || "");
    var i,
      r = lt(),
      a = e ? r._week.dow : 0;
    if (null != n) return cn(t, (n + a) % 7, s, "day");
    var o = [];
    for (i = 0; i < 7; i++) o[i] = cn(t, (i + a) % 7, s, "day");
    return o;
  }
  (hn.calendar = function (e, t, n) {
    var s = this._calendar[e] || this._calendar.sameElse;
    return x(s) ? s.call(t, n) : s;
  }),
    (hn.longDateFormat = function (e) {
      var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];
      return t || !n
        ? t
        : ((this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (
            e
          ) {
            return e.slice(1);
          })),
          this._longDateFormat[e]);
    }),
    (hn.invalidDate = function () {
      return this._invalidDate;
    }),
    (hn.ordinal = function (e) {
      return this._ordinal.replace("%d", e);
    }),
    (hn.preparse = dn),
    (hn.postformat = dn),
    (hn.relativeTime = function (e, t, n, s) {
      var i = this._relativeTime[n];
      return x(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
    }),
    (hn.pastFuture = function (e, t) {
      var n = this._relativeTime[0 < e ? "future" : "past"];
      return x(n) ? n(t) : n.replace(/%s/i, t);
    }),
    (hn.set = function (e) {
      var t, n;
      for (n in e) x((t = e[n])) ? (this[n] = t) : (this["_" + n] = t);
      (this._config = e),
        (this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            "|" +
            /\d{1,2}/.source
        ));
    }),
    (hn.months = function (e, t) {
      return e
        ? o(this._months)
          ? this._months[e.month()]
          : this._months[
              (this._months.isFormat || We).test(t) ? "format" : "standalone"
            ][e.month()]
        : o(this._months)
        ? this._months
        : this._months.standalone;
    }),
    (hn.monthsShort = function (e, t) {
      return e
        ? o(this._monthsShort)
          ? this._monthsShort[e.month()]
          : this._monthsShort[We.test(t) ? "format" : "standalone"][e.month()]
        : o(this._monthsShort)
        ? this._monthsShort
        : this._monthsShort.standalone;
    }),
    (hn.monthsParse = function (e, t, n) {
      var s, i, r;
      if (this._monthsParseExact)
        return function (e, t, n) {
          var s,
            i,
            r,
            a = e.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                s = 0;
              s < 12;
              ++s
            )
              (r = y([2e3, s])),
                (this._shortMonthsParse[s] = this.monthsShort(
                  r,
                  ""
                ).toLocaleLowerCase()),
                (this._longMonthsParse[s] = this.months(
                  r,
                  ""
                ).toLocaleLowerCase());
          return n
            ? "MMM" === t
              ? -1 !== (i = Ye.call(this._shortMonthsParse, a))
                ? i
                : null
              : -1 !== (i = Ye.call(this._longMonthsParse, a))
              ? i
              : null
            : "MMM" === t
            ? -1 !== (i = Ye.call(this._shortMonthsParse, a))
              ? i
              : -1 !== (i = Ye.call(this._longMonthsParse, a))
              ? i
              : null
            : -1 !== (i = Ye.call(this._longMonthsParse, a))
            ? i
            : -1 !== (i = Ye.call(this._shortMonthsParse, a))
            ? i
            : null;
        }.call(this, e, t, n);
      for (
        this._monthsParse ||
          ((this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])),
          s = 0;
        s < 12;
        s++
      ) {
        if (
          ((i = y([2e3, s])),
          n &&
            !this._longMonthsParse[s] &&
            ((this._longMonthsParse[s] = new RegExp(
              "^" + this.months(i, "").replace(".", "") + "$",
              "i"
            )),
            (this._shortMonthsParse[s] = new RegExp(
              "^" + this.monthsShort(i, "").replace(".", "") + "$",
              "i"
            ))),
          n ||
            this._monthsParse[s] ||
            ((r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, "")),
            (this._monthsParse[s] = new RegExp(r.replace(".", ""), "i"))),
          n && "MMMM" === t && this._longMonthsParse[s].test(e))
        )
          return s;
        if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
        if (!n && this._monthsParse[s].test(e)) return s;
      }
    }),
    (hn.monthsRegex = function (e) {
      return this._monthsParseExact
        ? (m(this, "_monthsRegex") || Ne.call(this),
          e ? this._monthsStrictRegex : this._monthsRegex)
        : (m(this, "_monthsRegex") || (this._monthsRegex = Ue),
          this._monthsStrictRegex && e
            ? this._monthsStrictRegex
            : this._monthsRegex);
    }),
    (hn.monthsShortRegex = function (e) {
      return this._monthsParseExact
        ? (m(this, "_monthsRegex") || Ne.call(this),
          e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Le),
          this._monthsShortStrictRegex && e
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex);
    }),
    (hn.week = function (e) {
      return Ie(e, this._week.dow, this._week.doy).week;
    }),
    (hn.firstDayOfYear = function () {
      return this._week.doy;
    }),
    (hn.firstDayOfWeek = function () {
      return this._week.dow;
    }),
    (hn.weekdays = function (e, t) {
      return e
        ? o(this._weekdays)
          ? this._weekdays[e.day()]
          : this._weekdays[
              this._weekdays.isFormat.test(t) ? "format" : "standalone"
            ][e.day()]
        : o(this._weekdays)
        ? this._weekdays
        : this._weekdays.standalone;
    }),
    (hn.weekdaysMin = function (e) {
      return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
    }),
    (hn.weekdaysShort = function (e) {
      return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
    }),
    (hn.weekdaysParse = function (e, t, n) {
      var s, i, r;
      if (this._weekdaysParseExact)
        return function (e, t, n) {
          var s,
            i,
            r,
            a = e.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                s = 0;
              s < 7;
              ++s
            )
              (r = y([2e3, 1]).day(s)),
                (this._minWeekdaysParse[s] = this.weekdaysMin(
                  r,
                  ""
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[s] = this.weekdaysShort(
                  r,
                  ""
                ).toLocaleLowerCase()),
                (this._weekdaysParse[s] = this.weekdays(
                  r,
                  ""
                ).toLocaleLowerCase());
          return n
            ? "dddd" === t
              ? -1 !== (i = Ye.call(this._weekdaysParse, a))
                ? i
                : null
              : "ddd" === t
              ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a))
                ? i
                : null
              : -1 !== (i = Ye.call(this._minWeekdaysParse, a))
              ? i
              : null
            : "dddd" === t
            ? -1 !== (i = Ye.call(this._weekdaysParse, a))
              ? i
              : -1 !== (i = Ye.call(this._shortWeekdaysParse, a))
              ? i
              : -1 !== (i = Ye.call(this._minWeekdaysParse, a))
              ? i
              : null
            : "ddd" === t
            ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a))
              ? i
              : -1 !== (i = Ye.call(this._weekdaysParse, a))
              ? i
              : -1 !== (i = Ye.call(this._minWeekdaysParse, a))
              ? i
              : null
            : -1 !== (i = Ye.call(this._minWeekdaysParse, a))
            ? i
            : -1 !== (i = Ye.call(this._weekdaysParse, a))
            ? i
            : -1 !== (i = Ye.call(this._shortWeekdaysParse, a))
            ? i
            : null;
        }.call(this, e, t, n);
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          s = 0;
        s < 7;
        s++
      ) {
        if (
          ((i = y([2e3, 1]).day(s)),
          n &&
            !this._fullWeekdaysParse[s] &&
            ((this._fullWeekdaysParse[s] = new RegExp(
              "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
              "i"
            )),
            (this._shortWeekdaysParse[s] = new RegExp(
              "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
              "i"
            )),
            (this._minWeekdaysParse[s] = new RegExp(
              "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
              "i"
            ))),
          this._weekdaysParse[s] ||
            ((r =
              "^" +
              this.weekdays(i, "") +
              "|^" +
              this.weekdaysShort(i, "") +
              "|^" +
              this.weekdaysMin(i, "")),
            (this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i"))),
          n && "dddd" === t && this._fullWeekdaysParse[s].test(e))
        )
          return s;
        if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
        if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
        if (!n && this._weekdaysParse[s].test(e)) return s;
      }
    }),
    (hn.weekdaysRegex = function (e) {
      return this._weekdaysParseExact
        ? (m(this, "_weekdaysRegex") || Be.call(this),
          e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = $e),
          this._weekdaysStrictRegex && e
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex);
    }),
    (hn.weekdaysShortRegex = function (e) {
      return this._weekdaysParseExact
        ? (m(this, "_weekdaysRegex") || Be.call(this),
          e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qe),
          this._weekdaysShortStrictRegex && e
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex);
    }),
    (hn.weekdaysMinRegex = function (e) {
      return this._weekdaysParseExact
        ? (m(this, "_weekdaysRegex") || Be.call(this),
          e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Je),
          this._weekdaysMinStrictRegex && e
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex);
    }),
    (hn.isPM = function (e) {
      return "p" === (e + "").toLowerCase().charAt(0);
    }),
    (hn.meridiem = function (e, t, n) {
      return 11 < e ? (n ? "pm" : "PM") : n ? "am" : "AM";
    }),
    ot("en", {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (e) {
        var t = e % 10;
        return (
          e +
          (1 === k((e % 100) / 10)
            ? "th"
            : 1 === t
            ? "st"
            : 2 === t
            ? "nd"
            : 3 === t
            ? "rd"
            : "th")
        );
      },
    }),
    (c.lang = n("moment.lang is deprecated. Use moment.locale instead.", ot)),
    (c.langData = n(
      "moment.langData is deprecated. Use moment.localeData instead.",
      lt
    ));
  var _n = Math.abs;
  function yn(e, t, n, s) {
    var i = At(t, n);
    return (
      (e._milliseconds += s * i._milliseconds),
      (e._days += s * i._days),
      (e._months += s * i._months),
      e._bubble()
    );
  }
  function gn(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function pn(e) {
    return (4800 * e) / 146097;
  }
  function vn(e) {
    return (146097 * e) / 4800;
  }
  function wn(e) {
    return function () {
      return this.as(e);
    };
  }
  var Mn = wn("ms"),
    Sn = wn("s"),
    Dn = wn("m"),
    kn = wn("h"),
    Yn = wn("d"),
    On = wn("w"),
    Tn = wn("M"),
    xn = wn("y");
  function bn(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  var Pn = bn("milliseconds"),
    Wn = bn("seconds"),
    Hn = bn("minutes"),
    Rn = bn("hours"),
    Cn = bn("days"),
    Fn = bn("months"),
    Ln = bn("years");
  var Un = Math.round,
    Nn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };
  var Gn = Math.abs;
  function Vn(e) {
    return (0 < e) - (e < 0) || +e;
  }
  function En() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e,
      t,
      n = Gn(this._milliseconds) / 1e3,
      s = Gn(this._days),
      i = Gn(this._months);
    (t = D((e = D(n / 60)) / 60)), (n %= 60), (e %= 60);
    var r = D(i / 12),
      a = (i %= 12),
      o = s,
      u = t,
      l = e,
      d = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
      h = this.asSeconds();
    if (!h) return "P0D";
    var c = h < 0 ? "-" : "",
      f = Vn(this._months) !== Vn(h) ? "-" : "",
      m = Vn(this._days) !== Vn(h) ? "-" : "",
      _ = Vn(this._milliseconds) !== Vn(h) ? "-" : "";
    return (
      c +
      "P" +
      (r ? f + r + "Y" : "") +
      (a ? f + a + "M" : "") +
      (o ? m + o + "D" : "") +
      (u || l || d ? "T" : "") +
      (u ? _ + u + "H" : "") +
      (l ? _ + l + "M" : "") +
      (d ? _ + d + "S" : "")
    );
  }
  var In = Ht.prototype;
  return (
    (In.isValid = function () {
      return this._isValid;
    }),
    (In.abs = function () {
      var e = this._data;
      return (
        (this._milliseconds = _n(this._milliseconds)),
        (this._days = _n(this._days)),
        (this._months = _n(this._months)),
        (e.milliseconds = _n(e.milliseconds)),
        (e.seconds = _n(e.seconds)),
        (e.minutes = _n(e.minutes)),
        (e.hours = _n(e.hours)),
        (e.months = _n(e.months)),
        (e.years = _n(e.years)),
        this
      );
    }),
    (In.add = function (e, t) {
      return yn(this, e, t, 1);
    }),
    (In.subtract = function (e, t) {
      return yn(this, e, t, -1);
    }),
    (In.as = function (e) {
      if (!this.isValid()) return NaN;
      var t,
        n,
        s = this._milliseconds;
      if ("month" === (e = R(e)) || "year" === e)
        return (
          (t = this._days + s / 864e5),
          (n = this._months + pn(t)),
          "month" === e ? n : n / 12
        );
      switch (((t = this._days + Math.round(vn(this._months))), e)) {
        case "week":
          return t / 7 + s / 6048e5;
        case "day":
          return t + s / 864e5;
        case "hour":
          return 24 * t + s / 36e5;
        case "minute":
          return 1440 * t + s / 6e4;
        case "second":
          return 86400 * t + s / 1e3;
        case "millisecond":
          return Math.floor(864e5 * t) + s;
        default:
          throw new Error("Unknown unit " + e);
      }
    }),
    (In.asMilliseconds = Mn),
    (In.asSeconds = Sn),
    (In.asMinutes = Dn),
    (In.asHours = kn),
    (In.asDays = Yn),
    (In.asWeeks = On),
    (In.asMonths = Tn),
    (In.asYears = xn),
    (In.valueOf = function () {
      return this.isValid()
        ? this._milliseconds +
            864e5 * this._days +
            (this._months % 12) * 2592e6 +
            31536e6 * k(this._months / 12)
        : NaN;
    }),
    (In._bubble = function () {
      var e,
        t,
        n,
        s,
        i,
        r = this._milliseconds,
        a = this._days,
        o = this._months,
        u = this._data;
      return (
        (0 <= r && 0 <= a && 0 <= o) ||
          (r <= 0 && a <= 0 && o <= 0) ||
          ((r += 864e5 * gn(vn(o) + a)), (o = a = 0)),
        (u.milliseconds = r % 1e3),
        (e = D(r / 1e3)),
        (u.seconds = e % 60),
        (t = D(e / 60)),
        (u.minutes = t % 60),
        (n = D(t / 60)),
        (u.hours = n % 24),
        (o += i = D(pn((a += D(n / 24))))),
        (a -= gn(vn(i))),
        (s = D(o / 12)),
        (o %= 12),
        (u.days = a),
        (u.months = o),
        (u.years = s),
        this
      );
    }),
    (In.clone = function () {
      return At(this);
    }),
    (In.get = function (e) {
      return (e = R(e)), this.isValid() ? this[e + "s"]() : NaN;
    }),
    (In.milliseconds = Pn),
    (In.seconds = Wn),
    (In.minutes = Hn),
    (In.hours = Rn),
    (In.days = Cn),
    (In.weeks = function () {
      return D(this.days() / 7);
    }),
    (In.months = Fn),
    (In.years = Ln),
    (In.humanize = function (e) {
      if (!this.isValid()) return this.localeData().invalidDate();
      var t,
        n,
        s,
        i,
        r,
        a,
        o,
        u,
        l,
        d,
        h,
        c = this.localeData(),
        f =
          ((n = !e),
          (s = c),
          (i = At((t = this)).abs()),
          (r = Un(i.as("s"))),
          (a = Un(i.as("m"))),
          (o = Un(i.as("h"))),
          (u = Un(i.as("d"))),
          (l = Un(i.as("M"))),
          (d = Un(i.as("y"))),
          ((h = (r <= Nn.ss && ["s", r]) ||
            (r < Nn.s && ["ss", r]) ||
            (a <= 1 && ["m"]) ||
            (a < Nn.m && ["mm", a]) ||
            (o <= 1 && ["h"]) ||
            (o < Nn.h && ["hh", o]) ||
            (u <= 1 && ["d"]) ||
            (u < Nn.d && ["dd", u]) ||
            (l <= 1 && ["M"]) ||
            (l < Nn.M && ["MM", l]) ||
            (d <= 1 && ["y"]) || ["yy", d])[2] = n),
          (h[3] = 0 < +t),
          (h[4] = s),
          function (e, t, n, s, i) {
            return i.relativeTime(t || 1, !!n, e, s);
          }.apply(null, h));
      return e && (f = c.pastFuture(+this, f)), c.postformat(f);
    }),
    (In.toISOString = En),
    (In.toString = En),
    (In.toJSON = En),
    (In.locale = Qt),
    (In.localeData = Kt),
    (In.toIsoString = n(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      En
    )),
    (In.lang = Xt),
    I("X", 0, 0, "unix"),
    I("x", 0, 0, "valueOf"),
    ue("x", se),
    ue("X", /[+-]?\d+(\.\d{1,3})?/),
    ce("X", function (e, t, n) {
      n._d = new Date(1e3 * parseFloat(e, 10));
    }),
    ce("x", function (e, t, n) {
      n._d = new Date(k(e));
    }),
    (c.version = "2.23.0"),
    (e = Tt),
    (c.fn = ln),
    (c.min = function () {
      return Pt("isBefore", [].slice.call(arguments, 0));
    }),
    (c.max = function () {
      return Pt("isAfter", [].slice.call(arguments, 0));
    }),
    (c.now = function () {
      return Date.now ? Date.now() : +new Date();
    }),
    (c.utc = y),
    (c.unix = function (e) {
      return Tt(1e3 * e);
    }),
    (c.months = function (e, t) {
      return fn(e, t, "months");
    }),
    (c.isDate = h),
    (c.locale = ot),
    (c.invalid = v),
    (c.duration = At),
    (c.isMoment = S),
    (c.weekdays = function (e, t, n) {
      return mn(e, t, n, "weekdays");
    }),
    (c.parseZone = function () {
      return Tt.apply(null, arguments).parseZone();
    }),
    (c.localeData = lt),
    (c.isDuration = Rt),
    (c.monthsShort = function (e, t) {
      return fn(e, t, "monthsShort");
    }),
    (c.weekdaysMin = function (e, t, n) {
      return mn(e, t, n, "weekdaysMin");
    }),
    (c.defineLocale = ut),
    (c.updateLocale = function (e, t) {
      if (null != t) {
        var n,
          s,
          i = nt;
        null != (s = at(e)) && (i = s._config),
          ((n = new P((t = b(i, t)))).parentLocale = st[e]),
          (st[e] = n),
          ot(e);
      } else
        null != st[e] &&
          (null != st[e].parentLocale
            ? (st[e] = st[e].parentLocale)
            : null != st[e] && delete st[e]);
      return st[e];
    }),
    (c.locales = function () {
      return s(st);
    }),
    (c.weekdaysShort = function (e, t, n) {
      return mn(e, t, n, "weekdaysShort");
    }),
    (c.normalizeUnits = R),
    (c.relativeTimeRounding = function (e) {
      return void 0 === e ? Un : "function" == typeof e && ((Un = e), !0);
    }),
    (c.relativeTimeThreshold = function (e, t) {
      return (
        void 0 !== Nn[e] &&
        (void 0 === t ? Nn[e] : ((Nn[e] = t), "s" === e && (Nn.ss = t - 1), !0))
      );
    }),
    (c.calendarFormat = function (e, t) {
      var n = e.diff(t, "days", !0);
      return n < -6
        ? "sameElse"
        : n < -1
        ? "lastWeek"
        : n < 0
        ? "lastDay"
        : n < 1
        ? "sameDay"
        : n < 2
        ? "nextDay"
        : n < 7
        ? "nextWeek"
        : "sameElse";
    }),
    (c.prototype = ln),
    (c.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      DATE: "YYYY-MM-DD",
      TIME: "HH:mm",
      TIME_SECONDS: "HH:mm:ss",
      TIME_MS: "HH:mm:ss.SSS",
      WEEK: "GGGG-[W]WW",
      MONTH: "YYYY-MM",
    }),
    c
  );
});
var Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (e) {
    var t = "";
    var n, r, i, s, o, u, a;
    var f = 0;
    e = Base64._utf8_encode(e);
    while (f < e.length) {
      n = e.charCodeAt(f++);
      r = e.charCodeAt(f++);
      i = e.charCodeAt(f++);
      s = n >> 2;
      o = ((n & 3) << 4) | (r >> 4);
      u = ((r & 15) << 2) | (i >> 6);
      a = i & 63;
      if (isNaN(r)) {
        u = a = 64;
      } else if (isNaN(i)) {
        a = 64;
      }
      t =
        t +
        this._keyStr.charAt(s) +
        this._keyStr.charAt(o) +
        this._keyStr.charAt(u) +
        this._keyStr.charAt(a);
    }
    return t;
  },
  decode: function (e) {
    var t = "";
    var n, r, i;
    var s, o, u, a;
    var f = 0;
    e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (f < e.length) {
      s = this._keyStr.indexOf(e.charAt(f++));
      o = this._keyStr.indexOf(e.charAt(f++));
      u = this._keyStr.indexOf(e.charAt(f++));
      a = this._keyStr.indexOf(e.charAt(f++));
      n = (s << 2) | (o >> 4);
      r = ((o & 15) << 4) | (u >> 2);
      i = ((u & 3) << 6) | a;
      t = t + String.fromCharCode(n);
      if (u != 64) {
        t = t + String.fromCharCode(r);
      }
      if (a != 64) {
        t = t + String.fromCharCode(i);
      }
    }
    t = Base64._utf8_decode(t);
    return t;
  },
  _utf8_encode: function (e) {
    e = e.replace(/\r\n/g, "\n");
    var t = "";
    for (var n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);
      if (r < 128) {
        t += String.fromCharCode(r);
      } else if (r > 127 && r < 2048) {
        t += String.fromCharCode((r >> 6) | 192);
        t += String.fromCharCode((r & 63) | 128);
      } else {
        t += String.fromCharCode((r >> 12) | 224);
        t += String.fromCharCode(((r >> 6) & 63) | 128);
        t += String.fromCharCode((r & 63) | 128);
      }
    }
    return t;
  },
  _utf8_decode: function (e) {
    var t = "";
    var n = 0;
    var r = (c1 = c2 = 0);
    while (n < e.length) {
      r = e.charCodeAt(n);
      if (r < 128) {
        t += String.fromCharCode(r);
        n++;
      } else if (r > 191 && r < 224) {
        c2 = e.charCodeAt(n + 1);
        t += String.fromCharCode(((r & 31) << 6) | (c2 & 63));
        n += 2;
      } else {
        c2 = e.charCodeAt(n + 1);
        c3 = e.charCodeAt(n + 2);
        t += String.fromCharCode(
          ((r & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
        );
        n += 3;
      }
    }
    return t;
  },
};
!(function (a) {
  "use strict";
  function b(a) {
    return a instanceof Object;
  }
  function c(a) {
    return "number" == typeof a && !h(a);
  }
  function d(a, c, d, e, f, h) {
    var i = [[], 0, g(a).sort(), a],
      j = [];
    do {
      var k = i.pop(),
        l = i.pop(),
        m = i.pop(),
        n = i.pop();
      for (j.push(k); l[0]; ) {
        var o = l.shift(),
          p = k[o],
          q = n.concat(o),
          r = c.call(d, k, p, o, q, m);
        if (r !== !0) {
          if (r === !1) {
            i.length = 0;
            break;
          }
          if (!(m >= h) && b(p)) {
            if (-1 !== j.indexOf(p)) {
              if (f) continue;
              throw new Error("Circular reference");
            }
            if (!e) {
              i.push(n, m, l, k), i.push(q, m + 1, g(p).sort(), p);
              break;
            }
            i.unshift(q, m + 1, g(p).sort(), p);
          }
        }
      }
    } while (i[0]);
    return a;
  }
  function e(a, b, e, g, h, i) {
    var j = b,
      k = e,
      l = 1 === g,
      m = !!h,
      n = c(i) ? i : f;
    return d(a, j, k, l, m, n);
  }
  var f = 100,
    g = Object.keys,
    h = a.isNaN;
  Object.traverse = e;
})(window);
!(function (a) {
  "use strict";
  function b(a) {
    return j.call(a).slice(8, -1);
  }
  function c(a) {
    var b = l.call(a, function (a) {
      return "[" + a + "]";
    });
    return (b[0] = a[0]), b.join("");
  }
  function d(a) {
    var d = new h(),
      e = function (a, e, f, g) {
        var h = b(e);
        switch (h) {
          case "Array":
            break;
          case "Object":
            break;
          case "FileList":
            return (
              k.call(e, function (a, b) {
                var e = g.concat(b),
                  f = c(e);
                d.append(f, a);
              }),
              !0
            );
          case "File":
            var i = c(g);
            return d.append(i, e), !0;
          case "Blob":
            var i = c(g);
            return d.append(i, e, e.name), !0;
          default:
            var i = c(g);
            return d.append(i, e), !0;
        }
      };
    return Object.traverse(a, e, null, null, !0), d;
  }
  var e = a.Blob,
    f = a.File,
    g = a.FileList,
    h = a.FormData,
    i = e && f && g && h,
    j = Object.prototype.toString,
    k = Array.prototype.forEach,
    l = Array.prototype.map;
  i && (Object.toFormData = d);
})(window);
Array.prototype.remove = function () {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};
Number.prototype.numberFormat = function (c, d, t) {
  var n = this,
    c = isNaN((c = Math.abs(c))) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    s +
    (j ? i.substr(0, j) + t : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
    (c
      ? d +
        Math.abs(n - i)
          .toFixed(c)
          .slice(2)
      : "")
  );
};
var MD5 = function (string) {
  function RotateLeft(lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
  }
  function AddUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 0x80000000;
    lY8 = lY & 0x80000000;
    lX4 = lX & 0x40000000;
    lY4 = lY & 0x40000000;
    lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);
    if (lX4 & lY4) {
      return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    }
    if (lX4 | lY4) {
      if (lResult & 0x40000000) {
        return lResult ^ 0xc0000000 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 0x40000000 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  }
  function F(x, y, z) {
    return (x & y) | (~x & z);
  }
  function G(x, y, z) {
    return (x & z) | (y & ~z);
  }
  function H(x, y, z) {
    return x ^ y ^ z;
  }
  function I(x, y, z) {
    return y ^ (x | ~z);
  }
  function FF(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }
  function GG(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }
  function HH(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }
  function II(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }
  function ConvertToWordArray(string) {
    var lWordCount;
    var lMessageLength = string.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 =
      (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] =
        lWordArray[lWordCount] |
        (string.charCodeAt(lByteCount) << lBytePosition);
      lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }
  function WordToHex(lValue) {
    var WordToHexValue = "",
      WordToHexValue_temp = "",
      lByte,
      lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = (lValue >>> (lCount * 8)) & 255;
      WordToHexValue_temp = "0" + lByte.toString(16);
      WordToHexValue =
        WordToHexValue +
        WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }
    return WordToHexValue;
  }
  function Utf8Encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  }
  var x = Array();
  var k, AA, BB, CC, DD, a, b, c, d;
  var S11 = 7,
    S12 = 12,
    S13 = 17,
    S14 = 22;
  var S21 = 5,
    S22 = 9,
    S23 = 14,
    S24 = 20;
  var S31 = 4,
    S32 = 11,
    S33 = 16,
    S34 = 23;
  var S41 = 6,
    S42 = 10,
    S43 = 15,
    S44 = 21;
  string = Utf8Encode(string);
  x = ConvertToWordArray(string);
  a = 0x67452301;
  b = 0xefcdab89;
  c = 0x98badcfe;
  d = 0x10325476;
  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 0xd76aa478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070db);
    b = FF(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
    a = FF(a, b, c, d, x[k + 4], S11, 0xf57c0faf);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787c62a);
    c = FF(c, d, a, b, x[k + 6], S13, 0xa8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xfd469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098d8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8b44f7af);
    c = FF(c, d, a, b, x[k + 10], S13, 0xffff5bb1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895cd7be);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6b901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xfd987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xa679438e);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49b40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xf61e2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xc040b340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265e5a51);
    b = GG(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa);
    a = GG(a, b, c, d, x[k + 5], S21, 0xd62f105d);
    d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xd8a1e681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21e1cde6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xc33707d6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xf4d50d87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455a14ed);
    a = GG(a, b, c, d, x[k + 13], S21, 0xa9e3e905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xfcefa3f8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676f02d9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a);
    a = HH(a, b, c, d, x[k + 5], S31, 0xfffa3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771f681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6d9d6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xfde5380c);
    a = HH(a, b, c, d, x[k + 1], S31, 0xa4beea44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4bdecfa9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xf6bb4b60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xbebfbc70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289b7ec6);
    d = HH(d, a, b, c, x[k + 0], S32, 0xeaa127fa);
    c = HH(c, d, a, b, x[k + 3], S33, 0xd4ef3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x4881d05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xd9d4d039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xe6db99e5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1fa27cf8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xc4ac5665);
    a = II(a, b, c, d, x[k + 0], S41, 0xf4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432aff97);
    c = II(c, d, a, b, x[k + 14], S43, 0xab9423a7);
    b = II(b, c, d, a, x[k + 5], S44, 0xfc93a039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655b59c3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8f0ccc92);
    c = II(c, d, a, b, x[k + 10], S43, 0xffeff47d);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845dd1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6fa87e4f);
    d = II(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0);
    c = II(c, d, a, b, x[k + 6], S43, 0xa3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4e0811a1);
    a = II(a, b, c, d, x[k + 4], S41, 0xf7537e82);
    d = II(d, a, b, c, x[k + 11], S42, 0xbd3af235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb);
    b = II(b, c, d, a, x[k + 9], S44, 0xeb86d391);
    a = AddUnsigned(a, AA);
    b = AddUnsigned(b, BB);
    c = AddUnsigned(c, CC);
    d = AddUnsigned(d, DD);
  }
  var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
  return temp.toLowerCase();
};
(function ($) {
  $.fn.hasScrollBar = function () {
    console.log({
      scrollHeight: this.get(0).scrollHeight,
      clientHeight: this.get(0).clientHeight,
    });
    return this.get(0).scrollHeight > this.get(0).clientHeight;
  };
})(jQuery);
var active_modal = "";
var modal_delay = 300;
var fnPositiveButton, fnNegativeButton;
var csrfParam = "_token";
var loadingStack = {};
var coreAjaxCall = [];
var scriptLoaded = [];
function getBaseURL(param) {
  param = typeof param === "string" ? param : "";
  var baseURL = $("meta[name=base-url]").attr("content");
  var url = baseURL + "/" + param;
  url = url.replace(baseURL + "//", baseURL + "/");
  return url;
}
function getEHHeaderKey() {
  var domain = $("meta[name=base-domain]").attr("content");
  var now = new Date();
  var year = now.getUTCFullYear();
  var month = now.getUTCMonth() + 1;
  var date = now.getUTCDate();
  var hour = now.getUTCHours();
  var combination = domain + "|" + year + "-" + month + "?" + date + "#" + hour;
  return MD5(combination);
}
function getEHHeaderValue() {
  var domain = $("meta[name=base-domain]").attr("content");
  var now = new Date();
  var year = now.getUTCFullYear();
  var month = now.getUTCMonth() + 1;
  var date = now.getUTCDate();
  var hour = now.getUTCHours();
  var combination = date + "=" + hour + "%" + year + "!" + domain + "@" + month;
  return MD5(combination);
}
function getEhCsrfKey() {
  try {
    var requestToken = $("meta[name=request-token]").attr("content").split(":");
    return requestToken[0];
  } catch (e) {
    return null;
  }
}
function getEhCsrfToken() {
  try {
    var requestToken = $("meta[name=request-token]").attr("content").split(":");
    return requestToken[1];
  } catch (e) {
    return null;
  }
}
function ajaxTransfer(url, data, callback, asJson, loading) {
  asJson = typeof asJson === "undefined" ? !1 : asJson;
  loading = typeof loading === "undefined" ? !0 : loading;
  var errorMessage;
  var currentTS = Math.floor(new Date().getTime() / 1000);
  var isProduction = parseInt($("#eh-production-status").val());
  isProduction = isNaN(isProduction) ? 0 : isProduction;
  if (isProduction === 1 && !navigator.onLine) {
    errorMessage = alertDanger(
      "Anda sedang dalam kondisi offline atau tidak terhubung dengan internet"
    );
    showModalPopup(99, "Terjadi Kesalahan", errorMessage);
    return !1;
  }
  var hashValue = getFormDataHashValue(data);
  if (
    fileUploadMap.hasOwnProperty(hashValue) &&
    fileUploadMap[hashValue] === !1
  ) {
    var maxSize = $("input[name=display_file_upload_max_size]").val();
    errorMessage = alertDanger(
      "Ukuran file maksimal yang dapat diunggah ke sistem adalah " + maxSize
    );
    showModalPopup(99, "Terjadi Kesalahan", errorMessage);
    return !1;
  }
  if (data instanceof FormData) {
    data.append("browser_url", document.URL);
    data.append("client_timestamp", currentTS);
  } else if (typeof data === "object") {
    data.browser_url = document.URL;
    data.client_timestamp = currentTS;
  } else {
    try {
      data.browser_url = document.URL;
      data.client_timestamp = currentTS;
    } catch (e) {
      console.log(e);
    }
  }
  if (asJson) {
    ajaxAsJson(url, data, callback, loading);
  } else {
    ajaxAsXhr(url, data, callback, loading);
  }
}
function removeHrefTagMobileApps() {
  if (isMobileRequest()) {
    var links = $("a[href]");
    var i, href, array;
    for (i = 0; i < links.length; i++) {
      href = $(links[i]).attr("href");
      array = href.split("");
      if (array[0] !== "#") {
      }
    }
  }
}
function ajaxAsJson(url, data, callback, loading) {
  var response, csrfToken;
  var loadingId = generateRandomString();
  url = getBaseURL(url);
  if (url.substring(0, 2) === "//") {
    url = url.substring(1, url.length);
  }
  if (data instanceof FormData) {
    data = Object.toFormData(data);
    data = data.serializeArray();
  }
  csrfToken = $("input[name=" + csrfParam + "]").val();
  data = { json_data: JSON.stringify(data) };
  data[csrfParam] = csrfToken;
  if (loading) {
    showLoading(loadingId);
  }
  var header = {};
  header[getEHHeaderKey()] = getEHHeaderValue();
  header[getEhCsrfKey()] = getEhCsrfToken();
  var request = $.ajax({
    type: "POST",
    url: url,
    data: data,
    headers: header,
    success: function (response) {
      if (typeof callback === "string") {
        $(callback).html(response);
      } else {
        callback(response);
      }
      lazyLoadImage();
      setInputPlaceholder();
      validateRequiredInput();
      modifyLinkOpener();
      removeHrefTagMobileApps();
      if (loading) {
        hideLoading(loadingId);
      }
      try {
        chosenConvert(".chosen-control, .chosen-select");
      } catch (e) {}
      $(document).off("focusin.modal");
      $("input").attr("autocomplete", "off");
      $(".btn-download").click(function () {
        refineDownloadBtn();
      });
      if (isMobileRequest()) {
        $(".btn, .title-tip").tooltip("disable").tooltip("destroy");
      } else {
        $(".btn, .title-tip").tooltip();
      }
    },
    error: function (e) {
      if (typeof callback === "string") {
        $(callback).html(response);
      }
      console.log(e);
      if (loading) {
        hideLoading(loadingId);
      }
    },
  });
  coreAjaxCall.push(request);
}
function ajaxAsXhr(url, data, callback, loading) {
  var response, csrfToken;
  var loadingId = generateRandomString();
  url = getBaseURL(url);
  if (url.substring(0, 2) === "//") {
    url = url.substring(1, url.length);
  }
  if (!(data instanceof FormData)) {
    data = Object.toFormData(data);
  }
  csrfToken = $("input[name=" + csrfParam + "]").val();
  data.append(csrfParam, csrfToken);
  if (loading) {
    showLoading(loadingId);
  }
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, !0);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.setRequestHeader(getEHHeaderKey(), getEHHeaderValue());
  xhr.setRequestHeader(getEhCsrfKey(), getEhCsrfToken());
  xhr.onload = function () {
    response = xhr.responseText;
    if (xhr.status === 200) {
      if (typeof callback === "string") {
        $(callback).html(response);
      } else {
        callback(response);
      }
      lazyLoadImage();
      setInputPlaceholder();
      validateRequiredInput();
      modifyLinkOpener();
      removeHrefTagMobileApps();
      try {
        chosenConvert(".chosen-control, .chosen-select");
      } catch (e) {}
      $(document).off("focusin.modal");
      $("input").attr("autocomplete", "off");
      $(".btn-download").click(function () {
        refineDownloadBtn();
      });
      if (isMobileRequest()) {
        $(".btn, .title-tip").tooltip("disable").tooltip("destroy");
      } else {
        $(".btn, .title-tip").tooltip();
      }
    } else {
      if (typeof callback === "string") {
        $(callback).html(response);
      }
      console.log("ajax error! status : " + xhr.status);
      console.log(xhr);
    }
    if (loading) {
      hideLoading(loadingId);
    }
  };
  xhr.send(data);
  coreAjaxCall.push(xhr);
}
function modalAlert(title, message) {
  $(".modal-backdrop, #modal-target.modal").remove();
  var modal_box = "";
  modal_box +=
    "<div aria-hidden='true' aria-labelledby='myModalLabel' role='dialog' tabindex='-1' id='modal-target' class='modal fade' data-backdrop='static' data-keyboard='false' style='display: none;'>";
  modal_box += "<div class='modal-dialog'>";
  modal_box += "<div class='modal-content'>";
  modal_box += "<div class='modal-header'>";
  modal_box +=
    "<button aria-hidden='true' data-dismiss='modal' class='close' onclick='removeModal(this)' rel='modal-target' type='button'>&#215;</button>";
  modal_box += "<h4 class='modal-title'>" + title + "</h4>";
  modal_box += "</div>";
  modal_box +=
    "<div id='modal-output' class='modal-body'>" + message + "</div>";
  modal_box += "</div>";
  modal_box += "</div>";
  modal_box += "</div>";
  $("html").append(modal_box);
  $("#modal-target").modal("show");
  $(document).off("focusin.modal");
  $("input").attr("autocomplete", "off");
  $(".btn-download").click(function () {
    refineDownloadBtn();
  });
}
function modalConfirm(title, message, positiveButton, negativeButton) {
  if (typeof positiveButton === "function") {
    fnPositiveButton = positiveButton;
  }
  if (typeof negativeButton === "function") {
    fnNegativeButton = negativeButton;
  }
  var modal_box = "";
  var modalOpen = $("#modal-target").html();
  if (modalOpen === undefined) {
    $(".modal-backdrop, #modal-target.modal").remove();
    modal_box +=
      "<div aria-hidden='true' aria-labelledby='myModalLabel' role='dialog' tabindex='-1' id='modal-target' class='modal fade' data-backdrop='static' data-keyboard='false' style='display: none;'>";
    modal_box += "<div class='modal-dialog'>";
    modal_box += "<div class='modal-content'>";
    modal_box += "<div class='modal-header'>";
    modal_box +=
      "<button aria-hidden='true' data-dismiss='modal' class='close' onclick='removeModal(this)' rel='modal-target' type='button'>&#215;</button>";
    modal_box += "<h4 class='modal-title'>" + title + "</h4>";
    modal_box += "</div>";
    modal_box +=
      "<div id='modal-output' class='modal-body'>" +
      message +
      "<div id='confirm-button-action'><a onclick='negativeButtonClick()' class='btn btn-danger btn-negative-response'>Cancel</a><a onclick='positiveButtonClick()' class='btn btn-primary btn-positive-response'>Ok</a></div></div>";
    modal_box += "</div>";
    modal_box += "</div>";
    modal_box += "</div>";
    $("html").append(modal_box);
    $("#modal-target").modal("show");
    $(document).off("focusin.modal");
    $("input").attr("autocomplete", "off");
    $(".btn-download").click(function () {
      refineDownloadBtn();
    });
  } else {
    $(".modal-title").html(title);
    $("#modal-output").html(
      message +
        "<div id='confirm-button-action'><a onclick='negativeButtonClick()' class='btn btn-danger btn-negative-response'>Cancel</a><a onclick='positiveButtonClick()' class='btn btn-primary btn-positive-response'>Ok</a></div></div>"
    );
    $("#modal-target").modal("show");
    $(document).off("focusin.modal");
    $("input").attr("autocomplete", "off");
    $(".btn-download").click(function () {
      refineDownloadBtn();
    });
  }
}
function positiveButtonClick() {
  if (typeof fnPositiveButton !== "function") {
    return !1;
  } else {
    fnPositiveButton();
  }
}
function negativeButtonClick() {
  if (typeof fnNegativeButton !== "function") {
    closeModal();
  } else {
    fnNegativeButton();
  }
}
function getModalTitle(t) {
  var title = t.getAttribute("title");
  if (typeof title === "undefined") {
    title = "";
  }
  if (title === null || title.length === 0) {
    title = $(t).attr("data-original-title");
  }
  if (typeof title === "undefined") {
    title = "";
  }
  if (title === null || title.length === 0) {
    title = $(t).html();
  }
  if (typeof title === "undefined") {
    title = "";
  }
  return title;
}
function loadModal(t) {
  t.setAttribute("href", "#modal-target");
  t.setAttribute("data-toggle", "modal");
  var title = getModalTitle(t);
  $(".modal-backdrop, #modal-target.modal").remove();
  var modal_box = "";
  modal_box +=
    "<div aria-hidden='true' aria-labelledby='myModalLabel' role='dialog' tabindex='-1' id='modal-target' class='modal fade' data-backdrop='static' data-keyboard='false' style='display: none;'>";
  modal_box += "<div class='modal-dialog'>";
  modal_box += "<div class='modal-content'>";
  modal_box += "<div class='modal-header'>";
  modal_box +=
    "<button aria-hidden='true' data-dismiss='modal' class='close' onclick='removeModal(this)' rel='modal-target' type='button'>&#215;</button>";
  modal_box += "<h4 class='modal-title'>" + title + "</h4>";
  modal_box += "</div>";
  modal_box += "<div id='modal-output' class='modal-body'></div>";
  modal_box += "</div>";
  modal_box += "</div>";
  modal_box += "</div>";
  $("html").append(modal_box);
  var data = t.getAttribute("data");
  var ajaxData = new FormData();
  var ajaxUrl = t.getAttribute("target");
  if (data === null) {
    data = [];
  } else {
    data = data.split(";");
  }
  for (var i = 0; i < data.length; i++) {
    if (data[i].length === 0) continue;
    else {
      var temp = data[i].split("=");
      var key = temp[0];
      var value = temp[1];
      ajaxData.append(key, value);
    }
  }
  ajaxTransfer(ajaxUrl, ajaxData, "#modal-output");
}
function removeModal(t) {
  var modal_id = t.getAttribute("rel");
  $(
    "#modal-target.modal, #modal-target .modal-overlay, .modal-backdrop"
  ).animate({ opacity: 0 }, modal_delay);
  setTimeout(function () {
    $(
      "#modal-target.modal, #modal-target .modal-overlay, .modal-backdrop"
    ).remove();
    $("body").removeClass("modal-open");
  }, modal_delay);
}
function closeModal(timeout) {
  $("body").removeAttr("style");
  if (typeof timeout === "undefined") $(".modal-header .close").click();
  else {
    timeout = parseInt(timeout);
    setTimeout(function () {
      $(".modal-header .close").click();
    }, timeout);
  }
}
function closeModalPopup(level, timeout) {
  if (typeof timeout === "undefined") {
    $("#modal-popup-close-" + level).click();
  } else {
    timeout = parseInt(timeout);
    setTimeout(function () {
      $("#modal-popup-close-" + level).click();
    }, timeout);
  }
}
function showLoading(id) {
  if (Object.keys(loadingStack).length === 0) {
    $("#loading-overlay")
      .css({ display: "block" })
      .animate({ opacity: "1" }, 100);
  }
  loadingStack[id] = id;
  var loadingScreen = generateLoadingScreen(id);
  $("body").append(loadingScreen);
  $("#" + id).animate({ opacity: "1" }, 100);
}
function hideLoading(id) {
  $("#" + id).animate({ opacity: "0" }, 100);
  setTimeout(function () {
    $("#" + id).remove();
  }, 100);
  delete loadingStack[id];
  if (Object.keys(loadingStack).length === 0) {
    $("#loading-overlay").animate({ opacity: "0" }, 100);
    setTimeout(function () {
      $("#loading-overlay").css({ display: "none" });
    }, 100);
  }
}
function reload(timeout, cleanInternalLink) {
  if (typeof cleanInternalLink === "undefined") {
    cleanInternalLink = 0;
  } else {
    cleanInternalLink = parseInt(cleanInternalLink);
    if (isNaN(cleanInternalLink)) {
      cleanInternalLink = 0;
    }
  }
  var url = document.URL;
  if (cleanInternalLink === 1) {
    var index = url.indexOf("#");
    if (index > -1) {
      url = url.substring(0, index);
    }
  }
  freezeScreen();
  if (typeof timeout === "undefined") {
    history.pushState(null, "", url);
    location.reload();
  } else {
    timeout = parseInt(timeout);
    setTimeout(function () {
      history.pushState(null, "", url);
      location.reload();
    }, timeout);
  }
}
function generateLoadingScreen(id) {
  var loadingScreen = "";
  loadingScreen += "<div id='" + id + "' class='loading-screen'>";
  loadingScreen += "<div id='loading-box'>";
  loadingScreen += "<span>Sedang mengolah data, mohon tunggu...</span>";
  loadingScreen += "</div>";
  loadingScreen += "</div>";
  return loadingScreen;
}
var fileUploadMap = {};
function getFormData(formId, asObject) {
  if (typeof asObject === "boolean" && asObject) {
    var $form = $("#" + formId);
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};
    $.map(unindexed_array, function (n, i) {
      indexed_array[n.name] = n.value;
    });
    return indexed_array;
  }
  var formData = new FormData();
  var input = $("#" + formId + " input");
  var select = $("#" + formId + " select");
  var textarea = $("#" + formId + " textarea");
  var ignored = ["submit", "button", "reset"];
  var i, j, inputType, inputName, inputValue, file, files;
  for (i = 0; i < input.length; i++) {
    inputType = input[i].getAttribute("type");
    inputName = input[i].getAttribute("name");
    inputValue = input[i].value;
    if (ignored.indexOf(inputType) > -1) {
      continue;
    } else if (inputType === "checkbox") {
      if (!input[i].checked) {
        inputValue = null;
      }
      formData.append(inputName, inputValue);
    } else if (inputType === "radio") {
      inputValue = $('input[name="' + inputName + '"]:checked').val();
      formData.append(inputName, inputValue);
    } else if (inputType === "file") {
      files = input[i].files;
      for (j = 0; j < files.length; j++) {
        file = files[j];
        formData.append(inputName, file, file.name);
      }
    } else {
      formData.append(inputName, inputValue);
    }
  }
  for (i = 0; i < select.length; i++) {
    inputName = select[i].getAttribute("name");
    inputValue = select[i].value;
    formData.append(inputName, inputValue);
  }
  for (i = 0; i < textarea.length; i++) {
    inputName = textarea[i].getAttribute("name");
    inputValue = textarea[i].value;
    formData.append(inputName, inputValue);
  }
  var hashValue = getFormDataHashValue(formData);
  fileUploadMap[hashValue] = validateUploadFilesize(formId);
  return formData;
}
function getFormDataHashValue(formData) {
  try {
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    return MD5(JSON.stringify(object));
  } catch (e) {}
  if (typeof formData === "object") {
    try {
      return MD5(JSON.stringify(formData));
    } catch (e) {}
  }
  try {
    return MD5(formData);
  } catch (e) {
    return MD5("");
  }
}
function validateUploadFilesize(formId) {
  var maxFileSize = integerValue($("input[name=file_upload_max_size]").val());
  if (maxFileSize <= 0) {
    return !0;
  }
  var input = $("#" + formId + " input");
  var i, j, inputType, file, files;
  try {
    for (i = 0; i < input.length; i++) {
      inputType = input[i].getAttribute("type");
      if (inputType === "file") {
        files = input[i].files;
        for (j = 0; j < files.length; j++) {
          file = files[j];
          if ($(files[j])[0].size > maxFileSize) {
            return !1;
          }
        }
      }
    }
  } catch (e) {
    return !0;
  }
  return !0;
}
function setInputPlaceholder() {
  var labels = $("label");
  var label, placeholder, currPlaceholder;
  try {
    for (var i = 0; i < labels.length; i++) {
      label = $(labels[i]).attr("for");
      if (typeof label === "undefined" || label.length === 0) {
        continue;
      }
      placeholder = $(labels[i]).html();
      placeholder = placeholder.replace("<br>", " ");
      currPlaceholder = $(labels[i])
        .parents("form")
        .find("[name=" + label + "]")
        .attr("placeholder");
      if (typeof currPlaceholder === "undefined") {
        $(labels[i])
          .parents("form")
          .find("[name=" + label + "]")
          .attr("placeholder", placeholder);
      }
    }
  } catch (e) {
    console.log(e);
  }
}
function renderDataTable(selector, length) {
  $.fn.dataTableExt.oApi.fnPagingInfo = function (oSettings) {
    return {
      iStart: oSettings._iDisplayStart,
      iEnd: oSettings.fnDisplayEnd(),
      iLength: oSettings._iDisplayLength,
      iTotal: oSettings.fnRecordsTotal(),
      iFilteredTotal: oSettings.fnRecordsDisplay(),
      iPage: Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength),
      iTotalPages: Math.ceil(
        oSettings.fnRecordsDisplay() / oSettings._iDisplayLength
      ),
    };
  };
  if (typeof length === "undefined") {
    length = 25;
  }
  $(selector).DataTable({
    iDisplayLength: length,
    aaSorting: [],
    order: [],
    fnDrawCallback: function (x) {
      var currentPage = this.fnPagingInfo().iPage;
      var displayLength = this.fnPagingInfo().iLength;
      var page = currentPage * displayLength + 1;
      rearrangeDataTableNumbering(selector, page);
    },
  });
}
function rearrangeDataTableNumbering(selector, page) {
  var firstField = $(selector).find("th:first-child").html().toLowerCase();
  if (firstField === "no") {
    var trList = $(selector).find("tbody tr");
    for (var i = 0; i < trList.length; i++) {
      $(trList[i])
        .find("td:first-child")
        .html(page + i);
    }
  }
}
function setActiveMenu(url) {
  if (typeof url === "undefined") {
    url = document.URL;
  }
  var split = url.split("");
  if (split[split.length - 1] === "/") {
    delete split[split.length - 1];
    url = split.join("");
  }
  $('a[href="' + url + '"]')
    .parents("li")
    .addClass("active");
  var i, className;
  try {
    var parentList = $('a[href="' + url + '"]').parents("li");
    for (i = 0; i < parentList.length; i++) {
      className = $(parentList[i]).attr("class");
      if (typeof className === "undefined") {
        continue;
      } else if (className.indexOf("has-sub") !== -1) {
        $(parentList[i]).addClass("open");
      }
    }
  } catch (e) {}
  try {
    var parentUl = $('a[href="' + url + '"]').parents("ul");
    for (i = 0; i < parentUl.length; i++) {
      className = $(parentUl[i]).attr("class");
      if (typeof className === "undefined") {
        continue;
      } else if (className.indexOf("sidebar-menu") !== -1) {
        $(parentUl[i]).css({ display: "block" });
      }
    }
  } catch (e) {}
  var subActive = $(".sub-sidebar-wrapper").find("li.active");
  for (var i = 0; i < subActive.length; i++) {
    var parentId = $(subActive[i]).parents("ul.sub-nav-item").attr("id");
    parentId = parentId.replace("sub-nav-", "");
    activateSideMenu(parentId);
  }
}
function validateRequiredInput() {
  var required = $(":required");
  for (var i = 0; i < required.length; i++) {
    $(required[i]).blur(function (t) {
      var element = t.currentTarget;
      var value = $(element).val();
      var parent = $(element).parent();
      if (value.length === 0) {
        $(parent).addClass("has-error");
      } else {
        $(parent).removeClass("has-error");
      }
    });
  }
}
function scrollToTop(selector) {
  var defaultScroll =
    "html, body, #modal-target, .main-content, #m-main-content";
  if (typeof selector !== "undefined") {
    defaultScroll += ", " + selector;
  }
  $(defaultScroll).animate({ scrollTop: 0 }, "slow");
}
function chevronActive(classname) {
  $(".chevron-shapes li").removeClass("active");
  $(".chevron-shapes li." + classname).addClass("active");
}
function isValidDate(dateString) {
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return !1;
  var parts = dateString.split("/");
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10);
  if (year < 1000 || year > 3000 || month === 0 || month > 12) return !1;
  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
    monthLength[1] = 29;
  return day > 0 && day <= monthLength[month - 1];
}
function isUrlValid(url) {
  return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
    url
  );
}
function pad(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
function getCsrfToken() {
  return $("input[name=" + csrfParam + "]").val();
}
function closeDatePicker() {
  $(".datetimepicker").css({ display: "none" });
}
function isMobileRequest() {
  var isMobileApps = parseInt($("input[name=is_mobile_apps]").val());
  if (isMobileApps === 1) {
    return !0;
  } else {
    return !1;
  }
}
function dateTimePicker(selector, minDate, maxDate) {
  try {
    if (typeof minDate === null || typeof minDate === "undefined") {
      minDate = "0001-01-01 00:00";
    }
    if (typeof maxDate === null || typeof maxDate === "undefined") {
      maxDate = "9999-12-31 23:59";
    }
    $(selector)
      .attr("autocomplete", "off")
      .datetimepicker({
        format: "Y-m-d H:i",
        formatTime: "H:i",
        formatDate: "Y-m-d",
        minDate: minDate,
        maxDate: maxDate,
      });
  } catch (e) {
    console.log(e);
  }
}
function datePicker(selector, minDate, maxDate) {
  try {
    if (typeof minDate === null || typeof minDate === "undefined") {
      minDate = "0001-01-01";
    }
    if (typeof maxDate === null || typeof maxDate === "undefined") {
      maxDate = "9999-12-31";
    }
    $(selector)
      .attr("autocomplete", "off")
      .datetimepicker({
        timepicker: !1,
        scrollMonth: !1,
        scrollTime: !1,
        scrollInput: !1,
        yearStart: 1930,
        format: "Y-m-d",
        formatDate: "Y-m-d",
        minDate: minDate,
        maxDate: maxDate,
      });
  } catch (e) {
    console.log(e);
  }
}
function timePicker(selector) {
  try {
    $(selector)
      .attr("autocomplete", "off")
      .datetimepicker({ datepicker: !1, timepicker: !0, format: "H:i" });
  } catch (e) {
    console.log(e);
  }
}
function freezeScreen(timeout) {
  $("body").append("<div id='freeze-layer'></div>");
  if (!isNaN(timeout)) {
    setTimeout(function () {
      $("#freeze-layer").remove();
    }, timeout);
  }
}
function unfreezeScreen() {
  $("#freeze-layer").remove();
}
function ajaxDataTable(selector, url, collumn, defaultOrder) {
  $.fn.dataTableExt.oApi.fnPagingInfo = function (oSettings) {
    return {
      iStart: oSettings._iDisplayStart,
      iEnd: oSettings.fnDisplayEnd(),
      iLength: oSettings._iDisplayLength,
      iTotal: oSettings.fnRecordsTotal(),
      iFilteredTotal: oSettings.fnRecordsDisplay(),
      iPage: Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength),
      iTotalPages: Math.ceil(
        oSettings.fnRecordsDisplay() / oSettings._iDisplayLength
      ),
    };
  };
  if (typeof defaultOrder === "undefined") {
    defaultOrder = [1, "asc"];
  }
  $(selector).DataTable({
    processing: !0,
    serverSide: !0,
    iDisplayLength: 25,
    ajax: getBaseURL(url),
    columns: collumn,
    order: [defaultOrder],
    fnDrawCallback: function (x) {
      var currentPage = this.fnPagingInfo().iPage;
      var displayLength = this.fnPagingInfo().iLength;
      var page = currentPage * displayLength + 1;
      rearrangeDataTableNumbering(selector, page);
    },
  });
}
function getCurrentDate() {
  return moment().format("YYYY-MM-DD");
}
function currencyFormat(value, curr) {
  value = isNaN(value) ? 0 : value;
  if (typeof curr === "undefined") {
    curr = "";
  } else {
    curr = curr.trim().toUpperCase();
  }
  try {
    if (value < 0) {
      value *= -1;
      return "(" + accounting.formatMoney(value, curr + " ", 2, ".", ",") + ")";
    } else {
      return accounting.formatMoney(value, curr + " ", 2, ".", ",");
    }
  } catch (e) {}
  if (value < 0) {
    value *= -1;
    value = value.toLocaleString();
    value = value.replace(/\./g, "-");
    value = value.replace(/,/g, ".");
    value = value.replace(/-/g, ",");
    if (curr.length === 0) {
      return "(" + value + ")";
    } else {
      return "(" + curr + " " + value + ")";
    }
  } else {
    value = value.toLocaleString();
    value = value.replace(/\./g, "-");
    value = value.replace(/,/g, ".");
    value = value.replace(/-/g, ",");
    if (curr.length === 0) {
      return value;
    } else {
      return curr + " " + value;
    }
  }
}
function quantityFormat(number, satuan) {
  number = integerValue(number);
  if (typeof satuan === "undefined") {
    satuan = "";
  }
  try {
    return accounting.formatMoney(number, "", 0, ".") + " " + satuan;
  } catch (e) {
    return number + " " + satuan;
  }
}
function setCleanPreview(source, destination) {
  $(destination).html("").addClass("hidden");
  var sourceComponents = $(source).find("input, textarea, select");
  var i, j, value, type, activeComponent, parent, sourceClass, child, temp;
  for (i = 0; i < sourceComponents.length; i++) {
    activeComponent = $(sourceComponents[i]);
    if (activeComponent.is("select")) {
      value = $(sourceComponents[i]).val();
      value = $(sourceComponents[i])
        .find("option[value=" + value + "]")
        .html();
      $(sourceComponents[i]).attr("preview-value", value);
    } else if (activeComponent.is("input")) {
      type = $(sourceComponents[i]).attr("type");
      value = null;
      if (type === "text" || type === "email" || type === "number") {
        value = $(sourceComponents[i]).val();
      } else if (type === "radio") {
        if ($(sourceComponents[i]).prop("checked")) {
          value = $(sourceComponents[i]).attr("preview-value");
        } else {
          value = null;
        }
      } else if (type === "checkbox") {
        if ($(sourceComponents[i]).is(":checked")) {
          value = "&#10003;";
        } else {
          value = "&times;";
        }
      } else {
        value = $(sourceComponents[i]).val();
      }
      $(sourceComponents[i]).attr("preview-value", value);
    } else if (activeComponent.is("textarea")) {
      value = $(sourceComponents[i]).val();
      $(sourceComponents[i]).attr("preview-value", value);
    }
  }
  var sourceHtml = $(source).html();
  $(destination).html(sourceHtml);
  var inputComponents = $(destination).find("input, textarea, select");
  for (i = 0; i < inputComponents.length; i++) {
    activeComponent = $(inputComponents[i]);
    parent = $(inputComponents[i]).parent().attr("id");
    if (parent === destination) {
      continue;
    }
    if (activeComponent.is("input")) {
      type = $(inputComponents[i]).attr("type");
      parent = $(inputComponents[i]).parent().attr("class");
      if (type === "hidden") {
        $(inputComponents[i]).remove();
        continue;
      } else if (typeof type === "undefined") {
        type = "text";
      }
      value = $(inputComponents[i]).attr("preview-value");
      if (
        typeof parent !== "undefined" &&
        parent.indexOf("input-group") !== -1
      ) {
        value = [];
        child = $(inputComponents[i]).parent().children();
        for (j = 0; j < child.length; j++) {
          temp = $(child[j]).attr("class");
          if ($(child[j]).is("input")) {
            value.push($(child[j]).attr("preview-value"));
          } else if (
            typeof temp !== "undefined" &&
            temp.indexOf("input-group-addon") !== -1
          ) {
            value.push($(child[j]).html());
          }
        }
        value = value.join(" ");
        $(inputComponents[i]).parent().parent().html(value);
        continue;
      } else if (type === "radio") {
        value = $(inputComponents[i]).attr("preview-value");
      } else if (type === "button" || type === "submit") {
        $(inputComponents[i]).remove();
        continue;
      }
    } else if (activeComponent.is("select")) {
      value = $(inputComponents[i]).attr("preview-value");
    } else if (activeComponent.is("textarea")) {
      value = $(inputComponents[i]).attr("preview-value");
    }
    $(inputComponents[i]).parent().html(value);
    $(inputComponents[i]).remove();
  }
  var formGroupList = $(destination).find(".form-group");
  for (i = 0; i < formGroupList.length; i++) {
    $(formGroupList[i])
      .find("label")
      .siblings("div")
      .addClass("form-control-static");
  }
  sourceClass = $(source).attr("class");
  $(destination).find(".btn").remove();
  $(destination).find(".remove-on-preview").remove();
  $(destination).find(".hidden").remove();
  $(destination).find(".table").removeClass("tabel-small-padding");
  $(destination).removeClass("hidden").attr("class", sourceClass);
}
function generateRandomString() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var unix = Math.round(+new Date() / 1000);
  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return unix + "-" + text;
}
function alertWarning(msg) {
  return "<div class='alert alert-warning'>" + msg + "</div>";
}
function alertDanger(msg) {
  return "<div class='alert alert-danger'>" + msg + "</div>";
}
function alertSuccess(msg) {
  return "<div class='alert alert-success'>" + msg + "</div>";
}
function titleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
function redirectTo(url, timeout) {
  freezeScreen(timeout);
  if (typeof timeout === "undefined") {
    timeout = 0;
  }
  setTimeout(function () {
    location.href = url;
  }, timeout);
}
function setTimezone() {
  try {
    var timezone = jstz.determine().name();
    var cookie = document.cookie.indexOf("timezone");
    var setTimezone = cookie === -1 ? !0 : !1;
    var baseDomain = $("meta[name=base-domain]").attr("content");
    var currentDomain = $("meta[name=current-domain]").attr("content");
    var lpAgentStatus = integerValue(
      $("meta[name=lp-agent-status]").attr("content")
    );
    var domain = lpAgentStatus === 1 ? currentDomain : baseDomain;
    if (timezone.length > 0 && setTimezone === !0) {
      document.cookie = "timezone=" + timezone + "; path=/; domain=" + domain;
      console.log("timezone set to : " + timezone);
    }
  } catch (e) {}
}
function alias(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z ]/g, "");
  str = str.replace(/\s+/g, "-");
  return str;
}
function getProvinsi() {
  var negaraId = $("select[name=negara_id]").val();
  ajaxTransfer("/lokasi/get-provinsi", { negara_id: negaraId }, function (
    result
  ) {
    var option = "";
    result = JSON.parse(result);
    for (var id in result) {
      if (result.hasOwnProperty(id)) {
        option += "<option value='" + id + "'>" + result[id] + "</option>";
      }
    }
    $("select[name=provinsi_id]").html(option).trigger("chosen:updated");
    if ($("select[name=kabupaten_id]").length) {
      getKabupaten();
    }
  });
}
function getKabupaten() {
  var provinsiId = $("select[name=provinsi_id]").val();
  ajaxTransfer("/lokasi/get-kabupaten", { provinsi_id: provinsiId }, function (
    result
  ) {
    var option = "";
    result = JSON.parse(result);
    for (var id in result) {
      if (result.hasOwnProperty(id)) {
        option += "<option value='" + id + "'>" + result[id] + "</option>";
      }
    }
    $("select[name=kabupaten_id]").html(option).trigger("chosen:updated");
    if ($("select[name=kecamatan_id]").length) {
      getKecamatan();
    }
  });
}
function getKecamatan() {
  var kabupatenId = $("select[name=kabupaten_id]").val();
  ajaxTransfer(
    "/lokasi/get-kecamatan",
    { kabupaten_id: kabupatenId },
    function (result) {
      var option = "";
      result = JSON.parse(result);
      for (var id in result) {
        if (result.hasOwnProperty(id)) {
          option += "<option value='" + id + "'>" + result[id] + "</option>";
        }
      }
      $("select[name=kecamatan_id]").html(option).trigger("chosen:updated");
    }
  );
}
function chosenConvert(selectors) {
  try {
    if (selectors.indexOf("#") > -1 || selectors.indexOf(".") > -1) {
      var selectorList = $(selectors);
      for (var i = 0; i < selectorList.length; i++) {
        $(selectorList[i]).chosenConvert();
      }
    } else {
      var selectorList = selectors.split("|");
      var selector = null;
      for (var i = 0; i < selectorList.length; i++) {
        selector = "select[name=" + selectorList[i] + "]";
        $(selector).chosenConvert();
      }
    }
  } catch (e) {
    console.log(e);
  }
}
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function setNomorTelepon(t) {
  var output = $(t).attr("output");
  var kode = $(t).attr("kode");
  var target = $(t).attr("target");
  $("#" + output + " span").html(kode);
  $("input[name=kode_" + target + "]").val(kode);
}
function lazyLoadImage() {
  setTimeout(function () {
    var components = $(".lazy-load");
    var image;
    for (var i = 0; i < components.length; i++) {
      image = $(components[i]).attr("data-origin");
      $(components[i])
        .css({ "background-image": "url(" + image + ")" })
        .removeAttr("data-origin")
        .removeClass("lazy-load");
    }
  }, 10);
}
function displayLokasiMap(t) {
  var data = {
    ip_address: $(t).attr("data-ip"),
    user_agent: $(t).attr("data-ua"),
  };
  modalAlert("Informasi Lokasi", "");
  ajaxTransfer("/display-lokasi-map", data, "#modal-output");
}
function loadScript(type, callback, async) {
  if (typeof callback === "function") {
    callback();
  }
  return;
  var scriptMap = JSON.parse(atob($("textarea[name=script_map]").val()));
  var scriptMapLink = JSON.parse(
    atob($("textarea[name=script_map_style]").val())
  );
  if (typeof scriptMap[type] === "undefined") {
    return;
  } else if (scriptLoaded.indexOf(type) !== -1) {
    if (typeof callback === "function") {
      callback();
    }
    return;
  } else {
    try {
      if (typeof async === "undefined") {
        async = !0;
      }
      console.log("load script : " + scriptMap[type]);
      if (typeof scriptMapLink[type] !== "undefined") {
        var stylesheet = document.createElement("link");
        stylesheet.href = scriptMapLink[type];
        stylesheet.rel = "stylesheet";
        stylesheet.type = "text/css";
        stylesheet.media = "only x";
        stylesheet.onload = function () {
          stylesheet.media = "all";
        };
        document.getElementsByTagName("head")[0].appendChild(stylesheet);
      }
      $.ajax({
        url: scriptMap[type],
        dataType: "script",
        success: function () {
          console.log("script " + scriptMap[type] + " loaded");
          scriptLoaded.push(type);
          if (typeof callback === "function") {
            callback();
          }
        },
        async: async,
      });
    } catch (e) {
      console.log(e);
    }
  }
}
function asyncLoadCSS() {
  var cssList = $("link[rel=stylesheet]");
  var href;
  for (var i = 0; i < cssList.length; i++) {
    href = $(cssList[i]).attr("data-href");
    if (typeof href !== "undefined" && href.length > 0) {
      $(cssList[i]).removeAttr("data-href").attr("href", href);
    }
  }
}
$.fn.chosenConvert = function () {
  var element = $(this);
  var style = $(element).attr("style");
  if (style !== "display: none;") {
    $(element).chosen({ search_contains: !0 });
  }
};
$.fn.reloadChosen = function () {
  $(this).refreshItems();
};
$.fn.isChecked = function () {
  var checked = $(this).attr("checked");
  if ($(this).is(":checked")) {
    return !0;
  } else if ($(this).prop("checked")) {
    return !0;
  } else {
    return !1;
  }
};
$.fn.datetimePickerConvert = function (options) {
  var element = $(this);
  $(element).datetimepicker(options);
};
function displayWatermark() {
  console.log(
    "built with :\n\n" +
      "%câ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ\n" +
      "â–ˆ                                                 â–ˆ\n" +
      "â–ˆ  â–ˆâ–ˆâ–ˆâ–ˆâ–ˆ  â–ˆâ–ˆâ–ˆâ–ˆ     â–ˆ    â–ˆ   â–ˆ    â–ˆ       â–ˆ     â–ˆ  â–ˆ\n" +
      "â–ˆ  â–ˆ      â–ˆ   â–ˆ   â–ˆ â–ˆ   â–ˆ   â–ˆ   â–ˆ â–ˆ      â–ˆ     â–ˆ  â–ˆ\n" +
      "â–ˆ  â–ˆâ–ˆâ–ˆâ–ˆâ–ˆ  â–ˆâ–ˆâ–ˆâ–ˆ   â–ˆâ–ˆâ–ˆâ–ˆâ–ˆ  â–ˆâ–ˆâ–ˆâ–ˆâ–ˆ  â–ˆâ–ˆâ–ˆâ–ˆâ–ˆ     â–ˆ     â–ˆ  â–ˆ\n" +
      "â–ˆ  â–ˆ      â–ˆ  â–ˆ   â–ˆ   â–ˆ  â–ˆ   â–ˆ  â–ˆ   â–ˆ  â–ˆ  â–ˆ  â–ˆ  â–ˆ  â–ˆ\n" +
      "â–ˆ  â–ˆâ–ˆâ–ˆâ–ˆâ–ˆ  â–ˆ   â–ˆ  â–ˆ   â–ˆ  â–ˆ   â–ˆ  â–ˆ   â–ˆ   â–ˆâ–ˆ    â–ˆâ–ˆ   â–ˆ\n" +
      "â–ˆ                                                 â–ˆ\n" +
      "â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ\n\n" +
      "https://erahajj.co.id\n\n",
    "background: #000; color: #2c82c9"
  );
}
function modifyLinkOpener() {
  var links = $("a");
  var i, rel;
  for (i = 0; i < links.length; i++) {
    rel = $(links[i]).attr("rel");
    if (typeof rel !== "undefined" && rel.length > 0) {
      continue;
    }
    $(links[i]).attr("rel", "noopener noreferrer");
  }
}
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}
function iterationCopy(src) {
  let target = {};
  for (let prop in src) {
    if (src.hasOwnProperty(prop)) {
      if (isObject(src[prop])) {
        target[prop] = iterationCopy(src[prop]);
      } else {
        target[prop] = src[prop];
      }
    }
  }
  return target;
}
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
function getDownloadID() {
  var array = [];
  var i, j, k;
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      for (k = 0; k < 9; k++) {
        array.push(j);
      }
    }
  }
  array = shuffle(array);
  array = array.join("-");
  return MD5(array);
}
function refineDownloadBtn() {
  var btn = $(".btn-download");
  var i, url, dxid, temp, res;
  for (i = 0; i < btn.length; i++) {
    dxid = getDownloadID();
    url = $(btn[i]).attr("href");
    if (typeof url === "undefined") {
      continue;
    } else if (url.length === 0) {
      continue;
    }
    if (url.indexOf("dxid") === -1) {
      if (url.indexOf("?") === -1) {
        url += "?dxid=" + dxid;
      } else {
        url += "&dxid=" + dxid;
      }
    } else {
      temp = url.split("dxid");
      res = temp[1].substring(33);
      url = temp[0] + "dxid=" + dxid + res;
    }
    $(btn[i]).attr("href", url);
  }
}
var modalPopupActive = {};
function refineModalPopupLevel(level) {
  if (typeof modalPopupActive[level] === "undefined") {
    return parseInt(level);
  } else {
    return refineModalPopupLevel(level + 1);
  }
}
function showModalPopup(level, title, content) {
  if (typeof level === "undefined") {
    level = 1;
  }
  level = parseInt(level);
  level = isNaN(level) ? 1 : level;
  level = refineModalPopupLevel(level);
  var zindex = level * 9999;
  if (typeof title === "undefined") {
    title = "";
  }
  if (typeof content === "undefined") {
    content = "";
  }
  modalPopupActive[level] = !0;
  var html =
    '<div style="z-index: ' +
    zindex +
    ' !important;" data-id="' +
    level +
    '" class="modal-popup-outer" id="modal-popup-outer-' +
    level +
    '"><div class="modal-popup-inner"><div class="modal-popup-title" id="modal-popup-title-' +
    level +
    '">' +
    title +
    '<a class="modal-popup-close" id="modal-popup-close-' +
    level +
    '" onclick="hideModalPopup(this)">&times;</a></div><div class="modal-popup-content" id="modal-popup-content-' +
    level +
    '">' +
    content +
    "</div></div></div>";
  $("body").append(html);
  $('.modal-popup-outer[data-id="' + level + '"]').animate(
    { opacity: "1" },
    250
  );
  $(document).off("focusin.modal");
}
function hideModalPopup(t) {
  var level = $(t).parents(".modal-popup-outer").attr("data-id");
  delete modalPopupActive[level];
  $(t).parents(".modal-popup-outer").animate({ opacity: "0" }, 250);
  setTimeout(function () {
    $(t).parents(".modal-popup-outer").remove();
  }, 250);
}
function renderResponsiveTable() {
  var table = $(".eh-responsive-table");
  var i, id;
  for (i = 0; i < table.length; i++) {
    id = $(table[i]).attr("id");
    setTimeout(function () {
      responsiveTable("#" + id);
    }, 500);
  }
}
function responsiveTable(selector) {
  console.log("responsive table rendered!");
  $(selector).addClass("eh-responsive-table");
  var parent = $(selector).parents("div.outer-responsive-table");
  var sibling;
  try {
    if (parent.length === 0) {
      $(selector).before('<div class="outer-responsive-table"></div>');
      sibling = $(selector).siblings("div.outer-responsive-table");
      var element = $(selector).detach();
      $(sibling).append(element);
    }
  } catch (e) {
    console.log(e);
  }
  $(selector + " td").removeClass("hidden");
  $(selector + " th").removeClass("hidden");
  var maxWidth = $(selector).parents("div.outer-responsive-table").outerWidth();
  var preventHidden = $(selector + " .prevent-hidden");
  var thList = $(selector + " thead th");
  var i,
    widthLoop = 0,
    width,
    isHidden = !1,
    eclass;
  for (i = 0; i < preventHidden.length; i++) {
    width = $(preventHidden[i]).outerWidth();
    maxWidth -= width;
  }
  for (i = 0; i < thList.length; i++) {
    width = $(thList[i]).outerWidth();
    widthLoop += width;
    if (widthLoop > maxWidth) {
      isHidden = !0;
    }
    eclass = $(thList[i]).attr("class");
    if (
      typeof eclass !== "undefined" &&
      eclass.indexOf("prevent-hidden") != -1
    ) {
      isHidden = !1;
    }
    if (isHidden) {
      $(selector + " td:nth-child(" + (i + 1) + ")").addClass("hidden");
      $(selector + " th:nth-child(" + (i + 1) + ")").addClass("hidden");
    } else {
      $(selector + " td:nth-child(" + (i + 1) + ")").removeClass("hidden");
      $(selector + " th:nth-child(" + (i + 1) + ")").removeClass("hidden");
    }
  }
  $(window).resize(function () {
    responsiveTable(selector);
  });
}
function refreshKodeCaptcha(t) {
  var sessionKey = $(t).parents("form").find("input[name=session_key]").val();
  var data = { session_key: sessionKey };
  ajaxTransfer("/site/reset-captcha", data, function (response) {
    $(t)
      .parents(".input-group")
      .find(".captcha-image")
      .css({ "background-image": "url(" + response + ")" });
    $(t).parents(".input-group").find(".form-control").val("");
  });
}
function removeDefaultImageDimension(selector) {
  var images = $(selector).find("img");
  var i;
  for (i = 0; i < images.length; i++) {
    $(images[i]).removeAttr("width");
    $(images[i]).removeAttr("height");
  }
}
function setEqualHeight(selector) {
  var max = 0,
    temp = 0;
  var komponen = $("." + selector);
  komponen.css({ "min-height": "0px" });
  for (var i = 0; i < komponen.length; i++) {
    temp = integerValue($(komponen[i]).outerHeight()) + 1;
    if (temp > max) {
      max = temp;
    }
  }
  komponen.css({ "min-height": max + "px" });
  $(window).resize(function () {
    setEqualHeight(selector);
  });
}
function showPasswordField(t) {
  var state = $(t).find(".fa").attr("class");
  if (state.indexOf("fa-eye-slash") === -1) {
    $(t).find(".fa").removeClass("fa-eye").addClass("fa-eye-slash");
    $(t).parent(".input-group").find(".form-control").attr("type", "text");
  } else {
    $(t).find(".fa").removeClass("fa-eye-slash").addClass("fa-eye");
    $(t).parent(".input-group").find(".form-control").attr("type", "password");
  }
}
function closeAlert(t) {
  $(t).parent(".alert").addClass("hide-alert");
  setTimeout(function () {
    $(t).parent(".alert").remove();
  }, 350);
}
function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}
function convertTabelSticky() {
  var tabel = $("table.table-sticky-first-last, table.table-sticky-first");
  var i, tabelWidth, parentWidth;
  for (i = 0; i < tabel.length; i++) {
    tabelWidth = $(tabel[i]).outerWidth();
    parentWidth = $(tabel[i]).parent().outerWidth();
    if (tabelWidth > parentWidth) {
      $(tabel[i]).addClass("sticky-active");
    } else {
      $(tabel[i]).removeClass("sticky-active");
    }
  }
  setTimeout(function () {
    convertTabelSticky();
  }, 500);
}
function integerValue(value) {
  value = parseInt(value);
  return isNaN(value) ? 0 : value;
}
function floatValue(value) {
  value = parseFloat(value);
  return isNaN(value) ? 0 : value;
}
function findBootstrapEnvironment() {
  var envs = ["xs", "sm", "md", "lg"];
  var $el = $("<div>");
  $el.appendTo($("body"));
  for (var i = envs.length - 1; i >= 0; i--) {
    var env = envs[i];
    $el.addClass("hidden-" + env);
    if ($el.is(":hidden")) {
      $el.remove();
      return env;
    }
  }
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function clickToCopy(t, keepSpace) {
  var text = $(t).html();
  keepSpace = integerValue(keepSpace);
  text = text.replace(/<\/?[^>]+(>|$)/g, "");
  if (!keepSpace) {
    text = text.replaceAll(" ", "");
  }
  $(t).addClass("text-copied");
  var selector = "x" + generateRandomString();
  $("body").append(
    "<input class='hidden' id='" + selector + "' value='" + text + "'>"
  );
  var copyText = document.getElementById(selector);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  try {
    navigator.clipboard.writeText(copyText.value);
  } catch (e) {
    console.log(e);
    document.execCommand("copy");
  }
  setTimeout(function () {
    $(t).removeClass("text-copied");
    $("#" + selector).remove();
  }, 300);
}
function clickToCopyText(text) {
  var selector = "x" + generateRandomString();
  $("body").append(
    "<input class='hidden' id='" + selector + "' value='" + text + "'>"
  );
  var copyText = document.getElementById(selector);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  try {
    navigator.clipboard.writeText(copyText.value);
  } catch (e) {
    console.log(e);
    document.execCommand("copy");
  }
  setTimeout(function () {
    $("#" + selector).remove();
  }, 300);
}
function onlyNumberKey(evt) {
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
    return !1;
  } else {
    return !0;
  }
}
function displayNotificationCount() {
  ajaxTransfer(
    "/get-notification-count",
    {},
    function (unread) {
      unread = integerValue(unread);
      if (unread > 99) {
        $(".unread-notif-marker").removeClass("hidden").html("99+");
      } else if (unread > 0) {
        $(".unread-notif-marker").removeClass("hidden").html(unread);
      }
    },
    !1,
    !1
  );
}
function loadImageSource() {
  var image = $("img[data-origin]");
  var i, source;
  setTimeout(function () {
    for (i = 0; i < image.length; i++) {
      source = $(image[i]).attr("data-origin");
      $(image[i]).attr("src", source).removeAttr("data-origin");
    }
    setTimeout(function () {
      loadImageSource();
    }, 1000);
  }, 100);
}
$(document).ready(function () {
  try {
    convertTabelSticky();
    displayWatermark();
    asyncLoadCSS();
    setTimezone();
    setActiveMenu();
    setInputPlaceholder();
    validateRequiredInput();
    loadImageSource();
    chosenConvert(".chosen-control, .chosen-select");
    modifyLinkOpener();
    removeHrefTagMobileApps();
    refineDownloadBtn();
    if (isMobileRequest()) {
      $(".btn, .title-tip").tooltip("disable").tooltip("destroy");
    } else {
      $(".btn, .title-tip").tooltip();
    }
  } catch (e) {
    console.log(e);
  }
  $(document).off("focusin.modal");
  $("input").attr("autocomplete", "off");
  $(".btn-download").click(function () {
    refineDownloadBtn();
  });
});
var voucherTemplate = "";
function toggleResponsiveMenu() {
  var bclass = $("body").attr("class");
  if (bclass.indexOf("responsive-menu-active") === -1) {
    $("body").addClass("responsive-menu-active");
  } else {
    $("body").removeClass("responsive-menu-active");
  }
}
function hideResponsiveMenu() {
  $("body").removeClass("responsive-menu-active");
}
function setVoucherCurrency(total) {
  var voucherConversion = $("input[name=base_currency]").val();
  var voucherKurs = [];
  for (var kurs in total) {
    if (total.hasOwnProperty(kurs)) {
      if (total[kurs] > 0) {
        voucherKurs.push(kurs);
      }
    }
  }
  if (voucherKurs.length === 1) {
    voucherConversion = voucherKurs[0];
  }
  $("input[name=voucher_conversion]").val(voucherConversion.toLowerCase());
}
function setKomponenLayananEqualHeight() {
  var max = 0,
    temp = 0;
  var komponen = $(".site-icon-thumbnail");
  var windowWidth = $("html").outerWidth();
  komponen.css({ "min-height": "0px" });
  if (windowWidth > 768) {
    for (var i = 0; i < komponen.length; i++) {
      temp = $(komponen[i]).outerHeight();
      if (temp > max) {
        max = temp;
      }
    }
    komponen.css({ "min-height": max + "px" });
  }
}
function refineFrontQuickSearch() {
  var tabs = $(".tab-quick-search-paket");
  for (var i = 0; i < tabs.length; i++) {
    var navs = $(tabs[i]).siblings(".nav-quick-search-paket");
    var nItem = $(navs).find("li").length;
    var tabWidth = $(tabs[i]).outerWidth();
    var maxItemWidth = tabWidth / nItem - 2;
    $(navs)
      .find("li")
      .css({ "max-width": maxItemWidth + "px" });
  }
}
function setMarginTopHeaderType1() {
  setTimeout(function () {
    var headerClass = $("body").attr("class");
    var index = headerClass.indexOf("header-type-1");
    var isFullLayout = headerClass.indexOf("full-layout");
    if (index !== -1 && isFullLayout !== -1) {
      var headerHeight = $(".header-menu-1").outerHeight();
      $("body #page-title-container").css({
        "margin-top": headerHeight + "px",
      });
      $("body.home #content.content").css({
        "margin-top": headerHeight + "px",
      });
    }
  }, 500);
}
function setMarginTopMenuHeaderType4() {
  setTimeout(function () {
    var headerClass = $("body").attr("class");
    var index = headerClass.indexOf("header-type-4");
    if (index !== -1) {
      var logoWidth = $(".header-company").width();
      var left = logoWidth + 10;
      $("body.header-type-4 #main-top-menu").css({ left: left + "px" });
      $("body.header-type-4 #header-top #header-tagline").css({
        left: left + 5 + "px",
      });
    }
    setTimeout(function () {
      setMarginTopMenuHeaderType4();
    }, 1000);
  }, 500);
}
function setBackgroundHeaderType5() {
  setTimeout(function () {
    var headerClass = $("body").attr("class");
    var index = headerClass.indexOf("header-type-5");
    if (index !== -1) {
      var height = $(window).height();
      $("#main-bg-type-5").css({ height: height + "px" });
    }
  }, 500);
}
function toggleSideMenuPengaturanTampilan() {
  var cls = $("#sidemenu-pengaturan-tampilan").attr("class");
  if (cls.indexOf("open") === -1) {
    $("#sidemenu-pengaturan-tampilan").addClass("open");
  } else {
    $("#sidemenu-pengaturan-tampilan").removeClass("open");
  }
}
function testimonialSlider(selector) {
  $(selector).carousel({ interval: 5000 });
  setTimeout(function () {
    var item = $(selector).find(".item");
    var maxHeight = 0,
      height,
      i;
    for (i = 0; i < item.length; i++) {
      height = $(item[i]).outerHeight();
      if (height > maxHeight) {
        maxHeight = height;
      }
    }
    maxHeight += 20;
    $(selector)
      .find(".carousel-inner")
      .css({ "min-height": maxHeight + "px" });
  }, 500);
  $(window).resize(function () {
    testimonialSlider(selector);
  });
}
function refineIframeDimension() {
  var iframe = $("#halaman-konten-inner iframe");
  var i, width, height, src;
  for (i = 0; i < iframe.length; i++) {
    src = $(iframe[i]).attr("src");
    if (src.indexOf("youtube.com") === -1) {
      continue;
    }
    width = $(iframe[i]).outerWidth();
    height = (56.11 / 100) * width;
    $(iframe[i]).css({ height: height + "px" });
  }
}
function refineBodyScrollPosition() {
  $("body").attr("data-scroll-position", $(this).scrollTop());
}
function showTime(selector) {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";
  if (h === 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  var time = h + " : " + m + " : " + s + " " + session;
  document.getElementById(selector).innerText = time;
  document.getElementById(selector).textContent = time;
  setTimeout(function () {
    showTime(selector);
  }, 1000);
}
function displayBackgroundVideo(selector) {
  setTimeout(function () {
    var element = $("#" + selector);
    var mainHeight = element.outerHeight();
    var mainWidth = element.outerWidth();
    var videoHeight = element
      .find(".eh-main-front-section-bg-video-area")
      .outerHeight();
    var diff = videoHeight - mainHeight;
    if (diff > 0) {
      var top = diff / 2;
      element
        .find(".eh-main-front-section-bg-video-area")
        .css({ top: "-" + top + "px" });
    } else {
      var newVideoHeight = mainHeight;
      var newVideoWidth = (178 / 100) * mainHeight;
      var diffWidth = newVideoWidth - mainWidth;
      var left = diffWidth / 2;
      element
        .find(".eh-main-front-section-bg-video-area")
        .css({
          width: newVideoWidth + "px",
          height: newVideoHeight + "px",
          top: "0px",
          left: "-" + left + "px",
        });
    }
    setTimeout(function () {
      element.addClass("bg-video-shown");
    }, 500);
  }, 1000);
}
function showHideInformasiHotelMaskapai(t) {
  var state = $(t).html();
  if (state.indexOf("Tampilkan") !== -1) {
    $(".info-paket-min").addClass("hidden");
    $(".info-paket-max").removeClass("hidden");
    $(t).html('Sembunyikan Informasi Detail <i class="fa fa-caret-up"></i>');
  } else {
    $(".info-paket-max").addClass("hidden");
    $(".info-paket-min").removeClass("hidden");
    $(t).html('Tampilkan Informasi Detail <i class="fa fa-caret-down"></i>');
  }
}
function markerVisitor() {
  ajaxTransfer("/marker-visitor", {}, "#global-output", !1, !1);
}
$(document).ready(function () {
  voucherTemplate = $("#div-input-voucher").html();
  markerVisitor();
  setKomponenLayananEqualHeight();
  refineFrontQuickSearch();
  lazyLoadImage();
  setMarginTopHeaderType1();
  setMarginTopMenuHeaderType4();
  setBackgroundHeaderType5();
  refineIframeDimension();
  refineBodyScrollPosition();
  $(window).scroll(function () {
    refineBodyScrollPosition();
  });
  $(window).resize(function () {
    refineFrontQuickSearch();
    setKomponenLayananEqualHeight();
    setMarginTopHeaderType1();
    setMarginTopMenuHeaderType4();
    setBackgroundHeaderType5();
    refineIframeDimension();
    $("body").removeClass("responsive-menu-active");
  });
});
/*!
 * The Final Countdown for jQuery v2.1.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2015 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!(function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
})(function (a) {
  "use strict";
  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g))
      return (
        String(a).match(/^[0-9]*$/) && (a = Number(a)),
        String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")),
        new Date(a)
      );
    throw new Error("Couldn't cast `" + a + "` to a date object.");
  }
  function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    return new RegExp(b);
  }
  function d(a) {
    return function (b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (d)
        for (var f = 0, g = d.length; g > f; ++f) {
          var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || "",
            l = h[3] || "",
            m = null;
          (h = h[2]),
            i.hasOwnProperty(h) && ((m = i[h]), (m = Number(a[m]))),
            null !== m &&
              ("!" === k && (m = e(l, m)),
              "" === k && 10 > m && (m = "0" + m.toString()),
              (b = b.replace(j, m.toString())));
        }
      return (b = b.replace(/%%/, "%"));
    };
  }
  function e(a, b) {
    var c = "s",
      d = "";
    return (
      a &&
        ((a = a.replace(/(:|;|\s)/gi, "").split(/\,/)),
        1 === a.length ? (c = a[0]) : ((d = a[0]), (c = a[1]))),
      1 === Math.abs(b) ? d : c
    );
  }
  var f = [],
    g = [],
    h = { precision: 100, elapse: !1 };
  g.push(/^[0-9]*$/.source),
    g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    (g = new RegExp(g.join("|")));
  var i = {
      Y: "years",
      m: "months",
      n: "daysToMonth",
      w: "weeks",
      d: "daysToWeek",
      D: "totalDays",
      H: "hours",
      M: "minutes",
      S: "seconds",
    },
    j = function (b, c, d) {
      (this.el = b),
        (this.$el = a(b)),
        (this.interval = null),
        (this.offset = {}),
        (this.options = a.extend({}, h)),
        (this.instanceNumber = f.length),
        f.push(this),
        this.$el.data("countdown-instance", this.instanceNumber),
        d &&
          ("function" == typeof d
            ? (this.$el.on("update.countdown", d),
              this.$el.on("stoped.countdown", d),
              this.$el.on("finish.countdown", d))
            : (this.options = a.extend({}, h, d))),
        this.setFinalDate(c),
        this.start();
    };
  a.extend(j.prototype, {
    start: function () {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(),
        (this.interval = setInterval(function () {
          a.update.call(a);
        }, this.options.precision));
    },
    stop: function () {
      clearInterval(this.interval),
        (this.interval = null),
        this.dispatchEvent("stoped");
    },
    toggle: function () {
      this.interval ? this.stop() : this.start();
    },
    pause: function () {
      this.stop();
    },
    resume: function () {
      this.start();
    },
    remove: function () {
      this.stop.call(this),
        (f[this.instanceNumber] = null),
        delete this.$el.data().countdownInstance;
    },
    setFinalDate: function (a) {
      this.finalDate = b(a);
    },
    update: function () {
      if (0 === this.$el.closest("html").length) return void this.remove();
      var b,
        c = void 0 !== a._data(this.el, "events"),
        d = new Date();
      (b = this.finalDate.getTime() - d.getTime()),
        (b = Math.ceil(b / 1e3)),
        (b = !this.options.elapse && 0 > b ? 0 : Math.abs(b)),
        this.totalSecsLeft !== b &&
          c &&
          ((this.totalSecsLeft = b),
          (this.elapsed = d >= this.finalDate),
          (this.offset = {
            seconds: this.totalSecsLeft % 60,
            minutes: Math.floor(this.totalSecsLeft / 60) % 60,
            hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
            days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
            daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
            daysToMonth: Math.floor(
              (this.totalSecsLeft / 60 / 60 / 24) % 30.4368
            ),
            totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
            weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
            months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
            years: Math.abs(this.finalDate.getFullYear() - d.getFullYear()),
          }),
          this.options.elapse || 0 !== this.totalSecsLeft
            ? this.dispatchEvent("update")
            : (this.stop(), this.dispatchEvent("finish")));
    },
    dispatchEvent: function (b) {
      var c = a.Event(b + ".countdown");
      (c.finalDate = this.finalDate),
        (c.elapsed = this.elapsed),
        (c.offset = a.extend({}, this.offset)),
        (c.strftime = d(this.offset)),
        this.$el.trigger(c);
    },
  }),
    (a.fn.countdown = function () {
      var b = Array.prototype.slice.call(arguments, 0);
      return this.each(function () {
        var c = a(this).data("countdown-instance");
        if (void 0 !== c) {
          var d = f[c],
            e = b[0];
          j.prototype.hasOwnProperty(e)
            ? d[e].apply(d, b.slice(1))
            : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)
            ? (d.setFinalDate.call(d, e), d.start())
            : a.error(
                "Method %s does not exist on jQuery.countdown".replace(
                  /\%s/gi,
                  e
                )
              );
        } else new j(this, b[0], b[1]);
      });
    });
});
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
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
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
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
        (n.initials = {
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
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
      var s = this;
      if ("boolean" == typeof t) (o = t), (t = null);
      else if (t < 0 || t >= s.slideCount) return !1;
      s.unload(),
        "number" == typeof t
          ? 0 === t && 0 === s.$slides.length
            ? i(e).appendTo(s.$slideTrack)
            : o
            ? i(e).insertBefore(s.$slides.eq(t))
            : i(e).insertAfter(s.$slides.eq(t))
          : !0 === o
          ? i(e).prependTo(s.$slideTrack)
          : i(e).appendTo(s.$slideTrack),
        (s.$slides = s.$slideTrack.children(this.options.slide)),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function (e, t) {
          i(t).attr("data-slick-index", e);
        }),
        (s.$slidesCache = s.$slides),
        s.reinit();
    }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
      var e = this;
      null !== i &&
        ((e.$slidesCache = e.$slides),
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit());
    }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
      return this.currentSlide;
    }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption = function (i) {
      return this.options[i];
    }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
      this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
    }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + e.instanceUid + s,
                  });
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext = function () {
      this.changeSlide({ data: { message: "next" } });
    }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause = function () {
      var i = this;
      i.autoPlayClear(), (i.paused = !0);
    }),
    (e.prototype.play = e.prototype.slickPlay = function () {
      var i = this;
      i.autoPlay(),
        (i.options.autoplay = !0),
        (i.paused = !1),
        (i.focussed = !1),
        (i.interrupted = !1);
    }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev = function () {
      this.changeSlide({ data: { message: "previous" } });
    }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
      var o = this;
      if (
        ((i =
          "boolean" == typeof i
            ? !0 === (e = i)
              ? 0
              : o.slideCount - 1
            : !0 === e
            ? --i
            : i),
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
      )
        return !1;
      o.unload(),
        !0 === t
          ? o.$slideTrack.children().remove()
          : o.$slideTrack.children(this.options.slide).eq(i).remove(),
        (o.$slides = o.$slideTrack.children(this.options.slide)),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        (o.$slidesCache = o.$slides),
        o.reinit();
    }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption = function () {
      var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
      if (
        ("object" === i.type(arguments[0])
          ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
          : "string" === i.type(arguments[0]) &&
            ((o = arguments[0]),
            (s = arguments[1]),
            (l = arguments[2]),
            "responsive" === arguments[0] && "array" === i.type(arguments[1])
              ? (n = "responsive")
              : void 0 !== arguments[1] && (n = "single")),
        "single" === n)
      )
        r.options[o] = s;
      else if ("multiple" === n)
        i.each(o, function (i, e) {
          r.options[i] = e;
        });
      else if ("responsive" === n)
        for (t in s)
          if ("array" !== i.type(r.options.responsive))
            r.options.responsive = [s[t]];
          else {
            for (e = r.options.responsive.length - 1; e >= 0; )
              r.options.responsive[e].breakpoint === s[t].breakpoint &&
                r.options.responsive.splice(e, 1),
                e--;
            r.options.responsive.push(s[t]);
          }
      l && (r.unload(), r.reinit());
    }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
      var i = this;
      null !== i.$slidesCache &&
        (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit());
    }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});

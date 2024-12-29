/*! For license information please see 7458.e841d61c.js.LICENSE.txt */
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [7458],
  {
    74183: (t, e, r) => {
      'use strict'
      function n(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
      }
      r.d(e, { u: () => ur })
      var i,
        s,
        o,
        a,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        g,
        _,
        v = function () {
          return i || ('undefined' != typeof window && (i = window.gsap) && i.registerPlugin && i)
        },
        m = 1,
        y = [],
        b = [],
        w = [],
        x = Date.now,
        T = function (t, e) {
          return e
        },
        E = function (t, e) {
          return ~w.indexOf(t) && w[w.indexOf(t) + 1][e]
        },
        k = function (t) {
          return !!~p.indexOf(t)
        },
        C = function (t, e, r, n, i) {
          return t.addEventListener(e, r, { passive: !1 !== n, capture: !!i })
        },
        O = function (t, e, r, n) {
          return t.removeEventListener(e, r, !!n)
        },
        M = 'scrollLeft',
        S = 'scrollTop',
        A = function () {
          return (d && d.isPressed) || b.cache++
        },
        P = function (t, e) {
          var r = function r(n) {
            if (n || 0 === n) {
              m && (o.history.scrollRestoration = 'manual')
              var i = d && d.isPressed
              ;(n = r.v = Math.round(n) || (d && d.iOS ? 1 : 0)), t(n), (r.cacheID = b.cache), i && T('ss', n)
            } else (e || b.cache !== r.cacheID || T('ref')) && ((r.cacheID = b.cache), (r.v = t()))
            return r.v + r.offset
          }
          return (r.offset = 0), t && r
        },
        D = {
          s: M,
          p: 'left',
          p2: 'Left',
          os: 'right',
          os2: 'Right',
          d: 'width',
          d2: 'Width',
          a: 'x',
          sc: P(function (t) {
            return arguments.length ? o.scrollTo(t, R.sc()) : o.pageXOffset || a[M] || u[M] || l[M] || 0
          }),
        },
        R = {
          s: S,
          p: 'top',
          p2: 'Top',
          os: 'bottom',
          os2: 'Bottom',
          d: 'height',
          d2: 'Height',
          a: 'y',
          op: D,
          sc: P(function (t) {
            return arguments.length ? o.scrollTo(D.sc(), t) : o.pageYOffset || a[S] || u[S] || l[S] || 0
          }),
        },
        N = function (t, e) {
          return (
            ((e && e._ctx && e._ctx.selector) || i.utils.toArray)(t)[0] ||
            ('string' == typeof t && !1 !== i.config().nullTargetWarn ? console.warn('Element not found:', t) : null)
          )
        },
        z = function (t, e) {
          var r = e.s,
            n = e.sc
          k(t) && (t = a.scrollingElement || u)
          var s = b.indexOf(t),
            o = n === R.sc ? 1 : 2
          !~s && (s = b.push(t) - 1), b[s + o] || C(t, 'scroll', A)
          var l = b[s + o],
            c =
              l ||
              (b[s + o] =
                P(E(t, r), !0) ||
                (k(t)
                  ? n
                  : P(function (e) {
                      return arguments.length ? (t[r] = e) : t[r]
                    })))
          return (c.target = t), l || (c.smooth = 'smooth' === i.getProperty(t, 'scrollBehavior')), c
        },
        F = function (t, e, r) {
          var n = t,
            i = t,
            s = x(),
            o = s,
            a = e || 50,
            u = Math.max(500, 3 * a),
            l = function (t, e) {
              var u = x()
              e || u - s > a
                ? ((i = n), (n = t), (o = s), (s = u))
                : r
                ? (n += t)
                : (n = i + ((t - i) / (u - o)) * (s - o))
            }
          return {
            update: l,
            reset: function () {
              ;(i = n = r ? 0 : n), (o = s = 0)
            },
            getVelocity: function (t) {
              var e = o,
                a = i,
                c = x()
              return (
                (t || 0 === t) && t !== n && l(t),
                s === o || c - o > u ? 0 : ((n + (r ? a : -a)) / ((r ? c : s) - e)) * 1e3
              )
            },
          }
        },
        L = function (t, e) {
          return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
        },
        I = function (t) {
          var e = Math.max.apply(Math, t),
            r = Math.min.apply(Math, t)
          return Math.abs(e) >= Math.abs(r) ? e : r
        },
        B = function () {
          var t, e, r, n
          ;(h = i.core.globals().ScrollTrigger) &&
            h.core &&
            ((t = h.core),
            (e = t.bridge || {}),
            (r = t._scrollers),
            (n = t._proxies),
            r.push.apply(r, b),
            n.push.apply(n, w),
            (b = r),
            (w = n),
            (T = function (t, r) {
              return e[t](r)
            }))
        },
        Y = function (t) {
          return (
            (i = t || v()),
            !s &&
              i &&
              'undefined' != typeof document &&
              document.body &&
              ((o = window),
              (a = document),
              (u = a.documentElement),
              (l = a.body),
              (p = [o, a, u, l]),
              i.utils.clamp,
              (_ = i.core.context || function () {}),
              (f = 'onpointerenter' in l ? 'pointer' : 'mouse'),
              (c = X.isTouch =
                o.matchMedia && o.matchMedia('(hover: none), (pointer: coarse)').matches
                  ? 1
                  : 'ontouchstart' in o || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
                  ? 2
                  : 0),
              (g = X.eventTypes =
                (
                  'ontouchstart' in u
                    ? 'touchstart,touchmove,touchcancel,touchend'
                    : 'onpointerdown' in u
                    ? 'pointerdown,pointermove,pointercancel,pointerup'
                    : 'mousedown,mousemove,mouseup,mouseup'
                ).split(',')),
              setTimeout(function () {
                return (m = 0)
              }, 500),
              B(),
              (s = 1)),
            s
          )
        }
      ;(D.op = R), (b.cache = 0)
      var X = (function () {
        function t(t) {
          this.init(t)
        }
        var e, r, p
        return (
          (t.prototype.init = function (t) {
            s || Y(i) || console.warn('Please gsap.registerPlugin(Observer)'), h || B()
            var e = t.tolerance,
              r = t.dragMinimum,
              n = t.type,
              p = t.target,
              v = t.lineHeight,
              m = t.debounce,
              b = t.preventDefault,
              w = t.onStop,
              T = t.onStopDelay,
              E = t.ignore,
              M = t.wheelSpeed,
              S = t.event,
              P = t.onDragStart,
              X = t.onDragEnd,
              H = t.onDrag,
              U = t.onPress,
              j = t.onRelease,
              q = t.onRight,
              V = t.onLeft,
              W = t.onUp,
              Q = t.onDown,
              G = t.onChangeX,
              $ = t.onChangeY,
              Z = t.onChange,
              J = t.onToggleX,
              K = t.onToggleY,
              tt = t.onHover,
              et = t.onHoverEnd,
              rt = t.onMove,
              nt = t.ignoreCheck,
              it = t.isNormalizer,
              st = t.onGestureStart,
              ot = t.onGestureEnd,
              at = t.onWheel,
              ut = t.onEnable,
              lt = t.onDisable,
              ct = t.onClick,
              ft = t.scrollSpeed,
              ht = t.capture,
              pt = t.allowClicks,
              dt = t.lockAxis,
              gt = t.onLockAxis
            ;(this.target = p = N(p) || u),
              (this.vars = t),
              E && (E = i.utils.toArray(E)),
              (e = e || 1e-9),
              (r = r || 0),
              (M = M || 1),
              (ft = ft || 1),
              (n = n || 'wheel,touch,pointer'),
              (m = !1 !== m),
              v || (v = parseFloat(o.getComputedStyle(l).lineHeight) || 22)
            var _t,
              vt,
              mt,
              yt,
              bt,
              wt,
              xt,
              Tt = this,
              Et = 0,
              kt = 0,
              Ct = t.passive || !b,
              Ot = z(p, D),
              Mt = z(p, R),
              St = Ot(),
              At = Mt(),
              Pt = ~n.indexOf('touch') && !~n.indexOf('pointer') && 'pointerdown' === g[0],
              Dt = k(p),
              Rt = p.ownerDocument || a,
              Nt = [0, 0, 0],
              zt = [0, 0, 0],
              Ft = 0,
              Lt = function () {
                return (Ft = x())
              },
              It = function (t, e) {
                return (
                  ((Tt.event = t) && E && ~E.indexOf(t.target)) ||
                  (e && Pt && 'touch' !== t.pointerType) ||
                  (nt && nt(t, e))
                )
              },
              Bt = function () {
                var t = (Tt.deltaX = I(Nt)),
                  r = (Tt.deltaY = I(zt)),
                  n = Math.abs(t) >= e,
                  i = Math.abs(r) >= e
                Z && (n || i) && Z(Tt, t, r, Nt, zt),
                  n &&
                    (q && Tt.deltaX > 0 && q(Tt),
                    V && Tt.deltaX < 0 && V(Tt),
                    G && G(Tt),
                    J && Tt.deltaX < 0 != Et < 0 && J(Tt),
                    (Et = Tt.deltaX),
                    (Nt[0] = Nt[1] = Nt[2] = 0)),
                  i &&
                    (Q && Tt.deltaY > 0 && Q(Tt),
                    W && Tt.deltaY < 0 && W(Tt),
                    $ && $(Tt),
                    K && Tt.deltaY < 0 != kt < 0 && K(Tt),
                    (kt = Tt.deltaY),
                    (zt[0] = zt[1] = zt[2] = 0)),
                  (yt || mt) && (rt && rt(Tt), mt && (H(Tt), (mt = !1)), (yt = !1)),
                  wt && !(wt = !1) && gt && gt(Tt),
                  bt && (at(Tt), (bt = !1)),
                  (_t = 0)
              },
              Yt = function (t, e, r) {
                ;(Nt[r] += t),
                  (zt[r] += e),
                  Tt._vx.update(t),
                  Tt._vy.update(e),
                  m ? _t || (_t = requestAnimationFrame(Bt)) : Bt()
              },
              Xt = function (t, e) {
                dt && !xt && ((Tt.axis = xt = Math.abs(t) > Math.abs(e) ? 'x' : 'y'), (wt = !0)),
                  'y' !== xt && ((Nt[2] += t), Tt._vx.update(t, !0)),
                  'x' !== xt && ((zt[2] += e), Tt._vy.update(e, !0)),
                  m ? _t || (_t = requestAnimationFrame(Bt)) : Bt()
              },
              Ht = function (t) {
                if (!It(t, 1)) {
                  var e = (t = L(t, b)).clientX,
                    n = t.clientY,
                    i = e - Tt.x,
                    s = n - Tt.y,
                    o = Tt.isDragging
                  ;(Tt.x = e),
                    (Tt.y = n),
                    (o || Math.abs(Tt.startX - e) >= r || Math.abs(Tt.startY - n) >= r) &&
                      (H && (mt = !0), o || (Tt.isDragging = !0), Xt(i, s), o || (P && P(Tt)))
                }
              },
              Ut = (Tt.onPress = function (t) {
                It(t, 1) ||
                  (t && t.button) ||
                  ((Tt.axis = xt = null),
                  vt.pause(),
                  (Tt.isPressed = !0),
                  (t = L(t)),
                  (Et = kt = 0),
                  (Tt.startX = Tt.x = t.clientX),
                  (Tt.startY = Tt.y = t.clientY),
                  Tt._vx.reset(),
                  Tt._vy.reset(),
                  C(it ? p : Rt, g[1], Ht, Ct, !0),
                  (Tt.deltaX = Tt.deltaY = 0),
                  U && U(Tt))
              }),
              jt = (Tt.onRelease = function (t) {
                if (!It(t, 1)) {
                  O(it ? p : Rt, g[1], Ht, !0)
                  var e = !isNaN(Tt.y - Tt.startY),
                    r = Tt.isDragging,
                    n = r && (Math.abs(Tt.x - Tt.startX) > 3 || Math.abs(Tt.y - Tt.startY) > 3),
                    s = L(t)
                  !n &&
                    e &&
                    (Tt._vx.reset(),
                    Tt._vy.reset(),
                    b &&
                      pt &&
                      i.delayedCall(0.08, function () {
                        if (x() - Ft > 300 && !t.defaultPrevented)
                          if (t.target.click) t.target.click()
                          else if (Rt.createEvent) {
                            var e = Rt.createEvent('MouseEvents')
                            e.initMouseEvent(
                              'click',
                              !0,
                              !0,
                              o,
                              1,
                              s.screenX,
                              s.screenY,
                              s.clientX,
                              s.clientY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null
                            ),
                              t.target.dispatchEvent(e)
                          }
                      })),
                    (Tt.isDragging = Tt.isGesturing = Tt.isPressed = !1),
                    w && r && !it && vt.restart(!0),
                    X && r && X(Tt),
                    j && j(Tt, n)
                }
              }),
              qt = function (t) {
                return t.touches && t.touches.length > 1 && (Tt.isGesturing = !0) && st(t, Tt.isDragging)
              },
              Vt = function () {
                return (Tt.isGesturing = !1) || ot(Tt)
              },
              Wt = function (t) {
                if (!It(t)) {
                  var e = Ot(),
                    r = Mt()
                  Yt((e - St) * ft, (r - At) * ft, 1), (St = e), (At = r), w && vt.restart(!0)
                }
              },
              Qt = function (t) {
                if (!It(t)) {
                  ;(t = L(t, b)), at && (bt = !0)
                  var e = (1 === t.deltaMode ? v : 2 === t.deltaMode ? o.innerHeight : 1) * M
                  Yt(t.deltaX * e, t.deltaY * e, 0), w && !it && vt.restart(!0)
                }
              },
              Gt = function (t) {
                if (!It(t)) {
                  var e = t.clientX,
                    r = t.clientY,
                    n = e - Tt.x,
                    i = r - Tt.y
                  ;(Tt.x = e), (Tt.y = r), (yt = !0), w && vt.restart(!0), (n || i) && Xt(n, i)
                }
              },
              $t = function (t) {
                ;(Tt.event = t), tt(Tt)
              },
              Zt = function (t) {
                ;(Tt.event = t), et(Tt)
              },
              Jt = function (t) {
                return It(t) || (L(t, b) && ct(Tt))
              }
            ;(vt = Tt._dc =
              i
                .delayedCall(T || 0.25, function () {
                  Tt._vx.reset(), Tt._vy.reset(), vt.pause(), w && w(Tt)
                })
                .pause()),
              (Tt.deltaX = Tt.deltaY = 0),
              (Tt._vx = F(0, 50, !0)),
              (Tt._vy = F(0, 50, !0)),
              (Tt.scrollX = Ot),
              (Tt.scrollY = Mt),
              (Tt.isDragging = Tt.isGesturing = Tt.isPressed = !1),
              _(this),
              (Tt.enable = function (t) {
                return (
                  Tt.isEnabled ||
                    (C(Dt ? Rt : p, 'scroll', A),
                    n.indexOf('scroll') >= 0 && C(Dt ? Rt : p, 'scroll', Wt, Ct, ht),
                    n.indexOf('wheel') >= 0 && C(p, 'wheel', Qt, Ct, ht),
                    ((n.indexOf('touch') >= 0 && c) || n.indexOf('pointer') >= 0) &&
                      (C(p, g[0], Ut, Ct, ht),
                      C(Rt, g[2], jt),
                      C(Rt, g[3], jt),
                      pt && C(p, 'click', Lt, !0, !0),
                      ct && C(p, 'click', Jt),
                      st && C(Rt, 'gesturestart', qt),
                      ot && C(Rt, 'gestureend', Vt),
                      tt && C(p, f + 'enter', $t),
                      et && C(p, f + 'leave', Zt),
                      rt && C(p, f + 'move', Gt)),
                    (Tt.isEnabled = !0),
                    t && t.type && Ut(t),
                    ut && ut(Tt)),
                  Tt
                )
              }),
              (Tt.disable = function () {
                Tt.isEnabled &&
                  (y.filter(function (t) {
                    return t !== Tt && k(t.target)
                  }).length || O(Dt ? Rt : p, 'scroll', A),
                  Tt.isPressed && (Tt._vx.reset(), Tt._vy.reset(), O(it ? p : Rt, g[1], Ht, !0)),
                  O(Dt ? Rt : p, 'scroll', Wt, ht),
                  O(p, 'wheel', Qt, ht),
                  O(p, g[0], Ut, ht),
                  O(Rt, g[2], jt),
                  O(Rt, g[3], jt),
                  O(p, 'click', Lt, !0),
                  O(p, 'click', Jt),
                  O(Rt, 'gesturestart', qt),
                  O(Rt, 'gestureend', Vt),
                  O(p, f + 'enter', $t),
                  O(p, f + 'leave', Zt),
                  O(p, f + 'move', Gt),
                  (Tt.isEnabled = Tt.isPressed = Tt.isDragging = !1),
                  lt && lt(Tt))
              }),
              (Tt.kill = Tt.revert =
                function () {
                  Tt.disable()
                  var t = y.indexOf(Tt)
                  t >= 0 && y.splice(t, 1), d === Tt && (d = 0)
                }),
              y.push(Tt),
              it && k(p) && (d = Tt),
              Tt.enable(S)
          }),
          (e = t),
          (r = [
            {
              key: 'velocityX',
              get: function () {
                return this._vx.getVelocity()
              },
            },
            {
              key: 'velocityY',
              get: function () {
                return this._vy.getVelocity()
              },
            },
          ]) && n(e.prototype, r),
          p && n(e, p),
          t
        )
      })()
      ;(X.version = '3.12.5'),
        (X.create = function (t) {
          return new X(t)
        }),
        (X.register = Y),
        (X.getAll = function () {
          return y.slice()
        }),
        (X.getById = function (t) {
          return y.filter(function (e) {
            return e.vars.id === t
          })[0]
        }),
        v() && i.registerPlugin(X)
      var H,
        U,
        j,
        q,
        V,
        W,
        Q,
        G,
        $,
        Z,
        J,
        K,
        tt,
        et,
        rt,
        nt,
        it,
        st,
        ot,
        at,
        ut,
        lt,
        ct,
        ft,
        ht,
        pt,
        dt,
        gt,
        _t,
        vt,
        mt,
        yt,
        bt,
        wt,
        xt,
        Tt,
        Et,
        kt,
        Ct = 1,
        Ot = Date.now,
        Mt = Ot(),
        St = 0,
        At = 0,
        Pt = function (t, e, r) {
          var n = qt(t) && ('clamp(' === t.substr(0, 6) || t.indexOf('max') > -1)
          return (r['_' + e + 'Clamp'] = n), n ? t.substr(6, t.length - 7) : t
        },
        Dt = function (t, e) {
          return !e || (qt(t) && 'clamp(' === t.substr(0, 6)) ? t : 'clamp(' + t + ')'
        },
        Rt = function t() {
          return At && requestAnimationFrame(t)
        },
        Nt = function () {
          return (et = 1)
        },
        zt = function () {
          return (et = 0)
        },
        Ft = function (t) {
          return t
        },
        Lt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0
        },
        It = function () {
          return 'undefined' != typeof window
        },
        Bt = function () {
          return H || (It() && (H = window.gsap) && H.registerPlugin && H)
        },
        Yt = function (t) {
          return !!~Q.indexOf(t)
        },
        Xt = function (t) {
          return ('Height' === t ? mt : j['inner' + t]) || V['client' + t] || W['client' + t]
        },
        Ht = function (t) {
          return (
            E(t, 'getBoundingClientRect') ||
            (Yt(t)
              ? function () {
                  return (er.width = j.innerWidth), (er.height = mt), er
                }
              : function () {
                  return de(t)
                })
          )
        },
        Ut = function (t, e) {
          var r = e.s,
            n = e.d2,
            i = e.d,
            s = e.a
          return Math.max(
            0,
            (r = 'scroll' + n) && (s = E(t, r))
              ? s() - Ht(t)()[i]
              : Yt(t)
              ? (V[r] || W[r]) - Xt(n)
              : t[r] - t['offset' + n]
          )
        },
        jt = function (t, e) {
          for (var r = 0; r < ot.length; r += 3) (!e || ~e.indexOf(ot[r + 1])) && t(ot[r], ot[r + 1], ot[r + 2])
        },
        qt = function (t) {
          return 'string' == typeof t
        },
        Vt = function (t) {
          return 'function' == typeof t
        },
        Wt = function (t) {
          return 'number' == typeof t
        },
        Qt = function (t) {
          return 'object' == typeof t
        },
        Gt = function (t, e, r) {
          return t && t.progress(e ? 0 : 1) && r && t.pause()
        },
        $t = function (t, e) {
          if (t.enabled) {
            var r = t._ctx
              ? t._ctx.add(function () {
                  return e(t)
                })
              : e(t)
            r && r.totalTime && (t.callbackAnimation = r)
          }
        },
        Zt = Math.abs,
        Jt = 'left',
        Kt = 'right',
        te = 'bottom',
        ee = 'width',
        re = 'height',
        ne = 'Right',
        ie = 'Left',
        se = 'Top',
        oe = 'Bottom',
        ae = 'padding',
        ue = 'margin',
        le = 'Width',
        ce = 'Height',
        fe = 'px',
        he = function (t) {
          return j.getComputedStyle(t)
        },
        pe = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r])
          return t
        },
        de = function (t, e) {
          var r =
              e &&
              'matrix(1, 0, 0, 1, 0, 0)' !== he(t)[rt] &&
              H.to(t, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              }).progress(1),
            n = t.getBoundingClientRect()
          return r && r.progress(0).kill(), n
        },
        ge = function (t, e) {
          var r = e.d2
          return t['offset' + r] || t['client' + r] || 0
        },
        _e = function (t) {
          var e,
            r = [],
            n = t.labels,
            i = t.duration()
          for (e in n) r.push(n[e] / i)
          return r
        },
        ve = function (t) {
          var e = H.utils.snap(t),
            r =
              Array.isArray(t) &&
              t.slice(0).sort(function (t, e) {
                return t - e
              })
          return r
            ? function (t, n, i) {
                var s
                if ((void 0 === i && (i = 0.001), !n)) return e(t)
                if (n > 0) {
                  for (t -= i, s = 0; s < r.length; s++) if (r[s] >= t) return r[s]
                  return r[s - 1]
                }
                for (s = r.length, t += i; s--; ) if (r[s] <= t) return r[s]
                return r[0]
              }
            : function (r, n, i) {
                void 0 === i && (i = 0.001)
                var s = e(r)
                return !n || Math.abs(s - r) < i || s - r < 0 == n < 0 ? s : e(n < 0 ? r - t : r + t)
              }
        },
        me = function (t, e, r, n) {
          return r.split(',').forEach(function (r) {
            return t(e, r, n)
          })
        },
        ye = function (t, e, r, n, i) {
          return t.addEventListener(e, r, { passive: !n, capture: !!i })
        },
        be = function (t, e, r, n) {
          return t.removeEventListener(e, r, !!n)
        },
        we = function (t, e, r) {
          ;(r = r && r.wheelHandler) && (t(e, 'wheel', r), t(e, 'touchmove', r))
        },
        xe = { startColor: 'green', endColor: 'red', indent: 0, fontSize: '16px', fontWeight: 'normal' },
        Te = { toggleActions: 'play', anticipatePin: 0 },
        Ee = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        ke = function (t, e) {
          if (qt(t)) {
            var r = t.indexOf('='),
              n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0
            ~r && (t.indexOf('%') > r && (n *= e / 100), (t = t.substr(0, r - 1))),
              (t = n + (t in Ee ? Ee[t] * e : ~t.indexOf('%') ? (parseFloat(t) * e) / 100 : parseFloat(t) || 0))
          }
          return t
        },
        Ce = function (t, e, r, n, i, s, o, a) {
          var u = i.startColor,
            l = i.endColor,
            c = i.fontSize,
            f = i.indent,
            h = i.fontWeight,
            p = q.createElement('div'),
            d = Yt(r) || 'fixed' === E(r, 'pinType'),
            g = -1 !== t.indexOf('scroller'),
            _ = d ? W : r,
            v = -1 !== t.indexOf('start'),
            m = v ? u : l,
            y =
              'border-color:' +
              m +
              ';font-size:' +
              c +
              ';color:' +
              m +
              ';font-weight:' +
              h +
              ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;'
          return (
            (y += 'position:' + ((g || a) && d ? 'fixed;' : 'absolute;')),
            (g || a || !d) && (y += (n === R ? Kt : te) + ':' + (s + parseFloat(f)) + 'px;'),
            o && (y += 'box-sizing:border-box;text-align:left;width:' + o.offsetWidth + 'px;'),
            (p._isStart = v),
            p.setAttribute('class', 'gsap-marker-' + t + (e ? ' marker-' + e : '')),
            (p.style.cssText = y),
            (p.innerText = e || 0 === e ? t + '-' + e : t),
            _.children[0] ? _.insertBefore(p, _.children[0]) : _.appendChild(p),
            (p._offset = p['offset' + n.op.d2]),
            Oe(p, 0, n, v),
            p
          )
        },
        Oe = function (t, e, r, n) {
          var i = { display: 'block' },
            s = r[n ? 'os2' : 'p2'],
            o = r[n ? 'p2' : 'os2']
          ;(t._isFlipped = n),
            (i[r.a + 'Percent'] = n ? -100 : 0),
            (i[r.a] = n ? '1px' : 0),
            (i['border' + s + le] = 1),
            (i['border' + o + le] = 0),
            (i[r.p] = e + 'px'),
            H.set(t, i)
        },
        Me = [],
        Se = {},
        Ae = function () {
          return Ot() - St > 34 && (xt || (xt = requestAnimationFrame(Qe)))
        },
        Pe = function () {
          ;(!ct || !ct.isPressed || ct.startX > W.clientWidth) &&
            (b.cache++, ct ? xt || (xt = requestAnimationFrame(Qe)) : Qe(), St || Le('scrollStart'), (St = Ot()))
        },
        De = function () {
          ;(pt = j.innerWidth), (ht = j.innerHeight)
        },
        Re = function () {
          b.cache++,
            !tt &&
              !lt &&
              !q.fullscreenElement &&
              !q.webkitFullscreenElement &&
              (!ft || pt !== j.innerWidth || Math.abs(j.innerHeight - ht) > 0.25 * j.innerHeight) &&
              G.restart(!0)
        },
        Ne = {},
        ze = [],
        Fe = function t() {
          return be(ur, 'scrollEnd', t) || qe(!0)
        },
        Le = function (t) {
          return (
            (Ne[t] &&
              Ne[t].map(function (t) {
                return t()
              })) ||
            ze
          )
        },
        Ie = [],
        Be = function (t) {
          for (var e = 0; e < Ie.length; e += 5)
            (!t || (Ie[e + 4] && Ie[e + 4].query === t)) &&
              ((Ie[e].style.cssText = Ie[e + 1]),
              Ie[e].getBBox && Ie[e].setAttribute('transform', Ie[e + 2] || ''),
              (Ie[e + 3].uncache = 1))
        },
        Ye = function (t, e) {
          var r
          for (nt = 0; nt < Me.length; nt++) !(r = Me[nt]) || (e && r._ctx !== e) || (t ? r.kill(1) : r.revert(!0, !0))
          ;(yt = !0), e && Be(e), e || Le('revert')
        },
        Xe = function (t, e) {
          b.cache++,
            (e || !Tt) &&
              b.forEach(function (t) {
                return Vt(t) && t.cacheID++ && (t.rec = 0)
              }),
            qt(t) && (j.history.scrollRestoration = _t = t)
        },
        He = 0,
        Ue = function () {
          W.appendChild(vt), (mt = (!ct && vt.offsetHeight) || j.innerHeight), W.removeChild(vt)
        },
        je = function (t) {
          return $(
            '.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end'
          ).forEach(function (e) {
            return (e.style.display = t ? 'none' : 'block')
          })
        },
        qe = function (t, e) {
          if (!St || t || yt) {
            Ue(),
              (Tt = ur.isRefreshing = !0),
              b.forEach(function (t) {
                return Vt(t) && ++t.cacheID && (t.rec = t())
              })
            var r = Le('refreshInit')
            at && ur.sort(),
              e || Ye(),
              b.forEach(function (t) {
                Vt(t) && (t.smooth && (t.target.style.scrollBehavior = 'auto'), t(0))
              }),
              Me.slice(0).forEach(function (t) {
                return t.refresh()
              }),
              (yt = !1),
              Me.forEach(function (t) {
                if (t._subPinOffset && t.pin) {
                  var e = t.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
                    r = t.pin[e]
                  t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - r), t.refresh()
                }
              }),
              (bt = 1),
              je(!0),
              Me.forEach(function (t) {
                var e = Ut(t.scroller, t._dir),
                  r = 'max' === t.vars.end || (t._endClamp && t.end > e),
                  n = t._startClamp && t.start >= e
                ;(r || n) && t.setPositions(n ? e - 1 : t.start, r ? Math.max(n ? e : t.start + 1, e) : t.end, !0)
              }),
              je(!1),
              (bt = 0),
              r.forEach(function (t) {
                return t && t.render && t.render(-1)
              }),
              b.forEach(function (t) {
                Vt(t) &&
                  (t.smooth &&
                    requestAnimationFrame(function () {
                      return (t.target.style.scrollBehavior = 'smooth')
                    }),
                  t.rec && t(t.rec))
              }),
              Xe(_t, 1),
              G.pause(),
              He++,
              (Tt = 2),
              Qe(2),
              Me.forEach(function (t) {
                return Vt(t.vars.onRefresh) && t.vars.onRefresh(t)
              }),
              (Tt = ur.isRefreshing = !1),
              Le('refresh')
          } else ye(ur, 'scrollEnd', Fe)
        },
        Ve = 0,
        We = 1,
        Qe = function (t) {
          if (2 === t || (!Tt && !yt)) {
            ;(ur.isUpdating = !0), kt && kt.update(0)
            var e = Me.length,
              r = Ot(),
              n = r - Mt >= 50,
              i = e && Me[0].scroll()
            if (
              ((We = Ve > i ? -1 : 1),
              Tt || (Ve = i),
              n && (St && !et && r - St > 200 && ((St = 0), Le('scrollEnd')), (J = Mt), (Mt = r)),
              We < 0)
            ) {
              for (nt = e; nt-- > 0; ) Me[nt] && Me[nt].update(0, n)
              We = 1
            } else for (nt = 0; nt < e; nt++) Me[nt] && Me[nt].update(0, n)
            ur.isUpdating = !1
          }
          xt = 0
        },
        Ge = [
          Jt,
          'top',
          te,
          Kt,
          ue + oe,
          ue + ne,
          ue + se,
          ue + ie,
          'display',
          'flexShrink',
          'float',
          'zIndex',
          'gridColumnStart',
          'gridColumnEnd',
          'gridRowStart',
          'gridRowEnd',
          'gridArea',
          'justifySelf',
          'alignSelf',
          'placeSelf',
          'order',
        ],
        $e = Ge.concat([
          ee,
          re,
          'boxSizing',
          'max' + le,
          'max' + ce,
          'position',
          ue,
          ae,
          ae + se,
          ae + ne,
          ae + oe,
          ae + ie,
        ]),
        Ze = function (t, e, r, n) {
          if (!t._gsap.swappedIn) {
            for (var i, s = Ge.length, o = e.style, a = t.style; s--; ) o[(i = Ge[s])] = r[i]
            ;(o.position = 'absolute' === r.position ? 'absolute' : 'relative'),
              'inline' === r.display && (o.display = 'inline-block'),
              (a[te] = a[Kt] = 'auto'),
              (o.flexBasis = r.flexBasis || 'auto'),
              (o.overflow = 'visible'),
              (o.boxSizing = 'border-box'),
              (o[ee] = ge(t, D) + fe),
              (o[re] = ge(t, R) + fe),
              (o[ae] = a[ue] = a.top = a[Jt] = '0'),
              Ke(n),
              (a[ee] = a['max' + le] = r[ee]),
              (a[re] = a['max' + ce] = r[re]),
              (a[ae] = r[ae]),
              t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)),
              (t._gsap.swappedIn = !0)
          }
        },
        Je = /([A-Z])/g,
        Ke = function (t) {
          if (t) {
            var e,
              r,
              n = t.t.style,
              i = t.length,
              s = 0
            for ((t.t._gsap || H.core.getCache(t.t)).uncache = 1; s < i; s += 2)
              (r = t[s + 1]), (e = t[s]), r ? (n[e] = r) : n[e] && n.removeProperty(e.replace(Je, '-$1').toLowerCase())
          }
        },
        tr = function (t) {
          for (var e = $e.length, r = t.style, n = [], i = 0; i < e; i++) n.push($e[i], r[$e[i]])
          return (n.t = t), n
        },
        er = { left: 0, top: 0 },
        rr = function (t, e, r, n, i, s, o, a, u, l, c, f, h, p) {
          Vt(t) && (t = t(a)),
            qt(t) && 'max' === t.substr(0, 3) && (t = f + ('=' === t.charAt(4) ? ke('0' + t.substr(3), r) : 0))
          var d,
            g,
            _,
            v = h ? h.time() : 0
          if ((h && h.seek(0), isNaN(t) || (t = +t), Wt(t)))
            h && (t = H.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, f, t)), o && Oe(o, r, n, !0)
          else {
            Vt(e) && (e = e(a))
            var m,
              y,
              b,
              w,
              x = (t || '0').split(' ')
            ;(_ = N(e, a) || W),
              ((m = de(_) || {}) && (m.left || m.top)) ||
                'none' !== he(_).display ||
                ((w = _.style.display),
                (_.style.display = 'block'),
                (m = de(_)),
                w ? (_.style.display = w) : _.style.removeProperty('display')),
              (y = ke(x[0], m[n.d])),
              (b = ke(x[1] || '0', r)),
              (t = m[n.p] - u[n.p] - l + y + i - b),
              o && Oe(o, b, n, r - b < 20 || (o._isStart && b > 20)),
              (r -= r - b)
          }
          if ((p && ((a[p] = t || -0.001), t < 0 && (t = 0)), s)) {
            var T = t + r,
              E = s._isStart
            ;(d = 'scroll' + n.d2),
              Oe(s, T, n, (E && T > 20) || (!E && (c ? Math.max(W[d], V[d]) : s.parentNode[d]) <= T + 1)),
              c && ((u = de(o)), c && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + fe))
          }
          return (
            h &&
              _ &&
              ((d = de(_)),
              h.seek(f),
              (g = de(_)),
              (h._caScrollDist = d[n.p] - g[n.p]),
              (t = (t / h._caScrollDist) * f)),
            h && h.seek(v),
            h ? t : Math.round(t)
          )
        },
        nr = /(webkit|moz|length|cssText|inset)/i,
        ir = function (t, e, r, n) {
          if (t.parentNode !== e) {
            var i,
              s,
              o = t.style
            if (e === W) {
              for (i in ((t._stOrig = o.cssText), (s = he(t))))
                +i || nr.test(i) || !s[i] || 'string' != typeof o[i] || '0' === i || (o[i] = s[i])
              ;(o.top = r), (o.left = n)
            } else o.cssText = t._stOrig
            ;(H.core.getCache(t).uncache = 1), e.appendChild(t)
          }
        },
        sr = function (t, e, r) {
          var n = e,
            i = n
          return function (e) {
            var s = Math.round(t())
            return (
              s !== n && s !== i && Math.abs(s - n) > 3 && Math.abs(s - i) > 3 && ((e = s), r && r()),
              (i = n),
              (n = e),
              e
            )
          }
        },
        or = function (t, e, r) {
          var n = {}
          ;(n[e.p] = '+=' + r), H.set(t, n)
        },
        ar = function (t, e) {
          var r = z(t, e),
            n = '_scroll' + e.p2,
            i = function e(i, s, o, a, u) {
              var l = e.tween,
                c = s.onComplete,
                f = {}
              o = o || r()
              var h = sr(r, o, function () {
                l.kill(), (e.tween = 0)
              })
              return (
                (u = (a && u) || 0),
                (a = a || i - o),
                l && l.kill(),
                (s[n] = i),
                (s.inherit = !1),
                (s.modifiers = f),
                (f[n] = function () {
                  return h(o + a * l.ratio + u * l.ratio * l.ratio)
                }),
                (s.onUpdate = function () {
                  b.cache++, e.tween && Qe()
                }),
                (s.onComplete = function () {
                  ;(e.tween = 0), c && c.call(l)
                }),
                (l = e.tween = H.to(t, s))
              )
            }
          return (
            (t[n] = r),
            (r.wheelHandler = function () {
              return i.tween && i.tween.kill() && (i.tween = 0)
            }),
            ye(t, 'wheel', r.wheelHandler),
            ur.isTouch && ye(t, 'touchmove', r.wheelHandler),
            i
          )
        },
        ur = (function () {
          function t(e, r) {
            U || t.register(H) || console.warn('Please gsap.registerPlugin(ScrollTrigger)'), gt(this), this.init(e, r)
          }
          return (
            (t.prototype.init = function (e, r) {
              if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), At)) {
                var n,
                  i,
                  s,
                  o,
                  a,
                  u,
                  l,
                  c,
                  f,
                  h,
                  p,
                  d,
                  g,
                  _,
                  v,
                  m,
                  y,
                  x,
                  T,
                  k,
                  C,
                  O,
                  M,
                  S,
                  A,
                  P,
                  F,
                  L,
                  I,
                  B,
                  Y,
                  X,
                  U,
                  Q,
                  G,
                  K,
                  rt,
                  it,
                  st,
                  ot,
                  lt,
                  ct,
                  ft = (e = pe(qt(e) || Wt(e) || e.nodeType ? { trigger: e } : e, Te)),
                  ht = ft.onUpdate,
                  pt = ft.toggleClass,
                  dt = ft.id,
                  gt = ft.onToggle,
                  _t = ft.onRefresh,
                  vt = ft.scrub,
                  mt = ft.trigger,
                  yt = ft.pin,
                  xt = ft.pinSpacing,
                  Mt = ft.invalidateOnRefresh,
                  Rt = ft.anticipatePin,
                  Nt = ft.onScrubComplete,
                  zt = ft.onSnapComplete,
                  It = ft.once,
                  Bt = ft.snap,
                  jt = ft.pinReparent,
                  Jt = ft.pinSpacer,
                  Kt = ft.containerAnimation,
                  te = ft.fastScrollEnd,
                  me = ft.preventOverlaps,
                  we = e.horizontal || (e.containerAnimation && !1 !== e.horizontal) ? D : R,
                  Ee = !vt && 0 !== vt,
                  Oe = N(e.scroller || j),
                  Ae = H.core.getCache(Oe),
                  De = Yt(Oe),
                  Ne = 'fixed' === ('pinType' in e ? e.pinType : E(Oe, 'pinType') || (De && 'fixed')),
                  ze = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                  Le = Ee && e.toggleActions.split(' '),
                  Ie = 'markers' in e ? e.markers : Te.markers,
                  Be = De ? 0 : parseFloat(he(Oe)['border' + we.p2 + le]) || 0,
                  Ye = this,
                  Xe =
                    e.onRefreshInit &&
                    function () {
                      return e.onRefreshInit(Ye)
                    },
                  Ue = (function (t, e, r) {
                    var n = r.d,
                      i = r.d2,
                      s = r.a
                    return (s = E(t, 'getBoundingClientRect'))
                      ? function () {
                          return s()[n]
                        }
                      : function () {
                          return (e ? Xt(i) : t['client' + i]) || 0
                        }
                  })(Oe, De, we),
                  je = (function (t, e) {
                    return !e || ~w.indexOf(t)
                      ? Ht(t)
                      : function () {
                          return er
                        }
                  })(Oe, De),
                  Ve = 0,
                  Qe = 0,
                  Ge = 0,
                  $e = z(Oe, we)
                if (
                  ((Ye._startClamp = Ye._endClamp = !1),
                  (Ye._dir = we),
                  (Rt *= 45),
                  (Ye.scroller = Oe),
                  (Ye.scroll = Kt ? Kt.time.bind(Kt) : $e),
                  (o = $e()),
                  (Ye.vars = e),
                  (r = r || e.animation),
                  'refreshPriority' in e && ((at = 1), -9999 === e.refreshPriority && (kt = Ye)),
                  (Ae.tweenScroll = Ae.tweenScroll || { top: ar(Oe, R), left: ar(Oe, D) }),
                  (Ye.tweenTo = n = Ae.tweenScroll[we.p]),
                  (Ye.scrubDuration = function (t) {
                    ;(U = Wt(t) && t)
                      ? X
                        ? X.duration(t)
                        : (X = H.to(r, {
                            ease: 'expo',
                            totalProgress: '+=0',
                            inherit: !1,
                            duration: U,
                            paused: !0,
                            onComplete: function () {
                              return Nt && Nt(Ye)
                            },
                          }))
                      : (X && X.progress(1).kill(), (X = 0))
                  }),
                  r &&
                    ((r.vars.lazy = !1),
                    (r._initted && !Ye.isReverted) ||
                      (!1 !== r.vars.immediateRender &&
                        !1 !== e.immediateRender &&
                        r.duration() &&
                        r.render(0, !0, !0)),
                    (Ye.animation = r.pause()),
                    (r.scrollTrigger = Ye),
                    Ye.scrubDuration(vt),
                    (B = 0),
                    dt || (dt = r.vars.id)),
                  Bt &&
                    ((Qt(Bt) && !Bt.push) || (Bt = { snapTo: Bt }),
                    'scrollBehavior' in W.style && H.set(De ? [W, V] : Oe, { scrollBehavior: 'auto' }),
                    b.forEach(function (t) {
                      return Vt(t) && t.target === (De ? q.scrollingElement || V : Oe) && (t.smooth = !1)
                    }),
                    (s = Vt(Bt.snapTo)
                      ? Bt.snapTo
                      : 'labels' === Bt.snapTo
                      ? (function (t) {
                          return function (e) {
                            return H.utils.snap(_e(t), e)
                          }
                        })(r)
                      : 'labelsDirectional' === Bt.snapTo
                      ? ((ot = r),
                        function (t, e) {
                          return ve(_e(ot))(t, e.direction)
                        })
                      : !1 !== Bt.directional
                      ? function (t, e) {
                          return ve(Bt.snapTo)(t, Ot() - Qe < 500 ? 0 : e.direction)
                        }
                      : H.utils.snap(Bt.snapTo)),
                    (Q = Bt.duration || { min: 0.1, max: 2 }),
                    (Q = Qt(Q) ? Z(Q.min, Q.max) : Z(Q, Q)),
                    (G = H.delayedCall(Bt.delay || U / 2 || 0.1, function () {
                      var t = $e(),
                        e = Ot() - Qe < 500,
                        i = n.tween
                      if (!(e || Math.abs(Ye.getVelocity()) < 10) || i || et || Ve === t)
                        Ye.isActive && Ve !== t && G.restart(!0)
                      else {
                        var o,
                          a,
                          c = (t - u) / _,
                          f = r && !Ee ? r.totalProgress() : c,
                          h = e ? 0 : ((f - Y) / (Ot() - J)) * 1e3 || 0,
                          p = H.utils.clamp(-c, 1 - c, (Zt(h / 2) * h) / 0.185),
                          d = c + (!1 === Bt.inertia ? 0 : p),
                          g = Bt,
                          v = g.onStart,
                          m = g.onInterrupt,
                          y = g.onComplete
                        if (
                          ((o = s(d, Ye)), Wt(o) || (o = d), (a = Math.round(u + o * _)), t <= l && t >= u && a !== t)
                        ) {
                          if (i && !i._initted && i.data <= Zt(a - t)) return
                          !1 === Bt.inertia && (p = o - c),
                            n(
                              a,
                              {
                                duration: Q(Zt((0.185 * Math.max(Zt(d - f), Zt(o - f))) / h / 0.05 || 0)),
                                ease: Bt.ease || 'power3',
                                data: Zt(a - t),
                                onInterrupt: function () {
                                  return G.restart(!0) && m && m(Ye)
                                },
                                onComplete: function () {
                                  Ye.update(),
                                    (Ve = $e()),
                                    r && (X ? X.resetTo('totalProgress', o, r._tTime / r._tDur) : r.progress(o)),
                                    (B = Y = r && !Ee ? r.totalProgress() : Ye.progress),
                                    zt && zt(Ye),
                                    y && y(Ye)
                                },
                              },
                              t,
                              p * _,
                              a - t - p * _
                            ),
                            v && v(Ye, n.tween)
                        }
                      }
                    }).pause())),
                  dt && (Se[dt] = Ye),
                  (st = (mt = Ye.trigger = N(mt || (!0 !== yt && yt))) && mt._gsap && mt._gsap.stRevert) &&
                    (st = st(Ye)),
                  (yt = !0 === yt ? mt : N(yt)),
                  qt(pt) && (pt = { targets: mt, className: pt }),
                  yt &&
                    (!1 === xt ||
                      xt === ue ||
                      (xt =
                        !(!xt && yt.parentNode && yt.parentNode.style && 'flex' === he(yt.parentNode).display) && ae),
                    (Ye.pin = yt),
                    (i = H.core.getCache(yt)).spacer
                      ? (v = i.pinState)
                      : (Jt &&
                          ((Jt = N(Jt)) && !Jt.nodeType && (Jt = Jt.current || Jt.nativeElement),
                          (i.spacerIsNative = !!Jt),
                          Jt && (i.spacerState = tr(Jt))),
                        (i.spacer = x = Jt || q.createElement('div')),
                        x.classList.add('pin-spacer'),
                        dt && x.classList.add('pin-spacer-' + dt),
                        (i.pinState = v = tr(yt))),
                    !1 !== e.force3D && H.set(yt, { force3D: !0 }),
                    (Ye.spacer = x = i.spacer),
                    (I = he(yt)),
                    (S = I[xt + we.os2]),
                    (k = H.getProperty(yt)),
                    (C = H.quickSetter(yt, we.a, fe)),
                    Ze(yt, x, I),
                    (y = tr(yt))),
                  Ie)
                ) {
                  ;(d = Qt(Ie) ? pe(Ie, xe) : xe),
                    (h = Ce('scroller-start', dt, Oe, we, d, 0)),
                    (p = Ce('scroller-end', dt, Oe, we, d, 0, h)),
                    (T = h['offset' + we.op.d2])
                  var Je = N(E(Oe, 'content') || Oe)
                  ;(c = this.markerStart = Ce('start', dt, Je, we, d, T, 0, Kt)),
                    (f = this.markerEnd = Ce('end', dt, Je, we, d, T, 0, Kt)),
                    Kt && (it = H.quickSetter([c, f], we.a, fe)),
                    Ne ||
                      (w.length && !0 === E(Oe, 'fixedMarkers')) ||
                      ((ct = he((lt = De ? W : Oe)).position),
                      (lt.style.position = 'absolute' === ct || 'fixed' === ct ? ct : 'relative'),
                      H.set([h, p], { force3D: !0 }),
                      (P = H.quickSetter(h, we.a, fe)),
                      (L = H.quickSetter(p, we.a, fe)))
                }
                if (Kt) {
                  var nr = Kt.vars.onUpdate,
                    sr = Kt.vars.onUpdateParams
                  Kt.eventCallback('onUpdate', function () {
                    Ye.update(0, 0, 1), nr && nr.apply(Kt, sr || [])
                  })
                }
                if (
                  ((Ye.previous = function () {
                    return Me[Me.indexOf(Ye) - 1]
                  }),
                  (Ye.next = function () {
                    return Me[Me.indexOf(Ye) + 1]
                  }),
                  (Ye.revert = function (t, e) {
                    if (!e) return Ye.kill(!0)
                    var n = !1 !== t || !Ye.enabled,
                      i = tt
                    n !== Ye.isReverted &&
                      (n && ((K = Math.max($e(), Ye.scroll.rec || 0)), (Ge = Ye.progress), (rt = r && r.progress())),
                      c &&
                        [c, f, h, p].forEach(function (t) {
                          return (t.style.display = n ? 'none' : 'block')
                        }),
                      n && ((tt = Ye), Ye.update(n)),
                      !yt ||
                        (jt && Ye.isActive) ||
                        (n
                          ? (function (t, e, r) {
                              Ke(r)
                              var n = t._gsap
                              if (n.spacerIsNative) Ke(n.spacerState)
                              else if (t._gsap.swappedIn) {
                                var i = e.parentNode
                                i && (i.insertBefore(t, e), i.removeChild(e))
                              }
                              t._gsap.swappedIn = !1
                            })(yt, x, v)
                          : Ze(yt, x, he(yt), A)),
                      n || Ye.update(n),
                      (tt = i),
                      (Ye.isReverted = n))
                  }),
                  (Ye.refresh = function (i, s, d, b) {
                    if ((!tt && Ye.enabled) || s)
                      if (yt && i && St) ye(t, 'scrollEnd', Fe)
                      else {
                        !Tt && Xe && Xe(Ye),
                          (tt = Ye),
                          n.tween && !d && (n.tween.kill(), (n.tween = 0)),
                          X && X.pause(),
                          Mt && r && r.revert({ kill: !1 }).invalidate(),
                          Ye.isReverted || Ye.revert(!0, !0),
                          (Ye._subPinOffset = !1)
                        var w,
                          T,
                          E,
                          C,
                          S,
                          P,
                          L,
                          I,
                          B,
                          Y,
                          U,
                          j,
                          Q,
                          $ = Ue(),
                          Z = je(),
                          J = Kt ? Kt.duration() : Ut(Oe, we),
                          et = _ <= 0.01,
                          nt = 0,
                          it = b || 0,
                          st = Qt(d) ? d.end : e.end,
                          ot = e.endTrigger || mt,
                          at = Qt(d) ? d.start : e.start || (0 !== e.start && mt ? (yt ? '0 0' : '0 100%') : 0),
                          lt = (Ye.pinnedContainer = e.pinnedContainer && N(e.pinnedContainer, Ye)),
                          ct = (mt && Math.max(0, Me.indexOf(Ye))) || 0,
                          ft = ct
                        for (Ie && Qt(d) && ((j = H.getProperty(h, we.p)), (Q = H.getProperty(p, we.p))); ft--; )
                          (P = Me[ft]).end || P.refresh(0, 1) || (tt = Ye),
                            !(L = P.pin) ||
                              (L !== mt && L !== yt && L !== lt) ||
                              P.isReverted ||
                              (Y || (Y = []), Y.unshift(P), P.revert(!0, !0)),
                            P !== Me[ft] && (ct--, ft--)
                        for (
                          Vt(at) && (at = at(Ye)),
                            at = Pt(at, 'start', Ye),
                            u =
                              rr(at, mt, $, we, $e(), c, h, Ye, Z, Be, Ne, J, Kt, Ye._startClamp && '_startClamp') ||
                              (yt ? -0.001 : 0),
                            Vt(st) && (st = st(Ye)),
                            qt(st) &&
                              !st.indexOf('+=') &&
                              (~st.indexOf(' ')
                                ? (st = (qt(at) ? at.split(' ')[0] : '') + st)
                                : ((nt = ke(st.substr(2), $)),
                                  (st = qt(at)
                                    ? at
                                    : (Kt
                                        ? H.utils.mapRange(
                                            0,
                                            Kt.duration(),
                                            Kt.scrollTrigger.start,
                                            Kt.scrollTrigger.end,
                                            u
                                          )
                                        : u) + nt),
                                  (ot = mt))),
                            st = Pt(st, 'end', Ye),
                            l =
                              Math.max(
                                u,
                                rr(
                                  st || (ot ? '100% 0' : J),
                                  ot,
                                  $,
                                  we,
                                  $e() + nt,
                                  f,
                                  p,
                                  Ye,
                                  Z,
                                  Be,
                                  Ne,
                                  J,
                                  Kt,
                                  Ye._endClamp && '_endClamp'
                                )
                              ) || -0.001,
                            nt = 0,
                            ft = ct;
                          ft--;

                        )
                          (L = (P = Me[ft]).pin) &&
                            P.start - P._pinPush <= u &&
                            !Kt &&
                            P.end > 0 &&
                            ((w = P.end - (Ye._startClamp ? Math.max(0, P.start) : P.start)),
                            ((L === mt && P.start - P._pinPush < u) || L === lt) &&
                              isNaN(at) &&
                              (nt += w * (1 - P.progress)),
                            L === yt && (it += w))
                        if (
                          ((u += nt),
                          (l += nt),
                          Ye._startClamp && (Ye._startClamp += nt),
                          Ye._endClamp && !Tt && ((Ye._endClamp = l || -0.001), (l = Math.min(l, Ut(Oe, we)))),
                          (_ = l - u || ((u -= 0.01) && 0.001)),
                          et && (Ge = H.utils.clamp(0, 1, H.utils.normalize(u, l, K))),
                          (Ye._pinPush = it),
                          c && nt && (((w = {})[we.a] = '+=' + nt), lt && (w[we.p] = '-=' + $e()), H.set([c, f], w)),
                          !yt || (bt && Ye.end >= Ut(Oe, we)))
                        ) {
                          if (mt && $e() && !Kt)
                            for (T = mt.parentNode; T && T !== W; )
                              T._pinOffset && ((u -= T._pinOffset), (l -= T._pinOffset)), (T = T.parentNode)
                        } else
                          (w = he(yt)),
                            (C = we === R),
                            (E = $e()),
                            (O = parseFloat(k(we.a)) + it),
                            !J &&
                              l > 1 &&
                              ((U = {
                                style: (U = (De ? q.scrollingElement || V : Oe).style),
                                value: U['overflow' + we.a.toUpperCase()],
                              }),
                              De &&
                                'scroll' !== he(W)['overflow' + we.a.toUpperCase()] &&
                                (U.style['overflow' + we.a.toUpperCase()] = 'scroll')),
                            Ze(yt, x, w),
                            (y = tr(yt)),
                            (T = de(yt, !0)),
                            (I = Ne && z(Oe, C ? D : R)()),
                            xt
                              ? (((A = [xt + we.os2, _ + it + fe]).t = x),
                                (ft = xt === ae ? ge(yt, we) + _ + it : 0) &&
                                  (A.push(we.d, ft + fe),
                                  'auto' !== x.style.flexBasis && (x.style.flexBasis = ft + fe)),
                                Ke(A),
                                lt &&
                                  Me.forEach(function (t) {
                                    t.pin === lt && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                                  }),
                                Ne && $e(K))
                              : (ft = ge(yt, we)) && 'auto' !== x.style.flexBasis && (x.style.flexBasis = ft + fe),
                            Ne &&
                              (((S = {
                                top: T.top + (C ? E - u : I) + fe,
                                left: T.left + (C ? I : E - u) + fe,
                                boxSizing: 'border-box',
                                position: 'fixed',
                              })[ee] = S['max' + le] =
                                Math.ceil(T.width) + fe),
                              (S[re] = S['max' + ce] = Math.ceil(T.height) + fe),
                              (S[ue] = S[ue + se] = S[ue + ne] = S[ue + oe] = S[ue + ie] = '0'),
                              (S[ae] = w[ae]),
                              (S[ae + se] = w[ae + se]),
                              (S[ae + ne] = w[ae + ne]),
                              (S[ae + oe] = w[ae + oe]),
                              (S[ae + ie] = w[ae + ie]),
                              (m = (function (t, e, r) {
                                for (var n, i = [], s = t.length, o = r ? 8 : 0; o < s; o += 2)
                                  (n = t[o]), i.push(n, n in e ? e[n] : t[o + 1])
                                return (i.t = t.t), i
                              })(v, S, jt)),
                              Tt && $e(0)),
                            r
                              ? ((B = r._initted),
                                ut(1),
                                r.render(r.duration(), !0, !0),
                                (M = k(we.a) - O + _ + it),
                                (F = Math.abs(_ - M) > 1),
                                Ne && F && m.splice(m.length - 2, 2),
                                r.render(0, !0, !0),
                                B || r.invalidate(!0),
                                r.parent || r.totalTime(r.totalTime()),
                                ut(0))
                              : (M = _),
                            U &&
                              (U.value
                                ? (U.style['overflow' + we.a.toUpperCase()] = U.value)
                                : U.style.removeProperty('overflow-' + we.a))
                        Y &&
                          Y.forEach(function (t) {
                            return t.revert(!1, !0)
                          }),
                          (Ye.start = u),
                          (Ye.end = l),
                          (o = a = Tt ? K : $e()),
                          Kt || Tt || (o < K && $e(K), (Ye.scroll.rec = 0)),
                          Ye.revert(!1, !0),
                          (Qe = Ot()),
                          G && ((Ve = -1), G.restart(!0)),
                          (tt = 0),
                          r &&
                            Ee &&
                            (r._initted || rt) &&
                            r.progress() !== rt &&
                            r.progress(rt || 0, !0).render(r.time(), !0, !0),
                          (et || Ge !== Ye.progress || Kt || Mt) &&
                            (r && !Ee && r.totalProgress(Kt && u < -0.001 && !Ge ? H.utils.normalize(u, l, 0) : Ge, !0),
                            (Ye.progress = et || (o - u) / _ === Ge ? 0 : Ge)),
                          yt && xt && (x._pinOffset = Math.round(Ye.progress * M)),
                          X && X.invalidate(),
                          isNaN(j) ||
                            ((j -= H.getProperty(h, we.p)),
                            (Q -= H.getProperty(p, we.p)),
                            or(h, we, j),
                            or(c, we, j - (b || 0)),
                            or(p, we, Q),
                            or(f, we, Q - (b || 0))),
                          et && !Tt && Ye.update(),
                          !_t || Tt || g || ((g = !0), _t(Ye), (g = !1))
                      }
                  }),
                  (Ye.getVelocity = function () {
                    return (($e() - a) / (Ot() - J)) * 1e3 || 0
                  }),
                  (Ye.endAnimation = function () {
                    Gt(Ye.callbackAnimation),
                      r && (X ? X.progress(1) : r.paused() ? Ee || Gt(r, Ye.direction < 0, 1) : Gt(r, r.reversed()))
                  }),
                  (Ye.labelToScroll = function (t) {
                    return (r && r.labels && (u || Ye.refresh() || u) + (r.labels[t] / r.duration()) * _) || 0
                  }),
                  (Ye.getTrailing = function (t) {
                    var e = Me.indexOf(Ye),
                      r = Ye.direction > 0 ? Me.slice(0, e).reverse() : Me.slice(e + 1)
                    return (
                      qt(t)
                        ? r.filter(function (e) {
                            return e.vars.preventOverlaps === t
                          })
                        : r
                    ).filter(function (t) {
                      return Ye.direction > 0 ? t.end <= u : t.start >= l
                    })
                  }),
                  (Ye.update = function (t, e, i) {
                    if (!Kt || i || t) {
                      var s,
                        c,
                        f,
                        p,
                        d,
                        g,
                        v,
                        b = !0 === Tt ? K : Ye.scroll(),
                        w = t ? 0 : (b - u) / _,
                        T = w < 0 ? 0 : w > 1 ? 1 : w || 0,
                        E = Ye.progress
                      if (
                        (e && ((a = o), (o = Kt ? $e() : b), Bt && ((Y = B), (B = r && !Ee ? r.totalProgress() : T))),
                        Rt &&
                          yt &&
                          !tt &&
                          !Ct &&
                          St &&
                          (!T && u < b + ((b - a) / (Ot() - J)) * Rt
                            ? (T = 1e-4)
                            : 1 === T && l > b + ((b - a) / (Ot() - J)) * Rt && (T = 0.9999)),
                        T !== E && Ye.enabled)
                      ) {
                        if (
                          ((p = (d = (s = Ye.isActive = !!T && T < 1) !== (!!E && E < 1)) || !!T != !!E),
                          (Ye.direction = T > E ? 1 : -1),
                          (Ye.progress = T),
                          p &&
                            !tt &&
                            ((c = T && !E ? 0 : 1 === T ? 1 : 1 === E ? 2 : 3),
                            Ee &&
                              ((f = (!d && 'none' !== Le[c + 1] && Le[c + 1]) || Le[c]),
                              (v = r && ('complete' === f || 'reset' === f || f in r)))),
                          me &&
                            (d || v) &&
                            (v || vt || !r) &&
                            (Vt(me)
                              ? me(Ye)
                              : Ye.getTrailing(me).forEach(function (t) {
                                  return t.endAnimation()
                                })),
                          Ee ||
                            (!X || tt || Ct
                              ? r && r.totalProgress(T, !(!tt || (!Qe && !t)))
                              : (X._dp._time - X._start !== X._time && X.render(X._dp._time - X._start),
                                X.resetTo
                                  ? X.resetTo('totalProgress', T, r._tTime / r._tDur)
                                  : ((X.vars.totalProgress = T), X.invalidate().restart()))),
                          yt)
                        )
                          if ((t && xt && (x.style[xt + we.os2] = S), Ne)) {
                            if (p) {
                              if (((g = !t && T > E && l + 1 > b && b + 1 >= Ut(Oe, we)), jt))
                                if (t || (!s && !g)) ir(yt, x)
                                else {
                                  var k = de(yt, !0),
                                    A = b - u
                                  ir(yt, W, k.top + (we === R ? A : 0) + fe, k.left + (we === R ? 0 : A) + fe)
                                }
                              Ke(s || g ? m : y), (F && T < 1 && s) || C(O + (1 !== T || g ? 0 : M))
                            }
                          } else C(Lt(O + M * T))
                        Bt && !n.tween && !tt && !Ct && G.restart(!0),
                          pt &&
                            (d || (It && T && (T < 1 || !wt))) &&
                            $(pt.targets).forEach(function (t) {
                              return t.classList[s || It ? 'add' : 'remove'](pt.className)
                            }),
                          ht && !Ee && !t && ht(Ye),
                          p && !tt
                            ? (Ee &&
                                (v &&
                                  ('complete' === f
                                    ? r.pause().totalProgress(1)
                                    : 'reset' === f
                                    ? r.restart(!0).pause()
                                    : 'restart' === f
                                    ? r.restart(!0)
                                    : r[f]()),
                                ht && ht(Ye)),
                              (!d && wt) ||
                                (gt && d && $t(Ye, gt),
                                ze[c] && $t(Ye, ze[c]),
                                It && (1 === T ? Ye.kill(!1, 1) : (ze[c] = 0)),
                                d || (ze[(c = 1 === T ? 1 : 3)] && $t(Ye, ze[c]))),
                              te &&
                                !s &&
                                Math.abs(Ye.getVelocity()) > (Wt(te) ? te : 2500) &&
                                (Gt(Ye.callbackAnimation), X ? X.progress(1) : Gt(r, 'reverse' === f ? 1 : !T, 1)))
                            : Ee && ht && !tt && ht(Ye)
                      }
                      if (L) {
                        var D = Kt ? (b / Kt.duration()) * (Kt._caScrollDist || 0) : b
                        P(D + (h._isFlipped ? 1 : 0)), L(D)
                      }
                      it && it((-b / Kt.duration()) * (Kt._caScrollDist || 0))
                    }
                  }),
                  (Ye.enable = function (e, r) {
                    Ye.enabled ||
                      ((Ye.enabled = !0),
                      ye(Oe, 'resize', Re),
                      De || ye(Oe, 'scroll', Pe),
                      Xe && ye(t, 'refreshInit', Xe),
                      !1 !== e && ((Ye.progress = Ge = 0), (o = a = Ve = $e())),
                      !1 !== r && Ye.refresh())
                  }),
                  (Ye.getTween = function (t) {
                    return t && n ? n.tween : X
                  }),
                  (Ye.setPositions = function (t, e, r, n) {
                    if (Kt) {
                      var i = Kt.scrollTrigger,
                        s = Kt.duration(),
                        o = i.end - i.start
                      ;(t = i.start + (o * t) / s), (e = i.start + (o * e) / s)
                    }
                    Ye.refresh(!1, !1, { start: Dt(t, r && !!Ye._startClamp), end: Dt(e, r && !!Ye._endClamp) }, n),
                      Ye.update()
                  }),
                  (Ye.adjustPinSpacing = function (t) {
                    if (A && t) {
                      var e = A.indexOf(we.d) + 1
                      ;(A[e] = parseFloat(A[e]) + t + fe), (A[1] = parseFloat(A[1]) + t + fe), Ke(A)
                    }
                  }),
                  (Ye.disable = function (e, r) {
                    if (
                      Ye.enabled &&
                      (!1 !== e && Ye.revert(!0, !0),
                      (Ye.enabled = Ye.isActive = !1),
                      r || (X && X.pause()),
                      (K = 0),
                      i && (i.uncache = 1),
                      Xe && be(t, 'refreshInit', Xe),
                      G && (G.pause(), n.tween && n.tween.kill() && (n.tween = 0)),
                      !De)
                    ) {
                      for (var s = Me.length; s--; ) if (Me[s].scroller === Oe && Me[s] !== Ye) return
                      be(Oe, 'resize', Re), De || be(Oe, 'scroll', Pe)
                    }
                  }),
                  (Ye.kill = function (t, n) {
                    Ye.disable(t, n), X && !n && X.kill(), dt && delete Se[dt]
                    var s = Me.indexOf(Ye)
                    s >= 0 && Me.splice(s, 1),
                      s === nt && We > 0 && nt--,
                      (s = 0),
                      Me.forEach(function (t) {
                        return t.scroller === Ye.scroller && (s = 1)
                      }),
                      s || Tt || (Ye.scroll.rec = 0),
                      r && ((r.scrollTrigger = null), t && r.revert({ kill: !1 }), n || r.kill()),
                      c &&
                        [c, f, h, p].forEach(function (t) {
                          return t.parentNode && t.parentNode.removeChild(t)
                        }),
                      kt === Ye && (kt = 0),
                      yt &&
                        (i && (i.uncache = 1),
                        (s = 0),
                        Me.forEach(function (t) {
                          return t.pin === yt && s++
                        }),
                        s || (i.spacer = 0)),
                      e.onKill && e.onKill(Ye)
                  }),
                  Me.push(Ye),
                  Ye.enable(!1, !1),
                  st && st(Ye),
                  r && r.add && !_)
                ) {
                  var ur = Ye.update
                  ;(Ye.update = function () {
                    ;(Ye.update = ur), u || l || Ye.refresh()
                  }),
                    H.delayedCall(0.01, Ye.update),
                    (_ = 0.01),
                    (u = l = 0)
                } else Ye.refresh()
                yt &&
                  (function () {
                    if (Et !== He) {
                      var t = (Et = He)
                      requestAnimationFrame(function () {
                        return t === He && qe(!0)
                      })
                    }
                  })()
              } else this.update = this.refresh = this.kill = Ft
            }),
            (t.register = function (e) {
              return U || ((H = e || Bt()), It() && window.document && t.enable(), (U = At)), U
            }),
            (t.defaults = function (t) {
              if (t) for (var e in t) Te[e] = t[e]
              return Te
            }),
            (t.disable = function (t, e) {
              ;(At = 0),
                Me.forEach(function (r) {
                  return r[e ? 'kill' : 'disable'](t)
                }),
                be(j, 'wheel', Pe),
                be(q, 'scroll', Pe),
                clearInterval(K),
                be(q, 'touchcancel', Ft),
                be(W, 'touchstart', Ft),
                me(be, q, 'pointerdown,touchstart,mousedown', Nt),
                me(be, q, 'pointerup,touchend,mouseup', zt),
                G.kill(),
                jt(be)
              for (var r = 0; r < b.length; r += 3) we(be, b[r], b[r + 1]), we(be, b[r], b[r + 2])
            }),
            (t.enable = function () {
              if (
                ((j = window),
                (q = document),
                (V = q.documentElement),
                (W = q.body),
                H &&
                  (($ = H.utils.toArray),
                  (Z = H.utils.clamp),
                  (gt = H.core.context || Ft),
                  (ut = H.core.suppressOverwrites || Ft),
                  (_t = j.history.scrollRestoration || 'auto'),
                  (Ve = j.pageYOffset),
                  H.core.globals('ScrollTrigger', t),
                  W))
              ) {
                ;(At = 1),
                  ((vt = document.createElement('div')).style.height = '100vh'),
                  (vt.style.position = 'absolute'),
                  Ue(),
                  Rt(),
                  X.register(H),
                  (t.isTouch = X.isTouch),
                  (dt = X.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                  (ft = 1 === X.isTouch),
                  ye(j, 'wheel', Pe),
                  (Q = [j, q, V, W]),
                  H.matchMedia
                    ? ((t.matchMedia = function (t) {
                        var e,
                          r = H.matchMedia()
                        for (e in t) r.add(e, t[e])
                        return r
                      }),
                      H.addEventListener('matchMediaInit', function () {
                        return Ye()
                      }),
                      H.addEventListener('matchMediaRevert', function () {
                        return Be()
                      }),
                      H.addEventListener('matchMedia', function () {
                        qe(0, 1), Le('matchMedia')
                      }),
                      H.matchMedia('(orientation: portrait)', function () {
                        return De(), De
                      }))
                    : console.warn('Requires GSAP 3.11.0 or later'),
                  De(),
                  ye(q, 'scroll', Pe)
                var e,
                  r,
                  n = W.style,
                  i = n.borderTopStyle,
                  s = H.core.Animation.prototype
                for (
                  s.revert ||
                    Object.defineProperty(s, 'revert', {
                      value: function () {
                        return this.time(-0.01, !0)
                      },
                    }),
                    n.borderTopStyle = 'solid',
                    e = de(W),
                    R.m = Math.round(e.top + R.sc()) || 0,
                    D.m = Math.round(e.left + D.sc()) || 0,
                    i ? (n.borderTopStyle = i) : n.removeProperty('border-top-style'),
                    K = setInterval(Ae, 250),
                    H.delayedCall(0.5, function () {
                      return (Ct = 0)
                    }),
                    ye(q, 'touchcancel', Ft),
                    ye(W, 'touchstart', Ft),
                    me(ye, q, 'pointerdown,touchstart,mousedown', Nt),
                    me(ye, q, 'pointerup,touchend,mouseup', zt),
                    rt = H.utils.checkPrefix('transform'),
                    $e.push(rt),
                    U = Ot(),
                    G = H.delayedCall(0.2, qe).pause(),
                    ot = [
                      q,
                      'visibilitychange',
                      function () {
                        var t = j.innerWidth,
                          e = j.innerHeight
                        q.hidden ? ((it = t), (st = e)) : (it === t && st === e) || Re()
                      },
                      q,
                      'DOMContentLoaded',
                      qe,
                      j,
                      'load',
                      qe,
                      j,
                      'resize',
                      Re,
                    ],
                    jt(ye),
                    Me.forEach(function (t) {
                      return t.enable(0, 1)
                    }),
                    r = 0;
                  r < b.length;
                  r += 3
                )
                  we(be, b[r], b[r + 1]), we(be, b[r], b[r + 2])
              }
            }),
            (t.config = function (e) {
              'limitCallbacks' in e && (wt = !!e.limitCallbacks)
              var r = e.syncInterval
              ;(r && clearInterval(K)) || ((K = r) && setInterval(Ae, r)),
                'ignoreMobileResize' in e && (ft = 1 === t.isTouch && e.ignoreMobileResize),
                'autoRefreshEvents' in e &&
                  (jt(be) || jt(ye, e.autoRefreshEvents || 'none'),
                  (lt = -1 === (e.autoRefreshEvents + '').indexOf('resize')))
            }),
            (t.scrollerProxy = function (t, e) {
              var r = N(t),
                n = b.indexOf(r),
                i = Yt(r)
              ~n && b.splice(n, i ? 6 : 2), e && (i ? w.unshift(j, e, W, e, V, e) : w.unshift(r, e))
            }),
            (t.clearMatchMedia = function (t) {
              Me.forEach(function (e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
              })
            }),
            (t.isInViewport = function (t, e, r) {
              var n = (qt(t) ? N(t) : t).getBoundingClientRect(),
                i = n[r ? ee : re] * e || 0
              return r ? n.right - i > 0 && n.left + i < j.innerWidth : n.bottom - i > 0 && n.top + i < j.innerHeight
            }),
            (t.positionInViewport = function (t, e, r) {
              qt(t) && (t = N(t))
              var n = t.getBoundingClientRect(),
                i = n[r ? ee : re],
                s =
                  null == e
                    ? i / 2
                    : e in Ee
                    ? Ee[e] * i
                    : ~e.indexOf('%')
                    ? (parseFloat(e) * i) / 100
                    : parseFloat(e) || 0
              return r ? (n.left + s) / j.innerWidth : (n.top + s) / j.innerHeight
            }),
            (t.killAll = function (t) {
              if (
                (Me.slice(0).forEach(function (t) {
                  return 'ScrollSmoother' !== t.vars.id && t.kill()
                }),
                !0 !== t)
              ) {
                var e = Ne.killAll || []
                ;(Ne = {}),
                  e.forEach(function (t) {
                    return t()
                  })
              }
            }),
            t
          )
        })()
      ;(ur.version = '3.12.5'),
        (ur.saveStyles = function (t) {
          return t
            ? $(t).forEach(function (t) {
                if (t && t.style) {
                  var e = Ie.indexOf(t)
                  e >= 0 && Ie.splice(e, 5),
                    Ie.push(t, t.style.cssText, t.getBBox && t.getAttribute('transform'), H.core.getCache(t), gt())
                }
              })
            : Ie
        }),
        (ur.revert = function (t, e) {
          return Ye(!t, e)
        }),
        (ur.create = function (t, e) {
          return new ur(t, e)
        }),
        (ur.refresh = function (t) {
          return t ? Re() : (U || ur.register()) && qe(!0)
        }),
        (ur.update = function (t) {
          return ++b.cache && Qe(!0 === t ? 2 : 0)
        }),
        (ur.clearScrollMemory = Xe),
        (ur.maxScroll = function (t, e) {
          return Ut(t, e ? D : R)
        }),
        (ur.getScrollFunc = function (t, e) {
          return z(N(t), e ? D : R)
        }),
        (ur.getById = function (t) {
          return Se[t]
        }),
        (ur.getAll = function () {
          return Me.filter(function (t) {
            return 'ScrollSmoother' !== t.vars.id
          })
        }),
        (ur.isScrolling = function () {
          return !!St
        }),
        (ur.snapDirectional = ve),
        (ur.addEventListener = function (t, e) {
          var r = Ne[t] || (Ne[t] = [])
          ~r.indexOf(e) || r.push(e)
        }),
        (ur.removeEventListener = function (t, e) {
          var r = Ne[t],
            n = r && r.indexOf(e)
          n >= 0 && r.splice(n, 1)
        }),
        (ur.batch = function (t, e) {
          var r,
            n = [],
            i = {},
            s = e.interval || 0.016,
            o = e.batchMax || 1e9,
            a = function (t, e) {
              var r = [],
                n = [],
                i = H.delayedCall(s, function () {
                  e(r, n), (r = []), (n = [])
                }).pause()
              return function (t) {
                r.length || i.restart(!0), r.push(t.trigger), n.push(t), o <= r.length && i.progress(1)
              }
            }
          for (r in e) i[r] = 'on' === r.substr(0, 2) && Vt(e[r]) && 'onRefreshInit' !== r ? a(0, e[r]) : e[r]
          return (
            Vt(o) &&
              ((o = o()),
              ye(ur, 'refresh', function () {
                return (o = e.batchMax())
              })),
            $(t).forEach(function (t) {
              var e = {}
              for (r in i) e[r] = i[r]
              ;(e.trigger = t), n.push(ur.create(e))
            }),
            n
          )
        })
      var lr,
        cr = function (t, e, r, n) {
          return e > n ? t(n) : e < 0 && t(0), r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
        },
        fr = function t(e, r) {
          !0 === r
            ? e.style.removeProperty('touch-action')
            : (e.style.touchAction = !0 === r ? 'auto' : r ? 'pan-' + r + (X.isTouch ? ' pinch-zoom' : '') : 'none'),
            e === V && t(W, r)
        },
        hr = { auto: 1, scroll: 1 },
        pr = function (t) {
          var e,
            r = t.event,
            n = t.target,
            i = t.axis,
            s = (r.changedTouches ? r.changedTouches[0] : r).target,
            o = s._gsap || H.core.getCache(s),
            a = Ot()
          if (!o._isScrollT || a - o._isScrollT > 2e3) {
            for (
              ;
              s &&
              s !== W &&
              ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
                (!hr[(e = he(s)).overflowY] && !hr[e.overflowX]));

            )
              s = s.parentNode
            ;(o._isScroll = s && s !== n && !Yt(s) && (hr[(e = he(s)).overflowY] || hr[e.overflowX])),
              (o._isScrollT = a)
          }
          ;(o._isScroll || 'x' === i) && (r.stopPropagation(), (r._gsapAllow = !0))
        },
        dr = function (t, e, r, n) {
          return X.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: (n = n && pr),
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function () {
              return r && ye(q, X.eventTypes[0], _r, !1, !0)
            },
            onDisable: function () {
              return be(q, X.eventTypes[0], _r, !0)
            },
          })
        },
        gr = /(input|label|select|textarea)/i,
        _r = function (t) {
          var e = gr.test(t.target.tagName)
          ;(e || lr) && ((t._gsapAllow = !0), (lr = e))
        },
        vr = function (t) {
          Qt(t) || (t = {}),
            (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
            t.type || (t.type = 'wheel,touch'),
            (t.debounce = !!t.debounce),
            (t.id = t.id || 'normalizer')
          var e,
            r,
            n,
            i,
            s,
            o,
            a,
            u,
            l = t,
            c = l.normalizeScrollX,
            f = l.momentum,
            h = l.allowNestedScroll,
            p = l.onRelease,
            d = N(t.target) || V,
            g = H.core.globals().ScrollSmoother,
            _ = g && g.get(),
            v = dt && ((t.content && N(t.content)) || (_ && !1 !== t.content && !_.smooth() && _.content())),
            m = z(d, R),
            y = z(d, D),
            w = 1,
            x =
              (X.isTouch && j.visualViewport ? j.visualViewport.scale * j.visualViewport.width : j.outerWidth) /
              j.innerWidth,
            T = 0,
            E = Vt(f)
              ? function () {
                  return f(e)
                }
              : function () {
                  return f || 2.8
                },
            k = dr(d, t.type, !0, h),
            C = function () {
              return (i = !1)
            },
            O = Ft,
            M = Ft,
            S = function () {
              ;(r = Ut(d, R)), (M = Z(dt ? 1 : 0, r)), c && (O = Z(0, Ut(d, D))), (n = He)
            },
            A = function () {
              ;(v._gsap.y = Lt(parseFloat(v._gsap.y) + m.offset) + 'px'),
                (v.style.transform =
                  'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + parseFloat(v._gsap.y) + ', 0, 1)'),
                (m.offset = m.cacheID = 0)
            },
            P = function () {
              S(), s.isActive() && s.vars.scrollY > r && (m() > r ? s.progress(1) && m(r) : s.resetTo('scrollY', r))
            }
          return (
            v && H.set(v, { y: '+=0' }),
            (t.ignoreCheck = function (t) {
              return (
                (dt &&
                  'touchmove' === t.type &&
                  (function () {
                    if (i) {
                      requestAnimationFrame(C)
                      var t = Lt(e.deltaY / 2),
                        r = M(m.v - t)
                      if (v && r !== m.v + m.offset) {
                        m.offset = r - m.v
                        var n = Lt((parseFloat(v && v._gsap.y) || 0) - m.offset)
                        ;(v.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + n + ', 0, 1)'),
                          (v._gsap.y = n + 'px'),
                          (m.cacheID = b.cache),
                          Qe()
                      }
                      return !0
                    }
                    m.offset && A(), (i = !0)
                  })()) ||
                (w > 1.05 && 'touchstart' !== t.type) ||
                e.isGesturing ||
                (t.touches && t.touches.length > 1)
              )
            }),
            (t.onPress = function () {
              i = !1
              var t = w
              ;(w = Lt(((j.visualViewport && j.visualViewport.scale) || 1) / x)),
                s.pause(),
                t !== w && fr(d, w > 1.01 || (!c && 'x')),
                (o = y()),
                (a = m()),
                S(),
                (n = He)
            }),
            (t.onRelease = t.onGestureStart =
              function (t, e) {
                if ((m.offset && A(), e)) {
                  b.cache++
                  var n,
                    i,
                    o = E()
                  c &&
                    ((i = (n = y()) + (0.05 * o * -t.velocityX) / 0.227),
                    (o *= cr(y, n, i, Ut(d, D))),
                    (s.vars.scrollX = O(i))),
                    (i = (n = m()) + (0.05 * o * -t.velocityY) / 0.227),
                    (o *= cr(m, n, i, Ut(d, R))),
                    (s.vars.scrollY = M(i)),
                    s.invalidate().duration(o).play(0.01),
                    ((dt && s.vars.scrollY >= r) || n >= r - 1) && H.to({}, { onUpdate: P, duration: o })
                } else u.restart(!0)
                p && p(t)
              }),
            (t.onWheel = function () {
              s._ts && s.pause(), Ot() - T > 1e3 && ((n = 0), (T = Ot()))
            }),
            (t.onChange = function (t, e, r, i, s) {
              if ((He !== n && S(), e && c && y(O(i[2] === e ? o + (t.startX - t.x) : y() + e - i[1])), r)) {
                m.offset && A()
                var u = s[2] === r,
                  l = u ? a + t.startY - t.y : m() + r - s[1],
                  f = M(l)
                u && l !== f && (a += f - l), m(f)
              }
              ;(r || e) && Qe()
            }),
            (t.onEnable = function () {
              fr(d, !c && 'x'),
                ur.addEventListener('refresh', P),
                ye(j, 'resize', P),
                m.smooth && ((m.target.style.scrollBehavior = 'auto'), (m.smooth = y.smooth = !1)),
                k.enable()
            }),
            (t.onDisable = function () {
              fr(d, !0), be(j, 'resize', P), ur.removeEventListener('refresh', P), k.kill()
            }),
            (t.lockAxis = !1 !== t.lockAxis),
            ((e = new X(t)).iOS = dt),
            dt && !m() && m(1),
            dt && H.ticker.add(Ft),
            (u = e._dc),
            (s = H.to(e, {
              ease: 'power4',
              paused: !0,
              inherit: !1,
              scrollX: c ? '+=0.1' : '+=0',
              scrollY: '+=0.1',
              modifiers: {
                scrollY: sr(m, m(), function () {
                  return s.pause()
                }),
              },
              onUpdate: Qe,
              onComplete: u.vars.onComplete,
            })),
            e
          )
        }
      ;(ur.sort = function (t) {
        return Me.sort(
          t ||
            function (t, e) {
              return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
            }
        )
      }),
        (ur.observe = function (t) {
          return new X(t)
        }),
        (ur.normalizeScroll = function (t) {
          if (void 0 === t) return ct
          if (!0 === t && ct) return ct.enable()
          if (!1 === t) return ct && ct.kill(), void (ct = t)
          var e = t instanceof X ? t : vr(t)
          return ct && ct.target === e.target && ct.kill(), Yt(e.target) && (ct = e), e
        }),
        (ur.core = {
          _getVelocityProp: F,
          _inputObserver: dr,
          _scrollers: b,
          _proxies: w,
          bridge: {
            ss: function () {
              St || Le('scrollStart'), (St = Ot())
            },
            ref: function () {
              return tt
            },
          },
        }),
        Bt() && H.registerPlugin(ur)
    },
    67083: (t, e, r) => {
      'use strict'
      function n(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return t
      }
      function i(t, e) {
        ;(t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e)
      }
      r.d(e, { os: () => $n })
      var s,
        o,
        a,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        g,
        _,
        v,
        m,
        y,
        b,
        w,
        x = { autoSleep: 120, force3D: 'auto', nullTargetWarn: 1, units: { lineHeight: '' } },
        T = { duration: 0.5, overwrite: !1, delay: 0 },
        E = 1e8,
        k = 1e-8,
        C = 2 * Math.PI,
        O = C / 4,
        M = 0,
        S = Math.sqrt,
        A = Math.cos,
        P = Math.sin,
        D = function (t) {
          return 'string' == typeof t
        },
        R = function (t) {
          return 'function' == typeof t
        },
        N = function (t) {
          return 'number' == typeof t
        },
        z = function (t) {
          return void 0 === t
        },
        F = function (t) {
          return 'object' == typeof t
        },
        L = function (t) {
          return !1 !== t
        },
        I = function () {
          return 'undefined' != typeof window
        },
        B = function (t) {
          return R(t) || D(t)
        },
        Y = ('function' == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
        X = Array.isArray,
        H = /(?:-?\.?\d|\.)+/gi,
        U = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        j = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        q = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        V = /[+-]=-?[.\d]+/,
        W = /[^,'"\[\]\s]+/gi,
        Q = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        G = {},
        $ = {},
        Z = function (t) {
          return ($ = Ct(t, G)) && Or
        },
        J = function (t, e) {
          return console.warn('Invalid property', t, 'set to', e, 'Missing plugin? gsap.registerPlugin()')
        },
        K = function (t, e) {
          return !e && console.warn(t)
        },
        tt = function (t, e) {
          return (t && (G[t] = e) && $ && ($[t] = e)) || G
        },
        et = function () {
          return 0
        },
        rt = { suppressEvents: !0, isStart: !0, kill: !1 },
        nt = { suppressEvents: !0, kill: !1 },
        it = { suppressEvents: !0 },
        st = {},
        ot = [],
        at = {},
        ut = {},
        lt = {},
        ct = 30,
        ft = [],
        ht = '',
        pt = function (t) {
          var e,
            r,
            n = t[0]
          if ((F(n) || R(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
            for (r = ft.length; r-- && !ft[r].targetTest(n); );
            e = ft[r]
          }
          for (r = t.length; r--; ) (t[r] && (t[r]._gsap || (t[r]._gsap = new Xe(t[r], e)))) || t.splice(r, 1)
          return t
        },
        dt = function (t) {
          return t._gsap || pt(ie(t))[0]._gsap
        },
        gt = function (t, e, r) {
          return (r = t[e]) && R(r) ? t[e]() : (z(r) && t.getAttribute && t.getAttribute(e)) || r
        },
        _t = function (t, e) {
          return (t = t.split(',')).forEach(e) || t
        },
        vt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0
        },
        mt = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0
        },
        yt = function (t, e) {
          var r = e.charAt(0),
            n = parseFloat(e.substr(2))
          return (t = parseFloat(t)), '+' === r ? t + n : '-' === r ? t - n : '*' === r ? t * n : t / n
        },
        bt = function (t, e) {
          for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
          return n < r
        },
        wt = function () {
          var t,
            e,
            r = ot.length,
            n = ot.slice(0)
          for (at = {}, ot.length = 0, t = 0; t < r; t++)
            (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        xt = function (t, e, r, n) {
          ot.length && !o && wt(),
            t.render(e, r, n || (o && e < 0 && (t._initted || t._startAt))),
            ot.length && !o && wt()
        },
        Tt = function (t) {
          var e = parseFloat(t)
          return (e || 0 === e) && (t + '').match(W).length < 2 ? e : D(t) ? t.trim() : t
        },
        Et = function (t) {
          return t
        },
        kt = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r])
          return t
        },
        Ct = function (t, e) {
          for (var r in e) t[r] = e[r]
          return t
        },
        Ot = function t(e, r) {
          for (var n in r)
            '__proto__' !== n &&
              'constructor' !== n &&
              'prototype' !== n &&
              (e[n] = F(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n])
          return e
        },
        Mt = function (t, e) {
          var r,
            n = {}
          for (r in t) r in e || (n[r] = t[r])
          return n
        },
        St = function (t) {
          var e,
            r = t.parent || u,
            n = t.keyframes
              ? ((e = X(t.keyframes)),
                function (t, r) {
                  for (var n in r) n in t || ('duration' === n && e) || 'ease' === n || (t[n] = r[n])
                })
              : kt
          if (L(t.inherit)) for (; r; ) n(t, r.vars.defaults), (r = r.parent || r._dp)
          return t
        },
        At = function (t, e, r, n, i) {
          void 0 === r && (r = '_first'), void 0 === n && (n = '_last')
          var s,
            o = t[n]
          if (i) for (s = e[i]; o && o[i] > s; ) o = o._prev
          return (
            o ? ((e._next = o._next), (o._next = e)) : ((e._next = t[r]), (t[r] = e)),
            e._next ? (e._next._prev = e) : (t[n] = e),
            (e._prev = o),
            (e.parent = e._dp = t),
            e
          )
        },
        Pt = function (t, e, r, n) {
          void 0 === r && (r = '_first'), void 0 === n && (n = '_last')
          var i = e._prev,
            s = e._next
          i ? (i._next = s) : t[r] === e && (t[r] = s),
            s ? (s._prev = i) : t[n] === e && (t[n] = i),
            (e._next = e._prev = e.parent = null)
        },
        Dt = function (t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), (t._act = 0)
        },
        Rt = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r; ) (r._dirty = 1), (r = r.parent)
          return t
        },
        Nt = function (t, e, r, n) {
          return (
            t._startAt &&
            (o ? t._startAt.revert(nt) : (t.vars.immediateRender && !t.vars.autoRevert) || t._startAt.render(e, !0, n))
          )
        },
        zt = function t(e) {
          return !e || (e._ts && t(e.parent))
        },
        Ft = function (t) {
          return t._repeat ? Lt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0
        },
        Lt = function (t, e) {
          var r = Math.floor((t /= e))
          return t && r === t ? r - 1 : r
        },
        It = function (t, e) {
          return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        Bt = function (t) {
          return (t._end = mt(t._start + (t._tDur / Math.abs(t._ts || t._rts || k) || 0)))
        },
        Yt = function (t, e) {
          var r = t._dp
          return (
            r &&
              r.smoothChildTiming &&
              t._ts &&
              ((t._start = mt(
                r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
              )),
              Bt(t),
              r._dirty || Rt(r, t)),
            t
          )
        },
        Xt = function (t, e) {
          var r
          if (
            ((e._time || (!e._dur && e._initted) || (e._start < t._time && (e._dur || !e.add))) &&
              ((r = It(t.rawTime(), e)), (!e._dur || Kt(0, e.totalDuration(), r) - e._tTime > k) && e.render(r, !0)),
            Rt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration()) for (r = t; r._dp; ) r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp)
            t._zTime = -1e-8
          }
        },
        Ht = function (t, e, r, n) {
          return (
            e.parent && Dt(e),
            (e._start = mt((N(r) ? r : r || t !== u ? $t(t, r, e) : t._time) + e._delay)),
            (e._end = mt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
            At(t, e, '_first', '_last', t._sort ? '_start' : 0),
            Vt(e) || (t._recent = e),
            n || Xt(t, e),
            t._ts < 0 && Yt(t, t._tTime),
            t
          )
        },
        Ut = function (t, e) {
          return (G.ScrollTrigger || J('scrollTrigger', e)) && G.ScrollTrigger.create(e, t)
        },
        jt = function (t, e, r, n, i) {
          return (
            Ge(t, e, i),
            t._initted
              ? !r && t._pt && !o && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && p !== Me.frame
                ? (ot.push(t), (t._lazy = [i, n]), 1)
                : void 0
              : 1
          )
        },
        qt = function t(e) {
          var r = e.parent
          return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
        },
        Vt = function (t) {
          var e = t.data
          return 'isFromStart' === e || 'isStart' === e
        },
        Wt = function (t, e, r, n) {
          var i = t._repeat,
            s = mt(e) || 0,
            o = t._tTime / t._tDur
          return (
            o && !n && (t._time *= s / t._dur),
            (t._dur = s),
            (t._tDur = i ? (i < 0 ? 1e10 : mt(s * (i + 1) + t._rDelay * i)) : s),
            o > 0 && !n && Yt(t, (t._tTime = t._tDur * o)),
            t.parent && Bt(t),
            r || Rt(t.parent, t),
            t
          )
        },
        Qt = function (t) {
          return t instanceof Ue ? Rt(t) : Wt(t, t._dur)
        },
        Gt = { _start: 0, endTime: et, totalDuration: et },
        $t = function t(e, r, n) {
          var i,
            s,
            o,
            a = e.labels,
            u = e._recent || Gt,
            l = e.duration() >= E ? u.endTime(!1) : e._dur
          return D(r) && (isNaN(r) || r in a)
            ? ((s = r.charAt(0)),
              (o = '%' === r.substr(-1)),
              (i = r.indexOf('=')),
              '<' === s || '>' === s
                ? (i >= 0 && (r = r.replace(/=/, '')),
                  ('<' === s ? u._start : u.endTime(u._repeat >= 0)) +
                    (parseFloat(r.substr(1)) || 0) * (o ? (i < 0 ? u : n).totalDuration() / 100 : 1))
                : i < 0
                ? (r in a || (a[r] = l), a[r])
                : ((s = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
                  o && n && (s = (s / 100) * (X(n) ? n[0] : n).totalDuration()),
                  i > 1 ? t(e, r.substr(0, i - 1), n) + s : l + s))
            : null == r
            ? l
            : +r
        },
        Zt = function (t, e, r) {
          var n,
            i,
            s = N(e[1]),
            o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[o]
          if ((s && (a.duration = e[1]), (a.parent = r), t)) {
            for (n = a, i = r; i && !('immediateRender' in n); )
              (n = i.vars.defaults || {}), (i = L(i.vars.inherit) && i.parent)
            ;(a.immediateRender = L(n.immediateRender)), t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1])
          }
          return new tr(e[0], a, e[o + 1])
        },
        Jt = function (t, e) {
          return t || 0 === t ? e(t) : e
        },
        Kt = function (t, e, r) {
          return r < t ? t : r > e ? e : r
        },
        te = function (t, e) {
          return D(t) && (e = Q.exec(t)) ? e[1] : ''
        },
        ee = [].slice,
        re = function (t, e) {
          return (
            t &&
            F(t) &&
            'length' in t &&
            ((!e && !t.length) || (t.length - 1 in t && F(t[0]))) &&
            !t.nodeType &&
            t !== l
          )
        },
        ne = function (t, e, r) {
          return (
            void 0 === r && (r = []),
            t.forEach(function (t) {
              var n
              return (D(t) && !e) || re(t, 1) ? (n = r).push.apply(n, ie(t)) : r.push(t)
            }) || r
          )
        },
        ie = function (t, e, r) {
          return a && !e && a.selector
            ? a.selector(t)
            : !D(t) || r || (!c && Se())
            ? X(t)
              ? ne(t, r)
              : re(t)
              ? ee.call(t, 0)
              : t
              ? [t]
              : []
            : ee.call((e || f).querySelectorAll(t), 0)
        },
        se = function (t) {
          return (
            (t = ie(t)[0] || K('Invalid scope') || {}),
            function (e) {
              var r = t.current || t.nativeElement || t
              return ie(e, r.querySelectorAll ? r : r === t ? K('Invalid scope') || f.createElement('div') : t)
            }
          )
        },
        oe = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random()
          })
        },
        ae = function (t) {
          if (R(t)) return t
          var e = F(t) ? t : { each: t },
            r = Fe(e.ease),
            n = e.from || 0,
            i = parseFloat(e.base) || 0,
            s = {},
            o = n > 0 && n < 1,
            a = isNaN(n) || o,
            u = e.axis,
            l = n,
            c = n
          return (
            D(n) ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0) : !o && a && ((l = n[0]), (c = n[1])),
            function (t, o, f) {
              var h,
                p,
                d,
                g,
                _,
                v,
                m,
                y,
                b,
                w = (f || e).length,
                x = s[w]
              if (!x) {
                if (!(b = 'auto' === e.grid ? 0 : (e.grid || [1, E])[1])) {
                  for (m = -E; m < (m = f[b++].getBoundingClientRect().left) && b < w; );
                  b < w && b--
                }
                for (
                  x = s[w] = [],
                    h = a ? Math.min(b, w) * l - 0.5 : n % b,
                    p = b === E ? 0 : a ? (w * c) / b - 0.5 : (n / b) | 0,
                    m = 0,
                    y = E,
                    v = 0;
                  v < w;
                  v++
                )
                  (d = (v % b) - h),
                    (g = p - ((v / b) | 0)),
                    (x[v] = _ = u ? Math.abs('y' === u ? g : d) : S(d * d + g * g)),
                    _ > m && (m = _),
                    _ < y && (y = _)
                'random' === n && oe(x),
                  (x.max = m - y),
                  (x.min = y),
                  (x.v = w =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) * (b > w ? w - 1 : u ? ('y' === u ? w / b : b) : Math.max(b, w / b)) ||
                      0) * ('edges' === n ? -1 : 1)),
                  (x.b = w < 0 ? i - w : i),
                  (x.u = te(e.amount || e.each) || 0),
                  (r = r && w < 0 ? Ne(r) : r)
              }
              return (w = (x[t] - x.min) / x.max || 0), mt(x.b + (r ? r(w) : w) * x.v) + x.u
            }
          )
        },
        ue = function (t) {
          var e = Math.pow(10, ((t + '').split('.')[1] || '').length)
          return function (r) {
            var n = mt(Math.round(parseFloat(r) / t) * t * e)
            return (n - (n % 1)) / e + (N(r) ? 0 : te(r))
          }
        },
        le = function (t, e) {
          var r,
            n,
            i = X(t)
          return (
            !i &&
              F(t) &&
              ((r = i = t.radius || E),
              t.values ? ((t = ie(t.values)), (n = !N(t[0])) && (r *= r)) : (t = ue(t.increment))),
            Jt(
              e,
              i
                ? R(t)
                  ? function (e) {
                      return (n = t(e)), Math.abs(n - e) <= r ? n : e
                    }
                  : function (e) {
                      for (
                        var i, s, o = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), u = E, l = 0, c = t.length;
                        c--;

                      )
                        (i = n ? (i = t[c].x - o) * i + (s = t[c].y - a) * s : Math.abs(t[c] - o)) < u &&
                          ((u = i), (l = c))
                      return (l = !r || u <= r ? t[l] : e), n || l === e || N(e) ? l : l + te(e)
                    }
                : ue(t)
            )
          )
        },
        ce = function (t, e, r, n) {
          return Jt(X(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
            return X(t)
              ? t[~~(Math.random() * t.length)]
              : (r = r || 1e-5) &&
                  (n = r < 1 ? Math.pow(10, (r + '').length - 2) : 1) &&
                  Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) * r * n) / n
          })
        },
        fe = function (t, e, r) {
          return Jt(r, function (r) {
            return t[~~e(r)]
          })
        },
        he = function (t) {
          for (var e, r, n, i, s = 0, o = ''; ~(e = t.indexOf('random(', s)); )
            (n = t.indexOf(')', e)),
              (i = '[' === t.charAt(e + 7)),
              (r = t.substr(e + 7, n - e - 7).match(i ? W : H)),
              (o += t.substr(s, e - s) + ce(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
              (s = n + 1)
          return o + t.substr(s, t.length - s)
        },
        pe = function (t, e, r, n, i) {
          var s = e - t,
            o = n - r
          return Jt(i, function (e) {
            return r + (((e - t) / s) * o || 0)
          })
        },
        de = function (t, e, r) {
          var n,
            i,
            s,
            o = t.labels,
            a = E
          for (n in o) (i = o[n] - e) < 0 == !!r && i && a > (i = Math.abs(i)) && ((s = n), (a = i))
          return s
        },
        ge = function (t, e, r) {
          var n,
            i,
            s,
            o = t.vars,
            u = o[e],
            l = a,
            c = t._ctx
          if (u)
            return (
              (n = o[e + 'Params']),
              (i = o.callbackScope || t),
              r && ot.length && wt(),
              c && (a = c),
              (s = n ? u.apply(i, n) : u.call(i)),
              (a = l),
              s
            )
        },
        _e = function (t) {
          return Dt(t), t.scrollTrigger && t.scrollTrigger.kill(!!o), t.progress() < 1 && ge(t, 'onInterrupt'), t
        },
        ve = [],
        me = function (t) {
          if (t)
            if (((t = (!t.name && t.default) || t), I() || t.headless)) {
              var e = t.name,
                r = R(t),
                n =
                  e && !r && t.init
                    ? function () {
                        this._props = []
                      }
                    : t,
                i = { init: et, render: lr, add: We, kill: fr, modifier: cr, rawVars: 0 },
                s = { targetTest: 0, get: 0, getSetter: sr, aliases: {}, register: 0 }
              if ((Se(), t !== n)) {
                if (ut[e]) return
                kt(n, kt(Mt(t, i), s)),
                  Ct(n.prototype, Ct(i, Mt(t, s))),
                  (ut[(n.prop = e)] = n),
                  t.targetTest && (ft.push(n), (st[e] = 1)),
                  (e = ('css' === e ? 'CSS' : e.charAt(0).toUpperCase() + e.substr(1)) + 'Plugin')
              }
              tt(e, n), t.register && t.register(Or, n, dr)
            } else ve.push(t)
        },
        ye = 255,
        be = {
          aqua: [0, ye, ye],
          lime: [0, ye, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ye],
          navy: [0, 0, 128],
          white: [ye, ye, ye],
          olive: [128, 128, 0],
          yellow: [ye, ye, 0],
          orange: [ye, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ye, 0, 0],
          pink: [ye, 192, 203],
          cyan: [0, ye, ye],
          transparent: [ye, ye, ye, 0],
        },
        we = function (t, e, r) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (r - e) * t * 6
              : t < 0.5
              ? r
              : 3 * t < 2
              ? e + (r - e) * (2 / 3 - t) * 6
              : e) *
              ye +
              0.5) |
            0
          )
        },
        xe = function (t, e, r) {
          var n,
            i,
            s,
            o,
            a,
            u,
            l,
            c,
            f,
            h,
            p = t ? (N(t) ? [t >> 16, (t >> 8) & ye, t & ye] : 0) : be.black
          if (!p) {
            if ((',' === t.substr(-1) && (t = t.substr(0, t.length - 1)), be[t])) p = be[t]
            else if ('#' === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((n = t.charAt(1)),
                  (i = t.charAt(2)),
                  (s = t.charAt(3)),
                  (t = '#' + n + n + i + i + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : ''))),
                9 === t.length)
              )
                return [
                  (p = parseInt(t.substr(1, 6), 16)) >> 16,
                  (p >> 8) & ye,
                  p & ye,
                  parseInt(t.substr(7), 16) / 255,
                ]
              p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & ye, t & ye]
            } else if ('hsl' === t.substr(0, 3))
              if (((p = h = t.match(H)), e)) {
                if (~t.indexOf('=')) return (p = t.match(U)), r && p.length < 4 && (p[3] = 1), p
              } else
                (o = (+p[0] % 360) / 360),
                  (a = +p[1] / 100),
                  (n = 2 * (u = +p[2] / 100) - (i = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = we(o + 1 / 3, n, i)),
                  (p[1] = we(o, n, i)),
                  (p[2] = we(o - 1 / 3, n, i))
            else p = t.match(H) || be.transparent
            p = p.map(Number)
          }
          return (
            e &&
              !h &&
              ((n = p[0] / ye),
              (i = p[1] / ye),
              (s = p[2] / ye),
              (u = ((l = Math.max(n, i, s)) + (c = Math.min(n, i, s))) / 2),
              l === c
                ? (o = a = 0)
                : ((f = l - c),
                  (a = u > 0.5 ? f / (2 - l - c) : f / (l + c)),
                  (o = l === n ? (i - s) / f + (i < s ? 6 : 0) : l === i ? (s - n) / f + 2 : (n - i) / f + 4),
                  (o *= 60)),
              (p[0] = ~~(o + 0.5)),
              (p[1] = ~~(100 * a + 0.5)),
              (p[2] = ~~(100 * u + 0.5))),
            r && p.length < 4 && (p[3] = 1),
            p
          )
        },
        Te = function (t) {
          var e = [],
            r = [],
            n = -1
          return (
            t.split(ke).forEach(function (t) {
              var i = t.match(j) || []
              e.push.apply(e, i), r.push((n += i.length + 1))
            }),
            (e.c = r),
            e
          )
        },
        Ee = function (t, e, r) {
          var n,
            i,
            s,
            o,
            a = '',
            u = (t + a).match(ke),
            l = e ? 'hsla(' : 'rgba(',
            c = 0
          if (!u) return t
          if (
            ((u = u.map(function (t) {
              return (t = xe(t, e, 1)) && l + (e ? t[0] + ',' + t[1] + '%,' + t[2] + '%,' + t[3] : t.join(',')) + ')'
            })),
            r && ((s = Te(t)), (n = r.c).join(a) !== s.c.join(a)))
          )
            for (o = (i = t.replace(ke, '1').split(j)).length - 1; c < o; c++)
              a += i[c] + (~n.indexOf(c) ? u.shift() || l + '0,0,0,0)' : (s.length ? s : u.length ? u : r).shift())
          if (!i) for (o = (i = t.split(ke)).length - 1; c < o; c++) a += i[c] + u[c]
          return a + i[o]
        },
        ke = (function () {
          var t,
            e = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b'
          for (t in be) e += '|' + t + '\\b'
          return new RegExp(e + ')', 'gi')
        })(),
        Ce = /hsl[a]?\(/,
        Oe = function (t) {
          var e,
            r = t.join(' ')
          if (((ke.lastIndex = 0), ke.test(r)))
            return (e = Ce.test(r)), (t[1] = Ee(t[1], e)), (t[0] = Ee(t[0], e, Te(t[1]))), !0
        },
        Me = (function () {
          var t,
            e,
            r,
            n,
            i,
            s,
            o = Date.now,
            a = 500,
            u = 33,
            p = o(),
            d = p,
            _ = 1e3 / 240,
            v = _,
            m = [],
            y = function r(l) {
              var c,
                f,
                h,
                g,
                y = o() - d,
                b = !0 === l
              if (
                ((y > a || y < 0) && (p += y - u),
                ((c = (h = (d += y) - p) - v) > 0 || b) &&
                  ((g = ++n.frame),
                  (i = h - 1e3 * n.time),
                  (n.time = h /= 1e3),
                  (v += c + (c >= _ ? 4 : _ - c)),
                  (f = 1)),
                b || (t = e(r)),
                f)
              )
                for (s = 0; s < m.length; s++) m[s](h, i, g, l)
            }
          return (n = {
            time: 0,
            frame: 0,
            tick: function () {
              y(!0)
            },
            deltaRatio: function (t) {
              return i / (1e3 / (t || 60))
            },
            wake: function () {
              h &&
                (!c &&
                  I() &&
                  ((l = c = window),
                  (f = l.document || {}),
                  (G.gsap = Or),
                  (l.gsapVersions || (l.gsapVersions = [])).push(Or.version),
                  Z($ || l.GreenSockGlobals || (!l.gsap && l) || {}),
                  ve.forEach(me)),
                (r = 'undefined' != typeof requestAnimationFrame && requestAnimationFrame),
                t && n.sleep(),
                (e =
                  r ||
                  function (t) {
                    return setTimeout(t, (v - 1e3 * n.time + 1) | 0)
                  }),
                (g = 1),
                y(2))
            },
            sleep: function () {
              ;(r ? cancelAnimationFrame : clearTimeout)(t), (g = 0), (e = et)
            },
            lagSmoothing: function (t, e) {
              ;(a = t || 1 / 0), (u = Math.min(e || 33, a))
            },
            fps: function (t) {
              ;(_ = 1e3 / (t || 240)), (v = 1e3 * n.time + _)
            },
            add: function (t, e, r) {
              var i = e
                ? function (e, r, s, o) {
                    t(e, r, s, o), n.remove(i)
                  }
                : t
              return n.remove(t), m[r ? 'unshift' : 'push'](i), Se(), i
            },
            remove: function (t, e) {
              ~(e = m.indexOf(t)) && m.splice(e, 1) && s >= e && s--
            },
            _listeners: m,
          })
        })(),
        Se = function () {
          return !g && Me.wake()
        },
        Ae = {},
        Pe = /^[\d.\-M][\d.\-,\s]/,
        De = /["']/g,
        Re = function (t) {
          for (var e, r, n, i = {}, s = t.substr(1, t.length - 3).split(':'), o = s[0], a = 1, u = s.length; a < u; a++)
            (r = s[a]),
              (e = a !== u - 1 ? r.lastIndexOf(',') : r.length),
              (n = r.substr(0, e)),
              (i[o] = isNaN(n) ? n.replace(De, '').trim() : +n),
              (o = r.substr(e + 1).trim())
          return i
        },
        Ne = function (t) {
          return function (e) {
            return 1 - t(1 - e)
          }
        },
        ze = function t(e, r) {
          for (var n, i = e._first; i; )
            i instanceof Ue
              ? t(i, r)
              : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === r ||
                (i.timeline ? t(i.timeline, r) : ((n = i._ease), (i._ease = i._yEase), (i._yEase = n), (i._yoyo = r))),
              (i = i._next)
        },
        Fe = function (t, e) {
          return (
            (t &&
              (R(t)
                ? t
                : Ae[t] ||
                  (function (t) {
                    var e,
                      r,
                      n,
                      i,
                      s = (t + '').split('('),
                      o = Ae[s[0]]
                    return o && s.length > 1 && o.config
                      ? o.config.apply(
                          null,
                          ~t.indexOf('{')
                            ? [Re(s[1])]
                            : ((e = t),
                              (r = e.indexOf('(') + 1),
                              (n = e.indexOf(')')),
                              (i = e.indexOf('(', r)),
                              e.substring(r, ~i && i < n ? e.indexOf(')', n + 1) : n))
                                .split(',')
                                .map(Tt)
                        )
                      : Ae._CE && Pe.test(t)
                      ? Ae._CE('', t)
                      : o
                  })(t))) ||
            e
          )
        },
        Le = function (t, e, r, n) {
          void 0 === r &&
            (r = function (t) {
              return 1 - e(1 - t)
            }),
            void 0 === n &&
              (n = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
              })
          var i,
            s = { easeIn: e, easeOut: r, easeInOut: n }
          return (
            _t(t, function (t) {
              for (var e in ((Ae[t] = G[t] = s), (Ae[(i = t.toLowerCase())] = r), s))
                Ae[i + ('easeIn' === e ? '.in' : 'easeOut' === e ? '.out' : '.inOut')] = Ae[t + '.' + e] = s[e]
            }),
            s
          )
        },
        Ie = function (t) {
          return function (e) {
            return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2
          }
        },
        Be = function t(e, r, n) {
          var i = r >= 1 ? r : 1,
            s = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            o = (s / C) * (Math.asin(1 / i) || 0),
            a = function (t) {
              return 1 === t ? 1 : i * Math.pow(2, -10 * t) * P((t - o) * s) + 1
            },
            u =
              'out' === e
                ? a
                : 'in' === e
                ? function (t) {
                    return 1 - a(1 - t)
                  }
                : Ie(a)
          return (
            (s = C / s),
            (u.config = function (r, n) {
              return t(e, r, n)
            }),
            u
          )
        },
        Ye = function t(e, r) {
          void 0 === r && (r = 1.70158)
          var n = function (t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0
            },
            i =
              'out' === e
                ? n
                : 'in' === e
                ? function (t) {
                    return 1 - n(1 - t)
                  }
                : Ie(n)
          return (
            (i.config = function (r) {
              return t(e, r)
            }),
            i
          )
        }
      _t('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
        var r = e < 5 ? e + 1 : e
        Le(
          t + ',Power' + (r - 1),
          e
            ? function (t) {
                return Math.pow(t, r)
              }
            : function (t) {
                return t
              },
          function (t) {
            return 1 - Math.pow(1 - t, r)
          },
          function (t) {
            return t < 0.5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
          }
        )
      }),
        (Ae.Linear.easeNone = Ae.none = Ae.Linear.easeIn),
        Le('Elastic', Be('in'), Be('out'), Be()),
        (_ = 7.5625),
        (y = 2 * (m = 1 / (v = 2.75))),
        (b = 2.5 * m),
        Le(
          'Bounce',
          function (t) {
            return 1 - w(1 - t)
          },
          (w = function (t) {
            return t < m
              ? _ * t * t
              : t < y
              ? _ * Math.pow(t - 1.5 / v, 2) + 0.75
              : t < b
              ? _ * (t -= 2.25 / v) * t + 0.9375
              : _ * Math.pow(t - 2.625 / v, 2) + 0.984375
          })
        ),
        Le('Expo', function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0
        }),
        Le('Circ', function (t) {
          return -(S(1 - t * t) - 1)
        }),
        Le('Sine', function (t) {
          return 1 === t ? 1 : 1 - A(t * O)
        }),
        Le('Back', Ye('in'), Ye('out'), Ye()),
        (Ae.SteppedEase =
          Ae.steps =
          G.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1)
                var r = 1 / t,
                  n = t + (e ? 0 : 1),
                  i = e ? 1 : 0
                return function (t) {
                  return (((n * Kt(0, 0.99999999, t)) | 0) + i) * r
                }
              },
            }),
        (T.ease = Ae['quad.out']),
        _t('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt', function (t) {
          return (ht += t + ',' + t + 'Params,')
        })
      var Xe = function (t, e) {
          ;(this.id = M++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : gt),
            (this.set = e ? e.getSetter : sr)
        },
        He = (function () {
          function t(t) {
            ;(this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Wt(this, +t.duration, 1, 1),
              (this.data = t.data),
              a && ((this._ctx = a), a.data.push(this)),
              g || Me.wake()
          }
          var e = t.prototype
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t)
                : this.totalDuration() && this._dur
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Wt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1)))
                : this._tDur
            }),
            (e.totalTime = function (t, e) {
              if ((Se(), !arguments.length)) return this._tTime
              var r = this._dp
              if (r && r.smoothChildTiming && this._ts) {
                for (Yt(this, t), !r._dp || r.parent || Xt(r, this); r && r.parent; )
                  r.parent._time !==
                    r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) &&
                    r.totalTime(r._tTime, !0),
                    (r = r.parent)
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) &&
                  Ht(this._dp, this, this._start - this._delay)
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === k) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), xt(this, t, e)),
                this
              )
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + Ft(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                : this._time
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.rawTime() > 0
                ? 1
                : 0
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ft(this), e)
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.rawTime() > 0
                ? 1
                : 0
            }),
            (e.iteration = function (t, e) {
              var r = this.duration() + this._rDelay
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * r, e)
                : this._repeat
                ? Lt(this._tTime, r) + 1
                : 1
            }),
            (e.timeScale = function (t, e) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts
              if (this._rts === t) return this
              var r = this.parent && this._ts ? It(this.parent._time, this) : this._tTime
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                this.totalTime(Kt(-Math.abs(this._delay), this._tDur, r), !1 !== e),
                Bt(this),
                (function (t) {
                  for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent)
                  return t
                })(this)
              )
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (Se(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime,
                          1 === this.progress() && Math.abs(this._zTime) !== k && (this._tTime -= k)
                        ))),
                  this)
                : this._ps
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t
                var e = this.parent || this._dp
                return e && (e._sort || !this.parent) && Ht(e, this, t - this._delay), this
              }
              return this._start
            }),
            (e.endTime = function (t) {
              return this._start + (L(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp
              return e
                ? t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? It(e.rawTime(t), this)
                  : this._tTime
                : this._tTime
            }),
            (e.revert = function (t) {
              void 0 === t && (t = it)
              var e = o
              return (
                (o = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents)),
                'nested' !== this.data && !1 !== t.kill && this.kill(),
                (o = e),
                this
              )
            }),
            (e.globalTime = function (t) {
              for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                (r = e._start + r / (Math.abs(e._ts) || 1)), (e = e._dp)
              return !this.parent && this._sat ? this._sat.globalTime(t) : r
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), Qt(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time
                return (this._rDelay = t), Qt(this), e ? this.time(e) : this
              }
              return this._rDelay
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo
            }),
            (e.seek = function (t, e) {
              return this.totalTime($t(this, t), L(e))
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, L(e))
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }),
            (e.reverse = function (t, e) {
              return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0)
            }),
            (e.resume = function () {
              return this.paused(!1)
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this)
                : this._rts < 0
            }),
            (e.invalidate = function () {
              return (this._initted = this._act = 0), (this._zTime = -1e-8), this
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                r = this._start
              return !(
                e &&
                !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - k)
              )
            }),
            (e.eventCallback = function (t, e, r) {
              var n = this.vars
              return arguments.length > 1
                ? (e ? ((n[t] = e), r && (n[t + 'Params'] = r), 'onUpdate' === t && (this._onUpdate = e)) : delete n[t],
                  this)
                : n[t]
            }),
            (e.then = function (t) {
              var e = this
              return new Promise(function (r) {
                var n = R(t) ? t : Et,
                  i = function () {
                    var t = e.then
                    ;(e.then = null), R(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), r(n), (e.then = t)
                  }
                ;(e._initted && 1 === e.totalProgress() && e._ts >= 0) || (!e._tTime && e._ts < 0) ? i() : (e._prom = i)
              })
            }),
            (e.kill = function () {
              _e(this)
            }),
            t
          )
        })()
      kt(He.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      })
      var Ue = (function (t) {
        function e(e, r) {
          var i
          return (
            void 0 === e && (e = {}),
            ((i = t.call(this, e) || this).labels = {}),
            (i.smoothChildTiming = !!e.smoothChildTiming),
            (i.autoRemoveChildren = !!e.autoRemoveChildren),
            (i._sort = L(e.sortChildren)),
            u && Ht(e.parent || u, n(i), r),
            e.reversed && i.reverse(),
            e.paused && i.paused(!0),
            e.scrollTrigger && Ut(n(i), e.scrollTrigger),
            i
          )
        }
        i(e, t)
        var r = e.prototype
        return (
          (r.to = function (t, e, r) {
            return Zt(0, arguments, this), this
          }),
          (r.from = function (t, e, r) {
            return Zt(1, arguments, this), this
          }),
          (r.fromTo = function (t, e, r, n) {
            return Zt(2, arguments, this), this
          }),
          (r.set = function (t, e, r) {
            return (
              (e.duration = 0),
              (e.parent = this),
              St(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new tr(t, e, $t(this, r), 1),
              this
            )
          }),
          (r.call = function (t, e, r) {
            return Ht(this, tr.delayedCall(0, t, e), r)
          }),
          (r.staggerTo = function (t, e, r, n, i, s, o) {
            return (
              (r.duration = e),
              (r.stagger = r.stagger || n),
              (r.onComplete = s),
              (r.onCompleteParams = o),
              (r.parent = this),
              new tr(t, r, $t(this, i)),
              this
            )
          }),
          (r.staggerFrom = function (t, e, r, n, i, s, o) {
            return (
              (r.runBackwards = 1), (St(r).immediateRender = L(r.immediateRender)), this.staggerTo(t, e, r, n, i, s, o)
            )
          }),
          (r.staggerFromTo = function (t, e, r, n, i, s, o, a) {
            return (n.startAt = r), (St(n).immediateRender = L(n.immediateRender)), this.staggerTo(t, e, n, i, s, o, a)
          }),
          (r.render = function (t, e, r) {
            var n,
              i,
              s,
              a,
              l,
              c,
              f,
              h,
              p,
              d,
              g,
              _,
              v = this._time,
              m = this._dirty ? this.totalDuration() : this._tDur,
              y = this._dur,
              b = t <= 0 ? 0 : mt(t),
              w = this._zTime < 0 != t < 0 && (this._initted || !y)
            if ((this !== u && b > m && t >= 0 && (b = m), b !== this._tTime || r || w)) {
              if (
                (v !== this._time && y && ((b += this._time - v), (t += this._time - v)),
                (n = b),
                (p = this._start),
                (c = !(h = this._ts)),
                w && (y || (v = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (((g = this._yoyo), (l = y + this._rDelay), this._repeat < -1 && t < 0))
                  return this.totalTime(100 * l + t, e, r)
                if (
                  ((n = mt(b % l)),
                  b === m
                    ? ((a = this._repeat), (n = y))
                    : ((a = ~~(b / l)) && a === b / l && ((n = y), a--), n > y && (n = y)),
                  (d = Lt(this._tTime, l)),
                  !v && this._tTime && d !== a && this._tTime - d * l - this._dur <= 0 && (d = a),
                  g && 1 & a && ((n = y - n), (_ = 1)),
                  a !== d && !this._lock)
                ) {
                  var x = g && 1 & d,
                    T = x === (g && 1 & a)
                  if (
                    (a < d && (x = !x),
                    (v = x ? 0 : b % y ? y : b),
                    (this._lock = 1),
                    (this.render(v || (_ ? 0 : mt(a * l)), e, !y)._lock = 0),
                    (this._tTime = b),
                    !e && this.parent && ge(this, 'onRepeat'),
                    this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1),
                    (v && v !== this._time) || c !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this
                  if (
                    ((y = this._dur),
                    (m = this._tDur),
                    T &&
                      ((this._lock = 2),
                      (v = x ? y : -1e-4),
                      this.render(v, !0),
                      this.vars.repeatRefresh && !_ && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !c)
                  )
                    return this
                  ze(this, _)
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((f = (function (t, e, r) {
                    var n
                    if (r > e)
                      for (n = t._first; n && n._start <= r; ) {
                        if ('isPause' === n.data && n._start > e) return n
                        n = n._next
                      }
                    else
                      for (n = t._last; n && n._start >= r; ) {
                        if ('isPause' === n.data && n._start < e) return n
                        n = n._prev
                      }
                  })(this, mt(v), mt(n))),
                  f && (b -= n - (n = f._start))),
                (this._tTime = b),
                (this._time = n),
                (this._act = !h),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (v = 0)),
                !v && n && !e && !a && (ge(this, 'onStart'), this._tTime !== b))
              )
                return this
              if (n >= v && t >= 0)
                for (i = this._first; i; ) {
                  if (((s = i._next), (i._act || n >= i._start) && i._ts && f !== i)) {
                    if (i.parent !== this) return this.render(t, e, r)
                    if (
                      (i.render(
                        i._ts > 0
                          ? (n - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts,
                        e,
                        r
                      ),
                      n !== this._time || (!this._ts && !c))
                    ) {
                      ;(f = 0), s && (b += this._zTime = -1e-8)
                      break
                    }
                  }
                  i = s
                }
              else {
                i = this._last
                for (var E = t < 0 ? t : n; i; ) {
                  if (((s = i._prev), (i._act || E <= i._end) && i._ts && f !== i)) {
                    if (i.parent !== this) return this.render(t, e, r)
                    if (
                      (i.render(
                        i._ts > 0
                          ? (E - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) + (E - i._start) * i._ts,
                        e,
                        r || (o && (i._initted || i._startAt))
                      ),
                      n !== this._time || (!this._ts && !c))
                    ) {
                      ;(f = 0), s && (b += this._zTime = E ? -1e-8 : k)
                      break
                    }
                  }
                  i = s
                }
              }
              if (f && !e && (this.pause(), (f.render(n >= v ? 0 : -1e-8)._zTime = n >= v ? 1 : -1), this._ts))
                return (this._start = p), Bt(this), this.render(t, e, r)
              this._onUpdate && !e && ge(this, 'onUpdate', !0),
                ((b === m && this._tTime >= this.totalDuration()) || (!b && v)) &&
                  ((p !== this._start && Math.abs(h) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !y) && ((b === m && this._ts > 0) || (!b && this._ts < 0)) && Dt(this, 1),
                    e ||
                      (t < 0 && !v) ||
                      (!b && !v && m) ||
                      (ge(this, b === m && t >= 0 ? 'onComplete' : 'onReverseComplete', !0),
                      this._prom && !(b < m && this.timeScale() > 0) && this._prom())))
            }
            return this
          }),
          (r.add = function (t, e) {
            var r = this
            if ((N(e) || (e = $t(this, e, t)), !(t instanceof He))) {
              if (X(t))
                return (
                  t.forEach(function (t) {
                    return r.add(t, e)
                  }),
                  this
                )
              if (D(t)) return this.addLabel(t, e)
              if (!R(t)) return this
              t = tr.delayedCall(0, t)
            }
            return this !== t ? Ht(this, t, e) : this
          }),
          (r.getChildren = function (t, e, r, n) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -E)
            for (var i = [], s = this._first; s; )
              s._start >= n &&
                (s instanceof tr ? e && i.push(s) : (r && i.push(s), t && i.push.apply(i, s.getChildren(!0, e, r)))),
                (s = s._next)
            return i
          }),
          (r.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; ) if (e[r].vars.id === t) return e[r]
          }),
          (r.remove = function (t) {
            return D(t)
              ? this.removeLabel(t)
              : R(t)
              ? this.killTweensOf(t)
              : (Pt(this, t), t === this._recent && (this._recent = this._last), Rt(this))
          }),
          (r.totalTime = function (e, r) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = mt(Me.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
                t.prototype.totalTime.call(this, e, r),
                (this._forcing = 0),
                this)
              : this._tTime
          }),
          (r.addLabel = function (t, e) {
            return (this.labels[t] = $t(this, e)), this
          }),
          (r.removeLabel = function (t) {
            return delete this.labels[t], this
          }),
          (r.addPause = function (t, e, r) {
            var n = tr.delayedCall(0, e || et, r)
            return (n.data = 'isPause'), (this._hasPause = 1), Ht(this, n, $t(this, t))
          }),
          (r.removePause = function (t) {
            var e = this._first
            for (t = $t(this, t); e; ) e._start === t && 'isPause' === e.data && Dt(e), (e = e._next)
          }),
          (r.killTweensOf = function (t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--; ) je !== n[i] && n[i].kill(t, e)
            return this
          }),
          (r.getTweensOf = function (t, e) {
            for (var r, n = [], i = ie(t), s = this._first, o = N(e); s; )
              s instanceof tr
                ? bt(s._targets, i) &&
                  (o
                    ? (!je || (s._initted && s._ts)) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e
                    : !e || s.isActive()) &&
                  n.push(s)
                : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r),
                (s = s._next)
            return n
          }),
          (r.tweenTo = function (t, e) {
            e = e || {}
            var r,
              n = this,
              i = $t(n, t),
              s = e,
              o = s.startAt,
              a = s.onStart,
              u = s.onStartParams,
              l = s.immediateRender,
              c = tr.to(
                n,
                kt(
                  {
                    ease: e.ease || 'none',
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: 'auto',
                    duration: e.duration || Math.abs((i - (o && 'time' in o ? o.time : n._time)) / n.timeScale()) || k,
                    onStart: function () {
                      if ((n.pause(), !r)) {
                        var t = e.duration || Math.abs((i - (o && 'time' in o ? o.time : n._time)) / n.timeScale())
                        c._dur !== t && Wt(c, t, 0, 1).render(c._time, !0, !0), (r = 1)
                      }
                      a && a.apply(c, u || [])
                    },
                  },
                  e
                )
              )
            return l ? c.render(0) : c
          }),
          (r.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, kt({ startAt: { time: $t(this, t) } }, r))
          }),
          (r.recent = function () {
            return this._recent
          }),
          (r.nextLabel = function (t) {
            return void 0 === t && (t = this._time), de(this, $t(this, t))
          }),
          (r.previousLabel = function (t) {
            return void 0 === t && (t = this._time), de(this, $t(this, t), 1)
          }),
          (r.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + k)
          }),
          (r.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0)
            for (var n, i = this._first, s = this.labels; i; )
              i._start >= r && ((i._start += t), (i._end += t)), (i = i._next)
            if (e) for (n in s) s[n] >= r && (s[n] += t)
            return Rt(this)
          }),
          (r.invalidate = function (e) {
            var r = this._first
            for (this._lock = 0; r; ) r.invalidate(e), (r = r._next)
            return t.prototype.invalidate.call(this, e)
          }),
          (r.clear = function (t) {
            void 0 === t && (t = !0)
            for (var e, r = this._first; r; ) (e = r._next), this.remove(r), (r = e)
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Rt(this)
          }),
          (r.totalDuration = function (t) {
            var e,
              r,
              n,
              i = 0,
              s = this,
              o = s._last,
              a = E
            if (arguments.length)
              return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t))
            if (s._dirty) {
              for (n = s.parent; o; )
                (e = o._prev),
                  o._dirty && o.totalDuration(),
                  (r = o._start) > a && s._sort && o._ts && !s._lock
                    ? ((s._lock = 1), (Ht(s, o, r - o._delay, 1)._lock = 0))
                    : (a = r),
                  r < 0 &&
                    o._ts &&
                    ((i -= r),
                    ((!n && !s._dp) || (n && n.smoothChildTiming)) &&
                      ((s._start += r / s._ts), (s._time -= r), (s._tTime -= r)),
                    s.shiftChildren(-r, !1, -Infinity),
                    (a = 0)),
                  o._end > i && o._ts && (i = o._end),
                  (o = e)
              Wt(s, s === u && s._time > i ? s._time : i, 1, 1), (s._dirty = 0)
            }
            return s._tDur
          }),
          (e.updateRoot = function (t) {
            if ((u._ts && (xt(u, It(t, u)), (p = Me.frame)), Me.frame >= ct)) {
              ct += x.autoSleep || 120
              var e = u._first
              if ((!e || !e._ts) && x.autoSleep && Me._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next
                e || Me.sleep()
              }
            }
          }),
          e
        )
      })(He)
      kt(Ue.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 })
      var je,
        qe,
        Ve = function (t, e, r, n, i, s, o) {
          var a,
            u,
            l,
            c,
            f,
            h,
            p,
            d,
            g = new dr(this._pt, t, e, 0, 1, ur, null, i),
            _ = 0,
            v = 0
          for (
            g.b = r,
              g.e = n,
              r += '',
              (p = ~(n += '').indexOf('random(')) && (n = he(n)),
              s && (s((d = [r, n]), t, e), (r = d[0]), (n = d[1])),
              u = r.match(q) || [];
            (a = q.exec(n));

          )
            (c = a[0]),
              (f = n.substring(_, a.index)),
              l ? (l = (l + 1) % 5) : 'rgba(' === f.substr(-5) && (l = 1),
              c !== u[v++] &&
                ((h = parseFloat(u[v - 1]) || 0),
                (g._pt = {
                  _next: g._pt,
                  p: f || 1 === v ? f : ',',
                  s: h,
                  c: '=' === c.charAt(1) ? yt(h, c) - h : parseFloat(c) - h,
                  m: l && l < 4 ? Math.round : 0,
                }),
                (_ = q.lastIndex))
          return (
            (g.c = _ < n.length ? n.substring(_, n.length) : ''),
            (g.fp = o),
            (V.test(n) || p) && (g.e = 0),
            (this._pt = g),
            g
          )
        },
        We = function (t, e, r, n, i, s, o, a, u, l) {
          R(n) && (n = n(i || 0, t, s))
          var c,
            f = t[e],
            h =
              'get' !== r
                ? r
                : R(f)
                ? u
                  ? t[e.indexOf('set') || !R(t['get' + e.substr(3)]) ? e : 'get' + e.substr(3)](u)
                  : t[e]()
                : f,
            p = R(f) ? (u ? nr : rr) : er
          if (
            (D(n) &&
              (~n.indexOf('random(') && (n = he(n)),
              '=' === n.charAt(1) && ((c = yt(h, n) + (te(h) || 0)) || 0 === c) && (n = c)),
            !l || h !== n || qe)
          )
            return isNaN(h * n) || '' === n
              ? (!f && !(e in t) && J(e, n), Ve.call(this, t, e, h, n, p, a || x.stringFilter, u))
              : ((c = new dr(this._pt, t, e, +h || 0, n - (h || 0), 'boolean' == typeof f ? ar : or, 0, p)),
                u && (c.fp = u),
                o && c.modifier(o, this, t),
                (this._pt = c))
        },
        Qe = function (t, e, r, n, i, s) {
          var o, a, u, l
          if (
            ut[t] &&
            !1 !==
              (o = new ut[t]()).init(
                i,
                o.rawVars
                  ? e[t]
                  : (function (t, e, r, n, i) {
                      if ((R(t) && (t = Ze(t, i, e, r, n)), !F(t) || (t.style && t.nodeType) || X(t) || Y(t)))
                        return D(t) ? Ze(t, i, e, r, n) : t
                      var s,
                        o = {}
                      for (s in t) o[s] = Ze(t[s], i, e, r, n)
                      return o
                    })(e[t], n, i, s, r),
                r,
                n,
                s
              ) &&
            ((r._pt = a = new dr(r._pt, i, t, 0, 1, o.render, o, 0, o.priority)), r !== d)
          )
            for (u = r._ptLookup[r._targets.indexOf(i)], l = o._props.length; l--; ) u[o._props[l]] = a
          return o
        },
        Ge = function t(e, r, n) {
          var i,
            a,
            l,
            c,
            f,
            h,
            p,
            d,
            g,
            _,
            v,
            m,
            y,
            b = e.vars,
            w = b.ease,
            x = b.startAt,
            C = b.immediateRender,
            O = b.lazy,
            M = b.onUpdate,
            S = b.runBackwards,
            A = b.yoyoEase,
            P = b.keyframes,
            D = b.autoRevert,
            R = e._dur,
            N = e._startAt,
            z = e._targets,
            F = e.parent,
            I = F && 'nested' === F.data ? F.vars.targets : z,
            B = 'auto' === e._overwrite && !s,
            Y = e.timeline
          if (
            (Y && (!P || !w) && (w = 'none'),
            (e._ease = Fe(w, T.ease)),
            (e._yEase = A ? Ne(Fe(!0 === A ? w : A, T.ease)) : 0),
            A && e._yoyo && !e._repeat && ((A = e._yEase), (e._yEase = e._ease), (e._ease = A)),
            (e._from = !Y && !!b.runBackwards),
            !Y || (P && !b.stagger))
          ) {
            if (
              ((m = (d = z[0] ? dt(z[0]).harness : 0) && b[d.prop]),
              (i = Mt(b, st)),
              N &&
                (N._zTime < 0 && N.progress(1),
                r < 0 && S && C && !D ? N.render(-1, !0) : N.revert(S && R ? nt : rt),
                (N._lazy = 0)),
              x)
            ) {
              if (
                (Dt(
                  (e._startAt = tr.set(
                    z,
                    kt(
                      {
                        data: 'isStart',
                        overwrite: !1,
                        parent: F,
                        immediateRender: !0,
                        lazy: !N && L(O),
                        startAt: null,
                        delay: 0,
                        onUpdate:
                          M &&
                          function () {
                            return ge(e, 'onUpdate')
                          },
                        stagger: 0,
                      },
                      x
                    )
                  ))
                ),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                r < 0 && (o || (!C && !D)) && e._startAt.revert(nt),
                C && R && r <= 0 && n <= 0)
              )
                return void (r && (e._zTime = r))
            } else if (S && R && !N)
              if (
                (r && (C = !1),
                (l = kt(
                  {
                    overwrite: !1,
                    data: 'isFromStart',
                    lazy: C && !N && L(O),
                    immediateRender: C,
                    stagger: 0,
                    parent: F,
                  },
                  i
                )),
                m && (l[d.prop] = m),
                Dt((e._startAt = tr.set(z, l))),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                r < 0 && (o ? e._startAt.revert(nt) : e._startAt.render(-1, !0)),
                (e._zTime = r),
                C)
              ) {
                if (!r) return
              } else t(e._startAt, k, k)
            for (e._pt = e._ptCache = 0, O = (R && L(O)) || (O && !R), a = 0; a < z.length; a++) {
              if (
                ((p = (f = z[a])._gsap || pt(z)[a]._gsap),
                (e._ptLookup[a] = _ = {}),
                at[p.id] && ot.length && wt(),
                (v = I === z ? a : I.indexOf(f)),
                d &&
                  !1 !== (g = new d()).init(f, m || i, e, v, I) &&
                  ((e._pt = c = new dr(e._pt, f, g.name, 0, 1, g.render, g, 0, g.priority)),
                  g._props.forEach(function (t) {
                    _[t] = c
                  }),
                  g.priority && (h = 1)),
                !d || m)
              )
                for (l in i)
                  ut[l] && (g = Qe(l, i, e, v, f, I))
                    ? g.priority && (h = 1)
                    : (_[l] = c = We.call(e, f, l, 'get', i[l], v, I, 0, b.stringFilter))
              e._op && e._op[a] && e.kill(f, e._op[a]),
                B && e._pt && ((je = e), u.killTweensOf(f, _, e.globalTime(r)), (y = !e.parent), (je = 0)),
                e._pt && O && (at[p.id] = 1)
            }
            h && pr(e), e._onInit && e._onInit(e)
          }
          ;(e._onUpdate = M), (e._initted = (!e._op || e._pt) && !y), P && r <= 0 && Y.render(E, !0, !0)
        },
        $e = function (t, e, r, n) {
          var i,
            s,
            o = e.ease || n || 'power1.inOut'
          if (X(e))
            (s = r[t] || (r[t] = [])),
              e.forEach(function (t, r) {
                return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: o })
              })
          else for (i in e) (s = r[i] || (r[i] = [])), 'ease' === i || s.push({ t: parseFloat(t), v: e[i], e: o })
        },
        Ze = function (t, e, r, n, i) {
          return R(t) ? t.call(e, r, n, i) : D(t) && ~t.indexOf('random(') ? he(t) : t
        },
        Je = ht + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
        Ke = {}
      _t(Je + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
        return (Ke[t] = 1)
      })
      var tr = (function (t) {
        function e(e, r, i, o) {
          var a
          'number' == typeof r && ((i.duration = r), (r = i), (i = null))
          var l,
            c,
            f,
            h,
            p,
            d,
            g,
            _,
            v = (a = t.call(this, o ? r : St(r)) || this).vars,
            m = v.duration,
            y = v.delay,
            b = v.immediateRender,
            w = v.stagger,
            T = v.overwrite,
            E = v.keyframes,
            k = v.defaults,
            C = v.scrollTrigger,
            O = v.yoyoEase,
            M = r.parent || u,
            S = (X(e) || Y(e) ? N(e[0]) : 'length' in r) ? [e] : ie(e)
          if (
            ((a._targets = S.length
              ? pt(S)
              : K('GSAP target ' + e + ' not found. https://gsap.com', !x.nullTargetWarn) || []),
            (a._ptLookup = []),
            (a._overwrite = T),
            E || w || B(m) || B(y))
          ) {
            if (
              ((r = a.vars),
              (l = a.timeline =
                new Ue({
                  data: 'nested',
                  defaults: k || {},
                  targets: M && 'nested' === M.data ? M.vars.targets : S,
                })).kill(),
              (l.parent = l._dp = n(a)),
              (l._start = 0),
              w || B(m) || B(y))
            ) {
              if (((h = S.length), (g = w && ae(w)), F(w)))
                for (p in w) ~Je.indexOf(p) && (_ || (_ = {}), (_[p] = w[p]))
              for (c = 0; c < h; c++)
                ((f = Mt(r, Ke)).stagger = 0),
                  O && (f.yoyoEase = O),
                  _ && Ct(f, _),
                  (d = S[c]),
                  (f.duration = +Ze(m, n(a), c, d, S)),
                  (f.delay = (+Ze(y, n(a), c, d, S) || 0) - a._delay),
                  !w && 1 === h && f.delay && ((a._delay = y = f.delay), (a._start += y), (f.delay = 0)),
                  l.to(d, f, g ? g(c, d, S) : 0),
                  (l._ease = Ae.none)
              l.duration() ? (m = y = 0) : (a.timeline = 0)
            } else if (E) {
              St(kt(l.vars.defaults, { ease: 'none' })), (l._ease = Fe(E.ease || r.ease || 'none'))
              var A,
                P,
                D,
                R = 0
              if (X(E))
                E.forEach(function (t) {
                  return l.to(S, t, '>')
                }),
                  l.duration()
              else {
                for (p in ((f = {}), E)) 'ease' === p || 'easeEach' === p || $e(p, E[p], f, E.easeEach)
                for (p in f)
                  for (
                    A = f[p].sort(function (t, e) {
                      return t.t - e.t
                    }),
                      R = 0,
                      c = 0;
                    c < A.length;
                    c++
                  )
                    ((D = { ease: (P = A[c]).e, duration: ((P.t - (c ? A[c - 1].t : 0)) / 100) * m })[p] = P.v),
                      l.to(S, D, R),
                      (R += D.duration)
                l.duration() < m && l.to({}, { duration: m - l.duration() })
              }
            }
            m || a.duration((m = l.duration()))
          } else a.timeline = 0
          return (
            !0 !== T || s || ((je = n(a)), u.killTweensOf(S), (je = 0)),
            Ht(M, n(a), i),
            r.reversed && a.reverse(),
            r.paused && a.paused(!0),
            (b || (!m && !E && a._start === mt(M._time) && L(b) && zt(n(a)) && 'nested' !== M.data)) &&
              ((a._tTime = -1e-8), a.render(Math.max(0, -y) || 0)),
            C && Ut(n(a), C),
            a
          )
        }
        i(e, t)
        var r = e.prototype
        return (
          (r.render = function (t, e, r) {
            var n,
              i,
              s,
              a,
              u,
              l,
              c,
              f,
              h,
              p = this._time,
              d = this._tDur,
              g = this._dur,
              _ = t < 0,
              v = t > d - k && !_ ? d : t < k ? 0 : t
            if (g) {
              if (
                v !== this._tTime ||
                !t ||
                r ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== _)
              ) {
                if (((n = v), (f = this.timeline), this._repeat)) {
                  if (((a = g + this._rDelay), this._repeat < -1 && _)) return this.totalTime(100 * a + t, e, r)
                  if (
                    ((n = mt(v % a)),
                    v === d
                      ? ((s = this._repeat), (n = g))
                      : ((s = ~~(v / a)) && s === mt(v / a) && ((n = g), s--), n > g && (n = g)),
                    (l = this._yoyo && 1 & s) && ((h = this._yEase), (n = g - n)),
                    (u = Lt(this._tTime, a)),
                    n === p && !r && this._initted && s === u)
                  )
                    return (this._tTime = v), this
                  s !== u &&
                    (f && this._yEase && ze(f, l),
                    this.vars.repeatRefresh &&
                      !l &&
                      !this._lock &&
                      this._time !== a &&
                      this._initted &&
                      ((this._lock = r = 1), (this.render(mt(a * s), !0).invalidate()._lock = 0)))
                }
                if (!this._initted) {
                  if (jt(this, _ ? t : n, r, e, v)) return (this._tTime = 0), this
                  if (!(p === this._time || (r && this.vars.repeatRefresh && s !== u))) return this
                  if (g !== this._dur) return this.render(t, e, r)
                }
                if (
                  ((this._tTime = v),
                  (this._time = n),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = c = (h || this._ease)(n / g)),
                  this._from && (this.ratio = c = 1 - c),
                  n && !p && !e && !s && (ge(this, 'onStart'), this._tTime !== v))
                )
                  return this
                for (i = this._pt; i; ) i.r(c, i.d), (i = i._next)
                ;(f && f.render(t < 0 ? t : f._dur * f._ease(n / this._dur), e, r)) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate && !e && (_ && Nt(this, t, 0, r), ge(this, 'onUpdate')),
                  this._repeat && s !== u && this.vars.onRepeat && !e && this.parent && ge(this, 'onRepeat'),
                  (v !== this._tDur && v) ||
                    this._tTime !== v ||
                    (_ && !this._onUpdate && Nt(this, t, 0, !0),
                    (t || !g) && ((v === this._tDur && this._ts > 0) || (!v && this._ts < 0)) && Dt(this, 1),
                    e ||
                      (_ && !p) ||
                      !(v || p || l) ||
                      (ge(this, v === d ? 'onComplete' : 'onReverseComplete', !0),
                      this._prom && !(v < d && this.timeScale() > 0) && this._prom()))
              }
            } else
              !(function (t, e, r, n) {
                var i,
                  s,
                  a,
                  u = t.ratio,
                  l =
                    e < 0 ||
                    (!e && ((!t._start && qt(t) && (t._initted || !Vt(t))) || ((t._ts < 0 || t._dp._ts < 0) && !Vt(t))))
                      ? 0
                      : 1,
                  c = t._rDelay,
                  f = 0
                if (
                  (c &&
                    t._repeat &&
                    ((f = Kt(0, t._tDur, e)),
                    (s = Lt(f, c)),
                    t._yoyo && 1 & s && (l = 1 - l),
                    s !== Lt(t._tTime, c) && ((u = 1 - l), t.vars.repeatRefresh && t._initted && t.invalidate())),
                  l !== u || o || n || t._zTime === k || (!e && t._zTime))
                ) {
                  if (!t._initted && jt(t, e, n, r, f)) return
                  for (
                    a = t._zTime,
                      t._zTime = e || (r ? k : 0),
                      r || (r = e && !a),
                      t.ratio = l,
                      t._from && (l = 1 - l),
                      t._time = 0,
                      t._tTime = f,
                      i = t._pt;
                    i;

                  )
                    i.r(l, i.d), (i = i._next)
                  e < 0 && Nt(t, e, 0, !0),
                    t._onUpdate && !r && ge(t, 'onUpdate'),
                    f && t._repeat && !r && t.parent && ge(t, 'onRepeat'),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === l &&
                      (l && Dt(t, 1),
                      r || o || (ge(t, l ? 'onComplete' : 'onReverseComplete', !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
              })(this, t, e, r)
            return this
          }),
          (r.targets = function () {
            return this._targets
          }),
          (r.invalidate = function (e) {
            return (
              (!e || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(e),
              t.prototype.invalidate.call(this, e)
            )
          }),
          (r.resetTo = function (t, e, r, n, i) {
            g || Me.wake(), this._ts || this.play()
            var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts)
            return (
              this._initted || Ge(this, s),
              (function (t, e, r, n, i, s, o, a) {
                var u,
                  l,
                  c,
                  f,
                  h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e]
                if (!h)
                  for (h = t._ptCache[e] = [], c = t._ptLookup, f = t._targets.length; f--; ) {
                    if ((u = c[f][e]) && u.d && u.d._pt) for (u = u.d._pt; u && u.p !== e && u.fp !== e; ) u = u._next
                    if (!u)
                      return (qe = 1), (t.vars[e] = '+=0'), Ge(t, o), (qe = 0), a ? K(e + ' not eligible for reset') : 1
                    h.push(u)
                  }
                for (f = h.length; f--; )
                  ((u = (l = h[f])._pt || l).s = (!n && 0 !== n) || i ? u.s + (n || 0) + s * u.c : n),
                    (u.c = r - u.s),
                    l.e && (l.e = vt(r) + te(l.e)),
                    l.b && (l.b = u.s + te(l.b))
              })(this, t, e, r, n, this._ease(s / this._dur), s, i)
                ? this.resetTo(t, e, r, n, 1)
                : (Yt(this, 0),
                  this.parent || At(this._dp, this, '_first', '_last', this._dp._sort ? '_start' : 0),
                  this.render(0))
            )
          }),
          (r.kill = function (t, e) {
            if ((void 0 === e && (e = 'all'), !(t || (e && 'all' !== e))))
              return (this._lazy = this._pt = 0), this.parent ? _e(this) : this
            if (this.timeline) {
              var r = this.timeline.totalDuration()
              return (
                this.timeline.killTweensOf(t, e, je && !0 !== je.vars.overwrite)._first || _e(this),
                this.parent &&
                  r !== this.timeline.totalDuration() &&
                  Wt(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                this
              )
            }
            var n,
              i,
              s,
              o,
              a,
              u,
              l,
              c = this._targets,
              f = t ? ie(t) : c,
              h = this._ptLookup,
              p = this._pt
            if (
              (!e || 'all' === e) &&
              (function (t, e) {
                for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r]; );
                return r < 0
              })(c, f)
            )
              return 'all' === e && (this._pt = 0), _e(this)
            for (
              n = this._op = this._op || [],
                'all' !== e &&
                  (D(e) &&
                    ((a = {}),
                    _t(e, function (t) {
                      return (a[t] = 1)
                    }),
                    (e = a)),
                  (e = (function (t, e) {
                    var r,
                      n,
                      i,
                      s,
                      o = t[0] ? dt(t[0]).harness : 0,
                      a = o && o.aliases
                    if (!a) return e
                    for (n in ((r = Ct({}, e)), a))
                      if ((n in r)) for (i = (s = a[n].split(',')).length; i--; ) r[s[i]] = r[n]
                    return r
                  })(c, e))),
                l = c.length;
              l--;

            )
              if (~f.indexOf(c[l]))
                for (a in ((i = h[l]),
                'all' === e ? ((n[l] = e), (o = i), (s = {})) : ((s = n[l] = n[l] || {}), (o = e)),
                o))
                  (u = i && i[a]) && (('kill' in u.d && !0 !== u.d.kill(a)) || Pt(this, u, '_pt'), delete i[a]),
                    'all' !== s && (s[a] = 1)
            return this._initted && !this._pt && p && _e(this), this
          }),
          (e.to = function (t, r) {
            return new e(t, r, arguments[2])
          }),
          (e.from = function (t, e) {
            return Zt(1, arguments)
          }),
          (e.delayedCall = function (t, r, n, i) {
            return new e(r, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: r,
              onReverseComplete: r,
              onCompleteParams: n,
              onReverseCompleteParams: n,
              callbackScope: i,
            })
          }),
          (e.fromTo = function (t, e, r) {
            return Zt(2, arguments)
          }),
          (e.set = function (t, r) {
            return (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r)
          }),
          (e.killTweensOf = function (t, e, r) {
            return u.killTweensOf(t, e, r)
          }),
          e
        )
      })(He)
      kt(tr.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
        _t('staggerTo,staggerFrom,staggerFromTo', function (t) {
          tr[t] = function () {
            var e = new Ue(),
              r = ee.call(arguments, 0)
            return r.splice('staggerFromTo' === t ? 5 : 4, 0, 0), e[t].apply(e, r)
          }
        })
      var er = function (t, e, r) {
          return (t[e] = r)
        },
        rr = function (t, e, r) {
          return t[e](r)
        },
        nr = function (t, e, r, n) {
          return t[e](n.fp, r)
        },
        ir = function (t, e, r) {
          return t.setAttribute(e, r)
        },
        sr = function (t, e) {
          return R(t[e]) ? rr : z(t[e]) && t.setAttribute ? ir : er
        },
        or = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        ar = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        ur = function (t, e) {
          var r = e._pt,
            n = ''
          if (!t && e.b) n = e.b
          else if (1 === t && e.e) n = e.e
          else {
            for (; r; )
              (n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n), (r = r._next)
            n += e.c
          }
          e.set(e.t, e.p, n, e)
        },
        lr = function (t, e) {
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next)
        },
        cr = function (t, e, r, n) {
          for (var i, s = this._pt; s; ) (i = s._next), s.p === n && s.modifier(t, e, r), (s = i)
        },
        fr = function (t) {
          for (var e, r, n = this._pt; n; )
            (r = n._next), (n.p === t && !n.op) || n.op === t ? Pt(this, n, '_pt') : n.dep || (e = 1), (n = r)
          return !e
        },
        hr = function (t, e, r, n) {
          n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
        },
        pr = function (t) {
          for (var e, r, n, i, s = t._pt; s; ) {
            for (e = s._next, r = n; r && r.pr > s.pr; ) r = r._next
            ;(s._prev = r ? r._prev : i) ? (s._prev._next = s) : (n = s),
              (s._next = r) ? (r._prev = s) : (i = s),
              (s = e)
          }
          t._pt = n
        },
        dr = (function () {
          function t(t, e, r, n, i, s, o, a, u) {
            ;(this.t = e),
              (this.s = n),
              (this.c = i),
              (this.p = r),
              (this.r = s || or),
              (this.d = o || this),
              (this.set = a || er),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this)
          }
          return (
            (t.prototype.modifier = function (t, e, r) {
              ;(this.mSet = this.mSet || this.set), (this.set = hr), (this.m = t), (this.mt = r), (this.tween = e)
            }),
            t
          )
        })()
      _t(
        ht +
          'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
        function (t) {
          return (st[t] = 1)
        }
      ),
        (G.TweenMax = G.TweenLite = tr),
        (G.TimelineLite = G.TimelineMax = Ue),
        (u = new Ue({ sortChildren: !1, defaults: T, autoRemoveChildren: !0, id: 'root', smoothChildTiming: !0 })),
        (x.stringFilter = Oe)
      var gr = [],
        _r = {},
        vr = [],
        mr = 0,
        yr = 0,
        br = function (t) {
          return (_r[t] || vr).map(function (t) {
            return t()
          })
        },
        wr = function () {
          var t = Date.now(),
            e = []
          t - mr > 2 &&
            (br('matchMediaInit'),
            gr.forEach(function (t) {
              var r,
                n,
                i,
                s,
                o = t.queries,
                a = t.conditions
              for (n in o) (r = l.matchMedia(o[n]).matches) && (i = 1), r !== a[n] && ((a[n] = r), (s = 1))
              s && (t.revert(), i && e.push(t))
            }),
            br('matchMediaRevert'),
            e.forEach(function (t) {
              return t.onMatch(t, function (e) {
                return t.add(null, e)
              })
            }),
            (mr = t),
            br('matchMedia'))
        },
        xr = (function () {
          function t(t, e) {
            ;(this.selector = e && se(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              (this.id = yr++),
              t && this.add(t)
          }
          var e = t.prototype
          return (
            (e.add = function (t, e, r) {
              R(t) && ((r = e), (e = t), (t = R))
              var n = this,
                i = function () {
                  var t,
                    i = a,
                    s = n.selector
                  return (
                    i && i !== n && i.data.push(n),
                    r && (n.selector = se(r)),
                    (a = n),
                    (t = e.apply(n, arguments)),
                    R(t) && n._r.push(t),
                    (a = i),
                    (n.selector = s),
                    (n.isReverted = !1),
                    t
                  )
                }
              return (
                (n.last = i),
                t === R
                  ? i(n, function (t) {
                      return n.add(null, t)
                    })
                  : t
                  ? (n[t] = i)
                  : i
              )
            }),
            (e.ignore = function (t) {
              var e = a
              ;(a = null), t(this), (a = e)
            }),
            (e.getTweens = function () {
              var e = []
              return (
                this.data.forEach(function (r) {
                  return r instanceof t
                    ? e.push.apply(e, r.getTweens())
                    : r instanceof tr && !(r.parent && 'nested' === r.parent.data) && e.push(r)
                }),
                e
              )
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0
            }),
            (e.kill = function (t, e) {
              var r = this
              if (
                (t
                  ? (function () {
                      for (var e, n = r.getTweens(), i = r.data.length; i--; )
                        'isFlip' === (e = r.data[i]).data &&
                          (e.revert(),
                          e.getChildren(!0, !0, !1).forEach(function (t) {
                            return n.splice(n.indexOf(t), 1)
                          }))
                      for (
                        n
                          .map(function (t) {
                            return {
                              g:
                                t._dur || t._delay || (t._sat && !t._sat.vars.immediateRender)
                                  ? t.globalTime(0)
                                  : -1 / 0,
                              t: t,
                            }
                          })
                          .sort(function (t, e) {
                            return e.g - t.g || -1 / 0
                          })
                          .forEach(function (e) {
                            return e.t.revert(t)
                          }),
                          i = r.data.length;
                        i--;

                      )
                        (e = r.data[i]) instanceof Ue
                          ? 'nested' !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(), e.kill())
                          : !(e instanceof tr) && e.revert && e.revert(t)
                      r._r.forEach(function (e) {
                        return e(t, r)
                      }),
                        (r.isReverted = !0)
                    })()
                  : this.data.forEach(function (t) {
                      return t.kill && t.kill()
                    }),
                this.clear(),
                e)
              )
                for (var n = gr.length; n--; ) gr[n].id === this.id && gr.splice(n, 1)
            }),
            (e.revert = function (t) {
              this.kill(t || {})
            }),
            t
          )
        })(),
        Tr = (function () {
          function t(t) {
            ;(this.contexts = []), (this.scope = t), a && a.data.push(this)
          }
          var e = t.prototype
          return (
            (e.add = function (t, e, r) {
              F(t) || (t = { matches: t })
              var n,
                i,
                s,
                o = new xr(0, r || this.scope),
                u = (o.conditions = {})
              for (i in (a && !o.selector && (o.selector = a.selector),
              this.contexts.push(o),
              (e = o.add('onMatch', e)),
              (o.queries = t),
              t))
                'all' === i
                  ? (s = 1)
                  : (n = l.matchMedia(t[i])) &&
                    (gr.indexOf(o) < 0 && gr.push(o),
                    (u[i] = n.matches) && (s = 1),
                    n.addListener ? n.addListener(wr) : n.addEventListener('change', wr))
              return (
                s &&
                  e(o, function (t) {
                    return o.add(null, t)
                  }),
                this
              )
            }),
            (e.revert = function (t) {
              this.kill(t || {})
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0)
              })
            }),
            t
          )
        })(),
        Er = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]
            e.forEach(function (t) {
              return me(t)
            })
          },
          timeline: function (t) {
            return new Ue(t)
          },
          getTweensOf: function (t, e) {
            return u.getTweensOf(t, e)
          },
          getProperty: function (t, e, r, n) {
            D(t) && (t = ie(t)[0])
            var i = dt(t || {}).get,
              s = r ? Et : Tt
            return (
              'native' === r && (r = ''),
              t
                ? e
                  ? s(((ut[e] && ut[e].get) || i)(t, e, r, n))
                  : function (e, r, n) {
                      return s(((ut[e] && ut[e].get) || i)(t, e, r, n))
                    }
                : t
            )
          },
          quickSetter: function (t, e, r) {
            if ((t = ie(t)).length > 1) {
              var n = t.map(function (t) {
                  return Or.quickSetter(t, e, r)
                }),
                i = n.length
              return function (t) {
                for (var e = i; e--; ) n[e](t)
              }
            }
            t = t[0] || {}
            var s = ut[e],
              o = dt(t),
              a = (o.harness && (o.harness.aliases || {})[e]) || e,
              u = s
                ? function (e) {
                    var n = new s()
                    ;(d._pt = 0), n.init(t, r ? e + r : e, d, 0, [t]), n.render(1, n), d._pt && lr(1, d)
                  }
                : o.set(t, a)
            return s
              ? u
              : function (e) {
                  return u(t, a, r ? e + r : e, o, 1)
                }
          },
          quickTo: function (t, e, r) {
            var n,
              i = Or.to(t, Ct((((n = {})[e] = '+=0.1'), (n.paused = !0), n), r || {})),
              s = function (t, r, n) {
                return i.resetTo(e, t, r, n)
              }
            return (s.tween = i), s
          },
          isTweening: function (t) {
            return u.getTweensOf(t, !0).length > 0
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = Fe(t.ease, T.ease)), Ot(T, t || {})
          },
          config: function (t) {
            return Ot(x, t || {})
          },
          registerEffect: function (t) {
            var e = t.name,
              r = t.effect,
              n = t.plugins,
              i = t.defaults,
              s = t.extendTimeline
            ;(n || '').split(',').forEach(function (t) {
              return t && !ut[t] && !G[t] && K(e + ' effect requires ' + t + ' plugin.')
            }),
              (lt[e] = function (t, e, n) {
                return r(ie(t), kt(e || {}, i), n)
              }),
              s &&
                (Ue.prototype[e] = function (t, r, n) {
                  return this.add(lt[e](t, F(r) ? r : (n = r) && {}, this), n)
                })
          },
          registerEase: function (t, e) {
            Ae[t] = Fe(e)
          },
          parseEase: function (t, e) {
            return arguments.length ? Fe(t, e) : Ae
          },
          getById: function (t) {
            return u.getById(t)
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {})
            var r,
              n,
              i = new Ue(t)
            for (
              i.smoothChildTiming = L(t.smoothChildTiming),
                u.remove(i),
                i._dp = 0,
                i._time = i._tTime = u._time,
                r = u._first;
              r;

            )
              (n = r._next),
                (!e && !r._dur && r instanceof tr && r.vars.onComplete === r._targets[0]) ||
                  Ht(i, r, r._start - r._delay),
                (r = n)
            return Ht(u, i, 0), i
          },
          context: function (t, e) {
            return t ? new xr(t, e) : a
          },
          matchMedia: function (t) {
            return new Tr(t)
          },
          matchMediaRefresh: function () {
            return (
              gr.forEach(function (t) {
                var e,
                  r,
                  n = t.conditions
                for (r in n) n[r] && ((n[r] = !1), (e = 1))
                e && t.revert()
              }) || wr()
            )
          },
          addEventListener: function (t, e) {
            var r = _r[t] || (_r[t] = [])
            ~r.indexOf(e) || r.push(e)
          },
          removeEventListener: function (t, e) {
            var r = _r[t],
              n = r && r.indexOf(e)
            n >= 0 && r.splice(n, 1)
          },
          utils: {
            wrap: function t(e, r, n) {
              var i = r - e
              return X(e)
                ? fe(e, t(0, e.length), r)
                : Jt(n, function (t) {
                    return ((i + ((t - e) % i)) % i) + e
                  })
            },
            wrapYoyo: function t(e, r, n) {
              var i = r - e,
                s = 2 * i
              return X(e)
                ? fe(e, t(0, e.length - 1), r)
                : Jt(n, function (t) {
                    return e + ((t = (s + ((t - e) % s)) % s || 0) > i ? s - t : t)
                  })
            },
            distribute: ae,
            random: ce,
            snap: le,
            normalize: function (t, e, r) {
              return pe(t, e, 0, 1, r)
            },
            getUnit: te,
            clamp: function (t, e, r) {
              return Jt(r, function (r) {
                return Kt(t, e, r)
              })
            },
            splitColor: xe,
            toArray: ie,
            selector: se,
            mapRange: pe,
            pipe: function () {
              for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t)
                }, t)
              }
            },
            unitize: function (t, e) {
              return function (r) {
                return t(parseFloat(r)) + (e || te(r))
              }
            },
            interpolate: function t(e, r, n, i) {
              var s = isNaN(e + r)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * r
                  }
              if (!s) {
                var o,
                  a,
                  u,
                  l,
                  c,
                  f = D(e),
                  h = {}
                if ((!0 === n && (i = 1) && (n = null), f)) (e = { p: e }), (r = { p: r })
                else if (X(e) && !X(r)) {
                  for (u = [], l = e.length, c = l - 2, a = 1; a < l; a++) u.push(t(e[a - 1], e[a]))
                  l--,
                    (s = function (t) {
                      t *= l
                      var e = Math.min(c, ~~t)
                      return u[e](t - e)
                    }),
                    (n = r)
                } else i || (e = Ct(X(e) ? [] : {}, e))
                if (!u) {
                  for (o in r) We.call(h, e, o, 'get', r[o])
                  s = function (t) {
                    return lr(t, h) || (f ? e.p : e)
                  }
                }
              }
              return Jt(n, s)
            },
            shuffle: oe,
          },
          install: Z,
          effects: lt,
          ticker: Me,
          updateRoot: Ue.updateRoot,
          plugins: ut,
          globalTimeline: u,
          core: {
            PropTween: dr,
            globals: tt,
            Tween: tr,
            Timeline: Ue,
            Animation: He,
            getCache: dt,
            _removeLinkedListItem: Pt,
            reverting: function () {
              return o
            },
            context: function (t) {
              return t && a && (a.data.push(t), (t._ctx = a)), a
            },
            suppressOverwrites: function (t) {
              return (s = t)
            },
          },
        }
      _t('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
        return (Er[t] = tr[t])
      }),
        Me.add(Ue.updateRoot),
        (d = Er.to({}, { duration: 0 }))
      var kr = function (t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; ) r = r._next
          return r
        },
        Cr = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, r, n) {
              n._onInit = function (t) {
                var n, i
                if (
                  (D(r) &&
                    ((n = {}),
                    _t(r, function (t) {
                      return (n[t] = 1)
                    }),
                    (r = n)),
                  e)
                ) {
                  for (i in ((n = {}), r)) n[i] = e(r[i])
                  r = n
                }
                !(function (t, e) {
                  var r,
                    n,
                    i,
                    s = t._targets
                  for (r in e)
                    for (n = s.length; n--; )
                      (i = t._ptLookup[n][r]) &&
                        (i = i.d) &&
                        (i._pt && (i = kr(i, r)), i && i.modifier && i.modifier(e[r], t, s[n], r))
                })(t, r)
              }
            },
          }
        },
        Or =
          Er.registerPlugin(
            {
              name: 'attr',
              init: function (t, e, r, n, i) {
                var s, o, a
                for (s in ((this.tween = r), e))
                  (a = t.getAttribute(s) || ''),
                    ((o = this.add(t, 'setAttribute', (a || 0) + '', e[s], n, i, 0, 0, s)).op = s),
                    (o.b = a),
                    this._props.push(s)
              },
              render: function (t, e) {
                for (var r = e._pt; r; ) o ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next)
              },
            },
            {
              name: 'endArray',
              init: function (t, e) {
                for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
              },
            },
            Cr('roundProps', ue),
            Cr('modifiers'),
            Cr('snap', le)
          ) || Er
      ;(tr.version = Ue.version = Or.version = '3.12.5'), (h = 1), I() && Se()
      Ae.Power0,
        Ae.Power1,
        Ae.Power2,
        Ae.Power3,
        Ae.Power4,
        Ae.Linear,
        Ae.Quad,
        Ae.Cubic,
        Ae.Quart,
        Ae.Quint,
        Ae.Strong,
        Ae.Elastic,
        Ae.Back,
        Ae.SteppedEase,
        Ae.Bounce,
        Ae.Sine,
        Ae.Expo,
        Ae.Circ
      var Mr,
        Sr,
        Ar,
        Pr,
        Dr,
        Rr,
        Nr,
        zr,
        Fr = {},
        Lr = 180 / Math.PI,
        Ir = Math.PI / 180,
        Br = Math.atan2,
        Yr = /([A-Z])/g,
        Xr = /(left|right|width|margin|padding|x)/i,
        Hr = /[\s,\(]\S/,
        Ur = { autoAlpha: 'opacity,visibility', scale: 'scaleX,scaleY', alpha: 'opacity' },
        jr = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        qr = function (t, e) {
          return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Vr = function (t, e) {
          return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        Wr = function (t, e) {
          var r = e.s + e.c * t
          e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e)
        },
        Qr = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        Gr = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        $r = function (t, e, r) {
          return (t.style[e] = r)
        },
        Zr = function (t, e, r) {
          return t.style.setProperty(e, r)
        },
        Jr = function (t, e, r) {
          return (t._gsap[e] = r)
        },
        Kr = function (t, e, r) {
          return (t._gsap.scaleX = t._gsap.scaleY = r)
        },
        tn = function (t, e, r, n, i) {
          var s = t._gsap
          ;(s.scaleX = s.scaleY = r), s.renderTransform(i, s)
        },
        en = function (t, e, r, n, i) {
          var s = t._gsap
          ;(s[e] = r), s.renderTransform(i, s)
        },
        rn = 'transform',
        nn = rn + 'Origin',
        sn = function t(e, r) {
          var n = this,
            i = this.target,
            s = i.style,
            o = i._gsap
          if (e in Fr && s) {
            if (((this.tfm = this.tfm || {}), 'transform' === e))
              return Ur.transform.split(',').forEach(function (e) {
                return t.call(n, e, r)
              })
            if (
              (~(e = Ur[e] || e).indexOf(',')
                ? e.split(',').forEach(function (t) {
                    return (n.tfm[t] = Tn(i, t))
                  })
                : (this.tfm[e] = o.x ? o[e] : Tn(i, e)),
              e === nn && (this.tfm.zOrigin = o.zOrigin),
              this.props.indexOf(rn) >= 0)
            )
              return
            o.svg && ((this.svgo = i.getAttribute('data-svg-origin')), this.props.push(nn, r, '')), (e = rn)
          }
          ;(s || r) && this.props.push(e, r, s[e])
        },
        on = function (t) {
          t.translate && (t.removeProperty('translate'), t.removeProperty('scale'), t.removeProperty('rotate'))
        },
        an = function () {
          var t,
            e,
            r = this.props,
            n = this.target,
            i = n.style,
            s = n._gsap
          for (t = 0; t < r.length; t += 3)
            r[t + 1]
              ? (n[r[t]] = r[t + 2])
              : r[t + 2]
              ? (i[r[t]] = r[t + 2])
              : i.removeProperty('--' === r[t].substr(0, 2) ? r[t] : r[t].replace(Yr, '-$1').toLowerCase())
          if (this.tfm) {
            for (e in this.tfm) s[e] = this.tfm[e]
            s.svg && (s.renderTransform(), n.setAttribute('data-svg-origin', this.svgo || '')),
              ((t = Nr()) && t.isStart) ||
                i[rn] ||
                (on(i),
                s.zOrigin && i[nn] && ((i[nn] += ' ' + s.zOrigin + 'px'), (s.zOrigin = 0), s.renderTransform()),
                (s.uncache = 1))
          }
        },
        un = function (t, e) {
          var r = { target: t, props: [], revert: an, save: sn }
          return (
            t._gsap || Or.core.getCache(t),
            e &&
              e.split(',').forEach(function (t) {
                return r.save(t)
              }),
            r
          )
        },
        ln = function (t, e) {
          var r = Sr.createElementNS
            ? Sr.createElementNS((e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'), t)
            : Sr.createElement(t)
          return r && r.style ? r : Sr.createElement(t)
        },
        cn = function t(e, r, n) {
          var i = getComputedStyle(e)
          return (
            i[r] ||
            i.getPropertyValue(r.replace(Yr, '-$1').toLowerCase()) ||
            i.getPropertyValue(r) ||
            (!n && t(e, hn(r) || r, 1)) ||
            ''
          )
        },
        fn = 'O,Moz,ms,Ms,Webkit'.split(','),
        hn = function (t, e, r) {
          var n = (e || Dr).style,
            i = 5
          if (t in n && !r) return t
          for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(fn[i] + t in n); );
          return i < 0 ? null : (3 === i ? 'ms' : i >= 0 ? fn[i] : '') + t
        },
        pn = function () {
          'undefined' != typeof window &&
            window.document &&
            ((Mr = window),
            (Sr = Mr.document),
            (Ar = Sr.documentElement),
            (Dr = ln('div') || { style: {} }),
            ln('div'),
            (rn = hn(rn)),
            (nn = rn + 'Origin'),
            (Dr.style.cssText = 'border-width:0;line-height:0;position:absolute;padding:0'),
            (zr = !!hn('perspective')),
            (Nr = Or.core.reverting),
            (Pr = 1))
        },
        dn = function t(e) {
          var r,
            n = ln(
              'svg',
              (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) || 'http://www.w3.org/2000/svg'
            ),
            i = this.parentNode,
            s = this.nextSibling,
            o = this.style.cssText
          if ((Ar.appendChild(n), n.appendChild(this), (this.style.display = 'block'), e))
            try {
              ;(r = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t)
            } catch (a) {}
          else this._gsapBBox && (r = this._gsapBBox())
          return (
            i && (s ? i.insertBefore(this, s) : i.appendChild(this)), Ar.removeChild(n), (this.style.cssText = o), r
          )
        },
        gn = function (t, e) {
          for (var r = e.length; r--; ) if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
        },
        _n = function (t) {
          var e
          try {
            e = t.getBBox()
          } catch (r) {
            e = dn.call(t, !0)
          }
          return (
            (e && (e.width || e.height)) || t.getBBox === dn || (e = dn.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : { x: +gn(t, ['x', 'cx', 'x1']) || 0, y: +gn(t, ['y', 'cy', 'y1']) || 0, width: 0, height: 0 }
          )
        },
        vn = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !_n(t))
        },
        mn = function (t, e) {
          if (e) {
            var r,
              n = t.style
            e in Fr && e !== nn && (e = rn),
              n.removeProperty
                ? (('ms' !== (r = e.substr(0, 2)) && 'webkit' !== e.substr(0, 6)) || (e = '-' + e),
                  n.removeProperty('--' === r ? e : e.replace(Yr, '-$1').toLowerCase()))
                : n.removeAttribute(e)
          }
        },
        yn = function (t, e, r, n, i, s) {
          var o = new dr(t._pt, e, r, 0, 1, s ? Gr : Qr)
          return (t._pt = o), (o.b = n), (o.e = i), t._props.push(r), o
        },
        bn = { deg: 1, rad: 1, turn: 1 },
        wn = { grid: 1, flex: 1 },
        xn = function t(e, r, n, i) {
          var s,
            o,
            a,
            u,
            l = parseFloat(n) || 0,
            c = (n + '').trim().substr((l + '').length) || 'px',
            f = Dr.style,
            h = Xr.test(r),
            p = 'svg' === e.tagName.toLowerCase(),
            d = (p ? 'client' : 'offset') + (h ? 'Width' : 'Height'),
            g = 100,
            _ = 'px' === i,
            v = '%' === i
          if (i === c || !l || bn[i] || bn[c]) return l
          if (
            ('px' !== c && !_ && (l = t(e, r, n, 'px')),
            (u = e.getCTM && vn(e)),
            (v || '%' === c) && (Fr[r] || ~r.indexOf('adius')))
          )
            return (s = u ? e.getBBox()[h ? 'width' : 'height'] : e[d]), vt(v ? (l / s) * g : (l / 100) * s)
          if (
            ((f[h ? 'width' : 'height'] = g + (_ ? c : i)),
            (o = ~r.indexOf('adius') || ('em' === i && e.appendChild && !p) ? e : e.parentNode),
            u && (o = (e.ownerSVGElement || {}).parentNode),
            (o && o !== Sr && o.appendChild) || (o = Sr.body),
            (a = o._gsap) && v && a.width && h && a.time === Me.time && !a.uncache)
          )
            return vt((l / a.width) * g)
          if (!v || ('height' !== r && 'width' !== r))
            (v || '%' === c) && !wn[cn(o, 'display')] && (f.position = cn(e, 'position')),
              o === e && (f.position = 'static'),
              o.appendChild(Dr),
              (s = Dr[d]),
              o.removeChild(Dr),
              (f.position = 'absolute')
          else {
            var m = e.style[r]
            ;(e.style[r] = g + i), (s = e[d]), m ? (e.style[r] = m) : mn(e, r)
          }
          return (
            h && v && (((a = dt(o)).time = Me.time), (a.width = o[d])), vt(_ ? (s * l) / g : s && l ? (g / s) * l : 0)
          )
        },
        Tn = function (t, e, r, n) {
          var i
          return (
            Pr || pn(),
            e in Ur && 'transform' !== e && ~(e = Ur[e]).indexOf(',') && (e = e.split(',')[0]),
            Fr[e] && 'transform' !== e
              ? ((i = Nn(t, n)),
                (i = 'transformOrigin' !== e ? i[e] : i.svg ? i.origin : zn(cn(t, nn)) + ' ' + i.zOrigin + 'px'))
              : (!(i = t.style[e]) || 'auto' === i || n || ~(i + '').indexOf('calc(')) &&
                (i = (On[e] && On[e](t, e, r)) || cn(t, e) || gt(t, e) || ('opacity' === e ? 1 : 0)),
            r && !~(i + '').trim().indexOf(' ') ? xn(t, e, i, r) + r : i
          )
        },
        En = function (t, e, r, n) {
          if (!r || 'none' === r) {
            var i = hn(e, t, 1),
              s = i && cn(t, i, 1)
            s && s !== r ? ((e = i), (r = s)) : 'borderColor' === e && (r = cn(t, 'borderTopColor'))
          }
          var o,
            a,
            u,
            l,
            c,
            f,
            h,
            p,
            d,
            g,
            _,
            v = new dr(this._pt, t.style, e, 0, 1, ur),
            m = 0,
            y = 0
          if (
            ((v.b = r),
            (v.e = n),
            (r += ''),
            'auto' === (n += '') &&
              ((f = t.style[e]), (t.style[e] = n), (n = cn(t, e) || n), f ? (t.style[e] = f) : mn(t, e)),
            Oe((o = [r, n])),
            (n = o[1]),
            (u = (r = o[0]).match(j) || []),
            (n.match(j) || []).length)
          ) {
            for (; (a = j.exec(n)); )
              (h = a[0]),
                (d = n.substring(m, a.index)),
                c ? (c = (c + 1) % 5) : ('rgba(' !== d.substr(-5) && 'hsla(' !== d.substr(-5)) || (c = 1),
                h !== (f = u[y++] || '') &&
                  ((l = parseFloat(f) || 0),
                  (_ = f.substr((l + '').length)),
                  '=' === h.charAt(1) && (h = yt(l, h) + _),
                  (p = parseFloat(h)),
                  (g = h.substr((p + '').length)),
                  (m = j.lastIndex - g.length),
                  g || ((g = g || x.units[e] || _), m === n.length && ((n += g), (v.e += g))),
                  _ !== g && (l = xn(t, e, f, g) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: d || 1 === y ? d : ',',
                    s: l,
                    c: p - l,
                    m: (c && c < 4) || 'zIndex' === e ? Math.round : 0,
                  }))
            v.c = m < n.length ? n.substring(m, n.length) : ''
          } else v.r = 'display' === e && 'none' === n ? Gr : Qr
          return V.test(n) && (v.e = 0), (this._pt = v), v
        },
        kn = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
        Cn = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var r,
              n,
              i,
              s = e.t,
              o = s.style,
              a = e.u,
              u = s._gsap
            if ('all' === a || !0 === a) (o.cssText = ''), (n = 1)
            else
              for (i = (a = a.split(',')).length; --i > -1; )
                (r = a[i]), Fr[r] && ((n = 1), (r = 'transformOrigin' === r ? nn : rn)), mn(s, r)
            n && (mn(s, rn), u && (u.svg && s.removeAttribute('transform'), Nn(s, 1), (u.uncache = 1), on(o)))
          }
        },
        On = {
          clearProps: function (t, e, r, n, i) {
            if ('isFromStart' !== i.data) {
              var s = (t._pt = new dr(t._pt, e, r, 0, 0, Cn))
              return (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1
            }
          },
        },
        Mn = [1, 0, 0, 1, 0, 0],
        Sn = {},
        An = function (t) {
          return 'matrix(1, 0, 0, 1, 0, 0)' === t || 'none' === t || !t
        },
        Pn = function (t) {
          var e = cn(t, rn)
          return An(e) ? Mn : e.substr(7).match(U).map(vt)
        },
        Dn = function (t, e) {
          var r,
            n,
            i,
            s,
            o = t._gsap || dt(t),
            a = t.style,
            u = Pn(t)
          return o.svg && t.getAttribute('transform')
            ? '1,0,0,1,0,0' ===
              (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(',')
              ? Mn
              : u
            : (u !== Mn ||
                t.offsetParent ||
                t === Ar ||
                o.svg ||
                ((i = a.display),
                (a.display = 'block'),
                ((r = t.parentNode) && t.offsetParent) || ((s = 1), (n = t.nextElementSibling), Ar.appendChild(t)),
                (u = Pn(t)),
                i ? (a.display = i) : mn(t, 'display'),
                s && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : Ar.removeChild(t))),
              e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        Rn = function (t, e, r, n, i, s) {
          var o,
            a,
            u,
            l = t._gsap,
            c = i || Dn(t, !0),
            f = l.xOrigin || 0,
            h = l.yOrigin || 0,
            p = l.xOffset || 0,
            d = l.yOffset || 0,
            g = c[0],
            _ = c[1],
            v = c[2],
            m = c[3],
            y = c[4],
            b = c[5],
            w = e.split(' '),
            x = parseFloat(w[0]) || 0,
            T = parseFloat(w[1]) || 0
          r
            ? c !== Mn &&
              (a = g * m - _ * v) &&
              ((u = x * (-_ / a) + T * (g / a) - (g * b - _ * y) / a),
              (x = x * (m / a) + T * (-v / a) + (v * b - m * y) / a),
              (T = u))
            : ((x = (o = _n(t)).x + (~w[0].indexOf('%') ? (x / 100) * o.width : x)),
              (T = o.y + (~(w[1] || w[0]).indexOf('%') ? (T / 100) * o.height : T))),
            n || (!1 !== n && l.smooth)
              ? ((y = x - f), (b = T - h), (l.xOffset = p + (y * g + b * v) - y), (l.yOffset = d + (y * _ + b * m) - b))
              : (l.xOffset = l.yOffset = 0),
            (l.xOrigin = x),
            (l.yOrigin = T),
            (l.smooth = !!n),
            (l.origin = e),
            (l.originIsAbsolute = !!r),
            (t.style[nn] = '0px 0px'),
            s &&
              (yn(s, l, 'xOrigin', f, x),
              yn(s, l, 'yOrigin', h, T),
              yn(s, l, 'xOffset', p, l.xOffset),
              yn(s, l, 'yOffset', d, l.yOffset)),
            t.setAttribute('data-svg-origin', x + ' ' + T)
        },
        Nn = function (t, e) {
          var r = t._gsap || new Xe(t)
          if ('x' in r && !e && !r.uncache) return r
          var n,
            i,
            s,
            o,
            a,
            u,
            l,
            c,
            f,
            h,
            p,
            d,
            g,
            _,
            v,
            m,
            y,
            b,
            w,
            T,
            E,
            k,
            C,
            O,
            M,
            S,
            A,
            P,
            D,
            R,
            N,
            z,
            F = t.style,
            L = r.scaleX < 0,
            I = 'px',
            B = 'deg',
            Y = getComputedStyle(t),
            X = cn(t, nn) || '0'
          return (
            (n = i = s = u = l = c = f = h = p = 0),
            (o = a = 1),
            (r.svg = !(!t.getCTM || !vn(t))),
            Y.translate &&
              (('none' === Y.translate && 'none' === Y.scale && 'none' === Y.rotate) ||
                (F[rn] =
                  ('none' !== Y.translate
                    ? 'translate3d(' + (Y.translate + ' 0 0').split(' ').slice(0, 3).join(', ') + ') '
                    : '') +
                  ('none' !== Y.rotate ? 'rotate(' + Y.rotate + ') ' : '') +
                  ('none' !== Y.scale ? 'scale(' + Y.scale.split(' ').join(',') + ') ' : '') +
                  ('none' !== Y[rn] ? Y[rn] : '')),
              (F.scale = F.rotate = F.translate = 'none')),
            (_ = Dn(t, r.svg)),
            r.svg &&
              (r.uncache
                ? ((M = t.getBBox()), (X = r.xOrigin - M.x + 'px ' + (r.yOrigin - M.y) + 'px'), (O = ''))
                : (O = !e && t.getAttribute('data-svg-origin')),
              Rn(t, O || X, !!O || r.originIsAbsolute, !1 !== r.smooth, _)),
            (d = r.xOrigin || 0),
            (g = r.yOrigin || 0),
            _ !== Mn &&
              ((b = _[0]),
              (w = _[1]),
              (T = _[2]),
              (E = _[3]),
              (n = k = _[4]),
              (i = C = _[5]),
              6 === _.length
                ? ((o = Math.sqrt(b * b + w * w)),
                  (a = Math.sqrt(E * E + T * T)),
                  (u = b || w ? Br(w, b) * Lr : 0),
                  (f = T || E ? Br(T, E) * Lr + u : 0) && (a *= Math.abs(Math.cos(f * Ir))),
                  r.svg && ((n -= d - (d * b + g * T)), (i -= g - (d * w + g * E))))
                : ((z = _[6]),
                  (R = _[7]),
                  (A = _[8]),
                  (P = _[9]),
                  (D = _[10]),
                  (N = _[11]),
                  (n = _[12]),
                  (i = _[13]),
                  (s = _[14]),
                  (l = (v = Br(z, D)) * Lr),
                  v &&
                    ((O = k * (m = Math.cos(-v)) + A * (y = Math.sin(-v))),
                    (M = C * m + P * y),
                    (S = z * m + D * y),
                    (A = k * -y + A * m),
                    (P = C * -y + P * m),
                    (D = z * -y + D * m),
                    (N = R * -y + N * m),
                    (k = O),
                    (C = M),
                    (z = S)),
                  (c = (v = Br(-T, D)) * Lr),
                  v &&
                    ((m = Math.cos(-v)),
                    (N = E * (y = Math.sin(-v)) + N * m),
                    (b = O = b * m - A * y),
                    (w = M = w * m - P * y),
                    (T = S = T * m - D * y)),
                  (u = (v = Br(w, b)) * Lr),
                  v &&
                    ((O = b * (m = Math.cos(v)) + w * (y = Math.sin(v))),
                    (M = k * m + C * y),
                    (w = w * m - b * y),
                    (C = C * m - k * y),
                    (b = O),
                    (k = M)),
                  l && Math.abs(l) + Math.abs(u) > 359.9 && ((l = u = 0), (c = 180 - c)),
                  (o = vt(Math.sqrt(b * b + w * w + T * T))),
                  (a = vt(Math.sqrt(C * C + z * z))),
                  (v = Br(k, C)),
                  (f = Math.abs(v) > 2e-4 ? v * Lr : 0),
                  (p = N ? 1 / (N < 0 ? -N : N) : 0)),
              r.svg &&
                ((O = t.getAttribute('transform')),
                (r.forceCSS = t.setAttribute('transform', '') || !An(cn(t, rn))),
                O && t.setAttribute('transform', O))),
            Math.abs(f) > 90 &&
              Math.abs(f) < 270 &&
              (L
                ? ((o *= -1), (f += u <= 0 ? 180 : -180), (u += u <= 0 ? 180 : -180))
                : ((a *= -1), (f += f <= 0 ? 180 : -180))),
            (e = e || r.uncache),
            (r.x =
              n -
              ((r.xPercent = n && ((!e && r.xPercent) || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                ? (t.offsetWidth * r.xPercent) / 100
                : 0) +
              I),
            (r.y =
              i -
              ((r.yPercent = i && ((!e && r.yPercent) || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
                ? (t.offsetHeight * r.yPercent) / 100
                : 0) +
              I),
            (r.z = s + I),
            (r.scaleX = vt(o)),
            (r.scaleY = vt(a)),
            (r.rotation = vt(u) + B),
            (r.rotationX = vt(l) + B),
            (r.rotationY = vt(c) + B),
            (r.skewX = f + B),
            (r.skewY = h + B),
            (r.transformPerspective = p + I),
            (r.zOrigin = parseFloat(X.split(' ')[2]) || (!e && r.zOrigin) || 0) && (F[nn] = zn(X)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = x.force3D),
            (r.renderTransform = r.svg ? Hn : zr ? Xn : Ln),
            (r.uncache = 0),
            r
          )
        },
        zn = function (t) {
          return (t = t.split(' '))[0] + ' ' + t[1]
        },
        Fn = function (t, e, r) {
          var n = te(e)
          return vt(parseFloat(e) + parseFloat(xn(t, 'x', r + 'px', n))) + n
        },
        Ln = function (t, e) {
          ;(e.z = '0px'), (e.rotationY = e.rotationX = '0deg'), (e.force3D = 0), Xn(t, e)
        },
        In = '0deg',
        Bn = '0px',
        Yn = ') ',
        Xn = function (t, e) {
          var r = e || this,
            n = r.xPercent,
            i = r.yPercent,
            s = r.x,
            o = r.y,
            a = r.z,
            u = r.rotation,
            l = r.rotationY,
            c = r.rotationX,
            f = r.skewX,
            h = r.skewY,
            p = r.scaleX,
            d = r.scaleY,
            g = r.transformPerspective,
            _ = r.force3D,
            v = r.target,
            m = r.zOrigin,
            y = '',
            b = ('auto' === _ && t && 1 !== t) || !0 === _
          if (m && (c !== In || l !== In)) {
            var w,
              x = parseFloat(l) * Ir,
              T = Math.sin(x),
              E = Math.cos(x)
            ;(x = parseFloat(c) * Ir),
              (w = Math.cos(x)),
              (s = Fn(v, s, T * w * -m)),
              (o = Fn(v, o, -Math.sin(x) * -m)),
              (a = Fn(v, a, E * w * -m + m))
          }
          g !== Bn && (y += 'perspective(' + g + Yn),
            (n || i) && (y += 'translate(' + n + '%, ' + i + '%) '),
            (b || s !== Bn || o !== Bn || a !== Bn) &&
              (y += a !== Bn || b ? 'translate3d(' + s + ', ' + o + ', ' + a + ') ' : 'translate(' + s + ', ' + o + Yn),
            u !== In && (y += 'rotate(' + u + Yn),
            l !== In && (y += 'rotateY(' + l + Yn),
            c !== In && (y += 'rotateX(' + c + Yn),
            (f === In && h === In) || (y += 'skew(' + f + ', ' + h + Yn),
            (1 === p && 1 === d) || (y += 'scale(' + p + ', ' + d + Yn),
            (v.style[rn] = y || 'translate(0, 0)')
        },
        Hn = function (t, e) {
          var r,
            n,
            i,
            s,
            o,
            a = e || this,
            u = a.xPercent,
            l = a.yPercent,
            c = a.x,
            f = a.y,
            h = a.rotation,
            p = a.skewX,
            d = a.skewY,
            g = a.scaleX,
            _ = a.scaleY,
            v = a.target,
            m = a.xOrigin,
            y = a.yOrigin,
            b = a.xOffset,
            w = a.yOffset,
            x = a.forceCSS,
            T = parseFloat(c),
            E = parseFloat(f)
          ;(h = parseFloat(h)),
            (p = parseFloat(p)),
            (d = parseFloat(d)) && ((p += d = parseFloat(d)), (h += d)),
            h || p
              ? ((h *= Ir),
                (p *= Ir),
                (r = Math.cos(h) * g),
                (n = Math.sin(h) * g),
                (i = Math.sin(h - p) * -_),
                (s = Math.cos(h - p) * _),
                p &&
                  ((d *= Ir),
                  (o = Math.tan(p - d)),
                  (i *= o = Math.sqrt(1 + o * o)),
                  (s *= o),
                  d && ((o = Math.tan(d)), (r *= o = Math.sqrt(1 + o * o)), (n *= o))),
                (r = vt(r)),
                (n = vt(n)),
                (i = vt(i)),
                (s = vt(s)))
              : ((r = g), (s = _), (n = i = 0)),
            ((T && !~(c + '').indexOf('px')) || (E && !~(f + '').indexOf('px'))) &&
              ((T = xn(v, 'x', c, 'px')), (E = xn(v, 'y', f, 'px'))),
            (m || y || b || w) && ((T = vt(T + m - (m * r + y * i) + b)), (E = vt(E + y - (m * n + y * s) + w))),
            (u || l) && ((o = v.getBBox()), (T = vt(T + (u / 100) * o.width)), (E = vt(E + (l / 100) * o.height))),
            (o = 'matrix(' + r + ',' + n + ',' + i + ',' + s + ',' + T + ',' + E + ')'),
            v.setAttribute('transform', o),
            x && (v.style[rn] = o)
        },
        Un = function (t, e, r, n, i) {
          var s,
            o,
            a = 360,
            u = D(i),
            l = parseFloat(i) * (u && ~i.indexOf('rad') ? Lr : 1) - n,
            c = n + l + 'deg'
          return (
            u &&
              ('short' === (s = i.split('_')[1]) && (l %= a) !== l % 180 && (l += l < 0 ? a : -360),
              'cw' === s && l < 0
                ? (l = ((l + 36e9) % a) - ~~(l / a) * a)
                : 'ccw' === s && l > 0 && (l = ((l - 36e9) % a) - ~~(l / a) * a)),
            (t._pt = o = new dr(t._pt, e, r, n, l, qr)),
            (o.e = c),
            (o.u = 'deg'),
            t._props.push(r),
            o
          )
        },
        jn = function (t, e) {
          for (var r in e) t[r] = e[r]
          return t
        },
        qn = function (t, e, r) {
          var n,
            i,
            s,
            o,
            a,
            u,
            l,
            c = jn({}, r._gsap),
            f = r.style
          for (i in (c.svg
            ? ((s = r.getAttribute('transform')),
              r.setAttribute('transform', ''),
              (f[rn] = e),
              (n = Nn(r, 1)),
              mn(r, rn),
              r.setAttribute('transform', s))
            : ((s = getComputedStyle(r)[rn]), (f[rn] = e), (n = Nn(r, 1)), (f[rn] = s)),
          Fr))
            (s = c[i]) !== (o = n[i]) &&
              'perspective,force3D,transformOrigin,svgOrigin'.indexOf(i) < 0 &&
              ((a = te(s) !== (l = te(o)) ? xn(r, i, s, l) : parseFloat(s)),
              (u = parseFloat(o)),
              (t._pt = new dr(t._pt, n, i, a, u - a, jr)),
              (t._pt.u = l || 0),
              t._props.push(i))
          jn(n, c)
        }
      _t('padding,margin,Width,Radius', function (t, e) {
        var r = 'Top',
          n = 'Right',
          i = 'Bottom',
          s = 'Left',
          o = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(function (r) {
            return e < 2 ? t + r : 'border' + r + t
          })
        On[e > 1 ? 'border' + t : t] = function (t, e, r, n, i) {
          var s, a
          if (arguments.length < 4)
            return (
              (s = o.map(function (e) {
                return Tn(t, e, r)
              })),
              5 === (a = s.join(' ')).split(s[0]).length ? s[0] : a
            )
          ;(s = (n + '').split(' ')),
            (a = {}),
            o.forEach(function (t, e) {
              return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0])
            }),
            t.init(e, a, i)
        }
      })
      var Vn,
        Wn,
        Qn,
        Gn = {
          name: 'css',
          register: pn,
          targetTest: function (t) {
            return t.style && t.nodeType
          },
          init: function (t, e, r, n, i) {
            var s,
              o,
              a,
              u,
              l,
              c,
              f,
              h,
              p,
              d,
              g,
              _,
              v,
              m,
              y,
              b,
              w,
              T,
              E,
              k,
              C = this._props,
              O = t.style,
              M = r.vars.startAt
            for (f in (Pr || pn(), (this.styles = this.styles || un(t)), (b = this.styles.props), (this.tween = r), e))
              if ('autoRound' !== f && ((o = e[f]), !ut[f] || !Qe(f, e, r, n, t, i)))
                if (
                  ((l = typeof o),
                  (c = On[f]),
                  'function' === l && (l = typeof (o = o.call(r, n, t, i))),
                  'string' === l && ~o.indexOf('random(') && (o = he(o)),
                  c)
                )
                  c(this, t, f, o, r) && (y = 1)
                else if ('--' === f.substr(0, 2))
                  (s = (getComputedStyle(t).getPropertyValue(f) + '').trim()),
                    (o += ''),
                    (ke.lastIndex = 0),
                    ke.test(s) || ((h = te(s)), (p = te(o))),
                    p ? h !== p && (s = xn(t, f, s, p) + p) : h && (o += h),
                    this.add(O, 'setProperty', s, o, n, i, 0, 0, f),
                    C.push(f),
                    b.push(f, 0, O[f])
                else if ('undefined' !== l) {
                  if (
                    (M && f in M
                      ? ((s = 'function' == typeof M[f] ? M[f].call(r, n, t, i) : M[f]),
                        D(s) && ~s.indexOf('random(') && (s = he(s)),
                        te(s + '') || 'auto' === s || (s += x.units[f] || te(Tn(t, f)) || ''),
                        '=' === (s + '').charAt(1) && (s = Tn(t, f)))
                      : (s = Tn(t, f)),
                    (u = parseFloat(s)),
                    (d = 'string' === l && '=' === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)),
                    (a = parseFloat(o)),
                    f in Ur &&
                      ('autoAlpha' === f &&
                        (1 === u && 'hidden' === Tn(t, 'visibility') && a && (u = 0),
                        b.push('visibility', 0, O.visibility),
                        yn(this, O, 'visibility', u ? 'inherit' : 'hidden', a ? 'inherit' : 'hidden', !a)),
                      'scale' !== f && 'transform' !== f && ~(f = Ur[f]).indexOf(',') && (f = f.split(',')[0])),
                    (g = f in Fr))
                  )
                    if (
                      (this.styles.save(f),
                      _ ||
                        (((v = t._gsap).renderTransform && !e.parseTransform) || Nn(t, e.parseTransform),
                        (m = !1 !== e.smoothOrigin && v.smooth),
                        ((_ = this._pt = new dr(this._pt, O, rn, 0, 1, v.renderTransform, v, 0, -1)).dep = 1)),
                      'scale' === f)
                    )
                      (this._pt = new dr(
                        this._pt,
                        v,
                        'scaleY',
                        v.scaleY,
                        (d ? yt(v.scaleY, d + a) : a) - v.scaleY || 0,
                        jr
                      )),
                        (this._pt.u = 0),
                        C.push('scaleY', f),
                        (f += 'X')
                    else {
                      if ('transformOrigin' === f) {
                        b.push(nn, 0, O[nn]),
                          (T = void 0),
                          (E = void 0),
                          (k = void 0),
                          (T = (w = o).split(' ')),
                          (E = T[0]),
                          (k = T[1] || '50%'),
                          ('top' !== E && 'bottom' !== E && 'left' !== k && 'right' !== k) ||
                            ((w = E), (E = k), (k = w)),
                          (T[0] = kn[E] || E),
                          (T[1] = kn[k] || k),
                          (o = T.join(' ')),
                          v.svg
                            ? Rn(t, o, 0, m, 0, this)
                            : ((p = parseFloat(o.split(' ')[2]) || 0) !== v.zOrigin &&
                                yn(this, v, 'zOrigin', v.zOrigin, p),
                              yn(this, O, f, zn(s), zn(o)))
                        continue
                      }
                      if ('svgOrigin' === f) {
                        Rn(t, o, 1, m, 0, this)
                        continue
                      }
                      if (f in Sn) {
                        Un(this, v, f, u, d ? yt(u, d + o) : o)
                        continue
                      }
                      if ('smoothOrigin' === f) {
                        yn(this, v, 'smooth', v.smooth, o)
                        continue
                      }
                      if ('force3D' === f) {
                        v[f] = o
                        continue
                      }
                      if ('transform' === f) {
                        qn(this, o, t)
                        continue
                      }
                    }
                  else f in O || (f = hn(f) || f)
                  if (g || ((a || 0 === a) && (u || 0 === u) && !Hr.test(o) && f in O))
                    a || (a = 0),
                      (h = (s + '').substr((u + '').length)) !== (p = te(o) || (f in x.units ? x.units[f] : h)) &&
                        (u = xn(t, f, s, p)),
                      (this._pt = new dr(
                        this._pt,
                        g ? v : O,
                        f,
                        u,
                        (d ? yt(u, d + a) : a) - u,
                        g || ('px' !== p && 'zIndex' !== f) || !1 === e.autoRound ? jr : Wr
                      )),
                      (this._pt.u = p || 0),
                      h !== p && '%' !== p && ((this._pt.b = s), (this._pt.r = Vr))
                  else if (f in O) En.call(this, t, f, s, d ? d + o : o)
                  else if (f in t) this.add(t, f, s || t[f], d ? d + o : o, n, i)
                  else if ('parseTransform' !== f) {
                    J(f, o)
                    continue
                  }
                  g || (f in O ? b.push(f, 0, O[f]) : b.push(f, 1, s || t[f])), C.push(f)
                }
            y && pr(this)
          },
          render: function (t, e) {
            if (e.tween._time || !Nr()) for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next)
            else e.styles.revert()
          },
          get: Tn,
          aliases: Ur,
          getSetter: function (t, e, r) {
            var n = Ur[e]
            return (
              n && n.indexOf(',') < 0 && (e = n),
              e in Fr && e !== nn && (t._gsap.x || Tn(t, 'x'))
                ? r && Rr === r
                  ? 'scale' === e
                    ? Kr
                    : Jr
                  : (Rr = r || {}) && ('scale' === e ? tn : en)
                : t.style && !z(t.style[e])
                ? $r
                : ~e.indexOf('-')
                ? Zr
                : sr(t, e)
            )
          },
          core: { _removeProperty: mn, _getMatrix: Dn },
        }
      ;(Or.utils.checkPrefix = hn),
        (Or.core.getStyleSaver = un),
        (Qn = _t(
          (Vn = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent') +
            ',' +
            (Wn = 'rotation,rotationX,rotationY,skewX,skewY') +
            ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
          function (t) {
            Fr[t] = 1
          }
        )),
        _t(Wn, function (t) {
          ;(x.units[t] = 'deg'), (Sn[t] = 1)
        }),
        (Ur[Qn[13]] = Vn + ',' + Wn),
        _t('0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY', function (t) {
          var e = t.split(':')
          Ur[e[1]] = Qn[e[0]]
        }),
        _t('x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective', function (t) {
          x.units[t] = 'px'
        }),
        Or.registerPlugin(Gn)
      var $n = Or.registerPlugin(Gn) || Or
      $n.core.Tween
    },
    15514: function (t) {
      var e
      'undefined' != typeof self && self,
        (e = () =>
          (() => {
            var t = {
                75: function (t) {
                  ;(function () {
                    var e, r, n, i, s, o
                    'undefined' != typeof performance && null !== performance && performance.now
                      ? (t.exports = function () {
                          return performance.now()
                        })
                      : 'undefined' != typeof process && null !== process && process.hrtime
                      ? ((t.exports = function () {
                          return (e() - s) / 1e6
                        }),
                        (r = process.hrtime),
                        (i = (e = function () {
                          var t
                          return 1e9 * (t = r())[0] + t[1]
                        })()),
                        (o = 1e9 * process.uptime()),
                        (s = i - o))
                      : Date.now
                      ? ((t.exports = function () {
                          return Date.now() - n
                        }),
                        (n = Date.now()))
                      : ((t.exports = function () {
                          return new Date().getTime() - n
                        }),
                        (n = new Date().getTime()))
                  }).call(this)
                },
                4087: (t, e, r) => {
                  for (
                    var n = r(75),
                      i = 'undefined' == typeof window ? r.g : window,
                      s = ['moz', 'webkit'],
                      o = 'AnimationFrame',
                      a = i['request' + o],
                      u = i['cancel' + o] || i['cancelRequest' + o],
                      l = 0;
                    !a && l < s.length;
                    l++
                  )
                    (a = i[s[l] + 'Request' + o]), (u = i[s[l] + 'Cancel' + o] || i[s[l] + 'CancelRequest' + o])
                  if (!a || !u) {
                    var c = 0,
                      f = 0,
                      h = []
                    ;(a = function (t) {
                      if (0 === h.length) {
                        var e = n(),
                          r = Math.max(0, 16.666666666666668 - (e - c))
                        ;(c = r + e),
                          setTimeout(function () {
                            var t = h.slice(0)
                            h.length = 0
                            for (var e = 0; e < t.length; e++)
                              if (!t[e].cancelled)
                                try {
                                  t[e].callback(c)
                                } catch (t) {
                                  setTimeout(function () {
                                    throw t
                                  }, 0)
                                }
                          }, Math.round(r))
                      }
                      return h.push({ handle: ++f, callback: t, cancelled: !1 }), f
                    }),
                      (u = function (t) {
                        for (var e = 0; e < h.length; e++) h[e].handle === t && (h[e].cancelled = !0)
                      })
                  }
                  ;(t.exports = function (t) {
                    return a.call(i, t)
                  }),
                    (t.exports.cancel = function () {
                      u.apply(i, arguments)
                    }),
                    (t.exports.polyfill = function (t) {
                      t || (t = i), (t.requestAnimationFrame = a), (t.cancelAnimationFrame = u)
                    })
                },
              },
              e = {}
            function r(n) {
              var i = e[n]
              if (void 0 !== i) return i.exports
              var s = (e[n] = { exports: {} })
              return t[n].call(s.exports, s, s.exports, r), s.exports
            }
            ;(r.n = (t) => {
              var e = t && t.__esModule ? () => t.default : () => t
              return r.d(e, { a: e }), e
            }),
              (r.d = (t, e) => {
                for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] })
              }),
              (r.g = (function () {
                if ('object' == typeof globalThis) return globalThis
                try {
                  return this || new Function('return this')()
                } catch (t) {
                  if ('object' == typeof window) return window
                }
              })()),
              (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e))
            var n = {}
            return (
              (() => {
                'use strict'
                r.d(n, { default: () => k })
                var t = r(4087),
                  e = r.n(t)
                const i = function (t) {
                    return new RegExp(/<[a-z][\s\S]*>/i).test(t)
                  },
                  s = function (t, e) {
                    return Math.floor(Math.random() * (e - t + 1)) + t
                  }
                var o = 'TYPE_CHARACTER',
                  a = 'REMOVE_CHARACTER',
                  u = 'REMOVE_ALL',
                  l = 'REMOVE_LAST_VISIBLE_NODE',
                  c = 'PAUSE_FOR',
                  f = 'CALL_FUNCTION',
                  h = 'ADD_HTML_TAG_ELEMENT',
                  p = 'CHANGE_DELETE_SPEED',
                  d = 'CHANGE_DELAY',
                  g = 'CHANGE_CURSOR',
                  _ = 'PASTE_STRING',
                  v = 'HTML_TAG'
                function m(t) {
                  return (
                    (m =
                      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (t) {
                            return typeof t
                          }
                        : function (t) {
                            return t &&
                              'function' == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? 'symbol'
                              : typeof t
                          }),
                    m(t)
                  )
                }
                function y(t, e) {
                  var r = Object.keys(t)
                  if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t)
                    e &&
                      (n = n.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                      })),
                      r.push.apply(r, n)
                  }
                  return r
                }
                function b(t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}
                    e % 2
                      ? y(Object(r), !0).forEach(function (e) {
                          T(t, e, r[e])
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                      : y(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                  }
                  return t
                }
                function w(t) {
                  return (
                    (function (t) {
                      if (Array.isArray(t)) return x(t)
                    })(t) ||
                    (function (t) {
                      if (('undefined' != typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator'])
                        return Array.from(t)
                    })(t) ||
                    (function (t, e) {
                      if (t) {
                        if ('string' == typeof t) return x(t, e)
                        var r = Object.prototype.toString.call(t).slice(8, -1)
                        return (
                          'Object' === r && t.constructor && (r = t.constructor.name),
                          'Map' === r || 'Set' === r
                            ? Array.from(t)
                            : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? x(t, e)
                            : void 0
                        )
                      }
                    })(t) ||
                    (function () {
                      throw new TypeError(
                        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      )
                    })()
                  )
                }
                function x(t, e) {
                  ;(null == e || e > t.length) && (e = t.length)
                  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
                  return n
                }
                function T(t, e, r) {
                  return (
                    (e = E(e)) in t
                      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                      : (t[e] = r),
                    t
                  )
                }
                function E(t) {
                  var e = (function (t) {
                    if ('object' !== m(t) || null === t) return t
                    var e = t[Symbol.toPrimitive]
                    if (void 0 !== e) {
                      var r = e.call(t, 'string')
                      if ('object' !== m(r)) return r
                      throw new TypeError('@@toPrimitive must return a primitive value.')
                    }
                    return String(t)
                  })(t)
                  return 'symbol' === m(e) ? e : String(e)
                }
                const k = (function () {
                  function r(n, m) {
                    var y = this
                    if (
                      ((function (t, e) {
                        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                      })(this, r),
                      T(this, 'state', {
                        cursorAnimation: null,
                        lastFrameTime: null,
                        pauseUntil: null,
                        eventQueue: [],
                        eventLoop: null,
                        eventLoopPaused: !1,
                        reverseCalledEvents: [],
                        calledEvents: [],
                        visibleNodes: [],
                        initialOptions: null,
                        elements: {
                          container: null,
                          wrapper: document.createElement('span'),
                          cursor: document.createElement('span'),
                        },
                      }),
                      T(this, 'options', {
                        strings: null,
                        cursor: '|',
                        delay: 'natural',
                        pauseFor: 1500,
                        deleteSpeed: 'natural',
                        loop: !1,
                        autoStart: !1,
                        devMode: !1,
                        skipAddStyles: !1,
                        wrapperClassName: 'Typewriter__wrapper',
                        cursorClassName: 'Typewriter__cursor',
                        stringSplitter: null,
                        onCreateTextNode: null,
                        onRemoveNode: null,
                      }),
                      T(this, 'setupWrapperElement', function () {
                        y.state.elements.container &&
                          ((y.state.elements.wrapper.className = y.options.wrapperClassName),
                          (y.state.elements.cursor.className = y.options.cursorClassName),
                          (y.state.elements.cursor.innerHTML = y.options.cursor),
                          (y.state.elements.container.innerHTML = ''),
                          y.state.elements.container.appendChild(y.state.elements.wrapper),
                          y.state.elements.container.appendChild(y.state.elements.cursor))
                      }),
                      T(this, 'start', function () {
                        return (y.state.eventLoopPaused = !1), y.runEventLoop(), y
                      }),
                      T(this, 'pause', function () {
                        return (y.state.eventLoopPaused = !0), y
                      }),
                      T(this, 'stop', function () {
                        return y.state.eventLoop && ((0, t.cancel)(y.state.eventLoop), (y.state.eventLoop = null)), y
                      }),
                      T(this, 'pauseFor', function (t) {
                        return y.addEventToQueue(c, { ms: t }), y
                      }),
                      T(this, 'typeOutAllStrings', function () {
                        return 'string' == typeof y.options.strings
                          ? (y.typeString(y.options.strings).pauseFor(y.options.pauseFor), y)
                          : (y.options.strings.forEach(function (t) {
                              y.typeString(t).pauseFor(y.options.pauseFor).deleteAll(y.options.deleteSpeed)
                            }),
                            y)
                      }),
                      T(this, 'typeString', function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                        if (i(t)) return y.typeOutHTMLString(t, e)
                        if (t) {
                          var r = (y.options || {}).stringSplitter,
                            n = 'function' == typeof r ? r(t) : t.split('')
                          y.typeCharacters(n, e)
                        }
                        return y
                      }),
                      T(this, 'pasteString', function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                        return i(t)
                          ? y.typeOutHTMLString(t, e, !0)
                          : (t && y.addEventToQueue(_, { character: t, node: e }), y)
                      }),
                      T(this, 'typeOutHTMLString', function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                          r = arguments.length > 2 ? arguments[2] : void 0,
                          n = (function (t) {
                            var e = document.createElement('div')
                            return (e.innerHTML = t), e.childNodes
                          })(t)
                        if (n.length > 0)
                          for (var i = 0; i < n.length; i++) {
                            var s = n[i],
                              o = s.innerHTML
                            s && 3 !== s.nodeType
                              ? ((s.innerHTML = ''),
                                y.addEventToQueue(h, { node: s, parentNode: e }),
                                r ? y.pasteString(o, s) : y.typeString(o, s))
                              : s.textContent && (r ? y.pasteString(s.textContent, e) : y.typeString(s.textContent, e))
                          }
                        return y
                      }),
                      T(this, 'deleteAll', function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'natural'
                        return y.addEventToQueue(u, { speed: t }), y
                      }),
                      T(this, 'changeDeleteSpeed', function (t) {
                        if (!t) throw new Error('Must provide new delete speed')
                        return y.addEventToQueue(p, { speed: t }), y
                      }),
                      T(this, 'changeDelay', function (t) {
                        if (!t) throw new Error('Must provide new delay')
                        return y.addEventToQueue(d, { delay: t }), y
                      }),
                      T(this, 'changeCursor', function (t) {
                        if (!t) throw new Error('Must provide new cursor')
                        return y.addEventToQueue(g, { cursor: t }), y
                      }),
                      T(this, 'deleteChars', function (t) {
                        if (!t) throw new Error('Must provide amount of characters to delete')
                        for (var e = 0; e < t; e++) y.addEventToQueue(a)
                        return y
                      }),
                      T(this, 'callFunction', function (t, e) {
                        if (!t || 'function' != typeof t) throw new Error('Callback must be a function')
                        return y.addEventToQueue(f, { cb: t, thisArg: e }), y
                      }),
                      T(this, 'typeCharacters', function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                        if (!t || !Array.isArray(t)) throw new Error('Characters must be an array')
                        return (
                          t.forEach(function (t) {
                            y.addEventToQueue(o, { character: t, node: e })
                          }),
                          y
                        )
                      }),
                      T(this, 'removeCharacters', function (t) {
                        if (!t || !Array.isArray(t)) throw new Error('Characters must be an array')
                        return (
                          t.forEach(function () {
                            y.addEventToQueue(a)
                          }),
                          y
                        )
                      }),
                      T(this, 'addEventToQueue', function (t, e) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                        return y.addEventToStateProperty(t, e, r, 'eventQueue')
                      }),
                      T(this, 'addReverseCalledEvent', function (t, e) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                        return y.options.loop ? y.addEventToStateProperty(t, e, r, 'reverseCalledEvents') : y
                      }),
                      T(this, 'addEventToStateProperty', function (t, e) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                          n = arguments.length > 3 ? arguments[3] : void 0,
                          i = { eventName: t, eventArgs: e || {} }
                        return (y.state[n] = r ? [i].concat(w(y.state[n])) : [].concat(w(y.state[n]), [i])), y
                      }),
                      T(this, 'runEventLoop', function () {
                        y.state.lastFrameTime || (y.state.lastFrameTime = Date.now())
                        var t = Date.now(),
                          r = t - y.state.lastFrameTime
                        if (!y.state.eventQueue.length) {
                          if (!y.options.loop) return
                          ;(y.state.eventQueue = w(y.state.calledEvents)),
                            (y.state.calledEvents = []),
                            (y.options = b({}, y.state.initialOptions))
                        }
                        if (((y.state.eventLoop = e()(y.runEventLoop)), !y.state.eventLoopPaused)) {
                          if (y.state.pauseUntil) {
                            if (t < y.state.pauseUntil) return
                            y.state.pauseUntil = null
                          }
                          var n,
                            i = w(y.state.eventQueue),
                            m = i.shift()
                          if (
                            !(
                              r <=
                              (n =
                                m.eventName === l || m.eventName === a
                                  ? 'natural' === y.options.deleteSpeed
                                    ? s(40, 80)
                                    : y.options.deleteSpeed
                                  : 'natural' === y.options.delay
                                  ? s(120, 160)
                                  : y.options.delay)
                            )
                          ) {
                            var x = m.eventName,
                              T = m.eventArgs
                            switch ((y.logInDevMode({ currentEvent: m, state: y.state, delay: n }), x)) {
                              case _:
                              case o:
                                var E = T.character,
                                  k = T.node,
                                  C = document.createTextNode(E),
                                  O = C
                                y.options.onCreateTextNode &&
                                  'function' == typeof y.options.onCreateTextNode &&
                                  (O = y.options.onCreateTextNode(E, C)),
                                  O && (k ? k.appendChild(O) : y.state.elements.wrapper.appendChild(O)),
                                  (y.state.visibleNodes = [].concat(w(y.state.visibleNodes), [
                                    { type: 'TEXT_NODE', character: E, node: O },
                                  ]))
                                break
                              case a:
                                i.unshift({ eventName: l, eventArgs: { removingCharacterNode: !0 } })
                                break
                              case c:
                                var M = m.eventArgs.ms
                                y.state.pauseUntil = Date.now() + parseInt(M)
                                break
                              case f:
                                var S = m.eventArgs,
                                  A = S.cb,
                                  P = S.thisArg
                                A.call(P, { elements: y.state.elements })
                                break
                              case h:
                                var D = m.eventArgs,
                                  R = D.node,
                                  N = D.parentNode
                                N ? N.appendChild(R) : y.state.elements.wrapper.appendChild(R),
                                  (y.state.visibleNodes = [].concat(w(y.state.visibleNodes), [
                                    { type: v, node: R, parentNode: N || y.state.elements.wrapper },
                                  ]))
                                break
                              case u:
                                var z = y.state.visibleNodes,
                                  F = T.speed,
                                  L = []
                                F && L.push({ eventName: p, eventArgs: { speed: F, temp: !0 } })
                                for (var I = 0, B = z.length; I < B; I++)
                                  L.push({ eventName: l, eventArgs: { removingCharacterNode: !1 } })
                                F && L.push({ eventName: p, eventArgs: { speed: y.options.deleteSpeed, temp: !0 } }),
                                  i.unshift.apply(i, L)
                                break
                              case l:
                                var Y = m.eventArgs.removingCharacterNode
                                if (y.state.visibleNodes.length) {
                                  var X = y.state.visibleNodes.pop(),
                                    H = X.type,
                                    U = X.node,
                                    j = X.character
                                  y.options.onRemoveNode &&
                                    'function' == typeof y.options.onRemoveNode &&
                                    y.options.onRemoveNode({ node: U, character: j }),
                                    U && U.parentNode.removeChild(U),
                                    H === v && Y && i.unshift({ eventName: l, eventArgs: {} })
                                }
                                break
                              case p:
                                y.options.deleteSpeed = m.eventArgs.speed
                                break
                              case d:
                                y.options.delay = m.eventArgs.delay
                                break
                              case g:
                                ;(y.options.cursor = m.eventArgs.cursor),
                                  (y.state.elements.cursor.innerHTML = m.eventArgs.cursor)
                            }
                            y.options.loop &&
                              (m.eventName === l ||
                                (m.eventArgs && m.eventArgs.temp) ||
                                (y.state.calledEvents = [].concat(w(y.state.calledEvents), [m]))),
                              (y.state.eventQueue = i),
                              (y.state.lastFrameTime = t)
                          }
                        }
                      }),
                      n)
                    )
                      if ('string' == typeof n) {
                        var x = document.querySelector(n)
                        if (!x) throw new Error('Could not find container element')
                        this.state.elements.container = x
                      } else this.state.elements.container = n
                    m && (this.options = b(b({}, this.options), m)),
                      (this.state.initialOptions = b({}, this.options)),
                      this.init()
                  }
                  var n, m
                  return (
                    (n = r),
                    (m = [
                      {
                        key: 'init',
                        value: function () {
                          var t
                          this.setupWrapperElement(),
                            this.addEventToQueue(g, { cursor: this.options.cursor }, !0),
                            this.addEventToQueue(u, null, !0),
                            !window ||
                              window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                              this.options.skipAddStyles ||
                              ((t = document.createElement('style')).appendChild(
                                document.createTextNode(
                                  '.Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}'
                                )
                              ),
                              document.head.appendChild(t),
                              (window.___TYPEWRITER_JS_STYLES_ADDED___ = !0)),
                            !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start()
                        },
                      },
                      {
                        key: 'logInDevMode',
                        value: function (t) {
                          this.options.devMode && console.log(t)
                        },
                      },
                    ]) &&
                      (function (t, e) {
                        for (var r = 0; r < e.length; r++) {
                          var n = e[r]
                          ;(n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            'value' in n && (n.writable = !0),
                            Object.defineProperty(t, E(n.key), n)
                        }
                      })(n.prototype, m),
                    Object.defineProperty(n, 'prototype', { writable: !1 }),
                    r
                  )
                })()
              })(),
              n.default
            )
          })()),
        (t.exports = e())
    },
  },
])

'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [2634],
  {
    34661: (t, e, o) => {
      o.d(e, { A: () => c, t: () => l })
      var r = o(78478),
        s = o(44586),
        n = o(66588),
        a = o(21432),
        i = o(74848)
      const l = (t, e) => {
        const o = window.location.pathname
        let r = window.localStorage.getItem('docs-preferred-version-default')
        if (o === t.baseUrl && r) return 'current' === r ? 'latest' : r
        if (o.includes('/docs/next')) return 'latest'
        const s = e.find((t) => t.isLast),
          n = e.find((t) => o.includes(t.name))
        return n ? n.name : s.name
      }
      const c = (t) => {
        let { children: e, replaced: o = 'latest', isArchive: c = !1, className: d = 'language-bash' } = t
        const { siteConfig: w } = (0, s.A)(),
          { versions: h } = (0, n.P_)('docusaurus-plugin-content-docs')
        return (0, i.jsx)(r.A, {
          children: () => {
            const t = l(w, h),
              r = c
                ? e.replace(
                    o,
                    (function (t) {
                      return 'latest' === t ? 'refs/heads/master' : `refs/tags/v${t}`
                    })(t)
                  )
                : 'latest' === t
                ? e
                : e.replace(o, 'v' + t)
            return (0, i.jsx)(a.A, { className: d, children: r })
          },
        })
      }
    },
    50900: (t, e, o) => {
      o.r(e), o.d(e, { default: () => b })
      var r = o(78478),
        s = o(5260),
        n = o(28774),
        a = o(21312),
        i = (o(86025), o(44586)),
        l = o(10781),
        c = o(34164),
        d = o(67083),
        w = o(74183),
        h = o(96540)
      var u = o(74848)
      o(21432)
      var p = o(95293),
        x = o(15514),
        m = o.n(x)
      const g = 10
      function f(t) {
        return 'dark' !== t ? '#333' : '#eee'
      }
      function y(t) {
        return 'dark' !== t ? '#eee' : '#333'
      }
      function $() {
        const t = (0, h.useRef)(),
          e = (0, h.useRef)(),
          o = (0, h.useRef)(),
          { colorMode: r } = (0, p.G)()
        return (
          (0, h.useLayoutEffect)(() => {
            const s = d.os.context(() => {
              const s = []
              let n = 0
              for (let t = 0; t < 10; t++)
                for (let i = 0; i < g; i++) {
                  const l = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                  d.os.set(l, { attr: { class: 'path path-' + n, fill: 'none', stroke: y(r), 'stroke-width': 0.3 } }),
                    e.current.appendChild(l)
                  const c = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
                    w = document.createElementNS('http://www.w3.org/2000/svg', 'circle'),
                    h = { x: (t % 2 ? 0 : 30) + 30 * i * 2, y: 30 * t }
                  s.push(h), d.os.set(c, { attr: { class: 'dot dot-' + n }, ...h })
                  const u = ((a = r), Math.random() > 0.65 ? '#f25c7c' : Math.random() < 0.35 ? '#10a6fa' : f(a))
                  d.os.set(w, {
                    attr: { class: 'dot-inner', r: 1, fill: u, stroke: u, 'stroke-opacity': 0.5, 'stroke-width': 1 },
                  }),
                    c.appendChild(w),
                    o.current.appendChild(c),
                    n++
                }
              var a
              d.os.to('.dot', {
                duration: 3,
                x: '+=6',
                y: '-=12',
                ease: 'sine.inOut',
                stagger: { grid: [10, g], amount: 1, from: 'random', repeat: -1, yoyo: !0 },
                onUpdate: function () {
                  let t = 0
                  for (let e = 0; e < s.length; e++)
                    if (
                      ((s[e] = { x: d.os.getProperty('.dot-' + e, 'x'), y: d.os.getProperty('.dot-' + e, 'y') }),
                      e % g == 0 && t++,
                      t < 10)
                    )
                      if ((e % g == 0 && t % 2 == 0) || (e % g == 9 && t % 2 == 1))
                        d.os.set('.path-' + e, {
                          attr: { d: 'M' + s[e].x + ',' + s[e].y + ' L' + s[e + g].x + ',' + s[e + g].y },
                        })
                      else if (t % 2 == 1) {
                        const t = `M ${s[e + g].x} ${s[e + g].y}`
                        let o = ` L ${s[e].x} ${s[e].y}`,
                          r = ` L ${s[e + g + 1].x} ${s[e + g + 1].y}`
                        const n = t + o + r
                        e === u && i
                          ? ((o = ` C ${s[e + g].x} ${s[e + g].y - c * l}, ${s[e].x} ${s[e].y + w * l}, ${s[e].x} ${
                              s[e].y
                            }`),
                            (r = ` C ${s[e].x + w * l} ${s[e].y}, ${s[e + g + 1].x - c * l} ${s[e + g + 1].y}, ${
                              s[e + g + 1].x
                            } ${s[e + g + 1].y}`),
                            d.os.set('.path-' + e, { attr: { d: t + o + r, 'stroke-dasharray': '30 ' + 10 * l } }))
                          : d.os.set('.path-' + e, { attr: { d: n } })
                      } else {
                        const t = `M ${s[e + g - 1].x} ${s[e + g - 1].y}`
                        let o = ` L ${s[e].x} ${s[e].y}`,
                          r = ` L ${s[e + g].x} ${s[e + g].y}`
                        const n = t + o + r
                        e === u - g && i
                          ? ((r = ` C ${s[e].x + c * l} ${s[e].y}, ${s[e + g].x - w * l} ${s[e + g].y}, ${s[e + g].x} ${
                              s[e + g].y
                            }`),
                            d.os.set('.path-' + e, { attr: { d: t + o + r, 'stroke-dasharray': '30 ' + 10 * l } }))
                          : e === u - g + 1 && i
                          ? ((o = ` C ${s[e + g - 1].x} ${s[e + g - 1].y - w * l}, ${s[e].x} ${s[e].y + c * l}, ${
                              s[e].x
                            } ${s[e].y}`),
                            d.os.set('.path-' + e, { attr: { d: t + o + r, 'stroke-dasharray': '30 ' + 10 * l } }))
                          : (e !== u + g && e !== u + g + 1) || !i
                          ? d.os.set('.path-' + e, { attr: { d: n } })
                          : d.os.set('.path-' + e, { attr: { d: n, 'stroke-dasharray': '30 ' + 10 * l } })
                      }
                },
              })
              let i = !1,
                l = 0,
                c = 5,
                w = 0,
                h = [3, 4, 5],
                u = 64,
                p = [64]
              function x() {
                if (window.matchMedia('(min-width: 768px)').matches && !i) {
                  ;(w = h[Math.floor(Math.random() * h.length)]),
                    (u = p[Math.floor(Math.random() * p.length)]),
                    (i = !0)
                  const t = document.querySelector(`.dot-${u}`).getBoundingClientRect(),
                    e = t.top + 100,
                    o = t.left - 250
                  d.os.fromTo(
                    '.mesh-text',
                    { top: e, left: o },
                    { duration: 1, opacity: 1, top: e - 105, left: o + 5 }
                  ),
                    new (m())('.mesh-text', { delay: 50 })
                      .typeString('Monitor resistance')
                      .pauseFor(500)
                      .deleteAll()
                      .typeString('Economic Impact Assessment')
                      .pauseFor(2e3)
                      .deleteAll()
                      .typeString('Predict Antimicrobial Activity')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('Fund new antibiotics')
                      .pauseFor(1500)
                      .callFunction(() => {
                        d.os.fromTo('.mesh-text', { top: e - 50, left: o + 25 }, { opacity: 0, top: e, left: o + 25 })
                      })
                      .start()
                  const r = d.os.to(`.dot-${u}`, {
                      duration: 2,
                      scale: 5,
                      ease: 'back.inOut(3)',
                      repeat: 7,
                      yoyo: !0,
                      onUpdate: function () {
                        l = r.time()
                      },
                      onComplete: () => (i = !1),
                    }),
                    s = document.querySelector(`.dot-${u}`)
                  for (let a = 0; a < 12; a++) {
                    const t = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
                    d.os.set(t, {
                      attr: {
                        class: `wave wave-${a}`,
                        r: 0,
                        fill: 'none',
                        stroke: d.os.getProperty(`.dot-${u} > .dot-inner`, 'fill'),
                        'stroke-opacity': 0.5,
                        'stroke-width': 0.3,
                      },
                    }),
                      s.appendChild(t)
                  }
                  const n = d.os.timeline({
                    onComplete: function () {
                      document.querySelectorAll('.wave').forEach((t) => t.remove())
                    },
                  })
                  for (let a = 0; a < 12; a++)
                    n.to(`.wave-${a}`, {
                      duration: 1,
                      attr: { r: 10, 'stroke-opacity': 0, 'stroke-width': 0 },
                      ease: 'sine.inOut',
                    })
                }
              }
              t.current.addEventListener('mousemove', (t) => {
                const e = Math.max(45 * (1 - t.clientY / window.innerHeight), 30),
                  o = Math.max(-18 * (1 - t.clientX / window.innerWidth), -9)
                d.os.to('.mesh', { duration: 1.5, rotationX: e, rotationY: o })
              }),
                t.current.addEventListener('click', x),
                setTimeout(() => {
                  x()
                }, 1500)
            }, t)
            return (
              (window.gsapCtx = s),
              () => {
                s.kill()
              }
            )
          }, []),
          ((t, e) => {
            const o = (0, h.useRef)(!1)
            ;(0, h.useEffect)(() => {
              o.current ? t() : (o.current = !0)
            }, e)
          })(() => {
            for (let t = 0; t < 100; t++) {
              const e = d.os.getProperty(`.dot-${t} > .dot-inner`, 'fill')
              if ('rgb(16, 166, 250)' !== e && 'rgb(242, 92, 124)' !== e) {
                const e = f(r)
                d.os.set(`.dot-${t} > .dot-inner`, { attr: { fill: e, stroke: e } })
              }
            }
            d.os.set('.path', { attr: { stroke: y(r) } })
          }, [r]),
          (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsxs)('svg', {
                ref: t,
                className: 'mesh tw-absolute tw-top-[-10%] 2xl:tw-left-[-100px] tw-w-[1024px] lg:tw-w-full tw-h-[125%]',
                style: { transform: 'rotate3d(3, -.6, -1, 30deg)' },
                viewBox: '0 0 500 250',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [(0, u.jsx)('g', { ref: e }), (0, u.jsx)('g', { ref: o })],
              }),
              (0, u.jsx)('div', {
                className: 'mesh-text tw-absolute tw-px-2 tw-py-1 tw-bg-primary tw-text-white tw-rounded tw-opacity-0',
              }),
            ],
          })
        )
      }
      o(34661)
      const v = 'heroTitle_qg2I'
      d.os.registerPlugin(w.u)
      const b = function () {
        const { siteConfig: t } = (0, i.A)()
        return (
          (0, h.useEffect)(() => {
            document.querySelector('.navbar__inner').classList.add('tw-container', 'tw-mx-auto'),
              d.os.from('.scroll-to-display', {
                duration: 1,
                opacity: 0,
                y: 50,
                stagger: 0.25,
                scrollTrigger: { trigger: '.scroll-to-display', toggleActions: 'restart none none none' },
              }),
              d.os.from('.scroll-to-display-x', {
                duration: 1,
                opacity: 0,
                x: 0,
                y: 100,
                stagger: 0.25,
                scrollTrigger: { trigger: '.scroll-to-display-x', toggleActions: 'restart none none none' },
              })
          }, []),
          (0, u.jsxs)(l.A, {
            description: '',
            children: [
              (0, u.jsx)(s.A, { children: (0, u.jsxs)('title', { children: ['MicroDAO: ', t.tagline] }) }),
              (0, u.jsx)('main', {
                children: (0, u.jsxs)('div', {
                  className: 'hero tw-relative tw-h-[768px] tw-pt-0 tw-overflow-hidden',
                  children: [
                    (0, u.jsx)(r.A, { children: () => (0, u.jsx)($, {}) }),
                    (0, u.jsx)('div', {
                      className: 'tw-container tw-mx-auto tw-z-10',
                      children: (0, u.jsx)('div', {
                        className: 'tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between lg:tw-items-center',
                        children: (0, u.jsxs)('div', {
                          className: 'tw-flex-[.8] 2xl:tw-flex-[.6] tw-p-6 lg:tw-p-3',
                          children: [
                            (0, u.jsxs)('h1', {
                              className: (0, c.$)(
                                'tw-inline-block tw-text-5xl xl:tw-text-6xl tw-text-left tw-rounded-2xl tw-backdrop-blur-sm lg:tw-backdrop-blur',
                                v
                              ),
                              children: [
                                (0, u.jsx)('span', { children: 'Funding the' }),
                                (0, u.jsx)('br', {}),
                                'Next Generation of',
                                (0, u.jsx)('br', {}),
                                (0, u.jsx)('span', {
                                  children: 'AMR Solutions (Antimicrobials, Vaccines & Diagnostics)',
                                }),
                              ],
                            }),
                            (0, u.jsx)('p', {
                              className:
                                'lg:tw-text-lg tw-font-medium tw-rounded-2xl tw-backdrop-blur-sm lg:tw-backdrop-blur',
                              children: (0, u.jsx)(a.A, { id: 'home.description', children: '' }),
                            }),
                            (0, u.jsxs)('div', {
                              className: 'tw-flex tw-gap-3',
                              children: [
                                (0, u.jsx)(n.A, {
                                  to: 'https://whitepaper.microdao.bio',
                                  className: 'tw-btn tw-btn-primary hover:tw-text-white hover:-tw-translate-y-[3px]',
                                  children: 'Read White Paper',
                                }),
                                (0, u.jsx)(n.A, {
                                  className:
                                    'tw-btn tw-btn-neutral tw-gap-0 dark:tw-glass hover:tw-text-white hover:-tw-translate-y-[3px]',
                                  children: (0, u.jsxs)('a', {
                                    href: 'mailto:varun@microdao.bio?&subject=Work With%20MicroDAO&body=Hi, I am interested in working with the team %20at%20microDAO%20My background is____%20a%and I would like to help with %20running events/governance%20/dealflow/operations',
                                    target: '_top',
                                    children: [
                                      ' ',
                                      (0, u.jsx)('span', {
                                        style: { textDecoration: 'none', color: 'white' },
                                        children: 'Join Us',
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        )
      }
    },
  },
])

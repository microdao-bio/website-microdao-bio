'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [7098],
  {
    31723: (e, n, s) => {
      s.r(n), s.d(n, { default: () => h })
      s(96540)
      var r = s(1003)
      function o(e, n) {
        return `docs-${e}-${n}`
      }
      var t = s(23025),
        c = s(22831),
        i = s(41463),
        a = s(74848)
      function u(e) {
        const { version: n } = e
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i.A, { version: n.version, tag: o(n.pluginId, n.version) }),
            (0, a.jsx)(r.be, {
              children: n.noIndex && (0, a.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }),
            }),
          ],
        })
      }
      function l(e) {
        const { version: n, route: s } = e
        return (0, a.jsx)(r.e3, {
          className: n.className,
          children: (0, a.jsx)(t.n, { version: n, children: (0, c.v)(s.routes) }),
        })
      }
      function h(e) {
        return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(u, { ...e }), (0, a.jsx)(l, { ...e })] })
      }
    },
  },
])

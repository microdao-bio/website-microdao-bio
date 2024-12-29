'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [8413],
  {
    96785: (e, s, t) => {
      t.r(s),
        t.d(s, {
          assets: () => a,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => c,
          metadata: () => o,
          toc: () => h,
        })
      const o = JSON.parse(
        '{"id":"overview","title":"Chaos Mesh Overview","description":"This document describes the concepts, use cases, core strengths, and the architecture of Chaos Mesh.","source":"@site/docs/overview.md","sourceDirName":".","slug":"/","permalink":"/docs/next/","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/overview.md","tags":[],"version":"current","frontMatter":{"slug":"/","title":"Chaos Mesh Overview"},"sidebar":"docs","next":{"title":"Basic Features","permalink":"/docs/next/basic-features"}}'
      )
      var n = t(74848),
        r = t(28453)
      const c = { slug: '/', title: 'Chaos Mesh Overview' },
        i = void 0,
        a = {},
        h = [
          { value: 'Chaos Mesh Overview', id: 'chaos-mesh-overview', level: 2 },
          { value: 'Core strengths', id: 'core-strengths', level: 2 },
        ]
      function d(e) {
        const s = { h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(s.p, {
              children:
                'This document describes the concepts, use cases, core strengths, and the architecture of Chaos Mesh.',
            }),
            '\n',
            (0, n.jsx)(s.h2, { id: 'chaos-mesh-overview', children: 'Chaos Mesh Overview' }),
            '\n',
            (0, n.jsx)(s.h2, { id: 'core-strengths', children: 'Core strengths' }),
          ],
        })
      }
      function u(e = {}) {
        const { wrapper: s } = { ...(0, r.R)(), ...e.components }
        return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(d, { ...e }) }) : d(e)
      }
    },
    28453: (e, s, t) => {
      t.d(s, { R: () => c, x: () => i })
      var o = t(96540)
      const n = {},
        r = o.createContext(n)
      function c(e) {
        const s = o.useContext(r)
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function i(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : c(e.components)),
          o.createElement(r.Provider, { value: s }, e.children)
        )
      }
    },
  },
])

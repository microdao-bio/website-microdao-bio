'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [3595],
  {
    5785: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => a,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => c,
          metadata: () => o,
          toc: () => u,
        })
      const o = JSON.parse(
        '{"id":"overview","title":"Chaos Mesh Overview","description":"This document describes the concepts, use cases, core strengths, and the architecture of Chaos Mesh.","source":"@site/versioned_docs/version-2.4.3/overview.md","sourceDirName":".","slug":"/","permalink":"/docs/2.4.3/","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.4.3/overview.md","tags":[],"version":"2.4.3","frontMatter":{"slug":"/","title":"Chaos Mesh Overview"},"sidebar":"docs","next":{"title":"Basic Features","permalink":"/docs/2.4.3/basic-features"}}'
      )
      var n = s(74848),
        r = s(28453)
      const c = { slug: '/', title: 'Chaos Mesh Overview' },
        i = void 0,
        a = {},
        u = []
      function d(e) {
        const t = { p: 'p', ...(0, r.R)(), ...e.components }
        return (0, n.jsx)(t.p, {
          children:
            'This document describes the concepts, use cases, core strengths, and the architecture of Chaos Mesh.',
        })
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components }
        return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(d, { ...e }) }) : d(e)
      }
    },
    28453: (e, t, s) => {
      s.d(t, { R: () => c, x: () => i })
      var o = s(96540)
      const n = {},
        r = o.createContext(n)
      function c(e) {
        const t = o.useContext(r)
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function i(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : c(e.components)),
          o.createElement(r.Provider, { value: t }, e.children)
        )
      }
    },
  },
])

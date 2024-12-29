'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [9818],
  {
    73796: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => i,
          contentTitle: () => a,
          default: () => d,
          frontMatter: () => c,
          metadata: () => o,
          toc: () => l,
        })
      const o = JSON.parse(
        '{"id":"release-0.0.8","title":"0.0.8 release notes","description":"TODO","source":"@site/docs/release-0.0.8.md","sourceDirName":".","slug":"/release-0.0.8","permalink":"/docs/next/release-0.0.8","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/release-0.0.8.md","tags":[],"version":"current","frontMatter":{"title":"0.0.8 release notes"}}'
      )
      var s = n(74848),
        r = n(28453)
      const c = { title: '0.0.8 release notes' },
        a = void 0,
        i = {},
        l = [{ value: 'TODO', id: 'todo', level: 2 }]
      function u(e) {
        const t = { h2: 'h2', ...(0, r.R)(), ...e.components }
        return (0, s.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function d(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e)
      }
    },
    28453: (e, t, n) => {
      n.d(t, { R: () => c, x: () => a })
      var o = n(96540)
      const s = {},
        r = o.createContext(s)
      function c(e) {
        const t = o.useContext(r)
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function a(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : c(e.components)),
          o.createElement(r.Provider, { value: t }, e.children)
        )
      }
    },
  },
])

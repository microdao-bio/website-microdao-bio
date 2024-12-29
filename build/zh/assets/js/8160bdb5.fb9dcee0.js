'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [9661],
  {
    79659: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => u,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => r,
          metadata: () => o,
          toc: () => a,
        })
      const o = JSON.parse(
        '{"id":"rust-client","title":"Rust","description":"TODO","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/rust-client.md","sourceDirName":".","slug":"/rust-client","permalink":"/zh/docs/next/rust-client","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/rust-client.md","tags":[],"version":"current","frontMatter":{"title":"Rust"}}'
      )
      var s = n(74848),
        c = n(28453)
      const r = { title: 'Rust' },
        i = void 0,
        u = {},
        a = [{ value: 'TODO', id: 'todo', level: 2 }]
      function l(t) {
        const e = { h2: 'h2', ...(0, c.R)(), ...t.components }
        return (0, s.jsx)(e.h2, { id: 'todo', children: 'TODO' })
      }
      function d(t = {}) {
        const { wrapper: e } = { ...(0, c.R)(), ...t.components }
        return e ? (0, s.jsx)(e, { ...t, children: (0, s.jsx)(l, { ...t }) }) : l(t)
      }
    },
    28453: (t, e, n) => {
      n.d(e, { R: () => r, x: () => i })
      var o = n(96540)
      const s = {},
        c = o.createContext(s)
      function r(t) {
        const e = o.useContext(c)
        return o.useMemo(
          function () {
            return 'function' == typeof t ? t(e) : { ...e, ...t }
          },
          [e, t]
        )
      }
      function i(t) {
        let e
        return (
          (e = t.disableParentContext
            ? 'function' == typeof t.components
              ? t.components(s)
              : t.components || s
            : r(t.components)),
          o.createElement(c.Provider, { value: e }, t.children)
        )
      }
    },
  },
])

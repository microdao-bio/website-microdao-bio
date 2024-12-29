'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [1592],
  {
    84475: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => u,
          contentTitle: () => c,
          default: () => l,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => a,
        })
      const o = JSON.parse(
        '{"id":"rust-client","title":"Rust","description":"TODO","source":"@site/versioned_docs/version-2.6.2/rust-client.md","sourceDirName":".","slug":"/rust-client","permalink":"/docs/rust-client","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/rust-client.md","tags":[],"version":"2.6.2","frontMatter":{"title":"Rust"}}'
      )
      var s = n(74848),
        r = n(28453)
      const i = { title: 'Rust' },
        c = void 0,
        u = {},
        a = [{ value: 'TODO', id: 'todo', level: 2 }]
      function d(t) {
        const e = { h2: 'h2', ...(0, r.R)(), ...t.components }
        return (0, s.jsx)(e.h2, { id: 'todo', children: 'TODO' })
      }
      function l(t = {}) {
        const { wrapper: e } = { ...(0, r.R)(), ...t.components }
        return e ? (0, s.jsx)(e, { ...t, children: (0, s.jsx)(d, { ...t }) }) : d(t)
      }
    },
    28453: (t, e, n) => {
      n.d(e, { R: () => i, x: () => c })
      var o = n(96540)
      const s = {},
        r = o.createContext(s)
      function i(t) {
        const e = o.useContext(r)
        return o.useMemo(
          function () {
            return 'function' == typeof t ? t(e) : { ...e, ...t }
          },
          [e, t]
        )
      }
      function c(t) {
        let e
        return (
          (e = t.disableParentContext
            ? 'function' == typeof t.components
              ? t.components(s)
              : t.components || s
            : i(t.components)),
          o.createElement(r.Provider, { value: e }, t.children)
        )
      }
    },
  },
])
